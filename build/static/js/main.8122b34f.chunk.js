(this.webpackJsonpmovie_search_frontend=this.webpackJsonpmovie_search_frontend||[]).push([[0],{130:function(e,t,c){},135:function(e,t,c){},143:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(0),a=c.n(n),s=c(23),o=c.n(s),r=(c(110),c(86)),l=c(87),j=c(101),d=c(100),h=c(10),b=c(12),m=c(68),u=c.n(m),O=c(88),p=c(6),x=c(186),v=c(188),g=c(196),f=c(193),w=c(189),S=c(24),y=c.n(S),N=c(89),T=c.n(N),k=(c(130),Object(x.a)((function(){return{root:{minWidth:140}}})));function _(){var e=k(),t=Object(b.g)(),c=T.a.parse(t.search,{ignoreQueryPrefix:!0}).query,a=Object(n.useState)([]),s=Object(p.a)(a,2),o=s[0],r=s[1],l=Object(n.useState)(),j=Object(p.a)(l,2),d=j[0],h=j[1];Object(n.useEffect)((function(){function e(){return(e=Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,y.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&query=").concat(c,"&page=1&include_adult=false"));case 3:null!=(t=e.sent).data?(h(!1),r(t.data.results)):r(null),console.log(t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);var m=Object(b.f)();return Object(i.jsx)("div",{children:d?"Loading...":Object(i.jsx)("div",{className:"spaceing",children:Object(i.jsx)(v.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",className:e.root,children:o.map((function(e,t){return null!==e.poster_path?Object(i.jsx)(v.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(g.a,{onClick:function(){m.push("/movie/".concat(e.title,"/").concat(e.id))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+e.poster_path,title:e.title})})})},t):null}))})})})}var C=c(42),I=c(63),W=c(95),E=c.n(W),F=c(194),P=Object(x.a)((function(e){return{root:{flexGrow:1},search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(I.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"whitesmoke"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function R(){var e=P(),t=Object(b.f)(),c=Object(n.useState)(),a=Object(p.a)(c,2),s=a[0],o=a[1];return Object(i.jsx)("div",{children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),t.push({pathname:"/search",search:"?query=".concat(s)}),window.location.reload(!0)},children:Object(i.jsx)(F.a,{placeholder:"Search...",value:s,onChange:function(e){return o(e.target.value)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})})})}var A=c(192),G=c(195),L=c(191),U=(c(135),Object(x.a)((function(e){return{root:{flexGrow:5},home:{flexGrow:1,marginLeft:e.spacing(3),paddingBottom:4},title:Object(C.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(I.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})));function M(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),c=t[0],a=t[1],s=function(){a(!1)},o=U();return Object(i.jsxs)(A.a,{className:"navbar__body",collapseOnSelect:!0,expand:"lg",variant:"dark",sticky:"top",onToggle:function(e){a(e)},expanded:c,children:[Object(i.jsx)(A.a.Brand,{className:"brandd",children:"MOVIESPOT"}),Object(i.jsx)(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(i.jsxs)(A.a.Collapse,{id:"responsive-navbar-nav",children:[Object(i.jsxs)(G.a,{className:"mr-auto",children:[Object(i.jsx)(G.a.Link,{as:h.b,to:"/movies",className:"nav__link",onClick:s,children:"Movies"}),Object(i.jsxs)(L.a,{title:"TV Shows",id:"collasible-nav-dropdown",className:"nav__dropdown",children:[Object(i.jsx)(L.a.Item,{as:h.b,to:"/tv/popular",onClick:s,children:"Popular"}),Object(i.jsx)(L.a.Item,{as:h.b,to:"/tv/airing-today",onClick:s,children:"Airing Today"}),Object(i.jsx)(L.a.Item,{as:h.b,to:"/tv/on-tv",onClick:s,children:"On Tv"}),Object(i.jsx)(L.a.Item,{as:h.b,to:"/tv/top-rated",onClick:s,children:"Top Rated"})]})]}),Object(i.jsxs)("div",{className:o.search,children:[Object(i.jsx)("div",{className:o.searchIcon,children:Object(i.jsx)(E.a,{})}),Object(i.jsx)(R,{})]})]})]})}var B=c(22),V=y.a.create({baseURL:""}),J=(c(44),Object(x.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}})));function q(){var e=J(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){V.get("/popularmovies").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Popular Movies"}),Object(i.jsx)(B.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:a.map((function(t,c){return Object(i.jsxs)(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:[" ",Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[3]})})})]},c)}))})]})})}var D=Object(x.a)((function(e){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function H(){var e=D(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){V.get("/topratedmovies").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{className:"carousel-wrapper",children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Top rated Movies"}),Object(i.jsx)(B.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:a.map((function(t,c){return Object(i.jsx)(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})]})})}var K=Object(x.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function Q(){var e=K(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1],o=Object(b.f)();Object(n.useEffect)((function(){V.get("/nowplaying").then((function(e){s(e.data)}))}),[]);return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Now playing"}),Object(i.jsx)(B.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:a.map((function(t,c){return Object(i.jsx)(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})]})})}var z=Object(x.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function X(){var e=z(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){V.get("/upcomingmovies").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{children:"Upcoming Movies"}),Object(i.jsx)(B.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:a.map((function(t,c){return Object(i.jsx)(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/movie/".concat(t[0],"/").concat(t[3]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0]})})})},c)}))})]})})}c(143);function Y(){return Object(i.jsxs)("div",{className:"home_body",children:[Object(i.jsx)(Q,{}),Object(i.jsx)(X,{}),Object(i.jsx)(q,{}),Object(i.jsx)(H,{})]})}var Z=c(59),$=c.n(Z),ee=c(60),te=c.n(ee),ce=Object(x.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function ie(){var e=ce(),t=Object(b.h)().id,c=Object(n.useState)([]),a=Object(p.a)(c,2),s=a[0],o=a[1];Object(n.useEffect)((function(){V.get("https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){null!=e.data?o(e.data.results):o(null)}))}),[]);var r=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{style:{color:"white"},children:"Recommended Movies"}),Object(i.jsx)(B.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:s.map((function(t,c){return null!==t.poster_path?Object(i.jsx)(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){r.push("/movie/".concat(t.title,"/").concat(t.id)),window.location.reload(!0)},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title,id:t.id})})})},c):null}))})]})})}c(162);function ne(){var e=Object(b.h)().id,t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)([]),r=Object(p.a)(o,2),l=r[0],j=r[1],d=Object(n.useState)([]),h=Object(p.a)(d,2),m=h[0],u=h[1];Object(n.useEffect)((function(){y.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?s(e.data.results[0].key):s()})),y.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),u(e.data.genres)})),window.scrollTo(0,0)}),[]);var O=l.runtime,x=Math.floor(O/60),v=O%60;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"movieDetails_body",children:[Object(i.jsx)("div",{className:"youtube-player",children:Object(i.jsx)("div",{className:"player-wrapper",children:Object(i.jsx)($.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(a),controls:!0,width:"100%",height:"100%"})})}),Object(i.jsxs)("div",{className:"movie_details",children:[Object(i.jsxs)("div",{className:"title",children:[" ",l.title," "]}),Object(i.jsx)("div",{className:"details",children:Object(i.jsxs)("ul",{className:"list-inline",children:[Object(i.jsx)("li",{className:"list-inline-item",children:O>0&&Object(i.jsxs)("span",{className:"details_items",children:[" ",x," hrs ",v," min,"," "]})}),Object(i.jsx)("li",{className:"list-inline-item",children:m.map((function(e){return Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsxs)("span",{className:"details_items",children:[e.name,","]})},e.id)}))}),Object(i.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" English "}),"ja"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Japanese "}),"ko"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Korean "}),"hi"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Hindi "})]}),Object(i.jsx)("li",{})]})}),Object(i.jsx)("div",{className:"tagline",children:l.tagline}),Object(i.jsx)("h4",{style:{color:"white"},children:"Overview:"}),Object(i.jsx)("div",{className:"overview",children:Object(i.jsx)(te.a,{children:Object(i.jsx)("p",{children:l.overview})})})]})]}),Object(i.jsx)("div",{style:{backgroundColor:"black"},children:Object(i.jsx)(ie,{})})]})}var ae=Object(x.a)((function(){return{root:{minWidth:140,maxWidth:140,flexGrow:1}}}));function se(){var e=ae(),t=Object(b.h)().id,c=Object(n.useState)([]),a=Object(p.a)(c,2),s=a[0],o=a[1];Object(n.useEffect)((function(){y.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/recommendations?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US&page=1")).then((function(e){o(e.data.results)}))}),[]);var r=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"movie_container",children:[Object(i.jsx)("h3",{style:{color:"white"},children:"Recommended Shows"}),Object(i.jsx)(B.a,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2},{width:400,itemsToShow:3},{width:550,itemsToShow:4},{width:768,itemsToShow:6},{width:1200,itemsToShow:6}],itemsToScroll:1,pagination:!1,showArrows:!0,children:s.map((function(t,c){return Object(i.jsxs)(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,xs:12,sm:6,children:[" ",Object(i.jsx)(g.a,{className:e.root,onClick:function(){r.push("/tv/".concat(t.name,"/").concat(t.id)),window.location.reload(!0)},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.name,id:t.id})})})]},c)}))})]})})}c(163);function oe(){var e=Object(b.h)().id,t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)([]),r=Object(p.a)(o,2),l=r[0],j=r[1],d=Object(n.useState)([]),h=Object(p.a)(d,2),m=h[0],u=h[1];Object(n.useEffect)((function(){y.a.get("https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=eeeec0d10ea9ef7bd9542bc1c8caac5a&language=en-US")).then((function(e){"undefined"!==typeof e.data.results&&e.data.results.length>0?s(e.data.results[0].key):s()})),y.a.get("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat("eeeec0d10ea9ef7bd9542bc1c8caac5a","&language=en-US")).then((function(e){j(e.data),u(e.data.genres)})),window.scrollTo(0,0)}),[]);var O=l.episode_run_time,x=Math.floor(O/60),v=O%60;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"tvshow_details_body",children:[Object(i.jsx)("div",{className:"youtube-player",children:Object(i.jsx)("div",{className:"player-wrapper",children:Object(i.jsx)($.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(a),controls:!0,width:"100%",height:"100%"})})}),Object(i.jsxs)("div",{className:"tvshow_details",children:[Object(i.jsxs)("div",{className:"title",children:[" ",l.original_name," "]}),Object(i.jsx)("div",{className:"details",children:Object(i.jsxs)("ul",{className:"list-inline",children:[Object(i.jsx)("li",{className:"list-inline-item",children:O>0&&Object(i.jsxs)("span",{className:"details_items",children:[" ",x," hrs ",v," min,"," "]})}),Object(i.jsx)("li",{className:"list-inline-item",children:m.map((function(e){return Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsxs)("span",{className:"details_items",children:[e.name,","]})},e.id)}))}),Object(i.jsxs)("li",{className:"list-inline-item",children:["en"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" English "}),"ja"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Japanese "}),"ko"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Korean "}),"hi"===l.original_language&&Object(i.jsx)("span",{className:"details_items",children:" Hindi "})]}),Object(i.jsx)("li",{})]})}),Object(i.jsx)("div",{className:"tagline",children:l.tagline}),Object(i.jsx)("h4",{style:{color:"white"},children:"Overview:"}),Object(i.jsx)("div",{className:"overview",children:Object(i.jsx)(te.a,{children:Object(i.jsx)("p",{children:l.overview})})})]})]}),Object(i.jsx)("div",{style:{backgroundColor:"black"},children:Object(i.jsx)(se,{})})]})}var re=c(190),le=Object(x.a)((function(e){return{root:{minWidth:180}}}));function je(){var e=le(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){V.get("/tv/populartvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(re.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Popular TV Shows"}),Object(i.jsx)(v.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:a.map((function(t,c){return Object(i.jsx)(v.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var de=Object(x.a)((function(e){return{root:{minWidth:140}}}));function he(){var e=de(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){V.get("/tv/airingtodaytvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(re.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Airing Today"}),Object(i.jsx)(v.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:a.map((function(t,c){return Object(i.jsx)(v.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var be=Object(x.a)((function(e){return{root:{minWidth:180}}}));function me(){var e=be(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){V.get("/tv/ontheairtvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(re.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Currently Airing TV Shows"}),Object(i.jsx)(v.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:a.map((function(t,c){return Object(i.jsx)(v.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var ue=Object(x.a)((function(e){return{root:{minWidth:180}}}));function Oe(){var e=ue(),t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){V.get("/tv/gettopratedtvshow").then((function(e){s(e.data)}))}),[]);var o=Object(b.f)();return Object(i.jsx)("div",{children:Object(i.jsxs)(re.a,{maxWidth:"xl",style:{backgroundColor:"black",paddingTop:8},children:[Object(i.jsx)("h2",{style:{paddingBottom:"2rem",paddingTop:"2rem",color:"white"},children:"Top Rated TV Shows"}),Object(i.jsx)(v.a,{container:!0,className:e.root,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",children:a.map((function(t,c){return Object(i.jsx)(v.a,{item:!0,xs:12,sm:2,children:Object(i.jsx)(g.a,{className:e.root,onClick:function(){o.push("/tv/".concat(t[0],"/").concat(t[2]))},children:Object(i.jsx)(f.a,{children:Object(i.jsx)(w.a,{component:"img",objectFit:"cover",image:t[1],title:t[0],id:t[2]})})})},c)}))})]})})}var pe=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsx)(h.a,{children:Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsx)(M,{}),Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{path:"/tv/:tvshowtitle/:id",component:oe}),Object(i.jsx)(b.a,{path:"/tv/top-rated",component:Oe}),Object(i.jsx)(b.a,{path:"/tv/on-tv",component:me}),Object(i.jsx)(b.a,{path:"/tv/airing-today",component:he}),Object(i.jsx)(b.a,{path:"/tv/popular",component:je}),Object(i.jsx)(b.a,{path:"/movie/:movietitle/:id",component:ne}),Object(i.jsx)(b.a,{path:"/search",component:_}),Object(i.jsx)(b.a,{path:"/movies",component:Y}),Object(i.jsx)(b.a,{path:"/",component:Y})]})]})})}}]),c}(n.Component);o.a.render(Object(i.jsx)(pe,{}),document.getElementById("root"))},44:function(e,t,c){}},[[164,1,2]]]);
//# sourceMappingURL=main.8122b34f.chunk.js.map