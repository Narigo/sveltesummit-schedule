import{S as t,i as s,s as l,D as e,e as n,c,a as o,d as a,b as r,f as h,E as u,F as $,G as f,x as i,u as m,k as p,n as d,t as g,g as v,j as E,m as k,H as x,o as z,v as w,r as b,w as L,J as S,I}from"./vendor-5f79eb5a.js";import{b as y}from"./paths-45dac81d.js";const j=[{value:"svelte-summit-2021-spring",label:"Svelte Summit Spring 2021"}];function A(t){let s,l;const p=t[3].default,d=e(p,t,t[2],null);return{c(){s=n("a"),d&&d.c(),this.h()},l(t){s=c(t,"A",{href:!0,class:!0});var l=o(s);d&&d.l(l),l.forEach(a),this.h()},h(){r(s,"href",t[0]),r(s,"class","svelte-1uny5yh")},m(t,e){h(t,s,e),d&&d.m(s,null),l=!0},p(t,[s]){d&&d.p&&(!l||4&s)&&u(d,p,t,t[2],l?f(p,t[2],s,null):$(t[2]),null)},i(t){l||(i(d,t),l=!0)},o(t){m(d,t),l=!1},d(t){t&&a(s),d&&d.d(t)}}}function B(t,s,l){let{$$slots:e={},$$scope:n}=s,{to:c}=s;const o=/^\w+:\/\//.test(c)?c:`${y}${c}`;return t.$$set=t=>{"to"in t&&l(1,c=t.to),"$$scope"in t&&l(2,n=t.$$scope)},[o,c,n,e]}class D extends t{constructor(t){super(),s(this,t,B,A,l,{to:1})}}function F(t,s,l){const e=t.slice();return e[2]=s[l],e}const H=t=>({}),O=t=>({}),R=t=>({}),U=t=>({}),G=t=>({}),J=t=>({}),M=t=>({}),N=t=>({});function T(t){let s,l;const p=t[0].header,d=e(p,t,t[1],J),E=d||function(t){let s;return{c(){s=g("hello")},l(t){s=v(t,"hello")},m(t,l){h(t,s,l)},d(t){t&&a(s)}}}();return{c(){s=n("header"),E&&E.c(),this.h()},l(t){s=c(t,"HEADER",{class:!0});var l=o(s);E&&E.l(l),l.forEach(a),this.h()},h(){r(s,"class","svelte-k5t47z")},m(t,e){h(t,s,e),E&&E.m(s,null),l=!0},p(t,s){d&&d.p&&(!l||2&s)&&u(d,p,t,t[1],l?f(p,t[1],s,G):$(t[1]),J)},i(t){l||(i(E,t),l=!0)},o(t){m(E,t),l=!1},d(t){t&&a(s),E&&E.d(t)}}}function q(t){let s;return{c(){s=g("Back to selection")},l(t){s=v(t,"Back to selection")},m(t,l){h(t,s,l)},d(t){t&&a(s)}}}function C(t){let s,l=t[2].label+"";return{c(){s=g(l)},l(t){s=v(t,l)},m(t,l){h(t,s,l)},p:I,d(t){t&&a(s)}}}function K(t){let s,l,e;return l=new D({props:{to:`/schedule/${t[2].value}`,$$slots:{default:[C]},$$scope:{ctx:t}}}),{c(){s=n("li"),E(l.$$.fragment),this.h()},l(t){s=c(t,"LI",{class:!0});var e=o(s);k(l.$$.fragment,e),e.forEach(a),this.h()},h(){r(s,"class","svelte-k5t47z")},m(t,n){h(t,s,n),z(l,s,null),e=!0},p(t,s){const e={};2&s&&(e.$$scope={dirty:s,ctx:t}),l.$set(e)},i(t){e||(i(l.$$.fragment,t),e=!0)},o(t){m(l.$$.fragment,t),e=!1},d(t){t&&a(s),w(l)}}}function P(t){let s;return{c(){s=g("Show more schedules")},l(t){s=v(t,"Show more schedules")},m(t,l){h(t,s,l)},d(t){t&&a(s)}}}function Q(t){let s,l,e,u,$,f,g;e=new D({props:{to:"/",$$slots:{default:[q]},$$scope:{ctx:t}}});let v=j.slice(0,3),I=[];for(let n=0;n<v.length;n+=1)I[n]=K(F(t,v,n));const y=t=>m(I[t],1,1,(()=>{I[t]=null}));let A=j.length>=4&&function(t){let s,l,e;return l=new D({props:{to:"/",$$slots:{default:[P]},$$scope:{ctx:t}}}),{c(){s=n("li"),E(l.$$.fragment),this.h()},l(t){s=c(t,"LI",{class:!0});var e=o(s);k(l.$$.fragment,e),e.forEach(a),this.h()},h(){r(s,"class","svelte-k5t47z")},m(t,n){h(t,s,n),z(l,s,null),e=!0},i(t){e||(i(l.$$.fragment,t),e=!0)},o(t){m(l.$$.fragment,t),e=!1},d(t){t&&a(s),w(l)}}}(t);return{c(){s=n("ul"),l=n("li"),E(e.$$.fragment),u=p(),$=n("ul");for(let t=0;t<I.length;t+=1)I[t].c();f=p(),A&&A.c(),this.h()},l(t){s=c(t,"UL",{class:!0});var n=o(s);l=c(n,"LI",{class:!0});var r=o(l);k(e.$$.fragment,r),r.forEach(a),n.forEach(a),u=d(t),$=c(t,"UL",{class:!0});var h=o($);for(let s=0;s<I.length;s+=1)I[s].l(h);f=d(h),A&&A.l(h),h.forEach(a),this.h()},h(){r(l,"class","svelte-k5t47z"),r(s,"class","svelte-k5t47z"),r($,"class","svelte-k5t47z")},m(t,n){h(t,s,n),x(s,l),z(e,l,null),h(t,u,n),h(t,$,n);for(let s=0;s<I.length;s+=1)I[s].m($,null);x($,f),A&&A.m($,null),g=!0},p(t,s){const l={};if(2&s&&(l.$$scope={dirty:s,ctx:t}),e.$set(l),0&s){let l;for(v=j.slice(0,3),l=0;l<v.length;l+=1){const e=F(t,v,l);I[l]?(I[l].p(e,s),i(I[l],1)):(I[l]=K(e),I[l].c(),i(I[l],1),I[l].m($,f))}for(b(),l=v.length;l<I.length;l+=1)y(l);L()}},i(t){if(!g){i(e.$$.fragment,t);for(let t=0;t<v.length;t+=1)i(I[t]);i(A),g=!0}},o(t){m(e.$$.fragment,t),I=I.filter(Boolean);for(let s=0;s<I.length;s+=1)m(I[s]);m(A),g=!1},d(t){t&&a(s),w(e),t&&a(u),t&&a($),S(I,t),A&&A.d()}}}function V(t){let s,l,g,v;const E=t[0].fullheader,k=e(E,t,t[1],N),x=k||T(t),z=t[0].default,w=e(z,t,t[1],null),b=t[0]["full-footer"],L=e(b,t,t[1],U),S=L||function(t){let s,l;const p=t[0].footer,d=e(p,t,t[1],O),g=d||Q(t);return{c(){s=n("footer"),g&&g.c(),this.h()},l(t){s=c(t,"FOOTER",{class:!0});var l=o(s);g&&g.l(l),l.forEach(a),this.h()},h(){r(s,"class","svelte-k5t47z")},m(t,e){h(t,s,e),g&&g.m(s,null),l=!0},p(t,s){d&&d.p&&(!l||2&s)&&u(d,p,t,t[1],l?f(p,t[1],s,H):$(t[1]),O)},i(t){l||(i(g,t),l=!0)},o(t){m(g,t),l=!1},d(t){t&&a(s),g&&g.d(t)}}}(t);return{c(){x&&x.c(),s=p(),l=n("main"),w&&w.c(),g=p(),S&&S.c(),this.h()},l(t){x&&x.l(t),s=d(t),l=c(t,"MAIN",{class:!0});var e=o(l);w&&w.l(e),e.forEach(a),g=d(t),S&&S.l(t),this.h()},h(){r(l,"class","svelte-k5t47z")},m(t,e){x&&x.m(t,e),h(t,s,e),h(t,l,e),w&&w.m(l,null),h(t,g,e),S&&S.m(t,e),v=!0},p(t,[s]){k?k.p&&(!v||2&s)&&u(k,E,t,t[1],v?f(E,t[1],s,M):$(t[1]),N):x&&x.p&&(!v||2&s)&&x.p(t,v?s:-1),w&&w.p&&(!v||2&s)&&u(w,z,t,t[1],v?f(z,t[1],s,null):$(t[1]),null),L?L.p&&(!v||2&s)&&u(L,b,t,t[1],v?f(b,t[1],s,R):$(t[1]),U):S&&S.p&&(!v||2&s)&&S.p(t,v?s:-1)},i(t){v||(i(x,t),i(w,t),i(S,t),v=!0)},o(t){m(x,t),m(w,t),m(S,t),v=!1},d(t){x&&x.d(t),t&&a(s),t&&a(l),w&&w.d(t),t&&a(g),S&&S.d(t)}}}function W(t,s,l){let{$$slots:e={},$$scope:n}=s;return t.$$set=t=>{"$$scope"in t&&l(1,n=t.$$scope)},[e,n]}class X extends t{constructor(t){super(),s(this,t,W,V,l,{})}}export{X as L,j as a,D as b};