(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2820],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,f=p["".concat(s,".").concat(u)]||p[u]||l[u]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6056:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},s={unversionedId:"examples/extending/listeners/commandStarted",id:"examples/extending/listeners/commandStarted",isDocsHomePage:!1,title:"commandStarted",description:"`ts",source:"@site/docs/examples/extending/listeners/commandStarted.md",sourceDirName:"examples/extending/listeners",slug:"/examples/extending/listeners/commandStarted",permalink:"/docs/examples/extending/listeners/commandStarted",editUrl:"https://github.com/naticoo/naticoo.github.io/edit/main/docs/examples/extending/listeners/commandStarted.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"command",permalink:"/docs/examples/extending/extensions/command"},next:{title:"ready",permalink:"/docs/examples/extending/listeners/ready"}},m=[],d={toc:m};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  ConvertedOptions,\n  discordenoMessage,\n  NaticoCommand,\n  NaticoListener,\n} from "../../deps.ts";\nexport default class commandStarted extends NaticoListener {\n  constructor() {\n    super("commandStarted", {\n      emitter: "commandHandler",\n      event: "commandStarted",\n    });\n  }\n\n  exec(\n    message: discordenoMessage,\n    command: NaticoCommand,\n    args: ConvertedOptions,\n  ) {\n    console.log("command:", command.id, "started with args", args);\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/naticoo/examplebot/blob/main/extending/listeners/commandStarted.ts"},"https://github.com/naticoo/examplebot/blob/main/extending/listeners/commandStarted.ts")))}l.isMDXComponent=!0}}]);