import{S as t,i as e,s,j as r,m as a,o,x as l,u as n,v as h,e as c,t as f,c as u,a as i,g as m,d,b as p,f as $,H as g,I as v,l as S,J as b}from"../chunks/vendor-33009355.js";import{L as x}from"../chunks/layout-01f46bdf.js";import{b as E}from"../chunks/paths-45dac81d.js";const j=[{value:"svelte-summit-2021-spring-by-duration",label:"Svelte Summit Spring 2021"}];function k(t,e,s){const r=t.slice();return r[0]=e[s],r}function y(t){let e,s,r,a=t[0].label+"";return{c(){e=c("a"),s=f(a),this.h()},l(t){e=u(t,"A",{href:!0});var r=i(e);s=m(r,a),r.forEach(d),this.h()},h(){p(e,"href",r=`${E}/schedule/${t[0].value}`)},m(t,r){$(t,e,r),g(e,s)},p:v,d(t){t&&d(e)}}}function H(t){let e,s=j,r=[];for(let a=0;a<s.length;a+=1)r[a]=y(k(t,s,a));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);$(t,e,s)},p(t,a){if(0&a){let o;for(s=j,o=0;o<s.length;o+=1){const l=k(t,s,o);r[o]?r[o].p(l,a):(r[o]=y(l),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},d(t){b(r,t),t&&d(e)}}}function I(t){let e,s,r;return{c(){e=c("div"),s=c("h1"),r=f("Welcome to the Svelte Summit Schedule!"),this.h()},l(t){e=u(t,"DIV",{slot:!0});var a=i(e);s=u(a,"H1",{});var o=i(s);r=m(o,"Welcome to the Svelte Summit Schedule!"),o.forEach(d),a.forEach(d),this.h()},h(){p(e,"slot","header")},m(t,a){$(t,e,a),g(e,s),g(s,r)},d(t){t&&d(e)}}}function D(t){let e,s,r;return{c(){e=c("div"),s=c("h1"),r=f("done."),this.h()},l(t){e=u(t,"DIV",{slot:!0});var a=i(e);s=u(a,"H1",{});var o=i(s);r=m(o,"done."),o.forEach(d),a.forEach(d),this.h()},h(){p(e,"slot","footer")},m(t,a){$(t,e,a),g(e,s),g(s,r)},d(t){t&&d(e)}}}function V(t){let e,s;return e=new x({props:{$$slots:{footer:[D],header:[I],default:[H]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,r){o(e,t,r),s=!0},p(t,[s]){const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){n(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}class W extends t{constructor(t){super(),e(this,t,null,V,s,{})}}export{W as default};