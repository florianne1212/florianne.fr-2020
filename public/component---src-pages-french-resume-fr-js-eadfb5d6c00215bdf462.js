(self.webpackChunkflorianne=self.webpackChunkflorianne||[]).push([[252],{5026:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r,o=n(5761),l=n(7294),a=n(5444),i=n(9692),u=n(2982),c=n(5985),s=n(8630),m=n(908),h=n(6230),p=n(5701),E=n(5446),d=n(2392),f=[{id:0,title:"mon cv",path:"/French/resume_fr",video:"pepin-fresh.mp4"},{id:1,title:"mes projests personnels",path:"myprojects",video:"pepin-bathtub.mp4"},{id:2,title:"mes projets a 42",path:"42projects",video:"pepin-nelson.mp4"}],v=function(e){var t=e.toggleMenu,n=e.setToggleMenu,r=e.onCursor,o=(0,l.useState)({show:!1,video:"pepin-sheep.mp4",key:"0"}),i=(o[0],o[1]);return l.createElement(l.Fragment,null,l.createElement(m.M,null,t&&l.createElement(d.JL,{initial:{x:"-100%"},exit:{x:"-100%"},animate:{x:t?0:"-100%"},transition:{duration:.8,ease:[.6,.05,-.01,.9]}},l.createElement(p.W2,null,l.createElement(d.$T,null,l.createElement(p.kC,{spaceBetween:!0,noHeight:!0},l.createElement("h2",null,"Pourquoi m'enbaucher ?"),l.createElement(d.qk,{onClick:function(){return n(!t)},onMouseEnter:function(){return r("pointer")},onMouseLeave:r},l.createElement("button",null,l.createElement("span",null),l.createElement("span",null))))),l.createElement(d.$6,null,l.createElement("ul",null,f.map((function(e){return l.createElement(h.E.li,{onMouseEnter:function(){return r("pointer")},onMouseLeave:r,onClick:r,key:e.id,onHoverStart:function(){return i({show:!0,video:e.video,key:e.id})},onHoverEnd:function(){return i({show:!1,video:e.video,key:e.id})}},l.createElement(a.Link,{to:""+e.path},l.createElement(h.E.div,{initial:{x:-108},whileHover:{x:-40,transition:{duration:.4,ease:[.6,.05,-.01,.9]}},className:"link"},l.createElement("span",{className:"arrow"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 101 57"},l.createElement("path",{d:"M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z",fill:"#000",fillRule:"evenodd"}))),e.title)))})))),l.createElement(d.qx,null,l.createElement(p.kC,{spaceBetween:!0},l.createElement(E.Bp,null,l.createElement(a.Link,{to:"/French/index_fr"},l.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r},"FR"))),l.createElement(E.Bp,{wider:!0},l.createElement(a.Link,{to:"/"},l.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r,onClick:r},"EN"))),l.createElement(E.Bp,{wider:!0},l.createElement("a",{href:"https://github.com/florianne1212"},l.createElement("p",{onMouseEnter:function(){return r("pointer")},onMouseLeave:r,onClick:r},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))))))))))},w=n(1112),g=(0,i.createGlobalStyle)(r||(r=(0,o.Z)(["\n\n\t//html, body {\n\t//\theight: 100%;\n\t//}\n\t\n\t","\n\t* {\n\t\ttext-decoration: none;\n\t\tcursor: none !important;\n\t}\n\n\thtml {\n\t\tbox-sizing: border-box;\n\t\t-webkit-font-smoothing: antialised;\n\t\tfont-size: 16px\n\t}\n\t\n\n\tbody {\n\t\t\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\tbackground : ",";\n\t\toverscroll-behavior: none;\n\t\toverflow-x: hidden\n\t}\n"])),u.Fv,(function(e){return e.theme.background})),k=function(e){var t=e.children,n=(0,w.mX)(),r=n.currentTheme,o=n.cursorStyles,a=(0,w.DI)(),u=function(e){e=o.includes(e)&&e||!1,a({type:"CURSOR_TYPE",cursorType:e})},m=(0,l.useState)(!1),h=m[0],p=m[1];return l.createElement(i.ThemeProvider,{theme:"dark"===r?{background:"#000000",text:"#ffffff",blue:"#11737E"}:{background:"#ffffff",text:"#000000",blue:"#773344"}},l.createElement(g,null),l.createElement(s.Z,{toggleMenu:h}),l.createElement(c.Z,{onCursor:u,toggleMenu:h,setToggleMenu:p}),l.createElement(v,{toggleMenu:h,setToggleMenu:p,onCursor:u}),l.createElement("main",null,t))}},3910:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),o=n(3615),l=n(1112),a=n(5026),i=n.p+"static/resume_fr-cb5852fe59cf1c03b661a4dc609da4e8.pdf",u=n(290);u.v0.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/"+u.v0.version+"/pdf.worker.js";var c=function(){var e=(0,l.mX)(),t=(e.currentTheme,e.cursorStyles),n=(0,l.DI)(),c=function(e){e=t.includes(e)&&e||!1,n({type:"CURSOR_TYPE",cursorType:e})},s=(0,r.useState)(1),m=s[0],h=s[1];return r.createElement("div",null,r.createElement(a.Z,null,r.createElement(o.or,null,r.createElement(u.BB,{file:i},r.createElement(u.T3,{pageNumber:1,scale:m}))),r.createElement(o.UW,null,r.createElement("a",{href:i,download:"Florianne_Coudert.pdf"},r.createElement("button",{href:i,download:"Florianne_Coudert.pdf",onMouseEnter:function(){return c("pointer")},onMouseLeave:c},r.createElement("a",{href:i,download:"Florianne_Coudert.pdf"}),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"}))))),r.createElement(o.DY,null,r.createElement("span",{onClick:function(){return h(1.25*m)},onMouseEnter:function(){return c("pointer")},onMouseLeave:c},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"})))),r.createElement(o.H9,null,r.createElement("span",{onClick:function(){return h(.75*m)},onMouseEnter:function(){return c("pointer")},onMouseLeave:c},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M0 10h24v4h-24z"}))))))}}}]);
//# sourceMappingURL=component---src-pages-french-resume-fr-js-eadfb5d6c00215bdf462.js.map