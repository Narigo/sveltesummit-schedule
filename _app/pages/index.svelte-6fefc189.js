import{S as t,i as e,s,j as o,m as l,o as a,x as r,u as n,v as c,e as h,c as f,a as u,d as i,b as $,f as m,r as d,w as p,L as g,t as v,g as S,H as x,I as E}from"../chunks/vendor-96c610f7.js";import{L as j,a as I,b}from"../chunks/layout-d875d61d.js";import"../chunks/paths-45dac81d.js";function k(t,e,s){const o=t.slice();return o[0]=e[s],o}function w(t){let e,s=t[0].label+"";return{c(){e=v(s)},l(t){e=S(t,s)},m(t,s){m(t,e,s)},p:E,d(t){t&&i(e)}}}function y(t){let e,s;return e=new b({props:{to:`/schedule/${t[0].value}`,$$slots:{default:[w]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){a(e,t,o),s=!0},p(t,s){const o={};8&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){n(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function H(t){let e,s,o=I,l=[];for(let r=0;r<o.length;r+=1)l[r]=y(k(t,o,r));const a=t=>n(l[t],1,1,(()=>{l[t]=null}));return{c(){e=h("section");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=f(t,"SECTION",{class:!0});var s=u(e);for(let e=0;e<l.length;e+=1)l[e].l(s);s.forEach(i),this.h()},h(){$(e,"class","svelte-1e0pm4f")},m(t,o){m(t,e,o);for(let s=0;s<l.length;s+=1)l[s].m(e,null);s=!0},p(t,s){if(0&s){let n;for(o=I,n=0;n<o.length;n+=1){const a=k(t,o,n);l[n]?(l[n].p(a,s),r(l[n],1)):(l[n]=y(a),l[n].c(),r(l[n],1),l[n].m(e,null))}for(d(),n=o.length;n<l.length;n+=1)a(n);p()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)r(l[t]);s=!0}},o(t){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)n(l[e]);s=!1},d(t){t&&i(e),g(l,t)}}}function D(t){let e,s,o;return{c(){e=h("div"),s=h("h1"),o=v("Welcome to the Svelte Summit Schedule!"),this.h()},l(t){e=f(t,"DIV",{slot:!0});var l=u(e);s=f(l,"H1",{});var a=u(s);o=S(a,"Welcome to the Svelte Summit Schedule!"),a.forEach(i),l.forEach(i),this.h()},h(){$(e,"slot","header")},m(t,l){m(t,e,l),x(e,s),x(s,o)},d(t){t&&i(e)}}}function L(t){let e,s,o;return{c(){e=h("div"),s=h("h1"),o=v("done."),this.h()},l(t){e=f(t,"DIV",{slot:!0});var l=u(e);s=f(l,"H1",{});var a=u(s);o=S(a,"done."),a.forEach(i),l.forEach(i),this.h()},h(){$(e,"slot","footer")},m(t,l){m(t,e,l),x(e,s),x(s,o)},d(t){t&&i(e)}}}function V(t){let e,s;return e=new j({props:{$$slots:{footer:[L],header:[D],default:[H]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){a(e,t,o),s=!0},p(t,[s]){const o={};8&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){n(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}class W extends t{constructor(t){super(),e(this,t,null,V,s,{})}}export{W as default};
