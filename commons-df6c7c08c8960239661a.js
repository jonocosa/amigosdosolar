(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,r){"use strict";r("sc67"),r("AqHK"),r("pJf4"),r("pS08"),r("R48M");var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},"8ypT":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),c=n(r("pVnL")),u=n(r("q1tI")),l=n(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=d(e),r=p(t);return g[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function T(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+u+o+s+r+n+t+i+a+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(x,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),s):s})),x=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,g=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,O=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,c.default)({opacity:C?1:0,transition:j?"opacity "+b+"ms":"none"},s),k="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},N=(0,c.default)((0,c.default)((0,c.default)({opacity:this.state.imgLoaded?0:1},j&&R),s),f),M={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:w};if(g){var z=g,q=h(g);return u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),k&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&R)}),q.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:M,imageVariants:z,generateSources:A}),q.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:M,imageVariants:z,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,T(z),u.default.createElement(x,{alt:r,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)((0,c.default)({alt:r,title:t,loading:S},q),{},{imageVariants:z}))}}))}if(m){var V=m,D=h(m),U=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},i);return"inherit"===i.display&&delete U.display,u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},k&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:k,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},j&&R)}),D.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:D.base64,spreadProps:M,imageVariants:V,generateSources:A}),D.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:D.tracedSVG,spreadProps:M,imageVariants:V,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,T(V),u.default.createElement(x,{alt:r,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)((0,c.default)({alt:r,title:t,loading:S},D),{},{imageVariants:V}))}}))}return null},t}(u.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),k=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});j.propTypes={resolutions:P,sizes:k,fixed:l.default.oneOfType([P,l.default.arrayOf(P)]),fluid:l.default.oneOfType([k,l.default.arrayOf(k)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var R=j;t.default=R},Bl7J:function(e,t,r){"use strict";var n=r("IRj2"),a=r("q1tI"),i=r.n(a),o=r("Wbzz"),s=r("PVmN"),c=r.n(s),u=r("t4J2"),l=r("9eSz"),d=r.n(l),f=function(){var e=u.data;return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#292327",marginBottom:"1.45rem",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(f,null),i.a.createElement("h1",null,i.a.createElement(o.Link,{to:"/",style:{color:"#cc9966",textDecoration:"none"}},t)),i.a.createElement("div",{className:"logo",style:{width:"10%",paddingLeft:"20px",paddingTop:"10px",paddingRight:"10px"}},i.a.createElement("img",{src:c.a,alt:""})))};p.defaultProps={siteTitle:""};var h=p;r("8ypT"),t.a=function(e){var t=e.children,r=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:r.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},C9fy:function(e,t,r){var n=Date.prototype,a=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("IYdN")(n,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Amigos do Solar","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Amigos do Solar"}}}}')},PVmN:function(e,t,r){e.exports=r.p+"static/logo-amigos-0c91db1236254fc60a4c4cdee12d327f.png"},R48M:function(e,t,r){var n=r("P8UN");n(n.S+n.F*!r("QPJK"),"Object",{defineProperty:r("rjfK").f})},SGlo:function(e,t,r){"use strict";var n=r("rj/q"),a=r("N+BI").getWeak,i=r("1a8y"),o=r("BjK0"),s=r("xa9o"),c=r("yde8"),u=r("Wadk"),l=r("qDzq"),d=r("O1i0"),f=u(5),p=u(6),h=0,g=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},y=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var r=y(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var u=e((function(e,n){s(e,u,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&c(n,r,e[i],e)}));return n(u.prototype,{delete:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(d(this,t)).delete(e):r&&l(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(d(this,t)).has(e):r&&l(r,this._i)}}),u},def:function(e,t,r){var n=a(i(t),!0);return!0===n?g(e).set(t,r):n[e._i]=r,e},ufstore:g}},bmMU:function(e,t,r){"use strict";r("pJf4"),r("Ll4R"),r("q8oJ"),r("C9fy"),r("klQ5"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("MIFh");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,c,u,l=n(t),d=n(r);if(l&&d){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var h=t instanceof RegExp,g=r instanceof RegExp;if(h!=g)return!1;if(h&&g)return t.toString()==r.toString();var m=a(t);if((c=m.length)!==a(r).length)return!1;for(s=c;0!=s--;)if(!i.call(r,m[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=c;0!=s--;)if(!("_owner"===(u=m[s])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},eMsz:function(e,t,r){"use strict";var n,a=r("emib"),i=r("Wadk")(0),o=r("IYdN"),s=r("N+BI"),c=r("k5Iv"),u=r("SGlo"),l=r("BjK0"),d=r("O1i0"),f=r("O1i0"),p=!a.ActiveXObject&&"ActiveXObject"in a,h=s.getWeak,g=Object.isExtensible,m=u.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(l(e)){var t=h(e);return!0===t?m(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return u.def(d(this,"WeakMap"),e,t)}},v=e.exports=r("94Pd")("WeakMap",y,b,u,!0,!0);f&&p&&(c((n=u.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=v.prototype,r=t[e];o(t,e,(function(t,a){if(l(t)&&!g(t)){this._f||(this._f=new n);var i=this._f[e](t,a);return"set"==e?this:i}return r.call(this,t,a)}))})))},klQ5:function(e,t,r){var n=r("emib"),a=r("TUPI"),i=r("rjfK").f,o=r("chL8").f,s=r("mhTz"),c=r("lb9j"),u=n.RegExp,l=u,d=u.prototype,f=/a/g,p=/a/g,h=new u(f)!==f;if(r("QPJK")&&(!h||r("96qb")((function(){return p[r("sOol")("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")})))){u=function(e,t){var r=this instanceof u,n=s(e),i=void 0===t;return!r&&n&&e.constructor===u&&i?e:a(h?new l(n&&!i?e.source:e,t):l((n=e instanceof u)?e.source:e,n&&i?c.call(e):t),r?this:d,u)};for(var g=function(e){e in u||i(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},m=o(l),y=0;m.length>y;)g(m[y++]);d.constructor=u,u.prototype=d,r("IYdN")(n,"RegExp",u)}r("to/b")("RegExp")},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return ge}));r("wZFJ"),r("HQhv"),r("n7j8"),r("1dPr"),r("JHok"),r("OeI1"),r("MIFh"),r("sC2a"),r("sc67"),r("LagC"),r("pS08"),r("E5k/"),r("R48M"),r("m210"),r("4DPX"),r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK");var n,a,i,o,s=r("17x9"),c=r.n(s),u=r("8+s/"),l=r.n(u),d=r("bmMU"),f=r.n(d),p=r("q1tI"),h=r.n(p),g=r("MgzW"),m=r.n(g),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),S="cssText",E="href",A="http-equiv",O="innerHTML",C="itemprop",I="name",L="property",x="rel",j="src",P="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",N="defer",M="encodeSpecialCharacters",z="onChangeClientState",q="titleTemplate",V=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=X(e,w.TITLE),r=X(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,R);return t||n||void 0},Y=function(e){return X(e,z)||function(){}},_=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===x&&"canonical"===e[r].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==O&&s!==S&&s!==C||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=m()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;ce(w.BODY,n),ce(w.HTML,a),se(d,f);var p={baseTag:ue(w.BASE,r),linkTags:ue(w.LINK,i),metaTags:ue(w.META,o),noscriptTags:ue(w.NOSCRIPT,s),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,l)},h={},g={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(g[e]=p[e].oldTags)})),t&&t(),c(e,h,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(w.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=de(r,n),[h.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===O||r===S){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===S)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:fe(w.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,a,n),link:fe(w.LINK,i,n),meta:fe(w.META,o,n),noscript:fe(w.NOSCRIPT,s,n),script:fe(w.SCRIPT,c,n),style:fe(w.STYLE,u,n),title:fe(w.TITLE,{title:d,titleAttributes:f},n)}},he=l()((function(e){return{baseTag:Z([E,P],e),bodyAttributes:_(y,e),defer:X(e,N),encode:X(e,M),htmlAttributes:_(b,e),linkTags:Q(w.LINK,[x,E],e),metaTags:Q(w.META,[I,T,A,L,C],e),noscriptTags:Q(w.NOSCRIPT,[O],e),onChangeClientState:Y(e),scriptTags:Q(w.SCRIPT,[j,O],e),styleTags:Q(w.STYLE,[S],e),title:J(e),titleAttributes:_(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),ge=(a=he,o=i=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return B({},a,((t={})[n.type]=o,t.titleAttributes=B({},i),t));case w.BODY:return B({},a,{bodyAttributes:B({},i)});case w.HTML:return B({},a,{htmlAttributes:B({},i)})}return B({},a,((r={})[n.type]=B({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[V[r]||r]=e[r],t}),t)}(W(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=B({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(a,n)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind}).call(this,r("yLpj"))},"t+fG":function(e,t,r){var n=r("P8UN"),a=r("96qb"),i=r("ap2Z"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},t4J2:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADkUlEQVQ4y11TbUxTVxg+G1myZDOLjmVTVk0GdF1ZiDhiF0gwsg/Com46f2xkIonCZiJhSuL2A60CCazIHJ18TLoxLHQgVCEUigqsrUgnFPtFWmrXFvsh5a7VfqGF23ve3dsicXuTe9+T97zPc573OTlociGM9nfqEBMvVSmeQ2uxrf52buWwRdysdlnbpz2LP03e1x6RmurQyZtbmf1f9d7nEToU7/38shatx0HJXDxv5CvXa1/1zjXetAfh/xGiv45ZTzDvl9kipu+ihiFFqKBjDrUqFxLgE/1GlCOcRgBUXN1RqbmZwHE8FaMokqR/9JqpMHmV2VC4liG3ZeYg01/ca0picm7b3WdUdhvjJ+1s0RSqF6OwGIzELESI6ta6weYLY99yFNt9Iaz1PAKV/R/SE1mB3zQeL9rTk8zgPhLdXbcKCcfv0eogTviD6v7gfDAG5qUgec3ohgaVFdeMW0A07QDhpBU3KK247S87aFy+VT+td7/YcIzBfTNwL6moK3EPqOB3fYL9fdEr0jliwR1ZpQF+yk+r8gSXIbxCQuDJCkw7fUzGa+OTzOg1Ew4JA9U5HyYV9FvQf6NMvkVmJog1/5/6Bg+CEVDZHoAv8vjp3TD1GLOo/9Mx+ixFhsSK0MeD8xtaAV7IPyTZmtOhWeLPB0DlClH2h4+BoL3Suv20YgJcgWXwhqNg8oahzxaIlegeQeZ5pZwhOjxo2vTZDdvLcVZei/Yq98ToEruo27D5so58sc8J6a0mvPOCBnhNd4AnUEHGmSFIPT0MLL4SuAINpLRb8IYhN2y7cCvELe7VZ9XejuaJzd8nrKubKk0vlUPKUSmw5bYY54oD7+sy4y87dXi7YBKzq2R4S8Uf+L1zMsw+N453X9Tg8hEr5sicFKtbT7GKrwL31Fi08JKBEyfMOztemPZFD2yuvwWZU344ct0B2U1aak/7bOz4FS15WKQgvxUryAPC62RFj5rce2kmtq/TSL0tdULKhBdYlaOQcXzYVTlkfDVOyKmQP3lrtwA4J8X6NwecUzyRkfygzQDZP+shv5keu+4G7KiRQ2b1CKTyx4BVewe4jUZIazcH0mWOsfQDdQS7pA+yhXr1p+q/30Cc0mtTaZ80hbI+rC9jDtjBV3K3Vyv3pp6ZKN9UPlCd/HXX+eQy8Y+vlXUKXj/WU5V2arSUV6vI31WdeNPvFjb2v1MiIbIaZkZypIbv/gUV81Sd9mTSyAAAAABJRU5ErkJggg==","aspectRatio":1.5957446808510638,"src":"/static/0c91db1236254fc60a4c4cdee12d327f/630fb/logo-amigos.png","srcSet":"/static/0c91db1236254fc60a4c4cdee12d327f/5db04/logo-amigos.png 75w,\\n/static/0c91db1236254fc60a4c4cdee12d327f/6d161/logo-amigos.png 150w,\\n/static/0c91db1236254fc60a4c4cdee12d327f/630fb/logo-amigos.png 300w,\\n/static/0c91db1236254fc60a4c4cdee12d327f/c6f65/logo-amigos.png 443w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},vrFN:function(e,t,r){"use strict";var n=r("EH9Q"),a=r("q1tI"),i=r.n(a),o=r("qhky");function s(e){var t=e.description,r=e.lang,a=e.meta,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r},zTTH:function(e,t,r){"use strict";var n=r("P8UN"),a=r("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(i)}}]);
//# sourceMappingURL=commons-df6c7c08c8960239661a.js.map