(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3065],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,f=l["".concat(i,".").concat(d)]||l[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var m=2;m<o;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6850:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],c={},i={unversionedId:"examples/arguments/commands/say",id:"examples/arguments/commands/say",isDocsHomePage:!1,title:"say",description:"`ts",source:"@site/docs/examples/arguments/commands/say.md",sourceDirName:"examples/arguments/commands",slug:"/examples/arguments/commands/say",permalink:"/docs/examples/arguments/commands/say",editUrl:"https://github.com/naticoo/naticoo.github.io/edit/main/docs/examples/arguments/commands/say.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ping",permalink:"/docs/examples/arguments/commands/ping"},next:{title:"mod",permalink:"/docs/examples/arguments/mod"}},m=[],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NaticoCommand, DiscordenoMessage, Matches } from '../../deps.ts';\nexport default class say extends NaticoCommand {\n    constructor() {\n        super('say', {\n            name: 'say',\n            aliases: ['say'],\n            options: [\n                {\n                    type: 3,\n                    name: 'text',\n                    description: 'text you want the bot to say',\n                    required: true,\n                    match: Matches.rest,\n                    customType: (message, content) => {\n                        return content.split(' ').reverse().join('\ud83e\udd80');\n                    },\n                },\n            ],\n        });\n    }\n    exec(message: DiscordenoMessage, { text }: { text: string }) {\n        message.reply(text);\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/naticoo/examplebot/blob/main/arguments/commands/say.ts"},"https://github.com/naticoo/examplebot/blob/main/arguments/commands/say.ts")))}p.isMDXComponent=!0}}]);