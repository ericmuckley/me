import{S as I,i as V,s as k,k as _,q as D,a as S,l as g,m as $,r as P,h as o,c as A,n as h,b as w,G as m,B as b,I as j,J as U,v as z,w as N,x as G,y as q,t as O,d as F,f as B,z as C,o as K,g as Q}from"../../chunks/index-ba563887.js";function J(r,e,n){const a=r.slice();return a[1]=e[n],a}function L(r){let e,n,a=r[1].name+"",t,v,u,E;return{c(){e=_("a"),n=_("i"),t=D(a),v=S(),this.h()},l(d){e=g(d,"A",{href:!0,class:!0});var f=$(e);n=g(f,"I",{class:!0}),$(n).forEach(o),t=P(f,a),v=A(f),f.forEach(o),this.h()},h(){h(n,"class","bi bi-"+r[1].icon+" me-2"),h(e,"href","#"+r[1].name),h(e,"class","text-nowrap nav-link navbar-collapse")},m(d,f){w(d,e,f),m(e,n),m(e,t),m(e,v),u||(E=U(e,"click",X),u=!0)},p:b,d(d){d&&o(e),u=!1,E()}}}function R(r){let e,n,a,t,v,u,E,d,f,s,p=r[0],c=[];for(let i=0;i<p.length;i+=1)c[i]=L(J(r,p,i));return{c(){e=_("nav"),n=_("div"),a=_("a"),t=D("e"),v=S(),u=_("button"),E=_("span"),d=S(),f=_("div"),s=_("div");for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){e=g(i,"NAV",{class:!0});var x=$(e);n=g(x,"DIV",{class:!0});var l=$(n);a=g(l,"A",{class:!0,href:!0});var y=$(a);t=P(y,"e"),y.forEach(o),v=A(l),u=g(l,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0});var H=$(u);E=g(H,"SPAN",{class:!0}),$(E).forEach(o),H.forEach(o),d=A(l),f=g(l,"DIV",{class:!0,id:!0});var T=$(f);s=g(T,"DIV",{class:!0});var W=$(s);for(let M=0;M<c.length;M+=1)c[M].l(W);W.forEach(o),T.forEach(o),l.forEach(o),x.forEach(o),this.h()},h(){h(a,"class","navbar-brand nav-link"),h(a,"href","#home"),h(E,"class","navbar-toggler-icon"),h(u,"class","navbar-toggler"),h(u,"type","button"),h(u,"data-bs-toggle","collapse"),h(u,"data-bs-target","#navcontent"),h(s,"class","navbar-nav me-auto mb-2 mb-lg-0"),h(f,"class","collapse navbar-collapse"),h(f,"id","navcontent"),h(n,"class","container-fluid"),h(e,"class","navbar navbar-expand-lg bg-secondary")},m(i,x){w(i,e,x),m(e,n),m(n,a),m(a,t),m(n,v),m(n,u),m(u,E),m(n,d),m(n,f),m(f,s);for(let l=0;l<c.length;l+=1)c[l].m(s,null)},p(i,[x]){if(x&1){p=i[0];let l;for(l=0;l<p.length;l+=1){const y=J(i,p,l);c[l]?c[l].p(y,x):(c[l]=L(y),c[l].c(),c[l].m(s,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=p.length}},i:b,o:b,d(i){i&&o(e),j(c,i)}}}function X(){let r=document.querySelector(".navbar");console.log(r.classList)}function Y(r,e,n){return[[{name:"web",icon:"code-slash"},{name:"art",icon:"palette-fill"}]]}class Z extends I{constructor(e){super(),V(this,e,Y,R,k,{items:0})}get items(){return this.$$.ctx[0]}}function ee(r){let e,n;return{c(){e=_("div"),n=D("HOME")},l(a){e=g(a,"DIV",{});var t=$(e);n=P(t,"HOME"),t.forEach(o)},m(a,t){w(a,e,t),m(e,n)},p:b,i:b,o:b,d(a){a&&o(e)}}}class te extends I{constructor(e){super(),V(this,e,null,ee,k,{})}}function ae(r){let e,n;return{c(){e=_("div"),n=D("Web dev")},l(a){e=g(a,"DIV",{});var t=$(e);n=P(t,"Web dev"),t.forEach(o)},m(a,t){w(a,e,t),m(e,n)},p:b,i:b,o:b,d(a){a&&o(e)}}}class ne extends I{constructor(e){super(),V(this,e,null,ae,k,{})}}function se(r){let e,n;return{c(){e=_("div"),n=D("Some art")},l(a){e=g(a,"DIV",{});var t=$(e);n=P(t,"Some art"),t.forEach(o)},m(a,t){w(a,e,t),m(e,n)},p:b,i:b,o:b,d(a){a&&o(e)}}}class re extends I{constructor(e){super(),V(this,e,null,se,k,{})}}function le(r){let e,n,a,t,v,u,E;e=new Z({});var d=r[0];function f(s){return{}}return d&&(t=z(d,f())),{c(){N(e.$$.fragment),n=S(),a=_("div"),t&&N(t.$$.fragment),this.h()},l(s){G(e.$$.fragment,s),n=A(s),a=g(s,"DIV",{class:!0});var p=$(a);t&&G(t.$$.fragment,p),p.forEach(o),this.h()},h(){h(a,"class","p-5")},m(s,p){q(e,s,p),w(s,n,p),w(s,a,p),t&&q(t,a,null),v=!0,u||(E=U(window,"hashchange",r[1]),u=!0)},p(s,[p]){if(d!==(d=s[0])){if(t){Q();const c=t;O(c.$$.fragment,1,0,()=>{C(c,1)}),F()}d?(t=z(d,f()),N(t.$$.fragment),B(t.$$.fragment,1),q(t,a,null)):t=null}},i(s){v||(B(e.$$.fragment,s),t&&B(t.$$.fragment,s),v=!0)},o(s){O(e.$$.fragment,s),t&&O(t.$$.fragment,s),v=!1},d(s){C(e,s),s&&o(n),s&&o(a),t&&C(t),u=!1,E()}}}function oe(r,e,n){let a;const t={"#art":re,"#web":ne};K(v);function v(){n(0,a=t[location.hash]||te)}return[a,v]}class ie extends I{constructor(e){super(),V(this,e,oe,le,k,{})}}export{ie as default};
