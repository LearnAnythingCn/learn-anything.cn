"use strict";(self.webpackChunklearn_anything=self.webpackChunklearn_anything||[]).push([[599],{94475:function(e,t,o){o.d(t,{C:function(){return R}});var n=o(54038),r=o(86552),a=o(1449),i=o(82277),l=o(67294),s=o(75900),c=o.n(s),f=o(88493),p=o(52275),u=o(82525),m=o(80200),v=o(66419),d=o(40173),g=l.createContext("default"),y=function(e){var t=e.children,o=e.size;return l.createElement(g.Consumer,null,(function(e){return l.createElement(g.Provider,{value:o||e},t)}))},b=g,h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},C=function(e,t){var o,s,g=l.useContext(b),y=l.useState(1),C=(0,i.Z)(y,2),O=C[0],w=C[1],x=l.useState(!1),E=(0,i.Z)(x,2),Z=E[0],N=E[1],P=l.useState(!0),S=(0,i.Z)(P,2),j=S[0],k=S[1],T=l.useRef(),A=l.useRef(),R=(0,p.sQ)(t,T),V=l.useContext(u.E_).getPrefixCls,_=function(){if(A.current&&T.current){var t=A.current.offsetWidth,o=T.current.offsetWidth;if(0!==t&&0!==o){var n=e.gap,r=void 0===n?4:n;2*r<o&&w(o-2*r<t?(o-2*r)/t:1)}}};l.useEffect((function(){N(!0)}),[]),l.useEffect((function(){k(!0),w(1)}),[e.src]),l.useEffect((function(){_()}),[e.gap]);var z=e.prefixCls,D=e.shape,I=e.size,L=e.src,H=e.srcSet,B=e.icon,W=e.className,X=e.alt,Y=e.draggable,M=e.children,$=h(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),F="default"===I?g:I,G=(0,d.Z)(),K=l.useMemo((function(){if("object"!==(0,a.Z)(F))return{};var e=v.c4.find((function(e){return G[e]})),t=F[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:B?t/2:18}:{}}),[G,F]);(0,m.Z)(!("string"==typeof B&&B.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(B,"` at https://ant.design/components/icon"));var Q,U=V("avatar",z),q=c()((o={},(0,r.Z)(o,"".concat(U,"-lg"),"large"===F),(0,r.Z)(o,"".concat(U,"-sm"),"small"===F),o)),J=l.isValidElement(L),ee=c()(U,q,(s={},(0,r.Z)(s,"".concat(U,"-").concat(D),!!D),(0,r.Z)(s,"".concat(U,"-image"),J||L&&j),(0,r.Z)(s,"".concat(U,"-icon"),!!B),s),W),te="number"==typeof F?{width:F,height:F,lineHeight:"".concat(F,"px"),fontSize:B?F/2:18}:{};if("string"==typeof L&&j)Q=l.createElement("img",{src:L,draggable:Y,srcSet:H,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&k(!1)},alt:X});else if(J)Q=L;else if(B)Q=B;else if(Z||1!==O){var oe="scale(".concat(O,") translateX(-50%)"),ne={msTransform:oe,WebkitTransform:oe,transform:oe},re="number"==typeof F?{lineHeight:"".concat(F,"px")}:{};Q=l.createElement(f.Z,{onResize:_},l.createElement("span",{className:"".concat(U,"-string"),ref:function(e){A.current=e},style:(0,n.Z)((0,n.Z)({},re),ne)},M))}else Q=l.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:function(e){A.current=e}},M);return delete $.onError,delete $.gap,l.createElement("span",(0,n.Z)({},$,{style:(0,n.Z)((0,n.Z)((0,n.Z)({},te),K),$.style),className:ee,ref:R}),Q)},O=l.forwardRef(C);O.displayName="Avatar",O.defaultProps={shape:"circle",size:"default"};var w=O,x=o(11786),E=o(94221),Z=o(92393),N=function(e){return e?"function"==typeof e?e():e:null},P=o(51880),S=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},j=l.forwardRef((function(e,t){var o=e.prefixCls,r=e.title,a=e.content,i=S(e,["prefixCls","title","content"]),s=l.useContext(u.E_).getPrefixCls,c=s("popover",o),f=s();return l.createElement(Z.Z,(0,n.Z)({},i,{prefixCls:c,ref:t,overlay:function(e){return l.createElement(l.Fragment,null,r&&l.createElement("div",{className:"".concat(e,"-title")},N(r)),l.createElement("div",{className:"".concat(e,"-inner-content")},N(a)))}(c),transitionName:(0,P.m)(f,"zoom-big",i.transitionName)}))}));j.displayName="Popover",j.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var k=j,T=function(e){var t=l.useContext(u.E_),o=t.getPrefixCls,n=t.direction,a=e.prefixCls,i=e.className,s=void 0===i?"":i,f=e.maxCount,p=e.maxStyle,m=e.size,v=o("avatar-group",a),d=c()(v,(0,r.Z)({},"".concat(v,"-rtl"),"rtl"===n),s),g=e.children,b=e.maxPopoverPlacement,h=void 0===b?"top":b,C=(0,x.Z)(g).map((function(e,t){return(0,E.Tm)(e,{key:"avatar-key-".concat(t)})})),O=C.length;if(f&&f<O){var Z=C.slice(0,f),N=C.slice(f,O);return Z.push(l.createElement(k,{key:"avatar-popover-key",content:N,trigger:"hover",placement:h,overlayClassName:"".concat(v,"-popover")},l.createElement(w,{style:p},"+".concat(O-f)))),l.createElement(y,{size:m},l.createElement("div",{className:d,style:e.style},Z))}return l.createElement(y,{size:m},l.createElement("div",{className:d,style:e.style},C))},A=w;A.Group=T;var R=A},92393:function(e,t,o){o.d(t,{Z:function(){return R}});var n=o(86552),r=o(82277),a=o(54038),i=o(67294),l=o(1449),s=o(32663),c=o(262),f=o(13898),p={adjustX:1,adjustY:1},u=[0,0],m={left:{points:["cr","cl"],overflow:p,offset:[-4,0],targetOffset:u},right:{points:["cl","cr"],overflow:p,offset:[4,0],targetOffset:u},top:{points:["bc","tc"],overflow:p,offset:[0,-4],targetOffset:u},bottom:{points:["tc","bc"],overflow:p,offset:[0,4],targetOffset:u},topLeft:{points:["bl","tl"],overflow:p,offset:[0,-4],targetOffset:u},leftTop:{points:["tr","tl"],overflow:p,offset:[-4,0],targetOffset:u},topRight:{points:["br","tr"],overflow:p,offset:[0,-4],targetOffset:u},rightTop:{points:["tl","tr"],overflow:p,offset:[4,0],targetOffset:u},bottomRight:{points:["tr","br"],overflow:p,offset:[0,4],targetOffset:u},rightBottom:{points:["bl","br"],overflow:p,offset:[4,0],targetOffset:u},bottomLeft:{points:["tl","bl"],overflow:p,offset:[0,4],targetOffset:u},leftBottom:{points:["br","bl"],overflow:p,offset:[-4,0],targetOffset:u}},v=function(e){var t=e.overlay,o=e.prefixCls,n=e.id,r=e.overlayInnerStyle;return i.createElement("div",{className:"".concat(o,"-inner"),id:n,role:"tooltip",style:r},"function"==typeof t?t():t)},d=function(e,t){var o=e.overlayClassName,n=e.trigger,r=void 0===n?["hover"]:n,p=e.mouseEnterDelay,u=void 0===p?0:p,d=e.mouseLeaveDelay,g=void 0===d?.1:d,y=e.overlayStyle,b=e.prefixCls,h=void 0===b?"rc-tooltip":b,C=e.children,O=e.onVisibleChange,w=e.afterVisibleChange,x=e.transitionName,E=e.animation,Z=e.motion,N=e.placement,P=void 0===N?"right":N,S=e.align,j=void 0===S?{}:S,k=e.destroyTooltipOnHide,T=void 0!==k&&k,A=e.defaultVisible,R=e.getTooltipContainer,V=e.overlayInnerStyle,_=(0,c.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),z=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(function(){return z.current}));var D=(0,s.Z)({},_);"visible"in e&&(D.popupVisible=e.visible);var I=!1,L=!1;if("boolean"==typeof T)I=T;else if(T&&"object"===(0,l.Z)(T)){var H=T.keepParent;I=!0===H,L=!1===H}return i.createElement(f.Z,(0,a.Z)({popupClassName:o,prefixCls:h,popup:function(){var t=e.arrowContent,o=void 0===t?null:t,n=e.overlay,r=e.id;return[i.createElement("div",{className:"".concat(h,"-arrow"),key:"arrow"},o),i.createElement(v,{key:"content",prefixCls:h,id:r,overlay:n,overlayInnerStyle:V})]},action:r,builtinPlacements:m,popupPlacement:P,ref:z,popupAlign:j,getPopupContainer:R,onPopupVisibleChange:O,afterPopupVisibleChange:w,popupTransitionName:x,popupAnimation:E,popupMotion:Z,defaultPopupVisible:A,destroyPopupOnHide:I,autoDestroy:L,mouseLeaveDelay:g,popupStyle:y,mouseEnterDelay:u},D),C)},g=(0,i.forwardRef)(d),y=o(61637),b=o(75900),h=o.n(b),C={adjustX:1,adjustY:1},O={adjustX:0,adjustY:0},w=[0,0];function x(e){return"boolean"==typeof e?e?C:O:(0,a.Z)((0,a.Z)({},O),e)}var E=o(94221),Z=o(82525),N=o(14224),P=((0,N.b)("success","processing","error","default","warning"),(0,N.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")),S=o(51880),j=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},k=new RegExp("^(".concat(P.join("|"),")(-inverse)?$"));function T(e,t){var o=e.type;if((!0===o.__ANT_BUTTON||!0===o.__ANT_SWITCH||!0===o.__ANT_CHECKBOX||"button"===e.type)&&e.props.disabled){var n=function(e,t){var o={},n=(0,a.Z)({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete n[t])})),{picked:o,omitted:n}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),r=n.picked,l=n.omitted,s=(0,a.Z)((0,a.Z)({display:"inline-block"},r),{cursor:"not-allowed",width:e.props.block?"100%":null}),c=(0,a.Z)((0,a.Z)({},l),{pointerEvents:"none"}),f=(0,E.Tm)(e,{style:c,className:null});return i.createElement("span",{style:s,className:h()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},f)}return e}var A=i.forwardRef((function(e,t){var o,l=i.useContext(Z.E_),s=l.getPopupContainer,c=l.getPrefixCls,f=l.direction,p=(0,y.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),u=(0,r.Z)(p,2),v=u[0],d=u[1],b=function(){var t=e.title,o=e.overlay;return!t&&!o&&0!==t},C=function(){var t=e.builtinPlacements,o=e.arrowPointAtCenter,n=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,o=void 0===t?4:t,n=e.horizontalArrowShift,r=void 0===n?16:n,i=e.verticalArrowShift,l=void 0===i?8:i,s=e.autoAdjustOverflow,c={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(r+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(l+o)]},topRight:{points:["br","tc"],offset:[r+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(l+o)]},bottomRight:{points:["tr","bc"],offset:[r+o,4]},rightBottom:{points:["bl","cr"],offset:[4,l+o]},bottomLeft:{points:["tl","bc"],offset:[-(r+o),4]},leftBottom:{points:["br","cl"],offset:[-4,l+o]}};return Object.keys(c).forEach((function(t){c[t]=e.arrowPointAtCenter?(0,a.Z)((0,a.Z)({},c[t]),{overflow:x(s),targetOffset:w}):(0,a.Z)((0,a.Z)({},m[t]),{overflow:x(s)}),c[t].ignoreShake=!0})),c}({arrowPointAtCenter:o,autoAdjustOverflow:n})},O=e.getPopupContainer,N=j(e,["getPopupContainer"]),P=e.prefixCls,A=e.openClassName,R=e.getTooltipContainer,V=e.overlayClassName,_=e.color,z=e.overlayInnerStyle,D=e.children,I=c("tooltip",P),L=c(),H=v;!("visible"in e)&&b()&&(H=!1);var B,W,X,Y=T((0,E.l$)(D)?D:i.createElement("span",null,D),I),M=Y.props,$=h()(M.className,(0,n.Z)({},A||"".concat(I,"-open"),!0)),F=h()(V,(o={},(0,n.Z)(o,"".concat(I,"-rtl"),"rtl"===f),(0,n.Z)(o,"".concat(I,"-").concat(_),_&&k.test(_)),o)),G=z;return _&&!k.test(_)&&(G=(0,a.Z)((0,a.Z)({},z),{background:_}),B={background:_}),i.createElement(g,(0,a.Z)({},N,{prefixCls:I,overlayClassName:F,getTooltipContainer:O||R||s,ref:t,builtinPlacements:C(),overlay:(W=e.title,X=e.overlay,0===W?W:X||W||""),visible:H,onVisibleChange:function(t){var o;d(!b()&&t),b()||null===(o=e.onVisibleChange)||void 0===o||o.call(e,t)},onPopupAlign:function(e,t){var o=C(),n=Object.keys(o).filter((function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]}))[0];if(n){var r=e.getBoundingClientRect(),a={top:"50%",left:"50%"};n.indexOf("top")>=0||n.indexOf("Bottom")>=0?a.top="".concat(r.height-t.offset[1],"px"):(n.indexOf("Top")>=0||n.indexOf("bottom")>=0)&&(a.top="".concat(-t.offset[1],"px")),n.indexOf("left")>=0||n.indexOf("Right")>=0?a.left="".concat(r.width-t.offset[0],"px"):(n.indexOf("right")>=0||n.indexOf("Left")>=0)&&(a.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(a.left," ").concat(a.top)}},overlayInnerStyle:G,arrowContent:i.createElement("span",{className:"".concat(I,"-arrow-content"),style:B}),motion:{motionName:(0,S.m)(L,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),H?(0,E.Tm)(Y,{className:$}):Y)}));A.displayName="Tooltip",A.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};var R=A}}]);
//# sourceMappingURL=f0163af52a1556cef1d1a87da7981a8bae8799ff-268fa654ba7a06d910ca.js.map