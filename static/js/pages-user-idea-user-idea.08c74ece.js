(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-idea-user-idea"],{1582:function(t,n,e){"use strict";(function(t){e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("99af");var o=i(e("c7eb")),a=i(e("1da1")),c=i(e("c9c7")),s=(i(e("ced1")),i(e("2299"))),l=(new c.default({key:"KYHBZ-WFB2Q-C5T53-4GEFU-7Q745-JBBIB"}),{data:function(){return{inputStr:"",deviceId:null,opt:{}}},onLoad:function(n){var e=this;return(0,a.default)((0,o.default)().mark((function i(){var a,c;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.log("user idea option",n),e.opt=n,a=n.userid,i.next=5,s.default.dispatch("getUserToken",+a);case 5:c=i.sent,t.log("userToken",c),uni.getSystemInfo({complete:function(n){t.log(n),e.deviceId=n.deviceId}});case 8:case"end":return i.stop()}}),i)})))()},methods:{chooseLocal:function(){t.log(123),uni.request({url:"https://apis.map.qq.com/ws/location/v1/ip",header:{},data:{key:"KYHBZ-WFB2Q-C5T53-4GEFU-7Q745-JBBIB",sig:"K8tBdzEsidiSPzS9VgLld0Z7otmc0yvR"},success:function(n){t.log("success",n)},fail:function(n){t.log("fail",n)}}),uni.getLocation({type:"gcj02",success:function(n){t.log("当前位置的经度："+n.longitude),t.log("当前位置的纬度："+n.latitude)}})},linkAi:function(){""!==this.inputStr?uni.navigateTo({url:"/pages/map/map?userLat=".concat(this.opt.userLat,"&userLang=").concat(this.opt.userLang,"&userTalk=").concat(this.inputStr,"&type=1")}):uni.showToast({icon:"none",title:"请输入你的想法"})}}});n.default=l}).call(this,e("5a52")["default"])},4080:function(t,n,e){"use strict";var i=e("69ca"),o=e.n(i);o.a},"69ca":function(t,n,e){var i=e("8298");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("2e49e48c",i,!0,{sourceMap:!1,shadowMode:!1})},8298:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-63cf54bc]{height:calc(100vh - %?1?%);border-top:%?1?% solid #dadbdd;width:%?750?%;background:linear-gradient(45deg,rgba(248,213,98,.5),rgba(248,213,98,.2),#f9f7f4,rgba(248,213,98,.09803921568627451),rgba(248,213,98,.4))}.content .bg_text[data-v-63cf54bc]{position:absolute;text-align:left;color:rgba(233,213,175,.6);font-family:PingFang SC;font-size:%?72?%;font-style:normal;font-weight:500;line-height:normal}.content .title[data-v-63cf54bc]{color:#292c35;font-family:PingFang SC;font-size:%?64?%;font-style:normal;font-weight:500;line-height:%?40?%;letter-spacing:%?8?%;padding:%?110?% 0 %?48?% %?100?%;position:-webkit-sticky;position:sticky}.content .title .mid_text[data-v-63cf54bc]{color:#292c35;font-family:PingFang SC;font-size:%?64?%;font-style:normal;font-weight:300;line-height:%?42?%;letter-spacing:%?8?%}.content .second_title[data-v-63cf54bc]{color:#292c35;font-family:PingFang SC;font-size:%?32?%;font-style:normal;font-weight:300;line-height:%?42?%;\n  /* 129.51% */letter-spacing:.311px;padding:0 0 0 %?100?%}.content .arrow[data-v-63cf54bc]{width:%?24?%;height:%?24?%;margin:%?26?% 0 0 %?100?%}.content .arrow img[data-v-63cf54bc]{width:100%;height:100%}.content .input_box[data-v-63cf54bc]{border-bottom:1px solid #292c35;width:%?482?%;margin:%?120?% auto 0;padding-bottom:%?22?%}.content .input_box[data-v-63cf54bc]  .uni-textarea-textarea{color:#292c35;font-family:PingFang SC;font-size:%?28?%;font-style:normal;font-weight:400;line-height:%?40?%}.content .input_str[data-v-63cf54bc]{width:%?482?%;margin:%?20?% auto 0;color:rgba(41,44,53,.5);text-align:right;font-family:PingFang SC;font-size:%?24?%;font-style:normal;font-weight:400;line-height:%?40?%\n  /* 172.68% */}.content .bottom_btn[data-v-63cf54bc]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-top:1px solid #f9f7f4;height:%?276?%;width:%?750?%;position:fixed;bottom:0;left:0}.content .bottom_btn .choose_location[data-v-63cf54bc]{color:#292c35;padding-bottom:%?30?%;text-align:center;font-family:PingFang SC;font-size:14px;font-style:normal;font-weight:400;line-height:20.722px;\n  /* 148.012% */letter-spacing:.311px}.content .bottom_btn .choose_location .tn-icon-focus[data-v-63cf54bc]{padding-right:%?12?%}.content .bottom_btn .open_socket[data-v-63cf54bc]{width:%?520?%;height:%?88?%;border-radius:%?52?%;background:#292c35;color:#fefefe;display:flex;align-items:center;justify-content:center;font-family:Abel;font-size:14px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:.311px}.content .bottom_btn .gray_btn[data-v-63cf54bc]{-webkit-filter:grayscale(100%)}',""]),t.exports=n},ba87:function(t,n,e){"use strict";e.r(n);var i=e("f010"),o=e("ee98");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("4080");var c=e("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"63cf54bc",null,!1,i["a"],void 0);n["default"]=s.exports},ee98:function(t,n,e){"use strict";e.r(n);var i=e("1582"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},f010:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={tnInput:e("e0b8").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("pre",{staticClass:"bg_text"},[t._v("strolling through every \nalley's tale")]),e("v-uni-view",{staticClass:"title"},[e("v-uni-view",[e("span",[t._v("我")]),e("span",{staticClass:"mid_text"},[t._v("的行程")]),e("span",[t._v("想法💡:)")])])],1),e("v-uni-view",{staticClass:"second_title"},[t._v("输入一些旅程的想法")]),e("v-uni-view",{staticClass:"arrow"},[e("img",{attrs:{src:"/static/arrow.svg",alt:""}})]),e("v-uni-view",{staticClass:"input_box"},[e("tn-input",{attrs:{type:"textarea",border:!1,height:30,maxLength:120,autoHeight:!0},model:{value:t.inputStr,callback:function(n){t.inputStr=n},expression:"inputStr"}})],1),e("v-uni-view",{staticClass:"input_str"},[t._v(t._s(t.inputStr.length)+"/120")]),e("v-uni-view",{staticClass:"bottom_btn"},[e("v-uni-view",{staticClass:"choose_location",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chooseLocal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"tn-icon-focus"}),t._v("出发位置：当前位置")],1),e("v-uni-view",{staticClass:"open_socket",class:0===t.inputStr.length?"gray_btn":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.linkAi.apply(void 0,arguments)}}},[t._v("一键生成")])],1)],1)},a=[]}}]);