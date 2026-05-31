(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var el={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Yp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let v=(c&15)<<2|h>>6,S=h&63;u||(S=64,o||(v=64)),r.push(t[f],t[p],t[v],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Zp;const v=i<<2|c>>4;if(r.push(v),h!==64){const S=c<<4&240|h>>2;if(r.push(S),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(n){const e=zh(n);return Gh.encodeByteArray(e,!0)},Ii=function(n){return eg(n).replace(/\./g,"")},Kh=function(n){try{return Gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ng=()=>tg().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof el>"u")return;const n=el.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kh(n[1]);return e&&JSON.parse(e)},$i=()=>{try{return ng()||rg()||sg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hh=n=>{var e,t;return(t=(e=$i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ig=n=>{const e=Hh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Wh=()=>{var n;return(n=$i())===null||n===void 0?void 0:n.config},Qh=n=>{var e;return(e=$i())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ag(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ii(JSON.stringify(t)),Ii(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function ug(){var n;const e=(n=$i())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const n=_e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jh(){return!ug()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xh(){try{return typeof indexedDB=="object"}catch{return!1}}function mg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="FirebaseError";class ct extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pg,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gg(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ct(s,c,r)}}function gg(n,e){return n.replace(_g,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _g=/\{\$([^}]+)}/g;function yg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ns(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(tl(i)&&tl(o)){if(!ns(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function tl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ur(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Br(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ig(n,e){const t=new vg(n,e);return t.subscribe.bind(t)}class vg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Eg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ko),s.error===void 0&&(s.error=Ko),s.complete===void 0&&(s.complete=Ko);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ko(){}/**
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
 */function me(n){return n&&n._delegate?n._delegate:n}class jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new og;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ag(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tg(n){return n===sn?void 0:n}function Ag(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Rg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Sg=J.INFO,Pg={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Cg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Pg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Sg,this._logHandler=Cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Dg=(n,e)=>e.some(t=>n instanceof t);let nl,rl;function kg(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xg(){return rl||(rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yh=new WeakMap,aa=new WeakMap,Zh=new WeakMap,Ho=new WeakMap,ja=new WeakMap;function Vg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ft(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Yh.set(t,n)}).catch(()=>{}),ja.set(e,n),e}function Ng(n){if(aa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});aa.set(n,e)}let ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return aa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ft(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Og(n){ca=n(ca)}function Lg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Wo(this),e,...t);return Zh.set(r,e.sort?e.sort():[e]),Ft(r)}:xg().includes(n)?function(...e){return n.apply(Wo(this),e),Ft(Yh.get(this))}:function(...e){return Ft(n.apply(Wo(this),e))}}function Mg(n){return typeof n=="function"?Lg(n):(n instanceof IDBTransaction&&Ng(n),Dg(n,kg())?new Proxy(n,ca):n)}function Ft(n){if(n instanceof IDBRequest)return Vg(n);if(Ho.has(n))return Ho.get(n);const e=Mg(n);return e!==n&&(Ho.set(n,e),ja.set(e,n)),e}const Wo=n=>ja.get(n);function Fg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Ft(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ft(o.result),u.oldVersion,u.newVersion,Ft(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Ug=["get","getKey","getAll","getAllKeys","count"],Bg=["put","add","delete","clear"],Qo=new Map;function sl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qo.get(e))return Qo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Bg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ug.includes(t)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return Qo.set(e,i),i}Og(n=>({...n,get:(e,t,r)=>sl(e,t)||n.get(e,t,r),has:(e,t)=>!!sl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ua="@firebase/app",il="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new $a("@firebase/app"),qg="@firebase/app-compat",zg="@firebase/analytics-compat",Gg="@firebase/analytics",Kg="@firebase/app-check-compat",Hg="@firebase/app-check",Wg="@firebase/auth",Qg="@firebase/auth-compat",Jg="@firebase/database",Xg="@firebase/data-connect",Yg="@firebase/database-compat",Zg="@firebase/functions",e_="@firebase/functions-compat",t_="@firebase/installations",n_="@firebase/installations-compat",r_="@firebase/messaging",s_="@firebase/messaging-compat",i_="@firebase/performance",o_="@firebase/performance-compat",a_="@firebase/remote-config",c_="@firebase/remote-config-compat",u_="@firebase/storage",l_="@firebase/storage-compat",h_="@firebase/firestore",d_="@firebase/vertexai-preview",f_="@firebase/firestore-compat",m_="firebase",p_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="[DEFAULT]",g_={[ua]:"fire-core",[qg]:"fire-core-compat",[Gg]:"fire-analytics",[zg]:"fire-analytics-compat",[Hg]:"fire-app-check",[Kg]:"fire-app-check-compat",[Wg]:"fire-auth",[Qg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Xg]:"fire-data-connect",[Yg]:"fire-rtdb-compat",[Zg]:"fire-fn",[e_]:"fire-fn-compat",[t_]:"fire-iid",[n_]:"fire-iid-compat",[r_]:"fire-fcm",[s_]:"fire-fcm-compat",[i_]:"fire-perf",[o_]:"fire-perf-compat",[a_]:"fire-rc",[c_]:"fire-rc-compat",[u_]:"fire-gcs",[l_]:"fire-gcs-compat",[h_]:"fire-fst",[f_]:"fire-fst-compat",[d_]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,__=new Map,ha=new Map;function ol(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gn(n){const e=n.name;if(ha.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;ha.set(e,n);for(const t of vi.values())ol(t,n);for(const t of __.values())ol(t,n);return!0}function ji(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ze(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new gs("app","Firebase",y_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=p_;function ed(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:la,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ut.create("bad-app-name",{appName:String(s)});if(t||(t=Wh()),!t)throw Ut.create("no-options");const i=vi.get(s);if(i){if(ns(t,i.options)&&ns(r,i.config))return i;throw Ut.create("duplicate-app",{appName:s})}const o=new bg(s);for(const u of ha.values())o.addComponent(u);const c=new I_(t,r,o);return vi.set(s,c),c}function td(n=la){const e=vi.get(n);if(!e&&n===la&&Wh())return ed();if(!e)throw Ut.create("no-app",{appName:n});return e}function nt(n,e,t){var r;let s=(r=g_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(c.join(" "));return}gn(new jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const v_="firebase-heartbeat-database",E_=1,rs="firebase-heartbeat-store";let Jo=null;function nd(){return Jo||(Jo=Fg(v_,E_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ut.create("idb-open",{originalErrorMessage:n.message})})),Jo}async function w_(n){try{const t=(await nd()).transaction(rs),r=await t.objectStore(rs).get(rd(n));return await t.done,r}catch(e){if(e instanceof ct)_t.warn(e.message);else{const t=Ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function al(n,e){try{const r=(await nd()).transaction(rs,"readwrite");await r.objectStore(rs).put(e,rd(n)),await r.done}catch(t){if(t instanceof ct)_t.warn(t.message);else{const r=Ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const T_=1024,A_=30*24*60*60*1e3;class b_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new S_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=A_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cl(),{heartbeatsToSend:r,unsentEntries:s}=R_(this._heartbeatsCache.heartbeats),i=Ii(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return _t.warn(t),""}}}function cl(){return new Date().toISOString().substring(0,10)}function R_(n,e=T_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ul(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ul(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class S_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xh()?mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await w_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ul(n){return Ii(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n){gn(new jt("platform-logger",e=>new $g(e),"PRIVATE")),gn(new jt("heartbeat",e=>new b_(e),"PRIVATE")),nt(ua,il,n),nt(ua,il,"esm2017"),nt("fire-js","")}P_("");var C_="firebase",D_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(C_,D_,"app");function qa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function sd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k_=sd,id=new gs("auth","Firebase",sd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new $a("@firebase/auth");function x_(n,...e){Ei.logLevel<=J.WARN&&Ei.warn(`Auth (${Sn}): ${n}`,...e)}function ri(n,...e){Ei.logLevel<=J.ERROR&&Ei.error(`Auth (${Sn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw za(n,...e)}function rt(n,...e){return za(n,...e)}function od(n,e,t){const r=Object.assign(Object.assign({},k_()),{[e]:t});return new gs("auth","Firebase",r).create(e,{appName:n.name})}function gt(n){return od(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function za(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return id.create(n,...e)}function G(n,e,...t){if(!n)throw za(e,...t)}function dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ri(e),new Error(e)}function yt(n,e){n||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function V_(){return ll()==="http:"||ll()==="https:"}function ll(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V_()||hg()||"connection"in navigator)?navigator.onLine:!0}function O_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=cg()||dg()}get(){return N_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,e){yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new ys(3e4,6e4);function vt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Et(n,e,t,r,s={}){return cd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=_s(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return lg()||(h.referrerPolicy="no-referrer"),ad.fetch()(ud(n,n.config.apiHost,t,c),h)})}async function cd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},L_),e);try{const s=new U_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ws(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ws(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ws(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw od(n,f,h);Je(n,f)}}catch(s){if(s instanceof ct)throw s;Je(n,"network-request-failed",{message:String(s)})}}async function Is(n,e,t,r,s={}){const i=await Et(n,e,t,r,s);return"mfaPendingCredential"in i&&Je(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ud(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ga(n.config,s):`${n.config.apiScheme}://${s}`}function F_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),M_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ws(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=rt(n,e,r);return s.customData._tokenResponse=t,s}function hl(n){return n!==void 0&&n.enterprise!==void 0}class B_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $_(n,e){return Et(n,"GET","/v2/recaptchaConfig",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e){return Et(n,"POST","/v1/accounts:delete",e)}async function ld(n,e){return Et(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q_(n,e=!1){const t=me(n),r=await t.getIdToken(e),s=Ka(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hr(Xo(s.auth_time)),issuedAtTime:Hr(Xo(s.iat)),expirationTime:Hr(Xo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xo(n){return Number(n)*1e3}function Ka(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ri("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kh(t);return s?JSON.parse(s):(ri("Failed to decode base64 JWT payload"),null)}catch(s){return ri("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dl(n){const e=Ka(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ct&&z_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function z_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ss(n,ld(t,{idToken:r}));G(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hd(i.providerUserInfo):[],c=H_(n.providerData,o),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new fa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function K_(n){const e=me(n);await wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hd(n){return n.map(e=>{var{providerId:t}=e,r=qa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(n,e){const t=await cd(n,{},async()=>{const r=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=ud(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ad.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Q_(n,e){return Et(n,"POST","/v2/accounts:revokeToken",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=dl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await W_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Kn;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=qa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ss(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q_(this,e)}reload(){return K_(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(gt(this.auth));const e=await this.getIdToken();return await ss(this,j_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,u,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=t.photoURL)!==null&&o!==void 0?o:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:q,isAnonymous:Q,providerData:K,stsTokenManager:w}=t;G(M&&w,e,"internal-error");const _=Kn.fromJSON(this.name,w);G(typeof M=="string",e,"internal-error"),Pt(p,e.name),Pt(v,e.name),G(typeof q=="boolean",e,"internal-error"),G(typeof Q=="boolean",e,"internal-error"),Pt(S,e.name),Pt(D,e.name),Pt(V,e.name),Pt(k,e.name),Pt(z,e.name),Pt($,e.name);const y=new ft({uid:M,auth:e,email:v,emailVerified:q,displayName:p,isAnonymous:Q,photoURL:D,phoneNumber:S,tenantId:V,stsTokenManager:_,createdAt:z,lastLoginAt:$});return K&&Array.isArray(K)&&(y.providerData=K.map(I=>Object.assign({},I))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Kn;s.updateFromServerResponse(t);const i=new ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kn;c.updateFromIdToken(r);const u=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map;function mt(n){yt(n instanceof Function,"Expected a class definition");let e=fl.get(n);return e?(yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dd.type="NONE";const ml=dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n,e,t){return`firebase:${n}:${e}:${t}`}class Hn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=si(this.userKey,s.apiKey,i),this.fullPersistenceKey=si("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hn(mt(ml),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mt(ml);const o=si(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=ft._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Hn(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Hn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yd(e))return"Blackberry";if(Id(e))return"Webos";if(md(e))return"Safari";if((e.includes("chrome/")||pd(e))&&!e.includes("edge/"))return"Chrome";if(_d(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fd(n=_e()){return/firefox\//i.test(n)}function md(n=_e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pd(n=_e()){return/crios\//i.test(n)}function gd(n=_e()){return/iemobile/i.test(n)}function _d(n=_e()){return/android/i.test(n)}function yd(n=_e()){return/blackberry/i.test(n)}function Id(n=_e()){return/webos/i.test(n)}function Ha(n=_e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function J_(n=_e()){var e;return Ha(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X_(){return fg()&&document.documentMode===10}function vd(n=_e()){return Ha(n)||_d(n)||Id(n)||yd(n)||/windows phone/i.test(n)||gd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,e=[]){let t;switch(n){case"Browser":t=pl(_e());break;case"Worker":t=`${pl(_e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sn}/${r}`}/**
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
 */class Y_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Z_(n,e={}){return Et(n,"GET","/v2/passwordPolicy",vt(n,e))}/**
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
 */const ey=6;class ty{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ey,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gl(this),this.idTokenSubscription=new gl(this),this.beforeStateQueue=new Y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ld(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(gt(this));const t=e?me(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z_(this),t=new ty(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Q_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&x_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kt(n){return me(n)}class gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ig(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ry(n){qi=n}function wd(n){return qi.loadJS(n)}function sy(){return qi.recaptchaEnterpriseScript}function iy(){return qi.gapiScript}function oy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ay="recaptcha-enterprise",cy="NO_RECAPTCHA";class uy{constructor(e){this.type=ay,this.auth=Kt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{$_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new B_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;hl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(cy)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&hl(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sy();u.length!==0&&(u+=c),wd(u).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function _l(n,e,t,r=!1){const s=new uy(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ti(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _l(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _l(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n,e){const t=ji(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ns(i,e??{}))return s;Je(s,"already-initialized")}return t.initialize({options:e})}function hy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dy(n,e,t){const r=Kt(n);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Td(e),{host:o,port:c}=fy(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),my()}function Td(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fy(n){const e=Td(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yl(o)}}}function yl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function my(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function py(n,e){return Et(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(n,e){return Is(n,"POST","/v1/accounts:signInWithPassword",vt(n,e))}async function _y(n,e){return Et(n,"POST","/v1/accounts:sendOobCode",vt(n,e))}async function yy(n,e){return _y(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}async function vy(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Wa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new is(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new is(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,t,"signInWithPassword",gy);case"emailLink":return Iy(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,r,"signUpPassword",py);case"emailLink":return vy(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e){return Is(n,"POST","/v1/accounts:signInWithIdp",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="http://localhost";class _n extends Wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=qa(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _n(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Wn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:Ey,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_s(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ty(n){const e=Ur(Br(n)).link,t=e?Ur(Br(e)).deep_link_id:null,r=Ur(Br(n)).deep_link_id;return(r?Ur(Br(r)).link:null)||r||t||e||n}class Qa{constructor(e){var t,r,s,i,o,c;const u=Ur(Br(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=wy((s=u.mode)!==null&&s!==void 0?s:null);G(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ty(e);try{return new Qa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(e,t){return is._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Qa.parseLink(t);return G(r,"argument-error"),is._fromEmailAndCode(e,r.code,r.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends vs{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return xt.credential(t,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends vs{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends vs{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(n,e){return Is(n,"POST","/v1/accounts:signUp",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ft._fromIdTokenResponse(e,r,s),o=Il(r);return new yn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Il(r);return new yn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Il(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends ct{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ai(e,t,r,s)}}function bd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(n,i,e,r):i})}async function by(n,e,t=!1){const r=await ss(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(n,e,t=!1){const{auth:r}=n;if(Ze(r.app))return Promise.reject(gt(r));const s="reauthenticate";try{const i=await ss(n,bd(r,s,e,n),t);G(i.idToken,r,"internal-error");const o=Ka(i.idToken);G(o,r,"internal-error");const{sub:c}=o;return G(n.uid===c,r,"user-mismatch"),yn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rd(n,e,t=!1){if(Ze(n.app))return Promise.reject(gt(n));const r="signIn",s=await bd(n,r,e),i=await yn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Sy(n,e){return Rd(Kt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(n){const e=Kt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Py(n,e,t){const r=Kt(n);await Ti(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",yy)}async function Cy(n,e,t){if(Ze(n.app))return Promise.reject(gt(n));const r=Kt(n),o=await Ti(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ay).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Sd(n),u}),c=await yn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Dy(n,e,t){return Ze(n.app)?Promise.reject(gt(n)):Sy(me(n),lr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sd(n),r})}function ky(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function xy(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function Vy(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}function Ny(n){return me(n).signOut()}const bi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=1e3,Ly=10;class Cd extends Pd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);X_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ly):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cd.type="LOCAL";const My=Cd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends Pd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dd.type="SESSION";const kd=Dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new zi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),u=await Fy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const h=Ja("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function By(n){st().location.href=n}/**
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
 */function xd(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function $y(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qy(){return xd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="firebaseLocalStorageDb",zy=1,Ri="firebaseLocalStorage",Nd="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gi(n,e){return n.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function Gy(){const n=indexedDB.deleteDatabase(Vd);return new Es(n).toPromise()}function ma(){const n=indexedDB.open(Vd,zy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ri,{keyPath:Nd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ri)?e(r):(r.close(),await Gy(),e(await ma()))})})}async function vl(n,e,t){const r=Gi(n,!0).put({[Nd]:e,value:t});return new Es(r).toPromise()}async function Ky(n,e){const t=Gi(n,!1).get(e),r=await new Es(t).toPromise();return r===void 0?null:r.value}function El(n,e){const t=Gi(n,!0).delete(e);return new Es(t).toPromise()}const Hy=800,Wy=3;class Od{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Wy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(qy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $y(),!this.activeServiceWorker)return;this.sender=new Uy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await vl(e,bi,"1"),await El(e,bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>vl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ky(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>El(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gi(s,!1).getAll();return new Es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Od.type="LOCAL";const Qy=Od;new ys(3e4,6e4);/**
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
 */function Jy(n,e){return e?mt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xy(n){return Rd(n.auth,new Xa(n),n.bypassAuthState)}function Yy(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),Ry(t,new Xa(n),n.bypassAuthState)}async function Zy(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),by(t,new Xa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xy;case"linkViaPopup":case"linkViaRedirect":return Zy;case"reauthViaPopup":case"reauthViaRedirect":return Yy;default:Je(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new ys(2e3,1e4);class Gn extends Ld{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eI.get())};e()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="pendingRedirect",ii=new Map;class nI extends Ld{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const r=await rI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rI(n,e){const t=oI(e),r=iI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function sI(n,e){ii.set(n._key(),e)}function iI(n){return mt(n._redirectPersistence)}function oI(n){return si(tI,n.config.apiKey,n.name)}async function aI(n,e,t=!1){if(Ze(n.app))return Promise.reject(gt(n));const r=Kt(n),s=Jy(r,e),o=await new nI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=10*60*1e3;class uI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Md(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cI&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Md({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Md(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(n,e={}){return Et(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fI=/^https?/;async function mI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hI(n);for(const t of e)try{if(pI(t))return}catch{}Je(n,"unauthorized-domain")}function pI(n){const e=da(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fI.test(t))return!1;if(dI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gI=new ys(3e4,6e4);function Tl(){const n=st().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _I(n){return new Promise((e,t)=>{var r,s,i;function o(){Tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tl(),t(rt(n,"network-request-failed"))},timeout:gI.get()})}if(!((s=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const c=oy("iframefcb");return st()[c]=()=>{gapi.load?o():t(rt(n,"network-request-failed"))},wd(`${iy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw oi=null,e})}let oi=null;function yI(n){return oi=oi||_I(n),oi}/**
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
 */const II=new ys(5e3,15e3),vI="__/auth/iframe",EI="emulator/auth/iframe",wI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AI(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ga(e,EI):`https://${n.config.authDomain}/${vI}`,r={apiKey:e.apiKey,appName:n.name,v:Sn},s=TI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${_s(r).slice(1)}`}async function bI(n){const e=await yI(n),t=st().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:AI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rt(n,"network-request-failed"),c=st().setTimeout(()=>{i(o)},II.get());function u(){st().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const RI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SI=500,PI=600,CI="_blank",DI="http://localhost";class Al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kI(n,e,t,r=SI,s=PI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},RI),{width:r.toString(),height:s.toString(),top:i,left:o}),h=_e().toLowerCase();t&&(c=pd(h)?CI:t),fd(h)&&(e=e||DI,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[S,D])=>`${v}${S}=${D},`,"");if(J_(h)&&c!=="_self")return xI(e||"",c),new Al(null);const p=window.open(e||"",c,f);G(p,n,"popup-blocked");try{p.focus()}catch{}return new Al(p)}function xI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const VI="__/auth/handler",NI="emulator/auth/handler",OI=encodeURIComponent("fac");async function bl(n,e,t,r,s,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sn,eventId:s};if(e instanceof Ad){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof vs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${OI}=${encodeURIComponent(u)}`:"";return`${LI(n)}?${_s(c).slice(1)}${h}`}function LI({config:n}){return n.emulator?Ga(n,NI):`https://${n.authDomain}/${VI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="webStorageSupport";class MI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kd,this._completeRedirectFn=aI,this._overrideRedirectResult=sI}async _openPopup(e,t,r,s){var i;yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bl(e,t,r,da(),s);return kI(e,o,Ja())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await bl(e,t,r,da(),s);return By(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await bI(e),r=new uI(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yo,{type:Yo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Yo];o!==void 0&&t(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vd()||md()||Ha()}}const FI=MI;var Rl="@firebase/auth",Sl="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $I(n){gn(new jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ed(n)},h=new ny(r,s,i,u);return hy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gn(new jt("auth-internal",e=>{const t=Kt(e.getProvider("auth").getImmediate());return(r=>new UI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Rl,Sl,BI(n)),nt(Rl,Sl,"esm2017")}/**
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
 */const jI=5*60,qI=Qh("authIdTokenMaxAge")||jI;let Pl=null;const zI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qI)return;const s=t==null?void 0:t.token;Pl!==s&&(Pl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GI(n=td()){const e=ji(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ly(n,{popupRedirectResolver:FI,persistence:[Qy,My,kd]}),r=Qh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zI(i.toString());xy(t,o,()=>o(t.currentUser)),ky(t,c=>o(c))}}const s=Hh("auth");return s&&dy(t,`http://${s}`),t}function KI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ry({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",KI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$I("Browser");var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hn,Fd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function y(){}y.prototype=_.prototype,w.D=_.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(I,E,A){for(var g=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)g[ve-2]=arguments[ve];return _.prototype[E].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,y){y||(y=0);var I=Array(16);if(typeof _=="string")for(var E=0;16>E;++E)I[E]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(E=0;16>E;++E)I[E]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=w.g[0],y=w.g[1],E=w.g[2];var A=w.g[3],g=_+(A^y&(E^A))+I[0]+3614090360&4294967295;_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+I[1]+3905402710&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+I[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+I[3]+3250441966&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(A^y&(E^A))+I[4]+4118548399&4294967295,_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+I[5]+1200080426&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+I[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+I[7]+4249261313&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(A^y&(E^A))+I[8]+1770035416&4294967295,_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+I[9]+2336552879&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+I[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+I[11]+2304563134&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(A^y&(E^A))+I[12]+1804603682&4294967295,_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+I[13]+4254626195&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+I[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+I[15]+1236535329&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(E^A&(y^E))+I[1]+4129170786&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+I[6]+3225465664&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+I[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+I[0]+3921069994&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(E^A&(y^E))+I[5]+3593408605&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+I[10]+38016083&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+I[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+I[4]+3889429448&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(E^A&(y^E))+I[9]+568446438&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+I[14]+3275163606&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+I[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+I[8]+1163531501&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(E^A&(y^E))+I[13]+2850285829&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+I[2]+4243563512&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+I[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+I[12]+2368359562&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(y^E^A)+I[5]+4294588738&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+I[8]+2272392833&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+I[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+I[14]+4259657740&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(y^E^A)+I[1]+2763975236&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+I[4]+1272893353&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+I[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+I[10]+3200236656&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(y^E^A)+I[13]+681279174&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+I[0]+3936430074&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+I[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+I[6]+76029189&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(y^E^A)+I[9]+3654602809&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+I[12]+3873151461&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+I[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+I[2]+3299628645&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(E^(y|~A))+I[0]+4096336452&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+I[7]+1126891415&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+I[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+I[5]+4237533241&4294967295,y=E+(g<<21&4294967295|g>>>11),g=_+(E^(y|~A))+I[12]+1700485571&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+I[3]+2399980690&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+I[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+I[1]+2240044497&4294967295,y=E+(g<<21&4294967295|g>>>11),g=_+(E^(y|~A))+I[8]+1873313359&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+I[15]+4264355552&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+I[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+I[13]+1309151649&4294967295,y=E+(g<<21&4294967295|g>>>11),g=_+(E^(y|~A))+I[4]+4149444226&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+I[11]+3174756917&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+I[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var y=_-this.blockSize,I=this.B,E=this.h,A=0;A<_;){if(E==0)for(;A<=y;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<_;)if(I[E++]=w.charCodeAt(A++),E==this.blockSize){s(this,I),E=0;break}}else for(;A<_;)if(I[E++]=w[A++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var y=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=y&255,y/=256;for(this.u(w),w=Array(16),_=y=0;4>_;++_)for(var I=0;32>I;I+=8)w[y++]=this.g[_]>>>I&255;return w};function i(w,_){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=_(w)}function o(w,_){this.h=_;for(var y=[],I=!0,E=w.length-1;0<=E;E--){var A=w[E]|0;I&&A==_||(y[E]=A,I=!1)}this.g=y}var c={};function u(w){return-128<=w&&128>w?i(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return k(h(-w));for(var _=[],y=1,I=0;w>=y;I++)_[I]=w/y|0,y*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return k(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),I=p,E=0;E<w.length;E+=8){var A=Math.min(8,w.length-E),g=parseInt(w.substring(E,E+A),_);8>A?(A=h(Math.pow(_,A)),I=I.j(A).add(h(g))):(I=I.j(y),I=I.add(h(g)))}return I}var p=u(0),v=u(1),S=u(16777216);n=o.prototype,n.m=function(){if(V(this))return-k(this).m();for(var w=0,_=1,y=0;y<this.g.length;y++){var I=this.i(y);w+=(0<=I?I:4294967296+I)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(V(this))return"-"+k(this).toString(w);for(var _=h(Math.pow(w,6)),y=this,I="";;){var E=q(y,_).g;y=z(y,E.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=E,D(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=z(this,w),V(w)?-1:D(w)?0:1};function k(w){for(var _=w.g.length,y=[],I=0;I<_;I++)y[I]=~w.g[I];return new o(y,~w.h).add(v)}n.abs=function(){return V(this)?k(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],I=0,E=0;E<=_;E++){var A=I+(this.i(E)&65535)+(w.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);I=g>>>16,A&=65535,g&=65535,y[E]=g<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function z(w,_){return w.add(k(_))}n.j=function(w){if(D(this)||D(w))return p;if(V(this))return V(w)?k(this).j(k(w)):k(k(this).j(w));if(V(w))return k(this.j(k(w)));if(0>this.l(S)&&0>w.l(S))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,y=[],I=0;I<2*_;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var E=0;E<w.g.length;E++){var A=this.i(I)>>>16,g=this.i(I)&65535,ve=w.i(E)>>>16,Yt=w.i(E)&65535;y[2*I+2*E]+=g*Yt,$(y,2*I+2*E),y[2*I+2*E+1]+=A*Yt,$(y,2*I+2*E+1),y[2*I+2*E+1]+=g*ve,$(y,2*I+2*E+1),y[2*I+2*E+2]+=A*ve,$(y,2*I+2*E+2)}for(I=0;I<_;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=_;I<2*_;I++)y[I]=0;return new o(y,0)};function $(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function M(w,_){this.g=w,this.h=_}function q(w,_){if(D(_))throw Error("division by zero");if(D(w))return new M(p,p);if(V(w))return _=q(k(w),_),new M(k(_.g),k(_.h));if(V(_))return _=q(w,k(_)),new M(k(_.g),_.h);if(30<w.g.length){if(V(w)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var y=v,I=_;0>=I.l(w);)y=Q(y),I=Q(I);var E=K(y,1),A=K(I,1);for(I=K(I,2),y=K(y,2);!D(I);){var g=A.add(I);0>=g.l(w)&&(E=E.add(y),A=g),I=K(I,1),y=K(y,1)}return _=z(w,E.j(_)),new M(E,_)}for(E=p;0<=w.l(_);){for(y=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(y),g=A.j(_);V(g)||0<g.l(w);)y-=I,A=h(y),g=A.j(_);D(A)&&(A=v),E=E.add(A),w=z(w,g)}return new M(E,w)}n.A=function(w){return q(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],I=0;I<_;I++)y[I]=this.i(I)&w.i(I);return new o(y,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],I=0;I<_;I++)y[I]=this.i(I)|w.i(I);return new o(y,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),y=[],I=0;I<_;I++)y[I]=this.i(I)^w.i(I);return new o(y,this.h^w.h)};function Q(w){for(var _=w.g.length+1,y=[],I=0;I<_;I++)y[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(y,w.h)}function K(w,_){var y=_>>5;_%=32;for(var I=w.g.length-y,E=[],A=0;A<I;A++)E[A]=0<_?w.i(A+y)>>>_|w.i(A+y+1)<<32-_:w.i(A+y);return new o(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hn=o}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ud,$r,Bd,ai,pa,$d,jd,qd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,l){if(l)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],l=l(m),l!=m&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function i(a,l){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var P=d++;return{value:l(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function p(a,l,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(l,b)}}return function(){return a.apply(l,arguments)}}function v(a,l,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,v.apply(null,arguments)}function S(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function D(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,P){for(var N=Array(arguments.length-2),re=2;re<arguments.length;re++)N[re-2]=arguments[re];return l.prototype[b].apply(m,N)}}function V(a){const l=a.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=a[m];return d}return[]}function k(a,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const b=a.length||0,P=m.length||0;a.length=b+P;for(let N=0;N<P;N++)a[b+N]=m[N]}else a.push(m)}}class z{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function $(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var Q=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function K(a,l,d){for(const m in a)l.call(d,a[m],m,a)}function w(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function _(a){const l={};for(const d in a)l[d]=a[d];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,l){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function E(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function g(){var a=Tt;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ve{constructor(){this.h=this.g=null}add(l,d){const m=Yt.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Yt=new z(()=>new kn,a=>a.reset());class kn{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,Xe=!1,Tt=new ve,eu=()=>{const a=c.Promise.resolve(void 0);ut=()=>{a.then(yp)}};var yp=()=>{for(var a;a=g();){try{a.h.call(a.g)}catch(d){A(d)}var l=Yt;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}Xe=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Ip=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function yr(a,l){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(Q){e:{try{q(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vp[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yr.aa.h.call(this)}}D(yr,Ae);var vp={2:"touch",3:"pen",4:"mouse"};yr.prototype.h=function(){yr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Cs="closure_listenable_"+(1e6*Math.random()|0),Ep=0;function wp(a,l,d,m,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=b,this.key=++Ep,this.da=this.fa=!1}function Ds(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ks(a){this.src=a,this.g={},this.h=0}ks.prototype.add=function(a,l,d,m,b){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var N=Ao(a,l,m,b);return-1<N?(l=a[N],d||(l.fa=!1)):(l=new wp(l,this.src,P,!!m,b),l.fa=d,a.push(l)),l};function To(a,l){var d=l.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=b)&&Array.prototype.splice.call(m,b,1),P&&(Ds(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ao(a,l,d,m){for(var b=0;b<a.length;++b){var P=a[b];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return b}return-1}var bo="closure_lm_"+(1e6*Math.random()|0),Ro={};function tu(a,l,d,m,b){if(Array.isArray(l)){for(var P=0;P<l.length;P++)tu(a,l[P],d,m,b);return null}return d=su(d),a&&a[Cs]?a.K(l,d,h(m)?!!m.capture:!1,b):Tp(a,l,d,!1,m,b)}function Tp(a,l,d,m,b,P){if(!l)throw Error("Invalid event type");var N=h(b)?!!b.capture:!!b,re=Po(a);if(re||(a[bo]=re=new ks(a)),d=re.add(l,d,m,N,P),d.proxy)return d;if(m=Ap(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Ip||(b=N),b===void 0&&(b=!1),a.addEventListener(l.toString(),m,b);else if(a.attachEvent)a.attachEvent(ru(l.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ap(){function a(d){return l.call(a.src,a.listener,d)}const l=bp;return a}function nu(a,l,d,m,b){if(Array.isArray(l))for(var P=0;P<l.length;P++)nu(a,l[P],d,m,b);else m=h(m)?!!m.capture:!!m,d=su(d),a&&a[Cs]?(a=a.i,l=String(l).toString(),l in a.g&&(P=a.g[l],d=Ao(P,d,m,b),-1<d&&(Ds(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[l],a.h--)))):a&&(a=Po(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Ao(l,d,m,b)),(d=-1<a?l[a]:null)&&So(d))}function So(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Cs])To(l.i,a);else{var d=a.type,m=a.proxy;l.removeEventListener?l.removeEventListener(d,m,a.capture):l.detachEvent?l.detachEvent(ru(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Po(l))?(To(d,a),d.h==0&&(d.src=null,l[bo]=null)):Ds(a)}}}function ru(a){return a in Ro?Ro[a]:Ro[a]="on"+a}function bp(a,l){if(a.da)a=!0;else{l=new yr(l,this);var d=a.listener,m=a.ha||a.src;a.fa&&So(a),a=d.call(m,l)}return a}function Po(a){return a=a[bo],a instanceof ks?a:null}var Co="__closure_events_fn_"+(1e9*Math.random()>>>0);function su(a){return typeof a=="function"?a:(a[Co]||(a[Co]=function(l){return a.handleEvent(l)}),a[Co])}function be(){At.call(this),this.i=new ks(this),this.M=this,this.F=null}D(be,At),be.prototype[Cs]=!0,be.prototype.removeEventListener=function(a,l,d,m){nu(this,a,l,d,m)};function xe(a,l){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=l.type||l,typeof l=="string")l=new Ae(l,a);else if(l instanceof Ae)l.target=l.target||a;else{var b=l;l=new Ae(m,a),I(l,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var N=l.g=d[P];b=xs(N,m,!0,l)&&b}if(N=l.g=a,b=xs(N,m,!0,l)&&b,b=xs(N,m,!1,l)&&b,d)for(P=0;P<d.length;P++)N=l.g=d[P],b=xs(N,m,!1,l)&&b}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],m=0;m<d.length;m++)Ds(d[m]);delete a.g[l],a.h--}}this.F=null},be.prototype.K=function(a,l,d,m){return this.i.add(String(a),l,!1,d,m)},be.prototype.L=function(a,l,d,m){return this.i.add(String(a),l,!0,d,m)};function xs(a,l,d,m){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,P=0;P<l.length;++P){var N=l[P];if(N&&!N.da&&N.capture==d){var re=N.listener,we=N.ha||N.src;N.fa&&To(a.i,N),b=re.call(we,m)!==!1&&b}}return b&&!m.defaultPrevented}function iu(a,l,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function ou(a){a.g=iu(()=>{a.g=null,a.i&&(a.i=!1,ou(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Rp extends At{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ou(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(a){At.call(this),this.h=a,this.g={}}D(Ir,At);var au=[];function cu(a){K(a.g,function(l,d){this.g.hasOwnProperty(d)&&So(l)},a),a.g={}}Ir.prototype.N=function(){Ir.aa.N.call(this),cu(this)},Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Do=c.JSON.stringify,Sp=c.JSON.parse,Pp=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ko(){}ko.prototype.h=null;function uu(a){return a.h||(a.h=a.i())}function lu(){}var vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xo(){Ae.call(this,"d")}D(xo,Ae);function Vo(){Ae.call(this,"c")}D(Vo,Ae);var Zt={},hu=null;function Vs(){return hu=hu||new be}Zt.La="serverreachability";function du(a){Ae.call(this,Zt.La,a)}D(du,Ae);function Er(a){const l=Vs();xe(l,new du(l))}Zt.STAT_EVENT="statevent";function fu(a,l){Ae.call(this,Zt.STAT_EVENT,a),this.stat=l}D(fu,Ae);function Ve(a){const l=Vs();xe(l,new fu(l,a))}Zt.Ma="timingevent";function mu(a,l){Ae.call(this,Zt.Ma,a),this.size=l}D(mu,Ae);function wr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function Tr(){this.g=!0}Tr.prototype.xa=function(){this.g=!1};function Cp(a,l,d,m,b,P){a.info(function(){if(a.g)if(P)for(var N="",re=P.split("&"),we=0;we<re.length;we++){var Z=re[we].split("=");if(1<Z.length){var Re=Z[0];Z=Z[1];var Se=Re.split("_");N=2<=Se.length&&Se[1]=="type"?N+(Re+"="+Z+"&"):N+(Re+"=redacted&")}}else N=null;else N=P;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+l+`
`+d+`
`+N})}function Dp(a,l,d,m,b,P,N){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+l+`
`+d+`
`+P+" "+N})}function xn(a,l,d,m){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+xp(a,d)+(m?" "+m:"")})}function kp(a,l){a.info(function(){return"TIMEOUT: "+l})}Tr.prototype.info=function(){};function xp(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var N=1;N<b.length;N++)b[N]=""}}}}return Do(d)}catch{return l}}var Ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},No;function Os(){}D(Os,ko),Os.prototype.g=function(){return new XMLHttpRequest},Os.prototype.i=function(){return{}},No=new Os;function bt(a,l,d,m){this.j=a,this.i=l,this.l=d,this.R=m||1,this.U=new Ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}var _u={},Oo={};function Lo(a,l,d){a.L=1,a.v=Us(lt(l)),a.m=d,a.P=!0,yu(a,null)}function yu(a,l){a.F=Date.now(),Ls(a),a.A=lt(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),xu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new gu,a.g=Ju(a.j,d?l:null,!a.m),0<a.O&&(a.M=new Rp(v(a.Y,a,a.g),a.O)),l=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(au[0]=b.toString()),b=au);for(var P=0;P<b.length;P++){var N=tu(d,b[P],m||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),Er(),Cp(a.i,a.u,a.A,a.l,a.R,a.m)}bt.prototype.ca=function(a){a=a.target;const l=this.M;l&&ht(a)==3?l.j():this.Y(a)},bt.prototype.Y=function(a){try{if(a==this.g)e:{const Se=ht(this.g);var l=this.g.Ba();const On=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||Se!=4||l==7||(l==8||0>=On?Er(3):Er(2)),Mo(this);var d=this.g.Z();this.X=d;t:if(Iu(this)){var m=Uu(this.g);a="";var b=m.length,P=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),Ar(this);var N="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,a+=this.h.i.decode(m[l],{stream:!(P&&l==b-1)});m.length=0,this.h.g+=a,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,Dp(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var re,we=this.g;if((re=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(re)){var Z=re;break t}}Z=null}if(d=Z)xn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,d);else{this.o=!1,this.s=3,Ve(12),en(this),Ar(this);break e}}if(this.P){d=!0;let We;for(;!this.J&&this.C<N.length;)if(We=Vp(this,N),We==Oo){Se==4&&(this.s=4,Ve(14),d=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==_u){this.s=4,Ve(15),xn(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else xn(this.i,this.l,We,null),Fo(this,We);if(Iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||N.length!=0||this.h.h||(this.s=1,Ve(16),d=!1),this.o=this.o&&d,!d)xn(this.i,this.l,N,"[Invalid Chunked Response]"),en(this),Ar(this);else if(0<N.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),zo(Re),Re.M=!0,Ve(11))}}else xn(this.i,this.l,N,null),Fo(this,N);Se==4&&en(this),this.o&&!this.J&&(Se==4?Ku(this.j,this):(this.o=!1,Ls(this)))}else Jp(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),en(this),Ar(this)}}}catch{}finally{}};function Iu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Vp(a,l){var d=a.C,m=l.indexOf(`
`,d);return m==-1?Oo:(d=Number(l.substring(d,m)),isNaN(d)?_u:(m+=1,m+d>l.length?Oo:(l=l.slice(m,m+d),a.C=m+d,l)))}bt.prototype.cancel=function(){this.J=!0,en(this)};function Ls(a){a.S=Date.now()+a.I,vu(a,a.I)}function vu(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wr(v(a.ba,a),l)}function Mo(a){a.B&&(c.clearTimeout(a.B),a.B=null)}bt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kp(this.i,this.A),this.L!=2&&(Er(),Ve(17)),en(this),this.s=2,Ar(this)):vu(this,this.S-a)};function Ar(a){a.j.G==0||a.J||Ku(a.j,a)}function en(a){Mo(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,cu(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function Fo(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||Uo(d.h,a))){if(!a.K&&Uo(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Gs(d),qs(d);else break e;qo(d),Ve(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=wr(v(d.Za,d),6e3));if(1>=Tu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else nn(d,11)}else if((a.K||d.g==a)&&Gs(d),!$(l))for(b=d.Da.g.parse(l),l=0;l<b.length;l++){let Z=b[l];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Re=Z[3];Re!=null&&(d.la=Re,d.j.info("VER="+d.la));const Se=Z[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));const On=Z[5];On!=null&&typeof On=="number"&&0<On&&(m=1.5*On,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const We=a.g;if(We){const Hs=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var P=m.h;P.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Bo(P,P.h),P.h=null))}if(m.D){const Go=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(m.ya=Go,ie(m.I,m.D,Go))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var N=a;if(m.qa=Qu(m,m.J?m.ia:null,m.W),N.K){Au(m.h,N);var re=N,we=m.L;we&&(re.I=we),re.B&&(Mo(re),Ls(re)),m.g=N}else zu(m);0<d.i.length&&zs(d)}else Z[0]!="stop"&&Z[0]!="close"||nn(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?nn(d,7):jo(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}Er(4)}catch{}}var Np=class{constructor(a,l){this.g=a,this.map=l}};function Eu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Tu(a){return a.h?1:a.g?a.g.size:0}function Uo(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Bo(a,l){a.g?a.g.add(l):a.h=l}function Au(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Eu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return V(a.i)}function Op(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,m=0;m<d;m++)l.push(a[m]);return l}l=[],d=0;for(m in a)l[d++]=a[m];return l}function Lp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const m in a)l[d++]=m;return l}}}function Ru(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=Lp(a),m=Op(a),b=m.length,P=0;P<b;P++)l.call(void 0,m[P],d&&d[P],a)}var Su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mp(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var P=a[d].substring(0,m);b=a[d].substring(m+1)}else P=a[d];l(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function tn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof tn){this.h=a.h,Ms(this,a.j),this.o=a.o,this.g=a.g,Fs(this,a.s),this.l=a.l;var l=a.i,d=new Sr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Pu(this,d),this.m=a.m}else a&&(l=String(a).match(Su))?(this.h=!1,Ms(this,l[1]||"",!0),this.o=br(l[2]||""),this.g=br(l[3]||"",!0),Fs(this,l[4]),this.l=br(l[5]||"",!0),Pu(this,l[6]||"",!0),this.m=br(l[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}tn.prototype.toString=function(){var a=[],l=this.j;l&&a.push(Rr(l,Cu,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Rr(l,Cu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Rr(d,d.charAt(0)=="/"?Bp:Up,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Rr(d,jp)),a.join("")};function lt(a){return new tn(a)}function Ms(a,l,d){a.j=d?br(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Fs(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Pu(a,l,d){l instanceof Sr?(a.i=l,qp(a.i,a.h)):(d||(l=Rr(l,$p)),a.i=new Sr(l,a.h))}function ie(a,l,d){a.i.set(l,d)}function Us(a){return ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function br(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rr(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,Fp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cu=/[#\/\?@]/g,Up=/[#\?:]/g,Bp=/[#\?]/g,$p=/[#\?@]/g,jp=/#/g;function Sr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Rt(a){a.g||(a.g=new Map,a.h=0,a.i&&Mp(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Sr.prototype,n.add=function(a,l){Rt(this),this.i=null,a=Vn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Du(a,l){Rt(a),l=Vn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function ku(a,l){return Rt(a),l=Vn(a,l),a.g.has(l)}n.forEach=function(a,l){Rt(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(l,b,m,this)},this)},this)},n.na=function(){Rt(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const b=a[m];for(let P=0;P<b.length;P++)d.push(l[m])}return d},n.V=function(a){Rt(this);let l=[];if(typeof a=="string")ku(this,a)&&(l=l.concat(this.g.get(Vn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},n.set=function(a,l){return Rt(this),this.i=null,a=Vn(this,a),ku(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function xu(a,l,d){Du(a,l),0<d.length&&(a.i=null,a.g.set(Vn(a,l),V(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),N=this.V(m);for(m=0;m<N.length;m++){var b=P;N[m]!==""&&(b+="="+encodeURIComponent(String(N[m]))),a.push(b)}}return this.i=a.join("&")};function Vn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function qp(a,l){l&&!a.j&&(Rt(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(Du(this,m),xu(this,b,d))},a)),a.j=l}function zp(a,l){const d=new Tr;if(c.Image){const m=new Image;m.onload=S(St,d,"TestLoadImage: loaded",!0,l,m),m.onerror=S(St,d,"TestLoadImage: error",!1,l,m),m.onabort=S(St,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=S(St,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else l(!1)}function Gp(a,l){const d=new Tr,m=new AbortController,b=setTimeout(()=>{m.abort(),St(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(b),P.ok?St(d,"TestPingServer: ok",!0,l):St(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),St(d,"TestPingServer: error",!1,l)})}function St(a,l,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function Kp(){this.g=new Pp}function Hp(a,l,d){const m=d||"";try{Ru(a,function(b,P){let N=b;h(b)&&(N=Do(b)),l.push(m+P+"="+encodeURIComponent(N))})}catch(b){throw l.push(m+"type="+encodeURIComponent("_badmap")),b}}function Bs(a){this.l=a.Ub||null,this.j=a.eb||!1}D(Bs,ko),Bs.prototype.g=function(){return new $s(this.l,this.j)},Bs.prototype.i=function(a){return function(){return a}}({});function $s(a,l){be.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D($s,be),n=$s.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,Cr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Pr(this):Cr(this),this.readyState==3&&Vu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Pr(this))},n.Qa=function(a){this.g&&(this.response=a,Pr(this))},n.ga=function(){this.g&&Pr(this)};function Pr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cr(a)}n.setRequestHeader=function(a,l){this.u.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function Cr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nu(a){let l="";return K(a,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function $o(a,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Nu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ie(a,l,d))}function ue(a){be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ue,be);var Wp=/^https?$/i,Qp=["POST","PUT"];n=ue.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():No.g(),this.v=this.o?uu(this.o):uu(No),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){Ou(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qp,l,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,N]of d)this.g.setRequestHeader(P,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fu(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Ou(this,P)}};function Ou(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,Lu(a),js(a)}function Lu(a){a.A||(a.A=!0,xe(a,"complete"),xe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,xe(this,"complete"),xe(this,"abort"),js(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Mu(this):this.bb())},n.bb=function(){Mu(this)};function Mu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ht(a)!=4||a.Z()!=2)){if(a.u&&ht(a)==4)iu(a.Ea,0,a);else if(xe(a,"readystatechange"),ht(a)==4){a.h=!1;try{const N=a.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=N===0){var b=String(a.D).match(Su)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),m=!Wp.test(b?b.toLowerCase():"")}d=m}if(d)xe(a,"complete"),xe(a,"success");else{a.m=6;try{var P=2<ht(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Lu(a)}}finally{js(a)}}}}function js(a,l){if(a.g){Fu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||xe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Fu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function ht(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Sp(l)}};function Uu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Jp(a){const l={};a=(a.g&&2<=ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if($(a[m]))continue;var d=E(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[b]||[];l[b]=P,P.push(d)}w(l,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dr(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Bu(a){this.Aa=0,this.i=[],this.j=new Tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Dr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Dr("baseRetryDelayMs",5e3,a),this.cb=Dr("retryDelaySeedMs",1e4,a),this.Wa=Dr("forwardChannelMaxRetries",2,a),this.wa=Dr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Eu(a&&a.concurrentRequestLimit),this.Da=new Kp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bu.prototype,n.la=8,n.G=1,n.connect=function(a,l,d,m){Ve(0),this.W=a,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Qu(this,null,this.W),zs(this)};function jo(a){if($u(a),a.G==3){var l=a.U++,d=lt(a.I);if(ie(d,"SID",a.K),ie(d,"RID",l),ie(d,"TYPE","terminate"),kr(a,d),l=new bt(a,a.j,l),l.L=2,l.v=Us(lt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ju(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ls(l)}Wu(a)}function qs(a){a.g&&(zo(a),a.g.cancel(),a.g=null)}function $u(a){qs(a),a.u&&(c.clearTimeout(a.u),a.u=null),Gs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function zs(a){if(!wu(a.h)&&!a.s){a.s=!0;var l=a.Ga;ut||eu(),Xe||(ut(),Xe=!0),Tt.add(l,a),a.B=0}}function Xp(a,l){return Tu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wr(v(a.Ga,a,l),Hu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new bt(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=qu(this,b,l),d=lt(this.I),ie(d,"RID",a),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),kr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Nu(P)))+"&"+l:this.m&&$o(d,this.m,P)),Bo(this.h,b),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",l),ie(d,"SID","null"),b.T=!0,Lo(b,d,null)):Lo(b,d,l),this.G=2}}else this.G==3&&(a?ju(this,a):this.i.length==0||wu(this.h)||ju(this))};function ju(a,l){var d;l?d=l.l:d=a.U++;const m=lt(a.I);ie(m,"SID",a.K),ie(m,"RID",d),ie(m,"AID",a.T),kr(a,m),a.m&&a.o&&$o(m,a.m,a.o),d=new bt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=qu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Bo(a.h,d),Lo(d,m,l)}function kr(a,l){a.H&&K(a.H,function(d,m){ie(l,m,d)}),a.l&&Ru({},function(d,m){ie(l,m,d)})}function qu(a,l,d){d=Math.min(a.i.length,d);var m=a.l?v(a.l.Na,a.l,a):null;e:{var b=a.i;let P=-1;for(;;){const N=["count="+d];P==-1?0<d?(P=b[0].g,N.push("ofs="+P)):P=0:N.push("ofs="+P);let re=!0;for(let we=0;we<d;we++){let Z=b[we].g;const Re=b[we].map;if(Z-=P,0>Z)P=Math.max(0,b[we].g-100),re=!1;else try{Hp(Re,N,"req"+Z+"_")}catch{m&&m(Re)}}if(re){m=N.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,m}function zu(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;ut||eu(),Xe||(ut(),Xe=!0),Tt.add(l,a),a.v=0}}function qo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wr(v(a.Fa,a),Hu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wr(v(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),qs(this),Gu(this))};function zo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Gu(a){a.g=new bt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=lt(a.qa);ie(l,"RID","rpc"),ie(l,"SID",a.K),ie(l,"AID",a.T),ie(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&ie(l,"TO",a.ja),ie(l,"TYPE","xmlhttp"),kr(a,l),a.m&&a.o&&$o(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Us(lt(l)),d.m=null,d.P=!0,yu(d,a)}n.Za=function(){this.C!=null&&(this.C=null,qs(this),qo(this),Ve(19))};function Gs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Ku(a,l){var d=null;if(a.g==l){Gs(a),zo(a),a.g=null;var m=2}else if(Uo(a.h,l))d=l.D,Au(a.h,l),m=1;else return;if(a.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var b=a.B;m=Vs(),xe(m,new mu(m,d)),zs(a)}else zu(a);else if(b=l.s,b==3||b==0&&0<l.X||!(m==1&&Xp(a,l)||m==2&&qo(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),b){case 1:nn(a,5);break;case 4:nn(a,10);break;case 3:nn(a,6);break;default:nn(a,2)}}}function Hu(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function nn(a,l){if(a.j.info("Error code "+l),l==2){var d=v(a.fb,a),m=a.Xa;const b=!m;m=new tn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ms(m,"https"),Us(m),b?zp(m.toString(),d):Gp(m.toString(),d)}else Ve(2);a.G=0,a.l&&a.l.sa(l),Wu(a),$u(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Wu(a){if(a.G=0,a.ka=[],a.l){const l=bu(a.h);(l.length!=0||a.i.length!=0)&&(k(a.ka,l),k(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function Qu(a,l,d){var m=d instanceof tn?lt(d):new tn(d);if(m.g!="")l&&(m.g=l+"."+m.g),Fs(m,m.s);else{var b=c.location;m=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var P=new tn(null);m&&Ms(P,m),l&&(P.g=l),b&&Fs(P,b),d&&(P.l=d),m=P}return d=a.D,l=a.ya,d&&l&&ie(m,d,l),ie(m,"VER",a.la),kr(a,m),m}function Ju(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new ue(new Bs({eb:d})):new ue(a.pa),l.Ha(a.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xu(){}n=Xu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ks(){}Ks.prototype.g=function(a,l){return new je(a,l)};function je(a,l){be.call(this),this.g=new Bu(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!$(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!$(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Nn(this)}D(je,be),je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){jo(this.g)},je.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Do(a),a=d);l.i.push(new Np(l.Ya++,a)),l.G==3&&zs(l)},je.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,je.aa.N.call(this)};function Yu(a){xo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}D(Yu,xo);function Zu(){Vo.call(this),this.status=1}D(Zu,Vo);function Nn(a){this.g=a}D(Nn,Xu),Nn.prototype.ua=function(){xe(this.g,"a")},Nn.prototype.ta=function(a){xe(this.g,new Yu(a))},Nn.prototype.sa=function(a){xe(this.g,new Zu)},Nn.prototype.ra=function(){xe(this.g,"b")},Ks.prototype.createWebChannel=Ks.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,qd=function(){return new Ks},jd=function(){return Vs()},$d=Zt,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ns.NO_ERROR=0,Ns.TIMEOUT=8,Ns.HTTP_ERROR=6,ai=Ns,pu.COMPLETE="complete",Bd=pu,lu.EventType=vr,vr.OPEN="a",vr.CLOSE="b",vr.ERROR="c",vr.MESSAGE="d",be.prototype.listen=be.prototype.K,$r=lu,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,Ud=ue}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});const Dl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new $a("@firebase/firestore");function Bn(){return In.logLevel}function x(n,...e){if(In.logLevel<=J.DEBUG){const t=e.map(Ya);In.debug(`Firestore (${hr}): ${n}`,...t)}}function fe(n,...e){if(In.logLevel<=J.ERROR){const t=e.map(Ya);In.error(`Firestore (${hr}): ${n}`,...t)}}function os(n,...e){if(In.logLevel<=J.WARN){const t=e.map(Ya);In.warn(`Firestore (${hr}): ${n}`,...t)}}function Ya(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: `+n;throw fe(e),new Error(e)}function B(n,e){n||F()}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class QI{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){B(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new it;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new it,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new it)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new HI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new Ce(e)}}class JI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new JI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){B(this.o===void 0);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(B(typeof t.token=="string"),this.R=t.token,new YI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ev(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Jn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Gd(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ce(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new ce(0,0))}static max(){return new j(new ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return as.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof as?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ee extends as{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const tv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends as{construct(e,t,r){return new ae(e,t,r)}static isValidIdentifier(e){return tv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ee.fromString(e))}static fromName(e){return new O(ee.fromString(e).popFirst(5))}static empty(){return new O(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ee(e.slice()))}}/**
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
 */class Si{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function ga(n){return n.fields.find(e=>e.kind===2)}function on(n){return n.fields.filter(e=>e.kind!==2)}Si.UNKNOWN_ID=-1;class ci{constructor(e,t){this.fieldPath=e,this.kind=t}}class cs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new cs(0,Ke.min())}}function Kd(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new Ke(s,O.empty(),e)}function Hd(n){return new Ke(n.readTime,n.key,-1)}class Ke{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ke(j.min(),O.empty(),-1)}static max(){return new Ke(j.max(),O.empty(),-1)}}function Za(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Wd)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new R((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new it,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Wr(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=ec(r.target.error);this.V.reject(new Wr(e,s))}}static open(e,t,r,s){try{return new Ki(t,e.transaction(s,r))}catch(i){throw new Wr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rv(t)}}class Bt{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Bt.S(_e())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),an(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Xh())return!1;if(Bt.v())return!0;const e=_e(),t=Bt.S(e),r=0<t&&t<10,s=Jd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Wr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Wr(e,o))},s.onupgradeneeded=i=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Ki.open(this.db,e,i?"readonly":"readwrite",r),u=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Jd(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class nv{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return an(this.B.delete())}}class Wr extends L{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Wt(n){return n.name==="IndexedDbTransactionError"}class rv{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),an(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),an(this.store.add(e))}get(e){return an(this.store.get(e)).next(t=>(t===void 0&&(t=null),x("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),an(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),an(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new R((o,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new R((r,s)=>{t.onerror=i=>{const o=ec(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const u=new nv(c),h=t(c.primaryKey,c.value,u);if(h instanceof R){const f=h.catch(p=>(u.done(),R.reject(p)));r.push(f)}u.isDone?s():u.K===null?c.continue():c.continue(u.K)}}).next(()=>R.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function an(n){return new R((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=ec(r.target.error);t(s)}})}let kl=!1;function ec(n){const e=Bt.S(_e());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return kl||(kl=!0,setTimeout(()=>{throw r},0)),r}}return n}class sv{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){x("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Wt(t)?x("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Ht(t)}await this.X(6e4)})}}class iv{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(x("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Hd(i);Za(o,r)>0&&(r=o)}),new Ke(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ue{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ue.oe=-1;function Hi(n){return n==null}function us(n){return n===0&&1/n==-1/0}function Xd(n){return typeof n=="number"&&Number.isInteger(n)&&!us(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xl(e)),e=ov(n.get(t),e);return xl(e)}function ov(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function xl(n){return n+""}function et(n){const e=n.length;if(B(e>=2),e===2)return B(n.charAt(0)===""&&n.charAt(1)===""),ee.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&F(),n.charAt(o+1)){case"":const c=n.substring(i,o);let u;s.length===0?u=c:(s+=c,u=s,s=""),r.push(u);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:F()}i=o+2}return new ee(r)}/**
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
 */const Vl=["userId","batchId"];/**
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
 */function ui(n,e){return[n,Oe(e)]}function Yd(n,e,t){return[n,Oe(e),t]}const av={},cv=["prefixPath","collectionGroup","readTime","documentId"],uv=["prefixPath","collectionGroup","documentId"],lv=["collectionGroup","readTime","prefixPath","documentId"],hv=["canonicalId","targetId"],dv=["targetId","path"],fv=["path","targetId"],mv=["collectionId","parent"],pv=["indexId","uid"],gv=["uid","sequenceNumber"],_v=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yv=["indexId","uid","orderedDocumentKey"],Iv=["userId","collectionPath","documentId"],vv=["userId","collectionPath","largestBatchId"],Ev=["userId","collectionGroup","largestBatchId"],Zd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wv=[...Zd,"documentOverlays"],ef=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tf=ef,tc=[...tf,"indexConfiguration","indexState","indexEntries"],Tv=tc,Av=[...tc,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Qd{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ie(n,e){const t=U(n);return Bt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Js(this.root,e,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Js(this.root,e,this.comparator,!0)}}class Js{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Te.RED,this.left=s??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Te(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ol(this.data.getIterator())}getIteratorFrom(e){return new Ol(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ne(this.comparator);return t.data=e,t}}class Ol{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ln(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Be([])}unionWith(e){let t=new ne(ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rf("Invalid base64 string: "+i):i}}(e);return new pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const bv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(n){if(B(!!n),typeof n=="string"){let e=0;const t=bv.exec(n);if(B(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?pe.fromBase64String(n):pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function rc(n){const e=n.mapValue.fields.__previous_value__;return nc(e)?rc(e):e}function ls(n){const e=It(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,r,s,i,o,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class vn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},li={nullValue:"NULL_VALUE"};function En(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?nc(n)?4:sf(n)?9007199254740991:Wi(n)?10:11:F()}function ot(n,e){if(n===e)return!0;const t=En(n);if(t!==En(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ls(n).isEqual(ls(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=It(s.timestampValue),c=It(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=oe(s.doubleValue),c=oe(i.doubleValue);return o===c?us(o)===us(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Jn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Nl(o)!==Nl(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ot(o[u],c[u])))return!1;return!0}(n,e);default:return F()}}function hs(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function zt(n,e){if(n===e)return 0;const t=En(n),r=En(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=oe(i.integerValue||i.doubleValue),u=oe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Ll(n.timestampValue,e.timestampValue);case 4:return Ll(ls(n),ls(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(i,o){const c=qt(i),u=qt(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=H(c[h],u[h]);if(f!==0)return f}return H(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=H(oe(i.latitude),oe(o.latitude));return c!==0?c:H(oe(i.longitude),oe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ml(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,u,h,f;const p=i.fields||{},v=o.fields||{},S=(c=p.value)===null||c===void 0?void 0:c.arrayValue,D=(u=v.value)===null||u===void 0?void 0:u.arrayValue,V=H(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Ml(S,D)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Mt.mapValue&&o===Mt.mapValue)return 0;if(i===Mt.mapValue)return 1;if(o===Mt.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const v=H(u[p],f[p]);if(v!==0)return v;const S=zt(c[u[p]],h[f[p]]);if(S!==0)return S}return H(u.length,f.length)}(n.mapValue,e.mapValue);default:throw F()}}function Ll(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=It(n),r=It(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function Ml(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=zt(t[s],r[s]);if(i)return i}return H(t.length,r.length)}function Xn(n){return ya(n)}function ya(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=It(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ya(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ya(t.fields[o])}`;return s+"}"}(n.mapValue):F()}function sc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ia(n){return!!n&&"integerValue"in n}function ds(n){return!!n&&"arrayValue"in n}function Fl(n){return!!n&&"nullValue"in n}function Ul(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hi(n){return!!n&&"mapValue"in n}function Wi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Qr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function sf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const of={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Sv(n){return"nullValue"in n?li:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?sc(vn.empty(),O.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Wi(n)?of:{mapValue:{}}:F()}function Pv(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?sc(vn.empty(),O.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?of:"mapValue"in n?Wi(n)?{mapValue:{}}:Mt:F()}function Bl(n,e){const t=zt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function $l(n,e){const t=zt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(t)}setAll(e){let t=ae.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Qr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Pn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new De(Qr(this.value))}}function af(n){const e=[];return Pn(n.fields,(t,r)=>{const s=new ae([t]);if(hi(r)){const i=af(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new le(e,0,j.min(),j.min(),j.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new le(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new le(e,2,t,j.min(),j.min(),De.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,j.min(),j.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yn{constructor(e,t){this.position=e,this.inclusive=t}}function jl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),t.key):r=zt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ql(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Cv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cf{}class X extends cf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Dv(e,t,r):t==="array-contains"?new Vv(e,r):t==="in"?new mf(e,r):t==="not-in"?new Nv(e,r):t==="array-contains-any"?new Ov(e,r):new X(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kv(e,r):new xv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(zt(t,this.value)):t!==null&&En(this.value)===En(t)&&this.matchesComparison(zt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends cf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new te(e,t)}matches(e){return Zn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zn(n){return n.op==="and"}function va(n){return n.op==="or"}function ic(n){return uf(n)&&Zn(n)}function uf(n){for(const e of n.filters)if(e instanceof te)return!1;return!0}function Ea(n){if(n instanceof X)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(ic(n))return n.filters.map(e=>Ea(e)).join(",");{const e=n.filters.map(t=>Ea(t)).join(",");return`${n.op}(${e})`}}function lf(n,e){return n instanceof X?function(r,s){return s instanceof X&&r.op===s.op&&r.field.isEqual(s.field)&&ot(r.value,s.value)}(n,e):n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&lf(o,s.filters[c]),!0):!1}(n,e):void F()}function hf(n,e){const t=n.filters.concat(e);return te.create(t,n.op)}function df(n){return n instanceof X?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof te?function(t){return t.op.toString()+" {"+t.getFilters().map(df).join(" ,")+"}"}(n):"Filter"}class Dv extends X{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class kv extends X{constructor(e,t){super(e,"in",t),this.keys=ff("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xv extends X{constructor(e,t){super(e,"not-in",t),this.keys=ff("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ff(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class Vv extends X{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ds(t)&&hs(t.arrayValue,this.value)}}class mf extends X{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hs(this.value.arrayValue,t)}}class Nv extends X{constructor(e,t){super(e,"not-in",t)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hs(this.value.arrayValue,t)}}class Ov extends X{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ds(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>hs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function wa(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Lv(n,e,t,r,s,i,o)}function wn(n){const e=U(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ea(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.ue=t}return e.ue}function ws(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Cv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ql(n.startAt,e.startAt)&&ql(n.endAt,e.endAt)}function Ci(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Di(n,e){return n.filters.filter(t=>t instanceof X&&t.field.isEqual(e))}function zl(n,e,t){let r=li,s=!0;for(const i of Di(n,e)){let o=li,c=!0;switch(i.op){case"<":case"<=":o=Sv(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=li}Bl({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Bl({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Gl(n,e,t){let r=Mt,s=!0;for(const i of Di(n,e)){let o=Mt,c=!0;switch(i.op){case">=":case">":o=Pv(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Mt}$l({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];$l({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pf(n,e,t,r,s,i,o,c){return new Qi(n,e,t,r,s,i,o,c)}function Ji(n){return new Qi(n)}function Kl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Mv(n){return n.collectionGroup!==null}function Jr(n){const e=U(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ne(ae.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Pi(i,r))}),t.has(ae.keyField().canonicalString())||e.ce.push(new Pi(ae.keyField(),r))}return e.ce}function Ge(n){const e=U(n);return e.le||(e.le=Fv(e,Jr(n))),e.le}function Fv(n,e){if(n.limitType==="F")return wa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pi(s.field,i)});const t=n.endAt?new Yn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yn(n.startAt.position,n.startAt.inclusive):null;return wa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ta(n,e,t){return new Qi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xi(n,e){return ws(Ge(n),Ge(e))&&n.limitType===e.limitType}function gf(n){return`${wn(Ge(n))}|lt:${n.limitType}`}function $n(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>df(s)).join(", ")}]`),Hi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(Ge(n))}; limitType=${n.limitType})`}function Ts(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const h=jl(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,Jr(r),s)||r.endAt&&!function(o,c,u){const h=jl(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,Jr(r),s))}(n,e)}function _f(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yf(n){return(e,t)=>{let r=!1;for(const s of Jr(n)){const i=Uv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Uv(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,o,c){const u=o.data.field(i),h=c.data.field(i);return u!==null&&h!==null?zt(u,h):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return nf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new se(O.comparator);function qe(){return Bv}const If=new se(O.comparator);function jr(...n){let e=If;for(const t of n)e=e.insert(t.key,t);return e}function vf(n){let e=If;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function tt(){return Xr()}function Ef(){return Xr()}function Xr(){return new Qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const $v=new se(O.comparator),jv=new ne(O.comparator);function W(...n){let e=jv;for(const t of n)e=e.add(t);return e}const qv=new ne(H);function oc(){return qv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:us(e)?"-0":e}}function wf(n){return{integerValue:""+n}}function zv(n,e){return Xd(e)?wf(e):ac(n,e)}/**
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
 */class Yi{constructor(){this._=void 0}}function Gv(n,e,t){return n instanceof er?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nc(i)&&(i=rc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof tr?Af(n,e):n instanceof nr?bf(n,e):function(s,i){const o=Tf(s,i),c=Hl(o)+Hl(s.Pe);return Ia(o)&&Ia(s.Pe)?wf(c):ac(s.serializer,c)}(n,e)}function Kv(n,e,t){return n instanceof tr?Af(n,e):n instanceof nr?bf(n,e):t}function Tf(n,e){return n instanceof fs?function(r){return Ia(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class er extends Yi{}class tr extends Yi{constructor(e){super(),this.elements=e}}function Af(n,e){const t=Rf(e);for(const r of n.elements)t.some(s=>ot(s,r))||t.push(r);return{arrayValue:{values:t}}}class nr extends Yi{constructor(e){super(),this.elements=e}}function bf(n,e){let t=Rf(e);for(const r of n.elements)t=t.filter(s=>!ot(s,r));return{arrayValue:{values:t}}}class fs extends Yi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Hl(n){return oe(n.integerValue||n.doubleValue)}function Rf(n){return ds(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.field=e,this.transform=t}}function Hv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof tr&&s instanceof tr||r instanceof nr&&s instanceof nr?Jn(r.elements,s.elements,ot):r instanceof fs&&s instanceof fs?ot(r.Pe,s.Pe):r instanceof er&&s instanceof er}(n.transform,e.transform)}class Wv{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zi{}function Pf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new eo(n.key,ke.none()):new dr(n.key,n.data,ke.none());{const t=n.data,r=De.empty();let s=new ne(ae.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wt(n.key,r,new Be(s.toArray()),ke.none())}}function Qv(n,e,t){n instanceof dr?function(s,i,o){const c=s.value.clone(),u=Ql(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof wt?function(s,i,o){if(!di(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ql(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Cf(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Yr(n,e,t,r){return n instanceof dr?function(i,o,c,u){if(!di(i.precondition,o))return c;const h=i.value.clone(),f=Jl(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof wt?function(i,o,c,u){if(!di(i.precondition,o))return c;const h=Jl(i.fieldTransforms,u,o),f=o.data;return f.setAll(Cf(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return di(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Jv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Tf(r.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(r.field,i))}return t||null}function Wl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jn(r,s,(i,o)=>Hv(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dr extends Zi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wt extends Zi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ql(n,e,t){const r=new Map;B(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Kv(o,c,t[s]))}return r}function Jl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,Gv(i,o,e))}return r}class eo extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Df extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ef();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const u=Pf(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Jn(this.mutations,e.mutations,(t,r)=>Wl(t,r))&&Jn(this.baseMutations,e.baseMutations,(t,r)=>Wl(t,r))}}class uc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){B(e.mutations.length===r.length);let s=function(){return $v}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new uc(e,t,r,s)}}/**
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
 */class lc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Xv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,Y;function Yv(n){switch(n){default:return F();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function kf(n){if(n===void 0)return fe("GRPC error has no .code"),C.UNKNOWN;switch(n){case ge.OK:return C.OK;case ge.CANCELLED:return C.CANCELLED;case ge.UNKNOWN:return C.UNKNOWN;case ge.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ge.INTERNAL:return C.INTERNAL;case ge.UNAVAILABLE:return C.UNAVAILABLE;case ge.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ge.NOT_FOUND:return C.NOT_FOUND;case ge.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ge.ABORTED:return C.ABORTED;case ge.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ge.DATA_LOSS:return C.DATA_LOSS;default:return F()}}(Y=ge||(ge={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Zv(){return new TextEncoder}/**
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
 */const eE=new hn([4294967295,4294967295],0);function Xl(n){const e=Zv().encode(n),t=new Fd;return t.update(e),new Uint8Array(t.digest())}function Yl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hn([t,r],0),new hn([s,i],0)]}class hc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new qr(`Invalid padding: ${t}`);if(r<0)throw new qr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new qr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=hn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(hn.fromNumber(r)));return s.compare(eE)===1&&(s=new hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Xl(e),[r,s]=Yl(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hc(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Xl(e),[r,s]=Yl(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class qr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,bs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new As(j.min(),s,new se(H),qe(),W())}}class bs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new bs(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class xf{constructor(e,t){this.targetId=e,this.me=t}}class Vf{constructor(e,t,r=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Zl{constructor(){this.fe=0,this.ge=th(),this.pe=pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F()}}),new bs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=th()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,B(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tE{constructor(e){this.Le=e,this.Be=new Map,this.ke=qe(),this.qe=eh(),this.Qe=new se(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ci(i))if(r===0){const o=new O(i.path);this.Ue(t,o,le.newNoDocument(o,j.min()))}else B(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=qt(r).toUint8Array()}catch(u){if(u instanceof rf)return os("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new hc(o,s,i)}catch(u){return os(u instanceof qr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Ci(c.target)){const u=new O(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,le.newNoDocument(u,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=W();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new As(e,t,this.Qe,this.ke,r);return this.ke=qe(),this.qe=eh(),this.Qe=new se(H),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Zl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ne(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function eh(){return new se(O.comparator)}function th(){return new se(O.comparator)}const nE={asc:"ASCENDING",desc:"DESCENDING"},rE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sE={and:"AND",or:"OR"};class iE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Aa(n,e){return n.useProto3Json||Hi(e)?e:{value:e}}function rr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oE(n,e){return rr(n,e.toTimestamp())}function Le(n){return B(!!n),j.fromTimestamp(function(t){const r=It(t);return new ce(r.seconds,r.nanos)}(n))}function dc(n,e){return ba(n,e).canonicalString()}function ba(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Of(n){const e=ee.fromString(n);return B(zf(e)),e}function ki(n,e){return dc(n.databaseId,e.path)}function dn(n,e){const t=Of(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Ff(t))}function Lf(n,e){return dc(n.databaseId,e)}function Mf(n){const e=Of(n);return e.length===4?ee.emptyPath():Ff(e)}function Ra(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ff(n){return B(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function nh(n,e,t){return{name:ki(n,e),fields:t.value.mapValue.fields}}function aE(n,e,t){const r=dn(n,e.name),s=Le(e.updateTime),i=e.createTime?Le(e.createTime):j.min(),o=new De({mapValue:{fields:e.fields}}),c=le.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function cE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(B(f===void 0||typeof f=="string"),pe.fromBase64String(f||"")):(B(f===void 0||f instanceof Buffer||f instanceof Uint8Array),pe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:kf(h.code);return new L(f,h.message||"")}(o);t=new Vf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dn(n,r.document.name),i=Le(r.document.updateTime),o=r.document.createTime?Le(r.document.createTime):j.min(),c=new De({mapValue:{fields:r.document.fields}}),u=le.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new fi(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dn(n,r.document),i=r.readTime?Le(r.readTime):j.min(),o=le.newNoDocument(s,i),c=r.removedTargetIds||[];t=new fi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dn(n,r.document),i=r.removedTargetIds||[];t=new fi([],i,s,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Xv(s,i),c=r.targetId;t=new xf(c,o)}}return t}function xi(n,e){let t;if(e instanceof dr)t={update:nh(n,e.key,e.value)};else if(e instanceof eo)t={delete:ki(n,e.key)};else if(e instanceof wt)t={update:nh(n,e.key,e.data),updateMask:mE(e.fieldMask)};else{if(!(e instanceof Df))return F();t={verify:ki(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof er)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof nr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fs)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(n,e.precondition)),t}function Sa(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ke.updateTime(Le(i.updateTime)):i.exists!==void 0?ke.exists(i.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let u=null;if("setToServerValue"in c)B(c.setToServerValue==="REQUEST_TIME"),u=new er;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new tr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new nr(f)}else"increment"in c?u=new fs(o,c.increment):F();const h=ae.fromServerFormat(c.fieldPath);return new Sf(h,u)}(n,s)):[];if(e.update){e.update.name;const s=dn(n,e.update.name),i=new De({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new Be(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new wt(s,i,o,t,r)}return new dr(s,i,t,r)}if(e.delete){const s=dn(n,e.delete);return new eo(s,t)}if(e.verify){const s=dn(n,e.verify);return new Df(s,t)}return F()}function uE(n,e){return n&&n.length>0?(B(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Le(s.updateTime):Le(i);return o.isEqual(j.min())&&(o=Le(i)),new Wv(o,s.transformResults||[])}(t,e))):[]}function Uf(n,e){return{documents:[Lf(n,e.path)]}}function Bf(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Lf(n,s);const i=function(h){if(h.length!==0)return qf(te.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:jn(v.field),direction:hE(v.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Aa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function $f(n){let e=Mf(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){B(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const v=jf(p);return v instanceof te&&ic(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(v=>function(D){return new Pi(qn(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(p){let v;return v=typeof p=="object"?p.value:p,Hi(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(p){const v=!!p.before,S=p.values||[];return new Yn(S,v)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const v=!p.before,S=p.values||[];return new Yn(S,v)}(t.endAt)),pf(e,s,o,i,c,"F",u,h)}function lE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qn(t.unaryFilter.field);return X.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qn(t.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qn(t.unaryFilter.field);return X.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qn(t.unaryFilter.field);return X.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return X.create(qn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return te.create(t.compositeFilter.filters.map(r=>jf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function hE(n){return nE[n]}function dE(n){return rE[n]}function fE(n){return sE[n]}function jn(n){return{fieldPath:n.canonicalString()}}function qn(n){return ae.fromServerFormat(n.fieldPath)}function qf(n){return n instanceof X?function(t){if(t.op==="=="){if(Ul(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NAN"}};if(Fl(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ul(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NAN"}};if(Fl(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jn(t.field),op:dE(t.op),value:t.value}}}(n):n instanceof te?function(t){const r=t.getFilters().map(s=>qf(s));return r.length===1?r[0]:{compositeFilter:{op:fE(t.op),filters:r}}}(n):F()}function mE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function zf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,s,i=j.min(),o=j.min(),c=pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.ct=e}}function pE(n,e){let t;if(e.document)t=aE(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),s=An(e.noDocument.readTime);t=le.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const r=O.fromSegments(e.unknownDocument.path),s=An(e.unknownDocument.version);t=le.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ce(s[0],s[1]);return j.fromTimestamp(i)}(e.readTime)),t}function rh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Vi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:ki(i,o.key),fields:o.data.value.mapValue.fields,updateTime:rr(i,o.version.toTimestamp()),createTime:rr(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Tn(e.version)};else{if(!e.isUnknownDocument())return F();r.unknownDocument={path:t.path.toArray(),version:Tn(e.version)}}return r}function Vi(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Tn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function An(n){const e=new ce(n.seconds,n.nanoseconds);return j.fromTimestamp(e)}function cn(n,e){const t=(e.baseMutations||[]).map(i=>Sa(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Sa(n.ct,i)),s=ce.fromMillis(e.localWriteTimeMs);return new cc(e.batchId,s,t,r)}function zr(n){const e=An(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?An(n.lastLimboFreeSnapshotVersion):j.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return B(i.documents.length===1),Ge(Ji(Mf(i.documents[0])))}(n.query):function(i){return Ge($f(i))}(n.query),new pt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,pe.fromBase64String(n.resumeToken))}function Kf(n,e){const t=Tn(e.snapshotVersion),r=Tn(e.lastLimboFreeSnapshotVersion);let s;s=Ci(e.target)?Uf(n.ct,e.target):Bf(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:wn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Hf(n){const e=$f({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ta(e,e.limit,"L"):e}function Zo(n,e){return new lc(e.largestBatchId,Sa(n.ct,e.overlayMutation))}function sh(n,e){const t=e.path.lastSegment();return[n,Oe(e.path.popLast()),t]}function ih(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Tn(r.readTime),documentKey:Oe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{getBundleMetadata(e,t){return oh(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:An(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return oh(e).put(function(s){return{bundleId:s.id,createTime:Tn(Le(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return ah(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Hf(i.bundledQuery),readTime:An(i.readTime)}}(r)})}saveNamedQuery(e,t){return ah(e).put(function(s){return{name:s.name,readTime:Tn(Le(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function oh(n){return Ie(n,"bundles")}function ah(n){return Ie(n,"namedQueries")}/**
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
 */class to{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new to(e,r)}getOverlay(e,t){return xr(e).get(sh(this.userId,t)).next(r=>r?Zo(this.serializer,r):null)}getOverlays(e,t){const r=tt();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new lc(t,o);s.push(this.ht(e,c))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Oe(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(xr(e).j("collectionPathOverlayIndex",c))}),R.waitFor(i)}getOverlaysForCollection(e,t,r){const s=tt(),i=Oe(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return xr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const u of c){const h=Zo(this.serializer,u);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=tt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return xr(e).J({index:"collectionGroupOverlayIndex",range:c},(u,h,f)=>{const p=Zo(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return xr(e).put(function(s,i,o){const[c,u,h]=sh(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:xi(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function xr(n){return Ie(n,"documentOverlays")}/**
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
 */class _E{Pt(e){return Ie(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?pe.fromUint8Array(r):pe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class un{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(oe(e.integerValue));else if("doubleValue"in e){const r=oe(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),us(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=It(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(qt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?sf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Wi(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):F()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(oe(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),O.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}un.vt=new un;function yE(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function ch(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=yE(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class IE{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=ch(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=ch(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class vE{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class EE{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Vr{constructor(){this.jt=new IE,this.Ht=new vE(this.jt),this.Jt=new EE(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class ln{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ln(this.indexId,this.documentKey,this.arrayValue,r)}}function Ct(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=uh(n.arrayValue,e.arrayValue),t!==0?t:(t=uh(n.directionalValue,e.directionalValue),t!==0?t:O.comparator(n.documentKey,e.documentKey)))}function uh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class lh{constructor(e){this.Xt=new ne((t,r)=>ae.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(B(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ga(e);if(t!==void 0&&!this.sn(t))return!1;const r=on(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=r[i];if(!this.on(c,u)||!this._n(this.en[o++],u))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ne(ae.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new ci(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ci(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ci(r.field,r.dir==="asc"?0:1)));return new Si(Si.UNKNOWN_ID,this.collectionId,t,cs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Wf(n){var e,t;if(B(n instanceof X||n instanceof te),n instanceof X){if(n instanceof mf){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>X.create(n.field,"==",i)))||[];return te.create(s,"or")}return n}const r=n.filters.map(s=>Wf(s));return te.create(r,n.op)}function wE(n){if(n.getFilters().length===0)return[];const e=Da(Wf(n));return B(Qf(e)),Pa(e)||Ca(e)?[e]:e.getFilters()}function Pa(n){return n instanceof X}function Ca(n){return n instanceof te&&ic(n)}function Qf(n){return Pa(n)||Ca(n)||function(t){if(t instanceof te&&va(t)){for(const r of t.getFilters())if(!Pa(r)&&!Ca(r))return!1;return!0}return!1}(n)}function Da(n){if(B(n instanceof X||n instanceof te),n instanceof X)return n;if(n.filters.length===1)return Da(n.filters[0]);const e=n.filters.map(r=>Da(r));let t=te.create(e,n.op);return t=Ni(t),Qf(t)?t:(B(t instanceof te),B(Zn(t)),B(t.filters.length>1),t.filters.reduce((r,s)=>fc(r,s)))}function fc(n,e){let t;return B(n instanceof X||n instanceof te),B(e instanceof X||e instanceof te),t=n instanceof X?e instanceof X?function(s,i){return te.create([s,i],"and")}(n,e):hh(n,e):e instanceof X?hh(e,n):function(s,i){if(B(s.filters.length>0&&i.filters.length>0),Zn(s)&&Zn(i))return hf(s,i.getFilters());const o=va(s)?s:i,c=va(s)?i:s,u=o.filters.map(h=>fc(h,c));return te.create(u,"or")}(n,e),Ni(t)}function hh(n,e){if(Zn(e))return hf(e,n.getFilters());{const t=e.filters.map(r=>fc(n,r));return te.create(t,"or")}}function Ni(n){if(B(n instanceof X||n instanceof te),n instanceof X)return n;const e=n.getFilters();if(e.length===1)return Ni(e[0]);if(uf(n))return n;const t=e.map(s=>Ni(s)),r=[];return t.forEach(s=>{s instanceof X?r.push(s):s instanceof te&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:te.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.un=new mc}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Ke.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Ke.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class mc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ne(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ne(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Uint8Array(0);class AE{constructor(e,t){this.databaseId=t,this.cn=new mc,this.ln=new Qt(r=>wn(r),(r,s)=>ws(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Oe(s)};return dh(e).put(i)}return R.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Gd(t),""],!1,!0);return dh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(et(o.parent))}return r})}addFieldIndex(e,t){const r=Nr(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Fn(e);return i.next(c=>{o.put(ih(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Nr(e),s=Fn(e),i=Mn(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Nr(e),r=Mn(e),s=Fn(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return R.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new lh(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=Mn(e);let s=!0;const i=new Map;return R.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=W();const c=[];return R.forEach(i,(u,h)=>{x("IndexedDbIndexManager",`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(u)} to execute ${wn(t)}`);const f=function(M,q){const Q=ga(q);if(Q===void 0)return null;for(const K of Di(M,Q.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(h,u),p=function(M,q){const Q=new Map;for(const K of on(q))for(const w of Di(M,K.fieldPath))switch(w.op){case"==":case"in":Q.set(K.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return Q.set(K.fieldPath.canonicalString(),w.value),Array.from(Q.values())}return null}(h,u),v=function(M,q){const Q=[];let K=!0;for(const w of on(q)){const _=w.kind===0?zl(M,w.fieldPath,M.startAt):Gl(M,w.fieldPath,M.startAt);Q.push(_.value),K&&(K=_.inclusive)}return new Yn(Q,K)}(h,u),S=function(M,q){const Q=[];let K=!0;for(const w of on(q)){const _=w.kind===0?Gl(M,w.fieldPath,M.endAt):zl(M,w.fieldPath,M.endAt);Q.push(_.value),K&&(K=_.inclusive)}return new Yn(Q,K)}(h,u),D=this.In(u,h,v),V=this.In(u,h,S),k=this.Tn(u,h,p),z=this.En(u.indexId,f,D,v.inclusive,V,S.inclusive,k);return R.forEach(z,$=>r.G($,t.limit).next(M=>{M.forEach(q=>{const Q=O.fromSegments(q.documentKey);o.has(Q)||(o=o.add(Q),c.push(Q))})}))}).next(()=>c)}return R.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=wE(te.create(e.filters,"and")).map(r=>wa(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,i.length),h=u/(t!=null?t.length:1),f=[];for(let p=0;p<u;++p){const v=t?this.dn(t[p/h]):Xs,S=this.An(e,v,r[p%h],s),D=this.Rn(e,v,i[p%h],o),V=c.map(k=>this.An(e,v,k,!0));f.push(...this.createRange(S,D,V))}return f}An(e,t,r,s){const i=new ln(e,O.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new ln(e,O.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new lh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return R.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new ne(ae.comparator),f=!1;for(const p of u.filters)for(const v of p.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?f=!0:h=h.add(v.field));for(const p of u.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new Vr;for(const s of on(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);un.vt.It(i,o)}return r.zt()}dn(e){const t=new Vr;return un.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Vr;return un.vt.It(sc(this.databaseId,t),r.Yt(function(i){const o=on(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new Vr);let i=0;for(const o of on(e)){const c=r[i++];for(const u of s)if(this.fn(t,o.fieldPath)&&ds(c))s=this.gn(s,o,c);else{const h=u.Yt(o.kind);un.vt.It(c,h)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const u=new Vr;u.seed(c.zt()),un.vt.It(o,u.Yt(t.kind)),i.push(u)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof X&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Nr(e),s=Fn(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return R.forEach(i,c=>s.get([c.indexId,this.uid]).next(u=>{o.push(function(f,p){const v=p?new cs(p.sequenceNumber,new Ke(An(p.readTime),new O(et(p.documentKey)),p.largestBatchId)):cs.empty(),S=f.fields.map(([D,V])=>new ci(ae.fromServerFormat(D),V));return new Si(f.indexId,f.collectionGroup,S,v)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:H(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Nr(e),i=Fn(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,u=>i.put(ih(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),R.forEach(c,u=>this.wn(e,s,u).next(h=>{const f=this.Sn(i,u);return h.isEqual(f)?R.resolve():this.bn(e,i,u,h,f)}))))})}Dn(e,t,r,s){return Mn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return Mn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=Mn(e);let i=new ne(Ct);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new ln(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new ne(Ct);const s=this.Vn(t,e);if(s==null)return r;const i=ga(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ds(o))for(const c of o.arrayValue.values||[])r=r.add(new ln(t.indexId,e.key,this.dn(c),s))}else r=r.add(new ln(t.indexId,e.key,Xs,s));return r}bn(e,t,r,s,i){x("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,p,v){const S=u.getIterator(),D=h.getIterator();let V=Ln(S),k=Ln(D);for(;V||k;){let z=!1,$=!1;if(V&&k){const M=f(V,k);M<0?$=!0:M>0&&(z=!0)}else V!=null?$=!0:z=!0;z?(p(k),k=Ln(D)):$?(v(V),V=Ln(S)):(V=Ln(S),k=Ln(D))}}(s,i,Ct,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),R.waitFor(o)}yn(e){let t=1;return Fn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Ct(o,c)).filter((o,c,u)=>!c||Ct(o,u[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=Ct(o,e),u=Ct(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&u<0)s.push(o),s.push(o.Zt());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Xs,[]],u=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Xs,[]];i.push(IDBKeyRange.bound(c,u))}return i}Cn(e,t){return Ct(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fh)}getMinOffset(e,t){return R.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||F())).next(fh)}}function dh(n){return Ie(n,"collectionParents")}function Mn(n){return Ie(n,"indexEntries")}function Nr(n){return Ie(n,"indexConfiguration")}function Fn(n){return Ie(n,"indexState")}function fh(n){B(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Za(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ke(e.readTime,e.documentKey,t)}/**
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
 */const mh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Fe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.J({range:o},(f,p,v)=>(c++,v.delete()));i.push(u.next(()=>{B(c===1)}));const h=[];for(const f of t.mutations){const p=Yd(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return R.waitFor(i).next(()=>h)}function Oi(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw F();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(41943040,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);class no{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){B(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new no(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=zn(e),o=Dt(e);return o.add({}).next(c=>{B(typeof c=="number");const u=new cc(c,t,r,s),h=function(S,D,V){const k=V.baseMutations.map($=>xi(S.ct,$)),z=V.mutations.map($=>xi(S.ct,$));return{userId:D,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:k,mutations:z}}(this.serializer,this.userId,u),f=[];let p=new ne((v,S)=>H(v.canonicalString(),S.canonicalString()));for(const v of s){const S=Yd(this.userId,v.key.path,c);p=p.add(v.key.path.popLast()),f.push(o.put(h)),f.push(i.put(S,av))}return p.forEach(v=>{f.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.Fn[c]=u.keys()}),R.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Dt(e).get(t).next(r=>r?(B(r.userId===this.userId),cn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?R.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Dt(e).J({index:"userMutationsIndex",range:s},(o,c,u)=>{c.userId===this.userId&&(B(c.batchId>=r),i=cn(this.serializer,c)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Dt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).U("userMutationsIndex",t).next(r=>r.map(s=>cn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ui(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return zn(e).J({range:s},(o,c,u)=>{const[h,f,p]=o,v=et(f);if(h===this.userId&&t.path.isEqual(v))return Dt(e).get(p).next(S=>{if(!S)throw F();B(S.userId===this.userId),i.push(cn(this.serializer,S))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ne(H);const s=[];return t.forEach(i=>{const o=ui(this.userId,i.path),c=IDBKeyRange.lowerBound(o),u=zn(e).J({range:c},(h,f,p)=>{const[v,S,D]=h,V=et(S);v===this.userId&&i.path.isEqual(V)?r=r.add(D):p.done()});s.push(u)}),R.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=ui(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ne(H);return zn(e).J({range:o},(u,h,f)=>{const[p,v,S]=u,D=et(v);p===this.userId&&r.isPrefixOf(D)?D.length===s&&(c=c.add(S)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Dt(e).get(i).next(o=>{if(o===null)throw F();B(o.userId===this.userId),r.push(cn(this.serializer,o))}))}),R.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Jf(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),R.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return zn(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const u=et(i[1]);s.push(u)}else c.done()}).next(()=>{B(s.length===0)})})}containsKey(e,t){return Xf(e,this.userId,t)}Nn(e){return Yf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Xf(n,e,t){const r=ui(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return zn(n).J({range:i,H:!0},(c,u,h)=>{const[f,p,v]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Dt(n){return Ie(n,"mutations")}function zn(n){return Ie(n,"documentMutations")}function Yf(n){return Ie(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new bn(0)}static kn(){return new bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new bn(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>j.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Un(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(B(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Un(e).J((o,c)=>{const u=zr(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Un(e).J((r,s)=>{const i=zr(s);t(i)})}qn(e){return ph(e).get("targetGlobalKey").next(t=>(B(t!==null),t))}Qn(e,t){return ph(e).put("targetGlobalKey",t)}Kn(e,t){return Un(e).put(Kf(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=wn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Un(e).J({range:s,index:"queryTargetsIndex"},(o,c,u)=>{const h=zr(c);ws(t,h.target)&&(i=h,u.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Ot(e);return t.forEach(o=>{const c=Oe(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),R.waitFor(s)}removeMatchingKeys(e,t,r){const s=Ot(e);return R.forEach(t,i=>{const o=Oe(i.path);return R.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Ot(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ot(e);let i=W();return s.J({range:r,H:!0},(o,c,u)=>{const h=et(o[1]),f=new O(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=Oe(t.path),s=IDBKeyRange.bound([r],[Gd(r)],!1,!0);let i=0;return Ot(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],u,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return Un(e).get(t).next(r=>r?zr(r):null)}}function Un(n){return Ie(n,"targets")}function ph(n){return Ie(n,"targetGlobal")}function Ot(n){return Ie(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class RE{constructor(e){this.Un=e,this.buffer=new ne(gh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();gh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class SE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wt(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ht(t)}await this.Hn(3e5)})}}class PE{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Ue.oe);const r=new RE(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(mh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Bn()<=J.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function CE(n,e){return new PE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t){this.db=e,this.garbageCollector=CE(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Ys(e,r)}removeReference(e,t,r){return Ys(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ys(e,t)}nr(e,t){return function(s,i){let o=!1;return Yf(s).Y(c=>Xf(s,c,i).next(u=>(u&&(o=!0),R.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const u=this.nr(e,o).next(h=>{if(!h)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),Ot(e).delete(function(p){return[0,Oe(p.path)]}(o))))});s.push(u)}}).next(()=>R.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ys(e,t)}tr(e,t){const r=Ot(e);let s,i=Ue.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:u,sequenceNumber:h})=>{o===0?(i!==Ue.oe&&t(new O(et(s)),i),i=h,s=u):i=Ue.oe}).next(()=>{i!==Ue.oe&&t(new O(et(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ys(n,e){return Ot(n).put(function(r,s){return{targetId:0,path:Oe(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.changes=new Qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return rn(e).put(r)}removeEntry(e,t,r){return rn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Vi(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=le.newInvalidDocument(t);return rn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Or(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:le.newInvalidDocument(t)};return rn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Or(t))},(s,i)=>{r={document:this.ir(t,i),size:Oi(i)}}).next(()=>r)}getEntries(e,t){let r=qe();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=qe(),s=new se(O.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,Oi(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return R.resolve();let s=new ne(Ih);t.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound(Or(s.first()),Or(s.last())),o=s.getIterator();let c=o.getNext();return rn(e).J({index:"documentKeyIndex",range:i},(u,h,f)=>{const p=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Ih(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Or(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Vi(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rn(e).U(IDBKeyRange.bound(c,u,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=qe();for(const p of h){const v=this.ir(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);v.isFoundDocument()&&(Ts(t,v)||s.has(v.key))&&(f=f.insert(v.key,v))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=qe();const o=yh(t,r),c=yh(t,Ke.max());return rn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const p=this.ir(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new xE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return _h(e).get("remoteDocumentGlobalKey").next(t=>(B(!!t),t))}rr(e,t){return _h(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=pE(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return le.newInvalidDocument(e)}}function em(n){return new kE(n)}class xE extends Zf{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Qt(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ne((i,o)=>H(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const u=rh(this.cr.serializer,o);s=s.add(i.path.popLast());const h=Oi(u);r+=h-c.size,t.push(this.cr.addEntry(e,i,u))}else if(r-=c.size,this.trackRemovals){const u=rh(this.cr.serializer,o.convertToNoDocument(j.min()));t.push(this.cr.addEntry(e,i,u))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function _h(n){return Ie(n,"remoteDocumentGlobal")}function rn(n){return Ie(n,"remoteDocumentsV14")}function Or(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function yh(n,e){const t=e.documentKey.path.toArray();return[n,Vi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Ih(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=H(t[i],r[i]),s)return s;return s=H(t.length,r.length),s||(s=H(t[t.length-2],r[r.length-2]),s||H(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Yr(r.mutation,s,Be.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=tt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=jr();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=tt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=qe();const o=Xr(),c=function(){return Xr()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof wt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Yr(f.mutation,h,f.mutation.getFieldMask(),ce.now())):o.set(h.key,Be.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new VE(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Xr();let s=new se((o,c)=>o-c),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Be.empty();f=c.applyToLocalView(h,f),r.set(u,f);const p=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=Ef();f.forEach(v=>{if(!i.has(v)){const S=Pf(t.get(v),r.get(v));S!==null&&p.set(v,S),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(tt());let c=-1,u=i;return o.next(h=>R.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,W())).next(f=>({batchId:c,changes:vf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=jr();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,u=>{const h=function(p,v){return new Qi(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,le.newInvalidDocument(f)))});let c=jr();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Yr(f.mutation,h,Be.empty(),ce.now()),Ts(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Le(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Hf(s.bundledQuery),readTime:Le(s.readTime)}}(t)),R.resolve()}}/**
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
 */class OE{constructor(){this.overlays=new se(O.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tt();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=tt(),i=t.length+1,o=new O(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=tt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=tt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return R.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lc(t,r));let i=this.Ir.get(t);i===void 0&&(i=W(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class LE{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.Tr=new ne(Ee.Er),this.dr=new ne(Ee.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ee(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new O(new ee([])),r=new Ee(t,e),s=new Ee(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new O(new ee([])),r=new Ee(t,e),s=new Ee(t,e+1);let i=W();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ee(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return O.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ne(Ee.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cc(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ee(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ne(H);return t.forEach(s=>{const i=new Ee(s,0),o=new Ee(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new Ee(new O(i),0);let c=new ne(H);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.wr)),!0)},o),R.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){B(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return R.forEach(t.mutations,s=>{const i=new Ee(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ee(t,0),s=this.br.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.Mr=e,this.docs=function(){return new se(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():le.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=qe();const o=t.path,c=new O(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Za(Hd(f),r)<=0||(s.has(f.key)||Ts(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F()}Or(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new UE(this)}getSize(e){return R.resolve(this.size)}}class UE extends Zf{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.persistence=e,this.Nr=new Qt(t=>wn(t),ws),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pc,this.targetCount=0,this.kr=bn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new bn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ue(0),this.Kr=!1,this.Kr=!0,this.$r=new LE,this.referenceDelegate=e(this),this.Ur=new BE(this),this.indexManager=new TE,this.remoteDocumentCache=function(s){return new FE(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Gf(t),this.Gr=new NE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new ME(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new $E(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return R.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $E extends Qd{constructor(e){super(),this.currentSequenceNumber=e}}class ro{constructor(e){this.persistence=e,this.Jr=new pc,this.Yr=null}static Zr(e){return new ro(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,j.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.serializer=e}O(e,t,r,s){const i=new Ki("createOrUpgrade",t);r<1&&s>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Vl,{unique:!0}),u.createObjectStore("documentMutations")}(e),vh(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return r<3&&s>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),vh(e)),o=o.next(()=>function(u){const h=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Vl,{unique:!0});const p=h.store("mutations"),v=f.map(S=>p.put(S));return R.waitFor(v)})}(e,i))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore("documentOverlays",{keyPath:Iv});h.createIndex("collectionPathOverlayIndex",vv,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",Ev,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore("remoteDocumentsV14",{keyPath:cv});h.createIndex("documentKeyIndex",uv),h.createIndex("collectionGroupIndex",lv)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:pv}).createIndex("sequenceNumberIndex",gv,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:_v}).createIndex("documentKeyIndex",yv,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Oi(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>R.forEach(c,u=>{B(u.userId===i.userId);const h=cn(this.serializer,u);return Jf(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const u=new ee(o),h=function(p){return[0,Oe(p)]}(u);i.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:Oe(p),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>R.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:mv});const r=t.store("collectionParents"),s=new mc,i=o=>{if(s.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:Oe(u)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const u=new ee(o);return i(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,u],h)=>{const f=et(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=zr(s),o=Kf(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),u=function(p){return p.document?new O(ee.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):F()}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>R.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=em(this.serializer),i=new nm(ro.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:W();cn(this.serializer,u).keys().forEach(p=>f=f.add(p)),c.set(u.userId,f)}),R.forEach(c,(u,h)=>{const f=new Ce(h),p=to.lt(this.serializer,f),v=i.getIndexManager(f),S=no.lt(f,this.serializer,v,i.referenceDelegate);return new tm(s,S,p,v).recalculateAndSaveOverlaysForDocumentKeys(new _a(t,Ue.oe),u).next()})})}}function vh(n){n.createObjectStore("targetDocuments",{keyPath:dv}).createIndex("documentTargetsIndex",fv,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hv,{unique:!0}),n.createObjectStore("targetGlobal")}const ea="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class gc{constructor(e,t,r,s,i,o,c,u,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=v=>Promise.resolve(),!gc.D())throw new L(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new DE(this,s),this.Ai=t+"main",this.serializer=new Gf(u),this.Ri=new Bt(this.Ai,this.hi,new jE(this.serializer)),this.$r=new _E,this.Ur=new bE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=em(this.serializer),this.Gr=new gE,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&fe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(C.FAILED_PRECONDITION,ea);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ue(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Wt(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Lr(e).get("owner").next(t=>R.resolve(this.vi(t)))}Ci(e){return Zs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ie(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return R.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?R.resolve(!0):Lr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(C.FAILED_PRECONDITION,ea);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zs(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new _a(e,Ue.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Zs(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return no.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new AE(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return to.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(u){return u===17?Av:u===16?Tv:u===15?tc:u===14?tf:u===13?ef:u===12?wv:u===11?Zd:void F()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new _a(c,this.Qr?this.Qr.next():Ue.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(C.FAILED_PRECONDITION,Wd);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Lr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(C.FAILED_PRECONDITION,ea)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lr(e).put("owner",t)}static D(){return Bt.D()}bi(e){const t=Lr(e);return t.get("owner").next(r=>this.vi(r)?(x("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(fe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Jh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return fe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lr(n){return Ie(n,"owner")}function Zs(n){return Ie(n,"clientMetadata")}function rm(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _c(e,t.fromCache,r,s)}}/**
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
 */class qE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Jh()?8:Jd(_e())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new qE;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Bn()<=J.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",$n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Bn()<=J.DEBUG&&x("QueryEngine","Query:",$n(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Bn()<=J.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",$n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):R.resolve())}Yi(e,t){if(Kl(t))return R.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ta(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=W(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,c);return this.ns(t,h,o,u.readTime)?this.Yi(e,Ta(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,s){return Kl(t)||s.isEqual(j.min())?R.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?R.resolve(null):(Bn()<=J.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$n(t)),this.rs(e,o,t,Kd(s,-1)).next(c=>c))})}ts(e,t){let r=new ne(yf(e));return t.forEach((s,i)=>{Ts(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Bn()<=J.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",$n(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ke.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new se(H),this._s=new Qt(i=>wn(i),ws),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function im(n,e,t,r){return new zE(n,e,t,r)}async function om(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=W();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function GE(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const p=h.batch,v=p.keys();let S=R.resolve();return v.forEach(D=>{S=S.next(()=>f.getEntry(u,D)).next(V=>{const k=h.docVersions.get(D);B(k!==null),V.version.compareTo(k)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function am(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function KE(n,e){const t=U(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(pe.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(p,S),function(V,k,z){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(v,S,f)&&c.push(t.Ur.updateTargetData(i,S))});let u=qe(),h=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(HE(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(j.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return R.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.os=s,i))}function HE(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=qe();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function WE(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Li(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new pt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function sr(n,e,t){const r=U(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wt(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ka(n,e,t){const r=U(n);let s=j.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=U(u),v=p._s.get(f);return v!==void 0?R.resolve(p.os.get(v)):p.Ur.getTargetData(h,f)}(r,o,Ge(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:j.min(),t?i:W())).next(c=>(lm(r,_f(e),c),{documents:c,Ts:i})))}function cm(n,e){const t=U(n),r=U(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function um(n,e){const t=U(n),r=t.us.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Kd(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(lm(t,e,s),s))}function lm(n,e,t){let r=n.us.get(e)||j.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Eh(n,e){return`firestore_clients_${n}_${e}`}function wh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ta(n,e){return`firestore_targets_${n}_${e}`}class Mi{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new L(s.error.code,s.error.message))),o?new Mi(e,t,s.state,i):(fe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new L(r.error.code,r.error.message))),i?new Zr(e,r.state,s):(fe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=oc();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Xd(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Fi(e,i):(fe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class yc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new yc(t.clientId,t.onlineState):(fe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class xa{constructor(){this.activeTargetIds=oc()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class na{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new se(H),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Eh(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new xa),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Eh(this.persistenceKey,r));if(s){const i=Fi.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ta(this.persistenceKey,e));if(s){const i=Zr.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ta(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x("SharedClientState","READ",e,t),t}setItem(e,t){x("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(x("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Ue.oe;if(i!=null)try{const c=JSON.parse(i);B(typeof c=="number"),o=c}catch(c){fe("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Ue.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new Mi(this.currentUser,e,t,r),i=wh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=wh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=ta(this.persistenceKey,e),i=new Zr(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Fi.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Mi.Rs(new Ce(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return Zr.Rs(s,t)}Ls(e){return yc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(u=>{s.has(u)||o.push(u)}),s.forEach(u=>{i.has(u)||c.push(u)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=oc();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class hm{constructor(){this.so=new xa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new xa,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ei=null;function ra(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class YE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=ra(),u=this.xo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,u,h,s).then(f=>(x("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw os("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=JE[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ra();return new Promise((o,c)=>{const u=new Ud;u.setWithCredentials(!0),u.listenOnce(Bd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ai.NO_ERROR:const f=u.getResponseJson();x(Pe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ai.TIMEOUT:x(Pe,`RPC '${e}' ${i} timed out`),c(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case ai.HTTP_ERROR:const p=u.getStatus();if(x(Pe,`RPC '${e}' ${i} failed with status:`,p,"response text:",u.getResponseText()),p>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const D=function(k){const z=k.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(z)>=0?z:C.UNKNOWN}(S.status);c(new L(D,S.message))}else c(new L(C.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new L(C.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{x(Pe,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);x(Pe,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=ra(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qd(),c=jd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");x(Pe,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);let v=!1,S=!1;const D=new XE({Io:k=>{S?x(Pe,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(v||(x(Pe,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),x(Pe,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),V=(k,z,$)=>{k.listen(z,M=>{try{$(M)}catch(q){setTimeout(()=>{throw q},0)}})};return V(p,$r.EventType.OPEN,()=>{S||(x(Pe,`RPC '${e}' stream ${s} transport opened.`),D.yo())}),V(p,$r.EventType.CLOSE,()=>{S||(S=!0,x(Pe,`RPC '${e}' stream ${s} transport closed`),D.So())}),V(p,$r.EventType.ERROR,k=>{S||(S=!0,os(Pe,`RPC '${e}' stream ${s} transport errored:`,k),D.So(new L(C.UNAVAILABLE,"The operation could not be completed")))}),V(p,$r.EventType.MESSAGE,k=>{var z;if(!S){const $=k.data[0];B(!!$);const M=$,q=M.error||((z=M[0])===null||z===void 0?void 0:z.error);if(q){x(Pe,`RPC '${e}' stream ${s} received error:`,q);const Q=q.status;let K=function(y){const I=ge[y];if(I!==void 0)return kf(I)}(Q),w=q.message;K===void 0&&(K=C.INTERNAL,w="Unknown error status: "+Q+" with message "+q.message),S=!0,D.So(new L(K,w)),p.close()}else x(Pe,`RPC '${e}' stream ${s} received:`,$),D.bo($)}}),V(c,$d.STAT_EVENT,k=>{k.stat===pa.PROXY?x(Pe,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===pa.NOPROXY&&x(Pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dm(){return typeof window<"u"?window:null}function mi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){return new iE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,r,s,i,o,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZE extends mm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=cE(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Le(o.readTime):j.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ra(this.serializer),t.addTarget=function(i,o){let c;const u=o.target;if(c=Ci(u)?{documents:Uf(i,u)}:{query:Bf(i,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Nf(i,o.resumeToken);const h=Aa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=rr(i,o.snapshotVersion.toTimestamp());const h=Aa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=lE(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ra(this.serializer),t.removeTarget=e,this.a_(t)}}class ew extends mm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return B(!!e.streamToken),this.lastStreamToken=e.streamToken,B(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=uE(e.writeResults,e.commitTime),r=Le(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ra(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xi(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,ba(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,ba(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fe(t),this.D_=!1):x("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Cn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=U(u);h.L_.add(4),await Rs(h),h.q_.set("Unknown"),h.L_.delete(4),await io(h)}(this))})}),this.q_=new nw(r,s)}}async function io(n){if(Cn(n))for(const e of n.B_)await e(!0)}async function Rs(n){for(const e of n.B_)await e(!1)}function oo(n,e){const t=U(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ec(t)?vc(t):mr(t).r_()&&Ic(t,e))}function ir(n,e){const t=U(n),r=mr(t);t.N_.delete(e),r.r_()&&pm(t,e),t.N_.size===0&&(r.r_()?r.o_():Cn(t)&&t.q_.set("Unknown"))}function Ic(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mr(n).A_(e)}function pm(n,e){n.Q_.xe(e),mr(n).R_(e)}function vc(n){n.Q_=new tE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),mr(n).start(),n.q_.v_()}function Ec(n){return Cn(n)&&!mr(n).n_()&&n.N_.size>0}function Cn(n){return U(n).L_.size===0}function gm(n){n.Q_=void 0}async function sw(n){n.q_.set("Online")}async function iw(n){n.N_.forEach((e,t)=>{Ic(n,e)})}async function ow(n,e){gm(n),Ec(n)?(n.q_.M_(e),vc(n)):n.q_.set("Unknown")}async function aw(n,e,t){if(n.q_.set("Online"),e instanceof Vf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ui(n,r)}else if(e instanceof fi?n.Q_.Ke(e):e instanceof xf?n.Q_.He(e):n.Q_.We(e),!t.isEqual(j.min()))try{const r=await am(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(pe.EMPTY_BYTE_STRING,f.snapshotVersion)),pm(i,u);const p=new pt(f.target,u,h,f.sequenceNumber);Ic(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Ui(n,r)}}async function Ui(n,e,t){if(!Wt(e))throw e;n.L_.add(1),await Rs(n),n.q_.set("Offline"),t||(t=()=>am(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await io(n)})}function _m(n,e){return e().catch(t=>Ui(n,t,e))}async function fr(n){const e=U(n),t=Gt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cw(e);)try{const s=await WE(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,uw(e,s)}catch(s){await Ui(e,s)}ym(e)&&Im(e)}function cw(n){return Cn(n)&&n.O_.length<10}function uw(n,e){n.O_.push(e);const t=Gt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ym(n){return Cn(n)&&!Gt(n).n_()&&n.O_.length>0}function Im(n){Gt(n).start()}async function lw(n){Gt(n).p_()}async function hw(n){const e=Gt(n);for(const t of n.O_)e.m_(t.mutations)}async function dw(n,e,t){const r=n.O_.shift(),s=uc.from(r,e,t);await _m(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await fr(n)}async function fw(n,e){e&&Gt(n).V_&&await async function(r,s){if(function(o){return Yv(o)&&o!==C.ABORTED}(s.code)){const i=r.O_.shift();Gt(r).s_(),await _m(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fr(r)}}(n,e),ym(n)&&Im(n)}async function Ah(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Cn(t);t.L_.add(3),await Rs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await io(t)}async function Va(n,e){const t=U(n);e?(t.L_.delete(2),await io(t)):e||(t.L_.add(2),await Rs(t),t.q_.set("Unknown"))}function mr(n){return n.K_||(n.K_=function(t,r,s){const i=U(t);return i.w_(),new ZE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:sw.bind(null,n),Ro:iw.bind(null,n),mo:ow.bind(null,n),d_:aw.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ec(n)?vc(n):n.q_.set("Unknown")):(await n.K_.stop(),gm(n))})),n.K_}function Gt(n){return n.U_||(n.U_=function(t,r,s){const i=U(t);return i.w_(),new ew(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:lw.bind(null,n),mo:fw.bind(null,n),f_:hw.bind(null,n),g_:dw.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await fr(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new wc(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tc(n,e){if(fe("AsyncQueue",`${e}: ${n}`),Wt(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=jr(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new Qn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.W_=new se(O.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class or{constructor(e,t,r,s,i,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new or(e,t,Qn.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class pw{constructor(){this.queries=Rh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=U(t),i=s.queries;s.queries=Rh(),i.forEach((o,c)=>{for(const u of c.j_)u.onError(r)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function Rh(){return new Qt(n=>gf(n),Xi)}async function vm(n,e){const t=U(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new mw,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Tc(o,`Initialization of query '${$n(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Ac(t)}async function Em(n,e){const t=U(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function gw(n,e){const t=U(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Ac(t)}function _w(n,e,t){const r=U(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Ac(n){n.Y_.forEach(e=>{e.next()})}var Na,Sh;(Sh=Na||(Na={})).ea="default",Sh.Cache="cache";class wm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Na.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.key=e}}class Am{constructor(e){this.key=e}}class yw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=yf(e),this.Ra=new Qn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new bh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),S=Ts(this.query,p)?p:null,D=!!v&&this.mutatedKeys.has(v.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;v&&S?v.data.isEqual(S.data)?D!==V&&(r.track({type:3,doc:S}),k=!0):this.ga(v,S)||(r.track({type:2,doc:S}),k=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(c=!0)):!v&&S?(r.track({type:0,doc:S}),k=!0):v&&!S&&(r.track({type:1,doc:v}),k=!0,(u||h)&&(c=!0)),k&&(S?(o=o.add(S),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,D){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return V(S)-V(D)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new or(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Am(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Tm(r))}),t}ba(e){this.Ta=e.Ts,this.da=W();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return or.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Iw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vw{constructor(e){this.key=e,this.va=!1}}class Ew{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Qt(c=>gf(c),Xi),this.Ma=new Map,this.xa=new Set,this.Oa=new se(O.comparator),this.Na=new Map,this.La=new pc,this.Ba={},this.ka=new Map,this.qa=bn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ww(n,e,t=!0){const r=ao(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await bm(r,e,t,!0),s}async function Tw(n,e){const t=ao(n);await bm(t,e,!0,!1)}async function bm(n,e,t,r){const s=await Li(n.localStore,Ge(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await bc(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&oo(n.remoteStore,s),c}async function bc(n,e,t,r,s){n.Ka=(p,v,S)=>async function(V,k,z,$){let M=k.view.ma(z);M.ns&&(M=await ka(V.localStore,k.query,!1).then(({documents:w})=>k.view.ma(w,M)));const q=$&&$.targetChanges.get(k.targetId),Q=$&&$.targetMismatches.get(k.targetId)!=null,K=k.view.applyChanges(M,V.isPrimaryClient,q,Q);return Oa(V,k.targetId,K.wa),K.snapshot}(n,p,v,S);const i=await ka(n.localStore,e,!0),o=new yw(e,i.Ts),c=o.ma(i.documents),u=bs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,u);Oa(n,t,h.wa);const f=new Iw(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Aw(n,e,t){const r=U(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Xi(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sr(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ir(r.remoteStore,s.targetId),ar(r,s.targetId)}).catch(Ht)):(ar(r,s.targetId),await sr(r.localStore,s.targetId,!0))}async function bw(n,e){const t=U(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ir(t.remoteStore,r.targetId))}async function Rw(n,e,t){const r=Cc(n);try{const s=await function(o,c){const u=U(o),h=ce.now(),f=c.reduce((S,D)=>S.add(D.key),W());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=qe(),V=W();return u.cs.getEntries(S,f).next(k=>{D=k,D.forEach((z,$)=>{$.isValidDocument()||(V=V.add(z))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,D)).next(k=>{p=k;const z=[];for(const $ of c){const M=Jv($,p.get($.key).overlayedDocument);M!=null&&z.push(new wt($.key,M,af(M.value.mapValue),ke.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,z,c)}).next(k=>{v=k;const z=k.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(S,k.batchId,z)})}).then(()=>({batchId:v.batchId,changes:vf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new se(H)),h=h.insert(c,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await Jt(r,s.changes),await fr(r.remoteStore)}catch(s){const i=Tc(s,"Failed to persist write");t.reject(i)}}async function Rm(n,e){const t=U(n);try{const r=await KE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?B(o.va):s.removedDocuments.size>0&&(B(o.va),o.va=!1))}),await Jt(t,r,e)}catch(r){await Ht(r)}}function Ph(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=U(o);u.onlineState=c;let h=!1;u.queries.forEach((f,p)=>{for(const v of p.j_)v.Z_(c)&&(h=!0)}),h&&Ac(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sw(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new se(O.comparator);o=o.insert(i,le.newNoDocument(i,j.min()));const c=W().add(i),u=new As(j.min(),new Map,new se(H),o,c);await Rm(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Pc(r)}else await sr(r.localStore,e,!1).then(()=>ar(r,e,t)).catch(Ht)}async function Pw(n,e){const t=U(n),r=e.batch.batchId;try{const s=await GE(t.localStore,e);Sc(t,r,null),Rc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Jt(t,s)}catch(s){await Ht(s)}}async function Cw(n,e,t){const r=U(n);try{const s=await function(o,c){const u=U(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(p=>(B(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Sc(r,e,t),Rc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Jt(r,s)}catch(s){await Ht(s)}}function Rc(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Sc(n,e,t){const r=U(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ar(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Sm(n,r)})}function Sm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ir(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Pc(n))}function Oa(n,e,t){for(const r of t)r instanceof Tm?(n.La.addReference(r.key,e),Dw(n,r)):r instanceof Am?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Sm(n,r.key)):F()}function Dw(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(r),Pc(n))}function Pc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new O(ee.fromString(e)),r=n.qa.next();n.Na.set(r,new vw(t)),n.Oa=n.Oa.insert(t,r),oo(n.remoteStore,new pt(Ge(Ji(t.path)),r,"TargetPurposeLimboResolution",Ue.oe))}}async function Jt(n,e,t){const r=U(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{o.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=_c.Wi(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=U(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,v=>R.forEach(v.$i,S=>f.persistence.referenceDelegate.addReference(p,v.targetId,S)).next(()=>R.forEach(v.Ui,S=>f.persistence.referenceDelegate.removeReference(p,v.targetId,S)))))}catch(p){if(!Wt(p))throw p;x("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const S=f.os.get(v),D=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(v,V)}}}(r.localStore,i))}async function kw(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await om(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new L(C.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jt(t,r.hs)}}function xw(n,e){const t=U(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let s=W();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function Vw(n,e){const t=U(n),r=await ka(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&Oa(t,e.targetId,s.wa),s}async function Nw(n,e){const t=U(n);return um(t.localStore,e).then(r=>Jt(t,r))}async function Ow(n,e,t,r){const s=U(n),i=await function(c,u){const h=U(c),f=U(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,u).next(v=>v?h.localDocuments.getDocuments(p,v):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await fr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Sc(s,e,r||null),Rc(s,e),function(c,u){U(U(c).mutationQueue).On(u)}(s.localStore,e)):F(),await Jt(s,i)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Lw(n,e){const t=U(n);if(ao(t),Cc(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Ch(t,r.toArray());t.Qa=!0,await Va(t.remoteStore,!0);for(const i of s)oo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(ar(t,o),sr(t.localStore,o,!0))),ir(t.remoteStore,o)}),await s,await Ch(t,r),function(o){const c=U(o);c.Na.forEach((u,h)=>{ir(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new se(O.comparator)}(t),t.Qa=!1,await Va(t.remoteStore,!1)}}async function Ch(n,e,t){const r=U(n),s=[],i=[];for(const o of e){let c;const u=r.Ma.get(o);if(u&&u.length!==0){c=await Li(r.localStore,Ge(u[0]));for(const h of u){const f=r.Fa.get(h),p=await Vw(r,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await cm(r.localStore,o);c=await Li(r.localStore,h),await bc(r,Pm(h),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function Pm(n){return pf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Mw(n){return function(t){return U(U(t).persistence).Qi()}(U(n).localStore)}async function Fw(n,e,t,r){const s=U(n);if(s.Qa)return void x("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await um(s.localStore,_f(i[0])),c=As.createSynthesizedRemoteEventForCurrentChange(e,t==="current",pe.EMPTY_BYTE_STRING);await Jt(s,o,c);break}case"rejected":await sr(s.localStore,e,!0),ar(s,e,r);break;default:F()}}async function Uw(n,e,t){const r=ao(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){x("SyncEngine","Adding an already active target "+s);continue}const i=await cm(r.localStore,s),o=await Li(r.localStore,i);await bc(r,Pm(i),o.targetId,!1,o.resumeToken),oo(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await sr(r.localStore,s,!1).then(()=>{ir(r.remoteStore,s),ar(r,s)}).catch(Ht)}}function ao(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sw.bind(null,e),e.Ca.d_=gw.bind(null,e.eventManager),e.Ca.$a=_w.bind(null,e.eventManager),e}function Cc(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cw.bind(null,e),e}class ms{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=so(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return im(this.persistence,new sm,e.initialUser,this.serializer)}Ga(e){return new nm(ro.Zr,this.serializer)}Wa(e){return new hm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ms.provider={build:()=>new ms};class Cm extends ms{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Cc(this.Ja.syncEngine),await fr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return im(this.persistence,new sm,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new SE(r,e.asyncQueue,t)}Ha(e,t){const r=new iv(t,this.persistence);return new sv(e.asyncQueue,r)}Ga(e){const t=rm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new gc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,dm(),mi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new hm}}class Bw extends Cm{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof na&&(this.sharedClientState.syncEngine={no:Ow.bind(null,t),ro:Fw.bind(null,t),io:Uw.bind(null,t),Qi:Mw.bind(null,t),eo:Nw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await Lw(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=dm();if(!na.D(t))throw new L(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=rm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new na(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class ps{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ph(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kw.bind(null,this.syncEngine),await Va(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pw}()}createDatastore(e){const t=so(e.databaseInfo.databaseId),r=function(i){return new YE(i)}(e.databaseInfo);return function(i,o,c,u){return new tw(i,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new rw(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Ph(this.syncEngine,t,0),function(){return Th.D()?new Th:new QE}())}createSyncEngine(e,t){return function(s,i,o,c,u,h,f){const p=new Ew(s,i,o,c,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=U(s);x("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Rs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ps.provider={build:()=>new ps};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ce.UNAUTHENTICATED,this.clientId=zd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Tc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sa(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Dh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jw(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ah(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ah(e.remoteStore,s)),n._onlineComponents=e}async function jw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await sa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;os("Error using user provided cache. Falling back to memory cache: "+t),await sa(n,new ms)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await sa(n,new ms);return n._offlineComponents}async function km(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Dh(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Dh(n,new ps))),n._onlineComponents}function qw(n){return km(n).then(e=>e.syncEngine)}async function xm(n){const e=await km(n),t=e.eventManager;return t.onListen=ww.bind(null,e.syncEngine),t.onUnlisten=Aw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bw.bind(null,e.syncEngine),t}function zw(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new Dm({next:v=>{f.Za(),o.enqueueAndForget(()=>Em(i,p));const S=v.docs.has(c);!S&&v.fromCache?h.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&u&&u.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new wm(Ji(c.path),f,{includeMetadataChanges:!0,_a:!0});return vm(i,p)}(await xm(n),n.asyncQueue,e,t,r)),r.promise}function Gw(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new Dm({next:v=>{f.Za(),o.enqueueAndForget(()=>Em(i,p)),v.fromCache&&u.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new wm(c,f,{includeMetadataChanges:!0,_a:!0});return vm(i,p)}(await xm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Vm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Kw(n,e,t,r){if(e===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xh(n){if(!O.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vh(n){if(O.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function at(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dc(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WI;switch(r.type){case"firstParty":return new XI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=kh.get(t);r&&(x("ComponentProvider","Removing Datastore"),kh.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new co(this.firestore,e,this._query)}}class $e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class $t extends co{constructor(e,t,r){super(e,t,Ji(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new O(e))}withConverter(e){return new $t(this.firestore,e,this._path)}}function Ss(n,e,...t){if(n=me(n),Nm("collection","path",e),n instanceof kc){const r=ee.fromString(e,...t);return Vh(r),new $t(n,null,r)}{if(!(n instanceof $e||n instanceof $t))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Vh(r),new $t(n.firestore,null,r)}}function Me(n,e,...t){if(n=me(n),arguments.length===1&&(e=zd.newId()),Nm("doc","path",e),n instanceof kc){const r=ee.fromString(e,...t);return xh(r),new $e(n,null,new O(r))}{if(!(n instanceof $e||n instanceof $t))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return xh(r),new $e(n.firestore,n instanceof $t?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fm(this,"async_queue_retry"),this.Vu=()=>{const r=mi();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new it;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Wt(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw fe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=wc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Dn extends kc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Oh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Oh(e),this._firestoreClient=void 0,await e}}}function Hw(n,e,t){t||(t="(default)");const r=ji(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(ns(i,e))return s;throw new L(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function xc(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ww(n),n._firestoreClient}function Ww(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,h,f){return new Rv(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Vm(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $w(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(pe.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cr(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
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
 */class Nc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=/^__.*__$/;class Jw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new dr(e,this.data,t,this.fieldTransforms)}}class Om{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Lm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Oc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Oc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Lm(this.Cu)&&Qw.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Xw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||so(e)}Qu(e,t,r,s=!1){return new Oc({Cu:e,methodName:t,qu:r,path:ae.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lc(n){const e=n._freezeSettings(),t=so(n._databaseId);return new Xw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Mm(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Fc("Data must be an object, but it was:",o,r);const c=Fm(r,o);let u,h;if(i.merge)u=new Be(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const v=La(e,p,t);if(!o.contains(v))throw new L(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Bm(f,v)||f.push(v)}u=new Be(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Jw(new De(c),u,h)}class ho extends lo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ho}}class Mc extends lo{_toFieldTransform(e){return new Sf(e.path,new er)}isEqual(e){return e instanceof Mc}}function Yw(n,e,t,r){const s=n.Qu(1,e,t);Fc("Data must be an object, but it was:",s,r);const i=[],o=De.empty();Pn(r,(u,h)=>{const f=Uc(e,u,t);h=me(h);const p=s.Nu(f);if(h instanceof ho)i.push(f);else{const v=fo(h,p);v!=null&&(i.push(f),o.set(f,v))}});const c=new Be(i);return new Om(o,c,s.fieldTransforms)}function Zw(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[La(e,r,t)],u=[s];if(i.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(La(e,i[v])),u.push(i[v+1]);const h=[],f=De.empty();for(let v=c.length-1;v>=0;--v)if(!Bm(h,c[v])){const S=c[v];let D=u[v];D=me(D);const V=o.Nu(S);if(D instanceof ho)h.push(S);else{const k=fo(D,V);k!=null&&(h.push(S),f.set(S,k))}}const p=new Be(h);return new Om(f,p,o.fieldTransforms)}function fo(n,e){if(Um(n=me(n)))return Fc("Unsupported field value:",e,n),Fm(n,e);if(n instanceof lo)return function(r,s){if(!Lm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=fo(c,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ce.fromDate(r);return{timestampValue:rr(s.serializer,i)}}if(r instanceof ce){const i=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rr(s.serializer,i)}}if(r instanceof Vc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cr)return{bytesValue:Nf(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nc)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return ac(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Dc(r)}`)}(n,e)}function Fm(n,e){const t={};return nf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(n,(r,s)=>{const i=fo(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Um(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof Vc||n instanceof cr||n instanceof $e||n instanceof lo||n instanceof Nc)}function Fc(n,e,t){if(!Um(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Dc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function La(n,e,t){if((e=me(e))instanceof uo)return e._internalPath;if(typeof e=="string")return Uc(n,e);throw Bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const eT=new RegExp("[~\\*/\\[\\]]");function Uc(n,e,t){if(e.search(eT)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new uo(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new L(C.INVALID_ARGUMENT,c+n+u)}function Bm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tT extends $m{data(){return super.data()}}function jm(n,e){return typeof e=="string"?Uc(n,e):e instanceof uo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rT{convertValue(e,t="none"){switch(En(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Pn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>oe(o.doubleValue));return new Nc(i)}convertGeoPoint(e){return new Vc(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=rc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const t=It(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);B(zf(r));const s=new vn(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||fe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zm extends $m{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(jm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class pi extends zm{data(e={}){return super.data(e)}}class sT{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Gr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new pi(this._firestore,this._userDataWriter,r.key,r,new Gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:iT(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function iT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n){n=at(n,$e);const e=at(n.firestore,Dn);return zw(xc(e),n._key).then(t=>aT(e,n,t))}class Gm extends rT{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function mo(n){n=at(n,co);const e=at(n.firestore,Dn),t=xc(e),r=new Gm(e);return nT(n._query),Gw(t,n._query).then(s=>new sT(e,r,n,s))}function Bc(n,e,t){n=at(n,$e);const r=at(n.firestore,Dn),s=qm(n.converter,e);return _o(r,[Mm(Lc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ke.none())])}function po(n,e,t,...r){n=at(n,$e);const s=at(n.firestore,Dn),i=Lc(s);let o;return o=typeof(e=me(e))=="string"||e instanceof uo?Zw(i,"updateDoc",n._key,e,t,r):Yw(i,"updateDoc",n._key,e),_o(s,[o.toMutation(n._key,ke.exists(!0))])}function go(n){return _o(at(n.firestore,Dn),[new eo(n._key,ke.none())])}function oT(n,e){const t=at(n.firestore,Dn),r=Me(n),s=qm(n.converter,e);return _o(t,[Mm(Lc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function _o(n,e){return function(r,s){const i=new it;return r.asyncQueue.enqueueAndForget(async()=>Rw(await qw(r),s,i)),i.promise}(xc(n),e)}function aT(n,e,t){const r=t.docs.get(e._key),s=new Gm(n);return new zm(n,s,e._key,r,new Gr(t.hasPendingWrites,t.fromCache),e.converter)}class cT{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=dT(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function uT(n){return new cT(n)}class lT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ps.provider,this._offlineComponentProvider={build:t=>new Cm(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class hT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ps.provider,this._offlineComponentProvider={build:t=>new Bw(t,e==null?void 0:e.cacheSizeBytes)}}}function dT(n){return new lT(void 0)}function fT(){return new hT}function $c(){return new Mc("serverTimestamp")}(function(e,t=!0){(function(s){hr=s})(Sn),gn(new jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Dn(new QI(r.getProvider("auth-internal")),new ZI(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),nt(Dl,"4.7.3",e),nt(Dl,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="firebasestorage.googleapis.com",Hm="storageBucket",mT=2*60*1e3,pT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends ct{constructor(e,t,r=0){super(ia(e),`Firebase Storage: ${t} (${ia(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ia(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var he;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(he||(he={}));function ia(n){return"storage/"+n}function jc(){const n="An unknown error occurred, please check the error payload for server response.";return new de(he.UNKNOWN,n)}function gT(n){return new de(he.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function _T(n){return new de(he.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(he.UNAUTHENTICATED,n)}function IT(){return new de(he.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vT(n){return new de(he.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ET(){return new de(he.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wT(){return new de(he.CANCELED,"User canceled the upload/download.")}function TT(n){return new de(he.INVALID_URL,"Invalid URL '"+n+"'.")}function AT(n){return new de(he.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function bT(){return new de(he.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hm+"' property when initializing the app?")}function RT(){return new de(he.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ST(){return new de(he.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PT(n){return new de(he.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ma(n){return new de(he.INVALID_ARGUMENT,n)}function Wm(){return new de(he.APP_DELETED,"The Firebase app was deleted.")}function CT(n){return new de(he.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function es(n,e){return new de(he.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Mr(n){throw new de(he.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(r.path==="")return r;throw AT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(q){q.path_=decodeURIComponent(q.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",S=new RegExp(`^https?://${p}/${f}/b/${s}/o${v}`,"i"),D={bucket:1,path:3},V=t===Km?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",z=new RegExp(`^https?://${V}/${s}/${k}`,"i"),M=[{regex:c,indices:u,postModify:i},{regex:S,indices:D,postModify:h},{regex:z,indices:{bucket:1,path:2},postModify:h}];for(let q=0;q<M.length;q++){const Q=M[q],K=Q.regex.exec(e);if(K){const w=K[Q.indices.bucket];let _=K[Q.indices.path];_||(_=""),r=new ze(w,_),Q.postModify(r);break}}if(r==null)throw TT(e);return r}}class DT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let h=!1;function f(...k){h||(h=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,n(S,u())},k)}function v(){i&&clearTimeout(i)}function S(k,...z){if(h){v();return}if(k){v(),f.call(null,k,...z);return}if(u()||o){v(),f.call(null,k,...z);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,p(M)}let D=!1;function V(k){D||(D=!0,v(),!h&&(s!==null?(k||(c=2),clearTimeout(s),p(0)):k||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,V(!0)},t),V}function xT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(n){return n!==void 0}function NT(n){return typeof n=="object"&&!Array.isArray(n)}function qc(n){return typeof n=="string"||n instanceof String}function Lh(n){return zc()&&n instanceof Blob}function zc(){return typeof Blob<"u"}function Mh(n,e,t,r){if(r<e)throw Ma(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ma(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Qm(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var fn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(fn||(fn={}));/**
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
 */function OT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,r,s,i,o,c,u,h,f,p,v=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,D)=>{this.resolve_=S,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ti(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===fn.NO_ERROR,u=i.getStatus();if(!c||OT(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===fn.ABORT;r(!1,new ti(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new ti(h,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());VT(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=jc();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Wm():wT();o(u)}else{const u=ET();o(u)}};this.canceled_?t(!1,new ti(!1,null,!0)):this.backoffId_=kT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ti{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function MT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function FT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function BT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function $T(n,e,t,r,s,i,o=!0){const c=Qm(n.urlParams),u=n.url+c,h=Object.assign({},n.headers);return UT(h,e),MT(h,t),FT(h,i),BT(h,r),new LT(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qT(...n){const e=jT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(zc())return new Blob(n);throw new de(he.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function GT(n){if(typeof atob>"u")throw PT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oa{constructor(e,t){this.data=e,this.contentType=t||null}}function Jm(n,e){switch(n){case Qe.RAW:return new oa(Xm(e));case Qe.BASE64:case Qe.BASE64URL:return new oa(Ym(n,e));case Qe.DATA_URL:return new oa(HT(e),WT(e))}throw jc()}function Xm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function KT(n){let e;try{e=decodeURIComponent(n)}catch{throw es(Qe.DATA_URL,"Malformed data URL.")}return Xm(e)}function Ym(n,e){switch(n){case Qe.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw es(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Qe.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw es(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=GT(e)}catch(s){throw s.message.includes("polyfill")?s:es(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Zm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw es(Qe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=QT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HT(n){const e=new Zm(n);return e.base64?Ym(Qe.BASE64,e.rest):KT(e.rest)}function WT(n){return new Zm(n).contentType}function QT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){let r=0,s="";Lh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Lh(this.data_)){const r=this.data_,s=zT(r,e,t);return s===null?null:new Lt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Lt(r,!0)}}static getBlob(...e){if(zc()){const t=e.map(r=>r instanceof Lt?r.data_:r);return new Lt(qT.apply(null,t))}else{const t=e.map(o=>qc(o)?Jm(Qe.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Lt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){let e;try{e=JSON.parse(n)}catch{return null}return NT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function tp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n,e){return e}class Ne{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||YT}}let ni=null;function ZT(n){return!qc(n)||n.length<2?n:tp(n)}function np(){if(ni)return ni;const n=[];n.push(new Ne("bucket")),n.push(new Ne("generation")),n.push(new Ne("metageneration")),n.push(new Ne("name","fullPath",!0));function e(i,o){return ZT(o)}const t=new Ne("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Ne("size");return s.xform=r,n.push(s),n.push(new Ne("timeCreated")),n.push(new Ne("updated")),n.push(new Ne("md5Hash",null,!0)),n.push(new Ne("cacheControl",null,!0)),n.push(new Ne("contentDisposition",null,!0)),n.push(new Ne("contentEncoding",null,!0)),n.push(new Ne("contentLanguage",null,!0)),n.push(new Ne("contentType",null,!0)),n.push(new Ne("metadata","customMetadata",!0)),ni=n,ni}function eA(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new ze(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function tA(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return eA(r,n),r}function rp(n,e,t){const r=ep(e);return r===null?null:tA(n,r,t)}function nA(n,e,t,r){const s=ep(e);if(s===null||!qc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=n.bucket,p=n.fullPath,v="/b/"+o(f)+"/o/"+o(p),S=Gc(v,t,r),D=Qm({alt:"media",token:h});return S+D})[0]}function rA(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class sp{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n){if(!n)throw jc()}function sA(n,e){function t(r,s){const i=rp(n,s,e);return ip(i!==null),i}return t}function iA(n,e){function t(r,s){const i=rp(n,s,e);return ip(i!==null),nA(i,s,n.host,n._protocol)}return t}function op(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=IT():s=yT():t.getStatus()===402?s=_T(n.bucket):t.getStatus()===403?s=vT(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function oA(n){const e=op(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=gT(n.path)),i.serverResponse=s.serverResponse,i}return t}function aA(n,e,t){const r=e.fullServerUrl(),s=Gc(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new sp(s,i,iA(n,t),o);return c.errorHandler=oA(e),c}function cA(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function uA(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=cA(null,e)),r}function lA(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let q=0;q<2;q++)M=M+Math.random().toString().slice(2);return M}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const h=uA(e,r,s),f=rA(h,t),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,v=`\r
--`+u+"--",S=Lt.getBlob(p,r,v);if(S===null)throw RT();const D={name:h.fullPath},V=Gc(i,n.host,n._protocol),k="POST",z=n.maxUploadRetryTime,$=new sp(V,k,sA(n,t),z);return $.urlParams=D,$.headers=o,$.body=S.uploadData(),$.errorHandler=op(e),$}class hA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Mr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dA extends hA{initXhr(){this.xhr_.responseType="text"}}function ap(){return new dA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Rn(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tp(this._location.path)}get storage(){return this._service}get parent(){const e=JT(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new Rn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw CT(e)}}function fA(n,e,t){n._throwIfRoot("uploadBytes");const r=lA(n.storage,n._location,np(),new Lt(e,!0),t);return n.storage.makeRequestWithTokens(r,ap).then(s=>({metadata:s,ref:n}))}function mA(n,e,t=Qe.RAW,r){n._throwIfRoot("uploadString");const s=Jm(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),fA(n,s.data,i)}function pA(n){n._throwIfRoot("getDownloadURL");const e=aA(n.storage,n._location,np());return n.storage.makeRequestWithTokens(e,ap).then(t=>{if(t===null)throw ST();return t})}function gA(n,e){const t=XT(n._location.path,e),r=new ze(n._location.bucket,t);return new Rn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){return/^[A-Za-z]+:\/\//.test(n)}function yA(n,e){return new Rn(n,e)}function cp(n,e){if(n instanceof Kc){const t=n;if(t._bucket==null)throw bT();const r=new Rn(t,t._bucket);return e!=null?cp(r,e):r}else return e!==void 0?gA(n,e):n}function IA(n,e){if(e&&_A(e)){if(n instanceof Kc)return yA(n,e);throw Ma("To use ref(service, url), the first argument must be a Storage instance.")}else return cp(n,e)}function Fh(n,e){const t=e==null?void 0:e[Hm];return t==null?null:ze.makeFromBucketSpec(t,n)}function vA(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:ag(s,n.app.options.projectId))}class Kc{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Km,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mT,this._maxUploadRetryTime=pT,this._requests=new Set,s!=null?this._bucket=ze.makeFromBucketSpec(s,this._host):this._bucket=Fh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=Fh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new DT(Wm());{const o=$T(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Uh="@firebase/storage",Bh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="storage";function EA(n,e,t,r){return n=me(n),mA(n,e,t,r)}function wA(n){return n=me(n),pA(n)}function TA(n,e){return n=me(n),IA(n,e)}function AA(n=td(),e){n=me(n);const r=ji(n,up).getImmediate({identifier:e}),s=ig("storage");return s&&bA(r,...s),r}function bA(n,e,t,r={}){vA(n,e,t,r)}function RA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Kc(t,r,s,e,Sn)}function SA(){gn(new jt(up,RA,"PUBLIC").setMultipleInstances(!0)),nt(Uh,Bh,""),nt(Uh,Bh,"esm2017")}SA();const PA={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},Hc=ed(PA),Ps=GI(Hc),ye=Hw(Hc,{localCache:uT({tabManager:fT()})}),CA=AA(Hc),lp="archery_v5",DA="archery_v4";function $h(){try{const n=JSON.parse(localStorage.getItem(lp)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(DA)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function pr(){try{localStorage.setItem(lp,JSON.stringify({friends:T.friends,rounds:T.rounds.slice(0,200),courses:T.courses}))}catch{}}const kA=[11,10,8,5,"M"];function yo(n){return n==="M"||n==null?0:Number(n)}function Io(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":Number(t))):[]}function xA(n){return n.map(e=>e.map(t=>t??"M").join(",")).join(";")}function He(n){return n.flat().reduce((e,t)=>e+yo(t),0)}function VA(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(yo));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function NA(n){const e={11:0,10:0,8:0,5:0,M:0};return n.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function Wc(n){return n.length?n.reduce((e,t)=>He(t.scores)>He(e.scores)?t:e,n[0]):null}function OA(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+yo(s),0)/t.length<e:!1}function LA(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function MA(n,e){for(;n.scores.length<e;)n.scores.push([null,null])}function FA(n,e){let t=0;for(let r=0;r<e;r++)n.every(s=>{const i=s.scores[r]||[null,null];return i[0]!=null&&i[1]!=null})&&t++;return t}function hp(n){return{name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:xA(e.scores)}))}}function UA(n){return{...n,shooters:(n.shooters||[]).map(e=>({...e,scores:Io(e.scores)}))}}let gi=null,_i=!1,mn=!1,Fa=[],ts=null,Kr=0,Ye=null,Ua=null,Fr=null;function BA(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function Qc(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function $A(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function jA(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function qA(n){return navigator.geolocation?(Fr=n,Fa=[],Kr=0,Ye=null,ts=Date.now(),mn=!1,_i=!0,gi=navigator.geolocation.watchPosition(e=>{if(!_i||mn)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};Ye&&(Kr+=Qc(Ye,t)),Ye=t,Fa.push(t),Fr&&Fr({lat:t.lat,lng:t.lng,distance:Kr,elapsed:Math.round((Date.now()-ts)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),Ua=setInterval(()=>{_i&&!mn&&Fr&&Fr({lat:Ye==null?void 0:Ye.lat,lng:Ye==null?void 0:Ye.lng,distance:Kr,elapsed:Math.round((Date.now()-ts)/1e3)})},1e3),!0):!1}window.toggleGpsPause=function(){return mn=!mn,mn};function dp(){return _i=!1,mn=!1,gi!==null&&(navigator.geolocation.clearWatch(gi),gi=null),clearInterval(Ua),Ua=null,{route:Fa.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(Kr),duration:ts?Math.round((Date.now()-ts)/1e3):0}}function Jc(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function zA(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=Qc(e,s.gps);o<t&&(t=o,r=i)}),r}const T={user:null,profile:null,isAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,currentCourse:null,courseMap:null,courseMapLayer:null,gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};let yi=null;async function GA(){try{"wakeLock"in navigator&&(yi=await navigator.wakeLock.request("screen"))}catch{}}function Xc(){yi&&(yi.release(),yi=null)}function pn(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){pn("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await Dy(Ps,n,e)}catch(r){pn(r.code==="auth/invalid-credential"?"Ugyldig email eller kodeord.":"Der opstod en fejl: "+r.code)}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value;if(!n||!e||!t){pn("Udfyld alle felter.");return}const r=document.querySelector("#signup-form .btn");r.disabled=!0,r.textContent="...";try{const s=await Cy(Ps,e,t);await Bc(Me(ye,"users",s.user.uid),{name:n,email:e,yam:n,"e-mail":e,created:$c()})}catch(s){pn("Fejl: "+s.code)}finally{r.disabled=!1,r.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){pn("Indtast din email først.");return}try{await Py(Ps,n),pn("Nulstillingsmail sendt!","ok")}catch(e){pn("Fejl: "+e.code)}};window.doLogout=async function(){try{await Ny(Ps)}catch{}};document.addEventListener("DOMContentLoaded",()=>{var t,r,s;const n=document.getElementById("warn-enabled-sw");if(n){const i=localStorage.getItem("warnEnabled");T.warnEnabled=i===null?!0:i==="true",n.classList.toggle("on",T.warnEnabled),n.addEventListener("click",()=>{T.warnEnabled=!T.warnEnabled,n.classList.toggle("on",T.warnEnabled),localStorage.setItem("warnEnabled",T.warnEnabled)})}Vy(Ps,async i=>{var o;if(i){T.user=i;let c,u;for(let h=0;h<3;h++)try{console.log("Henter profil for uid:",i.uid),[c,u]=await Promise.all([ur(Me(ye,"users",i.uid)),ur(Me(ye,"admins",i.uid))]),console.log("Profil:",c.exists(),(o=c.data)==null?void 0:o.call(c));break}catch(f){console.error("Profil fejl attempt",h,f.code,f.message),h<2?await new Promise(p=>setTimeout(p,2e3*(h+1))):(T.profile={name:i.email,email:i.email},T.isAdmin=!1)}if(c!=null&&c.exists()){const h=c.data();T.profile={name:h.name||h.yam||i.email,email:h.email||h["e-mail"]||i.email}}else T.profile||(T.profile={name:i.email,email:i.email});T.isAdmin=(u==null?void 0:u.exists())||!1,KA()}else HA()});let e=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),e=i,document.getElementById("pwa-banner").style.display="flex"}),(t=document.getElementById("pwa-install-btn"))==null||t.addEventListener("click",async()=>{e&&(e.prompt(),await e.userChoice,e=null,document.getElementById("pwa-banner").style.display="none")}),(r=document.getElementById("pwa-dismiss-btn"))==null||r.addEventListener("click",()=>{document.getElementById("pwa-banner").style.display="none"}),Ba(24),document.getElementById("target-count").addEventListener("change",i=>Ba(Number(i.target.value))),(s=document.getElementById("photo-input"))==null||s.addEventListener("change",async i=>{var c;const o=i.target.files[0];if(o)try{const u=await rb(o),h=gr(),f=TA(CA,`courses/${T.round.courseId}/target_${h}.jpg`);await EA(f,u,"base64",{contentType:"image/jpeg"});const p=await wA(f);await Zc(T.round.courseId,h,{imageUrl:p}),(c=T.course)!=null&&c.targets&&(T.course.targets[h].imageUrl=p),Xt()}catch(u){alert("Upload fejl: "+u.message)}}),document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",o=>{o.target===i&&i.classList.add("hidden")})})});function KA(){var t;document.getElementById("hdr-name").textContent=T.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),document.getElementById("admin-badge").classList.toggle("hidden",!T.isAdmin),document.querySelectorAll(".admin-only").forEach(r=>r.classList.toggle("hidden",!T.isAdmin));const n=$h();T.friends=n.friends||[],T.rounds=n.rounds||[],wo(),vo(),Yc();const e=$h().courses||[];T.courses=e,qh(),jh(),WA(),console.log("Henter baner, user uid:",(t=T.user)==null?void 0:t.uid),mo(Ss(ye,"courses")).then(r=>{console.log("Baner hentet:",r.docs.length,r.docs.map(i=>i.id));const s=r.docs.map(i=>{const o=i.data();return{id:i.id,name:o.name||o.yam||"—",numTargets:o.numTargets||o.antalMål||24,location:o.location||o.beliggenhed||"",targets:o.targets||o.mål||[],visits:o.visits||o.besøg||[]}});s.length&&(T.courses=s,pr(),qh(),jh())}).catch(r=>console.warn("courses:",r)),XA()}function HA(){T.user=null,T.profile=null,T.round=null,Xc(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&sb(),n==="analyse"&&window.renderAnalyse(),n==="courses"&&T.courseMap&&setTimeout(()=>T.courseMap.invalidateSize(),100)};function WA(){!navigator.geolocation||!T.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(T.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=Qc(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function jh(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',T.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=T.courses.find(s=>s.id===n.value),r=document.getElementById("target-count");t?(r.value=t.numTargets,r.disabled=!0):r.disabled=!1,Ba(t?t.numTargets:Number(r.value))}}function Ba(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${e}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};function QA(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}function vo(){const n=document.getElementById("qfriends");n.innerHTML="",T.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=T.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await mo(Ss(ye,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=T.user)==null?void 0:c.uid)&&!t.find(u=>u.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" onclick="selectFriend('${i.id}','${(i.name||"").replace(/'/g,"\\'")}','${(i.email||"").replace(/'/g,"\\'")}');document.getElementById('friend-search').value='';document.getElementById('ac-list').classList.add('hidden');">${i.name}${i.email?` <span style='font-size:11px;opacity:.6'>${i.email}</span>`:""}</div>`).join(""),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){T.friends.find(r=>r.id===n)||(T.friends.push({id:n,name:e,email:t}),pr(),wo(),vo()),window.addParticipant(n,e)};window.startRound=async function(){var h,f;const n=document.getElementById("round-name").value.trim()||"Min Skydning",e=document.getElementById("course-sel").value,t=Number(document.getElementById("target-count").value)||24,r=Number(document.getElementById("start-target").value)-1,s=document.getElementById("gps-auto-sw").classList.contains("on"),i=document.getElementById("gps-track-sw").classList.contains("on");T.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const o=[{id:T.user.uid,name:T.profile.name,isGuest:!1},...QA().filter(p=>p.id!==T.user.uid)];T.course=e&&T.courses.find(p=>p.id===e)||null;const c=o.map(p=>{const v=LA(p.id,p.name,p.isGuest);return MA(v,t),v});let u=r;if(s&&((h=T.course)!=null&&h.targets))try{u=zA(T.course.targets,await Jc())}catch{}T.round={name:n,courseId:e||null,courseName:((f=T.course)==null?void 0:f.name)||null,numTargets:t,startTarget:u+1,shooters:c,created:Date.now(),traversalOrder:fp(u,t),traversalPos:0},i&&(T.gpsTracking=qA(JA),document.getElementById("gps-bar").classList.toggle("hidden",!T.gpsTracking),GA()),showActivePanel(),_r(),Xt(),Eo()};function fp(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}function gr(){return T.round.traversalOrder[T.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function Xt(){var u,h;if(!T.round)return;const n=gr(),e=T.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=T.round.name;const t=(h=(u=T.course)==null?void 0:u.targets)==null?void 0:h[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=FA(T.round.shooters,e);document.getElementById("pbar").style.width=`${r/e*100}%`;const s=T.round.shooters.flatMap(f=>f.scores.flat().filter(p=>p!=null)),i=s.reduce((f,p)=>f+yo(p),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.src=t.imageUrl||t.photo,o.classList.remove("hidden")):o.classList.add("hidden"),document.getElementById("edit-target-btn").classList.toggle("hidden",!(T.isAdmin&&T.round.courseId)),document.getElementById("next-btn").textContent=T.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=VA(T.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function _r(){if(!T.round)return;const n=gr(),e=document.getElementById("shooters-list");e.innerHTML="",T.round.shooters.forEach((t,r)=>{const s=He(t.scores),i=OA(t.scores,T.warnThreshold),o=t.scores[n]||[null,null],c=document.createElement("div");c.className="shooter-card",c.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${i?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${t.name}</span>
        <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${s}</div></div>
      </div>
      <div class="arrows-row">${[0,1].map(u=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${u+1}</div>
          <div class="score-btns">${kA.map(h=>`
            <button class="sbtn ${o[u]===h?`sel-${h}`:""}" data-v="${h}"
              onclick="setScore(${r},${n},${u},'${h}')">${h}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(c)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);T.round.shooters[n].scores[e][t]=s,Eo(),_r(),Xt()};function JA({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=$A(r),document.getElementById("gps-dist").textContent=jA(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function Eo(){if(!(!T.round||!T.user))try{await Bc(Me(ye,"users",T.user.uid,"aktiv","runde"),hp(T.round))}catch(n){console.warn(n)}}async function XA(){var n;try{const e=await ur(Me(ye,"users",T.user.uid,"aktiv","runde"));if(!e.exists())return;const t=e.data();if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await go(Me(ye,"users",T.user.uid,"aktiv","runde"));return}confirm("Genoptag den igangværende runde?")&&(T.round=UA(t),T.round.traversalOrder=t.traversalOrder||fp(0,T.round.numTargets),T.round.traversalPos=t.traversalPos||0,T.round.courseId&&(T.course=T.courses.find(s=>s.id===T.round.courseId)||null),showActivePanel(),_r(),Xt())}catch(e){console.warn(e)}}window.prevTarget=function(){!T.round||T.round.traversalPos<=0||(T.round.traversalPos--,Eo(),_r(),Xt(),document.getElementById("scroll-area").scrollTop=0)};window.nextTarget=function(){T.round&&(T.round.traversalPos<T.round.numTargets-1?(T.round.traversalPos++,Eo(),_r(),Xt(),document.getElementById("scroll-area").scrollTop=0):window.finishRound())};window.skipToTarget=function(){T.round&&(document.getElementById("skip-input").max=T.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!T.round||n<1||n>T.round.numTargets)return;const e=T.round.traversalOrder.indexOf(n-1);e!==-1&&(T.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),_r(),Xt()};window.finishRound=async function(){T.finishTap++;const n=document.getElementById("finish-btn");if(T.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{T.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}T.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};T.gpsTracking&&(e=dp(),T.gpsTracking=!1),Xc();const t="r_"+Date.now(),r={...hp(T.round),completed:Date.now(),...e,id:t};if(T.rounds.unshift({...r,created:{toDate:()=>new Date,toMillis:()=>Date.now()}}),pr(),Yc(),T.round.courseId){const i=Wc(T.round.shooters);nb(T.round.courseId,{roundId:t,date:new Date().toLocaleDateString("da-DK"),participants:T.round.shooters.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?He(i.scores):0,gpsRoute:e.route||null,gpsDuration:e.duration||null,gpsDistance:e.distance||null}).catch(console.warn)}go(Me(ye,"users",T.user.uid,"aktiv","runde")).catch(()=>{});const s=T.round;T.round=null,YA(s),showResultsPanel()};window.abortRound=async function(){T.abortTap++;const n=document.getElementById("abort-btn");if(T.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{T.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}T.abortTap=0,n.textContent="🗑 AFBRYD",T.gpsTracking&&(dp(),T.gpsTracking=!1),Xc(),go(Me(ye,"users",T.user.uid,"aktiv","runde")).catch(()=>{}),T.round=null,showSetupPanel()};function YA(n){const e=Wc(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${(e==null?void 0:e.name)||"—"}</div><div class="win-score">${e?He(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=mp(n),document.getElementById("res-dist").innerHTML=pp(n)}function mp(n){let e=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(t=>`<th>${t.name}</th>`).join("")}</tr>`;for(let t=0;t<n.numTargets;t++)e+=`<tr><td class="tc">${t+1}</td>`,n.shooters.forEach(r=>{const s=r.scores[t]||[null,null],i=(s[0]!=null&&s[0]!=="M"?Number(s[0]):0)+(s[1]!=null&&s[1]!=="M"?Number(s[1]):0);e+=`<td>${s.map(o=>o??"—").join("/")}<br><small>${i}</small></td>`}),e+="</tr>";return e+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(t=>`<td>${He(t.scores)}</td>`).join("")}</tr></table></div>`,e}function pp(n){return'<div class="dist-grid">'+n.shooters.map(e=>{const t=NA(e.scores);return`<div class="dist-card"><div class="dist-name">${e.name}</div>${Object.entries(t).map(([r,s])=>`<div class="dist-row"><span>${r}</span><span>${s}x</span></div>`).join("")}</div>`}).join("")+"</div>"}function Yc(){const n=document.getElementById("rounds-list");if(!T.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",T.rounds.forEach(e=>{var o;const t=(e.shooters||[]).map(c=>({...c,scores:Io(c.scores)})),r=t.length?Wc(t):null,s=(o=e.created)!=null&&o.toDate?e.created.toDate().toLocaleDateString("da-DK"):e.created?new Date(e.created).toLocaleDateString("da-DK"):"—",i=document.createElement("div");i.className="rcard",i.innerHTML=`<div class="rcard-info"><div class="rcard-name">${e.name||"Runde"}</div><div class="rcard-meta">${s} · ${e.courseName||e.numTargets+" mål"}</div><div class="rcard-win">🏆 ${(r==null?void 0:r.name)||"—"} (${r?He(r.scores):0} pt)</div></div><button class="del-btn" data-id="${e.id}">✕</button>`,i.querySelector(".rcard-info").onclick=()=>gp({...e,shooters:t}),i.querySelector(".del-btn").onclick=c=>{const u=c.currentTarget,h=`r-${e.id}`;T.deleteConfirm[h]?(delete T.deleteConfirm[h],T.rounds=T.rounds.filter(f=>f.id!==e.id),pr(),Yc()):(T.deleteConfirm[h]=!0,u.classList.add("conf"),u.textContent="Slet?",setTimeout(()=>{delete T.deleteConfirm[h],u.classList.remove("conf"),u.textContent="✕"},3e3))},n.appendChild(i)})}function gp(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),document.getElementById("rpop-body").innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${n.name}</h3>`+mp(n)+pp(n)+'<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>'}function qh(){const n=document.getElementById("courses-list");if(!T.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",T.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${e.name}</div><div class="ccard-meta">${e.numTargets} mål · ${e.location||"—"}</div>`,t.onclick=()=>ZA(e),n.appendChild(t)})}function ZA(n){T.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name,window.switchSubtab("map"),eb(n),_p(n),tb(n)}function eb(n){const e=document.getElementById("course-map");T.courseMap&&(T.courseMap.remove(),T.courseMap=null),T.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(T.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(T.courseMap).bindPopup(`<b>${s+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" style="max-width:140px;border-radius:4px;"/>`:""}`))}),t.length?T.courseMap.fitBounds(t,{padding:[20,20]}):T.courseMap.setView([55.7,12.5],10)}function _p(n){const e=document.getElementById("visits-list"),t=n.visits||n.besøg||[];if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach((r,s)=>{const i=document.createElement("div");i.className="visit-card",i.style.cursor="pointer",i.onclick=o=>{o.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},i.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${r.date}</span><div style="display:flex;gap:6px;">${r.gpsRoute?`<button class="btn-icon" onclick="showRouteOnMap(parseRoute('${r.gpsRoute}'))">🗺️</button>`:""}<button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${s})">✕</button></div></div><div style="font-size:12px;color:var(--muted);">${(r.participants||[]).join(", ")}</div>${r.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${r.winner} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(i)})}window.showVisitResults=function(n){const e=T.rounds.find(r=>r.id===n);if(!e){alert("Runden er ikke gemt lokalt");return}const t=(e.shooters||[]).map(r=>({...r,scores:Io(r.scores)}));gp({...e,shooters:t})};window.deleteVisit=async function(n){if(!confirm("Slet dette besøg?"))return;const e=Me(ye,"courses",T.currentCourse.id),t=await ur(e);if(!t.exists())return;const r=[...t.data().visits||t.data().besøg||[]];r.splice(n,1),await po(e,{visits:r,besøg:r}),T.currentCourse.visits=r,_p(T.currentCourse)};window.showRouteOnMap=function(n){!T.courseMap||!n.length||(T.courseMapLayer&&T.courseMap.removeLayer(T.courseMapLayer),T.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(T.courseMap),T.courseMap.fitBounds(T.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.parseRoute=BA;function tb(n){document.getElementById("course-edit-form").innerHTML=`<div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${n.name}" /></div><div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${n.location||""}" /></div><button class="btn btn-gold" onclick="saveCourseEdit()">Gem ændringer</button>`}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim(),e=document.getElementById("edit-cloc").value.trim();n&&(await po(Me(ye,"courses",T.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e}),T.currentCourse.name=n,T.currentCourse.location=e,document.getElementById("course-detail-title").textContent=n,alert("Gemt!"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&T.courseMap&&setTimeout(()=>T.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await Jc();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(T.courseMap),T.courseMap.panTo([e.lat,e.lng])}catch{alert("GPS ikke tilgængeligt"),n.classList.remove("on")}};window.doDeleteCourse=async function(){!T.currentCourse||!confirm(`Slet banen "${T.currentCourse.name}"?`)||(await go(Me(ye,"courses",T.currentCourse.id)),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"))};window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim(),e=document.getElementById("new-course-loc").value.trim(),t=Number(document.getElementById("new-course-targets").value)||24;if(!n)return;const r=Array.from({length:t},(s,i)=>({number:i+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));await oT(Ss(ye,"courses"),{name:n,yam:n,numTargets:t,antalMål:t,location:e,beliggenhed:e,targets:r,mål:r,created:$c(),visits:[],besøg:[]}),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value=""};async function nb(n,e){try{const t=Me(ye,"courses",n),r=await ur(t);if(!r.exists())return;const s=[e,...r.data().visits||r.data().besøg||[]].slice(0,50);await po(t,{visits:s,besøg:s})}catch(t){console.warn(t)}}async function Zc(n,e,t){const r=Me(ye,"courses",n),s=await ur(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await po(r,{targets:o,mål:o})}function rb(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,u=i.height;c>u?c>400&&(u=u*400/c,c=400):u>400&&(c=c*400/u,u=400);const h=document.createElement("canvas");h.width=c,h.height=u,h.getContext("2d").drawImage(i,0,0,c,u),e(h.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}window.openEditTarget=function(){var t,r;const n=gr(),e=(r=(t=T.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=gr();T.round.courseId&&(await Zc(T.round.courseId,e,{name:n}),(t=T.course)!=null&&t.targets&&(T.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),Xt()};window.editGps=async function(){var n;try{const e=await Jc(),t=gr();await Zc(T.round.courseId,t,{gps:e}),(n=T.course)!=null&&n.targets&&(T.course.targets[t].gps=e),alert("GPS gemt!")}catch(e){alert("GPS fejl: "+e.message)}};function wo(){const n=document.getElementById("friends-list");if(!T.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",T.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${e.name}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).join(" · ")}</div></div><div class="factions"><button class="btn-icon" onclick='openFriendModal(${JSON.stringify(e)})'>✏️</button><button class="btn-icon" style="color:var(--danger);" onclick="doDeleteFriend('${e.id}','${e.name.replace(/'/g,"\\'")}')">🗑</button></div>`,n.appendChild(t)})}window.openFriendModal=function(n){T.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim(),email:document.getElementById("f-email").value.trim(),phone:document.getElementById("f-phone").value.trim(),club:document.getElementById("f-club").value.trim(),bowType:document.getElementById("f-bow").value};if(n.name){if(T.editFriendId){const e=T.friends.findIndex(t=>t.id===T.editFriendId);e!==-1?T.friends[e]={...n,id:T.editFriendId}:T.friends.push({...n,id:T.editFriendId})}else T.friends.push({...n,id:"f_"+Date.now()});pr(),document.getElementById("friend-modal").classList.add("hidden"),wo(),vo()}};window.doDeleteFriend=function(n,e){confirm(`Slet ${e}?`)&&(T.friends=T.friends.filter(t=>t.id!==n),pr(),wo(),vo())};async function sb(){if(T.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{const n=await mo(Ss(ye,"users")),e=document.getElementById("users-list");e.innerHTML="",n.docs.forEach(t=>{var o;const r=t.data(),s=document.createElement("div");s.className="urow";const i=(o=r.created)!=null&&o.toDate?r.created.toDate().toLocaleDateString("da-DK"):"—";s.innerHTML=`<span class="un">${r.name||r.yam||"—"}</span><span class="ue">${r.email||r["e-mail"]||""}</span><span class="ud">${i}</span>`,e.appendChild(s)})}catch(n){console.warn(n)}}}window.doAddAdmin=async function(){const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await mo(Ss(ye,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){alert("Bruger ikke fundet");return}await Bc(Me(ye,"admins",t.id),{email:n,created:$c()}),alert(`${t.data().name||n} er nu admin`),document.getElementById("admin-email").value=""}catch(e){alert("Fejl: "+e.message)}};window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"})};window.renderAnalyse=function(){var w,_,y;const n=document.getElementById("analyse-content");if(!n)return;const e=document.getElementById("analyse-bane");e&&e.options.length<=1&&(T.courses.forEach(E=>{const A=document.createElement("option");A.value=E.id,A.textContent=E.name,e.appendChild(A)}),[...new Set(T.rounds.map(E=>E.courseId).filter(Boolean))].forEach(E=>{const A=T.courses.find(g=>g.id===E);if(A&&!Array.from(e.options).find(g=>g.value===E)){const g=document.createElement("option");g.value=E,g.textContent=A.name,e.appendChild(g)}}));const t=Number((w=document.getElementById("analyse-filter"))==null?void 0:w.value)||0,r=((_=document.getElementById("analyse-bane"))==null?void 0:_.value)||"all",s=Number((y=document.getElementById("analyse-antal"))==null?void 0:y.value)||0,i=T.rounds.map(I=>({...I,shooters:(I.shooters||[]).map(E=>({...E,scores:Io(E.scores)}))}));let o=r==="all"?i:i.filter(I=>I.courseId===r);const c=s||t,u=c?o.slice(0,c):o;if(!u.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const h=u,f=h.map(I=>{var A;const E=(A=I.shooters)==null?void 0:A[0];return E?He(E.scores):null}).filter(I=>I!==null),p=f.length?(f.reduce((I,E)=>I+E,0)/f.length).toFixed(1):0,v=f.length?Math.max(...f):0,S=f.length?Math.min(...f):0,D={11:0,10:0,8:0,5:0,M:0};h.forEach(I=>{var A;const E=I.shooters.find(g=>{var ve;return g.id===((ve=T.user)==null?void 0:ve.uid)})||((A=I.shooters)==null?void 0:A[0]);E&&E.scores.flat().forEach(g=>{g==="M"?D.M++:g!=null&&D[Number(g)]!==void 0&&D[Number(g)]++})});const V=Object.values(D).reduce((I,E)=>I+E,0);let k=0,z=0,$=0,M=0;h.forEach(I=>{var A;const E=I.shooters.find(g=>{var ve;return g.id===((ve=T.user)==null?void 0:ve.uid)})||((A=I.shooters)==null?void 0:A[0]);E&&E.scores.forEach(g=>{g[0]!=null&&g[0]!=="M"&&(k+=Number(g[0]),z++),g[1]!=null&&g[1]!=="M"&&($+=Number(g[1]),M++)})});const q=z?(k/z).toFixed(2):0,Q=M?($/M).toFixed(2):0;let K=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;">Runder</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${h.length}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;">Snit/runde</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${p}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;">Bedste</div><div style="font-size:28px;font-weight:700;color:#2aaa5a;">${v}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;">Laveste</div><div style="font-size:28px;font-weight:700;color:var(--danger);">${S}</div></div>
  </div>`;if(f.length>1){const g=Math.min(...f)-5,ve=Math.max(...f)+5,Yt=f.slice().reverse().map((kn,ut)=>{const Xe=30+ut/(f.length-1)*280,Tt=90-(kn-g)/(ve-g)*(120-2*30);return`${Xe},${Tt}`}).join(" ");K+=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">UDVIKLING</div>
      <svg viewBox="0 0 340 120" style="width:100%;overflow:visible;">
        <polyline points="${Yt}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${f.slice().reverse().map((kn,ut)=>{const Xe=30+ut/(f.length-1)*280,Tt=90-(kn-g)/(ve-g)*(120-2*30);return`<circle cx="${Xe}" cy="${Tt}" r="4" fill="var(--acc)"/><text x="${Xe}" y="${Tt-8}" text-anchor="middle" font-size="10" fill="var(--text)">${kn}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg></div>`}if(V>0){const I={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333"},E=Math.max(...Object.values(D));K+=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">FORDELING</div>
      ${Object.entries(D).map(([A,g])=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"><span style="width:20px;font-weight:700;color:${I[A]}">${A}</span><div style="flex:1;background:var(--surface2);border-radius:4px;height:20px;overflow:hidden;"><div style="width:${E?g/E*100:0}%;background:${I[A]};height:100%;border-radius:4px;"></div></div><span style="width:40px;text-align:right;font-size:13px;">${g} (${V?(g/V*100).toFixed(0):0}%)</span></div>`).join("")}
    </div>`}K+=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">PIL 1 VS PIL 2</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:11px;color:var(--muted);">PIL 1 SNIT</div><div style="font-size:24px;font-weight:700;color:var(--acc);">${q}</div></div>
      <div><div style="font-size:11px;color:var(--muted);">PIL 2 SNIT</div><div style="font-size:24px;font-weight:700;color:var(--acc);">${Q}</div></div>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">${q>Q?"Du scorer bedre med den første pil 🏹":Q>q?"Du scorer bedre med den anden pil 🏹":"Begge pile er lige gode 🎯"}</div>
  </div>`,n.innerHTML=K};window.sendResults=async function(n){if(!n){alert("Ingen runde at sende");return}const e=new Date().toLocaleDateString("da-DK");let t=`3D Bueskydning - Resultater
`;t+="Dato: "+e+`
`,n.courseName&&(t+="Bane: "+n.courseName+`
`),t+=`
--- RESULTATER ---
`,[...n.shooters].sort((c,u)=>He(u.scores)-He(c.scores)).forEach((c,u)=>{t+=`
`+(u+1)+". "+c.name+": "+He(c.scores)+" point"}),t+=`

--- DETALJERET ---
`,n.shooters.forEach(c=>{t+=`
`+c.name+`:
`;for(let u=0;u<n.numTargets;u++){const h=c.scores[u]||[null,null],f=(h[0]!=null&&h[0]!=="M"?Number(h[0]):0)+(h[1]!=null&&h[1]!=="M"?Number(h[1]):0);t+="  Mål "+(u+1)+": "+h.map(p=>p??"-").join("+")+" = "+f+`
`}t+="  Total: "+He(c.scores)+` point
`});const s=n.shooters.map(c=>{var u;return(u=T.friends.find(h=>h.id===c.id))==null?void 0:u.email}).filter(Boolean),i="3D Bueskydning - "+n.name,o="mailto:"+s.join(",")+"?subject="+encodeURIComponent(i)+"&body="+encodeURIComponent(t);window.location.href=o};window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
