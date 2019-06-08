"use strict";function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a,b){if(null==a)return{};var c,d,e=g(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function g(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function i(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===m(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c!==a&&(c=a,j&&(l=o(l,k([j(c)]),p)),e&&!d&&g(q,d=!0)),c},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,h=s(h.parentNode,h,i,i="string"==typeof(i=e(c))?w(i):i,m)};p(a.init)}}}(),o=n.h,h=n.app,q=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},r=q("a"),a=q("button"),s=q("code"),t=q("div"),u=q("footer"),v=q("h1"),w=q("h2"),x=q("h3"),y=q("h4"),z=q("header"),A=q("iframe"),B=q("img"),C=q("input"),D=q("label"),E=q("li"),F=q("main"),G=q("nav"),H=q("p"),p=q("pre"),I=q("span"),J=q("ul"),K={cookies:{},description:"renders videos from any http url that allows iframe embedding",gdpr:{allowAllCookiesButtonText:"Allow all",allowCookieButtonText:"Allow selected",cookieButtonText:"Awesome.",cookieText:"We are using the following cookies on this page",denyCookieButtonText:"Deny all",noCookieButtonText:"Awesome.",noCookieText:"This page does neither save, collect, nor share any personal data about you.",show:!0,title:"Magic Privacy Information"},logotext:"VideoEmbed",menu:[{text:"installation",to:"/#installation"},{items:[{text:"youtube",to:"/#usage-youtube"},{text:"vimeo",to:"/#usage-vimeo"},{text:"other hosts",to:"/#usage-others"}],text:"usage",to:"/#usage"},{text:"props",to:"/#props"},{text:"fixed dimensions",to:"/#fixed-dimensions"},{text:"source",to:"/#source"}],pageClass:{},root:"/video-embed/",theme:"dark",title:"@magic-modules/video-embed",url:"/video-embed/"},L={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},M=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return u({class:"Footer"},[t({class:"Container"},[b,t({class:"Credits"},["made with a few bits of ",S({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),N(a)])},N=function(a){var b=a.gdpr,c=a.cookies;if(b.show)return c=Object.entries(c),t({class:{Gdpr:!0,show:b.show}},[C({type:"checkbox",name:"show-hide",id:"show-hide",checked:!b.show}),t({class:"Container"},[b.title&&x(b.title),b.content&&H(b.content),c.length?[b.cookieText&&H(b.cookieText),J(c.sort(function(a){var b=i(a,2),c=b[0],d=b[1].required;return d?0:1}).map(function(a){var b=i(a,2),c=b[0],d=b[1],e=d.info,f=d.allowed;return E([C({type:"checkbox",title:"allow",checked:void 0!==f&&f,onchange:[$.gdpr.allow,{name:c}]}),D([c,e&&[" - ",e]])])}))]:H(b.noCookieText),c.length?[D({class:"button",for:"show-hide",onclick:[$.gdpr.close,{allowed:!0}]},b.allowAllCookiesButtonText),D({class:"button",for:"show-hide",onclick:$.gdpr.close},b.allowCookieButtonText),D({class:"button",for:"show-hide",onclick:[$.gdpr.close,{allowed:!1}]},b.denyCookieButtonText)]:D({class:"button",for:"show-hide",onclick:$.gdpr.close},b.noCookieButtonText)])])},O=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=i(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=i(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?J({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return E([S({to:b},Q({src:c}))])})):void 0},P=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.tagline,g=a.logotext,h=f(a,["logo","menu","tagline","logotext"]);return c||d||e?z({class:"Header"},[(c||g)&&S({to:h.root,class:"Logo"},[c&&Q(c),g&&I(g)]),d&&T({state:h,items:d}),b]):void 0},Q=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)},R=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:$.changeTheme})},S=function(a,b){var c=a.to,d=f(a,["to"]),e=d.href,g=d.text,h=d.nofollow,i=d.noreferrer,j=d.onclick,k=f(d,["href","text","nofollow","noreferrer","onclick"]);c=c||e||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[$.go,L.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),r(k,[g,b])},T=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],e=void 0===c?"Menu":c,f=a.collapse,g=a.state;if(b.length)return g.hash&&(g.url+="#".concat(g.hash)),G({className:e},J(b.map(function(a){return U(d({},a,{state:g,collapse:void 0===f||f}))})))},U=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,g=a.state,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,k=f(a,["text","items","state","parentTo","collapse"]),l=g.url,m=g.root;if(k.to||b){var n={class:{}},o=k.to;o.startsWith("/#")&&(o=o.substr(1));var p=k.to[0],q="/"===p||"-"===p||"#"===p;if(i&&q)if("-"===p)o=i+o;else if("#"===p)o=i+o;else{var u=o.split("/")[1];if(u){var v=i.endsWith("/".concat(u,"/"));!v&&q&&(o=i+o)}}var r=o.startsWith(m);m&&q&&!r&&(o=m+o),k.to=o.replace(/\/\//g,"/");var s=l&&l.includes(k.to);l.endsWith(k.to)&&(n["class"].active=!0);var t=[];return(e.length&&s||!j)&&(t=J(e.map(function(a){return U(d({parentTo:k.to,state:g,collapse:j},a))}))),E(n,[k.to?S(k,b):I(k,b),t])}},V=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic",class:c.pageClass};return F(d,t({class:{Wrapper:!0}},X({state:c,page:b})))},W=function(b){"string"==typeof b&&(b={content:b});var c=b,d=c.content;return t({class:"Pre"},[t({class:"menu"},[a({onclick:[$.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),p(Z.pre.format(d))])},X=function(a){var b=a.page,c=a.state;return[P(c),t({class:"Page"},b),M(c)]},Y=function(a){"object"!==m(a)&&(a={src:a});var b=a,c=b.src,e=b.width,g=b.height,h=b["class"],i=void 0===h?"VideoEmbed":h,j=b.style,k=b.host,l=f(b,["src","width","height","class","style","host"]);if(c){i.includes("VideoEmbed")||(i="VideoEmbed ".concat(i)),c===+c?c="https://player.vimeo.com/video/".concat(c):!c.startsWith("http")&&(c="https://www.youtube-nocookie.com/embed/".concat(c)),g&&(j=j||{},j.height=g),e&&(j=j||{},j.width=e);var n={class:i};return j&&(n.style=j),t(n,A(d({frameborder:0,allow:"encrypted-media",allowfullscreen:""},l,{src:c})))}},Z={pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=I({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return S({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?S({to:a},a):l(a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),I({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),I({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},m=function(a){return s({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(m)}}}()},$={changeTheme:function changeTheme(a){return d({},a,{pageClass:d({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a,b){return a.cookies[b.name].allowed=!0,d({},a)},close:function close(a,b){var c=b.allowed,e=a.cookies;return"boolean"==typeof c&&Object.entries(a.cookies).forEach(function(a){var b=i(a,2),f=b[0],g=b[1];e[f]=d({},g,{allowed:c})}),[d({},a,{gdpr:d({},a.gdpr,{show:!1}),cookies:e}),[_.gdpr.writeLocalStorage,{key:"gdpr",value:{cookies:a.cookies||[],show:!1}}]]},load:function load(a){return[a,[_.gdpr.readLocalStorage,{key:"gdpr",action:$.gdpr.show}]]},show:function show(a,b){return d({},a,{gdpr:d({},a.gdpr,b.value)})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),e=c.split("#"),f=i(e,2),g=f[0],h=f[1],j=void 0===h?"":h;if(g===a.url&&j===a.hash)return a;if(window.history.pushState({url:g,hash:j},"",c),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return d({},a,{url:g,hash:j,prev:a.url})},pop:function pop(a,b){var c=window.location,e=c.pathname,f=c.hash;return f=f.substring(1),b.state&&(e=b.state.url,f=b.state.hash),f?window.location.hash=f:window.scrollTo(0,0),d({},a,{url:e,hash:f})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},_={gdpr:{readLocalStorage:function readLocalStorage(a,b){var c=b.key,d=b.action,e=window.localStorage||{},f=e[c];"undefined"!=typeof f&&(f=JSON.parse(f)),a(d,{key:c,value:f})},writeLocalStorage:function writeLocalStorage(a,b){var c=b.key,d=b.value,e=window.localStorage||{};e[c]=JSON.stringify(d)}}},aa={"/video-embed/":function videoEmbed(a){return[v("@magic-modules/video-embed"),H(["this is the ",S({to:"https://github.com/magic-modules"},"@magic-modules")," VideoEmbed component. It renders videos from any http url that allows iframe embedding."]),O("magic-modules/video-embed"),w({id:"installation"},"installation:"),H(["installation is done using npm. "," for now, all magic modules live on github and not on npm."]),H("note the missing @ before magic-modules."),H("this is how we install npm modules from github."),W("npm install magic-modules/video-embed"),w({id:"usage"},"usage"),x({id:"usage-youtube"},"youtube"),H("in a page/component, just pass a video id to the VideoEmbed module."),W("VideoEmbed('ecIWPzGEbFc')"),H("renders"),Y("ecIWPzGEbFc"),x({id:"usage-vimeo"},"vimeo"),H("if the video id is a number, the video is assumed to be hosted on vimeo"),W("\nVideoEmbed(153090637)\nVideoEmbed('153090637')\n"),H("renders"),Y(153090637),y({id:"usage-others"},"other video hosts"),H("videos from arbitrary hosts can be included as well, as long as those hosts allow iframe embeds"),W("VideoEmbed('https://videopress.com/embed/kUJmAcSf')"),H("renders"),Y("https://videopress.com/embed/kUJmAcSf"),w({id:"props"},"props"),H("you can pass a width and height, a style string and any other props to the video."),,W("VideoEmbed({ src: '8QYWGCEm2Dc', width: '50%', style: 'margin: 1em 0 0;' })"),H("renders"),Y({src:"8QYWGCEm2Dc",width:"50%"}),x({id:"fixed-dimensions"},"fixed video dimensions"),H("to set a fixed video size, simply add both a height and a width value (px, em, rem, vh, pt)."),W("VideoEmbed({ src: 'SMhwddNQSWQ', width: '300px', height: '900px' })"),Y({src:"SMhwddNQSWQ",width:"300px",height:"900px"}),w({id:"source"},"source"),H(["the source for this page is in the ",S({to:"https://github.com/magic-modules/video-embed/tree/master/example"},"example directory")," and gets built and published to github using ",S({to:"https://github.com/magic/core"},"@magic/core")]),R(a)]},"/video-embed/404/":function videoEmbed404(){return t("404 - not found")}};h({init:function init(){return $.gdpr.load(d({},K,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[L.listenPopState,$.pop]]},view:function view(a){var b=aa[a.url]?a.url:"/404/",c=aa[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),V({page:c,state:a})},node:document.getElementById("Magic")});