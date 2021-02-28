!function(){"use strict";
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${n}`),i="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],l=document.createTreeWalker(e.content,133,null,!1);let u=0,h=-1,p=0;const{strings:m,values:{length:g}}=t;for(;p<g;){const t=l.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)a(e[t].name,i)&&n++;for(;n-- >0;){const e=m[p],s=d.exec(e)[2],n=s.toLowerCase()+i,r=t.getAttribute(n);t.removeAttribute(n);const a=r.split(o);this.parts.push({type:"attribute",index:h,name:s,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,r=e.split(o),l=r.length-1;for(let e=0;e<l;e++){let n,o=r[e];if(""===o)n=c();else{const t=d.exec(o);null!==t&&a(t[2],i)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-i.length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===r[l]?(s.insertBefore(c(),t),n.push(t)):t.data=r[l],p+=l}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==u||(h++,e.insertBefore(c(),t)),u=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:s},parts:n}=t,o=document.createTreeWalker(s,133,null,!1);let i=p(n),r=n[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,i=p(n,i),r=n[i]}c.forEach((t=>t.parentNode.removeChild(t)))}const h=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},p=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),b={},f={};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,r=0,a=0,c=o.nextNode();for(;r<n.length;)if(i=n[r],l(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(s.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=s.pop(),c=o.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),S=` ${s} `;class v{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let r=0;r<t;r++){const t=this.strings[r],a=t.lastIndexOf("\x3c!--");o=(a>-1||o)&&-1===t.indexOf("--\x3e",a+1);const l=d.exec(t);e+=null===l?t+(o?S:n):t.substr(0,l.index)+l[1]+l[2]+i+l[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let n="";for(let o=0;o<e;o++){n+=t[o];const e=s[o];if(void 0!==e){const t=e.value;if(w(t)||!x(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===b||w(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=b,t(this)}this.value!==b&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}const t=this.__pendingValue;t!==b&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===f?(this.value=f,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const o of t)s=e[n],void 0===s&&(s=new N(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(o),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=b}}class q extends P{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends C{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=b}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;function U(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(s);return n=e.keyString.get(o),void 0===n&&(n=new r(t,t.getTemplateElement()),e.keyString.set(o,n)),e.stringsArray.set(t.strings,n),n}const O=new Map,R=new WeakMap;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const M=new
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class{handleAttributeExpressions(t,e,s,n){const o=e[0];if("."===o){return new q(t,e.slice(1),s).parts}if("@"===o)return[new A(t,e.slice(1),n.eventContext)];if("?"===o)return[new k(t,e.slice(1),s)];return new P(t,e,s).parts}handleTextExpression(t){return new N(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const B=(t,...e)=>new v(t,e,"html",M)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */,I=(t,e)=>`${t}--${e}`;let j=!0;void 0===window.ShadyCSS?j=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),j=!1);const z=t=>e=>{const n=I(e.type,t);let o=O.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},O.set(n,o));let i=o.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(s);if(i=o.keyString.get(a),void 0===i){const s=e.getTemplateElement();j&&window.ShadyCSS.prepareTemplateDom(s,t),i=new r(e,s),o.keyString.set(a,i)}return o.stringsArray.set(e.strings,i),i},$=["html","svg"],L=new Set,F=(t,e,s)=>{L.add(t);const n=s?s.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<i;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{$.forEach((e=>{const s=O.get(I(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),u(t,s)}))}))})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:o}=t;if(null==s)return void n.appendChild(e);const i=document.createTreeWalker(n,133,null,!1);let r=p(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===s&&(a=h(e),s.parentNode.insertBefore(e,s));-1!==r&&o[r].index===l;){if(a>0){for(;-1!==r;)o[r].index+=a,r=p(o,r);return}r=p(o,r)}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),u(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),D={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},J="finalized";class G extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=D){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdateInternal(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||D}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||H,o="function"==typeof n?n:n.fromAttribute;return o?o(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||H.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=D){const n=this.constructor,o=n._attributeNameForProperty(t,s);if(void 0!==o){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let n=!0;if(void 0!==t){const o=this.constructor;s=s||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}G.finalized=!0;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function Q(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):K(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class Z{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const s=e.reduce(((e,s,n)=>e+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1]),t[0]);return new Z(s,Y)};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class st extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),n=[];s.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!X){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Z(String(e),Y)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return et}}st.finalized=!0,st.render=(t,s,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,i=R.has(s),r=j&&11===s.nodeType&&!!s.host,a=r&&!L.has(o),l=a?document.createDocumentFragment():s;if(((t,s,n)=>{let o=R.get(s);void 0===o&&(e(s,s.firstChild),R.set(s,o=new N(Object.assign({templateFactory:U},n))),o.appendInto(s)),o.setValue(t),o.commit()})(t,l,Object.assign({templateFactory:z(o)},n)),a){const t=R.get(l);R.delete(l);const n=t.value instanceof y?t.value.template:void 0;F(o,l,n),e(s,s.firstChild),s.appendChild(l),R.set(s,t)}!i&&r&&window.ShadyCSS.styleElement(s.host)};var nt=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};let ot=class extends st{constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this.href="",this.btnStyle="",this.canSelect=!1,this.selected=!1,this.disableSelectedStyle=!1,this.buttonElement=null}static get styles(){return[tt`
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
      `]}firstUpdated(){if(!this.shadowRoot)throw new Error("Unexpected undefined shadowRoot");this.buttonElement=this.shadowRoot.querySelector("button")}render(){return B`
      <button
        class=${this.selected&&!this.disableSelectedStyle?"selected":""}
        part="button"
        ?disabled=${this.disabled}
        ?autofocus=${this.autofocus}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `}focus(){this.buttonElement&&this.buttonElement.focus()}handleClick(t){t.preventDefault(),t.stopImmediatePropagation(),this.href?window.location.href=this.href:(this.canSelect&&(this.selected=!this.selected),this.dispatchEvent(new CustomEvent("click")))}};var it;nt([Q({type:Boolean,reflect:!0})],ot.prototype,"disabled",void 0),nt([Q({type:Boolean,reflect:!0})],ot.prototype,"autofocus",void 0),nt([Q({type:String,reflect:!0})],ot.prototype,"href",void 0),nt([Q({type:String,reflect:!0})],ot.prototype,"btnStyle",void 0),nt([Q({type:Boolean,reflect:!0})],ot.prototype,"canSelect",void 0),nt([Q({type:Boolean,reflect:!0})],ot.prototype,"selected",void 0),nt([Q({type:Boolean,reflect:!0})],ot.prototype,"disableSelectedStyle",void 0),ot=nt([(it="qing-button",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(it,t):((t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}})(it,t))],ot);const rt="theme-dark";class at extends st{render(){return B`
      <div id="main">
        <qing-button id="btn" @click=${()=>alert("Hello world")}>Default</qing-button>
        <br />
        <qing-button class="green">Green</qing-button> <br />
        <qing-button class="small">Small</qing-button> <br />
        <qing-button class="black large">Black, Large</qing-button> <br />
        <qing-button class="blue small round colored-border"
          >Blue, small, round, colored-border</qing-button
        >
        <br />
        <qing-button class="blue small round colored-border" disabled>
          Blue, small, round, colored-border, disabled
        </qing-button>
        <br />
        <qing-button disabled>Disabled</qing-button>
        <br />
        <qing-button autofocus>Auto-focused</qing-button>
        <br />
        <qing-button href="http://google.com">href = google.com</qing-button>
        <p>A <qing-button class="btn-in-paragraph">button</qing-button> in a paragraph.</p>
        <p class="btn-group">
          <qing-button>Windows</qing-button>
          <qing-button>macOS</qing-button>
          <qing-button>Linux</qing-button>
        </p>
        <qing-button id="themes" @click=${this.switchThemes}>Switch themes</qing-button><br />
        <h2>CSS variables</h2>
        <qing-button id="button-outline">--button-outline-color</qing-button>
        <h2>Selected</h2>
        <qing-button canselect selected>I'm a checkbox</qing-button>
        <qing-button id="checkbox" canselect selected disableSelectedStyle
          >I'm a checkbox</qing-button
        >
      </div>
    `}handleFocusClick(){this.shadowRoot.getElementById("btn").focus()}switchThemes(){const{classList:t}=this.shadowRoot.getElementById("main");t.contains(rt)?t.remove(rt):t.add(rt)}}at.styles=tt`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  qing-button {
    margin-bottom: 1rem;
  }
  qing-button.green::part(button) {
    background-color: #4caf50;
    color: white;
  } /* Green */
  qing-button.blue::part(button) {
    background-color: #008cba;
    color: white;
  } /* Blue */
  qing-button.red::part(button) {
    background-color: #f44336;
    color: white;
  } /* Red */
  qing-button.gray::part(button) {
    background-color: #e7e7e7;
    color: black;
  } /* Gray */
  qing-button.black::part(button) {
    background-color: #555555;
    color: white;
  } /* Black */
  qing-button.small::part(button) {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.75rem;
  }
  qing-button.large::part(button) {
    font-size: 1.25rem;
    padding: 1rem 1.25rem;
    margin-bottom: 1.25rem;
  }
  qing-button.round::part(button) {
    border-radius: 0.75rem;
  }
  qing-button.colored-border::part(button) {
    border: 4px solid yellowgreen;
    border-radius: 10px;
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
`,customElements.define("example-app",at)}();
