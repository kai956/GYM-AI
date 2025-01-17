"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-530254"],{78064:(e,t,a)=>{a.d(t,{h:()=>C,j:()=>F});var r=a(74848),o=a(91579),i=a(4227),n=a(75177),l=a(34614);function s(e){return e.path?.startsWith("/apps/")??!1}var c=a(14616);function d({renderTooltip:e,author:t,children:a}){return!1===e?(0,r.jsx)(r.Fragment,{children:a}):(0,r.jsx)(c.m,{text:`commits by ${t.login}`,direction:"se",children:a})}try{d.displayName||(d.displayName="AuthorTooltip")}catch{}var u=a(14744),h=a.n(u),p=a(96540);let m={fontWeight:"bold",fontColor:"fg.default",includeTooltip:!1,avatarSize:void 0},x=(0,p.createContext)(m);function f({authorSettings:e,children:t}){let a=h()(m,e??{});return(0,r.jsx)(x.Provider,{value:a,children:t})}function g(){return(0,p.useContext)(x)||m}try{x.displayName||(x.displayName="AuthorSettingsContext")}catch{}try{f.displayName||(f.displayName="AuthorSettingsProvider")}catch{}var y=a(30631),j=a(52464);let v=["150px","150px","200px"];function b({displayName:e,authorSettings:t}){return(0,r.jsx)(y.A,{title:e,maxWidth:v,inline:!0,children:(0,r.jsx)(j.A,{sx:{fontWeight:t.fontWeight,whiteSpace:"nowrap",color:t.fontColor},children:e})})}try{b.displayName||(b.displayName="AuthorDisplayName")}catch{}function C({author:e,repo:t,sx:a}){let c=g();if(!e)return null;let u=(0,r.jsx)(o.r,{"aria-label":`${e.login||"author"}`,src:e.avatarUrl,alt:`${e.login||"author"}`,sx:{mr:2,mt:"-1px",ml:"1px"},size:c.avatarSize,square:s(e)});return(0,r.jsxs)(n.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-avatar",children:[e.path?(0,r.jsx)(l.A,{href:e.path,"data-testid":"avatar-icon-link","data-hovercard-url":e.login?(0,i.dCN)({owner:e.login}):void 0,children:u}):u,e.login?(0,r.jsx)(d,{author:e,renderTooltip:c.includeTooltip,children:(0,r.jsx)(l.A,{muted:!0,href:(0,i.jQC)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,i.dCN)({owner:e.login}),sx:{fontWeight:c.fontWeight,whiteSpace:"nowrap",color:c.fontColor,"&:hover":{color:c.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(b,{displayName:e.displayName,authorSettings:c})]})}try{C.displayName||(C.displayName="AuthorAvatar")}catch{}var N=a(8338),k=a(91246);function S({authors:e,repo:t}){let a=e.length,[o,i]=(0,p.useState)(!1),n=(0,p.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.A,{as:"button","aria-label":`Show ${a} authors`,"data-testid":"authors-dialog-anchor",onClick:()=>{i(!0)},sx:{mx:1},ref:n,muted:!0,children:[a," ","people"]}),o&&(0,r.jsx)(k.l,{title:`${a} authors`,onClose:()=>{i(!1),setTimeout(()=>n.current?.focus(),25)},width:"medium",height:a>=12?"small":"auto",renderBody:()=>(0,r.jsx)(N.l,{sx:{overflowY:"auto",py:2},"data-testid":"contributor-dialog-list",children:e.map((e,a)=>(0,r.jsx)(A,{author:e,repo:t},`${e.login}_${a}`))})})]})}function A({author:e,repo:t}){return(0,r.jsxs)(N.l.LinkItem,{sx:{display:"flex",flexDirection:"row",fontSize:1,py:2,color:"fg.default","&:hover":{backgroundColor:"canvas.subtle"}},"data-testid":"contributor-dialog-row",href:(0,i.jQC)({repo:t,author:e.login??""}),children:[(0,r.jsx)(o.r,{src:e.avatarUrl,alt:e.login??e.displayName,sx:{mr:2},"aria-hidden":"true",square:s(e)}),(0,r.jsx)(y.A,{inline:!0,title:e.login??e.displayName??"",children:e.login??e.displayName})]})}try{S.displayName||(S.displayName="AuthorsDialog")}catch{}try{A.displayName||(A.displayName="AuthorRow")}catch{}var w=a(36279);function _({authors:e,onBehalfOf:t}){let a=g();return(0,r.jsxs)(w.A,{children:[e.slice(0,5).map((e,t)=>(0,r.jsx)(o.r,{"data-testid":"commit-stack-avatar",src:e.avatarUrl,alt:e.login??e.displayName,"data-hovercard-url":(0,i.dCN)({owner:e.login??""}),square:s(e),size:a.avatarSize},`${e.login}_${t}`)),t&&(0,r.jsx)(o.r,{"data-testid":"commit-stack-avatar",src:t.avatarUrl,alt:t.login??t.displayName,"data-hovercard-url":(0,i.qsO)({owner:t.login??""}),square:!0,size:a.avatarSize},`${t.login}_on_behalf_of`)]})}try{_.displayName||(_.displayName="CommitAuthorStack")}catch{}function I({author:e,repo:t,sx:a}){let o=g();return e?(0,r.jsx)(n.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-link",children:e.login?(0,r.jsx)(d,{author:e,renderTooltip:o.includeTooltip,children:(0,r.jsx)(l.A,{muted:!0,href:(0,i.jQC)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,i.dCN)({owner:e.login}),sx:{fontWeight:o.fontWeight,whiteSpace:"nowrap",color:o.fontColor,"&:hover":{color:o.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(b,{displayName:e.displayName,authorSettings:o})}):null}try{I.displayName||(I.displayName="AuthorLink")}catch{}var O=a(20053);let B={orgLink:"OrgLink-module__orgLink--pOGLv"};function W({org:e,className:t}){return e?(0,r.jsx)("div",{className:(0,O.$)("d-flex flex-row flex-items-center",t),children:(0,r.jsx)(l.A,{muted:!0,href:e.path,"aria-label":`${e.login}'s org home page`,"data-hovercard-url":(0,i.qsO)({owner:e.login}),className:B.orgLink,children:e.login})}):null}try{W.displayName||(W.displayName="OrgLink")}catch{}function D({author:e,repo:t}){return(0,r.jsx)(C,{author:e,repo:t})}function z({author:e,committer:t,committerAttribution:a,onBehalfOf:o,repo:i}){let n=[e];return t&&a&&n.push(t),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{authors:n,onBehalfOf:o}),(0,r.jsx)(I,{author:e,repo:i,sx:{pl:1}})]})}function T({authors:e,onBehalfOf:t,repo:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{authors:e,onBehalfOf:t}),e.map((t,o)=>(0,r.jsxs)(p.Fragment,{children:[(0,r.jsx)(I,{author:t,repo:a,sx:{pl:1}}),o!==e.length-1&&(0,r.jsx)("span",{className:"pl-1",children:"and"})]},`${t.login}_${o}`))]})}function $({authors:e,onBehalfOf:t,repo:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{authors:e,onBehalfOf:t}),(0,r.jsx)(S,{authors:e,repo:a})]})}function F({authors:e,committer:t,committerAttribution:a,onBehalfOf:o,repo:i,children:l,includeVerbs:s=!0,authorSettings:c,textVariant:d="default"}){let u=1===e.length&&!a&&!o,h=1===e.length&&(a||o),p=2===e.length&&!a,m=e[0];return(0,r.jsx)(n.A,{sx:{display:"flex",flexDirection:"row",flexWrap:["wrap","wrap","wrap","nowrap"],alignItems:"center"},className:"muted"===d?"color-fg-muted":"",children:(0,r.jsxs)(f,{authorSettings:c,children:[u&&m&&(0,r.jsx)(D,{author:m,repo:i}),h&&m&&(0,r.jsx)(z,{author:m,committer:t,committerAttribution:a,onBehalfOf:o,repo:i}),p&&(0,r.jsx)(T,{authors:e,onBehalfOf:o,repo:i}),!u&&!h&&!p&&(0,r.jsx)($,{authors:e,onBehalfOf:o,repo:i}),(0,r.jsx)(L,{committer:t,committerAttribution:a||!1,includeVerbs:s,repo:i,verbClass:s?"pl-1":""}),o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"pl-1",children:"on behalf of"}),(0,r.jsx)(W,{org:o,className:"pl-1"})]}),l]})})}function L({committer:e,committerAttribution:t,includeVerbs:a,repo:o,verbClass:i}){return e&&e.isGitHub?(0,r.jsx)("span",{className:i,children:a&&"authored"}):t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"pl-1",children:a?"authored and":"and"}),(0,r.jsx)(I,{author:e,repo:o,sx:{pl:1}}),(0,r.jsx)("span",{className:i,children:a&&"committed"})]}):(0,r.jsx)("span",{className:i,children:a&&"committed"})}try{D.displayName||(D.displayName="SingleAuthor")}catch{}try{z.displayName||(z.displayName="AuthorByline")}catch{}try{T.displayName||(T.displayName="TwoAuthors")}catch{}try{$.displayName||($.displayName="MultipleAuthors")}catch{}try{F.displayName||(F.displayName="CommitAttribution")}catch{}try{L.displayName||(L.displayName="AuthoredOrCommitted")}catch{}},92309:(e,t,a)=>{a.d(t,{xC:()=>v,B6:()=>N,ym:()=>A});var r=a(74848),o=a(38621),i=a(55847),n=a(87330),l=a(30729),s=a(94977),c=a(96540),d=a(20053),u=a(75177),h=a(30595),p=a(91246),m=a(91579),x=a(34614),f=a(52464);function g({checkRun:e}){let{icon:t,iconColor:a}=function(e){switch(e){case"check":return{icon:o.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:o.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:o.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:o.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:o.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:o.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:o.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:o.AlertIcon,iconColor:"danger.fg"};default:return{icon:o.XIcon,iconColor:"danger.fg"}}}(e.icon),i="in_progress"===e.state;return(0,r.jsxs)(u.A,{"data-testid":"check-run-item",as:"li",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",py:2,pr:3,pl:"12px",alignItems:"center"},children:[(0,r.jsxs)(u.A,{sx:{alignSelf:"center",display:"flex"},children:[i?(0,r.jsx)(u.A,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,r.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,r.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})}):(0,r.jsx)(l.A,{icon:t,sx:{color:a,margin:"0px 7px",alignSelf:"center"}}),(0,r.jsx)(s.A,{"aria-label":e.avatarDescription,direction:"e",children:(0,r.jsx)(x.A,{href:e.avatarUrl,sx:{mr:2},"aria-label":"Avatar",children:(0,r.jsx)(m.r,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})})]}),(0,r.jsxs)(f.A,{sx:{fontSize:"13px",color:"fg.muted"},children:[(0,r.jsxs)(f.A,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,r.jsx)(f.A,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,r.jsxs)("span",{children:[" ","- ",e.pending?(0,r.jsx)(f.A,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,r.jsx)(x.A,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}try{g.displayName||(g.displayName="CheckRunItem")}catch{}function y({checkRuns:e}){return(0,r.jsx)(u.A,{as:"ul",sx:{display:"flex",flexDirection:"column",maxHeight:["230px","380px"],overflow:"auto"},children:e.map((e,t)=>(0,r.jsx)(g,{checkRun:e},t))})}try{y.displayName||(y.displayName="ChecksStatusBadgeFooter")}catch{}function j({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,r.jsx)(f.A,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-attention, var(--color-attention-fg))",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{j.displayName||(j.displayName="HeaderState")}catch{}function v(e){let{combinedStatus:t,isOpen:a,onDismiss:o}=e,i=t?(0,r.jsx)(j,{checksHeaderState:t.checksHeaderState}):"Loading...";return a?(0,r.jsx)(p.l,{onClose:o,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",border:"1px solid",borderColor:"border.default",borderBottom:0},title:i,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,r.jsx)(p.l.Body,{sx:{padding:0},children:t?(0,r.jsx)(y,{checkRuns:t.checkRuns}):(0,r.jsx)(u.A,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,r.jsx)(h.A,{size:"medium"})})})}):null}try{v.displayName||(v.displayName="CheckStatusDialog")}catch{}let b={success:{circled:o.CheckCircleIcon,filled:o.CheckCircleFillIcon,default:o.CheckIcon,color:"var(--bgColor-success-emphasis, var(--color-success-emphasis))"},pending:{circled:o.CircleIcon,filled:o.DotFillIcon,default:o.DotFillIcon,color:"var(--bgColor-attention-emphasis, var(--color-scale-yellow-4))"},failure:{circled:o.XCircleIcon,filled:o.XCircleFillIcon,default:o.XIcon,color:"var(--bgColor-danger-emphasis, var(--color-scale-red-4))"},error:{circled:o.QuestionIcon,filled:o.QuestionIcon,default:o.QuestionIcon,color:"var(--fgColor-muted, var(--color-canvas-subtle))"}};function C({className:e,descriptionText:t,icon:a,iconColor:o,tooltipText:i}){let n=(0,c.useId)(),u=(0,r.jsx)(l.A,{"aria-labelledby":i?n:void 0,icon:a,"aria-label":i?void 0:t||"See all checks",sx:{color:o}});return i&&(u=(0,r.jsx)(s.A,{id:n,"aria-label":i,direction:"e",children:u})),(0,r.jsxs)("span",{className:(0,d.$)(e,"d-flex flex-items-center gap-1"),"data-testid":"checks-status-badge-icon-only",children:[u,t&&(0,r.jsxs)("span",{children:[" ",t]})]})}function N(e){let{statusRollup:t,combinedStatus:a,variant:o="default",disablePopover:l,buttonSx:d,size:u="medium",descriptionText:h="",onWillOpenPopup:p}=e,[m,x]=(0,c.useState)(!1),f=(0,c.useId)(),g=(0,c.useRef)(null),y=b[t],{icon:j,iconColor:N}={icon:y?.[o]||b.error[o],iconColor:y?.color||b.error.color};return"error"===t?(0,r.jsx)(C,{className:l?void 0:"p-1",descriptionText:"?/?",icon:j,iconColor:N,tooltipText:"There was an error retrieving checks status"}):l?(0,r.jsx)(C,{descriptionText:h,icon:j,iconColor:N}):(0,r.jsxs)(r.Fragment,{children:[h?(0,r.jsx)(i.Q,{"data-testid":"checks-status-badge-button",leadingVisual:j,variant:"invisible",size:u,"aria-label":a?.checksStatusSummary??`Status checks: ${t}`,sx:{p:1,color:"fg.default",fontWeight:"normal",svg:{color:N},...d},ref:g,onClick:()=>{p?.(),x(!0)},children:h}):(0,r.jsx)(s.A,{id:f,"aria-label":a?.checksStatusSummary??t,direction:"se",sx:{mr:2},children:(0,r.jsx)(n.K,{unsafeDisableTooltip:!0,"data-testid":"checks-status-badge-icon",icon:j,variant:"invisible",size:u,"aria-labelledby":f,sx:{py:0,px:0,svg:{color:N},":hover:not([disabled])":{bg:"pageHeaderBg"},...d},ref:g,onClick:()=>{p?.(),x(!0)}})}),m&&(0,r.jsx)(v,{combinedStatus:a,isOpen:m,onDismiss:()=>{x(!1),setTimeout(()=>{g.current?.focus()},0)}})]})}try{C.displayName||(C.displayName="IconOnlyStatus")}catch{}try{N.displayName||(N.displayName="ChecksStatusBadge")}catch{}var k=a(4227),S=a(46335);function A(e,t){let[a,r]=(0,c.useState)(),[o,i]=(0,c.useState)();return[a,(0,c.useCallback)(async()=>{if(o!==e&&(i(e),r(void 0),e)){let a=(0,k.vki)(t,e),o=await (0,S.lS)(a);r(await o.json())}},[e,o,t])]}},98063:(e,t,a)=>{let r;a.d(t,{BI:()=>p,Ti:()=>m,lA:()=>h});var o=a(70837),i=a(18679),n=a(10943),l=a(29583);let{getItem:s}=(0,n.A)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,r=new i.s(e)}catch{}function u(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,a]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=a,delete t[e]);let a=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(a&&Object.assign(t,JSON.parse(atob(a.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,l.X)().toString(),Object.assign(t,e)}function h(e){r?.sendPageView(u(e))}function p(e,t={}){let a=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=a?{service:a}:{};for(let[e,a]of Object.entries(t))null!=a&&(o[e]=`${a}`);r&&(u(o),r.sendEvent(e||"unknown",u(o)))}function m(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},67233:(e,t,a)=>{a.d(t,{A:()=>r});let r=(e,t)=>{let a=new URL(e,window.location.origin),r=new URL(t,window.location.origin);return r.href.includes("#")&&a.host===r.host&&a.pathname===r.pathname&&a.search===r.search}},97919:(e,t,a)=>{a.d(t,{S:()=>l,s:()=>n});var r=a(96540),o=a(98063),i=a(37652);function n(){let e=(0,r.useContext)(i.I);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:a,metadata:n}=e;return{sendAnalyticsEvent:(0,r.useCallback)((e,r,i={})=>{let l={react:!0,app_name:t,category:a,...n};(0,o.BI)(e,{...l,...i,target:r})},[t,a,n])}}function l(){let{sendAnalyticsEvent:e}=n();return{sendClickAnalyticsEvent:(0,r.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},94223:(e,t,a)=>{a.d(t,{Z:()=>u,o:()=>h});var r=a(96540),o=a(47767),i=a(45588),n=a(84976),l=a(67233),s=a(2989),c=a(73036),d=a(75926);let u=()=>{let{routes:e}=r.useContext(s.B),t=(0,o.Zp)();return r.useCallback((o,n={})=>{let s=(0,i.o1)(o).pathname;if((0,i.ue)(e,s)){(0,l.A)(location.href,o.toString())||(0,c.SC)("react");let{preventAutofocus:e,...a}=n;(0,r.startTransition)(()=>{t(o,e?{...a,state:{[d.V]:!0,...a.state}}:a);let{turbo:r,...i}=window.history.state??{};window.history.replaceState({...i,skipTurbo:!0},"",location.href)})}else{let e="string"==typeof o?o:(0,i.AO)(o);(async()=>{let{softNavigate:t}=await Promise.all([a.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),a.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(a.bind(a,37175));t(e)})()}},[t,e])},h=()=>{let[e]=(0,n.ok)(),t=u(),{pathname:a}=(0,o.zy)(),i=r.useCallback((r,o={})=>{t({pathname:a,search:(0,n.PI)("function"==typeof r?r(e):r).toString()},o)},[e,t,a]);return[e,i]}},16563:(e,t,a)=>{a.d(t,{d:()=>n,t:()=>l});var r=a(74848),o=a(96540);let i=o.createContext({});function n({repository:e,children:t}){return(0,r.jsxs)(i.Provider,{value:e,children:[" ",t," "]})}function l(){return o.useContext(i)}try{i.displayName||(i.displayName="CurrentRepositoryContext")}catch{}try{n.displayName||(n.displayName="CurrentRepositoryProvider")}catch{}},87163:(e,t,a)=>{a.d(t,{Q:()=>n,i:()=>l});var r=a(74848),o=a(96540);let i=o.createContext(void 0);function n({user:e,children:t}){return(0,r.jsxs)(i.Provider,{value:e,children:[" ",t," "]})}function l(){return o.useContext(i)}try{i.displayName||(i.displayName="CurrentUserContext")}catch{}try{n.displayName||(n.displayName="CurrentUserProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-530254-226d677f950b.js.map