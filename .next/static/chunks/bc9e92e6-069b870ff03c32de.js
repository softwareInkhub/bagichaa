"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4358],{9978:function(e,t,n){n.d(t,{ET:function(){return aa},IO:function(){return sW},JU:function(){return sl},PL:function(){return ar},QT:function(){return at},Xo:function(){return sZ},ad:function(){return sm},ar:function(){return sX},b9:function(){return s1},cf:function(){return ao},hJ:function(){return so},nP:function(){return ad},oe:function(){return as},qs:function(){return af},r7:function(){return ai}});var r,i,s,a,o=n(3991),l=n(5538),u=n(6914),h=n(1674),c=n(3172),d=n(4203);n(2601);var f=n(263).Buffer;let m="@firebase/firestore",g="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}p.UNAUTHENTICATED=new p(null),p.GOOGLE_CREDENTIALS=new p("google-credentials-uid"),p.FIRST_PARTY=new p("first-party-uid"),p.MOCK_USER=new p("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y="11.10.0",v=new u.Yd("@firebase/firestore");function w(){return v.logLevel}function _(e,...t){if(v.logLevel<=u.in.DEBUG){let n=t.map(I);v.debug(`Firestore (${y}): ${e}`,...n)}}function E(e,...t){if(v.logLevel<=u.in.ERROR){let n=t.map(I);v.error(`Firestore (${y}): ${e}`,...n)}}function T(e,...t){if(v.logLevel<=u.in.WARN){let n=t.map(I);v.warn(`Firestore (${y}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,S(e,r,n)}function S(e,t,n){let r=`FIRESTORE (${y}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw E(r),Error(r)}function b(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||S(t,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(p.UNAUTHENTICATED))}shutdown(){}}class R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V{constructor(e){this.t=e,this.currentUser=p.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){b(void 0===this.o,42304);let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new D;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new D,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new D)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken,31837,{l:t}),new k(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e,2055,{h:e}),new p(e)}}class O{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=p.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class L{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new O(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(p.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){b(void 0===this.o,3512);let n=e=>{null!=e.error&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,_("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new F(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new F(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function M(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function q(e,t){return e<t?-1:e>t?1:0}function $(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return q(r,i);{let s=M(),a=function(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return q(e[n],t[n]);return q(e.length,t.length)}(s.encode(B(e,n)),s.encode(B(t,n)));return 0!==a?a:q(r,i)}}n+=r>65535?2:1}return q(e.length,t.length)}function B(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function z(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j="__name__";class G{constructor(e,t,n){void 0===t?t=0:t>e.length&&C(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&C(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===G.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof G?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=G.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return q(e.length,t.length)}static compareSegments(e,t){let n=G.isNumericId(e),r=G.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?G.extractNumericId(e).compare(G.extractNumericId(t)):$(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return c.z8.fromString(e.substring(4,e.length-2))}}class K extends G{construct(e,t,n){return new K(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new N(A.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new K(t)}static emptyPath(){return new K([])}}let Q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends G{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return Q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===j}static keyField(){return new W([j])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new N(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new N(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new N(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new N(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(K.fromString(e))}static fromName(e){return new H(K.fromString(e).popFirst(5))}static empty(){return new H(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===K.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new K(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t,n){if(!n)throw new N(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Y(e){if(!H.isDocumentKey(e))throw new N(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function J(e){if(H.isDocumentKey(e))throw new N(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Z(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function ee(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":C(12329,{type:typeof e})}function et(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new N(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ee(e);throw new N(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){let n={typeString:e};return t&&(n.value=t),n}function er(e,t){let n;if(!Z(e))throw new N(A.INVALID_ARGUMENT,"JSON must be an object");for(let r in t)if(t[r]){let i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new N(A.INVALID_ARGUMENT,n);return!0}class ei{static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new ei(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new N(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new N(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ei._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(er(e,ei._jsonSchema))return new ei(e.seconds,e.nanoseconds)}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ei._jsonSchemaVersion="firestore/timestamp/1.0",ei._jsonSchema={type:en("string",ei._jsonSchemaVersion),seconds:en("number"),nanoseconds:en("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static fromTimestamp(e){return new es(e)}static min(){return new es(new ei(0,0))}static max(){return new es(new ei(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class ea{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ea.UNKNOWN_ID=-1;class eo{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new eo(es.min(),H.empty(),-1)}static max(){return new eo(es.max(),H.empty(),-1)}}class el{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(e){if(e.code!==A.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new eh((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof eh?t:eh.resolve(t)}catch(e){return eh.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):eh.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):eh.reject(t)}static resolve(e){return new eh((t,n)=>{t(e)})}static reject(e){return new eh((t,n)=>{n(e)})}static waitFor(e){return new eh((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=eh.resolve(!1);for(let n of e)t=t.next(e=>e?eh.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new eh((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new eh((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function ec(e){return"IndexedDbTransactionError"===e.name}/**
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
 */class ed{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this._e(e),this.ae=e=>t.writeSequenceNumber(e))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}}function ef(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eg(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ep(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}ed.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){this.comparator=e,this.root=t||ew.EMPTY}insert(e,t){return new ey(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ew.BLACK,null,null))}remove(e){return new ey(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ew.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ev(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ev(this.root,e,this.comparator,!1)}getReverseIterator(){return new ev(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ev(this.root,e,this.comparator,!0)}}class ev{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ew{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ew.RED,this.left=null!=r?r:ew.EMPTY,this.right=null!=i?i:ew.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ew(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ew.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ew.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ew.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ew.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw C(43730,{key:this.key,value:this.value});if(this.right.isRed())throw C(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw C(27949);return e+(this.isRed()?0:1)}}ew.EMPTY=null,ew.RED=!0,ew.BLACK=!1,ew.EMPTY=new class{constructor(){this.size=0}get key(){throw C(57766)}get value(){throw C(16141)}get color(){throw C(16727)}get left(){throw C(29726)}get right(){throw C(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new ew(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.comparator=e,this.data=new ey(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eE(this.data.getIterator())}getIteratorFrom(e){return new eE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof e_)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new e_(this.comparator);return t.data=e,t}}class eE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new eT([])}unionWith(e){let t=new e_(W.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eT(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return z(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class eI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.binaryString=e}static fromBase64String(e){return new eC(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eI("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eC(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eC.EMPTY_BYTE_STRING=new eC("");let eS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eb(e){if(b(!!e,39018),"string"==typeof e){let t=0,n=eS.exec(e);if(b(!!n,46558,{timestamp:e}),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:eA(e.seconds),nanos:eA(e.nanos)}}function eA(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eN(e){return"string"==typeof e?eC.fromBase64String(e):eC.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eD="server_timestamp",ek="__type__",ex="__previous_value__",eR="__local_write_time__";function eV(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[ek])||void 0===n?void 0:n.stringValue)===eD}function eO(e){let t=e.mapValue.fields[ex];return eV(t)?eO(t):t}function eL(e){let t=eb(e.mapValue.fields[eR].timestampValue);return new ei(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,t,n,r,i,s,a,o,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u}}let eP="(default)";class eM{constructor(e,t){this.projectId=e,this.database=t||eP}static empty(){return new eM("","")}get isDefaultDatabase(){return this.database===eP}isEqual(e){return e instanceof eM&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eU="__type__",eq="__max__",e$={mapValue:{fields:{__type__:{stringValue:eq}}}},eB="__vector__",ez="value";function ej(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eV(e)?4:e9(e)?9007199254740991:e3(e)?10:11:C(28295,{value:e})}function eG(e,t){if(e===t)return!0;let n=ej(e);if(n!==ej(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eL(e).isEqual(eL(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eb(e.timestampValue),r=eb(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eN(e.bytesValue).isEqual(eN(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eA(e.geoPointValue.latitude)===eA(t.geoPointValue.latitude)&&eA(e.geoPointValue.longitude)===eA(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eA(e.integerValue)===eA(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eA(e.doubleValue),r=eA(t.doubleValue);return n===r?ef(n)===ef(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return z(e.arrayValue.values||[],t.arrayValue.values||[],eG);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(em(n)!==em(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eG(n[e],r[e])))return!1;return!0}(e,t);default:return C(52216,{left:e})}}function eK(e,t){return void 0!==(e.values||[]).find(e=>eG(e,t))}function eQ(e,t){if(e===t)return 0;let n=ej(e),r=ej(t);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eA(e.integerValue||e.doubleValue),r=eA(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eW(e.timestampValue,t.timestampValue);case 4:return eW(eL(e),eL(t));case 5:return $(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eN(e),r=eN(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=q(n[e],r[e]);if(0!==t)return t}return q(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=q(eA(e.latitude),eA(t.latitude));return 0!==n?n:q(eA(e.longitude),eA(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eH(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let a=e.fields||{},o=t.fields||{},l=null===(n=a[ez])||void 0===n?void 0:n.arrayValue,u=null===(r=o[ez])||void 0===r?void 0:r.arrayValue,h=q((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eH(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===e$.mapValue&&t===e$.mapValue)return 0;if(e===e$.mapValue)return 1;if(t===e$.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=$(r[e],s[e]);if(0!==t)return t;let a=eQ(n[r[e]],i[s[e]]);if(0!==a)return a}return q(r.length,s.length)}(e.mapValue,t.mapValue);default:throw C(23264,{le:n})}}function eW(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return q(e,t);let n=eb(e),r=eb(t),i=q(n.seconds,r.seconds);return 0!==i?i:q(n.nanos,r.nanos)}function eH(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eQ(n[e],r[e]);if(t)return t}return q(n.length,r.length)}function eX(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eb(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eN(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,H.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eX(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eX(e.fields[i])}`;return n+"}"}(e.mapValue):C(61005,{value:e})}function eY(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eJ(e){return!!e&&"integerValue"in e}function eZ(e){return!!e&&"arrayValue"in e}function e0(e){return!!e&&"nullValue"in e}function e1(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e2(e){return!!e&&"mapValue"in e}function e3(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eU])||void 0===n?void 0:n.stringValue)===eB}function e4(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eg(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=e4(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=e4(e.arrayValue.values[n]);return t}return Object.assign({},e)}function e9(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eq}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.value=e}static empty(){return new e6({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!e2(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=e4(t)}setAll(e){let t=W.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=e4(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());e2(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eG(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];e2(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eg(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new e6(e4(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new e5(e,0,es.min(),es.min(),es.min(),e6.empty(),0)}static newFoundDocument(e,t,n,r){return new e5(e,1,t,es.min(),n,r,0)}static newNoDocument(e,t){return new e5(e,2,t,es.min(),es.min(),e6.empty(),0)}static newUnknownDocument(e,t){return new e5(e,3,t,es.min(),es.min(),e6.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(es.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=e6.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=e6.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=es.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof e5&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new e5(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class e8{constructor(e,t){this.position=e,this.inclusive=t}}function e7(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?H.comparator(H.fromName(a.referenceValue),n.key):eQ(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function te(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eG(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tt{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class tn{}class tr extends tn{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new to(e,t,n):"array-contains"===t?new tc(e,n):"in"===t?new td(e,n):"not-in"===t?new tf(e,n):"array-contains-any"===t?new tm(e,n):new tr(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tl(e,n):new tu(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(eQ(t,this.value)):null!==t&&ej(this.value)===ej(t)&&this.matchesComparison(eQ(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ti extends tn{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ti(e,t)}matches(e){return ts(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ts(e){return"and"===e.op}function ta(e){for(let t of e.filters)if(t instanceof ti)return!1;return!0}class to extends tr{constructor(e,t,n){super(e,t,n),this.key=H.fromName(n.referenceValue)}matches(e){let t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class tl extends tr{constructor(e,t){super(e,"in",t),this.keys=th("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tu extends tr{constructor(e,t){super(e,"not-in",t),this.keys=th("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function th(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>H.fromName(e.referenceValue))}class tc extends tr{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eZ(t)&&eK(t.arrayValue,this.value)}}class td extends tr{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eK(this.value.arrayValue,t)}}class tf extends tr{constructor(e,t){super(e,"not-in",t)}matches(e){if(eK(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!eK(this.value.arrayValue,t)}}class tm extends tr{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eZ(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eK(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Pe=null}}function tp(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tg(e,t,n,r,i,s,a)}function ty(e){if(null===e.Pe){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tr)return t.field.canonicalString()+t.op.toString()+eX(t.value);if(ta(t)&&ts(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eX(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eX(e)).join(",")),e.Pe=t}return e.Pe}function tv(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tr?n instanceof tr&&t.op===n.op&&t.field.isEqual(n.field)&&eG(t.value,n.value):t instanceof ti?n instanceof ti&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void C(19439)}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!te(e.startAt,t.startAt)&&te(e.endAt,t.endAt)}function tw(e){return H.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function tE(e){return new t_(e)}function tT(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tI(e){return null!==e.collectionGroup}function tC(e){if(null===e.Te){let t;e.Te=[];let n=new Set;for(let t of e.explicitOrderBy)e.Te.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new e_(W.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.Te.push(new tt(t,r))}),n.has(W.keyField().canonicalString())||e.Te.push(new tt(W.keyField(),r))}return e.Te}function tS(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return tp(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new tt(e.field,t)});let n=e.endAt?new e8(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new e8(e.startAt.position,e.startAt.inclusive):null;return tp(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,tC(e))),e.Ie}function tb(e,t){let n=e.filters.concat([t]);return new t_(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tA(e,t,n){return new t_(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tN(e,t){return tv(tS(e),tS(t))&&e.limitType===t.limitType}function tD(e){return`${ty(tS(e))}|lt:${e.limitType}`}function tk(e){var t;let n;return`Query(target=${n=(t=tS(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tr?`${t.field.canonicalString()} ${t.op} ${eX(t.value)}`:t instanceof ti?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eX(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eX(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tx(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):H.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tC(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=e7(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tC(e),t))&&(!e.endAt||!!function(e,t,n){let r=e7(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tC(e),t))}function tR(e){return(t,n)=>{let r=!1;for(let i of tC(e)){let e=function(e,t,n){let r=e.field.isKeyField()?H.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eQ(r,i):C(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return C(19790,{direction:e.dir})}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eg(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return ep(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO=new ey(H.comparator),tL=new ey(H.comparator);function tF(...e){let t=tL;for(let n of e)t=t.insert(n.key,n);return t}function tP(e){let t=tL;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tM(){return new tV(e=>e.toString(),(e,t)=>e.isEqual(t))}let tU=new ey(H.comparator),tq=new e_(H.comparator);function t$(...e){let t=tq;for(let n of e)t=t.add(n);return t}let tB=new e_(q);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tz(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ef(t)?"-0":t}}function tj(e){return{integerValue:""+e}}function tG(e,t){return"number"==typeof t&&Number.isInteger(t)&&!ef(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER?tj(t):tz(e,t)}/**
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
 */class tK{constructor(){this._=void 0}}function tQ(e,t){return e instanceof tZ?eJ(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tW extends tK{}class tH extends tK{constructor(e){super(),this.elements=e}}function tX(e,t){let n=t1(t);for(let t of e.elements)n.some(e=>eG(e,t))||n.push(t);return{arrayValue:{values:n}}}class tY extends tK{constructor(e){super(),this.elements=e}}function tJ(e,t){let n=t1(t);for(let t of e.elements)n=n.filter(e=>!eG(e,t));return{arrayValue:{values:n}}}class tZ extends tK{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function t0(e){return eA(e.integerValue||e.doubleValue)}function t1(e){return eZ(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,t){this.field=e,this.transform=t}}class t3{constructor(e,t){this.version=e,this.transformResults=t}}class t4{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new t4}static exists(e){return new t4(void 0,e)}static updateTime(e){return new t4(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function t9(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class t6{}function t5(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ns(e.key,t4.none()):new ne(e.key,e.data,t4.none());{let n=e.data,r=e6.empty(),i=new e_(W.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nt(e.key,r,new eT(i.toArray()),t4.none())}}function t8(e,t,n,r){return e instanceof ne?function(e,t,n,r){if(!t9(e.precondition,t))return n;let i=e.value.clone(),s=ni(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nt?function(e,t,n,r){if(!t9(e.precondition,t))return n;let i=ni(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nn(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):t9(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function t7(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&z(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tH&&r instanceof tH||n instanceof tY&&r instanceof tY?z(n.elements,r.elements,eG):n instanceof tZ&&r instanceof tZ?eG(n.Ee,r.Ee):n instanceof tW&&r instanceof tW)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ne extends t6{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nt extends t6{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nn(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nr(e,t,n){let r=new Map;b(e.length===n.length,32656,{Ae:n.length,Re:e.length});for(let s=0;s<n.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof tH?tX(o,l):o instanceof tY?tJ(o,l):i))}return r}function ni(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tW?function(e,t){let n={fields:{[ek]:{stringValue:eD},[eR]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eV(t)&&(t=eO(t)),t&&(n.fields[ex]=t),{mapValue:n}}(t,s):e instanceof tH?tX(e,s):e instanceof tY?tJ(e,s):function(e,t){let n=tQ(e,t),r=t0(n)+t0(e.Ee);return eJ(n)&&eJ(e.Ee)?tj(r):tz(e.serializer,r)}(e,s))}return r}class ns extends t6{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class na extends t6{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof ne?function(e,t,n){let r=e.value.clone(),i=nr(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nt?function(e,t,n){if(!t9(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nr(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=t8(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=t8(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tM();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=t5(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(es.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),t$())}isEqual(e){return this.batchId===e.batchId&&z(this.mutations,e.mutations,(e,t)=>t7(e,t))&&z(this.baseMutations,e.baseMutations,(e,t)=>t7(e,t))}}class nl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let r=tU,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nl(e,t,n,r)}}/**
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
 */class nu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nh{constructor(e,t){this.count=e,this.unchangedNames=t}}function nc(e){if(void 0===e)return E("GRPC error has no .code"),A.UNKNOWN;switch(e){case r.OK:return A.OK;case r.CANCELLED:return A.CANCELLED;case r.UNKNOWN:return A.UNKNOWN;case r.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case r.INTERNAL:return A.INTERNAL;case r.UNAVAILABLE:return A.UNAVAILABLE;case r.UNAUTHENTICATED:return A.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case r.NOT_FOUND:return A.NOT_FOUND;case r.ALREADY_EXISTS:return A.ALREADY_EXISTS;case r.PERMISSION_DENIED:return A.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case r.ABORTED:return A.ABORTED;case r.OUT_OF_RANGE:return A.OUT_OF_RANGE;case r.UNIMPLEMENTED:return A.UNIMPLEMENTED;case r.DATA_LOSS:return A.DATA_LOSS;default:return C(39323,{code:e})}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let nd=new c.z8([4294967295,4294967295],0);function nf(e){let t=M().encode(e),n=new c.V8;return n.update(t),new Uint8Array(n.digest())}function nm(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.z8([n,r],0),new c.z8([i,s],0)]}class ng{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new np(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new np(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new np(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=c.z8.fromNumber(this.fe)}pe(e,t,n){let r=e.add(t.multiply(c.z8.fromNumber(n)));return 1===r.compare(nd)&&(r=new c.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.fe)return!1;let[t,n]=nm(nf(e));for(let e=0;e<this.hashCount;e++){let r=this.pe(t,n,e);if(!this.ye(r))return!1}return!0}static create(e,t,n){let r=new ng(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.fe)return;let[t,n]=nm(nf(e));for(let e=0;e<this.hashCount;e++){let r=this.pe(t,n,e);this.we(r)}}we(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class np extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nv.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ny(es.min(),r,new ey(q),tO,t$())}}class nv{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nv(n,t,t$(),t$(),t$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=r}}class n_{constructor(e,t){this.targetId=e,this.De=t}}class nE{constructor(e,t,n=eC.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nT{constructor(){this.ve=0,this.Ce=nS(),this.Fe=eC.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return 0!==this.ve}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=t$(),t=t$(),n=t$();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:C(38017,{changeType:i})}}),new nv(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=nS()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,b(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class nI{constructor(e){this.We=e,this.Ge=new Map,this.ze=tO,this.je=nC(),this.Je=nC(),this.He=new ey(q)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:C(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){let t=e.targetId,n=e.De.count,r=this.st(t);if(r){let i=r.target;if(tw(i)){if(0===n){let e=new H(i.path);this.Xe(t,e,e5.newNoDocument(e,es.min()))}else b(1===n,20013,{expectedCount:n})}else{let r=this.ot(t);if(r!==n){let n=this._t(e),i=n?this.ut(n,e,r):1;0!==i&&(this.rt(t),this.He=this.He.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}_t(e){let t,n;let r=e.De.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=eN(i).toUint8Array()}catch(e){if(e instanceof eI)return T("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new ng(t,s,a)}catch(e){return T(e instanceof np?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.fe?null:n}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){let n=this.We.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.We.lt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Xe(t,n,null),r++)}),r}Pt(e){let t=new Map;this.Ge.forEach((n,r)=>{let i=this.st(r);if(i){if(n.current&&tw(i.target)){let t=new H(i.target.path);this.Tt(t).has(r)||this.It(r,t)||this.Xe(r,t,e5.newNoDocument(t,e))}n.Ne&&(t.set(r,n.Le()),n.ke())}});let n=t$();this.Je.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ze.forEach((t,n)=>n.setReadTime(e));let r=new ny(e,t,this.He,this.ze,n);return this.ze=tO,this.je=nC(),this.Je=nC(),this.He=new ey(q),r}Ze(e,t){if(!this.nt(e))return;let n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;let r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new nT,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new e_(q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new e_(q),this.je=this.je.insert(e,t)),t}nt(e){let t=null!==this.st(e);return t||_("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new nT),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function nC(){return new ey(H.comparator)}function nS(){return new ey(H.comparator)}let nb={asc:"ASCENDING",desc:"DESCENDING"},nA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nN={and:"AND",or:"OR"};class nD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nk(e,t){return e.useProto3Json||null==t?t:{value:t}}function nx(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nR(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nV(e){return b(!!e,49232),es.fromTimestamp(function(e){let t=eb(e);return new ei(t.seconds,t.nanos)}(e))}function nO(e,t){return nL(e,t).canonicalString()}function nL(e,t){let n=new K(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nF(e){let t=K.fromString(e);return b(nG(t),10190,{key:t.toString()}),t}function nP(e,t){return nO(e.databaseId,t.path)}function nM(e,t){let n=nF(t);if(n.get(1)!==e.databaseId.projectId)throw new N(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new N(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new H(n$(n))}function nU(e,t){return nO(e.databaseId,t)}function nq(e){return new K(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function n$(e){return b(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function nB(e,t,n){return{name:nP(e,t),fields:n.value.mapValue.fields}}function nz(e){return{fieldPath:e.canonicalString()}}function nj(e){return W.fromServerFormat(e.fieldPath)}function nG(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t,n,r,i=es.min(),s=es.min(),a=eC.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new nK(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nK(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nK(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nK(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e){this.gt=e}}/**
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
 */class nW{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(eA(e.integerValue));else if("doubleValue"in e){let n=eA(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),ef(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),"string"==typeof n&&(n=eb(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(eN(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?e9(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):e3(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):C(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let n=e.fields||{};for(let e of(this.Ct(t,55),Object.keys(n)))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){var n,r;let i=e.fields||{};this.Ct(t,53);let s=(null===(r=null===(n=i[ez].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Ct(t,15),t.Ft(eA(s)),this.xt(ez,t),this.Dt(i[ez],t)}qt(e,t){let n=e.values||[];for(let e of(this.Ct(t,50),n))this.Dt(e,t)}Bt(e,t){this.Ct(t,37),H.fromName(e).path.forEach(e=>{this.Ct(t,60),this.$t(e,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}nW.Ut=new nW;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(){this.Dn=new nX}addToCollectionParentIndex(e,t){return this.Dn.add(t),eh.resolve()}getCollectionParents(e,t){return eh.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return eh.resolve()}deleteFieldIndex(e,t){return eh.resolve()}deleteAllFieldIndexes(e){return eh.resolve()}createTargetIndexes(e,t){return eh.resolve()}getDocumentsMatchingTarget(e,t){return eh.resolve(null)}getIndexType(e,t){return eh.resolve(0)}getFieldIndexes(e,t){return eh.resolve([])}getNextCollectionGroupToUpdate(e){return eh.resolve(null)}getMinOffset(e,t){return eh.resolve(eo.min())}getMinOffsetFromCollectionGroup(e,t){return eh.resolve(eo.min())}updateCollectionGroup(e,t,n){return eh.resolve()}updateIndexEntries(e,t){return eh.resolve()}}class nX{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new e_(K.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new e_(K.comparator)).toArray()}}new Uint8Array(0);/**
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
 */let nY={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nJ{static withCacheSize(e){return new nJ(e,nJ.DEFAULT_COLLECTION_PERCENTILE,nJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nJ.DEFAULT_COLLECTION_PERCENTILE=10,nJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nJ.DEFAULT=new nJ(41943040,nJ.DEFAULT_COLLECTION_PERCENTILE,nJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nJ.DISABLED=new nJ(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new nZ(0)}static ur(){return new nZ(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0="LruGarbageCollector";function n1([e,t],[n,r]){let i=q(e,n);return 0===i?q(t,r):i}class n2{constructor(e){this.Tr=e,this.buffer=new e_(n1),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>n1(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class n3{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return null!==this.Ar}Rr(e){_(n0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ec(e)?_(n0,"Ignoring IndexedDB error during garbage collection: ",e):await eu(e)}await this.Rr(3e5)})}}class n4{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return eh.resolve(ed.ue);let n=new n2(t);return this.Vr.forEachTarget(e,e=>n.Er(e.sequenceNumber)).next(()=>this.Vr.gr(e,e=>n.Er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector","Garbage collection skipped; disabled"),eh.resolve(nY)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nY):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,r,i,s,a,o,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),w()<=u.in.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-h}ms`),eh.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(){this.changes=new tV(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,e5.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?eh.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n6{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&t8(n.mutation,e,eT.empty(),ei.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,t$()).next(()=>t))}getLocalViewOfDocuments(e,t,n=t$()){let r=tM();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tF();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tM();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,t$()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tO,s=tM(),a=tM();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nt)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),t8(a.mutation,t,a.mutation.getFieldMask(),ei.now())):s.set(t.key,eT.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new n6(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tM(),r=new ey((e,t)=>e-t),i=t$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eT.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||t$()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tM();l.forEach(e=>{if(!i.has(e)){let r=t5(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return eh.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return H.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):eh.resolve(tM()),a=-1,o=i;return s.next(t=>eh.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?eh.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,t$())).next(e=>({batchId:a,changes:tP(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(e=>{let t=tF();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tF();return this.indexManager.getCollectionParents(e,i).next(a=>eh.forEach(a,a=>{let o=new t_(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,e5.newInvalidDocument(r)))});let n=tF();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&t8(s.mutation,r,eT.empty(),ei.now()),tx(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return eh.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,{id:t.id,version:t.version,createTime:nV(t.createTime)}),eh.resolve()}getNamedQuery(e,t){return eh.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=nF(e);return 4===t.length?K.emptyPath():n$(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){b(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nj(e.unaryFilter.field);return tr.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nj(e.unaryFilter.field);return tr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nj(e.unaryFilter.field);return tr.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nj(e.unaryFilter.field);return tr.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return C(61313);default:return C(60726)}}(t):void 0!==t.fieldFilter?tr.create(nj(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return C(58110);default:return C(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?ti.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C(1026)}}(t.compositeFilter.op)):C(30097,{filter:t})}(e);return n instanceof ti&&ta(t=n)&&ts(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new tt(nj(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new e8(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new e8(e.values||[],t)}(i.endAt)),new t_(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tA(t,t.limit,"L"):t}(t.bundledQuery),readTime:nV(t.readTime)}),eh.resolve()}}/**
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
 */class n7{constructor(){this.overlays=new ey(H.comparator),this.kr=new Map}getOverlay(e,t){return eh.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tM();return eh.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),eh.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.kr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.kr.delete(n)),eh.resolve()}getOverlaysForCollection(e,t,n){let r=tM(),i=t.length+1,s=new H(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return eh.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ey((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tM(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tM(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return eh.resolve(a)}wt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.kr.get(r.largestBatchId).delete(n.key);this.kr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nu(t,n));let i=this.kr.get(t);void 0===i&&(i=t$(),this.kr.set(t,i)),this.kr.set(t,i.add(n.key))}}/**
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
 */class re{constructor(){this.sessionToken=eC.EMPTY_BYTE_STRING}getSessionToken(e){return eh.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,eh.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.qr=new e_(rn.Qr),this.$r=new e_(rn.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let n=new rn(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new rn(e,t))}Gr(e,t){e.forEach(e=>this.removeReference(e,t))}zr(e){let t=new H(new K([])),n=new rn(t,e),r=new rn(t,e+1),i=[];return this.$r.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new H(new K([])),n=new rn(t,e),r=new rn(t,e+1),i=t$();return this.$r.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new rn(e,0),n=this.qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class rn{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return H.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new e_(rn.Qr)}checkEmpty(e){return eh.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new no(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Yr=this.Yr.add(new rn(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return eh.resolve(s)}lookupMutationBatch(e,t){return eh.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Xr(t+1),r=n<0?0:n;return eh.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return eh.resolve(0===this.mutationQueue.length?-1:this.er-1)}getAllMutationBatches(e){return eh.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new rn(t,0),r=new rn(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,r],e=>{let t=this.Zr(e.Hr);i.push(t)}),eh.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new e_(q);return t.forEach(e=>{let t=new rn(e,0),r=new rn(e,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([t,r],e=>{n=n.add(e.Hr)})}),eh.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;H.isDocumentKey(i)||(i=i.child(""));let s=new rn(new H(i),0),a=new e_(q);return this.Yr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Hr)),!0)},s),eh.resolve(this.ei(a))}ei(e){let t=[];return e.forEach(e=>{let n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.ti(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Yr;return eh.forEach(t.mutations,r=>{let i=new rn(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){let n=new rn(t,0),r=this.Yr.firstAfterOrEqual(n);return eh.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,eh.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.ni=e,this.docs=new ey(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return eh.resolve(n?n.document.mutableCopy():e5.newInvalidDocument(t))}getEntries(e,t){let n=tO;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():e5.newInvalidDocument(e))}),eh.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tO,s=t.path,a=new H(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=H.comparator(e.documentKey,t.documentKey))?n:q(e.largestBatchId,t.largestBatchId)}(new eo(a.readTime,a.key,-1),n)||(r.has(a.key)||tx(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return eh.resolve(i)}getAllFromCollectionGroup(e,t,n,r){C(9500)}ri(e,t){return eh.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rs(this)}getSize(e){return eh.resolve(this.size)}}class rs extends n9{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(n)}),eh.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.persistence=e,this.ii=new tV(e=>ty(e),tv),this.lastRemoteSnapshotVersion=es.min(),this.highestTargetId=0,this.si=0,this.oi=new rt,this.targetCount=0,this._i=nZ.ar()}forEachTarget(e,t){return this.ii.forEach((e,n)=>t(n)),eh.resolve()}getLastRemoteSnapshotVersion(e){return eh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return eh.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),eh.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),eh.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new nZ(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,eh.resolve()}updateTargetData(e,t){return this.hr(t),eh.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,eh.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.ii.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.ii.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),eh.waitFor(i).next(()=>r)}getTargetCount(e){return eh.resolve(this.targetCount)}getTargetData(e,t){let n=this.ii.get(t)||null;return eh.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),eh.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),eh.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),eh.resolve()}getMatchingKeysForTargetId(e,t){let n=this.oi.Jr(t);return eh.resolve(n)}containsKey(e,t){return eh.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.ai={},this.overlays={},this.ui=new ed(0),this.ci=!1,this.ci=!0,this.li=new re,this.referenceDelegate=e(this),this.hi=new ra(this),this.indexManager=new nH,this.remoteDocumentCache=new ri(e=>this.referenceDelegate.Pi(e)),this.serializer=new nQ(t),this.Ti=new n8(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n7,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new rr(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){_("MemoryPersistence","Starting transaction:",e);let r=new rl(this.ui.next());return this.referenceDelegate.Ii(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ei(e,t){return eh.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class rl extends el{constructor(e){super(),this.currentSequenceNumber=e}}class ru{constructor(e){this.persistence=e,this.Ai=new rt,this.Ri=null}static Vi(e){return new ru(e)}get mi(){if(this.Ri)return this.Ri;throw C(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),eh.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),eh.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),eh.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(e=>this.mi.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.mi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return eh.forEach(this.mi,n=>{let r=H.fromPath(n);return this.fi(e,r).next(e=>{e||t.removeEntry(r,es.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(e=>{e?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return eh.or([()=>eh.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class rh{constructor(e,t){this.persistence=e,this.gi=new tV(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new n4(this,t)}static Vi(e,t){return new rh(e,t)}Ii(){}di(e){return eh.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}gr(e,t){return eh.forEach(this.gi,(n,r)=>this.Sr(e,n,r).next(e=>e?eh.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,r=>this.Sr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,es.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),eh.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),eh.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),eh.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),eh.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(ej(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=eO(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return eN(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,eg(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw C(13486,{value:t})}}(e.data.value)),t}Sr(e,t,n){return eh.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.gi.get(t);return eh.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=r}static Es(e,t){let n=t$(),r=t$();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new rc(e,t.fromCache,n,r)}}/**
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
 */class rd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.z$)())>0?6:4}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ps(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ys(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new rd;return this.ws(e,t,n).next(r=>{if(i.result=r,this.Rs)return this.Ss(e,t,n,r.size)})}).next(()=>i.result)}Ss(e,t,n,r){return n.documentReadCount<this.Vs?(w()<=u.in.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",tk(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),eh.resolve()):(w()<=u.in.DEBUG&&_("QueryEngine","Query:",tk(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.fs*r?(w()<=u.in.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",tk(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tS(t))):eh.resolve())}ps(e,t){if(tT(t))return eh.resolve(null);let n=tS(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tS(t=tA(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=t$(...r);return this.gs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.bs(t,r);return this.Ds(t,s,i,n.readTime)?this.ps(e,tA(t,null,"F")):this.vs(e,s,t,n)}))})))}ys(e,t,n,r){return tT(t)||r.isEqual(es.min())?eh.resolve(null):this.gs.getDocuments(e,n).next(i=>{let s=this.bs(t,i);return this.Ds(t,s,n,r)?eh.resolve(null):(w()<=u.in.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tk(t)),this.vs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new eo(es.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r)),H.empty(),-1)}(r,0)).next(e=>e))})}bs(e,t){let n=new e_(tR(e));return t.forEach((t,r)=>{tx(e,r)&&(n=n.add(r))}),n}Ds(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,n){return w()<=u.in.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",tk(t)),this.gs.getDocumentsMatchingQuery(e,t,eo.min(),n)}vs(e,t,n,r){return this.gs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rm="LocalStore";class rg{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new ey(q),this.Ms=new tV(e=>ty(e),tv),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n5(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}async function rp(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Ns(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=t$();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Bs:e,removedBatchIds:i,addedBatchIds:s}))})})}function ry(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}async function rv(e,t,n){let r=e.Fs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!ec(e))throw e;_(rm,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Fs=e.Fs.remove(t),e.Ms.delete(r.target)}function rw(e,t,n){let r=es.min(),i=t$();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.Ms.get(n);return void 0!==r?eh.resolve(e.Fs.get(r)):e.hi.getTargetData(t,n)})(e,s,tS(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.hi.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Cs.getDocumentsMatchingQuery(s,t,n?r:es.min(),n?i:t$())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.xs.get(r)||es.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.xs.set(r,s),{documents:n,qs:i}}))}class r_{constructor(){this.activeTargetIds=tB}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rE{constructor(){this.Fo=new r_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new r_,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI="ConnectivityMonitor";class rC{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){for(let e of(_(rI,"Network connectivity changed: AVAILABLE"),this.ko))e(0)}Lo(){for(let e of(_(rI,"Network connectivity changed: UNAVAILABLE"),this.ko))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let rS=null;function rb(){return null===rS?rS=268435456+Math.round(2147483648*Math.random()):rS++,"0x"+rS.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rA="RestConnection",rN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.Ko=this.databaseId.database===eP?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){let s=rb(),a=this.Go(e,t.toUriEncodedString());_(rA,`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(o,r,i);let{host:l}=new URL(a),u=(0,h.Xx)(l);return this.jo(e,a,o,n,u).then(t=>(_(rA,`Received RPC '${e}' ${s}: `,t),t),t=>{throw T(rA,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Jo(e,t,n,r,i,s){return this.Wo(e,t,n,r,i)}zo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+y,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Go(e,t){let n=rN[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rx="WebChannelConnection";class rR extends rD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,r,i){let s=rb();return new Promise((i,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();_(rx,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.jK.TIMEOUT:_(rx,`RPC '${e}' ${s} timed out`),a(new N(A.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let n=o.getStatus();if(_(rx,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(t)>=0?t:A.UNKNOWN}(t.status);a(new N(e,t.message))}else a(new N(A.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new N(A.UNAVAILABLE,"Connection failed."));break;default:C(9055,{c_:e,streamId:s,l_:o.getLastErrorCode(),h_:o.getLastError()})}}finally{_(rx,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);_(rx,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}P_(e,t,n){let i=rb(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");_(rx,`Creating RPC '${e}' stream ${i}: ${h}`,l);let c=a.createWebChannel(h,l);this.T_(c);let f=!1,m=!1,g=new rk({Ho:t=>{m?_(rx,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(_(rx,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),_(rx,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Yo:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{m||(_(rx,`RPC '${e}' stream ${i} transport opened.`),g.s_())}),p(c,d.ii.EventType.CLOSE,()=>{m||(m=!0,_(rx,`RPC '${e}' stream ${i} transport closed`),g.__(),this.I_(c))}),p(c,d.ii.EventType.ERROR,t=>{m||(m=!0,T(rx,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),g.__(new N(A.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];b(!!s,16349);let a=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){_(rx,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nc(t)}(t),s=a.message;void 0===n&&(n=A.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.__(new N(n,s)),c.close()}else _(rx,`RPC '${e}' stream ${i} received:`,s),g.a_(s)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?_(rx,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===d.kN.NOPROXY&&_(rx,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.o_()},0),g}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function rV(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(e){return new nD(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rF="PersistentStream";class rP{constructor(e,t,n,r,i,s,a,o){this.Fi=e,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new rL(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.C_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===A.RESOURCE_EXHAUSTED?(E(t.toString()),E("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===A.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.W_(e,n)},t=>{e(()=>{let e=new N(A.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}W_(e,t){let n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.C_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return _(rF,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(_(rF,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rM extends rP{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:C(39313,{state:r}),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(b(void 0===i||"string"==typeof i,58123),eC.fromBase64String(i||"")):(b(void 0===i||i instanceof f||i instanceof Uint8Array,16193),eC.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new nE(s,a,o,l&&new N(void 0===l.code?A.UNKNOWN:nc(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nM(e,r.document.name),s=nV(r.document.updateTime),a=r.document.createTime?nV(r.document.createTime):es.min(),o=new e6({mapValue:{fields:r.document.fields}}),l=e5.newFoundDocument(i,s,a,o);n=new nw(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nM(e,r.document),s=r.readTime?nV(r.readTime):es.min(),a=e5.newNoDocument(i,s);n=new nw([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nM(e,r.document);n=new nw([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return C(11601,{At:t});{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nh(r,i);n=new n_(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return es.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?es.min():t.readTime?nV(t.readTime):es.min()}(e);return this.listener.J_(t,n)}H_(e){let t={};t.database=nq(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tw(r)?{documents:{documents:[nU(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=nU(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof tr?function(e){if("=="===e.op){if(e1(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NAN"}};if(e0(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(e1(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NOT_NAN"}};if(e0(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nz(e.field),op:nA[e.op],value:e.value}}}(t):t instanceof ti?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nN[t.op],filters:n}}}(t):C(54877,{filter:t})}(ti.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nz(e.field),direction:nb[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=nk(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{Vt:s,parent:i}}(e,r).Vt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nR(e,t.resumeToken);let r=nk(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(es.min())>0){n.readTime=nx(e,t.snapshotVersion.toTimestamp());let r=nk(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){let t={};t.database=nq(this.serializer),t.removeTarget=e,this.k_(t)}}class rU extends rP{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return b(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,b(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){var t,n;b(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(b(void 0!==n,14353),t.map(e=>{let t;return(t=e.updateTime?nV(e.updateTime):nV(n)).isEqual(es.min())&&(t=nV(n)),new t3(t,e.transformResults||[])})):[]),i=nV(e.commitTime);return this.listener.ta(i,r)}na(){let e={};e.database=nq(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof ne)r={update:nB(e,t.key,t.value)};else if(t instanceof ns)r={delete:nP(e,t.key)};else if(t instanceof nt)r={update:nB(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof na))return C(16599,{Rt:t.type});r={verify:nP(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tW)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tH)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tY)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tZ)return{fieldPath:t.field.canonicalString(),increment:n.Ee};throw C(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nx(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:C(27497)),r})(this.serializer,e))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{}class r$ extends rq{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new N(A.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(e,nL(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new N(A.UNKNOWN,e.toString())})}Jo(e,t,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Jo(e,nL(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new N(A.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class rB{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(E(t),this._a=!1):_("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rz="RemoteStore";class rj{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(e=>{n.enqueueAndForget(async()=>{rZ(this)&&(_(rz,"Restarting streams for network reachability change."),await async function(e){e.Ia.add(4),await rK(e),e.Aa.set("Unknown"),e.Ia.delete(4),await rG(e)}(this))})}),this.Aa=new rB(n,r)}}async function rG(e){if(rZ(e))for(let t of e.da)await t(!0)}async function rK(e){for(let t of e.da)await t(!1)}function rQ(e,t){e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),rJ(e)?rY(e):ia(e).x_()&&rH(e,t))}function rW(e,t){let n=ia(e);e.Ta.delete(t),n.x_()&&rX(e,t),0===e.Ta.size&&(n.x_()?n.B_():rZ(e)&&e.Aa.set("Unknown"))}function rH(e,t){if(e.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(es.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ia(e).H_(t)}function rX(e,t){e.Ra.$e(t),ia(e).Y_(t)}function rY(e){e.Ra=new nI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),ia(e).start(),e.Aa.aa()}function rJ(e){return rZ(e)&&!ia(e).M_()&&e.Ta.size>0}function rZ(e){return 0===e.Ia.size}async function r0(e){e.Aa.set("Online")}async function r1(e){e.Ta.forEach((t,n)=>{rH(e,t)})}async function r2(e,t){e.Ra=void 0,rJ(e)?(e.Aa.la(t),rY(e)):e.Aa.set("Unknown")}async function r3(e,t,n){if(e.Aa.set("Online"),t instanceof nE&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.Ta.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ta.delete(r),e.Ra.removeTarget(r))}(e,t)}catch(n){_(rz,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await r4(e,n)}else if(t instanceof nw?e.Ra.Ye(t):t instanceof n_?e.Ra.it(t):e.Ra.et(t),!n.isEqual(es.min()))try{let t=await ry(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.Ra.Pt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Ta.get(r);i&&e.Ta.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(eC.EMPTY_BYTE_STRING,r.snapshotVersion)),rX(e,t);let i=new nK(r.target,t,n,r.sequenceNumber);rH(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){_(rz,"Failed to raise snapshot:",t),await r4(e,t)}}async function r4(e,t,n){if(!ec(t))throw t;e.Ia.add(1),await rK(e),e.Aa.set("Offline"),n||(n=()=>ry(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_(rz,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await rG(e)})}function r9(e,t){return t().catch(n=>r4(e,n,t))}async function r6(e){let t=io(e),n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:-1;for(;rZ(e)&&e.Pa.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Pa.length&&t.B_();break}n=r.batchId,function(e,t){e.Pa.push(t);let n=io(e);n.x_()&&n.Z_&&n.X_(t.mutations)}(e,r)}catch(t){await r4(e,t)}r5(e)&&r8(e)}function r5(e){return rZ(e)&&!io(e).M_()&&e.Pa.length>0}function r8(e){io(e).start()}async function r7(e){io(e).na()}async function ie(e){let t=io(e);for(let n of e.Pa)t.X_(n.mutations)}async function it(e,t,n){let r=e.Pa.shift(),i=nl.from(r,t,n);await r9(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await r6(e)}async function ir(e,t){t&&io(e).Z_&&await async function(e,t){var n;if(function(e){switch(e){case A.OK:return C(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return C(15467,{code:e})}}(n=t.code)&&n!==A.ABORTED){let n=e.Pa.shift();io(e).N_(),await r9(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await r6(e)}}(e,t),r5(e)&&r8(e)}async function ii(e,t){e.asyncQueue.verifyOperationInProgress(),_(rz,"RemoteStore received new credentials");let n=rZ(e);e.Ia.add(3),await rK(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await rG(e)}async function is(e,t){t?(e.Ia.delete(2),await rG(e)):t||(e.Ia.add(2),await rK(e),e.Aa.set("Unknown"))}function ia(e){var t,n,r;return e.Va||(e.Va=(t=e.datastore,n=e.asyncQueue,r={Zo:r0.bind(null,e),e_:r1.bind(null,e),n_:r2.bind(null,e),J_:r3.bind(null,e)},t.ia(),new rM(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.da.push(async t=>{t?(e.Va.N_(),rJ(e)?rY(e):e.Aa.set("Unknown")):(await e.Va.stop(),e.Ra=void 0)})),e.Va}function io(e){var t,n,r;return e.ma||(e.ma=(t=e.datastore,n=e.asyncQueue,r={Zo:()=>Promise.resolve(),e_:r7.bind(null,e),n_:ir.bind(null,e),ea:ie.bind(null,e),ta:it.bind(null,e)},t.ia(),new rU(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.da.push(async t=>{t?(e.ma.N_(),await r6(e)):(await e.ma.stop(),e.Pa.length>0&&(_(rz,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new D,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new il(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new N(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(e,t){if(E("AsyncQueue",`${t}: ${e}`),ec(e))return new N(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{static emptySet(e){return new ih(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||H.comparator(t.key,n.key):(e,t)=>H.comparator(e.key,t.key),this.keyedMap=tF(),this.sortedSet=new ey(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ih)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new ih;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.fa=new ey(H.comparator)}track(e){let t=e.doc.key,n=this.fa.get(t);n?0!==e.type&&3===n.type?this.fa=this.fa.insert(t,e):3===e.type&&1!==n.type?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.fa=this.fa.remove(t):1===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):C(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}}class id{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new id(e,t,ih.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tN(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class ig{constructor(){this.queries=ip(),this.onlineState="Unknown",this.Da=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=ip(),n.forEach((e,n)=>{for(let e of n.wa)e.onError(t)})}(this,new N(A.ABORTED,"Firestore shutting down"))}}function ip(){return new tV(e=>tD(e),tN)}async function iy(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.Sa()&&t.ba()&&(n=2):(i=new im,n=t.ba()?0:1);try{switch(n){case 0:i.ya=await e.onListen(r,!0);break;case 1:i.ya=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=iu(n,`Initialization of query '${tk(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.wa.push(t),t.va(e.onlineState),i.ya&&t.Ca(i.ya)&&iE(e)}async function iv(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.wa.indexOf(t);e>=0&&(i.wa.splice(e,1),0===i.wa.length?r=t.ba()?0:1:!i.Sa()&&t.ba()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function iw(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.wa)e.Ca(r)&&(n=!0);i.ya=r}}n&&iE(e)}function i_(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.wa)e.onError(n);e.queries.delete(t)}function iE(e){e.Da.forEach(e=>{e.next()})}(a=s||(s={})).Fa="default",a.Cache="cache";class iT{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new id(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){return!(e.fromCache&&this.ba())||(!this.options.ka||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}La(e){e=id.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.key=e}}class iC{constructor(e){this.key=e}}class iS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=t$(),this.mutatedKeys=t$(),this.Xa=tR(e),this.eu=new ih(this.Xa)}get tu(){return this.Ha}nu(e,t){let n=t?t.ru:new ic,r=t?t.eu:this.eu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tx(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.iu(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Xa(h,o)>0||l&&0>this.Xa(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{eu:s,ru:n,Ds:a,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let s=e.ru.pa();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C(20277,{At:e})}};return n(e)-n(t)})(e.type,t.type)||this.Xa(e.doc,t.doc)),this.su(n),r=null!=r&&r;let a=t&&!r?this.ou():[],o=0===this.Za.size&&this.current&&!r?1:0,l=o!==this.Ya;return(this.Ya=o,0!==s.length||l)?{snapshot:new id(this.query,e.eu,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ic,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=t$(),this.eu.forEach(e=>{this.au(e.key)&&(this.Za=this.Za.add(e.key))});let t=[];return e.forEach(e=>{this.Za.has(e)||t.push(new iC(e))}),this.Za.forEach(n=>{e.has(n)||t.push(new iI(n))}),t}uu(e){this.Ha=e.qs,this.Za=t$();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return id.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,0===this.Ya,this.hasCachedResults)}}let ib="SyncEngine";class iA{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class iN{constructor(e){this.key=e,this.lu=!1}}class iD{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.hu={},this.Pu=new tV(e=>tD(e),tN),this.Tu=new Map,this.Iu=new Set,this.du=new ey(H.comparator),this.Eu=new Map,this.Au=new rt,this.Ru={},this.Vu=new Map,this.mu=nZ.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}async function ik(e,t,n=!0){let r;let i=iY(e),s=i.Pu.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.cu()):r=await iR(i,t,n,!0),r}async function ix(e,t){let n=iY(e);await iR(n,t,!0,!1)}async function iR(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=tS(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.hi.getTargetData(e,s).next(n=>n?(t=n,eh.resolve(t)):i.hi.allocateTargetId(e).next(n=>(t=new nK(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.hi.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Fs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Fs=i.Fs.insert(e.targetId,e),i.Ms.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(a=await iV(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&rQ(e.remoteStore,o),a}async function iV(e,t,n,r,i){e.gu=(t,n,r)=>(async function(e,t,n,r){let i=t.view.nu(n);i.Ds&&(i=await rw(e.localStore,t.query,!1).then(({documents:e})=>t.view.nu(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return iK(e,t.targetId,o._u),o.snapshot})(e,t,n,r);let s=await rw(e.localStore,t,!0),a=new iS(t,s.qs),o=a.nu(s.documents),l=nv.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);iK(e,n,u._u);let h=new iA(t,n,a);return e.Pu.set(t,h),e.Tu.has(n)?e.Tu.get(n).push(t):e.Tu.set(n,[t]),u.snapshot}async function iO(e,t,n){let r=e.Pu.get(t),i=e.Tu.get(r.targetId);if(i.length>1)return e.Tu.set(r.targetId,i.filter(e=>!tN(e,t))),void e.Pu.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rv(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rW(e.remoteStore,r.targetId),ij(e,r.targetId)}).catch(eu)):(ij(e,r.targetId),await rv(e.localStore,r.targetId,!0))}async function iL(e,t){let n=e.Pu.get(t),r=e.Tu.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rW(e.remoteStore,n.targetId))}async function iF(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=iq.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=i$.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=ei.now(),s=t.reduce((e,t)=>e.add(t.key),t$());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tO,l=t$();return e.Os.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tQ(r.transform,e||null);null!=i&&(null===n&&(n=e6.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nt(e.key,t,function e(t){let n=[];return eg(t.fields,(t,r)=>{let i=new W([t]);if(e2(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eT(n)}(t.value.mapValue),t4.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tP(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Ru[i.currentUser.toKey()])||(e=new ey(q)),e=e.insert(r,n),i.Ru[i.currentUser.toKey()]=e,await iW(i,s.changes),await r6(i.remoteStore)}catch(t){let e=iu(t,"Failed to persist write");n.reject(e)}}async function iP(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Os.newChangeBuffer({trackRemovals:!0});r=e.Fs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.hi.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.hi.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(eC.EMPTY_BYTE_STRING,es.min()).withLastLimboFreeSnapshotVersion(es.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.hi.updateTargetData(i,h))});let h=tO,c=t$();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=t$(),o=t$(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tO;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(es.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):_(rm,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Ls:t,ks:o}})).next(e=>{h=e.Ls,c=e.ks})),!n.isEqual(es.min())){let t=e.hi.getLastRemoteSnapshotVersion(i).next(t=>e.hi.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return eh.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.Fs=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Eu.get(n);r&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.lu=!0:t.modifiedDocuments.size>0?b(r.lu,14607):t.removedDocuments.size>0&&(b(r.lu,42227),r.lu=!1))}),await iW(e,n,t)}catch(e){await eu(e)}}function iM(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Pu.forEach((e,n)=>{let r=n.view.va(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.wa)e.va(t)&&(n=!0)}),n&&iE(r),i.length&&e.hu.J_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function iU(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Eu.get(t),i=r&&r.key;if(i){let n=new ey(H.comparator);n=n.insert(i,e5.newNoDocument(i,es.min()));let r=t$().add(i),s=new ny(es.min(),new Map,new ey(q),n,r);await iP(e,s),e.du=e.du.remove(i),e.Eu.delete(t),iQ(e)}else await rv(e.localStore,t,!1).then(()=>ij(e,t,n)).catch(eu)}async function iq(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=eh.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);b(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=t$();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});iz(e,r,null),iB(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await iW(e,i)}catch(e){await eu(e)}}async function i$(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(b(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});iz(e,t,n),iB(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await iW(e,i)}catch(e){await eu(e)}}function iB(e,t){(e.Vu.get(t)||[]).forEach(e=>{e.resolve()}),e.Vu.delete(t)}function iz(e,t,n){let r=e.Ru[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Ru[e.currentUser.toKey()]=r}}function ij(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Tu.get(t)))e.Pu.delete(r),n&&e.hu.pu(r,n);e.Tu.delete(t),e.isPrimaryClient&&e.Au.zr(t).forEach(t=>{e.Au.containsKey(t)||iG(e,t)})}function iG(e,t){e.Iu.delete(t.path.canonicalString());let n=e.du.get(t);null!==n&&(rW(e.remoteStore,n),e.du=e.du.remove(t),e.Eu.delete(n),iQ(e))}function iK(e,t,n){for(let r of n)r instanceof iI?(e.Au.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Iu.has(r)||(_(ib,"New document in limbo: "+n),e.Iu.add(r),iQ(e))}(e,r)):r instanceof iC?(_(ib,"Document no longer in limbo: "+r.key),e.Au.removeReference(r.key,t),e.Au.containsKey(r.key)||iG(e,r.key)):C(19791,{yu:r})}function iQ(e){for(;e.Iu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){let t=e.Iu.values().next().value;e.Iu.delete(t);let n=new H(K.fromString(t)),r=e.mu.next();e.Eu.set(r,new iN(n)),e.du=e.du.insert(n,r),rQ(e.remoteStore,new nK(tS(tE(n.path)),r,"TargetPurposeLimboResolution",ed.ue))}}async function iW(e,t,n){let r=[],i=[],s=[];e.Pu.isEmpty()||(e.Pu.forEach((a,o)=>{s.push(e.gu(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=rc.Es(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.hu.J_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>eh.forEach(t,t=>eh.forEach(t.Is,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>eh.forEach(t.ds,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!ec(e))throw e;_(rm,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Fs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Fs=e.Fs.insert(t,i)}}}(e.localStore,i))}async function iH(e,t){if(!e.currentUser.isEqual(t)){_(ib,"User change. New user:",t.toKey());let n=await rp(e.localStore,t);e.currentUser=t,e.Vu.forEach(e=>{e.forEach(e=>{e.reject(new N(A.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Vu.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await iW(e,n.Bs)}}function iX(e,t){let n=e.Eu.get(t);if(n&&n.lu)return t$().add(n.key);{let n=t$(),r=e.Tu.get(t);if(!r)return n;for(let t of r){let r=e.Pu.get(t);n=n.unionWith(r.view.tu)}return n}}function iY(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iX.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iU.bind(null,e),e.hu.J_=iw.bind(null,e.eventManager),e.hu.pu=i_.bind(null,e.eventManager),e}class iJ{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rO(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){var t;return t=this.persistence,new rg(t,new rf,e.initialUser,this.serializer)}Du(e){return new ro(ru.Vi,this.serializer)}bu(e){return new rE}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}iJ.provider={build:()=>new iJ};class iZ extends iJ{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){return b(this.persistence.referenceDelegate instanceof rh,46915),new n3(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Du(e){let t=void 0!==this.cacheSizeBytes?nJ.withCacheSize(this.cacheSizeBytes):nJ.DEFAULT;return new ro(e=>rh.Vi(e,t),this.serializer)}}class i0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>iM(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iH.bind(null,this.syncEngine),await is(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ig}createDatastore(e){let t=rO(e.databaseInfo.databaseId),n=new rR(e.databaseInfo);return new r$(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new rj(t,this.datastore,e.asyncQueue,e=>iM(this.syncEngine,e,0),rC.C()?new rC:new rT)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new iD(e,t,n,r,i,s);return a&&(o.fu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){_(rz,"RemoteStore shutting down."),e.Ia.add(5),await rK(e),e.Ea.shutdown(),e.Aa.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}i0.provider={build:()=>new i0};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class i1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):E("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i2="FirestoreClient";class i3{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=p.UNAUTHENTICATED,this.clientId=U.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{_(i2,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(_(i2,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new D;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=iu(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function i4(e,t){e.asyncQueue.verifyOperationInProgress(),_(i2,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await rp(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>{T("Terminating Firestore due to IndexedDb database deletion"),e.terminate().then(()=>{_("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(e=>{T("Terminating Firestore due to IndexedDb database deletion failed",e)})}),e._offlineComponents=t}async function i9(e,t){e.asyncQueue.verifyOperationInProgress();let n=await i6(e);_(i2,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>ii(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ii(t.remoteStore,n)),e._onlineComponents=t}async function i6(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){_(i2,"Using user provided OfflineComponentProvider");try{await i4(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;T("Error using user provided cache. Falling back to memory cache: "+t),await i4(e,new iJ)}}else _(i2,"Using default OfflineComponentProvider"),await i4(e,new iZ(void 0))}return e._offlineComponents}async function i5(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_(i2,"Using user provided OnlineComponentProvider"),await i9(e,e._uninitializedComponentsProvider._online)):(_(i2,"Using default OnlineComponentProvider"),await i9(e,new i0))),e._onlineComponents}async function i8(e){let t=await i5(e),n=t.eventManager;return n.onListen=ik.bind(null,t.syncEngine),n.onUnlisten=iO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ix.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iL.bind(null,t.syncEngine),n}/**
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
 */function i7(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let se=new Map,st="firestore.googleapis.com";class sn{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new N(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=st,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new N(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new N(A.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i7(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new N(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new N(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new N(A.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sr{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sn({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new N(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sn(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new x;switch(e.type){case"firstParty":return new L(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new N(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=se.get(e);t&&(_("ComponentProvider","Removing Datastore"),se.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new si(this.firestore,e,this._query)}}class ss{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ss(this.firestore,e,this._key)}toJSON(){return{type:ss._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(er(t,ss._jsonSchema))return new ss(e,n||null,new H(K.fromString(t.referencePath)))}}ss._jsonSchemaVersion="firestore/documentReference/1.0",ss._jsonSchema={type:en("string",ss._jsonSchemaVersion),referencePath:en("string")};class sa extends si{constructor(e,t,n){super(e,t,tE(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ss(this.firestore,null,new H(e))}withConverter(e){return new sa(this.firestore,e,this._path)}}function so(e,t,...n){if(e=(0,h.m9)(e),X("collection","path",t),e instanceof sr){let r=K.fromString(t,...n);return J(r),new sa(e,null,r)}{if(!(e instanceof ss||e instanceof sa))throw new N(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(K.fromString(t,...n));return J(r),new sa(e.firestore,null,r)}}function sl(e,t,...n){if(e=(0,h.m9)(e),1==arguments.length&&(t=U.newId()),X("doc","path",t),e instanceof sr){let r=K.fromString(t,...n);return Y(r),new ss(e,null,new H(r))}{if(!(e instanceof ss||e instanceof sa))throw new N(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(K.fromString(t,...n));return Y(r),new ss(e.firestore,e instanceof sa?e.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su="AsyncQueue";class sh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new rL(this,"async_queue_retry"),this.oc=()=>{let e=rV();e&&_(su,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;let t=rV();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=rV();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new D;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ec(e))throw e;_(su,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,E("INTERNAL UNHANDLED ERROR: ",sc(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let r=il.createAndSchedule(this,e,t,n,e=>this.lc(e));return this.ec.push(r),r}ac(){this.tc&&C(47125,{hc:sc(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{for(let t of(this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.ec))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}}function sc(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class sf extends sr{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new sh(e),this._firestoreClient=void 0,await e}}}function sm(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eP});if(!r._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,n,r={}){var i;e=et(e,sr);let s=(0,h.Xx)(t),a=e._getSettings(),o=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;s&&((0,h.Uo)(`https://${l}`),(0,h.dp)("Firestore",!0)),a.host!==st&&a.host!==l&&T("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!(0,h.vZ)(u,o)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=p.MOCK_USER;else{t=(0,h.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new N(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new p(s)}e._authCredentials=new R(new k(t,n))}}(r,...e)}return r}function sg(e){if(e._terminated)throw new N(A.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new eF(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,i7(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new i3(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sp(eC.fromBase64String(e))}catch(e){throw new N(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sp(eC.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sp._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(er(e,sp._jsonSchema))return sp.fromBase64String(e.bytes)}}sp._jsonSchemaVersion="firestore/bytes/1.0",sp._jsonSchema={type:en("string",sp._jsonSchemaVersion),bytes:en("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new N(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sw._jsonSchemaVersion}}static fromJSON(e){if(er(e,sw._jsonSchema))return new sw(e.latitude,e.longitude)}}sw._jsonSchemaVersion="firestore/geoPoint/1.0",sw._jsonSchema={type:en("string",sw._jsonSchemaVersion),latitude:en("number"),longitude:en("number")};/**
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
 */class s_{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:s_._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(er(e,s_._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new s_(e.vectorValues);throw new N(A.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}s_._jsonSchemaVersion="firestore/vectorValue/1.0",s_._jsonSchema={type:en("string",s_._jsonSchemaVersion),vectorValues:en("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sE=/^__.*__$/;class sT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ne(e,this.data,t,this.fieldTransforms)}}class sI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sC(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C(40011,{Ec:e})}}class sS{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new sS(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.fc(e),r}gc(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return sq(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(0===e.length)throw this.wc("Document fields must not be empty");if(sC(this.Ec)&&sE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class sb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||rO(e)}Dc(e,t,n,r=!1){return new sS({Ec:e,methodName:t,bc:n,path:W.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sA(e){let t=e._freezeSettings(),n=rO(e._databaseId);return new sb(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sN(e,t,n,r,i,s={}){let a,o;let l=e.Dc(s.merge||s.mergeFields?2:0,t,n,i);sF("Data must be an object, but it was:",l,r);let u=sO(r,l);if(s.merge)a=new eT(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=sP(t,r,n);if(!l.contains(i))throw new N(A.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);s$(e,i)||e.push(i)}a=new eT(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sT(new e6(u),a,o)}class sD extends sv{_toFieldTransform(e){if(2!==e.Ec)throw 1===e.Ec?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sD}}class sk extends sv{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){let t=new tZ(e.serializer,tG(e.serializer,this.Cc));return new t2(e.path,t)}isEqual(e){return e instanceof sk&&this.Cc===e.Cc}}function sx(e,t,n,r){let i=e.Dc(1,t,n);sF("Data must be an object, but it was:",i,r);let s=[],a=e6.empty();return eg(r,(e,r)=>{let o=sU(t,e,n);r=(0,h.m9)(r);let l=i.gc(o);if(r instanceof sD)s.push(o);else{let e=sV(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new sI(a,new eT(s),i.fieldTransforms)}function sR(e,t,n,r,i,s){let a=e.Dc(1,t,n),o=[sP(t,r,n)],l=[i];if(s.length%2!=0)throw new N(A.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(sP(t,s[e])),l.push(s[e+1]);let u=[],c=e6.empty();for(let e=o.length-1;e>=0;--e)if(!s$(u,o[e])){let t=o[e],n=l[e];n=(0,h.m9)(n);let r=a.gc(t);if(n instanceof sD)u.push(t);else{let e=sV(n,r);null!=e&&(u.push(t),c.set(t,e))}}return new sI(c,new eT(u),a.fieldTransforms)}function sV(e,t){if(sL(e=(0,h.m9)(e)))return sF("Unsupported field value:",t,e),sO(e,t);if(e instanceof sv)return function(e,t){if(!sC(t.Ec))throw t.wc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.wc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.mc&&4!==t.Ec)throw t.wc("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=sV(i,t.yc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,h.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return tG(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=ei.fromDate(e);return{timestampValue:nx(t.serializer,n)}}if(e instanceof ei){let n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nx(t.serializer,n)}}if(e instanceof sw)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sp)return{bytesValue:nR(t.serializer,e._byteString)};if(e instanceof ss){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.wc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nO(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof s_)return{mapValue:{fields:{[eU]:{stringValue:eB},[ez]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.wc("VectorValues must only contain numeric values.");return tz(t.serializer,e)})}}}}};throw t.wc(`Unsupported field value: ${ee(e)}`)}(e,t)}function sO(e,t){let n={};return ep(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eg(e,(e,r)=>{let i=sV(r,t.Vc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function sL(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof sw||e instanceof sp||e instanceof ss||e instanceof sv||e instanceof s_)}function sF(e,t,n){if(!sL(n)||!Z(n)){let r=ee(n);throw"an object"===r?t.wc(e+" a custom object"):t.wc(e+" "+r)}}function sP(e,t,n){if((t=(0,h.m9)(t))instanceof sy)return t._internalPath;if("string"==typeof t)return sU(e,t);throw sq("Field path arguments must be of type string or ",e,!1,void 0,n)}let sM=RegExp("[~\\*/\\[\\]]");function sU(e,t,n){if(t.search(sM)>=0)throw sq(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sy(...t.split("."))._internalPath}catch(r){throw sq(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sq(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new N(A.INVALID_ARGUMENT,o+e+l)}function s$(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ss(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sj("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sz extends sB{data(){return super.data()}}function sj(e,t){return"string"==typeof t?sU(e,t):t instanceof sy?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sG(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new N(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sK{}class sQ extends sK{}function sW(e,t,...n){let r=[];for(let i of(t instanceof sK&&r.push(t),function(e){let t=e.filter(e=>e instanceof sY).length,n=e.filter(e=>e instanceof sH).length;if(t>1||t>0&&n>0)throw new N(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class sH extends sQ{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new sH(e,t,n)}_apply(e){let t=this._parse(e);return s4(e._query,t),new si(e.firestore,e.converter,tb(e._query,t))}_parse(e){let t=sA(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new N(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){s3(a,s);let t=[];for(let n of a)t.push(s2(r,e,n));o={arrayValue:{values:t}}}else o=s2(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||s3(a,s),o=function(e,t,n,r=!1){return sV(n,e.Dc(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return tr.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sX(e,t,n){let r=sj("where",e);return sH._create(r,t,n)}class sY extends sK{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sY(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:ti.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())s4(n,e),n=tb(n,e)}(e._query,t),new si(e.firestore,e.converter,tb(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class sJ extends sQ{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sJ(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new N(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new N(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tt(t,n)}(e._query,this._field,this._direction);return new si(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new t_(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function sZ(e,t="asc"){let n=sj("orderBy",e);return sJ._create(n,t)}class s0 extends sQ{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new s0(e,t,n)}_apply(e){return new si(e.firestore,e.converter,tA(e._query,this._limit,this._limitType))}}function s1(e){return function(e,t){if(t<=0)throw new N(A.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),s0._create("limit",e,"F")}function s2(e,t,n){if("string"==typeof(n=(0,h.m9)(n))){if(""===n)throw new N(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tI(t)&&-1!==n.indexOf("/"))throw new N(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(K.fromString(n));if(!H.isDocumentKey(r))throw new N(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eY(e,new H(r))}if(n instanceof ss)return eY(e,n._key);throw new N(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ee(n)}.`)}function s3(e,t){if(!Array.isArray(e)||0===e.length)throw new N(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function s4(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new N(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class s9{convertValue(e,t="none"){switch(ej(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eA(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eN(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eg(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new s_(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[ez].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>eA(e.doubleValue)))}convertGeoPoint(e){return new sw(eA(e.latitude),eA(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eO(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eL(e));default:return null}}convertTimestamp(e){let t=eb(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=K.fromString(e);b(nG(n),9688,{name:e});let r=new eM(n.get(1),n.get(3)),i=new H(n.popFirst(5));return r.isEqual(t)||E(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s6(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class s5{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s8 extends sB{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new s7(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(sj("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(A.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=s8._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()&&(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}s8._jsonSchemaVersion="firestore/documentSnapshot/1.0",s8._jsonSchema={type:en("string",s8._jsonSchemaVersion),bundleSource:en("string","DocumentSnapshot"),bundleName:en("string"),bundle:en("string")};class s7 extends s8{data(e={}){return super.data(e)}}class ae{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new s5(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new s7(this._firestore,this._userDataWriter,n.key,n,new s5(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new s7(e._firestore,e._userDataWriter,n.doc.key,n.doc,new s5(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new s7(e._firestore,e._userDataWriter,t.doc.key,t.doc,new s5(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C(61501,{type:e})}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(A.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=ae._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=U.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){e=et(e,ss);let t=et(e.firestore,sf);return(function(e,t,n={}){let r=new D;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new i1({next:o=>{s.Ou(),t.enqueueAndForget(()=>iv(e,a));let l=o.docs.has(n);!l&&o.fromCache?i.reject(new N(A.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new N(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new iT(tE(n.path),s,{includeMetadataChanges:!0,ka:!0});return iy(e,a)})(await i8(e),e.asyncQueue,t,n,r)),r.promise})(sg(t),e._key).then(n=>au(t,e,n))}ae._jsonSchemaVersion="firestore/querySnapshot/1.0",ae._jsonSchema={type:en("string",ae._jsonSchemaVersion),bundleSource:en("string","QuerySnapshot"),bundleName:en("string"),bundle:en("string")};class an extends s9{constructor(e){super(),this.firestore=e}convertBytes(e){return new sp(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ss(this.firestore,null,t)}}function ar(e){e=et(e,si);let t=et(e.firestore,sf),n=sg(t),r=new an(t);return sG(e._query),(function(e,t,n={}){let r=new D;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new i1({next:n=>{s.Ou(),t.enqueueAndForget(()=>iv(e,a)),n.fromCache&&"server"===r.source?i.reject(new N(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new iT(n,s,{includeMetadataChanges:!0,ka:!0});return iy(e,a)})(await i8(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new ae(t,r,e,n))}function ai(e,t,n,...r){e=et(e,ss);let i=et(e.firestore,sf),s=sA(i);return al(i,[("string"==typeof(t=(0,h.m9)(t))||t instanceof sy?sR(s,"updateDoc",e._key,t,n,r):sx(s,"updateDoc",e._key,t)).toMutation(e._key,t4.exists(!0))])}function as(e){return al(et(e.firestore,sf),[new ns(e._key,t4.none())])}function aa(e,t){let n=et(e.firestore,sf),r=sl(e),i=s6(e.converter,t);return al(n,[sN(sA(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,t4.exists(!1))]).then(()=>r)}function ao(e,...t){var n,r,i;let s,a,o;e=(0,h.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||sd(t[u])||(l=t[u++]);let c={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(sd(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof ss)a=et(e.firestore,sf),o=tE(e._key.path),s={next:n=>{t[u]&&t[u](au(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=et(e,si);a=et(n.firestore,sf),o=n._query;let r=new an(a);s={next:e=>{t[u]&&t[u](new ae(a,r,n,e))},error:t[u+1],complete:t[u+2]},sG(e._query)}return function(e,t,n,r){let i=new i1(r),s=new iT(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>iy(await i8(e),s)),()=>{i.Ou(),e.asyncQueue.enqueueAndForget(async()=>iv(await i8(e),s))}}(sg(a),o,c,s)}function al(e,t){return function(e,t){let n=new D;return e.asyncQueue.enqueueAndForget(async()=>iF(await i5(e).then(e=>e.syncEngine),t,n)),n.promise}(sg(e),t)}function au(e,t,n){let r=n.docs.get(t._key),i=new an(e);return new s8(e,i,t._key,r,new s5(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=sA(e)}set(e,t,n){this._verifyNotCommitted();let r=ac(e,this._firestore),i=s6(r.converter,t,n),s=sN(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,t4.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=ac(e,this._firestore);return i="string"==typeof(t=(0,h.m9)(t))||t instanceof sy?sR(this._dataReader,"WriteBatch.update",s._key,t,n,r):sx(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,t4.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=ac(e,this._firestore);return this._mutations=this._mutations.concat(new ns(t._key,t4.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ac(e,t){if((e=(0,h.m9)(e)).firestore!==t)throw new N(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function ad(e){return new sk("increment",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){return sg(e=et(e,sf)),new ah(e,t=>al(e,t))}new WeakMap,function(e=!0){y=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new sf(new V(t.getProvider("auth-internal")),new P(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new N(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eM(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(m,g,void 0),(0,o.KN)(m,g,"esm2017")}()}}]);