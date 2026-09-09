(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,ee=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,w=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,ie=te(e=>e.replace(re,`-$1`).toLowerCase()),ae=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=te(e=>e?`on${ae(e)}`:``),se=(e,t)=>!Object.is(e,t),ce=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},le=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ue=e=>{let t=parseFloat(e);return isNaN(t)?e:t},de,fe=()=>de||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function pe(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?_e(r):pe(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var me=/;(?![^(]*\))/g,he=/:([^]+)/,ge=/\/\*[^]*?\*\//g;function _e(e){let t={};return e.replace(ge,``).split(me).forEach(e=>{if(e){let n=e.split(he);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function E(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=E(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ve=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ye=e(ve);ve+``;function be(e){return!!e||e===``}function xe(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ce(e[r],t[r]);return n}function Se(e,t){if(e.size!==t.size)return!1;let n=Array.from(t),r=new Uint8Array(n.length);for(let t of e){let e=-1;for(let i=0;i<n.length;i++)if(!r[i]&&Ce(t,n[i])){e=i;break}if(e<0)return!1;r[e]=1}return!0}function Ce(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?xe(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r)return!1;if(n=f(e),r=f(t),n||r||(n=p(e),r=p(t),n||r))return n&&r?Se(e,t):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Ce(e[n],t[n]))return!1}}return String(e)===String(t)}function we(e,t){return e.findIndex(e=>Ce(e,t))}var Te=e=>!!(e&&e.__v_isRef===!0),D=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Te(e)?D(e.value):JSON.stringify(e,Ee,2):String(e),Ee=(e,t)=>Te(t)?Ee(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[De(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>De(e))}:_(t)?De(t):v(t)&&!d(t)&&!C(t)?String(t):t,De=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,O,Oe=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&O&&(O.active?(this.parent=O,this.index=(O.scopes||(O.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=O;try{return O=this,e()}finally{O=t}}}on(){++this._on===1&&(this.prevScope=O,O=this)}off(){if(this._on>0&&--this._on===0){if(O===this)O=this.prevScope;else{let e=O;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ke(){return O}var k,Ae=new WeakSet,je=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,O&&(O.active?O.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ae.has(this)&&(Ae.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Je(this),Re(this);let e=k,t=We;k=this,We=!0;try{return this.fn()}finally{ze(this),k=e,We=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)He(e);this.deps=this.depsTail=void 0,Je(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ae.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Be(this)&&this.run()}get dirty(){return Be(this)}},Me=0,Ne,Pe;function Fe(e,t=!1){if(e.flags|=8,t){e.next=Pe,Pe=e;return}e.next=Ne,Ne=e}function Ie(){Me++}function Le(){if(--Me>0)return;if(Pe){let e=Pe;for(Pe=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ne;){let t=Ne;for(Ne=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Re(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ze(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),He(r),Ue(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Be(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ve(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ve(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ye)||(e.globalVersion=Ye,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Be(e))))return;e.flags|=2;let t=e.dep,n=k,r=We;k=e,We=!0;try{Re(e);let n=e.fn(e._value);(t.version===0||se(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{k=n,We=r,ze(e),e.flags&=-3}}function He(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)He(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ue(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var We=!0,Ge=[];function Ke(){Ge.push(We),We=!1}function qe(){let e=Ge.pop();We=e===void 0||e}function Je(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=k;k=void 0;try{t()}finally{k=e}}}var Ye=0,Xe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ze=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!k||!We||k===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==k)t=this.activeLink=new Xe(k,this),k.deps?(t.prevDep=k.depsTail,k.depsTail.nextDep=t,k.depsTail=t):k.deps=k.depsTail=t,Qe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=k.depsTail,t.nextDep=void 0,k.depsTail.nextDep=t,k.depsTail=t,k.deps===t&&(k.deps=e)}return t}trigger(e){this.version++,Ye++,this.notify(e)}notify(e){Ie();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Le()}}};function Qe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Qe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var $e=new WeakMap,et=Symbol(``),tt=Symbol(``),nt=Symbol(``);function rt(e,t,n){if(We&&k){let t=$e.get(e);t||$e.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ze),r.map=t,r.key=n),r.track()}}function it(e,t,n,r,i,a){let o=$e.get(e);if(!o){Ye++;return}let s=e=>{e&&e.trigger()};if(Ie(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&ee(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===nt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(nt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(et)),f(e)&&s(o.get(tt)));break;case`delete`:i||(s(o.get(et)),f(e)&&s(o.get(tt)));break;case`set`:f(e)&&s(o.get(et))}}Le()}function at(e){let t=A(e);return t===e?t:(rt(t,`iterate`,nt),Wt(e)?t:t.map(qt))}function ot(e){return rt(e=A(e),`iterate`,nt),e}function st(e,t){return Ut(e)?Jt(Ht(e)?qt(t):t):qt(t)}var ct={__proto__:null,[Symbol.iterator](){return lt(this,Symbol.iterator,e=>st(this,e))},concat(...e){return at(this).concat(...e.map(e=>d(e)?at(e):e))},entries(){return lt(this,`entries`,e=>(e[1]=st(this,e[1]),e))},every(e,t){return dt(this,`every`,e,t,void 0,arguments)},filter(e,t){return dt(this,`filter`,e,t,e=>e.map(e=>st(this,e)),arguments)},find(e,t){return dt(this,`find`,e,t,e=>st(this,e),arguments)},findIndex(e,t){return dt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return dt(this,`findLast`,e,t,e=>st(this,e),arguments)},findLastIndex(e,t){return dt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return dt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return pt(this,`includes`,e)},indexOf(...e){return pt(this,`indexOf`,e)},join(e){return at(this).join(e)},lastIndexOf(...e){return pt(this,`lastIndexOf`,e)},map(e,t){return dt(this,`map`,e,t,void 0,arguments)},pop(){return mt(this,`pop`)},push(...e){return mt(this,`push`,e)},reduce(e,...t){return ft(this,`reduce`,e,t)},reduceRight(e,...t){return ft(this,`reduceRight`,e,t)},shift(){return mt(this,`shift`)},some(e,t){return dt(this,`some`,e,t,void 0,arguments)},splice(...e){return mt(this,`splice`,e)},toReversed(){return at(this).toReversed()},toSorted(e){return at(this).toSorted(e)},toSpliced(...e){return at(this).toSpliced(...e)},unshift(...e){return mt(this,`unshift`,e)},values(){return lt(this,`values`,e=>st(this,e))}};function lt(e,t,n){let r=ot(e),i=r[t]();return r!==e&&!Wt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ut=Array.prototype;function dt(e,t,n,r,i,a){let o=ot(e),s=o!==e&&!Wt(e),c=o[t];if(c!==ut[t]){let t=c.apply(e,a);return s?qt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,st(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ft(e,t,n,r){let i=ot(e),a=i!==e&&!Wt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=st(e,t)),n.call(this,t,st(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?st(e,c):c}function pt(e,t,n){let r=A(e);rt(r,`iterate`,nt);let i=r[t](...n);return(i===-1||i===!1)&&Gt(n[0])?(n[0]=A(n[0]),r[t](...n)):i}function mt(e,t,n=[]){Ke(),Ie();let r=A(e)[t].apply(e,n);return Le(),qe(),r}var ht=e(`__proto__,__v_isRef,__isVue`),gt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function _t(e){_(e)||(e=String(e));let t=A(this);return rt(t,`has`,e),t.hasOwnProperty(e)}var vt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?It:Ft:i?Pt:Nt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=ct[t]))return e;if(t===`hasOwnProperty`)return _t}let o=Reflect.get(e,t,Yt(e)?e:n);if((_(t)?gt.has(t):ht(t))||(r||rt(e,`get`,t),i))return o;if(Yt(o)){let e=a&&ee(t)?o:o.value;return r&&v(e)?Bt(e):e}return v(o)?r?Bt(o):Rt(o):o}},yt=class extends vt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&ee(t);if(!this._isShallow){let e=Ut(i);if(!Wt(n)&&!Ut(n)&&(i=A(i),n=A(n)),!a&&Yt(i)&&!Yt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Yt(e)?e:r);return e===A(r)&&s&&(o?se(n,i)&&it(e,`set`,t,n,i):it(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&it(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!gt.has(t))&&rt(e,`has`,t),n}ownKeys(e){return rt(e,`iterate`,d(e)?`length`:et),Reflect.ownKeys(e)}},bt=class extends vt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},xt=new yt,St=new bt,Ct=new yt(!0),wt=e=>e,Tt=e=>Reflect.getPrototypeOf(e);function Et(e,t,n){return function(...r){let i=this.__v_raw,a=A(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?wt:t?Jt:qt;return!t&&rt(a,`iterate`,l?tt:et),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Dt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Ot(e,t){let n={get(n){let r=this.__v_raw,i=A(r),a=A(n);e||(se(n,a)&&rt(i,`get`,n),rt(i,`get`,a));let{has:o}=Tt(i),s=t?wt:e?Jt:qt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&rt(A(t),`iterate`,et),t.size},has(t){let n=this.__v_raw,r=A(n),i=A(t);return e||(se(t,i)&&rt(r,`has`,t),rt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=A(a),s=t?wt:e?Jt:qt;return!e&&rt(o,`iterate`,et),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Dt(`add`),set:Dt(`set`),delete:Dt(`delete`),clear:Dt(`clear`)}:{add(e){let n=A(this),r=Tt(n),i=A(e),a=!t&&!Wt(e)&&!Ut(e)?i:e;return r.has.call(n,a)||se(e,a)&&r.has.call(n,e)||se(i,a)&&r.has.call(n,i)||(n.add(a),it(n,`add`,a,a)),this},set(e,n){!t&&!Wt(n)&&!Ut(n)&&(n=A(n));let r=A(this),{has:i,get:a}=Tt(r),o=i.call(r,e);o||=(e=A(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?se(n,s)&&it(r,`set`,e,n,s):it(r,`add`,e,n),this},delete(e){let t=A(this),{has:n,get:r}=Tt(t),i=n.call(t,e);i||=(e=A(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&it(t,`delete`,e,void 0,a),o},clear(){let e=A(this),t=e.size!==0,n=e.clear();return t&&it(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Et(r,e,t)}),n}function kt(e,t){let n=Ot(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var At={get:kt(!1,!1)},jt={get:kt(!1,!0)},Mt={get:kt(!0,!1)},Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap,It=new WeakMap;function Lt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Rt(e){return Ut(e)?e:Vt(e,!1,xt,At,Nt)}function zt(e){return Vt(e,!1,Ct,jt,Pt)}function Bt(e){return Vt(e,!0,St,Mt,Ft)}function Vt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Lt(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Ht(e){return Ut(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Wt(e){return!!(e&&e.__v_isShallow)}function Gt(e){return e?!!e.__v_raw:!1}function A(e){let t=e&&e.__v_raw;return t?A(t):e}function Kt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&le(e,`__v_skip`,!0),e}var qt=e=>v(e)?Rt(e):e,Jt=e=>v(e)?Bt(e):e;function Yt(e){return e?e.__v_isRef===!0:!1}function j(e){return Xt(e,!1)}function Xt(e,t){return Yt(e)?e:new Zt(e,t)}var Zt=class{constructor(e,t){this.dep=new Ze,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:A(e),this._value=t?e:qt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Wt(e)||Ut(e);e=n?e:A(e),se(e,t)&&(this._rawValue=e,this._value=n?e:qt(e),this.dep.trigger())}};function M(e){return Yt(e)?e.value:e}var Qt={get:(e,t,n)=>t===`__v_raw`?e:M(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Yt(i)&&!Yt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $t(e){return Ht(e)?e:new Proxy(e,Qt)}var en=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ze(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ye-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&k!==this)return Fe(this,!0),!0}get value(){let e=this.dep.track();return Ve(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function tn(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new en(r,i,n)}var nn={},rn=new WeakMap,an=void 0;function on(e,t=!1,n=an){if(n){let t=rn.get(n);t||rn.set(n,t=[]),t.push(e)}}function sn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Wt(e)||o===!1||o===0?cn(e,1):cn(e),m,g,_,v,y=!1,b=!1;if(Yt(e)?(g=()=>e.value,y=Wt(e)):Ht(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Ht(e)||Wt(e)),g=()=>e.map(e=>{if(Yt(e))return e.value;if(Ht(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ke();try{_()}finally{qe()}}let t=an;an=m;try{return f?f(e,3,[v]):e(v)}finally{an=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>cn(e(),t)}let x=ke(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(nn):nn,ee=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>se(e,C[t])):se(t,C))){_&&_();let e=an;an=m;try{let e=[t,C===nn?void 0:b&&C[0]===nn?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{an=e}}}else m.run()}};return u&&u(ee),m=new je(g),m.scheduler=l?()=>l(ee,!1):ee,v=e=>on(e,!1,m),_=m.onStop=()=>{let e=rn.get(m);if(e){if(f)f(e,4);else for(let t of e)t();rn.delete(m)}},n?a?ee(!0):C=m.run():l?l(ee.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function cn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Yt(e))cn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)cn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{cn(e,t,n)});else if(C(e)){for(let r in e)cn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&cn(e[r],t,n)}return e}function ln(e,t,n,r){try{return r?e(...r):e()}catch(e){dn(e,t,n)}}function un(e,t,n,r){if(h(e)){let i=ln(e,t,n,r);return i&&y(i)&&i.catch(e=>{dn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(un(e[a],t,n,r));return i}}function dn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ke(),ln(o,null,10,[e,i,a]),qe();return}}fn(e,r,a,i,s)}function fn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var pn=[],mn=-1,hn=[],gn=null,_n=0,vn=Promise.resolve(),yn=null;function bn(e){let t=yn||vn;return e?t.then(this?e.bind(this):e):t}function xn(e){let t=mn+1,n=pn.length;for(;t<n;){let r=t+n>>>1,i=pn[r],a=Dn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Sn(e){if(!(e.flags&1)){let t=Dn(e),n=pn[pn.length-1];!n||!(e.flags&2)&&t>=Dn(n)?pn.push(e):pn.splice(xn(t),0,e),e.flags|=1,Cn()}}function Cn(){yn||=vn.then(On)}function wn(e){if(!d(e))gn&&e.id===-1?gn.splice(_n+1,0,e):e.flags&1||(hn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)hn.push(e[t]);Cn()}function Tn(e,t,n=mn+1){for(;n<pn.length;n++){let t=pn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;pn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function En(e){if(hn.length){let e=[...new Set(hn)].sort((e,t)=>Dn(e)-Dn(t));if(hn.length=0,gn){for(let t=0;t<e.length;t++)gn.push(e[t]);return}for(gn=e,_n=0;_n<gn.length;_n++){let e=gn[_n];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gn=null,_n=0}}var Dn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function On(e){try{for(mn=0;mn<pn.length;mn++){let e=pn[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ln(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<pn.length;mn++){let e=pn[mn];e&&(e.flags&=-2)}mn=-1,pn.length=0,En(e),yn=null,(pn.length||hn.length)&&On(e)}}var kn=null,An=null;function jn(e){let t=kn;return kn=e,An=e&&e.type.__scopeId||null,t}function Mn(e,t=kn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&na(-1);let i=jn(t),a=Qi.length,o;try{o=e(...n)}finally{for(let e=Qi.length;e>a;e--)ea();jn(i),r._d&&na(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nn(e,n){if(kn===null)return e;let r=La(kn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&cn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Pn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ke(),un(c,n,8,[e.el,s,e,t]),qe())}}function Fn(e,t){if(Ca){let n=Ca.provides,r=Ca.parent&&Ca.parent.provides;r===n&&(n=Ca.provides=Object.create(r)),n[e]=t}}function In(e,t,n=!1){let r=wa();if(r||ai){let i=ai?ai._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Ln=Symbol.for(`v-scx`),Rn=()=>In(Ln);function zn(e,t,n){return Bn(e,t,n)}function Bn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Aa){if(c===`sync`){let e=Rn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Ca;u.call=(e,t,n)=>un(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{Ii(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():Sn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=sn(e,n,u);return Aa&&(f?f.push(h):d&&h()),h}function Vn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Hn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=Da(this),s=Bn(i,a.bind(r),n);return o(),s}function Hn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Un=new WeakMap,Wn=Symbol(`_vte`),Gn=e=>e.__isTeleport,Kn=e=>e&&(e.disabled||e.disabled===``),qn=e=>e&&(e.defer||e.defer===``),Jn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Yn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Xn=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},Zn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Kn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Kn(e.props),r=e.target=Xn(e.props,m),a=nr(r,e,h,p);r&&(o!==`svg`&&Jn(r)?o=`svg`:o!==`mathml`&&Yn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),tr(e,!1)))},S=e=>{let t=()=>{if(Un.get(e)===t){if(Un.delete(e),Kn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),tr(e,!0)}x(e)}};Un.set(e,t),Ii(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),qn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),tr(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Un.get(e);if(u){u.flags|=8,Un.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Kn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Jn(p)?o=`svg`:(o===`mathml`||Yn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),Hi(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Qn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=Xn(t.props,m);e&&(t.target=e,Qn(t,e,null,l,0))}else g&&Qn(t,p,h,l,1);tr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Kn(f),m=a||!p,h=Un.get(e);if(h&&(h.flags|=8,Un.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:Qn,hydrate:$n};function Qn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Un.has(e)&&(!d||Kn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function $n(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=Xn(t.props,c),h=Kn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||nr(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||nr(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),tr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var er=Zn;function tr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function nr(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Wn]=o,e&&(r(a,e,i),r(o,e,i)),o}var rr=Symbol(`_leaveCb`);function ir(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Xi){t=n;break}}return t}function ar(e){if(!pr(e))return Gn(e.type)&&e.children?ir(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function or(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;or(Gn(n.type)&&ar(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function sr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function cr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var lr=new WeakMap;function ur(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>ur(e,n&&(d(n)?n[t]:n),r,a,o));return}if(fr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ur(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?La(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=A(v),b=v===t?i:e=>!cr(_,e)&&u(y,e),x=(e,t)=>!(t&&cr(_,t));if(m!=null&&m!==p){if(dr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Yt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))ln(p,f,12,[l,_]);else{let t=g(p),n=Yt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),lr.delete(e)};t.id=-1,lr.set(e,t),Ii(t,r)}else dr(e),i()}}}function dr(e){let t=lr.get(e);t&&(t.flags|=8,lr.delete(e))}fe().requestIdleCallback,fe().cancelIdleCallback;var fr=e=>!!e.type.__asyncLoader,pr=e=>e.type.__isKeepAlive;function mr(e,t){gr(e,`a`,t)}function hr(e,t){gr(e,`da`,t)}function gr(e,t,n=Ca){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(vr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)pr(e.parent.vnode)&&_r(r,t,n,e),e=e.parent}}function _r(e,t,n,r){let i=vr(t,e,r,!0);Tr(()=>{c(r[t],i)},n)}function vr(e,t,n=Ca,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ke();let i=Da(n),a=un(t,n,e,r);return i(),qe(),a};return r?i.unshift(a):i.push(a),a}}var yr=e=>(t,n=Ca)=>{(!Aa||e===`sp`)&&vr(e,(...e)=>t(...e),n)},br=yr(`bm`),xr=yr(`m`),Sr=yr(`bu`),Cr=yr(`u`),wr=yr(`bum`),Tr=yr(`um`),Er=yr(`sp`),Dr=yr(`rtg`),Or=yr(`rtc`);function kr(e,t=Ca){vr(`ec`,e,t)}var Ar=`components`,jr=Symbol.for(`v-ndc`);function Mr(e){return g(e)?Nr(Ar,e,!1)||e:e||jr}function Nr(e,t,n=!0,r=!1){let i=kn||Ca;if(i){let n=i.type;if(e===Ar){let e=Ra(n,!1);if(e&&(e===t||e===T(t)||e===ae(T(t))))return n}let a=Pr(i[e]||n[e],t)||Pr(i.appContext[e],t);return!a&&r?n:a}}function Pr(e,t){return e&&(e[t]||e[T(t)]||e[ae(T(t))])}function Fr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Ht(e),r=!1,s=!1;n&&(r=!Wt(e),s=Ut(e),e=ot(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Jt(qt(e[n])):qt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var Ir=e=>e?ka(e)?La(e):Ir(e.parent):null,Lr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kr(e),$forceUpdate:e=>e.f||=()=>{Sn(e.update)},$nextTick:e=>e.n||=bn.bind(e.proxy),$watch:e=>Vn.bind(e)}),Rr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),zr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Rr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Vr&&(s[n]=0)}let d=Lr[n],f,p;if(d)return n===`$attrs`&&rt(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Rr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Rr(n,c)||u(o,c)||u(i,c)||u(Lr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Br(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Vr=!0;function Hr(e){let t=Kr(e),n=e.proxy,i=e.ctx;Vr=!1,t.beforeCreate&&Wr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:w,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:ie,inheritAttrs:ae,components:oe,directives:se,filters:ce}=t;if(u&&Ur(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Rt(t))}if(Vr=!0,o)for(let e in o){let t=o[e],a=R({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Gr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Fn(t,e[t])})}f&&Wr(f,e,`c`);function le(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(le(br,p),le(xr,m),le(Sr,g),le(Cr,_),le(mr,y),le(hr,b),le(kr,T),le(Or,te),le(Dr,ne),le(wr,S),le(Tr,ee),le(Er,re),d(ie)){if(ie.length){let t=e.exposed||={};ie.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}w&&e.render===r&&(e.render=w),ae!=null&&(e.inheritAttrs=ae),oe&&(e.components=oe),se&&(e.directives=se),re&&sr(e)}function Ur(e,t,n=r){d(e)&&(e=Zr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?In(r.from||n,r.default,!0):In(r.from||n):In(r),Yt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Wr(e,t,n){un(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gr(e,t,n,r){let i=r.includes(`.`)?Hn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&zn(i,n)}else if(h(e))zn(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>Gr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&zn(i,r,e)}}}function Kr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>qr(c,e,o,!0)),qr(c,t,o)),v(t)&&a.set(t,c),c}function qr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&qr(e,a,n,!0),i&&i.forEach(t=>qr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Jr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Jr={data:Yr,props:ei,emits:ei,methods:$r,computed:$r,beforeCreate:Qr,created:Qr,beforeMount:Qr,mounted:Qr,beforeUpdate:Qr,updated:Qr,beforeDestroy:Qr,beforeUnmount:Qr,destroyed:Qr,unmounted:Qr,activated:Qr,deactivated:Qr,errorCaptured:Qr,serverPrefetch:Qr,components:$r,directives:$r,watch:ti,provide:Yr,inject:Xr};function Yr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Xr(e,t){return $r(Zr(e),Zr(t))}function Zr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qr(e,t){return e?[...new Set([].concat(e,t))]:t}function $r(e,t){return e?s(Object.create(null),e,t):t}function ei(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Br(e),Br(t??{})):t}function ti(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Qr(e[r],t[r]);return n}function ni(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ri=0;function ii(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=ni(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:ri++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Va,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||L(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,La(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(un(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=ai;ai=l;try{return e()}finally{ai=t}}};return l}}var ai=null,oi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${ie(t)}Modifiers`];function si(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&oi(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(ue)));let c,l=i[c=oe(n)]||i[c=oe(T(n))];!l&&o&&(l=i[c=oe(ie(n))]),l&&un(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,un(u,e,6,a)}}var ci=new WeakMap;function li(e,t,n=!1){let r=n?ci:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=li(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function ui(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,ie(t))||u(e,t))}function di(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=jn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ha(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ha(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:fi(c)}}catch(t){Qi.length=0,dn(t,e,1),v=L(Xi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=pi(y,a)),b=da(b,y,!1,!0))}return n.dirs&&(b=da(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&or(Gn(b.type)&&ar(b)||b,n.transition),v=b,jn(_),v}var fi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},pi=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(gi(o,r,n)&&!ui(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||hi(r,o,l):!!o;return!1}function hi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(gi(t,e,a)&&!ui(n,a))return!0}return!1}function gi(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!Ce(r,i):r!==i}function _i({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var vi={},yi=()=>Object.create(vi),bi=e=>Object.getPrototypeOf(e)===vi;function xi(e,t,n,r=!1){let i={},a=yi();e.propsDefaults=Object.create(null),Ci(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:zt(i):e.type.props?i:a,e.attrs=a}function Si(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=A(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ui(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=wi(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Ci(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=ie(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=wi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&it(e.attrs,`set`,``)}function Ci(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(w(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:ui(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=A(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=wi(a,n,s,i[s],e,!u(i,s))}}return s}function wi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Da(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ie(n))&&(r=!0))}return r}var Ti=new WeakMap;function Ei(e,r,i=!1){let a=i?Ti:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=Ei(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);Di(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(Di(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Di(e){return e[0]!==`$`&&!w(e)}var Oi=e=>e===`_`||e===`_ctx`||e===`$stable`,ki=e=>d(e)?e.map(ha):[ha(e)],Ai=(e,t,n)=>{if(t._n)return t;let r=Mn((...e)=>ki(t(...e)),n);return r._c=!1,r},ji=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Oi(n))continue;let i=e[n];if(h(i))t[n]=Ai(n,i,r);else if(i!=null){let e=ki(i);t[n]=()=>e}}},Mi=(e,t)=>{let n=ki(t);e.slots.default=()=>n},Ni=(e,t,n)=>{for(let r in t)(n||!Oi(r))&&(e[r]=t[r])},Pi=(e,t,n)=>{let r=e.slots=yi();if(e.vnode.shapeFlag&32){let e=t._;e?(Ni(r,t,n),n&&le(r,`_`,e,!0)):ji(t,r)}else t&&Mi(e,t)},Fi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:Ni(a,n,r):(o=!n.$stable,ji(n,a)),s=n}else n&&(Mi(e,n),s={default:1});if(o)for(let e in a)!Oi(e)&&s[e]==null&&delete a[e]},Ii=Ji;function Li(e){return Ri(e)}function Ri(e,i){let a=fe();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!oa(e,t)&&(r=Se(e),E(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Yi:y(e,t,n,r);break;case Xi:b(e,t,n,r);break;case Zi:e??x(t,n,r,o);break;case N:oe(e,t,n,r,i,a,o,s,c);break;default:d&1?ee(e,t,n,r,i,a,o,s,c):d&6?se(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Te)}u!=null&&i?ur(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&ur(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ee=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,zi(e,a),s,u),_&&Pn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!w(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ya(f,r,e)}_&&Pn(e,null,r,`beforeMount`);let v=Vi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Ii(()=>{try{f&&ya(f,r,e),v&&g.enter(d),_&&Pn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||qi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?ga(e[l]):ha(e[l]);v(null,c,t,n,r,i,a,o,s)}},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Bi(r,!1),(g=h.onVnodeBeforeUpdate)&&ya(g,r,n,e),f&&Pn(n,e,r,`beforeUpdate`),r&&Bi(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ie(e.dynamicChildren,d,l,r,i,zi(n,a),o):s||me(e,n,l,null,r,i,zi(n,a),o,!1),u>0){if(u&16)ae(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&ae(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&Ii(()=>{g&&ya(g,r,n,e),f&&Pn(n,e,r,`updated`)},i)},ie=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===N||!oa(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},ae=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!w(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(w(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},oe=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ie(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Hi(e,t,!0)):me(e,t,n,f,i,a,s,c,l)},se=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):le(t,n,r,i,a,o,c):ue(e,t,c)},le=(e,t,n,r,i,a,o)=>{let s=e.component=Sa(e,r,i);if(pr(e)&&(s.ctx.renderer=Te),ja(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,de,o),!e.el){let r=s.subTree=L(Xi);b(null,r,t,n),e.placeholder=r.el}}else de(s,e,t,n,i,a,o)},ue=(e,t,n)=>{let r=t.component=e.component;if(mi(e,t,n)){if(r.asyncDep&&!r.asyncResolved){pe(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},de=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Wi(e);if(n){t&&(t.el=c.el,pe(e,t,o)),n.asyncDep.then(()=>{Ii(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Bi(e,!1),t?(t.el=c.el,pe(e,t,o)):t=c,n&&ce(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ya(d,s,t,c),Bi(e,!0);let f=di(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Se(p),e,i,a),t.el=f.el,u===null&&_i(e,f.el),r&&Ii(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Ii(()=>ya(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=fr(t);if(Bi(e,!1),l&&ce(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ya(o,d,t),Bi(e,!0),s&&Ee){let t=()=>{e.subTree=di(e),Ee(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=di(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Ii(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Ii(()=>ya(o,d,e),i)}(t.shapeFlag&256||d&&fr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Ii(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new je(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Sn(u),Bi(e,!0),l()},pe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Si(e,t.props,r,n),Fi(e,t.children,n),Ke(),Tn(e),qe()},me=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ge(l,d,n,r,i,a,o,s,c);return}if(f&256){he(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&xe(l,i,a),d!==l&&p(n,d)):u&16?m&16?ge(l,d,n,r,i,a,o,s,c):xe(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},he=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?ga(t[p]):ha(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?xe(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},ge=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?ga(t[u]):ha(t[u]);if(oa(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?ga(t[p]):ha(t[p]);if(oa(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?ga(t[u]):ha(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)E(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ga(t[u]):ha(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){E(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&oa(n,t[_])){i=_;break}i===void 0?E(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let ee=x?Ui(C):n;for(_=ee.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Ki(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==ee[_]?_e(n,r,p,2):_--)}}},_e=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){_e(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Te);return}if(c===N){o(a,t,n);for(let e=0;e<u.length;e++)_e(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Zi){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[rr]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),Ii(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[rr];a._isLeaving&&a[rr](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},E=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ke(),ur(s,null,n,e,!0),qe()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!fr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ya(_,t,e),u&6)be(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Pn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Te,r):l&&!l.hasOnce&&(a!==N||d>0&&d&64)?xe(l,t,n,!1,!0):(a===N&&d&384||!i&&u&16)&&xe(c,t,n),r&&ve(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Ii(()=>{_&&ya(_,t,e),h&&Pn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ve=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===N){ye(n,r);return}if(t===Zi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ye=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},be=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Gi(c),Gi(l),r&&ce(r),i.stop(),a&&(a.flags|=8,E(o,e,t,n)),s&&Ii(s,t),Ii(()=>{e.isUnmounted=!0},t)},xe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)E(e[o],t,n,r,i)},Se=e=>{if(e.shapeFlag&6)return Se(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Wn];return n?h(n):t},Ce=!1,we=(e,t,n)=>{let r;e==null?t._vnode&&(E(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Ce||=(Ce=!0,Tn(r),En(),!1)},Te={p:v,um:E,m:_e,r:ve,mt:le,mc:T,pc:me,pbc:ie,n:Se,o:e},D,Ee;return i&&([D,Ee]=i(Te)),{render:we,hydrate:D,createApp:ii(we,D)}}function zi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Bi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Vi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ga(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Hi(t,a)),a.type===Yi&&(a.patchFlag===-1&&(a=i[e]=ga(a)),a.el=t.el),a.type===Xi&&!a.el&&(a.el=t.el)}}function Ui(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Wi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Wi(t)}function Gi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ki(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ki(t.subTree):null}var qi=e=>e.__isSuspense;function Ji(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):wn(e)}var N=Symbol.for(`v-fgt`),Yi=Symbol.for(`v-txt`),Xi=Symbol.for(`v-cmt`),Zi=Symbol.for(`v-stc`),Qi=[],$i=null;function P(e=!1){Qi.push($i=e?null:[])}function ea(){Qi.pop(),$i=Qi[Qi.length-1]||null}var ta=1;function na(e,t=!1){ta+=e,e<0&&$i&&t&&($i.hasOnce=!0)}function ra(e){return e.dynamicChildren=ta>0?$i||n:null,ea(),ta>0&&$i&&$i.push(e),e}function F(e,t,n,r,i,a){return ra(I(e,t,n,r,i,a,!0))}function ia(e,t,n,r,i){return ra(L(e,t,n,r,i,!0))}function aa(e){return e?e.__v_isVNode===!0:!1}function oa(e,t){return e.type===t.type&&e.key===t.key}var sa=({key:e})=>e??null,ca=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Yt(e)||h(e)?{i:kn,r:e,k:t,f:!!n}:e);function I(e,t=null,n=null,r=0,i=null,a=e===N?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sa(t),ref:t&&ca(t),scopeId:An,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kn};return s?(_a(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),ta>0&&!o&&$i&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&$i.push(c),c}var L=la;function la(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===jr)&&(e=Xi),aa(e)){let r=da(e,t,!0);return n&&_a(r,n),ta>0&&!a&&$i&&(r.shapeFlag&6?$i[$i.indexOf(e)]=r:$i.push(r)),r.patchFlag=-2,r}if(za(e)&&(e=e.__vccOpts),t){t=ua(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=E(e)),v(n)&&(Gt(n)&&!d(n)&&(n=s({},n)),t.style=pe(n))}let o=g(e)?1:qi(e)?128:Gn(e)?64:v(e)?4:h(e)?2:0;return I(e,t,n,r,i,o,a,!0)}function ua(e){return e?Gt(e)||bi(e)?s({},e):e:null}function da(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?va(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&sa(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ca(t)):[a,ca(t)]:ca(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==N?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&da(e.ssContent),ssFallback:e.ssFallback&&da(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&or(u,c.clone(u)),u}function fa(e=` `,t=0){return L(Yi,null,e,t)}function pa(e,t){let n=L(Zi,null,e);return n.staticCount=t,n}function ma(e=``,t=!1){return t?(P(),ia(Xi,null,e)):L(Xi,null,e)}function ha(e){return e==null||typeof e==`boolean`?L(Xi):d(e)?L(N,null,e.slice()):aa(e)?ga(e):L(Yi,null,String(e))}function ga(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:da(e)}function _a(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),_a(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!bi(t)?t._ctx=kn:r===3&&kn&&(kn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){_a(e,{default:t});return}t={default:t,_ctx:kn},n=32}else t=String(t),r&64?(n=16,t=[fa(t)]):n=8;e.children=t,e.shapeFlag|=n}function va(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=E([t.class,r.class]));else if(e===`style`)t.style=pe([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ya(e,t,n,r=null){un(e,t,7,[n,r])}var ba=ni(),xa=0;function Sa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ba,o={uid:xa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oe(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ei(i,a),emitsOptions:li(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=si.bind(null,o),e.ce&&e.ce(o),o}var Ca=null,wa=()=>Ca||kn,Ta,Ea;{let e=fe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Ta=t(`__VUE_INSTANCE_SETTERS__`,e=>Ca=e),Ea=t(`__VUE_SSR_SETTERS__`,e=>Aa=e)}var Da=e=>{let t=Ca;return Ta(e),e.scope.on(),()=>{e.scope.off(),Ta(t)}},Oa=()=>{Ca&&Ca.scope.off(),Ta(null)};function ka(e){return e.vnode.shapeFlag&4}var Aa=!1;function ja(e,t=!1,n=!1){t&&Ea(t);let{props:r,children:i}=e.vnode,a=ka(e);xi(e,r,a,t),Pi(e,i,n||t);let o=a?Ma(e,t):void 0;return t&&Ea(!1),o}function Ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zr);let{setup:r}=n;if(r){Ke();let n=e.setupContext=r.length>1?Ia(e):null,i=Da(e),a=ln(r,e,0,[e.props,n]),o=y(a);if(qe(),i(),(o||e.sp)&&!fr(e)&&sr(e),o){if(a.then(Oa,Oa),t)return a.then(n=>{Ea(!0);try{Na(e,n,t)}finally{Ea(!1)}}).catch(t=>{dn(t,e,0)});e.asyncDep=a}else Na(e,a,t)}else Pa(e,t)}function Na(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=$t(t)),Pa(e,n)}function Pa(e,t,n){let i=e.type;e.render||=i.render||r;{let t=Da(e);Ke();try{Hr(e)}finally{qe(),t()}}}var Fa={get(e,t){return rt(e,`get`,``),e[t]}};function Ia(e){return{attrs:new Proxy(e.attrs,Fa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function La(e){return e.exposed?e.exposeProxy||=new Proxy($t(Kt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lr)return Lr[n](e)},has(e,t){return t in e||t in Lr}}):e.proxy}function Ra(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function za(e){return h(e)&&`__vccOpts`in e}var R=(e,t)=>tn(e,t,Aa);function Ba(e,t,n){try{na(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?aa(t)?L(e,null,[t]):L(e,t):L(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&aa(n)&&(n=[n]),L(e,t,n))}finally{na(1)}}var Va=`3.5.42`,Ha=void 0,Ua=typeof window<`u`&&window.trustedTypes;if(Ua)try{Ha=Ua.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Wa=Ha?e=>Ha.createHTML(e):e=>e,Ga=`http://www.w3.org/2000/svg`,Ka=`http://www.w3.org/1998/Math/MathML`,qa=typeof document<`u`?document:null,Ja=qa&&qa.createElement(`template`),Ya={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?qa.createElementNS(Ga,e):t===`mathml`?qa.createElementNS(Ka,e):n?qa.createElement(e,{is:n}):qa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>qa.createTextNode(e),createComment:e=>qa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Ja.innerHTML=Wa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ja.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xa=Symbol(`_vtc`);function Za(e,t,n){let r=e[Xa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Qa=Symbol(`_vod`),$a=Symbol(`_vsh`),eo={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Qa]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):to(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),to(e,!0),r.enter(e)):r.leave(e,()=>{to(e,!1)}):to(e,t))},beforeUnmount(e,{value:t}){to(e,t)}};function to(e,t){e.style.display=t?e[Qa]:`none`,e[$a]=!t}var no=Symbol(``),ro=/(?:^|;)\s*display\s*:/;function io(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??oo(r,t,``)}else for(let e in t)n[e]??oo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?oo(r,i,``):uo(e,i,!g(t)&&t?t[i]:void 0,o)||oo(r,i,o)}}else if(i){if(t!==n){let e=r[no];e&&(n+=`;`+e),r.cssText=n,a=ro.test(n)}}else t&&e.removeAttribute(`style`);Qa in e&&(e[Qa]=a?r.display:``,e[$a]&&(r.display=`none`))}var ao=/\s*!important$/;function oo(e,t,n){if(d(n))n.forEach(n=>oo(e,t,n));else if(n??=``,t.startsWith(`--`))ao.test(n)?e.setProperty(t,n.replace(ao,``),`important`):e.setProperty(t,n);else{let r=lo(e,t);ao.test(n)?e.setProperty(ie(r),n.replace(ao,``),`important`):e[r]=n}}var so=[`Webkit`,`Moz`,`ms`],co={};function lo(e,t){let n=co[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return co[t]=r;r=ae(r);for(let n=0;n<so.length;n++){let i=so[n]+r;if(i in e)return co[t]=i}return t}function uo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var fo=`http://www.w3.org/1999/xlink`;function po(e,t,n,r,i,a=ye(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,n):n==null||a&&!be(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function mo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Wa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=be(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ho(e,t,n,r){e.addEventListener(t,n,r)}function go(e,t,n,r){e.removeEventListener(t,n,r)}var _o=Symbol(`_vei`);function vo(e,t,n,r,i=null){let a=e[_o]||(e[_o]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=xo(t);r?ho(e,n,a[t]=To(r,i),s):o&&(go(e,n,o,s),a[t]=void 0)}}var yo=/(Once|Passive|Capture)$/,bo=/^on:?(?:Once|Passive|Capture)$/;function xo(e){let t,n;for(;(n=e.match(yo))&&!bo.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):ie(e.slice(2)),t]}var So=0,Co=Promise.resolve(),wo=()=>So||=(Co.then(()=>So=0),Date.now());function To(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&un(e,t,5,a)}}else un(r,t,5,[e])};return n.value=e,n.attached=wo(),n}var Eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Do=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Za(e,r,c):t===`style`?io(e,n,r):a(t)?o(t)||vo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Oo(e,t,r,c))?(mo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&po(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ko(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?mo(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),po(e,t,r,c))};function Oo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Eo(t)&&g(n)?!1:t in e}function ko(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var Ao=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>ce(t,e):t};function jo(e){e.target.composing=!0}function Mo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var No=Symbol(`_assign`),Po=Symbol(`_initialValue`);function Fo(e,t,n){return t&&(e=e.trim()),n&&(e=ue(e)),e}var Io={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[Po]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[Po]=e.defaultValue.replace(/\r\n?/g,`
`))),e[No]=Ao(i);let a=r||i.props&&i.props.type===`number`;ho(e,t?`change`:`input`,t=>{t.target.composing||e[No](Fo(e.value,n,a))}),(n||a)&&ho(e,`change`,()=>{e.value=Fo(e.value,n,a)}),t||(ho(e,`compositionstart`,jo),ho(e,`compositionend`,Mo),ho(e,`change`,Mo))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[Po];delete e[Po],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[No](Fo(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[No]=Ao(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?ue(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Lo={deep:!0,created(e,t,n){e[No]=Ao(n),ho(e,`change`,()=>{let t=e._modelValue,n=zo(e),r=e.checked,i=e[No];if(d(t)){let e=we(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(p(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Bo(e,r))})},mounted:Ro,beforeUpdate(e,t,n){e[No]=Ao(n),Ro(e,t,n)}};function Ro(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(d(t))i=we(t,r.props.value)>-1;else if(p(t))i=t.has(r.props.value);else{if(t===n)return;i=Ce(t,Bo(e,!0))}e.checked!==i&&(e.checked=i)}function zo(e){return`_value`in e?e._value:e.value}function Bo(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Vo=[`ctrl`,`shift`,`alt`,`meta`],Ho={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Vo.some(n=>e[`${n}Key`]&&!t.includes(n))},Uo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Ho[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Wo=s({patchProp:Do},Ya),Go;function Ko(){return Go||=Li(Wo)}var qo=((...e)=>{let t=Ko().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Yo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Jo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Jo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Yo(e){return g(e)?document.querySelector(e):e}var Xo=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Zo=e=>e===``,Qo=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),$o=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),es=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),ts=e=>{let t=es(e);return t.charAt(0).toUpperCase()+t.slice(1)},ns={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},rs=({name:e,iconNode:t,absoluteStrokeWidth:n,"absolute-stroke-width":r,strokeWidth:i,"stroke-width":a,size:o=ns.width,color:s=ns.stroke,...c},{slots:l})=>Ba(`svg`,{...ns,...c,width:o,height:o,stroke:s,"stroke-width":Zo(n)||Zo(r)||n===!0||r===!0?Number(i||a||ns[`stroke-width`])*24/Number(o):i||a||ns[`stroke-width`],class:Qo(`lucide`,c.class,...e?[`lucide-${$o(ts(e))}-icon`,`lucide-${$o(e)}`]:[`lucide-icon`]),...!l.default&&!Xo(c)&&{"aria-hidden":`true`}},[...t.map(e=>Ba(...e)),...l.default?[l.default()]:[]]),z=(e,t)=>(n,{slots:r,attrs:i})=>Ba(rs,{...i,...n,iconNode:t,name:e},r),is=z(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),as=z(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),os=z(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ss=z(`boxes`,[[`path`,{d:`M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z`,key:`lc1i9w`}],[`path`,{d:`m7 16.5-4.74-2.85`,key:`1o9zyk`}],[`path`,{d:`m7 16.5 5-3`,key:`va8pkn`}],[`path`,{d:`M7 16.5v5.17`,key:`jnp8gn`}],[`path`,{d:`M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z`,key:`8zsnat`}],[`path`,{d:`m17 16.5-5-3`,key:`8arw3v`}],[`path`,{d:`m17 16.5 4.74-2.85`,key:`8rfmw`}],[`path`,{d:`M17 16.5v5.17`,key:`k6z78m`}],[`path`,{d:`M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z`,key:`1xygjf`}],[`path`,{d:`M12 8 7.26 5.15`,key:`1vbdud`}],[`path`,{d:`m12 8 4.74-2.85`,key:`3rx089`}],[`path`,{d:`M12 13.5V8`,key:`1io7kd`}]]),cs=z(`braces`,[[`path`,{d:`M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1`,key:`ezmyqa`}],[`path`,{d:`M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1`,key:`e1hn23`}]]),ls=z(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),us=z(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ds=z(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),fs=z(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),ps=z(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),ms=z(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),hs=z(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),gs=z(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),_s=z(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),vs=z(`columns-2`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M12 3v18`,key:`108xh3`}]]),ys=z(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),bs=z(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),xs=z(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),Ss=z(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),Cs=z(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),ws=z(`file-code`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}]]),Ts=z(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Es=z(`hard-drive`,[[`path`,{d:`M10 16h.01`,key:`1bzywj`}],[`path`,{d:`M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`18tbho`}],[`path`,{d:`M21.946 12.013H2.054`,key:`zqlbp7`}],[`path`,{d:`M6 16h.01`,key:`1pmjb7`}]]),Ds=z(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Os=z(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),ks=z(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),As=z(`monitor`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]),js=z(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Ms=z(`palette`,[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,key:`e79jfc`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`1okk4w`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`,key:`f64h9f`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`,key:`qy21gx`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`fotxhn`}]]),Ns=z(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Ps=z(`rocket`,[[`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,key:`qeys4`}],[`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,key:`u4xsad`}],[`path`,{d:`M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,key:`676m9`}],[`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`,key:`92ym6u`}]]),Fs=z(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Is=z(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ls=z(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),Rs=z(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),zs=z(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Bs=z(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Vs=z(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),Hs=z(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Us=z(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),Ws=z(`volume-x`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`line`,{x1:`22`,x2:`16`,y1:`9`,y2:`15`,key:`1ewh16`}],[`line`,{x1:`16`,x2:`22`,y1:`9`,y2:`15`,key:`5ykzw1`}]]),Gs=z(`wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]),Ks=z(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),qs=z(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Js=z(`zoom-in`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`11`,x2:`11`,y1:`8`,y2:`14`,key:`1vmskp`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),Ys=z(`zoom-out`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),Xs=()=>void 0,Zs={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},B=function(e,t){if(!e)throw Qs(t)},Qs=function(e){return Error(`Firebase Database (`+Zs.SDK_VERSION+`) INTERNAL ASSERT FAILED: `+e)},$s=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ec=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join(``)},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,get ENCODED_VALS(){return this.ENCODED_VALS_BASE+`+/=`},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+`-_.`},HAS_NATIVE_SUPPORT:typeof atob==`function`,encodeByteArray(e,t){if(!Array.isArray(e))throw Error(`encodeByteArray takes an array as a parameter`);this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(i&3)<<4|o>>4,d=(o&15)<<2|c>>6,f=c&63;s||(f=64,a||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join(``)},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ec(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;let o=t<e.length?n[e.charAt(t)]:64;++t;let s=t<e.length?n[e.charAt(t)]:64;if(++t,i==null||a==null||o==null||s==null)throw new nc;let c=i<<2|a>>4;if(r.push(c),o!==64){let e=a<<4&240|o>>2;if(r.push(e),s!==64){let e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},nc=class extends Error{constructor(){super(...arguments),this.name=`DecodeBase64StringError`}},rc=function(e){let t=$s(e);return tc.encodeByteArray(t,!0)},ic=function(e){return rc(e).replace(/\./g,``)},ac=function(e){try{return tc.decodeString(e,!0)}catch(e){console.error(`base64Decode failed: `,e)}return null};function oc(e){return sc(void 0,e)}function sc(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(let n in t)t.hasOwnProperty(n)&&cc(n)&&(e[n]=sc(e[n],t[n]));return e}function cc(e){return e!==`__proto__`}function lc(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`Unable to locate global object.`)}var uc=()=>lc().__FIREBASE_DEFAULTS__,dc=()=>{if(typeof process>`u`)return;let e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fc=()=>{if(typeof document>`u`)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&ac(e[1]);return t&&JSON.parse(t)},pc=()=>{try{return Xs()||uc()||dc()||fc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},mc=e=>pc()?.emulatorHosts?.[e],hc=e=>{let t=mc(e);if(!t)return;let n=t.lastIndexOf(`:`);if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]===`[`?[t.substring(1,n-1),r]:[t.substring(0,n),r]},gc=()=>pc()?.config,_c=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e==`function`&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function vc(e,t){if(e.uid)throw Error(`The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.`);let n={alg:`none`,type:`JWT`},r=t||`demo-project`,i=e.iat||0,a=e.sub||e.user_id;if(!a)throw Error(`mockUserToken must contain 'sub' or 'user_id' field!`);let o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:`custom`,identities:{}},...e};return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),``].join(`.`)}function yc(){return typeof navigator<`u`&&typeof navigator.userAgent==`string`?navigator.userAgent:``}function bc(){return typeof window<`u`&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yc())}function xc(){let e=typeof chrome==`object`?chrome.runtime:typeof browser==`object`?browser.runtime:void 0;return typeof e==`object`&&e.id!==void 0}function Sc(){return typeof navigator==`object`&&navigator.product===`ReactNative`}function Cc(){return Zs.NODE_CLIENT===!0||Zs.NODE_ADMIN===!0}function wc(){try{return typeof indexedDB==`object`}catch{return!1}}function Tc(){return new Promise((e,t)=>{try{let n=!0,r=`validate-browser-context-for-indexeddb-analytics-module`,i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||``)}}catch(e){t(e)}})}function Ec(){return!(typeof navigator>`u`||!navigator.cookieEnabled)}var Dc=`FirebaseError`,Oc=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Dc,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kc.prototype.create)}},kc=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Ac(i,n):`Error`;return new Oc(r,`${this.serviceName}: ${a} (${r}).`,n)}};function Ac(e,t){try{let n=0,r=``;for(;n<e.length;){let i=e.indexOf(`{$`,n);if(i===-1){r+=e.substring(n);break}let a=e.indexOf(`}`,i+2);if(a===-1){r+=e.substring(n);break}let o=e.substring(i+2,a),s=t[o];r+=e.substring(n,i)+(s==null?`<${o}?>`:String(s)),n=a+1}return r}catch{return e}}function jc(e){return JSON.parse(e)}function V(e){return JSON.stringify(e)}var Mc=function(e){let t={},n={},r={},i=``;try{let a=e.split(`.`);t=jc(ac(a[0])||``),n=jc(ac(a[1])||``),i=a[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Nc=function(e){let t=Mc(e).claims;return!!t&&typeof t==`object`&&t.hasOwnProperty(`iat`)},Pc=function(e){let t=Mc(e).claims;return typeof t==`object`&&t.admin===!0};function Fc(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ic(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Lc(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Rc(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function zc(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(Bc(n)&&Bc(a)){if(!zc(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function Bc(e){return typeof e==`object`&&!!e}function Vc(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+`=`+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+`=`+encodeURIComponent(r));return t.length?`&`+t.join(`&`):``}var Hc=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||=0;let n=this.W_;if(typeof e==`string`)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=(t<<1|t>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],a=this.chain_[2],o=this.chain_[3],s=this.chain_[4],c,l;for(let e=0;e<80;e++){e<40?e<20?(c=o^i&(a^o),l=1518500249):(c=i^a^o,l=1859775393):e<60?(c=i&a|o&(i|a),l=2400959708):(c=i^a^o,l=3395469782);let t=(r<<5|r>>>27)+c+s+l+n[e]&4294967295;s=o,o=a,a=(i<<30|i>>>2)&4294967295,i=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+s&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;for(;r<t;){if(a===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e==`string`){for(;r<t;)if(i[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};function Uc(e,t){return`${e} failed: ${t} argument `}var Wc=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){let t=i-55296;r++,B(r<e.length,`Surrogate pair missing trail surrogate.`);let n=e.charCodeAt(r)-56320;i=65536+(t<<10)+n}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Gc=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},Kc=1e3,qc=2,Jc=144e5,Yc=.5;function Xc(e,t=Kc,n=qc){let r=t*n**+e,i=Math.round(Yc*r*(Math.random()-.5)*2);return Math.min(Jc,r+i)}function Zc(e){return e&&e._delegate?e._delegate:e}function Qc(e){try{return(e.startsWith(`http://`)||e.startsWith(`https://`)?new URL(e).hostname:e).endsWith(`.cloudworkstations.dev`)}catch{return!1}}async function $c(e){return(await fetch(e,{credentials:`include`})).ok}var el=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode=`LAZY`,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},tl=`[DEFAULT]`,nl=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new _c;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}if(n)return null;throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(il(e))try{this.getOrInitializeService({instanceIdentifier:tl})}catch{}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch{}}}}clearInstance(e=tl){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>`INTERNAL`in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>`_delete`in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tl){return this.instances.has(e)}getOptions(e=tl){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);let i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:rl(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=tl){return this.component?this.component.multipleInstances?e:tl:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!==`EXPLICIT`}};function rl(e){return e===tl?void 0:e}function il(e){return e.instantiationMode===`EAGER`}var al=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new nl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},ol=[],H;(function(e){e[e.DEBUG=0]=`DEBUG`,e[e.VERBOSE=1]=`VERBOSE`,e[e.INFO=2]=`INFO`,e[e.WARN=3]=`WARN`,e[e.ERROR=4]=`ERROR`,e[e.SILENT=5]=`SILENT`})(H||={});var sl={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},cl=H.INFO,ll={[H.DEBUG]:`log`,[H.VERBOSE]:`log`,[H.INFO]:`info`,[H.WARN]:`warn`,[H.ERROR]:`error`},ul=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=ll[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},dl=class{constructor(e){this.name=e,this._logLevel=cl,this._logHandler=ul,this._userLogHandler=null,ol.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e==`string`?sl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!=`function`)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}},fl=(e,t)=>t.some(t=>e instanceof t),pl,ml;function hl(){return pl||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function gl(){return ml||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var _l=new WeakMap,vl=new WeakMap,yl=new WeakMap,bl=new WeakMap,xl=new WeakMap;function Sl(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(Ol(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return t.then(t=>{t instanceof IDBCursor&&_l.set(t,e)}).catch(()=>{}),xl.set(t,e),t}function Cl(e){if(vl.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});vl.set(e,t)}var wl={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return vl.get(e);if(t===`objectStoreNames`)return e.objectStoreNames||yl.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ol(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)||t in e}};function Tl(e){wl=e(wl)}function El(e){return e===IDBDatabase.prototype.transaction&&!(`objectStoreNames`in IDBTransaction.prototype)?function(t,...n){let r=e.call(kl(this),t,...n);return yl.set(r,t.sort?t.sort():[t]),Ol(r)}:gl().includes(e)?function(...t){return e.apply(kl(this),t),Ol(_l.get(this))}:function(...t){return Ol(e.apply(kl(this),t))}}function Dl(e){return typeof e==`function`?El(e):(e instanceof IDBTransaction&&Cl(e),fl(e,hl())?new Proxy(e,wl):e)}function Ol(e){if(e instanceof IDBRequest)return Sl(e);if(bl.has(e))return bl.get(e);let t=Dl(e);return t!==e&&(bl.set(e,t),xl.set(t,e)),t}var kl=e=>xl.get(e);function Al(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=Ol(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(Ol(o.result),e.oldVersion,e.newVersion,Ol(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var jl=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],Ml=[`put`,`add`,`delete`,`clear`],Nl=new Map;function Pl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(Nl.get(t))return Nl.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=Ml.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jl.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Nl.set(t,a),a}Tl(e=>({...e,get:(t,n,r)=>Pl(t,n)||e.get(t,n,r),has:(t,n)=>!!Pl(t,n)||e.has(t,n)}));var Fl=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Il(e)){let t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(` `)}};function Il(e){return e.getComponent()?.type===`VERSION`}var Ll=`@firebase/app`,Rl=`0.16.1`,zl=new dl(`@firebase/app`),Bl=`@firebase/app-compat`,Vl=`@firebase/analytics-compat`,Hl=`@firebase/analytics`,Ul=`@firebase/app-check-compat`,Wl=`@firebase/app-check`,Gl=`@firebase/auth`,Kl=`@firebase/auth-compat`,ql=`@firebase/database`,Jl=`@firebase/data-connect`,Yl=`@firebase/database-compat`,Xl=`@firebase/functions`,Zl=`@firebase/functions-compat`,Ql=`@firebase/installations`,$l=`@firebase/installations-compat`,eu=`@firebase/messaging`,tu=`@firebase/messaging-compat`,nu=`@firebase/performance`,ru=`@firebase/performance-compat`,iu=`@firebase/remote-config`,au=`@firebase/remote-config-compat`,ou=`@firebase/storage`,su=`@firebase/storage-compat`,cu=`@firebase/firestore`,lu=`@firebase/ai`,uu=`@firebase/firestore-compat`,du=`firebase`,fu=`12.18.0`,pu=`[DEFAULT]`,mu={[Ll]:`fire-core`,[Bl]:`fire-core-compat`,[Hl]:`fire-analytics`,[Vl]:`fire-analytics-compat`,[Wl]:`fire-app-check`,[Ul]:`fire-app-check-compat`,[Gl]:`fire-auth`,[Kl]:`fire-auth-compat`,[ql]:`fire-rtdb`,[Jl]:`fire-data-connect`,[Yl]:`fire-rtdb-compat`,[Xl]:`fire-fn`,[Zl]:`fire-fn-compat`,[Ql]:`fire-iid`,[$l]:`fire-iid-compat`,[eu]:`fire-fcm`,[tu]:`fire-fcm-compat`,[nu]:`fire-perf`,[ru]:`fire-perf-compat`,[iu]:`fire-rc`,[au]:`fire-rc-compat`,[ou]:`fire-gcs`,[su]:`fire-gcs-compat`,[cu]:`fire-fst`,[uu]:`fire-fst-compat`,[lu]:`fire-vertex`,"fire-js":`fire-js`,[du]:`fire-js-all`},hu=new Map,gu=new Map,_u=new Map;function vu(e,t){try{e.container.addComponent(t)}catch(n){zl.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yu(e){let t=e.name;if(_u.has(t))return zl.debug(`There were multiple attempts to register component ${t}.`),!1;_u.set(t,e);for(let t of hu.values())vu(t,e);for(let t of gu.values())vu(t,e);return!0}function bu(e,t){let n=e.container.getProvider(`heartbeat`).getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function xu(e){return e!=null&&e.settings!==void 0}var Su=new kc(`app`,`Firebase`,{"no-app":`No Firebase App '{$appName}' has been created - call initializeApp() first`,"bad-app-name":`Illegal App name: '{$appName}'`,"duplicate-app":`Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.`,"app-deleted":`Firebase App named '{$appName}' already deleted`,"server-app-deleted":`Firebase Server App has been deleted`,"no-options":`Need to provide options, when not being deployed to hosting via source.`,"invalid-app-argument":`firebase.{$appName}() takes either no argument or a Firebase App instance.`,"invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":`Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,"idb-get":`Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,"idb-set":`Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,"idb-delete":`Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,"finalization-registry-not-supported":`FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,"invalid-server-app-environment":`FirebaseServerApp is not for use in browser environments.`}),Cu=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new el(`app`,()=>this,`PUBLIC`))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Su.create(`app-deleted`,{appName:this._name})}},wu=fu;function Tu(e,t={}){let n=e;typeof t!=`object`&&(t={name:t});let r={name:pu,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!=`string`||!i)throw Su.create(`bad-app-name`,{appName:String(i)});if(n||=gc(),!n)throw Su.create(`no-options`);let a=hu.get(i);if(a){if(!zc(n,a.options))throw Su.create(`duplicate-app`,{appName:i,mismatchedParam:`options`,oldValue:JSON.stringify(a.options),newValue:JSON.stringify(n)});if(zc(r,a.config))return a;throw Su.create(`duplicate-app`,{appName:i,mismatchedParam:`config`,oldValue:JSON.stringify(a.config),newValue:JSON.stringify(r)})}let o=new al(i);for(let e of _u.values())o.addComponent(e);let s=new Cu(n,r,o);return hu.set(i,s),s}function Eu(e=pu){let t=hu.get(e);if(!t&&e===`[DEFAULT]`&&gc())return Tu();if(!t)throw Su.create(`no-app`,{appName:e});return t}function Du(e,t,n){let r=mu[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${r}" with version "${t}":`];i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push(`and`),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zl.warn(e.join(` `));return}yu(new el(`${r}-version`,()=>({library:r,version:t}),`VERSION`))}var Ou=`firebase-heartbeat-database`,ku=1,Au=`firebase-heartbeat-store`,ju=null;function Mu(){return ju||=Al(Ou,ku,{upgrade:(e,t)=>{if(t===0)try{e.createObjectStore(Au)}catch(e){console.warn(e)}}}).catch(e=>{throw Su.create(`idb-open`,{originalErrorMessage:e.message})}),ju}async function Nu(e){try{let t=(await Mu()).transaction(Au),n=await t.objectStore(Au).get(Fu(e));return await t.done,n}catch(e){if(e instanceof Oc)zl.warn(e.message);else{let t=Su.create(`idb-get`,{originalErrorMessage:e?.message});zl.warn(t.message)}}}async function Pu(e,t){try{let n=(await Mu()).transaction(Au,`readwrite`);await n.objectStore(Au).put(t,Fu(e)),await n.done}catch(e){if(e instanceof Oc)zl.warn(e.message);else{let t=Su.create(`idb-set`,{originalErrorMessage:e?.message});zl.warn(t.message)}}}function Fu(e){return`${e.name}!${e.options.appId}`}var Iu=1024,Lu=30,Ru=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider(`app`).getImmediate();this._storage=new Vu(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider(`platform-logger`).getImmediate().getPlatformInfoString(),t=zu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>Lu){let e=Uu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){zl.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return``;let e=zu(),{heartbeatsToSend:t,unsentEntries:n}=Bu(this._heartbeatsCache.heartbeats),r=ic(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return zl.warn(e),``}}};function zu(){return new Date().toISOString().substring(0,10)}function Bu(e,t=Iu){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(!e){if(n.push({agent:i.agent,dates:[i.date]}),Hu(n)>t){n.pop();break}}else if(e.dates.push(i.date),Hu(n)>t){e.dates.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Vu=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wc()?Tc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await Nu(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}};function Hu(e){return ic(JSON.stringify({version:2,heartbeats:e})).length}function Uu(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function Wu(e){yu(new el(`platform-logger`,e=>new Fl(e),`PRIVATE`)),yu(new el(`heartbeat`,e=>new Ru(e),`PRIVATE`)),Du(Ll,Rl,e),Du(Ll,Rl,`esm2020`),Du(`fire-js`,``)}Wu(``),Du(`firebase`,`12.18.0`,`app`);var Gu=`@firebase/installations`,Ku=`0.6.24`,qu=1e4,Ju=`w:${Ku}`,Yu=`FIS_v2`,Xu=`https://firebaseinstallations.googleapis.com/v1`,Zu=36e5,Qu=new kc(`installations`,`Installations`,{"missing-app-config-values":`Missing App configuration value: "{$valueName}"`,"not-registered":`Firebase Installation is not registered.`,"installation-not-found":`Firebase Installation not found.`,"request-failed":`{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"`,"app-offline":`Could not process request. Application offline.`,"delete-pending-registration":`Can't delete installation while there is a pending registration request.`});function $u(e){return e instanceof Oc&&e.code.includes(`request-failed`)}function ed({projectId:e}){return`${Xu}/projects/${e}/installations`}function td(e){return{token:e.token,requestStatus:2,expiresIn:od(e.expiresIn),creationTime:Date.now()}}async function nd(e,t){let n=(await t.json()).error;return Qu.create(`request-failed`,{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function rd({apiKey:e}){return new Headers({"Content-Type":`application/json`,Accept:`application/json`,"x-goog-api-key":e})}function id(e,{refreshToken:t}){let n=rd(e);return n.append(`Authorization`,sd(t)),n}async function ad(e){let t=await e();return t.status>=500&&t.status<600?e():t}function od(e){return Number(e.replace(`s`,`000`))}function sd(e){return`${Yu} ${e}`}async function cd({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=ed(e),i=rd(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append(`x-firebase-client`,e)}let o={fid:n,authVersion:Yu,appId:e.appId,sdkVersion:Ju},s={method:`POST`,headers:i,body:JSON.stringify(o)},c=await ad(()=>fetch(r,s));if(c.ok){let e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:td(e.authToken)}}throw await nd(`Create Installation`,c)}function ld(e){return new Promise(t=>{setTimeout(t,e)})}function ud(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,`-`).replace(/\//g,`_`)}var dd=/^[cdef][\w-]{21}$/,fd=``;function pd(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=md(e);return dd.test(t)?t:fd}catch{return fd}}function md(e){return ud(e).substr(0,22)}function hd(e){return`${e.appName}!${e.appId}`}var gd=new Map;function _d(e,t){let n=hd(e);vd(n,t),yd(n,t)}function vd(e,t){let n=gd.get(e);if(n)for(let e of n)e(t)}function yd(e,t){let n=xd();n&&n.postMessage({key:e,fid:t}),Sd()}var bd=null;function xd(){return!bd&&`BroadcastChannel`in self&&(bd=new BroadcastChannel(`[Firebase] FID Change`),bd.onmessage=e=>{vd(e.data.key,e.data.fid)}),bd}function Sd(){gd.size===0&&bd&&(bd.close(),bd=null)}var Cd=`firebase-installations-database`,wd=1,Td=`firebase-installations-store`,Ed=null;function Dd(){return Ed||=Al(Cd,wd,{upgrade:(e,t)=>{t===0&&e.createObjectStore(Td)}}),Ed}async function Od(e,t){let n=hd(e),r=(await Dd()).transaction(Td,`readwrite`),i=r.objectStore(Td),a=await i.get(n);return await i.put(t,n),await r.done,(!a||a.fid!==t.fid)&&_d(e,t.fid),t}async function kd(e){let t=hd(e),n=(await Dd()).transaction(Td,`readwrite`);await n.objectStore(Td).delete(t),await n.done}async function Ad(e,t){let n=hd(e),r=(await Dd()).transaction(Td,`readwrite`),i=r.objectStore(Td),a=await i.get(n),o=t(a);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!a||a.fid!==o.fid)&&_d(e,o.fid),o}async function jd(e){let t,n=await Ad(e.appConfig,n=>{let r=Nd(e,Md(n));return t=r.registrationPromise,r.installationEntry});return n.fid===fd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Md(e){return Ld(e||{fid:pd(),registrationStatus:0})}function Nd(e,t){if(t.registrationStatus===0){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Qu.create(`app-offline`))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:Pd(e,n)}}return t.registrationStatus===1?{installationEntry:t,registrationPromise:Fd(e)}:{installationEntry:t}}async function Pd(e,t){try{let n=await cd(e,t);return Od(e.appConfig,n)}catch(n){throw $u(n)&&n.customData.serverCode===409?await kd(e.appConfig):await Od(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Fd(e){let t=await Id(e.appConfig);for(;t.registrationStatus===1;)await ld(100),t=await Id(e.appConfig);if(t.registrationStatus===0){let{installationEntry:t,registrationPromise:n}=await jd(e);return n||t}return t}function Id(e){return Ad(e,e=>{if(!e)throw Qu.create(`installation-not-found`);return Ld(e)})}function Ld(e){return Rd(e)?{fid:e.fid,registrationStatus:0}:e}function Rd(e){return e.registrationStatus===1&&e.registrationTime+qu<Date.now()}async function zd({appConfig:e,heartbeatServiceProvider:t},n){let r=Bd(e,n),i=id(e,n),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append(`x-firebase-client`,e)}let o={installation:{sdkVersion:Ju,appId:e.appId}},s={method:`POST`,headers:i,body:JSON.stringify(o)},c=await ad(()=>fetch(r,s));if(c.ok)return td(await c.json());throw await nd(`Generate Auth Token`,c)}function Bd(e,{fid:t}){return`${ed(e)}/${t}/authTokens:generate`}async function Vd(e,t=!1){let n,r=await Ad(e.appConfig,r=>{if(!Gd(r))throw Qu.create(`not-registered`);let i=r.authToken;if(!t&&Kd(i))return r;if(i.requestStatus===1)return n=Hd(e,t),r;{if(!navigator.onLine)throw Qu.create(`app-offline`);let t=Jd(r);return n=Wd(e,t),t}});return n?await n:r.authToken}async function Hd(e,t){let n=await Ud(e.appConfig);for(;n.authToken.requestStatus===1;)await ld(100),n=await Ud(e.appConfig);let r=n.authToken;return r.requestStatus===0?Vd(e,t):r}function Ud(e){return Ad(e,e=>{if(!Gd(e))throw Qu.create(`not-registered`);let t=e.authToken;return Yd(t)?{...e,authToken:{requestStatus:0}}:e})}async function Wd(e,t){try{let n=await zd(e,t),r={...t,authToken:n};return await Od(e.appConfig,r),n}catch(n){if($u(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kd(e.appConfig);else{let n={...t,authToken:{requestStatus:0}};await Od(e.appConfig,n)}throw n}}function Gd(e){return e!==void 0&&e.registrationStatus===2}function Kd(e){return e.requestStatus===2&&!qd(e)}function qd(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Zu}function Jd(e){let t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Yd(e){return e.requestStatus===1&&e.requestTime+qu<Date.now()}async function Xd(e){let t=e,{installationEntry:n,registrationPromise:r}=await jd(t);return r?r.catch(console.error):Vd(t).catch(console.error),n.fid}async function Zd(e,t=!1){let n=e;return await Qd(n),(await Vd(n,t)).token}async function Qd(e){let{registrationPromise:t}=await jd(e);t&&await t}function $d(e){if(!e||!e.options)throw ef(`App Configuration`);if(!e.name)throw ef(`App Name`);for(let t of[`projectId`,`apiKey`,`appId`])if(!e.options[t])throw ef(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ef(e){return Qu.create(`missing-app-config-values`,{valueName:e})}var tf=`installations`,nf=`installations-internal`,rf=e=>{let t=e.getProvider(`app`).getImmediate();return{app:t,appConfig:$d(t),heartbeatServiceProvider:bu(t,`heartbeat`),_delete:()=>Promise.resolve()}},af=e=>{let t=bu(e.getProvider(`app`).getImmediate(),tf).getImmediate();return{getId:()=>Xd(t),getToken:e=>Zd(t,e)}};function of(){yu(new el(tf,rf,`PUBLIC`)),yu(new el(nf,af,`PRIVATE`))}of(),Du(Gu,Ku),Du(Gu,Ku,`esm2020`);var sf=`analytics`,cf=`firebase_id`,lf=`origin`,uf=6e4,df=`https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig`,ff=`https://www.googletagmanager.com/gtag/js`,pf=new dl(`@firebase/analytics`),mf=new kc(`analytics`,`Analytics`,{"already-exists":`A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.`,"already-initialized":`initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.`,"already-initialized-settings":`Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.`,"interop-component-reg-failed":`Firebase Analytics Interop Component failed to instantiate: {$reason}`,"invalid-analytics-context":`Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}`,"indexeddb-unavailable":`IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}`,"fetch-throttle":`The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.`,"config-fetch-failed":`Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}`,"no-api-key":`The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.`,"no-app-id":`The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.`,"no-client-id":`The "client_id" field is empty.`,"invalid-gtag-resource":`Trusted Types detected an invalid gtag resource: {$gtagURL}.`});function hf(e){if(!e.startsWith(ff)){let t=mf.create(`invalid-gtag-resource`,{gtagURL:e});return pf.warn(t.message),``}return e}function gf(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function _f(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function vf(e,t){let n=_f(`firebase-js-sdk-policy`,{createScriptURL:hf}),r=document.createElement(`script`),i=`${ff}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function yf(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function bf(e,t,n,r,i,a){let o=r[i];try{if(o)await t[o];else{let e=(await gf(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){pf.error(e)}e(`config`,i,a)}async function xf(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let r=await gf(n);for(let n of e){let e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(i)a.push(i);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e(`event`,r,i||{})}catch(e){pf.error(e)}}function Sf(e,t,n,r){async function i(i,...a){try{if(i===`event`){let[r,i]=a;await xf(e,t,n,r,i)}else if(i===`config`){let[i,o]=a;await bf(e,t,n,r,i,o)}else if(i===`consent`){let[t,n]=a;e(`consent`,t,n)}else if(i===`get`){let[t,n,r]=a;e(`get`,t,n,r)}else if(i===`set`){let[t]=a;e(`set`,t)}else e(i,...a)}catch(e){pf.error(e)}}return i}function Cf(e,t,n,r,i){let a=function(...e){window[r].push(arguments)};return window[i]&&typeof window[i]==`function`&&(a=window[i]),window[i]=Sf(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function wf(e){let t=window.document.getElementsByTagName(`script`);for(let n of Object.values(t))if(n.src&&n.src.includes(ff)&&n.src.includes(e))return n;return null}var Tf=30,Ef=1e3,Df=new class{constructor(e={},t=Ef){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Of(e){return new Headers({Accept:`application/json`,"x-goog-api-key":e})}async function kf(e){let{appId:t,apiKey:n}=e,r={method:`GET`,headers:Of(n)},i=df.replace(`{app-id}`,t),a=await fetch(i,r);if(a.status!==200&&a.status!==304){let e=``;try{let t=await a.json();t.error?.message&&(e=t.error.message)}catch{}throw mf.create(`config-fetch-failed`,{httpStatus:a.status,responseMessage:e})}return a.json()}async function Af(e,t=Df,n){let{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw mf.create(`no-app-id`);if(!i){if(a)return{measurementId:a,appId:r};throw mf.create(`no-api-key`)}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Pf;return setTimeout(async()=>{s.abort()},uf),jf({appId:r,apiKey:i,measurementId:a},o,s,t)}async function jf(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Df){let{appId:a,measurementId:o}=e;try{await Mf(r,t)}catch(e){if(o)return pf.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e?.message}]`),{appId:a,measurementId:o};throw e}try{let t=await kf(e);return i.deleteThrottleMetadata(a),t}catch(t){let s=t;if(!Nf(s)){if(i.deleteThrottleMetadata(a),o)return pf.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${s?.message}]`),{appId:a,measurementId:o};throw t}let c=Number(s?.customData?.httpStatus)===503?Xc(n,i.intervalMillis,Tf):Xc(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(a,l),pf.debug(`Calling attemptFetch again in ${c} millis`),jf(e,l,r,i)}}function Mf(e,t){return new Promise((n,r)=>{let i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(mf.create(`fetch-throttle`,{throttleEndTimeMillis:t}))})})}function Nf(e){if(!(e instanceof Oc)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}var Pf=class{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}},Ff;async function If(e,t,n,r,i){if(i&&i.global){e(`event`,n,r);return}{let i=await t;e(`event`,n,{...r,send_to:i})}}async function Lf(e,t,n,r){if(r&&r.global){let t={};for(let e of Object.keys(n))t[`user_properties.${e}`]=n[e];return e(`set`,t),Promise.resolve()}e(`config`,await t,{update:!0,user_properties:n})}var Rf;function zf(e){Rf=e}function Bf(e){Ff=e}async function Vf(){if(wc())try{await Tc()}catch(e){return pf.warn(mf.create(`indexeddb-unavailable`,{errorInfo:e?.toString()}).message),!1}else return pf.warn(mf.create(`indexeddb-unavailable`,{errorInfo:`IndexedDB is not available in this environment.`}).message),!1;return!0}async function Hf(e,t,n,r,i,a,o){let s=Af(e);s.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&pf.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>pf.error(e)),t.push(s);let c=Vf().then(e=>{if(e)return r.getId()}),[l,u]=await Promise.all([s,c]);wf(a)||vf(a,l.measurementId),Rf&&(i(`consent`,`default`,Rf),zf(void 0)),i(`js`,new Date);let d=o?.config??{};return d[lf]=`firebase`,d.update=!0,u!=null&&(d[cf]=u),i(`config`,l.measurementId,d),Ff&&(i(`set`,Ff),Bf(void 0)),l.measurementId}var Uf=class{constructor(e){this.app=e}_delete(){return delete Wf[this.app.options.appId],Promise.resolve()}},Wf={},Gf=[],Kf={},qf=`dataLayer`,Jf=`gtag`,Yf,Xf,Zf=!1;function Qf(){let e=[];if(xc()&&e.push(`This is a browser extension environment.`),Ec()||e.push(`Cookies are not available.`),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(` `),n=mf.create(`invalid-analytics-context`,{errorInfo:t});pf.warn(n.message)}}function $f(e,t,n){Qf();let r=e.options.appId;if(!r)throw mf.create(`no-app-id`);if(!e.options.apiKey){if(e.options.measurementId)pf.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mf.create(`no-api-key`)}if(Wf[r]!=null)throw mf.create(`already-exists`,{id:r});if(!Zf){yf(qf);let{wrappedGtag:e,gtagCore:t}=Cf(Wf,Gf,Kf,qf,Jf);Xf=e,Yf=t,Zf=!0}return Wf[r]=Hf(e,Gf,Kf,t,Yf,qf,n),new Uf(e)}function ep(e=Eu()){e=Zc(e);let t=bu(e,sf);return t.isInitialized()?t.getImmediate():tp(e)}function tp(e,t={}){let n=bu(e,sf);if(n.isInitialized()){let e=n.getImmediate();if(zc(t,n.getOptions()))return e;throw mf.create(`already-initialized`)}return n.initialize({options:t})}async function np(){if(xc()||!Ec()||!wc())return!1;try{return await Tc()}catch{return!1}}function rp(e,t,n){e=Zc(e),Lf(Xf,Wf[e.app.options.appId],t,n).catch(e=>pf.error(e))}function ip(e,t,n,r){e=Zc(e),If(Xf,Wf[e.app.options.appId],t,n,r).catch(e=>pf.error(e))}var ap=`@firebase/analytics`,op=`0.10.24`;function sp(){yu(new el(sf,(e,{options:t})=>$f(e.getProvider(`app`).getImmediate(),e.getProvider(`installations-internal`).getImmediate(),t),`PUBLIC`)),yu(new el(`analytics-internal`,e,`PRIVATE`)),Du(ap,op),Du(ap,op,`esm2020`);function e(e){try{let t=e.getProvider(sf).getImmediate();return{logEvent:(e,n,r)=>ip(t,e,n,r),setUserProperties:(e,n)=>rp(t,e,n)}}catch(e){throw mf.create(`interop-component-reg-failed`,{reason:e})}}}sp();var cp=`@firebase/database`,lp=`1.1.5`,up=``;function dp(e){up=e}var fp=class{constructor(e){this.domStorage_=e,this.prefix_=`firebase:`}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:jc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}},pp=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Fc(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}},mp=function(e){try{if(typeof window<`u`&&window[e]!==void 0){let t=window[e];return t.setItem(`firebase:sentinel`,`cache`),t.removeItem(`firebase:sentinel`),new fp(t)}}catch{}return new pp},hp=mp(`localStorage`),gp=mp(`sessionStorage`),_p=new dl(`@firebase/database`),vp=(function(){let e=1;return function(){return e++}})(),yp=function(e){let t=Wc(e),n=new Hc;n.update(t);let r=n.digest();return tc.encodeByteArray(r)},bp=function(...e){let t=``;for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)||r&&typeof r==`object`&&typeof r.length==`number`?t+=bp.apply(null,r):t+=typeof r==`object`?V(r):r,t+=` `}return t},xp=null,Sp=!0,Cp=function(e,t){B(!t||e===!0||e===!1,`Can't turn on custom loggers persistently.`),e===!0?(_p.logLevel=H.VERBOSE,xp=_p.log.bind(_p),t&&gp.set(`logging_enabled`,!0)):typeof e==`function`?xp=e:(xp=null,gp.remove(`logging_enabled`))},U=function(...e){if(Sp===!0&&(Sp=!1,xp===null&&gp.get(`logging_enabled`)===!0&&Cp(!0)),xp){let t=bp.apply(null,e);xp(t)}},wp=function(e){return function(...t){U(e,...t)}},Tp=function(...e){let t=`FIREBASE INTERNAL ERROR: `+bp(...e);_p.error(t)},Ep=function(...e){let t=`FIREBASE FATAL ERROR: ${bp(...e)}`;throw _p.error(t),Error(t)},Dp=function(...e){let t=`FIREBASE WARNING: `+bp(...e);_p.warn(t)},Op=function(){typeof window<`u`&&window.location&&window.location.protocol&&window.location.protocol.indexOf(`https:`)!==-1&&Dp(`Insecure Firebase access from a secure page. Please use https in calls to new Firebase().`)},kp=function(e){return typeof e==`number`&&(e!==e||e===1/0||e===-1/0)},Ap=function(e){if(Cc()||document.readyState===`complete`)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,10);return}t||(t=!0,e())};document.addEventListener?(document.addEventListener(`DOMContentLoaded`,n,!1),window.addEventListener(`load`,n,!1)):document.attachEvent&&(document.attachEvent(`onreadystatechange`,()=>{document.readyState===`complete`&&n()}),window.attachEvent(`onload`,n))}},jp=`[MIN_NAME]`,Mp=`[MAX_NAME]`,Np=function(e,t){if(e===t)return 0;if(e===jp||t===Mp)return-1;if(t===jp||e===Mp)return 1;{let n=Kp(e),r=Kp(t);return n===null?r===null&&e<t?-1:1:r===null?-1:n-r===0?e.length-t.length:n-r}},Pp=function(e,t){return e===t?0:e<t?-1:1},Fp=function(e,t){if(t&&e in t)return t[e];throw Error(`Missing required key (`+e+`) in object: `+V(t))},Ip=function(e){if(typeof e!=`object`||!e)return V(e);let t=[];for(let n in e)t.push(n);t.sort();let n=`{`;for(let r=0;r<t.length;r++)r!==0&&(n+=`,`),n+=V(t[r]),n+=`:`,n+=Ip(e[t[r]]);return n+=`}`,n},Lp=function(e,t){let n=e.length;if(n<=t)return[e];let r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Rp(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}var zp=function(e){B(!kp(e),`Invalid JSON number`);let t=1023,n,r,i,a,o;e===0?(r=0,i=0,n=+(1/e==-1/0)):(n=e<0,e=Math.abs(e),e>=2**-1022?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=a+t,i=Math.round(e*2**(52-a)-2**52)):(r=0,i=Math.round(e/2**-1074)));let s=[];for(o=52;o;--o)s.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;--o)s.push(r%2?1:0),r=Math.floor(r/2);s.push(+!!n),s.reverse();let c=s.join(``),l=``;for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);e.length===1&&(e=`0`+e),l+=e}return l.toLowerCase()},Bp=function(){return!!(typeof window==`object`&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vp=function(){return typeof Windows==`object`&&typeof Windows.UI==`object`};function Hp(e,t){let n=`Unknown Error`;e===`too_big`?n=`The data requested exceeds the maximum size that can be accessed with a single request.`:e===`permission_denied`?n=`Client doesn't have permission to access the desired data.`:e===`unavailable`&&(n=`The service is unavailable`);let r=Error(e+` at `+t._path.toString()+`: `+n);return r.code=e.toUpperCase(),r}var Up=RegExp(`^-?(0*)\\d{1,10}$`),Wp=-2147483648,Gp=2147483647,Kp=function(e){if(Up.test(e)){let t=Number(e);if(t>=Wp&&t<=Gp)return t}return null},qp=function(e){try{e()}catch(e){setTimeout(()=>{throw Dp(`Exception was thrown by user callback.`,e.stack||``),e},0)}},Jp=function(){return(typeof window==`object`&&window.navigator&&window.navigator.userAgent||``).search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yp=function(e,t){let n=setTimeout(e,t);return typeof n==`number`&&typeof Deno<`u`&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n==`object`&&n.unref&&n.unref(),n},Xp=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,xu(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(e=>this.appCheck=e)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Dp(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}},Zp=class{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&e.code===`auth/token-not-initialized`?(U(`Got auth/token-not-initialized error.  Treating as null token.`),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e=`Provided authentication credentials for the app named "`+this.appName_+`" are invalid. This usually indicates your app was not initialized correctly. `;`credential`in this.firebaseOptions_?e+=`Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:`serviceAccount`in this.firebaseOptions_?e+=`Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:e+=`Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.`,Dp(e)}},Qp=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Qp.OWNER=`owner`;var $p=`5`,em=`v`,tm=`s`,nm=`r`,rm=`f`,im=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,am=`ls`,om=`p`,sm=`ac`,cm=`websocket`,lm=`long_polling`,um=class{constructor(e,t,n,r,i=!1,a=``,o=!1,s=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=a,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=s,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(`.`)+1),this.internalHost=hp.get(`host:`+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)===`s-`}isCustomHost(){return this._domain!==`firebaseio.com`&&this._domain!==`firebaseio-demo.com`}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hp.set(`host:`+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+=`<`+this.persistenceKey+`>`),e}toURLString(){let e=this.secure?`https://`:`http://`,t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:``;return`${e}${this.host}/${t}`}};function dm(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function fm(e,t,n){B(typeof t==`string`,`typeof type must == string`),B(typeof n==`object`,`typeof params must == object`);let r;if(t===cm)r=(e.secure?`wss://`:`ws://`)+e.internalHost+`/.ws?`;else if(t===lm)r=(e.secure?`https://`:`http://`)+e.internalHost+`/.lp?`;else throw Error(`Unknown connection type: `+t);dm(e)&&(n.ns=e.namespace);let i=[];return Rp(n,(e,t)=>{i.push(e+`=`+t)}),r+i.join(`&`)}var pm=class{constructor(){this.counters_={}}incrementCounter(e,t=1){Fc(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return oc(this.counters_)}},mm={},hm={};function gm(e){let t=e.toString();return mm[t]||(mm[t]=new pm),mm[t]}function _m(e,t){let n=e.toString();return hm[n]||(hm[n]=t()),hm[n]}var vm=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&qp(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&=(this.onClose(),null);break}this.currentResponseNum++}}},ym=`start`,bm=`close`,xm=`pLPCommand`,Sm=`pRTLPCB`,Cm=`id`,wm=`pw`,Tm=`ser`,Em=`cb`,Dm=`dframe`,Om=1870,km=30,Am=1840,jm=25e3,Mm=3e4,Nm=class e{constructor(e,t,n,r,i,a,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=a,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wp(e),this.stats_=gm(t),this.urlFn=e=>(this.appCheckToken&&(e[sm]=this.appCheckToken),fm(t,lm,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_(`Timed out trying to connect.`),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mm)),Ap(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pm((...e)=>{let[t,n,r,i,a]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&=(clearTimeout(this.connectTimeoutTimer_),null),this.everConnected_=!0,t===ym)this.id=n,this.password=r;else if(t===bm)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error(`Unrecognized command received: `+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[ym]=`t`,e[Tm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Em]=this.scriptTagHolder.uniqueCallbackIdentifier),e[em]=$p,this.transportSessionId&&(e[tm]=this.transportSessionId),this.lastSessionId&&(e[am]=this.lastSessionId),this.applicationId&&(e[om]=this.applicationId),this.appCheckToken&&(e[sm]=this.appCheckToken),typeof location<`u`&&location.hostname&&im.test(location.hostname)&&(e[nm]=rm);let t=this.urlFn(e);this.log_(`Connecting via long-poll to `+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){e.forceAllow_=!0}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){return Cc()?!1:e.forceAllow_?!0:!e.forceDisallow_&&typeof document<`u`&&document.createElement!=null&&!Bp()&&!Vp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&=(this.scriptTagHolder.close(),null),this.myDisconnFrame&&=(document.body.removeChild(this.myDisconnFrame),null),this.connectTimeoutTimer_&&=(clearTimeout(this.connectTimeoutTimer_),null)}onClosed_(){this.isClosed_||(this.log_(`Longpoll is closing itself`),this.shutdown_(),this.onDisconnect_&&=(this.onDisconnect_(this.everConnected_),null))}close(){this.isClosed_||(this.log_(`Longpoll is being closed.`),this.shutdown_())}send(e){let t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=Lp(rc(t),Am);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Cc())return;this.myDisconnFrame=document.createElement(`iframe`);let n={};n[Dm]=`t`,n[Cm]=e,n[wm]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display=`none`,document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=V(e).length;this.bytesReceived+=t,this.stats_.incrementCounter(`bytes_received`,t)}},Pm=class e{constructor(t,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,Cc())this.commandCB=t,this.onMessageCB=n;else{this.uniqueCallbackIdentifier=vp(),window[xm+this.uniqueCallbackIdentifier]=t,window[Sm+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();let r=``;this.myIFrame.src&&this.myIFrame.src.substr(0,11)===`javascript:`&&(r=`<script>document.domain="`+document.domain+`";<\/script>`);let i=`<html><body>`+r+`</body></html>`;try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){U(`frame writing exception`),e.stack&&U(e.stack),U(e)}}}static createIFrame_(){let e=document.createElement(`iframe`);if(e.style.display=`none`,document.body){document.body.appendChild(e);try{e.contentWindow.document||U(`No IE domain setting required`)}catch{e.src=`javascript:void((function(){document.open();document.domain='`+document.domain+`';document.close();})())`}}else throw`Document body has not initialized. Wait to initialize Firebase until after the document is ready.`;return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent=``,setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},0));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[Cm]=this.myID,e[wm]=this.myPW,e[Tm]=this.currentSerial;let t=this.urlFn(e),n=``,r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+km+n.length<=Om;){let e=this.pendingSegs.shift();n=n+`&seg`+r+`=`+e.seg+`&ts`+r+`=`+e.ts+`&d`+r+`=`+e.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(jm));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){Cc()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement(`script`);n.type=`text/javascript`,n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;(!e||e===`loaded`||e===`complete`)&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{U(`Long-poll script failed to load: `+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},1)}},Fm=16384,Im=45e3,Lm=null;typeof MozWebSocket<`u`?Lm=MozWebSocket:typeof WebSocket<`u`&&(Lm=WebSocket);var Rm=class e{constructor(t,n,r,i,a,o,s){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wp(this.connId),this.stats_=gm(n),this.connURL=e.connectionURL_(n,o,s,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,t,n,r,i){let a={};return a[em]=$p,!Cc()&&typeof location<`u`&&location.hostname&&im.test(location.hostname)&&(a[nm]=rm),t&&(a[tm]=t),n&&(a[am]=n),r&&(a[sm]=r),i&&(a[om]=i),fm(e,cm,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_(`Websocket connecting to `+this.connURL),this.everConnected_=!1,hp.set(`previous_websocket_failure`,!0);try{let e;if(Cc()){let t=this.nodeAdmin?`AdminNode`:`Node`;e={headers:{"User-Agent":`Firebase/${$p}/${up}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||``}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers[`X-Firebase-AppCheck`]=this.appCheckToken);let n={},r=this.connURL.indexOf(`wss://`)===0?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new Lm(this.connURL,[],e)}catch(e){this.log_(`Error instantiating WebSocket.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_();return}this.mySock.onopen=()=>{this.log_(`Websocket connected.`),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_(`Websocket connection was disconnected.`),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_(`WebSocket error.  Closing connection.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<`u`&&navigator.userAgent){let e=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);e&&e.length>1&&parseFloat(e[1])<4.4&&(t=!0)}return!t&&Lm!==null&&!e.forceDisallow_}static previouslyFailed(){return hp.isInMemoryStorage||hp.get(`previous_websocket_failure`)===!0}markConnectionHealthy(){hp.remove(`previous_websocket_failure`)}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join(``);this.frames=null;let t=jc(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,`We already have a frame buffer`),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter(`bytes_received`,t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);e!==null&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=Lp(t,Fm);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&=(clearInterval(this.keepaliveTimer),null),this.mySock&&=(this.mySock.close(),null)}onClosed_(){this.isClosed_||(this.log_(`WebSocket is closing itself`),this.shutdown_(),this.onDisconnect&&=(this.onDisconnect(this.everConnected_),null))}close(){this.isClosed_||(this.log_(`WebSocket is being closed`),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_(`0`),this.resetKeepAlive()},Math.floor(Im))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_(`Exception thrown from WebSocket.send():`,e.message||e.data,`Closing connection.`),setTimeout(this.onClosed_.bind(this),0)}}};Rm.responsesRequiredToBeHealthy=2,Rm.healthyTimeout=3e4;var zm=class e{static get ALL_TRANSPORTS(){return[Nm,Rm]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(t){let n=Rm&&Rm.isAvailable(),r=n&&!Rm.previouslyFailed();if(t.webSocketOnly&&(n||Dp(`wss:// URL used, but browser isn't known to support websockets.  Trying anyway.`),r=!0),r)this.transports_=[Rm];else{let t=this.transports_=[];for(let n of e.ALL_TRANSPORTS)n&&n.isAvailable()&&t.push(n);e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error(`No transports available`)}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};zm.globalTransportInitialized_=!1;var Bm=6e4,Vm=5e3,Hm=10240,Um=102400,Wm=`t`,Gm=`d`,Km=`s`,qm=`r`,Jm=`e`,Ym=`o`,Xm=`a`,Zm=`n`,Qm=`p`,$m=`h`,eh=class{constructor(e,t,n,r,i,a,o,s,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=a,this.onReady_=o,this.onDisconnect_=s,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wp(`c:`+this.id+`:`),this.transportManager_=new zm(t),this.log_(`Connection created`),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},0);let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Yp(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Um?(this.log_(`Connection exceeded healthy timeout but has received `+this.conn_.bytesReceived+` bytes.  Marking connection healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hm?this.log_(`Connection exceeded healthy timeout but has sent `+this.conn_.bytesSent+` bytes.  Leaving connection alive.`):(this.log_(`Closing unhealthy connection after timeout.`),this.close()))},Math.floor(r)))}nextTransportId_(){return`c:`+this.id+`:`+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_(`Secondary connection lost.`),this.onSecondaryConnectionLost_()):this.log_(`closing an old connection`)}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_(`message on old connection`))}}sendRequest(e){let t={t:`d`,d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_(`cleaning up and promoting a connection: `+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wm in e){let t=e[Wm];t===Xm?this.upgradeIfSecondaryHealthy_():t===qm?(this.log_(`Got a reset on secondary, closing it`),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ym&&(this.log_(`got pong on secondary.`),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=Fp(`t`,e),n=Fp(`d`,e);if(t===`c`)this.onSecondaryControl_(n);else if(t===`d`)this.pendingDataMessages.push(n);else throw Error(`Unknown protocol layer: `+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_(`Secondary connection is healthy.`),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_(`sending ping on secondary.`),this.secondaryConn_.send({t:`c`,d:{t:Qm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_(`sending client ack on secondary`),this.secondaryConn_.send({t:`c`,d:{t:Xm,d:{}}}),this.log_(`Ending transmission on primary`),this.conn_.send({t:`c`,d:{t:Zm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=Fp(`t`,e),n=Fp(`d`,e);t===`c`?this.onControl_(n):t===`d`&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=Fp(Wm,e);if(Gm in e){let n=e[Gm];if(t===$m){let e={...n};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Zm){this.log_(`recvd end transmission on primary`),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Km?this.onConnectionShutdown_(n):t===qm?this.onReset_(n):t===Jm?Tp(`Server Error: `+n):t===Ym?(this.log_(`got pong on primary.`),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tp(`Unknown control packet command: `+t)}}onHandshake_(e){let t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$p!==n&&Dp(`Protocol version mismatch detected`),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Yp(()=>{this.secondaryConn_&&(this.log_(`Timed out trying to upgrade.`),this.secondaryConn_.close())},Math.floor(Bm))}onReset_(e){this.log_(`Reset packet received.  New host: `+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_(`Realtime connection established.`),this.conn_=e,this.state_=1,this.onReady_&&=(this.onReady_(t,this.sessionId),null),this.primaryResponsesRequired_===0?(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0):Yp(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_(`sending ping on primary.`),this.sendData_({t:`c`,d:{t:Qm,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_(`Realtime connection failed.`),this.repoInfo_.isCacheableHost()&&(hp.remove(`host:`+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_(`Realtime connection lost.`),this.close()}onConnectionShutdown_(e){this.log_(`Connection shutdown command received. Shutting down...`),this.onKill_&&=(this.onKill_(e),null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw`Connection is not connected`;this.tx_.send(e)}close(){this.state_!==2&&(this.log_(`Closing realtime connection.`),this.state_=2,this.closeConnections_(),this.onDisconnect_&&=(this.onDisconnect_(),null))}closeConnections_(){this.log_(`Shutting down all connections`),this.conn_&&=(this.conn_.close(),null),this.secondaryConn_&&=(this.secondaryConn_.close(),null),this.healthyTimeout_&&=(clearTimeout(this.healthyTimeout_),null)}},th=class{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}},nh=class{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,`Requires a non-empty array`)}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context)){r.splice(e,1);return}}validateEventType_(e){B(this.allowedEvents_.find(t=>t===e),`Unknown event: `+e)}},rh=class e extends nh{static getInstance(){return new e}constructor(){super([`online`]),this.online_=!0,typeof window<`u`&&window.addEventListener!==void 0&&!bc()&&(window.addEventListener(`online`,()=>{this.online_||(this.online_=!0,this.trigger(`online`,!0))},!1),window.addEventListener(`offline`,()=>{this.online_&&(this.online_=!1,this.trigger(`online`,!1))},!1))}getInitialEvent(e){return B(e===`online`,`Unknown event type: `+e),[this.online_]}currentlyOnline(){return this.online_}},ih=32,ah=768,W=class{constructor(e,t){if(t===void 0){this.pieces_=e.split(`/`);let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e=``;for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==``&&(e+=`/`+this.pieces_[t]);return e||`/`}};function G(){return new W(``)}function K(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function oh(e){return e.pieces_.length-e.pieceNum_}function q(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new W(e.pieces_,t)}function sh(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ch(e){let t=``;for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==``&&(t+=`/`+encodeURIComponent(String(e.pieces_[n])));return t||`/`}function lh(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function uh(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new W(t,0)}function J(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof W)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split(`/`);for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new W(n,0)}function Y(e){return e.pieceNum_>=e.pieces_.length}function dh(e,t){let n=K(e),r=K(t);if(n===null)return t;if(n===r)return dh(q(e),q(t));throw Error(`INTERNAL ERROR: innerPath (`+t+`) is not within outerPath (`+e+`)`)}function fh(e,t){let n=lh(e,0),r=lh(t,0);for(let e=0;e<n.length&&e<r.length;e++){let t=Np(n[e],r[e]);if(t!==0)return t}return n.length===r.length?0:n.length<r.length?-1:1}function ph(e,t){if(oh(e)!==oh(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function mh(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(oh(e)>oh(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var hh=class{constructor(e,t){this.errorPrefix_=t,this.parts_=lh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Gc(this.parts_[e]);vh(this)}};function gh(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Gc(t),vh(e)}function _h(e){let t=e.parts_.pop();e.byteLength_-=Gc(t),e.parts_.length>0&&--e.byteLength_}function vh(e){if(e.byteLength_>ah)throw Error(e.errorPrefix_+`has a key path longer than 768 bytes (`+e.byteLength_+`).`);if(e.parts_.length>ih)throw Error(e.errorPrefix_+`path specified exceeds the maximum depth that can be written (32) or object contains a cycle `+yh(e))}function yh(e){return e.parts_.length===0?``:`in property '`+e.parts_.join(`.`)+`'`}var bh=class e extends nh{static getInstance(){return new e}constructor(){super([`visible`]);let e,t;typeof document<`u`&&document.addEventListener!==void 0&&(document.hidden===void 0?document.mozHidden===void 0?document.msHidden===void 0?document.webkitHidden!==void 0&&(t=`webkitvisibilitychange`,e=`webkitHidden`):(t=`msvisibilitychange`,e=`msHidden`):(t=`mozvisibilitychange`,e=`mozHidden`):(t=`visibilitychange`,e=`hidden`)),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger(`visible`,t))},!1)}getInitialEvent(e){return B(e===`visible`,`Unknown event type: `+e),[this.visible_]}},xh=1e3,Sh=3e5,Ch=3e4,wh=1.3,Th=3e4,Eh=`server_kill`,Dh=3,Oh=class e extends th{constructor(t,n,r,i,a,o,s,c){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=c,this.id=e.nextPersistentConnectionId_++,this.log_=wp(`p:`+this.id+`:`),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xh,this.maxReconnectDelay_=Sh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Cc())throw Error(`Auth override specified in options, but not supported on non Node.js platforms`);bh.getInstance().on(`visible`,this.onVisible_,this),t.host.indexOf(`fblocal`)===-1&&rh.getInstance().on(`online`,this.onOnline_,this)}sendRequest(e,t,n){let r=++this.requestNumber_,i={r,a:e,b:t};this.log_(V(i)),B(this.connected_,`sendRequest call when we're not connected not allowed.`),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();let t=new _c,n={action:`g`,request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{let n=e.d;e.s===`ok`?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;let r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();let i=e._queryIdentifier,a=e._path.toString();this.log_(`Listen called for `+a+` `+i),this.listens.has(a)||this.listens.set(a,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`listen() called for non-default but complete query`),B(!this.listens.get(a).has(i),`listen() called twice for same path/queryId.`);let o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest(`g`,t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(t){let n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_(`Listen on `+r+` for `+i);let a={p:r};t.tag&&(a.q=n._queryObject,a.t=t.tag),a.h=t.hashFn(),this.sendRequest(`q`,a,a=>{let o=a.d,s=a.s;e.warnOnListenWarnings_(o,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_(`listen response`,a),s!==`ok`&&this.removeListen_(r,i),t.onComplete&&t.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&typeof e==`object`&&Fc(e,`w`)){let n=Ic(e,`w`);Array.isArray(n)&&~n.indexOf(`no_index`)&&Dp(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${`".indexOn": "`+t._queryParams.getIndex().toString()+`"`} at ${t._path.toString()} to your security rules for better performance.`)}}refreshAuthToken(e){this.authToken_=e,this.log_(`Auth token refreshed`),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest(`unauth`,{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pc(e))&&(this.log_(`Admin auth credential detected.  Reducing max reconnect time.`),this.maxReconnectDelay_=Ch)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_(`App check token refreshed`),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest(`unappeck`,{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=Nc(e)?`auth`:`gauth`,n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_==`object`&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,r=t.d||`error`;this.authToken_===e&&(n===`ok`?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest(`appcheck`,{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||`error`;t===`ok`?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),r=e._queryIdentifier;this.log_(`Unlisten called for `+n+` `+r),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`unlisten() called for non-default but complete query`),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_(`Unlisten on `+e+` for `+t);let i={p:e};r&&(i.q=n,i.t=r),this.sendRequest(`n`,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`o`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`o`,data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`om`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`om`,data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`oc`,e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:`oc`,data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){let i={p:t,d:n};this.log_(`onDisconnect `+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},0)})}put(e,t,n,r){this.putInternal(`p`,e,t,n,r)}merge(e,t,n,r){this.putInternal(`m`,e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();let a={p:t,d:n};i!==void 0&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_(`Buffering put: `+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+` response`,n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_(`reportStats`,t),this.sendRequest(`s`,t,e=>{if(e.s!==`ok`){let t=e.d;this.log_(`reportStats`,`Error sending stats: `+t)}})}}onDataMessage_(e){if(`r`in e){this.log_(`from server: `+V(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if(`error`in e)throw`A server-side error has occurred: `+e.error;else`a`in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_(`handleServerMessage`,e,t),e===`d`?this.onDataUpdate_(t.p,t.d,!1,t.t):e===`m`?this.onDataUpdate_(t.p,t.d,!0,t.t):e===`c`?this.onListenRevoked_(t.p,t.q):e===`ac`?this.onAuthRevoked_(t.s,t.d):e===`apc`?this.onAppCheckRevoked_(t.s,t.d):e===`sd`?this.onSecurityDebugPacket_(t):Tp(`Unrecognized action received from server: `+V(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_(`connection ready`),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,`Scheduling a connect when we're already connected/ing?`),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_(`Window became visible.  Reducing delay.`),this.reconnectDelay_=xh,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_(`Browser went online.`),this.reconnectDelay_=xh,this.realtime_||this.scheduleConnect_(0)):(this.log_(`Browser went offline.  Killing connection.`),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_(`data client disconnected`),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&=(new Date().getTime()-this.lastConnectionEstablishedTime_>Th&&(this.reconnectDelay_=xh),null):(this.log_(`Window isn't visible.  Delaying reconnect.`),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_(`Trying to reconnect in `+t+`ms`),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_(`Making a connection attempt`),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+`:`+e.nextConnectionId_++,a=this.lastSessionId,o=!1,s=null,c=function(){s?s.close():(o=!0,r())},l=function(e){B(s,`sendRequest call when we're not connected not allowed.`),s.sendRequest(e)};this.realtime_={close:c,sendRequest:l};let u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[e,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?U(`getToken() completed but was canceled`):(U(`getToken() completed. Creating connection.`),this.authToken_=e&&e.accessToken,this.appCheckToken_=c&&c.token,s=new eh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,e=>{Dp(e+` (`+this.repoInfo_.toString()+`)`),this.interrupt(Eh)},a))}catch(e){this.log_(`Failed to get token: `+e),o||(this.repoInfo_.nodeAdmin&&Dp(e),c())}}}interrupt(e){U(`Interrupting connection for reason: `+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&=(clearTimeout(this.establishConnectionTimer_),null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){U(`Resuming connection for reason: `+e),delete this.interruptReasons_[e],Lc(this.interruptReasons_)&&(this.reconnectDelay_=xh,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&`h`in t.request&&t.queued&&(t.onComplete&&t.onComplete(`disconnect`),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>Ip(e)).join(`$`):`default`;let r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete(`permission_denied`)}removeListen_(e,t){let n=new W(e).toString(),r;if(this.listens.has(n)){let e=this.listens.get(n);r=e.get(t),e.delete(t),e.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){U(`Auth token revoked: `+e+`/`+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dh&&(this.reconnectDelay_=Ch,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){U(`App check token revoked: `+e+`/`+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):`msg`in e&&console.log(`FIREBASE: `+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t=`js`;Cc()&&(t=this.repoInfo_.nodeAdmin?`admin_node`:`node`),e[`sdk.`+t+`.`+up.replace(/\./g,`-`)]=1,bc()?e[`framework.cordova`]=1:Sc()&&(e[`framework.reactnative`]=1),this.reportStats(e)}shouldReconnect_(){let e=rh.getInstance().currentlyOnline();return Lc(this.interruptReasons_)&&e}};Oh.nextPersistentConnectionId_=0,Oh.nextConnectionId_=0;var X=class e{constructor(e,t){this.name=e,this.node=t}static Wrap(t,n){return new e(t,n)}},kh=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new X(jp,e),r=new X(jp,t);return this.compare(n,r)!==0}minPost(){return X.MIN}},Ah,jh=class extends kh{static get __EMPTY_NODE(){return Ah}static set __EMPTY_NODE(e){Ah=e}compare(e,t){return Np(e.name,t.name)}isDefinedOn(e){throw Qs(`KeyIndex.isDefinedOn not expected to be called.`)}indexedValueChanged(e,t){return!1}minPost(){return X.MIN}maxPost(){return new X(Mp,Ah)}makePost(e,t){return B(typeof e==`string`,`KeyIndex indexValue must always be a string.`),new X(e,Ah)}toString(){return`.key`}},Mh=new jh,Nh=class{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?n(e.key,t):1,r&&(a*=-1),a<0)e=this.isReverse_?e.left:e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ph=class e{constructor(t,n,r,i,a){this.key=t,this.value=n,this.color=r??e.RED,this.left=i??Ih.EMPTY_NODE,this.right=a??Ih.EMPTY_NODE}copy(t,n,r,i,a){return new e(t??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ih.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Ih.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return 2**this.check_()<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error(`Red node has red child(`+this.key+`,`+this.value+`)`);if(this.right.isRed_())throw Error(`Right child of (`+this.key+`,`+this.value+`) is red`);let e=this.left.check_();if(e!==this.right.check_())throw Error(`Black depths differ`);return e+ +!this.isRed_()}};Ph.RED=!0,Ph.BLACK=!1;var Fh=class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ph(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},Ih=class e{constructor(t,n=e.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ph.BLACK,null,null))}remove(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ph.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0){if(!n.left.isEmpty()){for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}return r?r.key:null}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw Error(`Attempted to find predecessor key for a nonexistent key.  What gives?`)}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nh(this.root_,null,this.comparator_,!0,e)}};Ih.EMPTY_NODE=new Fh;function Lh(e,t){return Np(e.name,t.name)}function Rh(e,t){return Np(e,t)}var zh;function Bh(e){zh=e}var Vh=function(e){return typeof e==`number`?`number:`+zp(e):`string:`+e},Hh=function(e){if(e.isLeafNode()){let t=e.val();B(typeof t==`string`||typeof t==`number`||typeof t==`object`&&Fc(t,`.sv`),`Priority must be a string or number.`)}else B(e===zh||e.isEmpty(),`priority of unexpected type.`);B(e===zh||e.getPriority().isEmpty(),`Priority nodes can't have a priority of their own.`)},Uh,Wh=class e{static set __childrenNodeConstructor(e){Uh=e}static get __childrenNodeConstructor(){return Uh}constructor(t,n=e.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,`LeafNode shouldn't be created with null/undefined value.`),Hh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new e(this.value_,t)}getImmediateChild(t){return t===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Y(t)?this:K(t)===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(t,n){return t===`.priority`?this.updatePriority(n):n.isEmpty()&&t!==`.priority`?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){let r=K(t);return r===null?n:n.isEmpty()&&r!==`.priority`?this:(B(r!==`.priority`||oh(t)===1,`.priority must be the last token in a path`),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e=``;this.priorityNode_.isEmpty()||(e+=`priority:`+Vh(this.priorityNode_.val())+`:`);let t=typeof this.value_;e+=t+`:`,e+=t===`number`?zp(this.value_):this.value_,this.lazyHash_=yp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(B(t.isLeafNode(),`Unknown node type`),this.compareToLeafNode_(t))}compareToLeafNode_(t){let n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),a=e.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,`Unknown leaf type: `+n),B(a>=0,`Unknown leaf type: `+r),i===a?r===`object`?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}};Wh.VALUE_TYPE_ORDER=[`object`,`boolean`,`number`,`string`];var Gh,Kh;function qh(e){Gh=e}function Jh(e){Kh=e}var Z=new class extends kh{compare(e,t){let n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?Np(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Mp,new Wh(`[PRIORITY-POST]`,Kh))}makePost(e,t){return new X(t,new Wh(`[PRIORITY-POST]`,Gh(e)))}toString(){return`.priority`}},Yh=Math.log(2),Xh=class{constructor(e){let t=e=>parseInt(Math.log(e)/Yh,10),n=e=>parseInt(Array(e+1).join(`1`),2);this.count=t(e+1),this.current_=this.count-1;let r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},Zh=function(e,t,n,r){e.sort(t);let i=function(t,r){let a=r-t,o,s;if(a===0)return null;if(a===1)return o=e[t],s=n?n(o):o,new Ph(s,o.node,Ph.BLACK,null,null);{let c=parseInt(a/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],s=n?n(o):o,new Ph(s,o.node,Ph.BLACK,l,u)}},a=function(t){let r=null,a=null,o=e.length,s=function(t,r){let a=o-t,s=o;o-=t;let l=i(a+1,s),u=e[a],d=n?n(u):u;c(new Ph(d,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(a=e,r=e)};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),r=2**(t.count-(e+1));n?s(r,Ph.BLACK):(s(r,Ph.BLACK),s(r,Ph.RED))}return a}(new Xh(e.length));return new Ih(r||t,a)},Qh,$h={},eg=class e{static get Default(){return B($h&&Z,`ChildrenNode.ts has not been loaded`),Qh||=new e({".priority":$h},{".priority":Z}),Qh}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=Ic(this.indexes_,e);if(!t)throw Error(`No index defined for `+e);return t instanceof Ih?t:null}hasIndex(e){return Fc(this.indexSet_,e.toString())}addIndex(t,n){B(t!==Mh,`KeyIndex always exists and isn't meant to be added to the IndexMap.`);let r=[],i=!1,a=n.getIterator(X.Wrap),o=a.getNext();for(;o;)i||=t.isDefinedOn(o.node),r.push(o),o=a.getNext();let s;s=i?Zh(r,t.getCompare()):$h;let c=t.toString(),l={...this.indexSet_};l[c]=t;let u={...this.indexes_};return u[c]=s,new e(u,l)}addToIndexes(t,n){let r=Rc(this.indexes_,(e,r)=>{let i=Ic(this.indexSet_,r);if(B(i,`Missing index implementation for `+r),e===$h){if(i.isDefinedOn(t.node)){let e=[],r=n.getIterator(X.Wrap),a=r.getNext();for(;a;)a.name!==t.name&&e.push(a),a=r.getNext();return e.push(t),Zh(e,i.getCompare())}return $h}{let r=n.get(t.name),i=e;return r&&(i=i.remove(new X(t.name,r))),i.insert(t,t.node)}});return new e(r,this.indexSet_)}removeFromIndexes(t,n){let r=Rc(this.indexes_,e=>{if(e===$h)return e;{let r=n.get(t.name);return r?e.remove(new X(t.name,r)):e}});return new e(r,this.indexSet_)}},tg,Q=class e{static get EMPTY_NODE(){return tg||=new e(new Ih(Rh),null,eg.Default)}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Hh(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),`An empty node cannot have a priority`)}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tg}updatePriority(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}getImmediateChild(e){if(e===`.priority`)return this.getPriority();{let t=this.children_.get(e);return t===null?tg:t}}getChild(e){let t=K(e);return t===null?this:this.getImmediateChild(t).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(t,n){if(B(n,`We should always be passing snapshot nodes`),t===`.priority`)return this.updatePriority(n);{let r=new X(t,n),i,a;n.isEmpty()?(i=this.children_.remove(t),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),a=this.indexMap_.addToIndexes(r,this.children_));let o=i.isEmpty()?tg:this.priorityNode_;return new e(i,o,a)}}updateChild(e,t){let n=K(e);if(n===null)return t;{B(K(e)!==`.priority`||oh(e)===1,`.priority must be the last token in a path`);let r=this.getImmediateChild(n).updateChild(q(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;let n={},r=0,i=0,a=!0;if(this.forEachChild(Z,(o,s)=>{n[o]=s.val(t),r++,a&&e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1}),!t&&a&&i<2*r){let e=[];for(let t in n)e[t]=n[t];return e}return t&&!this.getPriority().isEmpty()&&(n[`.priority`]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e=``;this.getPriority().isEmpty()||(e+=`priority:`+Vh(this.getPriority().val())+`:`),this.forEachChild(Z,(t,n)=>{let r=n.hash();r!==``&&(e+=`:`+t+`:`+r)}),this.lazyHash_=e===``?``:yp(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let r=this.resolveIndex_(n);if(r){let n=r.getPredecessorKey(new X(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new X(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new X(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,X.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,X.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ng?-1:0}withIndex(t){if(t===Mh||this.indexMap_.hasIndex(t))return this;{let n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mh||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(!this.getPriority().equals(t.getPriority()))return!1;if(this.children_.count()===t.children_.count()){let e=this.getIterator(Z),n=t.getIterator(Z),r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return r===null&&i===null}return!1}}resolveIndex_(e){return e===Mh?null:this.indexMap_.get(e.toString())}};Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var ng=new class extends Q{constructor(){super(new Ih(Rh),Q.EMPTY_NODE,eg.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(X,{MIN:{value:new X(jp,Q.EMPTY_NODE)},MAX:{value:new X(Mp,ng)}}),jh.__EMPTY_NODE=Q.EMPTY_NODE,Wh.__childrenNodeConstructor=Q,Bh(ng),Jh(ng);var rg=!0;function $(e,t=null){if(e===null)return Q.EMPTY_NODE;if(typeof e==`object`&&`.priority`in e&&(t=e[`.priority`]),B(t===null||typeof t==`string`||typeof t==`number`||typeof t==`object`&&`.sv`in t,`Invalid priority type found: `+typeof t),typeof e==`object`&&`.value`in e&&e[`.value`]!==null&&(e=e[`.value`]),typeof e!=`object`||`.sv`in e)return new Wh(e,$(t));if(!(e instanceof Array)&&rg){let n=[],r=!1;if(Rp(e,(e,t)=>{if(e.substring(0,1)!==`.`){let i=$(t);i.isEmpty()||(r||=!i.getPriority().isEmpty(),n.push(new X(e,i)))}}),n.length===0)return Q.EMPTY_NODE;let i=Zh(n,Lh,e=>e.name,Rh);if(r){let e=Zh(n,Z.getCompare());return new Q(i,$(t),new eg({".priority":e},{".priority":Z}))}return new Q(i,$(t),eg.Default)}{let n=Q.EMPTY_NODE;return Rp(e,(t,r)=>{if(Fc(e,t)&&t.substring(0,1)!==`.`){let e=$(r);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority($(t))}}qh($);var ig=class extends kh{constructor(e){super(),this.indexPath_=e,B(!Y(e)&&K(e)!==`.priority`,`Can't create PathIndex with empty path or .priority key`)}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?Np(e.name,t.name):i}makePost(e,t){let n=$(e);return new X(t,Q.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new X(Mp,Q.EMPTY_NODE.updateChild(this.indexPath_,ng))}toString(){return lh(this.indexPath_,0).join(`/`)}},ag=new class extends kh{compare(e,t){let n=e.node.compareTo(t.node);return n===0?Np(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,t){return new X(t,$(e))}toString(){return`.value`}};function og(e){return{type:`value`,snapshotNode:e}}function sg(e,t){return{type:`child_added`,snapshotNode:t,childName:e}}function cg(e,t){return{type:`child_removed`,snapshotNode:t,childName:e}}function lg(e,t,n){return{type:`child_changed`,snapshotNode:t,childName:e,oldSnap:n}}function ug(e,t){return{type:`child_moved`,snapshotNode:t,childName:e}}var dg=class{constructor(e){this.index_=e}updateChild(e,t,n,r,i,a){B(e.isIndexed(this.index_),`A node must be indexed if only a child is updated`);let o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()||(a!=null&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(cg(t,o)):B(e.isLeafNode(),`A child remove without an old child only makes sense on a leaf node`):o.isEmpty()?a.trackChildChange(sg(t,n)):a.trackChildChange(lg(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Z,(e,r)=>{t.hasChild(e)||n.trackChildChange(cg(e,r))}),t.isLeafNode()||t.forEachChild(Z,(t,r)=>{if(e.hasChild(t)){let i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(lg(t,r,i))}else n.trackChildChange(sg(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}},fg=class e{constructor(t){this.indexedFilter_=new dg(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,a){return this.matches(new X(t,n))||(n=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,a)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Q.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Q.EMPTY_NODE);let i=this;return t.forEachChild(Z,(e,t)=>{i.matches(new X(e,t))||(r=r.updateImmediateChild(e,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}},pg=class{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new fg(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,a){return this.rangedFilter_.matches(new X(t,n))||(n=Q.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,a):this.fullLimitUpdateChild_(e,t,n,i,a)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=Q.EMPTY_NODE.withIndex(this.index_);let e;e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))r=r.updateImmediateChild(t.name,t.node),n++;else break}}}else{r=t.withIndex(this.index_),r=r.updatePriority(Q.EMPTY_NODE);let e;e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let a;if(this.reverse_){let e=this.index_.getCompare();a=(t,n)=>e(n,t)}else a=this.index_.getCompare();let o=e;B(o.numChildren()===this.limit_,``);let s=new X(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(s);if(o.hasChild(t)){let e=o.getImmediateChild(t),u=r.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);let d=u==null?1:a(u,s);if(l&&!n.isEmpty()&&d>=0)return i?.trackChildChange(lg(t,n,e)),o.updateImmediateChild(t,n);{i?.trackChildChange(cg(t,e));let n=o.updateImmediateChild(t,Q.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(i?.trackChildChange(sg(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:l&&a(c,s)>=0?(i!=null&&(i.trackChildChange(cg(c.name,c.node)),i.trackChildChange(sg(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,Q.EMPTY_NODE)):e}},mg=class e{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_=``,this.indexStartValue_=null,this.indexStartName_=``,this.indexEndValue_=null,this.indexEndName_=``,this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===``?this.startSet_:this.viewFrom_===`l`}getIndexStartValue(){return B(this.startSet_,`Only valid if start has been set`),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,`Only valid if start has been set`),this.startNameSet_?this.indexStartName_:jp}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,`Only valid if end has been set`),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,`Only valid if end has been set`),this.endNameSet_?this.indexEndName_:Mp}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==``}getLimit(){return B(this.limitSet_,`Only valid if limit has been set`),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){let t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}};function hg(e){return e.loadsAllData()?new dg(e.getIndex()):e.hasLimit()?new pg(e):new fg(e)}function gg(e){let t={};if(e.isDefault())return t;let n;if(e.index_===Z?n=`$priority`:e.index_===ag?n=`$value`:e.index_===Mh?n=`$key`:(B(e.index_ instanceof ig,`Unrecognized index type!`),n=e.index_.toString()),t.orderBy=V(n),e.startSet_){let n=e.startAfterSet_?`startAfter`:`startAt`;t[n]=V(e.indexStartValue_),e.startNameSet_&&(t[n]+=`,`+V(e.indexStartName_))}if(e.endSet_){let n=e.endBeforeSet_?`endBefore`:`endAt`;t[n]=V(e.indexEndValue_),e.endNameSet_&&(t[n]+=`,`+V(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function _g(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===``&&(n=e.isViewFromLeft()?`l`:`r`),t.vf=n}return e.index_!==Z&&(t.i=e.index_.toString()),t}var vg=class e extends th{reportStats(e){throw Error(`Method not implemented.`)}static getListenId_(e,t){return t===void 0?(B(e._queryParams.isDefault(),`should have a tag if it's not a default query.`),e._path.toString()):`tag$`+t}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=wp(`p:rest:`),this.listens_={}}listen(t,n,r,i){let a=t._path.toString();this.log_(`Listen called for `+a+` `+t._queryIdentifier);let o=e.getListenId_(t,r),s={};this.listens_[o]=s;let c=gg(t._queryParams);this.restRequest_(a+`.json`,c,(e,t)=>{let n=t;if(e===404&&(n=null,e=null),e===null&&this.onDataUpdate_(a,n,!1,r),Ic(this.listens_,o)===s){let t;t=e?e===401?`permission_denied`:`rest_error:`+e:`ok`,i(t,null)}})}unlisten(t,n){let r=e.getListenId_(t,n);delete this.listens_[r]}get(e){let t=gg(e._queryParams),n=e._path.toString(),r=new _c;return this.restRequest_(n+`.json`,t,(e,t)=>{let i=t;e===404&&(i=null,e=null),e===null?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format=`export`,Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);let a=(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host+e+`?ns=`+this.repoInfo_.namespace+Vc(t);this.log_(`Sending REST request for `+a);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&o.readyState===4){this.log_(`REST Response for `+a+` received. status:`,o.status,`response:`,o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=jc(o.responseText)}catch{Dp(`Failed to parse JSON response for `+a+`: `+o.responseText)}n(null,e)}else o.status!==401&&o.status!==404&&Dp(`Got unsuccessful REST response for `+a+` Status: `+o.status),n(o.status);n=null}},o.open(`GET`,a,!0),o.send()})}},yg=class{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function bg(){return{value:null,children:new Map}}function xg(e,t,n){if(Y(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{let r=K(t);e.children.has(r)||e.children.set(r,bg());let i=e.children.get(r);t=q(t),xg(i,t,n)}}function Sg(e,t){if(Y(t))return e.value=null,e.children.clear(),!0;if(e.value!==null){if(e.value.isLeafNode())return!1;{let n=e.value;return e.value=null,n.forEachChild(Z,(t,n)=>{xg(e,new W(t),n)}),Sg(e,t)}}if(e.children.size>0){let n=K(t);return t=q(t),e.children.has(n)&&Sg(e.children.get(n),t)&&e.children.delete(n),e.children.size===0}return!0}function Cg(e,t,n){e.value===null?wg(e,(e,r)=>{Cg(r,new W(t.toString()+`/`+e),n)}):n(t,e.value)}function wg(e,t){e.children.forEach((e,n)=>{t(n,e)})}var Tg=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&Rp(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}},Eg=1e4,Dg=3e5,Og=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Tg(e);let n=Eg+2e4*Math.random();Yp(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;Rp(e,(e,r)=>{r>0&&Fc(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Yp(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dg))}},kg;(function(e){e[e.OVERWRITE=0]=`OVERWRITE`,e[e.MERGE=1]=`MERGE`,e[e.ACK_USER_WRITE=2]=`ACK_USER_WRITE`,e[e.LISTEN_COMPLETE=3]=`LISTEN_COMPLETE`})(kg||={});function Ag(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}var Ng=class e{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=kg.ACK_USER_WRITE,this.source=Ag()}operationForChild(t){if(!Y(this.path))return B(K(this.path)===t,`operationForChild called for unrelated child.`),new e(q(this.path),this.affectedTree,this.revert);if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),`affectedTree should not have overlapping affected paths.`),this;{let n=this.affectedTree.subtree(new W(t));return new e(G(),n,this.revert)}}},Pg=class e{constructor(e,t){this.source=e,this.path=t,this.type=kg.LISTEN_COMPLETE}operationForChild(t){return Y(this.path)?new e(this.source,G()):new e(this.source,q(this.path))}},Fg=class e{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=kg.OVERWRITE}operationForChild(t){return Y(this.path)?new e(this.source,G(),this.snap.getImmediateChild(t)):new e(this.source,q(this.path),this.snap)}},Ig=class e{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=kg.MERGE}operationForChild(t){if(Y(this.path)){let n=this.children.subtree(new W(t));return n.isEmpty()?null:n.value?new Fg(this.source,G(),n.value):new e(this.source,G(),n)}return B(K(this.path)===t,`Can't get a merge for a child not on the path of the operation`),new e(this.source,q(this.path),this.children)}toString(){return`Operation(`+this.path+`: `+this.source.toString()+` merge: `+this.children.toString()+`)`}},Lg=class{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;let t=K(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}},Rg=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function zg(e,t,n,r){let i=[],a=[];return t.forEach(t=>{t.type===`child_changed`&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push(ug(t.childName,t.snapshotNode))}),Bg(e,i,`child_removed`,t,r,n),Bg(e,i,`child_added`,t,r,n),Bg(e,i,`child_moved`,a,r,n),Bg(e,i,`child_changed`,t,r,n),Bg(e,i,`value`,t,r,n),i}function Bg(e,t,n,r,i,a){let o=r.filter(e=>e.type===n);o.sort((t,n)=>Hg(e,t,n)),o.forEach(n=>{let r=Vg(e,n,a);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function Vg(e,t,n){return t.type===`value`||t.type===`child_removed`||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Hg(e,t,n){if(t.childName==null||n.childName==null)throw Qs(`Should only compare child_ events.`);let r=new X(t.childName,t.snapshotNode),i=new X(n.childName,n.snapshotNode);return e.index_.compare(r,i)}function Ug(e,t){return{eventCache:e,serverCache:t}}function Wg(e,t,n,r){return Ug(new Lg(t,n,r),e.serverCache)}function Gg(e,t,n,r){return Ug(e.eventCache,new Lg(t,n,r))}function Kg(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function qg(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}var Jg,Yg=()=>(Jg||=new Ih(Pp),Jg),Xg=class e{static fromObject(t){let n=new e(null);return Rp(t,(e,t)=>{n=n.set(new W(e),t)}),n}constructor(e,t=Yg()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:G(),value:this.value};if(Y(e))return null;{let n=K(e),r=this.children.get(n);if(r!==null){let i=r.findRootMostMatchingPathAndValue(q(e),t);return i==null?null:{path:J(new W(n),i.path),value:i.value}}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(t){if(Y(t))return this;{let n=K(t),r=this.children.get(n);return r===null?new e(null):r.subtree(q(t))}}set(t,n){if(Y(t))return new e(n,this.children);{let r=K(t),i=(this.children.get(r)||new e(null)).set(q(t),n),a=this.children.insert(r,i);return new e(this.value,a)}}remove(t){if(Y(t))return this.children.isEmpty()?new e(null):new e(null,this.children);{let n=K(t),r=this.children.get(n);if(r){let i=r.remove(q(t)),a;return a=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),this.value===null&&a.isEmpty()?new e(null):new e(this.value,a)}return this}}get(e){if(Y(e))return this.value;{let t=K(e),n=this.children.get(t);return n?n.get(q(e)):null}}setTree(t,n){if(Y(t))return n;{let r=K(t),i=(this.children.get(r)||new e(null)).setTree(q(t),n),a;return a=i.isEmpty()?this.children.remove(r):this.children.insert(r,i),new e(this.value,a)}}fold(e){return this.fold_(G(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(J(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,G(),t)}findOnPath_(e,t,n){let r=this.value?n(t,this.value):!1;if(r)return r;if(Y(e))return null;{let r=K(e),i=this.children.get(r);return i?i.findOnPath_(q(e),J(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,G(),t)}foreachOnPath_(t,n,r){if(Y(t))return this;{this.value&&r(n,this.value);let i=K(t),a=this.children.get(i);return a?a.foreachOnPath_(q(t),J(n,i),r):new e(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(J(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}},Zg=class e{constructor(e){this.writeTree_=e}static empty(){return new e(new Xg(null))}};function Qg(e,t,n){if(Y(t))return new Zg(new Xg(n));{let r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){let i=r.path,a=r.value,o=dh(i,t);return a=a.updateChild(o,n),new Zg(e.writeTree_.set(i,a))}{let r=new Xg(n);return new Zg(e.writeTree_.setTree(t,r))}}}function $g(e,t,n){let r=e;return Rp(n,(e,n)=>{r=Qg(r,J(t,e),n)}),r}function e_(e,t){return Y(t)?Zg.empty():new Zg(e.writeTree_.setTree(t,new Xg(null)))}function t_(e,t){return n_(e,t)!=null}function n_(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return n==null?null:e.writeTree_.get(n.path).getChild(dh(n.path,t))}function r_(e){let t=[],n=e.writeTree_.value;return n==null?e.writeTree_.children.inorderTraversal((e,n)=>{n.value!=null&&t.push(new X(e,n.value))}):n.isLeafNode()||n.forEachChild(Z,(e,n)=>{t.push(new X(e,n))}),t}function i_(e,t){if(Y(t))return e;{let n=n_(e,t);return n==null?new Zg(e.writeTree_.subtree(t)):new Zg(new Xg(n))}}function a_(e){return e.writeTree_.isEmpty()}function o_(e,t){return s_(G(),e.writeTree_,t)}function s_(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{t===`.priority`?(B(i.value!==null,`Priority writes must always be leaf nodes`),r=i.value):n=s_(J(e,t),i,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(J(e,`.priority`),r)),n}}function c_(e,t){return A_(t,e)}function l_(e,t,n,r,i){B(r>e.lastWriteId,`Stacking an older write on top of newer ones`),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Qg(e.visibleWrites,t,n)),e.lastWriteId=r}function u_(e,t){for(let n=0;n<e.allWrites.length;n++){let r=e.allWrites[n];if(r.writeId===t)return r}return null}function d_(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);B(n>=0,`removeWrite called with nonexistent writeId.`);let r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,a=!1,o=e.allWrites.length-1;for(;i&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&f_(t,r.path)?i=!1:mh(r.path,t.path)&&(a=!0)),o--}if(!i)return!1;if(a)return p_(e),!0;if(r.snap)e.visibleWrites=e_(e.visibleWrites,r.path);else{let t=r.children;Rp(t,t=>{e.visibleWrites=e_(e.visibleWrites,J(r.path,t))})}return!0}function f_(e,t){if(e.snap)return mh(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&mh(J(e.path,n),t))return!0;return!1}function p_(e){e.visibleWrites=h_(e.allWrites,m_,G()),e.lastWriteId=e.allWrites.length>0?e.allWrites[e.allWrites.length-1].writeId:-1}function m_(e){return e.visible}function h_(e,t,n){let r=Zg.empty();for(let i=0;i<e.length;++i){let a=e[i];if(t(a)){let e=a.path,t;if(a.snap)mh(n,e)?(t=dh(n,e),r=Qg(r,t,a.snap)):mh(e,n)&&(t=dh(e,n),r=Qg(r,G(),a.snap.getChild(t)));else if(a.children){if(mh(n,e))t=dh(n,e),r=$g(r,t,a.children);else if(mh(e,n)){if(t=dh(e,n),Y(t))r=$g(r,G(),a.children);else{let e=Ic(a.children,K(t));if(e){let n=e.getChild(q(t));r=Qg(r,G(),n)}}}}else throw Qs(`WriteRecord should have .snap or .children`)}}return r}function g_(e,t,n,r,i){if(!r&&!i){let r=n_(e.visibleWrites,t);if(r!=null)return r;{let r=i_(e.visibleWrites,t);return a_(r)?n:n==null&&!t_(r,G())?null:o_(r,n||Q.EMPTY_NODE)}}{let a=i_(e.visibleWrites,t);return!i&&a_(a)?n:!i&&n==null&&!t_(a,G())?null:o_(h_(e.allWrites,function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(mh(e.path,t)||mh(t,e.path))},t),n||Q.EMPTY_NODE)}}function __(e,t,n){let r=Q.EMPTY_NODE,i=n_(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Z,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){let i=i_(e.visibleWrites,t);return n.forEachChild(Z,(e,t)=>{let n=o_(i_(i,new W(e)),t);r=r.updateImmediateChild(e,n)}),r_(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}return r_(i_(e.visibleWrites,t)).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}function v_(e,t,n,r,i){B(r||i,`Either existingEventSnap or existingServerSnap must exist`);let a=J(t,n);if(t_(e.visibleWrites,a))return null;{let t=i_(e.visibleWrites,a);return a_(t)?i.getChild(n):o_(t,i.getChild(n))}}function y_(e,t,n,r){let i=J(t,n);return n_(e.visibleWrites,i)??(r.isCompleteForChild(n)?o_(i_(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null)}function b_(e,t){return n_(e.visibleWrites,t)}function x_(e,t,n,r,i,a,o){let s,c=i_(e.visibleWrites,t),l=n_(c,G());if(l!=null)s=l;else if(n!=null)s=o_(c,n);else return[];if(s=s.withIndex(o),!s.isEmpty()&&!s.isLeafNode()){let e=[],t=o.getCompare(),n=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),c=n.getNext();for(;c&&e.length<i;)t(c,r)!==0&&e.push(c),c=n.getNext();return e}return[]}function S_(){return{visibleWrites:Zg.empty(),allWrites:[],lastWriteId:-1}}function C_(e,t,n,r){return g_(e.writeTree,e.treePath,t,n,r)}function w_(e,t){return __(e.writeTree,e.treePath,t)}function T_(e,t,n,r){return v_(e.writeTree,e.treePath,t,n,r)}function E_(e,t){return b_(e.writeTree,J(e.treePath,t))}function D_(e,t,n,r,i,a){return x_(e.writeTree,e.treePath,t,n,r,i,a)}function O_(e,t,n){return y_(e.writeTree,e.treePath,t,n)}function k_(e,t){return A_(J(e.treePath,t),e.writeTree)}function A_(e,t){return{treePath:e,writeTree:t}}var j_=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;B(t===`child_added`||t===`child_changed`||t===`child_removed`,`Only child changes supported for tracking`),B(n!==`.priority`,`Only non-priority child changes can be tracked.`);let r=this.changeMap.get(n);if(r){let i=r.type;if(t===`child_added`&&i===`child_removed`)this.changeMap.set(n,lg(n,e.snapshotNode,r.snapshotNode));else if(t===`child_removed`&&i===`child_added`)this.changeMap.delete(n);else if(t===`child_removed`&&i===`child_changed`)this.changeMap.set(n,cg(n,r.oldSnap));else if(t===`child_changed`&&i===`child_added`)this.changeMap.set(n,sg(n,e.snapshotNode));else if(t===`child_changed`&&i===`child_changed`)this.changeMap.set(n,lg(n,e.snapshotNode,r.oldSnap));else throw Qs(`Illegal combination of changes: `+e+` occurred after `+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}},M_=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}},N_=class{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=this.optCompleteServerCache_==null?this.viewCache_.serverCache:new Lg(this.optCompleteServerCache_,!0,!1);return O_(this.writes_,e,t)}}getChildAfterChild(e,t,n){let r=this.optCompleteServerCache_==null?qg(this.viewCache_):this.optCompleteServerCache_,i=D_(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}};function P_(e){return{filter:e}}function F_(e,t){B(t.eventCache.getNode().isIndexed(e.filter.getIndex()),`Event snap not indexed`),B(t.serverCache.getNode().isIndexed(e.filter.getIndex()),`Server snap not indexed`)}function I_(e,t,n,r,i){let a=new j_,o,s;if(n.type===kg.OVERWRITE){let c=n;c.source.fromUser?o=B_(e,t,c.path,c.snap,r,i,a):(B(c.source.fromServer,`Unknown source.`),s=c.source.tagged||t.serverCache.isFiltered()&&!Y(c.path),o=z_(e,t,c.path,c.snap,r,i,s,a))}else if(n.type===kg.MERGE){let c=n;c.source.fromUser?o=H_(e,t,c.path,c.children,r,i,a):(B(c.source.fromServer,`Unknown source.`),s=c.source.tagged||t.serverCache.isFiltered(),o=W_(e,t,c.path,c.children,r,i,s,a))}else if(n.type===kg.ACK_USER_WRITE){let s=n;o=s.revert?q_(e,t,s.path,r,i,a):G_(e,t,s.path,s.affectedTree,r,i,a)}else if(n.type===kg.LISTEN_COMPLETE)o=K_(e,t,n.path,r,a);else throw Qs(`Unknown operation type: `+n.type);let c=a.getChanges();return L_(t,o,c),{viewCache:o,changes:c}}function L_(e,t,n){let r=t.eventCache;if(r.isFullyInitialized()){let i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Kg(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(og(Kg(t)))}}function R_(e,t,n,r,i,a){let o=t.eventCache;if(E_(r,n)!=null)return t;{let s,c;if(Y(n)){if(B(t.serverCache.isFullyInitialized(),`If change path is empty, we must have complete server data`),t.serverCache.isFiltered()){let n=qg(t),i=w_(r,n instanceof Q?n:Q.EMPTY_NODE);s=e.filter.updateFullNode(t.eventCache.getNode(),i,a)}else{let n=C_(r,qg(t));s=e.filter.updateFullNode(t.eventCache.getNode(),n,a)}}else{let l=K(n);if(l===`.priority`){B(oh(n)===1,`Can't have a priority with additional path components`);let i=o.getNode();c=t.serverCache.getNode();let a=T_(r,n,i,c);s=a==null?o.getNode():e.filter.updatePriority(i,a)}else{let u=q(n),d;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();let e=T_(r,n,o.getNode(),c);d=e==null?o.getNode().getImmediateChild(l):o.getNode().getImmediateChild(l).updateChild(u,e)}else d=O_(r,l,t.serverCache);s=d==null?o.getNode():e.filter.updateChild(o.getNode(),l,d,u,i,a)}}return Wg(t,s,o.isFullyInitialized()||Y(n),e.filter.filtersNodes())}}function z_(e,t,n,r,i,a,o,s){let c=t.serverCache,l,u=o?e.filter:e.filter.getIndexedFilter();if(Y(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){let e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{let e=K(n);if(!c.isCompleteForPath(n)&&oh(n)>1)return t;let i=q(n),a=c.getNode().getImmediateChild(e).updateChild(i,r);l=e===`.priority`?u.updatePriority(c.getNode(),a):u.updateChild(c.getNode(),e,a,i,M_,null)}let d=Gg(t,l,c.isFullyInitialized()||Y(n),u.filtersNodes());return R_(e,d,n,i,new N_(i,d,a),s)}function B_(e,t,n,r,i,a,o){let s=t.eventCache,c,l,u=new N_(i,t,a);if(Y(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=Wg(t,l,!0,e.filter.filtersNodes());else{let i=K(n);if(i===`.priority`)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Wg(t,l,s.isFullyInitialized(),s.isFiltered());else{let a=q(n),l=s.getNode().getImmediateChild(i),d;if(Y(a))d=r;else{let e=u.getCompleteChild(i);d=e==null?Q.EMPTY_NODE:sh(a)===`.priority`&&e.getChild(uh(a)).isEmpty()?e:e.updateChild(a,r)}c=l.equals(d)?t:Wg(t,e.filter.updateChild(s.getNode(),i,d,a,u,o),s.isFullyInitialized(),e.filter.filtersNodes())}}return c}function V_(e,t){return e.eventCache.isCompleteForChild(t)}function H_(e,t,n,r,i,a,o){let s=t;return r.foreach((r,c)=>{let l=J(n,r);V_(t,K(l))&&(s=B_(e,s,l,c,i,a,o))}),r.foreach((r,c)=>{let l=J(n,r);V_(t,K(l))||(s=B_(e,s,l,c,i,a,o))}),s}function U_(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function W_(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c=t,l;l=Y(n)?r:new Xg(null).setTree(n,r);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){let l=U_(e,t.serverCache.getNode().getImmediateChild(n),r);c=z_(e,c,new W(n),l,i,a,o,s)}}),l.children.inorderTraversal((n,r)=>{let l=!t.serverCache.isCompleteForChild(n)&&r.value===null;if(!u.hasChild(n)&&!l){let l=U_(e,t.serverCache.getNode().getImmediateChild(n),r);c=z_(e,c,new W(n),l,i,a,o,s)}}),c}function G_(e,t,n,r,i,a,o){if(E_(i,n)!=null)return t;let s=t.serverCache.isFiltered(),c=t.serverCache;if(r.value!=null){if(Y(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return z_(e,t,n,c.getNode().getChild(n),i,a,s,o);if(Y(n)){let r=new Xg(null);return c.getNode().forEachChild(Mh,(e,t)=>{r=r.set(new W(e),t)}),W_(e,t,n,r,i,a,s,o)}return t}{let l=new Xg(null);return r.foreach((e,t)=>{let r=J(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),W_(e,t,n,l,i,a,s,o)}}function K_(e,t,n,r,i){let a=t.serverCache;return R_(e,Gg(t,a.getNode(),a.isFullyInitialized()||Y(n),a.isFiltered()),n,r,M_,i)}function q_(e,t,n,r,i,a){let o;if(E_(r,n)!=null)return t;{let s=new N_(r,t,i),c=t.eventCache.getNode(),l;if(Y(n)||K(n)===`.priority`){let n;if(t.serverCache.isFullyInitialized())n=C_(r,qg(t));else{let e=t.serverCache.getNode();B(e instanceof Q,`serverChildren would be complete if leaf node`),n=w_(r,e)}n=n,l=e.filter.updateFullNode(c,n,a)}else{let i=K(n),u=O_(r,i,t.serverCache);u==null&&t.serverCache.isCompleteForChild(i)&&(u=c.getImmediateChild(i)),l=u==null?t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,Q.EMPTY_NODE,q(n),s,a):c:e.filter.updateChild(c,i,u,q(n),s,a),l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=C_(r,qg(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,a)))}return o=t.serverCache.isFullyInitialized()||E_(r,G())!=null,Wg(t,l,o,e.filter.filtersNodes())}}var J_=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,r=new dg(n.getIndex()),i=hg(n);this.processor_=P_(i);let a=t.serverCache,o=t.eventCache,s=r.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),c=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),l=new Lg(s,a.isFullyInitialized(),r.filtersNodes()),u=new Lg(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ug(u,l),this.eventGenerator_=new Rg(this.query_)}get query(){return this.query_}};function Y_(e){return e.viewCache_.serverCache.getNode()}function X_(e,t){let n=qg(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Y(t)&&!n.getImmediateChild(K(t)).isEmpty())?n.getChild(t):null}function Z_(e){return e.eventRegistrations_.length===0}function Q_(e,t){e.eventRegistrations_.push(t)}function $_(e,t,n){let r=[];if(n){B(t==null,`A cancel should cancel all event registrations.`);let i=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){let i=e.eventRegistrations_[r];if(!i.matches(t))n.push(i);else if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function ev(e,t,n,r){t.type===kg.MERGE&&t.source.queryId!==null&&(B(qg(e.viewCache_),`We should always have a full cache before handling merges`),B(Kg(e.viewCache_),`Missing event cache, even though we have a server cache`));let i=e.viewCache_,a=I_(e.processor_,i,t,n,r);return F_(e.processor_,a.viewCache),B(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),`Once a server snap is complete, it should never go back`),e.viewCache_=a.viewCache,nv(e,a.changes,a.viewCache.eventCache.getNode(),null)}function tv(e,t){let n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(e,t)=>{r.push(sg(e,t))}),n.isFullyInitialized()&&r.push(og(n.getNode())),nv(e,r,n.getNode(),t)}function nv(e,t,n,r){let i=r?[r]:e.eventRegistrations_;return zg(e.eventGenerator_,t,n,i)}var rv,iv=class{constructor(){this.views=new Map}};function av(e){B(!rv,`__referenceConstructor has already been defined`),rv=e}function ov(){return B(rv,`Reference.ts has not been loaded`),rv}function sv(e){return e.views.size===0}function cv(e,t,n,r){let i=t.source.queryId;if(i!==null){let a=e.views.get(i);return B(a!=null,`SyncTree gave us an op for an invalid query.`),ev(a,t,n,r)}{let i=[];for(let a of e.views.values())i=i.concat(ev(a,t,n,r));return i}}function lv(e,t,n,r,i){let a=t._queryIdentifier,o=e.views.get(a);if(!o){let e=C_(n,i?r:null),a=!1;return e?a=!0:r instanceof Q?(e=w_(n,r),a=!1):(e=Q.EMPTY_NODE,a=!1),new J_(t,Ug(new Lg(e,a,!1),new Lg(r,i,!1)))}return o}function uv(e,t,n,r,i,a){let o=lv(e,t,r,i,a);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Q_(o,n),tv(o,n)}function dv(e,t,n,r){let i=t._queryIdentifier,a=[],o=[],s=gv(e);if(i==="default")for(let[t,i]of e.views.entries())o=o.concat($_(i,n,r)),Z_(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||a.push(i.query));else{let t=e.views.get(i);t&&(o=o.concat($_(t,n,r)),Z_(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||a.push(t.query)))}return s&&!gv(e)&&a.push(new(ov())(t._repo,t._path)),{removed:a,events:o}}function fv(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function pv(e,t){let n=null;for(let r of e.views.values())n||=X_(r,t);return n}function mv(e,t){if(t._queryParams.loadsAllData())return _v(e);{let n=t._queryIdentifier;return e.views.get(n)}}function hv(e,t){return mv(e,t)!=null}function gv(e){return _v(e)!=null}function _v(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}var vv;function yv(e){B(!vv,`__referenceConstructor has already been defined`),vv=e}function bv(){return B(vv,`Reference.ts has not been loaded`),vv}var xv=1,Sv=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Xg(null),this.pendingWriteTree_=S_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Cv(e,t,n,r,i){return l_(e.pendingWriteTree_,t,n,r,i),i?Pv(e,new Fg(Ag(),t,n)):[]}function wv(e,t,n=!1){let r=u_(e.pendingWriteTree_,t);if(d_(e.pendingWriteTree_,t)){let t=new Xg(null);return r.snap==null?Rp(r.children,e=>{t=t.set(new W(e),!0)}):t=t.set(G(),!0),Pv(e,new Ng(r.path,t,n))}return[]}function Tv(e,t,n){return Pv(e,new Fg(jg(),t,n))}function Ev(e,t,n){let r=Xg.fromObject(n);return Pv(e,new Ig(jg(),t,r))}function Dv(e,t){return Pv(e,new Pg(jg(),t))}function Ov(e,t,n){let r=Bv(e,n);if(r){let n=Vv(r),i=n.path,a=n.queryId,o=dh(i,t);return Hv(e,i,new Pg(Mg(a),o))}return[]}function kv(e,t,n,r,i=!1){let a=t._path,o=e.syncPointTree_.get(a),s=[];if(o&&(t._queryIdentifier==="default"||hv(o,t))){let c=dv(o,t,n,r);sv(o)&&(e.syncPointTree_=e.syncPointTree_.remove(a));let l=c.removed;if(s=c.events,!i){let n=l.findIndex(e=>e._queryParams.loadsAllData())!==-1,i=e.syncPointTree_.findOnPath(a,(e,t)=>gv(t));if(n&&!i){let t=e.syncPointTree_.subtree(a);if(!t.isEmpty()){let n=Uv(t);for(let t=0;t<n.length;++t){let r=n[t],i=r.query,a=Lv(e,r);e.listenProvider_.startListening(Wv(i),Rv(e,i),a.hashFn,a.onComplete)}}}!i&&l.length>0&&!r&&(n?e.listenProvider_.stopListening(Wv(t),null):l.forEach(t=>{let n=e.queryToTagMap.get(zv(t));e.listenProvider_.stopListening(Wv(t),n)}))}Gv(e,l)}return s}function Av(e,t,n,r){let i=Bv(e,r);if(i!=null){let r=Vv(i),a=r.path,o=r.queryId,s=dh(a,t);return Hv(e,a,new Fg(Mg(o),s,n))}return[]}function jv(e,t,n,r){let i=Bv(e,r);if(i){let r=Vv(i),a=r.path,o=r.queryId,s=dh(a,t),c=Xg.fromObject(n);return Hv(e,a,new Ig(Mg(o),s,c))}return[]}function Mv(e,t,n,r=!1){let i=t._path,a=null,o=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{let n=dh(e,i);a||=pv(t,n),o||=gv(t)});let s=e.syncPointTree_.get(i);s?(o||=gv(s),a||=pv(s,G())):(s=new iv,e.syncPointTree_=e.syncPointTree_.set(i,s));let c;a==null?(c=!1,a=Q.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((e,t)=>{let n=pv(t,G());n&&(a=a.updateImmediateChild(e,n))})):c=!0;let l=hv(s,t);if(!l&&!t._queryParams.loadsAllData()){let n=zv(t);B(!e.queryToTagMap.has(n),`View does not exist, but we have a tag`);let r=Kv();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=c_(e.pendingWriteTree_,i),d=uv(s,t,n,u,a,c);if(!l&&!o&&!r){let n=mv(s,t);d=d.concat(qv(e,t,n))}return d}function Nv(e,t,n){let r=e.pendingWriteTree_;return g_(r,t,e.syncPointTree_.findOnPath(t,(e,n)=>{let r=pv(n,dh(e,t));if(r)return r}),n,!0)}function Pv(e,t){return Fv(t,e.syncPointTree_,null,c_(e.pendingWriteTree_,G()))}function Fv(e,t,n,r){if(Y(e.path))return Iv(e,t,n,r);{let i=t.get(G());n==null&&i!=null&&(n=pv(i,G()));let a=[],o=K(e.path),s=e.operationForChild(o),c=t.children.get(o);if(c&&s){let e=n?n.getImmediateChild(o):null,t=k_(r,o);a=a.concat(Fv(s,c,e,t))}return i&&(a=a.concat(cv(i,e,r,n))),a}}function Iv(e,t,n,r){let i=t.get(G());n==null&&i!=null&&(n=pv(i,G()));let a=[];return t.children.inorderTraversal((t,i)=>{let o=n?n.getImmediateChild(t):null,s=k_(r,t),c=e.operationForChild(t);c&&(a=a.concat(Iv(c,i,o,s)))}),i&&(a=a.concat(cv(i,e,r,n))),a}function Lv(e,t){let n=t.query,r=Rv(e,n);return{hashFn:()=>(Y_(t)||Q.EMPTY_NODE).hash(),onComplete:t=>{if(t===`ok`)return r?Ov(e,n._path,r):Dv(e,n._path);{let r=Hp(t,n);return kv(e,n,null,r)}}}}function Rv(e,t){let n=zv(t);return e.queryToTagMap.get(n)}function zv(e){return e._path.toString()+`$`+e._queryIdentifier}function Bv(e,t){return e.tagToQueryMap.get(t)}function Vv(e){let t=e.indexOf(`$`);return B(t!==-1&&t<e.length-1,`Bad queryKey.`),{queryId:e.substr(t+1),path:new W(e.substr(0,t))}}function Hv(e,t,n){let r=e.syncPointTree_.get(t);return B(r,`Missing sync point for query tag that we're tracking`),cv(r,n,c_(e.pendingWriteTree_,t),null)}function Uv(e){return e.fold((e,t,n)=>{if(t&&gv(t))return[_v(t)];{let e=[];return t&&(e=fv(t)),Rp(n,(t,n)=>{e=e.concat(n)}),e}})}function Wv(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(bv())(e._repo,e._path):e}function Gv(e,t){for(let n=0;n<t.length;++n){let r=t[n];if(!r._queryParams.loadsAllData()){let t=zv(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Kv(){return xv++}function qv(e,t,n){let r=t._path,i=Rv(e,t),a=Lv(e,n),o=e.listenProvider_.startListening(Wv(t),i,a.hashFn,a.onComplete),s=e.syncPointTree_.subtree(r);if(i)B(!gv(s.value),`If we're adding a query, it shouldn't be shadowed`);else{let t=s.fold((e,t,n)=>{if(!Y(e)&&t&&gv(t))return[_v(t).query];{let e=[];return t&&(e=e.concat(fv(t).map(e=>e.query))),Rp(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let r=t[n];e.listenProvider_.stopListening(Wv(r),Rv(e,r))}}return o}var Jv=class e{constructor(e){this.node_=e}getImmediateChild(t){let n=this.node_.getImmediateChild(t);return new e(n)}node(){return this.node_}},Yv=class e{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(t){let n=J(this.path_,t);return new e(this.syncTree_,n)}node(){return Nv(this.syncTree_,this.path_)}},Xv=function(e){return e||={},e.timestamp=e.timestamp||new Date().getTime(),e},Zv=function(e,t,n){if(!e||typeof e!=`object`)return e;if(B(`.sv`in e,`Unexpected leaf node or priority contents`),typeof e[`.sv`]==`string`)return Qv(e[`.sv`],t,n);if(typeof e[`.sv`]==`object`)return $v(e[`.sv`],t);B(!1,`Unexpected server value: `+JSON.stringify(e,null,2))},Qv=function(e,t,n){switch(e){case`timestamp`:return n.timestamp;default:B(!1,`Unexpected server value: `+e)}},$v=function(e,t,n){e.hasOwnProperty(`increment`)||B(!1,`Unexpected server value: `+JSON.stringify(e,null,2));let r=e.increment;typeof r!=`number`&&B(!1,`Unexpected increment value: `+r);let i=t.node();if(B(i!=null,`Expected ChildrenNode.EMPTY_NODE for nulls`),!i.isLeafNode())return r;let a=i.getValue();return typeof a==`number`?a+r:r},ey=function(e,t,n,r){return ny(t,new Yv(n,e),r)},ty=function(e,t,n){return ny(e,new Jv(t),n)};function ny(e,t,n){let r=Zv(e.getPriority().val(),t.getImmediateChild(`.priority`),n),i;if(e.isLeafNode()){let i=e,a=Zv(i.getValue(),t,n);return a!==i.getValue()||r!==i.getPriority().val()?new Wh(a,$(r)):e}{let a=e;return i=a,r!==a.getPriority().val()&&(i=i.updatePriority(new Wh(r))),a.forEachChild(Z,(e,r)=>{let a=ny(r,t.getImmediateChild(e),n);a!==r&&(i=i.updateImmediateChild(e,a))}),i}}var ry=class{constructor(e=``,t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}};function iy(e,t){let n=t instanceof W?t:new W(t),r=e,i=K(n);for(;i!==null;){let e=Ic(r.node.children,i)||{children:{},childCount:0};r=new ry(i,r,e),n=q(n),i=K(n)}return r}function ay(e){return e.node.value}function oy(e,t){e.node.value=t,py(e)}function sy(e){return e.node.childCount>0}function cy(e){return ay(e)===void 0&&!sy(e)}function ly(e,t){Rp(e.node.children,(n,r)=>{t(new ry(n,e,r))})}function uy(e,t,n,r){n&&t(e),ly(e,e=>{uy(e,t,!0)})}function dy(e,t,n){let r=e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function fy(e){return new W(e.parent===null?e.name:fy(e.parent)+`/`+e.name)}function py(e){e.parent!==null&&my(e.parent,e.name,e)}function my(e,t,n){let r=cy(n),i=Fc(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,py(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,py(e))}var hy=/[\[\].#$\/\u0000-\u001F\u007F]/,gy=/[\[\].#$\u0000-\u001F\u007F]/,_y=10485760,vy=function(e){return typeof e==`string`&&e.length!==0&&!hy.test(e)},yy=function(e){return typeof e==`string`&&e.length!==0&&!gy.test(e)},by=function(e){return e&&=e.replace(/^\/*\.info(\/|$)/,`/`),yy(e)},xy=function(e){return e===null||typeof e==`string`||typeof e==`number`&&!kp(e)||e&&typeof e==`object`&&Fc(e,`.sv`)},Sy=function(e,t,n,r){r&&t===void 0||Cy(Uc(e,`value`),t,n)},Cy=function(e,t,n){let r=n instanceof W?new hh(n,e):n;if(t===void 0)throw Error(e+`contains undefined `+yh(r));if(typeof t==`function`)throw Error(e+`contains a function `+yh(r)+` with contents = `+t.toString());if(kp(t))throw Error(e+`contains `+t.toString()+` `+yh(r));if(typeof t==`string`&&t.length>_y/3&&Gc(t)>_y)throw Error(e+`contains a string greater than 10485760 utf8 bytes `+yh(r)+` ('`+t.substring(0,50)+`...')`);if(t&&typeof t==`object`){let n=!1,i=!1;if(Rp(t,(t,a)=>{if(t===`.value`)n=!0;else if(t!==`.priority`&&t!==`.sv`&&(i=!0,!vy(t)))throw Error(e+` contains an invalid key (`+t+`) `+yh(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gh(r,t),Cy(e,a,r),_h(r)}),n&&i)throw Error(e+` contains ".value" child `+yh(r)+` in addition to actual children.`)}},wy=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];let i=lh(r);for(let t=0;t<i.length;t++)if((i[t]!==`.priority`||t!==i.length-1)&&!vy(i[t]))throw Error(e+`contains an invalid key (`+i[t]+`) in path `+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}t.sort(fh);let i=null;for(n=0;n<t.length;n++){if(r=t[n],i!==null&&mh(i,r))throw Error(e+`contains a path `+i.toString()+` that is ancestor of another path `+r.toString());i=r}},Ty=function(e,t,n,r){let i=Uc(e,`values`);if(!(t&&typeof t==`object`)||Array.isArray(t))throw Error(i+` must be an object containing the children to replace.`);let a=[];Rp(t,(e,t)=>{let r=new W(e);if(Cy(i,t,J(n,r)),sh(r)===`.priority`&&!xy(t))throw Error(i+`contains an invalid value for '`+r.toString()+`', which must be a valid Firebase priority (a string, finite number, server value, or null).`);a.push(r)}),wy(i,a)},Ey=function(e,t,n){if(kp(t))throw Error(Uc(e,`priority`)+`is `+t.toString()+`, but must be a valid Firebase priority (a string, finite number, server value, or null).`);if(!xy(t))throw Error(Uc(e,`priority`)+`must be a valid Firebase priority (a string, finite number, server value, or null).`)},Dy=function(e,t,n,r){if(!(r&&n===void 0)&&!yy(n))throw Error(Uc(e,t)+`was an invalid path = "`+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Oy=function(e,t,n,r){n&&=n.replace(/^\/*\.info(\/|$)/,`/`),Dy(e,t,n,r)},ky=function(e,t){if(K(t)===`.info`)throw Error(e+` failed = Can't modify data under /.info/`)},Ay=function(e,t){let n=t.path.toString();if(typeof t.repoInfo.host!=`string`||t.repoInfo.host.length===0||!vy(t.repoInfo.namespace)&&t.repoInfo.host.split(`:`)[0]!==`localhost`||n.length!==0&&!by(n))throw Error(Uc(e,`url`)+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},jy=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function My(e,t){let n=null;for(let r=0;r<t.length;r++){let i=t[r],a=i.getPath();n!==null&&!ph(a,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function Ny(e,t,n){My(e,n),Fy(e,e=>ph(e,t))}function Py(e,t,n){My(e,n),Fy(e,e=>mh(e,t)||mh(t,e))}function Fy(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){let i=e.eventLists_[r];if(i){let a=i.path;t(a)?(Iy(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Iy(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(n!==null){e.events[t]=null;let r=n.getEventRunner();xp&&U(`event: `+n.toString()),qp(r)}}}var Ly=`repo_interrupt`,Ry=25,zy=class{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bg(),this.transactionQueueTree_=new ry,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host}};function By(e,t,n){if(e.stats_=gm(e.repoInfo_),e.forceRestClient_||Jp())e.server_=new vg(e.repoInfo_,(t,n,r,i)=>{Uy(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Wy(e,!0),0);else{if(n!=null){if(typeof n!=`object`)throw Error(`Only objects are supported for option databaseAuthVariableOverride`);try{V(n)}catch(e){throw Error(`Invalid authOverride provided: `+e)}}e.persistentConnection_=new Oh(e.repoInfo_,t,(t,n,r,i)=>{Uy(e,t,n,r,i)},t=>{Wy(e,t)},t=>{Gy(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=_m(e.repoInfo_,()=>new Og(e.stats_,e.server_)),e.infoData_=new yg,e.infoSyncTree_=new Sv({startListening:(t,n,r,i)=>{let a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=Tv(e.infoSyncTree_,t._path,o),setTimeout(()=>{i(`ok`)},0)),a},stopListening:()=>{}}),Ky(e,`connected`,!1),e.serverSyncTree_=new Sv({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{let a=i(n,r);Py(e.eventQueue_,t._path,a)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Vy(e){let t=e.infoData_.getNode(new W(`.info/serverTimeOffset`)).val()||0;return new Date().getTime()+t}function Hy(e){return Xv({timestamp:Vy(e)})}function Uy(e,t,n,r,i){e.dataUpdateCount++;let a=new W(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i){if(r){let t=Rc(n,e=>$(e));o=jv(e.serverSyncTree_,a,t,i)}else{let t=$(n);o=Av(e.serverSyncTree_,a,t,i)}}else if(r){let t=Rc(n,e=>$(e));o=Ev(e.serverSyncTree_,a,t)}else{let t=$(n);o=Tv(e.serverSyncTree_,a,t)}let s=a;o.length>0&&(s=lb(e,a)),Py(e.eventQueue_,s,o)}function Wy(e,t){Ky(e,`connected`,t),t===!1&&Yy(e)}function Gy(e,t){Rp(t,(t,n)=>{Ky(e,t,n)})}function Ky(e,t,n){let r=new W(`/.info/`+t),i=$(n);e.infoData_.updateSnapshot(r,i);let a=Tv(e.infoSyncTree_,r,i);Py(e.eventQueue_,r,a)}function qy(e){return e.nextWriteId_++}function Jy(e,t,n,r,i){rb(e,`set`,{path:t.toString(),value:n,priority:r});let a=Hy(e),o=$(n,r),s=ty(o,Nv(e.serverSyncTree_,t),a),c=qy(e),l=Cv(e.serverSyncTree_,t,s,c,!0);My(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(n,r)=>{let a=n===`ok`;a||Dp(`set at `+t+` failed: `+n);let o=wv(e.serverSyncTree_,c,!a);Py(e.eventQueue_,t,o),ib(e,i,n,r)});let u=hb(e,t);lb(e,u),Py(e.eventQueue_,u,[])}function Yy(e){rb(e,`onDisconnectEvents`);let t=Hy(e),n=bg();Cg(e.onDisconnect_,G(),(r,i)=>{let a=ey(r,i,e.serverSyncTree_,t);xg(n,r,a)});let r=[];Cg(n,G(),(t,n)=>{r=r.concat(Tv(e.serverSyncTree_,t,n)),lb(e,hb(e,t))}),e.onDisconnect_=bg(),Py(e.eventQueue_,G(),r)}function Xy(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{r===`ok`&&Sg(e.onDisconnect_,t),ib(e,n,r,i)})}function Zy(e,t,n,r){let i=$(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(n,a)=>{n===`ok`&&xg(e.onDisconnect_,t,i),ib(e,r,n,a)})}function Qy(e,t,n,r,i){let a=$(n,r);e.server_.onDisconnectPut(t.toString(),a.val(!0),(n,r)=>{n===`ok`&&xg(e.onDisconnect_,t,a),ib(e,i,n,r)})}function $y(e,t,n,r){if(Lc(n)){U(`onDisconnect().update() called with empty data.  Don't do anything.`),ib(e,r,`ok`,void 0);return}e.server_.onDisconnectMerge(t.toString(),n,(i,a)=>{i===`ok`&&Rp(n,(n,r)=>{let i=$(r);xg(e.onDisconnect_,J(t,n),i)}),ib(e,r,i,a)})}function eb(e,t,n){let r;r=K(t._path)===`.info`?Mv(e.infoSyncTree_,t,n):Mv(e.serverSyncTree_,t,n),Ny(e.eventQueue_,t._path,r)}function tb(e,t,n){let r;r=K(t._path)===`.info`?kv(e.infoSyncTree_,t,n):kv(e.serverSyncTree_,t,n),Ny(e.eventQueue_,t._path,r)}function nb(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ly)}function rb(e,...t){let n=``;e.persistentConnection_&&(n=e.persistentConnection_.id+`:`),U(n,...t)}function ib(e,t,n,r){t&&qp(()=>{if(n===`ok`)t(null);else{let e=(n||`error`).toUpperCase(),i=e;r&&(i+=`: `+r);let a=Error(i);a.code=e,t(a)}})}function ab(e,t,n,r,i,a){rb(e,`transaction on `+t);let o={path:t,update:n,onComplete:r,status:null,order:vp(),applyLocally:a,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},s=ob(e,t,void 0);o.currentInputSnapshot=s;let c=o.update(s.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Cy(`transaction failed: Data returned `,c,o.path),o.status=0;let n=iy(e.transactionQueueTree_,t),r=ay(n)||[];r.push(o),oy(n,r);let i;typeof c==`object`&&c&&Fc(c,`.priority`)?(i=Ic(c,`.priority`),B(xy(i),`Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.`)):i=(Nv(e.serverSyncTree_,t)||Q.EMPTY_NODE).getPriority().val();let a=Hy(e),l=$(c,i),u=ty(l,s,a);o.currentOutputSnapshotRaw=l,o.currentOutputSnapshotResolved=u,o.currentWriteId=qy(e);let d=Cv(e.serverSyncTree_,t,u,o.currentWriteId,o.applyLocally);Py(e.eventQueue_,t,d),sb(e,e.transactionQueueTree_)}}function ob(e,t,n){return Nv(e.serverSyncTree_,t,n)||Q.EMPTY_NODE}function sb(e,t=e.transactionQueueTree_){if(t||mb(e,t),ay(t)){let n=fb(e,t);B(n.length>0,`Sending zero length transaction queue`),n.every(e=>e.status===0)&&cb(e,fy(t),n)}else sy(t)&&ly(t,t=>{sb(e,t)})}function cb(e,t,n){let r=ob(e,t,n.map(e=>e.currentWriteId)),i=r,a=r.hash();for(let e=0;e<n.length;e++){let r=n[e];B(r.status===0,`tryToSendTransactionQueue_: items in queue should all be run.`),r.status=1,r.retryCount++;let a=dh(t,r.path);i=i.updateChild(a,r.currentOutputSnapshotRaw)}let o=i.val(!0),s=t;e.server_.put(s.toString(),o,r=>{rb(e,`transaction put response`,{path:s.toString(),status:r});let i=[];if(r===`ok`){let r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(wv(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();mb(e,iy(e.transactionQueueTree_,t)),sb(e,e.transactionQueueTree_),Py(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)qp(r[e])}else{if(r===`datastale`)for(let e=0;e<n.length;e++)n[e].status===3?n[e].status=4:n[e].status=0;else{Dp(`transaction at `+s.toString()+` failed: `+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}lb(e,t)}},a)}function lb(e,t){let n=db(e,t),r=fy(n);return ub(e,fb(e,n),r),r}function ub(e,t,n){if(t.length===0)return;let r=[],i=[],a=t.filter(e=>e.status===0).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let s=t[o],c=dh(n,s.path),l=!1,u;if(B(c!==null,`rerunTransactionsUnderNode_: relativePath should not be null.`),s.status===4)l=!0,u=s.abortReason,i=i.concat(wv(e.serverSyncTree_,s.currentWriteId,!0));else if(s.status===0){if(s.retryCount>=Ry)l=!0,u=`maxretry`,i=i.concat(wv(e.serverSyncTree_,s.currentWriteId,!0));else{let n=ob(e,s.path,a);s.currentInputSnapshot=n;let r=t[o].update(n.val());if(r!==void 0){Cy(`transaction failed: Data returned `,r,s.path);let t=$(r);typeof r==`object`&&r&&Fc(r,`.priority`)||(t=t.updatePriority(n.getPriority()));let o=s.currentWriteId,c=Hy(e),l=ty(t,n,c);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=l,s.currentWriteId=qy(e),a.splice(a.indexOf(o),1),i=i.concat(Cv(e.serverSyncTree_,s.path,l,s.currentWriteId,s.applyLocally)),i=i.concat(wv(e.serverSyncTree_,o,!0))}else l=!0,u=`nodata`,i=i.concat(wv(e.serverSyncTree_,s.currentWriteId,!0))}}Py(e.eventQueue_,n,i),i=[],l&&(t[o].status=2,(function(e){setTimeout(e,0)})(t[o].unwatcher),t[o].onComplete&&(u===`nodata`?r.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):r.push(()=>t[o].onComplete(Error(u),!1,null))))}mb(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)qp(r[e]);sb(e,e.transactionQueueTree_)}function db(e,t){let n,r=e.transactionQueueTree_;for(n=K(t);n!==null&&ay(r)===void 0;)r=iy(r,n),t=q(t),n=K(t);return r}function fb(e,t){let n=[];return pb(e,t,n),n.sort((e,t)=>e.order-t.order),n}function pb(e,t,n){let r=ay(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);ly(t,t=>{pb(e,t,n)})}function mb(e,t){let n=ay(t);if(n){let e=0;for(let t=0;t<n.length;t++)n[t].status!==2&&(n[e]=n[t],e++);n.length=e,oy(t,n.length>0?n:void 0)}ly(t,t=>{mb(e,t)})}function hb(e,t){let n=fy(db(e,t)),r=iy(e.transactionQueueTree_,t);return dy(r,t=>{gb(e,t)}),gb(e,r),uy(r,t=>{gb(e,t)}),n}function gb(e,t){let n=ay(t);if(n){let r=[],i=[],a=-1;for(let t=0;t<n.length;t++)n[t].status===3||(n[t].status===1?(B(a===t-1,`All SENT items should be at beginning of queue.`),a=t,n[t].status=3,n[t].abortReason=`set`):(B(n[t].status===0,`Unexpected transaction status in abort`),n[t].unwatcher(),i=i.concat(wv(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,Error(`set`),!1,null))));a===-1?oy(t,void 0):n.length=a+1,Py(e.eventQueue_,fy(t),i);for(let e=0;e<r.length;e++)qp(r[e])}}function _b(e){let t=``,n=e.split(`/`);for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g,` `))}catch{}t+=`/`+r}return t}function vb(e){let t={};e.charAt(0)===`?`&&(e=e.substring(1));for(let n of e.split(`&`)){if(n.length===0)continue;let r=n.split(`=`);r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dp(`Invalid query segment '${n}' in query '${e}'`)}return t}var yb=function(e,t){let n=bb(e),r=n.namespace;n.domain===`firebase.com`&&Ep(n.host+` is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead`),(!r||r===`undefined`)&&n.domain!==`localhost`&&Ep(`Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com`),n.secure||Op();let i=n.scheme===`ws`||n.scheme===`wss`;return{repoInfo:new um(n.host,n.secure,r,i,t,``,r!==n.subdomain),path:new W(n.pathString)}},bb=function(e){let t=``,n=``,r=``,i=``,a=``,o=!0,s=`https`,c=443;if(typeof e==`string`){let l=e.indexOf(`//`);l>=0&&(s=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf(`/`);u===-1&&(u=e.length);let d=e.indexOf(`?`);d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=_b(e.substring(u,d)));let f=vb(e.substring(Math.min(e.length,d)));l=t.indexOf(`:`),l>=0?(o=s===`https`||s===`wss`,c=parseInt(t.substring(l+1),10)):l=t.length;let p=t.slice(0,l);if(p.toLowerCase()===`localhost`)n=`localhost`;else if(p.split(`.`).length<=2)n=p;else{let e=t.indexOf(`.`);r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),a=r}`ns`in f&&(a=f.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},xb=`-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz`,Sb=(function(){let e=0,t=[];return function(n){let r=n===e;e=n;let i,a=Array(8);for(i=7;i>=0;i--)a[i]=xb.charAt(n%64),n=Math.floor(n/64);B(n===0,`Cannot push at time == 0`);let o=a.join(``);if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=xb.charAt(t[i]);return B(o.length===20,`nextPushId: Length should be 20.`),o}})(),Cb=class{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){let e=this.snapshot.ref;return this.eventType===`value`?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+`:`+this.eventType+`:`+V(this.snapshot.exportVal())}},wb=class{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return`cancel`}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+`:cancel`}},Tb=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return B(this.hasCancelCallback,`Raising a cancel event on a listener with no cancel callback`),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}},Eb=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new _c;return Xy(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ky(`OnDisconnect.remove`,this._path);let e=new _c;return Zy(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ky(`OnDisconnect.set`,this._path),Sy(`OnDisconnect.set`,e,this._path,!1);let t=new _c;return Zy(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){ky(`OnDisconnect.setWithPriority`,this._path),Sy(`OnDisconnect.setWithPriority`,e,this._path,!1),Ey(`OnDisconnect.setWithPriority`,t);let n=new _c;return Qy(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){ky(`OnDisconnect.update`,this._path),Ty(`OnDisconnect.update`,e,this._path);let t=new _c;return $y(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}},Db=class e{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Y(this._path)?null:sh(this._path)}get ref(){return new Ob(this._repo,this._path)}get _queryIdentifier(){let e=Ip(_g(this._queryParams));return e===`{}`?`default`:e}get _queryObject(){return _g(this._queryParams)}isEqual(t){if(t=Zc(t),!(t instanceof e))return!1;let n=this._repo===t._repo,r=ph(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ch(this._path)}},Ob=class e extends Db{constructor(e,t){super(e,t,new mg,!1)}get parent(){let t=uh(this._path);return t===null?null:new e(this._repo,t)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},kb=class e{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){let n=new W(t),r=jb(this.ref,t);return new e(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(n,r)=>t(new e(r,jb(this.ref,n),Z)))}hasChild(e){let t=new W(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Ab(e,t){return e=Zc(e),e._checkNotDeleted(`ref`),t===void 0?e._root:jb(e._root,t)}function jb(e,t){return e=Zc(e),K(e._path)===null?Oy(`child`,`path`,t,!1):Dy(`child`,`path`,t,!1),new Ob(e._repo,J(e._path,t))}function Mb(e){return e=Zc(e),new Eb(e._repo,e._path)}function Nb(e,t){e=Zc(e),ky(`push`,e._path),Sy(`push`,t,e._path,!0);let n=Sb(Vy(e._repo)),r=jb(e,n),i=jb(e,n),a;return a=t==null?Promise.resolve(i):Pb(i,t).then(()=>i),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function Pb(e,t){e=Zc(e),ky(`set`,e._path),Sy(`set`,t,e._path,!1);let n=new _c;return Jy(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}var Fb=class e{constructor(e){this.callbackContext=e}respondsTo(e){return e===`value`}createEvent(e,t){let n=t._queryParams.getIndex();return new Cb(`value`,this,new kb(e.snapshotNode,new Ob(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()===`cancel`?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wb(this,e,t):null}matches(t){return t instanceof e?!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},Ib=class e{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e===`children_added`?`child_added`:e;return t=t===`children_removed`?`child_removed`:t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wb(this,e,t):null}createEvent(e,t){B(e.childName!=null,`Child events should have a childName.`);let n=jb(new Ob(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Cb(e.type,this,new kb(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return e.getEventType()===`cancel`?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(t){return t instanceof e&&this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext))}hasAnyCallback(){return!!this.callbackContext}};function Lb(e,t,n,r,i){let a;if(typeof r==`object`&&(a=void 0,i=r),typeof r==`function`&&(a=r),i&&i.onlyOnce){let t=n,r=(n,r)=>{tb(e._repo,e,s),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}let o=new Tb(n,a||void 0),s=t===`value`?new Fb(o):new Ib(t,o);return eb(e._repo,e,s),()=>tb(e._repo,e,s)}function Rb(e,t,n,r){return Lb(e,`value`,t,n,r)}av(Ob),yv(Ob);var zb=`FIREBASE_DATABASE_EMULATOR_HOST`,Bb={},Vb=!1;function Hb(e,t,n,r){let i=t.lastIndexOf(`:`);e.repoInfo_=new um(t,Qc(t.substring(0,i)),e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(e.authTokenProvider_=r)}function Ub(e,t,n,r,i){let a=r||e.options.databaseURL;a===void 0&&(e.options.projectId||Ep(`Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().`),U(`Using default host for project `,e.options.projectId),a=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=yb(a,i),s=o.repoInfo,c,l;typeof process<`u`&&(l={}[zb]),l?(c=!0,a=`http://${l}?ns=${s.namespace}`,o=yb(a,i),s=o.repoInfo):c=!o.repoInfo.secure;let u=i&&c?new Qp(Qp.OWNER):new Zp(e.name,e.options,t);return Ay(`Invalid Firebase Database URL`,o),Y(o.path)||Ep(`Database URL must point to the root of a Firebase Database (not including a child path).`),new Kb(Gb(s,e,u,new Xp(e,n)),e)}function Wb(e,t){let n=Bb[t];(!n||n[e.key]!==e)&&Ep(`Database ${t}(${e.repoInfo_}) has already been deleted.`),nb(e),delete n[e.key]}function Gb(e,t,n,r){let i=Bb[t.name];i||(i={},Bb[t.name]=i);let a=i[e.toURLString()];return a&&Ep(`Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.`),a=new zy(e,Vb,n,r),i[e.toURLString()]=a,a}var Kb=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type=`database`,this._instanceStarted=!1}get _repo(){return this._instanceStarted||=(By(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),!0),this._repoInternal}get _root(){return this._rootInternal||=new Ob(this._repo,G()),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ep(`Cannot call `+e+` on a deleted database.`)}};function qb(e=Eu(),t){let n=bu(e,`database`).getImmediate({identifier:t});if(!n._instanceStarted){let e=hc(`database`);e&&Jb(n,...e)}return n}function Jb(e,t,n,r={}){e=Zc(e),e._checkNotDeleted(`useEmulator`);let i=`${t}:${n}`,a=e._repoInternal;if(e._instanceStarted){if(i===e._repoInternal.repoInfo_.host&&zc(r,a.repoInfo_.emulatorOptions))return;Ep(`connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.`)}let o;a.repoInfo_.nodeAdmin?(r.mockUserToken&&Ep(`mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".`),o=new Qp(Qp.OWNER)):r.mockUserToken&&(o=new Qp(typeof r.mockUserToken==`string`?r.mockUserToken:vc(r.mockUserToken,e.app.options.projectId))),Qc(t)&&$c(t),Hb(a,i,r,o)}function Yb(e){dp(wu),yu(new el(`database`,(e,{instanceIdentifier:t})=>Ub(e.getProvider(`app`).getImmediate(),e.getProvider(`auth-internal`),e.getProvider(`app-check-internal`),t),`PUBLIC`).setMultipleInstances(!0)),Du(cp,lp,e),Du(cp,lp,`esm2020`)}var Xb={".sv":`timestamp`};function Zb(){return Xb}var Qb=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function $b(e,t,n){if(e=Zc(e),ky(`Reference.transaction`,e._path),e.key===`.length`||e.key===`.keys`)throw`Reference.transaction failed: `+e.key+` is a read-only object.`;let r=n?.applyLocally??!0,i=new _c,a=(t,n,r)=>{let a=null;t?i.reject(t):(a=new kb(r,new Ob(e._repo,e._path),Z),i.resolve(new Qb(n,a)))},o=Rb(e,()=>{});return ab(e._repo,e._path,t,a,o,r),i.promise}Oh.prototype.simpleListen=function(e,t){this.sendRequest(`q`,{p:e},t)},Oh.prototype.echo=function(e,t){this.sendRequest(`echo`,{d:e},t)},Yb();var ex=Tu({apiKey:`AIzaSyB5rblhcYItrHeQ-mHCTiI0SBi8P81tbcY`,authDomain:`dev-studying.firebaseapp.com`,databaseURL:`https://dev-studying-default-rtdb.firebaseio.com`,projectId:`dev-studying`,storageBucket:`dev-studying.firebasestorage.app`,messagingSenderId:`491737280290`,appId:`1:491737280290:web:8b584928464dc616273f7b`,measurementId:`G-FEF2HXNTM8`});typeof window<`u`&&np().then(e=>{if(e)try{ep(ex)}catch(e){console.warn(`Firebase Analytics 初始化略過:`,e)}});var tx=qb(ex),nx=(()=>{if(typeof window>`u`)return 128;let e=Number(localStorage.getItem(`program_studying_views`)||`135`)+1;return localStorage.setItem(`program_studying_views`,String(e)),e})(),rx=j(1),ix=j(nx),ax=j(!1),ox=!1;function sx(){if(!(typeof window>`u`||ox)){ox=!0;try{$b(Ab(tx,`stats/page_views`),e=>(typeof e==`number`&&e>0?e:nx)+1).then(e=>{e.committed&&typeof e.snapshot.val()==`number`&&(ix.value=e.snapshot.val(),localStorage.setItem(`program_studying_views`,String(ix.value)))}).catch(e=>{console.warn(`累計瀏覽量更新受限 (使用本地安全計數):`,e.message)}),Rb(Ab(tx,`stats`),e=>{let t=e.val();t&&typeof t.page_views==`number`&&t.page_views>0&&(ix.value=Math.max(t.page_views,ix.value),localStorage.setItem(`program_studying_views`,String(ix.value)))},e=>{console.warn(`監聽 stats 數據失敗 (使用本地安全計數):`,e.message)});let e=Ab(tx,`.info/connected`),t=Ab(tx,`presence`);Rb(e,e=>{if(e.val()===!0){ax.value=!0;let e=Nb(t);Mb(e).remove().catch(()=>{}),Pb(e,{joinedAt:Zb(),userAgent:navigator.userAgent.slice(0,100)}).catch(e=>{console.warn(`寫入在線狀態受限 (請確認 Firebase RTDB 權限):`,e.message)}),window.addEventListener(`beforeunload`,()=>{Pb(e,null)})}else ax.value=!1}),Rb(t,e=>{if(e.exists()){let t=e.val(),n=Object.keys(t).length;rx.value=Math.max(1,n)}else rx.value=1},e=>{console.warn(`監聽 presence 清單失敗:`,e.message)})}catch(e){console.error(`Firebase 即時統計服務啟動異常:`,e)}}}var cx=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},lx={class:`header-nav`},ux={class:`header-top-row`},dx={class:`header-left`},fx={class:`header-right`},px=[`title`],mx={class:`stat-item online-stat`},hx={class:`stat-val`},gx={class:`stat-item views-stat`,title:`全站累計瀏覽人次`},_x={class:`stat-val`},vx={class:`nav-toggle-text`},yx={class:`nav-toggle-text`},bx={href:`https://vuejs.org/guide/introduction.html`,target:`_blank`,rel:`noopener noreferrer`,class:`nav-link`,title:`前往 Vue 官方文檔`},xx=[`title`],Sx={class:`header-tags-row`},Cx={class:`track-tags-container`},wx=[`onClick`,`title`],Tx={class:`track-tag-name`},Ex={class:`track-tag-count`},Dx={key:0,class:`track-progress-wrapper`},Ox={class:`progress-details`},kx={class:`progress-track-name`},Ax={class:`progress-num`},jx={class:`progress-track-bg`},Mx=cx({__name:`HeaderNav`,props:{isDark:Boolean,sidebarOpen:Boolean,currentView:{type:String,default:`lessons`},currentTrack:{type:String,default:`vue`},tracks:{type:Array,default:()=>[]},trackCompletedCount:{type:Number,default:0},trackTotalLessons:{type:Number,default:0}},emits:[`toggle-theme`,`toggle-sidebar`,`toggle-view`,`select-track`],setup(e,{emit:t}){let n=e,r=t,i=R(()=>n.tracks.find(e=>e.id===n.currentTrack)||n.tracks[0]),a=R(()=>i.value?i.value.label:`Vue`),o=R(()=>n.trackTotalLessons?Math.round(n.trackCompletedCount/n.trackTotalLessons*100):0),s=e=>{switch(e){case`css`:return Ms;case`html`:return ws;case`javascript`:return cs;case`vue`:return Ds;default:return Ds}};return(t,n)=>(P(),F(`header`,lx,[I(`div`,ux,[I(`div`,dx,[I(`button`,{class:`icon-btn mobile-menu-btn`,onClick:n[0]||=e=>r(`toggle-sidebar`),"aria-label":`選單開關`},[L(M(ks),{size:20})]),I(`div`,{class:`brand`,onClick:n[1]||=e=>r(`select-track`,`vue`),title:`Program Studying - 前端全方位實戰指南`},[...n[5]||=[pa(`<div class="brand-logo" data-v-c48371c2><svg viewBox="0 0 261.76 226.69" width="24" height="24" data-v-c48371c2><path d="M161.096.001l-30.225 52.35L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" data-v-c48371c2></path><path d="M161.096.001l-30.225 52.35L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e" data-v-c48371c2></path></svg></div><div class="brand-text" data-v-c48371c2><span class="brand-title" data-v-c48371c2>Program Studying</span><span class="brand-badge" data-v-c48371c2>全方位實戰</span></div>`,2)]])]),I(`div`,fx,[I(`div`,{class:`visitor-stats-badge`,title:M(ax)?`已連線 Firebase 即時統計`:`Firebase 連線中...`},[I(`div`,mx,[I(`span`,{class:E([`pulse-dot`,{"is-active":M(ax)}])},null,2),L(M(Hs),{size:13,class:`stat-icon`}),I(`span`,hx,D(M(rx)),1),n[6]||=I(`span`,{class:`stat-unit`},`在線`,-1)]),n[8]||=I(`div`,{class:`stat-divider`},null,-1),I(`div`,gx,[L(M(Cs),{size:13,class:`stat-icon`}),I(`span`,_x,D(M(ix)>0?M(ix).toLocaleString():`...`),1),n[7]||=I(`span`,{class:`stat-unit`},`次瀏覽`,-1)])],8,px),I(`button`,{class:E([`nav-toggle-btn welcome-nav-btn`,{"is-active":e.currentView===`welcome`}]),onClick:n[2]||=t=>r(`toggle-view`,e.currentView===`welcome`?`lessons`:`welcome`),title:`新手導引：如何寫網站與前端全貌`},[L(M(Rs),{size:15}),I(`span`,vx,D(e.currentView===`welcome`?`返回課程`:`如何寫網站`),1)],2),I(`button`,{class:E([`nav-toggle-btn`,{"is-active":e.currentView===`glossary`}]),onClick:n[3]||=t=>r(`toggle-view`,e.currentView===`glossary`?`lessons`:`glossary`),title:`切換至技術名詞字典（附發音與比喻）`},[L(M(os),{size:15}),I(`span`,yx,D(e.currentView===`glossary`?`返回課程`:`名詞字典`),1)],2),I(`a`,bx,[n[9]||=I(`span`,{class:`nav-link-text`},`Vue 官網`,-1),L(M(Ss),{size:13,class:`external-icon`})]),I(`button`,{class:`icon-btn theme-toggle-btn`,onClick:n[4]||=e=>r(`toggle-theme`),title:e.isDark?`切換淺色模式`:`切換深色模式`},[e.isDark?(P(),ia(M(zs),{key:0,size:18,class:`theme-icon sun`})):(P(),ia(M(js),{key:1,size:18,class:`theme-icon moon`}))],8,xx)])]),I(`div`,Sx,[I(`div`,Cx,[(P(!0),F(N,null,Fr(e.tracks,t=>(P(),F(`button`,{key:t.id,class:E([`track-tag-item`,{"is-active":e.currentTrack===t.id,[`tag-${t.id}`]:!0}]),onClick:e=>r(`select-track`,t.id),title:t.title+`：`+(t.description||``)},[(P(),ia(Mr(s(t.id)),{size:14,class:`track-tag-icon`})),I(`span`,Tx,D(t.label),1),I(`span`,Ex,D(t.count)+` 課`,1)],10,wx))),128))]),e.currentView===`lessons`?(P(),F(`div`,Dx,[I(`div`,Ox,[I(`span`,kx,[L(M(ms),{size:13,class:`progress-check-icon`}),fa(` `+D(a.value)+` 進度 `,1)]),I(`span`,Ax,D(e.trackCompletedCount)+` / `+D(e.trackTotalLessons)+` 單元 (`+D(o.value)+`%)`,1)]),I(`div`,jx,[I(`div`,{class:`progress-track-fill`,style:pe({width:o.value+`%`})},null,4)])])):ma(``,!0)])]))}},[[`__scopeId`,`data-v-c48371c2`]]),Nx={class:`sidebar-header`},Px={class:`sidebar-title`},Fx={class:`sidebar-track-info`},Ix={class:`track-title-text`},Lx={class:`track-total-badge`},Rx={class:`sidebar-content`},zx={class:`category-header`},Bx={class:`category-title`},Vx={class:`category-count`},Hx={class:`lesson-list`},Ux=[`onClick`],Wx=[`onClick`,`title`],Gx={class:`lesson-info`},Kx={class:`lesson-title`},qx={class:`lesson-time`},Jx=cx({__name:`Sidebar`,props:{curriculum:{type:Array,required:!0},currentLessonId:{type:String,required:!0},completedIds:{type:Array,default:()=>[]},isOpen:{type:Boolean,default:!0},currentTrack:{type:String,default:`vue`},tracks:{type:Array,default:()=>[]}},emits:[`select-lesson`,`toggle-complete`,`close-sidebar`],setup(e,{emit:t}){let n=e,r=R(()=>n.tracks.find(e=>e.id===n.currentTrack)||{label:`課程`,count:n.curriculum.length}),i=t,a=R(()=>{let e={};return n.curriculum.forEach(t=>{e[t.category]||(e[t.category]=[]),e[t.category].push(t)}),e}),o=e=>{switch(e){case`專案導讀與概念篇`:return Ps;case`HTML 核心專題篇`:return ws;case`CSS 樣式專題篇`:return Ms;case`JavaScript 邏輯專題篇`:return cs;case`生態工具庫篇`:return Gs;case`基礎入門篇`:return ys;case`條件與列表篇`:return Ds;case`核心響應式篇`:return _s;case`進階組件篇`:case`進階與組件篇`:return ss;case`系統現代化篇`:return xs;case`架構實戰篇`:return Ls;case`決策與匯報篇`:return Ts;default:return ys}};return(t,n)=>(P(),F(N,null,[e.isOpen?(P(),F(`div`,{key:0,class:`sidebar-backdrop`,onClick:n[0]||=e=>i(`close-sidebar`)})):ma(``,!0),I(`aside`,{class:E([`sidebar`,{"is-open":e.isOpen}])},[I(`div`,Nx,[I(`div`,Px,[L(M(ys),{size:18,class:`title-icon`}),I(`div`,Fx,[I(`span`,Ix,D(r.value.label)+` 單元列表`,1),I(`span`,Lx,D(e.curriculum.length)+` 篇`,1)])]),I(`button`,{class:`close-btn`,onClick:n[1]||=e=>i(`close-sidebar`),"aria-label":`關閉選單`},[L(M(Ks),{size:18})])]),I(`div`,Rx,[(P(!0),F(N,null,Fr(a.value,(t,n)=>(P(),F(`div`,{key:n,class:`category-group`},[I(`div`,zx,[(P(),ia(Mr(o(n)),{size:16,class:`cat-icon`})),I(`span`,Bx,D(n),1),I(`span`,Vx,`(`+D(t.length)+`)`,1)]),I(`ul`,Hx,[(P(!0),F(N,null,Fr(t,t=>(P(),F(`li`,{key:t.id,class:E([`lesson-item`,{active:t.id===e.currentLessonId,completed:e.completedIds.includes(t.id)}]),onClick:e=>i(`select-lesson`,t.id)},[I(`button`,{class:E([`complete-checkbox`,{"is-checked":e.completedIds.includes(t.id)}]),onClick:Uo(e=>i(`toggle-complete`,t.id),[`stop`]),title:e.completedIds.includes(t.id)?`標記為未完成`:`標記為已完成`},[e.completedIds.includes(t.id)?(P(),ia(M(ls),{key:0,size:13,class:`check-mark`})):ma(``,!0)],10,Wx),I(`div`,Gx,[I(`span`,Kx,D(t.title),1),I(`span`,qx,D(t.readTime),1)]),L(M(ds),{size:14,class:`arrow-icon`})],10,Ux))),128))])]))),128))])],2)],64))}},[[`__scopeId`,`data-v-adddb431`]]),Yx={class:`lesson-article`},Xx={class:`lesson-meta-bar`},Zx={class:`category-pill`},Qx={class:`read-time-pill`},$x={class:`lesson-main-title`},eS={class:`summary-box`},tS={class:`summary-text`},nS={class:`lesson-body`},rS=[`innerHTML`],iS={class:`task-card`},aS={class:`task-header`},oS={class:`task-title-wrap`},sS=[`innerHTML`],cS={key:0,class:`hints-box`},lS={class:`hints-toggle-left`},uS={key:0,class:`hints-list`},dS={class:`lesson-footer`},fS=[`disabled`],pS=[`disabled`],mS=cx({__name:`LessonContent`,props:{lesson:{type:Object,required:!0},isCompleted:{type:Boolean,default:!1},hasPrev:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1}},emits:[`prev-lesson`,`next-lesson`,`toggle-complete`,`jump-track`],setup(e,{emit:t}){let n=e,r=t,i=j(!1),a=e=>{let t=e.target.closest(`[data-jump-track]`);if(t){let e=t.getAttribute(`data-jump-track`),n=t.getAttribute(`data-jump-lesson`);r(`jump-track`,{track:e,lessonId:n})}},o=e=>{if(!e)return``;let t=e.trim();return t=t.replace(/```([a-z]*)\n([\s\S]*?)```/g,(e,t,n)=>`<div class="code-block-wrapper"><pre class="code-block"><code>${n.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).trim()}</code></pre></div>`),t=t.replace(/`([^`]+)`/g,(e,t)=>`<code class="inline-code">${t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}</code>`),t=t.replace(/^#### (.*$)/gim,`<h4 class="doc-h4">$1</h4>`),t=t.replace(/^### (.*$)/gim,`<h3 class="doc-h3">$1</h3>`),t=t.replace(/^## (.*$)/gim,`<h2 class="doc-h2">$1</h2>`),t=t.replace(/^> (.*$)/gim,`<div class="doc-callout">$1</div>`),t=t.replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,`<a href="$2" target="_blank" rel="noopener noreferrer" class="doc-link">$1</a>`),t=t.replace(/(^|[\s：:、，(（])(https?:\/\/[^\s<"'\)\]]+)/g,(e,t,n)=>`${t}<a href="${n}" target="_blank" rel="noopener noreferrer" class="doc-link">${n}</a>`),t=t.replace(/^---+$/gim,`<hr class="doc-divider">`),t=t.replace(/^\s*[-*] (.*$)/gim,`<li class="doc-li">$1</li>`),t=t.replace(/((?:<li class="doc-li">[\s\S]*?<\/li>\s*)+)/g,`<ul class="doc-ul">$1</ul>`),t=t.replace(/\n\n+/g,`</p><p class="doc-p">`),t=`<p class="doc-p">${t}</p>`,t=t.replace(/<p class="doc-p"><\/p>/g,``),t=t.replace(/<p class="doc-p">(<div[\s\S]*?<\/div>)<\/p>/g,`$1`),t=t.replace(/<p class="doc-p">(<h[234][\s\S]*?<\/h[234]>)<\/p>/g,`$1`),t=t.replace(/<p class="doc-p">(<ul[\s\S]*?<\/ul>)<\/p>/g,`$1`),t=t.replace(/<p class="doc-p">(<hr[\s\S]*?>)<\/p>/g,`$1`),t},s=R(()=>o(n.lesson.concept)),c=R(()=>o(n.lesson.task));return(t,n)=>(P(),F(`article`,Yx,[I(`div`,Xx,[I(`span`,Zx,D(e.lesson.category),1),I(`span`,Qx,[L(M(gs),{size:13}),fa(` `+D(e.lesson.readTime),1)])]),I(`h1`,$x,D(e.lesson.title),1),I(`div`,eS,[L(M(Os),{size:20,class:`summary-icon`}),I(`p`,tS,D(e.lesson.summary),1)]),I(`section`,nS,[I(`div`,{class:`markdown-body`,innerHTML:s.value,onClick:a},null,8,rS)]),I(`section`,iS,[I(`div`,aS,[I(`div`,oS,[L(M(Bs),{size:20,class:`task-icon`}),n[4]||=I(`h2`,{class:`task-title`},`實作挑戰任務`,-1)]),n[5]||=I(`span`,{class:`task-badge`},`動手練習`,-1)]),I(`div`,{class:`task-content markdown-body`,innerHTML:c.value},null,8,sS),e.lesson.hints&&e.lesson.hints.length?(P(),F(`div`,cS,[I(`button`,{class:`hints-toggle`,onClick:n[0]||=e=>i.value=!i.value},[I(`div`,lS,[L(M(hs),{size:16,class:`hint-icon`}),I(`span`,null,`卡關了嗎？點我查看小提示 (`+D(e.lesson.hints.length)+`)`,1)]),i.value?(P(),ia(M(fs),{key:0,size:16})):(P(),ia(M(us),{key:1,size:16}))]),i.value?(P(),F(`ul`,uS,[(P(!0),F(N,null,Fr(e.lesson.hints,(e,t)=>(P(),F(`li`,{key:t,class:`hint-item`},D(e),1))),128))])):ma(``,!0)])):ma(``,!0)]),I(`footer`,dS,[I(`button`,{class:`nav-btn prev-btn`,disabled:!e.hasPrev,onClick:n[1]||=e=>r(`prev-lesson`)},[L(M(is),{size:16}),n[6]||=I(`span`,null,`上一課`,-1)],8,fS),I(`button`,{class:E([`complete-btn`,{"is-completed":e.isCompleted}]),onClick:n[2]||=t=>r(`toggle-complete`,e.lesson.id)},[L(M(ms),{size:17}),I(`span`,null,D(e.isCompleted?`已完成本單元`:`標記本單元為已完成`),1)],2),I(`button`,{class:`nav-btn next-btn`,disabled:!e.hasNext,onClick:n[3]||=e=>r(`next-lesson`)},[n[7]||=I(`span`,null,`下一課`,-1),L(M(as),{size:16})],8,pS)])]))}},[[`__scopeId`,`data-v-e49d62cc`]]),hS={class:`playground-mode-bar`},gS={class:`mode-switcher-pills`},_S={class:`mode-bar-tools`},vS={class:`font-size-text`},yS={class:`output-container`},bS={class:`panel-header output-header`},xS={class:`header-actions`},SS={key:0,class:`error-banner`},CS={class:`err-text`},wS={class:`iframe-wrapper`},TS={key:1,class:`console-drawer`},ES={class:`console-title`},DS={key:0,class:`console-body`},OS={class:`editor-container`},kS={class:`panel-header editor-header`},AS={class:`editor-tools`},jS={class:`auto-run-label`,title:`輸入時自動即時重新整理輸出`},MS=[`title`],NS={class:`mobile-symbol-bar`},PS={class:`symbol-scroll-track`},FS=[`onMousedown`,`onTouchstart`],IS={class:`editor-gutter`},LS=[`readonly`],RS={class:`mobile-edit-prompt`},zS={key:0,class:`solution-status-bar`},BS={key:0,class:`mobile-fullscreen-editor`},VS={class:`mobile-symbol-bar mobile-fs-symbol-bar`},HS={class:`symbol-scroll-track`},US=[`onMousedown`,`onTouchstart`],WS={class:`editor-gutter`},GS=cx({__name:`CodePlayground`,props:{starterCode:{type:String,required:!0},solutionCode:{type:String,required:!0},lessonId:{type:String,required:!0}},emits:[`solved`],setup(e,{emit:t}){let n=e,r=j(``),i=j(null),a=j(null),o=j(null),s=j([]),c=j(null),l=j(!1),u=j(!1),d=j(!0),f=j(!1),p=j(!1),m=j(!1),h=()=>{p.value=window.innerWidth<=768},g=()=>{m.value=!0,document.body.style.overflow=`hidden`,bn(()=>{let e=o.value;e&&e.focus()})},_=()=>{m.value=!1,document.body.style.overflow=``,o.value&&o.value.blur(),d.value&&w()},v=j(`split`),y=j(13),b=()=>{y.value<18&&(y.value+=1)},x=()=>{y.value>11&&--y.value},S=R(()=>(r.value||``).split(`
`).length),C=[{label:`Tab`,value:`  `},{label:`<`,value:`<`},{label:`>`,value:`>`},{label:`/`,value:`/`},{label:`=`,value:`=`},{label:`""`,value:`""`,offset:1},{label:`''`,value:`''`,offset:1},{label:`{{ }}`,value:`{{  }}`,offset:3},{label:`{}`,value:`{}`,offset:1},{label:`()`,value:`()`,offset:1},{label:`:`,value:`:`},{label:`;`,value:`;`},{label:`@`,value:`@`},{label:`v-`,value:`v-`},{label:`$`,value:`$`},{label:`ref()`,value:`ref('')`,offset:5}],ee=(e,t)=>{t&&t.preventDefault();let n=m.value?o.value:a.value;if(!n)return;let i=n.selectionStart??r.value.length,s=n.selectionEnd??r.value.length,c=r.value;r.value=c.substring(0,i)+e.value+c.substring(s);let l=e.offset?i+e.offset:i+e.value.length;bn(()=>{n.focus(),n.setSelectionRange(l,l),ne()})},w=()=>{if(c.value=null,s.value=[],!i.value)return;let e=`
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Sandbox</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans TC", sans-serif;
      margin: 0;
      padding: 16px;
      color: #1e293b;
      background-color: transparent;
      line-height: 1.5;
    }
    * { box-sizing: border-box; }
    button {
      font-family: inherit;
      padding: 6px 14px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: #1e293b;
      font-weight: 500;
      cursor: pointer;
      margin-right: 6px;
      margin-bottom: 6px;
      transition: all 0.2s ease;
    }
    button:hover:not(:disabled) {
      background: #f1f5f9;
      border-color: #94a3b8;
    }
    input[type="text"] {
      font-family: inherit;
      padding: 7px 12px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      outline: none;
      font-size: 14px;
    }
    input[type="text"]:focus {
      border-color: #42b883;
      box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 10px 0;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background: #f8fafc;
    }
  </style>
  <script>
    window.onerror = function(msg, url, line) {
      window.parent.postMessage({ type: 'SANDBOX_ERROR', message: msg }, '*');
      return false;
    };
    const originalLog = console.log;
    console.log = function(...args) {
      originalLog.apply(console, args);
      const str = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
      window.parent.postMessage({ type: 'SANDBOX_LOG', content: str }, '*');
    };
  <\/script>
</head>
<body>
  ${r.value||``}
</body>
</html>
  `;i.value.srcdoc=e};zn(()=>n.lessonId,e=>{if(!e)return;let t=localStorage.getItem(`vue-study-code-${e}`);t?r.value=t:r.value=n.starterCode,u.value=!1,c.value=null,s.value=[],bn(()=>{w()})},{immediate:!0});let te=null,ne=()=>{localStorage.setItem(`vue-study-code-${n.lessonId}`,r.value),d.value&&(clearTimeout(te),te=setTimeout(()=>{w()},450))},T=e=>{if(e.key===`Tab`){e.preventDefault();let t=e.target,n=t.selectionStart,i=t.selectionEnd;r.value=r.value.substring(0,n)+`  `+r.value.substring(i),setTimeout(()=>{t.selectionStart=t.selectionEnd=n+2,ne()},0)}},re=e=>{e.data&&(e.data.type===`SANDBOX_ERROR`?c.value=e.data.message:e.data.type===`SANDBOX_LOG`&&s.value.push(e.data.content))};xr(()=>{window.addEventListener(`message`,re),h(),window.addEventListener(`resize`,h),w()}),Tr(()=>{window.removeEventListener(`message`,re),window.removeEventListener(`resize`,h),document.body.style.overflow=``});let ie=()=>{r.value=n.starterCode,localStorage.removeItem(`vue-study-code-${n.lessonId}`),u.value=!1,w()},ae=()=>{r.value=n.solutionCode,u.value=!0,w()},oe=async()=>{try{await navigator.clipboard.writeText(r.value),l.value=!0,setTimeout(()=>{l.value=!1},2e3)}catch(e){console.error(`複製失敗`,e)}};return(e,t)=>(P(),F(`div`,{class:E([`interactive-panel`,`view-${v.value}`])},[I(`div`,hS,[I(`div`,gS,[I(`button`,{class:E([`mode-pill-btn`,{"is-active":v.value===`editor`}]),onClick:t[0]||=e=>v.value=`editor`,title:`全螢幕專注編輯代碼`},[L(M(_s),{size:13}),t[9]||=I(`span`,null,`程式碼`,-1)],2),I(`button`,{class:E([`mode-pill-btn`,{"is-active":v.value===`output`}]),onClick:t[1]||=e=>v.value=`output`,title:`全螢幕預覽執行成果`},[L(M(Cs),{size:13}),t[10]||=I(`span`,null,`預覽畫面`,-1)],2),I(`button`,{class:E([`mode-pill-btn desktop-only`,{"is-active":v.value===`split`}]),onClick:t[2]||=e=>v.value=`split`,title:`上下並排對照`},[L(M(vs),{size:13}),t[11]||=I(`span`,null,`並排檢視`,-1)],2)]),I(`div`,_S,[I(`button`,{class:`icon-tool-btn`,onClick:x,title:`縮小代碼字體`},[L(M(Ys),{size:13})]),I(`span`,vS,D(y.value)+`px`,1),I(`button`,{class:`icon-tool-btn`,onClick:b,title:`放大代碼字體`},[L(M(Js),{size:13})])])]),Nn(I(`div`,yS,[I(`div`,bS,[t[13]||=I(`div`,{class:`panel-title-wrap`},[I(`span`,{class:`pulse-dot`}),I(`h3`,{class:`panel-title`},`即時輸出 (Live output)`)],-1),I(`div`,xS,[I(`button`,{class:`run-play-btn`,onClick:w,title:`手動重新執行程式碼`},[L(M(Ns),{size:13,fill:`currentColor`}),t[12]||=I(`span`,null,`執行 (Play)`,-1)])])]),c.value?(P(),F(`div`,SS,[L(M(ps),{size:15,class:`err-icon`}),I(`span`,CS,`執行時錯誤：`+D(c.value),1)])):ma(``,!0),I(`div`,wS,[I(`iframe`,{ref_key:`iframeRef`,ref:i,class:`sandbox-iframe`,sandbox:`allow-scripts`},null,512)]),s.value.length?(P(),F(`div`,TS,[I(`div`,{class:`console-drawer-header`,onClick:t[3]||=e=>f.value=!f.value},[I(`div`,ES,[L(M(Vs),{size:13}),I(`span`,null,`Console 輸出 (`+D(s.value.length)+`)`,1)]),f.value?(P(),ia(M(us),{key:0,size:14})):(P(),ia(M(fs),{key:1,size:14}))]),f.value?(P(),F(`div`,DS,[(P(!0),F(N,null,Fr(s.value,(e,t)=>(P(),F(`div`,{key:t,class:`console-line`},` > `+D(e),1))),128))])):ma(``,!0)])):ma(``,!0)],512),[[eo,v.value===`output`||v.value===`split`]]),Nn(I(`div`,OS,[I(`div`,kS,[t[17]||=I(`div`,{class:`panel-title-wrap`},[I(`h3`,{class:`panel-title`},`程式碼編輯區`),I(`span`,{class:`editor-hint-badge`},`Vue 3 + HTML`)],-1),I(`div`,AS,[I(`label`,jS,[Nn(I(`input`,{type:`checkbox`,"onUpdate:modelValue":t[4]||=e=>d.value=e},null,512),[[Lo,d.value]]),t[14]||=I(`span`,null,`即時預覽`,-1)]),I(`button`,{class:`tool-btn`,onClick:oe,title:l.value?`已複製！`:`複製代碼`},[l.value?(P(),ia(M(ls),{key:0,size:13,class:`copy-success`})):(P(),ia(M(bs),{key:1,size:13}))],8,MS),I(`button`,{class:`tool-btn`,onClick:ie,title:`重置為初始題目`},[L(M(Fs),{size:13}),t[15]||=I(`span`,null,`Reset`,-1)]),I(`button`,{class:`tool-btn solution-btn`,onClick:ae,title:`查看並直接套用參考解答`},[L(M(Rs),{size:13}),t[16]||=I(`span`,null,`套用解答`,-1)])])]),Nn(I(`div`,NS,[I(`div`,PS,[(P(),F(N,null,Fr(C,(e,t)=>I(`button`,{key:t,class:`symbol-chip`,onMousedown:Uo(t=>ee(e,t),[`prevent`]),onTouchstart:Uo(t=>ee(e,t),[`prevent`])},D(e.label),41,FS)),64))])],512),[[eo,!p.value||m.value]]),I(`div`,{class:`editor-wrapper`,style:pe({fontSize:`${y.value}px`})},[I(`div`,IS,[(P(!0),F(N,null,Fr(S.value,e=>(P(),F(`span`,{key:e,class:`gutter-num`},D(e),1))),128))]),Nn(I(`textarea`,{ref_key:`textareaRef`,ref:a,class:`code-textarea font-mono`,"onUpdate:modelValue":t[5]||=e=>r.value=e,onInput:ne,onKeydown:T,spellcheck:`false`,readonly:p.value&&!m.value,placeholder:`在此輸入 Vue 與 HTML 程式碼...`},null,40,LS),[[Io,r.value]]),p.value&&!m.value?(P(),F(`div`,{key:0,class:`mobile-edit-overlay`,onClick:g},[I(`div`,RS,[L(M(_s),{size:18}),t[18]||=I(`span`,null,`點擊此處開始編輯程式碼`,-1)])])):ma(``,!0)],4),u.value?(P(),F(`div`,zS,[...t[19]||=[I(`span`,null,[fa(`已載入參考解答，您可以點擊 `),I(`strong`,null,`Reset`),fa(` 重新自己挑戰！`)],-1)]])):ma(``,!0)],512),[[eo,v.value===`editor`||v.value===`split`]]),(P(),ia(er,{to:`body`},[m.value?(P(),F(`div`,BS,[I(`div`,{class:`mobile-fs-toolbar`},[t[20]||=I(`div`,{class:`mobile-fs-toolbar-left`},[I(`span`,{class:`mobile-fs-title`},`全螢幕編輯模式`)],-1),I(`div`,{class:`mobile-fs-toolbar-right`},[I(`button`,{class:`mobile-fs-done-btn`,onClick:_},` 完成編輯 `)])]),I(`div`,VS,[I(`div`,HS,[(P(),F(N,null,Fr(C,(e,t)=>I(`button`,{key:t,class:`symbol-chip`,onMousedown:Uo(t=>ee(e,t),[`prevent`]),onTouchstart:Uo(t=>ee(e,t),[`prevent`])},D(e.label),41,US)),64))])]),I(`div`,{class:`mobile-fs-editor-wrapper`,style:pe({fontSize:`${y.value}px`})},[I(`div`,WS,[(P(!0),F(N,null,Fr(S.value,e=>(P(),F(`span`,{key:e,class:`gutter-num`},D(e),1))),128))]),Nn(I(`textarea`,{ref_key:`mobileTextareaRef`,ref:o,class:`code-textarea font-mono`,"onUpdate:modelValue":t[6]||=e=>r.value=e,onInput:ne,onKeydown:T,spellcheck:`false`,placeholder:`在此輸入 Vue 與 HTML 程式碼...`},null,544),[[Io,r.value]])],4)])):ma(``,!0)])),v.value===`editor`?(P(),F(`button`,{key:0,class:`floating-view-toggle`,onClick:t[7]||=e=>v.value=`output`,title:`查看執行成果`},[L(M(Cs),{size:15}),t[21]||=I(`span`,null,`查看成果 →`,-1)])):v.value===`output`?(P(),F(`button`,{key:1,class:`floating-view-toggle`,onClick:t[8]||=e=>v.value=`editor`,title:`返回修改代碼`},[L(M(_s),{size:15}),t[22]||=I(`span`,null,`繼續改代碼 →`,-1)])):ma(``,!0)],2))}},[[`__scopeId`,`data-v-83e0bbd8`]]),KS=[{id:`all`,name:`全部術語條目`},{id:`tools-ecosystem`,name:`常用工具庫與樣式生態`},{id:`vue-core`,name:`Vue 3 核心語法與響應式`},{id:`component`,name:`組件化設計與通訊`},{id:`router-spa`,name:`單頁應用 (SPA) 與路由`},{id:`state-api`,name:`狀態管理與網路請求`},{id:`architecture`,name:`架構演進與工程化實戰`}],qS=[{id:`jquery`,category:`tools-ecosystem`,en:`jQuery`,zh:`jQuery (傳統 DOM 操作霸主)`,phonetic:`/ˈdʒeɪkwɪəri/`,pinyin:`勾-扣-瑞`,definition:`於 2006 年發布的革命性 JavaScript 工具函式庫，以「$」符號與鏈式調用聞名。透過封裝跨瀏覽器相容性，極大簡化了 HTML DOM 操作、事件監聽與 Ajax 網路通訊。然而因其依賴「命令式手動抓取並修改 DOM」，在現代以「狀態驅動視圖」為核心的 Vue 時代已退居幕後，是舊系統現代化重構時最關鍵的替換標的。`,analogy:`【手動到每盞燈前撥動開關 vs 智慧家庭中控面板】—— 以前要讓客廳燈亮，得拿梯子去每一盞燈手動開關 (jQuery 手動抓 DOM 節點改文字)；現代智慧家庭只要在面板按一下「回家模式」(Vue 變更狀態資料)，所有燈光自動依狀態點亮。`},{id:`tailwind-css`,category:`tools-ecosystem`,en:`Tailwind CSS`,zh:`Tailwind CSS (原子化 / 功能優先樣式框架)`,phonetic:`/ˈteɪlwɪnd siː-ɛs-ɛs/`,pinyin:`貼-爾-溫德 C-S-S`,definition:`一種 Utility-First (功能類優先 / 原子化) 的現代 CSS 框架。開發者無需在 .css 檔案中發明冗長的 class 名稱，而是直接在 HTML 標籤上組合諸如 "flex"、"items-center"、"p-4"、"bg-blue-600" 等微型工具類。具備 JIT (即時編譯) 引擎，能根據原始碼實際使用到的類別生成體積極小的生產環境 CSS，並透過 "md:"、"hover:" 前綴原生支援響應式與狀態變化。`,analogy:`【標準化樂高積木顆粒 vs 每次手工開模做塑膠零件】—— 傳統 CSS 就像每次要做新按鈕都要手工開一個專屬模具命名；Tailwind 則是直接給你紅藍黃綠、不同長寬的標準積木顆粒，在 HTML 上隨拼隨用，既快速又不會產生重複堆疊的 CSS 廢料。`},{id:`reactivity`,category:`vue-core`,en:`Reactivity`,zh:`響應性 / 響應式系統`,phonetic:`/ˌriːækˈtɪvəti/`,pinyin:`瑞-愛克-替-維-提`,definition:`一種程式設計範式，當底層資料狀態 (State) 發生變化時，依賴該資料的視圖 (DOM) 或衍生計算會由框架自動即時同步更新，無需開發者手動編寫命令式 DOM 操作。`,analogy:`【試算表 Excel 公式自動連動】—— 當你在 A1 格填入 10，B1 格公式是「=A1*2」，只要 A1 變成 20，B1 瞬間自動變成 40，完全不需要你手動去重寫 B1 的內容。`},{id:`declarative-rendering`,category:`vue-core`,en:`Declarative Rendering`,zh:`宣告式渲染`,phonetic:`/dɪˈklærətɪv ˈrɛndərɪŋ/`,pinyin:`地-克賴-惹-替夫 潤-德-令`,definition:`相對於傳統命令式 (Imperative) 操作（如 document.getElementById），宣告式只專注描述「最終畫面應該長成什麼樣」，具體如何操作底層 DOM、如何比對差異，全交由框架引擎處理。`,analogy:`【餐廳點餐 vs 親自下廚】—— 命令式就像走進廚房一步一步指示：開火、倒油、炒菜；而宣告式就像直接跟服務生點單「我要一份牛肉麵」，廚房會自動為你做好呈上來。`},{id:`single-file-component`,category:`vue-core`,en:`Single File Component (SFC)`,zh:`單文件組件 (.vue 檔)`,phonetic:`/ˈsɪŋɡl faɪl kəmˈpoʊnənt/`,pinyin:`辛-狗 伐-偶 肯-剖-能特`,definition:`Vue 特有的檔案組織格式（副檔名為 .vue），在同一個檔案內封裝了結構 (<template>)、邏輯 (<script>) 與專屬樣式 (<style scoped>)，實現高內聚的組件模組化開發。`,analogy:`【獨立封裝的樂高功能積木】—— 每一塊積木自己內部就自帶了骨架、電路開關與外觀顏色，直接插上主機就能運作，彼此互不干擾。`},{id:`composition-api`,category:`vue-core`,en:`Composition API`,zh:`組合式 API`,phonetic:`/ˌkɒmpəˈzɪʃn eɪ-piː-aɪ/`,pinyin:`康-珀-力-選 A-P-I`,definition:`Vue 3 推出的全新程式碼組織方式，透過 setup() 函式與 ref、reactive 等原語，讓開發者能夠依據「業務功能邏輯」將相關的代碼聚合在一起，取代舊版 Options API 依資料/方法切割導致的上下滾動跳躍痛點。`,analogy:`【按專案分類的檔案夾 vs 按文具種類放的大抽屜】—— 舊版像是所有筆放在一抽屜、所有紙放另一抽屜；組合式 API 則是把同一個客戶的所有文件、合約、發票打包在同一個專案袋，一拿就是完整一套。`},{id:`ref-and-reactive`,category:`vue-core`,en:`Ref & Reactive`,zh:`響應式參考與代理物件`,phonetic:`/rɛf ænd riˈæktɪv/`,pinyin:`瑞夫 安德 瑞-愛克-替夫`,definition:`Vue 3 宣告響應式狀態的兩大核心手段。ref() 接受任何型別並包裝成具備 .value 的物件，在模板中自動解包；reactive() 透過 ES6 Proxy 代理將整個純 JavaScript 物件轉換為深層響應式。`,analogy:`【帶有感測晶片的容器】—— ref 就像把普通數值放進一個智慧感測保溫杯，只要杯子裡的溫度改變，底座的感測器立刻通報大樓中控台。`},{id:`computed-property`,category:`vue-core`,en:`Computed Property`,zh:`計算屬性`,phonetic:`/kəmˈpjuːtɪd ˈprɒpəti/`,pinyin:`肯-偏-替德 普絡-珀-提`,definition:`基於其所依賴的響應式狀態進行計算的屬性。具備快取機制 (Cache)，只有當其依賴的來源狀態改變時才會重新執行運算，多次讀取時直接返回快取結果，效能顯著優於普通方法呼叫。`,analogy:`【收銀機的購物車總計欄】—— 只要購物車裡的商品種類和數量沒變，收銀螢幕上的總金額就一直保持原樣顯示，只有你新增或拿掉一件商品時，螢幕才會瞬間重新加總。`},{id:`watcher`,category:`vue-core`,en:`Watcher (watch / watchEffect)`,zh:`偵聽器 / 副作用監聽`,phonetic:`/ˈwɒtʃər/`,pinyin:`握-特-扯`,definition:`當特定響應式狀態改變時，主動執行自訂回呼函式以產生「副作用 (Side Effects)」的機制，常見於非同步網路請求、寫入 LocalStorage、修改 DOM 或發送日誌。`,analogy:`【大樓火災煙霧偵測器】—— 平常安靜無聲，只要監測到煙霧濃度數值超標，立即自動觸發一連串動作：警報響起、噴灑灑水系統、自動撥號報警。`},{id:`props`,category:`component`,en:`Props (Properties)`,zh:`父傳子屬性`,phonetic:`/prɒps/`,pinyin:`普絡-普斯`,definition:`父組件向子組件由外向內單向傳遞資料的自訂屬性。子組件僅具備唯讀權限，嚴格禁止直接竄改 Prop 數值，以確保單向資料流的可預測性。`,analogy:`【工廠配發給員工的規格工作單】—— 主管 (父層) 指派規格參數給員工 (子組件)，員工只能依照規格執行任務，不能私自塗改工作單上的標準。`},{id:`emits`,category:`component`,en:`Emits (Event Emitter)`,zh:`子傳父事件發射`,phonetic:`/iˈmɪts/`,pinyin:`依-密-次`,definition:`子組件向父組件發出通知的自訂事件通道。當子組件內部發生特定互動（如按鈕點擊、表單送出）時，透過 emit(eventName, payload) 通知父組件並傳遞參數。`,analogy:`【對講機回報頻道】—— 前線人員 (子組件) 發現異常狀況時，按下通話鈕向總指揮中心 (父層) 回報：「報告長官，閥門已開啟！」，由指揮中心決定下一步處置。`},{id:`slot`,category:`component`,en:`Slot`,zh:`組件插槽`,phonetic:`/slɒt/`,pinyin:`斯-絡特`,definition:`Vue 提供的內容分發機制，子組件在模板中以 <slot></slot> 作為佔位出口，允許父組件在呼叫時向其注入自訂的 HTML 片段或子組件，極度適合封裝通用外框。`,analogy:`【相框的留白窗口】—— 相框製造商 (子組件) 負責把木質邊框、壓克力保護板和吊繩做好，中間留空；買相框的人 (父層) 想放風景照、家庭照還是證書都可以自由填入。`},{id:`composable`,category:`component`,en:`Composable`,zh:`組合式函式 / 邏輯封裝`,phonetic:`/kəmˈpoʊzəbl/`,pinyin:`肯-剖-惹-伯`,definition:`在 Vue 3 中封裝具有響應式狀態的獨立功能函式（命名慣例為 useXxx）。相較於舊式 Mixins，具有明確的輸入輸出、無命名衝突且便於單元測試。`,analogy:`【瑞士軍刀的外接擴充模組】—— 想要有溫度計功能就插上 useTemperature，想要有藍牙連線就插上 useBluetooth，隨插即用且完全不會搞混。`},{id:`virtual-dom`,category:`component`,en:`Virtual DOM (VDOM)`,zh:`虛擬 DOM`,phonetic:`/ˈvɜːrtʃuəl dɒm/`,pinyin:`威-秋-偶 滴-歐-姆`,definition:`在記憶體中以輕量純 JavaScript 物件結構模擬真實 HTML DOM 樹的技術。每次狀態變更時，先在記憶體中比對前後差異 (Diffing 演算法)，最後只將真正改變的部分打補丁 (Patch) 到真實 DOM 上。`,analogy:`【室內裝潢設計藍圖】—— 如果你想挪動客廳沙發的位置，不需要直接把真的百公斤沙發搬來搬去試位置；先在平板藍圖上移好位置確定最佳方案，最後工人只需進去搬動一次到位。`},{id:`spa`,category:`router-spa`,en:`Single Page Application (SPA)`,zh:`單頁應用程式`,phonetic:`/ˈsɪŋɡl peɪdʒ ˌæplɪˈkeɪʃn/`,pinyin:`辛-狗 胚-居 愛-普-哩-肯-選`,definition:`一種現代 Web 架構，整座網站僅載入單一 index.html 頁面，後續所有畫面切換皆由 JavaScript 攔截路由並動態局部抽換內容，瀏覽器不觸發整頁重新整理，提供如原生桌面 App 般絲滑的操作體驗。`,analogy:`【現代投影片簡報播放器 vs 傳統每看一頁就換一本新書】—— 整個演講都在同一個螢幕前進行，切換章節時只是簡報頁面平滑淡入淡出，不需要把整個演講廳拆掉重蓋。`},{id:`iframe-architecture`,category:`router-spa`,en:`Iframe Architecture`,zh:`Iframe 巢狀導航架構 (傳統舊架構)`,phonetic:`/ˈaɪfreɪm ˈɑːrkɪtɛktʃər/`,pinyin:`愛-服-瑞姆 阿-客-替克-扯`,definition:`傳統後台常見做法，外框 index.html 內嵌 <iframe> 標籤加載各子頁面。其致命缺點包括：阻斷 RWD 媒體查詢響應、子頁無法感知外部視窗尺寸、跨頁通信被迫使用 window.parent 形成高耦合技術債。`,analogy:`【在潛水艇內部架設電視機看外景】—— 電視機 (iframe) 裡面的畫面完全不知道潛水艇外部的真實天氣與水壓，彼此隔著一道厚牆，傳遞信號極度困難且笨重。`},{id:`hash-history`,category:`router-spa`,en:`Hash History (createWebHashHistory)`,zh:`雜湊路由模式`,phonetic:`/hæʃ ˈhɪstri/`,pinyin:`海-許 希-斯-翠`,definition:`利用 URL 中 # 符號（井字號錨點）實現前端路由的方式。# 後方的路徑改變不會被瀏覽器發送至後端 Web 伺服器，因此在沒有設定 SPA Rewrite 規則的舊式伺服器環境中，頁面刷新絕對不會拋出 404 錯誤。`,analogy:`【百科全書的書籤夾頁】—— 你在同一本書第 50 頁夾了「#設備」書籤，只是給讀者自己眼睛看跳到哪一章，不需要跑去圖書館櫃檯重新登記換借一本新書。`},{id:`navigation-guard`,category:`router-spa`,en:`Navigation Guard (beforeEach)`,zh:`路由導航守衛`,phonetic:`/ˌnævɪˈɡeɪʃn ɡɑːrd/`,pinyin:`奈-維-給-選 尬-爾-德`,definition:`Vue Router 提供的全域/路由級攔截鉤子。在每次路由跳轉發生前進行前置檢查，若未登入或無權限，可立即攔截並轉址至登入頁面，同時記錄原始目標路由以便登入後精準還原。`,analogy:`【高鐵月台剪票閘門】—— 乘客想要走到月台 (目標頁面)，閘門 (beforeEach) 會先掃描車票憑證 (Token)，有票放行；沒票自動引導至補票售票處 (登入頁)。`},{id:`pinia`,category:`state-api`,en:`Pinia (State Management)`,zh:`Pinia 全局狀態管理庫`,phonetic:`/piˈnjɑː/`,pinyin:`皮-尼-亞`,definition:`Vue 官方推薦的現代狀態管理庫，取代舊版 Vuex。專門存放跨組件、跨頁面需要共享的全局資料（如使用者 Token、個人權限、即時設備清單），支援 TypeScript 自動推導且結構極度簡潔。`,analogy:`【社區管理委員會的中央公告欄】—— 誰當選主委、目前停水停電通知都在中控公布欄更新，各棟住戶打開門看一眼就知道最新狀況，不用一家一家敲門傳話。`},{id:`interceptor`,category:`state-api`,en:`Axios Interceptor`,zh:`HTTP 請求/回應攔截器`,phonetic:`/ˌɪntərˈsɛptər/`,pinyin:`硬-特-誰-普-特`,definition:`在 HTTP 請求送出前 (Request) 或收到後端回應後 (Response) 預先進行全域處理的管道。常見用途包括：自動在請求頭補上 Authorization Token、統一攔截 401 憑證過期並強制登出、統一過濾錯誤格式。`,analogy:`【國際機場的海關與安檢通道】—— 出境時 (Request) 安檢員檢查所有人護照並蓋核准章；入境時 (Response) 檢查行李，發現違禁品立即沒收遣返。`},{id:`mock-mode`,category:`state-api`,en:`Mock Mode`,zh:`模擬假資料開發模式`,phonetic:`/mɒk moʊd/`,pinyin:`莫-克 某-德`,definition:`在後端 API 尚未開發完成或現場硬體設備無法連線時，前端在本地端透過模擬資料結構進行介面開發與互動驗證的工程化機制。藉由環境變數開關切換，上線時無痛接入真實 API。`,analogy:`【飛行員的地面座艙模擬器】—— 不必冒險把真的飛機開上天，在地面模擬器中就能把起飛、降落、遭遇亂流的儀表板操作訓練得滾瓜爛熟。`},{id:`websocket-stomp`,category:`state-api`,en:`WebSocket & STOMP`,zh:`全雙工長連線與訊息發布訂閱協定`,phonetic:`/ˈwɛbˌsɒkɪt stɒmp/`,pinyin:`網-巴-克特 斯-燙-普`,definition:`WebSocket 建立客戶端與伺服器之間的 TCP 長連線雙向管道；STOMP 則是運行於其上的文字導向訊息協定，提供如 /topic/xxx 的標準「發布/訂閱 (Pub/Sub)」機制，實現感測器數值的秒級即時推播。`,analogy:`【警用無線電廣播頻道】—— 基地台與警車保持全天候連線通話，指揮中心一發布特定頻道的廣播，所有收聽該頻道的員警耳機瞬間同時收到最新指令。`},{id:`strangler-pattern`,category:`architecture`,en:`Strangler Pattern`,zh:`絞殺者架構遷移模式`,phonetic:`/ˈstræŋɡlər ˈpætərn/`,pinyin:`斯-寸-格-勒 拍-騰`,definition:`經典的系統現代化改造架構模式。不推翻重寫既有營運中的舊系統，而是建立新系統與舊系統「並存」運作，透過抽出共用 API、逐步將頁面由舊轉新，最終如同絞殺藤纏繞古樹般無痛替換完成。`,analogy:`【行駛中的火車在軌道上逐節更換現代化車廂】—— 火車保持穩定前進不耽誤旅客行程，工程團隊趁停靠站時一節一節更換成高鐵車廂，不知不覺中整列車換新完畢。`},{id:`design-tokens`,category:`architecture`,en:`Design Tokens (CSS Variables)`,zh:`設計代碼 / 設計變數體系`,phonetic:`/dɪˈzaɪn ˈtoʊkənz/`,pinyin:`地-賽 偷-肯-斯`,definition:`將介面設計規範中的原子化屬性（顏色、字級、圓角、間距）抽象為標準變數（如 --primary, --surface-bg）。系統只需切換最頂層的變數值，全站所有元件即可自動切換多品牌或深淺色主題。`,analogy:`【連鎖便利商店的企業識別手冊 (CIS)】—— 定義好標準色號代碼，全台幾千家分店的招牌、制服、宣傳單只要套用該代碼，改色時只需總部改一份參數。`},{id:`mobile-first`,category:`architecture`,en:`Mobile-First Design`,zh:`行動端優先設計`,phonetic:`/ˈmoʊbl fɜːrst dɪˈzaɪn/`,pinyin:`某-波 佛-斯特 地-賽`,definition:`一種由小螢幕向大螢幕漸進增強的介面設計思維。優先考量行動裝置上的拇指觸控熱區 (最小 44x44px)、防止 iOS 自動放大的輸入框字級 (>=16px)、以及瀏海/底線的安全區 (safe-area-inset)。`,analogy:`【先設計瑞士刀隨身工具，再擴充為整套維修工具箱】—— 確保在最極端受限的手機掌中環境依然順手可用，放到大桌面上只會更游刃有餘。`},{id:`pwa-service-worker`,category:`architecture`,en:`PWA (Progressive Web App)`,zh:`漸進式網頁應用`,phonetic:`/proʊˈɡrɛsɪv wɛb æp/`,pinyin:`普絡-貴-西夫 網-愛普`,definition:`利用現代瀏覽器技術讓 Web 網頁具備類似原生 App 體驗的一系列標準。包含可新增至桌面圖示 (Manifest) 與離線資源快取 (Service Worker)，但在瀏覽器資安限制下，必須在 HTTPS 安全上下文環境方能完全啟用。`,analogy:`【自備離線急救包與專屬通行證的網頁】—— 只要拜訪過一次，急救物資就放在背包 (快取)，就算走到沒有手機信號的地下室，依然能拿出地圖離線查看。`}],JS={class:`glossary-container`},YS={class:`glossary-header`},XS={class:`header-main-row`},ZS={class:`glossary-brand`},QS={class:`search-control-bar`},$S={class:`search-input-wrap`},eC={class:`cat-nav-pills`},tC=[`onClick`],nC={class:`cat-badge`},rC={class:`terms-viewport`},iC={class:`terms-grid`},aC={class:`term-header`},oC={class:`term-name-group`},sC={class:`term-en`},cC={class:`term-zh`},lC=[`onClick`,`title`],uC={class:`pronunciation-bar`},dC={class:`phonetic-code`},fC={class:`pinyin-text`},pC={class:`term-section`},mC={class:`section-text definition-text`},hC={class:`term-section analogy-box`},gC={class:`section-text analogy-text`},_C={key:0,class:`empty-results`},vC=cx({__name:`GlossaryView`,emits:[`close`],setup(e,{emit:t}){let n=t,r=j(``),i=j(`all`),a=j(null),o=typeof window<`u`&&`speechSynthesis`in window,s=e=>{if(!o)return;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.lang=`en-US`,t.rate=.9,t.onstart=()=>{a.value=e},t.onend=()=>{a.value=null},t.onerror=()=>{a.value=null},window.speechSynthesis.speak(t)},c=()=>{o&&(window.speechSynthesis.cancel(),a.value=null)};Tr(()=>{o&&window.speechSynthesis.cancel()});let l=R(()=>{let e=r.value.trim().toLowerCase();return qS.filter(t=>i.value!==`all`&&t.category!==i.value?!1:!e||t.en.toLowerCase().includes(e)||t.zh.toLowerCase().includes(e)||t.pinyin.toLowerCase().includes(e)||t.definition.toLowerCase().includes(e)||t.analogy.toLowerCase().includes(e))}),u=e=>e===`all`?qS.length:qS.filter(t=>t.category===e).length;return(e,t)=>(P(),F(`div`,JS,[I(`header`,YS,[I(`div`,XS,[I(`div`,ZS,[L(M(os),{size:22,class:`brand-icon`}),t[2]||=I(`div`,{class:`brand-titles`},[I(`h2`,{class:`glossary-title`},`前端與系統架構專業名詞字典`),I(`span`,{class:`glossary-subtitle`},`附真人發音、軟工核心定義與白話生活比喻`)],-1)]),I(`button`,{class:`close-glossary-btn`,onClick:t[0]||=e=>n(`close`),title:`返回課程學習`},[L(M(Ks),{size:18}),t[3]||=I(`span`,null,`返回課程`,-1)])]),I(`div`,QS,[I(`div`,$S,[L(M(Is),{size:16,class:`search-icon`}),Nn(I(`input`,{type:`search`,"onUpdate:modelValue":t[1]||=e=>r.value=e,placeholder:`搜尋英文術語、中文意義或比喻關鍵字...`,class:`search-input`},null,512),[[Io,r.value]])]),a.value?(P(),F(`button`,{key:0,class:`stop-tts-btn`,onClick:c,title:`停止當前語音朗讀`},[L(M(Ws),{size:15}),t[4]||=I(`span`,null,`停止朗讀`,-1)])):ma(``,!0)]),I(`nav`,eC,[(P(!0),F(N,null,Fr(M(KS),e=>(P(),F(`button`,{key:e.id,class:E([`cat-pill`,{active:i.value===e.id}]),onClick:t=>i.value=e.id},[I(`span`,null,D(e.name),1),I(`span`,nC,D(u(e.id)),1)],10,tC))),128))])]),I(`main`,rC,[I(`div`,iC,[(P(!0),F(N,null,Fr(l.value,e=>(P(),F(`article`,{key:e.id,class:`term-card`},[I(`div`,aC,[I(`div`,oC,[I(`h3`,sC,D(e.en),1),I(`span`,cC,D(e.zh),1)]),I(`button`,{class:E([`speak-btn`,{"is-speaking":a.value===e.en}]),onClick:t=>s(e.en),title:`朗讀 `+e.en+` 發音`},[L(M(Us),{size:16}),t[5]||=I(`span`,{class:`speak-label`},`發音`,-1)],10,lC)]),I(`div`,uC,[t[6]||=I(`span`,{class:`tag-label`},`發音`,-1),I(`code`,dC,D(e.phonetic),1),I(`span`,fC,`(`+D(e.pinyin)+`)`,1)]),I(`div`,pC,[t[7]||=I(`div`,{class:`section-label-row`},[I(`span`,{class:`section-badge badge-definition`},`軟工意義`)],-1),I(`p`,mC,D(e.definition),1)]),I(`div`,hC,[t[8]||=I(`div`,{class:`section-label-row`},[I(`span`,{class:`section-badge badge-analogy`},`通俗比喻`)],-1),I(`p`,gC,D(e.analogy),1)])]))),128))]),l.value.length===0?(P(),F(`div`,_C,[I(`p`,null,`查無符合「`+D(r.value)+`」的專業術語，請嘗試其他關鍵字。`,1)])):ma(``,!0)])]))}},[[`__scopeId`,`data-v-85c943e3`]]),yC={class:`welcome-container`},bC={class:`welcome-hero`},xC={class:`hero-badge`},SC={class:`hero-actions`},CC={class:`info-section`},wC={class:`pipeline-grid`},TC={class:`pipeline-step`},EC={class:`step-icon-wrap icon-code`},DC={class:`pipeline-arrow`},OC={class:`pipeline-step`},kC={class:`step-icon-wrap icon-parse`},AC={class:`pipeline-arrow`},jC={class:`pipeline-step`},MC={class:`step-icon-wrap icon-paint`},NC={class:`pipeline-arrow`},PC={class:`pipeline-step`},FC={class:`step-icon-wrap icon-engine`},IC={class:`info-section`},LC={class:`roles-cards-grid`},RC={class:`role-card-top`},zC={class:`role-icon-box`},BC={class:`role-footer-action`},VC={class:`role-card-top`},HC={class:`role-icon-box`},UC={class:`role-footer-action`},WC={class:`role-card-top`},GC={class:`role-icon-box`},KC={class:`role-footer-action`},qC={class:`role-card-top`},JC={class:`role-icon-box`},YC={class:`role-footer-action`},XC={class:`info-section interactive-demo-section`},ZC={class:`interactive-sandbox`},QC={class:`sandbox-controls`},$C={class:`control-toggle`},ew={class:`toggle-name`},tw={class:`control-toggle`},nw=[`disabled`],rw={class:`toggle-name`},iw={class:`control-toggle`},aw=[`disabled`],ow={class:`toggle-name`},sw={class:`sandbox-stage`},cw={key:0,class:`empty-stage-state`},lw={key:1,class:`raw-html-preview`},uw={key:2,class:`styled-preview-card`},dw={class:`preview-card-body`},fw={class:`preview-counter-display`},pw={class:`counter-val-wrap`},mw={class:`counter-num`},hw={class:`preview-card-footer`},gw={class:`welcome-cta`},_w={class:`cta-inner`},vw={class:`cta-buttons`},yw=cx({__name:`WelcomeView`,emits:[`start-track`,`open-lessons`],setup(e,{emit:t}){let n=t,r=j(!0),i=j(!0),a=j(!0),o=j(10),s=()=>{a.value&&(o.value+=5)},c=()=>{a.value&&(o.value=0)};return(e,t)=>(P(),F(`div`,yC,[I(`section`,bC,[I(`div`,xC,[L(M(Rs),{size:14,class:`badge-icon`}),t[11]||=I(`span`,null,`新手前端導引入門`,-1)]),t[14]||=I(`h1`,{class:`hero-title`},`如何寫出你的第一個網站？`,-1),t[15]||=I(`p`,{class:`hero-subtitle`},` 拋開艱澀的技術術語。用最清晰直觀的方式，搞懂網頁在瀏覽器裡的運作原理，以及 HTML、CSS、JavaScript 與 Vue 如何協力打造現代網路世界！ `,-1),I(`div`,SC,[I(`button`,{class:`primary-action-btn`,onClick:t[0]||=e=>n(`start-track`,`vue`)},[L(M(Ns),{size:16}),t[12]||=I(`span`,null,`直接進入 Vue 3 實戰課程`,-1)]),I(`button`,{class:`secondary-action-btn`,onClick:t[1]||=e=>n(`start-track`,`html`)},[L(M(os),{size:16}),t[13]||=I(`span`,null,`從 HTML 基礎開始打底`,-1)])])]),I(`section`,CC,[t[28]||=I(`div`,{class:`section-header`},[I(`div`,{class:`section-tag`},`核心底層觀念`),I(`h2`,{class:`section-title`},`1. 網頁是怎麼在瀏覽器跑起來的？`),I(`p`,{class:`section-desc`},` 你在電腦上寫的網頁，本質上只是純文字檔案。瀏覽器就像一位技藝高超的建築師，負責將這些文字轉譯成你在螢幕上看到的豐富畫面。 `)],-1),I(`div`,wC,[I(`div`,TC,[t[16]||=I(`div`,{class:`step-num`},`01`,-1),I(`div`,EC,[L(M(ws),{size:24})]),t[17]||=I(`h3`,{class:`step-title`},`撰寫文字源碼`,-1),t[18]||=I(`p`,{class:`step-desc`},[fa(` 工程師使用編輯器，編寫以 `),I(`code`,null,`.html`),fa(`、`),I(`code`,null,`.css`),fa(`、`),I(`code`,null,`.js`),fa(` 為結尾的純文字檔案。 `)],-1)]),I(`div`,DC,[L(M(as),{size:20})]),I(`div`,OC,[t[19]||=I(`div`,{class:`step-num`},`02`,-1),I(`div`,kC,[L(M(Es),{size:24})]),t[20]||=I(`h3`,{class:`step-title`},`瀏覽器解析結構`,-1),t[21]||=I(`p`,{class:`step-desc`},` 瀏覽器讀入 HTML 生成骨架（DOM 樹），讀入 CSS 建立樣式規則（CSSOM 樹），並將兩者合成為渲染樹。 `,-1)]),I(`div`,AC,[L(M(as),{size:20})]),I(`div`,jC,[t[22]||=I(`div`,{class:`step-num`},`03`,-1),I(`div`,MC,[L(M(As),{size:24})]),t[23]||=I(`h3`,{class:`step-title`},`排版與繪製畫面`,-1),t[24]||=I(`p`,{class:`step-desc`},` 計算每個元素在螢幕上的精確座標與幾何尺寸（Layout），最後把顏色、文字與陰影逐像素繪製出來（Paint）。 `,-1)]),I(`div`,NC,[L(M(as),{size:20})]),I(`div`,PC,[t[25]||=I(`div`,{class:`step-num`},`04`,-1),I(`div`,FC,[L(M(xs),{size:24})]),t[26]||=I(`h3`,{class:`step-title`},`JavaScript 注入靈魂`,-1),t[27]||=I(`p`,{class:`step-desc`},` JS 引擎隨時待命，當使用者點擊按鈕、輸入文字或滾動滑鼠時，即時更新資料並重新驅動畫面變換！ `,-1)])])]),I(`section`,IC,[t[49]||=I(`div`,{class:`section-header`},[I(`div`,{class:`section-tag`},`分工與定位`),I(`h2`,{class:`section-title`},`2. 前端四劍客各自在做什麼？`),I(`p`,{class:`section-desc`},` 如果把建立一個網站比喻成「建造一棟現代智慧住宅」，那麼四套技術的分工一目了然： `)],-1),I(`div`,LC,[I(`div`,{class:`role-card card-html`,onClick:t[2]||=e=>n(`start-track`,`html`)},[I(`div`,RC,[I(`div`,zC,[L(M(ws),{size:22})]),t[29]||=I(`span`,{class:`role-sublabel`},`骨架與磚瓦`,-1)]),t[31]||=I(`h3`,{class:`role-name`},`HTML`,-1),t[32]||=I(`div`,{class:`role-metaphor`},`負責定義網頁「有什麼內容」`,-1),t[33]||=I(`p`,{class:`role-body`},[fa(` 負責建立房屋的樑柱、隔間與樓層。在網頁中用來標註文章標題（`),I(`code`,null,`h1`),fa(`）、段落文字（`),I(`code`,null,`p`),fa(`）、按鈕（`),I(`code`,null,`button`),fa(`）與表單輸入欄位。 `)],-1),I(`div`,BC,[t[30]||=I(`span`,null,`探索 HTML 專題 (5 單元)`,-1),L(M(as),{size:14})])]),I(`div`,{class:`role-card card-css`,onClick:t[3]||=e=>n(`start-track`,`css`)},[I(`div`,VC,[I(`div`,HC,[L(M(Ms),{size:22})]),t[34]||=I(`span`,{class:`role-sublabel`},`裝潢與外觀`,-1)]),t[36]||=I(`h3`,{class:`role-name`},`CSS`,-1),t[37]||=I(`div`,{class:`role-metaphor`},`負責定義網頁「長什麼模樣」`,-1),t[38]||=I(`p`,{class:`role-body`},` 負責房間的粉刷配色、壁紙挑選、採光與家具擺放排版（Flexbox 與 Grid）。讓網頁不只美觀，還能自動適應手機與電腦螢幕（RWD 響應式）。 `,-1),I(`div`,UC,[t[35]||=I(`span`,null,`探索 CSS 專題 (7 單元)`,-1),L(M(as),{size:14})])]),I(`div`,{class:`role-card card-js`,onClick:t[4]||=e=>n(`start-track`,`javascript`)},[I(`div`,WC,[I(`div`,GC,[L(M(cs),{size:22})]),t[39]||=I(`span`,{class:`role-sublabel`},`水電智慧神經`,-1)]),t[41]||=I(`h3`,{class:`role-name`},`JavaScript`,-1),t[42]||=I(`div`,{class:`role-metaphor`},`負責定義網頁「如何動態互動」`,-1),t[43]||=I(`p`,{class:`role-body`},` 就像房屋裡的智慧開關與水電網絡。點擊電燈會發光、自動感應門會開啟、冷氣會依室溫調整。在網頁中負責處理點擊、算錢、驗證與傳輸資料。 `,-1),I(`div`,KC,[t[40]||=I(`span`,null,`探索 JS 專題 (8 單元)`,-1),L(M(as),{size:14})])]),I(`div`,{class:`role-card card-vue`,onClick:t[5]||=e=>n(`start-track`,`vue`)},[I(`div`,qC,[I(`div`,JC,[L(M(Ds),{size:22})]),t[44]||=I(`span`,{class:`role-sublabel`},`現代工業化引擎`,-1)]),t[46]||=I(`h3`,{class:`role-name`},`Vue 3`,-1),t[47]||=I(`div`,{class:`role-metaphor`},`用「資料驅動」擺脫繁瑣手工操作`,-1),t[48]||=I(`p`,{class:`role-body`},` 傳統 JS 每次資料改變都要手動查找 DOM 節點並逐一修改。Vue 引入「響應式資料 (Reactivity)」：只要狀態變了，畫面自動精密同步更新，是現代大型專案的標準利器！ `,-1),I(`div`,YC,[t[45]||=I(`span`,null,`探索 Vue 3 核心 (28 單元)`,-1),L(M(as),{size:14})])])])]),I(`section`,XC,[t[62]||=I(`div`,{class:`section-header`},[I(`div`,{class:`section-tag`},`動手親身體會`),I(`h2`,{class:`section-title`},`3. 網頁三要素疊加威力演示`),I(`p`,{class:`section-desc`},` 切換下方的開關，親眼觀察「只有骨架」、「加上樣式」以及「賦予動態響應」的畫面演進過程！ `)],-1),I(`div`,ZC,[I(`div`,QC,[I(`label`,$C,[Nn(I(`input`,{type:`checkbox`,"onUpdate:modelValue":t[6]||=e=>r.value=e},null,512),[[Lo,r.value]]),I(`span`,ew,[L(M(ws),{size:15}),t[50]||=fa(` 1. HTML 骨架 `,-1)])]),I(`label`,tw,[Nn(I(`input`,{type:`checkbox`,"onUpdate:modelValue":t[7]||=e=>i.value=e,disabled:!r.value},null,8,nw),[[Lo,i.value]]),I(`span`,rw,[L(M(Ms),{size:15}),t[51]||=fa(` 2. CSS 裝潢樣式 `,-1)])]),I(`label`,iw,[Nn(I(`input`,{type:`checkbox`,"onUpdate:modelValue":t[8]||=e=>a.value=e,disabled:!r.value},null,8,aw),[[Lo,a.value]]),I(`span`,ow,[L(M(qs),{size:15}),t[52]||=fa(` 3. JS / Vue 響應動能 `,-1)])])]),I(`div`,sw,[r.value?i.value?(P(),F(`div`,uw,[t[61]||=I(`div`,{class:`preview-card-header`},[I(`div`,{class:`preview-badge-status`},[I(`span`,{class:`status-dot`}),I(`span`,null,`系統運轉中`)]),I(`span`,{class:`preview-chip`},`現代設計系統`)],-1),I(`div`,dw,[t[59]||=I(`h3`,{class:`preview-title`},`儲能與發電監控儀表`,-1),t[60]||=I(`p`,{class:`preview-desc`},`透過 CSS 彈性排版與漸層配色，將原本單調的文字轉化為極具質感的科技介面。`,-1),I(`div`,fw,[t[58]||=I(`span`,{class:`counter-label`},`即時電力回饋點數`,-1),I(`div`,pw,[I(`span`,mw,D(o.value),1),t[57]||=I(`span`,{class:`counter-unit`},`kW`,-1)])])]),I(`div`,hw,[I(`button`,{class:E([`btn-interactive`,{"is-disabled":!a.value}]),onClick:s},[L(M(qs),{size:15}),I(`span`,null,D(a.value?`點我增加 +5 點（Vue 驅動）`:`JS 未啟動（按鈕無反應）`),1)],2),I(`button`,{class:E([`btn-reset`,{"is-disabled":!a.value}]),onClick:c},` 重設 `,2)])])):(P(),F(`div`,lw,[t[54]||=I(`div`,{class:`raw-note`},`提示：這是只有 HTML 的狀態（無任何 CSS 樣式修飾）`,-1),t[55]||=I(`h1`,null,`設備能源監控卡片`,-1),t[56]||=I(`p`,null,`主機狀態：運轉中 (已連線)`,-1),I(`p`,null,`累計發電功率點數：`+D(o.value)+` 點`,1),I(`button`,{onClick:s},` 點我累積功率 (`+D(a.value?`JS 動態響應有效`:`無 JS，點擊無反應`)+`) `,1),I(`button`,{onClick:c,style:{"margin-left":`5px`}},`歸零`)])):(P(),F(`div`,cw,[L(M(_s),{size:32,class:`empty-icon`}),t[53]||=I(`p`,null,`沒有 HTML，畫面就是一片虛無，不存在任何可見的內容或結構。`,-1)]))])])]),t[67]||=pa(`<section class="info-section" data-v-e013c53e><div class="section-header" data-v-e013c53e><div class="section-tag" data-v-e013c53e>實戰起步路線</div><h2 class="section-title" data-v-e013c53e>4. 如何自己動手開始寫網站？</h2><p class="section-desc" data-v-e013c53e> 寫網頁的門檻比你想像的還要低！你不需要昂貴的付費軟體，只需要按照以下三步驟即可展開旅程： </p></div><div class="start-steps-grid" data-v-e013c53e><div class="start-step-card" data-v-e013c53e><div class="step-card-header" data-v-e013c53e><span class="step-badge" data-v-e013c53e>第一步：最簡單起手式</span><span class="step-tool" data-v-e013c53e>零門檻安裝</span></div><h3 class="step-card-title" data-v-e013c53e>建立一個 index.html 檔案</h3><p class="step-card-body" data-v-e013c53e> 在電腦桌面建立一個純文字檔案，將檔名改為 <code data-v-e013c53e>index.html</code>。用記事本打開，貼上一段 <code data-v-e013c53e>&lt;h1&gt;哈囉世界&lt;/h1&gt;</code>，存檔後對著它雙擊滑鼠左鍵，瀏覽器就會立刻為你打開第一個網頁！ </p><div class="step-links" data-v-e013c53e><a href="https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noopener noreferrer" class="step-link-btn" data-v-e013c53e><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e013c53e><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-e013c53e></path><polyline points="15 3 21 3 21 9" data-v-e013c53e></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-e013c53e></line></svg> MDN 官方 HTML 入門教學 </a></div></div><div class="start-step-card" data-v-e013c53e><div class="step-card-header" data-v-e013c53e><span class="step-badge" data-v-e013c53e>第二步：工欲善其事</span><span class="step-tool" data-v-e013c53e>標準工程工具</span></div><h3 class="step-card-title" data-v-e013c53e>下載 VS Code 專業編輯器</h3><p class="step-card-body" data-v-e013c53e> 前往微軟官方下載免費的 <strong data-v-e013c53e>VS Code</strong> 編輯器，並安裝 <strong data-v-e013c53e>Live Server</strong> 擴充套件。它能讓你每次儲存代碼時，瀏覽器自動即時重新整理，體驗流暢的寫代碼節奏！ </p><div class="step-links" data-v-e013c53e><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn" data-v-e013c53e><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e013c53e><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-e013c53e></path><polyline points="15 3 21 3 21 9" data-v-e013c53e></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-e013c53e></line></svg> VS Code 微軟官網下載 </a><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer" class="step-link-btn sub" data-v-e013c53e> Live Server 擴充外掛 </a></div></div><div class="start-step-card" data-v-e013c53e><div class="step-card-header" data-v-e013c53e><span class="step-badge" data-v-e013c53e>第三步：邁向現代化</span><span class="step-tool" data-v-e013c53e>企業級標準</span></div><h3 class="step-card-title" data-v-e013c53e>安裝 Node.js 與啟動 Vite + Vue 3</h3><p class="step-card-body" data-v-e013c53e> 下載 Node.js LTS 穩定版，在終端機輸入 <code data-v-e013c53e>npm create vite@latest my-app -- --template vue</code>，你就擁有了包含熱重載（Hot Reload）、組件化與最新打包工具的現代化專業前端環境！ </p><div class="step-links" data-v-e013c53e><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" class="step-link-btn" data-v-e013c53e><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e013c53e><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-e013c53e></path><polyline points="15 3 21 3 21 9" data-v-e013c53e></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-e013c53e></line></svg> Node.js 官方載點 (LTS) </a><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" class="step-link-btn sub" data-v-e013c53e> Vite 官方網站 </a><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="step-link-btn sub" data-v-e013c53e> Vue.js 官方文件 </a></div></div></div></section>`,1),I(`section`,gw,[I(`div`,_w,[t[65]||=I(`h2`,{class:`cta-title`},`準備好開啟你的前端學習之旅了嗎？`,-1),t[66]||=I(`p`,{class:`cta-desc`},` 本平台提供完整的「左側觀念文檔 + 右側即時互動代碼演練台 (Live Playground)」，無須在本機安裝任何環境，在瀏覽器裡就能邊看邊寫邊出結果！ `,-1),I(`div`,vw,[I(`button`,{class:`cta-btn cta-btn-vue`,onClick:t[9]||=e=>n(`start-track`,`vue`)},[L(M(Ds),{size:18}),t[63]||=I(`span`,null,`前往 Vue 3 實戰課程 (28 單元)`,-1)]),I(`button`,{class:`cta-btn cta-btn-base`,onClick:t[10]||=e=>n(`start-track`,`html`)},[L(M(ws),{size:18}),t[64]||=I(`span`,null,`先修基礎：HTML (5) / CSS (7) / JS (8)`,-1)])])])])]))}},[[`__scopeId`,`data-v-e013c53e`]]),bw=[{id:`html-01-structure`,category:`HTML 核心專題篇`,title:`HTML 01. 網頁標準骨架與 DOM 樹建構觀念`,summary:`從 DOCTYPE 到 body，全面理解 HTML 文件的底層骨架，以及瀏覽器如何將標籤解析為記憶體中的 DOM 樹狀結構。`,readTime:`7 分鐘`,concept:`
### 1. 什麼是 HTML 與文件類型宣告 (DOCTYPE)？
HTML (HyperText Markup Language) 負責定義網頁的「結構與內容」。
每一份符合現代標準的 HTML 文件，第一行必須是 \`<!DOCTYPE html>\`：
\`\`\`html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>設備監控系統</title>
</head>
<body>
  <h1>系統主控台</h1>
</body>
</html>
\`\`\`

#### 核心標籤逐行拆解：
- **\`<!DOCTYPE html>\`**：告知瀏覽器採用現代標準模式 (Standards Mode) 渲染，防止進入怪異模式 (Quirks Mode)。
- **\`<html lang="zh-TW">\`**：文件的根元素，\`lang\` 屬性有助於搜尋引擎優化 (SEO) 與語音閱讀器識別正確語音庫。
- **\`<head>\`**：存放文件的「中繼資料 (Metadata)」，不會直接畫在螢幕上。
  - **\`<meta charset="UTF-8">\`**：宣告編碼為萬國碼 UTF-8，防止中文或特殊字元亂碼。
  - **\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`**：**RWD 響應式佈局命脈**！讓視窗寬度等於裝置實體寬度，禁止手機瀏覽器預設縮放成桌面 980px。
- **\`<body>\`**：瀏覽器實際繪製在視窗中的所有視覺內容容器。

---

### 2. 什麼是 DOM 樹 (Document Object Model)？
當瀏覽器下載 HTML 文字檔案後，會依據巢狀標籤將其轉換為記憶體中的**樹狀資料結構 (DOM Tree)**：
- 每個標籤對應一個 **元素節點 (Element Node)**。
- 標籤內的文字對應 **文字節點 (Text Node)**。
- 標籤上的屬性對應 **屬性節點 (Attribute Node)**。

> **對應 Vue 的核心觀念**：
> 傳統 jQuery 是「直接在真實 DOM 樹上頻繁進行插入、刪除節點」，這會引發瀏覽器昂貴的重繪 (Repaint) 與重排 (Reflow)。
> Vue 3 則在記憶體中建立一套輕量的 **虛擬 DOM (Virtual DOM)**，比對狀態差異後，才批次更新真實 DOM 樹。

---

### 3. 權威延伸學習資源
- **MDN Web Docs - HTML 入門與標準文件結構**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content
- **W3Schools HTML 核心標準教學**：https://www.w3schools.com/html/html_intro.asp
    `,task:`
任務指引：
1. 觀察右側編輯器中的完整 HTML 文件結構。
2. 在 <body> 內部加入一個主容器 <div class="app-container">，並在其中放置 <h2>監控主機</h2> 與段落標籤 <p>。
3. 觀察右側 Live output 即時編譯並渲染出的 DOM 節點效果。
    `,starterCode:`<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>廠區監控平台</title>
</head>
<body style="margin: 0; padding: 16px; font-family: sans-serif; background: #f8fafc;">
  <!-- 請在下方編寫你的 DOM 結構 -->
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <h2 style="margin-top: 0; color: #0f172a;">A 棟水電監控站</h2>
    <p style="color: #64748b; margin-bottom: 0;">DOM 樹正在瀏覽器記憶體中完成建構與渲染。</p>
  </div>
</body>
</html>`,solutionCode:`<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>廠區監控平台</title>
</head>
<body style="margin: 0; padding: 16px; font-family: sans-serif; background: #f8fafc;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <h2 style="margin-top: 0; color: #0f172a;">A 棟水電監控站</h2>
    <p style="color: #64748b; margin-bottom: 0;">DOM 樹正在瀏覽器記憶體中完成建構與渲染。</p>
  </div>
</body>
</html>`,hints:[`所有在畫面上看得到的 HTML 標籤都必須寫在 <body> 與 </body> 之間。`,`HTML 的標籤嵌套規則直接決定了 DOM 樹的父子兄弟層級關係。`]},{id:`html-02-semantic`,category:`HTML 核心專題篇`,title:`HTML 02. 語意化標籤 (Semantic Tags) 與現代版面結構`,summary:`擺脫濫用 div 的義大利麵標籤結構！掌握 header、nav、main、section、article、aside、footer 的正確版面劃分。`,readTime:`8 分鐘`,concept:`
### 1. 什麼是語意化 (Semantic)？為什麼重要？
在舊時代，工程師喜歡在網頁中到處寫 \`<div class="header">\`、\`<div class="nav">\`、\`<div class="footer">\`。
這被稱為 **"Div 濃湯 (Div Soup)"**：
- 瀏覽器與搜尋引擎爬蟲無法理解哪裡是「核心本文」，哪裡是「選單」或「頁尾」。
- 盲人使用的螢幕閱讀器 (Screen Reader) 無法快速跳轉段落。

HTML5 引入了標準的**語意化標籤**，直接用標籤名稱說明該區塊的用途：

\`\`\`html
<header>  <!-- 頁首：Logo、全站標題、頂部功能列 -->
<nav>     <!-- 導航列：超連結選單項目 -->
<main>    <!-- 全站核心本文：每頁僅能有一個 main -->
<section> <!-- 具有獨立標題的章節主題區塊 -->
<article> <!-- 可獨立被分享、轉載的完整文章或卡片 -->
<aside>   <!-- 側邊欄：次要資訊、目錄、相關推薦 -->
<footer>  <!-- 頁尾：版權宣告、聯絡資訊 -->
\`\`\`

---

### 2. 語意化標籤架構示範
\`\`\`html
<div class="layout">
  <header>
    <h1>儀表板監控系統</h1>
  </header>
  
  <div class="body-wrap">
    <aside>
      <nav>
        <ul>
          <li><a href="#summary">即時概況</a></li>
          <li><a href="#alerts">告警清單</a></li>
        </ul>
      </nav>
    </aside>

    <main>
      <section id="summary">
        <h2>能源耗損摘要</h2>
        <article>
          <h3>冰水主機 1 號</h3>
          <p>運轉負載正常。</p>
        </article>
      </section>
    </main>
  </div>

  <footer>
    <small>Copyright 2026 企業管理系統. All rights reserved.</small>
  </footer>
</div>
\`\`\`

---

### 3. 與 Vue 3 組件架構的對照
在 Vue 3 單文件組件 (.vue) 中：
- 一個 \`AppHeader.vue\` 的內部根節點應優先使用 \`<header>\` 而非 \`<div>\`。
- 一個 \`SidebarNav.vue\` 應使用 \`<aside><nav>...\`。
- 這樣組合出來的最終 SPA 頁面才具有高水準的 SEO 與現代軟工品質。

---

### 4. 權威延伸學習資源
- **MDN Web Docs - HTML 語意化結構指南**：https://developer.mozilla.org/zh-TW/docs/Glossary/Semantics#html_中的語意
- **W3Schools HTML Semantic Elements**：https://www.w3schools.com/html/html5_semantic_elements.asp
    `,task:`
任務指引：
1. 觀察右側編輯器中的結構。
2. 嘗試使用 <header>、<main>、<section> 與 <footer> 取代原本混亂的普通 div。
3. 體驗語意化帶來的代碼清晰度提升！
    `,starterCode:`<div style="font-family: sans-serif; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
  <!-- 頁首語意標籤 -->
  <header style="background: #1e293b; color: white; padding: 12px 16px;">
    <h3 style="margin: 0; font-size: 16px;">廠區營運中控系統</h3>
  </header>

  <!-- 主要內容區 (main) -->
  <main style="padding: 16px; background: #f8fafc;">
    <!-- 獨立區塊 (section) -->
    <section style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
      <h4 style="margin: 0 0 6px 0; color: #0f172a;">全廠即時負載</h4>
      <p style="margin: 0; font-size: 14px; color: #16a34a; font-weight: bold;">目前總功率：1,240 kW (正常)</p>
    </section>
  </main>

  <!-- 頁尾語意標籤 -->
  <footer style="background: #e2e8f0; padding: 8px 16px; font-size: 12px; color: #64748b; text-align: center;">
    系統正常運行中 · 支援標準 HTML5 語意規範
  </footer>
</div>`,solutionCode:`<div style="font-family: sans-serif; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
  <header style="background: #1e293b; color: white; padding: 12px 16px;">
    <h3 style="margin: 0; font-size: 16px;">廠區營運中控系統</h3>
  </header>

  <main style="padding: 16px; background: #f8fafc;">
    <section style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
      <h4 style="margin: 0 0 6px 0; color: #0f172a;">全廠即時負載</h4>
      <p style="margin: 0; font-size: 14px; color: #16a34a; font-weight: bold;">目前總功率：1,240 kW (正常)</p>
    </section>
  </main>

  <footer style="background: #e2e8f0; padding: 8px 16px; font-size: 12px; color: #64748b; text-align: center;">
    系統正常運行中 · 支援標準 HTML5 語意規範
  </footer>
</div>`,hints:[`每個 HTML 頁面通常只允許一個 <main> 元素，用來包裹該頁的核心內容。`,`語意化標籤在 CSS 預設外觀上與 div 大多相同，但對爬蟲、螢幕閱讀器與代碼維護具有無可取代的價值。`]},{id:`html-03-text-media`,category:`HTML 核心專題篇`,title:`HTML 03. 文字階層、超連結安全與現代多媒體資源`,summary:`掌握 h1~h6 階層標準、段落與行內強調，以及 a 標籤的 target/rel 資安防禦機制與 img 的 lazy loading。`,readTime:`7 分鐘`,concept:'\n### 1. 標題與內文排版階層\nHTML 提供了六個等級的標題：\n- `<h1>`：全頁最重要標題。**每頁強烈建議只有一個 `<h1>`**，代表頁面核心宗旨。\n- `<h2>`：各大主分區標題。\n- `<h3>` ~ `<h6>`：次分區與卡片內部標題。\n- `<p>`：內文段落。瀏覽器會自動為段落添加上下外距 (margin)。\n- `<strong>`：重要性加粗強調（不僅是視覺加粗，還具備語意重要度）。\n- `<em>`：語氣加重傾斜。\n\n---\n\n### 2. 超連結 `<a>` 與關鍵資安屬性\n超連結是全球資訊網 (Web) 的根基：\n```html\n<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">\n  前往 Vue.js 官方站點\n</a>\n```\n- **`href`**：目標網址。支援相對路徑 (`./about.html`)、絕對網址 (`https://...`)、或是頁內錨點 (`#section2`)。\n- **`target="_blank"`**：在「新分頁」中開啟。\n- **關鍵資安屬性 `rel="noopener noreferrer"`**：\n  > **防雷警報**：若未加上 `rel="noopener"`，新分頁的頁面可以透過 JavaScript 的 `window.opener` 反向竄改你原本網頁的內容（例如偷偷重導向到釣魚網站，稱為 Tabnabbing 攻擊）！現代前端只要有 `target="_blank"`，務必搭配此屬性。\n\n---\n\n### 3. 圖片 `<img>` 與效能最佳化\n```html\n<img src="https://vuejs.org/images/logo.png" \n     alt="Vue.js 綠色標誌" \n     width="80" \n     height="80" \n     loading="lazy" />\n```\n- **`alt` 屬性不可省略**：當網路失敗圖片破圖時顯示替代文字，也是盲人無障礙輔具必讀資訊。\n- **明確標註 `width` 與 `height`**：防止圖片載入瞬間引發版面劇烈跳動 (CLS, Cumulative Layout Shift)。\n- **`loading="lazy"`**：**瀏覽器原生延遲載入**！圖片在滑鼠滾動到接近視窗範圍時才開始下載，節省行動端網路流量與加速首屏載入。\n\n---\n\n### 4. 權威延伸學習資源\n- **MDN Web Docs - HTML 建立超連結**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content/Creating_hyperlinks\n- **MDN Web Docs - HTML 中的圖片與響應式**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content/Images_in_HTML\n    ',task:`
任務指引：
1. 觀察右側編輯器中的圖文卡片。
2. 嘗試為 <a> 標籤補上 target="_blank" 與 rel="noopener noreferrer"。
3. 觀察 <img> 的 loading="lazy" 與 alt 屬性設定。
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 420px; background: white;">
  <div style="display: flex; gap: 14px; align-items: center;">
    <img 
      src="https://vuejs.org/images/logo.png" 
      alt="Vue 官方標誌" 
      width="60" 
      height="60" 
      loading="lazy" 
      style="display: block;"
    />
    <div>
      <h3 style="margin: 0 0 4px 0; color: #0f172a;">Vue.js 開發框架</h3>
      <p style="margin: 0; font-size: 13px; color: #64748b;">
        <strong>漸進式</strong> JavaScript 現代前端生態系統。
      </p>
    </div>
  </div>

  <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid #f1f5f9;">
    <!-- 請在此處設定具備資安防禦的超連結 -->
    <a 
      href="https://vuejs.org" 
      target="_blank" 
      rel="noopener noreferrer"
      style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: bold;"
    >
      前往官方入門手冊 &rarr;
    </a>
  </div>
</div>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 420px; background: white;">
  <div style="display: flex; gap: 14px; align-items: center;">
    <img 
      src="https://vuejs.org/images/logo.png" 
      alt="Vue 官方標誌" 
      width="60" 
      height="60" 
      loading="lazy" 
      style="display: block;"
    />
    <div>
      <h3 style="margin: 0 0 4px 0; color: #0f172a;">Vue.js 開發框架</h3>
      <p style="margin: 0; font-size: 13px; color: #64748b;">
        <strong>漸進式</strong> JavaScript 現代前端生態系統。
      </p>
    </div>
  </div>

  <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid #f1f5f9;">
    <a 
      href="https://vuejs.org" 
      target="_blank" 
      rel="noopener noreferrer"
      style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: bold;"
    >
      前往官方入門手冊 &rarr;
    </a>
  </div>
</div>`,hints:[`所有跳出原網站的外部連結，都強烈建議加上 rel="noopener noreferrer" 防範安全漏洞。`,`清晰的 alt 說明文字能在圖片載入失敗時提供足夠的替代文字資訊。`]},{id:`html-04-forms-inputs`,category:`HTML 核心專題篇`,title:`HTML 04. 現代表單 (Forms) 與互動控制元件`,summary:`深入探討與使用者互動的核心：input 各種 type、label 綁定、select 下拉選單與原生表單驗證機制。`,readTime:`9 分鐘`,concept:`
### 1. 表單容器 \`<form>\` 與 \`<label>\` 關聯
表單是前端向後端提交資料的基礎入口：
\`\`\`html
<form action="/api/login" method="POST">
  <div class="field">
    <!-- label 的 for 必須對應 input 的 id -->
    <label for="user-email">電子郵件信箱：</label>
    <input type="email" id="user-email" name="email" required />
  </div>
  <button type="submit">登入系統</button>
</form>
\`\`\`
- **\`<label for="...">\` 的重要性**：點擊 label 的文字時，瀏覽器會**自動將游標聚焦到對應的 input**，大幅增加行動裝置上的可點擊觸控熱區！

---

### 2. 核心 \`<input>\` 類型大全
- **\`type="text"\`**：一般單行文字輸入。
- **\`type="password"\`**：密碼遮蔽輸入。
- **\`type="number"\`**：數值輸入（可配合 \`min="0"\`、\`max="100"\`、\`step="0.5"\`）。
- **\`type="checkbox"\`**：多選核取方塊（多個選項可複選）。
- **\`type="radio"\`**：單選圓鈕（相同 \`name\` 屬性的 radio 會互斥，只能單選一個）。
- **\`type="date"\`**：原生日曆日期選擇器。
- **\`type="file"\`**：檔案上傳。

---

### 3. 下拉選單與多行文本
\`\`\`html
<!-- 下拉選單 -->
<select id="device-type" name="type">
  <option value="chiller">冰水主機</option>
  <option value="pump" selected>水泵浦 (預設選中)</option>
  <option value="fan">通風風機</option>
</select>

<!-- 多行文本輸入框 -->
<textarea id="notes" rows="4" placeholder="請填寫故障狀況備註..."></textarea>
\`\`\`

---

### 4. 原生驗證屬性與按鈕類型
- **\`required\`**：必填欄位，未填寫點擊送出時瀏覽器會主動跳出提示並阻斷送出。
- **\`placeholder\`**：輸入框內的淺色預設提示文字。
- **\`disabled\`**：禁用該元件（不可輸入、不可點擊、且表單送出時不會攜帶此值）。
- **\`readonly\`**：唯讀（可以選取反白複製，但不能修改）。
- **按鈕的 \`type\`**：
  - \`type="submit"\`：預設值！點擊會提交整個表單。
  - \`type="button"\`：普通按鈕，僅供 JavaScript 綁定點擊事件，不會觸發頁面刷新提交。

> **對應 Vue 3 的觀念**：
> 在 Vue 中，我們通常會對表單加上 \`@submit.prevent="handleSubmit"\`，阻斷原生 HTML 表單導致整頁重新載入的預設行為，改由 AJAX / Axios 發送非同步請求。

---

### 5. 權威延伸學習資源
- **MDN Web Docs - 你的第一個 HTML 表單**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Forms/Your_first_form
- **W3Schools HTML Input Types**：https://www.w3schools.com/html/html_form_input_types.asp
    `,task:`
任務指引：
1. 觀察右側設備保養報修表單。
2. 嘗試加入一個選取維修優先等級的 <select> 元件，包含「一般」、「緊急」與「重大災損」三個選項。
3. 體驗原生 HTML 表單元件的排版與點擊反應！
    `,starterCode:`<form style="font-family: sans-serif; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; max-width: 440px; background: white;" onsubmit="alert('表單送出成功！'); return false;">
  <h3 style="margin-top: 0; color: #1e293b;">設備維護工單填報</h3>

  <div style="margin-bottom: 12px;">
    <label for="dev-name" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      設備編號 (必填)：
    </label>
    <input 
      type="text" 
      id="dev-name" 
      placeholder="例如：DEV-2026-08" 
      required 
      style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px;"
    />
  </div>

  <div style="margin-bottom: 12px;">
    <label for="priority" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      優先等級：
    </label>
    <select id="priority" style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px; background: white;">
      <option value="low">一般保養</option>
      <option value="urgent" selected>緊急維修 (優先處理)</option>
      <option value="critical">重大停機事故</option>
    </select>
  </div>

  <button 
    type="submit" 
    style="width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;"
  >
    建立工單
  </button>
</form>`,solutionCode:`<form style="font-family: sans-serif; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; max-width: 440px; background: white;" onsubmit="alert('表單送出成功！'); return false;">
  <h3 style="margin-top: 0; color: #1e293b;">設備維護工單填報</h3>

  <div style="margin-bottom: 12px;">
    <label for="dev-name" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      設備編號 (必填)：
    </label>
    <input 
      type="text" 
      id="dev-name" 
      placeholder="例如：DEV-2026-08" 
      required 
      style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px;"
    />
  </div>

  <div style="margin-bottom: 12px;">
    <label for="priority" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      優先等級：
    </label>
    <select id="priority" style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px; background: white;">
      <option value="low">一般保養</option>
      <option value="urgent" selected>緊急維修 (優先處理)</option>
      <option value="critical">重大停機事故</option>
    </select>
  </div>

  <button 
    type="submit" 
    style="width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;"
  >
    建立工單
  </button>
</form>`,hints:[`給 input 加上 required 屬性，點擊提交時若為空，瀏覽器會自動產生防呆提示。`,`label 的 for 屬性與 input 的 id 配對，能極大改善使用者的點擊體驗。`]},{id:`html-05-tables`,category:`HTML 核心專題篇`,title:`HTML 05. 結構化表格 (Table) 與複雜數據展示`,summary:`企業級後台系統最常用的報表核心：完整拆解 thead、tbody、tfoot、跨欄 colspan 與跨列 rowspan 實務技術。`,readTime:`8 分鐘`,concept:`
### 1. 為什麼後台系統少不了 HTML 表格？
雖然現在排版多用 Flexbox 或 Grid，但在展示**大量結構化二維資料**（如設備點檢記錄、電費分攤明細、告警歷史紀錄）時，標準的 \`<table>\` 具有天然的欄寬對齊與無障礙報表解析優勢。

---

### 2. 標準表格完整骨架拆解
嚴格的 HTML 表格必須包含表頭、表身與表尾結構：
\`\`\`html
<table border="1">
  <thead> <!-- 表頭區塊 -->
    <tr>  <!-- table row: 列 -->
      <th>設備名稱</th> <!-- table header: 標題單元格 (預設加粗置中) -->
      <th>運轉狀態</th>
      <th>即時功率</th>
    </tr>
  </thead>
  <tbody> <!-- 表身主資料區塊 -->
    <tr>
      <td>空調主機 #1</td> <!-- table data: 資料單元格 -->
      <td>運轉中</td>
      <td>45 kW</td>
    </tr>
  </tbody>
  <tfoot> <!-- 表尾區塊：常用來放合計或平均值 -->
    <tr>
      <td colspan="2">合計用電量</td>
      <td>45 kW</td>
    </tr>
  </tfoot>
</table>
\`\`\`

---

### 3. 跨欄與跨列高階技巧
- **\`colspan="數字"\`（Column Span 橫向跨欄）**：合併左右多個欄位。例如 \`colspan="3"\` 表示這一個單元格橫跨佔據 3 欄寬度。
- **\`rowspan="數字"\`（Row Span 垂直跨列）**：合併上下多個列位。例如某一棟樓有三個樓層，大樓名稱單元格可設 \`rowspan="3"\`。

---

### 4. 權威延伸學習資源
- **MDN Web Docs - HTML 表格基礎指南**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics
- **W3Schools HTML Tables**：https://www.w3schools.com/html/html_tables.asp
    `,task:`
任務指引：
1. 觀察右側編輯器中的廠區設備狀態數據表。
2. 嘗試在 <tfoot> 中使用 colspan="2" 合併儲存格，並呈現「總計設備數：2 台」。
3. 感受標準 HTML 表格在結構化報表中的清晰層次。
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">廠區耗電量監控日報表</h3>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
    <thead>
      <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 10px;">機台編號</th>
        <th style="padding: 10px;">安裝區域</th>
        <th style="padding: 10px;">運轉電壓 (V)</th>
        <th style="padding: 10px;">狀態</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">CH-001</td>
        <td style="padding: 10px;">B1 機房</td>
        <td style="padding: 10px;">380 V</td>
        <td style="padding: 10px; color: #16a34a; font-weight: bold;">正常運轉</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">PUMP-002</td>
        <td style="padding: 10px;">1F 蓄水池</td>
        <td style="padding: 10px;">220 V</td>
        <td style="padding: 10px; color: #ea580c; font-weight: bold;">保養待機</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="background: #f8fafc; font-weight: bold;">
        <td colspan="3" style="padding: 10px; text-align: right; color: #475569;">已監控機台統計：</td>
        <td style="padding: 10px; color: #0284c7;">2 台設備</td>
      </tr>
    </tfoot>
  </table>
</div>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">廠區耗電量監控日報表</h3>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
    <thead>
      <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 10px;">機台編號</th>
        <th style="padding: 10px;">安裝區域</th>
        <th style="padding: 10px;">運轉電壓 (V)</th>
        <th style="padding: 10px;">狀態</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">CH-001</td>
        <td style="padding: 10px;">B1 機房</td>
        <td style="padding: 10px;">380 V</td>
        <td style="padding: 10px; color: #16a34a; font-weight: bold;">正常運轉</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">PUMP-002</td>
        <td style="padding: 10px;">1F 蓄水池</td>
        <td style="padding: 10px;">220 V</td>
        <td style="padding: 10px; color: #ea580c; font-weight: bold;">保養待機</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="background: #f8fafc; font-weight: bold;">
        <td colspan="3" style="padding: 10px; text-align: right; color: #475569;">已監控機台統計：</td>
        <td style="padding: 10px; color: #0284c7;">2 台設備</td>
      </tr>
    </tfoot>
  </table>
</div>`,hints:[`border-collapse: collapse 是現代 CSS 渲染表格必設屬性，可將相鄰邊框合併為單線條。`,`使用 colspan 橫跨多欄時，對應的那一行需要減少相應數量的 td，以維持總欄數平衡。`]}],xw=[{id:`css-01-selectors-specificity`,category:`CSS 樣式專題篇`,title:`CSS 01. 選擇器大全與權重階層 (Specificity)`,summary:`搞懂樣式為什麼覆蓋不了！掌握標籤、類別、ID、偽類選擇器與 (0,0,0) 權重計分規則，杜絕 !important 濫用。`,readTime:`8 分鐘`,concept:'\n### 1. 選擇器種類清單\nCSS (Cascading Style Sheets，階層樣式表) 的核心在於「選取目標」並「指派樣式」：\n- **標籤選擇器**：`p { ... }`、`button { ... }`（作用範圍最廣）。\n- **類別選擇器 (Class)**：`.card { ... }`、`.btn-primary { ... }`（最推薦的主流用法）。\n- **識別碼選擇器 (ID)**：`#main-header { ... }`（唯一性高，權重過大不建議常用於樣式）。\n- **屬性選擇器**：`input[type="text"] { ... }`。\n- **後代選擇器 vs 子選擇器**：\n  - 後代：`.nav a`（不論第幾層後代都套用）。\n  - 子代：`.nav > li`（僅直接下一層子節點套用）。\n- **動態偽類 (Pseudo-classes)**：\n  - `:hover`（滑鼠游標懸浮移入）。\n  - `:active`（滑鼠按住當下）。\n  - `:focus`（輸入框聚焦）。\n  - `:nth-child(even/odd/2n+1)`（依序號指定）。\n- **偽元素 (Pseudo-elements)**：\n  - `::before` 與 `::after`（免加 HTML 標籤，直接用 CSS 插入裝飾圖示或清除浮動）。\n\n---\n\n### 2. 權重階層計分表 (Specificity)\n當同一個 HTML 元素被多條 CSS 規則命中時，瀏覽器會依據**權重分數**決定誰生效：\n\n| 選擇器類型 | 代表符號 | 權重分數 |\n|---|---|---|\n| 行內樣式 (Inline Style) | `style="..."` | 1000 分 |\n| ID 選擇器 | `#id` | 100 分 |\n| 類別、偽類、屬性選擇器 | `.class`, `:hover`, `[type]` | 10 分 |\n| 標籤與偽元素選擇器 | `div`, `p`, `::before` | 1 分 |\n| 通用選擇器與繼承 | `*`, 繼承樣式 | 0 分 |\n\n> **防雷警報：為什麼不要隨便用 `!important`？**\n> `!important` 會直接跳出計分規則強制最高優先級。一旦專案中濫用 `!important`，未來要修改該樣式時就必須寫出更多 `!important` 來覆蓋，造成「特異性核武器競賽」，最終導致 CSS 完全無法維護！\n\n---\n\n### 3. 權威延伸學習資源\n- **MDN Web Docs - CSS 選擇器基礎指南**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Styling_basics/Basic_selectors\n- **MDN Web Docs - 特異性 (Specificity) 深度解析**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/Specificity\n    ',task:`
任務指引：
1. 觀察右側編輯器中的按鈕與狀態徽章。
2. 嘗試使用類別選擇器與 :hover 偽類，讓按鈕在滑鼠懸浮時呈現深藍色轉變。
3. 觀察權重覆蓋的渲染順序。
    `,starterCode:`<style>
  /* 基礎標籤樣式 (權重 1 分) */
  button {
    font-family: sans-serif;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }

  /* 類別選擇器 (權重 10 分，覆蓋標籤樣式) */
  .action-btn {
    background-color: #2563eb;
    color: #ffffff;
    transition: background-color 0.2s ease;
  }

  /* 偽類選擇器 (權重 10 + 10 = 20 分) */
  .action-btn:hover {
    background-color: #1d4ed8;
  }

  .action-btn:active {
    background-color: #1e40af;
  }
</style>

<div style="padding: 16px; font-family: sans-serif;">
  <h3>選擇器與動態偽類演練</h3>
  <p style="color: #64748b; font-size: 14px;">請將滑鼠移到下方按鈕上體驗 :hover 狀態：</p>
  
  <button class="action-btn">
    啟動冷卻水泵
  </button>
</div>`,solutionCode:`<style>
  button {
    font-family: sans-serif;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }

  .action-btn {
    background-color: #2563eb;
    color: #ffffff;
    transition: background-color 0.2s ease;
  }

  .action-btn:hover {
    background-color: #1d4ed8;
  }

  .action-btn:active {
    background-color: #1e40af;
  }
</style>

<div style="padding: 16px; font-family: sans-serif;">
  <h3>選擇器與動態偽類演練</h3>
  <p style="color: #64748b; font-size: 14px;">請將滑鼠移到下方按鈕上體驗 :hover 狀態：</p>
  
  <button class="action-btn">
    啟動冷卻水泵
  </button>
</div>`,hints:[`給選擇器加上 :hover 可以定義滑鼠經過時的外觀。`,`利用 class 取代 id 撰寫樣式是現代前端的最佳實踐，避免權重過高難以擴充。`]},{id:`css-02-box-model`,category:`CSS 樣式專題篇`,title:`CSS 02. 深度拆解盒子模型 (Box Model) 與外距摺疊`,summary:`所有網頁排版的靈魂！拆解 Content、Padding、Border、Margin，並掌握 box-sizing: border-box 的必備防雷技巧。`,readTime:`8 分鐘`,concept:`
### 1. 什麼是盒子模型 (Box Model)？
在瀏覽器眼中，**每一個 HTML 元素都是一個矩形盒子**。
這個盒子由內向外分為四層：
1. **Content (內容區)**：文字、圖片實際顯示的寬高 (\`width\` / \`height\`)。
2. **Padding (內距)**：內容與邊框之間的留白距離。通常會繼承元素的背景色。
3. **Border (邊框)**：包覆在內距外圍的實體線條 (\`border: 1px solid #ccc\`)。
4. **Margin (外距)**：此盒子與其他相鄰盒子之間的空白隔離距離（透明）。

---

### 2. 最嚴重的排版地雷：\`box-sizing\`
這是所有前端初學者最容易碰到的崩潰痛點：
\`\`\`css
/* 傳統預設模式：content-box */
.box {
  box-sizing: content-box; /* 瀏覽器預設 */
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
\`\`\`
- **傳統計算公式**：
  實際佔用寬度 = \`width(200)\` + \`padding(20*2)\` + \`border(5*2)\` = **250px**！
  你明明設定寬度 200px，元素卻被撐大成 250px，把隔壁的排版硬生生擠出螢幕破版！

\`\`\`css
/* 現代標準解法：border-box */
* {
  box-sizing: border-box;
}
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
\`\`\`
- **border-box 計算公式**：
  實際佔用寬度 = **精確等於 200px**！Padding 與 Border 會自動向內吸收，內容區縮減為 150px，絕對不會撐破外層容器。

---

### 3. 外距摺疊 (Margin Collapse)
當兩個垂直相鄰的區塊元素接觸時，上方盒子的 \`margin-bottom: 20px\` 與下方盒子的 \`margin-top: 30px\` **不會相加變成 50px**，而是會發生「摺疊」，**取最大值 30px**！

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 深入盒模型 (Box Model)**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Styling_basics/Box_model
- **W3Schools CSS Box Model**：https://www.w3schools.com/css/css_boxmodel.asp
    `,task:`
任務指引：
1. 觀察右側兩組卡片：上方是預設的 content-box，下方是 border-box。
2. 調整內距 padding 與邊框 border，觀察為什麼 border-box 能夠牢牢鎖定寬度不撐爆容器！
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: #f1f5f9;">
  <!-- 卡片 1：傳統 content-box (易撐爆破版) -->
  <div style="width: 200px; padding: 20px; border: 4px solid #ef4444; background: white; margin-bottom: 16px; box-sizing: content-box;">
    <div style="font-size: 13px; font-weight: bold; color: #ef4444;">content-box</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體被撐大至 248px！</div>
  </div>

  <!-- 卡片 2：現代 border-box (嚴格鎖定寬度) -->
  <div style="width: 200px; padding: 20px; border: 4px solid #16a34a; background: white; box-sizing: border-box;">
    <div style="font-size: 13px; font-weight: bold; color: #16a34a;">border-box (推薦)</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體維持 200px！</div>
  </div>
</div>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: #f1f5f9;">
  <div style="width: 200px; padding: 20px; border: 4px solid #ef4444; background: white; margin-bottom: 16px; box-sizing: content-box;">
    <div style="font-size: 13px; font-weight: bold; color: #ef4444;">content-box</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體被撐大至 248px！</div>
  </div>

  <div style="width: 200px; padding: 20px; border: 4px solid #16a34a; background: white; box-sizing: border-box;">
    <div style="font-size: 13px; font-weight: bold; color: #16a34a;">border-box (推薦)</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體維持 200px！</div>
  </div>
</div>`,hints:[`在全站 CSS 最開頭加入 * { box-sizing: border-box; } 是現代所有前端專案的標準起手法。`,`Padding 適合用來增加元件內部的點擊範圍與視覺呼吸感。`]},{id:`css-03-flexbox`,category:`CSS 樣式專題篇`,title:`CSS 03. 現代排版王道：Flexbox 彈性佈局徹底搞懂`,summary:`告別 float 與繁複計算！徹底掌握 display: flex、主軸 justify-content、交叉軸 align-items 與 flex-grow 彈性伸縮。`,readTime:`9 分鐘`,concept:"\n### 1. Flexbox 彈性盒子解決了什麼？\n在過去，要讓兩個按鈕左右並排、或把文字在方塊中**垂直置中**，必須寫出複雜且脆弱的 `float: left` 與 `clearfix`。\n**Flexbox（一維彈性排版）** 徹底改變了這一切：只要在父容器宣告 `display: flex`，子元素立刻獲得彈性伸縮自如的排版能力！\n\n---\n\n### 2. 容器屬性 (Flex Container)\n- **`flex-direction`**：主軸方向。\n  - `row`（預設值：由左至右橫向排列）。\n  - `column`（由上至下直向排列）。\n- **`justify-content`**：**沿著主軸 (Main Axis) 的對齊方式**。\n  - `flex-start`：靠起點對齊。\n  - `center`：主軸置中。\n  - `space-between`：兩端貼齊，其餘空間平均分配在中間！\n  - `space-around` / `space-evenly`：間距均分。\n- **`align-items`**：**沿著交叉軸 (Cross Axis) 的對齊方式**。\n  - `center`：**垂直置中**（前端最常使用的終極大招）！\n  - `stretch`（預設值：拉伸高度與容器相同）。\n- **`gap: 16px`**：子元素之間的間距（免去對每個子元素寫 margin-right 的麻煩）。\n- **`flex-wrap: wrap`**：當子元素總寬度超過一行時，允許自動折行。\n\n---\n\n### 3. 項目屬性 (Flex Items)\n- **`flex-grow: 1`**：當容器有剩餘空間時，該子元素吸收剩餘空間的比例。\n- **`flex-shrink: 0`**：當容器空間不足時，禁止該子元素被壓縮變形（例如固定寬度圖示）。\n- **`flex: 1`**：等同於 `flex: 1 1 0%`，讓多個卡片等寬均分整行！\n\n---\n\n### 4. 權威延伸學習資源\n- **MDN Web Docs - Flexbox 核心概念**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Flexbox\n- **CSS-Tricks - A Complete Guide to Flexbox (圖解字典)**：https://css-tricks.com/snippets/css/a-guide-to-flexbox/\n    ",task:`
任務指引：
1. 觀察右側編輯器中的頂部狀態列。
2. 使用 display: flex、justify-content: space-between 與 align-items: center。
3. 達成左側 Logo 與右側狀態按鈕精美兩端對齊與垂直置中！
    `,starterCode:`<div style="font-family: sans-serif; background: #0f172a; color: white; padding: 12px 20px; border-radius: 8px;">
  <!-- Flex 容器 -->
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 12px; height: 12px; border-radius: 50%; background: #10b981;"></div>
      <span style="font-weight: bold; font-size: 15px;">能源監控主機</span>
    </div>

    <div style="display: flex; gap: 8px;">
      <button style="background: #334155; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        重新整理
      </button>
      <button style="background: #2563eb; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        設定參數
      </button>
    </div>
  </div>
</div>`,solutionCode:`<div style="font-family: sans-serif; background: #0f172a; color: white; padding: 12px 20px; border-radius: 8px;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 12px; height: 12px; border-radius: 50%; background: #10b981;"></div>
      <span style="font-weight: bold; font-size: 15px;">能源監控主機</span>
    </div>

    <div style="display: flex; gap: 8px;">
      <button style="background: #334155; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        重新整理
      </button>
      <button style="background: #2563eb; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        設定參數
      </button>
    </div>
  </div>
</div>`,hints:[`justify-content: space-between 能夠將元素分別推向容器的最左端與最右端。`,`align-items: center 是解決所有文字與按鈕垂直對不齊的最佳良方。`]},{id:`css-04-grid`,category:`CSS 樣式專題篇`,title:`CSS 04. 二維網格排版：CSS Grid 實務與儀表板佈局`,summary:`Flexbox 是直線排版，Grid 是棋盤維度！掌握 grid-template-columns、fr 單位與 repeat(auto-fit) 打造自適應監控卡片網格。`,readTime:`9 分鐘`,concept:`
### 1. Flexbox vs CSS Grid 的本質差異
- **Flexbox 是「一維排版」**：一次只處理一條軸線（橫排或直排），適合導航列、按鈕群、卡片內部圖文對齊。
- **CSS Grid 是「二維排版」**：同時控制「欄 (Column)」與「列 (Row)」，像在切棋盤格子，最適合整個系統儀表板 (Dashboard) 與卡片網格。

---

### 2. Grid 核心語法快速掌握
\`\`\`css
.dashboard-grid {
  display: grid;
  /* 定義 3 欄，寬度依比例均分 (1fr) */
  grid-template-columns: 1fr 1fr 1fr;
  /* 欄與列之間的間距 */
  gap: 16px;
}
\`\`\`

#### \`fr\` 彈性分數單位 (Fraction)
\`1fr\` 代表「瓜分容器剩餘空間的 1 等份」。
\`grid-template-columns: 200px 1fr 2fr;\` 表示第一欄固定 200px，剩下寬度分成 3 等份，第二欄分 1 份，第三欄分 2 份。

---

### 3. 一行代碼實現極致響應式：\`repeat(auto-fit, minmax(...))\`
在過去要為手機、平板、桌面寫一堆 \`@media\` 斷點，Grid 提供了革命性的一行語法：
\`\`\`css
.responsive-card-grid {
  display: grid;
  /* 每個卡片最小 240px，最大 1fr 撐滿；空間夠就自動擺多欄，不夠自動折行 */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
\`\`\`
無需寫任何媒體查詢，畫面縮小時自動從 4 欄變成 2 欄，手機上自動變 1 欄！

---

### 4. 權威延伸學習資源
- **MDN Web Docs - CSS Grid 網格佈局教學**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Grids
- **CSS-Tricks - A Complete Guide to CSS Grid**：https://css-tricks.com/snippets/css/complete-guide-grid/
    `,task:`
任務指引：
1. 觀察右側編輯器中的 4 塊設備監控卡片。
2. 透過 display: grid 與 grid-template-columns: repeat(2, 1fr) 實現 2x2 對齊的網格。
3. 觀察卡片在網格中的整齊切齊效果。
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: #f8fafc;">
  <!-- Grid 容器 -->
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冰水主機 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">42.5 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冷卻水塔 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">18.2 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">空壓機組 #02</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">85.0 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">變電站總開關</div>
      <div style="font-size: 20px; font-weight: bold; color: #16a34a; margin-top: 4px;">運轉正常</div>
    </div>
  </div>
</div>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: #f8fafc;">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冰水主機 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">42.5 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冷卻水塔 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">18.2 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">空壓機組 #02</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">85.0 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">變電站總開關</div>
      <div style="font-size: 20px; font-weight: bold; color: #16a34a; margin-top: 4px;">運轉正常</div>
    </div>
  </div>
</div>`,hints:[`repeat(2, 1fr) 等同於 1fr 1fr，會將容器均分成兩欄。`,`gap 屬性能夠讓子網格元件之間保有精確的留白間距。`]},{id:`css-05-position-zindex`,category:`CSS 樣式專題篇`,title:`CSS 05. 定位模式 (Position) 與圖層階層 (z-index)`,summary:`掌握 relative、absolute、fixed、sticky 的定位基準，解析 z-index 為什麼失效與堆疊上下文 (Stacking Context)。`,readTime:`8 分鐘`,concept:"\n### 1. 五大定位屬性 (Position) 比較\n`position` 決定元素在頁面上的空間座標規則：\n- **`static`（預設值）**：正常文件流。此時 `top`, `left`, `z-index` 設定完全無效！\n- **`relative`（相對定位）**：留在正常文件流中佔位，但可以依據自身原本位置產生偏移；**最常用來作為子元素 absolute 的定位基準參考點**！\n- **`absolute`（絕對定位）**：**抽離文件流 (脫離排版)**，依據「最近一層非 static 的祖先元素」做座標定位 (`top/bottom/left/right`)。\n- **`fixed`（固定定位）**：抽離文件流，直接釘在瀏覽器視窗 (Viewport) 特定位置，頁面捲動時固定不動（例如釘在頂部的導航列或右下角回到頂端按鈕）。\n- **`sticky`（黏性定位）**：滾動到指定門檻前像 `relative`，滾動超過時吸附在視窗像 `fixed`（常做表格表頭凍結或文章章節目錄）。\n\n---\n\n### 2. 圖層覆蓋與 `z-index`\n當元素重疊時，`z-index`（數值越大越上層）決定誰蓋在誰上面。\n\n> **防雷警報：為什麼我的 `z-index: 9999` 還是被蓋過去？**\n> 1. `z-index` 只對有定位屬性（非 static）的元素生效。\n> 2. **堆疊上下文 (Stacking Context)**：如同「拼爹原則」！如果父容器 A 的 z-index 只有 1，那麼即使 A 底下的子元素寫 `z-index: 99999`，也永遠無法蓋過同層級中 `z-index: 2` 的父容器 B。\n\n---\n\n### 3. 權威延伸學習資源\n- **MDN Web Docs - CSS 定位模式**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Positioning\n- **MDN Web Docs - 深入理解 z-index 與堆疊上下文**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context\n    ",task:`
任務指引：
1. 觀察右側編輯器中的卡片與告警紅點。
2. 讓外層卡片設為 position: relative，讓內部的告警徽章設為 position: absolute 並定位在右上角 (top: -8px; right: -8px;)。
3. 體會子絕父相 (Absolute in Relative) 的定位魅力。
    `,starterCode:`<div style="font-family: sans-serif; padding: 24px; background: #f1f5f9;">
  <!-- 父容器：作為絕對定位的基準點 (relative) -->
  <div style="position: relative; width: 220px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <!-- 右上角角標：絕對定位 (absolute) -->
    <span style="position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 9999px; box-shadow: 0 2px 4px rgba(239,68,68,0.3);">
      1 則告警
    </span>

    <h4 style="margin: 0 0 6px 0; color: #0f172a;">冷卻水泵 B 組</h4>
    <p style="margin: 0; font-size: 13px; color: #64748b;">水壓過載提醒通報</p>
  </div>
</div>`,solutionCode:`<div style="font-family: sans-serif; padding: 24px; background: #f1f5f9;">
  <div style="position: relative; width: 220px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <span style="position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 9999px; box-shadow: 0 2px 4px rgba(239,68,68,0.3);">
      1 則告警
    </span>

    <h4 style="margin: 0 0 6px 0; color: #0f172a;">冷卻水泵 B 組</h4>
    <p style="margin: 0; font-size: 13px; color: #64748b;">水壓過載提醒通報</p>
  </div>
</div>`,hints:[`口訣「子絕父相」：內部要自由飛翔的元素設 absolute，外層當邊界的容器設 relative。`,`給徽章加上負座標 (如 top: -8px) 即可讓它半凸出於卡片邊界。`]},{id:`css-06-rwd-mediaqueries`,category:`CSS 樣式專題篇`,title:`CSS 06. 響應式網頁設計 (RWD) 與媒體查詢 (Media Queries)`,summary:`一套代碼適應手機、平板與桌機！掌握 Mobile-First 設計哲學、常用斷點切換與 rem/vw 流體排版策略。`,readTime:`9 分鐘`,concept:`
### 1. 什麼是響應式網頁設計 (RWD, Responsive Web Design)？
在行動網路普及前，很多公司會做兩套網站：一套桌面版、一套手機版 (m.domain.com)。這導致維護成本翻倍且資料容易不同步。
現代標準做法是：**單一 HTML 代碼，由 CSS 根據不同螢幕寬度自動切換排版版型**！

---

### 2. 媒體查詢 (Media Queries) 語法
\`\`\`css
/* 1. 基礎預設樣式：以手機版為基礎 (Mobile-First) */
.dashboard-container {
  display: flex;
  flex-direction: column; /* 手機上單欄直排 */
  padding: 12px;
}

/* 2. 平板斷點：螢幕寬度 >= 768px */
@media (min-width: 768px) {
  .dashboard-container {
    flex-direction: row; /* 平板以上切換為左右橫排 */
    padding: 24px;
  }
}

/* 3. 桌面大螢幕斷點：螢幕寬度 >= 1024px */
@media (min-width: 1024px) {
  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto; /* 水平居中 */
  }
}
\`\`\`

---

### 3. 現代相對單位
- **\`rem\`**：相對於 \`<html>\` 根元素的字級大小（預設 1rem = 16px）。使用者在手機調整無障礙字體時會自動等比放大，比寫死 \`px\` 更親和。
- **\`vw\` / \`vh\`**：視窗寬度 (Viewport Width) 與高度的百分比（100vw = 螢幕滿寬）。
- **\`clamp(最小值, 理想值, 最大值)\`**：例如 \`font-size: clamp(14px, 2.5vw, 24px)\`，字體隨螢幕寬度平滑流體縮放，且不低於 14px、不高於 24px。

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 響應式網頁設計基礎**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Responsive_Design
- **MDN Web Docs - 使用媒體查詢 (Media Queries)**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_media_queries/Using_media_queries
    `,task:`
任務指引：
1. 觀察右側編輯器中的響應式佈局代碼。
2. 了解 @media (min-width: 600px) 如何在寬度足夠時將單欄切換為雙欄並排。
3. 體會 Mobile-First（手機優先）的優雅之處。
    `,starterCode:`<style>
  .rwd-demo-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: sans-serif;
  }

  .rwd-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 16px;
    flex: 1;
  }

  /* 平板與桌面以上：橫向並排 (雙欄) */
  @media (min-width: 500px) {
    .rwd-demo-box {
      flex-direction: row;
    }
  }
</style>

<div style="background: #f8fafc; padding: 16px;">
  <p style="font-size: 13px; color: #64748b; margin-top: 0;">
    拉動視窗或調整寬度時，下方卡片會在單欄直排與雙欄橫排之間自動切換：
  </p>

  <div class="rwd-demo-box">
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">即時監控數據區</h4>
      <span style="font-size: 22px; font-weight: bold; color: #2563eb;">238 V</span>
    </div>
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">今日累積發電量</h4>
      <span style="font-size: 22px; font-weight: bold; color: #16a34a;">1,420 kWh</span>
    </div>
  </div>
</div>`,solutionCode:`<style>
  .rwd-demo-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: sans-serif;
  }

  .rwd-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 16px;
    flex: 1;
  }

  @media (min-width: 500px) {
    .rwd-demo-box {
      flex-direction: row;
    }
  }
</style>

<div style="background: #f8fafc; padding: 16px;">
  <p style="font-size: 13px; color: #64748b; margin-top: 0;">
    拉動視窗或調整寬度時，下方卡片會在單欄直排與雙欄橫排之間自動切換：
  </p>

  <div class="rwd-demo-box">
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">即時監控數據區</h4>
      <span style="font-size: 22px; font-weight: bold; color: #2563eb;">238 V</span>
    </div>
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">今日累積發電量</h4>
      <span style="font-size: 22px; font-weight: bold; color: #16a34a;">1,420 kWh</span>
    </div>
  </div>
</div>`,hints:[`Mobile-First 思維是：先寫手機版樣式，再使用 min-width 漸進增強為平板與桌機。`,`HTML <head> 中的 meta viewport 宣告是所有 RWD 效果得以在手機上生效的前提。`]},{id:`css-07-transitions-variables`,category:`CSS 樣式專題篇`,title:`CSS 07. 現代動態轉場、變形與 CSS 設計變數`,summary:`打造極致視覺質感！靈活運用 CSS 自訂變數 (CSS Variables)、transition 平滑轉場與 @keyframes 關鍵影格動畫。`,readTime:`8 分鐘`,concept:`
### 1. 什麼是 CSS 自訂變數 (CSS Variables)？
在以前，若要更換全站主色，必須在幾十個 CSS 檔案中手動搜尋取代 \`#2563eb\`。
現代 CSS 支援原生的自訂變數：
\`\`\`css
:root {
  /* 定義全局設計代碼 (Design Tokens) */
  --primary-color: #2563eb;
  --bg-card: #ffffff;
  --radius-md: 8px;
}

[data-theme="dark"] {
  /* 一鍵切換深色主題！ */
  --bg-card: #1e293b;
  --text-main: #f8fafc;
}

.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
}
\`\`\`

---

### 2. 平滑過渡 (Transitions)
不使用 JavaScript，僅靠 CSS 就能讓狀態改變具有絲滑動態：
\`\`\`css
.btn {
  background-color: var(--primary-color);
  /* 轉場動畫：作用屬性、耗時、緩動曲線 */
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  /* 搭配 transform 啟用 GPU 硬體加速，不卡頓 */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
\`\`\`

---

### 3. 關鍵影格動畫 (@keyframes)
讓元素自主循環播放動畫（如設備運轉呼吸燈）：
\`\`\`css
@keyframes pulse-light {
  0% {
    opacity: 0.4;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.9);
  }
}

.status-indicator {
  animation: pulse-light 2s infinite ease-in-out;
}
\`\`\`

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 使用 CSS 自訂屬性 (變數)**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
- **MDN Web Docs - CSS 動畫指南 (@keyframes)**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_animations/Using_CSS_animations
    `,task:`
任務指引：
1. 觀察右側編輯器中的儀表板狀態指示燈。
2. 體驗透過 @keyframes 動態呼吸燈與 CSS 變數切換打造的現代工控質感介面！
    `,starterCode:`<style>
  :root {
    --brand-blue: #0284c7;
    --running-green: #16a34a;
  }

  @keyframes breathing {
    0% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
    }
  }

  .device-monitor-card {
    font-family: sans-serif;
    padding: 16px;
    background: #0f172a;
    color: white;
    border-radius: 8px;
    max-width: 320px;
  }

  .online-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--running-green);
    display: inline-block;
    animation: breathing 2s infinite;
  }
</style>

<div class="device-monitor-card">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; font-size: 14px;">1 號冰水泵浦</span>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span class="online-indicator"></span>
      <span style="font-size: 12px; color: #94a3b8;">即時連線中</span>
    </div>
  </div>
</div>`,solutionCode:`<style>
  :root {
    --brand-blue: #0284c7;
    --running-green: #16a34a;
  }

  @keyframes breathing {
    0% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
    }
  }

  .device-monitor-card {
    font-family: sans-serif;
    padding: 16px;
    background: #0f172a;
    color: white;
    border-radius: 8px;
    max-width: 320px;
  }

  .online-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--running-green);
    display: inline-block;
    animation: breathing 2s infinite;
  }
</style>

<div class="device-monitor-card">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; font-size: 14px;">1 號冰水泵浦</span>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span class="online-indicator"></span>
      <span style="font-size: 12px; color: #94a3b8;">即時連線中</span>
    </div>
  </div>
</div>`,hints:[`CSS Variables (--名稱) 可在任何地方透過 var(--名稱) 取用，實現全站主題色統一管理。`,`使用 transform 與 opacity 動畫能善用硬體加速，比頻繁修改 top、left 或 margin 更流暢不卡頓。`]}],Sw=[{id:`js-01-variables-scope`,category:`JavaScript 邏輯專題篇`,title:`JS 01. 現代變數與作用域：const、let、型別與 Hoisting`,summary:`告別 var 的痛苦陷阱！深入剖析原始型別與引用型別、暫時性死區 (TDZ) 與區塊級作用域 (Block Scope)。`,readTime:`9 分鐘`,concept:"\n### 1. 現代前端變數黃金法則：const 優先，let 次之，完全捨棄 var\n在 2015 年 (ES6) 之前，JavaScript 只有 `var`：\n```javascript\n// 舊時代 var 的兩大地雷：\n// 1. 變數提升 (Hoisting)\nconsole.log(x); // 不會報錯！而是輸出 undefined，因為宣告被偷偷拉到最頂端\nvar x = 10;\n\n// 2. 沒有區塊作用域 (Block Scope)\nif (true) {\n  var secret = 'abc';\n}\nconsole.log(secret); // 'abc'！變數直接洩漏到區塊外面，極易引發全局污染\n```\n\n#### 現代最佳實務：\n- **`const`（常數）**：**預設 90% 的情況都該使用它**！宣告後不可重新指派（Assignment）。注意：物件與陣列用 `const` 宣告，其內部屬性仍可修改。\n- **`let`（可變變數）**：僅在確定變數後續會被重新賦值時使用（例如 `for` 迴圈計數器、累積數值）。\n- **暫時性死區 (TDZ, Temporal Dead Zone)**：`let` 與 `const` 在宣告之前存取會直接拋出 `ReferenceError`，徹底杜絕舊時代未宣告先使用的不良壞習慣！\n\n---\n\n### 2. JavaScript 的兩大型別體系\n1. **原始型別 (Primitives)**：按值傳遞 (Pass by Value)。\n   - `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`。\n2. **物件引用型別 (Objects / References)**：按記憶體位址傳遞 (Pass by Reference)。\n   - `Object`, `Array`, `Function`。\n   ```javascript\n   const a = { count: 1 };\n   const b = a; // 複製的是同一個記憶體位址！\n   b.count = 2;\n   console.log(a.count); // 2！a 的內容也被修改了\n   ```\n\n> **對應 Vue 3 的核心觀念**：\n> 為什麼 Vue 3 的響應式宣告通常寫 `const count = ref(0)`？\n> 因為 `ref` 回傳的是一個封裝物件，我們修改的是它的內部屬性 `count.value = 1`，該物件位址並沒有改變，因此永遠可以使用 `const` 宣告！\n\n---\n\n### 3. 權威延伸學習資源\n- **MDN Web Docs - JavaScript 變數與資料型別**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures\n- **JavaScript.info - 變數宣告與作用域 (中文推薦)**：https://zh.javascript.info/variables\n    ",task:`
任務指引：
1. 觀察右側編輯器中的 JavaScript 變數運算邏輯。
2. 點擊「執行計算」按鈕，觀察 const 常數與 let 可變變數的運算結果。
3. 體會 const 帶來的代碼穩定性！
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">變數與作用域演練</h3>
  
  <button id="calc-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    執行能源消耗累計
  </button>

  <div id="output" style="margin-top: 14px; padding: 10px; background: #f8fafc; border-radius: 4px; font-size: 14px; color: #334155;">
    等待執行計算...
  </div>
</div>

<script>
  document.getElementById('calc-btn').addEventListener('click', () => {
    // 使用 const 定義固定費率 (不可被竄改)
    const UNIT_PRICE = 3.5; // 每度電 3.5 元
    
    // 使用 let 定義隨計時累加的用電度數
    let totalKwh = 120;
    totalKwh += 80; // 模擬產生新用電

    const totalCost = totalKwh * UNIT_PRICE;

    document.getElementById('output').innerHTML = 
      '累積度數：<strong>' + totalKwh + ' kWh</strong><br>' +
      '電費單價：' + UNIT_PRICE + ' 元/度<br>' +
      '總計金額：<strong style="color: #16a34a;">' + totalCost + ' 元</strong>';
  });
<\/script>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">變數與作用域演練</h3>
  
  <button id="calc-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    執行能源消耗累計
  </button>

  <div id="output" style="margin-top: 14px; padding: 10px; background: #f8fafc; border-radius: 4px; font-size: 14px; color: #334155;">
    等待執行計算...
  </div>
</div>

<script>
  document.getElementById('calc-btn').addEventListener('click', () => {
    const UNIT_PRICE = 3.5;
    let totalKwh = 120;
    totalKwh += 80;
    const totalCost = totalKwh * UNIT_PRICE;

    document.getElementById('output').innerHTML = 
      '累積度數：<strong>' + totalKwh + ' kWh</strong><br>' +
      '電費單價：' + UNIT_PRICE + ' 元/度<br>' +
      '總計金額：<strong style="color: #16a34a;">' + totalCost + ' 元</strong>';
  });
<\/script>`,hints:[`所有不需要被重新指派的變數，一律使用 const 宣告，這是現代 JavaScript 的核心標準。`,`let 具備區塊級作用域，不會像 var 一樣洩漏到外部甚至覆蓋 window 全域變數。`]},{id:`js-02-destructuring-spread`,category:`JavaScript 邏輯專題篇`,title:`JS 02. 解構賦值 (Destructuring) 與展開運算子 (Spread/Rest)`,summary:`優雅處理 API 回傳資料！掌握物件與陣列解構、預設值指派，以及 ... 展開運算子的淺拷貝與合併技巧。`,readTime:`9 分鐘`,concept:`
### 1. 什麼是解構賦值 (Destructuring Assignment)？
在傳統寫法中，要從後端回傳的物件取出資料，需要寫好幾行重複宣告：
\`\`\`javascript
// 傳統寫法
const user = res.data.user;
const name = user.name;
const role = user.role;
const email = user.email;

// 現代解構賦值寫法：一行完成！
const { name, role, email, status = 'active' } = res.data.user;
\`\`\`

#### 物件解構高階技巧：
- **預設值 (Default Values)**：若該屬性為 \`undefined\`，自動套用預設值（例如上例 \`status = 'active'\`）。
- **重新命名 (Aliasing)**：\`const { name: userName } = res.data;\`，將 \`name\` 重新命名為 \`userName\` 避免變數命名衝突。

#### 陣列解構：
\`\`\`javascript
const [firstDevice, secondDevice] = ['冷卻塔', '空調泵'];
\`\`\`

---

### 2. 展開運算子 (Spread / Rest Operator: \`...\`)
三個點點 \`...\` 是現代前端寫法中最常見的符號：
1. **陣列展開與合併**：
   \`\`\`javascript
   const listA = ['機台1', '機台2'];
   const listB = ['機台3', '機台4'];
   const allList = [...listA, ...listB]; // ['機台1', '機台2', '機台3', '機台4']
   \`\`\`
2. **物件淺拷貝與屬性覆蓋**：
   \`\`\`javascript
   const originalConfig = { host: '192.168.1.1', port: 8080, retry: 3 };
   // 快速建立新物件，並只覆蓋特定屬性
   const newConfig = { ...originalConfig, port: 9000 };
   \`\`\`
3. **Rest 剩餘參數**：收集其餘所有傳入參數。
   \`\`\`javascript
   function logAlarms(primaryAlarm, ...otherAlarms) {
     console.log('主要告警：', primaryAlarm);
     console.log('其餘附帶告警：', otherAlarms);
   }
   \`\`\`

---

### 3. 權威延伸學習資源
- **MDN Web Docs - 解構賦值語法詳解**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- **MDN Web Docs - 展開語法 (Spread syntax)**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    `,task:`
任務指引：
1. 觀察右側編輯器中的 API 回傳處理範例。
2. 點擊「解析設備資料」按鈕，體驗解構賦值如何精準抽取出屬性與套用預設值！
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">解構賦值與展開運算實務</h3>

  <button id="extract-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    解析後端設備詳細資料
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行解構...
  </div>
</div>

<script>
  // 模擬後端回傳的複雜監控資料
  const apiResponse = {
    code: 200,
    payload: {
      deviceId: 'DEV-8821',
      spec: {
        model: 'CH-Turbo-500',
        voltage: 380
      },
      tags: ['空調系統', '重大資產']
    }
  };

  document.getElementById('extract-btn').addEventListener('click', () => {
    // 透過多層物件解構，直接抽取核心數值
    const { deviceId, spec: { model, voltage }, location = 'B1 機房 (預設值)' } = apiResponse.payload;

    document.getElementById('output').innerHTML = 
      '設備編號：<strong>' + deviceId + '</strong><br>' +
      '機型型號：' + model + '<br>' +
      '額定電壓：' + voltage + ' V<br>' +
      '安裝位置：<span style="color: #2563eb;">' + location + '</span>';
  });
<\/script>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">解構賦值與展開運算實務</h3>

  <button id="extract-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    解析後端設備詳細資料
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行解構...
  </div>
</div>

<script>
  const apiResponse = {
    code: 200,
    payload: {
      deviceId: 'DEV-8821',
      spec: {
        model: 'CH-Turbo-500',
        voltage: 380
      },
      tags: ['空調系統', '重大資產']
    }
  };

  document.getElementById('extract-btn').addEventListener('click', () => {
    const { deviceId, spec: { model, voltage }, location = 'B1 機房 (預設值)' } = apiResponse.payload;

    document.getElementById('output').innerHTML = 
      '設備編號：<strong>' + deviceId + '</strong><br>' +
      '機型型號：' + model + '<br>' +
      '額定電壓：' + voltage + ' V<br>' +
      '安裝位置：<span style="color: #2563eb;">' + location + '</span>';
  });
<\/script>`,hints:[`解構賦值可以深層嵌套：{ spec: { model } } 能直接把 spec 裡面的 model 抽出來。`,`展開運算子 ... 是建立淺拷貝、避免直接修改原始物件的重要工具。`]},{id:`js-03-functions-this`,category:`JavaScript 邏輯專題篇`,title:`JS 03. 函式全解析：箭頭函式、閉包 (Closure) 與 this 之謎`,summary:`搞懂箭頭函式為什麼沒有自己的 this，以及閉包如何封裝私有狀態，掃除 JavaScript 最棘手的面試與重構難題。`,readTime:`10 分鐘`,concept:`
### 1. 傳統函式 vs 現代箭頭函式 (Arrow Functions)
\`\`\`javascript
// 傳統函式宣告
function multiply(a, b) {
  return a * b;
}

// 箭頭函式簡化版：單行表達式自動 return
const multiply = (a, b) => a * b;
\`\`\`

#### 箭頭函式的重大特性差異：
1. **語意簡潔**：單一參數可省括號，單行回傳可省 \`return\` 與花括號。
2. **沒有自己的 \`this\`**：
   - 傳統函式中的 \`this\` 是**動態綁定的**，取決於「是誰呼叫它」（例如在 setTimeout 中常變成 window 或 undefined，導致很多舊程式碼到處寫 \`var self = this\` 或 \`var _that = this\`）。
   - **箭頭函式的 \`this\` 是詞法綁定 (Lexical \`this\`)**：直接繼承自外部定義時的作用域，永遠不會莫名其妙變質！

---

### 2. 什麼是閉包 (Closure)？
**閉包是：一個函式有能力記住並存取其被宣告時所在的外部詞法作用域，即使該外部函式已經執行完畢。**

\`\`\`javascript
function createCounter(initialValue) {
  let count = initialValue; // 私有變數，外部無法直接竄改！

  return {
    increment: () => ++count,
    getValue: () => count
  };
}

const deviceCounter = createCounter(10);
console.log(deviceCounter.increment()); // 11
console.log(deviceCounter.count); // undefined (安全封裝！)
\`\`\`

> **對應 Vue 3 的核心觀念**：
> Vue 3 的 Composition API（如自訂 \`useDeviceList()\` Composable）本質就是大量運用**閉包機制**，在函式內維護響應式狀態並匯出操作方法！

---

### 3. 權威延伸學習資源
- **MDN Web Docs - 箭頭函式語法**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- **MDN Web Docs - 深入理解閉包 (Closures)**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures
    `,task:`
任務指引：
1. 觀察右側編輯器中使用閉包所建立的獨立計數器工廠函式。
2. 點擊「累加泵浦 A」與「累加泵浦 B」按鈕。
3. 體驗閉包如何讓兩個設備的運轉時數各自獨立封裝、互不干擾！
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">閉包獨立狀態封裝實作</h3>

  <div style="display: flex; gap: 12px; margin-bottom: 14px;">
    <button id="pump-a-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 A 運轉 +1 小時
    </button>
    <button id="pump-b-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 B 運轉 +1 小時
    </button>
  </div>

  <div id="status-panel" style="padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊按鈕增加運轉時數...
  </div>
</div>

<script>
  // 閉包工廠函式
  function createHourTracker(deviceName) {
    let hours = 0; // 私有狀態
    
    return function() {
      hours += 1;
      return deviceName + ' 累積運轉：' + hours + ' 小時';
    };
  }

  // 建立兩個完全獨立的閉包實例
  const trackPumpA = createHourTracker('冷卻泵 A');
  const trackPumpB = createHourTracker('備用泵 B');

  const panel = document.getElementById('status-panel');

  document.getElementById('pump-a-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #2563eb; font-weight: bold;">' + trackPumpA() + '</span>';
  });

  document.getElementById('pump-b-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #0284c7; font-weight: bold;">' + trackPumpB() + '</span>';
  });
<\/script>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">閉包獨立狀態封裝實作</h3>

  <div style="display: flex; gap: 12px; margin-bottom: 14px;">
    <button id="pump-a-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 A 運轉 +1 小時
    </button>
    <button id="pump-b-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 B 運轉 +1 小時
    </button>
  </div>

  <div id="status-panel" style="padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊按鈕增加運轉時數...
  </div>
</div>

<script>
  function createHourTracker(deviceName) {
    let hours = 0;
    
    return function() {
      hours += 1;
      return deviceName + ' 累積運轉：' + hours + ' 小時';
    };
  }

  const trackPumpA = createHourTracker('冷卻泵 A');
  const trackPumpB = createHourTracker('備用泵 B');
  const panel = document.getElementById('status-panel');

  document.getElementById('pump-a-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #2563eb; font-weight: bold;">' + trackPumpA() + '</span>';
  });

  document.getElementById('pump-b-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #0284c7; font-weight: bold;">' + trackPumpB() + '</span>';
  });
<\/script>`,hints:[`箭頭函式繼承外部 this，在 Vue 組件中的 setTimeout 內使用箭頭函式，可以安全取用 this 或外部變數。`,`閉包允許函式擁有私有變數，是現代前端狀態管理的重要基礎。`]},{id:`js-04-array-methods`,category:`JavaScript 邏輯專題篇`,title:`JS 04. 陣列高階方法大全 (Functional Programming)`,summary:`前端處理資料的最強利器：全面掌握 map、filter、reduce、find、some、every 與鏈式調用實戰技巧。`,readTime:`10 分鐘`,concept:"\n### 1. 為什麼現代前端不用傳統 for 迴圈處理陣列？\n傳統 `for (let i = 0; i < len; i++)` 寫法冗長、容易產生陣列越界 (`i <= len`) 錯誤，且程式碼充斥著索引計算，模糊了商業運算核心。\n現代 JavaScript 提倡**函式庫式程式設計 (Functional Programming)**，不直接修改原陣列（純函式思維）：\n\n---\n\n### 2. 六大陣列高階方法速查表\n1. **`map(fn)`（投影轉換）**：長度不變，每個元素經過處理後回傳全新陣列。\n   ```javascript\n   const names = devices.map(d => d.name);\n   ```\n2. **`filter(fn)`（條件過濾）**：回傳符合條件 (true) 的元素組成的新陣列。\n   ```javascript\n   const alerts = devices.filter(d => d.status === 'alarm');\n   ```\n3. **`find(fn)`（尋找單筆）**：回傳「第一個」符合條件的項目，若無回傳 `undefined`。\n   ```javascript\n   const target = devices.find(d => d.id === 'DEV-01');\n   ```\n4. **`reduce(fn, init)`（摺疊歸納）**：最強大的聚合金鑰！將陣列累算為單一數值、物件或總計。\n   ```javascript\n   // 計算全廠總發電功率\n   const totalPower = devices.reduce((sum, d) => sum + d.power, 0);\n   ```\n5. **`some(fn)`**：是否有任一項目符合？回傳布林值 (`true / false`)。\n6. **`every(fn)`**：是否全部項目都符合？回傳布林值。\n\n---\n\n### 3. 鏈式調用 (Method Chaining)\n多個方法可以像流水線一樣一氣呵成：\n```javascript\n// 取得所有「正常運轉中」設備的「總發電功率」\nconst activeTotalPower = devices\n  .filter(d => d.status === 'running')\n  .map(d => d.power)\n  .reduce((acc, curr) => acc + curr, 0);\n```\n\n---\n\n### 4. 權威延伸學習資源\n- **MDN Web Docs - 陣列方法手冊**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array\n- **JavaScript.info - 陣列方法教學**：https://zh.javascript.info/array-methods\n    ",task:`
任務指引：
1. 觀察右側編輯器中的設備資料清單。
2. 點擊「篩選並加總」按鈕，執行 filter 與 reduce 鏈式運算。
3. 觀察函式庫式處理資料的高效與清晰。
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">陣列高階方法實戰統計</h3>

  <button id="calc-btn" style="padding: 8px 14px; background: #16a34a; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    統計「運轉中」設備總耗電功率
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行運算...
  </div>
</div>

<script>
  const plantDevices = [
    { name: '1 號空調主機', status: 'running', power: 45 },
    { name: '2 號空調主機', status: 'stopped', power: 0 },
    { name: '1 號冷卻泵', status: 'running', power: 15 },
    { name: '排氣風機 A', status: 'running', power: 8 },
    { name: '備用水泵 B', status: 'maintenance', power: 0 }
  ];

  document.getElementById('calc-btn').addEventListener('click', () => {
    // 鏈式呼叫：過濾 running -> 計算累計總功率
    const runningDevices = plantDevices.filter(d => d.status === 'running');
    const totalKw = runningDevices.reduce((sum, d) => sum + d.power, 0);

    document.getElementById('output').innerHTML = 
      '運轉設備數量：<strong>' + runningDevices.length + ' 台</strong><br>' +
      '設備名稱：' + runningDevices.map(d => d.name).join('、') + '<br>' +
      '即時總功率：<strong style="color: #16a34a; font-size: 16px;">' + totalKw + ' kW</strong>';
  });
<\/script>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">陣列高階方法實戰統計</h3>

  <button id="calc-btn" style="padding: 8px 14px; background: #16a34a; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    統計「運轉中」設備總耗電功率
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行運算...
  </div>
</div>

<script>
  const plantDevices = [
    { name: '1 號空調主機', status: 'running', power: 45 },
    { name: '2 號空調主機', status: 'stopped', power: 0 },
    { name: '1 號冷卻泵', status: 'running', power: 15 },
    { name: '排氣風機 A', status: 'running', power: 8 },
    { name: '備用水泵 B', status: 'maintenance', power: 0 }
  ];

  document.getElementById('calc-btn').addEventListener('click', () => {
    const runningDevices = plantDevices.filter(d => d.status === 'running');
    const totalKw = runningDevices.reduce((sum, d) => sum + d.power, 0);

    document.getElementById('output').innerHTML = 
      '運轉設備數量：<strong>' + runningDevices.length + ' 台</strong><br>' +
      '設備名稱：' + runningDevices.map(d => d.name).join('、') + '<br>' +
      '即時總功率：<strong style="color: #16a34a; font-size: 16px;">' + totalKw + ' kW</strong>';
  });
<\/script>`,hints:[`map 與 filter 不會修改原本的陣列，而是回傳一個全新的運算結果陣列。`,`reduce 的第二個參數是初始值 (Initial Value)，統計數值時通常傳入 0。`]},{id:`js-05-dom-events`,category:`JavaScript 邏輯專題篇`,title:`JS 05. DOM 操作與事件處理機制 (Event Delegation)`,summary:`理解事件是如何在網頁中傳遞的！掌握事件冒泡 (Bubbling)、事件委託 (Delegation) 與 preventDefault 實務。`,readTime:`9 分鐘`,concept:`
### 1. 原生 DOM 元素選取與事件監聽
\`\`\`javascript
// 現代標準選取器 (取代 getElementById 與 querySelectorAll)
const submitBtn = document.querySelector('.submit-btn');
const allCards = document.querySelectorAll('.card');

// 綁定事件監聽器
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // 阻斷預設行為（如表單自動整頁跳轉）
  event.stopPropagation(); // 阻止事件向上冒泡
});
\`\`\`

---

### 2. 什麼是事件冒泡 (Event Bubbling)？
當你點擊一個按鈕時，點擊事件不是只發生在按鈕身上！
它會由內向外像氣泡一樣依序浮升傳遞：
\`\`\`
按鈕 (<button>) -> 卡片 (<div>) -> 內容區 (<main>) -> <body> -> <html> -> window
\`\`\`

---

### 3. 高效效能大招：事件委託 (Event Delegation)
**痛點**：假設監控系統有 1000 個設備清單項目，如果你為每個 \`<li>\` 都綁定一個 \`addEventListener\`，會耗費大量的瀏覽器記憶體！

**解法**：**只在父層 \`<ul>\` 綁定一個事件監聽器**，利用事件冒泡捕獲點擊目標：
\`\`\`javascript
const list = document.querySelector('#device-list');

list.addEventListener('click', (e) => {
  // 利用 e.target 判斷點擊的是不是目標按鈕
  if (e.target.matches('.delete-btn')) {
    const id = e.target.dataset.id;
    console.log('刪除設備編號：', id);
  }
});
\`\`\`

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 事件介紹與事件流**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Scripting/Events
- **JavaScript.info - 事件冒泡與捕獲 (超生動圖解)**：https://zh.javascript.info/bubbling-and-capturing
    `,task:`
任務指引：
1. 觀察右側編輯器中的事件委託實例。
2. 點擊清單中的各個「切換開關」按鈕。
3. 體會為什麼只要在父容器 ul 綁定一個事件監聽器，就能管理所有子項目！
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">事件委託 (Event Delegation) 實戰</h3>
  <p style="font-size: 13px; color: #64748b;">全清單僅在父層 UL 綁定單一監聽器：</p>

  <ul id="device-ul" style="list-style: none; padding: 0; margin: 0;">
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>水處理機組 #1</span>
      <button class="toggle-btn" data-name="水處理機組 #1" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>空調排風扇 #2</span>
      <button class="toggle-btn" data-name="空調排風扇 #2" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;">
      <span>照明回路 #3</span>
      <button class="toggle-btn" data-name="照明回路 #3" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
  </ul>

  <div id="log-box" style="margin-top: 14px; padding: 10px; background: #0f172a; color: #38bdf8; border-radius: 4px; font-size: 13px;">
    點擊按鈕查看事件捕獲...
  </div>
</div>

<script>
  // 僅在父層綁定一次監聽
  document.getElementById('device-ul').addEventListener('click', (event) => {
    // 檢查點擊目標是否為按鈕
    if (event.target && event.target.classList.contains('toggle-btn')) {
      const devName = event.target.getAttribute('data-name');
      document.getElementById('log-box').innerText = '事件冒泡成功！已點擊：' + devName;
    }
  });
<\/script>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">事件委託 (Event Delegation) 實戰</h3>
  <p style="font-size: 13px; color: #64748b;">全清單僅在父層 UL 綁定單一監聽器：</p>

  <ul id="device-ul" style="list-style: none; padding: 0; margin: 0;">
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>水處理機組 #1</span>
      <button class="toggle-btn" data-name="水處理機組 #1" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>空調排風扇 #2</span>
      <button class="toggle-btn" data-name="空調排風扇 #2" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;">
      <span>照明回路 #3</span>
      <button class="toggle-btn" data-name="照明回路 #3" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
  </ul>

  <div id="log-box" style="margin-top: 14px; padding: 10px; background: #0f172a; color: #38bdf8; border-radius: 4px; font-size: 13px;">
    點擊按鈕查看事件捕獲...
  </div>
</div>

<script>
  document.getElementById('device-ul').addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('toggle-btn')) {
      const devName = event.target.getAttribute('data-name');
      document.getElementById('log-box').innerText = '事件冒泡成功！已點擊：' + devName;
    }
  });
<\/script>`,hints:[`事件委託避免了為數百個動態產生的 DOM 子節點重複綁定監聽器。`,`e.target 指向實際觸發點擊的那個最小子節點。`]},{id:`js-06-async-promise`,category:`JavaScript 邏輯專題篇`,title:`JS 06. 非同步核心攻略：Promise 與 async / await`,summary:`從回呼地獄 (Callback Hell) 到優雅同步寫法！深入理解非同步生命週期、Promise 三態與 Promise.all 並發。`,readTime:`10 分鐘`,concept:`
### 1. 為什麼 JavaScript 需要非同步 (Asynchronous)？
JavaScript 是**單線程 (Single Thread)** 的語言，同一時間只能做一件事。
如果向伺服器請求資料需要耗時 2 秒，如果採用「同步」方式，整個網頁瀏覽器會被卡死 2 秒，使用者滑鼠點不動、畫面凍結！
因此，網路請求、定時器 (\`setTimeout\`) 全都以「非同步」方式執行。

---

### 2. Promise 的三種狀態
Promise 是一個用來代表「未來某個時間點會完成或失敗的操作」的承諾物件：
- **\`pending\`（進行中）**：初始狀態，正在等待伺服器回應。
- **\`fulfilled\` / \`resolved\`（已成功）**：操作成功完成，攜帶成功資料。
- **\`rejected\`（已拒絕/失敗）**：操作失敗，攜帶錯誤訊息。

\`\`\`javascript
// 傳統 Promise.then 寫法
fetchData()
  .then(data => processData(data))
  .catch(error => console.error(error));
\`\`\`

---

### 3. 現代終極解法：\`async\` / \`await\`
ES2017 引入的 \`async/await\` 是基於 Promise 的語法糖，讓非同步代碼讀起來跟傳統同步代碼一樣直觀優雅：

\`\`\`javascript
async function syncDeviceTelemetry() {
  try {
    console.log('開始連線伺服器...');
    const result = await fetchDeviceData(); // 暫停在此處，等待 Promise 完成，不阻塞主線程
    console.log('取得成功：', result);
  } catch (error) {
    console.error('連線異常捕捉：', error);
  } finally {
    console.log('操作結束，關閉 Loading 轉圈');
  }
}
\`\`\`

---

### 4. 並發請求神器：\`Promise.all()\`
如果需要同時請求 3 個獨立的 API，不要一個一個依序 await（那樣總耗時相加）：
\`\`\`javascript
// 同時發送請求，全部完成後才回傳陣列！大幅縮減首屏時間
const [devices, alerts, users] = await Promise.all([
  fetch('/api/devices'),
  fetch('/api/alerts'),
  fetch('/api/users')
]);
\`\`\`

---

### 5. 權威延伸學習資源
- **MDN Web Docs - 如何使用 Promise**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Promises
- **JavaScript.info - async/await 現代教學**：https://zh.javascript.info/async-await
    `,task:`
任務指引：
1. 觀察右側編輯器中模擬的 async/await 連線請求。
2. 點擊「模擬非同步 API 請求」按鈕，體驗 await 等待 1 秒後成功取回數據並渲染的過程。
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Promise 與 async/await 演練</h3>

  <button id="fetch-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    模擬非同步 API 請求 (耗時 1 秒)
  </button>

  <div id="display-area" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    等待發起連線...
  </div>
</div>

<script>
  // 模擬後端非同步延遲函式
  function mockFetchTelemetry() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          timestamp: new Date().toLocaleTimeString(),
          temp: '24.8 度C',
          status: '正常'
        });
      }, 1000);
    });
  }

  document.getElementById('fetch-btn').addEventListener('click', async () => {
    const area = document.getElementById('display-area');
    area.innerHTML = '<span style="color: #64748b;">連線通訊中，請稍候...</span>';

    try {
      // 使用 await 等待非同步完成
      const data = await mockFetchTelemetry();
      area.innerHTML = 
        '通訊成功時間：' + data.timestamp + '<br>' +
        '機房即時溫度：<strong style="color: #16a34a;">' + data.temp + '</strong> (' + data.status + ')';
    } catch (err) {
      area.innerHTML = '<span style="color: #ef4444;">連線失敗</span>';
    }
  });
<\/script>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Promise 與 async/await 演練</h3>

  <button id="fetch-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    模擬非同步 API 請求 (耗時 1 秒)
  </button>

  <div id="display-area" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    等待發起連線...
  </div>
</div>

<script>
  function mockFetchTelemetry() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          timestamp: new Date().toLocaleTimeString(),
          temp: '24.8 度C',
          status: '正常'
        });
      }, 1000);
    });
  }

  document.getElementById('fetch-btn').addEventListener('click', async () => {
    const area = document.getElementById('display-area');
    area.innerHTML = '<span style="color: #64748b;">連線通訊中，請稍候...</span>';

    try {
      const data = await mockFetchTelemetry();
      area.innerHTML = 
        '通訊成功時間：' + data.timestamp + '<br>' +
        '機房即時溫度：<strong style="color: #16a34a;">' + data.temp + '</strong> (' + data.status + ')';
    } catch (err) {
      area.innerHTML = '<span style="color: #ef4444;">連線失敗</span>';
    }
  });
<\/script>`,hints:[`await 必須寫在標註為 async 的函式內部方能使用。`,`搭配 try...catch 是處理 async/await 網路錯誤與異常的最佳方式。`]},{id:`js-07-fetch-api`,category:`JavaScript 邏輯專題篇`,title:`JS 07. 現代 Fetch API 網路通訊實戰與 Headers 設定`,summary:`告別 XMLHttpRequest！掌握原生 fetch 發送 GET/POST 請求、傳遞 JSON 資料、設定授權 Token 與 HTTP 錯誤處理。`,readTime:`9 分鐘`,concept:`
### 1. 什麼是 Fetch API？
在過去，原生 JS 要發送 HTTP 請求必須實例化複雜的 \`XMLHttpRequest\` 物件。
現代瀏覽器內建了標準的 **\`fetch()\`** 函式，直接基於 Promise 設計：

\`\`\`javascript
// 最基礎的 GET 請求
async function loadDeviceList() {
  const response = await fetch('/api/devices');
  
  // 關鍵：需要第二步解析 JSON 格式！
  const data = await response.json();
  console.log('取得資料：', data);
}
\`\`\`

---

### 2. POST 請求與 Headers 標頭設定
當需要將表單或設定發送回後端資料庫時，使用 POST 請求：
\`\`\`javascript
async function createDevice(newDevice) {
  const response = await fetch('/api/devices', {
    method: 'POST',
    headers: {
      // 告訴伺服器傳送的內容是 JSON 格式
      'Content-Type': 'application/json',
      // 攜帶 JWT 身分驗證 Token
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    // 將 JavaScript 物件轉換為 JSON 字串
    body: JSON.stringify(newDevice)
  });

  if (!response.ok) {
    throw new Error('HTTP 錯誤狀態碼：' + response.status);
  }

  const result = await response.json();
  return result;
}
\`\`\`

> **防雷警報：fetch 的 catch 不會攔截 404 或 500！**
> \`fetch()\` 只有在「網路斷線」或「DNS 解析失敗」時才會進入 reject。如果後端回傳 404 Not Found 或 500 Server Error，fetch 依然算成功，只是 \`response.ok\` 會是 \`false\`！因此實務上必須檢查 \`if (!response.ok)\`。

---

### 3. 權威延伸學習資源
- **MDN Web Docs - 使用 Fetch API**：https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch
- **JavaScript.info - Fetch 核心教學**：https://zh.javascript.info/fetch
    `,task:`
任務指引：
1. 觀察右側編輯器中的 Fetch POST 請求封裝。
2. 點擊「送出 JSON 設備資料」按鈕。
3. 體驗 JSON.stringify 與 Headers 設定在現代前後端分離架構中的核心角色！
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Fetch API 與 JSON 通訊實作</h3>

  <button id="post-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    送出 JSON 設備資料 (POST 模擬)
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 13px; font-family: monospace;">
    點擊按鈕查看序列化與回應...
  </div>
</div>

<script>
  document.getElementById('post-btn').addEventListener('click', () => {
    // 欲提交至後端的 JS 物件
    const payload = {
      name: 'B1 變電開關箱',
      location: '地下一樓機房',
      installedDate: '2026-09-09'
    };

    // 序列化為標準 JSON 字串
    const jsonBody = JSON.stringify(payload, null, 2);

    document.getElementById('output').innerHTML = 
      '<span style="color: #64748b;">// 準備送出的 HTTP Headers：</span><br>' +
      'Content-Type: application/json<br>' +
      'Authorization: Bearer eyJhbGciOi...<br><br>' +
      '<span style="color: #64748b;">// 序列化傳送的 Body (JSON)：</span><br>' +
      '<pre style="color: #0369a1; margin: 4px 0;">' + jsonBody + '</pre><br>' +
      '<span style="color: #16a34a; font-weight: bold;">通訊格式封裝完成！</span>';
  });
<\/script>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Fetch API 與 JSON 通訊實作</h3>

  <button id="post-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    送出 JSON 設備資料 (POST 模擬)
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 13px; font-family: monospace;">
    點擊按鈕查看序列化與回應...
  </div>
</div>

<script>
  document.getElementById('post-btn').addEventListener('click', () => {
    const payload = {
      name: 'B1 變電開關箱',
      location: '地下一樓機房',
      installedDate: '2026-09-09'
    };

    const jsonBody = JSON.stringify(payload, null, 2);

    document.getElementById('output').innerHTML = 
      '<span style="color: #64748b;">// 準備送出的 HTTP Headers：</span><br>' +
      'Content-Type: application/json<br>' +
      'Authorization: Bearer eyJhbGciOi...<br><br>' +
      '<span style="color: #64748b;">// 序列化傳送的 Body (JSON)：</span><br>' +
      '<pre style="color: #0369a1; margin: 4px 0;">' + jsonBody + '</pre><br>' +
      '<span style="color: #16a34a; font-weight: bold;">通訊格式封裝完成！</span>';
  });
<\/script>`,hints:[`發送 POST 請求時，必須設定 headers 的 Content-Type: application/json。`,`物件需經過 JSON.stringify() 轉為文字字串才能作為 HTTP body 送出。`]},{id:`js-08-es-modules`,category:`JavaScript 邏輯專題篇`,title:`JS 08. 模組化機制 (ES Modules) 與前端工程化打包思維`,summary:`邁入現代前端工程化！掌握 export、import、具名與預設匯出，理解為什麼現代專案需要 Vite 與 Webpack 打包器。`,readTime:`9 分鐘`,concept:`
### 1. 舊時代的痛點：全域污染與檔案引用順序地獄
在沒有模組化之前，HTML 必須引入十幾個 \`<script>\`：
\`\`\`html
<script src="js/jquery.js"><\/script>
<script src="js/pluginA.js"><\/script> <!-- 如果順序排在 jquery 前面就會壞掉！ -->
<script src="js/utils.js"><\/script>
<script src="js/main.js"><\/script>
\`\`\`
所有檔案定義的變數全部掛在全域 \`window\` 上，很容易發生命名衝突被意外覆蓋。

---

### 2. 現代標準：ES Modules (ESM)
每個 JS 檔案都是獨立的作用域，只將需要的東西「匯出 (export)」，其餘都是私有的：

#### (1) 具名匯出 (Named Export) - 一個檔案可多個
\`\`\`javascript
// mathUtils.js
export const calculateTax = (amount) => amount * 0.05;
export const formatCurrency = (val) => '$' + val.toLocaleString();

// main.js 取用
import { calculateTax, formatCurrency } from './mathUtils.js';
\`\`\`

#### (2) 預設匯出 (Default Export) - 一個檔案僅能有一個
\`\`\`javascript
// DeviceService.js
export default class DeviceService { ... }

// main.js 取用 (名稱可自訂)
import DeviceService from './DeviceService.js';
\`\`\`

---

### 3. 為什麼需要 Vite / 打包工具？
現代 Vue 專案由數百個 \`.vue\` 單文件組件、TypeScript 與 Sass 檔案組成。
瀏覽器原生只認識標準的 HTML/CSS/JavaScript，無法直接執行 \`.vue\` 檔案！
**Vite 打包工具** 的角色就是：
1. **編譯**：把 \`.vue\` 檔案編譯拆解成標準的 JS 與 CSS。
2. **打包與最佳化 (Tree-shaking)**：自動去除沒用到的代碼，壓縮體積。
3. **極速熱更新 (HMR, Hot Module Replacement)**：改一行代碼，畫面幾毫秒內局部更新，免整頁重新刷新！

---

### 4. 權威延伸學習資源
- **MDN Web Docs - JavaScript 模組 (Modules) 指南**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Modules
- **Vite 官方網站 (現代建構工具指南)**：https://vitejs.dev/guide/
    `,task:`
任務指引：
1. 觀察右側編輯器中展示的模組化拆分概念。
2. 體驗透過 import/export 組織程式碼，實現高內聚低耦合的現代軟工架構。
    `,starterCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">ES Modules 模組化規範展示</h3>

  <div style="background: #0f172a; color: #e2e8f0; padding: 14px; border-radius: 6px; font-family: monospace; font-size: 13px;">
    <div style="color: #94a3b8;">// utils/telemetry.js</div>
    <span style="color: #f43f5e;">export const</span> <span style="color: #38bdf8;">calculateEfficiency</span> = (inKw, outKw) => (outKw / inKw) * 100;<br><br>
    
    <div style="color: #94a3b8;">// main.js (Vue 3 組件引用)</div>
    <span style="color: #f43f5e;">import</span> { <span style="color: #38bdf8;">calculateEfficiency</span> } <span style="color: #f43f5e;">from</span> <span style="color: #a7f3d0;">'./utils/telemetry.js'</span>;
  </div>

  <div style="margin-top: 14px; font-size: 14px; color: #334155;">
    模組化使各檔案作用域完全隔離，徹底告別 window 全域變數衝突。
  </div>
</div>`,solutionCode:`<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">ES Modules 模組化規範展示</h3>

  <div style="background: #0f172a; color: #e2e8f0; padding: 14px; border-radius: 6px; font-family: monospace; font-size: 13px;">
    <div style="color: #94a3b8;">// utils/telemetry.js</div>
    <span style="color: #f43f5e;">export const</span> <span style="color: #38bdf8;">calculateEfficiency</span> = (inKw, outKw) => (outKw / inKw) * 100;<br><br>
    
    <div style="color: #94a3b8;">// main.js (Vue 3 組件引用)</div>
    <span style="color: #f43f5e;">import</span> { <span style="color: #38bdf8;">calculateEfficiency</span> } <span style="color: #f43f5e;">from</span> <span style="color: #a7f3d0;">'./utils/telemetry.js'</span>;
  </div>

  <div style="margin-top: 14px; font-size: 14px; color: #334155;">
    模組化使各檔案作用域完全隔離，徹底告別 window 全域變數衝突。
  </div>
</div>`,hints:[`export 具名匯出在引用時必須加上花括號 import { name }。`,`現代打包器 Vite 便是原生利用瀏覽器的 ES Modules 特性實現秒級熱更新。`]}],Cw=[{id:`project-overview-setup`,category:`專案導讀與概念篇`,title:`00. Vue 專案全局導讀：架構、安裝與學習地圖`,summary:`在寫下第一行代碼前，先搞懂為什麼要學 Vue？專案裡面有哪些檔案？以及如何用 npm 安裝並啟動專案！`,readTime:`6 分鐘`,concept:`
### 1. 為什麼要學 Vue？我們在解決什麼問題？
在傳統 JavaScript 開發中，若想做一個「計數器」或「購物車」，你必須寫繁瑣的命令式 (Imperative) 代碼：
\`\`\`javascript
// 傳統 DOM 操作：手動尋找元素 -> 手動修改內容
const btn = document.getElementById('btn');
const text = document.getElementById('count');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  text.innerText = count; // 一旦漏掉這行，畫面就不會更新！
});
\`\`\`
當專案越來越大，到處都是 \`document.getElementById\`，程式碼很容易出錯且極難維護。

而在 Vue 中，我們採用**資料驅動 (Data-Driven)** 理念：
> **你只負責維護變數資料（Data / State），Vue 會自動幫你搞定畫面的同步與重繪！**

---

### 2. 一個標準的 Vue 專案長什麼樣子？
當你使用現代工具建立一個 Vue 專案時，最關鍵的檔案架構如下：

\`\`\`
my-vue-app/
├── index.html        # 網頁唯一的 HTML 入口容器 (<div id="app"></div>)
├── package.json      # 專案套件設定檔與啟動腳本 (npm run dev)
├── vite.config.js    # Vite 打包建置工具設定檔
└── src/
    ├── main.js       # 專案引擎啟動點 (createApp 並掛載到 #app)
    ├── App.vue       # 專案的「根組件」
    └── components/   # 存放可重複使用的各個自訂小組件
\`\`\`

以下為您逐一拆解這 **6 大關鍵檔案的大概長相、職責與對應詳細課程**：

<div class="file-spec-card">
  <div class="file-spec-header">
    <div class="file-spec-name">📄 index.html</div>
    <span class="file-spec-role">單頁唯一宿主入口</span>
  </div>
  <div class="file-spec-desc">
    整個 Vue 專案唯一的真實 HTML 網頁。在現代 Vite 體系中，它不再是被動模板，而是專案的第一等公民入口，負責提供 <code>&lt;div id="app"&gt;</code> 容器並載入 JS 引擎。
  </div>
\`\`\`html
<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>我的 Vue 應用</title>
  </head>
  <body>
    <!-- 核心容器：所有 Vue 畫面都會渲染替換至此 -->
    <div id="app"></div>
    
    <!-- 啟動入口：直接載入 ESM 模組化的 JavaScript 主程式 -->
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
\`\`\`
  <div class="file-spec-jump">
    <div class="file-spec-lesson-info">
      詳細解密課程：<strong>工具 02 (Vite 入口)、HTML 01 (DOM 樹) 與 Vue 15 (SPA 單頁原理)</strong>
    </div>
    <button class="file-jump-btn" data-jump-track="vue" data-jump-lesson="vue-project-config-deepdive">
      前往工具 02 專案工程化詳解 &rarr;
    </button>
  </div>
</div>

<div class="file-spec-card">
  <div class="file-spec-header">
    <div class="file-spec-name">📦 package.json</div>
    <span class="file-spec-role">專案身分證與依賴中樞</span>
  </div>
  <div class="file-spec-desc">
    定義專案名稱、啟動指令腳本 (scripts) 以及所有第三方套件依賴 (dependencies 與 devDependencies)。
  </div>
\`\`\`json
{
  "name": "my-vue-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",             // 本機啟動指令 (npm run dev)
    "build": "vite build",     // 生產打包指令 (npm run build)
    "preview": "vite preview"  // 本機預覽打包結果
  },
  "dependencies": {
    "vue": "^3.5.0",           // 運行環境必須的套件 (Vue 核心)
    "pinia": "^2.2.0"          // 全局狀態管理庫
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.0", // 開發編譯工具
    "vite": "^5.4.0"                // 開發伺服器與打包器
  }
}
\`\`\`
  <div class="file-spec-jump">
    <div class="file-spec-lesson-info">
      詳細解密課程：<strong>工具 02. 專案工程化核心：package.json 依賴與 vite.config.js 深度配置</strong>
    </div>
    <button class="file-jump-btn" data-jump-track="vue" data-jump-lesson="vue-project-config-deepdive">
      前往工具 02 專案工程化詳解 &rarr;
    </button>
  </div>
</div>

<div class="file-spec-card">
  <div class="file-spec-header">
    <div class="file-spec-name">⚙️ vite.config.js</div>
    <span class="file-spec-role">建置與打包工具大腦</span>
  </div>
  <div class="file-spec-desc">
    Vite 的配置文件。在此設定 Vue 編譯外掛、靜態部署基礎路徑 (base)、路徑別名 (alias) 以及前後端跨域代理 (server.proxy)。
  </div>
\`\`\`javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],               // 1. 啟用 Vue 3 單文件組件編譯支援
  base: './',                     // 2. 解決部署至 GitHub Pages 或子路徑 404 問題
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 3. 設定 @ 指向 src 目錄
    }
  },
  server: {
    port: 5173,                   // 4. 指定開發伺服器埠號
    proxy: {                      // 5. 跨域反向代理，解決本機開發 CORS
      '/api': { target: 'http://localhost:8080', changeOrigin: true }
    }
  }
});
\`\`\`
  <div class="file-spec-jump">
    <div class="file-spec-lesson-info">
      詳細解密課程：<strong>工具 02. 專案工程化核心：package.json 依賴與 vite.config.js 深度配置</strong>
    </div>
    <button class="file-jump-btn" data-jump-track="vue" data-jump-lesson="vue-project-config-deepdive">
      前往工具 02 專案工程化詳解 &rarr;
    </button>
  </div>
</div>

<div class="file-spec-card">
  <div class="file-spec-header">
    <div class="file-spec-name">🚀 src/main.js</div>
    <span class="file-spec-role">專案 JavaScript 引擎啟動點</span>
  </div>
  <div class="file-spec-desc">
    專案執行時的第一行代碼在此生效。它負責透過 <code>createApp</code> 實例化 Vue 應用、引入根組件 <code>App.vue</code>、掛載 Pinia/Router 插件，最後將整個應用掛載到 <code>#app</code> 節點上。
  </div>
\`\`\`javascript
import { createApp } from 'vue';
import App from './App.vue';
// 引入全局樣式或第三方 UI 套件
import './style.css';

// 1. 建立 Vue 應用實例
const app = createApp(App);

// 2. 註冊全局插件 (例如 Pinia 狀態庫或 Vue Router)
// app.use(pinia);
// app.use(router);

// 3. 掛載至 index.html 中的 <div id="app"></div>
app.mount('#app');
\`\`\`
  <div class="file-spec-jump">
    <div class="file-spec-lesson-info">
      詳細解密課程：<strong>01. 認識 Vue.js 與第一個應用 (createApp 與 mount 原理)</strong>
    </div>
    <button class="file-jump-btn" data-jump-track="vue" data-jump-lesson="intro-hello-world">
      前往 01 課 createApp 詳解 &rarr;
    </button>
  </div>
</div>

<div class="file-spec-card">
  <div class="file-spec-header">
    <div class="file-spec-name">🌲 src/App.vue</div>
    <span class="file-spec-role">整個系統的「根組件」</span>
  </div>
  <div class="file-spec-desc">
    Vue 組件樹的最頂層（Root）。通常包含全局導覽列、頁尾、Layout 外框或路由出口 <code>&lt;router-view /&gt;</code>。採用 SFC（單文件組件）語法。
  </div>
\`\`\`vue
<script setup>
import { ref } from 'vue';
import HeaderNav from './components/HeaderNav.vue';

const siteTitle = ref('我的第一個 Vue 3 系統');
<\/script>

<template>
  <div class="app-layout">
    <HeaderNav :title="siteTitle" />
    <main>
      <h1>{{ siteTitle }}</h1>
      <p>所有頁面與組件都在這裡組合！</p>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  max-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
</style>
\`\`\`
  <div class="file-spec-jump">
    <div class="file-spec-lesson-info">
      詳細解密課程：<strong>01 課 (第一個應用)、02 課 (雙花括號) 與 11 課 (組件基礎與 Props)</strong>
    </div>
    <button class="file-jump-btn" data-jump-track="vue" data-jump-lesson="component-basics-props">
      前往 11 課組件基礎詳解 &rarr;
    </button>
  </div>
</div>

<div class="file-spec-card">
  <div class="file-spec-header">
    <div class="file-spec-name">🧩 src/components/ (自訂組件庫)</div>
    <span class="file-spec-role">可重複使用的各個自訂小組件</span>
  </div>
  <div class="file-spec-desc">
    存放可重複利用的積木組件（例如按鈕、卡片、彈窗、列表項目）。以下以一個 <code>UserBadge.vue</code> 徽章組件為例：
  </div>
\`\`\`vue
<!-- src/components/UserBadge.vue -->
<script setup>
// 定義接收父層傳入的參數 (Props)
defineProps({
  username: { type: String, required: true },
  role: { type: String, default: '學員' }
});

// 定義回傳事件給父層 (Emits)
const emit = defineEmits(['view-profile']);
<\/script>

<template>
  <div class="badge-card" @click="emit('view-profile', username)">
    <span class="name">{{ username }}</span>
    <span class="tag">{{ role }}</span>
  </div>
</template>

<style scoped>
.badge-card {
  display: inline-flex;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  background: #f0fdf4;
  border: 1px solid #42b883;
  cursor: pointer;
}
</style>
\`\`\`
  <div class="file-spec-jump">
    <div class="file-spec-lesson-info">
      詳細解密課程：<strong>11 課 (Props 傳值)、12 課 (Emits 事件通訊) 與 13 課 (Slots 插槽)</strong>
    </div>
    <button class="file-jump-btn" data-jump-track="vue" data-jump-lesson="component-basics-props">
      前往 11 ~ 13 課組件系列特訓 &rarr;
    </button>
  </div>
</div>

#### 什麼是 \`.vue\` 檔案？（SFC 單文件組件）
Vue 最強大的特色就是 **SFC (Single File Component)**，把一個介面需要的全部要素寫在同一個檔案內：
1. **\`<template>\`**：寫 HTML 模板結構。
2. **\`<script setup>\`**：寫 JavaScript 邏輯與響應式資料（Vue 3 Composition API）。
3. **\`<style scoped>\`**：寫 CSS 樣式，\`scoped\` 保證樣式不會污染到其他組件！

---

### 3. 如何在自己電腦安裝並啟動 Vue？
要在本機開發 Vue 專案，只需要 3 個步驟：

#### 第一步：安裝 Node.js
前往 [Node.js 官方網站](https://nodejs.org/) 下載並安裝 LTS 穩定版本（安裝後電腦就會具備 \`npm\` 指令）。

#### 第二步：終端機執行建立指令
打開終端機 (Terminal / PowerShell / CMD)，輸入官方建立指令：
\`\`\`bash
# 官方最新建立工具
npm create vue@latest

# 或者使用超快的 Vite 模板建立：
npm create vite@latest my-vue-app -- --template vue
\`\`\`
依提示輸入專案名稱後，工具就會自動幫你生成整套專案結構！

#### 第三步：安裝依賴並啟動本機伺服器
\`\`\`bash
cd my-vue-app     # 進入專案資料夾
npm install       # 安裝所有相依套件
npm run dev       # 啟動開發伺服器
\`\`\`
此時終端機會顯示 \`http://localhost:5173/\`，在瀏覽器打開就能立刻看到你的 Vue 網站！

---

### 4. 接下來的自學地圖（為什麼這樣安排？）
為了避免初學者一開始就被複雜的打包設定嚇到，接下來的課程會循序漸進：
- **階段 1（01 ~ 05 課）基礎語法**：學會如何把變數印出 (\`{{ }}\`)、綁定屬性 (\`:\`)、監聽按鈕 (\`@\`) 與表單輸入 (\`v-model\`)。
- **階段 2（06 ~ 07 課）條件與迴圈**：學會隱藏/顯示元素 (\`v-if\`) 與遍歷清單 (\`v-for\`)。
- **階段 3（08 ~ 10 課）響應式核心**：學會 Vue 3 的核心心臟 \`ref\`、\`reactive\`、\`computed\` 與 \`watch\`。
- **階段 4（11 課後）組件化開發**：學會像組積木一樣組合大型應用程式！
    
---

### 5. 前端三劍客基礎自檢（需要先惡補嗎？）
Vue 3 本質是建立在標準的 HTML、CSS 與 JavaScript (ES6+) 之上。
若您對標籤骨架、Flexbox 佈局、或箭頭函式與非同步處理尚不熟悉，強烈建議您利用上方的領域標籤切換，或點擊下方傳送門先進行專題特訓：

<div class="track-jump-grid">
  <div class="track-jump-card" data-jump-track="html">
    <div class="jump-card-header">
      <span class="jump-card-tag">結構基石</span>
      <span class="jump-card-count">共 5 單元</span>
    </div>
    <div class="jump-card-title">HTML 核心專題</div>
    <div class="jump-card-desc">掌握標準骨架、DOM 樹、語意化標籤、現代表單與報表表格。</div>
    <button class="jump-action-btn" data-jump-track="html" data-jump-lesson="html-01-structure">立即前往 HTML 特訓 &rarr;</button>
  </div>

  <div class="track-jump-card" data-jump-track="css">
    <div class="jump-card-header">
      <span class="jump-card-tag">樣式排版</span>
      <span class="jump-card-count">共 7 單元</span>
    </div>
    <div class="jump-card-title">CSS 樣式專題</div>
    <div class="jump-card-desc">攻克選擇器權重、盒模型、Flexbox/Grid 彈性排版、RWD 與 CSS 變數。</div>
    <button class="jump-action-btn" data-jump-track="css" data-jump-lesson="css-01-selectors-specificity">立即前往 CSS 特訓 &rarr;</button>
  </div>

  <div class="track-jump-card" data-jump-track="javascript">
    <div class="jump-card-header">
      <span class="jump-card-tag">邏輯引擎</span>
      <span class="jump-card-count">共 8 單元</span>
    </div>
    <div class="jump-card-title">JavaScript 邏輯專題</div>
    <div class="jump-card-desc">惡補 const/let、解構、箭頭函式、陣列高階方法、Promise/async 與 ESM 模組。</div>
    <button class="jump-action-btn" data-jump-track="javascript" data-jump-lesson="js-01-variables-scope">立即前往 JS 特訓 &rarr;</button>
  </div>
</div>
`,task:"\n**體驗任務：**\n1. 右側編輯器展示了一個標準的 Vue 3 核心運作實例。\n2. 找到 `setup()` 裡面的 `frameworkInfo`，將 `learner` 改成**你的暱稱或名字**！\n3. 點擊按鈕試試看，體驗 Vue 3 的資料響應性！\n    ",starterCode:`<div id="app">
  <!-- 這是標準 Vue 組件的模板區塊 -->
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h2 style="color: #35495e; margin-bottom: 8px;">
       歡迎踏上 Vue 3 實戰自學之旅！
    </h2>
    <p>目前學習者：<strong style="color: #42b883; font-size: 1.1rem;">{{ learner }}</strong></p>
    <p>核心學習心法：<em>{{ corePrinciple }}</em></p>
    
    <div style="margin-top: 15px;">
      <button @click="levelUp" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
         點我累積學習點數：{{ exp }} 點
      </button>
    </div>
  </div>
</div>

<script>
  // 這是標準 Vue 3 的核心邏輯 (Composition API)
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      // 宣告響應式狀態變數
      const learner = ref('Vue 新手小隊員');
      const corePrinciple = ref('資料驅動視圖，再也不用寫 document.getElementById！');
      const exp = ref(0);

      const levelUp = () => {
        exp.value += 10;
      };

      return {
        learner,
        corePrinciple,
        exp,
        levelUp
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h2 style="color: #35495e; margin-bottom: 8px;">
       歡迎踏上 Vue 3 實戰自學之旅！
    </h2>
    <p>目前學習者：<strong style="color: #42b883; font-size: 1.1rem;">{{ learner }}</strong></p>
    <p>核心學習心法：<em>{{ corePrinciple }}</em></p>
    
    <div style="margin-top: 15px;">
      <button @click="levelUp" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
         點我累積學習點數：{{ exp }} 點
      </button>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const learner = ref('前端未來的架構大師');
      const corePrinciple = ref('資料驅動視圖，再也不用寫 document.getElementById！');
      const exp = ref(100);

      const levelUp = () => {
        exp.value += 10;
      };

      return {
        learner,
        corePrinciple,
        exp,
        levelUp
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在 script 中將 learner 變數改為您的名字，例如 ref("Alex");`,`點擊預覽區塊中的按鈕，exp 點數會自動即時往上跳！`]},{id:`foundation-tools`,category:`生態工具庫篇`,title:`工具 01. 生態演進導讀：jQuery 傳統王者與 Tailwind CSS 現代原子化`,summary:`了解前端歷史里程碑：看懂舊系統常見的 jQuery ($) 命令式操作，以及現代前端最流行的 Tailwind CSS 原子化樣式開發思維。`,readTime:`6 分鐘`,concept:`
### 1. 為什麼需要認識這兩套工具庫？
在真實企業軟體開發中，我們很少從完全空白的專案開始。
- **老舊既有系統**：多數充斥著歷史悠久的 **jQuery ($)** 代碼。
- **現代現代化專案**：越來越多團隊採用 **Tailwind CSS** 快速構建設計系統。

理解這兩者的核心精神，能幫助您在評估「舊系統如何翻新為 Vue」以及「現代樣式如何排版」時擁有清晰全貌。

---

### 2. jQuery：昔日霸主與舊系統維護必備

#### (1) jQuery 的核心定位
jQuery 誕生於 2006 年，口號是 **"Write Less, Do More"**。
當時各大瀏覽器（IE、Firefox、Chrome）的原生 JavaScript API 互不相容且冗長，jQuery 透過全域符號 \`$\` 提供了一致且極簡的 API：

\`\`\`javascript
// 傳統原生 JS
var el = document.getElementById('status-text');
el.innerHTML = '運轉中';
el.style.color = 'green';

// jQuery 簡化寫法（鏈式調用）
$('#status-text').html('運轉中').css('color', 'green');
\`\`\`

#### (2) 舊系統中常見的 jQuery 影子
- **DOM 選取與修改**：\`$('#id')\`、\`$('.class')\`、\`$(parent).find('.child')\`。
- **事件監聽**：\`$('#btn').click(fn)\` 或 \`$(document).on('click', '.item', fn)\`。
- **舊式非同步請求**：\`$.ajax({ url: '/api/data', success: function(res) { ... } })\`。

#### (3) 為什麼現代 Vue 取代了 jQuery？
- **jQuery 是命令式 (Imperative)**：狀態改變時，工程師必須「手動尋找每個 DOM 節點並逐一指派修改」。當系統規模變大，各個按鈕和 AJAX 回呼互相修改 DOM，容易演變成難以維護的「義大利麵代碼」。
- **Vue 是宣告式 (Declarative)**：工程師只要負責管理「資料狀態」。狀態一變，Vue 的虛擬 DOM 引擎會精準自動更新對應畫面，不再需要任何手動抓 DOM 的程式碼！

---

### 3. Tailwind CSS：現代原子化樣式新寵

#### (1) Tailwind CSS 的核心理念：Utility-First（功能類優先）
傳統寫 CSS 需要為每個區塊發明 class 名字，例如 \`.device-monitor-card-header\`，然後在獨立的 CSS 檔案寫下一堆屬性。

Tailwind CSS 反其道而行，提供數千個高度語意化的**微型原子類別 (Utility Classes)**，開發者直接在 HTML / Vue 模板中拼裝：

\`\`\`html
<!-- 傳統 CSS：需要跳到 .css 檔寫十幾行樣式 -->
<div class="user-card">...</div>

<!-- Tailwind CSS：直接在模板中組合原子類別 -->
<div class="flex items-center justify-between p-4 bg-slate-800 text-white rounded-lg shadow-md hover:bg-slate-700">
  <span class="text-sm font-semibold">1 號設備</span>
  <span class="px-2 py-1 bg-green-500 text-xs rounded-full">在線</span>
</div>
\`\`\`

#### (2) Tailwind CSS 的三大威力
1. **擺脫命名痛苦**：不必再為 class 名稱絞盡腦汁。
2. **極小生產打包體積**：內建 JIT (即時編譯) 引擎，只打包專案有使用到的類別，CSS 通常不到 10KB。
3. **響應式與偽類超直覺**：前綴即可支援斷點與狀態，例如 \`md:flex\`（平板以上為 flex）、\`hover:bg-blue-600\`（滑鼠移過變色）、\`dark:bg-gray-900\`（深色模式）。

---

### 4. 延伸進階學習資源推薦
- **jQuery 官方學習中心 (Learning Center)**：https://learn.jquery.com/
- **W3Schools jQuery 基礎教學**：https://www.w3schools.com/jquery/
- **Tailwind CSS 官方文檔 (英文/繁中推薦資源)**：https://tailwindcss.com/docs
- **Tailwind CSS 中文手冊**：https://www.tailwindcss.cn/
    `,task:`
任務指引：
1. 觀察右側編輯器：上方展示了傳統 jQuery 風格的「手動指令修改 DOM」邏輯；下方展示了類似 Tailwind 原子化 Class 的彈性排版結構。
2. 點擊「模擬 jQuery 指令操作」按鈕，體驗命令式手動修改畫面的流程。
3. 體會為什麼 Vue 倡導「用資料驅動畫面」，以及原子化樣式如何讓排版高度直覺。
    `,starterCode:`<div style="padding: 16px; font-family: sans-serif; max-width: 500px;">
  <h3 style="margin-top: 0; color: #1e293b;">工具庫與現代演進對比</h3>

  <!-- 傳統 jQuery 命令式體驗區塊 -->
  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 16px; background: #f8fafc;">
    <div style="font-size: 13px; font-weight: bold; color: #64748b; margin-bottom: 8px;">
      傳統 jQuery 思維：命令式手動修改 DOM
    </div>
    
    <div id="device-card" style="padding: 10px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
      <span id="device-title" style="font-weight: bold;">主機 #01</span>：
      <span id="device-status" style="color: #ea580c; font-weight: bold;">待機中</span>
    </div>

    <button id="jquery-btn" style="margin-top: 10px; padding: 6px 12px; background: #0284c7; color: white; border: none; border-radius: 4px; cursor: pointer;">
      模擬執行：$('#device-status').text('已連線')
    </button>
  </div>

  <!-- Tailwind CSS 原子化風格體驗區塊 -->
  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; background: #0f172a; color: white;">
    <div style="font-size: 13px; font-weight: bold; color: #94a3b8; margin-bottom: 8px;">
      Tailwind CSS 思維：原子化 class 直接組合
    </div>

    <!-- 模擬 Tailwind 原子類效果 (flex, items-center, justify-between, p-3, rounded-md, bg-slate-800) -->
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: #1e293b; border-radius: 6px;">
      <div>
        <div style="font-weight: 600; font-size: 14px;">冰水主機泵浦</div>
        <div style="font-size: 12px; color: #94a3b8;">電力負載 42 kW</div>
      </div>
      <span style="font-size: 12px; padding: 4px 10px; border-radius: 9999px; background: #16a34a; color: white; font-weight: 600;">
        運轉中
      </span>
    </div>
  </div>
</div>

<script>
  // 模擬 jQuery 舊專案的命令式操作
  document.getElementById('jquery-btn').addEventListener('click', function() {
    const statusEl = document.getElementById('device-status');
    statusEl.innerText = '運轉中 (已連線)';
    statusEl.style.color = '#16a34a';
    
    const cardEl = document.getElementById('device-card');
    cardEl.style.borderColor = '#16a34a';
  });
<\/script>`,solutionCode:`<div style="padding: 16px; font-family: sans-serif; max-width: 500px;">
  <h3 style="margin-top: 0; color: #1e293b;">工具庫與現代演進對比</h3>

  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 16px; background: #f8fafc;">
    <div style="font-size: 13px; font-weight: bold; color: #64748b; margin-bottom: 8px;">
      傳統 jQuery 思維：命令式手動修改 DOM
    </div>
    
    <div id="device-card" style="padding: 10px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
      <span id="device-title" style="font-weight: bold;">主機 #01</span>：
      <span id="device-status" style="color: #ea580c; font-weight: bold;">待機中</span>
    </div>

    <button id="jquery-btn" style="margin-top: 10px; padding: 6px 12px; background: #0284c7; color: white; border: none; border-radius: 4px; cursor: pointer;">
      模擬執行：$('#device-status').text('已連線')
    </button>
  </div>

  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; background: #0f172a; color: white;">
    <div style="font-size: 13px; font-weight: bold; color: #94a3b8; margin-bottom: 8px;">
      Tailwind CSS 思維：原子化 class 直接組合
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: #1e293b; border-radius: 6px;">
      <div>
        <div style="font-weight: 600; font-size: 14px;">冰水主機泵浦</div>
        <div style="font-size: 12px; color: #94a3b8;">電力負載 42 kW</div>
      </div>
      <span style="font-size: 12px; padding: 4px 10px; border-radius: 9999px; background: #16a34a; color: white; font-weight: 600;">
        運轉中
      </span>
    </div>
  </div>
</div>

<script>
  document.getElementById('jquery-btn').addEventListener('click', function() {
    const statusEl = document.getElementById('device-status');
    statusEl.innerText = '運轉中 (已連線)';
    statusEl.style.color = '#16a34a';
    
    const cardEl = document.getElementById('device-card');
    cardEl.style.borderColor = '#16a34a';
  });
<\/script>`,hints:[`舊系統重構的核心，就是把 jQuery 的命令式 DOM 抓取，轉換為 Vue 的資料響應式驅動。`,`Tailwind CSS 讓樣式直接在 template class 拼裝，省去頻繁在 vue 檔與 css 檔切換的時間。`]},{id:`vue-project-config-deepdive`,category:`生態工具庫篇`,title:`工具 02. 專案工程化核心：package.json 依賴與 vite.config.js 深度配置`,summary:`徹底搞懂現代前端專案骨架：拆解 package.json 腳本與依賴版本規則，掌握 vite.config.js 的別名 alias、部署路徑 base 與跨域 proxy 實戰配置。`,readTime:`7 分鐘`,concept:`
### 1. 為什麼前端需要工程化設定檔？
在傳統舊時代，寫前端只需要建立一個 \`index.html\`，透過 \`<script src="jquery.js">\` 引入函式庫就能寫網頁。
但在現代企業級前端開發中，我們需要：
- **代碼編譯**：將 \`.vue\` 單文件組件、JSX、TypeScript 轉譯成瀏覽器認識的標準代碼。
- **套件依賴管理**：管理成百上千個第三方套件與版本。
- **極速開發體驗**：修改一行代碼，畫面能在 50 毫秒內「熱重載 (HMR)」，不用手動按重新整理。
- **打包最佳化**：上線前進行代碼壓縮、Tree-shaking（搖樹優化去除沒用的代碼）與分割加載。

這正是 **\`package.json\`** 與 **\`vite.config.js\`** 存在的核心價值！

---

### 2. package.json：專案的心臟與套件指揮官

每個前端專案的根目錄都一定有一份 \`package.json\`。以下是標準 Vue 3 專案的經典長相與關鍵欄位：

\`\`\`json
{
  "name": "my-vue-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.0",
    "pinia": "^2.2.0",
    "axios": "^1.7.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.0",
    "vite": "^5.4.0"
  }
}
\`\`\`

#### (1) \`scripts\`：定義專案指令
當你在終端機執行 \`npm run dev\`，npm 就會去尋找 \`scripts.dev\` 所對應的指令 \`vite\` 並啟動本機伺服器。
- \`npm run dev\`：啟動本機開發伺服器（預設 port 5173）。
- \`npm run build\`：進行生產環境打包，產物會輸出到 \`dist/\` 資料夾。
- \`npm run preview\`：在本機預覽打包後的 \`dist\` 靜態網頁。

#### (2) \`dependencies\` vs \`devDependencies\`
這是面試與專案建置中最常見的觀念：
- **\`dependencies\`（生產依賴）**：**網頁上線在使用者瀏覽器執行時「絕對需要」的套件**。例如 \`vue\` 核心引擎、狀態庫 \`pinia\`、網路請求庫 \`axios\`。安裝時使用 \`npm install <套件名>\`。
- **\`devDependencies\`（開發依賴）**：**只在你的電腦開發、編譯、打包時需要**，最終產出的網頁不會包含它們。例如打包工具 \`vite\`、Vue 編譯外掛 \`@vitejs/plugin-vue\`、語法檢查工具 \`eslint\`。安裝時使用 \`npm install -D <套件名>\`。

#### (3) 語意化版本號（SemVer）與 \`package-lock.json\`
在版本號前常見到符號：
- **\`^3.5.0\` (Caret)**：允許安裝 **3.x.x** 的最新小版本（Minor/Patch），但不會升級到大版本 4.0.0。
- **\`~3.5.0\` (Tilde)**：僅允許安裝 **3.5.x** 的補丁修復版本（Patch）。
- **\`3.5.0\`**：鎖死此版本。
> **為什麼有 package-lock.json？**  
> 為了避免團隊成員 A 安裝時拉到 3.5.1，而成員 B 隔天拉到 3.5.2 導致不可預期的 Bug，\`package-lock.json\` 會精密記錄當前安裝的**具體精確版本與下載位址**，**絕對不能手動刪除它**！

---

### 3. vite.config.js：打包工具中樞大腦

現代 Vue 3 官方推薦搭配 **Vite** 作為開發與建置工具。以下是一份最實用且標準的 \`vite.config.js\`：

\`\`\`javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  // 1. 必備外掛：讓 Vite 能夠解析並編譯 .vue 單文件組件
  plugins: [vue()],

  // 2. 部署基礎路徑（解決 GitHub Pages 或子路徑 404 問題）
  base: './',

  // 3. 路徑別名（告別 ../../../../ 相對路徑地獄）
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  // 4. 本機開發伺服器與跨域代理 (Proxy)
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.yourcompany.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, '')
      }
    }
  }
});
\`\`\`

#### 實戰四大金剛配置深度解密：
1. **\`plugins: [vue()]\`**：Vite 本身是通用建置工具，必須透過此外掛才能把 \`<template>\`、\`<script>\`、\`<style>\` 拆解並編譯成高效的 JavaScript 程式碼。
2. **\`base\` 基礎路徑**：
   - 預設是 \`'/'\`（根目錄）。如果你的網站部署在獨立網址（如 \`https://mycompany.com/\`），預設沒問題。
   - 但若部署到 **GitHub Pages** 或公司內網子目錄（如 \`https://username.github.io/my-vue-app/\`），如果不設為 \`'./'\` 或 \`'/my-vue-app/'\`，瀏覽器去根目錄找不到靜態檔案就會整頁空白並報 **404 錯誤**！
3. **\`resolve.alias\` 路徑別名**：
   - 在深層組件引入模組時，不用再痛苦地算層級寫 \`import Nav from '../../../components/Nav.vue'\`。
   - 配置 \`'@': path.resolve(__dirname, './src')\` 後，在專案任何角落都能優雅地寫：  
     \`import Nav from '@/components/Nav.vue'\`！
4. **\`server.proxy\` 本機代理（CORS 跨域終結者）**：
   - 前後端分離開發時，前端在本機 \`localhost:5173\`，後端在 \`api.example.com\`，瀏覽器會因「同源政策 (Same-Origin Policy)」擋下請求（CORS 跨域錯誤）。
   - 設定 \`server.proxy\` 後，瀏覽器請求直接發給本機 Vite 伺服器，再由本機 Vite 伺服器替你向後端抓取資料，完全繞過瀏覽器的跨域限制！

---

### 4. 專案是怎麼跑起來的？全流程啟動生命週期

\`\`\`
1. 終端機執行 npm run dev
   ↓
2. Vite 讀取 vite.config.js，啟用 @vitejs/plugin-vue 與別名
   ↓
3. 開發伺服器啟動於 http://localhost:5173/
   ↓
4. 瀏覽器訪問，首個加載 index.html (<div id="app"></div>)
   ↓
5. index.html 執行 <script type="module" src="/src/main.js">
   ↓
6. main.js 執行 createApp(App)，註冊插件並 .mount('#app')
   ↓
7. 根組件 App.vue 渲染完成，頁面璀璨登場！
\`\`\`
`,task:"\n**今日實戰任務：**\n1. 觀察右側編輯器模擬的「Vite 專案工程化控制台」。\n2. 切換「專案部屬模式」開關，觀察 `base` 路徑設定為 `'/'` 與 `'./'` 時，GitHub Pages 子目錄靜態資源載入路徑的差異。\n3. 嘗試在模擬的 `vite.config.js` 中開啟 `alias: { '@': './src' }`，體驗現代前端標準別名帶來的極簡引用！\n",starterCode:`<div id="app" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 16px; max-width: 600px;">
  <h3 style="margin-top: 0; color: #1e293b; display: flex; align-items: center; gap: 8px;">
    <span>🛠️ Vite & package.json 專案配置管理器</span>
  </h3>

  <!-- 模擬 vite.config.js 控制區 -->
  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 16px; background: #f8fafc;">
    <div style="font-weight: 700; color: #0f172a; margin-bottom: 8px; font-size: 14px;">
      1. vite.config.js : base 部署路徑模擬
    </div>
    
    <div style="display: flex; gap: 10px; margin-bottom: 12px;">
      <button @click="setBase('/')" :style="btnStyle(configBase === '/')">
        部署至根網址 (base: '/')
      </button>
      <button @click="setBase('./')" :style="btnStyle(configBase === './')">
        部署至子目錄/GitHub Pages (base: './')
      </button>
    </div>

    <!-- 模擬資源解析結果 -->
    <div style="background: #1e293b; color: #f8fafc; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px;">
      <div>專案打包輸出資源路徑：</div>
      <div style="color: #38bdf8; margin-top: 4px;">{{ assetPreviewUrl }}</div>
      <div :style="{ color: isAsset404 ? '#ef4444' : '#10b981', marginTop: '6px', fontWeight: 'bold' }">
        {{ isAsset404 ? '⚠️ 警告：在 GitHub Pages 子路徑部署時將發生 404 資源找不到！' : '✅ 正常：資源相對路徑正確解析！' }}
      </div>
    </div>
  </div>

  <!-- 模擬 package.json scripts 控制區 -->
  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; background: #ffffff;">
    <div style="font-weight: 700; color: #0f172a; margin-bottom: 8px; font-size: 14px;">
      2. package.json : scripts 終端機模擬執行
    </div>

    <div style="display: flex; gap: 8px; margin-bottom: 10px;">
      <button @click="runScript('dev')" style="padding: 6px 12px; background: #42b883; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">
        ▶ npm run dev
      </button>
      <button @click="runScript('build')" style="padding: 6px 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">
        📦 npm run build
      </button>
    </div>

    <div style="background: #0f172a; color: #a5f3fc; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px; min-height: 50px;">
      <div style="color: #94a3b8;">$ {{ terminalCommand }}</div>
      <div style="color: #4ade80; margin-top: 4px;">{{ terminalOutput }}</div>
    </div>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const configBase = ref('/');
      const isGitHubPages = ref(true); // 模擬部署環境為 GitHub Pages

      const setBase = (b) => {
        configBase.value = b;
      };

      const assetPreviewUrl = computed(() => {
        return configBase.value === '/' 
          ? 'https://my-name.github.io/assets/main-Dk28.js' 
          : 'https://my-name.github.io/my-vue-app/assets/main-Dk28.js';
      });

      const isAsset404 = computed(() => {
        return configBase.value === '/';
      });

      const terminalCommand = ref('npm run dev');
      const terminalOutput = ref('VITE v5.4.0 ready in 158 ms -> Local: http://localhost:5173/');

      const runScript = (type) => {
        if (type === 'dev') {
          terminalCommand.value = 'npm run dev';
          terminalOutput.value = 'VITE v5.4.0 ready in 142 ms -> Local: http://localhost:5173/';
        } else {
          terminalCommand.value = 'npm run build';
          terminalOutput.value = '✓ 42 modules transformed. dist/assets/index.js 86.4 kB (gzip: 28.1 kB)';
        }
      };

      const btnStyle = (active) => ({
        padding: '6px 12px',
        background: active ? '#0284c7' : '#e2e8f0',
        color: active ? '#ffffff' : '#334155',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: active ? '700' : '500'
      });

      return {
        configBase,
        setBase,
        assetPreviewUrl,
        isAsset404,
        terminalCommand,
        terminalOutput,
        runScript,
        btnStyle
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 16px; max-width: 600px;">
  <h3 style="margin-top: 0; color: #1e293b; display: flex; align-items: center; gap: 8px;">
    <span>🛠️ Vite & package.json 專案配置管理器</span>
  </h3>

  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 16px; background: #f8fafc;">
    <div style="font-weight: 700; color: #0f172a; margin-bottom: 8px; font-size: 14px;">
      1. vite.config.js : base 部署路徑模擬
    </div>
    
    <div style="display: flex; gap: 10px; margin-bottom: 12px;">
      <button @click="setBase('/')" :style="btnStyle(configBase === '/')">
        部署至根網址 (base: '/')
      </button>
      <button @click="setBase('./')" :style="btnStyle(configBase === './')">
        部署至子目錄/GitHub Pages (base: './')
      </button>
    </div>

    <div style="background: #1e293b; color: #f8fafc; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px;">
      <div>專案打包輸出資源路徑：</div>
      <div style="color: #38bdf8; margin-top: 4px;">{{ assetPreviewUrl }}</div>
      <div :style="{ color: isAsset404 ? '#ef4444' : '#10b981', marginTop: '6px', fontWeight: 'bold' }">
        {{ isAsset404 ? '⚠️ 警告：在 GitHub Pages 子路徑部署時將發生 404 資源找不到！' : '✅ 正常：資源相對路徑正確解析！' }}
      </div>
    </div>
  </div>

  <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; background: #ffffff;">
    <div style="font-weight: 700; color: #0f172a; margin-bottom: 8px; font-size: 14px;">
      2. package.json : scripts 終端機模擬執行
    </div>

    <div style="display: flex; gap: 8px; margin-bottom: 10px;">
      <button @click="runScript('dev')" style="padding: 6px 12px; background: #42b883; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">
        ▶ npm run dev
      </button>
      <button @click="runScript('build')" style="padding: 6px 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">
        📦 npm run build
      </button>
    </div>

    <div style="background: #0f172a; color: #a5f3fc; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px; min-height: 50px;">
      <div style="color: #94a3b8;">$ {{ terminalCommand }}</div>
      <div style="color: #4ade80; margin-top: 4px;">{{ terminalOutput }}</div>
    </div>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const configBase = ref('./'); // 正確配置相對路徑
      const isGitHubPages = ref(true);

      const setBase = (b) => {
        configBase.value = b;
      };

      const assetPreviewUrl = computed(() => {
        return configBase.value === '/' 
          ? 'https://my-name.github.io/assets/main-Dk28.js' 
          : 'https://my-name.github.io/my-vue-app/assets/main-Dk28.js';
      });

      const isAsset404 = computed(() => {
        return configBase.value === '/';
      });

      const terminalCommand = ref('npm run build');
      const terminalOutput = ref('✓ 42 modules transformed. dist/assets/index.js 86.4 kB (gzip: 28.1 kB)');

      const runScript = (type) => {
        if (type === 'dev') {
          terminalCommand.value = 'npm run dev';
          terminalOutput.value = 'VITE v5.4.0 ready in 142 ms -> Local: http://localhost:5173/';
        } else {
          terminalCommand.value = 'npm run build';
          terminalOutput.value = '✓ 42 modules transformed. dist/assets/index.js 86.4 kB (gzip: 28.1 kB)';
        }
      };

      const btnStyle = (active) => ({
        padding: '6px 12px',
        background: active ? '#0284c7' : '#e2e8f0',
        color: active ? '#ffffff' : '#334155',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: active ? '700' : '500'
      });

      return {
        configBase,
        setBase,
        assetPreviewUrl,
        isAsset404,
        terminalCommand,
        terminalOutput,
        runScript,
        btnStyle
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在 vite.config.js 中將 base 設為 './' 能保證打包後的靜態檔案路徑採用相對路徑，不會因為上傳到非根目錄而 404。`,`package.json 中的 scripts 能定義日常高頻指令，避免每次都要手動敲長指令。`]},{id:`intro-hello-world`,category:`基礎入門篇`,title:`01. 認識 Vue.js 與第一個應用`,summary:`了解宣告式渲染的核心理念，並使用 createApp 啟動第一個 Vue 應用程式。`,readTime:`3 分鐘`,concept:`
### 什麼是 Vue.js？
Vue（讀作 /vjuː/，類似 view）是一套用於構建使用者介面的**漸進式 JavaScript 框架**。
在傳統 JavaScript (DOM 操作) 中，你必須手動找到元素並修改內容：
\`\`\`javascript
// 傳統 DOM 操作（命令式 Imperative）
document.getElementById('title').innerText = 'Hello World';
\`\`\`
而在 Vue 中，我們採用**宣告式渲染 (Declarative Rendering)**：你只需要定義「資料」，當資料改變時，畫面會自動同步更新！

### 核心結構拆解
1. **HTML 模板容器**：例如 \`<div id="app">\`，這是 Vue 接管並渲染畫面的根節點。
2. **\`Vue.createApp({ ... })\`**：建立 Vue 應用實例。在 Vue 3 中，最推薦使用 **Composition API** 中的 \`setup()\` 函式來定義資料與邏輯。
3. **\`.mount('#app')\`**：將 Vue 應用掛載到指定的 DOM 元素上。
    `,task:"\n**今日任務：**\n1. 在右側編輯器中，找到 `message` 的初始文字 `'哈囉，Vue！'`。\n2. 嘗試將它修改為：`'我正在自學 Vue 3，超酷的！'`。\n3. 觀察下方的 **Live output** 即時渲染出新內容！\n    ",starterCode:`<div id="app">
  <h1>{{ message }}</h1>
  <p>這是我的第一個 Vue 3 應用程式！</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      // 宣告一個響應式字串變數
      const message = ref('哈囉，Vue！');

      return {
        message
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h1>{{ message }}</h1>
  <p>這是我的第一個 Vue 3 應用程式！</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      // 宣告一個響應式字串變數
      const message = ref('我正在自學 Vue 3，超酷的！');

      return {
        message
      };
    }
  }).mount('#app');
<\/script>`,hints:[`請直接修改 script 標籤內 message 變數的值。`,`注意字串外面的引號要成對保留喔！`]},{id:`text-interpolation`,category:`基礎入門篇`,title:`02. 雙花括號與文字插值 ({{ }})`,summary:`掌握 Mustache 雙花括號語法，學習在 HTML 中輸出動態資料與 JavaScript 表達式。`,readTime:`4 分鐘`,concept:"\n### Mustache「雙花括號」語法\n最基礎的資料綁定形式是使用「雙花括號」`{{ expression }}`（又稱 Mustache 語法）。\n每當對應的響應式狀態改變時，雙花括號內的文字會自動更新。\n\n### 支援 JavaScript 表達式！\n在 `{{ }}` 之中，你可以放入任何**單一的 JavaScript 表達式**：\n- 數學運算：`{{ price * quantity }}`\n- 三元運算子：`{{ isLogin ? '歡迎回來' : '請先登入' }}`\n- 字串方法：`{{ username.toUpperCase() }}`\n- 陣列處理：`{{ tags.join(' / ') }}`\n\n> **注意：** 雙花括號只能接受「表達式 (Expression)」，不能包含宣告或語句（例如不能寫 `{{ var a = 1 }}` 或 `{{ if (ok) { return msg } }}`）。\n    ",task:"\n**今日任務：**\n1. 模板中目前顯示原價 `{{ price }}` 與折扣 `{{ discount }}`。\n2. 請在下方新增一個 `<p>` 標籤，使用表達式計算**特惠價**（公式：`price * discount`）。\n3. 也可以試試使用三元運算子，判斷折扣後價格是否小於 800，顯示「超划算！」或「原價優惠」。\n    ",starterCode:`<div id="app">
  <h2>商品結帳清單</h2>
  <p>商品名稱：{{ productName }}</p>
  <p>原價：NT$ {{ price }} 元</p>
  <p>折扣折數：{{ discount * 10 }} 折</p>
  
  <!-- 請在下方加入特惠價計算標籤 -->
  <p>特惠價：NT$ {{ /* 填入計算表達式 */ }} 元</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const productName = ref('Vue 3 深入淺出實戰手冊');
      const price = ref(1000);
      const discount = ref(0.75); // 75折

      return {
        productName,
        price,
        discount
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h2>商品結帳清單</h2>
  <p>商品名稱：{{ productName }}</p>
  <p>原價：NT$ {{ price }} 元</p>
  <p>折扣折數：{{ discount * 10 }} 折</p>
  
  <p style="color: #42b883; font-weight: bold; font-size: 1.2rem;">
    特惠價：NT$ {{ price * discount }} 元
  </p>
  <p>評價：{{ (price * discount) < 800 ? '超划算！限量搶購中' : '現正優惠中' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const productName = ref('Vue 3 深入淺出實戰手冊');
      const price = ref(1000);
      const discount = ref(0.75);

      return {
        productName,
        price,
        discount
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在 {{ }} 中直接輸入 price * discount 即可進行數值相乘！`,`你也可以在標籤加上 style 樣式讓特惠價更醒目。`]},{id:`attribute-binding`,category:`基礎入門篇`,title:`03. 屬性綁定 (v-bind 與 :)`,summary:`雙花括號不能寫在 HTML 屬性中！學習使用 v-bind 或冒號縮寫綁定 href、src、disabled 與 class。`,readTime:`4 分鐘`,concept:`
### 為什麼不能在屬性中使用 {{ }}？
很多人初學時會嘗試這樣寫：\`<a href="{{ url }}">連結</a>\`，這是**錯誤的**！
HTML 屬性無法直接使用 Mustache 語法解析。

### 使用 v-bind 指令
Vue 提供 \`v-bind\` 指令來響應式綁定 HTML 屬性：
\`\`\`html
<!-- 完整語法 -->
<a v-bind:href="linkUrl">前往網站</a>

<!-- 縮寫語法（最常使用，強烈推薦！） -->
<a :href="linkUrl">前往網站</a>
<button :disabled="isButtonDisabled">送出</button>
<img :src="imageUrl" :alt="imageTitle" />
\`\`\`

### 動態 Class 與 Style 綁定
\`v-bind:class\` 支援物件語法：
\`\`\`html
<!-- 當 isActive 為 true 時，元素會自動套用 'active' class -->
<div :class="{ active: isActive }">內容</div>
\`\`\`
    `,task:'\n**今日任務：**\n1. 右側畫面中的按鈕處於可點擊狀態。\n2. 請使用 `:disabled="isDisabled"` 將變數綁定到按鈕屬性上。\n3. 嘗試把 `linkUrl` 綁定到 `<a>` 標籤的 `href` 屬性，讓點擊能前往正確網址！\n    ',starterCode:`<div id="app">
  <h3>屬性動態綁定練習</h3>
  
  <!-- 任務 1: 請使用 :href 綁定動態網址 -->
  <p>推薦文件：<a href="#">點我前往 Vue 官方網站</a></p>

  <!-- 任務 2: 請使用 :disabled 綁定 isDisabled 狀態 -->
  <button>立即送出表單</button>

  <p>目前狀態：{{ isDisabled ? '按鈕已停用 (不可點擊)' : '按鈕可正常使用' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const linkUrl = ref('https://vuejs.org');
      const isDisabled = ref(true);

      return {
        linkUrl,
        isDisabled
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>屬性動態綁定練習</h3>
  
  <!-- 任務 1: 使用 :href 綁定 -->
  <p>推薦文件：<a :href="linkUrl" target="_blank">點我前往 Vue 官方網站</a></p>

  <!-- 任務 2: 使用 :disabled 綁定 -->
  <button :disabled="isDisabled">立即送出表單</button>

  <p>目前狀態：{{ isDisabled ? '按鈕已停用 (不可點擊)' : '按鈕可正常使用' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const linkUrl = ref('https://vuejs.org');
      const isDisabled = ref(true);

      return {
        linkUrl,
        isDisabled
      };
    }
  }).mount('#app');
<\/script>`,hints:[`將 href="#" 改為 :href="linkUrl"`,`在 button 標籤中加上 :disabled="isDisabled"`]},{id:`event-handling`,category:`基礎入門篇`,title:`04. 事件監聽 (v-on 與 @)`,summary:`學習使用 v-on 與 @ 監聽點擊、鍵盤等 DOM 事件，並撰寫處理函式驅動畫面變化。`,readTime:`4 分鐘`,concept:'\n### 監聽事件：v-on 與 @\n我們可以使用 `v-on` 指令來監聽 DOM 事件，並在事件觸發時執行 JavaScript。\n```html\n<!-- 完整寫法 -->\n<button v-on:click="count++">加 1</button>\n\n<!-- 縮寫語法（業界標準） -->\n<button @click="count++">加 1</button>\n<button @click="sayHello">打招呼</button>\n```\n\n### 呼叫方法與傳遞參數\n當邏輯比較複雜時，我們會在 `setup()` 中宣告一個方法函式並傳回：\n```javascript\nconst handleClick = (step) => {\n  count.value += step;\n};\n```\n在模板中呼叫：`<button @click="handleClick(5)">加 5</button>`。\n\n### 事件修飾符 (Event Modifiers)\nVue 提供了很貼心的修飾符，例如：\n- `@click.prevent`：等同於呼叫 `event.preventDefault()`（防止跳轉頁面）。\n- `@click.stop`：等同於 `event.stopPropagation()`（防止事件冒泡）。\n    ',task:`
**今日任務：**
1. 完成一個計數器！
2. 為「減少」按鈕添加點擊事件 \`@click="decrement"\`。
3. 為「歸零」按鈕添加點擊事件 \`@click="reset"\`。
4. 點擊下方按鈕測試，確認數字會即時加減並歸零！
    `,starterCode:`<div id="app">
  <h3>計數器：{{ count }}</h3>

  <!-- 點擊增加按鈕已綁定 -->
  <button @click="increment">+ 增加 1</button>

  <!-- 任務：請為以下兩個按鈕加上 @click 監聽 -->
  <button>- 減少 1</button>
  <button>歸零 (Reset)</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const count = ref(0);

      const increment = () => {
        count.value++;
      };

      const decrement = () => {
        count.value--;
      };

      const reset = () => {
        count.value = 0;
      };

      return {
        count,
        increment,
        decrement,
        reset
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>計數器：{{ count }}</h3>

  <button @click="increment">+ 增加 1</button>
  <button @click="decrement">- 減少 1</button>
  <button @click="reset">歸零 (Reset)</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const count = ref(0);

      const increment = () => {
        count.value++;
      };

      const decrement = () => {
        count.value--;
      };

      const reset = () => {
        count.value = 0;
      };

      return {
        count,
        increment,
        decrement,
        reset
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在減少按鈕上寫 @click="decrement"`,`在歸零按鈕上寫 @click="reset"`]},{id:`form-binding-vmodel`,category:`基礎入門篇`,title:`05. 雙向資料綁定 (v-model)`,summary:`掌握 v-model 神奇的雙向同步能力，輕鬆處理 input、checkbox、select 等表單元件。`,readTime:`5 分鐘`,concept:'\n### 什麼是雙向綁定 (Two-way Binding)？\n以往在表單中，我們需要：\n1. 把變數值綁定到 input 的 `value`（資料到畫面）\n2. 監聽 `@input` 事件，在使用者輸入時手動更新變數（畫面到資料）\n\nVue 的 `v-model` 一次性幫你搞定！它會自動建立資料與表單輸入之間的雙向同步：\n```html\n<input v-model="inputText" placeholder="請輸入..." />\n<p>您輸入的是：{{ inputText }}</p>\n```\n\n### 常見表單元素應用\n- **單行輸入框**：`<input v-model="name" />`\n- **多行文字**：`<textarea v-model="message"></textarea>`\n- **核取方塊 (Checkbox)**：`<input type="checkbox" v-model="isChecked" />`（對應 boolean 值）\n- **下拉選單 (Select)**：`<select v-model="selectedFruit">`\n    ',task:`
**今日任務：**
1. 目前 input 輸入框輸入內容時，下方文字並未同步。
2. 請在 \`<input>\` 標籤加上 \`v-model="username"\`。
3. 嘗試在右側即時輸入你的名字，看看下方是否立刻出現問候語！
    `,starterCode:`<div id="app">
  <h3>請輸入您的稱呼：</h3>
  
  <!-- 任務：為 input 加入 v-model="username" -->
  <input type="text" placeholder="例如：Alex" />

  <p style="margin-top: 15px;">
    你好，<strong>{{ username || '陌生訪客' }}</strong>！歡迎來到 Vue 的世界 
  </p>
  
  <label style="display: block; margin-top: 10px;">
    <input type="checkbox" v-model="agreeTerms" /> 我同意學習條款
  </label>
  <p>條款狀態：{{ agreeTerms ? ' 已同意' : ' 尚未勾選' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const username = ref('');
      const agreeTerms = ref(false);

      return {
        username,
        agreeTerms
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>請輸入您的稱呼：</h3>
  
  <!-- 成功加入 v-model 雙向綁定 -->
  <input type="text" v-model="username" placeholder="例如：Alex" />

  <p style="margin-top: 15px;">
    你好，<strong>{{ username || '陌生訪客' }}</strong>！歡迎來到 Vue 的世界 
  </p>
  
  <label style="display: block; margin-top: 10px;">
    <input type="checkbox" v-model="agreeTerms" /> 我同意學習條款
  </label>
  <p>條款狀態：{{ agreeTerms ? ' 已同意' : ' 尚未勾選' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const username = ref('');
      const agreeTerms = ref(false);

      return {
        username,
        agreeTerms
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在 input 標籤中加上 v-model="username"`,`此時你在 input 輸入的任何文字，都會即時更新 username.value`]},{id:`conditional-rendering`,category:`條件與列表篇`,title:`06. 條件渲染 (v-if 與 v-show)`,summary:`學會依據條件決定元素的顯示與隱藏，並理解 v-if 與 v-show 的本質差異與效能考量。`,readTime:`5 分鐘`,concept:'\n### v-if, v-else-if, v-else\n依據表達式的真假值，決定是否在 DOM 中渲染該元素：\n```html\n<div v-if="score >= 90">太神啦！等級 A</div>\n<div v-else-if="score >= 60">恭喜及格！等級 B</div>\n<div v-else>再接再厲！等級 C</div>\n```\n\n### v-if vs v-show 怎麼選？\n- **`v-if`**：真正的條件渲染。條件為假時，元素根本**不會存在於 DOM 結構中**。切換開銷較大。\n- **`v-show`**：無論條件真假，元素**都會渲染到 DOM 中**，僅僅是透過 CSS `display: none` 來控制隱藏。初次載入開銷稍高，但頻繁切換時效能極佳。\n>  **經驗法則**：頻繁切換（如收合面板、Tab 標籤頁）用 `v-show`；條件很少變更（如使用者權限、登入狀態）用 `v-if`。\n    ',task:`
**今日任務：**
1. 練習切換登入狀態。
2. 使用 \`v-if="isLoggedIn"\` 顯示會員歡迎訊息。
3. 使用 \`v-else\` 顯示「請先登入」提示。
4. 點擊「切換狀態」按鈕觀察畫面動態變化！
    `,starterCode:`<div id="app">
  <h3>會員登入狀態展示</h3>
  <button @click="toggleLogin">
    點我切換狀態（目前：{{ isLoggedIn ? '已登入' : '未登入' }}）
  </button>

  <div style="margin-top: 20px; padding: 15px; border-radius: 8px; background: #f0fdf4;">
    <!-- 任務：加上 v-if="isLoggedIn" -->
    <div>
       歡迎回來，尊貴的 VIP 會員！這是您的專屬折扣代碼：<strong>VUE3_2026</strong>
    </div>

    <!-- 任務：加上 v-else -->
    <div>
       您尚未登入，請點擊上方按鈕模擬登入以查看專屬內容。
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isLoggedIn = ref(false);

      const toggleLogin = () => {
        isLoggedIn.value = !isLoggedIn.value;
      };

      return {
        isLoggedIn,
        toggleLogin
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>會員登入狀態展示</h3>
  <button @click="toggleLogin">
    點我切換狀態（目前：{{ isLoggedIn ? '已登入' : '未登入' }}）
  </button>

  <div style="margin-top: 20px; padding: 15px; border-radius: 8px; background: #f0fdf4;">
    <div v-if="isLoggedIn">
       歡迎回來，尊貴的 VIP 會員！這是您的專屬折扣代碼：<strong>VUE3_2026</strong>
    </div>

    <div v-else>
       您尚未登入，請點擊上方按鈕模擬登入以查看專屬內容。
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isLoggedIn = ref(false);

      const toggleLogin = () => {
        isLoggedIn.value = !isLoggedIn.value;
      };

      return {
        isLoggedIn,
        toggleLogin
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在第一個 div 標籤加上 v-if="isLoggedIn"`,`在緊鄰的第二個 div 標籤加上 v-else`]},{id:`list-rendering-vfor`,category:`條件與列表篇`,title:`07. 列表渲染 (v-for 與 :key)`,summary:`使用 v-for 迴圈巡訪陣列與物件，並理解為什麼在 Vue 列表渲染中 :key 必不可少。`,readTime:`5 分鐘`,concept:'\n### 使用 v-for 渲染清單\n`v-for` 指令基於來源陣列來重複渲染元素：\n```html\n<ul>\n  <li v-for="(item, index) in items" :key="item.id">\n    {{ index + 1 }}. {{ item.name }}\n  </li>\n</ul>\n```\n\n### 為什麼一定要綁定 :key？\n`key` 是 Vue 用來追蹤每個節點身份（Identity）的唯一識別標記。\n當陣列順序改變、新增或刪除項目時，Vue 的虛擬 DOM (Virtual DOM) 可以透過 `key` 進行精準高效的複用，避免不必要的重新渲染或表單狀態錯亂。\n>  **新手陷阱**：盡量使用唯一的 `id`（如 `:key="item.id"`），避免使用 `index` 作為 key，尤其是當列表會動態排序或刪除時。\n    ',task:'\n**今日任務：**\n1. 將待辦事項（todos 陣列）使用 `v-for` 渲染至 `<ul>` 清單中。\n2. 記得加上 `:key="todo.id"` 屬性。\n3. 勾選核取方塊，觀察已完成項目是否會自動呈現刪除線效果！\n    ',starterCode:`<div id="app">
  <h3>我的待辦清單 (Todo List)</h3>

  <ul>
    <!-- 任務：為 li 加上 v-for="todo in todos" :key="todo.id" -->
    <li>
      <input type="checkbox" v-model="todos[0].done" />
      <span :style="{ textDecoration: todos[0].done ? 'line-through' : 'none' }">
        {{ todos[0].text }}
      </span>
    </li>
  </ul>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const todos = ref([
        { id: 1, text: '學會 Vue 3 基本語法', done: true },
        { id: 2, text: '熟練 Composition API (ref, reactive)', done: false },
        { id: 3, text: '完成一個全端 Todo 實戰專案', done: false }
      ]);

      return {
        todos
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>我的待辦清單 (Todo List)</h3>

  <ul>
    <li v-for="todo in todos" :key="todo.id" style="margin-bottom: 8px;">
      <input type="checkbox" v-model="todo.done" />
      <span :style="{ textDecoration: todo.done ? 'line-through' : 'none', marginLeft: '8px' }">
        {{ todo.text }}
      </span>
    </li>
  </ul>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const todos = ref([
        { id: 1, text: '學會 Vue 3 基本語法', done: true },
        { id: 2, text: '熟練 Composition API (ref, reactive)', done: false },
        { id: 3, text: '完成一個全端 Todo 實戰專案', done: false }
      ]);

      return {
        todos
      };
    }
  }).mount('#app');
<\/script>`,hints:[`將 li 標籤修改為 <li v-for="todo in todos" :key="todo.id">`,`將裡面的 todos[0] 改為當前迭代變數 todo`]},{id:`reactivity-ref-reactive`,category:`核心響應式篇`,title:`08. 響應式基礎 (ref 與 reactive)`,summary:`深入 Vue 3 Composition API 的心臟：理解 ref() 的 .value 解包機制與 reactive() 物件代理。`,readTime:`6 分鐘`,concept:"\n### ref()：可包裝任何型別\n`ref()` 接受內部值，並回傳一個響應式且可變的 ref 物件：\n```javascript\nconst count = ref(0);\nconst name = ref('Vue');\n```\n- **在 JS 邏輯中**：必須透過 `.value` 讀取或寫入（例如 `count.value++`）。\n- **在 Template 模板中**：Vue 會自動「頂層解包 (Unwrapping)」，因此**不需要**寫 `.value`，直接寫 `{{ count }}` 即可！\n\n### reactive()：專為物件打造\n`reactive()` 透過 ES6 Proxy 將整個物件轉為深層響應式：\n```javascript\nconst state = reactive({ count: 0, title: '測試' });\nstate.count++; // 不需要寫 .value\n```\n>  **最佳實踐**：Vue 官方推薦在多數情況下優先使用 `ref()`，因為它支援基本型別（number, string, boolean），且解構時不易遺失響應性。\n    ",task:"\n**今日任務：**\n1. 查看 `addStock()` 函式，目前沒有正確增加庫存。\n2. 請記得在 JavaScript 代碼中存取 ref 時，必須使用 `.value`！\n3. 修正 `stock.value += 5`，點擊按鈕檢查庫存是否有順利增加。\n    ",starterCode:`<div id="app">
  <h3>商品即時庫存監控</h3>
  <p>商品：旗艦降噪耳機</p>
  <p>目前庫存量：<strong style="color: #3b82f6;">{{ stock }}</strong> 件</p>

  <button @click="addStock">緊急進貨 +5 件</button>
  <button @click="sellOne" :disabled="stock <= 0">售出 1 件</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const stock = ref(10);

      const addStock = () => {
        // 錯誤寫法：直接對 ref 本身賦值會導致報錯或響應性失效
        // stock = stock + 5;
        // 請修正為使用 .value:
      };

      const sellOne = () => {
        if (stock.value > 0) {
          stock.value--;
        }
      };

      return {
        stock,
        addStock,
        sellOne
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>商品即時庫存監控</h3>
  <p>商品：旗艦降噪耳機</p>
  <p>目前庫存量：<strong style="color: #3b82f6;">{{ stock }}</strong> 件</p>

  <button @click="addStock">緊急進貨 +5 件</button>
  <button @click="sellOne" :disabled="stock <= 0">售出 1 件</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const stock = ref(10);

      const addStock = () => {
        stock.value += 5;
      };

      const sellOne = () => {
        if (stock.value > 0) {
          stock.value--;
        }
      };

      return {
        stock,
        addStock,
        sellOne
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在 setup 函式內部，讀取或修改 ref 必須加上 .value，例如 stock.value += 5`,`而在 HTML 模板中，Vue 會自動解包，直接寫 {{ stock }} 即可。`]},{id:`computed-properties`,category:`核心響應式篇`,title:`09. 計算屬性 (computed)`,summary:`避免在模板中寫過於複雜的運算邏輯！認識具備響應式依賴緩存 (Cache) 的 computed()。`,readTime:`5 分鐘`,concept:`
### 為什麼需要 computed？
如果在模板中寫太長的表達式：
\`\`\`html
<!-- 糟糕！難以維護且容易寫錯 -->
<span>{{ author.books.length > 0 ? '已有出版書籍' : '尚未出版' }}</span>
\`\`\`
這會讓模板變得臃腫。此時應該使用**計算屬性 (computed)**！

\`\`\`javascript
import { ref, computed } from 'vue';

const books = ref(['Vue3 指南', 'JavaScript 核心']);
const publishedMessage = computed(() => {
  return books.value.length > 0 ? '已有出版書籍' : '尚未出版';
});
\`\`\`

### computed vs 普通函數 (methods)
- **\`computed\` 具備快取 (Cache)**：只要它依賴的響應式狀態沒有改變，多次讀取時會立即返回快取的結果，不會重新計算，效能極高！
- **函數 (Methods)**：每當頁面重新渲染，方法函式每次都會被重新執行一遍。
    `,task:"\n**今日任務：**\n1. 購物車中有商品單價與數量。\n2. 請使用 `computed()` 建立一個 `totalPrice` 計算屬性（總金額 = `price.value * quantity.value`）。\n3. 改變數量時，觀察總金額是否自動即時重新計算！\n    ",starterCode:`<div id="app">
  <h3>購物車金額試算</h3>
  <p>商品名稱：{{ item }}</p>
  <p>單價：NT$ {{ price }}</p>
  
  <p>
    購買數量：
    <button @click="quantity > 1 ? quantity-- : null">-</button>
    <span style="margin: 0 10px; font-weight: bold;">{{ quantity }}</span>
    <button @click="quantity++">+</button>
  </p>

  <hr />
  <h4>
    訂單總金額：
    <span style="color: #ef4444;">NT$ {{ totalPrice }}</span> 元
  </h4>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const item = ref('無線藍牙機械鍵盤');
      const price = ref(2500);
      const quantity = ref(1);

      // 任務：使用 computed 計算 totalPrice
      const totalPrice = computed(() => {
        // 請完成計算並 return
        return 0;
      });

      return {
        item,
        price,
        quantity,
        totalPrice
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>購物車金額試算</h3>
  <p>商品名稱：{{ item }}</p>
  <p>單價：NT$ {{ price }}</p>
  
  <p>
    購買數量：
    <button @click="quantity > 1 ? quantity-- : null">-</button>
    <span style="margin: 0 10px; font-weight: bold;">{{ quantity }}</span>
    <button @click="quantity++">+</button>
  </p>

  <hr />
  <h4>
    訂單總金額：
    <span style="color: #ef4444;">NT$ {{ totalPrice }}</span> 元
  </h4>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const item = ref('無線藍牙機械鍵盤');
      const price = ref(2500);
      const quantity = ref(1);

      const totalPrice = computed(() => {
        return price.value * quantity.value;
      });

      return {
        item,
        price,
        quantity,
        totalPrice
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在 computed 函式內部使用 return price.value * quantity.value;`]},{id:`watchers-side-effects`,category:`核心響應式篇`,title:`10. 偵聽器 (watch 與副作用)`,summary:`當需要在資料變化時執行異步請求、寫入 LocalStorage 或紀錄 Log 等副作用時，使用 watch。`,readTime:`6 分鐘`,concept:`
### 什麼時候使用 watch？
雖然 \`computed\` 適合計算同步純值，但如果你需要在資料變更時執行**副作用 (Side Effects)**（例如打 API、計時器、操作 LocalStorage），就必須使用 \`watch\`：

\`\`\`javascript
import { ref, watch } from 'vue';

const search = ref('');

// 監聽 search 的變更
watch(search, (newVal, oldVal) => {
  console.log(\`搜尋關鍵字從 "\${oldVal}" 變為 "\${newVal}"\`);
  // 可以在此發送非同步網路請求
});
\`\`\`
    `,task:"\n**今日任務：**\n1. 當使用者在輸入框中打字時，透過 `watch` 監聽 `question` 變數。\n2. 當包含問號 `?` 或 `？` 時，將 `answer` 變為 `'問題正在為您搜尋解答中...'`。\n    ",starterCode:`<div id="app">
  <h3>智慧搜尋小幫手</h3>
  <p>提出一個問題（請以問號結尾）：</p>
  <input v-model="question" placeholder="例如：Vue 3 好學嗎？" style="width: 250px;" />

  <p style="margin-top: 15px; color: #6366f1;">
     小幫手回應：{{ answer }}
  </p>
</div>

<script>
  const { createApp, ref, watch } = Vue;

  createApp({
    setup() {
      const question = ref('');
      const answer = ref('請在上方輸入您的問題...');

      // 任務：使用 watch 監聽 question
      watch(question, (newQuestion) => {
        if (newQuestion.includes('?') || newQuestion.includes('？')) {
          answer.value = '已收到您的問題！Vue 3 採用 Composition API，直覺又強大！';
        } else {
          answer.value = '請在問題最後加上「？」我才能為您解答喔～';
        }
      });

      return {
        question,
        answer
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>智慧搜尋小幫手</h3>
  <p>提出一個問題（請以問號結尾）：</p>
  <input v-model="question" placeholder="例如：Vue 3 好學嗎？" style="width: 250px;" />

  <p style="margin-top: 15px; color: #6366f1;">
     小幫手回應：{{ answer }}
  </p>
</div>

<script>
  const { createApp, ref, watch } = Vue;

  createApp({
    setup() {
      const question = ref('');
      const answer = ref('請在上方輸入您的問題...');

      watch(question, (newQuestion) => {
        if (newQuestion.includes('?') || newQuestion.includes('？')) {
          answer.value = '已收到您的問題！Vue 3 採用 Composition API，直覺又強大！';
        } else {
          answer.value = '請在問題最後加上「？」我才能為您解答喔～';
        }
      });

      return {
        question,
        answer
      };
    }
  }).mount('#app');
<\/script>`,hints:[`在輸入框最後打一個「？」試試看！小幫手就會即時觸發 watch 並更新 answer`]},{id:`component-basics-props`,category:`進階與組件篇`,title:`11. 組件基礎與 Props 傳值`,summary:`認識組件化開發 (Components)，學習如何封裝自訂標籤並透過 Props 向下傳遞資料。`,readTime:`6 分鐘`,concept:`
### 什麼是組件？
組件允許我們將 UI 拆分為獨立、可複用的代碼片段，並對每個片段進行單獨思考。
在 Vue 中，我們可以使用 \`app.component('MyComponent', { ... })\` 定義組件。

### Props：由外向內傳遞資料
Props 是你可以在組件上註冊的自定義屬性。當一個值被傳遞給 prop 時，它就變成了該組件實例上的一個屬性：
\`\`\`html
<!-- 父級模板使用自訂標籤並傳值 -->
<user-card username="小明" role="前端工程師"></user-card>
\`\`\`
    `,task:'\n**今日任務：**\n1. 觀察頁面中已經定義好的 `todo-card` 組件。\n2. 在父模板中傳遞 `:name="course.name"` 與 `:status="course.status"`。\n3. 體驗將介面模組化封裝的優雅之處！\n    ',starterCode:`<div id="app">
  <h3>課程學習進度卡片（組件化實作）</h3>

  <!-- 任務：使用自訂的 todo-card 組件 -->
  <todo-card 
    v-for="course in courses" 
    :key="course.id"
    :name="course.name"
    :status="course.status">
  </todo-card>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const courses = ref([
        { id: 1, name: 'HTML & CSS 基礎', status: '已精通 ' },
        { id: 2, name: 'JavaScript ES6+', status: '已掌握 ' },
        { id: 3, name: 'Vue 3 全面啟航', status: '現正學習中 ' }
      ]);

      return { courses };
    }
  });

  // 註冊可重複使用的子組件
  app.component('todo-card', {
    props: ['name', 'status'],
    template: \`
      <div style="padding: 10px; margin: 8px 0; background: #f8fafc; border-left: 4px solid #42b883; border-radius: 4px;">
        <strong>{{ name }}</strong> - <span style="color: #64748b;">{{ status }}</span>
      </div>
    \`
  });

  app.mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>課程學習進度卡片（組件化實作）</h3>

  <todo-card 
    v-for="course in courses" 
    :key="course.id"
    :name="course.name"
    :status="course.status">
  </todo-card>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const courses = ref([
        { id: 1, name: 'HTML & CSS 基礎', status: '已精通 ' },
        { id: 2, name: 'JavaScript ES6+', status: '已掌握 ' },
        { id: 3, name: 'Vue 3 全面啟航', status: '現正學習中 ' }
      ]);

      return { courses };
    }
  });

  app.component('todo-card', {
    props: ['name', 'status'],
    template: \`
      <div style="padding: 10px; margin: 8px 0; background: #f8fafc; border-left: 4px solid #42b883; border-radius: 4px; display: flex; justify-content: space-between;">
        <strong>{{ name }}</strong>
        <span style="color: #42b883; font-weight: 500;">{{ status }}</span>
      </div>
    \`
  });

  app.mount('#app');
<\/script>`,hints:[`透過 app.component 建立獨立元件，在模板裡就能像寫原生 HTML 標籤一樣使用！`]},{id:`component-emits`,category:`進階組件篇`,title:`12. 子傳父通訊：自訂事件 (defineEmits 與 $emit)`,summary:`組件不能只是單向接收資料！學習子組件如何透過自訂事件通知父層更新狀態或觸發操作。`,readTime:`6 分鐘`,concept:`
### 單向資料流 (One-Way Data Flow)
在 Vue 中，父組件透過 Props 向下傳遞資料給子組件。
但**子組件不能直接修改父組件傳過來的 prop**，否則會破壞資料流向，造成難以追蹤的 Bug。

### 子組件如何通知父層？
子組件必須透過「發射事件 (Emit)」來主動通知父組件：
1. **在子組件中**：使用 \`emit('事件名稱', 傳遞參數)\` 發射事件。
2. **在父組件中**：使用 \`@事件名稱="處理函式"\` 監聽該事件並做出對應動作。

\`\`\`html
<!-- 子組件發射自訂 change 狀態 -->
<button @click="$emit('toggle-switch')">切換狀態</button>

<!-- 父組件監聽並改變資料 -->
<my-switch @toggle-switch="handleSwitchChange"></my-switch>
\`\`\`

在現代 Vue 3 \`<script setup>\` 中，推薦使用 \`defineEmits(['toggle-switch'])\` 進行明確聲明。
    `,task:`
任務指引：
1. 觀察畫面上的開關切換組件。
2. 目前點擊子組件按鈕時，並未正確通知父層切換狀態。
3. 為子組件按鈕加入點擊發射事件，讓父層的「設備運轉狀態」能夠即時連動切換！
    `,starterCode:`<div id="app">
  <h3>設備遠端控制台</h3>
  <p>目前設備運轉狀態：<strong>{{ isPowerOn ? '運轉中 (ON)' : '已停機 (OFF)' }}</strong></p>

  <!-- 監聽子組件發出的 power-toggle 事件 -->
  <power-switch :is-on="isPowerOn" @power-toggle="handleToggle"></power-switch>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const isPowerOn = ref(false);

      const handleToggle = () => {
        isPowerOn.value = !isPowerOn.value;
      };

      return {
        isPowerOn,
        handleToggle
      };
    }
  });

  // 子組件：電源開關按鈕
  app.component('power-switch', {
    props: ['isOn'],
    emits: ['power-toggle'],
    template: \`
      <button 
        @click="$emit('power-toggle')"
        :style="{
          padding: '8px 16px',
          background: isOn ? '#42b883' : '#e2e8f0',
          color: isOn ? '#ffffff' : '#475569',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }">
        {{ isOn ? '關閉設備' : '啟動設備' }}
      </button>
    \`
  });

  app.mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>設備遠端控制台</h3>
  <p>目前設備運轉狀態：<strong>{{ isPowerOn ? '運轉中 (ON)' : '已停機 (OFF)' }}</strong></p>

  <power-switch :is-on="isPowerOn" @power-toggle="handleToggle"></power-switch>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const isPowerOn = ref(false);

      const handleToggle = () => {
        isPowerOn.value = !isPowerOn.value;
      };

      return {
        isPowerOn,
        handleToggle
      };
    }
  });

  app.component('power-switch', {
    props: ['isOn'],
    emits: ['power-toggle'],
    template: \`
      <button 
        @click="$emit('power-toggle')"
        :style="{
          padding: '8px 16px',
          background: isOn ? '#42b883' : '#e2e8f0',
          color: isOn ? '#ffffff' : '#475569',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }">
        {{ isOn ? '關閉設備' : '啟動設備' }}
      </button>
    \`
  });

  app.mount('#app');
<\/script>`,hints:[`子組件透過 @click="$emit('power-toggle')" 即可把事件冒泡給父組件。`,`父組件在標籤上用 @power-toggle="handleToggle" 接收並改變 isPowerOn 狀態。`]},{id:`component-slots`,category:`進階組件篇`,title:`13. 組件插槽設計 (Slots)：打造通用版面外框`,summary:`除了傳遞字串與數值，如何把一整段 HTML 結構傳入組件中？學會使用 Slot 封裝彈窗、卡片與頁面容器。`,readTime:`6 分鐘`,concept:`
### 為什麼需要插槽 (Slots)？
如果只有 Props，當我們想做一個「通用卡片 (Card)」或「彈窗 (Modal)」時，很難客製化內部的複雜排版。
Vue 提供了 \`<slot></slot>\` 作為插槽出口，讓父組件可以在子組件的標籤內部插入自訂的 HTML 結構！

\`\`\`html
<!-- 子組件模板定義插槽位置 -->
<div class="card">
  <div class="card-header">{{ title }}</div>
  <div class="card-body">
    <slot><!-- 外部傳進來的內容會呈現在這裡 --></slot>
  </div>
</div>

<!-- 父組件呼叫並填入內容 -->
<base-card title="監控告警通知">
  <p>冷卻水塔水溫超過安全閥值！</p>
  <button>立即處理</button>
</base-card>
\`\`\`

### 具名插槽 (Named Slots)
當一個組件有多個區塊需要自訂（例如 header, content, footer）時，可以使用具名插槽：
- 子組件：\`<slot name="header"></slot>\`
- 父組件：\`<template #header>自訂標頭內容</template>\`
    `,task:`
任務指引：
1. 觀察定義好的通用監控卡片組件 \`monitor-card\`。
2. 嘗試在組件內部加入一段表格或警告提示，觀察內容如何精確嵌入在卡片主體中！
    `,starterCode:`<div id="app">
  <h3>監控面板外框展示</h3>

  <!-- 使用通用卡片組件 -->
  <monitor-card title="空調主機系統">
    <!-- 透過預設插槽傳入內容 -->
    <p style="color: #42b883; font-weight: bold;">運轉頻率：60 Hz</p>
    <p>冰水進水溫度：12.5 度</p>
    <p>冰水出水溫度：7.2 度</p>
  </monitor-card>

  <monitor-card title="電力需量總覽">
    <p style="color: #f59e0b; font-weight: bold;">目前負載率：78%</p>
    <p>契約容量：500 kW</p>
  </monitor-card>
</div>

<script>
  const { createApp } = Vue;

  const app = createApp({});

  // 註冊通用卡片容器
  app.component('monitor-card', {
    props: ['title'],
    template: \`
      <div style="border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 12px; background: white; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <div style="background: #f8fafc; padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
          {{ title }}
        </div>
        <div style="padding: 14px;">
          <!-- 核心插槽出口 -->
          <slot></slot>
        </div>
      </div>
    \`
  });

  app.mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>監控面板外框展示</h3>

  <monitor-card title="空調主機系統">
    <p style="color: #42b883; font-weight: bold;">運轉頻率：60 Hz</p>
    <p>冰水進水溫度：12.5 度</p>
    <p>冰水出水溫度：7.2 度</p>
  </monitor-card>

  <monitor-card title="電力需量總覽">
    <p style="color: #f59e0b; font-weight: bold;">目前負載率：78%</p>
    <p>契約容量：500 kW</p>
  </monitor-card>
</div>

<script>
  const { createApp } = Vue;

  const app = createApp({});

  app.component('monitor-card', {
    props: ['title'],
    template: \`
      <div style="border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 12px; background: white; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <div style="background: #f8fafc; padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
          {{ title }}
        </div>
        <div style="padding: 14px;">
          <slot></slot>
        </div>
      </div>
    \`
  });

  app.mount('#app');
<\/script>`,hints:[`Slot 就像是組件預留的一個佔位插槽，外部傳什麼 HTML，裡面就渲染什麼。`]},{id:`composables-pattern`,category:`進階組件篇`,title:`14. 組合式邏輯抽離 (Composables：use...)`,summary:`告別舊式 Mixins 命名衝突！學習如何將重複的業務邏輯（計時器、分頁、網路請求）封裝為獨立函式。`,readTime:`7 分鐘`,concept:`
### 什麼是 Composable（組合式函式）？
在 Vue 3 Composition API 中，「Composable」是一個利用 Vue 響應式系統來封裝和重用**有狀態邏輯 (Stateful Logic)** 的函式。
按照約定，函式名稱一律以 \`use\` 開頭，例如 \`useRealtime\`、\`useTable\`、\`useWindowSize\`。

### 為什麼它比舊版 Mixins 強大？
1. **來源清晰**：在組件中明確解構呼叫，一眼看出變數來自哪個函式。
2. **無命名衝突**：可自由重命名變數。
3. **低耦合、易於單元測試**：不依賴組件實例也能獨立運作。

\`\`\`javascript
// 一個獨立的 Composable 範例
function useTimer() {
  const seconds = ref(0);
  let timer = null;

  onMounted(() => {
    timer = setInterval(() => { seconds.value++; }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return { seconds };
}
\`\`\`
    `,task:`
任務指引：
1. 右側定義了一個封裝好的 \`useCounter(initialValue, step)\` 組合式函式。
2. 觀察兩個獨立的計數器如何共用這套邏輯，卻擁有各自完全隔離的狀態！
    `,starterCode:`<div id="app">
  <h3>Composable 邏輯複用實戰</h3>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 10px;">
    <h4>A 主機計數：{{ counterA.count }}</h4>
    <button @click="counterA.inc">增加 1</button>
    <button @click="counterA.reset">歸零</button>
  </div>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <h4>B 主機計數（每次加 5）：{{ counterB.count }}</h4>
    <button @click="counterB.inc">增加 5</button>
    <button @click="counterB.reset">歸零</button>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  // 定義可複用的 Composable 函式
  function useCounter(initialVal = 0, step = 1) {
    const count = ref(initialVal);
    const inc = () => { count.value += step; };
    const reset = () => { count.value = initialVal; };
    return { count, inc, reset };
  }

  createApp({
    setup() {
      // 呼叫兩次，各自擁有獨立狀態
      const counterA = useCounter(0, 1);
      const counterB = useCounter(10, 5);

      return {
        counterA,
        counterB
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>Composable 邏輯複用實戰</h3>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 10px;">
    <h4>A 主機計數：{{ counterA.count }}</h4>
    <button @click="counterA.inc">增加 1</button>
    <button @click="counterA.reset">歸零</button>
  </div>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <h4>B 主機計數（每次加 5）：{{ counterB.count }}</h4>
    <button @click="counterB.inc">增加 5</button>
    <button @click="counterB.reset">歸零</button>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  function useCounter(initialVal = 0, step = 1) {
    const count = ref(initialVal);
    const inc = () => { count.value += step; };
    const reset = () => { count.value = initialVal; };
    return { count, inc, reset };
  }

  createApp({
    setup() {
      const counterA = useCounter(0, 1);
      const counterB = useCounter(10, 5);

      return {
        counterA,
        counterB
      };
    }
  }).mount('#app');
<\/script>`,hints:[`Composable 函式返回的響應式 ref 在外部呼叫時依然保持響應性。`]},{id:`spa-router-vs-iframe`,category:`系統現代化篇`,title:`15. 單頁應用 (SPA) 與拆除 iframe 導航思維`,summary:`深入理解傳統系統使用 iframe 導航的核心痛點，以及如何用 Vue Router 實現無縫平滑的單頁應用。`,readTime:`7 分鐘`,concept:'\n### 傳統後台系統使用 iframe 的三大痛點\n許多傳統專案會使用 `index.html` 作為外框，透過 `<iframe src="page1.html">` 來切換頁面。看似簡單，但帶來嚴重後遺症：\n1. **響應式 (RWD) 的硬傷**：iframe 內部頁面無法感知外部瀏覽器的真實視窗尺寸，導致 CSS 媒體查詢 (Media Queries) 互相衝突打架。\n2. **全域狀態嚴重耦合**：子頁面為了拿到登入者資料，被迫寫滿 `window.parent.userData` 或 `window.top.findWindow()`，元件無法獨立測試與模組化。\n3. **頁面效能與重複載入**：每次切換 iframe，子頁面就必須把 jQuery、Bootstrap、CSS 全部重新下載並解析一遍，造成行動端首屏極慢。\n\n### Vue Router 解決方案\n在 Vue SPA（單頁應用程式）中：\n- 整個網站只有一個 `index.html`，所有頁面由 **Vue Router** 動態抽換。\n- 透過 `<router-view></router-view>` 作為視圖容器。\n- 透過 `<router-link to="/devices">` 導航，切換時只抽換組件，**不重新整理整個瀏覽器，秒開且資料完全共享**！\n    ',task:`
任務指引：
1. 體驗右側模擬的 SPA 路由切換機制。
2. 點擊「設備監控」與「系統告警」選單，觀察視圖如何在不重新整理頁面的情況下平滑抽換。
    `,starterCode:`<div id="app">
  <div style="display: flex; gap: 10px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
    <button 
      @click="currentRoute = 'devices'"
      :style="{ fontWeight: currentRoute === 'devices' ? 'bold' : 'normal', color: currentRoute === 'devices' ? '#42b883' : '#64748b' }">
      設備監控清單
    </button>
    <button 
      @click="currentRoute = 'alarms'"
      :style="{ fontWeight: currentRoute === 'alarms' ? 'bold' : 'normal', color: currentRoute === 'alarms' ? '#42b883' : '#64748b' }">
      即時告警中心
    </button>
  </div>

  <!-- 模擬 RouterView：依當前路徑渲染不同組件 -->
  <div style="padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
    <component :is="activeComponent"></component>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  // 定義兩個不同路由對應的頁面組件
  const DevicesPage = {
    template: '<div><h4>設備列表</h4><p>在線設備：12 台 | 離線設備：0 台</p></div>'
  };

  const AlarmsPage = {
    template: '<div><h4>即時告警</h4><p style="color: #ef4444;">目前系統運行正常，無未處理告警。</p></div>'
  };

  createApp({
    setup() {
      const currentRoute = ref('devices');

      const activeComponent = computed(() => {
        return currentRoute.value === 'devices' ? DevicesPage : AlarmsPage;
      });

      return {
        currentRoute,
        activeComponent
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <div style="display: flex; gap: 10px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
    <button 
      @click="currentRoute = 'devices'"
      :style="{ fontWeight: currentRoute === 'devices' ? 'bold' : 'normal', color: currentRoute === 'devices' ? '#42b883' : '#64748b' }">
      設備監控清單
    </button>
    <button 
      @click="currentRoute = 'alarms'"
      :style="{ fontWeight: currentRoute === 'alarms' ? 'bold' : 'normal', color: currentRoute === 'alarms' ? '#42b883' : '#64748b' }">
      即時告警中心
    </button>
  </div>

  <div style="padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
    <component :is="activeComponent"></component>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  const DevicesPage = {
    template: '<div><h4>設備列表</h4><p>在線設備：12 台 | 離線設備：0 台</p></div>'
  };

  const AlarmsPage = {
    template: '<div><h4>即時告警</h4><p style="color: #ef4444;">目前系統運行正常，無未處理告警。</p></div>'
  };

  createApp({
    setup() {
      const currentRoute = ref('devices');

      const activeComponent = computed(() => {
        return currentRoute.value === 'devices' ? DevicesPage : AlarmsPage;
      });

      return {
        currentRoute,
        activeComponent
      };
    }
  }).mount('#app');
<\/script>`,hints:[`SPA 的核心本質就是：頁面外框不重載，透過 JS 狀態動態抽換內容組件。`]},{id:`hash-router-vs-history`,category:`系統現代化篇`,title:`16. 路由歷史模式：為什麼內網系統推薦 Hash 模式？`,summary:`搞懂 createWebHistory 與 createWebHashHistory 的差別，以及為什麼在舊伺服器環境中 Hash 模式是零風險上線的最佳選擇。`,readTime:`6 分鐘`,concept:`
### History 模式 vs Hash 模式

#### 1. HTML5 History 模式 (\`createWebHistory\`)
- 網址外觀：\`https://example.com/devices/123\`
- **致命前置條件**：必須在後端伺服器（Nginx、Apache 或 Node）配置 **URL 重寫 (Rewrite Rule)**。
  因為當使用者在 \`/devices/123\` 按下 F5 重新整理時，瀏覽器會向伺服器請求該路徑，若伺服器沒有把請求導回 \`index.html\`，就會直接噴 **404 Not Found**！

#### 2. Hash 模式 (\`createWebHashHistory\`)
- 網址外觀：\`https://example.com/#/devices/123\`
- 核心優勢：**\`#\` 井字號後面的路徑，瀏覽器永遠不會發送給後端伺服器！**
  所有的路由全在客戶端瀏覽器內部解析。

### 為什麼改造傳統後台時極力推薦 Hash 模式？
在許多既有企業系統中，後端採用嵌入式 Jetty、舊版 Tomcat 或單純的靜態檔案伺服器，**根本沒有設定 SPA 重寫規則**。
如果貿然採用 History 模式，就必須動用後端工程師去改伺服器配置。
而採用 **Hash 模式搭配 \`base: './'\` 相對路徑**，前端建置產物丟進任何子資料夾就能直接跑，完全不需要修改任何後端設定！
    `,task:`
任務指引：
1. 觀察頁面中模擬的 URL Hash 變化。
2. 點擊不同頁面按鈕，觀察 window.location.hash 是如何帶動頁面即時變更的。
    `,starterCode:`<div id="app">
  <h3>Hash 路由運作原理展示</h3>
  <p>模擬目前瀏覽器網址：<code>http://localhost:8080/#/{{ activeHash }}</code></p>

  <div style="margin: 15px 0;">
    <button @click="navigate('dashboard')">前往 /#/dashboard</button>
    <button @click="navigate('device-list')">前往 /#/device-list</button>
    <button @click="navigate('user-profile')">前往 /#/user-profile</button>
  </div>

  <div style="padding: 14px; background: #f1f5f9; border-left: 4px solid #3b82f6;">
    當前顯示頁面：<strong>{{ pageTitle }}</strong>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const activeHash = ref('dashboard');

      const navigate = (hash) => {
        activeHash.value = hash;
      };

      const pageTitle = computed(() => {
        switch(activeHash.value) {
          case 'device-list': return '設備清單頁面';
          case 'user-profile': return '個人資料設定頁面';
          default: return '總覽儀表板頁面';
        }
      });

      return {
        activeHash,
        navigate,
        pageTitle
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>Hash 路由運作原理展示</h3>
  <p>模擬目前瀏覽器網址：<code>http://localhost:8080/#/{{ activeHash }}</code></p>

  <div style="margin: 15px 0;">
    <button @click="navigate('dashboard')">前往 /#/dashboard</button>
    <button @click="navigate('device-list')">前往 /#/device-list</button>
    <button @click="navigate('user-profile')">前往 /#/user-profile</button>
  </div>

  <div style="padding: 14px; background: #f1f5f9; border-left: 4px solid #3b82f6;">
    當前顯示頁面：<strong>{{ pageTitle }}</strong>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const activeHash = ref('dashboard');

      const navigate = (hash) => {
        activeHash.value = hash;
      };

      const pageTitle = computed(() => {
        switch(activeHash.value) {
          case 'device-list': return '設備清單頁面';
          case 'user-profile': return '個人資料設定頁面';
          default: return '總覽儀表板頁面';
        }
      });

      return {
        activeHash,
        navigate,
        pageTitle
      };
    }
  }).mount('#app');
<\/script>`,hints:[`Hash 模式在任何環境下按重新整理都不會報 404，是舊系統升級最安全的手段。`]},{id:`router-guards-auth`,category:`系統現代化篇`,title:`17. 路由守衛與權限驗證 (beforeEach 與 meta)`,summary:`未登入不能看內部頁面！學習使用 Vue Router 全域前置守衛 beforeEach 檢查 Token 與自動導向。`,readTime:`7 分鐘`,concept:`
### 什麼是路由守衛 (Navigation Guards)？
在商業系統中，許多頁面（如設備列表、系統設定）必須驗證登入身分才允許存取。
Vue Router 提供了 \`router.beforeEach\` 全域鉤子，在每一次路由切換前進行檢查與攔截。

### 路由 meta 定義公開頁面
我們可以在路由表中加上 \`meta\` 屬性標記：
\`\`\`javascript
const routes = [
  { path: '/login', component: Login, meta: { public: true } },
  { path: '/devices', component: Devices, meta: { public: false } }
];
\`\`\`

### 經典登入守衛邏輯
\`\`\`javascript
router.beforeEach((to, from) => {
  const token = localStorage.getItem('auth_token');

  // 如果目標頁面不是公開頁面，且使用者尚未登入
  if (!to.meta.public && !token) {
    // 攔截並導回登入頁，同時把原本要去的路徑存入 query.r
    return { path: '/login', query: { r: to.fullPath } };
  }
});
\`\`\`
當使用者在登入頁成功登入後，就能精準導回原本想去的頁面（例如 \`/devices\`）。
    `,task:`
任務指引：
1. 目前系統處於「未登入狀態」。
2. 嘗試點擊進入「受保護的內部設備清單」，觀察守衛如何自動攔截並強制跳轉至登入頁。
3. 點擊「模擬登入」後，再次點擊即可暢行無阻！
    `,starterCode:`<div id="app">
  <h3>導航守衛權限模擬器</h3>
  <div style="margin-bottom: 12px;">
    目前登入狀態：<strong>{{ isAuthed ? '已登入 (Token 存在)' : '未登入 (無 Token)' }}</strong>
    <button @click="isAuthed = !isAuthed" style="margin-left: 10px;">
      {{ isAuthed ? '登出系統' : '模擬成功登入' }}
    </button>
  </div>

  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <button @click="tryNavigate('home', true)">前往 公開首頁 (免登入)</button>
    <button @click="tryNavigate('devices', false)">前往 內部設備頁 (需登入)</button>
    <button @click="tryNavigate('settings', false)">前往 系統設定頁 (需登入)</button>
  </div>

  <div style="padding: 14px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前所在頁面：<strong>{{ currentPage }}</strong></p>
    <p v-if="guardMessage" style="color: #ef4444; font-weight: bold;">
      攔截通知：{{ guardMessage }}
    </p>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isAuthed = ref(false);
      const currentPage = ref('公開首頁');
      const guardMessage = ref('');

      // 模擬 beforeEach 路由守衛
      const tryNavigate = (pageKey, isPublic) => {
        guardMessage.value = '';

        if (!isPublic && !isAuthed.value) {
          guardMessage.value = '權限不足！偵測到尚未登入，路由守衛自動攔截並跳轉至登入頁。';
          currentPage.value = '登入頁面 (Login)';
          return;
        }

        currentPage.value = pageKey === 'home' ? '公開首頁' : pageKey === 'devices' ? '內部設備管理頁' : '系統後台設定頁';
      };

      return {
        isAuthed,
        currentPage,
        guardMessage,
        tryNavigate
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>導航守衛權限模擬器</h3>
  <div style="margin-bottom: 12px;">
    目前登入狀態：<strong>{{ isAuthed ? '已登入 (Token 存在)' : '未登入 (無 Token)' }}</strong>
    <button @click="isAuthed = !isAuthed" style="margin-left: 10px;">
      {{ isAuthed ? '登出系統' : '模擬成功登入' }}
    </button>
  </div>

  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <button @click="tryNavigate('home', true)">前往 公開首頁 (免登入)</button>
    <button @click="tryNavigate('devices', false)">前往 內部設備頁 (需登入)</button>
    <button @click="tryNavigate('settings', false)">前往 系統設定頁 (需登入)</button>
  </div>

  <div style="padding: 14px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前所在頁面：<strong>{{ currentPage }}</strong></p>
    <p v-if="guardMessage" style="color: #ef4444; font-weight: bold;">
      攔截通知：{{ guardMessage }}
    </p>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isAuthed = ref(false);
      const currentPage = ref('公開首頁');
      const guardMessage = ref('');

      const tryNavigate = (pageKey, isPublic) => {
        guardMessage.value = '';

        if (!isPublic && !isAuthed.value) {
          guardMessage.value = '權限不足！偵測到尚未登入，路由守衛自動攔截並跳轉至登入頁。';
          currentPage.value = '登入頁面 (Login)';
          return;
        }

        currentPage.value = pageKey === 'home' ? '公開首頁' : pageKey === 'devices' ? '內部設備管理頁' : '系統後台設定頁';
      };

      return {
        isAuthed,
        currentPage,
        guardMessage,
        tryNavigate
      };
    }
  }).mount('#app');
<\/script>`,hints:[`透過 beforeEach 可以在使用者點擊連結的第一時間攔截，保護內部機密頁面。`]},{id:`pinia-state-management`,category:`系統現代化篇`,title:`18. 全局狀態管理：Pinia 核心實戰`,summary:`徹底告別 window.parent 與全域變數混亂！學習使用官方推薦的 Pinia Store 集中管理 Token、使用者資訊與跨頁資料。`,readTime:`7 分鐘`,concept:"\n### 傳統系統全域變數的災難\n傳統專案常把登入資訊直接掛在全域：\n```javascript\n// 傳統危險寫法：任何腳本都能隨意修改，出 Bug 找不到源頭\nwindow.userData = { name: 'admin', role: 'root' };\nwindow.token = 'abc123xyz';\n```\n跨頁面時還得透過 `window.parent` 存取，極易發生 undefined 錯誤。\n\n### 現代狀態管理標準：Pinia\nPinia 是 Vue 官方推薦的狀態管理庫：\n1. **定義 Store**：使用 `defineStore('auth', () => { ... })`。\n2. **三核心要素**：\n   - **State**：存放資料（如 `token`, `user`）。\n   - **Getters**：衍生計算（如 `isLoggedIn`）。\n   - **Actions**：業務方法（如 `login()`, `logout()`）。\n3. **跨組件自由取用**：任何組件只需 `const auth = useAuthStore()` 就能取得最新資料，資料修改時全站所有使用到的畫面自動連動更新！\n    ",task:`
任務指引：
1. 觀察右側模擬的 Pinia 集中式狀態庫。
2. 在頂部修改使用者名稱或登入狀態，觀察下方兩個不同的子組件如何即時同步更新！
    `,starterCode:`<div id="app">
  <h3>Pinia 全局狀態集中管理模擬</h3>

  <div style="padding: 12px; background: #e0f2fe; border-radius: 6px; margin-bottom: 15px;">
    <strong>全域 Store 控制台：</strong>
    <button @click="authStore.login('系統工程師 Alex')">登入帳號</button>
    <button @click="authStore.logout">登出帳號</button>
  </div>

  <!-- 組件 1：頂部導覽列頭像 -->
  <div style="padding: 10px; border: 1px solid #cbd5e1; margin-bottom: 10px; border-radius: 6px;">
    <span>【導覽列組件】狀態：{{ authStore.isAuthed ? '在線' : '離線' }} | 使用者：{{ authStore.username }}</span>
  </div>

  <!-- 組件 2：主內容操作頁 -->
  <div style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <span>【儀表板組件】歡迎詞：{{ authStore.isAuthed ? '歡迎回來，' + authStore.username : '請先點擊上方登入' }}</span>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  // 模擬 Pinia Store 的封裝
  function createAuthStore() {
    const username = ref('訪客');
    const token = ref(null);

    const isAuthed = computed(() => !!token.value);

    const login = (name) => {
      username.value = name;
      token.value = 'jwt_token_sample_12345';
    };

    const logout = () => {
      username.value = '訪客';
      token.value = null;
    };

    return { username, token, isAuthed, login, logout };
  }

  createApp({
    setup() {
      // 實例化全域單例 Store
      const authStore = createAuthStore();

      return {
        authStore
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>Pinia 全局狀態集中管理模擬</h3>

  <div style="padding: 12px; background: #e0f2fe; border-radius: 6px; margin-bottom: 15px;">
    <strong>全域 Store 控制台：</strong>
    <button @click="authStore.login('系統工程師 Alex')">登入帳號</button>
    <button @click="authStore.logout">登出帳號</button>
  </div>

  <div style="padding: 10px; border: 1px solid #cbd5e1; margin-bottom: 10px; border-radius: 6px;">
    <span>【導覽列組件】狀態：{{ authStore.isAuthed ? '在線' : '離線' }} | 使用者：{{ authStore.username }}</span>
  </div>

  <div style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <span>【儀表板組件】歡迎詞：{{ authStore.isAuthed ? '歡迎回來，' + authStore.username : '請先點擊上方登入' }}</span>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  function createAuthStore() {
    const username = ref('訪客');
    const token = ref(null);

    const isAuthed = computed(() => !!token.value);

    const login = (name) => {
      username.value = name;
      token.value = 'jwt_token_sample_12345';
    };

    const logout = () => {
      username.value = '訪客';
      token.value = null;
    };

    return { username, token, isAuthed, login, logout };
  }

  createApp({
    setup() {
      const authStore = createAuthStore();

      return {
        authStore
      };
    }
  }).mount('#app');
<\/script>`,hints:[`Pinia 讓資料不用層層傳遞，跨頁面、跨組件只要引入同一個 Store 即可隨取隨用。`]},{id:`axios-interceptor-api`,category:`系統現代化篇`,title:`19. 現代 API 層封裝：Axios 攔截器與 Token 處理`,summary:`淘汰舊式 $.ajax 回呼地獄！學習封裝 Axios 實例，透過 Request 攔截器自動附帶 Token，透過 Response 攔截器自動處理 401 登出。`,readTime:`8 分鐘`,concept:`
### 為什麼要淘汰 $.ajax？
舊系統常看到滿滿的 \`$.ajax({ url, success: function(res) { ... } })\`，除了無法妥善使用現代 \`async/await\` 語法外，最大問題是：**每支 API 都必須手動傳遞 Token、手動檢查錯誤碼**，漏寫一個就會引發資安或崩潰問題。

### 現代 API 模組化封裝三步驟
1. **建立專屬實例 (Instance)**：
   \`\`\`javascript
   const http = axios.create({ baseURL: '/api', timeout: 10000 });
   \`\`\`
2. **Request 請求攔截器 (攔截出站)**：
   在送出請求前，自動從儲存庫取出 Token 並塞入 Header：
   \`\`\`javascript
   http.interceptors.request.use(config => {
     const token = localStorage.getItem('token');
     if (token) config.headers.Authorization = token;
     return config;
   });
   \`\`\`
3. **Response 回應攔截器 (攔截進站)**：
   統一處理 HTTP 401 / 403 憑證過期，或在後端習慣回傳 \`{ result: 1 }\` 時自動 throw 例外，讓前端頁面只需寫乾淨的 \`try/catch\`！
    `,task:`
任務指引：
1. 查看右側模擬的 Axios 攔截器管道。
2. 點擊「送出帶有 Token 的請求」與「模擬 Token 過期 401」，體會攔截器自動為開發者省下的龐大重複代碼！
    `,starterCode:`<div id="app">
  <h3>API 請求攔截器管道展示</h3>

  <div style="margin-bottom: 15px;">
    <button @click="sendRequest(false)">正常發送 API 請求</button>
    <button @click="sendRequest(true)">模擬 Token 過期 (401 錯誤)</button>
  </div>

  <div style="padding: 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px;">
    <p><strong>請求紀錄 Log：</strong></p>
    <ul>
      <li v-for="(log, i) in requestLogs" :key="i">{{ log }}</li>
    </ul>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const requestLogs = ref([]);

      // 模擬攔截器發送邏輯
      const sendRequest = (isExpired) => {
        requestLogs.value = [];

        // 1. Request 攔截器階段
        requestLogs.value.push('[Request 攔截器] 檢查 Token... 自動注入 Header: Authorization: sample_token_8899');

        // 2. 模擬網路發送
        setTimeout(() => {
          if (isExpired) {
            // 3. Response 攔截器階段 (異常)
            requestLogs.value.push('[Response 攔截器] 收到 401 授權過期！自動清除本地 Token 並準備重導向至登入頁。');
          } else {
            // 3. Response 攔截器階段 (正常)
            requestLogs.value.push('[Response 攔截器] 收到 200 OK，unwrap 資料成功解包傳回組件！');
          }
        }, 300);
      };

      return {
        requestLogs,
        sendRequest
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>API 請求攔截器管道展示</h3>

  <div style="margin-bottom: 15px;">
    <button @click="sendRequest(false)">正常發送 API 請求</button>
    <button @click="sendRequest(true)">模擬 Token 過期 (401 錯誤)</button>
  </div>

  <div style="padding: 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px;">
    <p><strong>請求紀錄 Log：</strong></p>
    <ul>
      <li v-for="(log, i) in requestLogs" :key="i">{{ log }}</li>
    </ul>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const requestLogs = ref([]);

      const sendRequest = (isExpired) => {
        requestLogs.value = [];

        requestLogs.value.push('[Request 攔截器] 檢查 Token... 自動注入 Header: Authorization: sample_token_8899');

        setTimeout(() => {
          if (isExpired) {
            requestLogs.value.push('[Response 攔截器] 收到 401 授權過期！自動清除本地 Token 並準備重導向至登入頁。');
          } else {
            requestLogs.value.push('[Response 攔截器] 收到 200 OK，unwrap 資料成功解包傳回組件！');
          }
        }, 300);
      };

      return {
        requestLogs,
        sendRequest
      };
    }
  }).mount('#app');
<\/script>`,hints:[`透過 Axios 攔截器，全專案幾百個 API 請求都不需要重複手寫 Token 設定與 401 判斷。`]},{id:`mock-mode-architecture`,category:`架構實戰篇`,title:`20. 隔離開發技巧：Mock 模式與環境切換`,summary:`後端機台還沒準備好怎麼辦？學習透過環境變數無縫切換 Mock 資料與真實 API，實現前端零依賴獨立開發。`,readTime:`6 分鐘`,concept:`
### 為什麼企業開發極度需要 Mock 模式？
在硬體、物聯網、廠區監控等專案中，開發者常常無法隨時連線到實體機台（可能在現場內網、或者機台尚未通電）。
若前端完全依賴真實機台才能開發，專案進度會嚴重卡死。

### 優秀的 Mock 架構原則
1. **形狀完全對齊真實 API**：Mock 回傳的 JSON 欄位名稱必須與後端規格 100% 一致。
2. **切換時零改動組件**：透過 \`VITE_USE_MOCK=true\` 或 \`false\` 環境變數，由 API 轉接層自動決定返回真實請求還是假資料，Vue 畫面組件完全不需要改動任何一行代碼！
    `,task:`
任務指引：
1. 觀察畫面上的「資料來源切換開關」。
2. 切換為 Mock 模式與真實 API 模式，體驗前端如何做到無縫隔離開發！
    `,starterCode:`<div id="app">
  <h3>Mock 模式切換架構展示</h3>

  <div style="padding: 10px; background: #f1f5f9; border-radius: 6px; margin-bottom: 12px;">
    目前資料來源模式：
    <strong :style="{ color: isMock ? '#f59e0b' : '#3b82f6' }">
      {{ isMock ? '示範 Mock 假資料模式 (不連真實機台)' : '真實連線模式 (直接呼叫後端 API)' }}
    </strong>
    <br />
    <button @click="isMock = !isMock" style="margin-top: 8px;">
      切換為 {{ isMock ? '真實 API' : 'Mock 模式' }}
    </button>
  </div>

  <h4>設備即時讀值：</h4>
  <ul>
    <li v-for="dev in devices" :key="dev.id">
      {{ dev.name }} - 狀態：{{ dev.status }} (溫度：{{ dev.temp }} 度)
    </li>
  </ul>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isMock = ref(true);

      const mockData = [
        { id: 'dev-01', name: '1 號發電機 (模擬)', status: '正常', temp: 42.5 },
        { id: 'dev-02', name: '2 號水冷主機 (模擬)', status: '運轉中', temp: 18.2 }
      ];

      const realData = [
        { id: 'dev-01', name: '現場 1 號實體機台', status: '在線', temp: 46.1 },
        { id: 'dev-02', name: '現場 2 號實體機台', status: '在線', temp: 19.8 }
      ];

      const devices = computed(() => isMock.value ? mockData : realData);

      return {
        isMock,
        devices
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>Mock 模式切換架構展示</h3>

  <div style="padding: 10px; background: #f1f5f9; border-radius: 6px; margin-bottom: 12px;">
    目前資料來源模式：
    <strong :style="{ color: isMock ? '#f59e0b' : '#3b82f6' }">
      {{ isMock ? '示範 Mock 假資料模式 (不連真實機台)' : '真實連線模式 (直接呼叫後端 API)' }}
    </strong>
    <br />
    <button @click="isMock = !isMock" style="margin-top: 8px;">
      切換為 {{ isMock ? '真實 API' : 'Mock 模式' }}
    </button>
  </div>

  <h4>設備即時讀值：</h4>
  <ul>
    <li v-for="dev in devices" :key="dev.id">
      {{ dev.name }} - 狀態：{{ dev.status }} (溫度：{{ dev.temp }} 度)
    </li>
  </ul>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isMock = ref(true);

      const mockData = [
        { id: 'dev-01', name: '1 號發電機 (模擬)', status: '正常', temp: 42.5 },
        { id: 'dev-02', name: '2 號水冷主機 (模擬)', status: '運轉中', temp: 18.2 }
      ];

      const realData = [
        { id: 'dev-01', name: '現場 1 號實體機台', status: '在線', temp: 46.1 },
        { id: 'dev-02', name: '現場 2 號實體機台', status: '在線', temp: 19.8 }
      ];

      const devices = computed(() => isMock.value ? mockData : realData);

      return {
        isMock,
        devices
      };
    }
  }).mount('#app');
<\/script>`,hints:[`透過封裝好的 API 層切換 Mock，能讓前端團隊在後端未完成前提前 100% 交付 UI 與功能。`]},{id:`realtime-stomp-websocket`,category:`架構實戰篇`,title:`21. 即時推播通訊：WebSocket 與 STOMP 協定實戰`,summary:`工業監控與儀表板的核心！理解 WebSocket 雙向通道，學習就地更新 (In-place update) 避免清單閃爍重繪。`,readTime:`8 分鐘`,concept:`
### HTTP 輪詢 vs WebSocket 即時推播
- **HTTP 輪詢 (Polling)**：瀏覽器每 3 秒發一次 GET 請求向伺服器問「有新數據嗎？」，浪費伺服器資源與頻寬。
- **WebSocket 雙向長連線**：連線建立後通道永遠保持暢通，伺服器一有感測器數據變更，主動推播給瀏覽器。

### 什麼是 STOMP 協定？
WebSocket 只定義了傳輸通道，而 **STOMP (Simple Text Oriented Messaging Protocol)** 是在 WebSocket 之上定義了「發布/訂閱 (Pub/Sub)」標準訊息格式（如訂閱 \`/topic/device_values\`）。

### 關鍵效能心法：就地更新 (In-place Update)
當每秒有數十筆感測器數值推播進來時，**千萬不能把整包設備清單重新請求或重設**，否則畫面會瘋狂閃爍重繪！
正確做法是：**直接找到該設備的物件，僅更新其數值欄位（\`device.val = newVal\`）**，Vue 的細粒度響應系統只會重繪該數值節點，效能極高。
    `,task:`
任務指引：
1. 觀察頁面中模擬的感測器就地即時推播。
2. 點擊「模擬接收推播封包」，觀察數字變更時，清單完全不閃爍、平滑就地更新的效果！
    `,starterCode:`<div id="app">
  <h3>即時數據就地更新 (In-Place Update) 展示</h3>

  <button @click="simulateIncomingPush">模擬接收機台即時推播封包</button>

  <div style="margin-top: 15px;">
    <div 
      v-for="item in sensorList" 
      :key="item.id"
      style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #e2e8f0;">
      <span>{{ item.title }}</span>
      <strong style="color: #42b883; font-family: monospace;">{{ item.currentValue }} {{ item.unit }}</strong>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const sensorList = ref([
        { id: 'sensor-1', title: '高壓變壓器溫度', currentValue: 54.2, unit: '度' },
        { id: 'sensor-2', title: '太陽能發電瞬間功率', currentValue: 128.5, unit: 'kW' },
        { id: 'sensor-3', title: '自來水進水流量', currentValue: 3.8, unit: 'm3/h' }
      ]);

      // 模擬收到 STOMP 推播封包時的就地更新
      const simulateIncomingPush = () => {
        // 隨機挑選一個感測器就地更新數值
        const target = sensorList.value[Math.floor(Math.random() * sensorList.value.length)];
        target.currentValue = +(target.currentValue + (Math.random() * 2 - 1)).toFixed(1);
      };

      return {
        sensorList,
        simulateIncomingPush
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>即時數據就地更新 (In-Place Update) 展示</h3>

  <button @click="simulateIncomingPush">模擬接收機台即時推播封包</button>

  <div style="margin-top: 15px;">
    <div 
      v-for="item in sensorList" 
      :key="item.id"
      style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #e2e8f0;">
      <span>{{ item.title }}</span>
      <strong style="color: #42b883; font-family: monospace;">{{ item.currentValue }} {{ item.unit }}</strong>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const sensorList = ref([
        { id: 'sensor-1', title: '高壓變壓器溫度', currentValue: 54.2, unit: '度' },
        { id: 'sensor-2', title: '太陽能發電瞬間功率', currentValue: 128.5, unit: 'kW' },
        { id: 'sensor-3', title: '自來水進水流量', currentValue: 3.8, unit: 'm3/h' }
      ]);

      const simulateIncomingPush = () => {
        const target = sensorList.value[Math.floor(Math.random() * sensorList.value.length)];
        target.currentValue = +(target.currentValue + (Math.random() * 2 - 1)).toFixed(1);
      };

      return {
        sensorList,
        simulateIncomingPush
      };
    }
  }).mount('#app');
<\/script>`,hints:[`就地更新 (In-place update) 保留了原始 DOM 結構，避免大量推播造成瀏覽器 CPU 飆高。`]},{id:`design-tokens-themes`,category:`架構實戰篇`,title:`22. 企業級主題架構：CSS 變數與設計代碼 (Design Tokens)`,summary:`多品牌與深淺色主題的終極解法！學習使用 CSS 自訂屬性 (Tokens) 實現一鍵換膚，收斂重複的樣式檔案。`,readTime:`6 分鐘`,concept:`
### 傳統多品牌換皮的痛點
許多傳統系統為了支援 5 個不同客戶的品牌配色，會將整份 CSS 複製 5 次（Skin 複製）。
這會導致：**一個簡單的按鈕樣式修改，工程師必須手動同步 5 次！**

### 現代解法：CSS Variables 設計代碼 (Design Tokens)
只保留一份核心樣式，把所有顏色、圓角、字級抽成 CSS 變數：
\`\`\`css
:root {
  --theme-primary: #214d7c;
  --theme-bg: #ffffff;
  --theme-text: #212529;
}

body.dark {
  --theme-bg: #060709;
  --theme-text: #f8fafc;
}
\`\`\`
所有元件直接使用 \`var(--theme-primary)\`，換主題只需要在 \`<body>\` 切換 class，或是替換一套主題變數，程式碼重複度直接降低 85%！
    `,task:`
任務指引：
1. 觀察頁面中只依靠 CSS 變數實現的主題切換。
2. 點擊「切換品牌風格」按鈕，體驗一鍵全站變色的強大威力！
    `,starterCode:`<div id="app" :style="currentTheme">
  <div style="padding: 16px; border: 1px solid var(--border); background: var(--bg); color: var(--text); border-radius: 8px;">
    <h3>品牌主題切換實戰展示</h3>
    <p>目前套用配色方案：<strong>{{ themeName }}</strong></p>

    <button @click="toggleTheme" style="background: var(--primary); color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer;">
      點我切換品牌色彩
    </button>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isBrandB = ref(false);

      const toggleTheme = () => {
        isBrandB.value = !isBrandB.value;
      };

      const themeName = computed(() => isBrandB.value ? '品牌 B (典雅綠)' : '品牌 A (企業藍)');

      const currentTheme = computed(() => {
        return isBrandB.value ? {
          '--primary': '#42b883',
          '--bg': '#f0fdf4',
          '--text': '#064e3b',
          '--border': '#86efac'
        } : {
          '--primary': '#214d7c',
          '--bg': '#f8fafc',
          '--text': '#0f172a',
          '--border': '#cbd5e1'
        };
      });

      return {
        isBrandB,
        toggleTheme,
        themeName,
        currentTheme
      };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app" :style="currentTheme">
  <div style="padding: 16px; border: 1px solid var(--border); background: var(--bg); color: var(--text); border-radius: 8px;">
    <h3>品牌主題切換實戰展示</h3>
    <p>目前套用配色方案：<strong>{{ themeName }}</strong></p>

    <button @click="toggleTheme" style="background: var(--primary); color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer;">
      點我切換品牌色彩
    </button>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isBrandB = ref(false);

      const toggleTheme = () => {
        isBrandB.value = !isBrandB.value;
      };

      const themeName = computed(() => isBrandB.value ? '品牌 B (典雅綠)' : '品牌 A (企業藍)');

      const currentTheme = computed(() => {
        return isBrandB.value ? {
          '--primary': '#42b883',
          '--bg': '#f0fdf4',
          '--text': '#064e3b',
          '--border': '#86efac'
        } : {
          '--primary': '#214d7c',
          '--bg': '#f8fafc',
          '--text': '#0f172a',
          '--border': '#cbd5e1'
        };
      });

      return {
        isBrandB,
        toggleTheme,
        themeName,
        currentTheme
      };
    }
  }).mount('#app');
<\/script>`,hints:[`將顏色抽離為 CSS Tokens，不同客戶或深淺色模式再也不需要重複寫 5 份 CSS。`]},{id:`mobile-first-rwd`,category:`架構實戰篇`,title:`23. 行動端適配與 RWD 實戰：Mobile-First 關鍵設計`,summary:`從桌面到手機的跨越！學習安全區 (safe-area-inset)、最小觸控尺寸 (44px) 與防誤觸放大等實戰技巧。`,readTime:`7 分鐘`,concept:`
### 行動端開發的三大實務陷阱
1. **觸控熱區太小**：桌面用滑鼠指標可以精準點選 20px 小按鈕，但在手機上拇指操作需要**最小 44x44px**（\`min-height: 44px\`）。
2. **iOS Safari 輸入框自動放大**：只要 \`<input>\` 的字級小於 16px，iPhone 點擊輸入框時整頁就會自動強制放大，破壞排版！因此行動端輸入框字級**必須維持 16px**。
3. **瀏海與底部指示條 (Home Indicator)**：必須在 CSS 套用安全區變數：
   \`\`\`css
   padding-top: env(safe-area-inset-top);
   padding-bottom: env(safe-area-inset-bottom);
   \`\`\`
   確保底部選單不會被 iPhone 底線遮住。
    `,task:`
任務指引：
1. 觀察頁面中示範的行動端友善開關按鈕。
2. 注意其觸控熱區與符合拇指操作的適配規範！
    `,starterCode:`<div id="app">
  <h3>行動端友善操作規範展示</h3>

  <div style="margin-bottom: 15px;">
    <p>行動端最小觸控推薦尺寸：<strong>44 x 44 px</strong></p>
    <!-- 友善的大尺寸切換按鈕 -->
    <button 
      @click="toggled = !toggled"
      :style="{
        minHeight: '44px',
        padding: '0 20px',
        background: toggled ? '#42b883' : '#64748b',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer'
      }">
      {{ toggled ? '狀態已開啟 (ON)' : '狀態已關閉 (OFF)' }}
    </button>
  </div>

  <p style="font-size: 14px; color: #64748b;">
    提示：在行動端，輸入框字級務必設定為 16px 以上，可避免 iOS Safari 彈跳縮放整頁。
  </p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const toggled = ref(false);
      return { toggled };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>行動端友善操作規範展示</h3>

  <div style="margin-bottom: 15px;">
    <p>行動端最小觸控推薦尺寸：<strong>44 x 44 px</strong></p>
    <button 
      @click="toggled = !toggled"
      :style="{
        minHeight: '44px',
        padding: '0 20px',
        background: toggled ? '#42b883' : '#64748b',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer'
      }">
      {{ toggled ? '狀態已開啟 (ON)' : '狀態已關閉 (OFF)' }}
    </button>
  </div>

  <p style="font-size: 14px; color: #64748b;">
    提示：在行動端，輸入框字級務必設定為 16px 以上，可避免 iOS Safari 彈跳縮放整頁。
  </p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const toggled = ref(false);
      return { toggled };
    }
  }).mount('#app');
<\/script>`,hints:[`透過維持 44px 最小高度與 16px 字級，能大幅提升在手機上的使用舒適度。`]},{id:`pwa-service-worker-https`,category:`架構實戰篇`,title:`24. 什麼是 PWA？離線快取與 HTTPS 安全限制`,summary:`理解漸進式網頁應用 (PWA)，搞懂 Service Worker 的離線快取能力，以及為什麼在 HTTP 內網環境無法啟用。`,readTime:`7 分鐘`,concept:`
### 什麼是 PWA (Progressive Web App)？
PWA 讓網頁擁有接近原生 App 的體驗：
1. **可安裝至主畫面**：手機瀏覽器會跳出「安裝到桌面」提示，擁有獨立桌面圖示。
2. **離線快取 (Offline Cache)**：在無網路或網路中斷時，依然能打開介面並瀏覽快取資料。

### 核心引擎：Service Worker
Service Worker 是一段獨立運行在瀏覽器後台的腳本，能攔截網頁的所有網路請求並決定是否從快取回傳。

### 關鍵限制：HTTPS 安全上下文 (Secure Context)
這是很多系統導入 PWA 時踩的第一個大坑：
> **瀏覽器嚴格限制：Service Worker 只能在 HTTPS 或 localhost 環境下運作！**
如果企業內部系統是走普通 \`http://192.168.x.x\` 內網 IP，瀏覽器出於資安考量會**直接拒絕註冊 Service Worker**。
因此要完整開啟 PWA，必須配合網通/維運團隊掛上 SSL 憑證 (HTTPS)。前端程式碼必須做好防禦判斷，在無 HTTPS 時靜默降級，不影響主功能！
    `,task:`
任務指引：
1. 觀察畫面中展示的 Service Worker 安全環境檢測邏輯。
2. 體會前端如何在不安全的 HTTP 環境下平穩降級，確保基本操作不受影響！
    `,starterCode:`<div id="app">
  <h3>PWA 安全上下文環境檢測展示</h3>

  <div style="padding: 12px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前執行環境是否為 Secure Context (HTTPS / localhost)：</p>
    <strong :style="{ color: isSecure ? '#42b883' : '#ef4444' }">
      {{ isSecure ? '符合安全標準 (支援完整 PWA 離線快取)' : '未採用 HTTPS (PWA 自動靜默降級，主功能正常運作)' }}
    </strong>
  </div>
</div>

<script>
  const { createApp, ref, onMounted } = Vue;

  createApp({
    setup() {
      const isSecure = ref(false);

      onMounted(() => {
        // 檢測瀏覽器是否支援安全上下文
        isSecure.value = window.isSecureContext || window.location.hostname === 'localhost';
      });

      return { isSecure };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <h3>PWA 安全上下文環境檢測展示</h3>

  <div style="padding: 12px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前執行環境是否為 Secure Context (HTTPS / localhost)：</p>
    <strong :style="{ color: isSecure ? '#42b883' : '#ef4444' }">
      {{ isSecure ? '符合安全標準 (支援完整 PWA 離線快取)' : '未採用 HTTPS (PWA 自動靜默降級，主功能正常運作)' }}
    </strong>
  </div>
</div>

<script>
  const { createApp, ref, onMounted } = Vue;

  createApp({
    setup() {
      const isSecure = ref(false);

      onMounted(() => {
        isSecure.value = window.isSecureContext || window.location.hostname === 'localhost';
      });

      return { isSecure };
    }
  }).mount('#app');
<\/script>`,hints:[`防禦性程式碼判斷能避免網站在未走 HTTPS 時產生控制台報錯。`]},{id:`strangler-pattern-migration-report`,category:`決策與匯報篇`,title:`25. 舊系統改造策略：絞殺者模式與主管報告指引`,summary:`如何向主管匯報這套系統該怎麼改成 Vue？學會企業級「絞殺者模式」，避免全部重寫的巨大風險，胸有成竹提出分階段落地計畫！`,readTime:`10 分鐘`,concept:`
### 1. 核心大原則：為什麼「千萬不要整套全部重寫」？
當主管問你：「這套舊系統要怎麼改成 Vue？」
初學者最容易犯的錯誤回答是：「我們把所有頁面全部打掉重寫！」
這是極度危險的：
- 既有系統是穩定營運中的業務，有數百個邊界情況與商業規則。
- 一次性大改版工期不可控，往往在半年甚至一年內看不到任何產出，最終專案爛尾。

---

### 2. 什麼是「絞殺者模式 (Strangler Pattern)」？
這是微軟、Martin Fowler 極力推崇的企業現代化遷移模式：
> **像絞殺藤一樣：新功能或新建的 Vue SPA 與舊系統「並存」在同一個伺服器內，逐步蠶食、逐頁平移，最終無痛取代舊系統！**

#### 實戰落地佈局：
\`\`\`
伺服器主機/
├── web/          # 既有舊系統（原封不動，維持既有營運）
└── web/m/        # 新建的 Vue 3 現代化 SPA（本次改造新增）
\`\`\`
兩者部署在一起，吃同一套後端 API，既有功能完全不中斷，新版隨時上線驗收！

---

### 3. 向主管報告時的四階段藍圖 (Phase 0 ~ Phase 4)

#### Phase 0：概念驗證與最小可用產品 (MVP)
- **目標**：用極短時間（例如 1~2 週）建立一個獨立的 Vue 3 行動端 SPA 骨架。
- **亮點**：引入 Vue 3 + Vite + Hash Router + Pinia，實現「首頁、設備列表、登入」基本流轉，先用可運作的成品向主管與利害關係人證明技術可行！

#### Phase 1：抽出共用 API 層（低風險、高效益）
- **痛點**：舊系統的 API 與 \`$.ajax\` 散落在各個 HTML 中。
- **作法**：用現代 Axios 封裝統一的 API 模組（包含 Request / Response 攔截器、Token 集中注入）。
- **效益**：新舊系統都能呼叫同一套 API，後續修改只需改一處。

#### Phase 2：拆除 iframe 導航（關鍵路徑）
- **痛點**：iframe 巢狀是行動化 (RWD) 的最大元兇，全域變數 \`window.parent\` 導致系統無法維護。
- **作法**：用 Vue Router 取代 iframe 切換，將全域變數遷移至 Pinia Store。
- **策略**：先挑選業務單純的一頁（如設備管理頁）做概念驗證 (Spike)，確認工期後逐頁遷移。

#### Phase 3：收斂重複的主題樣式 (Skins)
- **痛點**：5 個客戶版本之間有 85% 代碼是逐字複製貼上。
- **作法**：改用 CSS Variables (Design Tokens) 統一收斂為單一版型，只抽換色票變數，維護成本瞬間降低 80%。

#### Phase 4：推動 HTTPS 與開啟 PWA
- 向維運或網通團隊提出 SSL 憑證支援，為離線存取與桌面安裝做最後收尾。

---

### 4. 主管必問的三大靈魂拷問與標準回答

**問題一：「改這個需要動到後端 Java 程式碼嗎？」**
- **回答**：**完全不需要動任何一行後端程式碼！** 後端現有的 REST API 與 WebSocket 保持 100% 不變，我們只在前端進行架構換皮與 API 封裝對齊。

**問題二：「會不會影響現在線上正在用的使用者？」**
- **回答**：**完全不會！** 我們採用「絞殺者模式」，新版 Vue 應用放在獨立路徑（如 \`/m/\`）與舊系統並存，舊版系統原封不動，使用者想用哪套就用哪套，風險為零。

**問題三：「為什麼有些功能（如複雜自訂報表、資料庫備份）不建議現在移到手機版？」**
- **回答**：在小螢幕手機上做 20 欄複雜報表或誤觸成本極高的資料備份並不符合使用體驗。我們策略性採取**「看與監控移到行動端，繁重設定留在桌面版」**，集中資源把最核心的設備監控與即時告警做到極致！
    `,task:`
任務指引：
1. 恭喜你完整掌握了 Vue 3 核心語法與現代化系統改造全貌！
2. 閱讀完本章節的四階段改造藍圖與主管回答指引，你已經具備向團隊與主管提案的專業能力。
    `,starterCode:`<div id="app">
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h3 style="color: #065f46; margin-top: 0;">系統改造提案摘要檢視器</h3>
    <p><strong>核心改造模式：</strong>絞殺者模式 (Strangler Pattern) - 新舊並存零風險</p>
    <p><strong>後端依賴衝擊：</strong>後端程式碼 0 修改，維持既有 REST 與 WebSocket 服務</p>
    <p><strong>架構升級關鍵：</strong>拆除 iframe 導航、Pinia 統一狀態、Axios 模組化封裝、Design Tokens 收斂樣式</p>
    
    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed #86efac;">
      <button @click="showReady = true" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">
        驗證我的提案準備度
      </button>
      <p v-if="showReady" style="color: #047857; margin-top: 8px; font-weight: bold;">
        已完全具備向主管匯報 Vue 系統改造方案的專業知識與技術底氣！
      </p>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const showReady = ref(false);
      return { showReady };
    }
  }).mount('#app');
<\/script>`,solutionCode:`<div id="app">
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h3 style="color: #065f46; margin-top: 0;">系統改造提案摘要檢視器</h3>
    <p><strong>核心改造模式：</strong>絞殺者模式 (Strangler Pattern) - 新舊並存零風險</p>
    <p><strong>後端依賴衝擊：</strong>後端程式碼 0 修改，維持既有 REST 與 WebSocket 服務</p>
    <p><strong>架構升級關鍵：</strong>拆除 iframe 導航、Pinia 統一狀態、Axios 模組化封裝、Design Tokens 收斂樣式</p>
    
    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed #86efac;">
      <button @click="showReady = true" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">
        驗證我的提案準備度
      </button>
      <p v-if="showReady" style="color: #047857; margin-top: 8px; font-weight: bold;">
        已完全具備向主管匯報 Vue 系統改造方案的專業知識與技術底氣！
      </p>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const showReady = ref(false);
      return { showReady };
    }
  }).mount('#app');
<\/script>`,hints:[`熟記四階段進程（Phase 0~4）與三不原則（不動後端、不中斷線上營運、不盲目重寫），提案必勝！`]}],ww=[{id:`css`,label:`CSS`,title:`CSS 樣式與排版`,count:xw.length,badgeText:`${xw.length} 單元`,description:`選擇器權重、盒模型、Flexbox/Grid、RWD 與 CSS 變數`,curriculum:xw},{id:`html`,label:`HTML`,title:`HTML 結構與語意`,count:bw.length,badgeText:`${bw.length} 單元`,description:`標準骨架、DOM 樹、語意化標籤、現代表單與報表表格`,curriculum:bw},{id:`javascript`,label:`Javascript`,title:`JavaScript 邏輯與引擎`,count:Sw.length,badgeText:`${Sw.length} 單元`,description:`ES6+ 宣告、解構展開、箭頭函式、陣列方法、Promise/async、ESM`,curriculum:Sw},{id:`vue`,label:`Vue`,title:`Vue 3 實戰與架構遷移`,count:Cw.length,badgeText:`${Cw.length} 單元`,description:`Composition API、狀態驅動、組件化、Pinia、路由與企業架構重構`,curriculum:Cw}];[...Cw,...bw,...xw,...Sw];function Tw(e){let t=ww.find(t=>t.id===e);return t?t.curriculum:Cw}function Ew(e){return e.startsWith(`html-`)?`html`:e.startsWith(`css-`)?`css`:e.startsWith(`js-`)?`javascript`:`vue`}var Dw={class:`app-layout`},Ow={key:0,class:`welcome-wrapper`},kw={key:1,class:`glossary-wrapper`},Aw={key:2,class:`main-workspace`},jw={class:`workspace-main-area`},Mw={key:0,class:`mobile-subnav-tabs`},Nw={class:`workspace-split`},Pw={class:`doc-viewport`},Fw={class:`doc-inner-container`},Iw={key:0,class:`mobile-quick-jump`},Lw={class:`playground-viewport`},Rw={class:`playground-inner-container`},zw={class:`playground-banner`},Bw={class:`banner-title-wrap`};qo(cx({__name:`App`,setup(e){let t=j(`welcome`),n=e=>{if(t.value=e,localStorage.setItem(`program-study-last-view`,e),e===`welcome`){let e=document.querySelector(`.welcome-wrapper`);e&&e.scrollTo({top:0,behavior:`smooth`})}},r=j(`doc`),i=j(typeof window<`u`?window.innerWidth>960:!0),a=()=>{i.value=window.innerWidth>960,window.innerWidth<=1024&&(u.value=!1)},o=j(`vue`),s=R(()=>Tw(o.value)),c=j(!1),l=()=>{c.value=!c.value,c.value?(document.documentElement.setAttribute(`data-theme`,`dark`),localStorage.setItem(`vue-study-theme`,`dark`)):(document.documentElement.removeAttribute(`data-theme`),localStorage.setItem(`vue-study-theme`,`light`))},u=j(!0),d=()=>{u.value=!u.value},f=()=>{window.innerWidth<=1024&&(u.value=!1)},p=j(`project-overview-setup`),m=R(()=>{let e=s.value.findIndex(e=>e.id===p.value);return e>=0?e:0}),h=R(()=>s.value[m.value]||s.value[0]),g=R(()=>m.value>0),_=R(()=>m.value<s.value.length-1),v=e=>{o.value=e,localStorage.setItem(`program-study-last-track`,e),t.value!==`lessons`&&(t.value=`lessons`,localStorage.setItem(`program-study-last-view`,`lessons`));let n=Tw(e),r=localStorage.getItem(`program-study-last-lesson-${e}`);r&&n.some(e=>e.id===r)?p.value=r:n.length>0&&(p.value=n[0].id),S(),f()},y=e=>{v(e),t.value=`lessons`},b=({track:e,lessonId:t})=>{e&&e!==o.value&&(o.value=e,localStorage.setItem(`program-study-last-track`,e));let n=Tw(o.value);t&&n.some(e=>e.id===t)?p.value=t:n.length>0&&(p.value=n[0].id),localStorage.setItem(`program-study-last-lesson-${o.value}`,p.value),S(),f()},x=e=>{let t=Ew(e);t!==o.value&&(o.value=t,localStorage.setItem(`program-study-last-track`,t)),p.value=e,localStorage.setItem(`program-study-last-lesson-${o.value}`,e),localStorage.setItem(`vue-study-last-lesson`,e),f(),S(),i.value||(r.value=`doc`)},S=()=>{let e=document.querySelector(`.doc-viewport`);e&&e.scrollTo({top:0,behavior:`smooth`})},C=()=>{g.value&&x(s.value[m.value-1].id)},ee=()=>{_.value&&x(s.value[m.value+1].id)},w=j([]),te=e=>{let t=w.value.indexOf(e);t>-1?w.value.splice(t,1):w.value.push(e),localStorage.setItem(`vue-study-completed`,JSON.stringify(w.value))},ne=R(()=>s.value.filter(e=>w.value.includes(e.id)).length),T=R(()=>s.value.length);return xr(()=>{window.addEventListener(`resize`,a),a();let e=localStorage.getItem(`vue-study-theme`);(e===`dark`||!e&&window.matchMedia(`(prefers-color-scheme: dark)`).matches)&&(c.value=!0,document.documentElement.setAttribute(`data-theme`,`dark`));let n=localStorage.getItem(`program-study-last-view`);n&&[`lessons`,`glossary`,`welcome`].includes(n)&&(t.value=n);let r=localStorage.getItem(`program-study-last-track`);r&&ww.some(e=>e.id===r)&&(o.value=r);let i=Tw(o.value),s=localStorage.getItem(`program-study-last-lesson-${o.value}`)||localStorage.getItem(`vue-study-last-lesson`);s&&i.some(e=>e.id===s)?p.value=s:i.length>0&&(p.value=i[0].id);let l=localStorage.getItem(`vue-study-completed`);if(l)try{w.value=JSON.parse(l)}catch{w.value=[]}sx()}),Tr(()=>{window.removeEventListener(`resize`,a)}),(e,a)=>(P(),F(`div`,Dw,[L(Mx,{"is-dark":c.value,"sidebar-open":u.value,"current-view":t.value,"current-track":o.value,tracks:M(ww),"track-completed-count":ne.value,"track-total-lessons":T.value,onToggleTheme:l,onToggleSidebar:d,onToggleView:n,onSelectTrack:v},null,8,[`is-dark`,`sidebar-open`,`current-view`,`current-track`,`tracks`,`track-completed-count`,`track-total-lessons`]),t.value===`welcome`?(P(),F(`div`,Ow,[L(yw,{onStartTrack:y,onOpenLessons:a[0]||=e=>t.value=`lessons`})])):t.value===`glossary`?(P(),F(`div`,kw,[L(vC,{onClose:a[1]||=e=>t.value=`lessons`})])):(P(),F(`div`,Aw,[L(Jx,{curriculum:s.value,"current-lesson-id":p.value,"completed-ids":w.value,"is-open":u.value,"current-track":o.value,tracks:M(ww),onSelectLesson:x,onToggleComplete:te,onCloseSidebar:f,onSelectTrack:v},null,8,[`curriculum`,`current-lesson-id`,`completed-ids`,`is-open`,`current-track`,`tracks`]),I(`div`,jw,[i.value?ma(``,!0):(P(),F(`div`,Mw,[I(`button`,{class:E([`mobile-subnav-btn`,{"is-active":r.value===`doc`}]),onClick:a[2]||=e=>r.value=`doc`},[L(M(os),{size:15}),a[5]||=I(`span`,null,`課程教學文檔`,-1)],2),I(`button`,{class:E([`mobile-subnav-btn`,{"is-active":r.value===`playground`}]),onClick:a[3]||=e=>r.value=`playground`},[L(M(_s),{size:15}),a[6]||=I(`span`,null,`即時互動演練台`,-1)],2)])),I(`div`,Nw,[Nn(I(`div`,Pw,[I(`div`,Fw,[L(mS,{lesson:h.value,"is-completed":w.value.includes(h.value.id),"has-prev":g.value,"has-next":_.value,onPrevLesson:C,onNextLesson:ee,onToggleComplete:te,onJumpTrack:b},null,8,[`lesson`,`is-completed`,`has-prev`,`has-next`]),i.value?ma(``,!0):(P(),F(`div`,Iw,[I(`button`,{class:`quick-jump-btn`,onClick:a[4]||=e=>r.value=`playground`},[L(M(_s),{size:16}),a[7]||=I(`span`,null,`動手打代碼：切換至即時演練台 →`,-1)])]))])],512),[[eo,i.value||r.value===`doc`]]),Nn(I(`div`,Lw,[I(`div`,Rw,[I(`div`,zw,[I(`div`,Bw,[L(M(_s),{size:18,class:`banner-icon`}),a[8]||=I(`span`,{class:`banner-title`},`即時互動演練台 (Live Playground)`,-1)]),a[9]||=I(`span`,{class:`banner-subtext`},`邊看教學，邊在下方動手打代碼！`,-1)]),L(GS,{"starter-code":h.value.starterCode,"solution-code":h.value.solutionCode,"lesson-id":h.value.id},null,8,[`starter-code`,`solution-code`,`lesson-id`])])],512),[[eo,i.value||r.value===`playground`]])])])]))]))}},[[`__scopeId`,`data-v-d1fcb901`]])).mount(`#app`);