(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[642],{2965:function(i,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var e=t(2122),r=t(9756),s=(t(7294),t(3905)),a=["components"],o={sidebar_position:1},c={unversionedId:"basics/basic-inhibitors",id:"basics/basic-inhibitors",isDocsHomePage:!1,title:"Basic inhibitor setup",description:"Inhibitors are a great way to prevent users from using certain commands or all",source:"@site/docs/basics/basic-inhibitors.md",sourceDirName:"basics",slug:"/basics/basic-inhibitors",permalink:"/docs/basics/basic-inhibitors",editUrl:"https://github.com/naticoo/naticoo.github.io/edit/master/website/docs/basics/basic-inhibitors.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docs/intro"},next:{title:"Basic listeners setup",permalink:"/docs/basics/basic-listeners"}},d=[{value:"Creating a inhibitor",id:"creating-a-inhibitor",children:[]}],h={toc:d};function u(i){var n=i.components,t=(0,r.Z)(i,a);return(0,s.kt)("wrapper",(0,e.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Inhibitors are a great way to prevent users from using certain commands or all"),(0,s.kt)("p",null,"In this tutoroial ill show how to them up"),(0,s.kt)("p",null,"this guide assumes that you are already using the intro bot"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"//mod.ts\n...\n//You are going to add this under the command handler\ninhibitorHandler: NaticoInhibitorHandler = new NaticoInhibitorHandler(this, {\n        directory: './inhibitors',\n    });\n...\n    async start(token: string) {\n        //Set the inhibitor handler to be used\n        this.commandHandler.setInhibitorHandler(this.inhibitorHandler);\n        //Then load the commands as usual\n        await this.commandHandler.loadALL();\n        //And the inhibitors\n        await this.inhibitorHandler.loadALL();\n        return this.login(token);\n    }\n")),(0,s.kt)("h2",{id:"creating-a-inhibitor"},"Creating a inhibitor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"//inhibitors/notTricked.ts\nimport { DiscordenoMessage, NaticoCommand, NaticoInhibitor } from '../deps.ts';\nexport default class notTricked extends NaticoInhibitor {\n    constructor() {\n        super('notTricked', {\n            //Higher priotiry = earlier fire\n            priority: 1,\n        });\n    }\n\n    exec(message: DiscordenoMessage, command: NaticoCommand): boolean {\n        //This checks if the command thats being ran has the name ping\n        if (command.name == 'ping') {\n            //Checks if the user their id is the one from tricked and if it isnt returns true\n            //Returning true means the command is blocked\n            if (message.authorId !== 336465356304678913n) {\n                message.reply('You are not allowed to run this command');\n                return true;\n            }\n        }\n        //Otherwise it just runs the command\n        return false;\n    }\n}\n")),(0,s.kt)("p",null,"Resulting code can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/naticoo/examplebot/tree/main/basic-inhibitors"},"here")))}u.isMDXComponent=!0}}]);