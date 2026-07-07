var ig=Object.defineProperty;var ag=(e,n,t)=>n in e?ig(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var X=(e,n,t)=>ag(e,typeof n!="symbol"?n+"":n,t);function og(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pd={exports:{}},qa={},Nd={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),lg=Symbol.for("react.portal"),sg=Symbol.for("react.fragment"),ug=Symbol.for("react.strict_mode"),cg=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),fg=Symbol.for("react.forward_ref"),mg=Symbol.for("react.suspense"),gg=Symbol.for("react.memo"),hg=Symbol.for("react.lazy"),Wu=Symbol.iterator;function vg(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var Od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,Fd={};function Cr(e,n,t){this.props=e,this.context=n,this.refs=Fd,this.updater=t||Od}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ld(){}Ld.prototype=Cr.prototype;function vs(e,n,t){this.props=e,this.context=n,this.refs=Fd,this.updater=t||Od}var ys=vs.prototype=new Ld;ys.constructor=vs;Dd(ys,Cr.prototype);ys.isPureReactComponent=!0;var Ku=Array.isArray,Md=Object.prototype.hasOwnProperty,Ss={current:null},$d={key:!0,ref:!0,__self:!0,__source:!0};function zd(e,n,t){var r,i={},a=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Md.call(n,r)&&!$d.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ci,type:e,key:a,ref:o,props:i,_owner:Ss.current}}function yg(e,n){return{$$typeof:Ci,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ci}function Sg(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Qu=/\/+/g;function Fo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sg(""+e.key):n.toString(36)}function ca(e,n,t,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ci:case lg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Fo(o,0):r,Ku(i)?(t="",e!=null&&(t=e.replace(Qu,"$&/")+"/"),ca(i,n,t,"",function(u){return u})):i!=null&&(xs(i)&&(i=yg(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qu,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Ku(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Fo(a,s);o+=ca(a,n,t,l,i)}else if(l=vg(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Fo(a,s++),o+=ca(a,n,t,l,i);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Hi(e,n,t){if(e==null)return e;var r=[],i=0;return ca(e,r,"","",function(a){return n.call(t,a,i++)}),r}function xg(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},da={transition:null},kg={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:da,ReactCurrentOwner:Ss};function jd(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Hi,forEach:function(e,n,t){Hi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Hi(e,function(){n++}),n},toArray:function(e){return Hi(e,function(n){return n})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Cr;j.Fragment=sg;j.Profiler=cg;j.PureComponent=vs;j.StrictMode=ug;j.Suspense=mg;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kg;j.act=jd;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dd({},e.props),i=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Ss.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Md.call(n,l)&&!$d.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ci,type:e.type,key:i,ref:a,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:pg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dg,_context:e},e.Consumer=e};j.createElement=zd;j.createFactory=function(e){var n=zd.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:fg,render:e}};j.isValidElement=xs;j.lazy=function(e){return{$$typeof:hg,_payload:{_status:-1,_result:e},_init:xg}};j.memo=function(e,n){return{$$typeof:gg,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=da.transition;da.transition={};try{e()}finally{da.transition=n}};j.unstable_act=jd;j.useCallback=function(e,n){return Le.current.useCallback(e,n)};j.useContext=function(e){return Le.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};j.useEffect=function(e,n){return Le.current.useEffect(e,n)};j.useId=function(){return Le.current.useId()};j.useImperativeHandle=function(e,n,t){return Le.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return Le.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return Le.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return Le.current.useMemo(e,n)};j.useReducer=function(e,n,t){return Le.current.useReducer(e,n,t)};j.useRef=function(e){return Le.current.useRef(e)};j.useState=function(e){return Le.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return Le.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return Le.current.useTransition()};j.version="18.3.1";Nd.exports=j;var N=Nd.exports;const wa=Id(N),wg=og({__proto__:null,default:wa},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg=N,bg=Symbol.for("react.element"),Cg=Symbol.for("react.fragment"),Tg=Object.prototype.hasOwnProperty,_g=Eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ag={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,n,t){var r,i={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Tg.call(n,r)&&!Ag.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:bg,type:e,key:a,ref:o,props:i,_owner:_g.current}}qa.Fragment=Cg;qa.jsx=Bd;qa.jsxs=Bd;Pd.exports=qa;var E=Pd.exports,gl={},Hd={exports:{}},Xe={},Vd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,L){var $=R.length;R.push(L);e:for(;0<$;){var M=$-1>>>1,W=R[M];if(0<i(W,L))R[M]=L,R[$]=W,$=M;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],$=R.pop();if($!==L){R[0]=$;e:for(var M=0,W=R.length,Bn=W>>>1;M<Bn;){var ve=2*(M+1)-1,an=R[ve],$e=ve+1,on=R[$e];if(0>i(an,$))$e<W&&0>i(on,an)?(R[M]=on,R[$e]=$,M=$e):(R[M]=an,R[ve]=$,M=ve);else if($e<W&&0>i(on,$))R[M]=on,R[$e]=$,M=$e;else break e}}return L}function i(R,L){var $=R.sortIndex-L.sortIndex;return $!==0?$:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],d=1,f=null,g=3,w=!1,y=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var L=t(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,n(l,L);else break;L=t(u)}}function v(R){if(b=!1,p(R),!y)if(t(l)!==null)y=!0,An(S);else{var L=t(u);L!==null&&Rn(v,L.startTime-R)}}function S(R,L){y=!1,b&&(b=!1,h(A),A=-1),w=!0;var $=g;try{for(p(L),f=t(l);f!==null&&(!(f.expirationTime>L)||R&&!K());){var M=f.callback;if(typeof M=="function"){f.callback=null,g=f.priorityLevel;var W=M(f.expirationTime<=L);L=e.unstable_now(),typeof W=="function"?f.callback=W:f===t(l)&&r(l),p(L)}else r(l);f=t(l)}if(f!==null)var Bn=!0;else{var ve=t(u);ve!==null&&Rn(v,ve.startTime-L),Bn=!1}return Bn}finally{f=null,g=$,w=!1}}var k=!1,T=null,A=-1,P=5,D=-1;function K(){return!(e.unstable_now()-D<P)}function ue(){if(T!==null){var R=e.unstable_now();D=R;var L=!0;try{L=T(!0,R)}finally{L?vn():(k=!1,T=null)}}else k=!1}var vn;if(typeof c=="function")vn=function(){c(ue)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,jn=St.port2;St.port1.onmessage=ue,vn=function(){jn.postMessage(null)}}else vn=function(){C(ue,0)};function An(R){T=R,k||(k=!0,vn())}function Rn(R,L){A=C(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,An(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var $=g;g=L;try{return R()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var $=g;g=R;try{return L()}finally{g=$}},e.unstable_scheduleCallback=function(R,L,$){var M=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?M+$:M):$=M,R){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=$+W,R={id:d++,callback:L,priorityLevel:R,startTime:$,expirationTime:W,sortIndex:-1},$>M?(R.sortIndex=$,n(u,R),t(l)===null&&R===t(u)&&(b?(h(A),A=-1):b=!0,Rn(v,$-M))):(R.sortIndex=W,n(l,R),y||w||(y=!0,An(S))),R},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(R){var L=g;return function(){var $=g;g=L;try{return R.apply(this,arguments)}finally{g=$}}}})(Gd);Vd.exports=Gd;var Rg=Vd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=N,Qe=Rg;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wd=new Set,oi={};function Lt(e,n){vr(e,n),vr(e+"Capture",n)}function vr(e,n){for(oi[e]=n,e=0;e<n.length;e++)Wd.add(n[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,Ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Ju={};function Pg(e){return hl.call(Ju,e)?!0:hl.call(Xu,e)?!1:Ig.test(e)?Ju[e]=!0:(Xu[e]=!0,!1)}function Ng(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Og(e,n,t,r){if(n===null||typeof n>"u"||Ng(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Me(e,n,t,r,i,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Te[n]=new Me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ks=/[\-:]([a-z])/g;function ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ks,ws);Te[n]=new Me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ks,ws);Te[n]=new Me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ks,ws);Te[n]=new Me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,n,t,r){var i=Te.hasOwnProperty(n)?Te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Og(n,t,i,r)&&(t=null),r||i===null?Pg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var zn=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),bs=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),Cs=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Xd=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Lo;function Gr(e){if(Lo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Lo=n&&n[1]||""}return`
`+Lo+e}var Mo=!1;function $o(e,n){if(!e||Mo)return"";Mo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Mo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Dg(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Zt:return"Portal";case vl:return"Profiler";case bs:return"StrictMode";case yl:return"Suspense";case Sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qd:return(e.displayName||"Context")+".Consumer";case Kd:return(e._context.displayName||"Context")+".Provider";case Cs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return n=e.displayName||null,n!==null?n:xl(e.type)||"Memo";case Jn:n=e._payload,e=e._init;try{return xl(e(n))}catch{}}return null}function Fg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(n);case 8:return n===bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Lg(e){var n=Jd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Gi(e){e._valueTracker||(e._valueTracker=Lg(e))}function Yd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Jd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,n){var t=n.checked;return ae({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ft(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function qd(e,n){n=n.checked,n!=null&&Es(e,"checked",n,!1)}function wl(e,n){qd(e,n);var t=ft(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?El(e,n.type,t):n.hasOwnProperty("defaultValue")&&El(e,n.type,ft(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Zu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function El(e,n,t){(n!=="number"||Ea(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Wr=Array.isArray;function dr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ft(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function bl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return ae({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ec(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(Wr(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ft(t)}}function Zd(e,n){var t=ft(n.value),r=ft(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function nc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ep(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function li(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mg=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){Mg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Yr[n]=Yr[e]})});function tp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+n).trim():n+"px"}function rp(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=tp(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var $g=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,n){if(n){if($g[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function _l(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,pr=null,fr=null;function tc(e){if(e=Ai(e)){if(typeof Rl!="function")throw Error(_(280));var n=e.stateNode;n&&(n=ro(n),Rl(e.stateNode,e.type,n))}}function ip(e){pr?fr?fr.push(e):fr=[e]:pr=e}function ap(){if(pr){var e=pr,n=fr;if(fr=pr=null,tc(e),n)for(e=0;e<n.length;e++)tc(n[e])}}function op(e,n){return e(n)}function lp(){}var zo=!1;function sp(e,n,t){if(zo)return e(n,t);zo=!0;try{return op(e,n,t)}finally{zo=!1,(pr!==null||fr!==null)&&(lp(),ap())}}function si(e,n){var t=e.stateNode;if(t===null)return null;var r=ro(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var Ul=!1;if(Fn)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ul=!1}function zg(e,n,t,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var qr=!1,ba=null,Ca=!1,Il=null,jg={onError:function(e){qr=!0,ba=e}};function Bg(e,n,t,r,i,a,o,s,l){qr=!1,ba=null,zg.apply(jg,arguments)}function Hg(e,n,t,r,i,a,o,s,l){if(Bg.apply(this,arguments),qr){if(qr){var u=ba;qr=!1,ba=null}else throw Error(_(198));Ca||(Ca=!0,Il=u)}}function Mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function up(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function rc(e){if(Mt(e)!==e)throw Error(_(188))}function Vg(e){var n=e.alternate;if(!n){if(n=Mt(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return rc(i),e;if(a===r)return rc(i),n;a=a.sibling}throw Error(_(188))}if(t.return!==r.return)t=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=a;break}if(s===r){o=!0,r=i,t=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===t){o=!0,t=a,r=i;break}if(s===r){o=!0,r=a,t=i;break}s=s.sibling}if(!o)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function cp(e){return e=Vg(e),e!==null?dp(e):null}function dp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=dp(e);if(n!==null)return n;e=e.sibling}return null}var pp=Qe.unstable_scheduleCallback,ic=Qe.unstable_cancelCallback,Gg=Qe.unstable_shouldYield,Wg=Qe.unstable_requestPaint,ce=Qe.unstable_now,Kg=Qe.unstable_getCurrentPriorityLevel,As=Qe.unstable_ImmediatePriority,fp=Qe.unstable_UserBlockingPriority,Ta=Qe.unstable_NormalPriority,Qg=Qe.unstable_LowPriority,mp=Qe.unstable_IdlePriority,Za=null,Tn=null;function Xg(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:qg,Jg=Math.log,Yg=Math.LN2;function qg(e){return e>>>=0,e===0?32:31-(Jg(e)/Yg|0)|0}var Ki=64,Qi=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _a(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=Kr(s):(a&=o,a!==0&&(r=Kr(a)))}else o=t&~i,o!==0?r=Kr(o):a!==0&&(r=Kr(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,a=n&-n,i>=a||i===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-mn(n),i=1<<t,r|=e[t],n&=~i;return r}function Zg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-mn(a),s=1<<o,l=i[o];l===-1?(!(s&t)||s&r)&&(i[o]=Zg(s,n)):l<=n&&(e.expiredLanes|=s),a&=~s}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gp(){var e=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),e}function jo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ti(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mn(n),e[n]=t}function nh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-mn(t),a=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~a}}function Rs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-mn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var Q=0;function hp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vp,Us,yp,Sp,xp,Nl=!1,Xi=[],it=null,at=null,ot=null,ui=new Map,ci=new Map,qn=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ac(e,n){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":ui.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(n.pointerId)}}function Dr(e,n,t,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},n!==null&&(n=Ai(n),n!==null&&Us(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function rh(e,n,t,r,i){switch(n){case"focusin":return it=Dr(it,e,n,t,r,i),!0;case"dragenter":return at=Dr(at,e,n,t,r,i),!0;case"mouseover":return ot=Dr(ot,e,n,t,r,i),!0;case"pointerover":var a=i.pointerId;return ui.set(a,Dr(ui.get(a)||null,e,n,t,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ci.set(a,Dr(ci.get(a)||null,e,n,t,r,i)),!0}return!1}function kp(e){var n=Tt(e.target);if(n!==null){var t=Mt(n);if(t!==null){if(n=t.tag,n===13){if(n=up(t),n!==null){e.blockedOn=n,xp(e.priority,function(){yp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ol(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Al=r,t.target.dispatchEvent(r),Al=null}else return n=Ai(t),n!==null&&Us(n),e.blockedOn=t,!1;n.shift()}return!0}function oc(e,n,t){pa(e)&&t.delete(n)}function ih(){Nl=!1,it!==null&&pa(it)&&(it=null),at!==null&&pa(at)&&(at=null),ot!==null&&pa(ot)&&(ot=null),ui.forEach(oc),ci.forEach(oc)}function Fr(e,n){e.blockedOn===n&&(e.blockedOn=null,Nl||(Nl=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,ih)))}function di(e){function n(i){return Fr(i,e)}if(0<Xi.length){Fr(Xi[0],e);for(var t=1;t<Xi.length;t++){var r=Xi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&Fr(it,e),at!==null&&Fr(at,e),ot!==null&&Fr(ot,e),ui.forEach(n),ci.forEach(n),t=0;t<qn.length;t++)r=qn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<qn.length&&(t=qn[0],t.blockedOn===null);)kp(t),t.blockedOn===null&&qn.shift()}var mr=zn.ReactCurrentBatchConfig,Aa=!0;function ah(e,n,t,r){var i=Q,a=mr.transition;mr.transition=null;try{Q=1,Is(e,n,t,r)}finally{Q=i,mr.transition=a}}function oh(e,n,t,r){var i=Q,a=mr.transition;mr.transition=null;try{Q=4,Is(e,n,t,r)}finally{Q=i,mr.transition=a}}function Is(e,n,t,r){if(Aa){var i=Ol(e,n,t,r);if(i===null)Yo(e,n,r,Ra,t),ac(e,r);else if(rh(i,e,n,t,r))r.stopPropagation();else if(ac(e,r),n&4&&-1<th.indexOf(e)){for(;i!==null;){var a=Ai(i);if(a!==null&&vp(a),a=Ol(e,n,t,r),a===null&&Yo(e,n,r,Ra,t),a===i)break;i=a}i!==null&&r.stopPropagation()}else Yo(e,n,r,null,t)}}var Ra=null;function Ol(e,n,t,r){if(Ra=null,e=_s(r),e=Tt(e),e!==null)if(n=Mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=up(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ra=e,null}function wp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kg()){case As:return 1;case fp:return 4;case Ta:case Qg:return 16;case mp:return 536870912;default:return 16}default:return 16}}var nt=null,Ps=null,fa=null;function Ep(){if(fa)return fa;var e,n=Ps,t=n.length,r,i="value"in nt?nt.value:nt.textContent,a=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[a-r];r++);return fa=i.slice(e,1<r?1-r:void 0)}function ma(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ji(){return!0}function lc(){return!1}function Je(e){function n(t,r,i,a,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ji:lc,this.isPropagationStopped=lc,this}return ae(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),n}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Je(Tr),_i=ae({},Tr,{view:0,detail:0}),lh=Je(_i),Bo,Ho,Lr,eo=ae({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Bo=e.screenX-Lr.screenX,Ho=e.screenY-Lr.screenY):Ho=Bo=0,Lr=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),sc=Je(eo),sh=ae({},eo,{dataTransfer:0}),uh=Je(sh),ch=ae({},_i,{relatedTarget:0}),Vo=Je(ch),dh=ae({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),ph=Je(dh),fh=ae({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mh=Je(fh),gh=ae({},Tr,{data:0}),uc=Je(gh),hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yh[e])?!!n[e]:!1}function Os(){return Sh}var xh=ae({},_i,{key:function(e){if(e.key){var n=hh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kh=Je(xh),wh=ae({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=Je(wh),Eh=ae({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),bh=Je(Eh),Ch=ae({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Th=Je(Ch),_h=ae({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=Je(_h),Rh=[9,13,27,32],Ds=Fn&&"CompositionEvent"in window,Zr=null;Fn&&"documentMode"in document&&(Zr=document.documentMode);var Uh=Fn&&"TextEvent"in window&&!Zr,bp=Fn&&(!Ds||Zr&&8<Zr&&11>=Zr),dc=" ",pc=!1;function Cp(e,n){switch(e){case"keyup":return Rh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Ih(e,n){switch(e){case"compositionend":return Tp(n);case"keypress":return n.which!==32?null:(pc=!0,dc);case"textInput":return e=n.data,e===dc&&pc?null:e;default:return null}}function Ph(e,n){if(nr)return e==="compositionend"||!Ds&&Cp(e,n)?(e=Ep(),fa=Ps=nt=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nh[e.type]:n==="textarea"}function _p(e,n,t,r){ip(r),n=Ua(n,"onChange"),0<n.length&&(t=new Ns("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ei=null,pi=null;function Oh(e){Mp(e,0)}function no(e){var n=ir(e);if(Yd(n))return e}function Dh(e,n){if(e==="change")return n}var Ap=!1;if(Fn){var Go;if(Fn){var Wo="oninput"in document;if(!Wo){var mc=document.createElement("div");mc.setAttribute("oninput","return;"),Wo=typeof mc.oninput=="function"}Go=Wo}else Go=!1;Ap=Go&&(!document.documentMode||9<document.documentMode)}function gc(){ei&&(ei.detachEvent("onpropertychange",Rp),pi=ei=null)}function Rp(e){if(e.propertyName==="value"&&no(pi)){var n=[];_p(n,pi,e,_s(e)),sp(Oh,n)}}function Fh(e,n,t){e==="focusin"?(gc(),ei=n,pi=t,ei.attachEvent("onpropertychange",Rp)):e==="focusout"&&gc()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(pi)}function Mh(e,n){if(e==="click")return no(n)}function $h(e,n){if(e==="input"||e==="change")return no(n)}function zh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hn=typeof Object.is=="function"?Object.is:zh;function fi(e,n){if(hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!hl.call(n,i)||!hn(e[i],n[i]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,n){var t=hc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hc(t)}}function Up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ip(){for(var e=window,n=Ea();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ea(e.document)}return n}function Fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jh(e){var n=Ip(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Up(t.ownerDocument.documentElement,t)){if(r!==null&&Fs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=vc(t,a);var o=vc(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bh=Fn&&"documentMode"in document&&11>=document.documentMode,tr=null,Dl=null,ni=null,Fl=!1;function yc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fl||tr==null||tr!==Ea(r)||(r=tr,"selectionStart"in r&&Fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&fi(ni,r)||(ni=r,r=Ua(Dl,"onSelect"),0<r.length&&(n=new Ns("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=tr)))}function Yi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var rr={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},Ko={},Pp={};Fn&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function to(e){if(Ko[e])return Ko[e];if(!rr[e])return e;var n=rr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Pp)return Ko[e]=n[t];return e}var Np=to("animationend"),Op=to("animationiteration"),Dp=to("animationstart"),Fp=to("transitionend"),Lp=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,n){Lp.set(e,n),Lt(n,[e])}for(var Qo=0;Qo<Sc.length;Qo++){var Xo=Sc[Qo],Hh=Xo.toLowerCase(),Vh=Xo[0].toUpperCase()+Xo.slice(1);gt(Hh,"on"+Vh)}gt(Np,"onAnimationEnd");gt(Op,"onAnimationIteration");gt(Dp,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(Fp,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function xc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hg(r,n,void 0,e),e.currentTarget=null}function Mp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;xc(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;xc(i,s,u),a=l}}}if(Ca)throw e=Il,Ca=!1,Il=null,e}function ee(e,n){var t=n[jl];t===void 0&&(t=n[jl]=new Set);var r=e+"__bubble";t.has(r)||($p(n,e,2,!1),t.add(r))}function Jo(e,n,t){var r=0;n&&(r|=4),$p(t,e,r,n)}var qi="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[qi]){e[qi]=!0,Wd.forEach(function(t){t!=="selectionchange"&&(Gh.has(t)||Jo(t,!1,e),Jo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qi]||(n[qi]=!0,Jo("selectionchange",!1,n))}}function $p(e,n,t,r){switch(wp(n)){case 1:var i=ah;break;case 4:i=oh;break;default:i=Is}t=i.bind(null,n,t,e),i=void 0,!Ul||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Yo(e,n,t,r,i){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}sp(function(){var u=a,d=_s(t),f=[];e:{var g=Lp.get(e);if(g!==void 0){var w=Ns,y=e;switch(e){case"keypress":if(ma(t)===0)break e;case"keydown":case"keyup":w=kh;break;case"focusin":y="focus",w=Vo;break;case"focusout":y="blur",w=Vo;break;case"beforeblur":case"afterblur":w=Vo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=bh;break;case Np:case Op:case Dp:w=ph;break;case Fp:w=Th;break;case"scroll":w=lh;break;case"wheel":w=Ah;break;case"copy":case"cut":case"paste":w=mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=cc}var b=(n&4)!==0,C=!b&&e==="scroll",h=b?g!==null?g+"Capture":null:g;b=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,h!==null&&(v=si(c,h),v!=null&&b.push(gi(c,v,p)))),C)break;c=c.return}0<b.length&&(g=new w(g,y,null,t,d),f.push({event:g,listeners:b}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&t!==Al&&(y=t.relatedTarget||t.fromElement)&&(Tt(y)||y[Ln]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=t.relatedTarget||t.toElement,w=u,y=y?Tt(y):null,y!==null&&(C=Mt(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(b=sc,v="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=cc,v="onPointerLeave",h="onPointerEnter",c="pointer"),C=w==null?g:ir(w),p=y==null?g:ir(y),g=new b(v,c+"leave",w,t,d),g.target=C,g.relatedTarget=p,v=null,Tt(d)===u&&(b=new b(h,c+"enter",y,t,d),b.target=p,b.relatedTarget=C,v=b),C=v,w&&y)n:{for(b=w,h=y,c=0,p=b;p;p=Xt(p))c++;for(p=0,v=h;v;v=Xt(v))p++;for(;0<c-p;)b=Xt(b),c--;for(;0<p-c;)h=Xt(h),p--;for(;c--;){if(b===h||h!==null&&b===h.alternate)break n;b=Xt(b),h=Xt(h)}b=null}else b=null;w!==null&&kc(f,g,w,b,!1),y!==null&&C!==null&&kc(f,C,y,b,!0)}}e:{if(g=u?ir(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var S=Dh;else if(fc(g))if(Ap)S=$h;else{S=Lh;var k=Fh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Mh);if(S&&(S=S(e,u))){_p(f,S,t,d);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&El(g,"number",g.value)}switch(k=u?ir(u):window,e){case"focusin":(fc(k)||k.contentEditable==="true")&&(tr=k,Dl=u,ni=null);break;case"focusout":ni=Dl=tr=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,yc(f,t,d);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":yc(f,t,d)}var T;if(Ds)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else nr?Cp(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(bp&&t.locale!=="ko"&&(nr||A!=="onCompositionStart"?A==="onCompositionEnd"&&nr&&(T=Ep()):(nt=d,Ps="value"in nt?nt.value:nt.textContent,nr=!0)),k=Ua(u,A),0<k.length&&(A=new uc(A,e,null,t,d),f.push({event:A,listeners:k}),T?A.data=T:(T=Tp(t),T!==null&&(A.data=T)))),(T=Uh?Ih(e,t):Ph(e,t))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(d=new uc("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=T))}Mp(f,n)})}function gi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ua(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=si(e,t),a!=null&&r.unshift(gi(e,a,i)),a=si(e,n),a!=null&&r.push(gi(e,a,i))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kc(e,n,t,r,i){for(var a=n._reactName,o=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=si(t,a),l!=null&&o.unshift(gi(t,l,s))):i||(l=si(t,a),l!=null&&o.push(gi(t,l,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Wh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(Kh,"")}function Zi(e,n,t){if(n=wc(n),wc(e)!==n&&t)throw Error(_(425))}function Ia(){}var Ll=null,Ml=null;function $l(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,Qh=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec<"u"?function(e){return Ec.resolve(null).then(e).catch(Jh)}:zl;function Jh(e){setTimeout(function(){throw e})}function qo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),di(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);di(n)}function lt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function bc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Cn="__reactFiber$"+_r,hi="__reactProps$"+_r,Ln="__reactContainer$"+_r,jl="__reactEvents$"+_r,Yh="__reactListeners$"+_r,qh="__reactHandles$"+_r;function Tt(e){var n=e[Cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ln]||t[Cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=bc(e);e!==null;){if(t=e[Cn])return t;e=bc(e)}return n}e=t,t=e.parentNode}return null}function Ai(e){return e=e[Cn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ro(e){return e[hi]||null}var Bl=[],ar=-1;function ht(e){return{current:e}}function ne(e){0>ar||(e.current=Bl[ar],Bl[ar]=null,ar--)}function Z(e,n){ar++,Bl[ar]=e.current,e.current=n}var mt={},Pe=ht(mt),Be=ht(!1),It=mt;function yr(e,n){var t=e.type.contextTypes;if(!t)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function Pa(){ne(Be),ne(Pe)}function Cc(e,n,t){if(Pe.current!==mt)throw Error(_(168));Z(Pe,n),Z(Be,t)}function zp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(_(108,Fg(e)||"Unknown",i));return ae({},t,r)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,It=Pe.current,Z(Pe,e),Z(Be,Be.current),!0}function Tc(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=zp(e,n,It),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(Pe),Z(Pe,e)):ne(Be),Z(Be,t)}var Pn=null,io=!1,Zo=!1;function jp(e){Pn===null?Pn=[e]:Pn.push(e)}function Zh(e){io=!0,jp(e)}function vt(){if(!Zo&&Pn!==null){Zo=!0;var e=0,n=Q;try{var t=Pn;for(Q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,io=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),pp(As,vt),i}finally{Q=n,Zo=!1}}return null}var or=[],lr=0,Oa=null,Da=0,qe=[],Ze=0,Pt=null,Nn=1,On="";function Et(e,n){or[lr++]=Da,or[lr++]=Oa,Oa=e,Da=n}function Bp(e,n,t){qe[Ze++]=Nn,qe[Ze++]=On,qe[Ze++]=Pt,Pt=e;var r=Nn;e=On;var i=32-mn(r)-1;r&=~(1<<i),t+=1;var a=32-mn(n)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-mn(n)+i|t<<i|r,On=a+e}else Nn=1<<a|t<<i|r,On=e}function Ls(e){e.return!==null&&(Et(e,1),Bp(e,1,0))}function Ms(e){for(;e===Oa;)Oa=or[--lr],or[lr]=null,Da=or[--lr],or[lr]=null;for(;e===Pt;)Pt=qe[--Ze],qe[Ze]=null,On=qe[--Ze],qe[Ze]=null,Nn=qe[--Ze],qe[Ze]=null}var Ke=null,We=null,te=!1,dn=null;function Hp(e,n){var t=en(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function _c(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ke=e,We=lt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ke=e,We=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Pt!==null?{id:Nn,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=en(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ke=e,We=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(te){var n=We;if(n){var t=n;if(!_c(e,n)){if(Hl(e))throw Error(_(418));n=lt(t.nextSibling);var r=Ke;n&&_c(e,n)?Hp(r,t):(e.flags=e.flags&-4097|2,te=!1,Ke=e)}}else{if(Hl(e))throw Error(_(418));e.flags=e.flags&-4097|2,te=!1,Ke=e}}}function Ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function ea(e){if(e!==Ke)return!1;if(!te)return Ac(e),te=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$l(e.type,e.memoizedProps)),n&&(n=We)){if(Hl(e))throw Vp(),Error(_(418));for(;n;)Hp(e,n),n=lt(n.nextSibling)}if(Ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){We=lt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}We=null}}else We=Ke?lt(e.stateNode.nextSibling):null;return!0}function Vp(){for(var e=We;e;)e=lt(e.nextSibling)}function Sr(){We=Ke=null,te=!1}function $s(e){dn===null?dn=[e]:dn.push(e)}var ev=zn.ReactCurrentBatchConfig;function Mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function na(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Rc(e){var n=e._init;return n(e._payload)}function Gp(e){function n(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function t(h,c){if(!e)return null;for(;c!==null;)n(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=dt(h,c),h.index=0,h.sibling=null,h}function a(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,c,p,v){return c===null||c.tag!==6?(c=ol(p,h.mode,v),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,v){var S=p.type;return S===er?d(h,c,p.props.children,v,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jn&&Rc(S)===c.type)?(v=i(c,p.props),v.ref=Mr(h,c,p),v.return=h,v):(v=ka(p.type,p.key,p.props,null,h.mode,v),v.ref=Mr(h,c,p),v.return=h,v)}function u(h,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ll(p,h.mode,v),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,v,S){return c===null||c.tag!==7?(c=Ut(p,h.mode,v,S),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ol(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Vi:return p=ka(c.type,c.key,c.props,null,h.mode,p),p.ref=Mr(h,null,c),p.return=h,p;case Zt:return c=ll(c,h.mode,p),c.return=h,c;case Jn:var v=c._init;return f(h,v(c._payload),p)}if(Wr(c)||Nr(c))return c=Ut(c,h.mode,p,null),c.return=h,c;na(h,c)}return null}function g(h,c,p,v){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(h,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:return p.key===S?l(h,c,p,v):null;case Zt:return p.key===S?u(h,c,p,v):null;case Jn:return S=p._init,g(h,c,S(p._payload),v)}if(Wr(p)||Nr(p))return S!==null?null:d(h,c,p,v,null);na(h,p)}return null}function w(h,c,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(p)||null,s(c,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vi:return h=h.get(v.key===null?p:v.key)||null,l(c,h,v,S);case Zt:return h=h.get(v.key===null?p:v.key)||null,u(c,h,v,S);case Jn:var k=v._init;return w(h,c,p,k(v._payload),S)}if(Wr(v)||Nr(v))return h=h.get(p)||null,d(c,h,v,S,null);na(c,v)}return null}function y(h,c,p,v){for(var S=null,k=null,T=c,A=c=0,P=null;T!==null&&A<p.length;A++){T.index>A?(P=T,T=null):P=T.sibling;var D=g(h,T,p[A],v);if(D===null){T===null&&(T=P);break}e&&T&&D.alternate===null&&n(h,T),c=a(D,c,A),k===null?S=D:k.sibling=D,k=D,T=P}if(A===p.length)return t(h,T),te&&Et(h,A),S;if(T===null){for(;A<p.length;A++)T=f(h,p[A],v),T!==null&&(c=a(T,c,A),k===null?S=T:k.sibling=T,k=T);return te&&Et(h,A),S}for(T=r(h,T);A<p.length;A++)P=w(T,h,A,p[A],v),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?A:P.key),c=a(P,c,A),k===null?S=P:k.sibling=P,k=P);return e&&T.forEach(function(K){return n(h,K)}),te&&Et(h,A),S}function b(h,c,p,v){var S=Nr(p);if(typeof S!="function")throw Error(_(150));if(p=S.call(p),p==null)throw Error(_(151));for(var k=S=null,T=c,A=c=0,P=null,D=p.next();T!==null&&!D.done;A++,D=p.next()){T.index>A?(P=T,T=null):P=T.sibling;var K=g(h,T,D.value,v);if(K===null){T===null&&(T=P);break}e&&T&&K.alternate===null&&n(h,T),c=a(K,c,A),k===null?S=K:k.sibling=K,k=K,T=P}if(D.done)return t(h,T),te&&Et(h,A),S;if(T===null){for(;!D.done;A++,D=p.next())D=f(h,D.value,v),D!==null&&(c=a(D,c,A),k===null?S=D:k.sibling=D,k=D);return te&&Et(h,A),S}for(T=r(h,T);!D.done;A++,D=p.next())D=w(T,h,A,D.value,v),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?A:D.key),c=a(D,c,A),k===null?S=D:k.sibling=D,k=D);return e&&T.forEach(function(ue){return n(h,ue)}),te&&Et(h,A),S}function C(h,c,p,v){if(typeof p=="object"&&p!==null&&p.type===er&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:e:{for(var S=p.key,k=c;k!==null;){if(k.key===S){if(S=p.type,S===er){if(k.tag===7){t(h,k.sibling),c=i(k,p.props.children),c.return=h,h=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jn&&Rc(S)===k.type){t(h,k.sibling),c=i(k,p.props),c.ref=Mr(h,k,p),c.return=h,h=c;break e}t(h,k);break}else n(h,k);k=k.sibling}p.type===er?(c=Ut(p.props.children,h.mode,v,p.key),c.return=h,h=c):(v=ka(p.type,p.key,p.props,null,h.mode,v),v.ref=Mr(h,c,p),v.return=h,h=v)}return o(h);case Zt:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{t(h,c);break}else n(h,c);c=c.sibling}c=ll(p,h.mode,v),c.return=h,h=c}return o(h);case Jn:return k=p._init,C(h,c,k(p._payload),v)}if(Wr(p))return y(h,c,p,v);if(Nr(p))return b(h,c,p,v);na(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(h,c.sibling),c=i(c,p),c.return=h,h=c):(t(h,c),c=ol(p,h.mode,v),c.return=h,h=c),o(h)):t(h,c)}return C}var xr=Gp(!0),Wp=Gp(!1),Fa=ht(null),La=null,sr=null,zs=null;function js(){zs=sr=La=null}function Bs(e){var n=Fa.current;ne(Fa),e._currentValue=n}function Gl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function gr(e,n){La=e,zs=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(je=!0),e.firstContext=null)}function tn(e){var n=e._currentValue;if(zs!==e)if(e={context:e,memoizedValue:n,next:null},sr===null){if(La===null)throw Error(_(308));sr=e,La.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return n}var _t=null;function Hs(e){_t===null?_t=[e]:_t.push(e)}function Kp(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Hs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Mn(e,r)}function Mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Yn=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function st(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Mn(e,t)}return i=r.interleaved,i===null?(n.next=n,Hs(r)):(n.next=i.next,i.next=n),r.interleaved=n,Mn(e,t)}function ga(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rs(e,t)}}function Uc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?i=a=n:a=a.next=n}else i=a=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ma(e,n,t,r){var i=e.updateQueue;Yn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,d=u=l=null,s=a;do{var g=s.lane,w=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,b=s;switch(g=n,w=t,b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(w,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,g=typeof y=="function"?y.call(w,f,g):y,g==null)break e;f=ae({},f,g);break e;case 2:Yn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=w,l=f):d=d.next=w,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else a===null&&(i.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=f}}function Ic(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Ri={},_n=ht(Ri),vi=ht(Ri),yi=ht(Ri);function At(e){if(e===Ri)throw Error(_(174));return e}function Gs(e,n){switch(Z(yi,n),Z(vi,e),Z(_n,Ri),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cl(n,e)}ne(_n),Z(_n,n)}function kr(){ne(_n),ne(vi),ne(yi)}function Xp(e){At(yi.current);var n=At(_n.current),t=Cl(n,e.type);n!==t&&(Z(vi,e),Z(_n,t))}function Ws(e){vi.current===e&&(ne(_n),ne(vi))}var re=ht(0);function $a(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var el=[];function Ks(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var ha=zn.ReactCurrentDispatcher,nl=zn.ReactCurrentBatchConfig,Nt=0,ie=null,ge=null,xe=null,za=!1,ti=!1,Si=0,nv=0;function Ae(){throw Error(_(321))}function Qs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!hn(e[t],n[t]))return!1;return!0}function Xs(e,n,t,r,i,a){if(Nt=a,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ha.current=e===null||e.memoizedState===null?av:ov,e=t(r,i),ti){a=0;do{if(ti=!1,Si=0,25<=a)throw Error(_(301));a+=1,xe=ge=null,n.updateQueue=null,ha.current=lv,e=t(r,i)}while(ti)}if(ha.current=ja,n=ge!==null&&ge.next!==null,Nt=0,xe=ge=ie=null,za=!1,n)throw Error(_(300));return e}function Js(){var e=Si!==0;return Si=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ie.memoizedState=xe=e:xe=xe.next=e,xe}function rn(){if(ge===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=xe===null?ie.memoizedState:xe.next;if(n!==null)xe=n,ge=e;else{if(e===null)throw Error(_(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ie.memoizedState=xe=e:xe=xe.next=e}return xe}function xi(e,n){return typeof n=="function"?n(e):n}function tl(e){var n=rn(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=ge,i=r.baseQueue,a=t.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var d=u.lane;if((Nt&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,ie.lanes|=d,Ot|=d}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,hn(r,n.memoizedState)||(je=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do a=i.lane,ie.lanes|=a,Ot|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function rl(e){var n=rn(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,a=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);hn(a,n.memoizedState)||(je=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Jp(){}function Yp(e,n){var t=ie,r=rn(),i=n(),a=!hn(r.memoizedState,i);if(a&&(r.memoizedState=i,je=!0),r=r.queue,Ys(ef.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,ki(9,Zp.bind(null,t,r,i,n),void 0,null),ke===null)throw Error(_(349));Nt&30||qp(t,n,i)}return i}function qp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ie.updateQueue,n===null?(n={lastEffect:null,stores:null},ie.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zp(e,n,t,r){n.value=t,n.getSnapshot=r,nf(n)&&tf(e)}function ef(e,n,t){return t(function(){nf(n)&&tf(e)})}function nf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!hn(e,t)}catch{return!0}}function tf(e){var n=Mn(e,1);n!==null&&gn(n,e,1,-1)}function Pc(e){var n=bn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},n.queue=e,e=e.dispatch=iv.bind(null,ie,e),[n.memoizedState,e]}function ki(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ie.updateQueue,n===null?(n={lastEffect:null,stores:null},ie.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function rf(){return rn().memoizedState}function va(e,n,t,r){var i=bn();ie.flags|=e,i.memoizedState=ki(1|n,t,void 0,r===void 0?null:r)}function ao(e,n,t,r){var i=rn();r=r===void 0?null:r;var a=void 0;if(ge!==null){var o=ge.memoizedState;if(a=o.destroy,r!==null&&Qs(r,o.deps)){i.memoizedState=ki(n,t,a,r);return}}ie.flags|=e,i.memoizedState=ki(1|n,t,a,r)}function Nc(e,n){return va(8390656,8,e,n)}function Ys(e,n){return ao(2048,8,e,n)}function af(e,n){return ao(4,2,e,n)}function of(e,n){return ao(4,4,e,n)}function lf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sf(e,n,t){return t=t!=null?t.concat([e]):null,ao(4,4,lf.bind(null,n,e),t)}function qs(){}function uf(e,n){var t=rn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Qs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function cf(e,n){var t=rn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Qs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function df(e,n,t){return Nt&21?(hn(t,n)||(t=gp(),ie.lanes|=t,Ot|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=t)}function tv(e,n){var t=Q;Q=t!==0&&4>t?t:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),n()}finally{Q=t,nl.transition=r}}function pf(){return rn().memoizedState}function rv(e,n,t){var r=ct(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ff(e))mf(n,t);else if(t=Kp(e,n,t,r),t!==null){var i=Fe();gn(t,e,r,i),gf(t,n,r)}}function iv(e,n,t){var r=ct(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ff(e))mf(n,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,s=a(o,t);if(i.hasEagerState=!0,i.eagerState=s,hn(s,o)){var l=n.interleaved;l===null?(i.next=i,Hs(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=Kp(e,n,i,r),t!==null&&(i=Fe(),gn(t,e,r,i),gf(t,n,r))}}function ff(e){var n=e.alternate;return e===ie||n!==null&&n===ie}function mf(e,n){ti=za=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rs(e,t)}}var ja={readContext:tn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},av={readContext:tn,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:tn,useEffect:Nc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,va(4194308,4,lf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return va(4194308,4,e,n)},useInsertionEffect:function(e,n){return va(4,2,e,n)},useMemo:function(e,n){var t=bn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=bn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=rv.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:Pc,useDebugValue:qs,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Pc(!1),n=e[0];return e=tv.bind(null,e[1]),bn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ie,i=bn();if(te){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),ke===null)throw Error(_(349));Nt&30||qp(r,n,t)}i.memoizedState=t;var a={value:t,getSnapshot:n};return i.queue=a,Nc(ef.bind(null,r,a,e),[e]),r.flags|=2048,ki(9,Zp.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=bn(),n=ke.identifierPrefix;if(te){var t=On,r=Nn;t=(r&~(1<<32-mn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Si++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=nv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ov={readContext:tn,useCallback:uf,useContext:tn,useEffect:Ys,useImperativeHandle:sf,useInsertionEffect:af,useLayoutEffect:of,useMemo:cf,useReducer:tl,useRef:rf,useState:function(){return tl(xi)},useDebugValue:qs,useDeferredValue:function(e){var n=rn();return df(n,ge.memoizedState,e)},useTransition:function(){var e=tl(xi)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Jp,useSyncExternalStore:Yp,useId:pf,unstable_isNewReconciler:!1},lv={readContext:tn,useCallback:uf,useContext:tn,useEffect:Ys,useImperativeHandle:sf,useInsertionEffect:af,useLayoutEffect:of,useMemo:cf,useReducer:rl,useRef:rf,useState:function(){return rl(xi)},useDebugValue:qs,useDeferredValue:function(e){var n=rn();return ge===null?n.memoizedState=e:df(n,ge.memoizedState,e)},useTransition:function(){var e=rl(xi)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Jp,useSyncExternalStore:Yp,useId:pf,unstable_isNewReconciler:!1};function un(e,n){if(e&&e.defaultProps){n=ae({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Wl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ae({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var oo={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=ct(e),a=Dn(r,i);a.payload=n,t!=null&&(a.callback=t),n=st(e,a,i),n!==null&&(gn(n,e,i,r),ga(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=ct(e),a=Dn(r,i);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=st(e,a,i),n!==null&&(gn(n,e,i,r),ga(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),r=ct(e),i=Dn(t,r);i.tag=2,n!=null&&(i.callback=n),n=st(e,i,r),n!==null&&(gn(n,e,r,t),ga(n,e,r))}};function Oc(e,n,t,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):n.prototype&&n.prototype.isPureReactComponent?!fi(t,r)||!fi(i,a):!0}function hf(e,n,t){var r=!1,i=mt,a=n.contextType;return typeof a=="object"&&a!==null?a=tn(a):(i=He(n)?It:Pe.current,r=n.contextTypes,a=(r=r!=null)?yr(e,i):mt),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=oo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),n}function Dc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&oo.enqueueReplaceState(n,n.state,null)}function Kl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Vs(e);var a=n.contextType;typeof a=="object"&&a!==null?i.context=tn(a):(a=He(n)?It:Pe.current,i.context=yr(e,a)),i.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Wl(e,n,a,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&oo.enqueueReplaceState(i,i.state,null),Ma(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,n){try{var t="",r=n;do t+=Dg(r),r=r.return;while(r);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:i,digest:null}}function il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ql(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sv=typeof WeakMap=="function"?WeakMap:Map;function vf(e,n,t){t=Dn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ha||(Ha=!0,is=r),Ql(e,n)},t}function yf(e,n,t){t=Dn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ql(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Ql(e,n),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Fc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sv;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=wv.bind(null,e,n,t),n.then(e,e))}function Lc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Mc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Dn(-1,1),n.tag=2,st(t,n,1))),t.lanes|=1),e)}var uv=zn.ReactCurrentOwner,je=!1;function De(e,n,t,r){n.child=e===null?Wp(n,null,t,r):xr(n,e.child,t,r)}function $c(e,n,t,r,i){t=t.render;var a=n.ref;return gr(n,i),r=Xs(e,n,t,r,a,i),t=Js(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,$n(e,n,i)):(te&&t&&Ls(n),n.flags|=1,De(e,n,r,i),n.child)}function zc(e,n,t,r,i){if(e===null){var a=t.type;return typeof a=="function"&&!ou(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,Sf(e,n,a,r,i)):(e=ka(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:fi,t(o,r)&&e.ref===n.ref)return $n(e,n,i)}return n.flags|=1,e=dt(a,r),e.ref=n.ref,e.return=n,n.child=e}function Sf(e,n,t,r,i){if(e!==null){var a=e.memoizedProps;if(fi(a,r)&&e.ref===n.ref)if(je=!1,n.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return n.lanes=e.lanes,$n(e,n,i)}return Xl(e,n,t,r,i)}function xf(e,n,t){var r=n.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(cr,Ge),Ge|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Z(cr,Ge),Ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,Z(cr,Ge),Ge|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,Z(cr,Ge),Ge|=r;return De(e,n,i,t),n.child}function kf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Xl(e,n,t,r,i){var a=He(t)?It:Pe.current;return a=yr(n,a),gr(n,i),t=Xs(e,n,t,r,a,i),r=Js(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,$n(e,n,i)):(te&&r&&Ls(n),n.flags|=1,De(e,n,t,i),n.child)}function jc(e,n,t,r,i){if(He(t)){var a=!0;Na(n)}else a=!1;if(gr(n,i),n.stateNode===null)ya(e,n),hf(n,t,r),Kl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=He(t)?It:Pe.current,u=yr(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Dc(n,o,r,u),Yn=!1;var g=n.memoizedState;o.state=g,Ma(n,r,o,i),l=n.memoizedState,s!==r||g!==l||Be.current||Yn?(typeof d=="function"&&(Wl(n,t,d,r),l=n.memoizedState),(s=Yn||Oc(n,t,s,r,g,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Qp(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:un(n.type,s),o.props=u,f=n.pendingProps,g=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=He(t)?It:Pe.current,l=yr(n,l));var w=t.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||g!==l)&&Dc(n,o,r,l),Yn=!1,g=n.memoizedState,o.state=g,Ma(n,r,o,i);var y=n.memoizedState;s!==f||g!==y||Be.current||Yn?(typeof w=="function"&&(Wl(n,t,w,r),y=n.memoizedState),(u=Yn||Oc(n,t,u,r,g,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Jl(e,n,t,r,a,i)}function Jl(e,n,t,r,i,a){kf(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Tc(n,t,!1),$n(e,n,a);r=n.stateNode,uv.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=xr(n,e.child,null,a),n.child=xr(n,null,s,a)):De(e,n,s,a),n.memoizedState=r.state,i&&Tc(n,t,!0),n.child}function wf(e){var n=e.stateNode;n.pendingContext?Cc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Cc(e,n.context,!1),Gs(e,n.containerInfo)}function Bc(e,n,t,r,i){return Sr(),$s(i),n.flags|=256,De(e,n,t,r),n.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ef(e,n,t){var r=n.pendingProps,i=re.current,a=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(re,i&1),e===null)return Vl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,a?(r=n.mode,a=n.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=uo(o,r,0,null),e=Ut(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=ql(t),n.memoizedState=Yl,e):Zs(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return cv(e,n,o,r,s,i,t);if(a){a=r.fallback,o=n.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=dt(s,a):(a=Ut(a,o,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,o=e.child.memoizedState,o=o===null?ql(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=Yl,r}return a=e.child,e=a.sibling,r=dt(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Zs(e,n){return n=uo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ta(e,n,t,r){return r!==null&&$s(r),xr(n,e.child,null,t),e=Zs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cv(e,n,t,r,i,a,o){if(t)return n.flags&256?(n.flags&=-257,r=il(Error(_(422))),ta(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,i=n.mode,r=uo({mode:"visible",children:r.children},i,0,null),a=Ut(a,i,o,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&xr(n,e.child,null,o),n.child.memoizedState=ql(o),n.memoizedState=Yl,a);if(!(n.mode&1))return ta(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(_(419)),r=il(a,r,void 0),ta(e,n,o,r)}if(s=(o&e.childLanes)!==0,je||s){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Mn(e,i),gn(r,e,i,-1))}return au(),r=il(Error(_(421))),ta(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ev.bind(null,e),i._reactRetry=n,null):(e=a.treeContext,We=lt(i.nextSibling),Ke=n,te=!0,dn=null,e!==null&&(qe[Ze++]=Nn,qe[Ze++]=On,qe[Ze++]=Pt,Nn=e.id,On=e.overflow,Pt=n),n=Zs(n,r.children),n.flags|=4096,n)}function Hc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Gl(e.return,n,t)}function al(e,n,t,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=i)}function bf(e,n,t){var r=n.pendingProps,i=r.revealOrder,a=r.tail;if(De(e,n,r.children,t),r=re.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hc(e,t,n);else if(e.tag===19)Hc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(re,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&$a(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),al(n,!1,i,t,a);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&$a(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}al(n,!0,t,null,a);break;case"together":al(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ya(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function $n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ot|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function dv(e,n,t){switch(n.tag){case 3:wf(n),Sr();break;case 5:Xp(n);break;case 1:He(n.type)&&Na(n);break;case 4:Gs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;Z(Fa,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Z(re,re.current&1),n.flags|=128,null):t&n.child.childLanes?Ef(e,n,t):(Z(re,re.current&1),e=$n(e,n,t),e!==null?e.sibling:null);Z(re,re.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return bf(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(re,re.current),r)break;return null;case 22:case 23:return n.lanes=0,xf(e,n,t)}return $n(e,n,t)}var Cf,Zl,Tf,_f;Cf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zl=function(){};Tf=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,At(_n.current);var a=null;switch(t){case"input":i=kl(e,i),r=kl(e,r),a=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),a=[];break;case"textarea":i=bl(e,i),r=bl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ia)}Tl(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(a||(a=[]),a.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};_f=function(e,n,t,r){t!==r&&(n.flags|=4)};function $r(e,n){if(!te)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pv(e,n,t){var r=n.pendingProps;switch(Ms(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return He(n.type)&&Pa(),Re(n),null;case 3:return r=n.stateNode,kr(),ne(Be),ne(Pe),Ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ea(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,dn!==null&&(ls(dn),dn=null))),Zl(e,n),Re(n),null;case 5:Ws(n);var i=At(yi.current);if(t=n.type,e!==null&&n.stateNode!=null)Tf(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return Re(n),null}if(e=At(_n.current),ea(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[Cn]=n,r[hi]=a,e=(n.mode&1)!==0,t){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)ee(Qr[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":qu(r,a),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ee("invalid",r);break;case"textarea":ec(r,a),ee("invalid",r)}Tl(t,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Zi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Zi(r.textContent,s,e),i=["children",""+s]):oi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ee("scroll",r)}switch(t){case"input":Gi(r),Zu(r,a,!0);break;case"textarea":Gi(r),nc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ia)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ep(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Cn]=n,e[hi]=r,Cf(e,n,!1,!1),n.stateNode=e;e:{switch(o=_l(t,r),t){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)ee(Qr[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":qu(e,r),i=kl(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",e);break;case"textarea":ec(e,r),i=bl(e,r),ee("invalid",e);break;default:i=r}Tl(t,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?rp(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&np(e,l)):a==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&li(e,l):typeof l=="number"&&li(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(oi.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ee("scroll",e):l!=null&&Es(e,a,l,o))}switch(t){case"input":Gi(e),Zu(e,r,!1);break;case"textarea":Gi(e),nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?dr(e,!!r.multiple,a,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ia)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Re(n),null;case 6:if(e&&n.stateNode!=null)_f(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=At(yi.current),At(_n.current),ea(n)){if(r=n.stateNode,t=n.memoizedProps,r[Cn]=n,(a=r.nodeValue!==t)&&(e=Ke,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Cn]=n,n.stateNode=r}return Re(n),null;case 13:if(ne(re),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&n.mode&1&&!(n.flags&128))Vp(),Sr(),n.flags|=98560,a=!1;else if(a=ea(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[Cn]=n}else Sr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Re(n),a=!1}else dn!==null&&(ls(dn),dn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||re.current&1?he===0&&(he=3):au())),n.updateQueue!==null&&(n.flags|=4),Re(n),null);case 4:return kr(),Zl(e,n),e===null&&mi(n.stateNode.containerInfo),Re(n),null;case 10:return Bs(n.type._context),Re(n),null;case 17:return He(n.type)&&Pa(),Re(n),null;case 19:if(ne(re),a=n.memoizedState,a===null)return Re(n),null;if(r=(n.flags&128)!==0,o=a.rendering,o===null)if(r)$r(a,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=$a(e),o!==null){for(n.flags|=128,$r(a,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Z(re,re.current&1|2),n.child}e=e.sibling}a.tail!==null&&ce()>Er&&(n.flags|=128,r=!0,$r(a,!1),n.lanes=4194304)}else{if(!r)if(e=$a(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),$r(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!te)return Re(n),null}else 2*ce()-a.renderingStartTime>Er&&t!==1073741824&&(n.flags|=128,r=!0,$r(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=ce(),n.sibling=null,t=re.current,Z(re,r?t&1|2:t&1),n):(Re(n),null);case 22:case 23:return iu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ge&1073741824&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function fv(e,n){switch(Ms(n),n.tag){case 1:return He(n.type)&&Pa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kr(),ne(Be),ne(Pe),Ks(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ws(n),null;case 13:if(ne(re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));Sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(re),null;case 4:return kr(),null;case 10:return Bs(n.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var ra=!1,Ue=!1,mv=typeof WeakSet=="function"?WeakSet:Set,O=null;function ur(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){se(e,n,r)}else t.current=null}function es(e,n,t){try{t()}catch(r){se(e,n,r)}}var Vc=!1;function gv(e,n){if(Ll=Aa,e=Ip(),Fs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,s=-1,l=-1,u=0,d=0,f=e,g=null;n:for(;;){for(var w;f!==t||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===e)break n;if(g===t&&++u===i&&(s=o),g===a&&++d===r&&(l=o),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ml={focusedElem:e,selectionRange:t},Aa=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,C=y.memoizedState,h=n.stateNode,c=h.getSnapshotBeforeUpdate(n.elementType===n.type?b:un(n.type,b),C);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){se(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return y=Vc,Vc=!1,y}function ri(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&es(n,t,a)}i=i.next}while(i!==r)}}function lo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ns(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Af(e){var n=e.alternate;n!==null&&(e.alternate=null,Af(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Cn],delete n[hi],delete n[jl],delete n[Yh],delete n[qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rf(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ia));else if(r!==4&&(e=e.child,e!==null))for(ts(e,n,t),e=e.sibling;e!==null;)ts(e,n,t),e=e.sibling}function rs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(rs(e,n,t),e=e.sibling;e!==null;)rs(e,n,t),e=e.sibling}var Ee=null,cn=!1;function Wn(e,n,t){for(t=t.child;t!==null;)Uf(e,n,t),t=t.sibling}function Uf(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Za,t)}catch{}switch(t.tag){case 5:Ue||ur(t,n);case 6:var r=Ee,i=cn;Ee=null,Wn(e,n,t),Ee=r,cn=i,Ee!==null&&(cn?(e=Ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ee.removeChild(t.stateNode));break;case 18:Ee!==null&&(cn?(e=Ee,t=t.stateNode,e.nodeType===8?qo(e.parentNode,t):e.nodeType===1&&qo(e,t),di(e)):qo(Ee,t.stateNode));break;case 4:r=Ee,i=cn,Ee=t.stateNode.containerInfo,cn=!0,Wn(e,n,t),Ee=r,cn=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&es(t,n,o),i=i.next}while(i!==r)}Wn(e,n,t);break;case 1:if(!Ue&&(ur(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){se(t,n,s)}Wn(e,n,t);break;case 21:Wn(e,n,t);break;case 22:t.mode&1?(Ue=(r=Ue)||t.memoizedState!==null,Wn(e,n,t),Ue=r):Wn(e,n,t);break;default:Wn(e,n,t)}}function Wc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new mv),n.forEach(function(r){var i=bv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var a=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,cn=!1;break e;case 3:Ee=s.stateNode.containerInfo,cn=!0;break e;case 4:Ee=s.stateNode.containerInfo,cn=!0;break e}s=s.return}if(Ee===null)throw Error(_(160));Uf(a,o,i),Ee=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){se(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)If(n,e),n=n.sibling}function If(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(n,e),xn(e),r&4){try{ri(3,e,e.return),lo(3,e)}catch(b){se(e,e.return,b)}try{ri(5,e,e.return)}catch(b){se(e,e.return,b)}}break;case 1:sn(n,e),xn(e),r&512&&t!==null&&ur(t,t.return);break;case 5:if(sn(n,e),xn(e),r&512&&t!==null&&ur(t,t.return),e.flags&32){var i=e.stateNode;try{li(i,"")}catch(b){se(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&qd(i,a),_l(s,o);var u=_l(s,a);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?rp(i,f):d==="dangerouslySetInnerHTML"?np(i,f):d==="children"?li(i,f):Es(i,d,f,u)}switch(s){case"input":wl(i,a);break;case"textarea":Zd(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?dr(i,!!a.multiple,w,!1):g!==!!a.multiple&&(a.defaultValue!=null?dr(i,!!a.multiple,a.defaultValue,!0):dr(i,!!a.multiple,a.multiple?[]:"",!1))}i[hi]=a}catch(b){se(e,e.return,b)}}break;case 6:if(sn(n,e),xn(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(b){se(e,e.return,b)}}break;case 3:if(sn(n,e),xn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{di(n.containerInfo)}catch(b){se(e,e.return,b)}break;case 4:sn(n,e),xn(e);break;case 13:sn(n,e),xn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=ce())),r&4&&Wc(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||d,sn(n,e),Ue=u):sn(n,e),xn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(f=O=d;O!==null;){switch(g=O,w=g.child,g.tag){case 0:case 11:case 14:case 15:ri(4,g,g.return);break;case 1:ur(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(b){se(r,t,b)}}break;case 5:ur(g,g.return);break;case 22:if(g.memoizedState!==null){Qc(f);continue}}w!==null?(w.return=g,O=w):Qc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=tp("display",o))}catch(b){se(e,e.return,b)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){se(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:sn(n,e),xn(e),r&4&&Wc(e);break;case 21:break;default:sn(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Rf(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(li(i,""),r.flags&=-33);var a=Gc(e);rs(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Gc(e);ts(e,s,o);break;default:throw Error(_(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hv(e,n,t){O=e,Pf(e)}function Pf(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var i=O,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ra;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ue;s=ra;var u=Ue;if(ra=o,(Ue=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Xc(i):l!==null?(l.return=o,O=l):Xc(i);for(;a!==null;)O=a,Pf(a),a=a.sibling;O=i,ra=s,Ue=u}Kc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,O=a):Kc(e)}}function Kc(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ue||lo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ue)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:un(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Ic(n,a,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ic(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&di(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ue||n.flags&512&&ns(n)}catch(g){se(n,n.return,g)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function Qc(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function Xc(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{lo(4,n)}catch(l){se(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){se(n,i,l)}}var a=n.return;try{ns(n)}catch(l){se(n,a,l)}break;case 5:var o=n.return;try{ns(n)}catch(l){se(n,o,l)}}}catch(l){se(n,n.return,l)}if(n===e){O=null;break}var s=n.sibling;if(s!==null){s.return=n.return,O=s;break}O=n.return}}var vv=Math.ceil,Ba=zn.ReactCurrentDispatcher,eu=zn.ReactCurrentOwner,nn=zn.ReactCurrentBatchConfig,G=0,ke=null,pe=null,Ce=0,Ge=0,cr=ht(0),he=0,wi=null,Ot=0,so=0,nu=0,ii=null,ze=null,tu=0,Er=1/0,In=null,Ha=!1,is=null,ut=null,ia=!1,tt=null,Va=0,ai=0,as=null,Sa=-1,xa=0;function Fe(){return G&6?ce():Sa!==-1?Sa:Sa=ce()}function ct(e){return e.mode&1?G&2&&Ce!==0?Ce&-Ce:ev.transition!==null?(xa===0&&(xa=gp()),xa):(e=Q,e!==0||(e=window.event,e=e===void 0?16:wp(e.type)),e):1}function gn(e,n,t,r){if(50<ai)throw ai=0,as=null,Error(_(185));Ti(e,t,r),(!(G&2)||e!==ke)&&(e===ke&&(!(G&2)&&(so|=t),he===4&&Zn(e,Ce)),Ve(e,r),t===1&&G===0&&!(n.mode&1)&&(Er=ce()+500,io&&vt()))}function Ve(e,n){var t=e.callbackNode;eh(e,n);var r=_a(e,e===ke?Ce:0);if(r===0)t!==null&&ic(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ic(t),n===1)e.tag===0?Zh(Jc.bind(null,e)):jp(Jc.bind(null,e)),Xh(function(){!(G&6)&&vt()}),t=null;else{switch(hp(r)){case 1:t=As;break;case 4:t=fp;break;case 16:t=Ta;break;case 536870912:t=mp;break;default:t=Ta}t=zf(t,Nf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Nf(e,n){if(Sa=-1,xa=0,G&6)throw Error(_(327));var t=e.callbackNode;if(hr()&&e.callbackNode!==t)return null;var r=_a(e,e===ke?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ga(e,r);else{n=r;var i=G;G|=2;var a=Df();(ke!==e||Ce!==n)&&(In=null,Er=ce()+500,Rt(e,n));do try{xv();break}catch(s){Of(e,s)}while(!0);js(),Ba.current=a,G=i,pe!==null?n=0:(ke=null,Ce=0,n=he)}if(n!==0){if(n===2&&(i=Pl(e),i!==0&&(r=i,n=os(e,i))),n===1)throw t=wi,Rt(e,0),Zn(e,r),Ve(e,ce()),t;if(n===6)Zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!yv(i)&&(n=Ga(e,r),n===2&&(a=Pl(e),a!==0&&(r=a,n=os(e,a))),n===1))throw t=wi,Rt(e,0),Zn(e,r),Ve(e,ce()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:bt(e,ze,In);break;case 3:if(Zn(e,r),(r&130023424)===r&&(n=tu+500-ce(),10<n)){if(_a(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zl(bt.bind(null,e,ze,In),n);break}bt(e,ze,In);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-mn(r);a=1<<o,o=n[o],o>i&&(i=o),r&=~a}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vv(r/1960))-r,10<r){e.timeoutHandle=zl(bt.bind(null,e,ze,In),r);break}bt(e,ze,In);break;case 5:bt(e,ze,In);break;default:throw Error(_(329))}}}return Ve(e,ce()),e.callbackNode===t?Nf.bind(null,e):null}function os(e,n){var t=ii;return e.current.memoizedState.isDehydrated&&(Rt(e,n).flags|=256),e=Ga(e,n),e!==2&&(n=ze,ze=t,n!==null&&ls(n)),e}function ls(e){ze===null?ze=e:ze.push.apply(ze,e)}function yv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],a=i.getSnapshot;i=i.value;try{if(!hn(a(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~nu,n&=~so,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-mn(n),r=1<<t;e[t]=-1,n&=~r}}function Jc(e){if(G&6)throw Error(_(327));hr();var n=_a(e,0);if(!(n&1))return Ve(e,ce()),null;var t=Ga(e,n);if(e.tag!==0&&t===2){var r=Pl(e);r!==0&&(n=r,t=os(e,r))}if(t===1)throw t=wi,Rt(e,0),Zn(e,n),Ve(e,ce()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,bt(e,ze,In),Ve(e,ce()),null}function ru(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(Er=ce()+500,io&&vt())}}function Dt(e){tt!==null&&tt.tag===0&&!(G&6)&&hr();var n=G;G|=1;var t=nn.transition,r=Q;try{if(nn.transition=null,Q=1,e)return e()}finally{Q=r,nn.transition=t,G=n,!(G&6)&&vt()}}function iu(){Ge=cr.current,ne(cr)}function Rt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Qh(t)),pe!==null)for(t=pe.return;t!==null;){var r=t;switch(Ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:kr(),ne(Be),ne(Pe),Ks();break;case 5:Ws(r);break;case 4:kr();break;case 13:ne(re);break;case 19:ne(re);break;case 10:Bs(r.type._context);break;case 22:case 23:iu()}t=t.return}if(ke=e,pe=e=dt(e.current,null),Ce=Ge=n,he=0,wi=null,nu=so=Ot=0,ze=ii=null,_t!==null){for(n=0;n<_t.length;n++)if(t=_t[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,a=t.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}t.pending=r}_t=null}return e}function Of(e,n){do{var t=pe;try{if(js(),ha.current=ja,za){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}za=!1}if(Nt=0,xe=ge=ie=null,ti=!1,Si=0,eu.current=null,t===null||t.return===null){he=1,wi=n,pe=null;break}e:{var a=e,o=t.return,s=t,l=n;if(n=Ce,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Lc(o);if(w!==null){w.flags&=-257,Mc(w,o,s,a,n),w.mode&1&&Fc(a,u,n),n=w,l=u;var y=n.updateQueue;if(y===null){var b=new Set;b.add(l),n.updateQueue=b}else y.add(l);break e}else{if(!(n&1)){Fc(a,u,n),au();break e}l=Error(_(426))}}else if(te&&s.mode&1){var C=Lc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Mc(C,o,s,a,n),$s(wr(l,s));break e}}a=l=wr(l,s),he!==4&&(he=2),ii===null?ii=[a]:ii.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var h=vf(a,l,n);Uc(a,h);break e;case 1:s=l;var c=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){a.flags|=65536,n&=-n,a.lanes|=n;var v=yf(a,s,n);Uc(a,v);break e}}a=a.return}while(a!==null)}Lf(t)}catch(S){n=S,pe===t&&t!==null&&(pe=t=t.return);continue}break}while(!0)}function Df(){var e=Ba.current;return Ba.current=ja,e===null?ja:e}function au(){(he===0||he===3||he===2)&&(he=4),ke===null||!(Ot&268435455)&&!(so&268435455)||Zn(ke,Ce)}function Ga(e,n){var t=G;G|=2;var r=Df();(ke!==e||Ce!==n)&&(In=null,Rt(e,n));do try{Sv();break}catch(i){Of(e,i)}while(!0);if(js(),G=t,Ba.current=r,pe!==null)throw Error(_(261));return ke=null,Ce=0,he}function Sv(){for(;pe!==null;)Ff(pe)}function xv(){for(;pe!==null&&!Gg();)Ff(pe)}function Ff(e){var n=$f(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,n===null?Lf(e):pe=n,eu.current=null}function Lf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=fv(t,n),t!==null){t.flags&=32767,pe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,pe=null;return}}else if(t=pv(t,n,Ge),t!==null){pe=t;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);he===0&&(he=5)}function bt(e,n,t){var r=Q,i=nn.transition;try{nn.transition=null,Q=1,kv(e,n,t,r)}finally{nn.transition=i,Q=r}return null}function kv(e,n,t,r){do hr();while(tt!==null);if(G&6)throw Error(_(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(nh(e,a),e===ke&&(pe=ke=null,Ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ia||(ia=!0,zf(Ta,function(){return hr(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=nn.transition,nn.transition=null;var o=Q;Q=1;var s=G;G|=4,eu.current=null,gv(e,t),If(t,e),jh(Ml),Aa=!!Ll,Ml=Ll=null,e.current=t,hv(t),Wg(),G=s,Q=o,nn.transition=a}else e.current=t;if(ia&&(ia=!1,tt=e,Va=i),a=e.pendingLanes,a===0&&(ut=null),Xg(t.stateNode),Ve(e,ce()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,e=is,is=null,e;return Va&1&&e.tag!==0&&hr(),a=e.pendingLanes,a&1?e===as?ai++:(ai=0,as=e):ai=0,vt(),null}function hr(){if(tt!==null){var e=hp(Va),n=nn.transition,t=Q;try{if(nn.transition=null,Q=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,Va=0,G&6)throw Error(_(331));var i=G;for(G|=4,O=e.current;O!==null;){var a=O,o=a.child;if(O.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:ri(8,d,a)}var f=d.child;if(f!==null)f.return=d,O=f;else for(;O!==null;){d=O;var g=d.sibling,w=d.return;if(Af(d),d===u){O=null;break}if(g!==null){g.return=w,O=g;break}O=w}}}var y=a.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}O=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,O=o;else e:for(;O!==null;){if(a=O,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ri(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,O=h;break e}O=a.return}}var c=e.current;for(O=c;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=c;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:lo(9,s)}}catch(S){se(s,s.return,S)}if(s===o){O=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,O=v;break e}O=s.return}}if(G=i,vt(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Za,e)}catch{}r=!0}return r}finally{Q=t,nn.transition=n}}return!1}function Yc(e,n,t){n=wr(t,n),n=vf(e,n,1),e=st(e,n,1),n=Fe(),e!==null&&(Ti(e,1,n),Ve(e,n))}function se(e,n,t){if(e.tag===3)Yc(e,e,t);else for(;n!==null;){if(n.tag===3){Yc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=wr(t,e),e=yf(n,e,1),n=st(n,e,1),e=Fe(),n!==null&&(Ti(n,1,e),Ve(n,e));break}}n=n.return}}function wv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,ke===e&&(Ce&t)===t&&(he===4||he===3&&(Ce&130023424)===Ce&&500>ce()-tu?Rt(e,0):nu|=t),Ve(e,n)}function Mf(e,n){n===0&&(e.mode&1?(n=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):n=1);var t=Fe();e=Mn(e,n),e!==null&&(Ti(e,n,t),Ve(e,t))}function Ev(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Mf(e,t)}function bv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),Mf(e,t)}var $f;$f=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Be.current)je=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return je=!1,dv(e,n,t);je=!!(e.flags&131072)}else je=!1,te&&n.flags&1048576&&Bp(n,Da,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ya(e,n),e=n.pendingProps;var i=yr(n,Pe.current);gr(n,t),i=Xs(null,n,r,e,i,t);var a=Js();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,He(r)?(a=!0,Na(n)):a=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vs(n),i.updater=oo,n.stateNode=i,i._reactInternals=n,Kl(n,r,e,t),n=Jl(null,n,r,!0,a,t)):(n.tag=0,te&&a&&Ls(n),De(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ya(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Tv(r),e=un(r,e),i){case 0:n=Xl(null,n,r,e,t);break e;case 1:n=jc(null,n,r,e,t);break e;case 11:n=$c(null,n,r,e,t);break e;case 14:n=zc(null,n,r,un(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Xl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),jc(e,n,r,i,t);case 3:e:{if(wf(n),e===null)throw Error(_(387));r=n.pendingProps,a=n.memoizedState,i=a.element,Qp(e,n),Ma(n,r,null,t);var o=n.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){i=wr(Error(_(423)),n),n=Bc(e,n,r,t,i);break e}else if(r!==i){i=wr(Error(_(424)),n),n=Bc(e,n,r,t,i);break e}else for(We=lt(n.stateNode.containerInfo.firstChild),Ke=n,te=!0,dn=null,t=Wp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Sr(),r===i){n=$n(e,n,t);break e}De(e,n,r,t)}n=n.child}return n;case 5:return Xp(n),e===null&&Vl(n),r=n.type,i=n.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,$l(r,i)?o=null:a!==null&&$l(r,a)&&(n.flags|=32),kf(e,n),De(e,n,o,t),n.child;case 6:return e===null&&Vl(n),null;case 13:return Ef(e,n,t);case 4:return Gs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=xr(n,null,r,t):De(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),$c(e,n,r,i,t);case 7:return De(e,n,n.pendingProps,t),n.child;case 8:return De(e,n,n.pendingProps.children,t),n.child;case 12:return De(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,a=n.memoizedProps,o=i.value,Z(Fa,r._currentValue),r._currentValue=o,a!==null)if(hn(a.value,o)){if(a.children===i.children&&!Be.current){n=$n(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Dn(-1,t&-t),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Gl(a.return,t,n),s.lanes|=t;break}l=l.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Gl(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}De(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,gr(n,t),i=tn(i),r=r(i),n.flags|=1,De(e,n,r,t),n.child;case 14:return r=n.type,i=un(r,n.pendingProps),i=un(r.type,i),zc(e,n,r,i,t);case 15:return Sf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),ya(e,n),n.tag=1,He(r)?(e=!0,Na(n)):e=!1,gr(n,t),hf(n,r,i),Kl(n,r,i,t),Jl(null,n,r,!0,e,t);case 19:return bf(e,n,t);case 22:return xf(e,n,t)}throw Error(_(156,n.tag))};function zf(e,n){return pp(e,n)}function Cv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,n,t,r){return new Cv(e,n,t,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tv(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cs)return 11;if(e===Ts)return 14}return 2}function dt(e,n){var t=e.alternate;return t===null?(t=en(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ka(e,n,t,r,i,a){var o=2;if(r=e,typeof e=="function")ou(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case er:return Ut(t.children,i,a,n);case bs:o=8,i|=8;break;case vl:return e=en(12,t,n,i|2),e.elementType=vl,e.lanes=a,e;case yl:return e=en(13,t,n,i),e.elementType=yl,e.lanes=a,e;case Sl:return e=en(19,t,n,i),e.elementType=Sl,e.lanes=a,e;case Xd:return uo(t,i,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kd:o=10;break e;case Qd:o=9;break e;case Cs:o=11;break e;case Ts:o=14;break e;case Jn:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=en(o,t,n,i),n.elementType=e,n.type=r,n.lanes=a,n}function Ut(e,n,t,r){return e=en(7,e,r,n),e.lanes=t,e}function uo(e,n,t,r){return e=en(22,e,r,n),e.elementType=Xd,e.lanes=t,e.stateNode={isHidden:!1},e}function ol(e,n,t){return e=en(6,e,null,n),e.lanes=t,e}function ll(e,n,t){return n=en(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function _v(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lu(e,n,t,r,i,a,o,s,l){return e=new _v(e,n,t,s,l),n===1?(n=1,a===!0&&(n|=8)):n=0,a=en(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(a),e}function Av(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function jf(e){if(!e)return mt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(He(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(He(t))return zp(e,t,n)}return n}function Bf(e,n,t,r,i,a,o,s,l){return e=lu(t,r,!0,e,i,a,o,s,l),e.context=jf(null),t=e.current,r=Fe(),i=ct(t),a=Dn(r,i),a.callback=n??null,st(t,a,i),e.current.lanes=i,Ti(e,i,r),Ve(e,r),e}function co(e,n,t,r){var i=n.current,a=Fe(),o=ct(i);return t=jf(t),n.context===null?n.context=t:n.pendingContext=t,n=Dn(a,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=st(i,n,o),e!==null&&(gn(e,i,o,a),ga(e,i,o)),o}function Wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function su(e,n){qc(e,n),(e=e.alternate)&&qc(e,n)}function Rv(){return null}var Hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function uu(e){this._internalRoot=e}po.prototype.render=uu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));co(e,n,null,null)};po.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dt(function(){co(null,e,null,null)}),n[Ln]=null}};function po(e){this._internalRoot=e}po.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<qn.length&&n!==0&&n<qn[t].priority;t++);qn.splice(t,0,e),t===0&&kp(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zc(){}function Uv(e,n,t,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Wa(o);a.call(u)}}var o=Bf(n,r,e,0,null,!1,!1,"",Zc);return e._reactRootContainer=o,e[Ln]=o.current,mi(e.nodeType===8?e.parentNode:e),Dt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Wa(l);s.call(u)}}var l=lu(e,0,!1,null,null,!1,!1,"",Zc);return e._reactRootContainer=l,e[Ln]=l.current,mi(e.nodeType===8?e.parentNode:e),Dt(function(){co(n,l,t,r)}),l}function mo(e,n,t,r,i){var a=t._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Wa(o);s.call(l)}}co(n,o,e,i)}else o=Uv(t,n,e,i,r);return Wa(o)}vp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Kr(n.pendingLanes);t!==0&&(Rs(n,t|1),Ve(n,ce()),!(G&6)&&(Er=ce()+500,vt()))}break;case 13:Dt(function(){var r=Mn(e,1);if(r!==null){var i=Fe();gn(r,e,1,i)}}),su(e,1)}};Us=function(e){if(e.tag===13){var n=Mn(e,134217728);if(n!==null){var t=Fe();gn(n,e,134217728,t)}su(e,134217728)}};yp=function(e){if(e.tag===13){var n=ct(e),t=Mn(e,n);if(t!==null){var r=Fe();gn(t,e,n,r)}su(e,n)}};Sp=function(){return Q};xp=function(e,n){var t=Q;try{return Q=e,n()}finally{Q=t}};Rl=function(e,n,t){switch(n){case"input":if(wl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ro(r);if(!i)throw Error(_(90));Yd(r),wl(r,i)}}}break;case"textarea":Zd(e,t);break;case"select":n=t.value,n!=null&&dr(e,!!t.multiple,n,!1)}};op=ru;lp=Dt;var Iv={usingClientEntryPoint:!1,Events:[Ai,ir,ro,ip,ap,ru]},zr={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pv={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cp(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{Za=aa.inject(Pv),Tn=aa}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(n))throw Error(_(200));return Av(e,n,null,t)};Xe.createRoot=function(e,n){if(!cu(e))throw Error(_(299));var t=!1,r="",i=Hf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=lu(e,1,!1,null,null,t,!1,r,i),e[Ln]=n.current,mi(e.nodeType===8?e.parentNode:e),new uu(n)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=cp(n),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Dt(e)};Xe.hydrate=function(e,n,t){if(!fo(n))throw Error(_(200));return mo(null,e,n,!0,t)};Xe.hydrateRoot=function(e,n,t){if(!cu(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,i=!1,a="",o=Hf;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Bf(n,null,e,1,t??null,i,!1,a,o),e[Ln]=n.current,mi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new po(n)};Xe.render=function(e,n,t){if(!fo(n))throw Error(_(200));return mo(null,e,n,!1,t)};Xe.unmountComponentAtNode=function(e){if(!fo(e))throw Error(_(40));return e._reactRootContainer?(Dt(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1};Xe.unstable_batchedUpdates=ru;Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fo(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return mo(e,n,t,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),Hd.exports=Xe;var Nv=Hd.exports,ed=Nv;gl.createRoot=ed.createRoot,gl.hydrateRoot=ed.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ei.apply(null,arguments)}var rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rt||(rt={}));const nd="popstate";function Ov(e){e===void 0&&(e={});function n(i,a){let{pathname:o="/",search:s="",hash:l=""}=$t(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ss("",{pathname:o,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof a=="string"?a:Ka(a))}function r(i,a){go(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return Fv(n,t,r,e)}function fe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function go(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Dv(){return Math.random().toString(36).substr(2,8)}function td(e,n){return{usr:e.state,key:e.key,idx:n}}function ss(e,n,t,r){return t===void 0&&(t=null),Ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?$t(n):n,{state:t,key:n&&n.key||r||Dv()})}function Ka(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function $t(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Fv(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=rt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Ei({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=rt.Pop;let C=d(),h=C==null?null:C-u;u=C,l&&l({action:s,location:b.location,delta:h})}function g(C,h){s=rt.Push;let c=ss(b.location,C,h);t&&t(c,C),u=d()+1;let p=td(c,u),v=b.createHref(c);try{o.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}a&&l&&l({action:s,location:b.location,delta:1})}function w(C,h){s=rt.Replace;let c=ss(b.location,C,h);t&&t(c,C),u=d();let p=td(c,u),v=b.createHref(c);o.replaceState(p,"",v),a&&l&&l({action:s,location:b.location,delta:0})}function y(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof C=="string"?C:Ka(C);return c=c.replace(/ $/,"%20"),fe(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let b={get action(){return s},get location(){return e(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(nd,f),l=C,()=>{i.removeEventListener(nd,f),l=null}},createHref(C){return n(i,C)},createURL:y,encodeLocation(C){let h=y(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:w,go(C){return o.go(C)}};return b}var rd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rd||(rd={}));function Lv(e,n,t){return t===void 0&&(t="/"),Mv(e,n,t)}function Mv(e,n,t,r){let i=typeof n=="string"?$t(n):n,a=du(i.pathname||"/",t);if(a==null)return null;let o=Gf(e);$v(o);let s=null,l=Yv(a);for(let u=0;s==null&&u<o.length;++u)s=Qv(o[u],l);return s}function Gf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=pt([r,l.relativePath]),d=t.concat(l);a.children&&a.children.length>0&&(fe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gf(a.children,n,d,u)),!(a.path==null&&!a.index)&&n.push({path:u,score:Wv(u,a.index),routesMeta:d})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Wf(a.path))i(a,o,l)}),n}function Wf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Wf(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function $v(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Kv(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const zv=/^:[\w-]+$/,jv=3,Bv=2,Hv=1,Vv=10,Gv=-2,id=e=>e==="*";function Wv(e,n){let t=e.split("/"),r=t.length;return t.some(id)&&(r+=Gv),n&&(r+=Bv),t.filter(i=>!id(i)).reduce((i,a)=>i+(zv.test(a)?jv:a===""?Hv:Vv),r)}function Kv(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Qv(e,n,t){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=a==="/"?n:n.slice(a.length)||"/",f=Xv({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),g=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:pt([a,f.pathname]),pathnameBase:ty(pt([a,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(a=pt([a,f.pathnameBase]))}return o}function Xv(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Jv(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let b=s[f]||"";o=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const y=s[f];return w&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Jv(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),go(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Yv(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return go(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function du(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zv=e=>qv.test(e);function ey(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?$t(e):e,a;if(t)if(Zv(t))a=t;else{if(t.includes("//")){let o=t;t=Xf(t),go(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?a=ad(t.substring(1),"/"):a=ad(t,n)}else a=n;return{pathname:a,search:ry(r),hash:iy(i)}}function ad(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function sl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ny(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Kf(e,n){let t=ny(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Qf(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=$t(e):(i=Ei({},e),fe(!i.pathname||!i.pathname.includes("?"),sl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),sl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),sl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=t;else{let f=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}s=f>=0?n[f]:"/"}let l=ey(i,s),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Xf=e=>e.replace(/\/\/+/g,"/"),pt=e=>Xf(e.join("/")),ty=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ry=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,iy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ay(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jf=["post","put","patch","delete"];new Set(Jf);const oy=["get",...Jf];new Set(oy);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bi.apply(null,arguments)}const pu=N.createContext(null),ly=N.createContext(null),zt=N.createContext(null),ho=N.createContext(null),yt=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Yf=N.createContext(null);function sy(e,n){let{relative:t}=n===void 0?{}:n;Ui()||fe(!1);let{basename:r,navigator:i}=N.useContext(zt),{hash:a,pathname:o,search:s}=em(e,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:pt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Ui(){return N.useContext(ho)!=null}function Ii(){return Ui()||fe(!1),N.useContext(ho).location}function qf(e){N.useContext(zt).static||N.useLayoutEffect(e)}function uy(){let{isDataRoute:e}=N.useContext(yt);return e?wy():cy()}function cy(){Ui()||fe(!1);let e=N.useContext(pu),{basename:n,future:t,navigator:r}=N.useContext(zt),{matches:i}=N.useContext(yt),{pathname:a}=Ii(),o=JSON.stringify(Kf(i,t.v7_relativeSplatPath)),s=N.useRef(!1);return qf(()=>{s.current=!0}),N.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Qf(u,JSON.parse(o),a,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:pt([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,o,a,e])}function Zf(){let{matches:e}=N.useContext(yt),n=e[e.length-1];return n?n.params:{}}function em(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=N.useContext(zt),{matches:i}=N.useContext(yt),{pathname:a}=Ii(),o=JSON.stringify(Kf(i,r.v7_relativeSplatPath));return N.useMemo(()=>Qf(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function dy(e,n){return py(e,n)}function py(e,n,t,r){Ui()||fe(!1);let{navigator:i}=N.useContext(zt),{matches:a}=N.useContext(yt),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ii(),d;if(n){var f;let C=typeof n=="string"?$t(n):n;l==="/"||(f=C.pathname)!=null&&f.startsWith(l)||fe(!1),d=C}else d=u;let g=d.pathname||"/",w=g;if(l!=="/"){let C=l.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Lv(e,{pathname:w}),b=vy(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:pt([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:pt([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,t,r);return n&&b?N.createElement(ho.Provider,{value:{location:bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rt.Pop}},b):b}function fy(){let e=ky(),n=ay(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),t?N.createElement("pre",{style:i},t):null,null)}const my=N.createElement(fy,null);class gy extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?N.createElement(yt.Provider,{value:this.props.routeContext},N.createElement(Yf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hy(e){let{routeContext:n,match:t,children:r}=e,i=N.useContext(pu);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(yt.Provider,{value:n},r)}function vy(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var a;if(!t)return null;if(t.errors)e=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,s=(i=t)==null?void 0:i.errors;if(s!=null){let d=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:w}=t,y=f.route.loader&&g[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let w,y=!1,b=null,C=null;t&&(w=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||my,l&&(u<0&&g===0?(Ey("route-fallback"),y=!0,C=null):u===g&&(y=!0,C=f.route.hydrateFallbackElement||null)));let h=n.concat(o.slice(0,g+1)),c=()=>{let p;return w?p=b:y?p=C:f.route.Component?p=N.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,N.createElement(hy,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:t!=null},children:p})};return t&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?N.createElement(gy,{location:t.location,revalidation:t.revalidation,component:b,error:w,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var nm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nm||{}),tm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tm||{});function yy(e){let n=N.useContext(pu);return n||fe(!1),n}function Sy(e){let n=N.useContext(ly);return n||fe(!1),n}function xy(e){let n=N.useContext(yt);return n||fe(!1),n}function rm(e){let n=xy(),t=n.matches[n.matches.length-1];return t.route.id||fe(!1),t.route.id}function ky(){var e;let n=N.useContext(Yf),t=Sy(),r=rm();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function wy(){let{router:e}=yy(nm.UseNavigateStable),n=rm(tm.UseNavigateStable),t=N.useRef(!1);return qf(()=>{t.current=!0}),N.useCallback(function(i,a){a===void 0&&(a={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,bi({fromRouteId:n},a)))},[e,n])}const od={};function Ey(e,n,t){od[e]||(od[e]=!0)}function by(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Xn(e){fe(!1)}function Cy(e){let{basename:n="/",children:t=null,location:r,navigationType:i=rt.Pop,navigator:a,static:o=!1,future:s}=e;Ui()&&fe(!1);let l=n.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:l,navigator:a,static:o,future:bi({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=$t(r));let{pathname:d="/",search:f="",hash:g="",state:w=null,key:y="default"}=r,b=N.useMemo(()=>{let C=du(d,l);return C==null?null:{location:{pathname:C,search:f,hash:g,state:w,key:y},navigationType:i}},[l,d,f,g,w,y,i]);return b==null?null:N.createElement(zt.Provider,{value:u},N.createElement(ho.Provider,{children:t,value:b}))}function Ty(e){let{children:n,location:t}=e;return dy(us(n),t)}new Promise(()=>{});function us(e,n){n===void 0&&(n=[]);let t=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let a=[...n,i];if(r.type===N.Fragment){t.push.apply(t,us(r.props.children,a));return}r.type!==Xn&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=us(r.props.children,a)),t.push(o)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cs.apply(null,arguments)}function _y(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Ay(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ry(e,n){return e.button===0&&(!n||n==="_self")&&!Ay(e)}const Uy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Iy="6";try{window.__reactRouterVersion=Iy}catch{}const Py="startTransition",ld=wg[Py];function Ny(e){let{basename:n,children:t,future:r,window:i}=e,a=N.useRef();a.current==null&&(a.current=Ov({window:i,v5Compat:!0}));let o=a.current,[s,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=N.useCallback(f=>{u&&ld?ld(()=>l(f)):l(f)},[l,u]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.useEffect(()=>by(r),[r]),N.createElement(Cy,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:o,future:r})}const Oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,br=N.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:d,viewTransition:f}=n,g=_y(n,Uy),{basename:w}=N.useContext(zt),y,b=!1;if(typeof u=="string"&&Dy.test(u)&&(y=u,Oy))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=du(v.pathname,w);v.origin===p.origin&&S!=null?u=S+v.search+v.hash:b=!0}catch{}let C=sy(u,{relative:i}),h=Fy(u,{replace:o,state:s,target:l,preventScrollReset:d,relative:i,viewTransition:f});function c(p){r&&r(p),p.defaultPrevented||h(p)}return N.createElement("a",cs({},g,{href:y||C,onClick:b||a?r:c,ref:t,target:l}))});var sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sd||(sd={}));var ud;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ud||(ud={}));function Fy(e,n){let{target:t,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=n===void 0?{}:n,l=uy(),u=Ii(),d=em(e,{relative:o});return N.useCallback(f=>{if(Ry(f,t)){f.preventDefault();let g=r!==void 0?r:Ka(u)===Ka(d);l(e,{replace:g,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[u,l,d,r,i,t,e,a,o,s])}const Qa={name:"Developer Portfolio",github:"https://github.com/Zavorynkae"},Ly=[{path:"/",label:"Home"},{path:"/projects",label:"Projects"},{path:"/blog",label:"Blog"},{path:"/tools",label:"Tools"},{path:"/ai",label:"AI"},{path:"/about",label:"About"}];function My(){const e=Ii();return E.jsx("nav",{className:"bg-white border-b border-gray-200 sticky top-0 z-50",children:E.jsx("div",{className:"max-w-6xl mx-auto px-4",children:E.jsxs("div",{className:"flex items-center justify-between h-16",children:[E.jsx(br,{to:"/",className:"text-xl font-bold text-black",children:Qa.name}),E.jsx("div",{className:"flex items-center space-x-1",children:Ly.map(n=>E.jsx(br,{to:n.path,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${e.pathname===n.path?"bg-gray-100 text-black":"text-gray-600 hover:bg-gray-50 hover:text-black"}`,children:n.label},n.path))}),E.jsx("a",{href:Qa.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-black transition-colors duration-200",children:"GitHub"})]})})})}function $y({children:e}){return E.jsxs("div",{className:"min-h-screen bg-gray-50",children:[E.jsx(My,{}),E.jsx("main",{className:"max-w-6xl mx-auto px-4",children:e})]})}function ds({children:e,variant:n="primary",className:t="",onClick:r,disabled:i=!1,asChild:a=!1}){const u=`px-4 py-2 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center ${{primary:"bg-black text-white hover:bg-gray-800",secondary:"bg-gray-100 text-gray-800 hover:bg-gray-200",outline:"border border-black text-black hover:bg-black hover:text-white"}[n]} ${i?"opacity-50 cursor-not-allowed":""} ${t}`;return a&&wa.Children.count(e)===1?wa.cloneElement(e,{className:`${e.props.className||""} ${u}`.trim()}):E.jsx("button",{className:u,onClick:r,disabled:i,children:e})}const zy=["React","TypeScript","Node.js","Git","HTML5","CSS3","JavaScript","Redux","Tailwind CSS","Vite","Webpack","Jest","Express","MongoDB","PostgreSQL","Docker"];function jy(){return E.jsxs("div",{className:"py-12",children:[E.jsxs("div",{className:"text-center mb-12",children:[E.jsx("h1",{className:"text-4xl font-bold text-black mb-4",children:"Welcome to My Portfolio"}),E.jsx("p",{className:"text-gray-600 text-lg mb-8 max-w-2xl mx-auto",children:"A feature-based developer portfolio showcasing my projects, skills, and tools."}),E.jsxs("div",{className:"flex gap-4 justify-center",children:[E.jsx(ds,{asChild:!0,children:E.jsx(br,{to:"/projects",children:"View Projects"})}),E.jsx(ds,{variant:"outline",asChild:!0,children:E.jsx("a",{href:Qa.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"})})]})]}),E.jsxs("div",{className:"mt-12",children:[E.jsx("h2",{className:"text-2xl font-bold text-black mb-6",children:"Skills"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:zy.map(e=>E.jsx("span",{className:"px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors",children:e},e))})]})]})}function Pi({children:e,className:n=""}){return E.jsx("div",{className:`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${n}`,children:e})}function By({project:e}){return E.jsxs(Pi,{className:"flex flex-col h-full",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("h3",{className:"text-xl font-semibold text-black mb-2",children:e.title}),E.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),E.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:e.tech.map(n=>E.jsx("span",{className:"px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full",children:n},n))}),E.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags.map(n=>E.jsx("span",{className:"px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full",children:n},n))})]}),E.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100 flex gap-2",children:[e.github&&E.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-gray-600 hover:text-black transition-colors",children:"GitHub"}),e.demo&&E.jsx("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-gray-600 hover:text-black transition-colors",children:"Demo"}),E.jsx("span",{className:`text-sm text-gray-600 hover:text-black transition-colors ${[e.status]}`,children:e.status})]})]})}const ul=[{id:"portfolio",title:"Developer Portfolio System",description:"Feature-based architecture portfolio system built with React, TypeScript, and Vite",tech:["React","TypeScript","Vite","Tailwind CSS"],tags:["frontend","architecture","portfolio"],github:"https://github.com/Zavorynkae/Developer-Portfolio-System-Release"},{id:"MemoQue",title:"MemoQue",description:"An Android-based AI image recognition and data management application featuring ONNX-powered image inference, camera capture, dynamic template configuration, and local record management.",tech:["Kotlin","Jetpack Compose","Clean Architecture","MVVM","Dagger Hilt","Room","DataStore","Navigation Compose","ONNX Runtime","CameraX"],tags:["android","ai","machine-learning","image-recognition","onnx","mobile","offline","crud"],github:"https://github.com/Zavorynkae/MemoQue-Release/releases"},{id:"api-gateway",title:"API Gateway Service",description:"Microservices API gateway with authentication, rate limiting, and request routing",tech:["Node.js","Express","TypeScript","JWT"],tags:["backend","api","microservices"],status:"Planned"},{id:"data-visualization",title:"Data Dashboard",description:"Interactive data visualization dashboard with real-time charts and metrics",tech:["React","D3.js","TypeScript","Recharts"],tags:["frontend","data-viz","analytics"],status:"Planned"},{id:"e-commerce",title:"E-commerce Platform",description:"Full-stack e-commerce application with shopping cart and payment integration",tech:["React","Node.js","MongoDB","Stripe"],tags:["fullstack","e-commerce","payment"],status:"Planned"}];function Hy(e){return[...new Set(e.flatMap(n=>n.tags))]}function Vy(){const[e,n]=N.useState(null),t=N.useMemo(()=>e?ul.filter(i=>i.tags.includes(e)):ul,[e]),r=N.useMemo(()=>Hy(ul),[]);return{projects:t,tags:r,selectedTag:e,setSelectedTag:n}}function Gy(){const{projects:e,tags:n,selectedTag:t,setSelectedTag:r}=Vy();return E.jsxs("div",{children:[E.jsxs("div",{className:"flex flex-wrap gap-2 mb-6",children:[E.jsx("button",{onClick:()=>r(null),className:`px-3 py-1 text-sm font-medium rounded-full transition-colors ${t?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-black text-white"}`,children:"All"}),n.map(i=>E.jsx("button",{onClick:()=>r(i),className:`px-3 py-1 text-sm font-medium rounded-full transition-colors ${t===i?"bg-black text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:i},i))]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(i=>E.jsx(By,{project:i},i.id))})]})}function Wy(){return E.jsxs("div",{className:"py-12",children:[E.jsx("h1",{className:"text-3xl font-bold text-black mb-6",children:"Projects"}),E.jsx(Gy,{})]})}function Ky({tool:e}){const n={planned:"bg-gray-100 text-gray-600",active:"bg-green-100 text-green-600"};return E.jsxs(Pi,{children:[E.jsx("h3",{className:"text-xl font-semibold text-black mb-2",children:e.name}),E.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),E.jsx("span",{className:`px-3 py-1 text-xs font-medium rounded-full ${n[e.status]}`,children:e.status})]})}const Qy=[{id:"code-gen",name:"Code Generator",description:"AI-powered code generation assistant",status:"planned"},{id:"doc-generator",name:"Doc Generator",description:"Automatic documentation generation",status:"planned"},{id:"lint-tool",name:"Lint Tool",description:"Custom linting rules and suggestions",status:"planned"}];function Xy(){return E.jsx("div",{children:E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Qy.map(e=>E.jsx(Ky,{tool:e},e.id))})})}function Jy(){return E.jsxs("div",{className:"py-12",children:[E.jsx("h1",{className:"text-3xl font-bold text-black mb-6",children:"Tools"}),E.jsx(Xy,{})]})}function Yy(){return E.jsx("div",{className:"flex flex-col items-center justify-center py-12",children:E.jsxs(Pi,{className:"text-center max-w-md",children:[E.jsx("div",{className:"text-6xl mb-4",children:"🤖"}),E.jsx("h2",{className:"text-2xl font-bold text-black mb-2",children:"AI Module"}),E.jsx("p",{className:"text-gray-600 mb-6",children:"This feature is currently under development. Check back later for updates!"}),E.jsx(ds,{disabled:!0,children:"Coming Soon"})]})})}function qy(){return E.jsxs("div",{className:"py-12",children:[E.jsx("h1",{className:"text-3xl font-bold text-black mb-6",children:"AI"}),E.jsx(Yy,{})]})}function Zy(){return E.jsxs("div",{className:"py-12",children:[E.jsx("h1",{className:"text-3xl font-bold text-black mb-6",children:"About"}),E.jsx("div",{className:"max-w-2xl",children:E.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl shadow-sm p-8",children:[E.jsx("h2",{className:"text-xl font-semibold text-black mb-4",children:"Developer Portfolio System"}),E.jsx("p",{className:"text-gray-600 mb-4",children:"This is a feature-based architecture portfolio system built with React 18+, TypeScript, Vite, and Tailwind CSS. It follows best practices for maintainable and scalable frontend applications."}),E.jsx("p",{className:"text-gray-600 mb-6",children:"The system is designed to be easily extensible, with features like:"}),E.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-6 space-y-2",children:[E.jsx("li",{children:"Feature-based architecture"}),E.jsx("li",{children:"Data-driven UI components"}),E.jsx("li",{children:"Service layer isolation"}),E.jsx("li",{children:"Type-safe components and hooks"}),E.jsx("li",{children:"GitHub Pages compatible routing"})]}),E.jsx("a",{href:Qa.github,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 transition-colors",children:"View on GitHub"})]})})]})}const im=`---
title: Bitmap 图像处理与 Tensor 张量操作
date: 2026-06-13
tags: [android, bitmap, image, tensor, ml]
description: 深入掌握 Android Bitmap 的高效处理、内存管理、像素操作，以及与 ML 模型输入 Tensor 的转换与优化策略。
---

# Bitmap 图像处理与 Tensor 张量操作

Bitmap 是 Android 中处理图像的核心类，在 ML 推理中需要将 Bitmap 转换为 Tensor 格式，理解两者的高效转换至关重要。

## Bitmap 基础

### 创建与加载

\`\`\`kotlin
// 从资源加载
val bitmap: Bitmap = BitmapFactory.decodeResource(resources, R.drawable.image)

// 从文件加载
val options = BitmapFactory.Options().apply {
    inPreferredConfig = Bitmap.Config.ARGB_8888
    inJustDecodeBounds = true  // 先获取尺寸
}
BitmapFactory.decodeFile(path, options)

// 计算采样率
options.inSampleSize = calculateInSampleSize(options, reqWidth, reqHeight)
options.inJustDecodeBounds = false
val scaledBitmap = BitmapFactory.decodeFile(path, options)
\`\`\`

### 内存计算

\`\`\`kotlin
// ARGB_8888: 每个像素 4 字节
val memoryUsage = width * height * 4  // bytes

// RGB_565: 每个像素 2 字节（节省内存，无透明度）
val options = BitmapFactory.Options().apply {
    inPreferredConfig = Bitmap.Config.RGB_565
}
\`\`\`

## 像素操作

### 访问像素数据

\`\`\`kotlin
// 获取像素数组
val pixels = IntArray(bitmap.width * bitmap.height)
bitmap.getPixels(pixels, 0, bitmap.width, 0, 0, bitmap.width, bitmap.height)

// 修改像素
for (i in pixels.indices) {
    val pixel = pixels[i]
    val alpha = (pixel shr 24) and 0xFF
    val red = (pixel shr 16) and 0xFF
    val green = (pixel shr 8) and 0xFF
    val blue = pixel and 0xFF
    
    // 灰度化
    val gray = (red * 0.299 + green * 0.587 + blue * 0.114).toInt()
    pixels[i] = (alpha shl 24) or (gray shl 16) or (gray shl 8) or gray
}

// 写回 Bitmap
bitmap.setPixels(pixels, 0, bitmap.width, 0, 0, bitmap.width, bitmap.height)
\`\`\`

### Canvas 绘制操作

\`\`\`kotlin
// 创建可绘制 Bitmap
val mutableBitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
val canvas = Canvas(mutableBitmap)

// 绘制原始图像
canvas.drawBitmap(sourceBitmap, 0f, 0f, null)

// 绘制形状
val paint = Paint().apply {
    color = Color.RED
    strokeWidth = 5f
    style = Paint.Style.STROKE
}
canvas.drawRect(rect, paint)

// 绘制文字
canvas.drawText("Label", x, y, paint)
\`\`\`

## 图像变换

### 缩放与裁剪

\`\`\`kotlin
// 缩放
val scaled = Bitmap.createScaledBitmap(src, newWidth, newHeight, true)

// 裁剪
val cropped = Bitmap.createBitmap(src, x, y, width, height)

// Matrix 变换
val matrix = Matrix().apply {
    postRotate(90f)          // 旋转
    postScale(-1f, 1f)       // 水平翻转
    postTranslate(dx, dy)    // 平移
}
val transformed = Bitmap.createBitmap(src, 0, 0, src.width, src.height, matrix, true)
\`\`\`

### 颜色滤镜

\`\`\`kotlin
// 使用 ColorMatrix
val colorMatrix = ColorMatrix().apply {
    // 灰度
    setSaturation(0f)
    
    // 或反色
    // set(arrayOf(
    //     -1f, 0f, 0f, 0f, 255f,
    //     0f, -1f, 0f, 0f, 255f,
    //     0f, 0f, -1f, 0f, 255f,
    //     0f, 0f, 0f, 1f, 0f
    // ))
}

val paint = Paint().apply {
    colorFilter = ColorMatrixColorFilter(colorMatrix)
}

val canvas = Canvas(resultBitmap)
canvas.drawBitmap(src, 0f, 0f, paint)
\`\`\`

## Bitmap 转 Tensor

### 图像分类输入

\`\`\`kotlin
// 模型输入：[1, 3, 224, 224] NCHW
fun bitmapToFloatBuffer(bitmap: Bitmap): FloatBuffer {
    val width = 224
    val height = 224
    val channels = 3
    
    val resized = Bitmap.createScaledBitmap(bitmap, width, height, true)
    val floatBuffer = FloatBuffer.allocate(1 * channels * height * width)
    
    val pixels = IntArray(width * height)
    resized.getPixels(pixels, 0, width, 0, 0, width, height)
    
    // 归一化到 [-1, 1] 或 [0, 1]
    val mean = floatArrayOf(0.485f, 0.456f, 0.406f)
    val std = floatArrayOf(0.229f, 0.224f, 0.225f)
    
    for (y in 0 until height) {
        for (x in 0 until width) {
            val pixel = pixels[y * width + x]
            val r = ((pixel shr 16) and 0xFF) / 255.0f
            val g = ((pixel shr 8) and 0xFF) / 255.0f
            val b = (pixel and 0xFF) / 255.0f
            
            // NCHW 格式
            floatBuffer.put((r - mean[0]) / std[0])
            floatBuffer.put((g - mean[1]) / std[1])
            floatBuffer.put((b - mean[2]) / std[2])
        }
    }
    
    floatBuffer.rewind()
    return floatBuffer
}
\`\`\`

### 物体检测输入

\`\`\`kotlin
// YOLO 输入：[1, 3, 640, 640] 保留宽高比
fun preprocessForDetection(bitmap: Bitmap, targetSize: Int = 640): Pair<FloatBuffer, Float> {
    // 计算缩放比例（保持宽高比）
    val scale = minOf(
        targetSize.toFloat() / bitmap.width,
        targetSize.toFloat() / bitmap.height
    )
    
    val newWidth = (bitmap.width * scale).toInt()
    val newHeight = (bitmap.height * scale).toInt()
    
    // 缩放
    val scaled = Bitmap.createScaledBitmap(bitmap, newWidth, newHeight, true)
    
    // 创建填充画布
    val padded = Bitmap.createBitmap(targetSize, targetSize, Bitmap.Config.ARGB_8888)
    val canvas = Canvas(padded)
    canvas.drawColor(Color.BLACK)  // 填充黑色
    
    // 居中绘制
    val left = (targetSize - newWidth) / 2f
    val top = (targetSize - newHeight) / 2f
    canvas.drawBitmap(scaled, left, top, null)
    
    // 转换为 FloatBuffer
    val floatBuffer = bitmapToFloatBuffer(padded)
    
    return floatBuffer to scale
}
\`\`\`

## Tensor 基础操作

### 创建 Tensor

\`\`\`kotlin
// 一维 Tensor
val floatArray = floatArrayOf(1.0f, 2.0f, 3.0f)
val tensor1D = Tensor.of(floatArray, Shape.of(3))

// 二维 Tensor
val matrix = Array(3) { FloatArray(4) { 0f } }
val tensor2D = Tensor.create(matrix)

// 指定形状
val shape = longArrayOf(1, 3, 224, 224)
val floatBuffer = FloatBuffer.allocate(1 * 3 * 224 * 224)
val imageTensor = OnnxTensor.createTensor(environment, floatBuffer, shape)
\`\`\`

### 张量操作

\`\`\`kotlin
// 形状操作
val reshaped = tensor.reshape(2, 6)      // [3, 4] -> [2, 6]
val expanded = tensor.expandDims(0)       // [3, 4] -> [1, 3, 4]
val squeezed = tensor.squeeze()           // [1, 3, 1, 4] -> [3, 4]

// 切片
val slice = tensor.slice(0, 1)            // 第0维的第1个元素

// 拼接
val concat = Tensor.concat(listOf(tensor1, tensor2), axis = 0)

// 堆叠
val stack = Tensor.stack(listOf(tensor1, tensor2), axis = 0)
\`\`\`

### 广播机制

\`\`\`kotlin
// [3, 1] 和 [1, 4] -> [3, 4]
val a = Tensor.create(Array(3) { floatArrayOf(1f) })      // [3, 1]
val b = Tensor.create(Array(1) { FloatArray(4) { 2f } })  // [1, 4]
val c = a.add(b)  // [3, 4]
\`\`\`

## 内存管理

### Bitmap 回收

\`\`\`kotlin
fun recycleBitmap(bitmap: Bitmap?) {
    bitmap?.let {
        if (!it.isRecycled) {
            it.recycle()
        }
    }
}

// 使用 try-finally
var bitmap: Bitmap? = null
try {
    bitmap = loadBitmap()
    process(bitmap)
} finally {
    recycleBitmap(bitmap)
}
\`\`\`

### Bitmap 池

\`\`\`kotlin
class BitmapPool(private val maxSize: Int) {
    private val pool = LruCache<String, Bitmap>(maxSize)
    
    fun get(key: String, width: Int, height: Int): Bitmap {
        return pool.get(key) ?: Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
    }
    
    fun put(key: String, bitmap: Bitmap) {
        if (bitmap.isMutable) {
            pool.put(key, bitmap)
        }
    }
}
\`\`\`

## 完整示例：实时图像处理管道

\`\`\`kotlin
class ImageProcessingPipeline {
    
    data class ProcessedResult(
        val tensor: OnnxTensor,
        val originalWidth: Int,
        val originalHeight: Int,
        val scale: Float
    )
    
    fun preprocess(bitmap: Bitmap, targetSize: Int = 224): ProcessedResult {
        val originalWidth = bitmap.width
        val originalHeight = bitmap.height
        
        // 1. 缩放
        val scale = targetSize.toFloat() / maxOf(originalWidth, originalHeight)
        val scaled = Bitmap.createScaledBitmap(
            bitmap,
            (originalWidth * scale).toInt(),
            (originalHeight * scale).toInt(),
            true
        )
        
        // 2. 裁剪中心
        val cropX = (scaled.width - targetSize) / 2
        val cropY = (scaled.height - targetSize) / 2
        val cropped = Bitmap.createBitmap(
            scaled,
            maxOf(0, cropX),
            maxOf(0, cropY),
            minOf(targetSize, scaled.width),
            minOf(targetSize, scaled.height)
        )
        
        // 3. 转换为 Tensor
        val floatBuffer = FloatBuffer.allocate(1 * 3 * targetSize * targetSize)
        val pixels = IntArray(targetSize * targetSize)
        cropped.getPixels(pixels, 0, targetSize, 0, 0, targetSize, targetSize)
        
        for (i in pixels.indices) {
            val pixel = pixels[i]
            floatBuffer.put(((pixel shr 16) and 0xFF) / 255.0f)
            floatBuffer.put(((pixel shr 8) and 0xFF) / 255.0f)
            floatBuffer.put((pixel and 0xFF) / 255.0f)
        }
        floatBuffer.rewind()
        
        val tensor = OnnxTensor.createTensor(
            environment,
            floatBuffer,
            longArrayOf(1, 3, targetSize.toLong(), targetSize.toLong())
        )
        
        // 清理中间 Bitmap
        if (scaled !== bitmap) scaled.recycle()
        if (cropped !== bitmap) cropped.recycle()
        
        return ProcessedResult(tensor, originalWidth, originalHeight, scale)
    }
}
\`\`\`

## 总结

Bitmap 与 Tensor 处理的关键点：

- ✅ **内存管理**：及时回收 Bitmap，避免 OOM
- ✅ **格式选择**：RGB_565 节省内存，ARGB_8888 保真
- ✅ **采样率**：inSampleSize 减少内存占用
- ✅ **NCHW 格式**：ML 模型标准输入格式
- ✅ **归一化**：根据模型要求进行像素值缩放
- ✅ **缓存复用**：使用 Bitmap 池减少 GC

掌握 Bitmap 与 Tensor 的高效转换是 Android ML 开发的核心技能。
`,am=`---
title: CameraX 相机开发完全指南
date: 2026-06-15
tags: [android, camerax, camera, ml, jetpack]
description: 全面掌握 CameraX 的生命周期绑定、预览/拍照/视频用例配置、图像分析管道，以及与 ML Kit 的集成实践。
---

# CameraX 相机开发完全指南

CameraX 是 Jetpack 提供的相机开发库，基于 Camera2 API 封装，提供一致的行为和简化的 API，同时保持向后兼容性。

## 核心特性

- **生命周期感知**：自动管理相机生命周期
- **设备兼容**：统一不同厂商的相机行为
- **用例组合**：预览、拍照、视频、分析灵活组合
- **易用性**：简洁的 API 设计

## 依赖配置

\`\`\`groovy
dependencies {
    def camerax_version = "1.3.0"
    
    implementation "androidx.camera:camera-core:$camerax_version"
    implementation "androidx.camera:camera-camera2:$camerax_version"
    implementation "androidx.camera:camera-lifecycle:$camerax_version"
    implementation "androidx.camera:camera-video:$camerax_version"
    implementation "androidx.camera:camera-view:$camerax_version"
    implementation "androidx.camera:camera-extensions:$camerax_version"
    implementation "androidx.camera:camera-mlkit-vision:$camerax_version"
}
\`\`\`

## 权限配置

\`\`\`xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" android:required="true" />

<!-- 存储权限（Android 10 以下需要） -->
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"
    android:maxSdkVersion="28" />
\`\`\`

## 基础实现

### 预览用例

\`\`\`kotlin
class CameraFragment : Fragment() {
    private lateinit var viewBinding: FragmentCameraBinding
    private var imageCapture: ImageCapture? = null
    private var videoCapture: VideoCapture<Recorder>? = null
    private var recording: Recording? = null
    private lateinit var cameraExecutor: ExecutorService
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        if (allPermissionsGranted()) {
            startCamera()
        } else {
            requestPermissions()
        }
        
        viewBinding.imageCaptureButton.setOnClickListener { takePhoto() }
        viewBinding.videoCaptureButton.setOnClickListener { captureVideo() }
        
        cameraExecutor = Executors.newSingleThreadExecutor()
    }
    
    private fun startCamera() {
        val cameraProviderFuture = ProcessCameraProvider.getInstance(requireContext())
        
        cameraProviderFuture.addListener({
            val cameraProvider = cameraProviderFuture.get()
            
            // 预览用例
            val preview = Preview.Builder()
                .build()
                .also {
                    it.setSurfaceProvider(viewBinding.viewFinder.surfaceProvider)
                }
            
            // 拍照用例
            imageCapture = ImageCapture.Builder()
                .setCaptureMode(ImageCapture.CAPTURE_MODE_MINIMIZE_LATENCY)
                .build()
            
            // 视频用例
            val recorder = Recorder.Builder()
                .setExecutor(cameraExecutor)
                .build()
            videoCapture = VideoCapture.withOutput(recorder)
            
            // 选择后置摄像头
            val cameraSelector = CameraSelector.DEFAULT_BACK_CAMERA
            
            try {
                cameraProvider.unbindAll()
                cameraProvider.bindToLifecycle(
                    this,           // LifecycleOwner
                    cameraSelector,
                    preview,
                    imageCapture,
                    videoCapture
                )
            } catch (exc: Exception) {
                Log.e(TAG, "Use case binding failed", exc)
            }
            
        }, ContextCompat.getMainExecutor(requireContext()))
    }
}
\`\`\`

### 拍照功能

\`\`\`kotlin
private fun takePhoto() {
    val imageCapture = imageCapture ?: return
    
    // 创建带时间戳的文件名
    val name = SimpleDateFormat(FILENAME_FORMAT, Locale.US)
        .format(System.currentTimeMillis())
    
    val contentValues = ContentValues().apply {
        put(MediaStore.MediaColumns.DISPLAY_NAME, name)
        put(MediaStore.MediaColumns.MIME_TYPE, "image/jpeg")
        if (Build.VERSION.SDK_INT > Build.VERSION_CODES.P) {
            put(MediaStore.Images.Media.RELATIVE_PATH, "Pictures/CameraX-Image")
        }
    }
    
    val outputOptions = ImageCapture.OutputFileOptions.Builder(
        requireContext().contentResolver,
        MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
        contentValues
    ).build()
    
    imageCapture.takePicture(
        outputOptions,
        ContextCompat.getMainExecutor(requireContext()),
        object : ImageCapture.OnImageSavedCallback {
            override fun onError(exc: ImageCaptureException) {
                Log.e(TAG, "Photo capture failed: \${exc.message}", exc)
            }
            
            override fun onImageSaved(output: ImageCapture.OutputFileResults) {
                val savedUri = output.savedUri
                Toast.makeText(
                    requireContext(),
                    "Photo saved: $savedUri",
                    Toast.LENGTH_SHORT
                ).show()
            }
        }
    )
}
\`\`\`

### 视频录制

\`\`\`kotlin
private fun captureVideo() {
    val videoCapture = this.videoCapture ?: return
    
    viewBinding.videoCaptureButton.isEnabled = false
    
    val curRecording = recording
    if (curRecording != null) {
        curRecording.stop()
        recording = null
        return
    }
    
    val name = SimpleDateFormat(FILENAME_FORMAT, Locale.US)
        .format(System.currentTimeMillis())
    
    val mediaStoreOutputOptions = MediaStoreOutputOptions.Builder(
        requireContext().contentResolver,
        MediaStore.Video.Media.EXTERNAL_CONTENT_URI
    ).setContentValues(ContentValues().apply {
        put(MediaStore.MediaColumns.DISPLAY_NAME, name)
        put(MediaStore.MediaColumns.MIME_TYPE, "video/mp4")
        if (Build.VERSION.SDK_INT > Build.VERSION_CODES.P) {
            put(MediaStore.Video.Media.RELATIVE_PATH, "Movies/CameraX-Video")
        }
    }).build()
    
    recording = videoCapture.output
        .prepareRecording(requireContext(), mediaStoreOutputOptions)
        .withAudioEnabled()
        .start(ContextCompat.getMainExecutor(requireContext())) { event ->
            when (event) {
                is VideoRecordEvent.Start -> {
                    viewBinding.videoCaptureButton.apply {
                        text = getString(R.string.stop_capture)
                        isEnabled = true
                    }
                }
                is VideoRecordEvent.Finalize -> {
                    if (!event.hasError()) {
                        val uri = event.outputResults.outputUri
                        Toast.makeText(requireContext(), "Video saved: $uri", Toast.LENGTH_SHORT).show()
                    } else {
                        Log.e(TAG, "Video capture failed: \${event.error} - \${event.cause}")
                    }
                    viewBinding.videoCaptureButton.apply {
                        text = getString(R.string.start_capture)
                        isEnabled = true
                    }
                }
            }
        }
}
\`\`\`

## 图像分析（用于 ML）

\`\`\`kotlin
private fun startImageAnalysis() {
    val imageAnalyzer = ImageAnalysis.Builder()
        .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
        .build()
        .also { analysis ->
            analysis.setAnalyzer(cameraExecutor) { imageProxy ->
                processImage(imageProxy)
            }
        }
    
    // 绑定到相机生命周期
    cameraProvider.bindToLifecycle(
        this,
        cameraSelector,
        preview,
        imageCapture,
        imageAnalyzer
    )
}

private fun processImage(imageProxy: ImageProxy) {
    val buffer = imageProxy.planes[0].buffer
    val rotation = imageProxy.imageInfo.rotationDegrees
    
    // 转换为 Bitmap 供 ML 使用
    val bitmap = imageProxy.toBitmap()
    
    // 使用 ML Kit 进行人脸识别
    val inputImage = InputImage.fromMediaImage(
        imageProxy.image!!,
        rotation
    )
    
    faceDetector.process(inputImage)
        .addOnSuccessListener { faces ->
            for (face in faces) {
                val bounds = face.boundingBox
                Log.d(TAG, "Face detected: $bounds")
            }
        }
        .addOnCompleteListener {
            imageProxy.close()  // 必须关闭以释放缓冲区
        }
}
\`\`\`

## 相机控制

\`\`\`kotlin
// 获取 Camera 实例进行控制
val camera = cameraProvider.bindToLifecycle(...)

// 控制闪光灯
camera.cameraControl.enableTorch(true)

// 设置变焦
camera.cameraControl.setZoomRatio(2.0f)

// 设置曝光补偿
val factory = viewBinding.viewFinder.meteringPointFactory
val point = factory.createPoint(viewBinding.viewFinder.width / 2f, viewBinding.viewFinder.height / 2f)
val action = FocusMeteringAction.Builder(point).build()
camera.cameraControl.startFocusAndMetering(action)

// 观察闪光灯状态
camera.cameraInfo.torchState.observe(this) { state ->
    val isOn = state == TorchState.ON
    viewBinding.torchButton.isSelected = isOn
}
\`\`\`

## 在 Compose 中使用

\`\`\`kotlin
@Composable
fun CameraPreview(
    modifier: Modifier = Modifier,
    onImageCaptured: (Uri) -> Unit
) {
    val context = LocalContext.current
    val lifecycleOwner = LocalLifecycleOwner.current
    
    AndroidView(
        modifier = modifier,
        factory = { ctx ->
            val previewView = PreviewView(ctx)
            val cameraProviderFuture = ProcessCameraProvider.getInstance(ctx)
            
            cameraProviderFuture.addListener({
                val cameraProvider = cameraProviderFuture.get()
                
                val preview = Preview.Builder().build().also {
                    it.setSurfaceProvider(previewView.surfaceProvider)
                }
                
                val cameraSelector = CameraSelector.DEFAULT_BACK_CAMERA
                
                cameraProvider.unbindAll()
                cameraProvider.bindToLifecycle(
                    lifecycleOwner,
                    cameraSelector,
                    preview
                )
            }, ContextCompat.getMainExecutor(ctx))
            
            previewView
        }
    )
}
\`\`\`

## 最佳实践

1. **生命周期管理**：使用 \`bindToLifecycle\` 自动管理
2. **缓冲区释放**：ImageProxy 使用后必须 close
3. **后台线程**：图像分析在后台线程执行
4. **权限检查**：使用 Activity Result API 处理权限
5. **错误处理**：处理相机不可用、被占用等情况

## 总结

CameraX 提供了：

- ✅ **生命周期感知**：自动管理相机资源
- ✅ **用例组合**：预览、拍照、视频、分析灵活搭配
- ✅ **设备兼容**：统一不同厂商相机行为
- ✅ **ML 集成**：图像分析管道支持机器学乑
- ✅ **简洁 API**：比 Camera2 更易用

CameraX 是现代 Android 相机开发的首选方案。
`,om=`---
title: Android Clean Architecture 整洁架构实践
date: 2026-06-19
tags: [android, architecture, clean-architecture, mvvm]
description: 深入理解 Robert C. Martin 的 Clean Architecture 在 Android 中的落地实践，包括分层设计、依赖规则、数据流向和模块化组织。
---

# Android Clean Architecture 整洁架构实践

Clean Architecture 由 Robert C. Martin（Uncle Bob）提出，强调关注点分离和依赖规则，使系统更易于测试、维护和扩展。

## 核心原则

### 依赖规则

\`\`\`
┌─────────────────────────────────────────┐
│              Presentation                │
│           (ViewModel / UI)               │
├─────────────────────────────────────────┤
│                Domain                    │
│    (UseCase / Repository Interface)      │
├─────────────────────────────────────────┤
│                 Data                     │
│    (Repository Impl / DataSource)        │
└─────────────────────────────────────────┘
\`\`\`

**核心规则**：依赖只能向内指向，内层不依赖外层。

## 项目结构

\`\`\`
app/
├── presentation/          # 展示层
│   ├── ui/               # UI 组件
│   └── viewmodel/        # ViewModel
├── domain/               # 领域层
│   ├── model/            # 领域模型
│   ├── repository/       # 仓库接口
│   └── usecase/          # 用例
└── data/                 # 数据层
    ├── repository/       # 仓库实现
    ├── local/            # 本地数据源
    └── remote/           # 远程数据源
\`\`\`

## 各层实现

### Domain 层（最内层）

Domain 层是业务逻辑的核心，不依赖任何 Android 框架或第三方库。

\`\`\`kotlin
// 领域模型
data class User(
    val id: String,
    val name: String,
    val email: String
)

// 仓库接口（由 Data 层实现）
interface UserRepository {
    suspend fun getUser(id: String): User
    suspend fun getUsers(): List<User>
    suspend fun saveUser(user: User)
}

// UseCase（单一职责的业务操作）
class GetUserUseCase(
    private val userRepository: UserRepository
) {
    suspend operator fun invoke(id: String): Result<User> {
        return try {
            val user = userRepository.getUser(id)
            Result.success(user)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}

class GetUsersUseCase(
    private val userRepository: UserRepository
) {
    suspend operator fun invoke(): Result<List<User>> {
        return try {
            val users = userRepository.getUsers()
            Result.success(users)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
\`\`\`

### Data 层

Data 层负责数据的获取和存储，实现 Domain 层定义的接口。

\`\`\`kotlin
// 仓库实现
class UserRepositoryImpl(
    private val remoteDataSource: UserRemoteDataSource,
    private val localDataSource: UserLocalDataSource,
    private val networkUtils: NetworkUtils
) : UserRepository {
    
    override suspend fun getUser(id: String): User {
        return if (networkUtils.isNetworkAvailable()) {
            val user = remoteDataSource.getUser(id)
            localDataSource.saveUser(user)
            user
        } else {
            localDataSource.getUser(id)
                ?: throw Exception("User not found")
        }
    }
    
    override suspend fun getUsers(): List<User> {
        return localDataSource.getUsers()
    }
    
    override suspend fun saveUser(user: User) {
        remoteDataSource.saveUser(user)
        localDataSource.saveUser(user)
    }
}

// 远程数据源
class UserRemoteDataSource(
    private val apiService: ApiService
) {
    suspend fun getUser(id: String): User {
        val response = apiService.getUser(id)
        return response.toDomain()
    }
    
    suspend fun saveUser(user: User) {
        apiService.updateUser(user.toDto())
    }
}

// 本地数据源
class UserLocalDataSource(
    private val userDao: UserDao
) {
    suspend fun getUser(id: String): User? {
        return userDao.getUser(id)?.toDomain()
    }
    
    suspend fun getUsers(): List<User> {
        return userDao.getAll().map { it.toDomain() }
    }
    
    suspend fun saveUser(user: User) {
        userDao.insert(user.toEntity())
    }
}
\`\`\`

### 数据模型映射

\`\`\`kotlin
// DTO (Data Transfer Object) - 网络层
@DataClass
data class UserDto(
    @Json(name = "id") val id: String,
    @Json(name = "full_name") val fullName: String,
    @Json(name = "email_address") val emailAddress: String
)

// Entity - 数据库层
@Entity(tableName = "users")
data class UserEntity(
    @PrimaryKey val id: String,
    @ColumnInfo(name = "name") val name: String,
    @ColumnInfo(name = "email") val email: String
)

// 扩展函数：DTO -> Domain
fun UserDto.toDomain(): User {
    return User(
        id = id,
        name = fullName,
        email = emailAddress
    )
}

// 扩展函数：Entity -> Domain
fun UserEntity.toDomain(): User {
    return User(
        id = id,
        name = name,
        email = email
    )
}

// 扩展函数：Domain -> Entity
fun User.toEntity(): UserEntity {
    return UserEntity(
        id = id,
        name = name,
        email = email
    )
}
\`\`\`

### Presentation 层

\`\`\`kotlin
class UserViewModel(
    private val getUserUseCase: GetUserUseCase,
    private val getUsersUseCase: GetUsersUseCase
) : ViewModel() {
    
    private val _uiState = MutableStateFlow(UserUiState())
    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()
    
    fun loadUser(id: String) {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true) }
            
            getUserUseCase(id)
                .onSuccess { user ->
                    _uiState.update { 
                        it.copy(user = user, isLoading = false) 
                    }
                }
                .onFailure { error ->
                    _uiState.update { 
                        it.copy(error = error.message, isLoading = false) 
                    }
                }
        }
    }
}
\`\`\`

## 依赖注入配置（Hilt）

\`\`\`kotlin
@Module
@InstallIn(SingletonComponent::class)
object DataModule {
    
    @Provides
    @Singleton
    fun provideUserRepository(
        remoteDataSource: UserRemoteDataSource,
        localDataSource: UserLocalDataSource,
        networkUtils: NetworkUtils
    ): UserRepository {
        return UserRepositoryImpl(
            remoteDataSource,
            localDataSource,
            networkUtils
        )
    }
    
    @Provides
    fun provideGetUserUseCase(
        repository: UserRepository
    ): GetUserUseCase {
        return GetUserUseCase(repository)
    }
}
\`\`\`

## 分层测试策略

### Domain 层测试

\`\`\`kotlin
class GetUserUseCaseTest {
    private lateinit var getUserUseCase: GetUserUseCase
    private lateinit var fakeRepository: FakeUserRepository
    
    @Before
    fun setup() {
        fakeRepository = FakeUserRepository()
        getUserUseCase = GetUserUseCase(fakeRepository)
    }
    
    @Test
    fun \`invoke returns user when found\`() = runTest {
        // Given
        val user = User("1", "John", "john@example.com")
        fakeRepository.addUser(user)
        
        // When
        val result = getUserUseCase("1")
        
        // Then
        assertTrue(result.isSuccess)
        assertEquals(user, result.getOrNull())
    }
}
\`\`\`

### Data 层测试

\`\`\`kotlin
class UserRepositoryImplTest {
    private lateinit var repository: UserRepositoryImpl
    private lateinit var remoteDataSource: FakeRemoteDataSource
    private lateinit var localDataSource: FakeLocalDataSource
    
    @Test
    fun \`getUser returns remote data when online\`() = runTest {
        // Given
        val user = User("1", "John", "john@example.com")
        remoteDataSource.addUser(user)
        
        // When
        val result = repository.getUser("1")
        
        // Then
        assertEquals(user, result)
        assertTrue(localDataSource.contains("1"))
    }
}
\`\`\`

## 优势与适用场景

### ✅ 优势

- **可测试性**：Domain 层不依赖 Android 框架，可快速单元测试
- **可维护性**：业务逻辑集中，修改不影响其他层
- **可扩展性**：新增数据源只需修改 Data 层
- **独立性**：团队可并行开发不同层

### ⚠️ 注意事项

- 小型项目可能过度设计
- 增加了样板代码（Mapper、接口）
- 需要团队理解和遵循规范

## 总结

Clean Architecture 提供了：

- ✅ **依赖规则**：内层不依赖外层
- ✅ **关注点分离**：每层职责清晰
- ✅ **可测试性**：核心逻辑可独立测试
- ✅ **技术无关性**：Domain 层不依赖框架
- ✅ **灵活性**：易于替换实现

Clean Architecture 是构建大型企业级 Android 应用的首选架构方案。
`,lm=`---
title: DataStore 偏好存储与配置管理
date: 2026-06-17
tags: [android, datastore, preferences, jetpack]
description: 深入掌握 Jetpack DataStore 的 Preferences DataStore 和 Proto DataStore 两种模式，迁移策略，以及与 Flow 的响应式集成。
---

# DataStore 偏好存储与配置管理

DataStore 是 Jetpack 提供的现代数据存储解决方案，替代 SharedPreferences，支持类型安全、异步操作和事务一致性。

## DataStore vs SharedPreferences

| 特性 | DataStore | SharedPreferences |
|------|-----------|-------------------|
| 类型安全 | ✅ 是 | ❌ 否 |
| 异步 API | ✅ Kotlin 协程 | ❌ 同步阻塞 |
| 事务一致性 | ✅ 是 | ❌ 否 |
| 错误处理 | ✅ 异常传递 | ❌ 静默失败 |
| 大数据支持 | ✅ Proto DataStore | ❌ 否 |

## Preferences DataStore

### 依赖配置

\`\`\`groovy
dependencies {
    implementation "androidx.datastore:datastore-preferences:1.0.0"
    implementation "androidx.datastore:datastore-core:1.0.0"
}
\`\`\`

### 创建 DataStore

\`\`\`kotlin
// 单例模式创建 DataStore
val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "settings")

// 定义键
object PreferenceKeys {
    val DARK_MODE = booleanPreferencesKey("dark_mode")
    val LANGUAGE = stringPreferencesKey("language")
    val FONT_SIZE = intPreferencesKey("font_size")
    val NOTIFICATION_ENABLED = booleanPreferencesKey("notification_enabled")
}
\`\`\`

### 读写操作

\`\`\`kotlin
class SettingsRepository(private val dataStore: DataStore<Preferences>) {
    
    // 读取 - 返回 Flow
    val darkMode: Flow<Boolean> = dataStore.data
        .catch { exception ->
            if (exception is IOException) {
                emit(emptyPreferences())
            } else {
                throw exception
            }
        }
        .map { preferences ->
            preferences[PreferenceKeys.DARK_MODE] ?: false
        }
    
    val language: Flow<String> = dataStore.data
        .map { preferences ->
            preferences[PreferenceKeys.LANGUAGE] ?: "zh"
        }
    
    // 写入
    suspend fun setDarkMode(enabled: Boolean) {
        dataStore.edit { preferences ->
            preferences[PreferenceKeys.DARK_MODE] = enabled
        }
    }
    
    suspend fun setLanguage(language: String) {
        dataStore.edit { preferences ->
            preferences[PreferenceKeys.LANGUAGE] = language
        }
    }
    
    // 批量更新
    suspend fun updateSettings(darkMode: Boolean, language: String) {
        dataStore.edit { preferences ->
            preferences[PreferenceKeys.DARK_MODE] = darkMode
            preferences[PreferenceKeys.LANGUAGE] = language
        }
    }
}
\`\`\`

### 在 ViewModel 中使用

\`\`\`kotlin
class SettingsViewModel(
    private val settingsRepository: SettingsRepository
) : ViewModel() {
    
    val darkMode: StateFlow<Boolean> = settingsRepository.darkMode
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = false
        )
    
    fun setDarkMode(enabled: Boolean) {
        viewModelScope.launch {
            settingsRepository.setDarkMode(enabled)
        }
    }
}
\`\`\`

### 在 Compose 中使用

\`\`\`kotlin
@Composable
fun SettingsScreen(
    viewModel: SettingsViewModel = hiltViewModel()
) {
    val darkMode by viewModel.darkMode.collectAsStateWithLifecycle()
    
    Column {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text("Dark Mode")
            Switch(
                checked = darkMode,
                onCheckedChange = { viewModel.setDarkMode(it) }
            )
        }
    }
}
\`\`\`

## Proto DataStore

Proto DataStore 使用 Protocol Buffers 序列化，提供更强的类型安全。

### 依赖配置

\`\`\`groovy
dependencies {
    implementation "androidx.datastore:datastore:1.0.0"
    implementation "com.google.protobuf:protobuf-javalite:3.21.7"
}

// build.gradle (Project)
plugins {
    id "com.google.protobuf" version "0.9.1"
}

// build.gradle (App)
protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:3.21.7"
    }
    generateProtoTasks {
        all().each { task ->
            task.builtins {
                java {
                    option 'lite'
                }
            }
        }
    }
}
\`\`\`

### 定义 Proto Schema

\`\`\`protobuf
// app/src/main/proto/user_prefs.proto
syntax = "proto3";

option java_package = "com.example.app.data";
option java_multiple_files = true;

message UserPreferences {
    string user_id = 1;
    string display_name = 2;
    bool is_premium = 3;
    repeated string favorite_categories = 4;
    Theme theme = 5;
    
    enum Theme {
        SYSTEM_DEFAULT = 0;
        LIGHT = 1;
        DARK = 2;
    }
}
\`\`\`

### 创建 Proto DataStore

\`\`\`kotlin
// 序列化器
object UserPreferencesSerializer : Serializer<UserPreferences> {
    override val defaultValue: UserPreferences = UserPreferences.getDefaultInstance()
    
    override suspend fun readFrom(input: InputStream): UserPreferences {
        try {
            return UserPreferences.parseFrom(input)
        } catch (exception: InvalidProtocolBufferException) {
            throw CorruptionException("Cannot read proto.", exception)
        }
    }
    
    override suspend fun writeTo(t: UserPreferences, output: OutputStream) {
        t.writeTo(output)
    }
}

// 创建 DataStore
val Context.userPreferencesDataStore: DataStore<UserPreferences> by dataStore(
    fileName = "user_prefs.pb",
    serializer = UserPreferencesSerializer
)
\`\`\`

### 读写 Proto DataStore

\`\`\`kotlin
class UserPreferencesRepository(
    private val dataStore: DataStore<UserPreferences>
) {
    val userPreferences: Flow<UserPreferences> = dataStore.data
        .catch { exception ->
            if (exception is IOException) {
                emit(UserPreferences.getDefaultInstance())
            } else {
                throw exception
            }
        }
    
    suspend fun updateUserId(userId: String) {
        dataStore.updateData { current ->
            current.toBuilder()
                .setUserId(userId)
                .build()
        }
    }
    
    suspend fun addFavoriteCategory(category: String) {
        dataStore.updateData { current ->
            val categories = current.favoriteCategoriesList.toMutableList()
            if (!categories.contains(category)) {
                categories.add(category)
            }
            current.toBuilder()
                .clearFavoriteCategories()
                .addAllFavoriteCategories(categories)
                .build()
        }
    }
}
\`\`\`

## 从 SharedPreferences 迁移

\`\`\`kotlin
// 创建 DataStore 时指定迁移
val Context.dataStore: DataStore<Preferences> by preferencesDataStore(
    name = "settings",
    produceMigrations = { context ->
        listOf(
            SharedPreferencesMigration(
                context,
                "old_shared_prefs"
            ) { sharedPrefs, currentData ->
                // 迁移逻辑
                val darkMode = sharedPrefs.getBoolean("dark_mode", false)
                currentData.toMutablePreferences().apply {
                    this[PreferenceKeys.DARK_MODE] = darkMode
                }
            }
        )
    }
)
\`\`\`

## 最佳实践

1. **不要阻塞主线程**：始终使用 suspend 函数
2. **使用 Flow 观察变化**：响应式更新 UI
3. **批量更新**：使用 edit 块减少 IO 操作
4. **异常处理**：catch IOException 避免崩溃
5. **单例模式**：每个文件只创建一个 DataStore 实例

## 总结

DataStore 提供了：

- ✅ **类型安全**：编译期检查
- ✅ **异步 API**：不阻塞主线程
- ✅ **事务一致性**：edit 块原子操作
- ✅ **错误处理**：显式异常传递
- ✅ **Proto 支持**：结构化数据存储

DataStore 是现代 Android 应用配置管理的首选方案。
`,sm=`---
title: Git 版本控制与团队协作工作流
date: 2026-06-10
tags: [git, version-control, workflow, team]
description: 深入掌握 Git 核心操作、分支策略、代码审查流程、冲突解决，以及 Android 项目的 Git 最佳实践。
---

# Git 版本控制与团队协作工作流

Git 是现代软件开发的基石，掌握高效的分支策略和工作流是团队协作的关键。

## Git 核心概念

### 工作区、暂存区、仓库

\`\`\`
工作区 (Working Directory)
    git add
    ↓
暂存区 (Staging Area/Index)
    git commit
    ↓
本地仓库 (Local Repository)
    git push
    ↓
远程仓库 (Remote Repository)
\`\`\`

## 基础操作

### 配置

\`\`\`bash
# 全局配置
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global core.editor "code --wait"

# 常用别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --decorate"
\`\`\`

### 日常操作

\`\`\`bash
# 克隆仓库
git clone https://github.com/user/repo.git

# 查看状态
git status

# 添加文件
git add filename.txt          # 添加指定文件
git add .                     # 添加所有改动
git add -p                    # 交互式添加（逐块）

# 提交
git commit -m "feat: add user authentication"
git commit -am "fix: resolve login crash"  # 添加并提交

# 查看历史
git log --oneline -10
git log --graph --oneline --all
\`\`\`

## 分支策略

### Git Flow

\`\`\`
main        ●────────────────────────●
             │                        │
develop      ●────●────●────●────●────●
                  │         │
feature/login     ●────●────●
                        │
feature/payment            ●────●────●
\`\`\`

\`\`\`bash
# 创建功能分支
git checkout -b feature/user-profile develop

# 开发完成后
git checkout develop
git merge --no-ff feature/user-profile
git branch -d feature/user-profile

# 发布版本
git checkout -b release/1.0.0 develop
# 修复 bug...
git checkout main
git merge --no-ff release/1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git checkout develop
git merge --no-ff release/1.0.0
git branch -d release/1.0.0

# 热修复
git checkout -b hotfix/critical-bug main
# 修复...
git checkout main
git merge --no-ff hotfix/critical-bug
git tag -a v1.0.1 -m "Hotfix version 1.0.1"
git checkout develop
git merge --no-ff hotfix/critical-bug
git branch -d hotfix/critical-bug
\`\`\`

### GitHub Flow（简化版）

\`\`\`bash
# 1. 从 main 创建分支
git checkout -b feature/new-feature

# 2. 开发并提交
git add .
git commit -m "feat: implement new feature"

# 3. 推送到远程
git push -u origin feature/new-feature

# 4. 创建 Pull Request（在 GitHub 上）

# 5. 代码审查通过后合并
git checkout main
git pull origin main
git branch -d feature/new-feature
\`\`\`

## 提交规范（Conventional Commits）

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

### 类型说明

| 类型 | 说明 |
|------|------|
| feat | 新功能 |
| fix | 修复 |
| docs | 文档 |
| style | 格式（不影响代码运行） |
| refactor | 重构 |
| perf | 性能优化 |
| test | 测试 |
| chore | 构建/工具变动 |

\`\`\`bash
# 示例
git commit -m "feat(auth): add Google Sign-In support"
git commit -m "fix(network): resolve timeout issue on slow connections"
git commit -m "refactor(database): migrate from SQLite to Room"
git commit -m "perf(image): optimize bitmap loading memory usage"
\`\`\`

## 高级操作

### 交互式 Rebase

\`\`\`bash
# 整理最近 5 个提交
git rebase -i HEAD~5

# 常用命令
# p, pick = 保留提交
# r, reword = 修改提交信息
# e, edit = 编辑提交
# s, squash = 合并到上一个提交
# d, drop = 删除提交
\`\`\`

### Stash（临时保存）

\`\`\`bash
# 保存当前改动
git stash push -m "WIP: user profile feature"

# 查看 stash 列表
git stash list

# 恢复最近 stash
git stash pop

# 恢复指定 stash
git stash apply stash@{1}

# 删除 stash
git stash drop stash@{0}
\`\`\`

### Cherry Pick

\`\`\`bash
# 挑选特定提交到当前分支
git cherry-pick abc1234

# 挑选多个提交
git cherry-pick abc1234 def5678

# 挑选但不提交
git cherry-pick -n abc1234
\`\`\`

## 冲突解决

\`\`\`bash
# 拉取时冲突
git pull origin main
# Auto-merging file.kt
# CONFLICT (content): Merge conflict in file.kt

# 查看冲突文件
git status

# 编辑冲突文件，查找冲突标记
# <<<<<<< HEAD
# 本地代码
# =======
# 远程代码
# >>>>>>> branch-name

# 标记解决
git add file.kt
git commit -m "merge: resolve conflicts"
\`\`\`

## Android 项目 .gitignore

\`\`\`gitignore
# Gradle
.gradle/
build/
local.properties

# Android Studio
*.iml
.idea/
*.ipr
*.iws
.navigation/
captures/

# 编译输出
*.apk
*.aab
*.ap_
*.dex

# 本地配置
*.jks
*.keystore
google-services.json

# NDK
obj/
*.so

# OS
.DS_Store
Thumbs.db
\`\`\`

## 团队协作最佳实践

### 1. 保护主分支

在 GitHub/GitLab 设置：
- 禁止直接推送到 main/develop
- Pull Request 必须经过审查
- 必须通过 CI 检查

### 2. 代码审查清单

\`\`\`markdown
## PR 检查清单

- [ ] 代码符合项目规范
- [ ] 添加/更新了单元测试
- [ ] 手动测试通过
- [ ] 没有引入内存泄漏
- [ ] 向后兼容
- [ ] 文档已更新
\`\`\`

### 3. 发布流程

\`\`\`bash
# 1. 更新版本号
# build.gradle: versionCode + 1, versionName "1.2.0"

# 2. 更新 CHANGELOG
# 按照 Conventional Commits 生成

# 3. 创建发布分支
git checkout -b release/1.2.0

# 4. 测试并修复

# 5. 合并到 main
git checkout main
git merge --no-ff release/1.2.0

# 6. 打标签
git tag -a v1.2.0 -m "Release version 1.2.0"
git push origin v1.2.0

# 7. 合并到 develop
git checkout develop
git merge --no-ff release/1.2.0
\`\`\`

## 总结

Git 协作的关键点：

- ✅ **分支策略**：选择 Git Flow 或 GitHub Flow
- ✅ **提交规范**：使用 Conventional Commits
- ✅ **代码审查**：PR 必须经过 review
- ✅ **保护分支**：禁止直接推送主分支
- ✅ **冲突解决**：理解合并原理
- ✅ **发布管理**：规范的版本标签

掌握 Git 工作流是高效团队协作的基础。
`,um=`---
title: GitHub Pages 多账号 SSH 部署完全指南
date: 2026-06-26
tags: [git, github, devops, ssh, deployment]
description: 从零开始在 Windows 上配置多 GitHub 账号 SSH 管理 + GitHub Pages 发布的完整流程，重点解决多账号 SSH 冲突和常见部署问题。
---

# GitHub Pages 多账号 SSH 部署完全指南

在实际开发中，我们经常需要管理多个 GitHub 账号：个人账号、工作账号、开源项目账号。本文记录在 Windows 环境下从零配置多账号 SSH 并部署 GitHub Pages 的完整流程。

## 1. 环境准备

### 1.1 检查 Git 和 OpenSSH

\`\`\`powershell
# 检查 Git 版本
git --version
# git version 2.40.0.windows.1

# 检查 SSH 是否可用
ssh -V
# OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2

# 检查 SSH 代理状态
Get-Service | Where-Object {$_.Name -like "*ssh*"}
\`\`\`

### 1.2 生成 SSH 密钥对

为每个 GitHub 账号生成独立的 SSH 密钥：

\`\`\`powershell
# 创建 .ssh 目录（如果不存在）
mkdir -Force $env:USERPROFILE/.ssh
cd $env:USERPROFILE/.ssh

# 生成个人账号密钥（使用 ed25519 更安全）
ssh-keygen -t ed25519 -C "personal@example.com" -f "id_github_personal"

# 生成工作账号密钥
ssh-keygen -t ed25519 -C "work@company.com" -f "id_github_work"

# 生成开源项目账号密钥
ssh-keygen -t ed25519 -C "opensource@project.com" -f "id_github_opensource"
\`\`\`

**⚠️ 注意事项：**
- 邮箱地址必须与对应 GitHub 账号的邮箱一致
- 不要设置 passphrase（为空），否则每次 push 都需输入密码
- ed25519 算法比 RSA 更短、更安全

## 2. 多账号 SSH 配置

### 2.1 创建 SSH 配置文件

在 \`~/.ssh/\` 目录下创建或编辑 \`config\` 文件：

\`\`\`powershell
notepad $env:USERPROFILE/.ssh/config
\`\`\`

添加以下内容：

\`\`\`ssh-config
# ============ 个人账号 (github.com/personal) ============
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_github_personal
    IdentitiesOnly yes
    PreferredAuthentications publickey

# ============ 工作账号 (github.com/company) ============
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_github_work
    IdentitiesOnly yes
    PreferredAuthentications publickey

# ============ 开源项目账号 (github.com/opensource) ============
Host github-opensource
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_github_opensource
    IdentitiesOnly yes
    PreferredAuthentications publickey

# ============ 默认配置 (备选) ============
Host github.com
    HostName github.com
    User git
    IdentitiesOnly yes
    PreferredAuthentications publickey
\`\`\`

### 2.2 验证 SSH 配置

\`\`\`powershell
# 测试个人账号连接
ssh -T git@github-personal

# 测试工作账号连接
ssh -T git@github-work

# 预期输出（第一次会有指纹确认）：
# Hi username! You've successfully authenticated, but GitHub does not provide shell access.
\`\`\`

**⚠️ 常见错误：**
\`\`\`
Permission denied (publickey)
\`\`\`
解决方案：
1. 确认公钥已添加到 GitHub Settings → SSH Keys
2. 检查 config 文件格式（Windows 换行符问题）
3. 使用 \`ssh -vT git@github-personal\` 查看详细日志

## 3. GitHub 公钥配置

### 3.1 查看公钥

\`\`\`powershell
# 查看各账号公钥
cat $env:USERPROFILE/.ssh/id_github_personal.pub
cat $env:USERPROFILE/.ssh/id_github_work.pub
cat $env:USERPROFILE/.ssh/id_github_opensource.pub
\`\`\`

### 3.2 添加到 GitHub

1. 登录对应 GitHub 账号
2. 进入 **Settings** → **SSH and GPG keys** → **New SSH key**
3. 粘贴公钥内容，填写标题（如 "Windows Personal Laptop"）
4. 点击 **Add SSH key**

## 4. Git 仓库配置

### 4.1 单账号项目配置

\`\`\`powershell
# 克隆项目（使用配置的 Host 别名）
git clone git@github-personal:username/personal-project.git
# 或者
git clone git@github-work:company/workspace-project.git
\`\`\`

### 4.2 已有项目切换账号

\`\`\`powershell
cd your-project

# 查看当前远程仓库
git remote -v
# origin  git@github.com:olduser/project.git (fetch)
# origin  git@github.com:olduser/project.git (push)

# 更换为新的远程地址
git remote set-url origin git@github-personal:newuser/project.git

# 验证
git remote -v
# origin  git@github-personal:newuser/project.git (fetch)
# origin  git@github-personal:newuser/project.git (push)
\`\`\`

### 4.3 本地仓库配置用户信息

为每个项目单独配置 Git 用户（避免提交记录混乱）：

\`\`\`powershell
cd your-project

# 为当前仓库设置用户信息
git config user.name "Your Name"
git config user.email "your@email.com"

# 验证配置
git config --list --local
\`\`\`

**⚠️ 注意事项：**
- \`--local\` 参数确保只在当前仓库生效
- 全局配置用 \`--global\`，系统配置用 \`--system\`
- 优先使用项目级别配置，避免提交时用错身份

## 5. GitHub Pages 部署

### 5.1 创建 GitHub Pages 仓库

1. 创建新仓库：\`username.github.io\`（必须是你的用户名）
2. 初始化并推送代码

\`\`\`powershell
# 本地初始化
mkdir username.github.io
cd username.github.io
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# 添加远程（使用配置的 Host）
git remote add origin git@github-personal:username/username.github.io.git

# 创建 index.html
@"
<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
</head>
<body>
    <h1>Hello GitHub Pages!</h1>
</body>
</html>
"@ | Out-File -FilePath index.html -Encoding utf8

# 提交并推送
git add .
git commit -m "Initial commit"
git push -u origin main
\`\`\`

3. 等待几分钟后访问：\`https://username.github.io\`

### 5.2 部署静态站点

对于 Vite/React 等静态站点项目：

\`\`\`powershell
# 1. 构建项目
npm run build

# 2. 初始化 dist 目录的 Git 仓库
cd dist
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# 3. 关联到 GitHub Pages 仓库
git remote add origin git@github-personal:username/username.github.io.git

# 4. 创建 gh-pages 分支并推送
git checkout -b gh-pages
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push -u origin gh-pages

# 5. 清理（返回项目根目录）
cd ..
\`\`\`

### 5.3 使用 GitHub Actions 自动部署

创建 \`.github/workflows/deploy.yml\`：

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
\`\`\`

## 6. 常见问题与解决方案

### 6.1 SSH 连接失败

\`\`\`powershell
# 诊断步骤
ssh -vT git@github-personal

# 常见原因：
# 1. 公钥未添加
# 2. config 文件格式错误（Windows 换行符）
# 3. 私钥权限过于开放
\`\`\`

**解决方案：**

\`\`\`powershell
# 修复 config 文件换行符
(Get-Content $env:USERPROFILE/.ssh/config) -join "\`n" | 
    Set-Content -Path $env:USERPROFILE/.ssh/config -Encoding ASCII

# 修复私钥权限（Windows 上通常不需要）
icacls $env:USERPROFILE/.ssh/id_github_personal /inheritance:r /grant:r "$env:USERNAME:R"
\`\`\`

### 6.2 Permission denied (publickey)

\`\`\`powershell
# 检查 SSH 代理是否在运行
Get-Service ssh-agent | Select-Object Status

# 启动 SSH 代理
Start-Service ssh-agent

# 添加私钥到代理
ssh-add $env:USERPROFILE/.ssh/id_github_personal
ssh-add $env:USERPROFILE/.ssh/id_github_work

# 查看已添加的密钥
ssh-add -l
\`\`\`

### 6.3 仓库权限不足

\`\`\`powershell
# 错误信息：Permission to xxx.git denied to xxx

# 原因：当前 SSH 密钥对应的账号没有该仓库的访问权限
# 解决：
# 1. 确认使用的远程地址正确
# 2. 确认公钥已添加到对应 GitHub 账号
# 3. 检查仓库是否需要 Collaborator 邀请
\`\`\`

### 6.4 GitHub Pages 404 错误

\`\`\`powershell
# 检查项：
# 1. 仓库名称必须是 username.github.io
# 2. GitHub Pages 设置中是否启用
# 3. 分支选择是否正确（main 或 gh-pages）
# 4. 自定义域名是否配置正确

# 查看 GitHub Pages 设置
# Settings → Pages → Source
\`\`\`

### 6.5 推送被拒绝

\`\`\`powershell
# ! [rejected]        main -> main (fetch first)
# error: failed to push some refs

# 解决方案：
# 1. 先拉取远程代码（可能需要处理冲突）
git pull origin main --rebase

# 2. 或者强制推送（⚠️ 会覆盖远程，请谨慎使用）
git push -f origin main
\`\`\`

### 6.6 多账号切换混乱

创建辅助脚本快速切换：

\`\`\`powershell
# 文件: ~/.ssh/switch-ssh.ps1
param(
    [ValidateSet("personal", "work", "opensource")]
    [string]$Account
)

$config = @"
# ============ $Account 账号配置 ============
Host github-$Account
    HostName github.com
    User git
    IdentityFile \`$env:USERPROFILE/.ssh/id_github_$Account
    IdentitiesOnly yes
    PreferredAuthentications publickey
"@

# 将配置写入 config 文件（保留其他 Host 配置）
$config | Add-Content -Path "$env:USERPROFILE/.ssh/config"

Write-Host "已切换到 $Account 账号"
Write-Host "测试连接: ssh -T git@github-$Account"
\`\`\`

## 7. 安全最佳实践

### 7.1 保护私钥

\`\`\`powershell
# 永不上传私钥到 Git
# .gitignore 添加
echo "*.pem" >> ~/.gitignore_global
git config --global core.excludesFile ~/.gitignore_global
\`\`\`

### 7.2 定期轮换密钥

建议每 6-12 个月更换一次 SSH 密钥：

\`\`\`powershell
# 1. 生成新密钥
ssh-keygen -t ed25519 -C "personal@example.com" -f "$env:USERPROFILE/.ssh/id_github_personal_new"

# 2. 添加新公钥到 GitHub
cat $env:USERPROFILE/.ssh/id_github_personal_new.pub

# 3. 测试新密钥
ssh -T git@github-personal

# 4. 确认无误后删除旧密钥
Remove-Item $env:USERPROFILE/.ssh/id_github_personal
Remove-Item $env:USERPROFILE/.ssh/id_github_personal.pub
\`\`\`

## 8. 完整工作流程示例

\`\`\`powershell
# ============ 首次设置 ============
# 1. 生成密钥
ssh-keygen -t ed25519 -C "personal@example.com" -f "$env:USERPROFILE/.ssh/id_github_personal"

# 2. 配置 SSH config（参考上文）

# 3. 添加公钥到 GitHub

# 4. 测试连接
ssh -T git@github-personal

# ============ 开发工作流 ============
# 1. 克隆项目
git clone git@github-personal:username/project.git
cd project

# 2. 日常开发
npm run dev

# 3. 提交代码
git add .
git commit -m "feat: add new feature"
git push origin main

# ============ 部署 GitHub Pages ============
# 1. 构建
npm run build

# 2. 进入 dist 目录
cd dist

# 3. 初始化 Git
git init
git remote add origin git@github-personal:username/username.github.io.git
git checkout -b gh-pages

# 4. 推送
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd')"
git push -u origin gh-pages
\`\`\`

## 总结

关键要点回顾：

- ✅ **ed25519 算法**：更短更安全的密钥
- ✅ **SSH Host 别名**：多账号轻松切换
- ✅ **项目级 Git 配置**：避免提交身份混乱
- ✅ **GitHub Actions**：自动化部署流程
- ✅ **定期密钥轮换**：保障账号安全

遇到问题时善用 \`ssh -vT\` 诊断，保持 SSH 代理运行，多账号管理并不复杂。
`,cm=`---
title: Gradle 构建优化与高级配置
date: 2026-06-11
tags: [android, gradle, build, optimization]
description: 深入掌握 Gradle 构建脚本优化、依赖管理、版本统一、构建缓存、多模块配置，以及 CI/CD 集成策略。
---

# Gradle 构建优化与高级配置

Gradle 是 Android 项目的构建系统，合理的配置能显著提升构建速度、减小 APK 体积、改善开发体验。

## 构建速度优化

### 1. Gradle 守护进程

\`\`\`properties
# gradle.properties
org.gradle.daemon=true
org.gradle.parallel=true
org.gradle.configureondemand=true
org.gradle.caching=true
\`\`\`

### 2. JVM 内存配置

\`\`\`properties
# gradle.properties
org.gradle.jvmargs=-Xmx8192m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError
\`\`\`

### 3. 模块化构建

\`\`\`groovy
// settings.gradle
include ':app'
include ':feature:home'
include ':feature:profile'
include ':core:network'
include ':core:database'
include ':core:ui'
\`\`\`

### 4. 非传递性 R 类

\`\`\`properties
# gradle.properties
android.nonTransitiveRClass=true
android.nonFinalResIds=true
\`\`\`

## 依赖管理

### 版本目录（Version Catalog）

\`\`\`toml
# gradle/libs.versions.toml
[versions]
kotlin = "1.9.0"
compose = "1.5.0"
hilt = "2.50"
room = "2.6.0"

[libraries]
kotlin-stdlib = { module = "org.jetbrains.kotlin:kotlin-stdlib", version.ref = "kotlin" }
compose-ui = { module = "androidx.compose.ui:ui", version.ref = "compose" }
compose-material = { module = "androidx.compose.material3:material3", version.ref = "compose" }
hilt-android = { module = "com.google.dagger:hilt-android", version.ref = "hilt" }
room-runtime = { module = "androidx.room:room-runtime", version.ref = "room" }

[bundles]
compose = ["compose-ui", "compose-material", "compose-tooling"]

[plugins]
kotlin-android = { id = "org.jetbrains.kotlin.android", version.ref = "kotlin" }
hilt = { id = "com.google.dagger.hilt.android", version.ref = "hilt" }
\`\`\`

\`\`\`groovy
// build.gradle (Module)
dependencies {
    implementation libs.kotlin.stdlib
    implementation libs.bundles.compose
    implementation libs.hilt.android
    kapt libs.hilt.compiler
    
    implementation libs.room.runtime
    kapt libs.room.compiler
}
\`\`\`

### 依赖版本对齐

\`\`\`groovy
// build.gradle (Project)
allprojects {
    configurations.all {
        resolutionStrategy {
            // 强制使用指定版本
            force "org.jetbrains.kotlin:kotlin-stdlib:1.9.0"
            
            // 缓存动态版本（避免频繁检查）
            cacheDynamicVersionsFor 10, 'minutes'
            cacheChangingModulesFor 4, 'hours'
        }
    }
}
\`\`\`

### 排除传递依赖

\`\`\`groovy
dependencies {
    implementation('com.example:library:1.0') {
        exclude group: 'com.squareup.okhttp3', module: 'okhttp'
    }
    
    // 或全局排除
    configurations.all {
        exclude group: 'com.android.support', module: 'support-v13'
    }
}
\`\`\`

## APK 体积优化

### 1. 启用代码压缩

\`\`\`groovy
android {
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
\`\`\`

### 2. ProGuard 规则

\`\`\`proguard
# proguard-rules.pro
# 保留数据类
-keep class com.example.app.data.model.** { *; }

# 保留序列化注解
-keepattributes *Annotation*
-keepclassmembers class * {
    @com.google.gson.annotations.SerializedName <fields>;
}

# 保留枚举
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# 移除日志
-assumenosideeffects class android.util.Log {
    public static int v(...);
    public static int d(...);
    public static int i(...);
}
\`\`\`

### 3. ABI 拆分

\`\`\`groovy
android {
    splits {
        abi {
            enable true
            reset()
            include 'x86', 'x86_64', 'armeabi-v7a', 'arm64-v8a'
            universalApk false
        }
    }
}
\`\`\`

### 4. 资源优化

\`\`\`groovy
android {
    buildTypes {
        release {
            resValue "string", "app_name", "MyApp"
            resConfigs "zh", "en"  // 只保留中文和英文资源
        }
    }
}
\`\`\`

## 高级构建配置

### 多维度构建变体

\`\`\`groovy
android {
    flavorDimensions "version", "api"
    
    productFlavors {
        free {
            dimension "version"
            applicationIdSuffix ".free"
        }
        paid {
            dimension "version"
            applicationIdSuffix ".paid"
        }
        
        prod {
            dimension "api"
            buildConfigField "String", "API_URL", '"https://api.example.com"'
        }
        staging {
            dimension "api"
            buildConfigField "String", "API_URL", '"https://staging-api.example.com"'
        }
    }
}
\`\`\`

### 自定义 Gradle 任务

\`\`\`groovy
// 定义任务
task generateVersionFile {
    doLast {
        def versionFile = new File("$buildDir/generated/version.txt")
        versionFile.parentFile.mkdirs()
        versionFile.text = "\${android.defaultConfig.versionName} (\${android.defaultConfig.versionCode})"
    }
}

// 依赖其他任务
preBuild.dependsOn generateVersionFile
\`\`\`

### 构建脚本复用

\`\`\`groovy
// buildSrc/src/main/groovy/com/example/Dependencies.groovy
class Dependencies {
    static final kotlin_version = '1.9.0'
    static final compose_version = '1.5.0'
    
    static final hilt = "com.google.dagger:hilt-android:2.50"
    static final room = "androidx.room:room-runtime:2.6.0"
}

// build.gradle (Module)
import static com.example.Dependencies.*

dependencies {
    implementation hilt
    implementation room
}
\`\`\`

## CI/CD 集成

### GitHub Actions

\`\`\`yaml
# .github/workflows/build.yml
name: Android CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
    
    - name: Cache Gradle
      uses: actions/cache@v3
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
        key: \${{ runner.os }}-gradle-\${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
    
    - name: Build
      run: ./gradlew assembleRelease
    
    - name: Run tests
      run: ./gradlew test
    
    - name: Upload APK
      uses: actions/upload-artifact@v3
      with:
        name: app-release
        path: app/build/outputs/apk/release/*.apk
\`\`\`

## 总结

Gradle 优化的关键点：

- ✅ **构建缓存**：开启 org.gradle.caching
- ✅ **并行构建**：开启 org.gradle.parallel
- ✅ **版本目录**：统一依赖版本管理
- ✅ **代码压缩**：ProGuard/R8 减小体积
- ✅ **资源优化**：resConfigs 减少冗余
- ✅ **模块化**：拆分为多个模块提升编译速度
- ✅ **CI 缓存**：在 CI/CD 中缓存 Gradle 目录

掌握 Gradle 高级配置是 Android 工程化的重要技能。
`,dm=`---
title: Hilt 依赖注入框架实战指南
date: 2026-06-16
tags: [android, hilt, di, dagger, jetpack]
description: 全面掌握 Hilt 的依赖注入机制，包括组件层次、模块定义、限定符、作用域管理，以及测试中的替换策略。
---

# Hilt 依赖注入框架实战指南

Hilt 是 Google 基于 Dagger 构建的依赖注入框架，专为 Android 设计，减少了样板代码并提供了生命周期感知的组件注入。

## 为什么选择 Hilt

\`\`\`kotlin
// 传统方式：手动创建依赖
class UserRepository {
    private val api = RetrofitClient.api  // 硬编码
    private val dao = AppDatabase.getInstance().userDao()  // 硬编码
}

// Hilt 方式：自动注入
class UserRepository @Inject constructor(
    private val api: ApiService,
    private val userDao: UserDao
)
\`\`\`

## 基础配置

### 依赖添加

\`\`\`groovy
dependencies {
    implementation "com.google.dagger:hilt-android:2.50"
    kapt "com.google.dagger:hilt-compiler:2.50"
    
    // 测试支持
    testImplementation "com.google.dagger:hilt-android-testing:2.50"
    kaptTest "com.google.dagger:hilt-compiler:2.50"
}
\`\`\`

### Application 配置

\`\`\`kotlin
@HiltAndroidApp
class MyApplication : Application()
\`\`\`

\`\`\`xml
<!-- AndroidManifest.xml -->
<application
    android:name=".MyApplication"
    ... />
\`\`\`

### Activity/Fragment 注入

\`\`\`kotlin
@AndroidEntryPoint
class MainActivity : AppCompatActivity() {
    @Inject
    lateinit var analytics: AnalyticsAdapter
}

@AndroidEntryPoint
class HomeFragment : Fragment() {
    @Inject
    lateinit var repository: UserRepository
}
\`\`\`

## 构造函数注入

\`\`\`kotlin
// 简单依赖：直接 @Inject
class UserRepository @Inject constructor(
    private val apiService: ApiService,
    private val userDao: UserDao
)

class UserViewModel @Inject constructor(
    private val userRepository: UserRepository
) : ViewModel()
\`\`\`

## 模块定义（Module）

### 基础模块

\`\`\`kotlin
@Module
@InstallIn(SingletonComponent::class)  // 安装到 Application 组件
object NetworkModule {
    
    @Provides
    @Singleton
    fun provideRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl("https://api.example.com/")
            .addConverterFactory(MoshiConverterFactory.create())
            .build()
    }
    
    @Provides
    @Singleton
    fun provideApiService(retrofit: Retrofit): ApiService {
        return retrofit.create(ApiService::class.java)
    }
}
\`\`\`

### 数据库模块

\`\`\`kotlin
@Module
@InstallIn(SingletonComponent::class)
object DatabaseModule {
    
    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): AppDatabase {
        return Room.databaseBuilder(
            context,
            AppDatabase::class.java,
            "app_database"
        ).build()
    }
    
    @Provides
    fun provideUserDao(database: AppDatabase): UserDao {
        return database.userDao()
    }
}
\`\`\`

### 多实现绑定

\`\`\`kotlin
// 接口
interface AnalyticsService {
    fun trackEvent(event: String)
}

// 实现 1
class FirebaseAnalytics @Inject constructor() : AnalyticsService {
    override fun trackEvent(event: String) {
        // Firebase 实现
    }
}

// 实现 2
class MixpanelAnalytics @Inject constructor() : AnalyticsService {
    override fun trackEvent(event: String) {
        // Mixpanel 实现
    }
}

// 绑定模块
@Module
@InstallIn(SingletonComponent::class)
abstract class AnalyticsModule {
    
    @Binds
    @Singleton
    abstract fun bindAnalyticsService(
        firebaseAnalytics: FirebaseAnalytics
    ): AnalyticsService
}
\`\`\`

## 限定符（Qualifier）

\`\`\`kotlin
// 定义限定符
@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class AuthInterceptorOkHttpClient

@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class OtherInterceptorOkHttpClient

@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {
    
    @AuthInterceptorOkHttpClient
    @Provides
    fun provideAuthOkHttpClient(
        authInterceptor: AuthInterceptor
    ): OkHttpClient {
        return OkHttpClient.Builder()
            .addInterceptor(authInterceptor)
            .build()
    }
    
    @OtherInterceptorOkHttpClient
    @Provides
    fun provideOtherOkHttpClient(
        loggingInterceptor: LoggingInterceptor
    ): OkHttpClient {
        return OkHttpClient.Builder()
            .addInterceptor(loggingInterceptor)
            .build()
    }
}

// 使用限定符注入
class UserRepository @Inject constructor(
    @AuthInterceptorOkHttpClient
    private val client: OkHttpClient
)
\`\`\`

## 作用域（Scope）

\`\`\`kotlin
// @Singleton - Application 级别（全局单例）
@Module
@InstallIn(SingletonComponent::class)
object AppModule {
    @Provides
    @Singleton
    fun provideDatabase(...): AppDatabase
}

// @ActivityScoped - Activity 级别
@Module
@InstallIn(ActivityComponent::class)
object ActivityModule {
    @Provides
    @ActivityScoped
    fun provideNavigator(): Navigator
}

// @ViewModelScoped - ViewModel 级别
@Module
@InstallIn(ViewModelComponent::class)
object ViewModelModule {
    @Provides
    @ViewModelScoped
    fun provideUserState(): UserState
}
\`\`\`

## 预定义类型注入

\`\`\`kotlin
class AnalyticsAdapter @Inject constructor(
    @ApplicationContext private val context: Context,
    private val service: AnalyticsService
)

class LocationHelper @Inject constructor(
    @ActivityContext private val context: Context
)
\`\`\`

## ViewModel 注入

\`\`\`kotlin
@HiltViewModel
class UserViewModel @Inject constructor(
    private val getUserUseCase: GetUserUseCase,
    private val savedStateHandle: SavedStateHandle
) : ViewModel() {
    
    val userId: String = savedStateHandle["userId"] ?: ""
}

// 在 Compose 中使用
@Composable
fun UserScreen(
    viewModel: UserViewModel = hiltViewModel()
) {
    // 自动注入
}
\`\`\`

## 测试中的依赖替换

\`\`\`kotlin
@Module
@TestInstallIn(
    components = [SingletonComponent::class],
    replaces = [NetworkModule::class]
)
object TestNetworkModule {
    
    @Provides
    @Singleton
    fun provideApiService(): ApiService {
        return FakeApiService()
    }
}

// 测试类
@HiltAndroidTest
class UserRepositoryTest {
    @get:Rule
    var hiltRule = HiltAndroidRule(this)
    
    @Inject
    lateinit var repository: UserRepository
    
    @Before
    fun init() {
        hiltRule.inject()
    }
    
    @Test
    fun testGetUser() = runTest {
        val user = repository.getUser("1")
        assertNotNull(user)
    }
}
\`\`\`

## 组件层次

\`\`\`
ApplicationComponent
    └── ActivityComponent
            └── FragmentComponent
                    └── ViewComponent
                    └── ViewWithFragmentComponent
            └── ViewModelComponent
                    └── ViewModel
\`\`\`

## 最佳实践

1. **优先使用构造函数注入**：最简洁、可测试
2. **合理使用作用域**：避免不必要的单例
3. **模块按功能组织**：NetworkModule、DatabaseModule
4. **使用 Qualifier 区分多实现**：清晰明确
5. **避免在模块中写业务逻辑**：只负责创建依赖

## 总结

Hilt 提供了：

- ✅ **简化 Dagger**：减少样板代码
- ✅ **生命周期感知**：自动管理依赖范围
- ✅ **编译期安全**：错误在编译期发现
- ✅ **测试友好**：易于替换依赖
- ✅ **官方支持**：与 Jetpack 深度集成

Hilt 是现代 Android 依赖注入的标准方案。
`,pm=`---
title: Jetpack Compose 声明式 UI 开发实战
date: 2026-06-22
tags: [android, compose, ui, kotlin]
description: 全面掌握 Jetpack Compose 的声明式 UI 编程模型，包括 Composable 函数、状态管理、布局系统、主题定制和性能优化。
---

# Jetpack Compose 声明式 UI 开发实战

Jetpack Compose 是 Android 的现代声明式 UI 工具包，使用 Kotlin 代码描述界面，而非 XML 布局文件。

## 为什么使用 Compose

\`\`\`kotlin
// 传统 XML 方式
// layout/activity_main.xml
// <LinearLayout>
//     <TextView android:text="Hello" />
//     <Button android:text="Click" />
// </LinearLayout>

// Compose 方式
@Composable
fun GreetingScreen() {
    Column {
        Text("Hello")
        Button(onClick = { }) {
            Text("Click")
        }
    }
}
\`\`\`

## Composable 函数

### 基础组件

\`\`\`kotlin
@Composable
fun SimpleComponent() {
    // 文本
    Text(
        text = "Hello Compose",
        style = MaterialTheme.typography.headlineLarge,
        color = Color.Blue
    )
    
    // 按钮
    Button(
        onClick = { /* 处理点击 */ },
        modifier = Modifier.padding(16.dp)
    ) {
        Text("Click Me")
    }
    
    // 图片
    Image(
        painter = painterResource(R.drawable.ic_launcher),
        contentDescription = "App Icon"
    )
}
\`\`\`

### 布局容器

\`\`\`kotlin
@Composable
fun LayoutDemo() {
    // 垂直排列
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Top")
        Text("Center")
        Text("Bottom")
    }
    
    // 水平排列
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text("Left")
        Text("Right")
    }
    
    // 层叠布局
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Image(painter = ..., contentDescription = ...)
        Text("Overlay")
    }
}
\`\`\`

## 状态管理

### remember 与 mutableStateOf

\`\`\`kotlin
@Composable
fun Counter() {
    // 声明状态
    var count by remember { mutableStateOf(0) }
    
    Column {
        Text("Count: $count")
        Button(onClick = { count++ }) {
            Text("Increment")
        }
    }
}
\`\`\`

### ViewModel 集成

\`\`\`kotlin
class CounterViewModel : ViewModel() {
    private val _count = mutableStateOf(0)
    val count: State<Int> = _count
    
    fun increment() {
        _count.value++
    }
}

@Composable
fun CounterScreen(viewModel: CounterViewModel = viewModel()) {
    val count by viewModel.count
    
    Column {
        Text("Count: $count")
        Button(onClick = { viewModel.increment() }) {
            Text("Increment")
        }
    }
}
\`\`\`

### rememberSaveable

\`\`\`kotlin
@Composable
fun StatefulComponent() {
    // 配置变化时保持状态
    var text by rememberSaveable { mutableStateOf("") }
    
    TextField(
        value = text,
        onValueChange = { text = it },
        label = { Text("Input") }
    )
}
\`\`\`

## Modifier 系统

\`\`\`kotlin
@Composable
fun ModifierDemo() {
    Text(
        text = "Styled Text",
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
            .background(Color.LightGray)
            .border(2.dp, Color.Black)
            .padding(8.dp)
            .clickable { /* 点击处理 */ }
    )
}
\`\`\`

### 自定义 Modifier

\`\`\`kotlin
fun Modifier.customStyle(): Modifier = this
    .padding(16.dp)
    .background(Color.Blue)
    .clip(RoundedCornerShape(8.dp))

@Composable
fun CustomComponent() {
    Text(
        text = "Custom Styled",
        modifier = Modifier.customStyle()
    )
}
\`\`\`

## 列表与懒加载

\`\`\`kotlin
@Composable
fun UserList(users: List<User>) {
    // 懒加载列表（类似 RecyclerView）
    LazyColumn {
        items(users) { user ->
            UserItem(user)
        }
        
        // 或者使用 key
        items(users, key = { it.id }) { user ->
            UserItem(user)
        }
    }
    
    // 懒加载网格
    LazyVerticalGrid(
        columns = GridCells.Fixed(2)
    ) {
        items(users) { user ->
            UserCard(user)
        }
    }
}

@Composable
fun UserItem(user: User) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        AsyncImage(
            model = user.avatar,
            contentDescription = null,
            modifier = Modifier.size(48.dp)
        )
        Spacer(modifier = Modifier.width(16.dp))
        Column {
            Text(user.name, style = MaterialTheme.typography.titleMedium)
            Text(user.email, style = MaterialTheme.typography.bodyMedium)
        }
    }
}
\`\`\`

## 主题与样式

\`\`\`kotlin
// 定义颜色
private val LightColorScheme = lightColorScheme(
    primary = Purple40,
    secondary = PurpleGrey40,
    tertiary = Pink40
)

// 应用主题
@Composable
fun MyAppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme
    
    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
\`\`\`

## 动画

\`\`\`kotlin
@Composable
fun AnimatedComponent() {
    var expanded by remember { mutableStateOf(false) }
    
    // 属性动画
    val size by animateDpAsState(
        targetValue = if (expanded) 200.dp else 100.dp,
        animationSpec = tween(durationMillis = 300)
    )
    
    Box(
        modifier = Modifier
            .size(size)
            .background(Color.Blue)
            .clickable { expanded = !expanded }
    )
}

// 可见性动画
AnimatedVisibility(
    visible = isVisible,
    enter = fadeIn() + slideInVertically(),
    exit = fadeOut() + slideOutVertically()
) {
    Text("Hello")
}
\`\`\`

## 导航

\`\`\`kotlin
@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    
    NavHost(navController = navController, startDestination = "home") {
        composable("home") { HomeScreen() }
        composable("detail/{id}") { backStackEntry ->
            val id = backStackEntry.arguments?.getString("id")
            DetailScreen(id)
        }
    }
}
\`\`\`

## 性能优化

1. **使用 remember 缓存计算**：避免重复计算
2. **使用 LazyColumn/LazyRow**：只渲染可见项
3. **避免在 Composition 中做耗时操作**：移到 ViewModel
4. **使用 derivedStateOf**：减少不必要的重组
5. **使用 key 参数**：帮助 Diff 算法

## 总结

Jetpack Compose 提供了：

- ✅ **声明式语法**：代码即 UI
- ✅ **状态驱动**：数据变化自动更新 UI
- ✅ **可组合性**：组件易于复用和组合
- ✅ **Material Design**：内置 Material 组件
- ✅ **动画支持**：流畅的动画 API
- ✅ **互操作性**：可与现有 View 系统共存

Compose 是现代 Android UI 开发的首选方案。
`,fm=`---
title: Android JSON 数据解析与序列化实战
date: 2026-06-12
tags: [android, json, serialization, moshi, gson]
description: 深入对比 Gson、Moshi、Kotlin Serialization 三种 JSON 库，掌握 Retrofit 集成、自定义适配器、性能优化策略。
---

# Android JSON 数据解析与序列化实战

JSON 是移动应用与服务器通信的标准数据格式。Android 平台有多种解析方案，选择合适的库能显著提升开发效率和运行时性能。

## 主流 JSON 库对比

| 特性 | Gson | Moshi | Kotlin Serialization |
|------|------|-------|---------------------|
| 性能 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 编译期检查 | ❌ | ✅ (Codegen) | ✅ |
| Kotlin 友好 | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 包体积 | 中 | 小 | 极小 |
| 空安全 | 弱 | 强 | 最强 |
| 推荐度 | 低 | 高 | 最高 |

## Kotlin Serialization（推荐）

### 依赖配置

\`\`\`groovy
dependencies {
    implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0"
    implementation "com.jakewharton.retrofit:retrofit2-kotlinx-serialization-converter:1.0.0"
}

plugins {
    id 'org.jetbrains.kotlin.plugin.serialization' version '1.9.0'
}
\`\`\`

### 数据类定义

\`\`\`kotlin
import kotlinx.serialization.Serializable

@Serializable
data class User(
    val id: String,
    val name: String,
    val email: String,
    @SerialName("avatar_url")  // 映射不同字段名
    val avatarUrl: String? = null,
    @SerialName("is_premium")
    val isPremium: Boolean = false,
    val tags: List<String> = emptyList()
)

@Serializable
data class ApiResponse<T>(
    val code: Int,
    val message: String,
    val data: T? = null
)
\`\`\`

### 序列化与反序列化

\`\`\`kotlin
// JSON 字符串 -> 对象
val user = Json.decodeFromString<User>(jsonString)

// 对象 -> JSON 字符串
val json = Json.encodeToString(user)

// 带配置的 Json 实例
val json = Json {
    ignoreUnknownKeys = true        // 忽略未知字段
    isLenient = true                // 宽松模式
    prettyPrint = true              // 格式化输出
    encodeDefaults = true           // 编码默认值
    coerceInputValues = true        // 类型不匹配时尝试转换
}

val user = json.decodeFromString<User>(jsonString)
\`\`\`

## Moshi 解析

### 依赖配置

\`\`\`groovy
dependencies {
    implementation "com.squareup.moshi:moshi-kotlin:1.15.0"
    kapt "com.squareup.moshi:moshi-kotlin-codegen:1.15.0"
}
\`\`\`

### 数据类与适配器

\`\`\`kotlin
@JsonClass(generateAdapter = true)
data class User(
    val id: String,
    val name: String,
    @Json(name = "avatar_url")
    val avatarUrl: String?
)

// 创建 Moshi 实例
val moshi = Moshi.Builder()
    .add(KotlinJsonAdapterFactory())
    .add(DateAdapter())  // 自定义适配器
    .build()

// 解析
val adapter = moshi.adapter(User::class.java)
val user = adapter.fromJson(jsonString)
val json = adapter.toJson(user)
\`\`\`

### 自定义适配器

\`\`\`kotlin
class DateAdapter {
    @ToJson
    fun toJson(date: Date): String {
        return SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.US).format(date)
    }
    
    @FromJson
    fun fromJson(dateString: String): Date {
        return SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.US).parse(dateString)!!
    }
}

// 枚举适配器
class StatusAdapter {
    @ToJson
    fun toJson(status: Status): String = status.name.lowercase()
    
    @FromJson
    fun fromJson(status: String): Status = Status.valueOf(status.uppercase())
}
\`\`\`

## Retrofit 集成

### Kotlin Serialization + Retrofit

\`\`\`kotlin
val retrofit = Retrofit.Builder()
    .baseUrl("https://api.example.com/")
    .addConverterFactory(
        Json { ignoreUnknownKeys = true }
            .asConverterFactory("application/json".toMediaType())
    )
    .build()

interface ApiService {
    @GET("users/{id}")
    suspend fun getUser(@Path("id") id: String): ApiResponse<User>
    
    @POST("users")
    suspend fun createUser(@Body user: User): ApiResponse<User>
    
    @GET("users")
    suspend fun getUsers(
        @Query("page") page: Int,
        @Query("size") size: Int = 20
    ): ApiResponse<List<User>>
}
\`\`\`

### 统一错误处理

\`\`\`kotlin
sealed class NetworkResult<out T> {
    data class Success<T>(val data: T) : NetworkResult<T>()
    data class Error(val code: Int, val message: String) : NetworkResult<Nothing>()
    object Loading : NetworkResult<Nothing>()
}

suspend fun <T> safeApiCall(call: suspend () -> ApiResponse<T>): NetworkResult<T> {
    return try {
        val response = call()
        if (response.code == 200) {
            NetworkResult.Success(response.data!!)
        } else {
            NetworkResult.Error(response.code, response.message)
        }
    } catch (e: IOException) {
        NetworkResult.Error(-1, "Network error: \${e.message}")
    } catch (e: SerializationException) {
        NetworkResult.Error(-2, "Parse error: \${e.message}")
    }
}

// 使用
viewModelScope.launch {
    _uiState.value = NetworkResult.Loading
    _uiState.value = safeApiCall { apiService.getUser("123") }
}
\`\`\`

## 复杂 JSON 处理

### 多态解析

\`\`\`kotlin
@Serializable
sealed class Animal {
    abstract val name: String
}

@Serializable
@SerialName("dog")
data class Dog(
    override val name: String,
    val breed: String
) : Animal()

@Serializable
@SerialName("cat")
data class Cat(
    override val name: String,
    val indoor: Boolean
) : Animal()

// JSON
// {"type":"dog","name":"Buddy","breed":"Golden Retriever"}

// 解析
val animal = Json.decodeFromString<Animal>(jsonString)
when (animal) {
    is Dog -> println("Dog: \${animal.breed}")
    is Cat -> println("Cat: \${animal.indoor}")
}
\`\`\`

### 动态字段处理

\`\`\`kotlin
@Serializable
data class Config(
    val version: Int,
    val features: Map<String, Boolean>,
    val metadata: JsonObject  // 未知结构
)

// 使用
val config = Json.decodeFromString<Config>(jsonString)
val featureEnabled = config.features["dark_mode"] ?: false
val extraData = config.metadata["custom_key"]?.jsonPrimitive?.content
\`\`\`

## 性能优化

### 1. 使用流式解析（大文件）

\`\`\`kotlin
// 避免一次性加载整个 JSON
val jsonParser = Json { 
    isLenient = true 
}

// 分批处理数组
val jsonElement = jsonParser.parseToJsonElement(largeJsonString)
if (jsonElement is JsonArray) {
    jsonElement.forEach { element ->
        val item = jsonParser.decodeFromJsonElement<Item>(element)
        process(item)
    }
}
\`\`\`

### 2. 缓存适配器

\`\`\`kotlin
object JsonCache {
    private val adapters = ConcurrentHashMap<KClass<*>, KSerializer<*>>()
    
    @Suppress("UNCHECKED_CAST")
    fun <T : Any> getAdapter(clazz: KClass<T>): KSerializer<T> {
        return adapters.getOrPut(clazz) {
            serializer(clazz.createType())
        } as KSerializer<T>
    }
}
\`\`\`

### 3. 避免反射

\`\`\`kotlin
// 使用 codegen 生成适配器
@JsonClass(generateAdapter = true)  // Moshi
@Serializable  // Kotlin Serialization
\`\`\`

## 总结

JSON 处理的最佳实践：

- ✅ **选择 Kotlin Serialization**：原生 Kotlin 支持，性能最优
- ✅ **使用 @SerialName**：字段名与 JSON 解耦
- ✅ **设置默认值**：处理可选字段
- ✅ **统一错误处理**：封装 safeApiCall
- ✅ **自定义适配器**：处理特殊类型
- ✅ **编译期检查**：避免运行时解析错误

掌握高效的 JSON 处理是 Android 网络层开发的核心技能。
`,mm=`---
title: Kotlin 基础与高级特性详解
date: 2026-06-25
tags: [kotlin, android, basics]
description: 深入理解 Kotlin 语言的核心特性，包括空安全、扩展函数、高阶函数、数据类、密封类等高级语法。
---

# Kotlin 基础与高级特性详解

Kotlin 是由 JetBrains 开发的现代编程语言，2017 年被 Google 宣布为 Android 官方开发语言。它简洁、安全、互操作性强，完美兼容 Java 生态。

## 为什么选择 Kotlin

\`\`\`kotlin
// Java 写法（冗长）
public class User {
    private String name;
    private int age;
    
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // getter/setter...
}

// Kotlin 写法（简洁）
data class User(val name: String, val age: Int)
\`\`\`

Kotlin 减少了约 40% 的样板代码，同时提供了更强的类型安全。

## 空安全系统

Kotlin 的类型系统区分可空和不可空类型，在编译期就防止 NullPointerException。

### 可空类型声明

\`\`\`kotlin
var name: String = "John"      // 不可空
var nickname: String? = null   // 可空

// 编译错误：不可空变量不能赋 null
// name = null

// 安全调用运算符 ?.
val length = nickname?.length   // 如果 nickname 为 null，返回 null

// Elvis 运算符 ?:
val displayName = nickname ?: "Anonymous"

// 非空断言 !!
val forcedLength = nickname!!.length  // 如果为 null，抛出 NPE
\`\`\`

### 安全调用链

\`\`\`kotlin
// 链式安全调用
val city = user?.address?.city ?: "Unknown"

// let 函数处理非空值
nickname?.let {
    println("Nickname: $it")
    println("Length: \${it.length}")
}
\`\`\`

## 扩展函数

扩展函数允许在不继承的情况下为现有类添加新功能。

\`\`\`kotlin
// 为 String 类添加扩展
fun String.addExclamation(): String = this + "!"

val greeting = "Hello".addExclamation()  // "Hello!"

// 为 View 添加扩展（Android 开发常用）
fun View.visible() {
    this.visibility = View.VISIBLE
}

fun View.gone() {
    this.visibility = View.GONE
}

// 使用
button.visible()
loadingIndicator.gone()
\`\`\`

### 扩展属性

\`\`\`kotlin
val Int.dp: Int
    get() = (this * Resources.getSystem().displayMetrics.density).toInt()

// 使用
val margin = 16.dp
\`\`\`

## 高阶函数与 Lambda

Kotlin 支持函数作为一等公民，可以传递函数作为参数或返回值。

\`\`\`kotlin
// 高阶函数：接受函数作为参数
fun operateOnNumbers(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

// 使用
val sum = operateOnNumbers(3, 4) { x, y -> x + y }
val product = operateOnNumbers(3, 4) { x, y -> x * y }
\`\`\`

### 常用标准库高阶函数

\`\`\`kotlin
val numbers = listOf(1, 2, 3, 4, 5)

// map：转换每个元素
val doubled = numbers.map { it * 2 }  // [2, 4, 6, 8, 10]

// filter：过滤元素
val evens = numbers.filter { it % 2 == 0 }  // [2, 4]

// reduce：累积计算
val sum = numbers.reduce { acc, i -> acc + i }  // 15

// forEach：遍历
numbers.forEach { println(it) }

// groupBy：分组
data class Person(val name: String, val age: Int)
val people = listOf(Person("Alice", 20), Person("Bob", 25), Person("Charlie", 20))
val byAge = people.groupBy { it.age }
\`\`\`

## 数据类

data class 自动生成常用方法，减少样板代码。

\`\`\`kotlin
data class User(
    val id: Long,
    val name: String,
    val email: String
)

val user1 = User(1, "John", "john@example.com")
val user2 = user1.copy(email = "john.doe@example.com")

// 自动生成的功能
println(user1.toString())      // User(id=1, name=John, email=john@example.com)
println(user1 == user2)        // false（因为 email 不同）
val (id, name, email) = user1  // 解构声明
\`\`\`

## 密封类与 when 表达式

密封类（sealed class）表示受限的类层次结构。

\`\`\`kotlin
sealed class Result<out T> {
    data class Success<T>(val data: T) : Result<T>()
    data class Error(val exception: Exception) : Result<Nothing>()
    object Loading : Result<Nothing>()
}

// when 表达式处理所有情况（编译器检查完备性）
fun handleResult(result: Result<String>) = when (result) {
    is Result.Success -> println("Data: \${result.data}")
    is Result.Error -> println("Error: \${result.exception.message}")
    Result.Loading -> println("Loading...")
}
\`\`\`

## 接口与委托

Kotlin 支持接口默认实现和委托模式。

\`\`\`kotlin
interface Logger {
    fun log(message: String)
    fun logError(error: Throwable) = log("Error: \${error.message}")
}

// 委托模式
class DatabaseLogger : Logger by ConsoleLogger()
\`\`\`

## 内联函数

内联函数在编译时将函数体插入调用处，减少运行时开销。

\`\`\`kotlin
inline fun measureTime(block: () -> Unit): Long {
    val start = System.currentTimeMillis()
    block()
    return System.currentTimeMillis() - start
}

// 使用
val time = measureTime {
    // 执行耗时操作
    Thread.sleep(100)
}
\`\`\`

## 类型别名与泛型

\`\`\`kotlin
// 类型别名
typealias UserList = List<User>
typealias StringMap = Map<String, String>

// 泛型约束
fun <T : Comparable<T>> maxOf(a: T, b: T): T {
    return if (a > b) a else b
}

// 泛型函数
fun <T> List<T>.secondOrNull(): T? = if (size > 1) this[1] else null
\`\`\`

## 作用域函数

Kotlin 提供了几个作用域函数用于对象操作。

\`\`\`kotlin
val person = Person("John", 30)

// let：转换为其他类型
val nameLength = person.name.let { it.length }

// run：执行块并返回结果
val greeting = person.run { "Hello, $name!" }

// with：对对象执行多个操作
with(person) {
    println(name)
    println(age)
}

// apply：配置对象并返回自身
val configuredPerson = Person("", 0).apply {
    name = "Jane"
    age = 25
}

// also：执行额外操作并返回自身
val loggedPerson = person.also { 
    println("Created: $it") 
}
\`\`\`

## 总结

Kotlin 通过以下特性提升了开发效率和代码质量：

- ✅ **空安全**：编译期防止 NPE
- ✅ **简洁语法**：减少样板代码
- ✅ **扩展函数**：增强现有类能力
- ✅ **函数式编程**：高阶函数、Lambda
- ✅ **数据类**：自动生成 equals、hashCode、toString
- ✅ **密封类**：受限的类型层次结构
- ✅ **协程支持**：原生异步编程

掌握这些特性是进行现代 Android 开发的基础。
`,gm=`---
title: Kotlin Coroutines 异步编程完全指南
date: 2026-06-24
tags: [kotlin, coroutines, async, android]
description: 深入理解 Kotlin Coroutines 的挂起函数、协程作用域、上下文、异常处理等核心概念，掌握 Android 异步编程最佳实践。
---

# Kotlin Coroutines 异步编程完全指南

Coroutines（协程）是 Kotlin 提供的轻量级线程解决方案，用于简化异步编程。相比传统的回调和 RxJava，协程代码更加直观、易于维护。

## 为什么使用协程

\`\`\`kotlin
// 传统回调写法
fetchUser(userId, object : Callback<User> {
    override fun onSuccess(user: User) {
        fetchOrders(user.id, object : Callback<List<Order>> {
            override fun onSuccess(orders: List<Order>) {
                displayOrders(orders)
            }
            override fun onError(e: Exception) { }
        })
    }
    override fun onError(e: Exception) { }
})

// 协程写法
suspend fun loadUserData(userId: String) {
    try {
        val user = fetchUser(userId)
        val orders = fetchOrders(user.id)
        displayOrders(orders)
    } catch (e: Exception) {
        showError(e)
    }
}
\`\`\`

## 核心概念

### 挂起函数（suspend）

挂起函数可以在执行过程中暂停，不阻塞线程。

\`\`\`kotlin
// 定义挂起函数
suspend fun fetchUser(userId: String): User {
    delay(1000)  // 模拟网络请求，挂起但不阻塞线程
    return User(userId, "John")
}

suspend fun fetchOrders(userId: String): List<Order> {
    delay(800)
    return listOf(Order("1", 100.0), Order("2", 200.0))
}
\`\`\`

### 启动协程

\`\`\`kotlin
import kotlinx.coroutines.*

// GlobalScope（不推荐，生命周期不可控）
GlobalScope.launch {
    // 在后台执行
}

// 使用 CoroutineScope（推荐）
val scope = CoroutineScope(Dispatchers.Main)

scope.launch {
    val user = fetchUser("123")
    updateUI(user)
}
\`\`\`

### 协程构建器

\`\`\`kotlin
// launch：启动新协程，返回 Job
val job = scope.launch {
    doSomething()
}

// async：启动新协程，返回 Deferred（可获取结果）
val deferred = scope.async {
    fetchUser("123")
}
val user = deferred.await()

// runBlocking：阻塞当前线程（主要用于测试）
runBlocking {
    val result = fetchUser("123")
    println(result)
}
\`\`\`

## 调度器（Dispatcher）

协程可以在不同的线程池中执行。

\`\`\`kotlin
// Dispatchers.Main：Android 主线程（UI 操作）
launch(Dispatchers.Main) {
    updateUI(data)
}

// Dispatchers.IO：用于 IO 密集型操作（网络、数据库）
launch(Dispatchers.IO) {
    val data = fetchFromNetwork()
    saveToDatabase(data)
}

// Dispatchers.Default：用于 CPU 密集型操作（计算、排序）
launch(Dispatchers.Default) {
    val sorted = largeList.sorted()
}

// Dispatchers.Unconfined：不限制线程
launch(Dispatchers.Unconfined) {
    // 在调用处线程执行，挂起后在其他线程恢复
}
\`\`\`

### withContext 切换上下文

\`\`\`kotlin
suspend fun fetchAndDisplayUser(userId: String) = withContext(Dispatchers.IO) {
    // 在 IO 线程执行网络请求
    val user = api.fetchUser(userId)
    
    withContext(Dispatchers.Main) {
        // 切换到主线程更新 UI
        updateUI(user)
    }
}
\`\`\`

## 协程作用域（CoroutineScope）

### 自定义作用域

\`\`\`kotlin
class MainViewModel : ViewModel() {
    // 使用 viewModelScope，自动在 ViewModel 清除时取消
    private val customScope = CoroutineScope(
        SupervisorJob() + Dispatchers.Main + CoroutineName("CustomScope")
    )
    
    fun loadData() {
        viewModelScope.launch {
            val data = repository.fetchData()
            _uiState.value = data
        }
    }
    
    override fun onCleared() {
        super.onCleared()
        customScope.cancel()  // 清理自定义作用域
    }
}
\`\`\`

### 生命周期感知的作用域

\`\`\`kotlin
// LifecycleScope（Fragment/Activity）
class MyFragment : Fragment() {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        viewLifecycleOwner.lifecycleScope.launch {
            // 当 Fragment 视图销毁时自动取消
        }
    }
}
\`\`\`

## 并发与并行

### async/await 并行执行

\`\`\`kotlin
suspend fun fetchDashboardData() {
    coroutineScope {  // 创建子作用域
        // 并行执行两个请求
        val userDeferred = async { fetchUser() }
        val ordersDeferred = async { fetchOrders() }
        
        // 等待两个结果
        val user = userDeferred.await()
        val orders = ordersDeferred.await()
        
        displayDashboard(user, orders)
    }
}
\`\`\`

### supervisorScope 异常隔离

\`\`\`kotlin
supervisorScope {
    val job1 = launch {
        // 即使这个失败
        throw Exception("Job 1 failed")
    }
    
    val job2 = launch {
        // 这个仍然继续执行
        delay(100)
        println("Job 2 completed")
    }
}
\`\`\`

## 异常处理

### try-catch 处理异常

\`\`\`kotlin
viewModelScope.launch {
    try {
        val data = repository.fetchData()
        _uiState.value = UiState.Success(data)
    } catch (e: IOException) {
        _uiState.value = UiState.Error("Network error")
    } catch (e: Exception) {
        _uiState.value = UiState.Error("Unknown error")
    }
}
\`\`\`

### CoroutineExceptionHandler

\`\`\`kotlin
val handler = CoroutineExceptionHandler { _, exception ->
    println("Caught $exception")
}

val scope = CoroutineScope(Dispatchers.Main + handler)

scope.launch {
    throw Exception("Crash!")  // 被 handler 捕获，不会崩溃
}
\`\`\`

## 取消与超时

### 取消协程

\`\`\`kotlin
val job = scope.launch {
    while (isActive) {  // 检查是否仍然活跃
        doWork()
        delay(1000)
    }
}

// 取消协程
job.cancel()
job.join()  // 等待取消完成
\`\`\`

### 超时处理

\`\`\`kotlin
try {
    withTimeout(5000) {
        // 5秒内完成
        fetchData()
    }
} catch (e: TimeoutCancellationException) {
    // 超时处理
}

// 或者返回 null
val result = withTimeoutOrNull(5000) {
    fetchData()
}
\`\`\`

## 与 Android 架构组件集成

### ViewModel 中使用

\`\`\`kotlin
class UserViewModel(
    private val repository: UserRepository
) : ViewModel() {
    
    private val _user = MutableStateFlow<User?>(null)
    val user: StateFlow<User?> = _user.asStateFlow()
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            _user.value = repository.getUser(userId)
        }
    }
    
    fun updateUser(user: User) {
        viewModelScope.launch {
            repository.updateUser(user)
            _user.value = user
        }
    }
}
\`\`\`

### Repository 中使用

\`\`\`kotlin
class UserRepository(
    private val api: UserApiService,
    private val dao: UserDao
) {
    suspend fun getUser(userId: String): User {
        return withContext(Dispatchers.IO) {
            // 先查本地缓存
            val localUser = dao.getUser(userId)
            
            if (localUser != null) {
                localUser
            } else {
                // 网络请求
                val remoteUser = api.fetchUser(userId)
                dao.insertUser(remoteUser)
                remoteUser
            }
        }
    }
}
\`\`\`

## 最佳实践

1. **始终使用结构化的并发**：避免使用 GlobalScope
2. **在 ViewModel 中使用 viewModelScope**：自动处理生命周期
3. **在 Repository 中使用 withContext(Dispatchers.IO)**：处理 IO 操作
4. **使用 try-catch 处理异常**：避免协程静默失败
5. **检查 isActive 在长时间运行的循环中**：支持及时取消
6. **使用 async/await 进行并行请求**：提升性能

## 总结

Kotlin Coroutines 提供了：

- ✅ **轻量级线程**：创建成本远低于线程
- ✅ **结构化并发**：代码更易于理解和维护
- ✅ **异常安全**：完善的异常处理机制
- ✅ **取消支持**：协作式取消机制
- ✅ **与 Android 架构深度集成**：Lifecycle、ViewModel 支持

掌握协程是现代 Android 开发的核心技能。
`,hm=`---
title: Kotlin Flow 与 StateFlow 响应式编程
date: 2026-06-23
tags: [kotlin, flow, stateflow, reactive, android]
description: 掌握 Kotlin Flow 的冷流热流机制、操作符链式调用、StateFlow 与 SharedFlow 的区别，以及 Android 架构中的最佳实践。
---

# Kotlin Flow 与 StateFlow 响应式编程

Flow 是 Kotlin 协程库中的响应式流 API，用于处理异步数据流。它类似于 RxJava 的 Observable，但更轻量、更符合 Kotlin 习惯。

## Flow 基础

### 创建 Flow

\`\`\`kotlin
import kotlinx.coroutines.flow.*

// flow 构建器
val numberFlow = flow {
    for (i in 1..5) {
        delay(100)
        emit(i)  // 发射值
    }
}

// flowOf：从固定值创建
val fixedFlow = flowOf(1, 2, 3, 4, 5)

// asFlow：将集合转换为 Flow
val listFlow = listOf(1, 2, 3).asFlow()
\`\`\`

### 收集 Flow

\`\`\`kotlin
// 在协程中收集
lifecycleScope.launch {
    numberFlow.collect { value ->
        println(value)
    }
}
\`\`\`

## Flow 操作符

### 转换操作符

\`\`\`kotlin
val flow = flowOf(1, 2, 3, 4, 5)

// map：转换每个值
flow.map { it * 2 }  // 2, 4, 6, 8, 10

// filter：过滤值
flow.filter { it % 2 == 0 }  // 2, 4

// transform：自定义转换
flow.transform {
    emit(it * 2)
    emit(it * 3)
}

// flatMapConcat：按顺序展平
flow.flatMapConcat { value ->
    flow {
        emit(value)
        delay(100)
        emit(value + 1)
    }
}
\`\`\`

### 组合操作符

\`\`\`kotlin
val flow1 = flowOf(1, 2, 3)
val flow2 = flowOf("A", "B", "C")

// zip：一对一组合
flow1.zip(flow2) { num, letter -> "$num$letter" }
// "1A", "2B", "3C"

// combine：最新值组合
flow1.combine(flow2) { num, letter -> "$num$letter" }

// merge：合并多个流
merge(flow1, flow2)
\`\`\`

### 终端操作符

\`\`\`kotlin
// collect：收集所有值
flow.collect { println(it) }

// first：获取第一个值
val first = flow.first()

// toList：转换为列表
val list = flow.toList()

// reduce：累积计算
val sum = flow.reduce { acc, value -> acc + value }

// fold：带初始值的累积
val product = flow.fold(1) { acc, value -> acc * value }
\`\`\`

## StateFlow

StateFlow 是热流（Hot Flow），总是有值，适合表示 UI 状态。

\`\`\`kotlin
class UserViewModel : ViewModel() {
    // 私有可变状态
    private val _uiState = MutableStateFlow(UiState.Loading)
    
    // 公开只读状态
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            try {
                val user = repository.getUser(userId)
                _uiState.value = UiState.Success(user)
            } catch (e: Exception) {
                _uiState.value = UiState.Error(e.message)
            }
        }
    }
}

// 在 UI 中收集
lifecycleScope.launch {
    viewModel.uiState.collect { state ->
        when (state) {
            is UiState.Loading -> showLoading()
            is UiState.Success -> showUser(state.data)
            is UiState.Error -> showError(state.message)
        }
    }
}
\`\`\`

### StateFlow 特性

\`\`\`kotlin
// 总是有值
val stateFlow = MutableStateFlow(0)
println(stateFlow.value)  // 0

// 重复值不会触发收集
stateFlow.value = 1  // 触发收集
stateFlow.value = 1  // 不触发收集（值相同）

// 使用 distinctUntilChanged
flow.distinctUntilChanged()
    .collect { /* 只在值变化时触发 */ }
\`\`\`

## SharedFlow

SharedFlow 是另一种热流，支持配置重播和缓存。

\`\`\`kotlin
// 创建 SharedFlow
val sharedFlow = MutableSharedFlow<Event>(
    replay = 1,           // 缓存最近 1 个值
    extraBufferCapacity = 0,  // 额外缓冲区
    onBufferOverflow = BufferOverflow.DROP_OLDEST  // 溢出策略
)

// 发送事件
sharedFlow.tryEmit(Event.Toast("Hello"))

// 在 UI 中收集
lifecycleScope.launch {
    sharedFlow.collect { event ->
        when (event) {
            is Event.Toast -> showToast(event.message)
            is Event.Navigate -> navigate(event.route)
        }
    }
}
\`\`\`

### StateFlow vs SharedFlow

| 特性 | StateFlow | SharedFlow |
|------|-----------|------------|
| 初始值 | 必须 | 可选 |
| 值重复 | 去重 | 允许重复 |
| 适用场景 | UI 状态 | 一次性事件 |
| 重播 | 总是最新值 | 可配置 |

## Flow 与 Android 生命周期

### lifecycleScope

\`\`\`kotlin
class MyFragment : Fragment() {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        // 自动在生命周期结束时取消
        viewLifecycleOwner.lifecycleScope.launch {
            viewModel.uiState.collect { state ->
                updateUI(state)
            }
        }
    }
}
\`\`\`

### repeatOnLifecycle

\`\`\`kotlin
viewLifecycleOwner.lifecycleScope.launch {
    viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
        viewModel.uiState.collect { state ->
            updateUI(state)
        }
    }
}
\`\`\`

## 异常处理

\`\`\`kotlin
flow {
    emit(1)
    throw Exception("Error!")
}
    .catch { e ->
        // 捕获异常
        emit(-1)
    }
    .onCompletion { cause ->
        // 完成回调（成功或失败）
        if (cause != null) {
            println("Completed with error: $cause")
        }
    }
    .collect { value ->
        println(value)
    }
\`\`\`

## 最佳实践

1. **使用 StateFlow 表示状态**：总是有值、去重
2. **使用 SharedFlow 表示事件**：导航、Toast、Snackbar
3. **使用 repeatOnLifecycle**：避免内存泄漏
4. **在 Repository 返回 Flow**：数据变化自动更新
5. **使用操作符链式调用**：代码更清晰

## 总结

Flow 提供了：

- ✅ **冷流**：按需生产数据
- ✅ **热流**：状态管理（StateFlow）、事件传递（SharedFlow）
- ✅ **丰富的操作符**：转换、过滤、组合
- ✅ **生命周期感知**：自动管理订阅
- ✅ **异常安全**：完善的错误处理

Flow 是现代 Android 响应式编程的首选方案。
`,vm=`---
title: Android MVVM 架构模式实战指南
date: 2026-06-20
tags: [android, mvvm, architecture, jetpack]
description: 深入理解 MVVM 架构的分层职责，掌握 ViewModel、LiveData/StateFlow 与 UI 层的协作方式，以及常见的反模式规避。
---

# Android MVVM 架构模式实战指南

MVVM（Model-View-ViewModel）是 Android 官方推荐的架构模式，通过数据绑定实现 UI 与业务逻辑的分离。

## MVVM 核心概念

\`\`\`
┌─────────────────────────────────────┐
│              View (UI)              │
│  - Activity/Fragment/Compose        │
│  - 观察数据变化                      │
│  - 转发用户事件                      │
└──────────────┬──────────────────────┘
               │ 观察数据
               ▼
┌─────────────────────────────────────┐
│           ViewModel                   │
│  - 业务逻辑处理                      │
│  - 数据转换                          │
│  - 状态管理                          │
└──────────────┬──────────────────────┘
               │ 调用
               ▼
┌─────────────────────────────────────┐
│           Model                       │
│  - Repository                        │
│  - 数据源（网络/本地）                │
└─────────────────────────────────────┘
\`\`\`

## ViewModel 实现

### 基础 ViewModel

\`\`\`kotlin
class UserViewModel(
    private val userRepository: UserRepository
) : ViewModel() {
    
    // 使用 StateFlow 管理 UI 状态
    private val _uiState = MutableStateFlow(UserUiState())
    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()
    
    // 一次性事件使用 SharedFlow
    private val _events = MutableSharedFlow<UserEvent>()
    val events: SharedFlow<UserEvent> = _events.asSharedFlow()
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true) }
            
            try {
                val user = userRepository.getUser(userId)
                _uiState.update { 
                    it.copy(user = user, isLoading = false) 
                }
            } catch (e: Exception) {
                _uiState.update { 
                    it.copy(error = e.message, isLoading = false) 
                }
            }
        }
    }
    
    fun onRefresh() {
        val currentUserId = _uiState.value.user?.id ?: return
        loadUser(currentUserId)
    }
}

// UI 状态数据类
data class UserUiState(
    val user: User? = null,
    val isLoading: Boolean = false,
    val error: String? = null
)

// 一次性事件
sealed class UserEvent {
    data class ShowToast(val message: String) : UserEvent()
    data class NavigateTo(val route: String) : UserEvent()
}
\`\`\`

### ViewModel 工厂

\`\`\`kotlin
class UserViewModelFactory(
    private val repository: UserRepository
) : ViewModelProvider.Factory {
    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(UserViewModel::class.java)) {
            return UserViewModel(repository) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}

// 使用
val viewModel: UserViewModel = viewModel(
    factory = UserViewModelFactory(repository)
)
\`\`\`

## View 层实现

### Compose 中观察 ViewModel

\`\`\`kotlin
@Composable
fun UserScreen(
    viewModel: UserViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    
    // 收集一次性事件
    LaunchedEffect(Unit) {
        viewModel.events.collect { event ->
            when (event) {
                is UserEvent.ShowToast -> {
                    // 显示 Toast
                }
                is UserEvent.NavigateTo -> {
                    // 导航
                }
            }
        }
    }
    
    UserContent(
        uiState = uiState,
        onRefresh = { viewModel.onRefresh() }
    )
}

@Composable
fun UserContent(
    uiState: UserUiState,
    onRefresh: () -> Unit
) {
    when {
        uiState.isLoading -> LoadingScreen()
        uiState.error != null -> ErrorScreen(
            message = uiState.error,
            onRetry = onRefresh
        )
        uiState.user != null -> UserProfile(user = uiState.user)
    }
}
\`\`\`

### XML 中观察 ViewModel

\`\`\`kotlin
class UserFragment : Fragment() {
    private val viewModel: UserViewModel by viewModels()
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        // 观察状态
        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
                viewModel.uiState.collect { state ->
                    updateUI(state)
                }
            }
        }
    }
    
    private fun updateUI(state: UserUiState) {
        binding.progressBar.isVisible = state.isLoading
        binding.errorText.isVisible = state.error != null
        state.user?.let { displayUser(it) }
    }
}
\`\`\`

## 常见的反模式

### ❌ 在 ViewModel 中持有 Context

\`\`\`kotlin
// 错误
class BadViewModel(private val context: Context) : ViewModel()

// 正确：使用 Application 或依赖注入
class GoodViewModel @Inject constructor(
    @ApplicationContext private val context: Context
) : ViewModel()
\`\`\`

### ❌ 在 ViewModel 中直接操作 View

\`\`\`kotlin
// 错误
class BadViewModel : ViewModel() {
    fun updateTextView(textView: TextView) {  // ❌
        textView.text = "Hello"
    }
}

// 正确：通过状态驱动 UI
class GoodViewModel : ViewModel() {
    private val _text = MutableStateFlow("")
    val text: StateFlow<String> = _text.asStateFlow()
}
\`\`\`

### ❌ 在 View 中处理业务逻辑

\`\`\`kotlin
// 错误
class BadActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        // 直接在 Activity 中调用网络请求
        api.fetchUser("123")  // ❌
    }
}
\`\`\`

## 最佳实践

### ✅ 单一数据源原则

\`\`\`kotlin
class UserViewModel : ViewModel() {
    // 所有 UI 状态集中管理
    private val _uiState = MutableStateFlow(UserUiState())
    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()
    
    // 不暴露多个独立的状态流
    // ❌ private val _user = MutableStateFlow<User?>(null)
    // ❌ private val _loading = MutableStateFlow(false)
}
\`\`\`

### ✅ 使用 SavedStateHandle

\`\`\`kotlin
class DetailViewModel(
    savedStateHandle: SavedStateHandle,
    private val repository: UserRepository
) : ViewModel() {
    
    private val userId: String = savedStateHandle["userId"] ?: ""
    
    init {
        loadUser(userId)
    }
}
\`\`\`

### ✅ 错误处理统一封装

\`\`\`kotlin
sealed class Result<out T> {
    data class Success<T>(val data: T) : Result<T>()
    data class Error(val message: String) : Result<Nothing>()
    object Loading : Result<Nothing>()
}

class UserViewModel : ViewModel() {
    private val _result = MutableStateFlow<Result<User>>(Result.Loading)
    val result: StateFlow<Result<User>> = _result.asStateFlow()
    
    fun loadUser(id: String) {
        viewModelScope.launch {
            _result.value = Result.Loading
            _result.value = try {
                Result.Success(repository.getUser(id))
            } catch (e: Exception) {
                Result.Error(e.message ?: "Unknown error")
            }
        }
    }
}
\`\`\`

## 测试 ViewModel

\`\`\`kotlin
class UserViewModelTest {
    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()
    
    private lateinit var viewModel: UserViewModel
    private lateinit var repository: FakeUserRepository
    
    @Before
    fun setup() {
        repository = FakeUserRepository()
        viewModel = UserViewModel(repository)
    }
    
    @Test
    fun \`load user updates ui state\`() = runTest {
        // Given
        val expectedUser = User("1", "John")
        repository.addUser(expectedUser)
        
        // When
        viewModel.loadUser("1")
        
        // Then
        val state = viewModel.uiState.value
        assertEquals(expectedUser, state.user)
        assertFalse(state.isLoading)
    }
}
\`\`\`

## 总结

MVVM 架构提供了：

- ✅ **关注点分离**：UI、逻辑、数据清晰分层
- ✅ **可测试性**：ViewModel 可独立单元测试
- ✅ **生命周期安全**：ViewModel 自动处理配置变化
- ✅ **响应式编程**：数据驱动 UI 更新
- ✅ **官方支持**：Jetpack 组件原生支持

遵循 MVVM 原则是构建可维护 Android 应用的基础。
`,ym=`---
title: Navigation Compose 页面导航与深层链接
date: 2026-06-21
tags: [android, compose, navigation, jetpack]
description: 深入掌握 Navigation Compose 的导航图配置、参数传递、深层链接、底部导航栏集成，以及类型安全导航的最佳实践。
---

# Navigation Compose 页面导航与深层链接

Navigation Compose 是 Jetpack Navigation 组件的 Compose 版本，提供了声明式的导航解决方案。

## 基础导航配置

### 设置 NavHost

\`\`\`kotlin
@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    
    NavHost(
        navController = navController,
        startDestination = Screen.Home.route
    ) {
        composable(Screen.Home.route) {
            HomeScreen(
                onNavigateToDetail = { id ->
                    navController.navigate("detail/$id")
                }
            )
        }
        
        composable(
            route = "detail/{id}",
            arguments = listOf(
                navArgument("id") { type = NavType.StringType }
            )
        ) { backStackEntry ->
            val id = backStackEntry.arguments?.getString("id") ?: ""
            DetailScreen(id = id)
        }
    }
}
\`\`\`

### 定义路由常量

\`\`\`kotlin
sealed class Screen(val route: String) {
    object Home : Screen("home")
    object Detail : Screen("detail/{id}") {
        fun createRoute(id: String) = "detail/$id"
    }
    object Profile : Screen("profile")
    object Settings : Screen("settings")
}
\`\`\`

## 导航操作

### 基础导航

\`\`\`kotlin
// 导航到目标
navController.navigate("detail/123")

// 使用安全路由
navController.navigate(Screen.Detail.createRoute("123"))

// 返回上一页
navController.popBackStack()

// 返回特定页面
navController.popBackStack("home", inclusive = false)

// 导航并清除栈
navController.navigate("home") {
    popUpTo("home") { inclusive = true }
    launchSingleTop = true
}
\`\`\`

### 传递参数

\`\`\`kotlin
// 定义带参数的页面
composable(
    route = "detail/{id}?showBanner={showBanner}",
    arguments = listOf(
        navArgument("id") { 
            type = NavType.StringType 
        },
        navArgument("showBanner") {
            type = NavType.BoolType
            defaultValue = false
        }
    )
) { backStackEntry ->
    val id = backStackEntry.arguments?.getString("id") ?: ""
    val showBanner = backStackEntry.arguments?.getBoolean("showBanner") ?: false
    
    DetailScreen(id = id, showBanner = showBanner)
}
\`\`\`

### 类型安全导航（Kotlin Serialization）

\`\`\`kotlin
@Serializable
object Home

@Serializable
data class Detail(val id: String)

// 配置
NavHost(navController = navController, startDestination = Home) {
    composable<Home> { HomeScreen() }
    composable<Detail> { backStackEntry ->
        val detail = backStackEntry.toRoute<Detail>()
        DetailScreen(id = detail.id)
    }
}

// 导航
navController.navigate(Detail(id = "123"))
\`\`\`

## 底部导航栏

\`\`\`kotlin
@Composable
fun BottomNavScreen() {
    val navController = rememberNavController()
    val items = listOf(
        Screen.Home,
        Screen.Profile,
        Screen.Settings
    )
    
    Scaffold(
        bottomBar = {
            NavigationBar {
                val navBackStackEntry by navController.currentBackStackEntryAsState()
                val currentRoute = navBackStackEntry?.destination?.route
                
                items.forEach { screen ->
                    NavigationBarItem(
                        icon = { Icon(screen.icon, contentDescription = screen.title) },
                        label = { Text(screen.title) },
                        selected = currentRoute == screen.route,
                        onClick = {
                            navController.navigate(screen.route) {
                                popUpTo(navController.graph.startDestinationId) {
                                    saveState = true
                                }
                                launchSingleTop = true
                                restoreState = true
                            }
                        }
                    )
                }
            }
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Screen.Home.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(Screen.Home.route) { HomeScreen() }
            composable(Screen.Profile.route) { ProfileScreen() }
            composable(Screen.Settings.route) { SettingsScreen() }
        }
    }
}
\`\`\`

## 深层链接（Deep Link）

### 配置深层链接

\`\`\`kotlin
composable(
    route = "detail/{id}",
    deepLinks = listOf(
        navDeepLink {
            uriPattern = "myapp://detail/{id}"
        },
        navDeepLink {
            uriPattern = "https://myapp.com/detail/{id}"
        }
    )
) { backStackEntry ->
    val id = backStackEntry.arguments?.getString("id") ?: ""
    DetailScreen(id)
}
\`\`\`

### AndroidManifest 配置

\`\`\`xml
<activity android:name=".MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="myapp" android:host="detail" />
    </intent-filter>
</activity>
\`\`\`

## 导航与 ViewModel

\`\`\`kotlin
class HomeViewModel(
    private val savedStateHandle: SavedStateHandle
) : ViewModel() {
    
    val id: String = savedStateHandle["id"] ?: ""
    
    fun navigateToDetail(navController: NavController, itemId: String) {
        navController.navigate(Screen.Detail.createRoute(itemId))
    }
}
\`\`\`

## 最佳实践

1. **使用密封类定义路由**：类型安全、可维护
2. **避免在 Composable 中直接操作导航**：通过回调传递给 ViewModel
3. **使用 deep link 支持外部跳转**：提升用户体验
4. **配置 popUpTo 防止栈溢出**：合理管理返回栈
5. **使用 launchSingleTop 避免重复页面**：类似 singleTop 启动模式

## 总结

Navigation Compose 提供了：

- ✅ **声明式导航**：代码清晰易懂
- ✅ **类型安全**：编译期检查路由
- ✅ **深层链接**：支持外部跳转
- ✅ **底部导航集成**：与 Material 组件完美配合
- ✅ **返回栈管理**：灵活控制导航历史

掌握 Navigation Compose 是构建复杂 Android 应用的必备技能。
`,Sm=`---
title: ONNX Runtime 端侧 AI 推理实战
date: 2026-06-14
tags: [android, onnx, ai, ml, tensorflow]
description: 深入掌握 ONNX Runtime 在 Android 端的模型部署、推理优化、量化加速，以及与 CameraX 的实时推理集成。
---

# ONNX Runtime 端侧 AI 推理实战

ONNX Runtime 是微软开源的高性能推理引擎，支持跨平台部署，在 Android 端可实现高效的神经网络推理。

## 为什么使用 ONNX Runtime

- **跨平台**：同一模型可在 Android、iOS、Web、PC 运行
- **性能优化**：内置图优化、量化加速
- **多框架支持**：支持 PyTorch、TensorFlow、Keras 等导出
- **硬件加速**：支持 NNAPI、GPU 委托

## 依赖配置

\`\`\`groovy
dependencies {
    // ONNX Runtime 基础
    implementation 'com.microsoft.onnxruntime:onnxruntime-android:latest.release'
    
    // 支持 NNAPI 加速（Android 8.1+）
    implementation 'com.microsoft.onnxruntime:onnxruntime-android:latest.release'
    
    // GPU 加速（可选）
    implementation 'com.microsoft.onnxruntime:onnxruntime-android:latest.release'
}
\`\`\`

## 模型准备

### 导出 ONNX 模型

\`\`\`python
# PyTorch 导出
import torch

model = MyModel()
model.load_state_dict(torch.load("model.pth"))
model.eval()

# 创建示例输入
dummy_input = torch.randn(1, 3, 224, 224)

# 导出 ONNX
torch.onnx.export(
    model,
    dummy_input,
    "model.onnx",
    input_names=["input"],
    output_names=["output"],
    dynamic_axes={
        "input": {0: "batch_size"},
        "output": {0: "batch_size"}
    },
    opset_version=11
)
\`\`\`

### 模型量化优化

\`\`\`python
from onnxruntime.quantization import quantize_dynamic, QuantType

# 动态量化（减小模型体积，加速推理）
quantize_dynamic(
    model_input="model.onnx",
    model_output="model_quantized.onnx",
    weight_type=QuantType.QInt8
)
\`\`\`

### 放入项目

\`\`\`
app/src/main/assets/
└── model.onnx          # 原始模型
└── model_quantized.onnx  # 量化模型
\`\`\`

## 基础推理实现

### 初始化 ONNX Session

\`\`\`kotlin
class OnnxInference(
    context: Context,
    modelPath: String = "model_quantized.onnx"
) {
    private var ortSession: OrtSession? = null
    private val ortEnvironment = OrtEnvironment.getEnvironment()
    
    init {
        try {
            val assetManager = context.assets
            assetManager.open(modelPath).use { inputStream ->
                val modelBytes = inputStream.readBytes()
                ortSession = ortEnvironment.createSession(modelBytes)
            }
        } catch (e: Exception) {
            Log.e("OnnxInference", "Failed to load model", e)
        }
    }
    
    fun close() {
        ortSession?.close()
    }
}
\`\`\`

### 图像分类推理

\`\`\`kotlin
class ImageClassifier(context: Context) {
    private val onnx = OnnxInference(context, "mobilenet.onnx")
    private val labels: List<String> = loadLabels(context)
    
    fun classify(bitmap: Bitmap): ClassificationResult {
        // 预处理
        val inputTensor = preprocess(bitmap)
        
        // 推理
        val output = onnx.run(inputTensor)
        
        // 后处理
        return postprocess(output)
    }
    
    private fun preprocess(bitmap: Bitmap): OnnxTensor {
        // 调整大小
        val resized = Bitmap.createScaledBitmap(bitmap, 224, 224, true)
        
        // 转换为浮点数组 [1, 3, 224, 224]
        val floatArray = FloatArray(3 * 224 * 224)
        val intValues = IntArray(224 * 224)
        resized.getPixels(intValues, 0, 224, 0, 0, 224, 224)
        
        for (i in 0 until 224 * 224) {
            val pixel = intValues[i]
            // 归一化到 [0, 1]
            floatArray[i] = ((pixel shr 16) and 0xFF) / 255.0f           // R
            floatArray[i + 224 * 224] = ((pixel shr 8) and 0xFF) / 255.0f  // G
            floatArray[i + 2 * 224 * 224] = (pixel and 0xFF) / 255.0f      // B
        }
        
        val shape = longArrayOf(1, 3, 224, 224)
        return OnnxTensor.createTensor(
            onnx.ortEnvironment,
            FloatBuffer.wrap(floatArray),
            shape
        )
    }
    
    private fun postprocess(output: OrtSession.Result): ClassificationResult {
        val probabilities = output.get(0).value as Array<FloatArray>
        val probs = probabilities[0]
        
        // 获取 top-5
        val top5 = probs.withIndex()
            .sortedByDescending { it.value }
            .take(5)
            .map { Prediction(labels[it.index], it.value) }
        
        return ClassificationResult(top5)
    }
}

data class Prediction(val label: String, val confidence: Float)
data class ClassificationResult(val predictions: List<Prediction>)
\`\`\`

## 实时推理与 CameraX 集成

\`\`\`kotlin
class CameraAnalyzer(
    private val classifier: ImageClassifier
) : ImageAnalysis.Analyzer {
    
    private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
    
    @androidx.camera.core.ExperimentalGetImage
    override fun analyze(imageProxy: ImageProxy) {
        val mediaImage = imageProxy.image ?: run {
            imageProxy.close()
            return
        }
        
        // 转换为 Bitmap
        val bitmap = mediaImage.toBitmap()
        
        scope.launch {
            try {
                val result = classifier.classify(bitmap)
                withContext(Dispatchers.Main) {
                    onResult(result)
                }
            } finally {
                imageProxy.close()
            }
        }
    }
    
    private fun Image.toBitmap(): Bitmap {
        val buffer = planes[0].buffer
        val bytes = ByteArray(buffer.remaining())
        buffer.get(bytes)
        
        val yuvImage = YuvImage(
            bytes,
            ImageFormat.NV21,
            width,
            height,
            null
        )
        
        val out = ByteArrayOutputStream()
        yuvImage.compressToJpeg(Rect(0, 0, width, height), 100, out)
        val imageBytes = out.toByteArray()
        
        return BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.size)
    }
}
\`\`\`

## NNAPI 加速

\`\`\`kotlin
class OnnxInference(context: Context, modelPath: String) {
    
    init {
        val sessionOptions = OrtSession.SessionOptions().apply {
            // 添加 NNAPI 执行提供者（Android 8.1+）
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                addNnapi()
            }
            
            // 设置线程数
            setIntraOpNumThreads(4)
            
            // 图优化级别
            setGraphOptimizationLevel(
                OrtSession.SessionOptions.GraphOptimizationLevel.ORT_ENABLE_ALL
            )
        }
        
        assetManager.open(modelPath).use { inputStream ->
            val modelBytes = inputStream.readBytes()
            ortSession = ortEnvironment.createSession(modelBytes, sessionOptions)
        }
    }
    
    private fun OrtSession.SessionOptions.addNnapi() {
        val nnapiOptions = NnapiFlags()
        addNnapi(nnapiOptions)
    }
}
\`\`\`

## 性能优化

### 1. 输入数据缓存

\`\`\`kotlin
class OptimizedInference(context: Context) {
    private val inputBuffer = FloatArray(3 * 224 * 224)
    private var inputTensor: OnnxTensor? = null
    
    fun preprocessOptimized(bitmap: Bitmap): OnnxTensor {
        // 复用缓冲区，避免重复分配
        bitmap.getPixels(...)
        // ... 填充 inputBuffer
        
        inputTensor?.close()
        inputTensor = OnnxTensor.createTensor(
            ortEnvironment,
            FloatBuffer.wrap(inputBuffer),
            longArrayOf(1, 3, 224, 224)
        )
        return inputTensor!!
    }
}
\`\`\`

### 2. 异步推理

\`\`\`kotlin
class AsyncInference {
    private val inferenceScope = CoroutineScope(
        Dispatchers.Default + SupervisorJob()
    )
    
    fun runAsync(input: OnnxTensor): Deferred<OrtSession.Result> {
        return inferenceScope.async {
            ortSession!!.run(mapOf("input" to input))
        }
    }
}
\`\`\`

### 3. 批量推理

\`\`\`kotlin
fun batchClassify(bitmaps: List<Bitmap>): List<ClassificationResult> {
    // 合并为 batch
    val batchSize = bitmaps.size
    val batchArray = FloatArray(batchSize * 3 * 224 * 224)
    
    bitmaps.forEachIndexed { index, bitmap ->
        // 填充 batchArray
    }
    
    val shape = longArrayOf(batchSize.toLong(), 3, 224, 224)
    val inputTensor = OnnxTensor.createTensor(
        ortEnvironment,
        FloatBuffer.wrap(batchArray),
        shape
    )
    
    val output = ortSession!!.run(mapOf("input" to inputTensor))
    // 解析 batch 结果
}
\`\`\`

## 完整示例：实时物体检测

\`\`\`kotlin
class ObjectDetector(context: Context) {
    private val inference = OnnxInference(context, "yolov8n.onnx")
    
    data class Detection(
        val classId: Int,
        val confidence: Float,
        val bbox: RectF
    )
    
    fun detect(bitmap: Bitmap): List<Detection> {
        // YOLO 预处理
        val input = preprocess(bitmap)
        
        // 推理
        val output = inference.run(input)
        
        // NMS 后处理
        return postprocess(output)
    }
    
    private fun postprocess(output: OrtSession.Result): List<Detection> {
        val predictions = output.get(0).value as Array<Array<FloatArray>>
        val detections = mutableListOf<Detection>()
        
        // 解析 YOLO 输出 [batch, num_boxes, 5 + num_classes]
        for (i in 0 until predictions[0].size) {
            val pred = predictions[0][i]
            val confidence = pred[4]
            
            if (confidence > 0.5) {
                // 找到最大类别概率
                var maxClass = 0
                var maxProb = 0f
                for (c in 5 until pred.size) {
                    if (pred[c] > maxProb) {
                        maxProb = pred[c]
                        maxClass = c - 5
                    }
                }
                
                if (maxProb > 0.5) {
                    detections.add(Detection(
                        classId = maxClass,
                        confidence = confidence * maxProb,
                        bbox = RectF(pred[0], pred[1], pred[2], pred[3])
                    ))
                }
            }
        }
        
        return nms(detections)
    }
    
    private fun nms(detections: List<Detection>, iouThreshold: Float = 0.5f): List<Detection> {
        // 非极大值抑制实现
        val sorted = detections.sortedByDescending { it.confidence }
        val result = mutableListOf<Detection>()
        
        for (detection in sorted) {
            var shouldSuppress = false
            for (selected in result) {
                if (iou(detection.bbox, selected.bbox) > iouThreshold) {
                    shouldSuppress = true
                    break
                }
            }
            if (!shouldSuppress) {
                result.add(detection)
            }
        }
        
        return result
    }
    
    private fun iou(a: RectF, b: RectF): Float {
        val intersection = RectF()
        intersection.setIntersect(a, b)
        val intersectionArea = intersection.width() * intersection.height()
        val unionArea = a.width() * a.height() + b.width() * b.height() - intersectionArea
        return if (unionArea > 0) intersectionArea / unionArea else 0f
    }
}
\`\`\`

## 总结

ONNX Runtime 提供了：

- ✅ **跨平台部署**：同一模型多平台运行
- ✅ **高性能推理**：图优化和硬件加速
- ✅ **多框架支持**：PyTorch/TensorFlow 等导出
- ✅ **实时推理**：与 CameraX 集成实现实时 ML
- ✅ **量化优化**：减小模型体积，加速推理

ONNX Runtime 是 Android 端侧 AI 部署的首选方案。
`,xm=`---
title: React Hooks 深入理解
date: 2026-06-20
tags: [react, hooks, frontend]
description: 深入理解 React Hooks 的工作原理，包括 useState、useEffect、useContext 等核心 Hook 的实现原理和最佳实践。
---

# React Hooks 深入理解

React Hooks 是 React 16.8 引入的革命性特性，它让我们在函数组件中使用状态和其他 React 特性。

## 为什么需要 Hooks

在 Hooks 出现之前，我们主要使用类组件来管理状态：

\`\`\`jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
\`\`\`

这种方式存在一些问题：

1. **组件逻辑难以复用**：高阶组件和 render props 会导致嵌套地狱
2. **生命周期函数混乱**：相关逻辑分散在不同生命周期中
3. **this 指向问题**：需要绑定事件处理函数

## useState 原理

\`useState\` 是最基础的 Hook：

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

### 核心原理

React 内部使用一个数组来存储所有 state：

\`\`\`javascript
// 简化的 Hooks 实现
const hooks = [];
let idx = 0;

function useState(initialValue) {
  const state = hooks[idx] !== undefined ? hooks[idx] : initialValue;
  hooks[idx] = state;
  
  const _idx = idx;
  idx++;
  
  function setState(newValue) {
    hooks[_idx] = newValue;
    render(); // 重新渲染组件
  }
  
  return [state, setState];
}
\`\`\`

> **注意**：这就是为什么 Hooks 必须在顶层调用，不能放在循环或条件语句中。

## useEffect 详解

\`useEffect\` 用于处理副作用：

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
    }

    fetchUser();
  }, [userId]); // 依赖数组

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

### 依赖数组规则

| 依赖数组 | 执行时机 |
|---------|---------|
| 无 | 每次渲染后都执行 |
| \`[]\` | 只在挂载时执行 |
| \`[a, b]\` | 当 a 或 b 变化时执行 |

### 清理副作用

\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // 返回清理函数
  return () => {
    clearInterval(timer);
  };
}, []);
\`\`\`

## 自定义 Hooks

自定义 Hooks 是提取组件逻辑的最佳方式：

\`\`\`jsx
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// 使用
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
\`\`\`

## 常见错误与解决方案

### 1. 依赖数组不完整

\`\`\`jsx
// ❌ 错误：缺少依赖
useEffect(() => {
  console.log(count);
}, []);

// ✅ 正确：包含所有依赖
useEffect(() => {
  console.log(count);
}, [count]);
\`\`\`

### 2. 闭包陷阱

\`\`\`jsx
// ❌ 错误：使用过期的 state
useEffect(() => {
  const timer = setInterval(() => {
    setCount(count + 1); // count 永远是初始值
  }, 1000);
}, []);

// ✅ 正确：使用函数式更新
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
}, []);
\`\`\`

### 3. 无限循环

\`\`\`jsx
// ❌ 错误：setState 触发重渲染，形成循环
useEffect(() => {
  setCount(count + 1);
}, [count]);

// ✅ 正确：使用函数式更新或调整逻辑
useEffect(() => {
  const timer = setTimeout(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearTimeout(timer);
}, []);
\`\`\`

## 性能优化

### useMemo

缓存计算结果：

\`\`\`jsx
import { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const processed = useMemo(() => {
    return data.map(item => heavyComputation(item));
  }, [data]);

  return <div>{processed}</div>;
}
\`\`\`

### useCallback

缓存函数引用：

\`\`\`jsx
import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}
\`\`\`

## 总结

Hooks 让我们能够以更简洁、更直观的方式编写 React 组件：

- **useState**：管理状态
- **useEffect**：处理副作用
- **useContext**：共享状态
- **useMemo/useCallback**：性能优化
- **自定义 Hooks**：逻辑复用

掌握 Hooks 是现代 React 开发的必备技能。
`,km=`---
title: Repository 模式与数据层设计
date: 2026-06-09
tags: [android, repository, architecture, clean-architecture]
description: 深入理解 Repository 模式的设计原则、单一数据源策略、缓存机制，以及在 Clean Architecture 中的实践应用。
---

# Repository 模式与数据层设计

Repository 模式是 Android 架构中的核心组件，负责封装数据访问逻辑，为上层提供统一的数据接口。

## 为什么使用 Repository

\`\`\`kotlin
// 不使用 Repository：ViewModel 直接操作数据源
class BadViewModel : ViewModel() {
    fun loadUser(id: String) {
        viewModelScope.launch {
            val user = api.getUser(id)  // 直接依赖网络
            // 或
            val user = dao.getUser(id)  // 直接依赖数据库
        }
    }
}

// 使用 Repository：数据访问抽象化
class GoodViewModel(
    private val repository: UserRepository
) : ViewModel() {
    fun loadUser(id: String) {
        viewModelScope.launch {
            val user = repository.getUser(id)  // 不关心数据来源
        }
    }
}
\`\`\`

## 基础实现

### 接口定义（Domain 层）

\`\`\`kotlin
interface UserRepository {
    // 使用 Flow 支持响应式
    fun getUserStream(id: String): Flow<User>
    fun getAllUsersStream(): Flow<List<User>>
    
    // 一次性查询
    suspend fun getUser(id: String): User
    suspend fun refreshUsers()
    suspend fun saveUser(user: User)
    suspend fun deleteUser(id: String)
}
\`\`\`

### 实现类（Data 层）

\`\`\`kotlin
class UserRepositoryImpl(
    private val remoteDataSource: UserRemoteDataSource,
    private val localDataSource: UserLocalDataSource,
    private val networkMonitor: NetworkMonitor
) : UserRepository {
    
    override fun getUserStream(id: String): Flow<User> {
        return localDataSource.getUserStream(id)
            .onEach { localUser ->
                // 如果有网络，尝试刷新
                if (networkMonitor.isOnline && shouldRefresh(id)) {
                    refreshUser(id)
                }
            }
    }
    
    override suspend fun getUser(id: String): User {
        return if (networkMonitor.isOnline) {
            try {
                val remoteUser = remoteDataSource.getUser(id)
                localDataSource.saveUser(remoteUser)
                remoteUser
            } catch (e: Exception) {
                localDataSource.getUser(id) 
                    ?: throw Exception("User not found")
            }
        } else {
            localDataSource.getUser(id)
                ?: throw Exception("User not found and no network")
        }
    }
    
    override suspend fun refreshUsers() {
        if (!networkMonitor.isOnline) return
        
        val remoteUsers = remoteDataSource.getUsers()
        localDataSource.saveUsers(remoteUsers)
    }
    
    private suspend fun refreshUser(id: String) {
        try {
            val remoteUser = remoteDataSource.getUser(id)
            localDataSource.saveUser(remoteUser)
        } catch (e: Exception) {
            // 静默失败，使用本地数据
        }
    }
    
    private fun shouldRefresh(id: String): Boolean {
        // 实现缓存策略
        return true
    }
}
\`\`\`

## 单一数据源策略

\`\`\`kotlin
class SingleSourceOfTruthRepository(
    private val api: ApiService,
    private val dao: UserDao
) {
    fun getUsers(): Flow<List<User>> {
        // 始终从本地数据库读取
        return dao.getAllUsers()
            .map { entities -> entities.map { it.toDomain() } }
            .onEach { users ->
                // 后台刷新
                if (users.isEmpty()) {
                    refreshFromNetwork()
                }
            }
    }
    
    suspend fun refreshFromNetwork() {
        try {
            val remoteUsers = api.getUsers()
            dao.insertAll(remoteUsers.map { it.toEntity() })
        } catch (e: Exception) {
            // 记录日志，但不抛出
        }
    }
}
\`\`\`

## 缓存策略

### 1. Cache-Aside（旁路缓存）

\`\`\`kotlin
class CacheAsideRepository(
    private val api: ApiService,
    private val cache: LruCache<String, User>
) {
    suspend fun getUser(id: String): User {
        // 先查缓存
        cache.get(id)?.let { return it }
        
        // 查数据库/网络
        val user = api.getUser(id)
        
        // 写入缓存
        cache.put(id, user)
        
        return user
    }
}
\`\`\`

### 2. Time-Based 缓存

\`\`\`kotlin
class TimeBasedCacheRepository(
    private val api: ApiService,
    private val dao: UserDao,
    private val cacheTimeout: Long = 5 * 60 * 1000  // 5 分钟
) {
    private val lastUpdateTime = mutableMapOf<String, Long>()
    
    suspend fun getUser(id: String): User {
        val lastUpdate = lastUpdateTime[id] ?: 0
        val now = System.currentTimeMillis()
        
        return if (now - lastUpdate > cacheTimeout) {
            // 缓存过期，从网络获取
            val user = api.getUser(id)
            dao.insert(user.toEntity())
            lastUpdateTime[id] = now
            user
        } else {
            // 使用缓存
            dao.getUser(id)?.toDomain() ?: throw Exception("Not found")
        }
    }
}
\`\`\`

## 分页实现

\`\`\`kotlin
class PagingUserRepository(
    private val api: ApiService,
    private val dao: UserDao
) {
    fun getUsersPager(): Flow<PagingData<User>> {
        return Pager(
            config = PagingConfig(
                pageSize = 20,
                prefetchDistance = 5,
                enablePlaceholders = false
            ),
            remoteMediator = UserRemoteMediator(api, dao),
            pagingSourceFactory = { dao.getUsersPagingSource() }
        ).flow.map { pagingData ->
            pagingData.map { it.toDomain() }
        }
    }
}
\`\`\`

## 测试

\`\`\`kotlin
class UserRepositoryTest {
    private lateinit var repository: UserRepositoryImpl
    private lateinit var remoteDataSource: FakeRemoteDataSource
    private lateinit var localDataSource: FakeLocalDataSource
    
    @Test
    fun \`getUser returns local when offline\`() = runTest {
        // Given
        val user = User("1", "John")
        localDataSource.addUser(user)
        networkMonitor.setOnline(false)
        
        // When
        val result = repository.getUser("1")
        
        // Then
        assertEquals(user, result)
    }
    
    @Test
    fun \`getUser fetches remote when online\`() = runTest {
        // Given
        val remoteUser = User("1", "John Remote")
        remoteDataSource.addUser(remoteUser)
        networkMonitor.setOnline(true)
        
        // When
        val result = repository.getUser("1")
        
        // Then
        assertEquals(remoteUser, result)
        assertTrue(localDataSource.contains("1"))  // 已缓存到本地
    }
}
\`\`\`

## 总结

Repository 模式的核心价值：

- ✅ **数据访问抽象**：上层不依赖具体数据源
- ✅ **测试友好**：易于 mock 数据源
- ✅ **缓存策略**：灵活控制数据新鲜度
- ✅ **单一数据源**：避免数据不一致
- ✅ **响应式**：Flow 支持自动更新

Repository 是 Clean Architecture 数据层的核心组件。
`,wm=`---
title: Room 数据库与 SQLite 本地存储实战
date: 2026-06-18
tags: [android, room, sqlite, database, jetpack]
description: 全面掌握 Room 持久化库的核心组件、迁移策略、复杂查询、性能优化，以及与 Flow 的响应式集成。
---

# Room 数据库与 SQLite 本地存储实战

Room 是 Jetpack 提供的抽象层，基于 SQLite 提供类型安全的对象映射（ORM），减少样板代码并支持编译期 SQL 检查。

## 核心组件

\`\`\`
┌─────────────────────────────────────┐
│           Entity                     │
│  - 数据表结构定义                     │
├─────────────────────────────────────┤
│            DAO                       │
│  - 数据访问接口                       │
├─────────────────────────────────────┤
│          Database                    │
│  - 数据库持有类                       │
└─────────────────────────────────────┘
\`\`\`

## 依赖配置

\`\`\`groovy
dependencies {
    def room_version = "2.6.1"
    
    implementation "androidx.room:room-runtime:$room_version"
    kapt "androidx.room:room-compiler:$room_version"
    
    // Kotlin 协程支持
    implementation "androidx.room:room-ktx:$room_version"
    
    // 可选：测试支持
    testImplementation "androidx.room:room-testing:$room_version"
}
\`\`\`

## Entity 定义

### 基础实体

\`\`\`kotlin
@Entity(tableName = "users")
data class UserEntity(
    @PrimaryKey
    @ColumnInfo(name = "id")
    val id: String,
    
    @ColumnInfo(name = "name")
    val name: String,
    
    @ColumnInfo(name = "email")
    val email: String,
    
    @ColumnInfo(name = "created_at")
    val createdAt: Long = System.currentTimeMillis()
)
\`\`\`

### 复合主键与索引

\`\`\`kotlin
@Entity(
    tableName = "order_items",
    primaryKeys = ["order_id", "product_id"],
    indices = [
        Index(value = ["order_id"]),
        Index(value = ["product_id"])
    ]
)
data class OrderItemEntity(
    @ColumnInfo(name = "order_id")
    val orderId: String,
    
    @ColumnInfo(name = "product_id")
    val productId: String,
    
    @ColumnInfo(name = "quantity")
    val quantity: Int
)
\`\`\`

### 外键约束

\`\`\`kotlin
@Entity(
    tableName = "posts",
    foreignKeys = [
        ForeignKey(
            entity = UserEntity::class,
            parentColumns = ["id"],
            childColumns = ["author_id"],
            onDelete = ForeignKey.CASCADE
        )
    ]
)
data class PostEntity(
    @PrimaryKey
    val id: String,
    
    @ColumnInfo(name = "title")
    val title: String,
    
    @ColumnInfo(name = "author_id")
    val authorId: String
)
\`\`\`

### 嵌套对象（Embedded）

\`\`\`kotlin
data class Address(
    val street: String,
    val city: String,
    val zipCode: String
)

@Entity(tableName = "users")
data class UserEntity(
    @PrimaryKey
    val id: String,
    
    val name: String,
    
    @Embedded
    val address: Address
)
// 表结构：id, name, street, city, zipCode
\`\`\`

## DAO 接口

### 基础 CRUD

\`\`\`kotlin
@Dao
interface UserDao {
    
    @Query("SELECT * FROM users WHERE id = :id")
    suspend fun getUser(id: String): UserEntity?
    
    @Query("SELECT * FROM users")
    suspend fun getAllUsers(): List<UserEntity>
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertUser(user: UserEntity)
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertUsers(users: List<UserEntity>)
    
    @Update
    suspend fun updateUser(user: UserEntity)
    
    @Delete
    suspend fun deleteUser(user: UserEntity)
    
    @Query("DELETE FROM users WHERE id = :id")
    suspend fun deleteUserById(id: String)
}
\`\`\`

### 响应式查询（Flow）

\`\`\`kotlin
@Dao
interface UserDao {
    
    // 数据库变化时自动触发
    @Query("SELECT * FROM users")
    fun getAllUsersFlow(): Flow<List<UserEntity>>
    
    @Query("SELECT * FROM users WHERE id = :id")
    fun getUserFlow(id: String): Flow<UserEntity?>
    
    // 结合 Paging
    @Query("SELECT * FROM users ORDER BY name ASC")
    fun getUsersPaged(): PagingSource<Int, UserEntity>
}
\`\`\`

### 复杂查询

\`\`\`kotlin
@Dao
interface OrderDao {
    
    // 联表查询
    @Query("""
        SELECT orders.*, users.name as user_name
        FROM orders
        INNER JOIN users ON orders.user_id = users.id
        WHERE orders.status = :status
    """)
    suspend fun getOrdersWithUserName(status: String): List<OrderWithUserName>
    
    // 聚合查询
    @Query("SELECT COUNT(*) FROM orders WHERE user_id = :userId")
    suspend fun getOrderCount(userId: String): Int
    
    // 分页查询
    @Query("SELECT * FROM orders LIMIT :limit OFFSET :offset")
    suspend fun getOrdersPaged(limit: Int, offset: Int): List<OrderEntity>
    
    // 事务操作
    @Transaction
    @Query("SELECT * FROM users WHERE id = :userId")
    suspend fun getUserWithOrders(userId: String): UserWithOrders
}

// 关系数据类
data class UserWithOrders(
    @Embedded val user: UserEntity,
    @Relation(
        parentColumn = "id",
        entityColumn = "user_id"
    )
    val orders: List<OrderEntity>
)
\`\`\`

## Database 配置

\`\`\`kotlin
@Database(
    entities = [UserEntity::class, OrderEntity::class, PostEntity::class],
    version = 2,
    exportSchema = true  // 导出 schema 用于测试和验证
)
@TypeConverters(DateConverter::class)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
    abstract fun orderDao(): OrderDao
    
    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null
        
        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "app_database"
                )
                .addMigrations(MIGRATION_1_2)
                .build()
                INSTANCE = instance
                instance
            }
        }
    }
}

// 类型转换器
class DateConverter {
    @TypeConverter
    fun fromTimestamp(value: Long?): Date? {
        return value?.let { Date(it) }
    }
    
    @TypeConverter
    fun dateToTimestamp(date: Date?): Long? {
        return date?.time
    }
}
\`\`\`

## 数据库迁移

\`\`\`kotlin
val MIGRATION_1_2 = object : Migration(1, 2) {
    override fun migrate(database: SupportSQLiteDatabase) {
        database.execSQL(
            "ALTER TABLE users ADD COLUMN phone TEXT DEFAULT NULL"
        )
    }
}

val MIGRATION_2_3 = object : Migration(2, 3) {
    override fun migrate(database: SupportSQLiteDatabase) {
        // 创建新表
        database.execSQL(
            """CREATE TABLE users_new (
                id TEXT PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                avatar_url TEXT
            )"""
        )
        // 迁移数据
        database.execSQL(
            """INSERT INTO users_new (id, name, email)
               SELECT id, name, email FROM users"""
        )
        // 删除旧表
        database.execSQL("DROP TABLE users")
        // 重命名新表
        database.execSQL("ALTER TABLE users_new RENAME TO users")
    }
}
\`\`\`

## Repository 集成

\`\`\`kotlin
class UserRepositoryImpl(
    private val userDao: UserDao,
    private val apiService: ApiService
) : UserRepository {
    
    override fun getUsers(): Flow<List<User>> {
        return userDao.getAllUsersFlow()
            .map { entities ->
                entities.map { it.toDomain() }
            }
    }
    
    override suspend fun refreshUsers() {
        val remoteUsers = apiService.getUsers()
        userDao.insertUsers(remoteUsers.map { it.toEntity() })
    }
    
    override suspend fun getUser(id: String): User? {
        return userDao.getUser(id)?.toDomain()
    }
}
\`\`\`

## 性能优化

### 1. 使用事务批量操作

\`\`\`kotlin
@Dao
interface UserDao {
    @Transaction
    suspend fun replaceAll(users: List<UserEntity>) {
        deleteAll()
        insertAll(users)
    }
}
\`\`\`

### 2. 索引优化

\`\`\`kotlin
@Entity(
    tableName = "messages",
    indices = [
        Index(value = ["conversation_id", "timestamp"]),
        Index(value = ["sender_id"])
    ]
)
data class MessageEntity(...)
\`\`\`

### 3. 预编译 SQL

\`\`\`kotlin
@Query("SELECT * FROM users WHERE age > :minAge")
suspend fun getUsersAboveAge(minAge: Int): List<UserEntity>
\`\`\`

## 测试

\`\`\`kotlin
@RunWith(AndroidJUnit4::class)
class UserDaoTest {
    private lateinit var database: AppDatabase
    private lateinit var userDao: UserDao
    
    @Before
    fun createDb() {
        database = Room.inMemoryDatabaseBuilder(
            ApplicationProvider.getApplicationContext(),
            AppDatabase::class.java
        ).build()
        userDao = database.userDao()
    }
    
    @After
    @Throws(IOException::class)
    fun closeDb() {
        database.close()
    }
    
    @Test
    fun insertAndGetUser() = runTest {
        val user = UserEntity("1", "John", "john@example.com")
        userDao.insertUser(user)
        
        val loaded = userDao.getUser("1")
        assertEquals(loaded?.name, "John")
    }
}
\`\`\`

## 总结

Room 提供了：

- ✅ **类型安全**：编译期 SQL 检查
- ✅ **减少样板代码**：自动生成实现
- ✅ **响应式支持**：Flow 集成
- ✅ **迁移支持**：版本升级自动化
- ✅ **测试友好**：内存数据库支持

Room 是 Android 本地数据持久化的首选方案。
`,Em=`---
title: TypeScript 高级技巧与模式
date: 2026-06-15
tags: [typescript, tips, type-system]
description: 掌握 TypeScript 的高级类型系统技巧，包括泛型、条件类型、映射类型等实用模式，提升代码的类型安全性。
---

# TypeScript 高级技巧与模式

TypeScript 的类型系统非常强大，掌握高级技巧可以让我们的代码更加健壮和可维护。

## 泛型深入

### 基础泛型

\`\`\`typescript
// 简单泛型函数
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>('hello');
\`\`\`

### 泛型约束

\`\`\`typescript
// 约束 T 必须有 length 属性
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('hello');     // ✅ string 有 length
logLength([1, 2, 3]);   // ✅ array 有 length
logLength(42);          // ❌ number 没有 length
\`\`\`

### 泛型默认值

\`\`\`typescript
interface FetchOptions<T = unknown> {
  url: string;
  method?: 'GET' | 'POST';
  transform?: (data: unknown) => T;
}

// 使用默认类型
const options: FetchOptions = {
  url: '/api/users',
};

// 指定类型
const userOptions: FetchOptions<User> = {
  url: '/api/users',
  transform: (data) => data as User,
};
\`\`\`

## 条件类型

### 基础条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // true
type B = IsString<42>;       // false
\`\`\`

### 实用条件类型

\`\`\`typescript
// 提取 Promise 的返回值
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

type PromiseString = Promise<string>;
type Result = UnwrapPromise<PromiseString>; // string

// 提取数组元素类型
type ElementType<T> = T extends (infer E)[] ? E : T;

type Numbers = number[];
type Num = ElementType<Numbers>; // number
\`\`\`

## 映射类型

### 基础映射

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email: string;
}

// 将所有属性变为可选
type PartialUser = {
  [K in keyof User]?: User[K];
};

// 将所有属性变为只读
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// 将所有属性变为可为 null
type NullableUser = {
  [K in keyof User]: User[K] | null;
};
\`\`\`

### 内置映射类型

\`\`\`typescript
// Partial<T> - 所有属性可选
interface Config {
  host: string;
  port: number;
}

const partialConfig: Partial<Config> = {
  host: 'localhost',
};

// Required<T> - 所有属性必需
interface OptionalConfig {
  host?: string;
  port?: number;
}

const requiredConfig: Required<OptionalConfig> = {
  host: 'localhost',
  port: 3000,
};

// Pick<T, K> - 选择部分属性
type ConfigHost = Pick<Config, 'host'>;

// Omit<T, K> - 排除部分属性
type ConfigWithoutPort = Omit<Config, 'port'>;

// Record<K, V> - 创建键值对类型
const users: Record<string, User> = {};
\`\`\`

## 类型推断

### infer 关键字

\`\`\`typescript
// 提取函数返回类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 1, name: 'John' };
}

type UserType = ReturnType<typeof getUser>;
// { id: number; name: string; }

// 提取函数参数类型
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

function updateUser(id: number, data: Partial<User>) {}

type UpdateUserParams = Parameters<typeof updateUser>;
// [number, Partial<User>]
\`\`\`

## 实用类型模式

### 品牌类型（Branded Types）

\`\`\`typescript
// 创建不可互换的类型
type UserId = string & { __brand: 'UserId' };
type PostId = string & { __brand: 'PostId' };

function createUserId(id: string): UserId {
  return id as UserId;
}

function createPostId(id: string): PostId {
  return id as PostId;
}

const userId = createUserId('user-1');
const postId = createPostId('post-1');

// 类型安全检查
function findUser(id: UserId) { /* ... */ }

findUser(userId);  // ✅
findUser(postId);  // ❌ 编译错误
\`\`\`

### 模板字面量类型

\`\`\`typescript
// 创建事件名称
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ClickEvent = EventName<'click'>;     // 'onClick'
type HoverEvent = EventName<'mouseOver'>; // 'onMouseOver'

// CSS 属性类型
type MarginProperty = \`margin\${'' | 'Top' | 'Right' | 'Bottom' | 'Left'}\`;
// 'margin' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
\`\`\`

## 类型守卫

### 自定义类型守卫

\`\`\`typescript
interface Cat {
  type: 'cat';
  meow(): void;
}

interface Dog {
  type: 'dog';
  bark(): void;
}

type Animal = Cat | Dog;

// 类型守卫函数
function isCat(animal: Animal): animal is Cat {
  return animal.type === 'cat';
}

function makeSound(animal: Animal) {
  if (isCat(animal)) {
    animal.meow(); // TypeScript 知道这是 Cat
  } else {
    animal.bark(); // TypeScript 知道这是 Dog
  }
}
\`\`\`

### 判别联合类型

\`\`\`typescript
interface LoadingState {
  status: 'loading';
}

interface SuccessState {
  status: 'success';
  data: User;
}

interface ErrorState {
  status: 'error';
  error: string;
}

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return state.data.name; // TypeScript 知道有 data
    case 'error':
      return state.error;     // TypeScript 知道有 error
  }
}
\`\`\`

## 类型工具函数

### DeepPartial

\`\`\`typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface Company {
  name: string;
  address: {
    street: string;
    city: string;
  };
}

const partialCompany: DeepPartial<Company> = {
  address: {
    city: 'New York',
  },
};
\`\`\`

### NonNullable

\`\`\`typescript
// 移除 null 和 undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // string

// 过滤数组中的 null
function filterNonNull<T>(arr: (T | null)[]): T[] {
  return arr.filter((item): item is T => item !== null);
}
\`\`\`

## 总结

TypeScript 高级类型技巧：

| 技巧 | 用途 | 示例 |
|------|------|------|
| 泛型 | 代码复用 | \`identity<T>(arg: T): T\` |
| 条件类型 | 类型选择 | \`T extends U ? X : Y\` |
| 映射类型 | 批量转换 | \`{ [K in keyof T]: T[K] }\` |
| infer | 类型推断 | \`infer R\` |
| 类型守卫 | 类型收窄 | \`animal is Cat\` |
| 模板字面量 | 字符串操作 | \`\` \`on\${Capitalize<T>}\` \`\` |

掌握这些技巧，可以让你的 TypeScript 代码更加类型安全和可维护。
`,bm=`---
title: UseCase 与领域层设计
date: 2026-06-08
tags: [android, usecase, clean-architecture, domain]
description: 深入理解 UseCase 的单一职责原则、组合复用、异常处理策略，以及在 Android 项目中的最佳实践。
---

# UseCase 与领域层设计

UseCase（用例）是 Clean Architecture 领域层的核心组件，封装单一业务操作，代表系统的一个具体功能。

## 为什么需要 UseCase

\`\`\`kotlin
// 不使用 UseCase：业务逻辑分散在 ViewModel
class BadViewModel(private val repository: UserRepository) : ViewModel() {
    fun loadUser(id: String) {
        viewModelScope.launch {
            _state.value = Loading
            try {
                val user = repository.getUser(id)
                if (user.isActive && user.hasPermission("read")) {
                    _state.value = Success(user)
                } else {
                    _state.value = Error("Access denied")
                }
            } catch (e: Exception) {
                _state.value = Error(e.message)
            }
        }
    }
}

// 使用 UseCase：业务逻辑集中封装
class GoodViewModel(
    private val getUserUseCase: GetUserUseCase
) : ViewModel() {
    fun loadUser(id: String) {
        viewModelScope.launch {
            getUserUseCase(id)
                .onSuccess { _state.value = Success(it) }
                .onFailure { _state.value = Error(it.message) }
        }
    }
}
\`\`\`

## 基础 UseCase

### 通用模式

\`\`\`kotlin
abstract class UseCase<in P, R> {
    suspend operator fun invoke(params: P): Result<R> {
        return try {
            Result.success(execute(params))
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    protected abstract suspend fun execute(params: P): R
}

// 无参数的 UseCase
abstract class NoParamsUseCase<R> : UseCase<Unit, R>() {
    suspend operator fun invoke(): Result<R> = invoke(Unit)
}
\`\`\`

### 具体实现

\`\`\`kotlin
class GetUserUseCase(
    private val userRepository: UserRepository,
    private val authRepository: AuthRepository
) : UseCase<String, User>() {
    
    override suspend fun execute(userId: String): User {
        // 1. 检查当前用户权限
        val currentUser = authRepository.getCurrentUser()
        require(currentUser != null) { "Not authenticated" }
        require(currentUser.hasPermission("read:user")) { "Permission denied" }
        
        // 2. 获取目标用户
        val user = userRepository.getUser(userId)
        
        // 3. 业务规则验证
        require(user.isActive) { "User is not active" }
        
        // 4. 记录审计日志
        auditLogRepository.log("VIEW_USER", currentUser.id, userId)
        
        return user
    }
}

class UpdateUserProfileUseCase(
    private val userRepository: UserRepository,
    private val validationService: ValidationService
) : UseCase<UpdateProfileParams, User>() {
    
    override suspend fun execute(params: UpdateProfileParams): User {
        // 1. 验证输入
        validationService.validateUsername(params.username)
        validationService.validateEmail(params.email)
        
        // 2. 检查用户名唯一性
        if (params.usernameChanged) {
            val existing = userRepository.findByUsername(params.username)
            require(existing == null) { "Username already taken" }
        }
        
        // 3. 更新用户
        val updated = userRepository.getUser(params.id).copy(
            username = params.username,
            email = params.email,
            bio = params.bio,
            updatedAt = System.currentTimeMillis()
        )
        
        return userRepository.saveUser(updated)
    }
}

data class UpdateProfileParams(
    val id: String,
    val username: String,
    val email: String,
    val bio: String,
    val usernameChanged: Boolean
)
\`\`\`

## UseCase 组合

### 顺序执行

\`\`\`kotlin
class PlaceOrderUseCase(
    private val validateCart: ValidateCartUseCase,
    private val calculateTotal: CalculateTotalUseCase,
    private val processPayment: ProcessPaymentUseCase,
    private val createOrder: CreateOrderUseCase,
    private val sendConfirmation: SendConfirmationUseCase
) : UseCase<Cart, Order>() {
    
    override suspend fun execute(cart: Cart): Order {
        // 1. 验证购物车
        validateCart(cart).getOrThrow()
        
        // 2. 计算总价
        val total = calculateTotal(cart).getOrThrow()
        
        // 3. 处理支付
        val payment = processPayment(
            ProcessPaymentParams(cart.userId, total)
        ).getOrThrow()
        
        // 4. 创建订单
        val order = createOrder(
            CreateOrderParams(cart, payment)
        ).getOrThrow()
        
        // 5. 发送确认（不阻塞）
        CoroutineScope(Dispatchers.IO).launch {
            sendConfirmation(order)
        }
        
        return order
    }
}
\`\`\`

### 并行执行

\`\`\`kotlin
class LoadDashboardUseCase(
    private val getUserProfile: GetUserProfileUseCase,
    private val getRecentOrders: GetRecentOrdersUseCase,
    private val getNotifications: GetNotificationsUseCase,
    private val getRecommendations: GetRecommendationsUseCase
) : NoParamsUseCase<Dashboard>() {
    
    override suspend fun execute(params: Unit): Dashboard {
        // 并行获取数据
        val (profile, orders, notifications, recommendations) = coroutineScope {
            val profileDeferred = async { getUserProfile().getOrThrow() }
            val ordersDeferred = async { getRecentOrders().getOrThrow() }
            val notificationsDeferred = async { getNotifications().getOrThrow() }
            val recommendationsDeferred = async { getRecommendations().getOrThrow() }
            
            awaitAll(
                profileDeferred,
                ordersDeferred,
                notificationsDeferred,
                recommendationsDeferred
            )
        }
        
        return Dashboard(
            profile = profile as UserProfile,
            recentOrders = orders as List<Order>,
            notifications = notifications as List<Notification>,
            recommendations = recommendations as List<Product>
        )
    }
}
\`\`\`

## 异常处理策略

\`\`\`kotlin
sealed class DomainException(message: String) : Exception(message) {
    class NotFound(message: String) : DomainException(message)
    class Unauthorized(message: String) : DomainException(message)
    class ValidationFailed(message: String) : DomainException(message)
    class NetworkError(message: String) : DomainException(message)
}

class DomainResult<out T> {
    data class Success<T>(val data: T) : DomainResult<T>()
    data class Error(val exception: DomainException) : DomainResult<Nothing>()
}

abstract class UseCase<in P, R> {
    suspend operator fun invoke(params: P): DomainResult<R> {
        return try {
            DomainResult.Success(execute(params))
        } catch (e: DomainException) {
            DomainResult.Error(e)
        } catch (e: IOException) {
            DomainResult.Error(DomainException.NetworkError(e.message ?: "Network error"))
        } catch (e: Exception) {
            DomainResult.Error(DomainException.Unknown(e.message ?: "Unknown error"))
        }
    }
    
    protected abstract suspend fun execute(params: P): R
}
\`\`\`

## 在 ViewModel 中使用

\`\`\`kotlin
class OrderViewModel @Inject constructor(
    private val placeOrder: PlaceOrderUseCase,
    private val loadDashboard: LoadDashboardUseCase
) : ViewModel() {
    
    private val _uiState = MutableStateFlow<OrderUiState>(OrderUiState.Idle)
    val uiState: StateFlow<OrderUiState> = _uiState.asStateFlow()
    
    fun placeOrder(cart: Cart) {
        viewModelScope.launch {
            _uiState.value = OrderUiState.Loading
            
            placeOrder(cart)
                .onSuccess { order ->
                    _uiState.value = OrderUiState.Success(order)
                }
                .onFailure { error ->
                    _uiState.value = when (error) {
                        is DomainException.ValidationFailed -> 
                            OrderUiState.ValidationError(error.message)
                        is DomainException.NetworkError -> 
                            OrderUiState.NetworkError(error.message)
                        else -> 
                            OrderUiState.Error(error.message)
                    }
                }
        }
    }
    
    fun loadDashboard() {
        viewModelScope.launch {
            loadDashboard()
                .onSuccess { dashboard ->
                    _uiState.value = OrderUiState.DashboardLoaded(dashboard)
                }
        }
    }
}
\`\`\`

## 测试

\`\`\`kotlin
class GetUserUseCaseTest {
    private lateinit var getUser: GetUserUseCase
    private lateinit var userRepository: FakeUserRepository
    private lateinit var authRepository: FakeAuthRepository
    
    @Before
    fun setup() {
        userRepository = FakeUserRepository()
        authRepository = FakeAuthRepository()
        getUser = GetUserUseCase(userRepository, authRepository)
    }
    
    @Test
    fun \`invoke returns user when authorized\`() = runTest {
        // Given
        val currentUser = User("1", "Admin", permissions = listOf("read:user"))
        val targetUser = User("2", "John")
        authRepository.setCurrentUser(currentUser)
        userRepository.addUser(targetUser)
        
        // When
        val result = getUser("2")
        
        // Then
        assertTrue(result.isSuccess)
        assertEquals(targetUser, result.getOrNull())
    }
    
    @Test
    fun \`invoke fails when not authenticated\`() = runTest {
        // Given
        authRepository.setCurrentUser(null)
        
        // When
        val result = getUser("1")
        
        // Then
        assertTrue(result.isFailure)
        assertTrue(result.exceptionOrNull() is DomainException.Unauthorized)
    }
}
\`\`\`

## 总结

UseCase 设计的核心原则：

- ✅ **单一职责**：每个 UseCase 只做一件事
- ✅ **可组合**：通过组合实现复杂业务
- ✅ **可测试**：业务逻辑独立，易于单元测试
- ✅ **异常明确**：定义清晰的领域异常
- ✅ **可复用**：在不同 ViewModel 中复用

UseCase 是 Clean Architecture 中连接 ViewModel 和 Repository 的关键层。
`,Cm=`---
title: Vite 构建优化实战
date: 2026-06-18
tags: [vite, build, performance]
description: 深入探索 Vite 构建工具的性能优化技巧，包括代码分割、懒加载、缓存策略等高级配置。
---

# Vite 构建优化实战

Vite 是一个现代化的前端构建工具，以其快速的开发服务器和优化的生产构建而闻名。

## 为什么选 Vite

### 开发体验

\`\`\`bash
# 传统工具（Webpack）
npm run dev  # 等待 10-30 秒

# Vite
npm run dev  # 瞬间启动
\`\`\`

Vite 利用原生 ES Modules，避免了打包过程：

\`\`\`html
<!-- 浏览器直接请求模块 -->
<script type="module">
  import { createApp } from '/node_modules/.vite/deps/vue.js';
<\/script>
\`\`\`

## 基础配置优化

### 路径别名

\`\`\`typescript
// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
\`\`\`

### 环境变量

\`\`\`typescript
// .env.development
VITE_API_URL=http://localhost:3000

// .env.production
VITE_API_URL=https://api.example.com

// 代码中使用
const apiUrl = import.meta.env.VITE_API_URL;
\`\`\`

## 代码分割策略

### 动态导入

\`\`\`typescript
// ❌ 静态导入：所有代码打包在一起
import HeavyComponent from './HeavyComponent';

// ✅ 动态导入：按需加载
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

### 手动分块

\`\`\`typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 React 相关库打包在一起
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // 将 UI 库打包在一起
          'ui-vendor': ['@mui/material', '@emotion/react'],
          
          // 将工具库打包在一起
          'utils-vendor': ['lodash', 'moment', 'axios'],
        },
      },
    },
  },
});
\`\`\`

## 生产构建优化

### 压缩配置

\`\`\`typescript
// vite.config.ts
export default defineConfig({
  build: {
    // 开启源码映射（生产环境建议关闭）
    sourcemap: false,
    
    // 压缩选项
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // 移除 console
        drop_debugger: true, // 移除 debugger
      },
    },
    
    // 资源内联阈值
    assetsInlineLimit: 4096, // 4KB 以下资源内联为 base64
  },
});
\`\`\`

### CSS 优化

\`\`\`typescript
// vite.config.ts
export default defineConfig({
  build: {
    cssCodeSplit: true,  // CSS 代码分割
    cssMinify: true,     // CSS 压缩
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@use "@/styles/variables.scss" as *;\`,
      },
    },
  },
});
\`\`\`

## 缓存策略

### 文件哈希

Vite 自动为构建产物添加内容哈希：

\`\`\`
dist/
├── assets/
│   ├── index-a1b2c3d4.js      # 内容变化，哈希变化
│   ├── vendor-e5f6g7h8.js     # 第三方库
│   └── style-i9j0k1l2.css     # 样式文件
└── index.html
\`\`\`

### 长期缓存

\`\`\`nginx
# Nginx 配置
location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location / {
    expires -1;
    add_header Cache-Control "no-cache";
}
\`\`\`

## 插件生态

### 常用插件

\`\`\`typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    
    // 打包分析
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    
    // Gzip 压缩
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    
    // Brotli 压缩
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
});
\`\`\`

### 图片优化

\`\`\`typescript
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
  ],
});
\`\`\`

## 性能监控

### 构建分析

\`\`\`bash
# 分析打包大小
npm run build -- --mode analyze

# 使用 rollup-plugin-visualizer
npx vite-bundle-visualizer
\`\`\`

### 性能指标

\`\`\`typescript
// 测量构建时间
const start = Date.now();
await build(config);
console.log(\`Build completed in \${Date.now() - start}ms\`);

// 测量页面加载性能
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(\`\${entry.name}: \${entry.duration}ms\`);
  }
}).observe({ entryTypes: ['measure'] });
\`\`\`

## 总结

Vite 优化 checklist：

- ✅ 使用动态导入实现代码分割
- ✅ 配置手动分块策略
- ✅ 开启代码压缩和 CSS 优化
- ✅ 使用文件哈希实现长期缓存
- ✅ 添加 Gzip/Brotli 压缩
- ✅ 优化图片资源
- ✅ 配置路径别名
- ✅ 移除生产环境调试代码

通过合理配置，Vite 可以构建出高性能的生产环境应用。
`;function eS(e){const n=/^---\s*\n([\s\S]*?)\n---\s*\n/,t=e.match(n);if(!t)return{data:{},content:e};const r=t[1],i=e.slice(t[0].length),a={},o=r.split(`
`);for(const s of o){const l=s.indexOf(":");if(l===-1)continue;const u=s.slice(0,l).trim();let d=s.slice(l+1).trim();if(d.startsWith("[")&&d.endsWith("]")){d=d.slice(1,-1);const f=d.split(",").map(g=>g.trim().replace(/^['"]|['"]$/g,""));u==="tags"&&(a.tags=f)}else d=d.replace(/^['"]|['"]$/g,""),u==="title"?a.title=d:u==="date"?a.date=d:u==="description"&&(a.description=d)}return{data:a,content:i}}function nS(e,n=200){const t=e.replace(/```[\s\S]*?```/g,"").replace(/`[^`]*`/g,"").replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[#*_~>`]/g,"").replace(/\s+/g," ").trim(),r=t.match(/[a-zA-Z]+/g)||[],i=t.match(/[\u4e00-\u9fa5]/g)||[],a=r.length+i.length,o=Math.ceil(a/n);return{text:`${o} min read`,time:o,words:a}}function Tm(e){const{data:n,content:t}=eS(e),r=nS(t);return{meta:{title:n.title||"Untitled",date:n.date||new Date().toISOString().split("T")[0],tags:n.tags||[],description:n.description||"",readingTime:r.text},content:t}}const tS=Object.assign({"../content/bitmap-tensor.md":im,"../content/camerax-development.md":am,"../content/clean-architecture.md":om,"../content/datastore-preferences.md":lm,"../content/git-workflow.md":sm,"../content/github-pages-deploy.md":um,"../content/gradle-build.md":cm,"../content/hilt-di.md":dm,"../content/jetpack-compose.md":pm,"../content/json-parsing.md":fm,"../content/kotlin-basics.md":mm,"../content/kotlin-coroutines.md":gm,"../content/kotlin-flow.md":hm,"../content/mvvm-architecture.md":vm,"../content/navigation-compose.md":ym,"../content/onnx-runtime.md":Sm,"../content/react-hooks-guide.md":xm,"../content/repository-pattern.md":km,"../content/room-database.md":wm,"../content/typescript-tips.md":Em,"../content/usecase-design.md":bm,"../content/vite-optimization.md":Cm});function rS(){return Object.entries(tS).map(([n,t])=>{var a;const{meta:r}=Tm(t);return{slug:((a=n.split("/").pop())==null?void 0:a.replace(".md",""))||"",meta:r,content:t}}).sort((n,t)=>+new Date(t.meta.date)-+new Date(n.meta.date))}function iS(){const e=rS();return E.jsxs("div",{className:"py-12",children:[E.jsx("h1",{className:"text-3xl font-bold text-black mb-6",children:"Blog"}),E.jsx("p",{className:"text-gray-600 mb-8",children:"Thoughts on frontend engineering, architecture, and development."}),E.jsx("div",{className:"space-y-6",children:e.map(n=>E.jsx(br,{to:`/blog/${n.slug}`,className:"block group",children:E.jsx(Pi,{className:"transition-all duration-200 group-hover:border-black",children:E.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-4",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("h2",{className:"text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors",children:n.meta.title}),E.jsx("p",{className:"text-gray-600 mb-3 line-clamp-2",children:n.meta.description}),E.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-gray-500",children:[E.jsx("span",{children:n.meta.date}),E.jsx("span",{children:"·"}),E.jsx("span",{children:n.meta.readingTime})]})]}),n.meta.tags.length>0&&E.jsx("div",{className:"flex flex-wrap gap-2",children:n.meta.tags.map(t=>E.jsx("span",{className:"px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full",children:t},t))})]})})},n.slug))}),e.length===0&&E.jsx("div",{className:"text-center py-12",children:E.jsx("p",{className:"text-gray-500",children:"No posts yet. Check back soon!"})})]})}function fu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jt=fu();function _m(e){jt=e}var Ct={exec:()=>null};function Jt(e){let n=[];return t=>{let r=Math.max(0,Math.min(3,t-1)),i=n[r];return i||(i=e(r),n[r]=i),i}}function H(e,n=""){let t=typeof e=="string"?e:e.source,r={replace:(i,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(Ie.caret,"$1"),t=t.replace(i,o),r},getRegex:()=>new RegExp(t,n)};return r}var aS=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),Ie={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Jt(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Jt(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Jt(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Jt(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Jt(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Jt(e=>new RegExp(`^ {0,${e}}>`))},oS=/^(?:[ \t]*(?:\n|$))+/,lS=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,sS=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ni=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,uS=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,mu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Am=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Rm=H(Am).replace(/bull/g,mu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),cS=H(Am).replace(/bull/g,mu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),gu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,dS=/^[^\n]+/,hu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,pS=H(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",hu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),fS=H(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,mu).getRegex(),vo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,mS=H("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vu).replace("tag",vo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Um=H(gu).replace("hr",Ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",vo).getRegex(),gS=H(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Um).getRegex(),yu={blockquote:gS,code:lS,def:pS,fences:sS,heading:uS,hr:Ni,html:mS,lheading:Rm,list:fS,newline:oS,paragraph:Um,table:Ct,text:dS},cd=H("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",vo).getRegex(),hS={...yu,lheading:cS,table:cd,paragraph:H(gu).replace("hr",Ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",cd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",vo).getRegex()},vS={...yu,html:H(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ct,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:H(gu).replace("hr",Ni).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Rm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},yS=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,SS=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Im=/^( {2,}|\\)\n(?!\s*$)/,xS=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ar=/[\p{P}\p{S}]/u,yo=/[\s\p{P}\p{S}]/u,Su=/[^\s\p{P}\p{S}]/u,kS=H(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,yo).getRegex(),Pm=/(?!~)[\p{P}\p{S}]/u,wS=/(?!~)[\s\p{P}\p{S}]/u,ES=/(?:[^\s\p{P}\p{S}]|~)/u,bS=H(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",aS?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Nm=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,CS=H(Nm,"u").replace(/punct/g,Ar).getRegex(),TS=H(Nm,"u").replace(/punct/g,Pm).getRegex(),Om="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_S=H(Om,"gu").replace(/notPunctSpace/g,Su).replace(/punctSpace/g,yo).replace(/punct/g,Ar).getRegex(),AS=H(Om,"gu").replace(/notPunctSpace/g,ES).replace(/punctSpace/g,wS).replace(/punct/g,Pm).getRegex(),RS=H("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Su).replace(/punctSpace/g,yo).replace(/punct/g,Ar).getRegex(),US=H(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Ar).getRegex(),IS="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",PS=H(IS,"gu").replace(/notPunctSpace/g,Su).replace(/punctSpace/g,yo).replace(/punct/g,Ar).getRegex(),NS=H(/\\(punct)/,"gu").replace(/punct/g,Ar).getRegex(),OS=H(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),DS=H(vu).replace("(?:-->|$)","-->").getRegex(),FS=H("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",DS).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Xa=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,LS=H(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Xa).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Dm=H(/^!?\[(label)\]\[(ref)\]/).replace("label",Xa).replace("ref",hu).getRegex(),Fm=H(/^!?\[(ref)\](?:\[\])?/).replace("ref",hu).getRegex(),MS=H("reflink|nolink(?!\\()","g").replace("reflink",Dm).replace("nolink",Fm).getRegex(),dd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,xu={_backpedal:Ct,anyPunctuation:NS,autolink:OS,blockSkip:bS,br:Im,code:SS,del:Ct,delLDelim:Ct,delRDelim:Ct,emStrongLDelim:CS,emStrongRDelimAst:_S,emStrongRDelimUnd:RS,escape:yS,link:LS,nolink:Fm,punctuation:kS,reflink:Dm,reflinkSearch:MS,tag:FS,text:xS,url:Ct},$S={...xu,link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",Xa).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Xa).getRegex()},ps={...xu,emStrongRDelimAst:AS,emStrongLDelim:TS,delLDelim:US,delRDelim:PS,url:H(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",dd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:H(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",dd).getRegex()},zS={...ps,br:H(Im).replace("{2,}","*").getRegex(),text:H(ps.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},oa={normal:yu,gfm:hS,pedantic:vS},jr={normal:xu,gfm:ps,breaks:zS,pedantic:$S},jS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pd=e=>jS[e];function wn(e,n){if(n){if(Ie.escapeTest.test(e))return e.replace(Ie.escapeReplace,pd)}else if(Ie.escapeTestNoEncode.test(e))return e.replace(Ie.escapeReplaceNoEncode,pd);return e}function fd(e){try{e=encodeURI(e).replace(Ie.percentDecode,"%")}catch{return null}return e}function md(e,n){var a;let t=e.replace(Ie.findPipe,(o,s,l)=>{let u=!1,d=s;for(;--d>=0&&l[d]==="\\";)u=!u;return u?"|":" |"}),r=t.split(Ie.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!((a=r.at(-1))!=null&&a.trim())&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(Ie.slashPipe,"|");return r}function Kn(e,n,t){let r=e.length;if(r===0)return"";let i=0;for(;i<r&&e.charAt(r-i-1)===n;)i++;return e.slice(0,r-i)}function gd(e){let n=e.split(`
`),t=n.length-1;for(;t>=0&&Ie.blankLine.test(n[t]);)t--;return n.length-t<=2?e:n.slice(0,t+1).join(`
`)}function BS(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return t>0?-2:-1}function HS(e,n=0){let t=n,r="";for(let i of e)if(i==="	"){let a=4-t%4;r+=" ".repeat(a),t+=a}else r+=i,t++;return r}function hd(e,n,t,r,i){let a=n.href,o=n.title||null,s=e[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:t,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,l}function VS(e,n,t){let r=e.match(t.other.indentCodeCompensation);if(r===null)return n;let i=r[1];return n.split(`
`).map(a=>{let o=a.match(t.other.beginningSpace);if(o===null)return a;let[s]=o;return s.length>=i.length?a.slice(i.length):a}).join(`
`)}var Ja=class{constructor(e){X(this,"options");X(this,"rules");X(this,"lexer");this.options=e||jt}space(e){let n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){let n=this.rules.block.code.exec(e);if(n){let t=this.options.pedantic?n[0]:gd(n[0]),r=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:r}}}fences(e){let n=this.rules.block.fences.exec(e);if(n){let t=n[0],r=VS(t,n[3]||"",this.rules);return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:r}}}heading(e){let n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(this.rules.other.endingHash.test(t)){let r=Kn(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:Kn(n[0],`
`),depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){let n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Kn(n[0],`
`)}}blockquote(e){let n=this.rules.block.blockquote.exec(e);if(n){let t=Kn(n[0],`
`).split(`
`),r="",i="",a=[];for(;t.length>0;){let o=!1,s=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))s.push(t[l]),o=!0;else if(!o)s.push(t[l]);else break;t=t.slice(l);let u=s.join(`
`),d=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,i=i?`${i}
${d}`:d;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,a,!0),this.lexer.state.top=f,t.length===0)break;let g=a.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){let w=g,y=w.raw+`
`+t.join(`
`),b=this.blockquote(y);a[a.length-1]=b,r=r.substring(0,r.length-w.raw.length)+b.raw,i=i.substring(0,i.length-w.text.length)+b.text;break}else if((g==null?void 0:g.type)==="list"){let w=g,y=w.raw+`
`+t.join(`
`),b=this.list(y);a[a.length-1]=b,r=r.substring(0,r.length-g.raw.length)+b.raw,i=i.substring(0,i.length-w.raw.length)+b.raw,t=y.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:a,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim(),r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");let a=this.rules.other.listItemRegex(t),o=!1;for(;e;){let l=!1,u="",d="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;u=n[0],e=e.substring(u.length);let f=HS(n[2].split(`
`,1)[0],n[1].length),g=e.split(`
`,1)[0],w=!f.trim(),y=0;if(this.options.pedantic?(y=2,d=f.trimStart()):w?y=n[1].length+1:(y=f.search(this.rules.other.nonSpaceChar),y=y>4?1:y,d=f.slice(y),y+=n[1].length),w&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,e=e.substring(g.length+1),l=!0),!l){let b=this.rules.other.nextBulletRegex(y),C=this.rules.other.hrRegex(y),h=this.rules.other.fencesBeginRegex(y),c=this.rules.other.headingBeginRegex(y),p=this.rules.other.htmlBeginRegex(y),v=this.rules.other.blockquoteBeginRegex(y);for(;e;){let S=e.split(`
`,1)[0],k;if(g=S,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),k=g):k=g.replace(this.rules.other.tabCharGlobal,"    "),h.test(g)||c.test(g)||p.test(g)||v.test(g)||b.test(g)||C.test(g))break;if(k.search(this.rules.other.nonSpaceChar)>=y||!g.trim())d+=`
`+k.slice(y);else{if(w||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||h.test(f)||c.test(f)||C.test(f))break;d+=`
`+g}w=!g.trim(),u+=S+`
`,e=e.substring(S.length+1),f=k.slice(y)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=u}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let u=l.tokens[0];if(l.task&&((u==null?void 0:u.type)==="text"||(u==null?void 0:u.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let d=this.rules.other.listTaskCheckbox.exec(l.raw);if(d){let f={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};l.checked=f.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}else l.task&&(l.task=!1);if(!i.loose){let d=l.tokens.filter(g=>g.type==="space"),f=d.length>0&&d.some(g=>this.rules.other.anyLine.test(g.raw));i.loose=f}}if(i.loose)for(let l of i.items){l.loose=!0;for(let u of l.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let n=this.rules.block.html.exec(e);if(n){let t=gd(n[0]);return{type:"html",block:!0,raw:t,pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:t}}}def(e){let n=this.rules.block.def.exec(e);if(n){let t=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:Kn(n[0],`
`),href:r,title:i}}}table(e){var o;let n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let t=md(n[1]),r=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(o=n[3])!=null&&o.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:Kn(n[0],`
`),header:[],align:[],rows:[]};if(t.length===r.length){for(let s of r)this.rules.other.tableAlignRight.test(s)?a.align.push("right"):this.rules.other.tableAlignCenter.test(s)?a.align.push("center"):this.rules.other.tableAlignLeft.test(s)?a.align.push("left"):a.align.push(null);for(let s=0;s<t.length;s++)a.header.push({text:t[s],tokens:this.lexer.inline(t[s]),header:!0,align:a.align[s]});for(let s of i)a.rows.push(md(s,a.header.length).map((l,u)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[u]})));return a}}lheading(e){let n=this.rules.block.lheading.exec(e);if(n){let t=n[1].trim();return{type:"heading",raw:Kn(n[0],`
`),depth:n[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(e){let n=this.rules.block.paragraph.exec(e);if(n){let t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){let n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){let n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){let n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){let n=this.rules.inline.link.exec(e);if(n){let t=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let a=Kn(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{let a=BS(n[2],"()");if(a===-2)return;if(a>-1){let o=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,o).trim(),n[3]=""}}let r=n[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],i=a[3])}else i=n[3]?n[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),hd(n,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=n[r.toLowerCase()];if(!i){let a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return hd(t,i,t[0],this.lexer,this.rules)}}emStrong(e,n,t=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,a,o,s=i,l=0,u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,n=n.slice(-1*e.length+i);(r=u.exec(n))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){l+=o;continue}if(s-=o,s>0)continue;o=Math.min(o,o+s+l);let d=[...r[0]][0].length,f=e.slice(0,i+r.index+d+o);if(Math.min(i,o)%2){let w=f.slice(1,-1);return{type:"em",raw:f,text:w,tokens:this.lexer.inlineTokens(w)}}let g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){let n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:n[0],text:t}}}br(e){let n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e,n,t=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,a,o,s=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,n=n.slice(-1*e.length+i);(r=l.exec(n))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a||(o=[...a].length,o!==i))continue;if(r[3]||r[4]){s+=o;continue}if(s-=o,s>0)continue;o=Math.min(o,o+s);let u=[...r[0]][0].length,d=e.slice(0,i+r.index+u+o),f=d.slice(i,-i);return{type:"del",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let n=this.rules.inline.autolink.exec(e);if(n){let t,r;return n[2]==="@"?(t=n[1],r="mailto:"+t):(t=n[1],r=t),{type:"link",raw:n[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let r,i;if(n[2]==="@")r=n[0],i="mailto:"+r;else{let a;do a=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(a!==n[0]);r=n[0],n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let n=this.rules.inline.text.exec(e);if(n){let t=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:t}}}},pn=class fs{constructor(n){X(this,"tokens");X(this,"options");X(this,"state");X(this,"inlineQueue");X(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||jt,this.options.tokenizer=this.options.tokenizer||new Ja,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Ie,block:oa.normal,inline:jr.normal};this.options.pedantic?(t.block=oa.pedantic,t.inline=jr.pedantic):this.options.gfm&&(t.block=oa.gfm,this.options.breaks?t.inline=jr.breaks:t.inline=jr.gfm),this.tokenizer.rules=t}static get rules(){return{block:oa,inline:jr}}static lex(n,t){return new fs(t).lex(n)}static lexInline(n,t){return new fs(t).inlineTokens(n)}lex(n){n=n.replace(Ie.carriageReturn,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){var a,o,s;this.tokenizer.lexer=this,this.options.pedantic&&(n=n.replace(Ie.tabCharGlobal,"    ").replace(Ie.spaceLine,""));let i=1/0;for(;n;){if(n.length<i)i=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}let l;if((o=(a=this.options.extensions)==null?void 0:a.block)!=null&&o.some(d=>(l=d.call({lexer:this},n,t))?(n=n.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.space(n)){n=n.substring(l.raw.length);let d=t.at(-1);l.raw.length===1&&d!==void 0?d.raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(n)){n=n.substring(l.raw.length);let d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.text,this.inlineQueue.at(-1).src=d.text):t.push(l);continue}if(l=this.tokenizer.fences(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(n)){n=n.substring(l.raw.length);let d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},t.push(l));continue}if(l=this.tokenizer.table(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(n)){n=n.substring(l.raw.length),t.push(l);continue}let u=n;if((s=this.options.extensions)!=null&&s.startBlock){let d=1/0,f=n.slice(1),g;this.options.extensions.startBlock.forEach(w=>{g=w.call({lexer:this},f),typeof g=="number"&&g>=0&&(d=Math.min(d,g))}),d<1/0&&d>=0&&(u=n.substring(0,d+1))}if(this.state.top&&(l=this.tokenizer.paragraph(u))){let d=t.at(-1);r&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(l),r=u.length!==n.length,n=n.substring(l.raw.length);continue}if(l=this.tokenizer.text(n)){n=n.substring(l.raw.length);let d=t.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(l);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){var u,d,f,g,w;this.tokenizer.lexer=this;let r=n,i=null;if(this.tokens.links){let y=Object.keys(this.tokens.links);if(y.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!==null;)y.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!==null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!==null;)a=i[2]?i[2].length:0,r=r.slice(0,i.index+a)+"["+"a".repeat(i[0].length-a-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=((d=(u=this.options.hooks)==null?void 0:u.emStrongMask)==null?void 0:d.call({lexer:this},r))??r;let o=!1,s="",l=1/0;for(;n;){if(n.length<l)l=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}o||(s=""),o=!1;let y;if((g=(f=this.options.extensions)==null?void 0:f.inline)!=null&&g.some(C=>(y=C.call({lexer:this},n,t))?(n=n.substring(y.raw.length),t.push(y),!0):!1))continue;if(y=this.tokenizer.escape(n)){n=n.substring(y.raw.length),t.push(y);continue}if(y=this.tokenizer.tag(n)){n=n.substring(y.raw.length),t.push(y);continue}if(y=this.tokenizer.link(n)){n=n.substring(y.raw.length),t.push(y);continue}if(y=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(y.raw.length);let C=t.at(-1);y.type==="text"&&(C==null?void 0:C.type)==="text"?(C.raw+=y.raw,C.text+=y.text):t.push(y);continue}if(y=this.tokenizer.emStrong(n,r,s)){n=n.substring(y.raw.length),t.push(y);continue}if(y=this.tokenizer.codespan(n)){n=n.substring(y.raw.length),t.push(y);continue}if(y=this.tokenizer.br(n)){n=n.substring(y.raw.length),t.push(y);continue}if(y=this.tokenizer.del(n,r,s)){n=n.substring(y.raw.length),t.push(y);continue}if(y=this.tokenizer.autolink(n)){n=n.substring(y.raw.length),t.push(y);continue}if(!this.state.inLink&&(y=this.tokenizer.url(n))){n=n.substring(y.raw.length),t.push(y);continue}let b=n;if((w=this.options.extensions)!=null&&w.startInline){let C=1/0,h=n.slice(1),c;this.options.extensions.startInline.forEach(p=>{c=p.call({lexer:this},h),typeof c=="number"&&c>=0&&(C=Math.min(C,c))}),C<1/0&&C>=0&&(b=n.substring(0,C+1))}if(y=this.tokenizer.inlineText(b)){n=n.substring(y.raw.length),y.raw.slice(-1)!=="_"&&(s=y.raw.slice(-1)),o=!0;let C=t.at(-1);(C==null?void 0:C.type)==="text"?(C.raw+=y.raw,C.text+=y.text):t.push(y);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return t}infiniteLoopError(n){let t="Infinite loop on byte: "+n;if(this.options.silent)console.error(t);else throw new Error(t)}},Ya=class{constructor(e){X(this,"options");X(this,"parser");this.options=e||jt}space(e){return""}code({text:e,lang:n,escaped:t}){var a;let r=(a=(n||"").match(Ie.notSpaceStart))==null?void 0:a[0],i=e.replace(Ie.endingNewline,"")+`
`;return r?'<pre><code class="language-'+wn(r)+'">'+(t?i:wn(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:wn(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){let n=e.ordered,t=e.start,r="";for(let o=0;o<e.items.length;o++){let s=e.items[o];r+=this.listitem(s)}let i=n?"ol":"ul",a=n&&t!==1?' start="'+t+'"':"";return"<"+i+a+`>
`+r+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",t="";for(let i=0;i<e.header.length;i++)t+=this.tablecell(e.header[i]);n+=this.tablerow({text:t});let r="";for(let i=0;i<e.rows.length;i++){let a=e.rows[i];t="";for(let o=0;o<a.length;o++)t+=this.tablecell(a[o]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let n=this.parser.parseInline(e.tokens),t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${wn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:t}){let r=this.parser.parseInline(t),i=fd(e);if(i===null)return r;e=i;let a='<a href="'+e+'"';return n&&(a+=' title="'+wn(n)+'"'),a+=">"+r+"</a>",a}image({href:e,title:n,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let i=fd(e);if(i===null)return wn(t);e=i;let a=`<img src="${e}" alt="${wn(t)}"`;return n&&(a+=` title="${wn(n)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:wn(e.text)}},ku=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},fn=class ms{constructor(n){X(this,"options");X(this,"renderer");X(this,"textRenderer");this.options=n||jt,this.options.renderer=this.options.renderer||new Ya,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ku}static parse(n,t){return new ms(t).parse(n)}static parseInline(n,t){return new ms(t).parseInline(n)}parse(n){var r,i;this.renderer.parser=this;let t="";for(let a=0;a<n.length;a++){let o=n[a];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[o.type]){let l=o,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){t+=u||"";continue}}let s=o;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return t}parseInline(n,t=this.renderer){var i,a;this.renderer.parser=this;let r="";for(let o=0;o<n.length;o++){let s=n[o];if((a=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&a[s.type]){let u=this.options.extensions.renderers[s.type].call({parser:this},s);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=u||"";continue}}let l=s;switch(l.type){case"escape":{r+=t.text(l);break}case"html":{r+=t.html(l);break}case"link":{r+=t.link(l);break}case"image":{r+=t.image(l);break}case"checkbox":{r+=t.checkbox(l);break}case"strong":{r+=t.strong(l);break}case"em":{r+=t.em(l);break}case"codespan":{r+=t.codespan(l);break}case"br":{r+=t.br(l);break}case"del":{r+=t.del(l);break}case"text":{r+=t.text(l);break}default:{let u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},ua,Xr=(ua=class{constructor(e){X(this,"options");X(this,"block");this.options=e||jt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?pn.lex:pn.lexInline}provideParser(e=this.block){return e?fn.parse:fn.parseInline}},X(ua,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),X(ua,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ua),Lm=class{constructor(...e){X(this,"defaults",fu());X(this,"options",this.setOptions);X(this,"parse",this.parseMarkdown(!0));X(this,"parseInline",this.parseMarkdown(!1));X(this,"Parser",fn);X(this,"Renderer",Ya);X(this,"TextRenderer",ku);X(this,"Lexer",pn);X(this,"Tokenizer",Ja);X(this,"Hooks",Xr);this.use(...e)}walkTokens(e,n){var r,i;let t=[];for(let a of e)switch(t=t.concat(n.call(this,a)),a.type){case"table":{let o=a;for(let s of o.header)t=t.concat(this.walkTokens(s.tokens,n));for(let s of o.rows)for(let l of s)t=t.concat(this.walkTokens(l.tokens,n));break}case"list":{let o=a;t=t.concat(this.walkTokens(o.items,n));break}default:{let o=a;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[o.type]?this.defaults.extensions.childTokens[o.type].forEach(s=>{let l=o[s].flat(1/0);t=t.concat(this.walkTokens(l,n))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,n)))}}return t}use(...e){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let a=n.renderers[i.name];a?n.renderers[i.name]=function(...o){let s=i.renderer.apply(this,o);return s===!1&&(s=a.apply(this,o)),s}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=n[i.level];a?a.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),r.extensions=n),t.renderer){let i=this.defaults.renderer||new Ya(this.defaults);for(let a in t.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,s=t.renderer[o],l=i[o];i[o]=(...u)=>{let d=s.apply(i,u);return d===!1&&(d=l.apply(i,u)),d||""}}r.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new Ja(this.defaults);for(let a in t.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,s=t.tokenizer[o],l=i[o];i[o]=(...u)=>{let d=s.apply(i,u);return d===!1&&(d=l.apply(i,u)),d}}r.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new Xr;for(let a in t.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,s=t.hooks[o],l=i[o];Xr.passThroughHooks.has(a)?i[o]=u=>{if(this.defaults.async&&Xr.passThroughHooksRespectAsync.has(a))return(async()=>{let f=await s.call(i,u);return l.call(i,f)})();let d=s.call(i,u);return l.call(i,d)}:i[o]=(...u)=>{if(this.defaults.async)return(async()=>{let f=await s.apply(i,u);return f===!1&&(f=await l.apply(i,u)),f})();let d=s.apply(i,u);return d===!1&&(d=l.apply(i,u)),d}}r.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,a=t.walkTokens;r.walkTokens=function(o){let s=[];return s.push(a.call(this,o)),i&&(s=s.concat(i.call(this,o))),s}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return pn.lex(e,n??this.defaults)}parser(e,n){return fn.parse(e,n??this.defaults)}parseMarkdown(e){return(n,t)=>{let r={...t},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(n):n,s=await(i.hooks?await i.hooks.provideLexer(e):e?pn.lex:pn.lexInline)(o,i),l=i.hooks?await i.hooks.processAllTokens(s):s;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser(e):e?fn.parse:fn.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(a);try{i.hooks&&(n=i.hooks.preprocess(n));let o=(i.hooks?i.hooks.provideLexer(e):e?pn.lex:pn.lexInline)(n,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let s=(i.hooks?i.hooks.provideParser(e):e?fn.parse:fn.parseInline)(o,i);return i.hooks&&(s=i.hooks.postprocess(s)),s}catch(o){return a(o)}}}onError(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+wn(t.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(t);throw t}}},Ft=new Lm;function J(e,n){return Ft.parse(e,n)}J.options=J.setOptions=function(e){return Ft.setOptions(e),J.defaults=Ft.defaults,_m(J.defaults),J};J.getDefaults=fu;J.defaults=jt;J.use=function(...e){return Ft.use(...e),J.defaults=Ft.defaults,_m(J.defaults),J};J.walkTokens=function(e,n){return Ft.walkTokens(e,n)};J.parseInline=Ft.parseInline;J.Parser=fn;J.parser=fn.parse;J.Renderer=Ya;J.TextRenderer=ku;J.Lexer=pn;J.lexer=pn.lex;J.Tokenizer=Ja;J.Hooks=Xr;J.parse=J;J.options;J.setOptions;J.use;J.walkTokens;J.parseInline;fn.parse;pn.lex;var Mm={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,o={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function c(p){return p instanceof l?new l(p.type,c(p.content),p.alias):Array.isArray(p)?p.map(c):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(c){return Object.prototype.toString.call(c).slice(8,-1)},objId:function(c){return c.__id||Object.defineProperty(c,"__id",{value:++a}),c.__id},clone:function c(p,v){v=v||{};var S,k;switch(s.util.type(p)){case"Object":if(k=s.util.objId(p),v[k])return v[k];S={},v[k]=S;for(var T in p)p.hasOwnProperty(T)&&(S[T]=c(p[T],v));return S;case"Array":return k=s.util.objId(p),v[k]?v[k]:(S=[],v[k]=S,p.forEach(function(A,P){S[P]=c(A,v)}),S);default:return p}},getLanguage:function(c){for(;c;){var p=i.exec(c.className);if(p)return p[1].toLowerCase();c=c.parentElement}return"none"},setLanguage:function(c,p){c.className=c.className.replace(RegExp(i,"gi"),""),c.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(S){var c=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(c){var p=document.getElementsByTagName("script");for(var v in p)if(p[v].src==c)return p[v]}return null}},isActive:function(c,p,v){for(var S="no-"+p;c;){var k=c.classList;if(k.contains(p))return!0;if(k.contains(S))return!1;c=c.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(c,p){var v=s.util.clone(s.languages[c]);for(var S in p)v[S]=p[S];return v},insertBefore:function(c,p,v,S){S=S||s.languages;var k=S[c],T={};for(var A in k)if(k.hasOwnProperty(A)){if(A==p)for(var P in v)v.hasOwnProperty(P)&&(T[P]=v[P]);v.hasOwnProperty(A)||(T[A]=k[A])}var D=S[c];return S[c]=T,s.languages.DFS(s.languages,function(K,ue){ue===D&&K!=c&&(this[K]=T)}),T},DFS:function c(p,v,S,k){k=k||{};var T=s.util.objId;for(var A in p)if(p.hasOwnProperty(A)){v.call(p,A,p[A],S||A);var P=p[A],D=s.util.type(P);D==="Object"&&!k[T(P)]?(k[T(P)]=!0,c(P,v,null,k)):D==="Array"&&!k[T(P)]&&(k[T(P)]=!0,c(P,v,A,k))}}},plugins:{},highlightAll:function(c,p){s.highlightAllUnder(document,c,p)},highlightAllUnder:function(c,p,v){var S={callback:v,container:c,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",S),S.elements=Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)),s.hooks.run("before-all-elements-highlight",S);for(var k=0,T;T=S.elements[k++];)s.highlightElement(T,p===!0,S.callback)},highlightElement:function(c,p,v){var S=s.util.getLanguage(c),k=s.languages[S];s.util.setLanguage(c,S);var T=c.parentElement;T&&T.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(T,S);var A=c.textContent,P={element:c,language:S,grammar:k,code:A};function D(ue){P.highlightedCode=ue,s.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,s.hooks.run("after-highlight",P),s.hooks.run("complete",P),v&&v.call(P.element)}if(s.hooks.run("before-sanity-check",P),T=P.element.parentElement,T&&T.nodeName.toLowerCase()==="pre"&&!T.hasAttribute("tabindex")&&T.setAttribute("tabindex","0"),!P.code){s.hooks.run("complete",P),v&&v.call(P.element);return}if(s.hooks.run("before-highlight",P),!P.grammar){D(s.util.encode(P.code));return}if(p&&r.Worker){var K=new Worker(s.filename);K.onmessage=function(ue){D(ue.data)},K.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else D(s.highlight(P.code,P.grammar,P.language))},highlight:function(c,p,v){var S={code:c,grammar:p,language:v};if(s.hooks.run("before-tokenize",S),!S.grammar)throw new Error('The language "'+S.language+'" has no grammar.');return S.tokens=s.tokenize(S.code,S.grammar),s.hooks.run("after-tokenize",S),l.stringify(s.util.encode(S.tokens),S.language)},tokenize:function(c,p){var v=p.rest;if(v){for(var S in v)p[S]=v[S];delete p.rest}var k=new f;return g(k,k.head,c),d(c,k,p,k.head,0),y(k)},hooks:{all:{},add:function(c,p){var v=s.hooks.all;v[c]=v[c]||[],v[c].push(p)},run:function(c,p){var v=s.hooks.all[c];if(!(!v||!v.length))for(var S=0,k;k=v[S++];)k(p)}},Token:l};r.Prism=s;function l(c,p,v,S){this.type=c,this.content=p,this.alias=v,this.length=(S||"").length|0}l.stringify=function c(p,v){if(typeof p=="string")return p;if(Array.isArray(p)){var S="";return p.forEach(function(D){S+=c(D,v)}),S}var k={type:p.type,content:c(p.content,v),tag:"span",classes:["token",p.type],attributes:{},language:v},T=p.alias;T&&(Array.isArray(T)?Array.prototype.push.apply(k.classes,T):k.classes.push(T)),s.hooks.run("wrap",k);var A="";for(var P in k.attributes)A+=" "+P+'="'+(k.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+k.tag+' class="'+k.classes.join(" ")+'"'+A+">"+k.content+"</"+k.tag+">"};function u(c,p,v,S){c.lastIndex=p;var k=c.exec(v);if(k&&S&&k[1]){var T=k[1].length;k.index+=T,k[0]=k[0].slice(T)}return k}function d(c,p,v,S,k,T){for(var A in v)if(!(!v.hasOwnProperty(A)||!v[A])){var P=v[A];P=Array.isArray(P)?P:[P];for(var D=0;D<P.length;++D){if(T&&T.cause==A+","+D)return;var K=P[D],ue=K.inside,vn=!!K.lookbehind,St=!!K.greedy,jn=K.alias;if(St&&!K.pattern.global){var An=K.pattern.toString().match(/[imsuy]*$/)[0];K.pattern=RegExp(K.pattern.source,An+"g")}for(var Rn=K.pattern||K,R=S.next,L=k;R!==p.tail&&!(T&&L>=T.reach);L+=R.value.length,R=R.next){var $=R.value;if(p.length>c.length)return;if(!($ instanceof l)){var M=1,W;if(St){if(W=u(Rn,L,c,vn),!W||W.index>=c.length)break;var $e=W.index,Bn=W.index+W[0].length,ve=L;for(ve+=R.value.length;$e>=ve;)R=R.next,ve+=R.value.length;if(ve-=R.value.length,L=ve,R.value instanceof l)continue;for(var an=R;an!==p.tail&&(ve<Bn||typeof an.value=="string");an=an.next)M++,ve+=an.value.length;M--,$=c.slice(L,ve),W.index-=L}else if(W=u(Rn,0,$,vn),!W)continue;var $e=W.index,on=W[0],Bt=$.slice(0,$e),Oi=$.slice($e+on.length),Ht=L+$.length;T&&Ht>T.reach&&(T.reach=Ht);var Y=R.prev;Bt&&(Y=g(p,Y,Bt),L+=Bt.length),w(p,Y,M);var Di=new l(A,ue?s.tokenize(on,ue):on,jn,on);if(R=g(p,Y,Di),Oi&&g(p,R,Oi),M>1){var q={cause:A+","+D,reach:Ht};d(c,p,v,R.prev,L,q),T&&q.reach>T.reach&&(T.reach=q.reach)}}}}}}function f(){var c={value:null,prev:null,next:null},p={value:null,prev:c,next:null};c.next=p,this.head=c,this.tail=p,this.length=0}function g(c,p,v){var S=p.next,k={value:v,prev:p,next:S};return p.next=k,S.prev=k,c.length++,k}function w(c,p,v){for(var S=p.next,k=0;k<v&&S!==c.tail;k++)S=S.next;p.next=S,S.prev=p,c.length-=k}function y(c){for(var p=[],v=c.head.next;v!==c.tail;)p.push(v.value),v=v.next;return p}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(c){var p=JSON.parse(c.data),v=p.language,S=p.code,k=p.immediateClose;r.postMessage(s.highlight(S,s.languages[v],v)),k&&r.close()},!1)),s;var b=s.util.currentScript();b&&(s.filename=b.src,b.hasAttribute("data-manual")&&(s.manual=!0));function C(){s.manual||s.highlightAll()}if(!s.manual){var h=document.readyState;h==="loading"||h==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16)}return s}(n);e.exports&&(e.exports=t),typeof Gu<"u"&&(Gu.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(i,a){var o={};o["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[a]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+a]={pattern:/[\s\S]+/,inside:t.languages[a]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(r,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var a=r.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(b,C){return"✖ Error "+b+" while fetching file: "+C},a="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",l="loading",u="loaded",d="failed",f="pre[data-src]:not(["+s+'="'+u+'"]):not(['+s+'="'+l+'"])';function g(b,C,h){var c=new XMLHttpRequest;c.open("GET",b,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status<400&&c.responseText?C(c.responseText):c.status>=400?h(i(c.status,c.statusText)):h(a))},c.send(null)}function w(b){var C=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(C){var h=Number(C[1]),c=C[2],p=C[3];return c?p?[h,Number(p)]:[h,void 0]:[h,h]}}t.hooks.add("before-highlightall",function(b){b.selector+=", "+f}),t.hooks.add("before-sanity-check",function(b){var C=b.element;if(C.matches(f)){b.code="",C.setAttribute(s,l);var h=C.appendChild(document.createElement("CODE"));h.textContent=r;var c=C.getAttribute("data-src"),p=b.language;if(p==="none"){var v=(/\.(\w+)$/.exec(c)||[,"none"])[1];p=o[v]||v}t.util.setLanguage(h,p),t.util.setLanguage(C,p);var S=t.plugins.autoloader;S&&S.loadLanguages(p),g(c,function(k){C.setAttribute(s,u);var T=w(C.getAttribute("data-range"));if(T){var A=k.split(/\r\n?|\n/g),P=T[0],D=T[1]==null?A.length:T[1];P<0&&(P+=A.length),P=Math.max(0,Math.min(P-1,A.length)),D<0&&(D+=A.length),D=Math.max(0,Math.min(D,A.length)),k=A.slice(P,D).join(`
`),C.hasAttribute("data-start")||C.setAttribute("data-start",String(P+1))}h.textContent=k,t.highlightElement(h)},function(k){C.setAttribute(s,d),h.textContent=k})}}),t.plugins.fileHighlight={highlight:function(C){for(var h=(C||document).querySelectorAll(f),c=0,p;p=h[c++];)t.highlightElement(p)}};var y=!1;t.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Mm);var GS=Mm.exports;const la=Id(GS);/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */function vd(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function WS(e){if(Array.isArray(e))return e}function KS(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,a,o,s=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,n!==0)for(;!(l=(r=a.call(t)).done)&&(s.push(r.value),s.length!==n);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}function QS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XS(e,n){return WS(e)||KS(e,n)||JS(e,n)||QS()}function JS(e,n){if(e){if(typeof e=="string")return vd(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?vd(e,n):void 0}}const $m=Object.entries,yd=Object.setPrototypeOf,YS=Object.isFrozen,qS=Object.getPrototypeOf,ZS=Object.getOwnPropertyDescriptor;let be=Object.freeze,_e=Object.seal,qt=Object.create,zm=typeof Reflect<"u"&&Reflect,gs=zm.apply,hs=zm.construct;be||(be=function(n){return n});_e||(_e=function(n){return n});gs||(gs=function(n,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return n.apply(t,i)});hs||(hs=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return new n(...r)});const Br=me(Array.prototype.forEach),ex=me(Array.prototype.lastIndexOf),Sd=me(Array.prototype.pop),Yt=me(Array.prototype.push),nx=me(Array.prototype.splice),et=Array.isArray,Jr=me(String.prototype.toLowerCase),cl=me(String.prototype.toString),xd=me(String.prototype.match),Hr=me(String.prototype.replace),kd=me(String.prototype.indexOf),tx=me(String.prototype.trim),rx=me(Number.prototype.toString),ix=me(Boolean.prototype.toString),wd=typeof BigInt>"u"?null:me(BigInt.prototype.toString),Ed=typeof Symbol>"u"?null:me(Symbol.prototype.toString),Se=me(Object.prototype.hasOwnProperty),Vr=me(Object.prototype.toString),we=me(RegExp.prototype.test),wt=ax(TypeError);function me(e){return function(n){n instanceof RegExp&&(n.lastIndex=0);for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return gs(e,n,r)}}function ax(e){return function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return hs(e,t)}}function B(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Jr;if(yd&&yd(e,null),!et(n))return e;let r=n.length;for(;r--;){let i=n[r];if(typeof i=="string"){const a=t(i);a!==i&&(YS(n)||(n[r]=a),i=a)}e[i]=!0}return e}function ox(e){for(let n=0;n<e.length;n++)Se(e,n)||(e[n]=null);return e}function Oe(e){const n=qt(null);for(const r of $m(e)){var t=XS(r,2);const i=t[0],a=t[1];Se(e,i)&&(et(a)?n[i]=ox(a):a&&typeof a=="object"&&a.constructor===Object?n[i]=Oe(a):n[i]=a)}return n}function lx(e){switch(typeof e){case"string":return e;case"number":return rx(e);case"boolean":return ix(e);case"bigint":return wd?wd(e):"0";case"symbol":return Ed?Ed(e):"Symbol()";case"undefined":return Vr(e);case"function":case"object":{if(e===null)return Vr(e);const n=e,t=En(n,"toString");if(typeof t=="function"){const r=t(n);return typeof r=="string"?r:Vr(r)}return Vr(e)}default:return Vr(e)}}function En(e,n){for(;e!==null;){const r=ZS(e,n);if(r){if(r.get)return me(r.get);if(typeof r.value=="function")return me(r.value)}e=qS(e)}function t(){return null}return t}function sx(e){try{return we(e,""),!0}catch{return!1}}const bd=be(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),dl=be(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),pl=be(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ux=be(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),fl=be(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),cx=be(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Cd=be(["#text"]),Td=be(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),ml=be(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_d=be(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),sa=be(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),dx=_e(/{{[\w\W]*|^[\w\W]*}}/g),px=_e(/<%[\w\W]*|^[\w\W]*%>/g),fx=_e(/\${[\w\W]*/g),mx=_e(/^data-[\-\w.\u00B7-\uFFFF]+$/),gx=_e(/^aria-[\-\w]+$/),Ad=_e(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hx=_e(/^(?:\w+script|data):/i),vx=_e(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yx=_e(/^html$/i),Sx=_e(/^[a-z][.\w]*(-[.\w]+)+$/i),Rd=_e(/<[/\w!]/g),xx=_e(/<[/\w]/g),kx=_e(/<\/no(script|embed|frames)/i),wx=_e(/\/>/i),kn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ex=function(){return typeof window>"u"?null:window},bx=function(n,t){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(r=t.getAttribute(i));const a="dompurify"+(r?"#"+r:"");try{return n.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Ud=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qn=function(n,t,r,i){return Se(n,t)&&et(n[t])?B(i.base?Oe(i.base):{},n[t],i.transform):r};function jm(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ex();const n=I=>jm(I);if(n.version="3.4.11",n.removed=[],!e||!e.document||e.document.nodeType!==kn.document||!e.Element)return n.isSupported=!1,n;let t=e.document;const r=t,i=r.currentScript;e.DocumentFragment;const a=e.HTMLTemplateElement,o=e.Node,s=e.Element,l=e.NodeFilter,u=e.NamedNodeMap;u===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;const d=e.DOMParser,f=e.trustedTypes,g=s.prototype,w=En(g,"cloneNode"),y=En(g,"remove"),b=En(g,"nextSibling"),C=En(g,"childNodes"),h=En(g,"parentNode"),c=En(g,"shadowRoot"),p=En(g,"attributes"),v=o&&o.prototype?En(o.prototype,"nodeType"):null,S=o&&o.prototype?En(o.prototype,"nodeName"):null;if(typeof a=="function"){const I=t.createElement("template");I.content&&I.content.ownerDocument&&(t=I.content.ownerDocument)}let k,T="",A,P=!1,D=0;const K=function(){if(D>0)throw wt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},ue=function(m){K(),D++;try{return k.createHTML(m)}finally{D--}},vn=function(m){K(),D++;try{return k.createScriptURL(m)}finally{D--}},St=function(){return P||(A=bx(f,i),P=!0),A},jn=t,An=jn.implementation,Rn=jn.createNodeIterator,R=jn.createDocumentFragment,L=jn.getElementsByTagName,$=r.importNode;let M=Ud();n.isSupported=typeof $m=="function"&&typeof h=="function"&&An&&An.createHTMLDocument!==void 0;const W=dx,Bn=px,ve=fx,an=mx,$e=gx,on=hx,Bt=vx,Oi=Sx;let Ht=Ad,Y=null;const Di=B({},[...bd,...dl,...pl,...fl,...Cd]);let q=null;const wu=B({},[...Td,...ml,..._d,...sa]);let oe=Object.seal(qt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Rr=null,Eu=null;const Hn=Object.seal(qt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let bu=!0,So=!0,Cu=!1,Tu=!0,Vn=!1,Ur=!0,xt=!1,xo=!1,ko=null,wo=null,Eo=!1,Vt=!1,Fi=!1,Li=!1,_u=!0,Au=!1;const Ru="user-content-";let bo=!0,Co=!1,Gt={},yn=null;const To=B({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Uu=null;const Iu=B({},["audio","video","img","source","image","track"]);let _o=null;const Pu=B({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Mi="http://www.w3.org/1998/Math/MathML",$i="http://www.w3.org/2000/svg",Sn="http://www.w3.org/1999/xhtml";let Wt=Sn,Ao=!1,Ro=null;const Bm=B({},[Mi,$i,Sn],cl),Nu=be(["mi","mo","mn","ms","mtext"]);let Uo=B({},Nu);const Ou=be(["annotation-xml"]);let Io=B({},Ou);const Hm=B({},["title","style","font","a","script"]);let Ir=null;const Vm=["application/xhtml+xml","text/html"],Gm="text/html";let le=null,Kt=null;const Wm=t.createElement("form"),Du=function(m){return m instanceof RegExp||m instanceof Function},Po=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Kt&&Kt===m)return;(!m||typeof m!="object")&&(m={}),m=Oe(m),Ir=Vm.indexOf(m.PARSER_MEDIA_TYPE)===-1?Gm:m.PARSER_MEDIA_TYPE,le=Ir==="application/xhtml+xml"?cl:Jr,Y=Qn(m,"ALLOWED_TAGS",Di,{transform:le}),q=Qn(m,"ALLOWED_ATTR",wu,{transform:le}),Ro=Qn(m,"ALLOWED_NAMESPACES",Bm,{transform:cl}),_o=Qn(m,"ADD_URI_SAFE_ATTR",Pu,{transform:le,base:Pu}),Uu=Qn(m,"ADD_DATA_URI_TAGS",Iu,{transform:le,base:Iu}),yn=Qn(m,"FORBID_CONTENTS",To,{transform:le}),Rr=Qn(m,"FORBID_TAGS",Oe({}),{transform:le}),Eu=Qn(m,"FORBID_ATTR",Oe({}),{transform:le}),Gt=Se(m,"USE_PROFILES")?m.USE_PROFILES&&typeof m.USE_PROFILES=="object"?Oe(m.USE_PROFILES):m.USE_PROFILES:!1,bu=m.ALLOW_ARIA_ATTR!==!1,So=m.ALLOW_DATA_ATTR!==!1,Cu=m.ALLOW_UNKNOWN_PROTOCOLS||!1,Tu=m.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Vn=m.SAFE_FOR_TEMPLATES||!1,Ur=m.SAFE_FOR_XML!==!1,xt=m.WHOLE_DOCUMENT||!1,Vt=m.RETURN_DOM||!1,Fi=m.RETURN_DOM_FRAGMENT||!1,Li=m.RETURN_TRUSTED_TYPE||!1,Eo=m.FORCE_BODY||!1,_u=m.SANITIZE_DOM!==!1,Au=m.SANITIZE_NAMED_PROPS||!1,bo=m.KEEP_CONTENT!==!1,Co=m.IN_PLACE||!1,Ht=sx(m.ALLOWED_URI_REGEXP)?m.ALLOWED_URI_REGEXP:Ad,Wt=typeof m.NAMESPACE=="string"?m.NAMESPACE:Sn,Uo=Se(m,"MATHML_TEXT_INTEGRATION_POINTS")&&m.MATHML_TEXT_INTEGRATION_POINTS&&typeof m.MATHML_TEXT_INTEGRATION_POINTS=="object"?Oe(m.MATHML_TEXT_INTEGRATION_POINTS):B({},Nu),Io=Se(m,"HTML_INTEGRATION_POINTS")&&m.HTML_INTEGRATION_POINTS&&typeof m.HTML_INTEGRATION_POINTS=="object"?Oe(m.HTML_INTEGRATION_POINTS):B({},Ou);const x=Se(m,"CUSTOM_ELEMENT_HANDLING")&&m.CUSTOM_ELEMENT_HANDLING&&typeof m.CUSTOM_ELEMENT_HANDLING=="object"?Oe(m.CUSTOM_ELEMENT_HANDLING):qt(null);if(oe=qt(null),Se(x,"tagNameCheck")&&Du(x.tagNameCheck)&&(oe.tagNameCheck=x.tagNameCheck),Se(x,"attributeNameCheck")&&Du(x.attributeNameCheck)&&(oe.attributeNameCheck=x.attributeNameCheck),Se(x,"allowCustomizedBuiltInElements")&&typeof x.allowCustomizedBuiltInElements=="boolean"&&(oe.allowCustomizedBuiltInElements=x.allowCustomizedBuiltInElements),_e(oe),Vn&&(So=!1),Fi&&(Vt=!0),Gt&&(Y=B({},Cd),q=qt(null),Gt.html===!0&&(B(Y,bd),B(q,Td)),Gt.svg===!0&&(B(Y,dl),B(q,ml),B(q,sa)),Gt.svgFilters===!0&&(B(Y,pl),B(q,ml),B(q,sa)),Gt.mathMl===!0&&(B(Y,fl),B(q,_d),B(q,sa))),Hn.tagCheck=null,Hn.attributeCheck=null,Se(m,"ADD_TAGS")&&(typeof m.ADD_TAGS=="function"?Hn.tagCheck=m.ADD_TAGS:et(m.ADD_TAGS)&&(Y===Di&&(Y=Oe(Y)),B(Y,m.ADD_TAGS,le))),Se(m,"ADD_ATTR")&&(typeof m.ADD_ATTR=="function"?Hn.attributeCheck=m.ADD_ATTR:et(m.ADD_ATTR)&&(q===wu&&(q=Oe(q)),B(q,m.ADD_ATTR,le))),Se(m,"ADD_URI_SAFE_ATTR")&&et(m.ADD_URI_SAFE_ATTR)&&B(_o,m.ADD_URI_SAFE_ATTR,le),Se(m,"FORBID_CONTENTS")&&et(m.FORBID_CONTENTS)&&(yn===To&&(yn=Oe(yn)),B(yn,m.FORBID_CONTENTS,le)),Se(m,"ADD_FORBID_CONTENTS")&&et(m.ADD_FORBID_CONTENTS)&&(yn===To&&(yn=Oe(yn)),B(yn,m.ADD_FORBID_CONTENTS,le)),bo&&(Y["#text"]=!0),xt&&B(Y,["html","head","body"]),Y.table&&(B(Y,["tbody"]),delete Rr.tbody),m.TRUSTED_TYPES_POLICY){if(typeof m.TRUSTED_TYPES_POLICY.createHTML!="function")throw wt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof m.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw wt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const U=k;k=m.TRUSTED_TYPES_POLICY;try{T=ue("")}catch(F){throw k=U,F}}else m.TRUSTED_TYPES_POLICY===null?(k=void 0,T=""):(k===void 0&&(k=St()),k&&typeof T=="string"&&(T=ue("")));be&&be(m),Kt=m},Fu=B({},[...dl,...pl,...ux]),Lu=B({},[...fl,...cx]),Km=function(m,x,U){return x.namespaceURI===Sn?m==="svg":x.namespaceURI===Mi?m==="svg"&&(U==="annotation-xml"||Uo[U]):!!Fu[m]},Qm=function(m,x,U){return x.namespaceURI===Sn?m==="math":x.namespaceURI===$i?m==="math"&&Io[U]:!!Lu[m]},Xm=function(m,x,U){return x.namespaceURI===$i&&!Io[U]||x.namespaceURI===Mi&&!Uo[U]?!1:!Lu[m]&&(Hm[m]||!Fu[m])},Jm=function(m){let x=h(m);(!x||!x.tagName)&&(x={namespaceURI:Wt,tagName:"template"});const U=Jr(m.tagName),F=Jr(x.tagName);return Ro[m.namespaceURI]?m.namespaceURI===$i?Km(U,x,F):m.namespaceURI===Mi?Qm(U,x,F):m.namespaceURI===Sn?Xm(U,x,F):!!(Ir==="application/xhtml+xml"&&Ro[m.namespaceURI]):!1},Gn=function(m){Yt(n.removed,{element:m});try{h(m).removeChild(m)}catch{if(y(m),!h(m))throw wt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Mu=function(m){const x=C(m);if(x){const F=[];Br(x,z=>{Yt(F,z)}),Br(F,z=>{try{y(z)}catch{}})}const U=p(m);if(U)for(let F=U.length-1;F>=0;--F){const z=U[F],V=z&&z.name;if(typeof V=="string")try{m.removeAttribute(V)}catch{}}},kt=function(m,x){try{Yt(n.removed,{attribute:x.getAttributeNode(m),from:x})}catch{Yt(n.removed,{attribute:null,from:x})}if(x.removeAttribute(m),m==="is")if(Vt||Fi)try{Gn(x)}catch{}else try{x.setAttribute(m,"")}catch{}},Ym=function(m){const x=p(m);if(x)for(let U=x.length-1;U>=0;--U){const F=x[U],z=F&&F.name;if(!(typeof z!="string"||q[le(z)]))try{m.removeAttribute(z)}catch{}}},qm=function(m){const x=[m];for(;x.length>0;){const U=x.pop();(v?v(U):U.nodeType)===kn.element&&Ym(U);const z=C(U);if(z)for(let V=z.length-1;V>=0;--V)x.push(z[V])}},$u=function(m){let x=null,U=null;if(Eo)m="<remove></remove>"+m;else{const V=xd(m,/^[\r\n\t ]+/);U=V&&V[0]}Ir==="application/xhtml+xml"&&Wt===Sn&&(m='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+m+"</body></html>");const F=k?ue(m):m;if(Wt===Sn)try{x=new d().parseFromString(F,Ir)}catch{}if(!x||!x.documentElement){x=An.createDocument(Wt,"template",null);try{x.documentElement.innerHTML=Ao?T:F}catch{}}const z=x.body||x.documentElement;return m&&U&&z.insertBefore(t.createTextNode(U),z.childNodes[0]||null),Wt===Sn?L.call(x,xt?"html":"body")[0]:xt?x.documentElement:z},zu=function(m){return Rn.call(m.ownerDocument||m,m,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},zi=function(m){return m=Hr(m,W," "),m=Hr(m,Bn," "),m=Hr(m,ve," "),m},No=function(m){var x;m.normalize();const U=Rn.call(m.ownerDocument||m,m,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null);let F=U.nextNode();for(;F;)F.data=zi(F.data),F=U.nextNode();const z=(x=m.querySelectorAll)===null||x===void 0?void 0:x.call(m,"template");z&&Br(z,V=>{Qt(V.content)&&No(V.content)})},ji=function(m){const x=S?S(m):null;return typeof x!="string"||le(x)!=="form"?!1:typeof m.nodeName!="string"||typeof m.textContent!="string"||typeof m.removeChild!="function"||m.attributes!==p(m)||typeof m.removeAttribute!="function"||typeof m.setAttribute!="function"||typeof m.namespaceURI!="string"||typeof m.insertBefore!="function"||typeof m.hasChildNodes!="function"||m.nodeType!==v(m)||m.childNodes!==C(m)},Qt=function(m){if(!v||typeof m!="object"||m===null)return!1;try{return v(m)===kn.documentFragment}catch{return!1}},Pr=function(m){if(!v||typeof m!="object"||m===null)return!1;try{return typeof v(m)=="number"}catch{return!1}};function Un(I,m,x){I.length!==0&&Br(I,U=>{U.call(n,m,x,Kt)})}const Zm=function(m,x){return!!(Ur&&m.hasChildNodes()&&!Pr(m.firstElementChild)&&we(Rd,m.textContent)&&we(Rd,m.innerHTML)||Ur&&m.namespaceURI===Sn&&x==="style"&&Pr(m.firstElementChild)||m.nodeType===kn.processingInstruction||Ur&&m.nodeType===kn.comment&&we(xx,m.data))},eg=function(m,x){if(!Rr[x]&&Hu(x)&&(oe.tagNameCheck instanceof RegExp&&we(oe.tagNameCheck,x)||oe.tagNameCheck instanceof Function&&oe.tagNameCheck(x)))return!1;if(bo&&!yn[x]){const U=h(m),F=C(m);if(F&&U){const z=F.length;for(let V=z-1;V>=0;--V){const ye=Co?F[V]:w(F[V],!0);U.insertBefore(ye,b(m))}}}return Gn(m),!0},ju=function(m){if(Un(M.beforeSanitizeElements,m,null),ji(m))return Gn(m),!0;const x=le(S?S(m):m.nodeName);if(Un(M.uponSanitizeElement,m,{tagName:x,allowedTags:Y}),Zm(m,x))return Gn(m),!0;if(Rr[x]||!(Hn.tagCheck instanceof Function&&Hn.tagCheck(x))&&!Y[x])return eg(m,x);if((v?v(m):m.nodeType)===kn.element&&!Jm(m)||(x==="noscript"||x==="noembed"||x==="noframes")&&we(kx,m.innerHTML))return Gn(m),!0;if(Vn&&m.nodeType===kn.text){const F=zi(m.textContent);m.textContent!==F&&(Yt(n.removed,{element:m.cloneNode()}),m.textContent=F)}return Un(M.afterSanitizeElements,m,null),!1},Bu=function(m,x,U){if(Eu[x]||_u&&(x==="id"||x==="name")&&(U in t||U in Wm))return!1;const F=q[x]||Hn.attributeCheck instanceof Function&&Hn.attributeCheck(x,m);if(!(So&&we(an,x))){if(!(bu&&we($e,x))){if(F){if(!_o[x]){if(!we(Ht,Hr(U,Bt,""))){if(!((x==="src"||x==="xlink:href"||x==="href")&&m!=="script"&&kd(U,"data:")===0&&Uu[m])){if(!(Cu&&!we(on,Hr(U,Bt,"")))){if(U)return!1}}}}}else if(!(Hu(m)&&(oe.tagNameCheck instanceof RegExp&&we(oe.tagNameCheck,m)||oe.tagNameCheck instanceof Function&&oe.tagNameCheck(m))&&(oe.attributeNameCheck instanceof RegExp&&we(oe.attributeNameCheck,x)||oe.attributeNameCheck instanceof Function&&oe.attributeNameCheck(x,m))||x==="is"&&oe.allowCustomizedBuiltInElements&&(oe.tagNameCheck instanceof RegExp&&we(oe.tagNameCheck,U)||oe.tagNameCheck instanceof Function&&oe.tagNameCheck(U))))return!1}}return!0},ng=B({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Hu=function(m){return!ng[Jr(m)]&&we(Oi,m)},tg=function(m,x,U,F){if(k&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!U)switch(f.getAttributeType(m,x)){case"TrustedHTML":return ue(F);case"TrustedScriptURL":return vn(F)}return F},rg=function(m,x,U,F){try{U?m.setAttributeNS(U,x,F):m.setAttribute(x,F),ji(m)?Gn(m):Sd(n.removed)}catch{kt(x,m)}},Vu=function(m){Un(M.beforeSanitizeAttributes,m,null);const x=m.attributes;if(!x||ji(m))return;const U={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:q,forceKeepAttr:void 0};let F=x.length;const z=le(m.nodeName);for(;F--;){const V=x[F],ye=V.name,de=V.namespaceURI,Ye=V.value,ln=le(ye),Do=Ye;let Ne=ye==="value"?Do:tx(Do);if(U.attrName=ln,U.attrValue=Ne,U.keepAttr=!0,U.forceKeepAttr=void 0,Un(M.uponSanitizeAttribute,m,U),Ne=U.attrValue,Au&&(ln==="id"||ln==="name")&&kd(Ne,Ru)!==0&&(kt(ye,m),Ne=Ru+Ne),Ur&&we(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Ne)){kt(ye,m);continue}if(ln==="attributename"&&xd(Ne,"href")){kt(ye,m);continue}if(!U.forceKeepAttr){if(!U.keepAttr){kt(ye,m);continue}if(!Tu&&we(wx,Ne)){kt(ye,m);continue}if(Vn&&(Ne=zi(Ne)),!Bu(z,ln,Ne)){kt(ye,m);continue}Ne=tg(z,ln,de,Ne),Ne!==Do&&rg(m,ye,de,Ne)}}Un(M.afterSanitizeAttributes,m,null)},Bi=function(m){let x=null;const U=zu(m);for(Un(M.beforeSanitizeShadowDOM,m,null);x=U.nextNode();)if(Un(M.uponSanitizeShadowNode,x,null),ju(x),Vu(x),Qt(x.content)&&Bi(x.content),(v?v(x):x.nodeType)===kn.element){const z=c(x);Qt(z)&&(Oo(z),Bi(z))}Un(M.afterSanitizeShadowDOM,m,null)},Oo=function(m){const x=[{node:m,shadow:null}];for(;x.length>0;){const U=x.pop();if(U.shadow){Bi(U.shadow);continue}const F=U.node,V=(v?v(F):F.nodeType)===kn.element,ye=C(F);if(ye)for(let de=ye.length-1;de>=0;--de)x.push({node:ye[de],shadow:null});if(V){const de=S?S(F):null;if(typeof de=="string"&&le(de)==="template"){const Ye=F.content;Qt(Ye)&&x.push({node:Ye,shadow:null})}}if(V){const de=c(F);Qt(de)&&x.push({node:null,shadow:de},{node:de,shadow:null})}}};return n.sanitize=function(I){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,U=null,F=null,z=null;if(Ao=!I,Ao&&(I="<!-->"),typeof I!="string"&&!Pr(I)&&(I=lx(I),typeof I!="string"))throw wt("dirty is not a string, aborting");if(!n.isSupported)return I;xo?(Y=ko,q=wo):Po(m),(M.uponSanitizeElement.length>0||M.uponSanitizeAttribute.length>0)&&(Y=Oe(Y)),M.uponSanitizeAttribute.length>0&&(q=Oe(q)),n.removed=[];const V=Co&&typeof I!="string"&&Pr(I);if(V){const Ye=S?S(I):I.nodeName;if(typeof Ye=="string"){const ln=le(Ye);if(!Y[ln]||Rr[ln])throw wt("root node is forbidden and cannot be sanitized in-place")}if(ji(I))throw wt("root node is clobbered and cannot be sanitized in-place");try{Oo(I)}catch(ln){throw Mu(I),ln}}else if(Pr(I))x=$u("<!---->"),U=x.ownerDocument.importNode(I,!0),U.nodeType===kn.element&&U.nodeName==="BODY"||U.nodeName==="HTML"?x=U:x.appendChild(U),Oo(U);else{if(!Vt&&!Vn&&!xt&&I.indexOf("<")===-1)return k&&Li?ue(I):I;if(x=$u(I),!x)return Vt?null:Li?T:""}x&&Eo&&Gn(x.firstChild);const ye=zu(V?I:x);try{for(;F=ye.nextNode();)ju(F),Vu(F),Qt(F.content)&&Bi(F.content)}catch(Ye){throw V&&Mu(I),Ye}if(V)return Br(n.removed,Ye=>{Ye.element&&qm(Ye.element)}),Vn&&No(I),I;if(Vt){if(Vn&&No(x),Fi)for(z=R.call(x.ownerDocument);x.firstChild;)z.appendChild(x.firstChild);else z=x;return(q.shadowroot||q.shadowrootmode)&&(z=$.call(r,z,!0)),z}let de=xt?x.outerHTML:x.innerHTML;return xt&&Y["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&we(yx,x.ownerDocument.doctype.name)&&(de="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+de),Vn&&(de=zi(de)),k&&Li?ue(de):de},n.setConfig=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Po(I),xo=!0,ko=Y,wo=q},n.clearConfig=function(){Kt=null,xo=!1,ko=null,wo=null,k=A,T=""},n.isValidAttribute=function(I,m,x){Kt||Po({});const U=le(I),F=le(m);return Bu(U,F,x)},n.addHook=function(I,m){typeof m=="function"&&Se(M,I)&&Yt(M[I],m)},n.removeHook=function(I,m){if(Se(M,I)){if(m!==void 0){const x=ex(M[I],m);return x===-1?void 0:nx(M[I],x,1)[0]}return Sd(M[I])}},n.removeHooks=function(I){Se(M,I)&&(M[I]=[])},n.removeAllHooks=function(){M=Ud()},n}var Cx=jm();Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var n=e.util.clone(e.languages.javascript),t=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(l,u){return l=l.replace(/<S>/g,function(){return t}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,u)}i=a(i).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var o=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(o).join(""):""},s=function(l){for(var u=[],d=0;d<l.length;d++){var f=l[d],g=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===o(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:o(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:g=!0),(g||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var w=o(f);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(w+=o(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(w=o(l[d-1])+w,l.splice(d-1,1),d--),l[d]=new e.Token("plain-text",w,null,w)}f.content&&typeof f.content!="string"&&s(f.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||s(l.tokens)})})(Prism);(function(e){var n=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",n),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var t=e.languages.tsx.tag;t.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0})(Prism);(function(e){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:t,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=r.variable[1].inside,o=0;o<i.length;o++)a[i[o]]=e.languages.bash[i[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);(function(e){var n=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function t(d){return d=d.replace(/<inner>/g,function(){return n}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+d+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),a=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+a+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+a+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(f){d!==f&&(e.languages.markdown[d].inside.content.inside[f]=e.languages.markdown[f])})}),e.hooks.add("after-tokenize",function(d){if(d.language!=="markdown"&&d.language!=="md")return;function f(g){if(!(!g||typeof g=="string"))for(var w=0,y=g.length;w<y;w++){var b=g[w];if(b.type!=="code"){f(b.content);continue}var C=b.content[1],h=b.content[3];if(C&&h&&C.type==="code-language"&&h.type==="code-block"&&typeof C.content=="string"){var c=C.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");c=(/[a-z][\w-]*/i.exec(c)||[""])[0].toLowerCase();var p="language-"+c;h.alias?typeof h.alias=="string"?h.alias=[h.alias,p]:h.alias.push(p):h.alias=[p]}}}f(d.tokens)}),e.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var f="",g=0,w=d.classes.length;g<w;g++){var y=d.classes[g],b=/language-(.+)/.exec(y);if(b){f=b[1];break}}var C=e.languages[f];if(C)d.content=e.highlight(u(d.content),C,f);else if(f&&f!=="none"&&e.plugins.autoloader){var h="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);d.attributes.id=h,e.plugins.autoloader.loadLanguages(f,function(){var c=document.getElementById(h);c&&(c.innerHTML=e.highlight(c.textContent,e.languages[f],f))})}}});var o=RegExp(e.languages.markup.tag.pattern.source,"gi"),s={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;function u(d){var f=d.replace(o,"");return f=f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(g,w){if(w=w.toLowerCase(),w[0]==="#"){var y;return w[1]==="x"?y=parseInt(w.slice(2),16):y=Number(w.slice(1)),l(y)}else{var b=s[w];return b||g}}),f}e.languages.md=e.languages.markdown})(Prism);(function(e){var n=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+t.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+t.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),a=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function o(s,l){l=(l||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return s});return RegExp(u,l)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+a+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:o(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:o(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:o(a),lookbehind:!0,greedy:!0},number:{pattern:o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);function Tx(e,n){const t=n&&la.languages[n]?n:"javascript",r=la.languages[t]||la.languages.javascript;try{return la.highlight(e,r,t)}catch{return e}}function _x(e,n){const t=new Map(n.map(a=>[a.text,a.id])),r=new Lm({gfm:!0,breaks:!1});r.use({renderer:{code(a){const o=Tx(a.text,a.lang||void 0),s=a.lang||"javascript";return`<pre class="language-${s}"><code class="language-${s}">${o}</code></pre>`},heading(a){const o=this.parser.parseInline(a.tokens),s=t.get(o)||o.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-").replace(/^-+|-+$/g,"");return`<h${a.depth} id="${s}">${o}</h${a.depth}>
`}}});const i=r.parse(e);return Cx.sanitize(i)}function Ax(e){var l;const n=e.split(`
`),t=[];let r=!1,i=!1,a=!1,o=null;for(let u=0;u<n.length;u++){const d=n[u],f=d.trim();if(u===0&&f==="---"){i=!0;continue}if(i&&f==="---"){i=!1;continue}if(!i){if(f.startsWith("<!--")){a=!f.endsWith("-->");continue}if(a){f.endsWith("-->")&&(a=!1);continue}if(/^```/.test(f)||/^~~~/.test(f)){const g=((l=f.match(/^(`+|~+)/))==null?void 0:l[0])||"";r?o===g[0]&&(r=!1,o=null):(r=!0,o=g[0]);continue}if(!(!r&&/^    /.test(d))&&!r){if(u>0&&/^(={1,}|-{1,})$/.test(f)){const g=n[u-1].trim();if(g&&!t.includes(g)){const w=f[0]==="="?1:2;t.push(`${"#".repeat(w)} ${g}`)}continue}/^#{1,3}\s.+/.test(f)&&t.push(f)}}}const s=new Set;return t.map(u=>{var b;const d=((b=u.match(/^#+/))==null?void 0:b[0].length)||1;let f=u.replace(/^#+\s/,"").replace(/\s+#+\s*$/,"").trim();f=f.replace(/[*_`]/g,"");let g=f.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-").replace(/^-+|-+$/g,"");g||(g="heading");let w=g,y=1;for(;s.has(w);)w=`${g}-${y++}`;return s.add(w),{id:w,text:f,level:d}})}const Rx=Object.assign({"../content/bitmap-tensor.md":im,"../content/camerax-development.md":am,"../content/clean-architecture.md":om,"../content/datastore-preferences.md":lm,"../content/git-workflow.md":sm,"../content/github-pages-deploy.md":um,"../content/gradle-build.md":cm,"../content/hilt-di.md":dm,"../content/jetpack-compose.md":pm,"../content/json-parsing.md":fm,"../content/kotlin-basics.md":mm,"../content/kotlin-coroutines.md":gm,"../content/kotlin-flow.md":hm,"../content/mvvm-architecture.md":vm,"../content/navigation-compose.md":ym,"../content/onnx-runtime.md":Sm,"../content/react-hooks-guide.md":xm,"../content/repository-pattern.md":km,"../content/room-database.md":wm,"../content/typescript-tips.md":Em,"../content/usecase-design.md":bm,"../content/vite-optimization.md":Cm});function Ux(){const{slug:e}=Zf();if(!e)return null;const n=`../content/${e}.md`,t=Rx[n];if(!t)return null;const{meta:r,content:i}=Tm(t),a=Ax(i),o=_x(i,a);return{meta:r,content:i,html:o,toc:a}}function Ix(){const{slug:e}=Zf(),n=Ux();if(N.useEffect(()=>{if(n){document.title=`${n.meta.title} | Developer Portfolio`;const a=document.querySelector("meta[name='description']");a&&a.setAttribute("content",n.meta.description)}return()=>{document.title="Developer Portfolio"}},[n]),!n)return E.jsxs("div",{className:"py-12 text-center",children:[E.jsx("h1",{className:"text-2xl font-bold text-black mb-4",children:"Post Not Found"}),E.jsxs("p",{className:"text-gray-600 mb-6",children:['The post "',e,'" does not exist.']}),E.jsx(br,{to:"/blog",className:"text-blue-600 hover:text-blue-800 transition-colors",children:"← Back to Blog"})]});const{meta:t,html:r,toc:i}=n;return E.jsxs("div",{className:"py-12",children:[E.jsx("nav",{className:"mb-6",children:E.jsx(br,{to:"/blog",className:"text-gray-500 hover:text-black transition-colors text-sm",children:"← Back to Blog"})}),E.jsxs("div",{className:"flex gap-8",children:[E.jsxs("article",{className:"flex-1 min-w-0",children:[E.jsxs("header",{className:"mb-8",children:[E.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-black mb-4",children:t.title}),E.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-gray-500",children:[E.jsx("time",{children:t.date}),E.jsx("span",{children:"·"}),E.jsx("span",{children:t.readingTime}),t.tags.length>0&&E.jsxs(E.Fragment,{children:[E.jsx("span",{children:"·"}),E.jsx("div",{className:"flex gap-2",children:t.tags.map(a=>E.jsx("span",{className:"px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full",children:a},a))})]})]})]}),E.jsx("div",{className:`prose prose-lg max-w-none
              prose-headings:text-black prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-gray-800
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
              prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic
              prose-ul:list-disc prose-ul:pl-5
              prose-ol:list-decimal prose-ol:pl-5
              prose-img:rounded-lg
              prose-hr:border-gray-200`,dangerouslySetInnerHTML:{__html:r}})]}),i.length>0&&E.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:E.jsxs(Pi,{className:"sticky top-24 max-h-[calc(100vh-8rem)] flex flex-col",children:[E.jsx("h3",{className:"text-sm font-semibold text-black uppercase tracking-wider mb-4 flex-shrink-0",children:"Table of Contents"}),E.jsx("nav",{className:"space-y-2 overflow-y-auto flex-1 pr-2",children:i.map(a=>E.jsx("a",{href:`#${a.id}`,className:"block text-sm text-gray-600 hover:text-black transition-colors",style:{paddingLeft:`${(a.level-1)*12}px`},onClick:o=>{var s;o.preventDefault(),(s=document.getElementById(a.id))==null||s.scrollIntoView({behavior:"smooth"})},children:a.text},a.id))})]})})]})]})}function Px(){return E.jsx(iS,{})}function Nx(){return E.jsx(Ix,{})}function Ox(){return E.jsx(Ny,{children:E.jsx($y,{children:E.jsxs(Ty,{children:[E.jsx(Xn,{path:"/",element:E.jsx(jy,{})}),E.jsx(Xn,{path:"/projects",element:E.jsx(Wy,{})}),E.jsx(Xn,{path:"/tools",element:E.jsx(Jy,{})}),E.jsx(Xn,{path:"/ai",element:E.jsx(qy,{})}),E.jsx(Xn,{path:"/blog",element:E.jsx(Px,{})}),E.jsx(Xn,{path:"/blog/:slug",element:E.jsx(Nx,{})}),E.jsx(Xn,{path:"/about",element:E.jsx(Zy,{})})]})})})}gl.createRoot(document.getElementById("root")).render(E.jsx(wa.StrictMode,{children:E.jsx(Ox,{})}));
