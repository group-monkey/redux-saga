(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[663,75],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6689:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(7294),a=n(3905),o=n(6291),l=n(5186),i=n(1505),c=n(7462),s=n(3366),u=n(9105),d=n(6742),m=n(6010),p=n(4544);var f=n(7594),h=n.n(f),y={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},v=n(5350),g=n(3039),b=function(){var e=(0,g.LU)().prism,t=(0,v.Z)().isDarkTheme,n=e.theme||y,r=e.darkTheme||n;return t?r:n},k=n(4973),E="codeBlockContainer_K1bP",Z="codeBlockContent_hGly",N="codeBlockTitle_eoMF",T="codeBlock_23N8",C="copyButton_Ue-o",S="codeBlockLines_39YC",_=/{([\d,-]+)}/,j=["js","jsBlock","jsx","python","html"],x={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},O=["highlight-next-line","highlight-start","highlight-end"],P=function(e){void 0===e&&(e=j);var t=e.map((function(e){var t=x[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+O.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function w(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,g.LU)().prism,i=(0,r.useState)(!1),s=i[0],u=i[1],d=(0,r.useState)(!1),f=d[0],y=d[1];(0,r.useEffect)((function(){y(!0)}),[]);var v=(0,g.bc)(a)||o,j=(0,r.useRef)(null),x=[],O=b(),w=Array.isArray(t)?t.join(""):t;if(a&&_.test(a)){var I=a.match(_)[1];x=h()(I).filter((function(e){return e>0}))}var L=null==n?void 0:n.split(" ").find((function(e){return e.startsWith("language-")})),B=null==L?void 0:L.replace(/language-/,"");!B&&l.defaultLanguage&&(B=l.defaultLanguage);var A=w.replace(/\n$/,"");if(0===x.length&&void 0!==B){for(var M,D="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(B),R=w.replace(/\n$/,"").split("\n"),W=0;W<R.length;){var H=W+1,z=R[W].match(F);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=H+",";break;case"highlight-start":M=H;break;case"highlight-end":D+=M+"-"+(H-1)+","}R.splice(W,1)}else W+=1}x=h()(D),A=R.join("\n")}var U=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(A),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.createElement(p.ZP,(0,c.Z)({},p.lG,{key:String(f),theme:O,code:A,language:B}),(function(e){var t=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:(0,m.Z)(E,null==n?void 0:n.replace(/language-[^ ]+/,""))},v&&r.createElement("div",{style:a,className:N},v),r.createElement("div",{className:(0,m.Z)(Z,B)},r.createElement("pre",{tabIndex:0,className:(0,m.Z)(t,T,"thin-scrollbar"),style:a},r.createElement("code",{className:S},o.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=l({line:e,key:t});return x.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{ref:j,type:"button","aria-label":(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,m.Z)(C,"clean-btn"),onClick:U},s?r.createElement(k.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(k.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var I=n(6159),L="details_1VDD";function B(e){var t=Object.assign({},e);return r.createElement(g.PO,(0,c.Z)({},t,{className:(0,m.Z)("alert alert--info",L,t.className)}))}var A=["mdxType","originalType"];var M={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,s.Z)(a,A));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(u.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(w,e):r.createElement("code",e)},a:function(e){return r.createElement(d.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(w,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(B,(0,c.Z)({},e,{summary:n}),a)},h1:(0,I.Z)("h1"),h2:(0,I.Z)("h2"),h3:(0,I.Z)("h3"),h4:(0,I.Z)("h4"),h5:(0,I.Z)("h5"),h6:(0,I.Z)("h6")},D=n(4608),F=n(4096),R="backToTopButton_35hR",W="backToTopButtonShow_18ls";function H(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var z=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=H(),i=l.smoothScrollTop,c=l.cancelScrollToTop;return(0,g.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||c(),n<300)a(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&a(!0)}else a(!1)}})),(0,g.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,k.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,m.Z)("clean-btn",g.kM.common.backToTopButton,R,(e={},e[W]=n,e)),type:"button",onClick:function(){return i()}})},U=n(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Y(e){var t,n,o,c=e.currentDocRoute,s=e.versionMetadata,u=e.children,d=s.pluginId,p=s.version,f=c.sidebar,h=f?s.docsSidebars[f]:void 0,y=(0,r.useState)(!1),v=y[0],b=y[1],E=(0,r.useState)(!1),Z=E[0],N=E[1],T=(0,r.useCallback)((function(){Z&&N(!1),b((function(e){return!e}))}),[Z]);return r.createElement(l.Z,{wrapperClassName:g.kM.wrapper.docsPages,pageClassName:g.kM.page.docsDocPage,searchMetadatas:{version:p,tag:(0,g.os)(d,p)}},r.createElement("div",{className:V.docPage},r.createElement(z,null),h&&r.createElement("aside",{className:(0,m.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=v,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&v&&N(!0)}},r.createElement(i.Z,{key:f,sidebar:h,path:c.path,onCollapse:T,isHidden:Z}),Z&&r.createElement("div",{className:V.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},r.createElement(F.Z,{className:V.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,m.Z)(V.docMainContainer,(n={},n[V.docMainContainerEnhanced]=v||!h,n))},r.createElement("div",{className:(0,m.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(o={},o[V.docItemWrapperEnhanced]=v,o))},r.createElement(a.Zo,{components:M},u)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,U.LX)(a.pathname,e)}));return l?r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("html",{className:n.className})),r.createElement(Y,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):r.createElement(D.default,e)}},1632:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(7294),a=n(6010),o=n(3039),l=n(3783),i=n(5537),c=n(4096),s=n(4973),u=n(7462),d=n(3366),m=n(6742),p=n(3919),f=n(8617),h="menuLinkText_1J2g",y=["items"],v=["item"],g=["item","onItemClick","activePath","level"],b=["item","onItemClick","activePath","level"],k=function e(t,n){return"link"===t.type?(0,o.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},E=(0,r.memo)((function(e){var t=e.items,n=(0,d.Z)(e,y);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(Z,(0,u.Z)({key:t,item:e},n))})))}));function Z(e){var t=e.item,n=(0,d.Z)(e,v);return"category"===t.type?0===t.items.length?null:r.createElement(N,(0,u.Z)({item:t},n)):r.createElement(T,(0,u.Z)({item:t},n))}function N(e){var t,n=e.item,l=e.onItemClick,i=e.activePath,c=e.level,s=(0,d.Z)(e,g),m=n.items,p=n.label,f=n.collapsible,y=n.className,v=k(n,i),b=(0,o.uR)({initialState:function(){return!!f&&(!v&&n.collapsed)}}),Z=b.collapsed,N=b.setCollapsed,T=b.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,l=(0,o.D9)(t);(0,r.useEffect)((function(){t&&!l&&n&&a(!1)}),[t,l,n,a])}({isActive:v,collapsed:Z,setCollapsed:N}),r.createElement("li",{className:(0,a.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":Z},y)},r.createElement("a",(0,u.Z)({className:(0,a.Z)("menu__link",(t={"menu__link--sublist":f,"menu__link--active":f&&v},t[h]=!f,t)),onClick:f?function(e){e.preventDefault(),T()}:void 0,href:f?"#":void 0},s),p),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z},r.createElement(E,{items:m,tabIndex:Z?-1:0,onItemClick:l,activePath:i,level:c+1})))}function T(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,c=(0,d.Z)(e,b),s=t.href,h=t.label,y=t.className,v=k(t,l);return r.createElement("li",{className:(0,a.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(i),"menu__list-item",y),key:h},r.createElement(m.Z,(0,u.Z)({className:(0,a.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,p.Z)(s)&&{onClick:n},c),(0,p.Z)(s)?h:r.createElement("span",null,h,r.createElement(f.Z,null))))}var C="sidebar_15mo",S="sidebarWithHideableNavbar_267A",_="sidebarHidden_2kNb",j="sidebarLogo_3h0W",x="menu_Bmed",O="menuWithAnnouncementBar_2WvA",P="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R";function I(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.Z)("button button--secondary button--outline",P),onClick:t},r.createElement(c.Z,{className:w}))}function L(e){var t,n,l=e.path,c=e.sidebar,s=e.onCollapse,u=e.isHidden,d=function(){var e=(0,o.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,o.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,o.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return r.createElement("div",{className:(0,a.Z)(C,(t={},t[S]=p,t[_]=u,t))},p&&r.createElement(i.Z,{tabIndex:-1,className:j}),r.createElement("nav",{className:(0,a.Z)("menu thin-scrollbar",x,(n={},n[O]=d,n))},r.createElement("ul",{className:(0,a.Z)(o.kM.docs.docSidebarMenu,"menu__list")},r.createElement(E,{items:c,activePath:l,level:1}))),f&&r.createElement(I,{onClick:s}))}var B=function(e){var t=e.toggleSidebar,n=e.sidebar,l=e.path;return r.createElement("ul",{className:(0,a.Z)(o.kM.docs.docSidebarMenu,"menu__list")},r.createElement(E,{items:n,activePath:l,onItemClick:function(){return t()},level:1}))};function A(e){return r.createElement(o.Cv,{component:B,props:e})}var M=r.memo(L),D=r.memo(A);function F(e){var t=(0,l.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(M,e),a&&r.createElement(D,e))}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),i=n(4973),c=n(3039),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,r.Z)(e,d),f=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=f,n[s]=!f,n)),id:m}),p.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},4096:function(e,t,n){"use strict";var r=n(7462),a=n(7294);t.Z=function(e){return a.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(5186),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return h},lG:function(){return l}});var r=n(7410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(7294),l={Prism:r.default,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=c({},n,{backgroundColor:null}),a};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=c({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?c({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=c({},p(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?c({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var m=void 0,p=t[l],f=n[l][o];if("string"==typeof f?(p=l>0?p:["plain"],m=f):(p=d(p,f.type),f.alias&&(p=d(p,f.alias)),m=f.content),"string"==typeof m){var h=m.split(s),y=h.length;i.push({types:p,content:h[0]});for(var v=1;v<y;v++)u(i),c.push(i=[]),i.push({types:p,content:h[v]})}else l++,t.push(p),n.push(m),r.push(0),a.push(m.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return u(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),h=f}}]);