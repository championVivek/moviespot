(this.webpackJsonpmovie_search_frontend=this.webpackJsonpmovie_search_frontend||[]).push([[0],{108:function(e,t,c){},133:function(e,t,c){},141:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){},161:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),o=c(24),s=c.n(o),r=c(9),l=(c(107),c(84)),j=c(85),d=c(98),h=c(97),b=c(12),u=c(6),m=(c(108),c(183)),O=c(185),p=c(193),x=c(190),g=c(186),f=c(18),v=c.n(f),w=c(86),y=c.n(w),k=Object(m.a)((function(){return{root:{minWidth:180}}}));function N(){var e=k(),t=Object(b.l)(),c=y.a.parse(t.search,{ignoreQueryPrefix:!0}).query,i=Object(a.useState)([]),o=Object(u.a)(i,2),s=o[0],r=o[1];Object(a.useEffect)((function(){v.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&query=").concat(c,"&page=1&include_adult=false")).then((function(e){null!=e.data?r(e.data.results):r(null)}))}),[]);var l=Object(b.k)();return Object(n.jsx)("div",{className:"spaceing",children:Object(n.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:s.map((function(t,c){return null!==t.poster_path?Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,md:20,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){l.push("/movie/".concat(t.title,"/").concat(t.id))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title})})})},c):null}))})})}var S=c(42),T=c(61),C=c(92),_=c.n(C),I=c(191),W=v.a.create({baseURL:""}),E=Object(m.a)((function(e){return{root:{flexGrow:1},search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"whitesmoke"},inputInput:Object(S.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function B(){var e=E(),t=Object(b.k)(),c=Object(a.useState)(),i=Object(u.a)(c,2),o=i[0],s=i[1];return Object(n.jsx)("div",{children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),t.push({pathname:"/search",search:"?query=".concat(o)})},children:Object(n.jsx)(I.a,{placeholder:"Search...",value:o,onChange:function(e){return s(e.target.value)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})})})}var L=c(189),F=c(192),R=c(188),A=(c(131),c(133),Object(m.a)((function(e){return{root:{flexGrow:5},home:{flexGrow:1,marginLeft:e.spacing(3),paddingBottom:4},title:Object(S.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})));function G(){var e=A();return Object(n.jsxs)(L.a,{collapseOnSelect:!0,style:{backgroundColor:"#212121",height:"4rem"},variant:"dark",expand:"lg",sticky:"top",children:[Object(n.jsx)(L.a.Brand,{style:{fontSize:"1.6rem",marginLeft:"5rem"},children:"MOVIESPOT"}),Object(n.jsx)(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(L.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsxs)(F.a,{className:"mr-auto",children:[Object(n.jsx)(F.a.Link,{as:r.Link,to:"/movies",style:{fontSize:"1.4rem"},children:"Movies"}),Object(n.jsxs)(R.a,{title:"TV Shows",id:"collasible-nav-dropdown",style:{fontSize:"1.3rem",paddingTop:"0.6%"},children:[Object(n.jsx)(R.a.Item,{as:r.Link,to:"/tv/popular",children:"Popular"}),Object(n.jsx)(R.a.Item,{as:r.Link,to:"/tv/airing-today",style:{color:"black"},children:"Airing Today"}),Object(n.jsx)(R.a.Item,{as:r.Link,to:"/tv/on-tv",style:{color:"black"},children:"On Tv"}),Object(n.jsx)(R.a.Item,{as:r.Link,to:"/tv/top-rated",style:{color:"black"},children:"Top Rated"})]})]}),Object(n.jsxs)("div",{className:e.search,children:[Object(n.jsx)("div",{className:e.searchIcon,children:Object(n.jsx)(_.a,{})}),Object(n.jsx)(B,{})]})]})]})}var U=c(187),M=c(23),P=Object(m.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function V(){var e=P(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){W.get("/popularmovies").then((function(e){o(e.data)}))}),[]);var s=Object(b.k)();return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem"},children:"Popular Movies"}),Object(n.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(M.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[3]})})})},c)}))})})]})})}var J=Object(m.a)((function(e){return{root:{minWidth:140,flexGrow:1}}}));function q(){var e=J(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){W.get("/topratedmovies").then((function(e){o(e.data),console.log(i)}))}),[]);var s=Object(b.k)();return Object(n.jsx)("div",{className:"carousel-wrapper",children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem"},children:"Top rated Movies"}),Object(n.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(M.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})})]})})}var z=Object(m.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function H(){var e=z(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1],s=Object(b.k)();return Object(a.useEffect)((function(){W.get("/nowplaying").then((function(e){o(e.data)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:8},children:[Object(n.jsx)("h3",{className:"popular",style:{paddingBottom:"1rem"},children:"Now playing"}),Object(n.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(M.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})})]})})}var K=Object(m.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function D(){var e=K(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){W.get("/upcomingmovies").then((function(e){o(e.data),console.log(i)}))}),[]);var s=Object(b.k)();return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem"},children:"Upcoming Movies"}),Object(n.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(M.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:5,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})})]})})}c(141);function Q(){return Object(n.jsxs)("div",{className:"home_body",children:[Object(n.jsx)(H,{}),Object(n.jsx)(D,{}),Object(n.jsx)(V,{}),Object(n.jsx)(q,{})]})}var X=c(58),Y=c.n(X),Z=Object(m.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function $(){var e=Z(),t=Object(b.m)().id,c=Object(a.useState)([]),i=Object(u.a)(c,2),o=i[0],s=i[1];Object(a.useEffect)((function(){v.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){null!=e.data?s(e.data.results):s(null)}))}),[]);var r=Object(b.k)();return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:9},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem",color:"white"},children:"Recommendations"}),Object(n.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(M.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:o.map((function(t,c){return null!==t.poster_path?Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){r.push("/movie/".concat(t.title,"/").concat(t.id)),window.location.reload(!0)},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title,id:t.id})})})},c):null}))})})]})})}c(159);function ee(){var e=Object(b.m)().id,t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1],s=Object(a.useState)([]),r=Object(u.a)(s,2),l=r[0],j=r[1],d=Object(a.useState)([]),h=Object(u.a)(d,2),m=h[0],O=h[1];Object(a.useEffect)((function(){v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?o(e.data.results[0].key):o()})),v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),O(e.data.genres)}))}),[]);var p=l.runtime,x=Math.floor(p/60),g=p%60;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{backgroundColor:"#282828",height:"26rem"},children:Object(n.jsxs)("div",{className:"row gx-5",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("div",{className:"player-wrapper",children:Object(n.jsx)(Y.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(i),controls:!0,width:"100%",height:"112%"})})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("div",{className:"title",children:[" ",l.title," "]}),Object(n.jsxs)("ul",{className:"list-inline",children:[Object(n.jsx)("li",{className:"list-inline-item",children:p>0&&Object(n.jsxs)("h4",{children:[" ",x," hrs ",g," min,"," "]})}),Object(n.jsx)("li",{className:"list-inline-item",children:m.map((function(e){return Object(n.jsx)("li",{className:"list-inline-item",children:Object(n.jsxs)("h4",{children:[e.name,","]})},e.id)}))}),Object(n.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(n.jsx)("h4",{children:" English "}),"ja"===l.original_language&&Object(n.jsx)("h4",{children:" Japanese "}),"ko"===l.original_language&&Object(n.jsx)("h4",{children:" Korean "}),"hi"===l.original_language&&Object(n.jsx)("h4",{children:" Hindi "})]}),Object(n.jsx)("li",{})]}),Object(n.jsx)("div",{className:"tagline",children:l.tagline}),Object(n.jsx)("h4",{children:"Overview:"}),Object(n.jsx)("div",{className:"overview",children:Object(n.jsx)("p",{children:l.overview})})]})]})}),Object(n.jsx)("div",{style:{backgroundColor:"black"},children:Object(n.jsx)($,{})})]})}var te=Object(m.a)((function(){return{root:{minWidth:140,flexGrow:1}}}));function ce(){var e=te(),t=Object(b.m)().id,c=Object(a.useState)([]),i=Object(u.a)(c,2),o=i[0],s=i[1];Object(a.useEffect)((function(){v.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){s(e.data.results)}))}),[]);var r=Object(b.k)();return console.log(o),Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",height:"45vh",paddingTop:8},children:[Object(n.jsx)("h2",{className:"popular",style:{paddingBottom:"1rem",color:"white"},children:"Recommendations"}),Object(n.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(n.jsx)(M.a,{itemsToShow:6,itemsToScroll:1,pagination:!1,showArrows:!0,children:o.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){r.push("/tv/".concat(t.name,"/").concat(t.id)),window.location.reload(!0)},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title,id:t.id})})})},c)}))})})]})})}c(160);function ne(){var e=Object(b.m)().id,t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1],s=Object(a.useState)([]),r=Object(u.a)(s,2),l=r[0],j=r[1],d=Object(a.useState)([]),h=Object(u.a)(d,2),m=h[0],O=h[1];Object(a.useEffect)((function(){v.a.get("https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=eeeec0d10ea9ef7bd9542bc1c8caac5a&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?o(e.data.results[0].key):o()})),v.a.get("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),O(e.data.genres)}))}),[]);var p=l.episode_run_time,x=Math.floor(p/60),g=p%60;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{backgroundColor:"#282828",height:"26rem"},children:Object(n.jsxs)("div",{className:"row gx-5",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("div",{className:"player-wrapper",children:Object(n.jsx)(Y.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(i),controls:!0,width:"100%",height:"112%"})})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("div",{className:"title",children:[" ",l.original_name," "]}),Object(n.jsxs)("ul",{className:"list-inline",children:[Object(n.jsx)("li",{className:"list-inline-item",children:p>0&&Object(n.jsxs)("h4",{children:[" ",x," hrs ",g," min,"," "]})}),Object(n.jsx)("li",{className:"list-inline-item",children:m.map((function(e){return Object(n.jsx)("li",{className:"list-inline-item",children:Object(n.jsxs)("h4",{children:[e.name,","]})},e.id)}))}),Object(n.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(n.jsx)("h4",{children:" English "}),"ja"===l.original_language&&Object(n.jsx)("h4",{children:" Japanese "}),"ko"===l.original_language&&Object(n.jsx)("h4",{children:" Korean "}),"hi"===l.original_language&&Object(n.jsx)("h4",{children:" Hindi "})]}),Object(n.jsx)("li",{})]}),Object(n.jsx)("div",{className:"tagline",children:l.tagline}),Object(n.jsx)("h4",{children:"Overview:"}),Object(n.jsx)("div",{className:"overview",children:Object(n.jsx)("p",{children:l.overview})})]})]})}),Object(n.jsx)("div",{style:{backgroundColor:"black"},children:Object(n.jsx)(ce,{})})]})}var ae=Object(m.a)((function(e){return{root:{minWidth:180}}}));function ie(){var e=ae(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){W.get("/tv/populartvshow").then((function(e){o(e.data)}))}),[]);var s=Object(b.k)();return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Popular TV Shows"}),Object(n.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var oe=Object(m.a)((function(e){return{root:{minWidth:180}}}));function se(){var e=oe(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){W.get("/tv/airingtodaytvshow").then((function(e){o(e.data)}))}),[]);var s=Object(b.k)();return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Airing Today"}),Object(n.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var re=Object(m.a)((function(e){return{root:{minWidth:180}}}));function le(){var e=re(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){W.get("/tv/ontheairtvshow").then((function(e){o(e.data)}))}),[]);var s=Object(b.k)();return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Currently Airing TV Shows"}),Object(n.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var je=Object(m.a)((function(e){return{root:{minWidth:180}}}));function de(){var e=je(),t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){W.get("/tv/gettopratedtvshow").then((function(e){o(e.data)}))}),[]);var s=Object(b.k)();return Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(n.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Top Rated TV Shows"}),Object(n.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:i.map((function(t,c){return Object(n.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(n.jsx)(p.a,{className:e.root,onClick:function(){s.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(n.jsx)(x.a,{children:Object(n.jsx)(g.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var he=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(G,{}),Object(n.jsxs)(b.g,{children:[Object(n.jsx)(b.d,{path:"/tv/:tvshowtitle/:id",component:ne}),Object(n.jsx)(b.d,{path:"/tv/top-rated",component:de}),Object(n.jsx)(b.d,{path:"/tv/on-tv",component:le}),Object(n.jsx)(b.d,{path:"/tv/airing-today",component:se}),Object(n.jsx)(b.d,{path:"/tv/popular",component:ie}),Object(n.jsx)(b.d,{path:"/movie/:movietitle/:id",component:ee}),Object(n.jsx)(b.d,{path:"/search",component:N}),Object(n.jsx)(b.d,{path:"/movies",exact:!0,component:Q}),Object(n.jsx)(b.d,{path:"/",exact:!0,component:Q})]})]})}}]),c}(a.Component);s.a.render(Object(n.jsx)(r.BrowserRouter,{children:Object(n.jsx)(he,{})}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.ace76e67.chunk.js.map