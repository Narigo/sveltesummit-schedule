import{S as e,i as a,s as t,e as n,t as l,c as o,a as r,g as i,d as s,b as u,H as c,f as m,F as h,h as f,G as d,j as v,m as g,o as p,v as S,r as k,w as $,k as T,n as y,B,u as b,I as E,J as C,K as w,L as D,M as I}from"../chunks/vendor-c032c2c8.js";function A(e){let a,t,v,g,p,S;return{c(){a=n("li"),t=n("span"),v=l(e[2]),g=n("span"),p=l(e[1]),this.h()},l(n){a=o(n,"LI",{class:!0});var l=r(a);t=o(l,"SPAN",{class:!0});var u=r(t);v=i(u,e[2]),u.forEach(s),g=o(l,"SPAN",{class:!0});var c=r(g);p=i(c,e[1]),c.forEach(s),l.forEach(s),this.h()},h(){u(t,"class","time svelte-1yp3w1c"),u(g,"class","talk svelte-1yp3w1c"),u(a,"class",S=c(e[0])+" svelte-1yp3w1c")},m(e,n){m(e,a,n),h(a,t),h(t,v),h(a,g),h(g,p)},p(e,[t]){4&t&&f(v,e[2]),2&t&&f(p,e[1]),1&t&&S!==(S=c(e[0])+" svelte-1yp3w1c")&&u(a,"class",S)},i:d,o:d,d(e){e&&s(a)}}}function N(e,a,t){let{className:n}=a,{talk:l}=a,{time:o}=a;return e.$$set=e=>{"className"in e&&t(0,n=e.className),"talk"in e&&t(1,l=e.talk),"time"in e&&t(2,o=e.time)},[n,l,o]}class M extends e{constructor(e){super(),a(this,e,N,A,t,{className:0,talk:1,time:2})}}var P="_item_1vnv4_1";function H(e,a,t){const n=e.slice();return n[6]=a[t],n}function L(e){let a,t;return a=new M({props:{className:P,time:e[0](e[6].time),talk:e[6].name}}),{c(){v(a.$$.fragment)},l(e){g(a.$$.fragment,e)},m(e,n){p(a,e,n),t=!0},p(e,t){const n={};1&t&&(n.time=e[0](e[6].time)),a.$set(n)},i(e){t||(S(a.$$.fragment,e),t=!0)},o(e){k(a.$$.fragment,e),t=!1},d(e){$(a,e)}}}function F(e){let a,t,c,f,d,v=e[1],g=[];for(let n=0;n<v.length;n+=1)g[n]=L(H(e,v,n));const p=e=>k(g[e],1,1,(()=>{g[e]=null}));return{c(){a=n("h2"),t=l("Svelte Summit Schedule"),c=T(),f=n("ol");for(let e=0;e<g.length;e+=1)g[e].c();this.h()},l(e){a=o(e,"H2",{});var n=r(a);t=i(n,"Svelte Summit Schedule"),n.forEach(s),c=y(e),f=o(e,"OL",{class:!0});var l=r(f);for(let a=0;a<g.length;a+=1)g[a].l(l);l.forEach(s),this.h()},h(){u(f,"class","svelte-1lj3qyi")},m(e,n){m(e,a,n),h(a,t),m(e,c,n),m(e,f,n);for(let a=0;a<g.length;a+=1)g[a].m(f,null);d=!0},p(e,[a]){if(3&a){let t;for(v=e[1],t=0;t<v.length;t+=1){const n=H(e,v,t);g[t]?(g[t].p(n,a),S(g[t],1)):(g[t]=L(n),g[t].c(),S(g[t],1),g[t].m(f,null))}for(B(),t=v.length;t<g.length;t+=1)p(t);b()}},i(e){if(!d){for(let e=0;e<v.length;e+=1)S(g[e]);d=!0}},o(e){g=g.filter(Boolean);for(let a=0;a<g.length;a+=1)k(g[a]);d=!1},d(e){e&&s(a),e&&s(c),e&&s(f),E(g,e)}}}function x(e,a){const[t,n]=a.split(/:/).map((e=>parseInt(e,10))),[l,o]=e.split(/:/).map((e=>parseInt(e,10)));return`${Math.floor((n+o)/60)+l+t}:${(n+o)%60}`}function G(e){return`${e}`.padStart(2,"0")}function J(e,a,t){let n,{offset:l=0}=a,{schedule:o=[]}=a,r=function(e){return 0===e.length||!!e[0].time}(o)?o:o.reduce(((e,a,t)=>[...e,{name:a.name,time:0===t?"0:00":x(a.duration,e[e.length-1].time)}]),[]);return e.$$set=e=>{"offset"in e&&t(2,l=e.offset),"schedule"in e&&t(3,o=e.schedule)},e.$$.update=()=>{4&e.$$.dirty&&t(0,n=e=>function(e,a){const[t,n]=e.split(/:/).map((e=>parseInt(e,10))),l=60*t+n+a+840,o=l%60;return`${G(Math.floor(l/60)%24)}:${G(o)}`}(e,l))},[n,r,l,o]}class W extends e{constructor(e){super(),a(this,e,J,F,t,{offset:2,schedule:3})}}const _=[{duration:"0:05",name:"Intro"},{duration:"0:10",name:"Generation Svelte"},{duration:"0:05",name:"Break"},{duration:"0:05",name:"Data Science Widgets with Svelte and Jupyter"},{duration:"0:01",name:"Break"},{duration:"0:06",name:"Optimizing Your Svelte Community Experience"},{duration:"0:03",name:"Break"},{duration:"0:25",name:"Svelte-NodeGUI (Full talk)"},{duration:"0:05",name:"Break"},{duration:"0:11",name:"Untangling Composition"},{duration:"0:04",name:"Break"},{duration:"0:08",name:"Testing Svelte"},{duration:"0:07",name:"Break"},{duration:"0:25",name:"Declarative Data Visualization (Full talk)"},{duration:"0:10",name:"A signal engine for audio and music in your Svelte app"},{duration:"0:35",name:"Breakfast/Lunch/Dinner Break and Meetball session (starts at 2.10)!"},{duration:"0:07",name:"Svelte Can Compile and so can you!"},{duration:"0:03",name:"Break"},{duration:"0:26",name:"Svelte Without the JavaScript (Full talk)"},{duration:"0:04",name:"Break"},{duration:"0:25",name:"Design Ñgineering"},{duration:"0:20",name:"Quiz time!!"},{duration:"0:10",name:"Compile for accessibility with Svelte"},{duration:"0:05",name:"Break"},{duration:"0:11",name:"Reactive Forms"},{duration:"0:04",name:"Break"},{duration:"0:25",name:"Building the Next Generation of Low Code with Svelte (Full talk)"},{duration:"0:05",name:"Break"},{duration:"0:25",name:"Zwoosh YEAHHH Shabam! 🤯 Whimsy in motion (Full talk)"},{duration:"0:05",name:"Break"},{duration:"0:30",name:"An update on SvelteKit"},{duration:"0:30",name:"End notes and Discord Stage hangout!"}];function z(e,a,t){const n=e.slice();return n[3]=a[t],n}function K(e){let a,t,u=e[3].label+"";return{c(){a=n("option"),t=l(u),this.h()},l(e){a=o(e,"OPTION",{value:!0});var n=r(a);t=i(n,u),n.forEach(s),this.h()},h(){a.__value=e[3].value,a.value=a.__value},m(e,n){m(e,a,n),h(a,t)},p:d,d(e){e&&s(a)}}}function j(e){let a,t,u,c,f,d,B,b,I,A,N,M,P=e[1],H=[];for(let n=0;n<P.length;n+=1)H[n]=K(z(e,P,n));return I=new W({props:{offset:e[0],schedule:_}}),{c(){a=n("h1"),t=l("Welcome to the Svelte Summit!"),u=T(),c=n("p"),f=l("Please select your favorite timezone:"),d=T(),B=n("select");for(let e=0;e<H.length;e+=1)H[e].c();b=T(),v(I.$$.fragment),this.h()},l(e){a=o(e,"H1",{});var n=r(a);t=i(n,"Welcome to the Svelte Summit!"),n.forEach(s),u=y(e),c=o(e,"P",{});var l=r(c);f=i(l,"Please select your favorite timezone:"),l.forEach(s),d=y(e),B=o(e,"SELECT",{});var m=r(B);for(let a=0;a<H.length;a+=1)H[a].l(m);m.forEach(s),b=y(e),g(I.$$.fragment,e),this.h()},h(){void 0===e[0]&&D((()=>e[2].call(B)))},m(n,l){m(n,a,l),h(a,t),m(n,u,l),m(n,c,l),h(c,f),m(n,d,l),m(n,B,l);for(let e=0;e<H.length;e+=1)H[e].m(B,null);C(B,e[0]),m(n,b,l),p(I,n,l),A=!0,N||(M=w(B,"change",e[2]),N=!0)},p(e,[a]){if(2&a){let t;for(P=e[1],t=0;t<P.length;t+=1){const n=z(e,P,t);H[t]?H[t].p(n,a):(H[t]=K(n),H[t].c(),H[t].m(B,null))}for(;t<H.length;t+=1)H[t].d(1);H.length=P.length}3&a&&C(B,e[0]);const t={};1&a&&(t.offset=e[0]),I.$set(t)},i(e){A||(S(I.$$.fragment,e),A=!0)},o(e){k(I.$$.fragment,e),A=!1},d(e){e&&s(a),e&&s(u),e&&s(c),e&&s(d),e&&s(B),E(H,e),e&&s(b),$(I,e),N=!1,M()}}}function O(e,a,t){let n=0;const l=[{value:-480,label:"San Francisco (PDT)"},{value:-420,label:"Salt Lake City (MDT)"},{value:-360,label:"Chicago (CDT), Mexico City (CDT)"},{value:-300,label:"New York City (EDT), Santiago (CLT)"},{value:-240,label:"Buenos Aires (ART), São Paulo (BRT)"},{value:-60,label:"Accra (GMT), Reykjavik (GMT)"},{value:0,label:"London (BST)"},{value:60,label:"Cairo (EET), Johannesburg (SAST), Paris (CEST)"},{value:120,label:"Jerusalem (IDT), Moscow (MSK)"},{value:270,label:"Chennai (IST)"},{value:360,label:"Hanoi (ICT), Jakarta (WIB)"},{value:420,label:"Hong Kong (HKT), Perth (AWST), Singapore (SGT)"},{value:480,label:"Tokyo (JST)"},{value:540,label:"Sydney (AEST)"}];return[n,l,function(){n=I(this),t(0,n),t(1,l)}]}export default class extends e{constructor(e){super(),a(this,e,O,j,t,{})}}
