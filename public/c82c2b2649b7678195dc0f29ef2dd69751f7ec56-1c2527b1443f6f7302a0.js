(self.webpackChunkflorianne=self.webpackChunkflorianne||[]).push([[807],{1575:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var r=n(7724),o=n(2677),i=n(7618),a=n(2310);function u(){var e=!1,t=[],n=new Set,u={subscribe:function(e){return n.add(e),function(){n.delete(e)}},start:function(r,o){if(e){var a=[];return n.forEach((function(e){a.push((0,i.d5)(e,r,{transitionOverride:o}))})),Promise.all(a)}return new Promise((function(e){t.push({animation:[r,o],resolve:e})}))},set:function(t){return(0,o.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((function(e){(0,a.gg)(e,t)}))},stop:function(){n.forEach((function(e){(0,i.p_)(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,n=e.resolve;u.start.apply(u,(0,r.ev)([],(0,r.CR)(t))).then(n)})),function(){e=!1,u.stop()}}};return u}var c=n(7294),s=n(9179);function l(){var e=(0,s.h)(u);return(0,c.useEffect)(e.mount,[]),e}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return ye}});var r,o,i,a,u=n(5697),c=n.n(u),s=n(4839),l=n.n(s),f=n(2993),p=n.n(f),d=n(7294),h=n(6494),y=n.n(h),m="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",C="href",x="http-equiv",O="innerHTML",S="itemprop",A="name",E="property",k="rel",j="src",I="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",L="encodeSpecialCharacters",M="onChangeClientState",V="titleTemplate",R=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,v.TITLE),n=J(e,V);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},$=function(e){return J(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===k&&"canonical"===e[n].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==O&&u!==T&&u!==S||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=y()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,o),ue(f,p);var d={baseTag:se(v.BASE,n),linkTags:se(v.LINK,i),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,u),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,l)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),c(e,h,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(z):n.getAttribute(z)!==a.join(",")&&n.setAttribute(z,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,o=fe(n,r),[d.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(m,n,r),htmlAttributes:pe(b,o,r),link:pe(v.LINK,i,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,u,r),script:pe(v.SCRIPT,c,r),style:pe(v.STYLE,s,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:X([C,I],e),bodyAttributes:G(m,e),defer:J(e,N),encode:J(e,L),htmlAttributes:G(b,e),linkTags:Z(v.LINK,[k,C],e),metaTags:Z(v.META,[A,w,x,E,S],e),noscriptTags:Z(v.NOSCRIPT,[O],e),onChangeClientState:$(e),scriptTags:Z(v.SCRIPT,[j,O],e),styleTags:Z(v.STYLE,[T],e),title:W(e),titleAttributes:G(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=he,a=i=function(e){function t(){return B(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},i)});case v.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind},660:function(e,t,n){"use strict";n.d(t,{YD:function(){return p}});var r=n(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=new Map,a=new Map,u=0;function c(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(u+=1,a.set(n,u.toString())),a.get(n)):"0":e[t]);var n})).toString()}function s(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=c(e),n=i.get(t);if(!n){var r,o=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=o.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:o},i.set(t,n)}return n}(n),o=r.id,a=r.observer,u=r.elements,s=u.get(e)||[];return u.has(e)||u.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(u.delete(e),a.unobserve(e)),0===u.size&&(a.disconnect(),i.delete(o))}}function l(e){return"function"!=typeof e.children}var f=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),l(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,o=e.trackVisibility,i=e.delay;this._unobserveCb=s(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:o,delay:i})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!l(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,a=i.children,u=i.as,c=i.tag,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,r.createElement)(u||c||"div",o({ref:this.handleNode},s),a)},i}(r.Component);function p(e){var t=void 0===e?{}:e,n=t.threshold,o=t.delay,i=t.trackVisibility,a=t.rootMargin,u=t.root,c=t.triggerOnce,l=t.skip,f=t.initialInView,p=(0,r.useRef)(),d=(0,r.useState)({inView:!!f}),h=d[0],y=d[1],m=(0,r.useCallback)((function(e){void 0!==p.current&&(p.current(),p.current=void 0),l||e&&(p.current=s(e,(function(e,t){y({inView:e,entry:t}),t.isIntersecting&&c&&p.current&&(p.current(),p.current=void 0)}),{root:u,rootMargin:a,threshold:n,trackVisibility:i,delay:o}))}),[Array.isArray(n)?n.toString():n,u,a,c,l,i,o]);(0,r.useEffect)((function(){p.current||!h.entry||c||l||y({inView:!!f})}));var b=[m,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},7653:function(e,t,n){"use strict";n.d(t,{jL:function(){return i},VY:function(){return a},dU:function(){return u},EM:function(){return c},EP:function(){return s},Xm:function(){return l},Dx:function(){return f}});var r=n(9692),o=n(6230),i=r.default.div.withConfig({displayName:"homeStyles__Banner",componentId:"sc-1nfuxmj-0"})(["overflow:hidden;margin-top:15%;height:50vh;width:100%;margin-bottom:0px;"]),a=((0,r.default)(o.E.div).withConfig({displayName:"homeStyles__HomeContentSection",componentId:"sc-1nfuxmj-1"})(["margin-bottom:200px;"]),r.default.h2.withConfig({displayName:"homeStyles__Content",componentId:"sc-1nfuxmj-2"})(["display:inline-block;width:53%;font-size:1.5rem;font-weight:400;margin-left:150px;color:",";"],(function(e){return e.theme.text}))),u=r.default.h2.withConfig({displayName:"homeStyles__GithubLink",componentId:"sc-1nfuxmj-3"})(["display:inline-block;margin-top:210px;font-size:1.5rem;font-weight:400;margin-left:100px;color:",";svg{width:120px;height:80px;top:150px;left:150px;width:108px;path{fill:",";}}"],(function(e){return e.theme.text}),(function(e){return e.theme.text})),c=r.default.h2.withConfig({displayName:"homeStyles__LinkedinLink",componentId:"sc-1nfuxmj-4"})(["display:inline-block;font-size:1.5rem;font-weight:400;margin-left:50px;color:",";svg{width:120px;height:80px;left:150px;width:108px;path{fill:",";}}"],(function(e){return e.theme.text}),(function(e){return e.theme.text})),s=(0,r.default)(o.E.div).withConfig({displayName:"homeStyles__HomeFeaturedSection",componentId:"sc-1nfuxmj-5"})(["margin-bottom:200px;position:relative;a{margin-bottom:200px;position:relative;display:block;}"]),l=(0,r.default)(o.E.div).withConfig({displayName:"homeStyles__FeaturedContent",componentId:"sc-1nfuxmj-6"})(["margin-top:25%;height:480px;width:100%;padding:56px 124px;box-sizing:border-box;color:",";h3{font-size:1.4rem;}.meta{display:flex;h4{&:last-child{margin-left:1rem;}}}.featured-title{position:absolute;bottom:-128px;font-size:7rem;font-weight:900;line-height:90px;margin:0;}.arrow{width:120px;height:80px;display:block;position:relative;overflow:hidden;svg{position:absolute;top:16px;left:-48px;width:108px;path{fill:",";}}}"],(function(e){return e.theme.blue}),(function(e){return e.theme.blue})),f=r.default.div.withConfig({displayName:"homeStyles__FeaturedVideo",componentId:"sc-1nfuxmj-7"})(["position:absolute;z-index:-1;width:110%;height:480px;top:0;display:block;overflow:hidden;video{width:100%;}"]);r.default.div.withConfig({displayName:"homeStyles__FeaturedProjects",componentId:"sc-1nfuxmj-8"})(["margin-top:200px;button{background:",";color:#fff;position:relative;padding:20px;display:block;text-align:left;font-size:1.4rem;line-height:1;font-weight:600;border:none;span{margin-right:100px;display:block;}&:before,&:after{content:'';position:absolute;top:50%;right:20px;width:35px;height:7px;display:block;background:#fff;transform:translateY(-50%);}&:before{margin-top:-8px;}&:after{margin-top:8px;}}"],(function(e){return e.theme.blue})),r.default.div.withConfig({displayName:"homeStyles__Title",componentId:"sc-1nfuxmj-9"})([""])},2530:function(e,t,n){"use strict";t.Z=n.p+"static/reveal_my-32fb539e7e8d5ad7b7d9a4109e00d8e4.mp4"}}]);
//# sourceMappingURL=c82c2b2649b7678195dc0f29ef2dd69751f7ec56-1c2527b1443f6f7302a0.js.map