(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4678],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||l[d]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5664:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m},default:function(){return l}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],i={},s={unversionedId:"examples/basic-commands/commands/ping",id:"examples/basic-commands/commands/ping",isDocsHomePage:!1,title:"ping",description:"`ts",source:"@site/docs/examples/basic-commands/commands/ping.md",sourceDirName:"examples/basic-commands/commands",slug:"/examples/basic-commands/commands/ping",permalink:"/docs/examples/basic-commands/commands/ping",editUrl:"https://github.com/naticoo/naticoo.github.io/edit/main/docs/examples/basic-commands/commands/ping.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mod",permalink:"/docs/examples/arguments/mod"},next:{title:"say",permalink:"/docs/examples/basic-commands/commands/say"}},m=[],p={toc:m};function l(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NaticoCommand, DiscordenoMessage } from '../../deps.ts';\nexport default class ping extends NaticoCommand {\n    constructor() {\n        super('ping', {\n            name: 'ping',\n            aliases: ['ping'],\n        });\n    }\n    exec(message: DiscordenoMessage) {\n        message.reply('Pong');\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naticoo/examplebot/blob/main/basic-commands/commands/ping.ts"},"https://github.com/naticoo/examplebot/blob/main/basic-commands/commands/ping.ts")))}l.isMDXComponent=!0}}]);