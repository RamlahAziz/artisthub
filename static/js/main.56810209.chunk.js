(this.webpackJsonpartisthub=this.webpackJsonpartisthub||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(78),a(79),a(15)),i=a(126),s=a(107),m=a(135),u=a(134),f=a(65),d=a.n(f),g=a(127),p=a(128),h=a(137),E=a(34),v=Object(i.a)((function(e){return{root:{width:345,margin:10,textAlign:"left",padding:10},avatar:{backgroundColor:E.a[500]}}}));function b(e){console.log("Artist Details",e.results);var t=v();return r.a.createElement(g.a,{className:t.root},r.a.createElement(p.a,{avatar:r.a.createElement(h.a,{"aria-label":"picture",className:t.avatar,src:e.results.image_url}),title:e.results.name,subheader:e.results.facebook_page_url}))}var x=a(130),w=a(129),O=a(35),j=a(131),y=a(133),W=(a(83),Object(i.a)((function(e){return{root:{width:300},media:{height:0,paddingTop:"56.25%"},table:{borderBottom:"none"},text:{fontFamily:"Roboto",textAlign:"left",fontSize:15},subtext:{fontFamily:"Roboto",textAlign:"left",fontSize:15}}})));function A(e){console.log("Artist Event Details: ",e);var t=W(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return r.a.createElement(g.a,{className:t.root},r.a.createElement(w.a,null,r.a.createElement(O.a,{className:t.text,variant:"overline",gutterBottom:!0},"EVENT DETAILS"),r.a.createElement(x.a,{variant:"middle"}),r.a.createElement(j.a,{container:!0,direction:"column",alignItems:"flex-start"},r.a.createElement(j.a,{container:!0,direction:"row"},r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(O.a,{fontWeight:"fontWeightBold",className:t.text},r.a.createElement(y.a,{fontWeight:"fontWeightBold"},"Country"),r.a.createElement(y.a,{fontWeight:"fontWeightLight"},e.event.venue.country))),r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(O.a,{className:t.text},r.a.createElement(y.a,{fontWeight:"fontWeightBold",m:0},"City"),r.a.createElement(y.a,{fontWeight:"fontWeightLight",m:0},e.event.venue.city)))),r.a.createElement(j.a,null),r.a.createElement(j.a,{container:!0,direction:"row"},r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(O.a,{className:t.text},r.a.createElement(y.a,{fontWeight:"fontWeightBold",m:1},"Venue"),r.a.createElement(y.a,{fontWeight:"fontWeightLight",m:0},e.event.venue.name))),r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(O.a,{className:t.text},r.a.createElement(y.a,{fontWeight:"fontWeightBold",m:1},"Date"),r.a.createElement(y.a,{fontWeight:"fontWeightLight",m:0},function(e){var t=new Date(e);return t.getDate()+" "+a[t.getMonth()]+", "+t.getFullYear()}(e.event.datetime))))))))}var N=a(24),S=a.n(N),k=a(33),C=a(64),B=a.n(C),D=a(28),I=a.n(D),R=Object(i.a)((function(e){return{text:{margin:10,padding:10,fontFamily:"Roboto",fontSize:15}}}));function L(e){var t=R();console.log("Event Artist Name",e.artist.name);var a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],i=c[1],s="https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com",m="b2d0af8ea8bfb7288d2701b2d06e9eae";function u(){return(u=Object(k.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(s,"/artists/").concat(t,"/events?app_id=").concat(m,"&date=upcoming"),{headers:{accept:"application/json","Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*"}});case 3:a=e.sent,n=a.data,console.log("Data returned from Events API: ",n),i(n),console.log("Array of Search Results ",o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Request Failed: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){u.apply(this,arguments)}(e.artist.name)}),[e.artist]),r.a.createElement("div",null,r.a.createElement(j.a,{container:!0,direction:"column",alignItems:"flex-start"},r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"flex-start",al:!0},r.a.createElement(j.a,{item:!0,xs:4},r.a.createElement(B.a,{style:{fontSize:15}}),r.a.createElement(O.a,{className:t.text},r.a.createElement(y.a,{fontWeight:"fontWeightLight"},"Back to results"))),r.a.createElement(j.a,{item:!0,xs:2})),r.a.createElement(j.a,{item:!0,xs:12,alignContent:"flex-start"},r.a.createElement(b,{results:e.artist})),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(O.a,{className:t.text},e.artist.upcoming_event_count," upcoming event(s)"))),r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"flex-start"},o.map((function(e){return r.a.createElement(j.a,{item:!0,xs:"4"},r.a.createElement(A,{event:e}))}))))}var T=a(132),F=Object(i.a)((function(e){return{text:{margin:10,textAlign:"left",padding:10}}}));function _(e){var t=F(),a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(!0),m=Object(l.a)(s,2),u=m[0],f=m[1],d=Object(n.useState)(""),g=Object(l.a)(d,2),p=g[0],h=g[1],E=r.a.useState(!0),v=Object(l.a)(E,2),x=v[0],w=v[1],y="https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com",W="b2d0af8ea8bfb7288d2701b2d06e9eae";function A(){return(A=Object(k.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(y,"/artists/").concat(t,"?app_id=").concat(W),{headers:{accept:"application/json","Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*"}});case 3:a=e.sent,n=a.data,console.log("Data returned from API: ",n),o.push(n),i(o),console.log("Array of Search Results ",o),w(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Request Failed: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){A.apply(this,arguments)}(e.searchTerm)}),[e.searchTerm]),x?r.a.createElement("div",null,r.a.createElement(T.a,{animation:"wave",variant:"text"}),r.a.createElement(T.a,{animation:"wave",variant:"rect"})):u?r.a.createElement("div",null,r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"flex-start"},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(O.a,{className:t.text},o.length,' result(s) found for "',e.searchTerm,'"')),o.map((function(e){return r.a.createElement(j.a,{item:!0,xs:4,onClick:function(t){return function(e,t){e.preventDefault(),console.log("onClick called",t),f(!1),h(t)}(t,e)}},r.a.createElement(b,{results:e}))})))):r.a.createElement("div",null,r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"flex-start"},r.a.createElement(L,{artist:p})))}var q=Object(i.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"left",width:800},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},focused:{borderColor:"#000000"}}}));function M(){var e=q(),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),f=Object(l.a)(i,2),g=f[0],p=f[1];function h(e){e.preventDefault(),p(!0),console.log("search results bool",g)}return r.a.createElement(j.a,{container:!0,direction:"column",alignItems:"flex-start"},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(s.a,{component:"form",className:e.root},r.a.createElement(m.a,{className:e.input,margin:"dense",placeholder:"Search Artist Name",type:"text",value:c,onChange:function(e){return function(e){e.preventDefault(),o(e.target.value),p(!0),console.log("onChange search term",c)}(e)},onSubmit:function(e){return h(e)},inputProps:{"aria-label":"search artist name"}}),r.a.createElement(u.a,{type:"button",className:e.iconButton,onClick:function(e){return h(e)},"aria-label":"search"},r.a.createElement(d.a,null)))),r.a.createElement(j.a,{item:!0,xs:12},g?r.a.createElement(_,{searchTerm:c}):null))}var J=a(66),z=a(6);var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"image"}),r.a.createElement(M,null),r.a.createElement(J.a,null,r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/results/:artist",children:r.a.createElement(e,null)}))));function e(){var e=Object(z.f)().artist;return r.a.createElement("div",null,r.a.createElement(L,{results:e}))}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a(105)},78:function(e,t,a){},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.56810209.chunk.js.map