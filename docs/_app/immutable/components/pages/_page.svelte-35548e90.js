import{S as A,i as G,s as x,k,q as V,a as P,l as w,m as $,r as B,h as g,c as C,n as s,b as I,G as _,B as y,I as N,u as lt,J as K,K as it,v as q,w as L,x as F,y as M,t as O,d as rt,f as T,z as W,o as st,g as nt}from"../../chunks/index-7ef02e2c.js";function z(o,t,e){const i=o.slice();return i[1]=t[e],i}function Q(o){let t,e,i=o[1].name+"",a,c;return{c(){t=k("a"),e=k("i"),a=V(i),c=P(),this.h()},l(u){t=w(u,"A",{href:!0,class:!0});var d=$(t);e=w(d,"I",{class:!0}),$(e).forEach(g),a=B(d,i),c=C(d),d.forEach(g),this.h()},h(){s(e,"class","bi bi-"+o[1].icon+" me-2"),s(t,"href","#"+o[1].name),s(t,"class","text-nowrap nav-link active")},m(u,d){I(u,t,d),_(t,e),_(t,a),_(t,c)},p:y,d(u){u&&g(t)}}}function ot(o){let t,e,i,a,c,u,d,f,n,l,h=o[0],r=[];for(let m=0;m<h.length;m+=1)r[m]=Q(z(o,h,m));return{c(){t=k("nav"),e=k("div"),i=k("a"),a=V("e"),c=P(),u=k("button"),d=k("span"),f=P(),n=k("div"),l=k("div");for(let m=0;m<r.length;m+=1)r[m].c();this.h()},l(m){t=w(m,"NAV",{class:!0});var b=$(t);e=w(b,"DIV",{class:!0});var p=$(e);i=w(p,"A",{class:!0,href:!0});var v=$(i);a=B(v,"e"),v.forEach(g),c=C(p),u=w(p,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0});var E=$(u);d=w(E,"SPAN",{class:!0}),$(d).forEach(g),E.forEach(g),f=C(p),n=w(p,"DIV",{class:!0,id:!0});var j=$(n);l=w(j,"DIV",{class:!0});var D=$(l);for(let S=0;S<r.length;S+=1)r[S].l(D);D.forEach(g),j.forEach(g),p.forEach(g),b.forEach(g),this.h()},h(){s(i,"class","navbar-brand nav-link"),s(i,"href","#home"),s(d,"class","navbar-toggler-icon"),s(u,"class","navbar-toggler"),s(u,"type","button"),s(u,"data-bs-toggle","collapse"),s(u,"data-bs-target","#navcontent"),s(l,"class","navbar-nav me-auto mb-2 mb-lg-0"),s(n,"class","collapse navbar-collapse"),s(n,"id","navcontent"),s(e,"class","container-fluid"),s(t,"class","navbar navbar-expand-lg bg-dark navbar-dark")},m(m,b){I(m,t,b),_(t,e),_(e,i),_(i,a),_(e,c),_(e,u),_(u,d),_(e,f),_(e,n),_(n,l);for(let p=0;p<r.length;p+=1)r[p].m(l,null)},p(m,[b]){if(b&1){h=m[0];let p;for(p=0;p<h.length;p+=1){const v=z(m,h,p);r[p]?r[p].p(v,b):(r[p]=Q(v),r[p].c(),r[p].m(l,null))}for(;p<r.length;p+=1)r[p].d(1);r.length=h.length}},i:y,o:y,d(m){m&&g(t),N(r,m)}}}function ct(o,t,e){return[[{name:"web",icon:"code-slash"},{name:"art",icon:"palette-fill"}]]}class ht extends A{constructor(t){super(),G(this,t,ct,ot,x,{items:0})}get items(){return this.$$.ctx[0]}}function X(o,t,e){const i=o.slice();return i[1]=t[e],i}function Y(o){let t,e,i,a=o[1].name+"",c,u,d;return{c(){t=k("a"),e=k("i"),c=V(a),u=P(),this.h()},l(f){t=w(f,"A",{class:!0,href:!0,target:!0,rel:!0});var n=$(t);e=w(n,"I",{class:!0}),$(e).forEach(g),c=B(n,a),u=C(n),n.forEach(g),this.h()},h(){s(e,"class",i="bi bi-"+o[1].icon+" me-3"),s(t,"class","mb-2 w-100 btn btn-dark"),s(t,"href",d=o[1].url),s(t,"target","_blank"),s(t,"rel","noreferrer")},m(f,n){I(f,t,n),_(t,e),_(t,c),_(t,u)},p(f,n){n&1&&i!==(i="bi bi-"+f[1].icon+" me-3")&&s(e,"class",i),n&1&&a!==(a=f[1].name+"")&&lt(c,a),n&1&&d!==(d=f[1].url)&&s(t,"href",d)},d(f){f&&g(t)}}}function ut(o){let t,e,i,a,c,u,d,f,n,l=o[0],h=[];for(let r=0;r<l.length;r+=1)h[r]=Y(X(o,l,r));return{c(){t=k("div"),e=k("div"),i=P(),a=k("div"),c=k("div"),u=k("div"),d=V("Contact and other links"),f=P(),n=k("div");for(let r=0;r<h.length;r+=1)h[r].c();this.h()},l(r){t=w(r,"DIV",{class:!0});var m=$(t);e=w(m,"DIV",{class:!0});var b=$(e);b.forEach(g),i=C(m),a=w(m,"DIV",{class:!0});var p=$(a);c=w(p,"DIV",{class:!0});var v=$(c);u=w(v,"DIV",{class:!0});var E=$(u);d=B(E,"Contact and other links"),E.forEach(g),f=C(v),n=w(v,"DIV",{class:!0});var j=$(n);for(let D=0;D<h.length;D+=1)h[D].l(j);j.forEach(g),v.forEach(g),p.forEach(g),m.forEach(g),this.h()},h(){s(e,"class","col"),s(u,"class","card-header text-center h4"),s(n,"class","card-body"),s(c,"class","card"),s(a,"class","col"),s(t,"class","row")},m(r,m){I(r,t,m),_(t,e),_(t,i),_(t,a),_(a,c),_(c,u),_(u,d),_(c,f),_(c,n);for(let b=0;b<h.length;b+=1)h[b].m(n,null)},p(r,[m]){if(m&1){l=r[0];let b;for(b=0;b<l.length;b+=1){const p=X(r,l,b);h[b]?h[b].p(p,m):(h[b]=Y(p),h[b].c(),h[b].m(n,null))}for(;b<h.length;b+=1)h[b].d(1);h.length=l.length}},i:y,o:y,d(r){r&&g(t),N(h,r)}}}function dt(o,t,e){let{contactLinks:i=[{name:"Github",url:"https://github.com/ericmuckley",icon:"github"},{name:"ORCID",url:"http://orcid.org/0000-0001-7114-5424",icon:"upc-scan"},{name:"LinkedIn",url:"https://www.linkedin.com/in/eric-muckley-5b097462",icon:"linkedin"},{name:"ResearchGate",url:"https://www.researchgate.net/profile/Eric_Muckley",icon:"person"},{name:"StackOverflow",url:"https://stackoverflow.com/users/9325130/eric-m",icon:"stack-overflow"},{name:"Google scholar",url:"https://scholar.google.com/citations?user=KnSc4mMAAAAJ&hl=en&oi=ao",icon:"book"}]}=t;return o.$$set=a=>{"contactLinks"in a&&e(0,i=a.contactLinks)},[i]}class ft extends A{constructor(t){super(),G(this,t,dt,ut,x,{contactLinks:0})}}function pt(o){let t,e;return{c(){t=k("div"),e=V("Web dev")},l(i){t=w(i,"DIV",{});var a=$(t);e=B(a,"Web dev"),a.forEach(g)},m(i,a){I(i,t,a),_(t,e)},p:y,i:y,o:y,d(i){i&&g(t)}}}class gt extends A{constructor(t){super(),G(this,t,null,pt,x,{})}}function Z(o,t,e){const i=o.slice();return i[5]=t[e],i}function tt(o,t,e){const i=o.slice();return i[8]=t[e],i}function et(o){let t,e,i,a,c;function u(){return o[4](o[8])}return{c(){t=k("div"),e=k("img"),this.h()},l(d){t=w(d,"DIV",{class:!0});var f=$(t);e=w(f,"IMG",{class:!0,width:!0,"data-bs-toggle":!0,"data-bs-target":!0,src:!0,alt:!0}),f.forEach(g),this.h()},h(){s(e,"class","hover-glow"),s(e,"width","200"),s(e,"data-bs-toggle","modal"),s(e,"data-bs-target","#artmodal"),K(e.src,i=H+o[8].path)||s(e,"src",i),s(e,"alt",o[8].title),s(t,"class","col mb-3")},m(d,f){I(d,t,f),_(t,e),a||(c=it(e,"click",u),a=!0)},p(d,f){o=d},d(d){d&&g(t),a=!1,c()}}}function at(o){let t,e=o[5].name+"",i,a,c,u,d,f=o[5].items,n=[];for(let l=0;l<f.length;l+=1)n[l]=et(tt(o,f,l));return{c(){t=k("h1"),i=V(e),a=P(),c=k("hr"),u=P(),d=k("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){t=w(l,"H1",{class:!0});var h=$(t);i=B(h,e),h.forEach(g),a=C(l),c=w(l,"HR",{class:!0}),u=C(l),d=w(l,"DIV",{class:!0});var r=$(d);for(let m=0;m<n.length;m+=1)n[m].l(r);r.forEach(g),this.h()},h(){s(t,"class","mb-0"),s(c,"class","mt-1 mb-3"),s(d,"class","row mb-5")},m(l,h){I(l,t,h),_(t,i),I(l,a,h),I(l,c,h),I(l,u,h),I(l,d,h);for(let r=0;r<n.length;r+=1)n[r].m(d,null)},p(l,h){if(h&12){f=l[5].items;let r;for(r=0;r<f.length;r+=1){const m=tt(l,f,r);n[r]?n[r].p(m,h):(n[r]=et(m),n[r].c(),n[r].m(d,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=f.length}},d(l){l&&g(t),l&&g(a),l&&g(c),l&&g(u),l&&g(d),N(n,l)}}}function mt(o){let t,e,i,a,c,u,d,f,n,l,h,r,m,b=o[2],p=[];for(let v=0;v<b.length;v+=1)p[v]=at(Z(o,b,v));return{c(){for(let v=0;v<p.length;v+=1)p[v].c();t=P(),e=k("div"),i=k("div"),a=k("div"),c=k("div"),u=k("h1"),d=V(o[0]),f=P(),n=k("button"),l=P(),h=k("div"),r=k("img"),this.h()},l(v){for(let J=0;J<p.length;J+=1)p[J].l(v);t=C(v),e=w(v,"DIV",{class:!0,id:!0,tabindex:!0});var E=$(e);i=w(E,"DIV",{class:!0});var j=$(i);a=w(j,"DIV",{class:!0});var D=$(a);c=w(D,"DIV",{class:!0});var S=$(c);u=w(S,"H1",{class:!0});var R=$(u);d=B(R,o[0]),R.forEach(g),f=C(S),n=w(S,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"aria-label":!0}),$(n).forEach(g),S.forEach(g),l=C(D),h=w(D,"DIV",{class:!0});var U=$(h);r=w(U,"IMG",{width:!0,src:!0,alt:!0}),U.forEach(g),D.forEach(g),j.forEach(g),E.forEach(g),this.h()},h(){s(u,"class","modal-title fs-5"),s(n,"type","button"),s(n,"class","btn-close"),s(n,"data-bs-dismiss","modal"),s(n,"aria-label","Close"),s(c,"class","modal-header"),s(r,"width","100%"),K(r.src,m=H+o[1])||s(r,"src",m),s(r,"alt",o[0]),s(h,"class","modal-body p-0"),s(a,"class","modal-content"),s(i,"class","modal-dialog modal-lg"),s(e,"class","modal fade"),s(e,"id","artmodal"),s(e,"tabindex","-1")},m(v,E){for(let j=0;j<p.length;j+=1)p[j].m(v,E);I(v,t,E),I(v,e,E),_(e,i),_(i,a),_(a,c),_(c,u),_(u,d),_(c,f),_(c,n),_(a,l),_(a,h),_(h,r)},p(v,[E]){if(E&12){b=v[2];let j;for(j=0;j<b.length;j+=1){const D=Z(v,b,j);p[j]?p[j].p(D,E):(p[j]=at(D),p[j].c(),p[j].m(t.parentNode,t))}for(;j<p.length;j+=1)p[j].d(1);p.length=b.length}E&1&&lt(d,v[0]),E&2&&!K(r.src,m=H+v[1])&&s(r,"src",m),E&1&&s(r,"alt",v[0])},i:y,o:y,d(v){N(p,v),v&&g(t),v&&g(e)}}}const H="https://raw.githubusercontent.com/ericmuckley/ericmuckley.github.io/master/static/img/art/";function vt(o,t,e){const i=[{name:"Watercolor",items:[{path:"baker_beach.jpg",title:"Baker Beach, San Francisco, California"},{path:"moonwhales.jpg",title:"Ethereum whales"},{path:"longlake.jpg",title:"Long lake, Sierra Nevada, California"},{path:"red_blue_forest.jpg",title:"Red and blue forest"},{path:"sdbuildings.jpg",title:"San Diego, California"},{path:"redsmokies.jpg",title:"Autumn in the mountains"},{path:"dinosaurs.jpg",title:"Prehistoric monsters"},{path:"milkyway.jpg",title:"Milky way"},{path:"skull.jpg",title:"Bad omens"},{path:"watercolorvolcano.jpg",title:"Prehistoric landscape"},{path:"yellowvolcanosmoke.jpg",title:"prehistoric landscape 2"},{path:"birdrock_sunset.jpg",title:"Sunset Cliffs, San Diego, California"},{path:"ob_subset.jpg",title:"OB pier, San Diego, California"},{path:"bratislava.jpg",title:"Bratislava Castle, Slovakia"},{path:"hertfordbridge.JPG",title:"Hertford Bridge in Oxford, UK"},{path:"abstractcanoe.jpg",title:"Watercolor dream"},{path:"barn.jpg",title:"Barn in the snow"},{path:"candace.jpg",title:"Moonlit river"},{path:"frame.JPG",title:"Winter cabin"},{path:"knox.JPG",title:"Knoxville, tennessee"},{path:"whitney.jpg",title:"Mount Whitney, Sierra Nevada, California"},{path:"adams.jpg",title:"Mount Adams, Cascades, Washington"},{path:"virginiapass.jpg",title:"Virginia pass, Sierra Nevada, California"},{path:"oldtruck.jpg",title:"Old truck in Joshua Tree, California"},{path:"barninsnow.jpg",title:"Barn in snow"},{path:"lauren_wedding.jpg",title:"Lauren and Austin getting married"}]},{name:"Acrylic, digital, and mixed media",items:[{path:"tripanelsilverlake.jpg",title:"Silver Lake, Sierra Nevada"},{path:"wave_birds.jpg",title:"Birds in the sunset"},{path:"wavemnt.jpg",title:"Waves and mountains"},{path:"volcanosun.jpg",title:"volcano with rising sun"},{path:"leroy.jpg",title:"Dark winter night"},{path:"colorwaves.jpg",title:"Big Sur, California"},{path:"pier.JPG",title:"Ocean Beach pier, California"},{path:"skulllogo.jpg",title:"Label for muckley brewing company"},{path:"egretsunset.jpg",title:"Egret sunset"},{path:"bridge_fog.jpg",title:"Fog in San Francisco, California"},{path:"buddha.jpg",title:"Serenity"},{path:"waveroad.jpg",title:"Beach town"},{path:"obremix.jpg",title:"Ocean Beach, San Diego, California"},{path:"sixcrane.jpg",title:"Label for six crane IPA"},{path:"sunset.JPG",title:"Trees with sunset"},{path:"winterroad.jpg",title:"Dark road"}]},{name:"Pencil and Pen",items:[{path:"pop.JPG",title:"Pop"},{path:"buildingjumble.jpg",title:"Concrete jungle"},{path:"birdwallpic.jpg",title:"Birds drawn on the wall"},{path:"wavetree.jpg",title:"Tree on beach"},{path:"pencil_forest.jpg",title:"Sierra Nevada, california"},{path:"oxford_pencil.jpg",title:"Oxford, UK"}]}];let a="Pop",c="pop.JPG";function u(f){e(0,a=f.title),e(1,c=f.path)}return[a,c,i,u,f=>{u(f)}]}class _t extends A{constructor(t){super(),G(this,t,vt,mt,x,{})}}function bt(o){let t,e,i,a,c,u,d;t=new ht({});var f=o[0];function n(l){return{}}return f&&(a=q(f,n())),{c(){L(t.$$.fragment),e=P(),i=k("div"),a&&L(a.$$.fragment),this.h()},l(l){F(t.$$.fragment,l),e=C(l),i=w(l,"DIV",{class:!0});var h=$(i);a&&F(a.$$.fragment,h),h.forEach(g),this.h()},h(){s(i,"class","p-5")},m(l,h){M(t,l,h),I(l,e,h),I(l,i,h),a&&M(a,i,null),c=!0,u||(d=it(window,"hashchange",o[1]),u=!0)},p(l,[h]){if(f!==(f=l[0])){if(a){nt();const r=a;O(r.$$.fragment,1,0,()=>{W(r,1)}),rt()}f?(a=q(f,n()),L(a.$$.fragment),T(a.$$.fragment,1),M(a,i,null)):a=null}},i(l){c||(T(t.$$.fragment,l),a&&T(a.$$.fragment,l),c=!0)},o(l){O(t.$$.fragment,l),a&&O(a.$$.fragment,l),c=!1},d(l){W(t,l),l&&g(e),l&&g(i),a&&W(a),u=!1,d()}}}function kt(o,t,e){let i;const a={"#art":_t,"#web":gt};st(c);function c(){e(0,i=a[location.hash]||ft)}return[i,c]}class $t extends A{constructor(t){super(),G(this,t,kt,bt,x,{})}}export{$t as default};
