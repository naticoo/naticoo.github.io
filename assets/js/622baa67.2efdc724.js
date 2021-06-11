(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[651],{6661:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var s=t(2122),a=t(9756),i=(t(7294),t(3905)),r=["components"],o={sidebar_position:1},c={unversionedId:"basics/basic-listeners",id:"basics/basic-listeners",isDocsHomePage:!1,title:"Basic listeners setup",description:"Listeners are a way of getting events and running code on them",source:"@site/docs/basics/basic-listeners.md",sourceDirName:"basics",slug:"/basics/basic-listeners",permalink:"/docs/basics/basic-listeners",editUrl:"https://github.com/naticoo/naticoo.github.io/edit/main/docs/basics/basic-listeners.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic inhibitor setup",permalink:"/docs/basics/basic-inhibitors"},next:{title:"Extending",permalink:"/docs/basics/extending"}},d=[{value:"Creating a listener",id:"creating-a-listener",children:[]}],l={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Listeners are a way of getting events and running code on them"),(0,i.kt)("p",null,"this guide assumes that you are already using the intro bot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"//mod.ts\n//Set the directory of the listener handler\n...\n    listenerHandler: NaticoListenerHandler = new NaticoListenerHandler(this, {\n        directory: './listeners',\n    });\n\n    async start(token: string) {\n        //Set the emitters\n        //Emitter must be set before loading any listeners otherwise it will cause errors\n        this.listenerHandler.setEmitters({\n            commandHandler: this.commandHandler,\n        });\n        //Loading the stuff\n        await this.listenerHandler.loadALL();\n        await this.commandHandler.loadALL();\n        return this.login(token);\n    }\n...\n\n")),(0,i.kt)("h3",{id:"creating-a-listener"},"Creating a listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"//listeners/ready.ts\nimport { NaticoListener } from '../deps.ts';\nexport default class ready extends NaticoListener {\n    constructor() {\n        super('ready', {\n            //The emitter of the event\n            emitter: 'client',\n            //THe event your listening for\n            event: 'ready',\n        });\n    }\n\n    exec() {\n        console.log('Bot has started');\n    }\n}\n")),(0,i.kt)("p",null,"This a listener for the command handler but you can also listen to other events, For example the commandStarted event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    ConvertedOptions,\n    discordenoMessage,\n    NaticoCommand,\n    NaticoListener,\n} from '../deps.ts';\nexport default class commandStarted extends NaticoListener {\n    constructor() {\n        super('commandStarted', {\n            //In this example we are using the commandHandler that was specified in the mod.ts\n            emitter: 'commandHandler',\n            event: 'commandStarted',\n        });\n    }\n\n    exec(\n        message: discordenoMessage,\n        command: NaticoCommand,\n        args: ConvertedOptions\n    ) {\n        console.log('command:', command.id, 'started with args', args);\n    }\n}\n")),(0,i.kt)("p",null,"Resulting code can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/naticoo/examplebot/tree/main/basic-listeners"},"here")))}m.isMDXComponent=!0}}]);