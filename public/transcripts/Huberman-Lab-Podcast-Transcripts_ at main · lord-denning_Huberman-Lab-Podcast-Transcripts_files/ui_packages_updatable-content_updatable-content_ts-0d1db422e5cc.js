"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_updatable-content_updatable-content_ts"],{70703:(e,t,n)=>{let r,o;n.d(t,{Gu:()=>c,c8:()=>d,g5:()=>m});var a=n(3167);let i=[],l=0;function c(){return r}function u(){try{return Math.min(Math.max(0,a.Kn?.length||0)||0,0x1fffffffffffff)}catch{return 0}}function s(e){r=e;let t=a.fV?.href;i[u()-1+l]={url:t,state:r},i.length=u(),a.cg?.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function f(){return Date.now()}function d(e,t,n){l=0;let r={_id:f(),...e};a.Kn?.pushState(r,t,n),s(r)}function m(e,t,n){let o={...r,...e};a.Kn?.replaceState(o,t,n),s(o)}r=function(){let e={_id:Date.now(),...a.Kn?.state};return s(e),e}(),a.cg?.addEventListener("popstate",function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier;i[u()-1+l-1]?.state?.turbo?.restorationIdentifier===n?l--:l++,s(t)},!0),a.cg?.addEventListener("turbo:visit",e=>{e instanceof CustomEvent&&(o=e.detail.action)}),a.cg?.addEventListener("turbo:load",()=>{"restore"!==o&&(l=0,m(a.Kn?.state,"",""))}),a.cg?.addEventListener("hashchange",function(){if(u()>i.length){let e={_id:f()};a.Kn?.replaceState(e,"",a.fV.href),s(e)}},!0),a.cg?.addEventListener("pageshow",()=>{i=[],l=0})},57957:(e,t,n)=>{n.d(t,{Cy:()=>l,K3:()=>s,Z8:()=>c,k_:()=>a,lK:()=>f,m$:()=>i});var r=n(4622);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function a(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.A)(t)),o(e,"submit",!0)&&e.submit()}function i(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function l(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function u(e){return new URLSearchParams(e)}function s(e,t){let n=new URLSearchParams(e.search);for(let[e,r]of u(t))n.append(e,r);return n.toString()}function f(e){return u(new FormData(e)).toString()}},4622:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{A:()=>r,C:()=>o})},4509:(e,t,n)=>{let r,o,a;n.d(t,{Av:()=>s,it:()=>u});var i=n(74057),l=n(57957),c=n(3167);function u(e,t=!1,n=!1){var c;return!n&&s(e)||function(e,t){let n=r instanceof Element?r:e&&e.ownerDocument&&e.ownerDocument.activeElement?e.ownerDocument.activeElement:null;return null!==n&&(!t||n!==e)&&(!!(n===e&&(0,l.Z8)(n)||e.contains(n)&&!function(e){if(e instanceof i.A)return!0;let t=e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement,n=e.parentElement?.classList.contains("task-list-item");if(t&&n)return!0;if(!(a instanceof Element))return!1;let r=e.closest(f);return!!r&&r===a.closest(f)}(n))||a instanceof Element&&e.contains(a)&&!!a.closest("details[open] > summary"))}(e,t)||(c=e).matches(":active:enabled")||c.contains(o)||!!(e.closest(".is-dirty")||e.querySelector(".is-dirty"))}function s(e){for(let t of e.querySelectorAll("input, textarea"))if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&function(e){if(e instanceof HTMLInputElement&&("checkbox"===e.type||"radio"===e.type)){if(e.checked!==e.defaultChecked)return!0}else if(e.value!==e.defaultValue)return!0;return!1}(t))return!0;return!1}c.XC?.addEventListener("mousedown",function(e){o=e.target},!0),c.XC?.addEventListener("mouseup",function(e){o=null,a=e.target},!0),c.XC?.addEventListener("contextmenu",function(e){o=null,a=e.target},!0),c.XC?.addEventListener("dragend",function(){o=null},!0);let f="a[href], button"},61480:(e,t,n)=>{n.d(t,{Eu:()=>l,l_:()=>a,r9:()=>i});var r=n(83770);function o(e){return{getNodeKey:()=>null,onBeforeElUpdated:(t,n)=>{if("TURBO-FRAME"===n.tagName||n.matches(".js-task-list-field, .contains-task-list")||"false"===n.getAttribute("data-morpheus-enabled"))return t.replaceWith(n),!1;if(t.hasAttribute("data-catalyst")&&n.setAttribute("data-catalyst",t.getAttribute("data-catalyst")||""),t.hasAttribute("data-morpheus-ignore"))for(let e of(t.getAttribute("data-morpheus-ignore")||"").trim().split(/\s+/))t.hasAttribute(e)?n.setAttribute(e,t.getAttribute(e)||""):n.removeAttribute(e);return e?.keepInputValues&&(n instanceof HTMLInputElement&&n.type===t.type||n instanceof HTMLTextAreaElement)&&(n instanceof HTMLInputElement&&("checkbox"===n.type||"radio"===n.type)?n.checked=t.checked:n.value=t.value),!0},onBeforeElChildrenUpdated:(e,t)=>{for(let n of[...e.childNodes,...t.childNodes])n.nodeType===Node.COMMENT_NODE&&n.remove();return!0},onElUpdated:e=>{e.connectedCallback&&queueMicrotask(()=>{e.disconnectedCallback?.(),e.connectedCallback?.()})}}}function a(e){let t=e.closest("[data-morpheus-enabled]");return null!=t&&"false"!==t.getAttribute("data-morpheus-enabled")}function i(e,t,n){if("string"==typeof t){let e=document.createElement("template");e.innerHTML=t,t=e.content}if(!a(e)){e.replaceWith(t);return}if(t instanceof DocumentFragment){let a=Array.from(t.children);a.length?((0,r.A)(e,a[0],o(n)),e.after(...a.slice(1))):e.replaceWith(t)}else(0,r.A)(e,t,o(n))}function l(e,t,n){if(!a(e)){e.innerHTML=t;return}let i="",l="";e.firstChild?.nodeType===Node.TEXT_NODE&&(i=e.firstChild.nodeValue?.match(/^\s+/)?.[0]||""),e.lastChild?.nodeType===Node.TEXT_NODE&&(l=e.lastChild.nodeValue?.match(/\s+$/)?.[0]||"");let c=e.cloneNode(!1);c.innerHTML=`${i}${t.trim()}${l}`,(0,r.A)(e,c,o(n))}},56579:(e,t,n)=>{n.d(t,{B:()=>r});function r(e,t){let n=e.createElement("template");return n.innerHTML=t,e.importNode(n.content,!0)}},11027:(e,t,n)=>{n.d(t,{Uv:()=>h,jH:()=>m,le:()=>p,yQ:()=>d});var r=n(4509),o=n(21403),a=n(61480),i=n(56579),l=n(95493),c=n(70703),u=n(29583);let s=new WeakMap,f={};function d(){for(let e of Object.keys(f))delete f[e];let e=history.state||{};e.staleRecords=f,(0,c.g5)(e,"",location.href),window.location.reload()}function m(){if(Object.keys(f).length>0){let e=history.state||{};e.staleRecords=f,(0,c.g5)(e,"",location.href)}}async function p(e,t={activateScripts:!1}){if(s.get(e))return;let n=e.hasAttribute("data-retain-focus"),o=e.getAttribute("data-url");if(!o)throw Error("could not get url");let a=new AbortController;s.set(e,a);try{document.hidden?(0,u.i)({incrementKey:"UPDATABLE_CONTENT_XHR_REQUEST_INVISIBLE",requestUrl:window.location.href,referredRequestUrl:o}):(0,u.i)({incrementKey:"UPDATABLE_CONTENT_XHR_REQUEST_VISIBLE",requestUrl:window.location.href,referredRequestUrl:o})}catch{}try{let i=await fetch(o,{signal:a.signal,headers:{Accept:"text/html","X-Requested-With":"XMLHttpRequest"}});if(!i.ok)return;let l=await i.text();if((0,r.it)(e,n)){console.warn("Failed to update content with interactions",e);return}return f[o]=l,b(e,l,{retainFocus:n,activateScripts:t.activateScripts}),l}catch{}finally{s.delete(e)}}async function h(e,t,n=!1){let r=s.get(e);r?.abort();let o=e.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");return!n&&o&&o===e&&(f[o.getAttribute("data-url")||""]=t),b(e,t,{retainFocus:!1,activateScripts:!1})}function b(e,t,n){return(0,l.JR)(document,()=>{let r=(0,i.B)(document,t.trim());n.activateScripts&&function(e){for(let t of[...Array.from(e.querySelectorAll("script[src]")),...Array.from(e.querySelectorAll("template")).flatMap(e=>Array.from(e.content.querySelectorAll("script[src]")))])!function(e){let{src:t}=e;if(!t)return;let n=document.createElement("script");(function(e,t){for(let{name:n,value:r}of t.attributes)e.setAttribute(n,r)})(n,e),e.replaceWith(n)}(t)}(r);let o=n.retainFocus&&e.ownerDocument&&e===e.ownerDocument.activeElement?r.querySelector("*"):null,l=Array.from(e.querySelectorAll("details[open][id]")).map(e=>e.id);for(let t of("DETAILS"===e.tagName&&e.id&&e.hasAttribute("open")&&l.push(e.id),e.querySelectorAll(".js-updatable-content-preserve-scroll-position"))){let e=t.getAttribute("data-updatable-content-scroll-position-id")||"";E.set(e,t.scrollTop)}for(let e of l){let t=r.querySelector(`#${e}`);t&&t.setAttribute("open","")}(0,a.r9)(e,r),o instanceof HTMLElement&&o.focus()})}let E=new Map;(0,o.lB)(".js-updatable-content-preserve-scroll-position",{constructor:HTMLElement,add(e){let t=e.getAttribute("data-updatable-content-scroll-position-id");if(!t)return;let n=E.get(t);null!=n&&(e.scrollTop=n)}})}}]);
//# sourceMappingURL=ui_packages_updatable-content_updatable-content_ts-194687dc2e9a.js.map