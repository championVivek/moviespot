(this.webpackJsonpmovie_search_frontend=this.webpackJsonpmovie_search_frontend||[]).push([[0],{107:function(e,t,c){},130:function(e,t,c){},138:function(e,t,c){},156:function(e,t,c){},157:function(e,t,c){},158:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c(24),o=c.n(i),s=c(13),r=(c(106),c(83)),l=c(84),j=c(97),d=c(96),h=c(11),b=c(6),u=(c(107),c(180)),m=c(182),O=c(190),p=c(187),x=c(183),g=c(18),f=c.n(g),v=c(85),w=c.n(v),y=Object(u.a)((function(){return{root:{minWidth:180}}}));function k(){var e=y(),t=Object(h.f)(),c=w.a.parse(t.search,{ignoreQueryPrefix:!0}).query,i=Object(a.useState)([]),o=Object(b.a)(i,2),s=o[0],r=o[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&query=").concat(c,"&page=1&include_adult=false")).then((function(e){null!=e.data?r(e.data.results):r(null)}))}),[]);var l=Object(h.e)();return Object(n.jsx)("div",{className:"spaceing",children:Object(n.jsx)(m.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:s.map((function(t,c){return null!==t.poster_path?Object(n.jsx)(m.a,{item:!0,xs:12,sm:2,md:20,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){l.push("/movie/".concat(t.title,"/").concat(t.id))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title})})})},c):null}))})})}var N=c(42),S=c(61),T=c(91),C=c.n(T),_=c(188),I=f.a.create({baseURL:"https://moviespot-react.herokuapp.com/"}),W=Object(u.a)((function(e){return{root:{flexGrow:1},search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(S.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"whitesmoke"},inputInput:Object(N.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function E(){var e=W(),t=Object(h.e)(),c=Object(a.useState)(),i=Object(b.a)(c,2),o=i[0],s=i[1];function r(){I.post("/",{name:o}).then((function(e){console.log("Sent the data")})).catch((function(e){return console.log(e)}))}Object(a.useEffect)((function(){r()}));return Object(n.jsx)("div",{children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),r(),t.push({pathname:"/search",search:"?query=".concat(o)}),window.location.reload(!0)},children:Object(n.jsx)(_.a,{placeholder:"Search...",value:o,onChange:function(e){return s(e.target.value)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})})})}var B=c(186),F=c(189),R=c(185),A=(c(130),Object(u.a)((function(e){return{root:{flexGrow:5},home:{flexGrow:1,marginLeft:e.spacing(3),paddingBottom:4},title:Object(N.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(S.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})));function G(){var e=A();return Object(n.jsxs)(B.a,{collapseOnSelect:!0,style:{backgroundColor:"#212121",height:"4rem"},variant:"dark",expand:"lg",sticky:"top",children:[Object(n.jsx)(B.a.Brand,{style:{fontSize:"1.6rem",marginLeft:"5rem"},children:"MOVIESPOT"}),Object(n.jsx)(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(B.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsxs)(F.a,{className:"mr-auto",children:[Object(n.jsx)(F.a.Link,{href:"/movies",style:{fontSize:"1.4rem"},children:"Movies"}),Object(n.jsxs)(R.a,{title:"TV Shows",id:"collasible-nav-dropdown",style:{fontSize:"1.3rem",paddingTop:"0.6%"},children:[Object(n.jsx)(R.a.Item,{href:"/tv/popular",children:"Popular"}),Object(n.jsx)(R.a.Item,{href:"/tv/airing-today",children:"Airing Today"}),Object(n.jsx)(R.a.Item,{href:"/tv/on-tv",children:"On Tv"}),Object(n.jsx)(R.a.Item,{href:"/tv/top-rated",children:"Top Rated"})]})]}),Object(n.jsxs)("div",{className:e.search,children:[Object(n.jsx)("div",{className:e.searchIcon,children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(E,{})]})]})]})}var L=c(184),U=c(23),M=Object(u.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function P(){var e=M(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){I.get("/popularmovies").then((function(e){o(e.data)}))}),[]);var s=Object(h.e)();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem"},children:"Popular Movies"}),Object(n.jsx)(m.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(U.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[3]})})})},c)}))})})]})})}var V=Object(u.a)((function(e){return{root:{minWidth:140,flexGrow:1}}}));function J(){var e=V(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){I.get("/topratedmovies").then((function(e){o(e.data),console.log(i)}))}),[]);var s=Object(h.e)();return Object(n.jsx)("div",{className:"carousel-wrapper",children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem"},children:"Top rated Movies"}),Object(n.jsx)(m.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(U.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})})]})})}var q=Object(u.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function z(){var e=q(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1],s=Object(h.e)();return Object(a.useEffect)((function(){I.get("/nowplaying").then((function(e){o(e.data),console.log(i)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:8},children:[Object(n.jsx)("h3",{className:"popular",style:{paddingBottom:"1rem"},children:"Now playing"}),Object(n.jsx)(m.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(U.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})})]})})}var H=Object(u.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function K(){var e=H(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){I.get("/upcomingmovies").then((function(e){o(e.data),console.log(i)}))}),[]);var s=Object(h.e)();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem"},children:"Upcoming Movies"}),Object(n.jsx)(m.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(U.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:5,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})})]})})}c(138);function D(){return Object(n.jsxs)("div",{className:"home_body",children:[Object(n.jsx)(z,{}),Object(n.jsx)(K,{}),Object(n.jsx)(P,{}),Object(n.jsx)(J,{})]})}var Q=c(58),X=c.n(Q),Y=Object(u.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function Z(){var e=Y(),t=Object(h.g)().id,c=Object(a.useState)([]),i=Object(b.a)(c,2),o=i[0],s=i[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){null!=e.data?s(e.data.results):s(null)}))}),[]);var r=Object(h.e)();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:9},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem",color:"white"},children:"Recommendations"}),Object(n.jsx)(m.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(U.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:o.map((function(t,c){return null!==t.poster_path?Object(n.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){r.push("/movie/".concat(t.title,"/").concat(t.id)),window.location.reload(!0)},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title,id:t.id})})})},c):null}))})})]})})}c(156);function $(){var e=Object(h.g)().id,t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1],s=Object(a.useState)([]),r=Object(b.a)(s,2),l=r[0],j=r[1],d=Object(a.useState)([]),u=Object(b.a)(d,2),m=u[0],O=u[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?o(e.data.results[0].key):o()})),f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),O(e.data.genres)}))}),[]);var p=l.runtime,x=Math.floor(p/60),g=p%60;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{backgroundColor:"#282828",height:"26rem"},children:Object(n.jsxs)("div",{className:"row gx-5",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("div",{className:"player-wrapper",children:Object(n.jsx)(X.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(i),controls:!0,width:"100%",height:"112%"})})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("div",{className:"title",children:[" ",l.title," "]}),Object(n.jsxs)("ul",{className:"list-inline",children:[Object(n.jsx)("li",{className:"list-inline-item",children:p>0&&Object(n.jsxs)("h4",{children:[" ",x," hrs ",g," min,"," "]})}),Object(n.jsx)("li",{className:"list-inline-item",children:m.map((function(e){return Object(n.jsx)("li",{className:"list-inline-item",children:Object(n.jsxs)("h4",{children:[e.name,","]})},e.id)}))}),Object(n.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(n.jsx)("h4",{children:" English "}),"ja"===l.original_language&&Object(n.jsx)("h4",{children:" Japanese "}),"ko"===l.original_language&&Object(n.jsx)("h4",{children:" Korean "}),"hi"===l.original_language&&Object(n.jsx)("h4",{children:" Hindi "})]}),Object(n.jsx)("li",{})]}),Object(n.jsx)("div",{className:"tagline",children:l.tagline}),Object(n.jsx)("h4",{children:"Overview:"}),Object(n.jsx)("div",{className:"overview",children:Object(n.jsx)("p",{children:l.overview})})]})]})}),Object(n.jsx)("div",{style:{backgroundColor:"black"},children:Object(n.jsx)(Z,{})})]})}var ee=Object(u.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function te(){var e=ee(),t=Object(h.g)().id,c=Object(a.useState)([]),i=Object(b.a)(c,2),o=i[0],s=i[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){s(e.data.results)}))}),[]);var r=Object(h.e)();return console.log(o),Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem",color:"white"},children:"Recommendations"}),Object(n.jsx)(m.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(U.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:o.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){r.push("/tv/".concat(t.name,"/").concat(t.id)),window.location.reload(!0)},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title,id:t.id})})})},c)}))})})]})})}c(157);function ce(){var e=Object(h.g)().id,t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1],s=Object(a.useState)([]),r=Object(b.a)(s,2),l=r[0],j=r[1],d=Object(a.useState)([]),u=Object(b.a)(d,2),m=u[0],O=u[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=eeeec0d10ea9ef7bd9542bc1c8caac5a&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?o(e.data.results[0].key):o()})),f.a.get("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),O(e.data.genres)}))}),[]);var p=l.episode_run_time,x=Math.floor(p/60),g=p%60;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{backgroundColor:"#282828",height:"26rem"},children:Object(n.jsxs)("div",{className:"row gx-5",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("div",{className:"player-wrapper",children:Object(n.jsx)(X.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(i),controls:!0,width:"100%",height:"112%"})})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("div",{className:"title",children:[" ",l.original_name," "]}),Object(n.jsxs)("ul",{className:"list-inline",children:[Object(n.jsx)("li",{className:"list-inline-item",children:p>0&&Object(n.jsxs)("h4",{children:[" ",x," hrs ",g," min,"," "]})}),Object(n.jsx)("li",{className:"list-inline-item",children:m.map((function(e){return Object(n.jsx)("li",{className:"list-inline-item",children:Object(n.jsxs)("h4",{children:[e.name,","]})},e.id)}))}),Object(n.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(n.jsx)("h4",{children:" English "}),"ja"===l.original_language&&Object(n.jsx)("h4",{children:" Japanese "}),"ko"===l.original_language&&Object(n.jsx)("h4",{children:" Korean "}),"hi"===l.original_language&&Object(n.jsx)("h4",{children:" Hindi "})]}),Object(n.jsx)("li",{})]}),Object(n.jsx)("div",{className:"tagline",children:l.tagline}),Object(n.jsx)("h4",{children:"Overview:"}),Object(n.jsx)("div",{className:"overview",children:Object(n.jsx)("p",{children:l.overview})})]})]})}),Object(n.jsx)("div",{style:{backgroundColor:"black"},children:Object(n.jsx)(te,{})})]})}var ne=Object(u.a)((function(e){return{root:{minWidth:180}}}));function ae(){var e=ne(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){I.get("/tv/populartvshow").then((function(e){o(e.data)}))}),[]);var s=Object(h.e)();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Popular TV Shows"}),Object(n.jsx)(m.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var ie=Object(u.a)((function(e){return{root:{minWidth:180}}}));function oe(){var e=ie(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){I.get("/tv/airingtodaytvshow").then((function(e){o(e.data)}))}),[]);var s=Object(h.e)();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Airing Today"}),Object(n.jsx)(m.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var se=Object(u.a)((function(e){return{root:{minWidth:180}}}));function re(){var e=se(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){I.get("/tv/ontheairtvshow").then((function(e){o(e.data)}))}),[]);var s=Object(h.e)();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Currently Airing TV Shows"}),Object(n.jsx)(m.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var le=Object(u.a)((function(e){return{root:{minWidth:180}}}));function je(){var e=le(),t=Object(a.useState)([]),c=Object(b.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){I.get("/tv/gettopratedtvshow").then((function(e){o(e.data)}))}),[]);var s=Object(h.e)();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Top Rated TV Shows"}),Object(n.jsx)(m.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(m.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(O.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var de=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(G,{}),Object(n.jsx)(h.a,{path:"/search",component:k}),Object(n.jsx)(h.a,{path:"/",exact:!0,component:D}),Object(n.jsx)(h.a,{path:"/movies",exact:!0,component:D}),Object(n.jsx)(h.a,{path:"/movie/:movietitle/:id",component:$}),Object(n.jsx)(h.a,{path:"/tv/popular",component:ae}),Object(n.jsx)(h.a,{path:"/tv/airing-today",component:oe}),Object(n.jsx)(h.a,{path:"/tv/on-tv",component:re}),Object(n.jsx)(h.a,{path:"/tv/top-rated",component:je}),Object(n.jsx)(h.a,{path:"/tv/:tvshowtitle/:id",component:ce})]})}}]),c}(a.Component);o.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(de,{})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.270c640e.chunk.js.map