(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[263],{3483:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var s=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],r={sidebar_position:1},d={unversionedId:"basics/extending",id:"basics/extending",isDocsHomePage:!1,title:"Extending",description:"this guide assumes that you are already using the basic-listeners bot",source:"@site/docs/basics/extending.md",sourceDirName:"basics",slug:"/basics/extending",permalink:"/docs/basics/extending",editUrl:"https://github.com/naticoo/naticoo.github.io/edit/main/docs/basics/extending.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic listeners setup",permalink:"/docs/basics/basic-listeners"}},m=[{value:"Using your custom command",id:"using-your-custom-command",children:[]}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"this guide assumes that you are already using the basic-listeners bot"),(0,o.kt)("p",null,"Extending is often useful to add new types to properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"//extensions/command.ts\nimport { NaticoCommand } from '../deps.ts';\nimport { BotClient } from '../mod.ts';\nexport class botCommand extends NaticoCommand {\n    //Overwriting the old NaticoClient that was here with your custom one\n    declare client: BotClient;\n}\n")),(0,o.kt)("h3",{id:"using-your-custom-command"},"Using your custom command"),(0,o.kt)("p",null,"After extending NaticoCommand you need to import it to your commands"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Make sure to import the new extension")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you dont import it the types wont work"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { botCommand } from '../extensions/command.ts';\nexport default class listeners extends botCommand {\n    constructor() {\n        super('listeners', {\n            name: 'listeners',\n            aliases: ['listeners'],\n            description: 'View the amount of listeners the bot has loaded',\n        });\n    }\n    exec(message: discordenoMessage) {\n        //Without extending this would have caused a type error\n        message.reply(`Pong ${this.client.listenerHandler.modules.size} listeners`);\n    }\n}\n")),(0,o.kt)("p",null,"You can find the resulting code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/naticoo/examplebot/tree/main/extending"},"here")))}u.isMDXComponent=!0}}]);