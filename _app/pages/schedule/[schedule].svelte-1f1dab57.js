import{K as e,S as t,i as s,s as l,D as n,e as a,t as r,k as o,c as i,a as c,g as u,d as f,n as h,b as m,f as $,H as p,h as d,E as g,F as v,G as b,x as S,u as T,j as E,m as y,o as k,v as _,r as P,w as C,J as I,L as M,I as w,M as x,N as A,O as D,P as L}from"../../chunks/vendor-33009355.js";import{L as j}from"../../chunks/layout-7506ef2f.js";import{_ as F}from"../../chunks/preload-helper-08cc8e69.js";const H={subscribe:t=>(()=>{const t=e("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}})().page.subscribe(t)};function B(e){let t,s,l,E,y,k;const _=e[2].default,P=n(_,e,e[1],null);return{c(){t=a("li"),s=a("span"),l=r(e[0]),E=o(),y=a("span"),P&&P.c(),this.h()},l(n){t=i(n,"LI",{class:!0});var a=c(t);s=i(a,"SPAN",{class:!0});var r=c(s);l=u(r,e[0]),r.forEach(f),E=h(a),y=i(a,"SPAN",{class:!0});var o=c(y);P&&P.l(o),o.forEach(f),a.forEach(f),this.h()},h(){m(s,"class","time"),m(y,"class","talk svelte-1yrl9no"),m(t,"class","svelte-1yrl9no")},m(e,n){$(e,t,n),p(t,s),p(s,l),p(t,E),p(t,y),P&&P.m(y,null),k=!0},p(e,[t]){(!k||1&t)&&d(l,e[0]),P&&P.p&&(!k||2&t)&&g(P,_,e,e[1],k?b(_,e[1],t,null):v(e[1]),null)},i(e){k||(S(P,e),k=!0)},o(e){T(P,e),k=!1},d(e){e&&f(t),P&&P.d(e)}}}function J(e,t,s){let{$$slots:l={},$$scope:n}=t,{time:a}=t;return e.$$set=e=>{"time"in e&&s(0,a=e.time),"$$scope"in e&&s(1,n=e.$$scope)},[a,n,l]}class N extends t{constructor(e){super(),s(this,e,J,B,l,{time:0})}}function O(e,t,s){const l=e.slice();return l[7]=t[s],l}function G(e){let t,s=e[7].name+"";return{c(){t=r(s)},l(e){t=u(e,s)},m(e,s){$(e,t,s)},p(e,l){1&l&&s!==(s=e[7].name+"")&&d(t,s)},d(e){e&&f(t)}}}function K(e){let t,s;return t=new N({props:{time:e[1](e[7].time),$$slots:{default:[G]},$$scope:{ctx:e}}}),{c(){E(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,l){k(t,e,l),s=!0},p(e,s){const l={};3&s&&(l.time=e[1](e[7].time)),1025&s&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){T(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function R(e){let t,s,l,n,d,g=e[0],v=[];for(let a=0;a<g.length;a+=1)v[a]=K(O(e,g,a));const b=e=>T(v[e],1,1,(()=>{v[e]=null}));return{c(){t=a("h2"),s=r("Svelte Summit Schedule"),l=o(),n=a("ol");for(let e=0;e<v.length;e+=1)v[e].c();this.h()},l(e){t=i(e,"H2",{});var a=c(t);s=u(a,"Svelte Summit Schedule"),a.forEach(f),l=h(e),n=i(e,"OL",{class:!0});var r=c(n);for(let t=0;t<v.length;t+=1)v[t].l(r);r.forEach(f),this.h()},h(){m(n,"class","svelte-1qm6ng")},m(e,a){$(e,t,a),p(t,s),$(e,l,a),$(e,n,a);for(let t=0;t<v.length;t+=1)v[t].m(n,null);d=!0},p(e,[t]){if(3&t){let s;for(g=e[0],s=0;s<g.length;s+=1){const l=O(e,g,s);v[s]?(v[s].p(l,t),S(v[s],1)):(v[s]=K(l),v[s].c(),S(v[s],1),v[s].m(n,null))}for(P(),s=g.length;s<v.length;s+=1)b(s);C()}},i(e){if(!d){for(let e=0;e<g.length;e+=1)S(v[e]);d=!0}},o(e){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)T(v[t]);d=!1},d(e){e&&f(t),e&&f(l),e&&f(n),I(v,e)}}}function q(e,t){const[s,l]=t.split(/:/).map((e=>parseInt(e,10))),[n,a]=e.split(/:/).map((e=>parseInt(e,10)));return`${Math.floor((l+a)/60)+n+s}:${(l+a)%60}`}function z(e){return function(e){return 0===e.length||!!e[0].time}(e)?e:e.reduce(((e,t,s)=>[...e,{name:t.name,time:0===s?"0:00":q(t.duration,e[e.length-1].time)}]),[])}function V(e){return`${e}`.padStart(2,"0")}function W(e,t,s){let l,{offset:n=0}=t,{scheduleFile:a}=t,r=[],o=z(r);return e.$$set=e=>{"offset"in e&&s(2,n=e.offset),"scheduleFile"in e&&s(3,a=e.scheduleFile)},e.$$.update=()=>{4&e.$$.dirty&&s(1,l=e=>function(e,t){const[s,l]=e.split(/:/).map((e=>parseInt(e,10))),n=60*s+l+t+840,a=n%60;return`${V(Math.floor(n/60)%24)}:${V(a)}`}(e,n)),24&e.$$.dirty&&function(e){switch(e){case"../service/schedules/svelte-summit-2021-spring-by-duration.js":return F((()=>import("../../chunks/svelte-summit-2021-spring-by-duration-76174325.js")),[]);default:return new Promise((function(t,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../service/schedules/${a}.js`).then((e=>{s(4,r=e.default),s(0,o=z(r))}))},[o,l,n,a,r]}class U extends t{constructor(e){super(),s(this,e,W,R,l,{offset:2,scheduleFile:3})}}function Y(e,t,s){const l=e.slice();return l[5]=t[s],l}function Q(e){let t,s,l,n=e[5].label+"";return{c(){t=a("option"),s=r(n),this.h()},l(e){t=i(e,"OPTION",{});var l=c(t);s=u(l,n),l.forEach(f),this.h()},h(){t.__value=l=e[5].value,t.value=t.__value},m(e,l){$(e,t,l),p(t,s)},p:w,d(e){e&&f(t)}}}function X(e){let t,s,l,n,m,d,g,v,b,P=e[2],C=[];for(let a=0;a<P.length;a+=1)C[a]=Q(Y(e,P,a));return d=new U({props:{offset:e[0],scheduleFile:e[1]}}),{c(){t=a("p"),s=r("Please select your favorite timezone:"),l=o(),n=a("select");for(let e=0;e<C.length;e+=1)C[e].c();m=o(),E(d.$$.fragment),this.h()},l(e){t=i(e,"P",{});var a=c(t);s=u(a,"Please select your favorite timezone:"),a.forEach(f),l=h(e),n=i(e,"SELECT",{});var r=c(n);for(let t=0;t<C.length;t+=1)C[t].l(r);r.forEach(f),m=h(e),y(d.$$.fragment,e),this.h()},h(){void 0===e[0]&&x((()=>e[3].call(n)))},m(a,r){$(a,t,r),p(t,s),$(a,l,r),$(a,n,r);for(let e=0;e<C.length;e+=1)C[e].m(n,null);A(n,e[0]),$(a,m,r),k(d,a,r),g=!0,v||(b=D(n,"change",e[3]),v=!0)},p(e,t){if(4&t){let s;for(P=e[2],s=0;s<P.length;s+=1){const l=Y(e,P,s);C[s]?C[s].p(l,t):(C[s]=Q(l),C[s].c(),C[s].m(n,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=P.length}5&t&&A(n,e[0]);const s={};1&t&&(s.offset=e[0]),d.$set(s)},i(e){g||(S(d.$$.fragment,e),g=!0)},o(e){T(d.$$.fragment,e),g=!1},d(e){e&&f(t),e&&f(l),e&&f(n),I(C,e),e&&f(m),_(d,e),v=!1,b()}}}function Z(e){let t,s,l,n;return{c(){t=a("div"),s=a("h1"),l=r("Svelte Summit schedule "),n=r(e[1]),this.h()},l(a){t=i(a,"DIV",{slot:!0});var r=c(t);s=i(r,"H1",{});var o=c(s);l=u(o,"Svelte Summit schedule "),n=u(o,e[1]),o.forEach(f),r.forEach(f),this.h()},h(){m(t,"slot","header")},m(e,a){$(e,t,a),p(t,s),p(s,l),p(s,n)},p:w,d(e){e&&f(t)}}}function ee(e){let t,s;return t=new j({props:{$$slots:{header:[Z],default:[X]},$$scope:{ctx:e}}}),{c(){E(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,l){k(t,e,l),s=!0},p(e,[s]){const l={};257&s&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){T(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function te(e,t,s){let l;M(e,H,(e=>s(4,l=e)));let n=l.params.schedule;const a=[{value:-480,label:"San Francisco (PDT)"},{value:-420,label:"Salt Lake City (MDT)"},{value:-360,label:"Chicago (CDT), Mexico City (CDT)"},{value:-300,label:"New York City (EDT), Santiago (CLT)"},{value:-240,label:"Buenos Aires (ART), São Paulo (BRT)"},{value:-60,label:"Accra (GMT), Reykjavik (GMT)"},{value:0,label:"London (BST)"},{value:60,label:"Cairo (EET), Johannesburg (SAST), Paris (CEST)"},{value:120,label:"Jerusalem (IDT), Moscow (MSK)"},{value:270,label:"Chennai (IST)"},{value:360,label:"Hanoi (ICT), Jakarta (WIB)"},{value:420,label:"Hong Kong (HKT), Perth (AWST), Singapore (SGT)"},{value:480,label:"Tokyo (JST)"},{value:540,label:"Sydney (AEST)"}];let r=0;return[r,n,a,function(){r=L(this),s(0,r),s(2,a)}]}class se extends t{constructor(e){super(),s(this,e,te,ee,l,{})}}export{se as default};
