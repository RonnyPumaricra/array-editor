(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,J=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),X=new WeakMap;let dt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(e,t))}return t}toString(){return this.cssText}};const yt=r=>new dt(typeof r=="string"?r:r+"",void 0,G),D=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new dt(e,r,G)},mt=(r,t)=>{J?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},Y=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return yt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const N=window,tt=N.trustedTypes,gt=tt?tt.emptyScript:"",et=N.reactiveElementPolyfillSupport,K={toAttribute(r,t){switch(t){case Boolean:r=r?gt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ct=(r,t)=>t!==r&&(t==t||r==r),k={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:ct};let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||k}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Y(s))}else t!==void 0&&e.push(Y(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return mt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=k){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:K).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=s.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:K;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},et==null||et({ReactiveElement:y}),((I=N.reactiveElementVersions)!==null&&I!==void 0?I:N.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;const R=window,A=R.trustedTypes,it=A?A.createPolicy("lit-html",{createHTML:r=>r}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,ut="?"+$,At=`<${ut}>`,b=document,x=(r="")=>b.createComment(r),C=r=>r===null||typeof r!="object"&&typeof r!="function",pt=Array.isArray,bt=r=>pt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,rt=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,ot=/"/g,vt=/^(?:script|style|textarea|title)$/i,Et=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),m=Et(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),lt=new WeakMap,g=b.createTreeWalker(b,129,null,!1),wt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=S;for(let l=0;l<e;l++){const a=r[l];let v,h,c=-1,p=0;for(;p<a.length&&(o.lastIndex=p,h=o.exec(a),h!==null);)p=o.lastIndex,o===S?h[1]==="!--"?o=st:h[1]!==void 0?o=rt:h[2]!==void 0?(vt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=_):h[3]!==void 0&&(o=_):o===_?h[0]===">"?(o=s??S,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,v=h[1],o=h[3]===void 0?_:h[3]==='"'?ot:nt):o===ot||o===nt?o=_:o===st||o===rt?o=S:(o=_,s=void 0);const U=o===_&&r[l+1].startsWith("/>")?" ":"";n+=o===S?a+At:c>=0?(i.push(v),a.slice(0,c)+"$lit$"+a.slice(c)+$+U):a+$+(c===-2?(i.push(void 0),l):U)}const d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[it!==void 0?it.createHTML(d):d,i]};class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const d=t.length-1,l=this.parts,[a,v]=wt(t,e);if(this.el=P.createElement(a,i),g.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=g.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith($)){const p=v[o++];if(h.push(c),p!==void 0){const U=s.getAttribute(p.toLowerCase()+"$lit$").split($),T=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:T[2],strings:U,ctor:T[1]==="."?xt:T[1]==="?"?Pt:T[1]==="@"?Ot:L})}else l.push({type:6,index:n})}for(const c of h)s.removeAttribute(c)}if(vt.test(s.tagName)){const h=s.textContent.split($),c=h.length-1;if(c>0){s.textContent=A?A.emptyScript:"";for(let p=0;p<c;p++)s.append(h[p],x()),g.nextNode(),l.push({type:2,index:++n});s.append(h[c],x())}}}else if(s.nodeType===8)if(s.data===ut)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)l.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var s,n,o,d;if(t===E)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=w(r,l._$AS(r,t.values),l,i)),t}class St{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:b).importNode(i,!0);g.currentNode=n;let o=g.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let v;a.type===2?v=new O(o,o.nextSibling,this,t):a.type===1?v=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(v=new Ut(o,this,t)),this.u.push(v),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=g.nextNode(),d++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const o=new St(n,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new P(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new O(this.O(x()),this.O(x()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class L{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const d=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=w(this,d[i+l],e,l),a===E&&(a=this._$AH[l]),o||(o=!C(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Ct=A?A.emptyScript:"";class Pt extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Ct):this.element.removeAttribute(this.name)}}class Ot extends L{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:u)===E)return;const s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const at=R.litHtmlPolyfillSupport;at==null||at(P,O),((V=R.litHtmlVersions)!==null&&V!==void 0?V:R.litHtmlVersions=[]).push("2.6.1");const Tt=(r,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new O(t.insertBefore(x(),d),d,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F,W;class f extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}}f.finalized=!0,f._$litElement$=!0,(F=globalThis.litElementHydrateSupport)===null||F===void 0||F.call(globalThis,{LitElement:f});const ht=globalThis.litElementPolyfillSupport;ht==null||ht({LitElement:f});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=r=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(r,t):((e,i)=>{const{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(o){customElements.define(e,o)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function Q(r){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(r,t,e):Ht(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;((q=window.HTMLSlotElement)===null||q===void 0?void 0:q.prototype.assignedElements)!=null;var Nt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,$t=(r,t,e,i)=>{for(var s=i>1?void 0:i?Rt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Nt(t,e,s),s};let M=class extends f{constructor(){super(...arguments),this.currentValue=""}handleReactiveUpdate(r){this.currentValue=r.detail.join(", ")}render(){return m`
      <h1>
        Edit an array, insert & remove elements and join the final result!
      </h1>
      <array-editor @arrayUpdate=${this.handleReactiveUpdate}></array-editor>
      <div class="result" .textContent=${this.currentValue}></div>
    `}};M.styles=D`
    :host {
      padding-inline: 32px;
    }
    h1 {
      text-align: center;
    }
    .result {
      text-align: center;
      font-size: 2rem;
    }
  `;$t([Q({state:!0})],M.prototype,"currentValue",2);M=$t([B("app-wrapper")],M);var Mt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,ft=(r,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Mt(t,e,s),s};let j=class extends f{constructor(){super(...arguments),this.arrayState=["A","B","C"],this.setValueOf=r=>t=>{const e=[...this.arrayState];if(!(r in e))throw new Error(`Didn't find index:${r} in Array:[${e.join()}]`);e[r]=t.detail,this.arrayState=e},this.addFieldAt=r=>()=>{const t=[...this.arrayState];t.splice(r,0,""),this.arrayState=t},this.removeFieldAt=r=>()=>{const t=[...this.arrayState];t.splice(r,1),this.arrayState=t}}bubbleArrayUpdate(r){this.dispatchEvent(new CustomEvent("arrayUpdate",{detail:r}))}getRenderableArray(){const r=[];for(let t=-1;t<this.arrayState.length*2;t++)t%2!==0?r.push(0):r.push(this.arrayState[t/2]);return r}render(){this.bubbleArrayUpdate(this.arrayState);const r=this.getRenderableArray();let t=0,e=0;return m`
      ${r.map(i=>typeof i!="number"?m`
              <array-input
                @inputChange=${this.setValueOf(t)}
                @removeField=${this.removeFieldAt(t++)}
                value=${i}
              ></array-input>
            `:m`<add-button
              @add=${this.addFieldAt(e++)}
            ></add-button>`)}
    `}};j.styles=D`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
  `;ft([Q({state:!0,type:Array})],j.prototype,"arrayState",2);j=ft([B("array-editor")],j);var zt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,_t=(r,t,e,i)=>{for(var s=i>1?void 0:i?Dt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&zt(t,e,s),s};let z=class extends f{constructor(){super(...arguments),this.value=""}handleInput({target:r}){const t=r.textContent;if(t===null)return;const e=t;this.dispatchEvent(new CustomEvent("inputChange",{detail:e}))}handleRemove(){this.dispatchEvent(new CustomEvent("removeField",{}))}render(){return m`
      <div
        class="input"
        contenteditable="true"
        tabindex="1"
        @blur=${this.handleInput}
        .textContent=${this.value}
      ></div>
      <div class="remove-btn" @click=${this.handleRemove}>
        <div class="less-sign"></div>
      </div>
    `}};z.styles=D`
    * {
      box-sizing: border-box;
    }
    :host {
      min-width: 150px;
      width: fit-content;
      max-width: 500px;
      height: 150px;
      margin-bottom: 1rem;
      border-radius: 24px;
      border: 4px solid currentColor;
      padding: 16px;
      display: grid;
      place-items: center;
      position: relative;
    }
    .input {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 1.5em;
      font-size: 3rem;
      text-align: center;

      /* Text Overflow */
      overflow: hidden;
      white-space: nowrap;
      isolation: isolate;
    }
    .input:focus {
      overflow: visible;
      background-color: var(--bg-active);
      z-index: 1;
    }
    .input:not(:focus) {
      text-overflow: ellipsis;
    }

    /* Remove Button */
    .remove-btn {
      position: absolute;
      inset: 1rem;
      top: auto;
      bottom: -1rem;
      height: 5rem;
      width: 5rem;
      margin: auto;
      background: var(--translucid-txt);
      border-radius: 4px;
      display: grid;
      place-items: center;
      cursor: pointer;
      /* Transition */
      opacity: 0;
      transition: opacity 200ms;
    }
    .less-sign {
      height: 0.5rem;
      width: 2.25rem;
      background: var(--primary);
    }
    .remove-btn:hover {
      opacity: 1;
    }
  `;_t([Q({attribute:!0})],z.prototype,"value",2);z=_t([B("array-input")],z);var Lt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,It=(r,t,e,i)=>{for(var s=i>1?void 0:i?Bt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Lt(t,e,s),s};let Z=class extends f{handleClick(){this.dispatchEvent(new CustomEvent("add"))}render(){return m`
      <div class="box-button" @click=${this.handleClick}>
        <div class="plus-sign"></div>
      </div>
    `}};Z.styles=D`
    :host {
      width: 0;
      position: relative;
    }
    .box-button {
      box-sizing: border-box;
      /* */
      position: absolute;
      height: 4rem;
      inset: 0 -2rem;
      margin: auto;
      display: grid;
      place-items: center;
      /* */
      // border: 4px solid var(--primary);
      border-radius: 4px;
      background-color: var(--translucid-txt);
      cursor: pointer;

      /* Transitions */
      opacity: 0;
      // opacity: 0.3;
      backdrop-filter: blur(10px);
      transition: opacity 200ms;
    }
    .box-button:hover {
      opacity: 1;
    }

    /* Plus sign */
    .plus-sign {
      position: relative;
      height: 2rem;
      width: 2rem;
    }
    .plus-sign::before,
    .plus-sign::after {
      content: "";
      background-color: var(--primary);
      position: absolute;
      width: 6px;
      height: 6px;
      inset: 0;
      margin: auto;
    }
    .plus-sign::before {
      width: 100%;
    }
    .plus-sign::after {
      height: 100%;
    }
  `;Z=It([B("add-button")],Z);
