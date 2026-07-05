(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Su={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Sg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,T=d&63;l||(T=64,o||(_=64)),r.push(t[f],t[p],t[_],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ih(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||p==null)throw new Pg;const _=i<<2|c>>4;if(r.push(_),d!==64){const T=c<<4&240|d>>2;if(r.push(T),p!==64){const x=d<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xg=function(n){const e=Ih(n);return wh.encodeByteArray(e,!0)},co=function(n){return xg(n).replace(/\./g,"")},Eh=function(n){try{return wh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kg=()=>Cg().__FIREBASE_DEFAULTS__,Dg=()=>{if(typeof process>"u"||typeof Su>"u")return;const n=Su.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Eh(n[1]);return e&&JSON.parse(e)},Do=()=>{try{return kg()||Dg()||Vg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Th=n=>{var e,t;return(t=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ng=n=>{const e=Th(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},bh=()=>{var n;return(n=Do())===null||n===void 0?void 0:n.config},Ah=n=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Og(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[co(JSON.stringify(t)),co(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Fg(){var n;const e=(n=Do())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ug(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jg(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Rh(){return!Fg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sh(){try{return typeof indexedDB=="object"}catch{return!1}}function zg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="FirebaseError";class Vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qg,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Gg(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Vt(s,c,r)}}function Gg(n,e){return n.replace(Kg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kg=/\{\$([^}]+)}/g;function Hg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ns(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Pu(i)&&Pu(o)){if(!Ns(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Pu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _s(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wg(n,e){const t=new Qg(n,e);return t.subscribe.bind(t)}class Qg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Sa),s.error===void 0&&(s.error=Sa),s.complete===void 0&&(s.complete=Sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sa(){}/**
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
 */class Xg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zg(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yg(n){return n===Mn?void 0:n}function Zg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const t_={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},n_=re.INFO,r_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},s_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=r_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tc{constructor(e){this.name=e,this._logLevel=n_,this._logHandler=s_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const i_=(n,e)=>e.some(t=>n instanceof t);let xu,Cu;function o_(){return xu||(xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a_(){return Cu||(Cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ph=new WeakMap,za=new WeakMap,xh=new WeakMap,Pa=new WeakMap,bc=new WeakMap;function c_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(fn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ph.set(t,n)}).catch(()=>{}),bc.set(e,n),e}function l_(n){if(za.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});za.set(n,e)}let qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return za.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function u_(n){qa=n(qa)}function d_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xa(this),e,...t);return xh.set(r,e.sort?e.sort():[e]),fn(r)}:a_().includes(n)?function(...e){return n.apply(xa(this),e),fn(Ph.get(this))}:function(...e){return fn(n.apply(xa(this),e))}}function h_(n){return typeof n=="function"?d_(n):(n instanceof IDBTransaction&&l_(n),i_(n,o_())?new Proxy(n,qa):n)}function fn(n){if(n instanceof IDBRequest)return c_(n);if(Pa.has(n))return Pa.get(n);const e=h_(n);return e!==n&&(Pa.set(n,e),bc.set(e,n)),e}const xa=n=>bc.get(n);function f_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const p_=["get","getKey","getAll","getAllKeys","count"],m_=["put","add","delete","clear"],Ca=new Map;function ku(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=m_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||p_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Ca.set(e,i),i}u_(n=>({...n,get:(e,t,r)=>ku(e,t)||n.get(e,t,r),has:(e,t)=>!!ku(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(__(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function __(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ga="@firebase/app",Du="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Tc("@firebase/app"),y_="@firebase/app-compat",v_="@firebase/analytics-compat",I_="@firebase/analytics",w_="@firebase/app-check-compat",E_="@firebase/app-check",T_="@firebase/auth",b_="@firebase/auth-compat",A_="@firebase/database",R_="@firebase/data-connect",S_="@firebase/database-compat",P_="@firebase/functions",x_="@firebase/functions-compat",C_="@firebase/installations",k_="@firebase/installations-compat",D_="@firebase/messaging",V_="@firebase/messaging-compat",N_="@firebase/performance",L_="@firebase/performance-compat",O_="@firebase/remote-config",M_="@firebase/remote-config-compat",F_="@firebase/storage",B_="@firebase/storage-compat",U_="@firebase/firestore",$_="@firebase/vertexai-preview",j_="@firebase/firestore-compat",z_="firebase",q_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="[DEFAULT]",G_={[Ga]:"fire-core",[y_]:"fire-core-compat",[I_]:"fire-analytics",[v_]:"fire-analytics-compat",[E_]:"fire-app-check",[w_]:"fire-app-check-compat",[T_]:"fire-auth",[b_]:"fire-auth-compat",[A_]:"fire-rtdb",[R_]:"fire-data-connect",[S_]:"fire-rtdb-compat",[P_]:"fire-fn",[x_]:"fire-fn-compat",[C_]:"fire-iid",[k_]:"fire-iid-compat",[D_]:"fire-fcm",[V_]:"fire-fcm-compat",[N_]:"fire-perf",[L_]:"fire-perf-compat",[O_]:"fire-rc",[M_]:"fire-rc-compat",[F_]:"fire-gcs",[B_]:"fire-gcs-compat",[U_]:"fire-fst",[j_]:"fire-fst-compat",[$_]:"fire-vertex","fire-js":"fire-js",[z_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map,K_=new Map,Ha=new Map;function Vu(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(Ha.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Ha.set(e,n);for(const t of lo.values())Vu(t,n);for(const t of K_.values())Vu(t,n);return!0}function Vo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pn=new Ys("app","Firebase",H_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=q_;function Ch(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ka,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pn.create("bad-app-name",{appName:String(s)});if(t||(t=bh()),!t)throw pn.create("no-options");const i=lo.get(s);if(i){if(Ns(t,i.options)&&Ns(r,i.config))return i;throw pn.create("duplicate-app",{appName:s})}const o=new e_(s);for(const l of Ha.values())o.addComponent(l);const c=new W_(t,r,o);return lo.set(s,c),c}function kh(n=Ka){const e=lo.get(n);if(!e&&n===Ka&&bh())return Ch();if(!e)throw pn.create("no-app",{appName:n});return e}function Rt(n,e,t){var r;let s=(r=G_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}Wn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Q_="firebase-heartbeat-database",J_=1,Ls="firebase-heartbeat-store";let ka=null;function Dh(){return ka||(ka=f_(Q_,J_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw pn.create("idb-open",{originalErrorMessage:n.message})})),ka}async function X_(n){try{const t=(await Dh()).transaction(Ls),r=await t.objectStore(Ls).get(Vh(n));return await t.done,r}catch(e){if(e instanceof Vt)zt.warn(e.message);else{const t=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(t.message)}}}async function Nu(n,e){try{const r=(await Dh()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,Vh(n)),await r.done}catch(t){if(t instanceof Vt)zt.warn(t.message);else{const r=pn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zt.warn(r.message)}}}function Vh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Y_=1024,Z_=30*24*60*60*1e3;class ey{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ny(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Z_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lu(),{heartbeatsToSend:r,unsentEntries:s}=ty(this._heartbeatsCache.heartbeats),i=co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return zt.warn(t),""}}}function Lu(){return new Date().toISOString().substring(0,10)}function ty(n,e=Y_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ou(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ou(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ny{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sh()?zg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await X_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ou(n){return co(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n){Wn(new _n("platform-logger",e=>new g_(e),"PRIVATE")),Wn(new _n("heartbeat",e=>new ey(e),"PRIVATE")),Rt(Ga,Du,n),Rt(Ga,Du,"esm2017"),Rt("fire-js","")}ry("");var sy="firebase",iy="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(sy,iy,"app");function Ac(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Nh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oy=Nh,Lh=new Ys("auth","Firebase",Nh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Tc("@firebase/auth");function ay(n,...e){uo.logLevel<=re.WARN&&uo.warn(`Auth (${or}): ${n}`,...e)}function Gi(n,...e){uo.logLevel<=re.ERROR&&uo.error(`Auth (${or}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,...e){throw Rc(n,...e)}function St(n,...e){return Rc(n,...e)}function Oh(n,e,t){const r=Object.assign(Object.assign({},oy()),{[e]:t});return new Ys("auth","Firebase",r).create(e,{appName:n.name})}function jt(n){return Oh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Lh.create(n,...e)}function Q(n,e,...t){if(!n)throw Rc(e,...t)}function Mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gi(e),new Error(e)}function qt(n,e){n||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cy(){return Mu()==="http:"||Mu()==="https:"}function Mu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cy()||Ug()||"connection"in navigator)?navigator.onLine:!0}function uy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,qt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mg()||$g()}get(){return ly()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,e){qt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new ei(3e4,6e4);function Ht(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wt(n,e,t,r,s={}){return Fh(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Zs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Bg()||(d.referrerPolicy="no-referrer"),Mh.fetch()(Bh(n,n.config.apiHost,t,c),d)})}async function Fh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},dy),e);try{const s=new py(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oi(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Oh(n,f,d);_t(n,f)}}catch(s){if(s instanceof Vt)throw s;_t(n,"network-request-failed",{message:String(s)})}}async function ti(n,e,t,r,s={}){const i=await Wt(n,e,t,r,s);return"mfaPendingCredential"in i&&_t(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Bh(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Sc(n.config,s):`${n.config.apiScheme}://${s}`}function fy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class py{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),hy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=St(n,e,r);return s.customData._tokenResponse=t,s}function Fu(n){return n!==void 0&&n.enterprise!==void 0}class my{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gy(n,e){return Wt(n,"GET","/v2/recaptchaConfig",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(n,e){return Wt(n,"POST","/v1/accounts:delete",e)}async function Uh(n,e){return Wt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yy(n,e=!1){const t=Re(n),r=await t.getIdToken(e),s=Pc(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:As(Da(s.auth_time)),issuedAtTime:As(Da(s.iat)),expirationTime:As(Da(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Da(n){return Number(n)*1e3}function Pc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Eh(t);return s?JSON.parse(s):(Gi("Failed to decode base64 JWT payload"),null)}catch(s){return Gi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bu(n){const e=Pc(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vt&&vy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Os(n,Uh(t,{idToken:r}));Q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$h(i.providerUserInfo):[],c=Ey(n.providerData,o),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Qa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function wy(n){const e=Re(n);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ey(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $h(n){return n.map(e=>{var{providerId:t}=e,r=Ac(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(n,e){const t=await Fh(n,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Bh(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Mh.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function by(n,e){return Wt(n,"POST","/v2/accounts:revokeToken",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Bu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ty(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ar;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ac(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Os(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yy(this,e)}reload(){return wy(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await Os(this,_y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,d,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:U,isAnonymous:K,providerData:W,stsTokenManager:w}=t;Q(N&&w,e,"internal-error");const y=Ar.fromJSON(this.name,w);Q(typeof N=="string",e,"internal-error"),nn(p,e.name),nn(_,e.name),Q(typeof U=="boolean",e,"internal-error"),Q(typeof K=="boolean",e,"internal-error"),nn(T,e.name),nn(x,e.name),nn(C,e.name),nn(P,e.name),nn($,e.name),nn(M,e.name);const v=new Ft({uid:N,auth:e,email:_,emailVerified:U,displayName:p,isAnonymous:K,photoURL:x,phoneNumber:T,tenantId:C,stsTokenManager:y,createdAt:$,lastLoginAt:M});return W&&Array.isArray(W)&&(v.providerData=W.map(E=>Object.assign({},E))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ar;s.updateFromServerResponse(t);const i=new Ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$h(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ar;c.updateFromIdToken(r);const l=new Ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;function Bt(n){qt(n instanceof Function,"Expected a class definition");let e=Uu.get(n);return e?(qt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jh.type="NONE";const $u=jh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e,t){return`firebase:${n}:${e}:${t}`}class Rr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Rr(Bt($u),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Bt($u);const o=Ki(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(o);if(f){const p=Ft._fromJSON(e,f);d!==i&&(c=p),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Rr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Rr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wh(e))return"Blackberry";if(Qh(e))return"Webos";if(qh(e))return"Safari";if((e.includes("chrome/")||Gh(e))&&!e.includes("edge/"))return"Chrome";if(Hh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zh(n=Le()){return/firefox\//i.test(n)}function qh(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gh(n=Le()){return/crios\//i.test(n)}function Kh(n=Le()){return/iemobile/i.test(n)}function Hh(n=Le()){return/android/i.test(n)}function Wh(n=Le()){return/blackberry/i.test(n)}function Qh(n=Le()){return/webos/i.test(n)}function xc(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ay(n=Le()){var e;return xc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ry(){return jg()&&document.documentMode===10}function Jh(n=Le()){return xc(n)||Hh(n)||Qh(n)||Wh(n)||/windows phone/i.test(n)||Kh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,e=[]){let t;switch(n){case"Browser":t=ju(Le());break;case"Worker":t=`${ju(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${or}/${r}`}/**
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
 */class Sy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Py(n,e={}){return Wt(n,"GET","/v2/passwordPolicy",Ht(n,e))}/**
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
 */const xy=6;class Cy{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:xy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zu(this),this.idTokenSubscription=new zu(this),this.beforeStateQueue=new Sy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uh(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(jt(this));const t=e?Re(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Py(this),t=new Cy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await by(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ay(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wn(n){return Re(n)}class zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wg(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dy(n){No=n}function Yh(n){return No.loadJS(n)}function Vy(){return No.recaptchaEnterpriseScript}function Ny(){return No.gapiScript}function Ly(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Oy="recaptcha-enterprise",My="NO_RECAPTCHA";class Fy{constructor(e){this.type=Oy,this.auth=wn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{gy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new my(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Fu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(My)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Fu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Vy();l.length!==0&&(l+=c),Yh(l).then(()=>{s(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function qu(n,e,t,r=!1){const s=new Fy(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fo(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qu(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n,e){const t=Vo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ns(i,e??{}))return s;_t(s,"already-initialized")}return t.initialize({options:e})}function Uy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $y(n,e,t){const r=wn(n);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zh(e),{host:o,port:c}=jy(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zy()}function Zh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jy(n){const e=Zh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gu(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gu(o)}}}function Gu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,t){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}async function qy(n,e){return Wt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n,e){return ti(n,"POST","/v1/accounts:signInWithPassword",Ht(n,e))}async function Ky(n,e){return Wt(n,"POST","/v1/accounts:sendOobCode",Ht(n,e))}async function Hy(n,e){return Ky(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}async function Qy(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Cc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ms(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ms(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,t,"signInWithPassword",Gy);case"emailLink":return Wy(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,r,"signUpPassword",qy);case"emailLink":return Qy(e,{idToken:t,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n,e){return ti(n,"POST","/v1/accounts:signInWithIdp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="http://localhost";class Qn extends Cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ac(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Sr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sr(e,t)}buildRequest(){const e={requestUri:Jy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yy(n){const e=gs(_s(n)).link,t=e?gs(_s(e)).deep_link_id:null,r=gs(_s(n)).deep_link_id;return(r?gs(_s(r)).link:null)||r||t||e||n}class kc{constructor(e){var t,r,s,i,o,c;const l=gs(_s(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Xy((s=l.mode)!==null&&s!==void 0?s:null);Q(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Yy(e);try{return new kc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,t){return Ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=kc.parseLink(t);return Q(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends ni{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return an.credential(t,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends ni{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ni{constructor(){super("twitter.com")}static credential(e,t){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ln.credential(t,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(n,e){return ti(n,"POST","/v1/accounts:signUp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),o=Ku(r);return new Jn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ku(r);return new Jn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ku(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Vt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new po(e,t,r,s)}}function tf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(n,i,e,r):i})}async function ev(n,e,t=!1){const r=await Os(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n,e,t=!1){const{auth:r}=n;if(Tt(r.app))return Promise.reject(jt(r));const s="reauthenticate";try{const i=await Os(n,tf(r,s,e,n),t);Q(i.idToken,r,"internal-error");const o=Pc(i.idToken);Q(o,r,"internal-error");const{sub:c}=o;return Q(n.uid===c,r,"user-mismatch"),Jn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(n,e,t=!1){if(Tt(n.app))return Promise.reject(jt(n));const r="signIn",s=await tf(n,r,e),i=await Jn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function nv(n,e){return nf(wn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(n){const e=wn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rv(n,e,t){const r=wn(n);await fo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Hy)}async function sv(n,e,t){if(Tt(n.app))return Promise.reject(jt(n));const r=wn(n),o=await fo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&rf(n),l}),c=await Jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function iv(n,e,t){return Tt(n.app)?Promise.reject(jt(n)):nv(Re(n),zr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rf(n),r})}function ov(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function av(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function cv(n,e,t,r){return Re(n).onAuthStateChanged(e,t,r)}function lv(n){return Re(n).signOut()}const mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=1e3,dv=10;class of extends sf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ry()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}of.type="LOCAL";const hv=of;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends sf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}af.type="SESSION";const cf=af;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Lo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,i)),l=await fv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const d=Dc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function mv(n){Pt().location.href=n}/**
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
 */function lf(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function gv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _v(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yv(){return lf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="firebaseLocalStorageDb",vv=1,go="firebaseLocalStorage",df="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oo(n,e){return n.transaction([go],e?"readwrite":"readonly").objectStore(go)}function Iv(){const n=indexedDB.deleteDatabase(uf);return new ri(n).toPromise()}function Ja(){const n=indexedDB.open(uf,vv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(go,{keyPath:df})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await Iv(),e(await Ja()))})})}async function Hu(n,e,t){const r=Oo(n,!0).put({[df]:e,value:t});return new ri(r).toPromise()}async function wv(n,e){const t=Oo(n,!1).get(e),r=await new ri(t).toPromise();return r===void 0?null:r.value}function Wu(n,e){const t=Oo(n,!0).delete(e);return new ri(t).toPromise()}const Ev=800,Tv=3;class hf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Tv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(yv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gv(),!this.activeServiceWorker)return;this.sender=new pv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_v()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ja();return await Hu(e,mo,"1"),await Wu(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>wv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oo(s,!1).getAll();return new ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hf.type="LOCAL";const bv=hf;new ei(3e4,6e4);/**
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
 */function Av(n,e){return e?Bt(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Cc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rv(n){return nf(n.auth,new Vc(n),n.bypassAuthState)}function Sv(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),tv(t,new Vc(n),n.bypassAuthState)}async function Pv(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),ev(t,new Vc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rv;case"linkViaPopup":case"linkViaRedirect":return Pv;case"reauthViaPopup":case"reauthViaRedirect":return Sv;default:_t(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new ei(2e3,1e4);class br extends ff{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xv.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="pendingRedirect",Hi=new Map;class kv extends ff{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await Dv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dv(n,e){const t=Lv(e),r=Nv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Vv(n,e){Hi.set(n._key(),e)}function Nv(n){return Bt(n._redirectPersistence)}function Lv(n){return Ki(Cv,n.config.apiKey,n.name)}async function Ov(n,e,t=!1){if(Tt(n.app))return Promise.reject(jt(n));const r=wn(n),s=Av(r,e),o=await new kv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=10*60*1e3;class Fv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!pf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(St(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qu(e))}saveEventToCache(e){this.cachedEventUids.add(Qu(e)),this.lastProcessedEventTime=Date.now()}}function Qu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n,e={}){return Wt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jv=/^https?/;async function zv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Uv(n);for(const t of e)try{if(qv(t))return}catch{}_t(n,"unauthorized-domain")}function qv(n){const e=Wa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!jv.test(t))return!1;if($v.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Gv=new ei(3e4,6e4);function Ju(){const n=Pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kv(n){return new Promise((e,t)=>{var r,s,i;function o(){Ju(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ju(),t(St(n,"network-request-failed"))},timeout:Gv.get()})}if(!((s=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Pt().gapi)===null||i===void 0)&&i.load)o();else{const c=Ly("iframefcb");return Pt()[c]=()=>{gapi.load?o():t(St(n,"network-request-failed"))},Yh(`${Ny()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function Hv(n){return Wi=Wi||Kv(n),Wi}/**
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
 */const Wv=new ei(5e3,15e3),Qv="__/auth/iframe",Jv="emulator/auth/iframe",Xv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zv(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sc(e,Jv):`https://${n.config.authDomain}/${Qv}`,r={apiKey:e.apiKey,appName:n.name,v:or},s=Yv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Zs(r).slice(1)}`}async function eI(n){const e=await Hv(n),t=Pt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:Zv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=St(n,"network-request-failed"),c=Pt().setTimeout(()=>{i(o)},Wv.get());function l(){Pt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const tI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nI=500,rI=600,sI="_blank",iI="http://localhost";class Xu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oI(n,e,t,r=nI,s=rI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},tI),{width:r.toString(),height:s.toString(),top:i,left:o}),d=Le().toLowerCase();t&&(c=Gh(d)?sI:t),zh(d)&&(e=e||iI,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[T,x])=>`${_}${T}=${x},`,"");if(Ay(d)&&c!=="_self")return aI(e||"",c),new Xu(null);const p=window.open(e||"",c,f);Q(p,n,"popup-blocked");try{p.focus()}catch{}return new Xu(p)}function aI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const cI="__/auth/handler",lI="emulator/auth/handler",uI=encodeURIComponent("fac");async function Yu(n,e,t,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:or,eventId:s};if(e instanceof ef){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Hg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ni){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${uI}=${encodeURIComponent(l)}`:"";return`${dI(n)}?${Zs(c).slice(1)}${d}`}function dI({config:n}){return n.emulator?Sc(n,lI):`https://${n.authDomain}/${cI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="webStorageSupport";class hI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cf,this._completeRedirectFn=Ov,this._overrideRedirectResult=Vv}async _openPopup(e,t,r,s){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Yu(e,t,r,Wa(),s);return oI(e,o,Dc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Yu(e,t,r,Wa(),s);return mv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(qt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eI(e),r=new Fv(e);return t.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Va,{type:Va},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Va];o!==void 0&&t(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jh()||qh()||xc()}}const fI=hI;var Zu="@firebase/auth",ed="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gI(n){Wn(new _n("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xh(n)},d=new ky(r,s,i,l);return Uy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new _n("auth-internal",e=>{const t=wn(e.getProvider("auth").getImmediate());return(r=>new pI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Zu,ed,mI(n)),Rt(Zu,ed,"esm2017")}/**
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
 */const _I=5*60,yI=Ah("authIdTokenMaxAge")||_I;let td=null;const vI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>yI)return;const s=t==null?void 0:t.token;td!==s&&(td=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function II(n=kh()){const e=Vo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=By(n,{popupRedirectResolver:fI,persistence:[bv,hv,cf]}),r=Ah("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=vI(i.toString());av(t,o,()=>o(t.currentUser)),ov(t,c=>o(c))}}const s=Th("auth");return s&&$y(t,`http://${s}`),t}function wI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=St("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",wI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gI("Browser");var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,mf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,b,R){for(var I=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)I[ot-2]=arguments[ot];return y.prototype[b].apply(E,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,v){v||(v=0);var E=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)E[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)E[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],b=w.g[2];var R=w.g[3],I=y+(R^v&(b^R))+E[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[2]+606105819&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[3]+3250441966&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(R^v&(b^R))+E[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[6]+2821735955&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[7]+4249261313&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(R^v&(b^R))+E[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[10]+4294925233&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[11]+2304563134&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(R^v&(b^R))+E[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(b^y&(v^b))+E[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=b+(v^R&(y^v))+E[14]+2792965006&4294967295,b=R+(I<<17&4294967295|I>>>15),I=v+(y^b&(R^y))+E[15]+1236535329&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(b^R&(v^b))+E[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[11]+643717713&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[0]+3921069994&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(v^b))+E[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[15]+3634488961&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[4]+3889429448&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(v^b))+E[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[3]+4107603335&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[8]+1163531501&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^R&(v^b))+E[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^b&(y^v))+E[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(R^y))+E[7]+1735328473&4294967295,b=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(b^R))+E[12]+2368359562&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(v^b^R)+E[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[11]+1839030562&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[14]+4259657740&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^R)+E[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[7]+4139469664&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[10]+3200236656&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^R)+E[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[3]+3572445317&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[6]+76029189&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^R)+E[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^b)+E[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=b+(R^y^v)+E[15]+530742520&4294967295,b=R+(I<<16&4294967295|I>>>16),I=v+(b^R^y)+E[2]+3299628645&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(b^(v|~R))+E[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[14]+2878612391&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[5]+4237533241&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~R))+E[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[10]+4293915773&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[1]+2240044497&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~R))+E[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[6]+2734768916&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[13]+1309151649&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~R))+E[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~b))+E[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=b+(y^(R|~v))+E[2]+718787259&4294967295,b=R+(I<<15&4294967295|I>>>17),I=v+(R^(b|~y))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,E=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=v;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(E[b++]=w.charCodeAt(R++),b==this.blockSize){s(this,E),b=0;break}}else for(;R<y;)if(E[b++]=w[R++],b==this.blockSize){s(this,E),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var E=0;32>E;E+=8)w[v++]=this.g[y]>>>E&255;return w};function i(w,y){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;for(var v=[],E=!0,b=w.length-1;0<=b;b--){var R=w[b]|0;E&&R==y||(v[b]=R,E=!1)}this.g=v}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return P(d(-w));for(var y=[],v=1,E=0;w>=v;E++)y[E]=w/v|0,v*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return P(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(y,8)),E=p,b=0;b<w.length;b+=8){var R=Math.min(8,w.length-b),I=parseInt(w.substring(b,b+R),y);8>R?(R=d(Math.pow(y,R)),E=E.j(R).add(d(I))):(E=E.j(v),E=E.add(d(I)))}return E}var p=l(0),_=l(1),T=l(16777216);n=o.prototype,n.m=function(){if(C(this))return-P(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(C(this))return"-"+P(this).toString(w);for(var y=d(Math.pow(w,6)),v=this,E="";;){var b=U(v,y).g;v=$(v,b.j(y));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=b,x(v))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function C(w){return w.h==-1}n.l=function(w){return w=$(this,w),C(w)?-1:x(w)?0:1};function P(w){for(var y=w.g.length,v=[],E=0;E<y;E++)v[E]=~w.g[E];return new o(v,~w.h).add(_)}n.abs=function(){return C(this)?P(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0,b=0;b<=y;b++){var R=E+(this.i(b)&65535)+(w.i(b)&65535),I=(R>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);E=I>>>16,R&=65535,I&=65535,v[b]=I<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function $(w,y){return w.add(P(y))}n.j=function(w){if(x(this)||x(w))return p;if(C(this))return C(w)?P(this).j(P(w)):P(P(this).j(w));if(C(w))return P(this.j(P(w)));if(0>this.l(T)&&0>w.l(T))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<w.g.length;b++){var R=this.i(E)>>>16,I=this.i(E)&65535,ot=w.i(b)>>>16,ze=w.i(b)&65535;v[2*E+2*b]+=I*ze,M(v,2*E+2*b),v[2*E+2*b+1]+=R*ze,M(v,2*E+2*b+1),v[2*E+2*b+1]+=I*ot,M(v,2*E+2*b+1),v[2*E+2*b+2]+=R*ot,M(v,2*E+2*b+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new o(v,0)};function M(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function N(w,y){this.g=w,this.h=y}function U(w,y){if(x(y))throw Error("division by zero");if(x(w))return new N(p,p);if(C(w))return y=U(P(w),y),new N(P(y.g),P(y.h));if(C(y))return y=U(w,P(y)),new N(P(y.g),y.h);if(30<w.g.length){if(C(w)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,E=y;0>=E.l(w);)v=K(v),E=K(E);var b=W(v,1),R=W(E,1);for(E=W(E,2),v=W(v,2);!x(E);){var I=R.add(E);0>=I.l(w)&&(b=b.add(v),R=I),E=W(E,1),v=W(v,1)}return y=$(w,b.j(y)),new N(b,y)}for(b=p;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(v),I=R.j(y);C(I)||0<I.l(w);)v-=E,R=d(v),I=R.j(y);x(R)&&(R=_),b=b.add(R),w=$(w,I)}return new N(b,w)}n.A=function(w){return U(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)&w.i(E);return new o(v,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)|w.i(E);return new o(v,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)^w.i(E);return new o(v,this.h^w.h)};function K(w){for(var y=w.g.length+1,v=[],E=0;E<y;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(v,w.h)}function W(w,y){var v=y>>5;y%=32;for(var E=w.g.length-v,b=[],R=0;R<E;R++)b[R]=0<y?w.i(R+v)>>>y|w.i(R+v+1)<<32-y:w.i(R+v);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,zn=o}).apply(typeof nd<"u"?nd:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gf,ys,_f,Qi,Xa,yf,vf,If;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,h){return a==Array.prototype||a==Object.prototype||(a[u]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var h=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in h))break e;h=h[A]}a=a[a.length-1],m=h[a],u=u(m),u!=m&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var h=0,m=!1,A={next:function(){if(!m&&h<a.length){var k=h++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,h){return a.call.apply(a.bind,arguments)}function p(a,u,h){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function _(a,u,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function T(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function x(a,u){function h(){}h.prototype=u.prototype,a.aa=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(m,A,k){for(var L=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)L[pe-2]=arguments[pe];return u.prototype[A].apply(m,L)}}function C(a){const u=a.length;if(0<u){const h=Array(u);for(let m=0;m<u;m++)h[m]=a[m];return h}return[]}function P(a,u){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const A=a.length||0,k=m.length||0;a.length=A+k;for(let L=0;L<k;L++)a[A+L]=m[L]}else a.push(m)}}class ${constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var K=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function W(a,u,h){for(const m in a)u.call(h,a[m],m,a)}function w(a,u){for(const h in a)u.call(void 0,a[h],h,a)}function y(a){const u={};for(const h in a)u[h]=a[h];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)a[h]=m[h];for(let k=0;k<v.length;k++)h=v[k],Object.prototype.hasOwnProperty.call(m,h)&&(a[h]=m[h])}}function b(a){var u=1;a=a.split(":");const h=[];for(;0<u&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Xt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ot{constructor(){this.h=this.g=null}add(u,h){const m=ze.get();m.set(u,h),this.h?this.h.next=m:this.g=m,this.h=m}}var ze=new $(()=>new pi,a=>a.reset());class pi{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,It=!1,Xt=new ot,mi=()=>{const a=c.Promise.resolve(void 0);vt=()=>{a.then(ft)}};var ft=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){R(h)}var u=ze;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}It=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var gi=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return a}();function Yt(a,u){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(K){e:{try{U(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_i[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Yt.aa.h.call(this)}}x(Yt,ge);var _i={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),yi=0;function vi(a,u,h,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!m,this.ha=A,this.key=++yi,this.da=this.fa=!1}function Pn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xn(a){this.src=a,this.g={},this.h=0}xn.prototype.add=function(a,u,h,m,A){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var L=q(a,u,m,A);return-1<L?(u=a[L],h||(u.fa=!1)):(u=new vi(u,this.src,k,!!m,A),u.fa=h,a.push(u)),u};function ur(a,u){var h=u.type;if(h in a.g){var m=a.g[h],A=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=A)&&Array.prototype.splice.call(m,A,1),k&&(Pn(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function q(a,u,h,m){for(var A=0;A<a.length;++A){var k=a[A];if(!k.da&&k.listener==u&&k.capture==!!h&&k.ha==m)return A}return-1}var F="closure_lm_"+(1e6*Math.random()|0),J={};function ie(a,u,h,m,A){if(Array.isArray(u)){for(var k=0;k<u.length;k++)ie(a,u[k],h,m,A);return null}return h=ht(h),a&&a[Sn]?a.K(u,h,d(m)?!!m.capture:!1,A):Z(a,u,h,!1,m,A)}function Z(a,u,h,m,A,k){if(!u)throw Error("Invalid event type");var L=d(A)?!!A.capture:!!A,pe=he(a);if(pe||(a[F]=pe=new xn(a)),h=pe.add(u,h,m,L,k),h.proxy)return h;if(m=ke(),h.proxy=m,m.src=a,m.listener=h,a.addEventListener)gi||(A=L),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(Ie(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ke(){function a(h){return u.call(a.src,a.listener,h)}const u=De;return a}function Te(a,u,h,m,A){if(Array.isArray(u))for(var k=0;k<u.length;k++)Te(a,u[k],h,m,A);else m=d(m)?!!m.capture:!!m,h=ht(h),a&&a[Sn]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],h=q(k,h,m,A),-1<h&&(Pn(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=he(a))&&(u=a.g[u.toString()],a=-1,u&&(a=q(u,h,m,A)),(h=-1<a?u[a]:null)&&ce(h))}function ce(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Sn])ur(u.i,a);else{var h=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(h,m,a.capture):u.detachEvent?u.detachEvent(Ie(h),m):u.addListener&&u.removeListener&&u.removeListener(m),(h=he(u))?(ur(h,a),h.h==0&&(h.src=null,u[F]=null)):Pn(a)}}}function Ie(a){return a in J?J[a]:J[a]="on"+a}function De(a,u){if(a.da)a=!0;else{u=new Yt(u,this);var h=a.listener,m=a.ha||a.src;a.fa&&ce(a),a=h.call(m,u)}return a}function he(a){return a=a[F],a instanceof xn?a:null}var Be="__closure_events_fn_"+(1e9*Math.random()>>>0);function ht(a){return typeof a=="function"?a:(a[Be]||(a[Be]=function(u){return a.handleEvent(u)}),a[Be])}function Me(){wt.call(this),this.i=new xn(this),this.M=this,this.F=null}x(Me,wt),Me.prototype[Sn]=!0,Me.prototype.removeEventListener=function(a,u,h,m){Te(this,a,u,h,m)};function Ue(a,u){var h,m=a.F;if(m)for(h=[];m;m=m.F)h.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ge(u,a);else if(u instanceof ge)u.target=u.target||a;else{var A=u;u=new ge(m,a),E(u,A)}if(A=!0,h)for(var k=h.length-1;0<=k;k--){var L=u.g=h[k];A=Nt(L,m,!0,u)&&A}if(L=u.g=a,A=Nt(L,m,!0,u)&&A,A=Nt(L,m,!1,u)&&A,h)for(k=0;k<h.length;k++)L=u.g=h[k],A=Nt(L,m,!1,u)&&A}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var h=a.g[u],m=0;m<h.length;m++)Pn(h[m]);delete a.g[u],a.h--}}this.F=null},Me.prototype.K=function(a,u,h,m){return this.i.add(String(a),u,!1,h,m)},Me.prototype.L=function(a,u,h,m){return this.i.add(String(a),u,!0,h,m)};function Nt(a,u,h,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,k=0;k<u.length;++k){var L=u[k];if(L&&!L.da&&L.capture==h){var pe=L.listener,$e=L.ha||L.src;L.fa&&ur(a.i,L),A=pe.call($e,m)!==!1&&A}}return A&&!m.defaultPrevented}function Cn(a,u,h){if(typeof a=="function")h&&(a=_(a,h));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ii(a){a.g=Cn(()=>{a.g=null,a.i&&(a.i=!1,Ii(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class ua extends wt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kn(a){wt.call(this),this.h=a,this.g={}}x(kn,wt);var X=[];function nt(a){W(a.g,function(u,h){this.g.hasOwnProperty(h)&&ce(u)},a),a.g={}}kn.prototype.N=function(){kn.aa.N.call(this),nt(this)},kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var da=c.JSON.stringify,ng=c.JSON.parse,rg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ha(){}ha.prototype.h=null;function Ol(a){return a.h||(a.h=a.i())}function Ml(){}var Xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fa(){ge.call(this,"d")}x(fa,ge);function pa(){ge.call(this,"c")}x(pa,ge);var Dn={},Fl=null;function wi(){return Fl=Fl||new Me}Dn.La="serverreachability";function Bl(a){ge.call(this,Dn.La,a)}x(Bl,ge);function Yr(a){const u=wi();Ue(u,new Bl(u))}Dn.STAT_EVENT="statevent";function Ul(a,u){ge.call(this,Dn.STAT_EVENT,a),this.stat=u}x(Ul,ge);function Xe(a){const u=wi();Ue(u,new Ul(u,a))}Dn.Ma="timingevent";function $l(a,u){ge.call(this,Dn.Ma,a),this.size=u}x($l,ge);function Zr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function sg(a,u,h,m,A,k){a.info(function(){if(a.g)if(k)for(var L="",pe=k.split("&"),$e=0;$e<pe.length;$e++){var ae=pe[$e].split("=");if(1<ae.length){var qe=ae[0];ae=ae[1];var Ge=qe.split("_");L=2<=Ge.length&&Ge[1]=="type"?L+(qe+"="+ae+"&"):L+(qe+"=redacted&")}}else L=null;else L=k;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+h+`
`+L})}function ig(a,u,h,m,A,k,L){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+h+`
`+k+" "+L})}function dr(a,u,h,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ag(a,h)+(m?" "+m:"")})}function og(a,u){a.info(function(){return"TIMEOUT: "+u})}es.prototype.info=function(){};function ag(a,u){if(!a.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var m=h[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return da(h)}catch{return u}}var Ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ma;function Ti(){}x(Ti,ha),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},ma=new Ti;function Zt(a,u,h,m){this.j=a,this.i=u,this.l=h,this.R=m||1,this.U=new kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}var ql={},ga={};function _a(a,u,h){a.L=1,a.v=Si(Lt(u)),a.m=h,a.P=!0,Gl(a,null)}function Gl(a,u){a.F=Date.now(),bi(a),a.A=Lt(a.v);var h=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),iu(h.i,"t",m),a.C=0,h=a.j.J,a.h=new zl,a.g=Tu(a.j,h?u:null,!a.m),0<a.O&&(a.M=new ua(_(a.Y,a,a.g),a.O)),u=a.U,h=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(X[0]=A.toString()),A=X);for(var k=0;k<A.length;k++){var L=ie(h,A[k],m||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Yr(),sg(a.i,a.u,a.A,a.l,a.R,a.m)}Zt.prototype.ca=function(a){a=a.target;const u=this.M;u&&Ot(a)==3?u.j():this.Y(a)},Zt.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=Ot(this.g);var u=this.g.Ba();const pr=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||hu(this.g)))){this.J||Ge!=4||u==7||(u==8||0>=pr?Yr(3):Yr(2)),ya(this);var h=this.g.Z();this.X=h;t:if(Kl(this)){var m=hu(this.g);a="";var A=m.length,k=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),ts(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,ig(this.i,this.u,this.A,this.l,this.R,Ge,h),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,$e=this.g;if((pe=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(pe)){var ae=pe;break t}}ae=null}if(h=ae)dr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,va(this,h);else{this.o=!1,this.s=3,Xe(12),Vn(this),ts(this);break e}}if(this.P){h=!0;let pt;for(;!this.J&&this.C<L.length;)if(pt=cg(this,L),pt==ga){Ge==4&&(this.s=4,Xe(14),h=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==ql){this.s=4,Xe(15),dr(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else dr(this.i,this.l,pt,null),va(this,pt);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||L.length!=0||this.h.h||(this.s=1,Xe(16),h=!1),this.o=this.o&&h,!h)dr(this.i,this.l,L,"[Invalid Chunked Response]"),Vn(this),ts(this);else if(0<L.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Aa(qe),qe.M=!0,Xe(11))}}else dr(this.i,this.l,L,null),va(this,L);Ge==4&&Vn(this),this.o&&!this.J&&(Ge==4?vu(this.j,this):(this.o=!1,bi(this)))}else Ag(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),Vn(this),ts(this)}}}catch{}finally{}};function Kl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cg(a,u){var h=a.C,m=u.indexOf(`
`,h);return m==-1?ga:(h=Number(u.substring(h,m)),isNaN(h)?ql:(m+=1,m+h>u.length?ga:(u=u.slice(m,m+h),a.C=m+h,u)))}Zt.prototype.cancel=function(){this.J=!0,Vn(this)};function bi(a){a.S=Date.now()+a.I,Hl(a,a.I)}function Hl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zr(_(a.ba,a),u)}function ya(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Zt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(og(this.i,this.A),this.L!=2&&(Yr(),Xe(17)),Vn(this),this.s=2,ts(this)):Hl(this,this.S-a)};function ts(a){a.j.G==0||a.J||vu(a.j,a)}function Vn(a){ya(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,nt(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function va(a,u){try{var h=a.j;if(h.G!=0&&(h.g==a||Ia(h.h,a))){if(!a.K&&Ia(h.h,a)&&h.G==3){try{var m=h.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Vi(h),ki(h);else break e;ba(h),Xe(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Zr(_(h.Za,h),6e3));if(1>=Jl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ln(h,11)}else if((a.K||h.g==a)&&Vi(h),!M(u))for(A=h.Da.g.parse(u),u=0;u<A.length;u++){let ae=A[u];if(h.T=ae[0],ae=ae[1],h.G==2)if(ae[0]=="c"){h.K=ae[1],h.ia=ae[2];const qe=ae[3];qe!=null&&(h.la=qe,h.j.info("VER="+h.la));const Ge=ae[4];Ge!=null&&(h.Aa=Ge,h.j.info("SVER="+h.Aa));const pr=ae[5];pr!=null&&typeof pr=="number"&&0<pr&&(m=1.5*pr,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const pt=a.g;if(pt){const Li=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var k=m.h;k.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(wa(k,k.h),k.h=null))}if(m.D){const Ra=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ra&&(m.ya=Ra,_e(m.I,m.D,Ra))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var L=a;if(m.qa=Eu(m,m.J?m.ia:null,m.W),L.K){Xl(m.h,L);var pe=L,$e=m.L;$e&&(pe.I=$e),pe.B&&(ya(pe),bi(pe)),m.g=L}else _u(m);0<h.i.length&&Di(h)}else ae[0]!="stop"&&ae[0]!="close"||Ln(h,7);else h.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ln(h,7):Ta(h):ae[0]!="noop"&&h.l&&h.l.ta(ae),h.v=0)}}Yr(4)}catch{}}var lg=class{constructor(a,u){this.g=a,this.map=u}};function Wl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ql(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jl(a){return a.h?1:a.g?a.g.size:0}function Ia(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function wa(a,u){a.g?a.g.add(u):a.h=u}function Xl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Wl.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const h of a.g.values())u=u.concat(h.D);return u}return C(a.i)}function ug(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],h=a.length,m=0;m<h;m++)u.push(a[m]);return u}u=[],h=0;for(m in a)u[h++]=a[m];return u}function dg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var h=0;h<a;h++)u.push(h);return u}u=[],h=0;for(const m in a)u[h++]=m;return u}}}function Zl(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var h=dg(a),m=ug(a),A=m.length,k=0;k<A;k++)u.call(void 0,m[k],h&&h[k],a)}var eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hg(a,u){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var m=a[h].indexOf("="),A=null;if(0<=m){var k=a[h].substring(0,m);A=a[h].substring(m+1)}else k=a[h];u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Nn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nn){this.h=a.h,Ai(this,a.j),this.o=a.o,this.g=a.g,Ri(this,a.s),this.l=a.l;var u=a.i,h=new ss;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),tu(this,h),this.m=a.m}else a&&(u=String(a).match(eu))?(this.h=!1,Ai(this,u[1]||"",!0),this.o=ns(u[2]||""),this.g=ns(u[3]||"",!0),Ri(this,u[4]),this.l=ns(u[5]||"",!0),tu(this,u[6]||"",!0),this.m=ns(u[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}Nn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(rs(u,nu,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(rs(u,nu,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(rs(h,h.charAt(0)=="/"?mg:pg,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",rs(h,_g)),a.join("")};function Lt(a){return new Nn(a)}function Ai(a,u,h){a.j=h?ns(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ri(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function tu(a,u,h){u instanceof ss?(a.i=u,yg(a.i,a.h)):(h||(u=rs(u,gg)),a.i=new ss(u,a.h))}function _e(a,u,h){a.i.set(u,h)}function Si(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ns(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function rs(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,fg),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nu=/[#\/\?@]/g,pg=/[#\?:]/g,mg=/[#\?]/g,gg=/[#\?@]/g,_g=/#/g;function ss(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function en(a){a.g||(a.g=new Map,a.h=0,a.i&&hg(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=ss.prototype,n.add=function(a,u){en(this),this.i=null,a=hr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function ru(a,u){en(a),u=hr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function su(a,u){return en(a),u=hr(a,u),a.g.has(u)}n.forEach=function(a,u){en(this),this.g.forEach(function(h,m){h.forEach(function(A){a.call(u,A,m,this)},this)},this)},n.na=function(){en(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let m=0;m<u.length;m++){const A=a[m];for(let k=0;k<A.length;k++)h.push(u[m])}return h},n.V=function(a){en(this);let u=[];if(typeof a=="string")su(this,a)&&(u=u.concat(this.g.get(hr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)u=u.concat(a[h])}return u},n.set=function(a,u){return en(this),this.i=null,a=hr(this,a),su(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function iu(a,u,h){ru(a,u),0<h.length&&(a.i=null,a.g.set(hr(a,u),C(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var m=u[h];const k=encodeURIComponent(String(m)),L=this.V(m);for(m=0;m<L.length;m++){var A=k;L[m]!==""&&(A+="="+encodeURIComponent(String(L[m]))),a.push(A)}}return this.i=a.join("&")};function hr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function yg(a,u){u&&!a.j&&(en(a),a.i=null,a.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(ru(this,m),iu(this,A,h))},a)),a.j=u}function vg(a,u){const h=new es;if(c.Image){const m=new Image;m.onload=T(tn,h,"TestLoadImage: loaded",!0,u,m),m.onerror=T(tn,h,"TestLoadImage: error",!1,u,m),m.onabort=T(tn,h,"TestLoadImage: abort",!1,u,m),m.ontimeout=T(tn,h,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Ig(a,u){const h=new es,m=new AbortController,A=setTimeout(()=>{m.abort(),tn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(A),k.ok?tn(h,"TestPingServer: ok",!0,u):tn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),tn(h,"TestPingServer: error",!1,u)})}function tn(a,u,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function wg(){this.g=new rg}function Eg(a,u,h){const m=h||"";try{Zl(a,function(A,k){let L=A;d(A)&&(L=da(A)),u.push(m+k+"="+encodeURIComponent(L))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function Pi(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Pi,ha),Pi.prototype.g=function(){return new xi(this.l,this.j)},Pi.prototype.i=function(a){return function(){return a}}({});function xi(a,u){Me.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(xi,Me),n=xi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,os(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ou(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ou(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?is(this):os(this),this.readyState==3&&ou(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,is(this))},n.Qa=function(a){this.g&&(this.response=a,is(this))},n.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,os(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function au(a){let u="";return W(a,function(h,m){u+=m,u+=":",u+=h,u+=`\r
`}),u}function Ea(a,u,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=au(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):_e(a,u,h))}function be(a){Me.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(be,Me);var Tg=/^https?$/i,bg=["POST","PUT"];n=be.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ma.g(),this.v=this.o?Ol(this.o):Ol(ma),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){cu(this,k);return}if(a=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())h.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(bg,u,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,L]of h)this.g.setRequestHeader(k,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{du(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){cu(this,k)}};function cu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,lu(a),Ci(a)}function lu(a){a.A||(a.A=!0,Ue(a,"complete"),Ue(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ue(this,"complete"),Ue(this,"abort"),Ci(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uu(this):this.bb())},n.bb=function(){uu(this)};function uu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ot(a)!=4||a.Z()!=2)){if(a.u&&Ot(a)==4)Cn(a.Ea,0,a);else if(Ue(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var m;if(m=L===0){var A=String(a.D).match(eu)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!Tg.test(A?A.toLowerCase():"")}h=m}if(h)Ue(a,"complete"),Ue(a,"success");else{a.m=6;try{var k=2<Ot(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",lu(a)}}finally{Ci(a)}}}}function Ci(a,u){if(a.g){du(a);const h=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Ue(a,"ready");try{h.onreadystatechange=m}catch{}}}function du(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ng(u)}};function hu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ag(a){const u={};a=(a.g&&2<=Ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var h=b(a[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=u[A]||[];u[A]=k,k.push(h)}w(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function fu(a){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=as("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=as("baseRetryDelayMs",5e3,a),this.cb=as("retryDelaySeedMs",1e4,a),this.Wa=as("forwardChannelMaxRetries",2,a),this.wa=as("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wl(a&&a.concurrentRequestLimit),this.Da=new wg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fu.prototype,n.la=8,n.G=1,n.connect=function(a,u,h,m){Xe(0),this.W=a,this.H=u||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Eu(this,null,this.W),Di(this)};function Ta(a){if(pu(a),a.G==3){var u=a.U++,h=Lt(a.I);if(_e(h,"SID",a.K),_e(h,"RID",u),_e(h,"TYPE","terminate"),cs(a,h),u=new Zt(a,a.j,u),u.L=2,u.v=Si(Lt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Tu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),bi(u)}wu(a)}function ki(a){a.g&&(Aa(a),a.g.cancel(),a.g=null)}function pu(a){ki(a),a.u&&(c.clearTimeout(a.u),a.u=null),Vi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Di(a){if(!Ql(a.h)&&!a.s){a.s=!0;var u=a.Ga;vt||mi(),It||(vt(),It=!0),Xt.add(u,a),a.B=0}}function Rg(a,u){return Jl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zr(_(a.Ga,a,u),Iu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Zt(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),E(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=gu(this,A,u),h=Lt(this.I),_e(h,"RID",a),_e(h,"CVER",22),this.D&&_e(h,"X-HTTP-Session-Id",this.D),cs(this,h),k&&(this.O?u="headers="+encodeURIComponent(String(au(k)))+"&"+u:this.m&&Ea(h,this.m,k)),wa(this.h,A),this.Ua&&_e(h,"TYPE","init"),this.P?(_e(h,"$req",u),_e(h,"SID","null"),A.T=!0,_a(A,h,null)):_a(A,h,u),this.G=2}}else this.G==3&&(a?mu(this,a):this.i.length==0||Ql(this.h)||mu(this))};function mu(a,u){var h;u?h=u.l:h=a.U++;const m=Lt(a.I);_e(m,"SID",a.K),_e(m,"RID",h),_e(m,"AID",a.T),cs(a,m),a.m&&a.o&&Ea(m,a.m,a.o),h=new Zt(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),u&&(a.i=u.D.concat(a.i)),u=gu(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),wa(a.h,h),_a(h,m,u)}function cs(a,u){a.H&&W(a.H,function(h,m){_e(u,m,h)}),a.l&&Zl({},function(h,m){_e(u,m,h)})}function gu(a,u,h){h=Math.min(a.i.length,h);var m=a.l?_(a.l.Na,a.l,a):null;e:{var A=a.i;let k=-1;for(;;){const L=["count="+h];k==-1?0<h?(k=A[0].g,L.push("ofs="+k)):k=0:L.push("ofs="+k);let pe=!0;for(let $e=0;$e<h;$e++){let ae=A[$e].g;const qe=A[$e].map;if(ae-=k,0>ae)k=Math.max(0,A[$e].g-100),pe=!1;else try{Eg(qe,L,"req"+ae+"_")}catch{m&&m(qe)}}if(pe){m=L.join("&");break e}}}return a=a.i.splice(0,h),u.D=a,m}function _u(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;vt||mi(),It||(vt(),It=!0),Xt.add(u,a),a.v=0}}function ba(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zr(_(a.Fa,a),Iu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zr(_(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),ki(this),yu(this))};function Aa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function yu(a){a.g=new Zt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Lt(a.qa);_e(u,"RID","rpc"),_e(u,"SID",a.K),_e(u,"AID",a.T),_e(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(u,"TO",a.ja),_e(u,"TYPE","xmlhttp"),cs(a,u),a.m&&a.o&&Ea(u,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Si(Lt(u)),h.m=null,h.P=!0,Gl(h,a)}n.Za=function(){this.C!=null&&(this.C=null,ki(this),ba(this),Xe(19))};function Vi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function vu(a,u){var h=null;if(a.g==u){Vi(a),Aa(a),a.g=null;var m=2}else if(Ia(a.h,u))h=u.D,Xl(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=wi(),Ue(m,new $l(m,h)),Di(a)}else _u(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&Rg(a,u)||m==2&&ba(a)))switch(h&&0<h.length&&(u=a.h,u.i=u.i.concat(h)),A){case 1:Ln(a,5);break;case 4:Ln(a,10);break;case 3:Ln(a,6);break;default:Ln(a,2)}}}function Iu(a,u){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*u}function Ln(a,u){if(a.j.info("Error code "+u),u==2){var h=_(a.fb,a),m=a.Xa;const A=!m;m=new Nn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ai(m,"https"),Si(m),A?vg(m.toString(),h):Ig(m.toString(),h)}else Xe(2);a.G=0,a.l&&a.l.sa(u),wu(a),pu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function wu(a){if(a.G=0,a.ka=[],a.l){const u=Yl(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Eu(a,u,h){var m=h instanceof Nn?Lt(h):new Nn(h);if(m.g!="")u&&(m.g=u+"."+m.g),Ri(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var k=new Nn(null);m&&Ai(k,m),u&&(k.g=u),A&&Ri(k,A),h&&(k.l=h),m=k}return h=a.D,u=a.ya,h&&u&&_e(m,h,u),_e(m,"VER",a.la),cs(a,m),m}function Tu(a,u,h){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new be(new Pi({eb:h})):new be(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bu(){}n=bu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ni(){}Ni.prototype.g=function(a,u){return new at(a,u)};function at(a,u){Me.call(this),this.g=new fu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!M(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new fr(this)}x(at,Me),at.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){Ta(this.g)},at.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=da(a),a=h);u.i.push(new lg(u.Ya++,a)),u.G==3&&Di(u)},at.prototype.N=function(){this.g.l=null,delete this.j,Ta(this.g),delete this.g,at.aa.N.call(this)};function Au(a){fa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(Au,fa);function Ru(){pa.call(this),this.status=1}x(Ru,pa);function fr(a){this.g=a}x(fr,bu),fr.prototype.ua=function(){Ue(this.g,"a")},fr.prototype.ta=function(a){Ue(this.g,new Au(a))},fr.prototype.sa=function(a){Ue(this.g,new Ru)},fr.prototype.ra=function(){Ue(this.g,"b")},Ni.prototype.createWebChannel=Ni.prototype.g,at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,If=function(){return new Ni},vf=function(){return wi()},yf=Dn,Xa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ei.NO_ERROR=0,Ei.TIMEOUT=8,Ei.HTTP_ERROR=6,Qi=Ei,jl.COMPLETE="complete",_f=jl,Ml.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,ys=Ml,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,gf=be}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});const rd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xn=new Tc("@firebase/firestore");function vr(){return Xn.logLevel}function V(n,...e){if(Xn.logLevel<=re.DEBUG){const t=e.map(Nc);Xn.debug(`Firestore (${qr}): ${n}`,...t)}}function xe(n,...e){if(Xn.logLevel<=re.ERROR){const t=e.map(Nc);Xn.error(`Firestore (${qr}): ${n}`,...t)}}function Fs(n,...e){if(Xn.logLevel<=re.WARN){const t=e.map(Nc);Xn.warn(`Firestore (${qr}): ${n}`,...t)}}function Nc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */class xt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(He.UNAUTHENTICATED))}shutdown(){}}class bI{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new EI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new He(e)}}class AI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new AI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new SI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Cr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Ef(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bs{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(),r===void 0?r=e.length-t:r>e.length-t&&j(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends Bs{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const CI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Bs{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return CI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new we(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new O(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _o{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Ya(n){return n.fields.find(e=>e.kind===2)}function Fn(n){return n.fields.filter(e=>e.kind!==2)}_o.UNKNOWN_ID=-1;class Ji{constructor(e,t){this.fieldPath=e,this.kind=t}}class Us{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Us(0,dt.min())}}function Tf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new Ee(t+1,0):new Ee(t,r));return new dt(s,B.empty(),e)}function bf(n){return new dt(n.readTime,n.key,-1)}class dt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new dt(H.min(),B.empty(),-1)}static max(){return new dt(H.max(),B.empty(),-1)}}function Lc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Af)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(f=>{o[d]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new xt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Rs(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Oc(r.target.error);this.V.reject(new Rs(e,s))}}static open(e,t,r,s){try{return new Mo(t,e.transaction(s,r))}catch(i){throw new Rs(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new DI(t)}}class mn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,mn.S(Le())===12.2&&xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),Bn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Sh())return!1;if(mn.v())return!0;const e=Le(),t=mn.S(e),r=0<t&&t<10,s=Sf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Rs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new O(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Rs(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Mo.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),S.reject(d))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,d=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Sf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class kI{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Bn(this.B.delete())}}class Rs extends O{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Tn(n){return n.name==="IndexedDbTransactionError"}class DI{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Bn(r)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),Bn(this.store.add(e))}get(e){return Bn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),Bn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),Bn(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new S((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new S((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new S((r,s)=>{t.onerror=i=>{const o=Oc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}W(e,t){const r=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new kI(c),d=t(c.primaryKey,c.value,l);if(d instanceof S){const f=d.catch(p=>(l.done(),S.reject(p)));r.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Bn(n){return new S((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Oc(r.target.error);t(s)}})}let sd=!1;function Oc(n){const e=mn.S(Le());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sd||(sd=!0,setTimeout(()=>{throw r},0)),r}}return n}class VI{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Tn(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await En(t)}await this.X(6e4)})}}class NI{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return S.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=bf(i);Lc(o,r)>0&&(r=o)}),new dt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class st{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}st.oe=-1;function Fo(n){return n==null}function $s(n){return n===0&&1/n==-1/0}function Pf(n){return typeof n=="number"&&Number.isInteger(n)&&!$s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=id(e)),e=LI(n.get(t),e);return id(e)}function LI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function id(n){return n+""}function bt(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),le.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&j(),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:j()}i=o+2}return new le(r)}/**
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
 */const od=["userId","batchId"];/**
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
 */function Xi(n,e){return[n,Ze(e)]}function xf(n,e,t){return[n,Ze(e),t]}const OI={},MI=["prefixPath","collectionGroup","readTime","documentId"],FI=["prefixPath","collectionGroup","documentId"],BI=["collectionGroup","readTime","prefixPath","documentId"],UI=["canonicalId","targetId"],$I=["targetId","path"],jI=["path","targetId"],zI=["collectionId","parent"],qI=["indexId","uid"],GI=["uid","sequenceNumber"],KI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],HI=["indexId","uid","orderedDocumentKey"],WI=["userId","collectionPath","documentId"],QI=["userId","collectionPath","largestBatchId"],JI=["userId","collectionGroup","largestBatchId"],Cf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],XI=[...Cf,"documentOverlays"],kf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Df=kf,Mc=[...Df,"indexConfiguration","indexState","indexEntries"],YI=Mc,ZI=[...Mc,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Rf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Oe(n,e){const t=z(n);return mn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ar(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fi(this.root,e,this.comparator,!0)}}class Fi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,t,r,s,i){return this}insert(e,t,r){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cd(this.data.getIterator())}getIteratorFrom(e){return new cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function mr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new it([])}unionWith(e){let t=new fe(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nf("Invalid base64 string: "+i):i}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const ew=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(G(!!n),typeof n=="string"){let e=0;const t=ew.exec(n);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Bc(n){const e=n.mapValue.fields.__previous_value__;return Fc(e)?Bc(e):e}function js(n){const e=Gt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,r,s,i,o,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Yn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Yi={nullValue:"NULL_VALUE"};function Zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fc(n)?4:Lf(n)?9007199254740991:Bo(n)?10:11:j()}function kt(n,e){if(n===e)return!0;const t=Zn(n);if(t!==Zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return js(n).isEqual(js(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gt(s.timestampValue),c=Gt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return yn(s.bytesValue).isEqual(yn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ve(s.doubleValue),c=ve(i.doubleValue);return o===c?$s(o)===$s(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Cr(n.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ad(o)!==ad(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!kt(o[l],c[l])))return!1;return!0}(n,e);default:return j()}}function zs(n,e){return(n.values||[]).find(t=>kt(t,e))!==void 0}function vn(n,e){if(n===e)return 0;const t=Zn(n),r=Zn(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ve(i.integerValue||i.doubleValue),l=ve(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return ld(n.timestampValue,e.timestampValue);case 4:return ld(js(n),js(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,o){const c=yn(i),l=yn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=Y(c[d],l[d]);if(f!==0)return f}return Y(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Y(ve(i.latitude),ve(o.latitude));return c!==0?c:Y(ve(i.longitude),ve(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ud(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,d,f;const p=i.fields||{},_=o.fields||{},T=(c=p.value)===null||c===void 0?void 0:c.arrayValue,x=(l=_.value)===null||l===void 0?void 0:l.arrayValue,C=Y(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:ud(T,x)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===hn.mapValue&&o===hn.mapValue)return 0;if(i===hn.mapValue)return 1;if(o===hn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=o.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=Y(l[p],f[p]);if(_!==0)return _;const T=vn(c[l[p]],d[f[p]]);if(T!==0)return T}return Y(l.length,f.length)}(n.mapValue,e.mapValue);default:throw j()}}function ld(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Gt(n),r=Gt(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function ud(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=vn(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function kr(n){return ec(n)}function ec(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Gt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ec(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ec(t.fields[o])}`;return s+"}"}(n.mapValue):j()}function qs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function tc(n){return!!n&&"integerValue"in n}function Gs(n){return!!n&&"arrayValue"in n}function dd(n){return!!n&&"nullValue"in n}function hd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zi(n){return!!n&&"mapValue"in n}function Bo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ss(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ar(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ss(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ss(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Lf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Of={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function nw(n){return"nullValue"in n?Yi:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?qs(Yn.empty(),B.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Bo(n)?Of:{mapValue:{}}:j()}function rw(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?qs(Yn.empty(),B.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Of:"mapValue"in n?Bo(n)?{mapValue:{}}:hn:j()}function fd(n,e){const t=vn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function pd(n,e){const t=vn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ss(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ar(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new We(Ss(this.value))}}function Mf(n){const e=[];return ar(n.fields,(t,r)=>{const s=new we([t]);if(Zi(r)){const i=Mf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,H.min(),H.min(),H.min(),We.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,H.min(),H.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,H.min(),H.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dr{constructor(e,t){this.position=e,this.inclusive=t}}function md(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=vn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class yo{constructor(e,t="asc"){this.field=e,this.dir=t}}function sw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ff{}class se extends Ff{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new iw(e,t,r):t==="array-contains"?new cw(e,r):t==="in"?new qf(e,r):t==="not-in"?new lw(e,r):t==="array-contains-any"?new uw(e,r):new se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ow(e,r):new aw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(vn(t,this.value)):t!==null&&Zn(this.value)===Zn(t)&&this.matchesComparison(vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends Ff{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ue(e,t)}matches(e){return Vr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vr(n){return n.op==="and"}function nc(n){return n.op==="or"}function Uc(n){return Bf(n)&&Vr(n)}function Bf(n){for(const e of n.filters)if(e instanceof ue)return!1;return!0}function rc(n){if(n instanceof se)return n.field.canonicalString()+n.op.toString()+kr(n.value);if(Uc(n))return n.filters.map(e=>rc(e)).join(",");{const e=n.filters.map(t=>rc(t)).join(",");return`${n.op}(${e})`}}function Uf(n,e){return n instanceof se?function(r,s){return s instanceof se&&r.op===s.op&&r.field.isEqual(s.field)&&kt(r.value,s.value)}(n,e):n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Uf(o,s.filters[c]),!0):!1}(n,e):void j()}function $f(n,e){const t=n.filters.concat(e);return ue.create(t,n.op)}function jf(n){return n instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${kr(t.value)}`}(n):n instanceof ue?function(t){return t.op.toString()+" {"+t.getFilters().map(jf).join(" ,")+"}"}(n):"Filter"}class iw extends se{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class ow extends se{constructor(e,t){super(e,"in",t),this.keys=zf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aw extends se{constructor(e,t){super(e,"not-in",t),this.keys=zf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class cw extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gs(t)&&zs(t.arrayValue,this.value)}}class qf extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zs(this.value.arrayValue,t)}}class lw extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zs(this.value.arrayValue,t)}}class uw extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function sc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new dw(n,e,t,r,s,i,o)}function er(n){const e=z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>rc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>kr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>kr(r)).join(",")),e.ue=t}return e.ue}function si(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Uf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gd(n.startAt,e.startAt)&&gd(n.endAt,e.endAt)}function vo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Io(n,e){return n.filters.filter(t=>t instanceof se&&t.field.isEqual(e))}function _d(n,e,t){let r=Yi,s=!0;for(const i of Io(n,e)){let o=Yi,c=!0;switch(i.op){case"<":case"<=":o=nw(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Yi}fd({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];fd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function yd(n,e,t){let r=hn,s=!0;for(const i of Io(n,e)){let o=hn,c=!0;switch(i.op){case">=":case">":o=rw(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=hn}pd({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];pd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gf(n,e,t,r,s,i,o,c){return new ii(n,e,t,r,s,i,o,c)}function Uo(n){return new ii(n)}function vd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kf(n){return n.collectionGroup!==null}function Ps(n){const e=z(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new fe(we.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new yo(i,r))}),t.has(we.keyField().canonicalString())||e.ce.push(new yo(we.keyField(),r))}return e.ce}function ut(n){const e=z(n);return e.le||(e.le=hw(e,Ps(n))),e.le}function hw(n,e){if(n.limitType==="F")return sc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new yo(s.field,i)});const t=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return sc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ic(n,e){const t=n.filters.concat([e]);return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function oc(n,e,t){return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $o(n,e){return si(ut(n),ut(e))&&n.limitType===e.limitType}function Hf(n){return`${er(ut(n))}|lt:${n.limitType}`}function Ir(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>jf(s)).join(", ")}]`),Fo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>kr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>kr(s)).join(",")),`Target(${r})`}(ut(n))}; limitType=${n.limitType})`}function oi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const d=md(o,c,l);return o.inclusive?d<=0:d<0}(r.startAt,Ps(r),s)||r.endAt&&!function(o,c,l){const d=md(o,c,l);return o.inclusive?d>=0:d>0}(r.endAt,Ps(r),s))}(n,e)}function Wf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qf(n){return(e,t)=>{let r=!1;for(const s of Ps(n)){const i=fw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function fw(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),d=c.data.field(i);return l!==null&&d!==null?vn(l,d):j()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new me(B.comparator);function ct(){return pw}const Jf=new me(B.comparator);function vs(...n){let e=Jf;for(const t of n)e=e.insert(t.key,t);return e}function Xf(n){let e=Jf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function At(){return xs()}function Yf(){return xs()}function xs(){return new bn(n=>n.toString(),(n,e)=>n.isEqual(e))}const mw=new me(B.comparator),gw=new fe(B.comparator);function te(...n){let e=gw;for(const t of n)e=e.add(t);return e}const _w=new fe(Y);function $c(){return _w}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function Zf(n){return{integerValue:""+n}}function yw(n,e){return Pf(e)?Zf(e):jc(n,e)}/**
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
 */class jo{constructor(){this._=void 0}}function vw(n,e,t){return n instanceof Nr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fc(i)&&(i=Bc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Lr?tp(n,e):n instanceof Or?np(n,e):function(s,i){const o=ep(s,i),c=Id(o)+Id(s.Pe);return tc(o)&&tc(s.Pe)?Zf(c):jc(s.serializer,c)}(n,e)}function Iw(n,e,t){return n instanceof Lr?tp(n,e):n instanceof Or?np(n,e):t}function ep(n,e){return n instanceof Ks?function(r){return tc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Nr extends jo{}class Lr extends jo{constructor(e){super(),this.elements=e}}function tp(n,e){const t=rp(e);for(const r of n.elements)t.some(s=>kt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Or extends jo{constructor(e){super(),this.elements=e}}function np(n,e){let t=rp(e);for(const r of n.elements)t=t.filter(s=>!kt(s,r));return{arrayValue:{values:t}}}class Ks extends jo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Id(n){return ve(n.integerValue||n.doubleValue)}function rp(n){return Gs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.field=e,this.transform=t}}function ww(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Lr&&s instanceof Lr||r instanceof Or&&s instanceof Or?Cr(r.elements,s.elements,kt):r instanceof Ks&&s instanceof Ks?kt(r.Pe,s.Pe):r instanceof Nr&&s instanceof Nr}(n.transform,e.transform)}class Ew{constructor(e,t){this.version=e,this.transformResults=t}}class Qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zo{}function ip(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qo(n.key,Qe.none()):new Gr(n.key,n.data,Qe.none());{const t=n.data,r=We.empty();let s=new fe(we.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qt(n.key,r,new it(s.toArray()),Qe.none())}}function Tw(n,e,t){n instanceof Gr?function(s,i,o){const c=s.value.clone(),l=Ed(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Qt?function(s,i,o){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ed(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(op(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Cs(n,e,t,r){return n instanceof Gr?function(i,o,c,l){if(!eo(i.precondition,o))return c;const d=i.value.clone(),f=Td(i.fieldTransforms,l,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qt?function(i,o,c,l){if(!eo(i.precondition,o))return c;const d=Td(i.fieldTransforms,l,o),f=o.data;return f.setAll(op(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return eo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function bw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ep(r.transform,s||null);i!=null&&(t===null&&(t=We.empty()),t.set(r.field,i))}return t||null}function wd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cr(r,s,(i,o)=>ww(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gr extends zo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends zo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function op(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ed(n,e,t){const r=new Map;G(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Iw(o,c,t[s]))}return r}function Td(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,vw(i,o,e))}return r}class qo extends zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ap extends zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Tw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=ip(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&Cr(this.mutations,e.mutations,(t,r)=>wd(t,r))&&Cr(this.baseMutations,e.baseMutations,(t,r)=>wd(t,r))}}class qc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length);let s=function(){return mw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qc(e,t,r,s)}}/**
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
 */class Gc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Aw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,oe;function Rw(n){switch(n){default:return j();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function cp(n){if(n===void 0)return xe("GRPC error has no .code"),D.UNKNOWN;switch(n){case Ve.OK:return D.OK;case Ve.CANCELLED:return D.CANCELLED;case Ve.UNKNOWN:return D.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return D.INTERNAL;case Ve.UNAVAILABLE:return D.UNAVAILABLE;case Ve.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ve.NOT_FOUND:return D.NOT_FOUND;case Ve.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ve.ABORTED:return D.ABORTED;case Ve.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ve.DATA_LOSS:return D.DATA_LOSS;default:return j()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Sw(){return new TextEncoder}/**
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
 */const Pw=new zn([4294967295,4294967295],0);function bd(n){const e=Sw().encode(n),t=new mf;return t.update(e),new Uint8Array(t.digest())}function Ad(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([t,r],0),new zn([s,i],0)]}class Kc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Is(`Invalid padding: ${t}`);if(r<0)throw new Is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Is(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=zn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(zn.fromNumber(r)));return s.compare(Pw)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=bd(e),[r,s]=Ad(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kc(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=bd(e),[r,s]=Ad(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ai(H.min(),s,new me(Y),ct(),te())}}class ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ci(r,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class lp{constructor(e,t){this.targetId=e,this.me=t}}class up{constructor(e,t,r=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Rd{constructor(){this.fe=0,this.ge=Pd(),this.pe=Ce.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),t=te(),r=te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:j()}}),new ci(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Pd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xw{constructor(e){this.Le=e,this.Be=new Map,this.ke=ct(),this.qe=Sd(),this.Qe=new me(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:j()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(vo(i))if(r===0){const o=new B(i.path);this.Ue(t,o,Ae.newNoDocument(o,H.min()))}else G(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=yn(r).toUint8Array()}catch(l){if(l instanceof Nf)return Fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Kc(o,s,i)}catch(l){return Fs(l instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&vo(c.target)){const l=new B(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ae.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=te();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ai(e,t,this.Qe,this.ke,r);return this.ke=ct(),this.qe=Sd(),this.Qe=new me(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Rd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new fe(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Rd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Sd(){return new me(B.comparator)}function Pd(){return new me(B.comparator)}const Cw={asc:"ASCENDING",desc:"DESCENDING"},kw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dw={and:"AND",or:"OR"};class Vw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ac(n,e){return n.useProto3Json||Fo(e)?e:{value:e}}function Mr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Nw(n,e){return Mr(n,e.toTimestamp())}function et(n){return G(!!n),H.fromTimestamp(function(t){const r=Gt(t);return new Ee(r.seconds,r.nanos)}(n))}function Hc(n,e){return cc(n,e).canonicalString()}function cc(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hp(n){const e=le.fromString(n);return G(wp(e)),e}function wo(n,e){return Hc(n.databaseId,e.path)}function qn(n,e){const t=hp(e);if(t.get(1)!==n.databaseId.projectId)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(mp(t))}function fp(n,e){return Hc(n.databaseId,e)}function pp(n){const e=hp(n);return e.length===4?le.emptyPath():mp(e)}function lc(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mp(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xd(n,e,t){return{name:wo(n,e),fields:t.value.mapValue.fields}}function Lw(n,e,t){const r=qn(n,e.name),s=et(e.updateTime),i=e.createTime?et(e.createTime):H.min(),o=new We({mapValue:{fields:e.fields}}),c=Ae.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Ow(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(G(f===void 0||typeof f=="string"),Ce.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ce.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const f=d.code===void 0?D.UNKNOWN:cp(d.code);return new O(f,d.message||"")}(o);t=new up(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qn(n,r.document.name),i=et(r.document.updateTime),o=r.document.createTime?et(r.document.createTime):H.min(),c=new We({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(s,i,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new to(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qn(n,r.document),i=r.readTime?et(r.readTime):H.min(),o=Ae.newNoDocument(s,i),c=r.removedTargetIds||[];t=new to([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qn(n,r.document),i=r.removedTargetIds||[];t=new to([],i,s,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Aw(s,i),c=r.targetId;t=new lp(c,o)}}return t}function Eo(n,e){let t;if(e instanceof Gr)t={update:xd(n,e.key,e.value)};else if(e instanceof qo)t={delete:wo(n,e.key)};else if(e instanceof Qt)t={update:xd(n,e.key,e.data),updateMask:jw(e.fieldMask)};else{if(!(e instanceof ap))return j();t={verify:wo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Nr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Lr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Or)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ks)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw j()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Nw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(n,e.precondition)),t}function uc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Qe.updateTime(et(i.updateTime)):i.exists!==void 0?Qe.exists(i.exists):Qe.none()}(e.currentDocument):Qe.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME"),l=new Nr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Lr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Or(f)}else"increment"in c?l=new Ks(o,c.increment):j();const d=we.fromServerFormat(c.fieldPath);return new sp(d,l)}(n,s)):[];if(e.update){e.update.name;const s=qn(n,e.update.name),i=new We({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const d=l.fieldPaths||[];return new it(d.map(f=>we.fromServerFormat(f)))}(e.updateMask);return new Qt(s,i,o,t,r)}return new Gr(s,i,t,r)}if(e.delete){const s=qn(n,e.delete);return new qo(s,t)}if(e.verify){const s=qn(n,e.verify);return new ap(s,t)}return j()}function Mw(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?et(s.updateTime):et(i);return o.isEqual(H.min())&&(o=et(i)),new Ew(o,s.transformResults||[])}(t,e))):[]}function gp(n,e){return{documents:[fp(n,e.path)]}}function _p(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=fp(n,s);const i=function(d){if(d.length!==0)return Ip(ue.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:wr(_.field),direction:Bw(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ac(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function yp(n){let e=pp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=vp(p);return _ instanceof ue&&Uc(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(x){return new yo(Er(x.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,Fo(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,T=p.values||[];return new Dr(T,_)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const _=!p.before,T=p.values||[];return new Dr(T,_)}(t.endAt)),Gf(e,s,o,i,c,"F",l,d)}function Fw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Er(t.unaryFilter.field);return se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Er(t.unaryFilter.field);return se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(t.unaryFilter.field);return se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Er(t.unaryFilter.field);return se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(t){return se.create(Er(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ue.create(t.compositeFilter.filters.map(r=>vp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j()}}(t.compositeFilter.op))}(n):j()}function Bw(n){return Cw[n]}function Uw(n){return kw[n]}function $w(n){return Dw[n]}function wr(n){return{fieldPath:n.canonicalString()}}function Er(n){return we.fromServerFormat(n.fieldPath)}function Ip(n){return n instanceof se?function(t){if(t.op==="=="){if(hd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NAN"}};if(dd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NAN"}};if(dd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(t.field),op:Uw(t.op),value:t.value}}}(n):n instanceof ue?function(t){const r=t.getFilters().map(s=>Ip(s));return r.length===1?r[0]:{compositeFilter:{op:$w(t.op),filters:r}}}(n):j()}function jw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,r,s,i=H.min(),o=H.min(),c=Ce.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.ct=e}}function zw(n,e){let t;if(e.document)t=Lw(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=B.fromSegments(e.noDocument.path),s=nr(e.noDocument.readTime);t=Ae.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const r=B.fromSegments(e.unknownDocument.path),s=nr(e.unknownDocument.version);t=Ae.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Ee(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function Cd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:To(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:wo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Mr(i,o.version.toTimestamp()),createTime:Mr(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:tr(e.version)};else{if(!e.isUnknownDocument())return j();r.unknownDocument={path:t.path.toArray(),version:tr(e.version)}}return r}function To(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function tr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function nr(n){const e=new Ee(n.seconds,n.nanoseconds);return H.fromTimestamp(e)}function Un(n,e){const t=(e.baseMutations||[]).map(i=>uc(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>uc(n.ct,i)),s=Ee.fromMillis(e.localWriteTimeMs);return new zc(e.batchId,s,t,r)}function ws(n){const e=nr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?nr(n.lastLimboFreeSnapshotVersion):H.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return G(i.documents.length===1),ut(Uo(pp(i.documents[0])))}(n.query):function(i){return ut(yp(i))}(n.query),new Ut(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ce.fromBase64String(n.resumeToken))}function Tp(n,e){const t=tr(e.snapshotVersion),r=tr(e.lastLimboFreeSnapshotVersion);let s;s=vo(e.target)?gp(n.ct,e.target):_p(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:er(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function bp(n){const e=yp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oc(e,e.limit,"L"):e}function Na(n,e){return new Gc(e.largestBatchId,uc(n.ct,e.overlayMutation))}function kd(n,e){const t=e.path.lastSegment();return[n,Ze(e.path.popLast()),t]}function Dd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:tr(r.readTime),documentKey:Ze(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{getBundleMetadata(e,t){return Vd(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:nr(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Vd(e).put(function(s){return{bundleId:s.id,createTime:tr(et(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Nd(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:bp(i.bundledQuery),readTime:nr(i.readTime)}}(r)})}saveNamedQuery(e,t){return Nd(e).put(function(s){return{name:s.name,readTime:tr(et(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Vd(n){return Oe(n,"bundles")}function Nd(n){return Oe(n,"namedQueries")}/**
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
 */class Go{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Go(e,r)}getOverlay(e,t){return ls(e).get(kd(this.userId,t)).next(r=>r?Na(this.serializer,r):null)}getOverlays(e,t){const r=At();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new Gc(t,o);s.push(this.ht(e,c))}),S.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Ze(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(ls(e).j("collectionPathOverlayIndex",c))}),S.waitFor(i)}getOverlaysForCollection(e,t,r){const s=At(),i=Ze(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ls(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const d=Na(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=At();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ls(e).J({index:"collectionGroupOverlayIndex",range:c},(l,d,f)=>{const p=Na(this.serializer,d);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return ls(e).put(function(s,i,o){const[c,l,d]=kd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Eo(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ls(n){return Oe(n,"documentOverlays")}/**
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
 */class Gw{Pt(e){return Oe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ce.fromUint8Array(r):Ce.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class $n{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ve(e.integerValue));else if("doubleValue"in e){const r=ve(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),$s(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Gt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(yn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Lf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Bo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):j()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(ve(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}$n.vt=new $n;function Kw(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Ld(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=Kw(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class Hw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Ld(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Ld(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class Ww{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Qw{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class us{constructor(){this.jt=new Hw,this.Ht=new Ww(this.jt),this.Jt=new Qw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class jn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new jn(this.indexId,this.documentKey,this.arrayValue,r)}}function rn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Od(n.arrayValue,e.arrayValue),t!==0?t:(t=Od(n.directionalValue,e.directionalValue),t!==0?t:B.comparator(n.documentKey,e.documentKey)))}function Od(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Md{constructor(e){this.Xt=new fe((t,r)=>we.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Ya(e);if(t!==void 0&&!this.sn(t))return!1;const r=Fn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new fe(we.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ji(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ji(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ji(r.field,r.dir==="asc"?0:1)));return new _o(_o.UNKNOWN_ID,this.collectionId,t,Us.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Ap(n){var e,t;if(G(n instanceof se||n instanceof ue),n instanceof se){if(n instanceof qf){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>se.create(n.field,"==",i)))||[];return ue.create(s,"or")}return n}const r=n.filters.map(s=>Ap(s));return ue.create(r,n.op)}function Jw(n){if(n.getFilters().length===0)return[];const e=fc(Ap(n));return G(Rp(e)),dc(e)||hc(e)?[e]:e.getFilters()}function dc(n){return n instanceof se}function hc(n){return n instanceof ue&&Uc(n)}function Rp(n){return dc(n)||hc(n)||function(t){if(t instanceof ue&&nc(t)){for(const r of t.getFilters())if(!dc(r)&&!hc(r))return!1;return!0}return!1}(n)}function fc(n){if(G(n instanceof se||n instanceof ue),n instanceof se)return n;if(n.filters.length===1)return fc(n.filters[0]);const e=n.filters.map(r=>fc(r));let t=ue.create(e,n.op);return t=bo(t),Rp(t)?t:(G(t instanceof ue),G(Vr(t)),G(t.filters.length>1),t.filters.reduce((r,s)=>Wc(r,s)))}function Wc(n,e){let t;return G(n instanceof se||n instanceof ue),G(e instanceof se||e instanceof ue),t=n instanceof se?e instanceof se?function(s,i){return ue.create([s,i],"and")}(n,e):Fd(n,e):e instanceof se?Fd(e,n):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),Vr(s)&&Vr(i))return $f(s,i.getFilters());const o=nc(s)?s:i,c=nc(s)?i:s,l=o.filters.map(d=>Wc(d,c));return ue.create(l,"or")}(n,e),bo(t)}function Fd(n,e){if(Vr(e))return $f(e,n.getFilters());{const t=e.filters.map(r=>Wc(n,r));return ue.create(t,"or")}}function bo(n){if(G(n instanceof se||n instanceof ue),n instanceof se)return n;const e=n.getFilters();if(e.length===1)return bo(e[0]);if(Bf(n))return n;const t=e.map(s=>bo(s)),r=[];return t.forEach(s=>{s instanceof se?r.push(s):s instanceof ue&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ue.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.un=new Qc}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(dt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(dt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Qc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Uint8Array(0);class Yw{constructor(e,t){this.databaseId=t,this.cn=new Qc,this.ln=new bn(r=>er(r),(r,s)=>si(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Ze(s)};return Bd(e).put(i)}return S.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Ef(t),""],!1,!0);return Bd(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(bt(o.parent))}return r})}addFieldIndex(e,t){const r=ds(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=_r(e);return i.next(c=>{o.put(Dd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=ds(e),s=_r(e),i=gr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ds(e),r=gr(e),s=_r(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Md(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=gr(e);let s=!0;const i=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=te();const c=[];return S.forEach(i,(l,d)=>{V("IndexedDbIndexManager",`Using index ${function(N){return`id=${N.indexId}|cg=${N.collectionGroup}|f=${N.fields.map(U=>`${U.fieldPath}:${U.kind}`).join(",")}`}(l)} to execute ${er(t)}`);const f=function(N,U){const K=Ya(U);if(K===void 0)return null;for(const W of Io(N,K.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(d,l),p=function(N,U){const K=new Map;for(const W of Fn(U))for(const w of Io(N,W.fieldPath))switch(w.op){case"==":case"in":K.set(W.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return K.set(W.fieldPath.canonicalString(),w.value),Array.from(K.values())}return null}(d,l),_=function(N,U){const K=[];let W=!0;for(const w of Fn(U)){const y=w.kind===0?_d(N,w.fieldPath,N.startAt):yd(N,w.fieldPath,N.startAt);K.push(y.value),W&&(W=y.inclusive)}return new Dr(K,W)}(d,l),T=function(N,U){const K=[];let W=!0;for(const w of Fn(U)){const y=w.kind===0?yd(N,w.fieldPath,N.endAt):_d(N,w.fieldPath,N.endAt);K.push(y.value),W&&(W=y.inclusive)}return new Dr(K,W)}(d,l),x=this.In(l,d,_),C=this.In(l,d,T),P=this.Tn(l,d,p),$=this.En(l.indexId,f,x,_.inclusive,C,T.inclusive,P);return S.forEach($,M=>r.G(M,t.limit).next(N=>{N.forEach(U=>{const K=B.fromSegments(U.documentKey);o.has(K)||(o=o.add(K),c.push(K))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=Jw(ue.create(e.filters,"and")).map(r=>sc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),d=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const _=t?this.dn(t[p/d]):Bi,T=this.An(e,_,r[p%d],s),x=this.Rn(e,_,i[p%d],o),C=c.map(P=>this.An(e,_,P,!0));f.push(...this.createRange(T,x,C))}return f}An(e,t,r,s){const i=new jn(e,B.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new jn(e,B.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new Md(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return S.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let d=new fe(we.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new us;for(const s of Fn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);$n.vt.It(i,o)}return r.zt()}dn(e){const t=new us;return $n.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new us;return $n.vt.It(qs(this.databaseId,t),r.Yt(function(i){const o=Fn(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new us);let i=0;for(const o of Fn(e)){const c=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Gs(c))s=this.gn(s,o,c);else{const d=l.Yt(o.kind);$n.vt.It(c,d)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new us;l.seed(c.zt()),$n.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof se&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ds(e),s=_r(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return S.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const _=p?new Us(p.sequenceNumber,new dt(nr(p.readTime),new B(bt(p.documentKey)),p.largestBatchId)):Us.empty(),T=f.fields.map(([x,C])=>new Ji(we.fromServerFormat(x),C));return new _o(f.indexId,f.collectionGroup,T,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Y(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=ds(e),i=_r(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>i.put(Dd(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return S.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),S.forEach(c,l=>this.wn(e,s,l).next(d=>{const f=this.Sn(i,l);return d.isEqual(f)?S.resolve():this.bn(e,i,l,d,f)}))))})}Dn(e,t,r,s){return gr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return gr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=gr(e);let i=new fe(rn);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,c)=>{i=i.add(new jn(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let r=new fe(rn);const s=this.Vn(t,e);if(s==null)return r;const i=Ya(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Gs(o))for(const c of o.arrayValue.values||[])r=r.add(new jn(t.indexId,e.key,this.dn(c),s))}else r=r.add(new jn(t.indexId,e.key,Bi,s));return r}bn(e,t,r,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,d,f,p,_){const T=l.getIterator(),x=d.getIterator();let C=mr(T),P=mr(x);for(;C||P;){let $=!1,M=!1;if(C&&P){const N=f(C,P);N<0?M=!0:N>0&&($=!0)}else C!=null?M=!0:$=!0;$?(p(P),P=mr(x)):M?(_(C),C=mr(T)):(C=mr(T),P=mr(x))}}(s,i,rn,c=>{o.push(this.Dn(e,t,r,c))},c=>{o.push(this.vn(e,t,r,c))}),S.waitFor(o)}yn(e){let t=1;return _r(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>rn(o,c)).filter((o,c,l)=>!c||rn(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=rn(o,e),l=rn(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Bi,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Bi,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return rn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ud)}getMinOffset(e,t){return S.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||j())).next(Ud)}}function Bd(n){return Oe(n,"collectionParents")}function gr(n){return Oe(n,"indexEntries")}function ds(n){return Oe(n,"indexConfiguration")}function _r(n){return Oe(n,"indexState")}function Ud(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Lc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new dt(e.readTime,e.documentKey,t)}/**
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
 */const $d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.J({range:o},(f,p,_)=>(c++,_.delete()));i.push(l.next(()=>{G(c===1)}));const d=[];for(const f of t.mutations){const p=xf(e,f.key.path,t.batchId);i.push(s.delete(p)),d.push(f.key)}return S.waitFor(i).next(()=>d)}function Ao(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw j();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(41943040,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);class Ko{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ko(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Tr(e),o=sn(e);return o.add({}).next(c=>{G(typeof c=="number");const l=new zc(c,t,r,s),d=function(T,x,C){const P=C.baseMutations.map(M=>Eo(T.ct,M)),$=C.mutations.map(M=>Eo(T.ct,M));return{userId:x,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:P,mutations:$}}(this.serializer,this.userId,l),f=[];let p=new fe((_,T)=>Y(_.canonicalString(),T.canonicalString()));for(const _ of s){const T=xf(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(d)),f.push(i.put(T,OI))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),S.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return sn(e).get(t).next(r=>r?(G(r.userId===this.userId),Un(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return sn(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=r),i=Un(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return sn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).U("userMutationsIndex",t).next(r=>r.map(s=>Un(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Xi(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Tr(e).J({range:s},(o,c,l)=>{const[d,f,p]=o,_=bt(f);if(d===this.userId&&t.path.isEqual(_))return sn(e).get(p).next(T=>{if(!T)throw j();G(T.userId===this.userId),i.push(Un(this.serializer,T))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(Y);const s=[];return t.forEach(i=>{const o=Xi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Tr(e).J({range:c},(d,f,p)=>{const[_,T,x]=d,C=bt(T);_===this.userId&&i.path.isEqual(C)?r=r.add(x):p.done()});s.push(l)}),S.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Xi(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new fe(Y);return Tr(e).J({range:o},(l,d,f)=>{const[p,_,T]=l,x=bt(_);p===this.userId&&r.isPrefixOf(x)?x.length===s&&(c=c.add(T)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(sn(e).get(i).next(o=>{if(o===null)throw j();G(o.userId===this.userId),r.push(Un(this.serializer,o))}))}),S.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Sp(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Tr(e).J({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=bt(i[1]);s.push(l)}else c.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return Pp(e,this.userId,t)}Nn(e){return xp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Pp(n,e,t){const r=Xi(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Tr(n).J({range:i,H:!0},(c,l,d)=>{const[f,p,_]=c;f===e&&p===s&&(o=!0),d.done()}).next(()=>o)}function sn(n){return Oe(n,"mutations")}function Tr(n){return Oe(n,"documentMutations")}function xp(n){return Oe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new rr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new Ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>yr(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return yr(e).J((o,c)=>{const l=ws(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(i)).next(()=>s)}forEachTarget(e,t){return yr(e).J((r,s)=>{const i=ws(s);t(i)})}qn(e){return jd(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return jd(e).put("targetGlobalKey",t)}Kn(e,t){return yr(e).put(Tp(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=er(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return yr(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const d=ws(c);si(t,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=un(e);return t.forEach(o=>{const c=Ze(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(s)}removeMatchingKeys(e,t,r){const s=un(e);return S.forEach(t,i=>{const o=Ze(i.path);return S.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=un(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=un(e);let i=te();return s.J({range:r,H:!0},(o,c,l)=>{const d=bt(o[1]),f=new B(d);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=Ze(t.path),s=IDBKeyRange.bound([r],[Ef(r)],!1,!0);let i=0;return un(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,d)=>{o!==0&&(i++,d.done())}).next(()=>i>0)}ot(e,t){return yr(e).get(t).next(r=>r?ws(r):null)}}function yr(n){return Oe(n,"targets")}function jd(n){return Oe(n,"targetGlobal")}function un(n){return Oe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd([n,e],[t,r]){const s=Y(n,t);return s===0?Y(e,r):s}class eE{constructor(e){this.Un=e,this.buffer=new fe(zd),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Tn(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await En(t)}await this.Hn(3e5)})}}class nE{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(st.oe);const r=new eE(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve($d)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$d):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),vr()<=re.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function rE(n,e){return new nE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.db=e,this.garbageCollector=rE(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Ui(e,r)}removeReference(e,t,r){return Ui(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ui(e,t)}nr(e,t){return function(s,i){let o=!1;return xp(s).Y(c=>Pp(s,c,i).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(d=>{if(!d)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,H.min()),un(e).delete(function(p){return[0,Ze(p.path)]}(o))))});s.push(l)}}).next(()=>S.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ui(e,t)}tr(e,t){const r=un(e);let s,i=st.oe;return r.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:d})=>{o===0?(i!==st.oe&&t(new B(bt(s)),i),i=d,s=l):i=st.oe}).next(()=>{i!==st.oe&&t(new B(bt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ui(n,e){return un(n).put(function(r,s){return{targetId:0,path:Ze(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.changes=new bn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return On(e).put(r)}removeEntry(e,t,r){return On(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],To(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ae.newInvalidDocument(t);return On(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hs(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:Ae.newInvalidDocument(t)};return On(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hs(t))},(s,i)=>{r={document:this.ir(t,i),size:Ao(i)}}).next(()=>r)}getEntries(e,t){let r=ct();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=ct(),s=new me(B.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);r=r.insert(i,c),s=s.insert(i,Ao(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return S.resolve();let s=new fe(Kd);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(hs(s.first()),hs(s.last())),o=s.getIterator();let c=o.getNext();return On(e).J({index:"documentKeyIndex",range:i},(l,d,f)=>{const p=B.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&Kd(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,d),c=o.hasNext()?o.getNext():null),c?f.$(hs(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),To(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return On(e).U(IDBKeyRange.bound(c,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=ct();for(const p of d){const _=this.ir(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(oi(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=ct();const o=Gd(t,r),c=Gd(t,dt.max());return On(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,d,f)=>{const p=this.ir(B.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new oE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return qd(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return qd(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=zw(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(H.min())))return r}return Ae.newInvalidDocument(e)}}function kp(n){return new iE(n)}class oE extends Cp{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new bn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new fe((i,o)=>Y(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Cd(this.cr.serializer,o);s=s.add(i.path.popLast());const d=Ao(l);r+=d-c.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Cd(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function qd(n){return Oe(n,"remoteDocumentGlobal")}function On(n){return Oe(n,"remoteDocumentsV14")}function hs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Gd(n,e){const t=e.documentKey.path.toArray();return[n,To(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kd(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=Y(t[i],r[i]),s)return s;return s=Y(t.length,r.length),s||(s=Y(t[t.length-2],r[r.length-2]),s||Y(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Cs(r.mutation,s,it.empty(),Ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=te()){const s=At();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=vs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=At();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,te()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=ct();const o=xs(),c=function(){return xs()}();return t.forEach((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Qt)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Cs(f.mutation,d,f.mutation.getFieldMask(),Ee.now())):o.set(d.key,it.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>o.set(d,f)),t.forEach((d,f)=>{var p;return c.set(d,new aE(f,(p=o.get(d))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=xs();let s=new me((o,c)=>o-c),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||it.empty();f=c.applyToLocalView(d,f),r.set(l,f);const p=(s.get(c.batchId)||te()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,p=Yf();f.forEach(_=>{if(!i.has(_)){const T=ip(t.get(_),r.get(_));T!==null&&p.set(_,T),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(At());let c=-1,l=i;return o.next(d=>S.forEach(d,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,te())).next(f=>({batchId:c,changes:Xf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=vs();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,l=>{const d=function(p,_){return new ii(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,Ae.newInvalidDocument(f)))});let c=vs();return o.forEach((l,d)=>{const f=i.get(l);f!==void 0&&Cs(f.mutation,d,it.empty(),Ee.now()),oi(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:et(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:bp(s.bundledQuery),readTime:et(s.readTime)}}(t)),S.resolve()}}/**
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
 */class lE{constructor(){this.overlays=new me(B.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=At();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=At(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new me((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=At(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=At(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gc(t,r));let i=this.Ir.get(t);i===void 0&&(i=te(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class uE{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.Tr=new fe(Fe.Er),this.dr=new fe(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Fe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Fe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new le([])),r=new Fe(t,e),s=new Fe(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new le([])),r=new Fe(t,e),s=new Fe(t,e+1);let i=te();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Fe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new fe(Fe.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zc(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Fe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Fe(t,0),s=new Fe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(Y);return t.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new B(i),0);let c=new fe(Y);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},o),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,s=>{const i=new Fe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Fe(t,0),s=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.Mr=e,this.docs=function(){return new me(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ct();const o=t.path,c=new B(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Lc(bf(f),r)<=0||(s.has(f.key)||oi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){j()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new fE(this)}getSize(e){return S.resolve(this.size)}}class fE extends Cp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.persistence=e,this.Nr=new bn(t=>er(t),si),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jc,this.targetCount=0,this.kr=rr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new st(0),this.Kr=!1,this.Kr=!0,this.$r=new uE,this.referenceDelegate=e(this),this.Ur=new pE(this),this.indexManager=new Xw,this.remoteDocumentCache=function(s){return new hE(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ep(t),this.Gr=new cE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new dE(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new mE(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class mE extends Rf{constructor(e){super(),this.currentSequenceNumber=e}}class Ho{constructor(e){this.persistence=e,this.Jr=new Jc,this.Yr=null}static Zr(e){return new Ho(e)}get Xr(){if(this.Yr)return this.Yr;throw j()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const s=B.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.serializer=e}O(e,t,r,s){const i=new Mo("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",od,{unique:!0}),l.createObjectStore("documentMutations")}(e),Hd(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Hd(e)),o=o.next(()=>function(l){const d=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,d){return d.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",od,{unique:!0});const p=d.store("mutations"),_=f.map(T=>p.put(T));return S.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const d=l.createObjectStore("documentOverlays",{keyPath:WI});d.createIndex("collectionPathOverlayIndex",QI,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",JI,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const d=l.createObjectStore("remoteDocumentsV14",{keyPath:MI});d.createIndex("documentKeyIndex",FI),d.createIndex("collectionGroupIndex",BI)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:qI}).createIndex("sequenceNumberIndex",GI,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:KI}).createIndex("documentKeyIndex",HI,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Ao(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>S.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(c=>S.forEach(c,l=>{G(l.userId===i.userId);const d=Un(this.serializer,l);return Sp(e,i.userId,d).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,c)=>{const l=new le(o),d=function(p){return[0,Ze(p)]}(l);i.push(t.get(d).next(f=>f?S.resolve():(p=>t.put({targetId:0,path:Ze(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:zI});const r=t.store("collectionParents"),s=new Qc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:Ze(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new le(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],d)=>{const f=bt(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=ws(s),o=Tp(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new B(le.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):j()}(o).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(d))}).next(()=>S.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=kp(this.serializer),i=new Vp(Ho.Zr,this.serializer.ct);return r.U().next(o=>{const c=new Map;return o.forEach(l=>{var d;let f=(d=c.get(l.userId))!==null&&d!==void 0?d:te();Un(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),S.forEach(c,(l,d)=>{const f=new He(d),p=Go.lt(this.serializer,f),_=i.getIndexManager(f),T=Ko.lt(f,this.serializer,_,i.referenceDelegate);return new Dp(s,T,p,_).recalculateAndSaveOverlaysForDocumentKeys(new Za(t,st.oe),l).next()})})}}function Hd(n){n.createObjectStore("targetDocuments",{keyPath:$I}).createIndex("documentTargetsIndex",jI,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",UI,{unique:!0}),n.createObjectStore("targetGlobal")}const La="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Xc{constructor(e,t,r,s,i,o,c,l,d,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=c,this.ci=d,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!Xc.D())throw new O(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sE(this,s),this.Ai=t+"main",this.serializer=new Ep(l),this.Ri=new mn(this.Ai,this.hi,new gE(this.serializer)),this.$r=new Gw,this.Ur=new Zw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=kp(this.serializer),this.Gr=new qw,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(D.FAILED_PRECONDITION,La);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new st(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$i(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Tn(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return fs(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return $i(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Oe(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return S.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):fs(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new O(D.FAILED_PRECONDITION,La);return!1}}return!(!this.networkEnabled||!this.inForeground)||$i(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Za(e,st.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>$i(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ko.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Yw(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Go.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){V("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?ZI:l===16?YI:l===15?Mc:l===14?Df:l===13?kf:l===12?XI:l===11?Cf:void j()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new Za(c,this.Qr?this.Qr.next():st.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new O(D.FAILED_PRECONDITION,Af);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return fs(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(D.FAILED_PRECONDITION,La)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fs(e).put("owner",t)}static D(){return mn.D()}bi(e){const t=fs(e);return t.get("owner").next(r=>this.vi(r)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(xe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Rh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return xe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){xe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function fs(n){return Oe(n,"owner")}function $i(n){return Oe(n,"clientMetadata")}function Np(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=te(),s=te();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yc(e,t.fromCache,r,s)}}/**
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
 */class _E{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Rh()?8:Sf(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new _E;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(vr()<=re.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(vr()<=re.DEBUG&&V("QueryEngine","Query:",Ir(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(vr()<=re.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):S.resolve())}Yi(e,t){if(vd(t))return S.resolve(null);let r=ut(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=oc(t,null,"F"),r=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,o,l.readTime)?this.Yi(e,oc(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,s){return vd(t)||s.isEqual(H.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?S.resolve(null):(vr()<=re.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ir(t)),this.rs(e,o,t,Tf(s,-1)).next(c=>c))})}ts(e,t){let r=new fe(Qf(e));return t.forEach((s,i)=>{oi(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return vr()<=re.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ir(t)),this.Ji.getDocumentsMatchingQuery(e,t,dt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new me(Y),this._s=new bn(i=>er(i),si),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Op(n,e,t,r){return new yE(n,e,t,r)}async function Mp(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=te();for(const d of s){o.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:c}))})})}function vE(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const p=d.batch,_=p.keys();let T=S.resolve();return _.forEach(x=>{T=T.next(()=>f.getEntry(l,x)).next(C=>{const P=d.docVersions.get(x);G(P!==null),C.version.compareTo(P)<0&&(p.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=te();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Fp(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function IE(n,e){const t=z(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let T=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Ce.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(p,T),function(C,P,$){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,T,f)&&c.push(t.Ur.updateTargetData(i,T))});let l=ct(),d=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(wE(i,o,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.os=s,i))}function wE(n,e,t){let r=te(),s=te();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=ct();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function EE(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ro(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new Ut(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Fr(n,e,t){const r=z(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Tn(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function pc(n,e,t){const r=z(n);let s=H.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,f){const p=z(l),_=p._s.get(f);return _!==void 0?S.resolve(p.os.get(_)):p.Ur.getTargetData(d,f)}(r,o,ut(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:te())).next(c=>($p(r,Wf(e),c),{documents:c,Ts:i})))}function Bp(n,e){const t=z(n),r=z(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function Up(n,e){const t=z(n),r=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Tf(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>($p(t,e,s),s))}function $p(n,e,t){let r=n.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Wd(n,e){return`firestore_clients_${n}_${e}`}function Qd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Oa(n,e){return`firestore_targets_${n}_${e}`}class So{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new O(s.error.code,s.error.message))),o?new So(e,t,s.state,i):(xe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ks{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new O(r.error.code,r.error.message))),i?new ks(e,r.state,s):(xe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Po{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=$c();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Pf(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Po(e,i):(xe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Zc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Zc(t.clientId,t.onlineState):(xe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class mc{constructor(){this.activeTargetIds=$c()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ma{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new me(Y),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Wd(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new mc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Wd(this.persistenceKey,r));if(s){const i=Po.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Oa(this.persistenceKey,e));if(s){const i=ks.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Oa(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void xe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=st.oe;if(i!=null)try{const c=JSON.parse(i);G(typeof c=="number"),o=c}catch(c){xe("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==st.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new So(this.currentUser,e,t,r),i=Qd(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Qd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Oa(this.persistenceKey,e),i=new ks(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Po.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return So.Rs(new He(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return ks.Rs(s,t)}Ls(e){return Zc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=$c();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class jp{constructor(){this.so=new mc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new mc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ji=null;function Fa(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class RE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=Fa(),l=this.xo(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(t,l,d,s).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Fs("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=bE[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Fa();return new Promise((o,c)=>{const l=new gf;l.setWithCredentials(!0),l.listenOnce(_f.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qi.NO_ERROR:const f=l.getResponseJson();V(Ke,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Qi.TIMEOUT:V(Ke,`RPC '${e}' ${i} timed out`),c(new O(D.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const p=l.getStatus();if(V(Ke,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const x=function(P){const $=P.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf($)>=0?$:D.UNKNOWN}(T.status);c(new O(x,T.message))}else c(new O(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new O(D.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{V(Ke,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);V(Ke,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=Fa(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=If(),c=vf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");V(Ke,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let _=!1,T=!1;const x=new AE({Io:P=>{T?V(Ke,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(_||(V(Ke,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),V(Ke,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},To:()=>p.close()}),C=(P,$,M)=>{P.listen($,N=>{try{M(N)}catch(U){setTimeout(()=>{throw U},0)}})};return C(p,ys.EventType.OPEN,()=>{T||(V(Ke,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),C(p,ys.EventType.CLOSE,()=>{T||(T=!0,V(Ke,`RPC '${e}' stream ${s} transport closed`),x.So())}),C(p,ys.EventType.ERROR,P=>{T||(T=!0,Fs(Ke,`RPC '${e}' stream ${s} transport errored:`,P),x.So(new O(D.UNAVAILABLE,"The operation could not be completed")))}),C(p,ys.EventType.MESSAGE,P=>{var $;if(!T){const M=P.data[0];G(!!M);const N=M,U=N.error||(($=N[0])===null||$===void 0?void 0:$.error);if(U){V(Ke,`RPC '${e}' stream ${s} received error:`,U);const K=U.status;let W=function(v){const E=Ve[v];if(E!==void 0)return cp(E)}(K),w=U.message;W===void 0&&(W=D.INTERNAL,w="Unknown error status: "+K+" with message "+U.message),T=!0,x.So(new O(W,w)),p.close()}else V(Ke,`RPC '${e}' stream ${s} received:`,M),x.bo(M)}}),C(c,yf.STAT_EVENT,P=>{P.stat===Xa.PROXY?V(Ke,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Xa.NOPROXY&&V(Ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zp(){return typeof window<"u"?window:null}function no(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n){return new Vw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(xe(t.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new O(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SE extends Gp{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Ow(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?et(o.readTime):H.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=lc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=vo(l)?{documents:gp(i,l)}:{query:_p(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=dp(i,o.resumeToken);const d=ac(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=Mr(i,o.snapshotVersion.toTimestamp());const d=ac(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Fw(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=lc(this.serializer),t.removeTarget=e,this.a_(t)}}class PE extends Gp{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Mw(e.writeResults,e.commitTime),r=et(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=lc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Eo(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,cc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,cc(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(D.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class kE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{cr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=z(l);d.L_.add(4),await li(d),d.q_.set("Unknown"),d.L_.delete(4),await Qo(d)}(this))})}),this.q_=new CE(r,s)}}async function Qo(n){if(cr(n))for(const e of n.B_)await e(!0)}async function li(n){for(const e of n.B_)await e(!1)}function Jo(n,e){const t=z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),nl(t)?tl(t):Hr(t).r_()&&el(t,e))}function Br(n,e){const t=z(n),r=Hr(t);t.N_.delete(e),r.r_()&&Kp(t,e),t.N_.size===0&&(r.r_()?r.o_():cr(t)&&t.q_.set("Unknown"))}function el(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hr(n).A_(e)}function Kp(n,e){n.Q_.xe(e),Hr(n).R_(e)}function tl(n){n.Q_=new xw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Hr(n).start(),n.q_.v_()}function nl(n){return cr(n)&&!Hr(n).n_()&&n.N_.size>0}function cr(n){return z(n).L_.size===0}function Hp(n){n.Q_=void 0}async function DE(n){n.q_.set("Online")}async function VE(n){n.N_.forEach((e,t)=>{el(n,e)})}async function NE(n,e){Hp(n),nl(n)?(n.q_.M_(e),tl(n)):n.q_.set("Unknown")}async function LE(n,e,t){if(n.q_.set("Online"),e instanceof up&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xo(n,r)}else if(e instanceof to?n.Q_.Ke(e):e instanceof lp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(H.min()))try{const r=await Fp(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,d)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Ce.EMPTY_BYTE_STRING,f.snapshotVersion)),Kp(i,l);const p=new Ut(f.target,l,d,f.sequenceNumber);el(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await xo(n,r)}}async function xo(n,e,t){if(!Tn(e))throw e;n.L_.add(1),await li(n),n.q_.set("Offline"),t||(t=()=>Fp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qo(n)})}function Wp(n,e){return e().catch(t=>xo(n,t,e))}async function Kr(n){const e=z(n),t=In(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OE(e);)try{const s=await EE(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,ME(e,s)}catch(s){await xo(e,s)}Qp(e)&&Jp(e)}function OE(n){return cr(n)&&n.O_.length<10}function ME(n,e){n.O_.push(e);const t=In(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Qp(n){return cr(n)&&!In(n).n_()&&n.O_.length>0}function Jp(n){In(n).start()}async function FE(n){In(n).p_()}async function BE(n){const e=In(n);for(const t of n.O_)e.m_(t.mutations)}async function UE(n,e,t){const r=n.O_.shift(),s=qc.from(r,e,t);await Wp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Kr(n)}async function $E(n,e){e&&In(n).V_&&await async function(r,s){if(function(o){return Rw(o)&&o!==D.ABORTED}(s.code)){const i=r.O_.shift();In(r).s_(),await Wp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Kr(r)}}(n,e),Qp(n)&&Jp(n)}async function Xd(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=cr(t);t.L_.add(3),await li(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qo(t)}async function gc(n,e){const t=z(n);e?(t.L_.delete(2),await Qo(t)):e||(t.L_.add(2),await li(t),t.q_.set("Unknown"))}function Hr(n){return n.K_||(n.K_=function(t,r,s){const i=z(t);return i.w_(),new SE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:DE.bind(null,n),Ro:VE.bind(null,n),mo:NE.bind(null,n),d_:LE.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),nl(n)?tl(n):n.q_.set("Unknown")):(await n.K_.stop(),Hp(n))})),n.K_}function In(n){return n.U_||(n.U_=function(t,r,s){const i=z(t);return i.w_(),new PE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:FE.bind(null,n),mo:$E.bind(null,n),f_:BE.bind(null,n),g_:UE.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Kr(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new rl(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sl(n,e){if(xe("AsyncQueue",`${e}: ${n}`),Tn(n))return new O(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=vs(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Pr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Yd{constructor(){this.W_=new me(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):j():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ur{constructor(e,t,r,s,i,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Ur(e,t,Pr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class zE{constructor(){this.queries=Zd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=Zd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new O(D.ABORTED,"Firestore shutting down"))}}function Zd(){return new bn(n=>Hf(n),$o)}async function Xp(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new jE,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=sl(o,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&il(t)}async function Yp(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qE(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&il(t)}function GE(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function il(n){n.Y_.forEach(e=>{e.next()})}var _c,eh;(eh=_c||(_c={})).ea="default",eh.Cache="cache";class Zp{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.key=e}}class tm{constructor(e){this.key=e}}class KE{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=Qf(e),this.Ra=new Pr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Yd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),T=oi(this.query,p)?p:null,x=!!_&&this.mutatedKeys.has(_.key),C=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;_&&T?_.data.isEqual(T.data)?x!==C&&(r.track({type:3,doc:T}),P=!0):this.ga(_,T)||(r.track({type:2,doc:T}),P=!0,(l&&this.Aa(T,l)>0||d&&this.Aa(T,d)<0)&&(c=!0)):!_&&T?(r.track({type:0,doc:T}),P=!0):_&&!T&&(r.track({type:1,doc:_}),P=!0,(l||d)&&(c=!0)),P&&(T?(o=o.add(T),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(T,x){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return C(T)-C(x)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,o.length!==0||d?{snapshot:new Ur(this.query,e.Ra,i,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new tm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new em(r))}),t}ba(e){this.Ta=e.Ts,this.da=te();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ur.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class HE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class WE{constructor(e){this.key=e,this.va=!1}}class QE{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new bn(c=>Hf(c),$o),this.Ma=new Map,this.xa=new Set,this.Oa=new me(B.comparator),this.Na=new Map,this.La=new Jc,this.Ba={},this.ka=new Map,this.qa=rr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function JE(n,e,t=!0){const r=Xo(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await nm(r,e,t,!0),s}async function XE(n,e){const t=Xo(n);await nm(t,e,!0,!1)}async function nm(n,e,t,r){const s=await Ro(n.localStore,ut(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await ol(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Jo(n.remoteStore,s),c}async function ol(n,e,t,r,s){n.Ka=(p,_,T)=>async function(C,P,$,M){let N=P.view.ma($);N.ns&&(N=await pc(C.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,N)));const U=M&&M.targetChanges.get(P.targetId),K=M&&M.targetMismatches.get(P.targetId)!=null,W=P.view.applyChanges(N,C.isPrimaryClient,U,K);return yc(C,P.targetId,W.wa),W.snapshot}(n,p,_,T);const i=await pc(n.localStore,e,!0),o=new KE(e,i.Ts),c=o.ma(i.documents),l=ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);yc(n,t,d.wa);const f=new HE(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function YE(n,e,t){const r=z(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!$o(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fr(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Br(r.remoteStore,s.targetId),$r(r,s.targetId)}).catch(En)):($r(r,s.targetId),await Fr(r.localStore,s.targetId,!0))}async function ZE(n,e){const t=z(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Br(t.remoteStore,r.targetId))}async function eT(n,e,t){const r=ul(n);try{const s=await function(o,c){const l=z(o),d=Ee.now(),f=c.reduce((T,x)=>T.add(x.key),te());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let x=ct(),C=te();return l.cs.getEntries(T,f).next(P=>{x=P,x.forEach(($,M)=>{M.isValidDocument()||(C=C.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,x)).next(P=>{p=P;const $=[];for(const M of c){const N=bw(M,p.get(M.key).overlayedDocument);N!=null&&$.push(new Qt(M.key,N,Mf(N.value.mapValue),Qe.exists(!0)))}return l.mutationQueue.addMutationBatch(T,d,$,c)}).next(P=>{_=P;const $=P.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(T,P.batchId,$)})}).then(()=>({batchId:_.batchId,changes:Xf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let d=o.Ba[o.currentUser.toKey()];d||(d=new me(Y)),d=d.insert(c,l),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,t),await An(r,s.changes),await Kr(r.remoteStore)}catch(s){const i=sl(s,"Failed to persist write");t.reject(i)}}async function rm(n,e){const t=z(n);try{const r=await IE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await An(t,r,e)}catch(r){await En(r)}}function th(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let d=!1;l.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(c)&&(d=!0)}),d&&il(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tT(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new me(B.comparator);o=o.insert(i,Ae.newNoDocument(i,H.min()));const c=te().add(i),l=new ai(H.min(),new Map,new me(Y),o,c);await rm(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),ll(r)}else await Fr(r.localStore,e,!1).then(()=>$r(r,e,t)).catch(En)}async function nT(n,e){const t=z(n),r=e.batch.batchId;try{const s=await vE(t.localStore,e);cl(t,r,null),al(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await An(t,s)}catch(s){await En(s)}}async function rT(n,e,t){const r=z(n);try{const s=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(p=>(G(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);cl(r,e,t),al(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await An(r,s)}catch(s){await En(s)}}function al(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function cl(n,e,t){const r=z(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function $r(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||sm(n,r)})}function sm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Br(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ll(n))}function yc(n,e,t){for(const r of t)r instanceof em?(n.La.addReference(r.key,e),sT(n,r)):r instanceof tm?(V("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||sm(n,r.key)):j()}function sT(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(V("SyncEngine","New document in limbo: "+t),n.xa.add(r),ll(n))}function ll(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(le.fromString(e)),r=n.qa.next();n.Na.set(r,new WE(t)),n.Oa=n.Oa.insert(t,r),Jo(n.remoteStore,new Ut(ut(Uo(t.path)),r,"TargetPurposeLimboResolution",st.oe))}}async function An(n,e,t){const r=z(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Yc.Wi(l.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,d){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(d,_=>S.forEach(_.$i,T=>f.persistence.referenceDelegate.addReference(p,_.targetId,T)).next(()=>S.forEach(_.Ui,T=>f.persistence.referenceDelegate.removeReference(p,_.targetId,T)))))}catch(p){if(!Tn(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const _=p.targetId;if(!p.fromCache){const T=f.os.get(_),x=T.snapshotVersion,C=T.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(_,C)}}}(r.localStore,i))}async function iT(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Mp(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new O(D.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await An(t,r.hs)}}function oT(n,e){const t=z(n),r=t.Na.get(e);if(r&&r.va)return te().add(r.key);{let s=te();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function aT(n,e){const t=z(n),r=await pc(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&yc(t,e.targetId,s.wa),s}async function cT(n,e){const t=z(n);return Up(t.localStore,e).then(r=>An(t,r))}async function lT(n,e,t,r){const s=z(n),i=await function(c,l){const d=z(c),f=z(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(_=>_?d.localDocuments.getDocuments(p,_):S.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Kr(s.remoteStore):t==="acknowledged"||t==="rejected"?(cl(s,e,r||null),al(s,e),function(c,l){z(z(c).mutationQueue).On(l)}(s.localStore,e)):j(),await An(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function uT(n,e){const t=z(n);if(Xo(t),ul(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await nh(t,r.toArray());t.Qa=!0,await gc(t.remoteStore,!0);for(const i of s)Jo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>($r(t,o),Fr(t.localStore,o,!0))),Br(t.remoteStore,o)}),await s,await nh(t,r),function(o){const c=z(o);c.Na.forEach((l,d)=>{Br(c.remoteStore,d)}),c.La.pr(),c.Na=new Map,c.Oa=new me(B.comparator)}(t),t.Qa=!1,await gc(t.remoteStore,!1)}}async function nh(n,e,t){const r=z(n),s=[],i=[];for(const o of e){let c;const l=r.Ma.get(o);if(l&&l.length!==0){c=await Ro(r.localStore,ut(l[0]));for(const d of l){const f=r.Fa.get(d),p=await aT(r,f);p.snapshot&&i.push(p.snapshot)}}else{const d=await Bp(r.localStore,o);c=await Ro(r.localStore,d),await ol(r,im(d),o,!1,c.resumeToken)}s.push(c)}return r.Ca.d_(i),s}function im(n){return Gf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function dT(n){return function(t){return z(z(t).persistence).Qi()}(z(n).localStore)}async function hT(n,e,t,r){const s=z(n);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Up(s.localStore,Wf(i[0])),c=ai.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ce.EMPTY_BYTE_STRING);await An(s,o,c);break}case"rejected":await Fr(s.localStore,e,!0),$r(s,e,r);break;default:j()}}async function fT(n,e,t){const r=Xo(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await Bp(r.localStore,s),o=await Ro(r.localStore,i);await ol(r,im(i),o.targetId,!1,o.resumeToken),Jo(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Fr(r.localStore,s,!1).then(()=>{Br(r.remoteStore,s),$r(r,s)}).catch(En)}}function Xo(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tT.bind(null,e),e.Ca.d_=qE.bind(null,e.eventManager),e.Ca.$a=GE.bind(null,e.eventManager),e}function ul(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rT.bind(null,e),e}class Hs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Op(this.persistence,new Lp,e.initialUser,this.serializer)}Ga(e){return new Vp(Ho.Zr,this.serializer)}Wa(e){return new jp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hs.provider={build:()=>new Hs};class om extends Hs{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await ul(this.Ja.syncEngine),await Kr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Op(this.persistence,new Lp,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new tE(r,e.asyncQueue,t)}Ha(e,t){const r=new NI(t,this.persistence);return new VI(e.asyncQueue,r)}Ga(e){const t=Np(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new Xc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,zp(),no(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new jp}}class pT extends om{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Ma&&(this.sharedClientState.syncEngine={no:lT.bind(null,t),ro:hT.bind(null,t),io:fT.bind(null,t),Qi:dT.bind(null,t),eo:cT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await uT(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=zp();if(!Ma.D(t))throw new O(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Np(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ma(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ws{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>th(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iT.bind(null,this.syncEngine),await gc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zE}()}createDatastore(e){const t=Wo(e.databaseInfo.databaseId),r=function(i){return new RE(i)}(e.databaseInfo);return function(i,o,c,l){return new xE(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new kE(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>th(this.syncEngine,t,0),function(){return Jd.D()?new Jd:new TE}())}createSyncEngine(e,t){return function(s,i,o,c,l,d,f){const p=new QE(s,i,o,c,l,d);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await li(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ws.provider={build:()=>new Ws};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class am{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=sl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ba(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function rh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gT(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Xd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Xd(e.remoteStore,s)),n._onlineComponents=e}async function gT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ba(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Fs("Error using user provided cache. Falling back to memory cache: "+t),await Ba(n,new Hs)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Ba(n,new Hs);return n._offlineComponents}async function cm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await rh(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await rh(n,new Ws))),n._onlineComponents}function _T(n){return cm(n).then(e=>e.syncEngine)}async function lm(n){const e=await cm(n),t=e.eventManager;return t.onListen=JE.bind(null,e.syncEngine),t.onUnlisten=YE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=XE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZE.bind(null,e.syncEngine),t}function yT(n,e,t={}){const r=new xt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,d){const f=new am({next:_=>{f.Za(),o.enqueueAndForget(()=>Yp(i,p));const T=_.docs.has(c);!T&&_.fromCache?d.reject(new O(D.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&_.fromCache&&l&&l.source==="server"?d.reject(new O(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),p=new Zp(Uo(c.path),f,{includeMetadataChanges:!0,_a:!0});return Xp(i,p)}(await lm(n),n.asyncQueue,e,t,r)),r.promise}function vT(n,e,t={}){const r=new xt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,d){const f=new am({next:_=>{f.Za(),o.enqueueAndForget(()=>Yp(i,p)),_.fromCache&&l.source==="server"?d.reject(new O(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),p=new Zp(c,f,{includeMetadataChanges:!0,_a:!0});return Xp(i,p)}(await lm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function um(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n,e,t){if(!t)throw new O(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function IT(n,e,t,r){if(e===!0&&r===!0)throw new O(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ih(n){if(!B.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function oh(n){if(B.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j()}function Dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yo(n);throw new O(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=um((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dl{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TI;switch(r.type){case"firstParty":return new RI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=sh.get(t);r&&(V("ComponentProvider","Removing Datastore"),sh.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class tt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class gn extends Wr{constructor(e,t,r){super(e,t,Uo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new B(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function gt(n,e,...t){if(n=Re(n),dm("collection","path",e),n instanceof dl){const r=le.fromString(e,...t);return oh(r),new gn(n,null,r)}{if(!(n instanceof tt||n instanceof gn))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return oh(r),new gn(n.firestore,null,r)}}function de(n,e,...t){if(n=Re(n),arguments.length===1&&(e=wf.newId()),dm("doc","path",e),n instanceof dl){const r=le.fromString(e,...t);return ih(r),new tt(n,null,new B(r))}{if(!(n instanceof tt||n instanceof gn))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return ih(r),new tt(n.firestore,n instanceof gn?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qp(this,"async_queue_retry"),this.Vu=()=>{const r=no();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=no();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=no();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new xt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Tn(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw xe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=rl.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&j()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class lr extends dl{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ch,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ch(e),this._firestoreClient=void 0,await e}}}function wT(n,e,t){t||(t="(default)");const r=Vo(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Ns(i,e))return s;throw new O(D.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(D.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function hl(n){if(n._terminated)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ET(n),n._firestoreClient}function ET(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,f){return new tw(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,um(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new mT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class pl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=/^__.*__$/;class bT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gr(e,this.data,t,this.fieldTransforms)}}class hm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function fm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class ml{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Co(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fm(this.Cu)&&TT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class AT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wo(e)}Qu(e,t,r,s=!1){return new ml({Cu:e,methodName:t,qu:r,path:we.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ta(n){const e=n._freezeSettings(),t=Wo(n._databaseId);return new AT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pm(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);_l("Data must be an object, but it was:",o,r);const c=mm(r,o);let l,d;if(i.merge)l=new it(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=vc(e,p,t);if(!o.contains(_))throw new O(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);_m(f,_)||f.push(_)}l=new it(f),d=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=o.fieldTransforms;return new bT(new We(c),l,d)}class na extends ea{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof na}}class gl extends ea{_toFieldTransform(e){return new sp(e.path,new Nr)}isEqual(e){return e instanceof gl}}function RT(n,e,t,r){const s=n.Qu(1,e,t);_l("Data must be an object, but it was:",s,r);const i=[],o=We.empty();ar(r,(l,d)=>{const f=yl(e,l,t);d=Re(d);const p=s.Nu(f);if(d instanceof na)i.push(f);else{const _=ui(d,p);_!=null&&(i.push(f),o.set(f,_))}});const c=new it(i);return new hm(o,c,s.fieldTransforms)}function ST(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[vc(e,r,t)],l=[s];if(i.length%2!=0)throw new O(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(vc(e,i[_])),l.push(i[_+1]);const d=[],f=We.empty();for(let _=c.length-1;_>=0;--_)if(!_m(d,c[_])){const T=c[_];let x=l[_];x=Re(x);const C=o.Nu(T);if(x instanceof na)d.push(T);else{const P=ui(x,C);P!=null&&(d.push(T),f.set(T,P))}}const p=new it(d);return new hm(f,p,o.fieldTransforms)}function PT(n,e,t,r=!1){return ui(t,n.Qu(r?4:3,e))}function ui(n,e){if(gm(n=Re(n)))return _l("Unsupported field value:",e,n),mm(n,e);if(n instanceof ea)return function(r,s){if(!fm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ui(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ee.fromDate(r);return{timestampValue:Mr(s.serializer,i)}}if(r instanceof Ee){const i=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mr(s.serializer,i)}}if(r instanceof fl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jr)return{bytesValue:dp(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return jc(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Yo(r)}`)}(n,e)}function mm(n,e){const t={};return Vf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(n,(r,s)=>{const i=ui(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function gm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof fl||n instanceof jr||n instanceof tt||n instanceof ea||n instanceof pl)}function _l(n,e,t){if(!gm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Yo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function vc(n,e,t){if((e=Re(e))instanceof Zo)return e._internalPath;if(typeof e=="string")return yl(n,e);throw Co("Field path arguments must be of type string or ",n,!1,void 0,t)}const xT=new RegExp("[~\\*/\\[\\]]");function yl(n,e,t){if(e.search(xT)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zo(...e.split("."))._internalPath}catch{throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Co(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new O(D.INVALID_ARGUMENT,c+n+l)}function _m(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CT extends ym{data(){return super.data()}}function vl(n,e){return typeof e=="string"?yl(n,e):e instanceof Zo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Il{}class DT extends Il{}function lh(n,e,...t){let r=[];e instanceof Il&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof wl).length,c=i.filter(l=>l instanceof ra).length;if(o>1||o>0&&c>0)throw new O(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ra extends DT{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ra(e,t,r)}_apply(e){const t=this._parse(e);return vm(e._query,t),new Wr(e.firestore,e.converter,ic(e._query,t))}_parse(e){const t=ta(e.firestore);return function(i,o,c,l,d,f,p){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){dh(p,f);const T=[];for(const x of p)T.push(uh(l,i,x));_={arrayValue:{values:T}}}else _=uh(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||dh(p,f),_=PT(c,o,p,f==="in"||f==="not-in");return se.create(d,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ua(n,e,t){const r=e,s=vl("where",n);return ra._create(s,r,t)}class wl extends Il{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)vm(o,l),o=ic(o,l)}(e._query,t),new Wr(e.firestore,e.converter,ic(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function uh(n,e,t){if(typeof(t=Re(t))=="string"){if(t==="")throw new O(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kf(e)&&t.indexOf("/")!==-1)throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!B.isDocumentKey(r))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qs(n,new B(r))}if(t instanceof tt)return qs(n,t._key);throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yo(t)}.`)}function dh(n,e){if(!Array.isArray(n)||n.length===0)throw new O(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vm(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class VT{convertValue(e,t="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ar(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ve(o.doubleValue));return new pl(i)}convertGeoPoint(e){return new fl(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const t=Gt(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);G(wp(r));const s=new Yn(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||xe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wm extends ym{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ro extends wm{data(e={}){return super.data(e)}}class NT{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Es(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ro(this._firestore,this._userDataWriter,r.key,r,new Es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:LT(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function LT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){n=Dt(n,tt);const e=Dt(n.firestore,lr);return yT(hl(e),n._key).then(t=>MT(e,n,t))}class Em extends VT{constructor(e){super(),this.firestore=e}convertBytes(e){return new jr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,t)}}function Ct(n){n=Dt(n,Wr);const e=Dt(n.firestore,lr),t=hl(e),r=new Em(e);return kT(n._query),vT(t,n._query).then(s=>new NT(e,r,n,s))}function Gn(n,e,t){n=Dt(n,tt);const r=Dt(n.firestore,lr),s=Im(n.converter,e);return sa(r,[pm(ta(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Qe.none())])}function Jt(n,e,t,...r){n=Dt(n,tt);const s=Dt(n.firestore,lr),i=ta(s);let o;return o=typeof(e=Re(e))=="string"||e instanceof Zo?ST(i,"updateDoc",n._key,e,t,r):RT(i,"updateDoc",n._key,e),sa(s,[o.toMutation(n._key,Qe.exists(!0))])}function Kt(n){return sa(Dt(n.firestore,lr),[new qo(n._key,Qe.none())])}function OT(n,e){const t=Dt(n.firestore,lr),r=de(n),s=Im(n.converter,e);return sa(t,[pm(ta(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function sa(n,e){return function(r,s){const i=new xt;return r.asyncQueue.enqueueAndForget(async()=>eT(await _T(r),s,i)),i.promise}(hl(n),e)}function MT(n,e,t){const r=t.docs.get(e._key),s=new Em(n);return new wm(n,s,e._key,r,new Es(t.hasPendingWrites,t.fromCache),e.converter)}class FT{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=jT(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function BT(n){return new FT(n)}class UT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ws.provider,this._offlineComponentProvider={build:t=>new om(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class $T{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ws.provider,this._offlineComponentProvider={build:t=>new pT(t,e==null?void 0:e.cacheSizeBytes)}}}function jT(n){return new UT(void 0)}function zT(){return new $T}function xr(){return new gl("serverTimestamp")}(function(e,t=!0){(function(s){qr=s})(or),Wn(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new lr(new bI(r.getProvider("auth-internal")),new PI(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yn(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Rt(rd,"4.7.3",e),Rt(rd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firebasestorage.googleapis.com",bm="storageBucket",qT=2*60*1e3,GT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Vt{constructor(e,t,r=0){super($a(e),`Firebase Storage: ${t} (${$a(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function $a(n){return"storage/"+n}function El(){const n="An unknown error occurred, please check the error payload for server response.";return new Pe(Se.UNKNOWN,n)}function KT(n){return new Pe(Se.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function HT(n){return new Pe(Se.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Se.UNAUTHENTICATED,n)}function QT(){return new Pe(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function JT(n){return new Pe(Se.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function XT(){return new Pe(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YT(){return new Pe(Se.CANCELED,"User canceled the upload/download.")}function ZT(n){return new Pe(Se.INVALID_URL,"Invalid URL '"+n+"'.")}function eb(n){return new Pe(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tb(){return new Pe(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bm+"' property when initializing the app?")}function nb(){return new Pe(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rb(){return new Pe(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sb(n){return new Pe(Se.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ic(n){return new Pe(Se.INVALID_ARGUMENT,n)}function Am(){return new Pe(Se.APP_DELETED,"The Firebase app was deleted.")}function ib(n){return new Pe(Se.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ds(n,e){return new Pe(Se.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ps(n){throw new Pe(Se.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=lt.makeFromUrl(e,t)}catch{return new lt(e,"")}if(r.path==="")return r;throw eb(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(U){U.path_=decodeURIComponent(U.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${s}/o${_}`,"i"),x={bucket:1,path:3},C=t===Tm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",$=new RegExp(`^https?://${C}/${s}/${P}`,"i"),N=[{regex:c,indices:l,postModify:i},{regex:T,indices:x,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let U=0;U<N.length;U++){const K=N[U],W=K.regex.exec(e);if(W){const w=W[K.indices.bucket];let y=W[K.indices.path];y||(y=""),r=new lt(w,y),K.postModify(r);break}}if(r==null)throw ZT(e);return r}}class ob{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let d=!1;function f(...P){d||(d=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,n(T,l())},P)}function _(){i&&clearTimeout(i)}function T(P,...$){if(d){_();return}if(P){_(),f.call(null,P,...$);return}if(l()||o){_(),f.call(null,P,...$);return}r<64&&(r*=2);let N;c===1?(c=2,N=0):N=(r+Math.random())*1e3,p(N)}let x=!1;function C(P){x||(x=!0,_(),!d&&(s!==null?(P||(c=2),clearTimeout(s),p(0)):P||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,C(!0)},t),C}function cb(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n){return n!==void 0}function ub(n){return typeof n=="object"&&!Array.isArray(n)}function Tl(n){return typeof n=="string"||n instanceof String}function hh(n){return bl()&&n instanceof Blob}function bl(){return typeof Blob<"u"}function fh(n,e,t,r){if(r<e)throw Ic(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ic(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Rm(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Kn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Kn||(Kn={}));/**
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
 */function db(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,t,r,s,i,o,c,l,d,f,p,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,x)=>{this.resolve_=T,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Kn.NO_ERROR,l=i.getStatus();if(!c||db(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Kn.ABORT;r(!1,new zi(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new zi(d,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());lb(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=El();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Am():YT();o(l)}else{const l=XT();o(l)}};this.canceled_?t(!1,new zi(!1,null,!0)):this.backoffId_=ab(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function fb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function gb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function _b(n,e,t,r,s,i,o=!0){const c=Rm(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return mb(d,e),fb(d,t),pb(d,i),gb(d,r),new hb(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vb(...n){const e=yb();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(bl())return new Blob(n);throw new Pe(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ib(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function wb(n){if(typeof atob>"u")throw sb("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ja{constructor(e,t){this.data=e,this.contentType=t||null}}function Sm(n,e){switch(n){case mt.RAW:return new ja(Pm(e));case mt.BASE64:case mt.BASE64URL:return new ja(xm(n,e));case mt.DATA_URL:return new ja(Tb(e),bb(e))}throw El()}function Pm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Eb(n){let e;try{e=decodeURIComponent(n)}catch{throw Ds(mt.DATA_URL,"Malformed data URL.")}return Pm(e)}function xm(n,e){switch(n){case mt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ds(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case mt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ds(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=wb(e)}catch(s){throw s.message.includes("polyfill")?s:Ds(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Cm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ds(mt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Ab(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Tb(n){const e=new Cm(n);return e.base64?xm(mt.BASE64,e.rest):Eb(e.rest)}function bb(n){return new Cm(n).contentType}function Ab(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){let r=0,s="";hh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(hh(this.data_)){const r=this.data_,s=Ib(r,e,t);return s===null?null:new dn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new dn(r,!0)}}static getBlob(...e){if(bl()){const t=e.map(r=>r instanceof dn?r.data_:r);return new dn(vb.apply(null,t))}else{const t=e.map(o=>Tl(o)?Sm(mt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new dn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n){let e;try{e=JSON.parse(n)}catch{return null}return ub(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Sb(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Dm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n,e){return e}class Ye{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Pb}}let qi=null;function xb(n){return!Tl(n)||n.length<2?n:Dm(n)}function Vm(){if(qi)return qi;const n=[];n.push(new Ye("bucket")),n.push(new Ye("generation")),n.push(new Ye("metageneration")),n.push(new Ye("name","fullPath",!0));function e(i,o){return xb(o)}const t=new Ye("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Ye("size");return s.xform=r,n.push(s),n.push(new Ye("timeCreated")),n.push(new Ye("updated")),n.push(new Ye("md5Hash",null,!0)),n.push(new Ye("cacheControl",null,!0)),n.push(new Ye("contentDisposition",null,!0)),n.push(new Ye("contentEncoding",null,!0)),n.push(new Ye("contentLanguage",null,!0)),n.push(new Ye("contentType",null,!0)),n.push(new Ye("metadata","customMetadata",!0)),qi=n,qi}function Cb(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new lt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function kb(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return Cb(r,n),r}function Nm(n,e,t){const r=km(e);return r===null?null:kb(n,r,t)}function Db(n,e,t,r){const s=km(e);if(s===null||!Tl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const f=n.bucket,p=n.fullPath,_="/b/"+o(f)+"/o/"+o(p),T=Al(_,t,r),x=Rm({alt:"media",token:d});return T+x})[0]}function Vb(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Lm{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n){if(!n)throw El()}function Nb(n,e){function t(r,s){const i=Nm(n,s,e);return Om(i!==null),i}return t}function Lb(n,e){function t(r,s){const i=Nm(n,s,e);return Om(i!==null),Db(i,s,n.host,n._protocol)}return t}function Mm(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=QT():s=WT():t.getStatus()===402?s=HT(n.bucket):t.getStatus()===403?s=JT(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ob(n){const e=Mm(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=KT(n.path)),i.serverResponse=s.serverResponse,i}return t}function Mb(n,e,t){const r=e.fullServerUrl(),s=Al(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new Lm(s,i,Lb(n,t),o);return c.errorHandler=Ob(e),c}function Fb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Bb(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Fb(null,e)),r}function Ub(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let N="";for(let U=0;U<2;U++)N=N+Math.random().toString().slice(2);return N}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=Bb(e,r,s),f=Vb(d,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+l+"--",T=dn.getBlob(p,r,_);if(T===null)throw nb();const x={name:d.fullPath},C=Al(i,n.host,n._protocol),P="POST",$=n.maxUploadRetryTime,M=new Lm(C,P,Nb(n,t),$);return M.urlParams=x,M.headers=o,M.body=T.uploadData(),M.errorHandler=Mm(e),M}class $b{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw ps("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ps("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ps("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ps("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ps("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jb extends $b{initXhr(){this.xhr_.responseType="text"}}function Fm(){return new jb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this._service=e,t instanceof lt?this._location=t:this._location=lt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new sr(e,t)}get root(){const e=new lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dm(this._location.path)}get storage(){return this._service}get parent(){const e=Rb(this._location.path);if(e===null)return null;const t=new lt(this._location.bucket,e);return new sr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ib(e)}}function zb(n,e,t){n._throwIfRoot("uploadBytes");const r=Ub(n.storage,n._location,Vm(),new dn(e,!0),t);return n.storage.makeRequestWithTokens(r,Fm).then(s=>({metadata:s,ref:n}))}function qb(n,e,t=mt.RAW,r){n._throwIfRoot("uploadString");const s=Sm(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),zb(n,s.data,i)}function Gb(n){n._throwIfRoot("getDownloadURL");const e=Mb(n.storage,n._location,Vm());return n.storage.makeRequestWithTokens(e,Fm).then(t=>{if(t===null)throw rb();return t})}function Kb(n,e){const t=Sb(n._location.path,e),r=new lt(n._location.bucket,t);return new sr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(n){return/^[A-Za-z]+:\/\//.test(n)}function Wb(n,e){return new sr(n,e)}function Bm(n,e){if(n instanceof Rl){const t=n;if(t._bucket==null)throw tb();const r=new sr(t,t._bucket);return e!=null?Bm(r,e):r}else return e!==void 0?Kb(n,e):n}function Qb(n,e){if(e&&Hb(e)){if(n instanceof Rl)return Wb(n,e);throw Ic("To use ref(service, url), the first argument must be a Storage instance.")}else return Bm(n,e)}function ph(n,e){const t=e==null?void 0:e[bm];return t==null?null:lt.makeFromBucketSpec(t,n)}function Jb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Og(s,n.app.options.projectId))}class Rl{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Tm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qT,this._maxUploadRetryTime=GT,this._requests=new Set,s!=null?this._bucket=lt.makeFromBucketSpec(s,this._host):this._bucket=ph(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=lt.makeFromBucketSpec(this._url,e):this._bucket=ph(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new ob(Am());{const o=_b(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const mh="@firebase/storage",gh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="storage";function $m(n,e,t,r){return n=Re(n),qb(n,e,t,r)}function jm(n){return n=Re(n),Gb(n)}function zm(n,e){return n=Re(n),Qb(n,e)}function Xb(n=kh(),e){n=Re(n);const r=Vo(n,Um).getImmediate({identifier:e}),s=Ng("storage");return s&&Yb(r,...s),r}function Yb(n,e,t,r={}){Jb(n,e,t,r)}function Zb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Rl(t,r,s,e,or)}function eA(){Wn(new _n(Um,Zb,"PUBLIC").setMultipleInstances(!0)),Rt(mh,gh,""),Rt(mh,gh,"esm2017")}eA();const tA={apiKey:"AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",authDomain:"archery-app-70e20.firebaseapp.com",projectId:"archery-app-70e20",storageBucket:"archery-app-70e20.firebasestorage.app",messagingSenderId:"1025324581093",appId:"1:1025324581093:web:03b41dbee9cc81c6eb540c"},Sl=Ch(tA),di=II(Sl),ne=wT(Sl,{localCache:BT({tabManager:zT()})}),qm=Xb(Sl);function ee(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ye(n,e="info"){const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=n,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("toast-show")),setTimeout(()=>{t.classList.remove("toast-show"),setTimeout(()=>t.remove(),300)},3500)}function ia(n,e){const t=document.getElementById("confirm-modal");document.getElementById("confirm-msg").textContent=n,t.classList.remove("hidden");const r=()=>{t.classList.add("hidden"),window._confirmAccept=null,window._confirmReject=null};window._confirmAccept=()=>{r(),e()},window._confirmReject=()=>{r()}}const Gm="archery_v5",nA="archery_v4";function _h(){try{const n=JSON.parse(localStorage.getItem(Gm)||"null");if(n)return n;const e=JSON.parse(localStorage.getItem(nA)||"{}");return{friends:e.friends||[],rounds:e.rounds||[],courses:e.courses||[]}}catch{return{friends:[],rounds:[],courses:[]}}}function yt(){try{localStorage.setItem(Gm,JSON.stringify({friends:g.friends,rounds:g.rounds.slice(0,200),courses:g.courses}))}catch(n){(n==null?void 0:n.name)==="QuotaExceededError"&&ye("Lokalt lager er fuldt — nogle data blev ikke gemt","error")}}const rA=[11,10,8,5,"M"];function Ne(n){return n==="M"||n==null?0:Number(n)}function ir(n){return n?n.split(";").map(e=>e.split(",").map(t=>t==="M"?"M":t==="-"?null:Number(t))):[]}function sA(n){return n.map(e=>e.map(t=>t??"-").join(",")).join(";")}function Je(n){return n.flat().reduce((e,t)=>e+Ne(t),0)}function iA(n,e){const t=n.flatMap(r=>(r.scores[e]||[]).filter(s=>s!=null).map(Ne));return t.length?(t.reduce((r,s)=>r+s,0)/t.length).toFixed(1):null}function Pl(n){const e={11:0,10:0,8:0,5:0,M:0};return n.flat().forEach(t=>{t==="M"?e.M++:t!=null&&e[Number(t)]!==void 0&&e[Number(t)]++}),e}function xl(n){return n.length?n.reduce((e,t)=>Je(t.scores)>Je(e.scores)?t:e,n[0]):null}function oA(n,e){const t=n.flat().filter(r=>r!=null);return t.length?t.reduce((r,s)=>r+Ne(s),0)/t.length<e:!1}function aA(n,e,t){return{id:n,name:e,isGuest:!!t,scores:[]}}function cA(n,e){for(;n.scores.length<e;)n.scores.push([null,null])}function lA(n,e){let t=0;for(let r=0;r<e;r++)n.every(s=>{const i=s.scores[r]||[null,null];return i[0]!=null&&i[1]!=null})&&t++;return t}function Km(n){return{id:n.id||null,name:n.name,courseId:n.courseId||null,courseName:n.courseName||null,numTargets:n.numTargets,startTarget:n.startTarget||1,created:n.created,completed:n.completed||null,gpsRoute:n.gpsRoute||null,gpsDuration:n.gpsDuration||null,gpsDistance:n.gpsDistance||null,traversalOrder:n.traversalOrder,traversalPos:n.traversalPos||0,shooters:n.shooters.map(e=>({id:e.id,name:e.name,isGuest:e.isGuest||!1,scores:sA(e.scores)}))}}function uA(n){return{...n,shooters:(n.shooters||[]).map(e=>({...e,scores:ir(e.scores)}))}}let so=null,io=!1,Hn=!1,wc=[],Vs=null,Ts=0,Et=null,Ec=null,ms=null;function Hm(n){return n?n.split(";").map(e=>{const[t,r]=e.split(",").map(Number);return{lat:t,lng:r}}):[]}function Cl(n,e){const r=(e.lat-n.lat)*Math.PI/180,s=(e.lng-n.lng)*Math.PI/180,i=Math.sin(r/2)**2+Math.cos(n.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(s/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))}function Wm(n){return`${Math.floor(n/60).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}function Qm(n){return n<1e3?`${Math.round(n)} m`:`${(n/1e3).toFixed(2)} km`}function dA(n){return navigator.geolocation?(ms=n,wc=[],Ts=0,Et=null,Vs=Date.now(),Hn=!1,io=!0,so=navigator.geolocation.watchPosition(e=>{if(!io||Hn)return;const t={lat:e.coords.latitude,lng:e.coords.longitude};Et&&(Ts+=Cl(Et,t)),Et=t,wc.push(t),ms&&ms({lat:t.lat,lng:t.lng,distance:Ts,elapsed:Math.round((Date.now()-Vs)/1e3)})},e=>console.warn(e),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),Ec=setInterval(()=>{io&&!Hn&&ms&&ms({lat:Et==null?void 0:Et.lat,lng:Et==null?void 0:Et.lng,distance:Ts,elapsed:Math.round((Date.now()-Vs)/1e3)})},1e3),!0):!1}window.toggleGpsPause=function(){return Hn=!Hn,Hn};function Jm(){return io=!1,Hn=!1,so!==null&&(navigator.geolocation.clearWatch(so),so=null),clearInterval(Ec),Ec=null,{route:wc.map(n=>`${n.lat},${n.lng}`).join(";"),distance:Math.round(Ts),duration:Vs?Math.round((Date.now()-Vs)/1e3):0}}function oa(){return new Promise((n,e)=>{if(!navigator.geolocation){e(new Error("GPS ikke understøttet"));return}navigator.geolocation.getCurrentPosition(t=>n({lat:t.coords.latitude,lng:t.coords.longitude}),e,{enableHighAccuracy:!0,timeout:1e4})})}function hA(n,e){if(!(n!=null&&n.length)||!e)return 0;let t=1/0,r=0;return n.forEach((s,i)=>{if(!s.gps)return;const o=Cl(e,s.gps);o<t&&(t=o,r=i)}),r}const g={user:null,profile:null,isAdmin:!1,isSuperAdmin:!1,friends:[],courses:[],rounds:[],round:null,course:null,currentCourse:null,courseMap:null,courseMapLayer:null,gpsTracking:!1,warnThreshold:8,deleteConfirm:{},editFriendId:null,finishTap:0,abortTap:0};let oo=null;async function fA(){try{"wakeLock"in navigator&&(oo=await navigator.wakeLock.request("screen"))}catch{}}function kl(){oo&&(oo.release(),oo=null)}const pA={"auth/user-not-found":"Bruger ikke fundet.","auth/wrong-password":"Forkert kodeord.","auth/invalid-credential":"Ugyldig email eller kodeord.","auth/email-already-in-use":"Email er allerede i brug.","auth/weak-password":"Kodeordet er for svagt (min. 6 tegn).","auth/invalid-email":"Ugyldig email-adresse.","auth/too-many-requests":"For mange forsøg. Prøv igen senere.","auth/network-request-failed":"Netværksfejl. Tjek din forbindelse."};function Dl(n){return pA[n]||"Der opstod en fejl. Prøv igen."}function $t(n,e="error"){const t=document.getElementById("auth-err");t.textContent=n,t.style.color=e==="ok"?"var(--success)":"",t.classList.remove("hidden")}window.showAuthTab=function(n){document.querySelectorAll(".auth-tab").forEach((e,t)=>e.classList.toggle("active",t===0==(n==="login"))),document.getElementById("login-form").classList.toggle("hidden",n!=="login"),document.getElementById("signup-form").classList.toggle("hidden",n!=="signup"),document.getElementById("auth-err").classList.add("hidden")};window.doLogin=async function(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){$t("Udfyld alle felter.");return}const t=document.querySelector("#login-form .btn");t.disabled=!0,t.textContent="...";try{await iv(di,n,e)}catch(r){$t(Dl(r.code))}finally{t.disabled=!1,t.textContent="LOG IND"}};window.doSignup=async function(){const n=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-email").value.trim(),t=document.getElementById("signup-password").value,r=document.getElementById("signup-kon").value,s=document.getElementById("signup-bueklasse").value;if(!n||!e||!t||!r||!s){$t("Udfyld alle felter.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){$t("Ugyldig email-adresse.");return}if(t.length<6){$t("Adgangskoden skal være mindst 6 tegn.");return}const i=document.querySelector("#signup-form .btn");i.disabled=!0,i.textContent="...";try{const o=await sv(di,e,t);await Gn(de(ne,"users",o.user.uid),{name:n,email:e,yam:n,"e-mail":e,kon:r,bueklasse:s,created:xr()})}catch(o){$t(Dl(o.code))}finally{i.disabled=!1,i.textContent="OPRET KONTO"}};window.doForgot=async function(){const n=document.getElementById("login-email").value.trim();if(!n){$t("Indtast din email først.");return}try{await rv(di,n),$t("Nulstillingsmail sendt!","ok")}catch(e){$t(Dl(e.code))}};window.doLogout=async function(){try{await lv(di)}catch{}};document.addEventListener("DOMContentLoaded",()=>{var t,r,s;const n=document.getElementById("warn-enabled-sw");if(n){const i=localStorage.getItem("warnEnabled");g.warnEnabled=i===null?!0:i==="true",n.classList.toggle("on",g.warnEnabled),n.addEventListener("click",()=>{g.warnEnabled=!g.warnEnabled,n.classList.toggle("on",g.warnEnabled),localStorage.setItem("warnEnabled",g.warnEnabled)})}cv(di,async i=>{if(i){g.user=i;let o,c;for(let l=0;l<3;l++)try{[o,c]=await Promise.all([Qs(de(ne,"users",i.uid)),Qs(de(ne,"admins",i.uid))]);break}catch(d){console.error("Profil fejl attempt",l,d.code,d.message),l<2?await new Promise(f=>setTimeout(f,2e3*(l+1))):(g.profile={name:i.email,email:i.email},g.isAdmin=!1)}if(o!=null&&o.exists()){const l=o.data();g.profile={name:l.name||l.yam||i.email,email:l.email||l["e-mail"]||i.email,kon:l.kon||null,bueklasse:l.bueklasse||null}}else g.profile||(g.profile={name:i.email,email:i.email});g.isAdmin=(c==null?void 0:c.exists())||!1,g.isSuperAdmin=g.isAdmin&&i.email==="bsklausen@proton.me",_A()}else yA()});let e=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),e=i,document.getElementById("pwa-banner").style.display="flex"}),(t=document.getElementById("pwa-install-btn"))==null||t.addEventListener("click",async()=>{e&&(e.prompt(),await e.userChoice,e=null,document.getElementById("pwa-banner").style.display="none")}),(r=document.getElementById("pwa-dismiss-btn"))==null||r.addEventListener("click",()=>{document.getElementById("pwa-banner").style.display="none"}),ao(24),document.getElementById("target-count").addEventListener("change",i=>{const o=i.target.value,c=document.getElementById("target-count-custom");c.style.display=o==="custom"?"":"none",o!=="custom"&&ao(Number(o))}),document.getElementById("target-count-custom").addEventListener("input",i=>{const o=Number(i.target.value);o>0&&ao(o)}),(s=document.getElementById("photo-input"))==null||s.addEventListener("change",async i=>{var c;const o=i.target.files[0];if(o)try{const l=await eg(o),d=Qr(),f=zm(qm,`courses/${g.round.courseId}/target_${d}.jpg`);await $m(f,l,"base64",{contentType:"image/jpeg"});const p=await jm(f);await Nl(g.round.courseId,d,{imageUrl:p}),(c=g.course)!=null&&c.targets&&(g.course.targets[d].imageUrl=p),Rn()}catch(l){ye("Upload fejl: "+l.message,"error")}}),document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",o=>{o.target===i&&i.classList.add("hidden")})})});window.saveProfilModal=async function(){const n=document.getElementById("profil-kon").value,e=document.getElementById("profil-bueklasse").value,t=document.getElementById("profil-err");if(!n||!e){t.textContent="Vælg både køn og bueklasse.",t.classList.remove("hidden");return}t.classList.add("hidden");try{await Jt(de(ne,"users",g.user.uid),{kon:n,bueklasse:e}),g.profile.kon=n,g.profile.bueklasse=e,document.getElementById("profil-modal").classList.add("hidden")}catch{t.textContent="Fejl ved gem. Prøv igen.",t.classList.remove("hidden")}};function mA(n){let e=1,t=0,r=0,s=0,i=1,o=0,c=0,l=0,d=0,f=0,p=0,_=0,T=0;const x=()=>{n.style.transformOrigin="0 0",n.style.transform=e>1?`translate(${t}px,${r}px) scale(${e})`:""};n.addEventListener("touchstart",P=>{if(P.preventDefault(),P.touches.length===2){const $=P.touches,M=n.getBoundingClientRect();s=Math.hypot($[0].clientX-$[1].clientX,$[0].clientY-$[1].clientY),i=e,o=t,c=r,l=($[0].clientX+$[1].clientX)/2-M.left,d=($[0].clientY+$[1].clientY)/2-M.top}else P.touches.length===1&&(f=P.touches[0].clientX,p=P.touches[0].clientY,_=t,T=r)},{passive:!1}),n.addEventListener("touchmove",P=>{if(P.preventDefault(),P.touches.length===2){const $=P.touches,M=Math.hypot($[0].clientX-$[1].clientX,$[0].clientY-$[1].clientY),N=Math.min(8,Math.max(1,i*M/s)),U=(l-o)/i,K=(d-c)/i;t=l-U*N,r=d-K*N,e=N,x()}else P.touches.length===1&&e>1&&(t=_+P.touches[0].clientX-f,r=T+P.touches[0].clientY-p,x())},{passive:!1}),n.addEventListener("touchend",()=>{e<1.05&&(e=1,t=0,r=0,x())},{passive:!0});let C=0;n.addEventListener("touchend",()=>{const P=Date.now();P-C<300&&(e=1,t=0,r=0,x()),C=P},{passive:!0})}function gA(n){g.pendingAnalyseRound=n,document.getElementById("analyse-filter").value="specific",window.switchTab("analyse")}function yh(){if(!g.pendingRound)return;const n=g.rounds.find(t=>t.id===g.pendingRound);if(!n)return;g.pendingRound=null;const e=(n.shooters||[]).map(t=>({...t,scores:ir(t.scores)}));setTimeout(()=>Vl({...n,shooters:e}),300)}function _A(){document.getElementById("hdr-name").textContent=g.profile.name,document.getElementById("auth-screen").classList.remove("active"),document.getElementById("app-screen").classList.add("active"),(!g.profile.kon||!g.profile.bueklasse)&&setTimeout(()=>document.getElementById("profil-modal").classList.remove("hidden"),800),document.getElementById("admin-badge").classList.toggle("hidden",!g.isAdmin),document.querySelectorAll(".admin-only").forEach(t=>t.classList.toggle("hidden",!g.isAdmin));const n=_h();g.friends=n.friends||[],g.rounds=n.rounds||[],Ct(gt(ne,"users",g.user.uid,"friends")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),s=new Set(g.friends.map(o=>o.id)),i=r.filter(o=>!s.has(o.id));i.length&&(g.friends=[...g.friends,...i],yt(),Xs(),Js())}).catch(t=>console.warn("Hent venner:",t)),Xs(),Js(),ko(),g.pendingRound=new URLSearchParams(window.location.search).get("round")||null,g.pendingRound&&yh();const e=_h().courses||[];g.courses=e,hi(),aa(),vA(),Ct(gt(ne,"users",g.user.uid,"rounds")).then(t=>{if(!t.docs.length)return;const r=t.docs.map(o=>({...o.data(),id:o.id})),s=new Set(g.rounds.map(o=>o.id)),i=r.filter(o=>!s.has(o.id));i.length&&(g.rounds=[...g.rounds,...i].sort((o,c)=>{var f,p;const l=o.completed||o.created||0,d=c.completed||c.created||0;return(typeof d=="number"?d:((f=d.toMillis)==null?void 0:f.call(d))??0)-(typeof l=="number"?l:((p=l.toMillis)==null?void 0:p.call(l))??0)}),yt(),ko(),g.pendingRound&&yh())}).catch(t=>console.warn("Hent runder:",t)),PA(),EA()}function yA(){g.user=null,g.profile=null,g.round=null,kl(),document.getElementById("app-screen").classList.remove("active"),document.getElementById("auth-screen").classList.add("active")}window.toggleLang=function(){window.appLang=window.appLang==="da"?"en":"da",document.getElementById("lang-btn").textContent=window.appLang.toUpperCase()};window.switchTab=function(n){var t;document.querySelectorAll(".tab").forEach(r=>{r.classList.remove("active"),r.classList.add("hidden")}),document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`tab-${n}`);e&&(e.classList.add("active"),e.classList.remove("hidden")),(t=document.querySelector(`.nav-btn[data-tab="${n}"]`))==null||t.classList.add("active"),n==="friends"&&DA(),n==="analyse"&&window.renderAnalyse(),n==="courses"&&g.courseMap&&setTimeout(()=>g.courseMap.invalidateSize(),100)};function vA(){!navigator.geolocation||!g.courses.length||navigator.geolocation.getCurrentPosition(n=>{const e={lat:n.coords.latitude,lng:n.coords.longitude};let t=1/0,r=null;if(g.courses.forEach(s=>{(s.targets||[]).forEach(i=>{const o=i.gps||i.GPS;if(!o||!o.lat)return;const c=Cl(e,o);c<t&&(t=c,r=s.id)})}),r&&t<500){const s=document.getElementById("course-sel");s.value=r,s.dispatchEvent(new Event("change"))}},()=>{},{enableHighAccuracy:!0,timeout:5e3})}function aa(){const n=document.getElementById("course-sel"),e=n.value;n.innerHTML='<option value="">-- Ingen bane --</option>',g.courses.forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.name} (${t.numTargets} mål)`,n.appendChild(r)}),e&&(n.value=e),n.onchange=()=>{const t=g.courses.find(i=>i.id===n.value),r=document.getElementById("target-count"),s=document.getElementById("target-count-custom");t?(!!r.querySelector(`option[value="${t.numTargets}"]`)?(r.value=String(t.numTargets),s.style.display="none"):(r.value="custom",s.value=t.numTargets,s.style.display=""),r.disabled=!0,s.disabled=!0):(r.disabled=!1,s.disabled=!1,r.value!=="custom"&&(s.style.display="none")),ao(t?t.numTargets:r.value==="custom"?Number(s.value):Number(r.value))}}function ao(n){const e=document.getElementById("start-target");e.innerHTML="";for(let t=1;t<=n;t++){const r=document.createElement("option");r.value=t,r.textContent=t,e.appendChild(r)}}window.addParticipant=function(n,e){if(document.getElementById(`chip-${n}`))return;const t=document.createElement("div");t.className="pchip",t.id=`chip-${n}`,t.innerHTML=`<span class="pchip-name">🎯 ${ee(e)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`,document.getElementById("p-list").appendChild(t)};function IA(){return Array.from(document.querySelectorAll(".pchip")).map(n=>({id:n.id.replace("chip-",""),name:n.querySelector(".pchip-name").textContent.replace("🎯 ","").trim(),isGuest:n.id.startsWith("chip-guest-")}))}function Js(){const n=document.getElementById("qfriends");n.innerHTML="",g.friends.forEach(e=>{const t=document.createElement("button");t.className="qfbtn",t.textContent=e.name,t.onclick=()=>window.addParticipant(e.id,e.name),n.appendChild(t)})}window.searchFriends=async function(n){const e=document.getElementById("ac-list");if(!n.trim()){e.classList.add("hidden");return}const t=g.friends.filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));let r=[];try{r=(await Ct(gt(ne,"users"))).docs.map(o=>({id:o.id,...o.data()})).filter(o=>{var c;return(o.name||o.yam||"").toLowerCase().includes(n.toLowerCase())&&o.id!==((c=g.user)==null?void 0:c.uid)&&!t.find(l=>l.id===o.id)}).map(o=>({id:o.id,name:o.name||o.yam||o.email||"—",email:o.email||o["e-mail"]||""}))}catch(i){console.warn(i)}const s=[...t,...r];if(!s.length){e.classList.add("hidden");return}e.innerHTML=s.map(i=>`<div class="ac-item" data-id="${ee(i.id)}" data-name="${ee(i.name||"")}" data-email="${ee(i.email||"")}">${ee(i.name)}${i.email?` <span style='font-size:11px;opacity:.6'>${ee(i.email)}</span>`:""}</div>`).join(""),e.querySelectorAll(".ac-item").forEach(i=>i.addEventListener("click",()=>{selectFriend(i.dataset.id,i.dataset.name,i.dataset.email),document.getElementById("friend-search").value="",document.getElementById("ac-list").classList.add("hidden")})),e.classList.remove("hidden")};window.selectFriend=function(n,e,t){g.friends.find(r=>r.id===n)||(g.friends.push({id:n,name:e,email:t}),yt(),Xs(),Js()),window.addParticipant(n,e)};window.startRound=async function(){var f,p;const n=(document.getElementById("round-name").value.trim()||"Min Skydning").slice(0,80),e=document.getElementById("course-sel").value,t=document.getElementById("target-count"),r=(t.value==="custom"?Number(document.getElementById("target-count-custom").value):Number(t.value))||24,s=Number(document.getElementById("start-target").value)-1,i=document.getElementById("gps-auto-sw").classList.contains("on"),o=document.getElementById("gps-track-sw").classList.contains("on");g.warnThreshold=Number(document.getElementById("warn-thresh").value)||8;const c=[{id:g.user.uid,name:g.profile.name,isGuest:!1},...IA().filter(_=>_.id!==g.user.uid)];g.course=e&&g.courses.find(_=>_.id===e)||null;const l=c.map(_=>{const T=aA(_.id,_.name,_.isGuest);return cA(T,r),T});let d=s;if(i&&((f=g.course)!=null&&f.targets))try{d=hA(g.course.targets,await oa())}catch{}g.round={id:"r_"+Date.now(),name:n,courseId:e||null,courseName:((p=g.course)==null?void 0:p.name)||null,numTargets:r,startTarget:d+1,shooters:l,created:Date.now(),traversalOrder:Xm(d,r),traversalPos:0},o&&(g.gpsTracking=dA(wA),document.getElementById("gps-bar").classList.toggle("hidden",!g.gpsTracking),fA()),showActivePanel(),Jr(),Rn(),la(),ca()};function Xm(n,e){return Array.from({length:e},(t,r)=>(n+r)%e)}function Qr(){return g.round.traversalOrder[g.round.traversalPos]}window.showSetupPanel=function(){document.getElementById("setup-panel").classList.remove("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showActivePanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.remove("hidden"),document.getElementById("results-panel").classList.add("hidden")};window.showResultsPanel=function(){document.getElementById("setup-panel").classList.add("hidden"),document.getElementById("active-panel").classList.add("hidden"),document.getElementById("results-panel").classList.remove("hidden")};function Rn(){var l,d;if(!g.round)return;const n=Qr(),e=g.round.numTargets;document.getElementById("tnum-big").textContent=n+1,document.getElementById("tnum-suf").textContent=" af "+e,document.getElementById("round-badge").textContent=g.round.name;const t=(d=(l=g.course)==null?void 0:l.targets)==null?void 0:d[n];document.getElementById("anim-name").textContent=(t==null?void 0:t.name)||`Mål ${n+1}`;const r=lA(g.round.shooters,e);document.getElementById("pbar").style.width=`${r/e*100}%`;const s=g.round.shooters.flatMap(f=>f.scores.flat().filter(p=>p!=null)),i=s.reduce((f,p)=>f+Ne(p),0);document.getElementById("stat-avg").textContent=s.length?(i/s.length).toFixed(1):"—",document.getElementById("stat-tot").textContent=i,document.getElementById("stat-rem").textContent=e-r;const o=document.getElementById("anim-img");t!=null&&t.imageUrl||t!=null&&t.photo?(o.classList.add("hidden"),o.onload=()=>o.classList.remove("hidden"),o.onerror=()=>o.classList.add("hidden"),o.src=t.imageUrl||t.photo):(o.src="",o.classList.add("hidden")),document.getElementById("edit-target-btn").classList.toggle("hidden",!(g.isAdmin&&g.round.courseId)),document.getElementById("next-btn").textContent=g.round.traversalPos===e-1?"AFSLUT →":"NÆSTE →";const c=iA(g.round.shooters,n);document.getElementById("target-avg").textContent=c!==null?`Gns. dette mål: ${c}`:""}function Jr(){if(!g.round)return;const n=Qr(),e=document.getElementById("shooters-list");e.innerHTML="",g.round.shooters.forEach((t,r)=>{const s=Je(t.scores),i=oA(t.scores,g.warnThreshold),o=t.scores[n]||[null,null],c=document.createElement("div");c.className="shooter-card";const l=t.scores.map(x=>x[0]).filter(x=>x!=null),d=t.scores.map(x=>x[1]).filter(x=>x!=null),f=[...l,...d],p=l.length?(l.reduce((x,C)=>x+Ne(C),0)/l.length).toFixed(2):"—",_=d.length?(d.reduce((x,C)=>x+Ne(C),0)/d.length).toFixed(2):"—",T=f.length?(f.reduce((x,C)=>x+Ne(C),0)/f.length).toFixed(2):"—";c.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${i?'<span class="warn-dot"></span>':""}
        <span class="sh-name">${t.name}</span>
        <div style="display:flex;gap:4px;">
          <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${s}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P1</div><div class="sh-mini-val" style="font-size:12px;">${p}</div></div>
          <div class="sh-mini" style="border:1px solid var(--acc);"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val" style="font-size:12px;color:var(--acc);">${T}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P2</div><div class="sh-mini-val" style="font-size:12px;">${_}</div></div>
        </div>
      </div>
      <div class="arrows-row">${[0,1].map(x=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${x+1}</div>
          <div class="score-btns">${rA.map(C=>`
            <button class="sbtn ${o[x]===C?`sel-${C}`:""}" data-v="${C}"
              onclick="setScore(${r},${n},${x},'${C}')">${C}</button>`).join("")}
          </div></div>`).join("")}
      </div>`,e.appendChild(c)})}window.setScore=function(n,e,t,r){const s=r==="M"?"M":Number(r);g.round.shooters[n].scores[e][t]=s,ca(),Jr(),Rn()};function wA({lat:n,lng:e,distance:t,elapsed:r}){document.getElementById("gps-time").textContent=Wm(r),document.getElementById("gps-dist").textContent=Qm(t),n&&e&&(document.getElementById("gps-coord").textContent=`${n.toFixed(5)}, ${e.toFixed(5)}`)}async function ca(){if(!(!g.round||!g.user))try{await Gn(de(ne,"users",g.user.uid,"active","round"),Km(g.round))}catch(n){console.warn(n)}}async function EA(){var n;try{const e=await Qs(de(ne,"users",g.user.uid,"active","round"));if(!e.exists())return;const t=e.data();if(t.id&&g.rounds.some(s=>s.id===t.id)){await Kt(de(ne,"users",g.user.uid,"active","round"));return}if(Date.now()-((n=t.created)!=null&&n.toMillis?t.created.toMillis():t.created||0)>24*60*60*1e3){await Kt(de(ne,"users",g.user.uid,"active","round"));return}ia("Genoptag den igangværende runde?",()=>{g.round=uA(t),g.round.traversalOrder=t.traversalOrder||Xm(0,g.round.numTargets),g.round.traversalPos=t.traversalPos||0,g.round.courseId&&(g.course=g.courses.find(s=>s.id===g.round.courseId)||null),showActivePanel(),Jr(),Rn(),la()})}catch(e){console.warn(e)}}function la(){const n=document.getElementById("app-main");n&&(n.scrollTop=0,requestAnimationFrame(()=>{n.scrollTop=0,setTimeout(()=>{n.scrollTop=0},100)}))}window.prevTarget=function(){!g.round||g.round.traversalPos<=0||(g.round.traversalPos--,ca(),Jr(),Rn(),la())};window.nextTarget=function(){g.round&&(g.round.traversalPos<g.round.numTargets-1?(g.round.traversalPos++,ca(),Jr(),Rn(),la()):window.finishRound())};window.skipToTarget=function(){g.round&&(document.getElementById("skip-input").max=g.round.numTargets,document.getElementById("skip-modal").classList.remove("hidden"))};window.doSkip=function(){const n=Number(document.getElementById("skip-input").value);if(!g.round||n<1||n>g.round.numTargets)return;const e=g.round.traversalOrder.indexOf(n-1);e!==-1&&(g.round.traversalPos=e),document.getElementById("skip-modal").classList.add("hidden"),Jr(),Rn()};window.finishRound=async function(){var i,o,c;g.finishTap++;const n=document.getElementById("finish-btn");if(g.finishTap===1){n.textContent="✓ BEKRÆFT",setTimeout(()=>{g.finishTap=0,n.textContent="✓ AFSLUT NU"},3e3);return}g.finishTap=0,n.textContent="✓ AFSLUT NU";let e={};g.gpsTracking&&(e=Jm(),g.gpsTracking=!1),kl();const t=g.round.id||"r_"+Date.now(),r={...Km(g.round),completed:Date.now(),...e,id:t};g.rounds.unshift({...r,created:Date.now()}),yt(),ko(),Gn(de(ne,"users",g.user.uid,"rounds",t),{...r,created:xr()}).catch(()=>ye("Runde gemt lokalt (netværksfejl)","error")),g.round.shooters.filter(l=>!l.isGuest&&l.id!==g.user.uid).forEach(l=>{Gn(de(ne,"users",l.id,"rounds",t),{...r,created:xr()}).catch(()=>{})});const s=g.round;if(s.courseId&&((i=g.profile)!=null&&i.kon)&&((o=g.profile)!=null&&o.bueklasse)){const l=s.shooters.find(d=>{var f;return d.id===((f=g.user)==null?void 0:f.uid)})||((c=s.shooters)==null?void 0:c[0]);l&&Gn(de(ne,"bane_stats",s.courseId,"runder",t),{score:Je(l.scores),kon:g.profile.kon,bueklasse:g.profile.bueklasse,numTargets:s.numTargets,dato:xr()}).catch(d=>console.warn("bane_stats fejl:",d))}window._lastRound=s,g.round=null,await Kt(de(ne,"users",g.user.uid,"active","round")).catch(()=>{}),bA(s),showResultsPanel()};window.abortRound=async function(){g.abortTap++;const n=document.getElementById("abort-btn");if(g.abortTap===1){n.textContent="🗑 BEKRÆFT",setTimeout(()=>{g.abortTap=0,n.textContent="🗑 AFBRYD"},3e3);return}g.abortTap=0,n.textContent="🗑 AFBRYD",g.gpsTracking&&(Jm(),g.gpsTracking=!1),kl(),await Kt(de(ne,"users",g.user.uid,"active","round")).catch(()=>{}),g.round=null,showSetupPanel()};function TA(n){return'<div class="dist-grid">'+n.shooters.map(e=>{const t=Pl(e.scores),r=Je(e.scores),s=e.scores.map(f=>(f||[null,null])[0]).filter(f=>f!=null),i=e.scores.map(f=>(f||[null,null])[1]).filter(f=>f!=null),o=e.scores.flat().filter(f=>f!=null),c=s.length?(s.reduce((f,p)=>f+Ne(p),0)/s.length).toFixed(2):"—",l=i.length?(i.reduce((f,p)=>f+Ne(p),0)/i.length).toFixed(2):"—",d=o.length?(o.reduce((f,p)=>f+Ne(p),0)/o.length).toFixed(2):"—";return`<div class="dist-card"><div class="dist-name">${ee(e.name)}</div><div class="dist-row" style="font-weight:700;border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Total</span><span>${r} pt</span></div><div class="dist-row"><span>Snit pil 1</span><span>${c}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${l}</span></div><div class="dist-row" style="border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Samlet snit</span><span>${d}</span></div>${Object.entries(t).map(([f,p])=>`<div class="dist-row"><span>${f}</span><span>${p}x</span></div>`).join("")}</div>`}).join("")+"</div>"}function bA(n){const e=xl(n.shooters);document.getElementById("win-wrap").innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${ee((e==null?void 0:e.name)||"—")}</div><div class="win-score">${e?Je(e.scores):0} point</div>`,document.getElementById("res-table").innerHTML=Ym(n),document.getElementById("res-dist").innerHTML=TA(n)}function Ym(n){const e=(n.startTarget||1)-1;let t=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${n.shooters.map(r=>`<th>${r.name}</th>`).join("")}</tr>`;for(let r=0;r<n.numTargets;r++)t+=`<tr><td class="tc">${r===e?'<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--acc);margin-right:4px;vertical-align:middle;"></span>':""}${r+1}</td>`,n.shooters.forEach(i=>{const o=i.scores[r]||[null,null],c=(o[0]!=null&&o[0]!=="M"?Number(o[0]):0)+(o[1]!=null&&o[1]!=="M"?Number(o[1]):0);t+=`<td>${o.map(l=>l??"—").join("/")}<br><small>${c}</small></td>`}),t+="</tr>";return t+=`<tr class="tr-tot"><td class="tc">Total</td>${n.shooters.map(r=>`<td>${Je(r.scores)}</td>`).join("")}</tr></table></div>`,t}function AA(n){const e=["11","10","8","5","M"];return n.shooters.map(t=>{const r=Je(t.scores),s=t.scores.map(_=>(_||[null,null])[0]).filter(_=>_!=null),i=t.scores.map(_=>(_||[null,null])[1]).filter(_=>_!=null),o=t.scores.flat().filter(_=>_!=null),c=o.length,l=s.length?(s.reduce((_,T)=>_+Ne(T),0)/s.length).toFixed(2):"—",d=i.length?(i.reduce((_,T)=>_+Ne(T),0)/i.length).toFixed(2):"—",f=c?(o.reduce((_,T)=>_+Ne(T),0)/c).toFixed(2):"—",p=Pl(t.scores);return`<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:10px;">
      <div style="font-size:15px;font-weight:700;margin-bottom:10px;">${ee(t.name)}</div>
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
    </div>`}).join("")}function RA(n){const e=n.shooters.map(r=>{const s=r.scores.filter(f=>{const p=f||[null,null];return p[0]!==null&&p[1]!==null});if(!s.length||s.length===n.numTargets)return null;const i=s.flat().filter(f=>f!==null),o=i.reduce((f,p)=>f+Ne(p),0),c=i.length,l=c?(o/c).toFixed(2):0,d=s.length?(o/s.length).toFixed(1):0;return{name:r.name,shot:s.length,total:o,avgPil:l,avgMaal:d}}).filter(Boolean);return e.length?`<div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--surface2);"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Kun skudte mål</div><div style="display:flex;gap:8px;flex-wrap:wrap;">${e.map(r=>`<div style="flex:1;min-width:130px;background:var(--surface2);border-radius:10px;padding:12px 10px;text-align:center;"><div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:2px;">${r.name}</div><div style="font-size:11px;color:var(--muted);margin-bottom:6px;">${r.shot} af ${n.numTargets} mål</div><div style="font-size:30px;font-weight:700;color:var(--acc);line-height:1.1;">${r.total}</div><div style="font-size:12px;color:var(--muted);margin-bottom:8px;">POINT</div><div style="display:flex;justify-content:center;gap:12px;"><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${r.avgPil}</div><div style="font-size:11px;color:var(--muted);">SNT/PIL</div></div><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${r.avgMaal}</div><div style="font-size:11px;color:var(--muted);">SNT/MÅL</div></div></div></div>`).join("")}</div></div>`:""}function ko(){const n=document.getElementById("rounds-list");if(!g.rounds.length){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}n.innerHTML="",g.rounds.forEach(e=>{const t=(e.shooters||[]).map(c=>({...c,scores:ir(c.scores)})),r=t.length?xl(t):null,s=e.created,i=s!=null&&s.toDate?s.toDate().toLocaleDateString("da-DK"):s!=null&&s.seconds?new Date(s.seconds*1e3).toLocaleDateString("da-DK"):typeof s=="number"?new Date(s).toLocaleDateString("da-DK"):"—",o=document.createElement("div");o.className="rcard",o.innerHTML=`<div class="rcard-info"><div class="rcard-name">${ee(e.name||"Runde")}</div><div class="rcard-meta"><span class="rcard-date">${ee(i)}</span> · ${ee(e.courseName||e.numTargets+" mål")}</div><div class="rcard-win">🏆 ${ee((r==null?void 0:r.name)||"—")} (${r?Je(r.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser" style="font-size:16px;">📈</button><button class="del-btn" data-id="${ee(e.id)}">✕</button>`,o.querySelector(".rcard-info").onclick=()=>Vl({...e,shooters:t}),o.querySelector(".rcard-analyse").onclick=()=>gA(e.id),o.querySelector(".del-btn").onclick=c=>{const l=c.currentTarget,d=`r-${e.id}`;g.deleteConfirm[d]?(delete g.deleteConfirm[d],g.rounds=g.rounds.filter(f=>f.id!==e.id),yt(),ko(),g.user&&Kt(de(ne,"users",g.user.uid,"rounds",e.id)).catch(f=>console.warn(f)),g.user&&e.courseId&&Kt(de(ne,"bane_stats",e.courseId,"runder",e.id)).catch(f=>console.warn(f)),e.courseId&&LA(e.courseId,e.id).catch(f=>console.warn(f))):(g.deleteConfirm[d]=!0,l.classList.add("conf"),l.textContent="Slet?",setTimeout(()=>{delete g.deleteConfirm[d],l.classList.remove("conf"),l.textContent="✕"},3e3))},n.appendChild(o)})}function Vl(n){window._lastRound=n;let e=document.getElementById("round-popup");e||(e=document.createElement("div"),e.id="round-popup",e.className="rpop",e.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`,document.body.appendChild(e)),e.classList.remove("hidden"),g.rpopMap&&(g.rpopMap.remove(),g.rpopMap=null);const t=n.gpsRoute||n.route||null,r=n.gpsDuration||n.duration||null,s=n.gpsDistance||n.distance||null,i=r?Wm(r):null,o=s?Qm(s):null,c=o||i?`<div style="display:flex;gap:8px;margin-bottom:12px;">${o?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${o}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:""}${i?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${i}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:""}</div>${t?'<div id="rpop-map" style="height:200px;border-radius:8px;margin-bottom:12px;overflow:hidden;"></div>':""}`:"";if(document.getElementById("rpop-body").innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${ee(n.name)}</h3>${c}`+AA(n)+Ym(n)+RA(n)+'<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>',t){const l=Hm(t);l.length&&setTimeout(()=>{const d=document.getElementById("rpop-map");if(!d)return;g.rpopMap=window.L.map(d),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(g.rpopMap);const f=window.L.polyline(l.map(p=>[p.lat,p.lng]),{color:"#e8a020",weight:3}).addTo(g.rpopMap);g.rpopMap.fitBounds(f.getBounds(),{padding:[20,20]})},50)}}function SA(n){const e=n.data();return{id:n.id,name:e.name||e.yam||"—",numTargets:e.numTargets||e.antalMål||24,location:e.location||e.beliggenhed||"",targets:e.targets||e.mål||[],visits:e.visits||e.besøg||[],private:e.private??e.privat??!1,hidden:e.hidden??e.skjult??!1,approvedUsers:e.approvedUsers||e.godkendteBrugere||[]}}async function PA(){var n;try{const e=(((n=g.user)==null?void 0:n.email)||"").toLowerCase();let t;if(g.isAdmin)t=[await Ct(gt(ne,"courses"))];else{const i=[Ct(lh(gt(ne,"courses"),Ua("hidden","==",!1)))];e&&i.push(Ct(lh(gt(ne,"courses"),Ua("hidden","==",!0),Ua("approvedUsers","array-contains",e)))),t=await Promise.all(i)}const r=new Map;t.forEach(i=>i.docs.forEach(o=>r.set(o.id,o)));const s=[...r.values()].map(SA);s.length&&(g.courses=s,yt(),hi(),aa())}catch(e){console.warn("courses:",e)}}function hi(){const n=document.getElementById("courses-list");if(!g.courses.length){n.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}n.innerHTML="",g.courses.forEach(e=>{const t=document.createElement("div");t.className="ccard",t.innerHTML=`<div class="ccard-name">${ee(e.name)}${e.private?' <span style="font-weight:400;color:var(--muted);">(Banen er kun for medlemmer)</span>':""}</div><div class="ccard-meta">${e.numTargets} mål · ${ee(e.location||"—")}</div>`,t.onclick=()=>xA(e),n.appendChild(t)})}function xA(n){g.currentCourse=n,document.getElementById("courses-list-view").classList.add("hidden"),document.getElementById("course-detail-view").classList.remove("hidden"),document.getElementById("course-detail-title").textContent=n.name+(n.private?" (Banen er kun for medlemmer)":""),window.switchSubtab("map"),CA(n),kA(n),fi(n)}function CA(n){const e=document.getElementById("course-map");g.courseMap&&(g.courseMap.remove(),g.courseMap=null),g.courseMap=window.L.map(e),window.L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Esri",maxZoom:19}).addTo(g.courseMap);const t=[];(n.targets||[]).forEach((r,s)=>{const i=r.gps||r.GPS;!i||!i.lat||!i.lng||(t.push([i.lat,i.lng]),window.L.marker([(r.gps||r.GPS).lat,(r.gps||r.GPS).lng],{icon:window.L.divIcon({className:"",html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${s+1}</div>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(g.courseMap).bindPopup(`<b>${s+1}. ${r.name||"Mål"}</b>${r.emoji?`<br>${r.emoji}`:""}${r.imageUrl||r.photo?`<br><img src="${r.imageUrl||r.photo}" style="max-width:140px;border-radius:4px;"/>`:""}`))}),t.length?g.courseMap.fitBounds(t,{padding:[20,20]}):g.courseMap.setView([55.7,12.5],10)}function kA(n){const e=document.getElementById("visits-list"),t=g.rounds.filter(r=>r.courseId===n.id).map(r=>{const s=(r.shooters||[]).map(o=>({...o,scores:ir(o.scores)})),i=xl(s);return{roundId:r.id,date:r.completed?new Date(r.completed).toLocaleDateString("da-DK"):r.created?new Date(r.created).toLocaleDateString("da-DK"):"—",participants:s.map(o=>o.name),winner:i==null?void 0:i.name,winnerScore:i?Je(i.scores):0}});if(!t.length){e.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}e.innerHTML="",t.forEach(r=>{const s=document.createElement("div");s.className="visit-card",s.style.cursor="pointer",s.onclick=i=>{i.target.closest(".btn-icon")||window.showVisitResults(r.roundId)},s.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${ee(r.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${ee(r.roundId)}')" title="Se resultat">📊</button></div><div style="font-size:12px;color:var(--muted);">${(r.participants||[]).map(ee).join(", ")}</div>${r.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${ee(r.winner)} (${r.winnerScore} pt)</div>`:""}`,e.appendChild(s)})}window.showVisitResults=function(n){const e=g.rounds.find(r=>r.id===n);if(!e){ye("Runden er ikke gemt lokalt","error");return}const t=(e.shooters||[]).map(r=>({...r,scores:ir(r.scores)}));window.switchTab("results"),Vl({...e,shooters:t})};window.showRouteOnMap=function(n){!g.courseMap||!n.length||(g.courseMapLayer&&g.courseMap.removeLayer(g.courseMapLayer),g.courseMapLayer=window.L.polyline(n.map(e=>[e.lat,e.lng]),{color:"#e8a020",weight:3,dashArray:"8,4"}).addTo(g.courseMap),g.courseMap.fitBounds(g.courseMapLayer.getBounds(),{padding:[20,20]}),window.switchSubtab("map"))};window.parseRoute=Hm;function fi(n){const e=n.targets||[];let t=`
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
        <div class="fg"><label class="lbl">Godkendte emails</label>
          <textarea id="edit-capproved" placeholder="Godkendte emails, én pr. linje eller komma-separeret" rows="3" style="width:100%;">${ee((n.approvedUsers||[]).join(`
`))}</textarea>
        </div>
      </div>
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
    </div>`}),t+="</div></div>",document.getElementById("course-edit-form").innerHTML=t}window.saveCourseEdit=async function(){const n=document.getElementById("edit-cname").value.trim().slice(0,100),e=document.getElementById("edit-cloc").value.trim().slice(0,100),t=document.getElementById("edit-cvisibility").value,r=t!=="public",s=t==="hidden",i=s?Zm(document.getElementById("edit-capproved").value):[];if(!n)return;await Jt(de(ne,"courses",g.currentCourse.id),{name:n,yam:n,location:e,beliggenhed:e,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i}),g.currentCourse.name=n,g.currentCourse.location=e,g.currentCourse.private=r,g.currentCourse.hidden=s,g.currentCourse.approvedUsers=i;const o=g.courses.findIndex(c=>c.id===g.currentCourse.id);o>-1&&(g.courses[o]={...g.courses[o],name:n,location:e,private:r,hidden:s,approvedUsers:i}),yt(),hi(),document.getElementById("course-detail-title").textContent=n+(r?" (Banen er kun for medlemmer)":""),ye("Gemt!","success")};window.updateTargetField=function(n,e,t){var r;(r=g.currentCourse)!=null&&r.targets&&(g.currentCourse.targets[n][e]=t)};window.addTargetToCurrentCourse=async function(){if(!g.currentCourse)return;const n=[...g.currentCourse.targets||[]];n.push({number:n.length+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}),await Jt(de(ne,"courses",g.currentCourse.id),{targets:n}),g.currentCourse.targets=n,fi(g.currentCourse),ye(`Mål ${n.length} tilføjet!`,"success")};window.deleteTargetFromCourse=function(n){var e;(e=g.currentCourse)!=null&&e.targets&&ia(`Slet mål ${n+1}?`,async()=>{try{const t=[...g.currentCourse.targets];t.splice(n,1),t.forEach((r,s)=>r.number=s+1),await Jt(de(ne,"courses",g.currentCourse.id),{targets:t,numTargets:t.length}),g.currentCourse.targets=t,g.currentCourse.numTargets=t.length,fi(g.currentCourse)}catch{ye("Fejl: Kunne ikke slette mål","error")}})};window.setTargetGps=async function(n){var e;if((e=g.currentCourse)!=null&&e.targets)try{const t=await oa();g.currentCourse.targets[n].gps=t,await Jt(de(ne,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),fi(g.currentCourse),ye(`GPS sat for mål ${n+1}!`,"success")}catch(t){ye("GPS fejl: "+t.message,"error")}};window.uploadTargetPhoto=async function(n,e){const t=e.files[0];if(t)try{const r=await eg(t),s=zm(qm,`courses/${g.currentCourse.id}/target_${n}.jpg`);await $m(s,r,"base64",{contentType:"image/jpeg"});const i=await jm(s);g.currentCourse.targets[n].imageUrl=i,await Jt(de(ne,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),fi(g.currentCourse),ye("Foto gemt!","success")}catch(r){ye("Upload fejl: "+r.message,"error")}};window.saveAllTargets=async function(){var n;(n=g.currentCourse)!=null&&n.targets&&(await Jt(de(ne,"courses",g.currentCourse.id),{targets:g.currentCourse.targets}),ye("Alle mål gemt!","success"))};window.switchSubtab=function(n){document.querySelectorAll(".stab").forEach(e=>e.classList.toggle("active",e.dataset.stab===n)),document.querySelectorAll(".stab-c").forEach(e=>{e.classList.toggle("active",e.id===`stab-${n}`),e.classList.toggle("hidden",e.id!==`stab-${n}`)}),n==="map"&&g.courseMap&&setTimeout(()=>g.courseMap.invalidateSize(),100)};window.toggleMyPos=async function(){const n=document.getElementById("mypos-sw");if(n.classList.toggle("on"),n.classList.contains("on"))try{const e=await oa();window.L.circle([e.lat,e.lng],{radius:10,color:"#2a7ae8",fillOpacity:.7}).addTo(g.courseMap),g.courseMap.panTo([e.lat,e.lng])}catch{ye("GPS ikke tilgængeligt","error"),n.classList.remove("on")}};window.doDeleteCourse=function(){if(!g.currentCourse)return;const n=g.currentCourse.id,e=g.currentCourse.name;ia(`Slet banen "${e}"?`,async()=>{try{await Kt(de(ne,"courses",n)),g.courses=g.courses.filter(t=>t.id!==n),g.currentCourse=null,yt(),hi(),aa(),document.getElementById("courses-list-view").classList.remove("hidden"),document.getElementById("course-detail-view").classList.add("hidden"),ye("Bane slettet","success")}catch{ye("Fejl: Kunne ikke slette bane","error")}})};function Zm(n){return[...new Set(n.split(/[,\n]/).map(e=>e.trim().toLowerCase()).filter(Boolean))]}window.doCreateCourse=async function(){const n=document.getElementById("new-course-name").value.trim().slice(0,100),e=document.getElementById("new-course-loc").value.trim().slice(0,100),t=document.getElementById("new-course-visibility").value,r=t!=="public",s=t==="hidden",i=s?Zm(document.getElementById("new-course-approved").value):[],o=document.getElementById("new-course-targets"),c=(o.value==="custom"?Number(document.getElementById("new-course-targets-custom").value):Number(o.value))||24;if(!n)return;const l=Array.from({length:c},(d,f)=>({number:f+1,name:"",emoji:"",imageUrl:"",distance:null,gps:null}));try{const d=await OT(gt(ne,"courses"),{name:n,yam:n,numTargets:c,antalMål:c,location:e,beliggenhed:e,targets:l,mål:l,private:r,privat:r,hidden:s,skjult:s,approvedUsers:i,godkendteBrugere:i,created:xr(),visits:[],besøg:[]});g.courses.unshift({id:d.id,name:n,numTargets:c,location:e,targets:l,visits:[],private:r,hidden:s,approvedUsers:i}),yt(),hi(),aa(),document.getElementById("create-course-modal").classList.add("hidden"),document.getElementById("new-course-name").value="",document.getElementById("new-course-visibility").value="public",document.getElementById("new-course-approved").value="",document.getElementById("new-course-approved-wrap").style.display="none",ye("Bane oprettet!","success")}catch{ye("Fejl: Kunne ikke oprette bane","error")}};async function Nl(n,e,t){const r=de(ne,"courses",n),s=await Qs(r);if(!s.exists())return;const i=s.data(),o=[...i.targets||i.mål||[]];for(;o.length<=e;)o.push({});o[e]={...o[e],...t},await Jt(r,{targets:o,mål:o})}function eg(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{let c=i.width,l=i.height;c>l?c>400&&(l=l*400/c,c=400):l>400&&(c=c*400/l,l=400);const d=document.createElement("canvas");d.width=c,d.height=l,d.getContext("2d").drawImage(i,0,0,c,l),e(d.toDataURL("image/jpeg",.65).split(",")[1])},i.onerror=t,i.src=s.target.result},r.onerror=t,r.readAsDataURL(n)})}window.openEditTarget=function(){var t,r;const n=Qr(),e=(r=(t=g.course)==null?void 0:t.targets)==null?void 0:r[n];document.getElementById("edit-tname").value=(e==null?void 0:e.name)||"",document.getElementById("edit-panel").classList.remove("hidden")};window.saveEditTarget=async function(){var t;const n=document.getElementById("edit-tname").value.trim(),e=Qr();g.round.courseId&&(await Nl(g.round.courseId,e,{name:n}),(t=g.course)!=null&&t.targets&&(g.course.targets[e].name=n)),document.getElementById("edit-panel").classList.add("hidden"),Rn()};window.editGps=async function(){var n;try{const e=await oa(),t=Qr();await Nl(g.round.courseId,t,{gps:e}),(n=g.course)!=null&&n.targets&&(g.course.targets[t].gps=e),ye("GPS gemt!","success")}catch(e){ye("GPS fejl: "+e.message,"error")}};function Xs(){const n=document.getElementById("friends-list");if(!g.friends.length){n.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}n.innerHTML="",g.friends.forEach(e=>{const t=document.createElement("div");t.className="fcard",t.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${ee(e.name)}</div><div class="fmeta">${[e.email,e.phone,e.club,e.bowType].filter(Boolean).map(ee).join(" · ")}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del" style="color:var(--danger);">🗑</button></div>`,t.querySelector(".frd-edit").addEventListener("click",()=>openFriendModal(e)),t.querySelector(".frd-del").addEventListener("click",()=>doDeleteFriend(e.id,e.name)),n.appendChild(t)})}window.openFriendModal=function(n){g.editFriendId=(n==null?void 0:n.id)||null,document.getElementById("friend-modal-title").textContent=n?"Rediger ven":"Tilføj ven",document.getElementById("f-name").value=(n==null?void 0:n.name)||"",document.getElementById("f-email").value=(n==null?void 0:n.email)||"",document.getElementById("f-phone").value=(n==null?void 0:n.phone)||"",document.getElementById("f-club").value=(n==null?void 0:n.club)||"",document.getElementById("f-bow").value=(n==null?void 0:n.bowType)||"",document.getElementById("friend-modal").classList.remove("hidden")};window.saveFriendModal=function(){const n={name:document.getElementById("f-name").value.trim().slice(0,80),email:document.getElementById("f-email").value.trim().slice(0,100),phone:document.getElementById("f-phone").value.trim().slice(0,30),club:document.getElementById("f-club").value.trim().slice(0,80),bowType:document.getElementById("f-bow").value};if(!n.name)return;if(g.editFriendId){const r=g.friends.findIndex(s=>s.id===g.editFriendId);r!==-1?g.friends[r]={...n,id:g.editFriendId}:g.friends.push({...n,id:g.editFriendId})}else g.friends.push({...n,id:"f_"+Date.now()});const e=g.editFriendId||"f_"+Date.now();g.editFriendId||(g.friends[g.friends.length-1].id=e);const t=g.friends.find(r=>r.id===(g.editFriendId||e));t&&g.user&&Gn(de(ne,"users",g.user.uid,"friends",t.id),t).catch(r=>console.warn(r)),yt(),document.getElementById("friend-modal").classList.add("hidden"),Xs(),Js()};window.doDeleteFriend=function(n,e){ia(`Slet ${e}?`,()=>{g.friends=g.friends.filter(t=>t.id!==n),yt(),Xs(),Js(),g.user&&Kt(de(ne,"users",g.user.uid,"friends",n)).catch(t=>console.warn(t))})};let bs=[];async function DA(){if(g.isAdmin){document.getElementById("admin-section").classList.remove("hidden");try{await Ll()}catch(n){console.warn(n)}if(g.isSuperAdmin){document.getElementById("users-section").classList.remove("hidden");try{bs=(await Ct(gt(ne,"users"))).docs.map(e=>({uid:e.id,...e.data()})).sort((e,t)=>(e.name||e.yam||"").localeCompare(t.name||t.yam||"","da")),tg()}catch(n){console.warn(n)}}}}async function Ll(){const n=document.getElementById("admins-list");if(!n)return;n.innerHTML='<div style="font-size:12px;color:var(--text-muted);">Henter admins…</div>';const e=await Ct(gt(ne,"admins"));if(e.empty){n.innerHTML='<div style="font-size:12px;color:var(--text-muted);">Ingen admins fundet</div>';return}n.innerHTML='<div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;font-family:var(--font-display);">NUVÆRENDE ADMINISTRATORER</div>',e.docs.forEach(t=>{var o;const r=document.createElement("div");r.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border,#333);";const s=t.data().email||t.id,i=t.id===((o=g.user)==null?void 0:o.uid);if(r.innerHTML=`<span style="font-size:13px;">${ee(s)}${i?' <span style="font-size:11px;color:var(--text-muted);">(dig)</span>':""}</span>`,g.isSuperAdmin&&!i){const c=document.createElement("button");c.className="btn btn-dark btn-sm",c.style.cssText="padding:2px 8px;font-size:11px;",c.textContent="Fjern",c.onclick=()=>doRemoveAdmin(t.id,s),r.appendChild(c)}n.appendChild(r)})}const VA={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"};function tg(n=""){const e=document.getElementById("users-list");e.innerHTML="";const t=n.toLowerCase(),r=t?bs.filter(c=>(c.name||c.yam||"").toLowerCase().includes(t)||(c.email||c["e-mail"]||"").toLowerCase().includes(t)):bs;document.getElementById("users-count").textContent=`${bs.length} brugere`;const s=document.getElementById("users-summary"),i={};bs.forEach(c=>{const l=c.bueklasse||"Ukendt";i[l]=(i[l]||0)+1});const o=Object.entries(i).sort((c,l)=>l[1]-c[1]).map(([c,l])=>`<span style="display:inline-block;background:var(--card-bg,#222);border:1px solid var(--border,#444);border-radius:12px;padding:2px 8px;font-size:11px;margin:2px 2px 2px 0;white-space:nowrap;"><b>${l}</b> ${ee(VA[c]||c)}</span>`).join("");s.innerHTML=`<div style="margin-bottom:8px;">${o}</div>`,r.forEach(c=>{var _;const l=document.createElement("div");l.className="urow";const d=(_=c.created)!=null&&_.toDate?c.created.toDate().toLocaleDateString("da-DK"):"—",f=c.bueklasse||"",p=c.kon==="m"?"♂":c.kon==="k"?"♀":"";l.innerHTML=`<span class="un">${ee(c.name||c.yam||"—")}</span><span class="ue">${ee(c.email||c["e-mail"]||"")}</span><span class="ubow">${ee(f)}${p?` ${ee(p)}`:""}</span><span class="ud">${ee(d)}</span>`,e.appendChild(l)})}window.filterUsers=function(n){tg(n)};window.doAddAdmin=async function(){const n=document.getElementById("admin-email").value.trim();if(n)try{const t=(await Ct(gt(ne,"users"))).docs.find(r=>r.data().email===n||r.data()["e-mail"]===n);if(!t){ye("Bruger ikke fundet","error");return}await Gn(de(ne,"admins",t.id),{email:n,created:xr()}),ye(`${t.data().name||n} er nu admin`,"success"),document.getElementById("admin-email").value="",await Ll()}catch(e){ye("Fejl: "+e.message,"error")}};window.doRemoveAdmin=async function(n,e){if(g.isSuperAdmin&&confirm(`Fjern ${e} som administrator?`))try{await Kt(de(ne,"admins",n)),ye(`${e} er fjernet som admin`,"success"),await Ll()}catch(t){ye("Fejl: "+t.message,"error")}};window.showQR=function(){document.getElementById("qr-modal").classList.remove("hidden");const n=document.getElementById("qr-canvas");n.innerHTML="",typeof window.QRCode<"u"&&new window.QRCode(n,{text:window.location.href,width:200,height:200,colorDark:"#1a3a1a",colorLight:"#fff"})};function vh(n,e){var M;const t=N=>{var U;return N.shooters.find(K=>K.id===e)||((U=N.shooters)==null?void 0:U[0])},r=n.map(N=>{const U=t(N);return U?Je(U.scores):null}).filter(N=>N!==null);let s=0,i=0,o=0,c=0;const l={11:0,10:0,8:0,5:0,M:0},d={11:0,10:0,8:0,5:0,M:0};n.forEach(N=>{const U=t(N);U&&U.scores.forEach(K=>{K[0]!=null&&(K[0]==="M"?(l.M++,i++):(l[Number(K[0])]=(l[Number(K[0])]||0)+1,s+=Number(K[0]),i++)),K[1]!=null&&(K[1]==="M"?(d.M++,c++):(d[Number(K[1])]=(d[Number(K[1])]||0)+1,o+=Number(K[1]),c++))})});const f=i?(s/i).toFixed(2):0,p=c?(o/c).toFixed(2):0,_=i+c?((s+o)/(i+c)).toFixed(2):0,T=((M=n[0])==null?void 0:M.numTargets)||24,C=Array.from({length:T},(N,U)=>{let K=0,W=0;return n.forEach(w=>{const y=t(w);if(!y)return;(y.scores[U]||[null,null]).forEach(E=>{E!=null&&(K+=Ne(E),W++)})}),W?K/W:null}).map((N,U)=>({v:N,i:U})).filter(N=>N.v!==null),P=C.length?C.reduce((N,U)=>N.v>U.v?N:U):null,$=C.length?C.reduce((N,U)=>N.v<U.v?N:U):null;return{myScores:r,p1avg:f,p2avg:p,pilAvg:_,distP1:l,distP2:d,bestTarget:P,worstTarget:$}}function NA(n,e,t,r){const s=["11","10","8","5","M"],i={11:"#1a7a3a",10:"#1a5aaa",8:"#d4700a",5:"#7a3aaa",M:"#cc3333"},o=n.myScores[0]||0,c=t.myScores[0]||0,l=Math.abs(o-c),d='<div style="border-top:1px solid var(--surface2);margin:10px 0;"></div>',f=(T,x,C)=>`<div style="font-size:11px;color:${C};margin-bottom:4px;">${ee(x)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:10px;color:var(--muted);">PIL 1</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${T.p1avg}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:10px;color:var(--muted);">SNT/PIL</div><div style="font-size:20px;font-weight:700;color:#f0c030;">${T.pilAvg}</div>
      </div>
      <div><div style="font-size:10px;color:var(--muted);">PIL 2</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${T.p2avg}</div></div>
    </div>`,p=(T,x,C)=>T.bestTarget&&T.worstTarget?`<div style="font-size:11px;color:${C};margin-bottom:6px;">${ee(x)}</div>
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
        <div style="font-size:11px;color:var(--acc);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ee(e)}</div>
        <div style="font-size:36px;font-weight:700;color:var(--acc);">${o}</div>
        <div style="font-size:11px;color:var(--muted);">POINT</div>
      </div>
      <div style="font-size:18px;color:var(--muted);font-weight:700;">VS</div>
      <div>
        <div style="font-size:11px;color:#f0c030;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ee(r)}</div>
        <div style="font-size:36px;font-weight:700;color:#f0c030;">${c}</div>
        <div style="font-size:11px;color:var(--muted);">POINT</div>
      </div>
    </div>
    <div style="text-align:center;margin-top:10px;font-size:13px;color:var(--muted);">${o>c?`${ee(e)} vandt med ${l} point`:c>o?`${ee(r)} vandt med ${l} point`:"Uafgjort!"}</div>
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
      ${s.map(T=>`<div style="text-align:center;font-weight:700;color:${i[T]};">${T}</div>`).join("")}
      <div style="font-size:11px;color:var(--acc);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ee(e)}</div>
      ${s.map(T=>`<div style="text-align:center;font-weight:700;">${(n.distP1[T]||0)+(n.distP2[T]||0)}</div>`).join("")}
      <div style="font-size:11px;color:#f0c030;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ee(r)}</div>
      ${s.map(T=>`<div style="text-align:center;font-weight:700;">${(t.distP1[T]||0)+(t.distP2[T]||0)}</div>`).join("")}
    </div>
  </div>`,_}window.renderAnalyse=function(){var Yt,_i,Sn,yi,vi,Pn,xn,ur;const n=document.getElementById("analyse-content");if(!n)return;const e=document.getElementById("analyse-bane");e&&e.options.length<=1&&[...new Set(g.rounds.map(F=>F.courseId).filter(Boolean))].forEach(F=>{const J=g.courses.find(ie=>ie.id===F);if(J&&!Array.from(e.options).find(ie=>ie.value===F)){const ie=document.createElement("option");ie.value=F,ie.textContent=J.name,e.appendChild(ie)}});const t=((Yt=document.getElementById("analyse-filter"))==null?void 0:Yt.value)||"all",r=t==="all"?0:t==="lastround"?1:t==="specific"?0:Number(t),s=((_i=document.getElementById("analyse-bane"))==null?void 0:_i.value)||"all",i=Number((Sn=document.getElementById("analyse-antal"))==null?void 0:Sn.value)||0,o=document.getElementById("analyse-runde-wrap"),c=document.getElementById("analyse-runde"),l=document.getElementById("analyse-runde-wrap-2"),d=document.getElementById("analyse-runde-2"),f=document.getElementById("analyse-runde-lbl"),p=t==="compare";o&&(o.style.display=t==="specific"||p?"":"none"),l&&(l.style.display=p?"":"none"),f&&(f.style.display=p?"":"none");const _=q=>{const F=q.created;return F!=null&&F.toDate?F.toDate().toLocaleDateString("da-DK"):F!=null&&F.seconds?new Date(F.seconds*1e3).toLocaleDateString("da-DK"):typeof F=="number"?new Date(F).toLocaleDateString("da-DK"):"—"};if((t==="specific"||p)&&c){const q=new Set(Array.from(c.options).map(F=>F.value).filter(Boolean));g.rounds.forEach(F=>{if(!q.has(F.id)){const J=document.createElement("option");J.value=F.id,J.textContent=`${_(F)} — ${F.name||"Runde"}`,c.appendChild(J)}}),g.pendingAnalyseRound&&(c.value=g.pendingAnalyseRound,g.pendingAnalyseRound=null)}if(p&&d){const q=new Set(Array.from(d.options).map(F=>F.value).filter(Boolean));g.rounds.forEach(F=>{if(!q.has(F.id)){const J=document.createElement("option");J.value=F.id,J.textContent=`${_(F)} — ${F.name||"Runde"}`,d.appendChild(J)}})}if(p){const q=c==null?void 0:c.value,F=d==null?void 0:d.value;if(!q||!F){n.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}const J=g.rounds.map(ce=>({...ce,shooters:(ce.shooters||[]).map(Ie=>({...Ie,scores:ir(Ie.scores)}))})),ie=J.find(ce=>ce.id===q),Z=J.find(ce=>ce.id===F);if(!ie||!Z){n.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}const ke=`${ie.name||"Runde"} (${_(ie)})`,Te=`${Z.name||"Runde"} (${_(Z)})`;n.innerHTML=NA(vh([ie],(yi=g.user)==null?void 0:yi.uid),ke,vh([Z],(vi=g.user)==null?void 0:vi.uid),Te);return}const T=g.rounds.map(q=>({...q,shooters:(q.shooters||[]).map(F=>({...F,scores:ir(F.scores)}))}));let x=s==="all"?T:T.filter(q=>q.courseId===s);if(t==="specific"){const q=c==null?void 0:c.value;x=q?x.filter(F=>F.id===q):[]}const C=i||r,P=C&&t!=="specific"?x.slice(0,C):x;if(!P.length){n.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}const $=q=>{var F;return q.shooters.find(J=>{var ie;return J.id===((ie=g.user)==null?void 0:ie.uid)})||((F=q.shooters)==null?void 0:F[0])},M=P.map(q=>{const F=$(q);return F?Je(F.scores):null}).filter(q=>q!==null),N=M.length?(M.reduce((q,F)=>q+F,0)/M.length).toFixed(1):0,U=M.length?Math.max(...M):0,K=M.length?Math.min(...M):0;let W=0,w=0,y=0,v=0;const E={11:0,10:0,8:0,5:0,M:0},b={11:0,10:0,8:0,5:0,M:0};P.forEach(q=>{const F=$(q);F&&F.scores.forEach(J=>{J[0]!=null&&(J[0]==="M"?(E.M++,w++):(E[Number(J[0])]=(E[Number(J[0])]||0)+1,W+=Number(J[0]),w++)),J[1]!=null&&(J[1]==="M"?(b.M++,v++):(b[Number(J[1])]=(b[Number(J[1])]||0)+1,y+=Number(J[1]),v++))})});const R=w?(W/w).toFixed(2):0,I=v?(y/v).toFixed(2):0,ot=w+v?((W+y)/(w+v)).toFixed(2):0,ze=((Pn=P[0])==null?void 0:Pn.numTargets)||24,pi=Array.from({length:ze},(q,F)=>{let J=0,ie=0;return P.forEach(Z=>{const ke=$(Z);if(!ke)return;const ce=(Z.traversalOrder||Array.from({length:Z.numTargets||ze},(De,he)=>he))[F];if(ce===void 0)return;(ke.scores[ce]||[null,null]).forEach(De=>{De!=null&&(J+=Ne(De),ie++)})}),ie?J/ie:null}),vt=pi.map((q,F)=>({v:q,i:F})).filter(q=>q.v!==null),It=vt.length?vt.reduce((q,F)=>q.v>F.v?q:F):null,Xt=vt.length?vt.reduce((q,F)=>q.v<F.v?q:F):null,mi=["11","10","8","5","M"];let ft="";if(ft+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">RUNDER</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${P.length}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">SNIT/RUNDE</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${N}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">BEDSTE</div><div style="font-size:28px;font-weight:700;color:#2aaa5a;">${U}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">LAVESTE</div><div style="font-size:28px;font-weight:700;color:var(--danger);">${K}</div></div>
  </div>`,ft+=`<div class="card" style="margin-bottom:16px;">
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
  </div>`,It&&Xt&&It.i!==Xt.i&&(ft+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">BEDSTE OG SVÆRESTE MÅL</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
        <div style="background:rgba(42,170,90,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">BEDSTE</div>
          <div style="font-size:24px;font-weight:700;color:#2aaa5a;">Skud nr. ${It.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${It.v.toFixed(2)}</div>
        </div>
        <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">SVÆRESTE</div>
          <div style="font-size:24px;font-weight:700;color:var(--danger);">Skud nr. ${Xt.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${Xt.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`),ft+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">FORDELING PR. SCOREZONE</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">`,mi.forEach(q=>{const F=E[q]||0,J=b[q]||0,ie=F+J,Z=30;let ke="";if(ie===0)ke=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="var(--surface2)"/>`;else if(J===0)ke=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="#ffd700"/>`;else if(F===0)ke=`<circle cx="${Z}" cy="${Z}" r="${Z}" fill="#00cc44"/>`;else{const Te=F/ie,ce=Te*2*Math.PI,Ie=Z,De=0,he=Z-Z*Math.sin(ce),Be=Z-Z*Math.cos(ce),ht=ce>Math.PI?1:0;ke=`<path d="M${Z},${Z} L${Ie},${De} A${Z},${Z} 0 ${ht},0 ${he},${Be} Z" fill="#ffd700"/>
           <path d="M${Z},${Z} L${he},${Be} A${Z},${Z} 0 ${1-ht},0 ${Ie},${De} Z" fill="#00cc44"/>`}ft+=`<div style="text-align:center;">
      <div style="font-weight:700;font-size:20px;color:#ffd700;margin-bottom:2px;">${q}</div>
      <svg viewBox="0 0 ${Z*2} ${Z*2}" style="width:56px;height:56px;">${ke}</svg>
      <div style="font-size:14px;color:var(--muted);margin-top:2px;">${F}/${J}</div>
      <div style="font-size:15px;font-weight:700;color:var(--text);">${ie}</div>
    </div>`}),ft+=`</div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:11px;color:var(--muted);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffd700;margin-right:4px;vertical-align:middle;"></span>PIL 1</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00cc44;margin-right:4px;vertical-align:middle;"></span>PIL 2</span>
    </div>
  </div>`,M.length>1){const ie=Math.min(...M)-5,Z=Math.max(...M)+5,ke=M.slice().reverse().map((Te,ce)=>{const Ie=30+ce/(M.length-1)*280,De=90-(Te-ie)/(Z-ie)*(120-2*30);return`${Ie},${De}`}).join(" ");ft+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 340 120" style="width:100%;overflow:visible;">
        <polyline points="${ke}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${M.slice().reverse().map((Te,ce)=>{const Ie=30+ce/(M.length-1)*280,De=90-(Te-ie)/(Z-ie)*(120-2*30);return`<circle cx="${Ie}" cy="${De}" r="4" fill="var(--acc)"/><text x="${Ie}" y="${De-8}" text-anchor="middle" font-size="10" fill="var(--text)">${Te}</text>`}).join("")}
        <text x="30" y="115" font-size="10" fill="var(--muted)">ældst</text>
        <text x="310" y="115" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`}const wt=s!=="all"||t==="lastround"||t==="specific",ge=pi.map((q,F)=>({v:q,i:F})).filter(q=>q.v!==null);if(ge.length>1&&wt){const Te=Math.floor(Math.min(...ge.map(X=>X.v))),ce=Math.ceil(Math.max(...ge.map(X=>X.v))),Ie=ce-Te||1,De=X=>42+(ze>1?X/(ze-1)*283:0),he=X=>15+120*(1-(X-Te)/Ie),Be=ge.map(({v:X,i:nt})=>De(nt)+","+he(X)).join(" "),ht=[];for(let X=Te;X<=ce;X++)(ce-Te<=6||X%Math.ceil((ce-Te)/5)===0)&&ht.push(X);const Me=ht.map(X=>`<line x1="38" y1="${he(X)}" x2="42" y2="${he(X)}" stroke="var(--muted)" stroke-width="1"/><text x="36" y="${he(X)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${X}</text><line x1="42" y1="${he(X)}" x2="325" y2="${he(X)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join(""),Ue=ge.map(({v:X,i:nt})=>`<circle cx="${De(nt)}" cy="${he(X)}" r="3" fill="var(--acc)"/>`).join("");ge.map(({v:X,i:nt})=>`<circle cx="${De(nt)}" cy="${he(X)}" r="4" fill="var(--acc)"/><text x="${De(nt)}" y="${he(X)-8}" text-anchor="middle" font-size="9" fill="#fff">${X.toFixed(1)}</text>`).join("");const Nt=Math.max(340,ze*30),Cn=X=>42+(ze>1?X/(ze-1)*(Nt-42-15):0),Ii=ge.map(({v:X,i:nt})=>Cn(nt)+","+he(X)).join(" "),ua=ht.map(X=>`<line x1="38" y1="${he(X)}" x2="42" y2="${he(X)}" stroke="var(--muted)" stroke-width="1"/><text x="36" y="${he(X)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${X}</text><line x1="42" y1="${he(X)}" x2="${Nt-15}" y2="${he(X)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join(""),kn=ge.map(({v:X,i:nt})=>`<circle cx="${Cn(nt)}" cy="${he(X)}" r="5" fill="var(--acc)"/><text x="${Cn(nt)}" y="${he(X)-10}" text-anchor="middle" font-size="10" fill="#fff">${X.toFixed(1)}</text>`).join("");ft+=`<div class="card" style="margin-bottom:16px;">
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
          ${ua}
          <polyline points="${Ii}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
          ${kn}
          <text x="42" y="155" font-size="9" fill="var(--muted)">1</text>
          <text x="${Cn(ze-1)}" y="155" text-anchor="end" font-size="9" fill="var(--muted)">${ze}</text>
        </svg>
        <button class="btn btn-dark" style="width:100%;margin-top:12px;" onclick="document.getElementById('graph-fs').classList.add('hidden')">Luk</button>
      </div>
    </div>`}n.innerHTML=ft;const gi=document.getElementById("graph-fs-svg");if(gi&&mA(gi),s!=="all"&&((xn=g.profile)!=null&&xn.kon)&&((ur=g.profile)!=null&&ur.bueklasse)){const q=g.profile.kon==="herre"?"Herre":"Dame",F={langbue:"Langbue",trad:"Traditionel",recurve:"Recurve",compound:"Compound",barbue:"Barbue",buejæger:"Buejæger","trad-buejæger":"Trad. buejæger",rytterbue:"Rytterbue"}[g.profile.bueklasse]||g.profile.bueklasse,J=document.createElement("div");J.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${q} ${F}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Henter...</div></div>`,n.appendChild(J),Ct(gt(ne,"bane_stats",s,"runder")).then(ie=>{const ke=ie.docs.map(Be=>Be.data()).filter(Be=>Be.kon===g.profile.kon&&Be.bueklasse===g.profile.bueklasse);if(!ke.length){J.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${q} ${F}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Ingen andre ${q} ${F}-skytter har skudt denne bane endnu.</div></div>`;return}const Te=ke.filter(Be=>Be.numTargets>0),ce=Te.length?(Te.reduce((Be,ht)=>Be+ht.score/(ht.numTargets*2),0)/Te.length).toFixed(2):"—",Ie=ce!=="—"?Number(ot)-Number(ce):null,De=Ie!==null?(Ie>0?"+":"")+Ie.toFixed(2):"—",he=Ie===null?"var(--muted)":Ie>0?"#2aaa5a":Ie<0?"var(--danger)":"var(--muted)";J.innerHTML=`<div class="card" style="margin-bottom:16px;">
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
`}const l=c.scores.map(C=>(C||[null,null])[0]).filter(C=>C!=null),d=c.scores.map(C=>(C||[null,null])[1]).filter(C=>C!=null),f=c.scores.flat().filter(C=>C!=null),p=l.length?(l.reduce((C,P)=>C+Ne(P),0)/l.length).toFixed(2):"—",_=d.length?(d.reduce((C,P)=>C+Ne(P),0)/d.length).toFixed(2):"—",T=f.length?(f.reduce((C,P)=>C+Ne(P),0)/f.length).toFixed(2):"—",x=Pl(c.scores);t+="  Total: "+Je(c.scores)+` point
`,t+="  Snit pil 1: "+p+" | Snit pil 2: "+_+" | Samlet snit: "+T+`
`,t+="  Fordeling: "+Object.entries(x).map(([C,P])=>C+":"+P+"x").join("  ")+`
`}),n.id&&(t+=`

Se resultater i appen:
https://bsk65.github.io/3D/?round=${n.id}
(Kræver login med din bruger)`);const s=n.shooters.map(c=>{var l;return(l=g.friends.find(d=>d.id===c.id))==null?void 0:l.email}).filter(Boolean),i="3D Bueskydning - "+n.name,o="mailto:"+s.join(",")+"?subject="+encodeURIComponent(i)+"&body="+encodeURIComponent(t);window.location.href=o};async function LA(n,e){const t=de(ne,"courses",n),r=await Qs(t);if(!r.exists())return;const s=(r.data().visits||[]).filter(o=>o.roundId!==e);await Jt(t,{visits:s});const i=g.courses.find(o=>o.id===n);i&&(i.visits=s)}window.openGuestModal=function(){document.getElementById("guest-name").value="",document.getElementById("guest-modal").classList.remove("hidden")};window.addGuest=function(){const n=document.getElementById("guest-name").value.trim();n&&(window.addParticipant(`guest-${Date.now()}`,n,!0),document.getElementById("guest-modal").classList.add("hidden"))};
