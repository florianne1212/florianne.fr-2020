(self.webpackChunkflorianne=self.webpackChunkflorianne||[]).push([[491],{9926:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r,l=n(7294),o=n(5414),a=n(5761),u=n(5444),i=n(9692),c=n(2982),s=n(5985),m=n(8630),E=n(908),p=n(6230),f=n(5701),d=n(5446),h=n(2392),v=[{id:0,title:"mon cv",path:"resume",video:"pepin-fresh.mp4"},{id:1,title:"mes projests personnels",path:"myprojects",video:"pepin-bathtub.mp4"},{id:2,title:"mes projets a 42",path:"42projects",video:"pepin-nelson.mp4"}],g=function(e){var t=e.toggleMenu,n=e.setToggleMenu,r=e.onCursor,o=(0,l.useState)({show:!1,video:"pepin-sheep.mp4",key:"0"}),a=(o[0],o[1]);return l.createElement(l.Fragment,null,l.createElement(E.M,null,t&&l.createElement(h.JL,{initial:{x:"-100%"},exit:{x:"-100%"},animate:{x:t?0:"-100%"},transition:{duration:.8,ease:[.6,.05,-.01,.9]}},l.createElement(f.W2,null,l.createElement(h.$T,null,l.createElement(f.kC,{spaceBetween:!0,noHeight:!0},l.createElement("h2",null,"Pourquoi m'enbaucher ?"),l.createElement(h.qk,{onClick:function(){return n(!t)},onMouseEnter:function(){return r("pointer")},onMouseLeave:r},l.createElement("button",null,l.createElement("span",null),l.createElement("span",null))))),l.createElement(h.$6,null,l.createElement("ul",null,v.map((function(e){return l.createElement(p.E.li,{onMouseEnter:function(){return r("pointer")},onMouseLeave:r,key:e.id,onHoverStart:function(){return a({show:!0,video:e.video,key:e.id})},onHoverEnd:function(){return a({show:!1,video:e.video,key:e.id})}},l.createElement(u.Link,{to:"/"+e.path},l.createElement(p.E.div,{initial:{x:-108},whileHover:{x:-40,transition:{duration:.4,ease:[.6,.05,-.01,.9]}},className:"link"},l.createElement("span",{className:"arrow"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 101 57"},l.createElement("path",{d:"M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z",fill:"#000",fillRule:"evenodd"}))),e.title)))})))),l.createElement(h.qx,null,l.createElement(f.kC,{spaceBetween:!0},l.createElement(d.Bp,null,l.createElement(u.Link,{to:"French/index_fr"},l.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r},"FR"))),l.createElement(d.Bp,{wider:!0},l.createElement(u.Link,{to:"/"},l.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r},"EN"))),l.createElement(d.Bp,{wider:!0},l.createElement("a",{href:"https://github.com/florianne1212"},l.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))))))))))},b=n(1112),k=(0,i.createGlobalStyle)(r||(r=(0,a.Z)(["\n\n\t//html, body {\n\t//\theight: 100%;\n\t//}\n\t\n\t","\n\t* {\n\t\ttext-decoration: none;\n\t\tcursor: none !important;\n\t}\n\n\thtml {\n\t\tbox-sizing: border-box;\n\t\t-webkit-font-smoothing: antialised;\n\t\tfont-size: 16px\n\t}\n\t\n\n\tbody {\n\t\t\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\tbackground : ",";\n\t\toverscroll-behavior: none;\n\t\toverflow-x: hidden\n\t}\n"])),c.Fv,(function(e){return e.theme.background})),w=function(e){var t=e.children,n=(0,b.mX)(),r=n.currentTheme,o=n.cursorStyles,a=(0,b.DI)(),u=function(e){e=o.includes(e)&&e||!1,a({type:"CURSOR_TYPE",cursorType:e})},c=(0,l.useState)(!1),E=c[0],p=c[1];return l.createElement(i.ThemeProvider,{theme:"dark"===r?{background:"#000000",text:"#ffffff",blue:"#11737E"}:{background:"#ffffff",text:"#000000",blue:"#773344"}},l.createElement(k,null),l.createElement(m.Z,{toggleMenu:E}),l.createElement(s.Z,{onCursor:u,toggleMenu:E,setToggleMenu:p}),l.createElement(g,{toggleMenu:E,setToggleMenu:p,onCursor:u}),l.createElement("main",null,t))},M=n(6402),x=n(6111),y=function(e){var t=(0,l.useState)(!1),n=t[0],r=t[1],a=n?"client":"server",u=(0,b.mX)(),i=(u.currentTheme,u.cursorStyles),c=(0,b.DI)();return(0,l.useEffect)((function(){r(!0)}),[]),n?l.createElement("div",{key:a},l.createElement(o.q,null,l.createElement("meta",{charSet:"utf-8"}),l.createElement("title",null,"Florianne")),l.createElement(w,null,l.createElement(M.Z,{onCursor:function(e){e=i.includes(e)&&e||!1,c({type:"CURSOR_TYPE",cursorType:e})}}),l.createElement(x.Z,null)),l.createElement("button",null,"TEST")):null}}}]);
//# sourceMappingURL=component---src-pages-french-index-fr-js-ea2814a23404e0d0844b.js.map