(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{9805:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(7507)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},s=n(6273),i=n(387),c=n(7190);var l={};function u(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var t=r(s.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?s.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,b=r(c.useIntersection({rootMargin:"200px"}),2),w=b[0],E=b[1],j=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);o.default.useEffect((function(){var e=E&&n&&s.isLocalURL(d),t="undefined"!==typeof y?y:a&&a.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(a,d,p,{locale:t})}),[p,d,E,y,n,a]);var k={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:i}))}(e,a,d,p,m,v,x,y)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof y?y:a&&a.locale,_=a&&a.isLocaleDomain&&s.getDomainLocale(p,N,a&&a.locales,a&&a.domainLocales);k.href=_||s.addBasePath(s.addLocale(p,N,a&&a.defaultLocale))}return o.default.cloneElement(t,k)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=a.useRef(),l=r(a.useState(!1),2),u=l[0],f=l[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!s&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=n(7294),o=n(9311),s="undefined"!==typeof IntersectionObserver;var i=new Map},7507:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),a=n(9008),o=n(1664),s=function(){return(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("img",{className:"hidden md:block md:w-1/2",src:"/assets/images/handshake.png",alt:"Register here"}),(0,r.jsxs)("div",{className:"bg-neutral-100 w-full px-5 md:mx-11 font-titi flex flex-col items-start",children:[(0,r.jsx)("img",{className:"md:hidden h-28 w-24 mt-9",src:"/assets/icons/icons_edit.svg",alt:"Edit Image"}),(0,r.jsx)("img",{className:"hidden md:block h-56 w-80",src:"/assets/icons/icons_register.svg",alt:"Register Icon"}),(0,r.jsxs)("h1",{className:"text-5xl font-semibold text-[#1E1E1E] mt-7 my-1",children:["Welcome to join our SME",(0,r.jsx)("span",{className:"text-primary-default",children:"souk"})]}),(0,r.jsx)("p",{className:"mt-3 font-normal text-sm text-neutral-900 my-1",children:"Join with our SMEsouk to get help to set up your business, get deals from our bank and connect with community with a lot of SMEs business, partners and marketplace."}),(0,r.jsx)(o.default,{href:"register/registration",children:(0,r.jsx)("button",{className:"mt-9 bg-primary-default h-9 w-32 cursor-pointer uppercase rounded-lg font-bold text-xs text-neutral-100 text-center",children:"Let Begin"})}),(0,r.jsxs)("p",{className:"mt-24 mb-5 font-normal text-sm text-[#231F20] ",children:["Already have an account?"," ",(0,r.jsx)("a",{className:"cursor-pointer text-primary-default",children:"Login here"})," "]})]})]})};function i(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(s,{})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=9805,e(e.s=t);var t}));var t=e.O();_N_E=t}]);