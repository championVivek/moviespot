(this.webpackJsonpmovie_search_frontend=this.webpackJsonpmovie_search_frontend||[]).push([[0],{127:function(e,t,c){},132:function(e,t,c){},140:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){},161:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c(0),n=c.n(a),s=c(23),o=c.n(s),r=c(10),l=(c(108),c(85)),j=c(86),d=c(99),h=c(98),b=c(12),m=c(6),u=c(183),O=c(185),p=c(193),x=c(190),v=c(186),g=c(24),f=c.n(g),w=c(87),S=c.n(w),y=(c(127),Object(u.a)((function(){return{root:{minWidth:140}}})));function N(){var e=y(),t=Object(b.g)(),c=S.a.parse(t.search,{ignoreQueryPrefix:!0}).query,n=Object(a.useState)([]),s=Object(m.a)(n,2),o=s[0],r=s[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&query=").concat(c,"&page=1&include_adult=false")).then((function(e){null!=e.data?r(e.data.results):r(null)}))}),[]);var l=Object(b.f)();return Object(i.jsx)("div",{className:"spaceing",children:Object(i.jsx)(O.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",className:e.root,children:o.map((function(e,t){return null!==e.poster_path?Object(i.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(p.a,{onClick:function(){l.push("/movie/".concat(e.title,"/").concat(e.id))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+e.poster_path,title:e.title})})})},t):null}))})})}var T=c(42),_=c(63),k=c(93),C=c.n(k),I=c(191),W=Object(u.a)((function(e){return{root:{flexGrow:1},search:Object(T.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"whitesmoke"},inputInput:Object(T.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function E(){var e=W(),t=Object(b.f)(),c=Object(a.useState)(),n=Object(m.a)(c,2),s=n[0],o=n[1];return Object(i.jsx)("div",{children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),t.push({pathname:"/search",search:"?query=".concat(s)}),window.location.reload(!0)},children:Object(i.jsx)(I.a,{placeholder:"Search...",value:s,onChange:function(e){return o(e.target.value)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})})})}var F=c(189),P=c(192),R=c(188),A=(c(132),Object(u.a)((function(e){return{root:{flexGrow:5},home:{flexGrow:1,marginLeft:e.spacing(3),paddingBottom:4},title:Object(T.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(T.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})));function G(){var e=A();return Object(i.jsxs)(F.a,{className:"navbar__body",collapseOnSelect:!0,expand:"lg",sticky:"top",children:[Object(i.jsx)(F.a.Brand,{className:"brandd",children:"MOVIESPOT"}),Object(i.jsx)(F.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"nav__toggle"}),Object(i.jsxs)(F.a.Collapse,{id:"responsive-navbar-nav",children:[Object(i.jsxs)(P.a,{className:"mr-auto",children:[Object(i.jsx)(P.a.Link,{as:r.b,to:"/movies",className:"nav__link",children:"Movies"}),Object(i.jsxs)(R.a,{title:"TV Shows",id:"collasible-nav-dropdown",className:"nav__dropdown",children:[Object(i.jsx)(R.a.Item,{as:r.b,to:"/tv/popular",children:"Popular"}),Object(i.jsx)(R.a.Item,{as:r.b,to:"/tv/airing-today",style:{color:"black"},children:"Airing Today"}),Object(i.jsx)(R.a.Item,{as:r.b,to:"/tv/on-tv",style:{color:"black"},children:"On Tv"}),Object(i.jsx)(R.a.Item,{as:r.b,to:"/tv/top-rated",style:{color:"black"},children:"Top Rated"})]})]}),Object(i.jsxs)("div",{className:e.search,children:[Object(i.jsx)("div",{className:e.searchIcon,children:Object(i.jsx)(C.a,{})}),Object(i.jsx)(E,{})]})]})]})}var U=c(22),L=f.a.create({baseURL:""}),M=(c(44),Object(u.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}})));function B(){var e=M(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){L.get("/popularmovies").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Popular Movies"}),Object(i.jsx)(U.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:n.map((function(t,c){return Object(i.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:[" ",Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[3]})})})]},c)}))})]})})}var V=Object(u.a)((function(e){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function J(){var e=V(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){L.get("/topratedmovies").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{className:"carousel-wrapper",children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Top rated Movies"}),Object(i.jsx)(U.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:n.map((function(t,c){return Object(i.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})]})})}var q=Object(u.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function D(){var e=q(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1],o=Object(b.f)();Object(a.useEffect)((function(){L.get("/nowplaying").then((function(e){s(e.data)}))}),[]);return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Now playing"}),Object(i.jsx)(U.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:n.map((function(t,c){return Object(i.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})]})})}var H=Object(u.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function K(){var e=H(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){L.get("/upcomingmovies").then((function(e){s(e.data),console.log(n)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Upcoming Movies"}),Object(i.jsx)(U.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:n.map((function(t,c){return Object(i.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})]})})}c(140);function Q(){return Object(i.jsxs)("div",{className:"home_body",children:[Object(i.jsx)(D,{}),Object(i.jsx)(K,{}),Object(i.jsx)(B,{}),Object(i.jsx)(J,{})]})}var z=c(59),X=c.n(z),Y=c(60),Z=c.n(Y),$=Object(u.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function ee(){var e=$(),t=Object(b.h)().id,c=Object(a.useState)([]),n=Object(m.a)(c,2),s=n[0],o=n[1];Object(a.useEffect)((function(){L.get("https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){null!=e.data?o(e.data.results):o(null)}))}),[]);var r=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{style:{color:"white"},children:"Recommended Movies"}),Object(i.jsx)(U.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:s.map((function(t,c){return null!==t.poster_path?Object(i.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){r.push("/movie/".concat(t.title,"/").concat(t.id)),window.location.reload(!0)},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title,id:t.id})})})},c):null}))})]})})}c(159);function te(){var e=Object(b.h)().id,t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)([]),r=Object(m.a)(o,2),l=r[0],j=r[1],d=Object(a.useState)([]),h=Object(m.a)(d,2),u=h[0],O=h[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?s(e.data.results[0].key):s()})),f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),O(e.data.genres)}))}),[]);var p=l.runtime,x=Math.floor(p/60),v=p%60;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"movieDetails_body",children:[Object(i.jsx)("div",{className:"youtube-player",children:Object(i.jsx)("div",{className:"player-wrapper",children:Object(i.jsx)(X.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(n),controls:!0,width:"100%",height:"100%"})})}),Object(i.jsxs)("div",{className:"movie_details",children:[Object(i.jsxs)("div",{className:"title",children:[" ",l.title," "]}),Object(i.jsx)("div",{className:"details",children:Object(i.jsxs)("ul",{className:"list-inline",children:[Object(i.jsx)("li",{className:"list-inline-item",children:p>0&&Object(i.jsxs)("span",{className:"details_items",children:[" ",x," hrs ",v," min,"," "]})}),Object(i.jsx)("li",{className:"list-inline-item",children:u.map((function(e){return Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsxs)("span",{className:"details_items",children:[e.name,","]})},e.id)}))}),Object(i.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" English "}),"ja"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Japanese "}),"ko"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Korean "}),"hi"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Hindi "})]}),Object(i.jsx)("li",{})]})}),Object(i.jsx)("div",{className:"tagline",children:l.tagline}),Object(i.jsx)("h4",{style:{color:"white"},children:"Overview:"}),Object(i.jsx)("div",{className:"overview",children:Object(i.jsx)(Z.a,{children:Object(i.jsx)("p",{children:l.overview})})})]})]}),Object(i.jsx)("div",{style:{backgroundColor:"black"},children:Object(i.jsx)(ee,{})})]})}var ce=Object(u.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function ie(){var e=ce(),t=Object(b.h)().id,c=Object(a.useState)([]),n=Object(m.a)(c,2),s=n[0],o=n[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){o(e.data.results)}))}),[]);var r=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{style:{color:"white"},children:"Recommended Shows"}),Object(i.jsx)(U.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:s.map((function(t,c){return Object(i.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:[" ",Object(i.jsx)(p.a,{className:e.root,onClick:function(){r.push("/tv/".concat(t.name,"/").concat(t.id)),window.location.reload(!0)},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.name,id:t.id})})})]},c)}))})]})})}c(160);function ae(){var e=Object(b.h)().id,t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)([]),r=Object(m.a)(o,2),l=r[0],j=r[1],d=Object(a.useState)([]),h=Object(m.a)(d,2),u=h[0],O=h[1];Object(a.useEffect)((function(){f.a.get("https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=eeeec0d10ea9ef7bd9542bc1c8caac5a&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?s(e.data.results[0].key):s()})),f.a.get("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),O(e.data.genres)}))}),[]);var p=l.episode_run_time,x=Math.floor(p/60),v=p%60;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"tvshow_details_body",children:[Object(i.jsx)("div",{className:"youtube-player",children:Object(i.jsx)("div",{className:"player-wrapper",children:Object(i.jsx)(X.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(n),controls:!0,width:"100%",height:"100%"})})}),Object(i.jsxs)("div",{className:"tvshow_details",children:[Object(i.jsxs)("div",{className:"title",children:[" ",l.original_name," "]}),Object(i.jsx)("div",{className:"details",children:Object(i.jsxs)("ul",{className:"list-inline",children:[Object(i.jsx)("li",{className:"list-inline-item",children:p>0&&Object(i.jsxs)("span",{className:"details_items",children:[" ",x," hrs ",v," min,"," "]})}),Object(i.jsx)("li",{className:"list-inline-item",children:u.map((function(e){return Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsxs)("span",{className:"details_items",children:[e.name,","]})},e.id)}))}),Object(i.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" English "}),"ja"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Japanese "}),"ko"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Korean "}),"hi"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Hindi "})]}),Object(i.jsx)("li",{})]})}),Object(i.jsx)("div",{className:"tagline",children:l.tagline}),Object(i.jsx)("h4",{style:{color:"white"},children:"Overview:"}),Object(i.jsx)("div",{className:"overview",children:Object(i.jsx)(Z.a,{children:Object(i.jsx)("p",{children:l.overview})})})]})]}),Object(i.jsx)("div",{style:{backgroundColor:"black"},children:Object(i.jsx)(ie,{})})]})}var ne=c(187),se=Object(u.a)((function(e){return{root:{minWidth:180}}}));function oe(){var e=se(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){L.get("/tv/populartvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(ne.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Popular TV Shows"}),Object(i.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:n.map((function(t,c){return Object(i.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var re=Object(u.a)((function(e){return{root:{minWidth:140}}}));function le(){var e=re(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){L.get("/tv/airingtodaytvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(ne.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Airing Today"}),Object(i.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:n.map((function(t,c){return Object(i.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var je=Object(u.a)((function(e){return{root:{minWidth:180}}}));function de(){var e=je(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){L.get("/tv/ontheairtvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(ne.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Currently Airing TV Shows"}),Object(i.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:n.map((function(t,c){return Object(i.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var he=Object(u.a)((function(e){return{root:{minWidth:180}}}));function be(){var e=he(),t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){L.get("/tv/gettopratedtvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(ne.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Top Rated TV Shows"}),Object(i.jsx)(O.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:n.map((function(t,c){return Object(i.jsx)(O.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(p.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(v.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var me=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)(G,{}),Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{path:"/tv/:tvshowtitle/:id",component:ae}),Object(i.jsx)(b.a,{path:"/tv/top-rated",component:be}),Object(i.jsx)(b.a,{path:"/tv/on-tv",component:de}),Object(i.jsx)(b.a,{path:"/tv/airing-today",component:le}),Object(i.jsx)(b.a,{path:"/tv/popular",component:oe}),Object(i.jsx)(b.a,{path:"/movie/:movietitle/:id",component:te}),Object(i.jsx)(b.a,{path:"/search",component:N}),Object(i.jsx)(b.a,{path:"/movies",exact:!0,component:Q}),Object(i.jsx)(b.a,{path:"/",exact:!0,component:Q})]})]})}}]),c}(a.Component);o.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(me,{})}),document.getElementById("root"))},44:function(e,t,c){}},[[161,1,2]]]);
//# sourceMappingURL=main.3d6e5559.chunk.js.map