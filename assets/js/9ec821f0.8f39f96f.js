(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5477],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},839:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),s=["components"],i={},c={unversionedId:"examples/basic-listeners/listeners/ready",id:"examples/basic-listeners/listeners/ready",isDocsHomePage:!1,title:"ready",description:"`ts",source:"@site/docs/examples/basic-listeners/listeners/ready.md",sourceDirName:"examples/basic-listeners/listeners",slug:"/examples/basic-listeners/listeners/ready",permalink:"/docs/examples/basic-listeners/listeners/ready",editUrl:"https://github.com/naticoo/naticoo.github.io/edit/main/docs/examples/basic-listeners/listeners/ready.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"commandStarted",permalink:"/docs/examples/basic-listeners/listeners/commandStarted"},next:{title:"mod",permalink:"/docs/examples/basic-listeners/mod"}},l=[],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NaticoListener } from '../../deps.ts';\nexport default class ready extends NaticoListener {\n    constructor() {\n        super('ready', {\n            emitter: 'client',\n            event: 'ready',\n        });\n    }\n\n    exec() {\n        console.log('Bot has started');\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/naticoo/examplebot/blob/main/basic-listeners/listeners/ready.ts"},"https://github.com/naticoo/examplebot/blob/main/basic-listeners/listeners/ready.ts")))}u.isMDXComponent=!0}}]);