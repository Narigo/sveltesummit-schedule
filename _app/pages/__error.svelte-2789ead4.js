import{S as t,i as e,s,j as a,m as r,o as n,x as o,u as $,v as c,e as f,t as l,k as u,c as p,a as m,g as i,d,n as h,f as g,H as v,h as x,b as w,l as E,w as b,I as k,r as j,J as y}from"../chunks/vendor-f1d687f4.js";import{p as C}from"../chunks/stores-834b2252.js";import{L as S,a as M}from"../chunks/layout-48535b11.js";import"../chunks/paths-45dac81d.js";function H(t){let e;return{c(){e=l("Main page")},l(t){e=i(t,"Main page")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function N(t){let e,s,w,E,b,k,j;return k=new M({props:{to:"/",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){e=f("p"),s=l("The page "),w=l(t[0]),E=l(" could not be found."),b=u(),a(k.$$.fragment)},l(a){e=p(a,"P",{});var n=m(e);s=i(n,"The page "),w=i(n,t[0]),E=i(n," could not be found."),n.forEach(d),b=h(a),r(k.$$.fragment,a)},m(t,a){g(t,e,a),v(e,s),v(e,w),v(e,E),g(t,b,a),n(k,t,a),j=!0},p(t,e){(!j||1&e)&&x(w,t[0]);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),k.$set(s)},i(t){j||(o(k.$$.fragment,t),j=!0)},o(t){$(k.$$.fragment,t),j=!1},d(t){t&&d(e),t&&d(b),c(k,t)}}}function I(t){let e,s;return{c(){e=f("h1"),s=l("404 - Not found"),this.h()},l(t){e=p(t,"H1",{slot:!0});var a=m(e);s=i(a,"404 - Not found"),a.forEach(d),this.h()},h(){w(e,"slot","header")},m(t,a){g(t,e,a),v(e,s)},d(t){t&&d(e)}}}function O(t){let e;return{c(){e=l("Main page")},l(t){e=i(t,"Main page")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function P(t){let e;return{c(){e=l("Official Svelte Summit page")},l(t){e=i(t,"Official Svelte Summit page")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function T(t){let e,s,l,i,x;return s=new M({props:{to:"/",$$slots:{default:[O]},$$scope:{ctx:t}}}),i=new M({props:{to:"https://sveltesummit.com/",target:"_blank",rel:"noopener nofollow noreferer",$$slots:{default:[P]},$$scope:{ctx:t}}}),{c(){e=f("div"),a(s.$$.fragment),l=u(),a(i.$$.fragment),this.h()},l(t){e=p(t,"DIV",{slot:!0,class:!0});var a=m(e);r(s.$$.fragment,a),l=h(a),r(i.$$.fragment,a),a.forEach(d),this.h()},h(){w(e,"slot","footer"),w(e,"class","svelte-1ur0ct5")},m(t,a){g(t,e,a),n(s,e,null),v(e,l),n(i,e,null),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),i.$set(r)},i(t){x||(o(s.$$.fragment,t),o(i.$$.fragment,t),x=!0)},o(t){$(s.$$.fragment,t),$(i.$$.fragment,t),x=!1},d(t){t&&d(e),c(s),c(i)}}}function D(t){let e,s;return e=new S({props:{$$slots:{footer:[T],header:[I],default:[N]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,a){n(e,t,a),s=!0},p(t,[s]){const a={};3&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(o(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function J(t,e,s){let{path:a}=e;return t.$$set=t=>{"path"in t&&s(0,a=t.path)},[a]}class L extends t{constructor(t){super(),e(this,t,J,D,s,{path:0})}}function V(t){let e,s,a,r,n;return{c(){e=f("h1"),s=l("Error!"),a=u(),r=f("p"),n=l(t[1])},l(o){e=p(o,"H1",{});var $=m(e);s=i($,"Error!"),$.forEach(d),a=h(o),r=p(o,"P",{});var c=m(r);n=i(c,t[1]),c.forEach(d)},m(t,o){g(t,e,o),v(e,s),g(t,a,o),g(t,r,o),v(r,n)},p(t,e){2&e&&x(n,t[1])},i:y,o:y,d(t){t&&d(e),t&&d(a),t&&d(r)}}}function _(t){let e,s;return e=new L({props:{path:t[2].path}}),{c(){a(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,a){n(e,t,a),s=!0},p(t,s){const a={};4&s&&(a.path=t[2].path),e.$set(a)},i(t){s||(o(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function q(t){let e,s,a,r;const n=[_,V],c=[];function f(t,e){return 404===t[0]?0:1}return e=f(t),s=c[e]=n[e](t),{c(){s.c(),a=E()},l(t){s.l(t),a=E()},m(t,s){c[e].m(t,s),g(t,a,s),r=!0},p(t,[r]){let l=e;e=f(t),e===l?c[e].p(t,r):(j(),$(c[l],1,1,(()=>{c[l]=null})),b(),s=c[e],s?s.p(t,r):(s=c[e]=n[e](t),s.c()),o(s,1),s.m(a.parentNode,a))},i(t){r||(o(s),r=!0)},o(t){$(s),r=!1},d(t){c[e].d(t),t&&d(a)}}}function z({error:t,status:e}){return{props:{statusCode:e,message:`${e}: ${t.message}`}}}function A(t,e,s){let a;k(t,C,(t=>s(2,a=t)));let{statusCode:r}=e,{message:n}=e;return t.$$set=t=>{"statusCode"in t&&s(0,r=t.statusCode),"message"in t&&s(1,n=t.message)},[r,n,a]}class B extends t{constructor(t){super(),e(this,t,A,q,s,{statusCode:0,message:1})}}export{B as default,z as load};
