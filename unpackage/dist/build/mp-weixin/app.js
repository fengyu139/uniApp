"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./common/vendor.js"),o=require("./utils/auth.js"),s=require("./utils/socket.js"),t=require("./common/assets.js");Math;const n={__name:"App",setup(n){console.log(t.tipMusic),e.provide("socket",s.socket),s.socket.on("message",(async s=>{if(o.getToken()){const o=e.index.createInnerAudioContext();o.src=t.tipMusic,o.play(),e.index.vibrateLong({success:function(){console.log("success")},fail:function(e){console.log(e)}}),"addFoods"==s.type&&e.index.showModal({title:s.desk+"号桌-顾客加菜",content:s.msg,showCancel:!1,confirmText:"知道了",success:({confirm:e,cancel:o})=>{e&&c(s.orderId)}}),"submitted"==s.type&&(s.desk?e.index.showModal({title:"新增订单",content:s.desk+"号桌-顾客已经提交了订单，请及时处理",showCancel:!1,confirmText:"知道了",success:({confirm:e,cancel:o})=>{e&&c(s.orderId)}}):e.index.showModal({title:"新增订单",content:"顾客自助提交了订单，请及时处理",showCancel:!1,confirmText:"知道了",success:({confirm:e,cancel:o})=>{e&&c(s.orderId)}}))}}));const c=o=>{e.index.setClipboardData({showToast:!1,data:o,success:o=>{e.index.showToast({title:"订单ID已复制",icon:"none"})},fail:e=>{}})};return(e,o)=>({})}};function c(){return{app:e.createSSRApp(n)}}c().app.mount("#app"),exports.createApp=c;