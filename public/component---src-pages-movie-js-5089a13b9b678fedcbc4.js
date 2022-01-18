"use strict";(self.webpackChunklearn_anything=self.webpackChunklearn_anything||[]).push([[667],{34876:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(67294),r=(a(63680),a(93751)),l=a(62),i=a(43995),o=a(4270),u=a(44875),c=a(34965),m=a(68711),d=l.Z.Content,g=function(e){var t,a=e.node,r=e.allShow;return a.allStrapiMovieTags.edges.length>1&&(t="/tag/"),n.createElement(l.Z,null,n.createElement(d,{style:{minHeight:"100vh",maxWidth:960,left:0,right:0,width:"100%",margin:"auto"}},n.createElement(u.Z,{url:"/search-movie/?input="}),a.allStrapiMovieTags.edges.map((function(e){return e.node.movies.sort((function(e,t){return new Date(t.updated_at)-new Date(e.updated_at)})),n.createElement(m.Z,{key:e.node.slug+"MovieTagRow",name:e.node.name,tagsData:e.node.movies,more:t?t+e.node.slug:void 0,allShow:r,style:{marginTop:10,backgroundColor:"white"}})})),n.createElement("div",{style:{margin:"10px 10px 0 10px"}},n.createElement(c.Z,null))),n.createElement(o.Z,{data:a.site.siteMetadata}),n.createElement(i.Z,{visibilityHeight:50}))},h=function(e){var t=e.data,a="";return t.site&&t.site.siteMetadata&&(a=t.site.siteMetadata.description+"用极简的方式，收集整理优质互联网资源，包括人文社科、历史、学习教育、技术、经济管理、自然科学等！"),n.createElement(n.Fragment,null,n.createElement(r.Z,{title:"Learn-anything.cn",description:a}),n.createElement(g,{node:t}))}},68711:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(67294),r=a(25444),l=a(23148),i=a(77126),o=a(48093),u=a(56452),c=a(6050),m=a(6125),d=a(58986),g=function(e){var t=e.colNum,a=e.tagsData,r=e.allShow,l=1;return a.map((function(e){var a="/movie/"+e.slug;e.url&&-1===e.url.indexOf("https://learn-anything.cn")&&(a=e.url);var i={type:"StaticImage"};if(i.url=d.Z,e.image?e.image.localFile?(i.type="GatsbyImage",i.url=e.image.localFile.childImageSharp.gatsbyImageData):e.image.url&&(i.url="https://api.learn-anything.cn"+e.image.url):e.imgUrl?i.url="https://api.learn-anything.cn"+e.imgUrl:e.imgLocal&&(i.url=e.imgLocal),!r){if(3===t&&l>8)return null;if(4===t&&l>6)return null;if(6===t&&l>4)return null;if(8===t&&l>3)return null;if(12===t&&l>2)return null;if(24===t&&l>2)return null;l++}return n.createElement(u.Z,{span:t,key:e.slug+"col"},n.createElement("a",{href:a,target:"_blank",rel:"noreferrer",style:{color:"#888"}},n.createElement(c.Z,{hoverable:!0,style:{width:100,height:140,textAlign:"center",overflow:"hidden",borderRadius:15},cover:"GatsbyImage"===i.type?n.createElement(m.G,{imgStyle:{border:"solid 1px #ddd",borderRadius:15},image:i.url,alt:e.slug}):n.createElement("img",{src:i.url,alt:e.slug,style:{border:"solid 1px #ddd",borderRadius:15}})}),n.createElement("div",{style:{width:100,lineHeight:"30px",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"middle"}},e.title)))}))},h=function(e){var t=e.children;return(0,o.useMediaQuery)({maxWidth:239})?t:null},s=function(e){var t=e.children;return(0,o.useMediaQuery)({minWidth:240,maxWidth:349})?t:null},p=function(e){var t=e.children;return(0,o.useMediaQuery)({minWidth:350,maxWidth:540})?t:null},f=function(e){var t=e.children;return(0,o.useMediaQuery)({minWidth:541,maxWidth:659})?t:null},E=function(e){var t=e.children;return(0,o.useMediaQuery)({minWidth:660,maxWidth:899})?t:null},v=function(e){var t=e.children;return(0,o.useMediaQuery)({minWidth:900})?t:null},x=function(e){var t=e.name,a=e.tagsData,o=e.more,u=e.allShow,c=e.pagination,m=!1;return c&&c.numPages>1&&(m=!0),n.createElement("div",{style:{margin:"10px 10px 0 10px",backgroundColor:"white",border:"solid 1px #ddd",borderRadius:10}},n.createElement("div",{style:{height:"40px",borderBottom:"solid 1px #f0f0f0"}},n.createElement("div",{style:{float:"left",lineHeight:"40px",color:"#108ee9",paddingLeft:15,fontSize:"12px",fontWeight:500,letterSpacing:2}},t),o?n.createElement("a",{href:o,target:"_blank",rel:"noreferrer"},n.createElement("div",{style:{float:"right",lineHeight:"40px",fontSize:12,color:"#0089e1",marginRight:15}},"更多...")):n.createElement(n.Fragment,null)),n.createElement("div",{style:{margin:"15px 15px 5px 15px"}},n.createElement(l.Z,{gutter:[8,12]},n.createElement(h,null,n.createElement(g,{colNum:24,tagsData:a,allShow:u})),n.createElement(s,null,n.createElement(g,{colNum:12,tagsData:a,allShow:u})),n.createElement(p,null,n.createElement(g,{colNum:8,tagsData:a,allShow:u})),n.createElement(f,null,n.createElement(g,{colNum:6,tagsData:a,allShow:u})),n.createElement(E,null,n.createElement(g,{colNum:4,tagsData:a,allShow:u})),n.createElement(v,null,n.createElement(g,{colNum:3,tagsData:a,allShow:u}))),m?n.createElement(i.Z,{defaultCurrent:1,current:c.currentPage,pageSize:c.pageSize,total:c.total,showSizeChanger:!1,style:{textAlign:"center",paddingTop:20},onChange:function(e){var t="/";return"/"===c.pathname.charAt(c.pathname.length-1)&&(c.pathname=c.pathname.slice(0,c.pathname.length-1)),1===c.currentPage&&1===e?(t=c.pathname,null):(t=1===c.currentPage&&1!==e?c.pathname+"/"+e:1!==c.currentPage&&1===e?c.pathname.slice(0,c.pathname.lastIndexOf("/")):c.pathname.slice(0,c.pathname.lastIndexOf("/")+1)+e,(0,r.navigate)(t))}}):null))}},44875:function(e,t,a){var n=a(67294),r=a(60477),l=a(23148),i=a(5562),o=a(58078),u=r.Z.Search;t.Z=function(e){var t=e.url,a=t||"/search/?input=";return n.createElement("div",{style:{margin:"10px 10px 0 10px",backgroundColor:"white",border:"solid 1px #ddd",borderRadius:10}},n.createElement("div",{style:{height:"40px",borderBottom:"solid 1px #f0f0f0"}},n.createElement("a",{href:"/"},n.createElement("img",{src:o.Z,alt:"logo",style:{height:22,width:142,margin:"9px 0 0 10px"}})),n.createElement("a",{href:"/about",target:"_blank",rel:"noreferrer"},n.createElement(i.Z,{style:{float:"right",lineHeight:"40px",fontSize:15,color:"#0089e1",marginRight:15}}))),n.createElement(l.Z,{style:{padding:10}},n.createElement(u,{placeholder:"输入查询内容...",allowClear:!0,enterButton:!0,size:"large",style:{left:0,right:0,width:300,margin:"auto"},onSearch:function(e){""!==e.trim()&&window.open(a+e)}})))}}}]);
//# sourceMappingURL=component---src-pages-movie-js-5089a13b9b678fedcbc4.js.map