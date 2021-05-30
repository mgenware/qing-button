!function(){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class i{constructor(t,i){if(i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,n=t=>{let n=s.get(t);return void 0===n&&s.set(t,n=new i(t,e)),n},o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(t instanceof i)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return n(s)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>n("string"==typeof t?t:t+""))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var l,h,a,c;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=p){var s,n;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,e){var i,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:d.fromAttribute;this.Πh=r,this[r]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var g,b,f,m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(h=(l=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(l,{ReactiveElement:v}),(null!==(a=(c=globalThis).reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.0.0-rc.2");const y=globalThis.trustedTypes,S=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,k=`<${w}>`,$=document,H=(t="")=>$.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,q=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,U=/"/g,R=/^(?:script|style|textarea)$/i,O=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),M=new WeakMap,L=$.createTreeWalker($,129,null,!1);class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=A;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,c=0;for(;c<i.length&&(r.lastIndex=c,h=r.exec(i),null!==h);)c=r.lastIndex,r===A?"!--"===h[1]?r=P:void 0!==h[1]?r=q:void 0!==h[2]?(R.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=T):void 0!==h[3]&&(r=T):r===T?">"===h[0]?(r=null!=n?n:A,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?T:'"'===h[3]?U:N):r===U||r===N?r=T:r===P||r===q?r=A:(r=T,n=void 0);const d=r===T&&t[e+1].startsWith("/>")?" ":"";o+=r===A?i+k:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+x+d):i+x+(-2===a?(s.push(void 0),e):d)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(l):l,s]})(t,e);if(this.el=z.createElement(h,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const i=a[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?Z:"@"===e[1]?K:j})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),L.nextNode(),l.push({type:2,index:++n});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===w)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)l.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r,l;if(e===B)return e;let h=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const a=C(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=W(t,h.S(t,e.values),h,s)),e}class _{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);L.currentNode=n;let o=L.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new D(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new J(o,this,t)),this.l.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=L.nextNode(),r++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class D{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=W(this,t,e),C(t)?t===I||null==t||""===t?(this.H!==I&&this.R(),this.H=I):t!==this.H&&t!==B&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$($.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new _(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new z(t)),e}g(t){E(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new D(this.k(H()),this.k(H()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class j{constructor(t,e,i,s,n){this.type=1,this.H=I,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(I),this.strings=i):this.H=I}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,e,0),o=!C(t)||t!==this.H&&t!==B,o&&(this.H=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=W(this,s[i+r],e,r),l===B&&(l=this.H[r]),o||(o=!C(l)||l!==this.H[r]),l===I?t=I:t!==I&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!s&&this.W(t)}W(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends j{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===I?void 0:t}}class Z extends j{constructor(){super(...arguments),this.type=4}W(t){t&&t!==I?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class K extends j{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:I)===B)return;const s=this.H,n=t===I&&s!==I||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==I&&(s===I||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){W(this,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var F,G,Q,X,Y,tt;null===(b=(g=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(g,z,D),(null!==(f=(m=globalThis).litHtmlVersions)&&void 0!==f?f:m.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(F=(tt=globalThis).litElementVersions)&&void 0!==F?F:tt.litElementVersions=[]).push("3.0.0-rc.2");class et extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new D(e.insertBefore(H(),t),t,void 0,i)}return r.I(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return B}}et.finalized=!0,et._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:et}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:et});
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var nt,ot,rt,lt;console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'.");const ht=globalThis.trustedTypes,at=ht?ht.createPolicy("lit-html",{createHTML:t=>t}):void 0,ct=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+ct,ut=`<${dt}>`,pt=document,vt=(t="")=>pt.createComment(t),gt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,bt=Array.isArray,ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mt=/-->/g,yt=/>/g,St=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,xt=/'/g,wt=/"/g,kt=/^(?:script|style|textarea)$/i,$t=Symbol.for("lit-noChange"),Ht=Symbol.for("lit-nothing"),Ct=new WeakMap,Et=pt.createTreeWalker(pt,129,null,!1),At=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=ft;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,c=0;for(;c<i.length&&(r.lastIndex=c,h=r.exec(i),null!==h);)c=r.lastIndex,r===ft?"!--"===h[1]?r=mt:void 0!==h[1]?r=yt:void 0!==h[2]?(kt.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=St):void 0!==h[3]&&(r=St):r===St?">"===h[0]?(r=null!=n?n:ft,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?St:'"'===h[3]?wt:xt):r===wt||r===xt?r=St:r===mt||r===yt?r=ft:(r=St,n=void 0);const d=r===St&&t[e+1].startsWith("/>")?" ":"";o+=r===ft?i+ut:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+ct+d):i+ct+(-2===a?(s.push(void 0),e):d)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==at?at.createHTML(l):l,s]};class Pt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=At(t,e);if(this.el=Pt.createElement(h,i),Et.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Et.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(ct)){const i=a[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(ct),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Rt:"?"===e[1]?Ot:"@"===e[1]?Bt:Ut})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(kt.test(s.tagName)){const t=s.textContent.split(ct),e=t.length-1;if(e>0){s.textContent=ht?ht.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],vt()),Et.nextNode(),l.push({type:2,index:++n});s.append(t[e],vt())}}}else if(8===s.nodeType)if(s.data===dt)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(ct,t+1));)l.push({type:7,index:n}),t+=ct.length-1}n++}}static createElement(t,e){const i=pt.createElement("template");return i.innerHTML=t,i}}function qt(t,e,i=t,s){var n,o,r,l;if(e===$t)return e;let h=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const a=gt(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=qt(t,h.S(t,e.values),h,s)),e}class Tt{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:pt).importNode(i,!0);Et.currentNode=n;let o=Et.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new Nt(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new It(o,this,t)),this.l.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=Et.nextNode(),r++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class Nt{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=qt(this,t,e),gt(t)?t===Ht||null==t||""===t?(this.H!==Ht&&this.R(),this.H=Ht):t!==this.H&&t!==$t&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return bt(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(pt.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=Pt.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new Tt(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=Ct.get(t.strings);return void 0===e&&Ct.set(t.strings,e=new Pt(t)),e}g(t){bt(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new Nt(this.k(vt()),this.k(vt()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class Ut{constructor(t,e,i,s,n){this.type=1,this.H=Ht,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(Ht),this.strings=i):this.H=Ht}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=qt(this,t,e,0),o=!gt(t)||t!==this.H&&t!==$t,o&&(this.H=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=qt(this,s[i+r],e,r),l===$t&&(l=this.H[r]),o||(o=!gt(l)||l!==this.H[r]),l===Ht?t=Ht:t!==Ht&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!s&&this.W(t)}W(t){t===Ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Rt extends Ut{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===Ht?void 0:t}}class Ot extends Ut{constructor(){super(...arguments),this.type=4}W(t){t&&t!==Ht?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Bt extends Ut{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=qt(this,t,e,0))&&void 0!==i?i:Ht)===$t)return;const s=this.H,n=t===Ht&&s!==Ht||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==Ht&&(s===Ht||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){qt(this,t)}}null===(ot=(nt=globalThis).litHtmlPlatformSupport)||void 0===ot||ot.call(nt,Pt,Nt),(null!==(rt=(lt=globalThis).litHtmlVersions)&&void 0!==rt?rt:lt.litHtmlVersions=[]).push("2.0.0-rc.3");var Mt=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Lt=class extends et{constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this.canSelect=!1,this.disableSelectedStyle=!1,this.href="",this.btnStyle="",this.selected=!1,this.buttonElement=null}static get styles(){return[o`
        :host {
          display: inline-block;
        }
        button {
          background-color: #e7e7e7;
          color: black;
          border: 0;
          border-radius: 0;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.6rem 0.9rem;
          transition: all 0.3s ease 0s;
        }
        button:hover {
          opacity: 0.8;
        }
        button:active,
        button.selected {
          filter: brightness(80%);
        }
        button:disabled {
          pointer-events: none;
          opacity: 0.6;
        }
        button:focus {
          box-shadow: inset 0 0 0 0.2rem var(--button-outline-color, #8dc3eb);
          outline: none;
        }
      `]}firstUpdated(){if(!this.shadowRoot)throw new Error("Unexpected undefined shadowRoot");this.buttonElement=this.shadowRoot.querySelector("button")}render(){return O`
      <button
        class=${this.selected&&!this.disableSelectedStyle?"selected":""}
        part="button"
        ?disabled=${this.disabled}
        ?autofocus=${this.autofocus}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `}focus(){this.buttonElement&&this.buttonElement.focus()}handleClick(t){t.preventDefault(),t.stopImmediatePropagation(),this.href?window.location.href=this.href:(this.canSelect&&(this.selected=!this.selected),this.dispatchEvent(new CustomEvent("click")))}};Mt([st({type:Boolean})],Lt.prototype,"disabled",void 0),Mt([st({type:Boolean})],Lt.prototype,"autofocus",void 0),Mt([st({type:Boolean})],Lt.prototype,"canSelect",void 0),Mt([st({type:Boolean})],Lt.prototype,"disableSelectedStyle",void 0),Mt([st({type:String})],Lt.prototype,"href",void 0),Mt([st({type:String})],Lt.prototype,"btnStyle",void 0),Mt([st({type:Boolean,reflect:!0})],Lt.prototype,"selected",void 0),Lt=Mt([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e))("qing-button")],Lt);const zt="theme-dark";class Wt extends et{render(){return O`
      <div id="main">
        <p>
          <qing-button>Default</qing-button>
          <qing-button btnStyle="primary">Primary</qing-button>
          <qing-button btnStyle="success">Success</qing-button>
          <qing-button btnStyle="warning">Warning</qing-button>
          <qing-button btnStyle="danger">Danger</qing-button>
          <qing-button class="custom-styles">Custom styles</qing-button>
          <qing-button disabled>Disabled</qing-button>
        </p>
        <p><qing-button autofocus>Auto-focused</qing-button></p>
        <p><qing-button href="http://google.com">href = google.com</qing-button></p>
        <p>A <qing-button class="btn-in-paragraph">button</qing-button> in a paragraph.</p>
        <p><qing-button id="themes" @click=${this.switchThemes}>Switch themes</qing-button></p>
        <h2>Button group</h2>
        <p class="btn-group">
          <qing-button>Windows</qing-button>
          <qing-button>macOS</qing-button>
          <qing-button>Linux</qing-button>
        </p>
        <h2>CSS variables</h2>
        <p><qing-button id="button-outline">--button-outline-color</qing-button></p>
        <h2>Selected</h2>
        <p>
          <qing-button canselect selected>I'm a checkbox</qing-button>
          <qing-button id="checkbox" canselect selected disableSelectedStyle
            >I'm a checkbox</qing-button
          >
        </p>
      </div>
    `}handleFocusClick(){this.shadowRoot.getElementById("btn").focus()}switchThemes(){const{classList:t}=this.shadowRoot.getElementById("main");t.contains(zt)?t.remove(zt):t.add(zt)}}Wt.styles=o`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  qing-button[btnStyle='success']::part(button) {
    background-color: #4caf50;
    color: white;
  }
  qing-button[btnStyle='primary']::part(button) {
    background-color: #008cba;
    color: white;
  }
  qing-button[btnStyle='danger']::part(button) {
    background-color: #f44336;
    color: white;
  }
  qing-button[btnStyle='warning']::part(button) {
    background-color: #ffae00;
    color: white;
  }
  qing-button.custom-style::part(button) {
    border: 4px solid yellowgreen;
    border-radius: 10px;
    background-color: #50009b;
    color: white;
  }

  .btn-in-paragraph {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
  }
  .btn-group qing-button::part(button) {
    border: 1px solid gray;
  }
  .btn-group qing-button:not(:last-child)::part(button) {
    border-right: none;
  }
  .btn-group qing-button:first-child::part(button) {
    border-radius: 5px 0 0 5px;
  }
  .btn-group qing-button:last-child::part(button) {
    border-radius: 0 5px 5px 0;
  }
  :host {
    --default-back-color: yellowgreen;
    --default-fore-color: black;
  }
  .theme-dark {
    --default-back-color: black;
    --default-fore-color: #777777;
  }
  h1 {
    background-color: var(--default-back-color);
    color: var(--default-fore-color);
  }
  #themes::part(button) {
    background-color: var(--default-back-color);
    color: var(--default-fore-color);
  }
  #button-outline {
    --button-outline-color: orange;
  }
  #checkbox[selected]::part(button) {
    border: 3px solid green;
  }
`,customElements.define("example-app",Wt)}();
