(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/Button/Button-group.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js")),s=a(n("./node_modules/umi-build-dev/node_modules/react/index.js")),r=a(n("./node_modules/classnames/index.js"));n("./src/_style/index.less"),n("./src/Button/index.less");var i=s.default.memo(function(e){var t,n=e.type,a=e.children,i=e.className,l=(0,r.default)("ButtonGroup",i,(t={},(0,o.default)(t,"ButtonGroup__type_".concat(n),n),(0,o.default)(t,"am-g-".concat(e.children.length),Array.isArray(a)),(0,o.default)(t,"am-g-1",!Array.isArray(a)),t));return s.default.createElement("div",{className:l},a)});t.default=i},"./src/Button/Button.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js")),r=o(n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js")),i=a(n("./node_modules/umi-build-dev/node_modules/react/index.js")),l=o(n("./node_modules/classnames/index.js")),d=n("./src/index.ts");n("./src/_style/index.less"),n("./src/Button/index.less");var u=0,c=0,m=0,f=0,p=function(e){var t,n=(0,i.useState)(!1),a=(0,r.default)(n,2),o=a[0],p=a[1],b=e.color,g=e.type,h=e.state,x=e.primary,_=e.className,v=e.children,O=e.href,w=(0,l.default)("Button",_,(t={},(0,s.default)(t,"Button__color_".concat(b),b),(0,s.default)(t,"Button__type_".concat(g),g),(0,s.default)(t,"Button__state_".concat(h),h),(0,s.default)(t,"Button__type_primary",x),(0,s.default)(t,"Button__state_active",o),(0,s.default)(t,"Button__ua-pc",d.util.isPC),t));function y(e){u=e.changedTouches[0].pageX,m=e.changedTouches[0].pageY,p(!0)}function C(e){u=e.pageX,m=e.pageY,p(!0)}function B(e){c=e.changedTouches[0].pageX,f=e.changedTouches[0].pageY,(Math.abs(c-u)>d.util.global.moveOffset||Math.abs(f-m)>d.util.global.moveOffset)&&p(!1)}function j(e){c=e.pageX,f=e.pageY,(Math.abs(c-u)>d.util.global.moveOffset||Math.abs(f-m)>d.util.global.moveOffset)&&p(!1)}function N(){p(!1)}function E(){p(!1)}function M(t){var n=e.onClick;"function"===typeof n&&n(t)}return O?i.default.createElement("a",{className:w,href:O,onTouchStart:y,onTouchMove:B,onTouchEnd:N,onMouseDown:C,onMouseMove:j,onMouseUp:E,onClick:M},v):i.default.createElement("span",{className:w,onTouchStart:y,onTouchMove:B,onTouchEnd:N,onMouseDown:C,onMouseMove:j,onMouseUp:E,onClick:M},v)};p.defaultProps={color:"blue"};var b=i.default.memo(p);t.default=b},"./src/Button/index.less":function(e,t,n){},"./src/Button/index.ts":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("./src/Button/Button.tsx")),s=a(n("./src/Button/Button-group.tsx"));o.default.Group=s.default;var r=o.default;t.default=r},"./src/Space/index.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js")),s=a(n("./node_modules/umi-build-dev/node_modules/react/index.js")),r=a(n("./node_modules/classnames/index.js"));n("./src/_style/index.less");var i=function(e){var t=e.scale,n=e.className,a=(0,r.default)(n,(0,o.default)({},"am-space-".concat(t),t));return s.default.createElement("div",{className:a})};i.defaultProps={scale:"1"};var l=s.default.memo(i);t.default=l},"./src/_util/index.ts":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,r=a(n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/typeof.js")),i=a(n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js")),l=function e(){(0,i.default)(this,e)};t.default=l,l.language=navigator.language.toLowerCase(),l.system=(o=navigator.platform.toLowerCase(),s=navigator.userAgent.toLowerCase(),{win:"win32"===o||"win64"===o||"windows"===o,mac:"mac68k"===o||"macppc"===o||"macintosh"===o||"macintel"===o,linux:"linux"===o||"x11"===o,ios:!!s.match(/\(i[^;]+;( u;)? cpu.+mac os x/),android:s.indexOf("android")>-1||s.indexOf("linux")>-1}),l.version=function(){var e=navigator.userAgent.toLowerCase(),t="",n=-1,a=-1;switch(!0){case e.indexOf("msie")>1:n=e.indexOf("msie")+5,a=e.substr(n).indexOf(";");break;case e.indexOf("windows nt")>1:n=e.indexOf("windows nt")+11,a=e.substr(n).indexOf(";");break;case e.indexOf("iphone os")>1:n=e.indexOf("iphone os")+10,a=e.substr(n).indexOf("like")-1;break;case e.indexOf("cpu os")>1:n=e.indexOf("cpu os")+7,a=e.substr(n).indexOf("like")-1;break;case e.indexOf("android")>1:n=e.indexOf("android")+8,a=e.substr(n).indexOf(";");break;case e.indexOf("(bb")>1:n=e.indexOf("(bb")+3,a=e.substr(n).indexOf(";")}for(var o=e.substr(n,a).replace(/_/g,".").split("."),s=0;s<o.length;s++)0===s&&o.length>1?t+=String(o[s])+".":t+=String(o[s]);return Number(t)||-1}(),l.browser=function(){var e=navigator.userAgent.toLowerCase();return{msie:e.indexOf("msie")>-1||e.indexOf("rv:11")>-1,edge:e.indexOf("edge")>-1,trident:e.indexOf("trident")>-1,presto:e.indexOf("presto")>-1,webKit:e.indexOf("applewebKit")>-1,firefox:e.indexOf("firefox")>-1,chrome:e.indexOf("chrome")>-1,opera:e.indexOf("opera")>-1&&e.indexOf("chrome")<1,safari:e.indexOf("safari")>-1&&e.indexOf("chrome")<1,gecko:e.indexOf("gecko")>-1&&e.indexOf("khtml")<1,mobile:!!e.match(/applewebkit.*mobile.*/)||!!e.match(/applewebkit/),iPhone:e.indexOf("iphone")>-1,iPad:e.indexOf("ipad")>-1,webApp:e.indexOf("safari")<1,wechat:!!e.match(/micromessenger/i)}}(),l.isWeixin=!!navigator.userAgent.toLowerCase().match(/micromessenger/i),l.isPC=function(){for(var e=navigator.userAgent.toLowerCase(),t=["android","iphone","symbianos","windows phone","ipod","ipad"],n=!0,a=0;a<t.length;a++){var o=t[a];if(e.indexOf(o)>0){n=!1;break}}return n}(),l.global={speed:300,winW:window.screen.width,winH:window.screen.height,moveOffset:10},l.checkReady=function(){window.screen.width>1?(l.global.winW=window.screen.width,l.global.winH=window.screen.height):setTimeout(l.checkReady,1e3/60)},l.hasClass=function(e,t){var n="object"===(0,r.default)(e)?e.className:e;return 0!==(t=t||"").replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+n+" ")},l.addClass=function(e,t){return"object"===(0,r.default)(e)?l.hasClass(e,t)||(e.className=""===e.className?t:e.className+" "+t):"string"===typeof e&&(l.hasClass(e,t)||(e=""===e?t:e+" "+t)),e},l.removeClass=function(e,t){if("object"===(0,r.default)(e)){if(l.hasClass(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}else if("string"===typeof e&&l.hasClass(e,t)){for(var a=" "+e.replace(/[\t\r\n]/g,"")+" ";a.indexOf(" "+t+" ")>=0;)a=a.replace(" "+t+" "," ");e=a.replace(/^\s+|\s+$/g,"")}return e},l.shieldedMobile=function(e){return void 0!==e&&null!==e&&11===e.length?e.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2"):e},l.shieldedIdNo=function(e,t){if(void 0!==t&&null!==t){if("01"!==e)return t.replace(/^(\S+)(\S{4})/,"****$2");if(15===t.length)return t.replace(/^(\d{3})\d+(\S{4})/,"$1********$2");if(18===t.length)return t.replace(/^(\d{3})\d+(\S{4})/,"$1***********$2")}return t},l.formatAmount=function(e){return(e=(e=(e=(e=e.replace(/[^\d.]/g,"")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")).indexOf(".")<0&&""!==e&&(e=parseFloat(e).toString()),e},l.formatNumber=function(e){return e=e.replace(/[^\d]/g,"")},l.toBigAmount=function(e){var t="",n="\u4edf\u4f70\u62fe\u4e07\u4edf\u4f70\u62fe\u4ebf\u4edf\u4f70\u62fe\u4e07\u4edf\u4f70\u62fe\u5143\u89d2\u5206",a=(e+="00").indexOf(".");a>=0&&(e=e.substring(0,a)+e.substr(a+1,2)),n=n.substr(n.length-e.length);for(var o=0;o<e.length;o++)t+="\u96f6\u58f9\u8d30\u53c1\u8086\u4f0d\u9646\u67d2\u634c\u7396".substr(Number(e.substr(o,1)),1)+n.substr(o,1);var s=t.replace(/\u96f6\u89d2\u96f6\u5206$/,"\u6574").replace(/\u96f6\u89d2/,"").replace(/\u96f6\u5206$/,"").replace(/\u96f6[\u4edf\u4f70\u62fe]/g,"\u96f6").replace(/\u96f6{2,}/g,"\u96f6").replace(/\u96f6([\u4ebf|\u4e07])/g,"$1").replace(/\u96f6+\u5143/,"\u5143").replace(/\u4ebf\u96f6{0,3}\u4e07/,"\u4ebf").replace(/^\u5143/,"\u96f6\u5143");return"\u6574"===s||"\u96f6\u5143\u6574"===s?"&nbsp;":s},l.formatBankNumber=function(e){return e?e.replace(/\s/g,"").replace(/(....)(?=.)/g,"$1 "):""},l.globalSet=function(){l.checkReady(),l.system.ios&&l.addClass(document.getElementsByTagName("html")[0],"ios"),l.system.win&&l.addClass(document.getElementsByTagName("html")[0],"win"),l.system.mac&&l.addClass(document.getElementsByTagName("html")[0],"mac"),l.system.android&&l.addClass(document.getElementsByTagName("html")[0],"android"),l.browser.chrome&&l.addClass(document.getElementsByTagName("html")[0],"chrome"),l.browser.firefox&&l.addClass(document.getElementsByTagName("html")[0],"firefox"),l.browser.iPad&&l.addClass(document.getElementsByTagName("html")[0],"am-pad"),l.browser.safari&&l.addClass(document.getElementsByTagName("html")[0],"safari"),l.browser.msie&&l.addClass(document.getElementsByTagName("html")[0],"msie"),l.addClass(document.getElementsByTagName("html")[0],l.isPC?"am-pc":"am-mob am-wx")},l.testTel=function(e){return/^1(\d){10}$/.test(e)},l.globalSet()},"./src/index.ts":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"util",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Space",{enumerable:!0,get:function(){return i.default}});var o=a(n("./src/_util/index.ts")),s=a(n("./src/Button/index.ts")),r=a(n("./src/Icon/index.tsx")),i=a(n("./src/Space/index.tsx"));try{MemoExoticComponent.displayName="MemoExoticComponent",MemoExoticComponent.__docgenInfo={description:"",displayName:"MemoExoticComponent",props:{animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"string"}},hasColor:{defaultValue:null,description:"",name:"hasColor",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#MemoExoticComponent"]={docgenInfo:MemoExoticComponent.__docgenInfo,name:"MemoExoticComponent",path:"src/index.ts#MemoExoticComponent"})}catch(l){}}}]);