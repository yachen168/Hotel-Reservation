(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-31e72e00":"8c752e1d","chunk-447356e0":"2d72baf1","chunk-60564b6c":"fad5c7fb","chunk-78553f32":"e937bedd"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-31e72e00":1,"chunk-447356e0":1,"chunk-60564b6c":1,"chunk-78553f32":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-31e72e00":"09073929","chunk-447356e0":"68b609b0","chunk-60564b6c":"31eee508","chunk-78553f32":"0772d731"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Hotel-Reservation/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("5c0b"),n("2877")),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),s=i.exports,f=(n("d3b7"),n("96cf"),n("1da1")),l=n("8c4f"),p=(n("d81d"),n("2f62")),d=n("bc3a"),m=n.n(d),h="ow7i3w9jLlmKW42w2FzKPVgSdHfI8G4dg20IZ1tzdGrMpfzyPAhQhIGAEJcr",g=m.a.create({baseURL:"https://challenge.thef2e.com/api/thef2e2019/stage6/",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(h)},timeout:15e3}),b=g;r["a"].use(p["a"]);var v=new p["a"].Store({state:{allRooms:[],room:[],booking:[],bookingStatus:""},mutations:{setAllRoomsInfo:function(e,t){e.allRooms=t},setRoomInfo:function(e,t){e.room=t.room,e.booking=t.booking},setBookingStatus:function(e,t){e.bookingStatus=t},resetBookingStatus:function(e){e.bookingStatus=""}},actions:{getAllRoomsInfo:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,b.get("rooms");case 3:r=t.sent,n("setAllRoomsInfo",r.data.items);case 5:case"end":return t.stop()}}),t)})))()},getRoomInfo:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,b.get("room/".concat(t));case 3:o=n.sent,r("setRoomInfo",o.data);case 5:case"end":return n.stop()}}),n)})))()},postBooking:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,o,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,o=e.commit,a=t.roomId,c=t.userBookingInfo,n.prev=2,n.next=5,b.post("room/".concat(a),c);case 5:o("setBookingStatus","success"),r("getRoomInfo",a),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),o("setBookingStatus","fail");case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()}},getters:{allRooms:function(e){return e.allRooms},roomInfo:function(e){return e.room[0]},datesHaveBeenBooked:function(e){return{dates:e.booking.map((function(e){return new Date(e.date)}))}},bookingStatus:function(e){return e.bookingStatus}}}),k=n("323e"),w=n.n(k);n("a5d8");r["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:function(){return n.e("chunk-447356e0").then(n.bind(null,"bb51"))},beforeEnter:function(e,t,n){return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.dispatch("getAllRoomsInfo");case 2:n();case 3:case"end":return e.stop()}}),e)})))()}},{path:"/room/:id",name:"RoomInfo",props:!0,component:function(){return n.e("chunk-78553f32").then(n.bind(null,"7042"))},beforeEnter:function(e,t,n){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.dispatch("getRoomInfo",e.params.id);case 2:n();case 3:case"end":return t.stop()}}),t)})))()}},{path:"/404",name:"404",props:!0,component:function(){return n.e("chunk-60564b6c").then(n.bind(null,"9703"))}},{path:"/network-issue",name:"network-issue",component:function(){return n.e("chunk-31e72e00").then(n.bind(null,"9471"))}},{path:"*",redirect:{name:"404"}}],R=new l["a"]({mode:"history",base:"/Hotel-Reservation/",routes:y,scrollBehavior:function(){return{x:0,y:0}}});R.beforeEach((function(e,t,n){w.a.start(),n()})),R.afterEach((function(){w.a.done()}));var j=R,x=n("d7b1"),S=n("498a"),O=n("13ce");r["a"].use(x["a"]),r["a"].use(S["a"]),r["a"].use(O["a"]);var I=n("ecee"),E=n("c074"),A=n("b702"),B=n("f2d1"),P=n("ad3d");I["c"].add(E["a"],A["a"],B["a"]),r["a"].component("font-awesome-icon",P["a"]);n("c1c3");new r["a"]({router:j,store:v,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},c1c3:function(e,t,n){}});
//# sourceMappingURL=app.a725a17b.js.map