(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85],{9366:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(465),l=n(3905),c=n(3541),i=n(571),o=n(6700);t.default=function(e){var t=e.content,n=t.frontMatter,s=t.metadata,m=n.title,u=n.description,d=n.wrapperClassName,f=n.hide_table_of_contents,v=s.permalink;return a.createElement(r.Z,{title:m,description:u,permalink:v,wrapperClassName:null!=d?d:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},a.createElement("main",null,a.createElement("div",{className:"container container--fluid"},a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--8 col--offset-2"},a.createElement("div",{className:"container"},a.createElement(l.Zo,{components:c.Z},a.createElement(t,null)))),!f&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(i.Z,{toc:t.toc})))))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010);var l=function(e,t,n){var r=(0,a.useState)(void 0),l=r[0],c=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,i=!1,o=document.getElementsByClassName(e);r<o.length&&!i;){var s=o[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),i=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},c="tableOfContents_35-E",i="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(i,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar")},a.createElement(o,{toc:t}))}}}]);