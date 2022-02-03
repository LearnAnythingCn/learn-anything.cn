"use strict";(self.webpackChunklearn_anything=self.webpackChunklearn_anything||[]).push([[717],{34478:function(e,t,a){a.r(t);var n=a(67294),r=a(93751),l=a(58078),i=(a(63680),a(60477)),A=a(62),c=a(23148),u=a(43995),o=a(4270),d=a(34965),m=a(48331),g=a(5562),h=a(83918),s=a(77759),f=i.Z.Search,w=a(96633);t.default=function(e){var t=e.location,i=e.data,p=a(73629).parse(t.search,!0).query.input;null==p&&(p="");var E=(0,n.useState)(p),D=E[0],v=E[1],y=(0,n.useState)(!0),x=y[0],M=y[1],b=(0,n.useState)([]),C=b[0],S=b[1];return(0,n.useEffect)((function(){if(D){var e=a(51419).stringify({_where:{_or:[{title_contains:D},{description_contains:D},{content_contains:D}]},_limit:30});w.get("https://api.learn-anything.cn/books?"+e).then((function(e){S(e.data),M(!1)})).catch((function(e){S([])})).then((function(){}))}else M(!1)}),[D]),n.createElement(A.Z,null,n.createElement(m.VY,{style:{maxWidth:960,left:0,right:0,width:"100%",margin:"auto"}},n.createElement(r.Z,{title:"有关 「 "+D+" 」 内容"}),n.createElement("div",{style:{margin:"10px 10px 0 10px",backgroundColor:"white",border:"solid 1px #ddd",borderRadius:10}},n.createElement("div",{style:{height:"40px",borderBottom:"solid 1px #f0f0f0"}},n.createElement("a",{href:"/"},n.createElement("img",{src:l.Z,alt:"logo",style:{height:22,width:142,margin:"9px 0 0 10px"}})),n.createElement("a",{href:"/about",target:"_blank",rel:"noreferrer"},n.createElement(g.Z,{style:{float:"right",lineHeight:"40px",fontSize:15,color:"#0089e1",marginRight:15}}))),n.createElement(c.Z,{style:{padding:10}},n.createElement(f,{placeholder:"输入查询内容...",allowClear:!0,enterButton:!0,size:"large",style:{left:0,right:0,width:300,marginTop:84,borderRadius:20,margin:"auto"},onSearch:function(e){""!==e.trim()&&e!==D&&(M(!0),v(e))}}))),n.createElement("div",{style:{minHeight:"calc(100vh - 192px)"}},x?n.createElement(h.Z,null):n.createElement(s.Z,{query:D,results:C}),n.createElement("div",{style:{margin:"10px 10px 0 10px"}},n.createElement(d.Z,null))),n.createElement(u.Z,{visibilityHeight:50}),n.createElement(o.Z,{data:i.site.siteMetadata})))}},19899:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(67294),r=a(25444),l=a(23148),i=a(77126),A=a(48093),c=a(56452),u=a(6050),o=a(6125),d=a(58986),m=function(e){var t=e.colNum,a=e.tagsData,r=e.allShow,l=1;return a.map((function(e){var a="/book/"+e.slug;e.url&&-1===e.url.indexOf("https://learn-anything.cn")&&(a=e.url);var i={type:"StaticImage"};if(i.url=d.Z,e.image?e.image.localFile?(i.type="GatsbyImage",i.url=e.image.localFile.childImageSharp.gatsbyImageData):e.image.url&&(i.url="https://api.learn-anything.cn"+e.image.url):e.imgUrl?i.url="https://api.learn-anything.cn"+e.imgUrl:e.imgLocal&&(i.url=e.imgLocal),!r){if(3===t&&l>8)return null;if(4===t&&l>6)return null;if(6===t&&l>4)return null;if(8===t&&l>3)return null;if(12===t&&l>2)return null;if(24===t&&l>2)return null;l++}return n.createElement(c.Z,{span:t,key:e.slug+"a"},n.createElement("a",{href:a,target:"_blank",rel:"noreferrer",style:{color:"#888"}},n.createElement(u.Z,{hoverable:!0,style:{width:100,height:140,overflow:"hidden",borderRadius:15},cover:"GatsbyImage"===i.type?n.createElement(o.G,{imgStyle:{border:"solid 1px #ddd",borderRadius:15},image:i.url,alt:e.slug}):n.createElement("img",{src:i.url,alt:e.slug,style:{border:"solid 1px #ddd",borderRadius:15}})}),n.createElement("div",{style:{width:100,lineHeight:"30px",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"middle"}},e.title)))}))},g=function(e){var t=e.children;return(0,A.useMediaQuery)({maxWidth:239})?t:null},h=function(e){var t=e.children;return(0,A.useMediaQuery)({minWidth:240,maxWidth:349})?t:null},s=function(e){var t=e.children;return(0,A.useMediaQuery)({minWidth:350,maxWidth:540})?t:null},f=function(e){var t=e.children;return(0,A.useMediaQuery)({minWidth:541,maxWidth:659})?t:null},w=function(e){var t=e.children;return(0,A.useMediaQuery)({minWidth:660,maxWidth:899})?t:null},p=function(e){var t=e.children;return(0,A.useMediaQuery)({minWidth:900})?t:null},E=function(e){var t=e.name,a=e.tagsData,A=e.more,c=e.allShow,u=e.pagination,o=!1;return u&&u.numPages>1&&(o=!0),n.createElement("div",{style:{margin:"10px 10px 0 10px",backgroundColor:"white",border:"solid 1px #ddd",borderRadius:10}},n.createElement("div",{style:{height:"40px",borderBottom:"solid 1px #f0f0f0"}},n.createElement("div",{style:{float:"left",lineHeight:"40px",color:"#108ee9",paddingLeft:15,fontSize:"12px",fontWeight:500,letterSpacing:2}},t),A?n.createElement("a",{href:A,target:"_blank",rel:"noreferrer"},n.createElement("div",{style:{float:"right",lineHeight:"40px",fontSize:12,color:"#0089e1",marginRight:15}},"更多...")):n.createElement(n.Fragment,null)),n.createElement("div",{style:{margin:"15px 15px 5px 15px"}},n.createElement(l.Z,{gutter:[8,12]},n.createElement(g,null,n.createElement(m,{colNum:24,tagsData:a,allShow:c})),n.createElement(h,null,n.createElement(m,{colNum:12,tagsData:a,allShow:c})),n.createElement(s,null,n.createElement(m,{colNum:8,tagsData:a,allShow:c})),n.createElement(f,null,n.createElement(m,{colNum:6,tagsData:a,allShow:c})),n.createElement(w,null,n.createElement(m,{colNum:4,tagsData:a,allShow:c})),n.createElement(p,null,n.createElement(m,{colNum:3,tagsData:a,allShow:c}))),o?n.createElement(i.Z,{defaultCurrent:1,current:u.currentPage,pageSize:u.pageSize,total:u.total,showSizeChanger:!1,style:{textAlign:"center",paddingTop:20},onChange:function(e){var t="/";return"/"===u.pathname.charAt(u.pathname.length-1)&&(u.pathname=u.pathname.slice(0,u.pathname.length-1)),1===u.currentPage&&1===e?(t=u.pathname,null):(t=1===u.currentPage&&1!==e?u.pathname+"/"+e:1!==u.currentPage&&1===e?u.pathname.slice(0,u.pathname.lastIndexOf("/")):u.pathname.slice(0,u.pathname.lastIndexOf("/")+1)+e,(0,r.navigate)(t))}}):null))}},77759:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(19899),l=a(41878),i=a(94101),A=a(8476),c=function(e){var t=e.search,a=[],r={title:"Z-Library",desc:"免费下载中文电子书，格式包括pdf、epub等。免费账户每天限量5本。"};r.imgLocal=l.Z,r.url="https://zh.ng1lib.org/s/"+t,a.push(r);var c={title:"lorefree",desc:"首个去中心化免费中文电子书共享社区，7万多本电子书可供下载。",imgLocal:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAgACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAACAkKBwX/xAAbAQABBQEBAAAAAAAAAAAAAAAIAgQGBwkDAf/aAAwDAQACEAMQAAAAfanpmDaRL2hZPNfnoejZ66nsp7TTkwohauyUw9GZbmaClNVSw4ppIu7KPA+rhBdYHy4+RD2c0qH3/8QAMxAAAQMCBAQDBAsAAAAAAAAAAgEDBAUGAAcJEQgSIUEUIyQxM0JiNjlSU1RydpGSsbP/2gAIAQEAAT8ArVZh23R5E6fJZhxIgK48+8aA22Kd1VeiJi8s7pcy2pdWakw7JtCKCuyrjr6IwSNJ8TLDijyov3j/ACInRUbcRccRWunbWVtbftfJCG7c1Xqctpqo3hW+dwH1Q0Hdptdic6KXL7toPgAhxDPnhgS+0hRVxrCViZbumLndUKfLlwJ8G1ZUmLKjOk09HdDYgMDFUUTEkRUJFRUXFw8bebPFnZNPazGvyv3Y1SHCYitzHQFsUDohEDYiJuderhIpr3JcWb9LKZv+KZ/0HFPH0LS/IO/7Y1nfqrc9/wBHzcZNbDaKqqbj4t3p/HGbt6WnfuT+Tcq17DptjrT6zUadO8LJOU5VnQWnmj7jjic6l5qogkpbdsQE9A1+RP6xqoZY13OTToznti2KY/Wa/V7TmsQYDHV6W7yKqNgncy22RMafWltnRxUeKplKtCqW9Gps91mfULgiPU2PDPuKo4CGZ/IALjTB0t3uHixwHNylW5ct02xWpD1szgdKY1AiutR08sXAFAPnZ+zuPZcDsKbY/8QAJhEAAgEDAwIHAQAAAAAAAAAAAQIAAwQRBQYSIUITIiMxQWFxof/aAAgBAgEBPwA4BLx6yKhYtgfcv95UabCja+Y594hLYaIGB4Y6TfN5VF14PIhZYL66/sQtwAMOe2b25G+blKtSnXo24t6fDBOf5FJCjJiniOk1/bV1qN+xp9BND2+1rSCXADEfM7cgT//EACoRAAIABAUCBgMBAAAAAAAAAAECAAMFEQQGEiExBwgTFEJRgaEiMkGx/9oACAEDAQE/AJUlphEtBe8YCis89ZKIZs0+hbn7F/qMr9tdTxmDap5ibwVRSVljn5I4h1s7BYplvMh47aspUuVRBUFkjxm5a0Zl0ilz7ncK3+GJ4u5v7mKZvPU2tHbvqOVEUbHfeKRhMfgKhW5dTxpnDQhXVYBb69gNh/Im/uwPvFPZPMhmO0dOetNDyjlSWMc2qb6UHJ3jqz1hmV7HPMo8xpcmao1rwSRe1z8wPxNmPMf/2Q=="};c.url="https://ebook2.lorefree.com/site/index?s="+t,a.push(c);var u={title:"shadowsocks",desc:"真是一把【好梯子】，无缝体验真实的互联网世界！"};return u.imgLocal=i.Z,u.url="https://portal.shadowsocks.nz/aff.php?aff=20800",a.push(u),n.createElement(A.Z,{data:a,tagName:t?"本站无「"+t+"」相关数据，推荐下面站点！":"无数据，推荐下面站点！",style:{textAlign:"left"}})},u=function(e){var t=e.query,a=e.results,l=e.recommendShow,i=!0;return void 0!==l&&(i=l),n.createElement(n.Fragment,null,a.length>0?n.createElement(r.Z,{tagsData:a,name:"有关 「 "+t+" 」 图书："}):i?n.createElement("div",null,n.createElement(c,{search:t})):n.createElement(n.Fragment,null))}},41878:function(e,t){t.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-search-book-js-e6794d022fb9882b1334.js.map