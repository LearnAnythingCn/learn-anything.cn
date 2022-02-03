"use strict";(self.webpackChunklearn_anything=self.webpackChunklearn_anything||[]).push([[412],{70010:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(67294),r=(a(63680),a(93751)),i=a(62),c=a(43995),l=a(4270),o=a(44875),d=a(34965),m=a(25392),p=i.Z.Content,s=function(e){var t,a=e.node,r=e.allShow,s=e.pagination;return a.allStrapiRecommendations.edges.length>1&&(t="/recommendation/"),n.createElement(i.Z,null,n.createElement(p,{style:{minHeight:"100vh",maxWidth:960,left:0,right:0,width:"100%",margin:"auto"}},n.createElement(o.Z,null),a.allStrapiRecommendations.edges.map((function(e){return e.node.articles.sort((function(e,t){return new Date(t.updated_at)-new Date(e.updated_at)})),n.createElement(m.Z,{key:e.node.name+"RecommendationTagRow",name:e.node.name,tagsData:e.node.articles,more:t?t+e.node.slug:void 0,allShow:r,fixPath:"/",pagination:s,style:{marginTop:10,backgroundColor:"white"}})})),n.createElement("div",{style:{margin:"10px 10px 0 10px"}},n.createElement(d.Z,null))),n.createElement(l.Z,{data:a.site.siteMetadata}),n.createElement(c.Z,{visibilityHeight:50}))},f=function(e){var t=e.data,a="";return t.site&&t.site.siteMetadata&&(a=t.site.siteMetadata.description+"用极简的方式，收集整理优质互联网资源，包括人文社科、历史、学习教育、技术、经济管理、自然科学等！"),t.allStrapiRecommendations.edges.forEach((function(e){e.node.articles.length>5&&e.node.articles.splice(0,e.node.articles.length-1-5)})),n.createElement(n.Fragment,null,n.createElement(r.Z,{title:"Learn-anything.cn",description:a}),n.createElement(s,{node:t}))}},34965:function(e,t,a){var n=a(67294),r=a(6125);t.Z=function(){return n.createElement("a",{href:"https://mobile.yangkeduo.com/goods.html?goods_id=107086751934",target:"_blank",rel:"noreferrer"},n.createElement(r.S,{src:"../images/bainian.webp",alt:"百念牙膏",imgStyle:{border:"solid 1px #ddd",borderRadius:10},__imageData:a(16915)}))}},25392:function(e,t,a){var n=a(67294),r=a(25444),i=a(56367),c=a(77126),l=a(6125);t.Z=function(e){e.location;var t=e.name,a=e.tagsData,o=e.more,d=(e.allShow,e.fixPath),m=e.pagination;d||(d="/");var p=!1;return m&&m.numPages>1&&(p=!0),n.createElement("div",{style:{margin:"10px 10px 0 10px",backgroundColor:"white",border:"solid 1px #ddd",borderRadius:10}},n.createElement(i.ZP,{header:n.createElement("div",{style:{height:"23px"}},n.createElement("div",{style:{float:"left",lineHeight:"23px",color:"#108ee9",paddingLeft:15,fontSize:"12px",fontWeight:500,letterSpacing:2}},t),o?n.createElement("a",{href:o,target:"_blank",rel:"noreferrer"},n.createElement("div",{style:{float:"right",lineHeight:"23px",fontSize:12,color:"#0089e1",marginRight:15}},"更多...")):n.createElement(n.Fragment,null)),itemLayout:"horizontal",split:!0,dataSource:a,renderItem:function(e){return n.createElement(i.ZP.Item,{style:{padding:"15px 0 15px 0",cursor:"pointer",marginBottom:0}},n.createElement(i.ZP.Item.Meta,{onClick:function(){window.open(d+e.slug,"_blank")},avatar:n.createElement(l.G,{imgStyle:{border:"solid 1px #ddd",borderRadius:15},image:e.image.localFile.childImageSharp.gatsbyImageData,alt:e.title}),title:n.createElement("div",{style:{fontWeight:500,letterSpacing:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"justify"}},e.title),description:n.createElement("div",{style:{height:20,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"justify"}},e.description)}))}}),p?n.createElement(c.Z,{defaultCurrent:1,current:m.currentPage,pageSize:m.pageSize,total:m.total,showSizeChanger:!1,style:{textAlign:"center"},onChange:function(e){var t="/";return"/"===m.pathname.charAt(m.pathname.length-1)&&(m.pathname=m.pathname.slice(0,m.pathname.length-1)),1===m.currentPage&&1===e?(t=m.pathname,null):(t=1===m.currentPage&&1!==e?m.pathname+"/"+e:1!==m.currentPage&&1===e?m.pathname.slice(0,m.pathname.lastIndexOf("/")):m.pathname.slice(0,m.pathname.lastIndexOf("/")+1)+e,(0,r.navigate)(t))}}):null)}},58078:function(e,t){t.Z="data:image/webp;base64,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"},16915:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/cf1d0cf910dcc988ea869d56609eca53/096ec/bainian.webp","srcSet":"/static/cf1d0cf910dcc988ea869d56609eca53/b87b1/bainian.webp 320w,\\n/static/cf1d0cf910dcc988ea869d56609eca53/0e4ec/bainian.webp 640w,\\n/static/cf1d0cf910dcc988ea869d56609eca53/096ec/bainian.webp 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[]},"width":1280,"height":353}')}}]);
//# sourceMappingURL=component---src-pages-recommendation-js-63320c2739a73022b01b.js.map