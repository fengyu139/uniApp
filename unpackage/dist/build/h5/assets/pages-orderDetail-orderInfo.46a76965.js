import{V as e,p as a,k as l,U as t,v as s,o as n,c as o,w as u,g as i,b as r,q as c,f as d,t as p,j as v,D as x,a as m,h as f,F as y,d as g,z as k,u as h,J as w,A as b,Z as j}from"./index-9a92bf12.js";import{_}from"./uni-card.91d222d5.js";import{o as M,c as F,y as C,A as I,B,r as A}from"./api.b5e1fea0.js";import{_ as D,a as E}from"./uni-popup.429c57b8.js";import{_ as L}from"./addRecords.9a082372.js";import{_ as O}from"./abButton.5260e29d.js";import"./abMiniButton.fe8c6143.js";import"./dayjs.min.e5ff6872.js";const R={__name:"orderInfo",setup(R){let U=e("orderId");const N=a({}),P=["正常辣","微辣","特辣"];M((async e=>{e.id&&(U=e.id);let a=await F({id:U});N.value=a[0];let t=await C({orderId:U||"dfs2345"});if(q.value=t,!l()&&window&&N.value.takeMeal){!function(e){let a=new Image;a.setAttribute("crossOrigin","anonymous"),a.src=e,a.onload=()=>{let e=document.createElement("canvas");e.width=a.width,e.height=a.height,e.getContext("2d").drawImage(a,0,0,a.width,a.height),e.toBlob((e=>{var a=URL.createObjectURL(e);Z(a)}))}}(await I({takeMeal:N.value.takeMeal}))}}));const T=a(""),q=a([]);t((()=>{if(!l())try{document.getElementsByClassName("uni-page-head-btn")[0].style.display="none"}catch(e){}console.log(window)}));const z=a(null),J=async()=>{if(T.value)return z.value.open();let e=await B({orderId:U});console.log(e),T.value=e,z.value.open()},V=()=>{console.log(T.value),k({filePath:T.value,success:e=>{s({title:"保存成功",icon:"success",mask:!0}),z.value.close()},fail:e=>{console.log(e),h({title:"失败",content:e.errMsg,showCancel:!0,success:({confirm:e,cancel:a})=>{}}),z.value.close()}})};const Z=e=>{let a=document.createElement("a");a.download="order.jpg",a.href=e,a.click(),s({title:"取餐号已下载",icon:"success",mask:!0})};return(e,a)=>{const t=w("abEmpty"),s=A(b("uni-card"),_),k=j,h=A(b("uni-popup-dialog"),D),M=A(b("uni-popup"),E),F=i;return n(),o(F,null,{default:u((()=>[!N.value.isFinish&&N.value.takeMeal?(n(),r("div",{key:0,class:"px-[12px] pt-[12px] text-center"},[c("p",null,[d(" 订单正在准备中，您的取餐号是:"),c("span",{class:"text-text3 text-16 font-bold"},p(N.value.takeMeal),1)])])):v("",!0),x(l)()?(n(),r("div",{key:1,class:"p-[12px] px-[16px]"},[m(O,{icon:"link",onClick:J},{default:u((()=>[d("为此订单生成网址二维码")])),_:1})])):v("",!0),m(s,null,{default:u((()=>{var e,a;return[c("div",{class:"text-12"},[c("div",{class:"grid grid-cols-2"},[c("span",null,"订单名："+p(N.value.orderName),1),c("span",null,[d("订单状态："),c("span",{class:f(N.value.isFinish?"text-text5":"text-text3")},p(N.value.isFinish?"已完成":"未完成"),3)]),c("span",null,"口味："+p(P[N.value.taste-1]),1),N.value.desk?(n(),r("span",{key:0},"桌位："+p(N.value.desk),1)):v("",!0),c("span",null,"是否打包："+p(N.value.isPack?"打包":"未打包"),1),c("span",null,"是否有加菜："+p(N.value.isAddMenu?"有":"无"),1),c("span",null,"下单方式："+p(N.value.userOperation?"客户自助":"管理员"),1),c("span",null,[d("订单金额："),c("span",{class:"text-text3 text-14"},p(null==(e=N.value.totalMoney)?void 0:e.toFixed(2)),1)]),N.value.isFinish?(n(),r("span",{key:1},[d("实收金额："),c("span",{class:"text-text3 text-14"},p((N.value.actualMoney||N.value.totalMoney).toFixed(2)),1)])):v("",!0),c("span",null,"商品总数："+p(N.value.totalCount),1)]),c("p",null,"订单ID："+p(N.value.id),1),c("p",null,"创建时间："+p(N.value.showTime),1),c("p",{class:"text-16 text-center my-[12px]"},"商品明细清单"),(null==(a=N.value.orderDetail)?void 0:a.length)?(n(),r("div",{key:0},[c("ul",null,[c("li",{class:"grid grid-cols-4 text-center py-[4px] font-bold"},[c("span",null,"名称"),c("span",null,"单价"),c("span",null,"数量"),c("span",null,"小记")]),(n(!0),r(y,null,g(N.value.orderDetail,(e=>(n(),r("li",{key:e.id,class:"grid grid-cols-4 text-center py-[4px]",style:{"border-bottom":"1px solid var(--border_c)"}},[c("span",null,p(e.name),1),c("span",null,p(e.price.toFixed(2)),1),c("span",null,p(e.count),1),c("span",{class:"text-text3"},p((e.price*e.count).toFixed(2)),1)])))),128))])])):(n(),o(t,{key:1,text:"暂无数据"})),q.value.length>1?(n(),o(L,{key:2,recordsList:q.value},null,8,["recordsList"])):v("",!0)])]})),_:1}),m(M,{ref_key:"popup2",ref:z,type:"dialog"},{default:u((()=>[m(h,{title:"订单二维码",confirmText:"保存二维码",duration:2e3,"before-close":!0,onClose:a[0]||(a[0]=e=>z.value.close()),onConfirm:V},{default:u((()=>[c("div",{class:"flex justify-center w-full"},[m(k,{src:T.value,class:"w-full"},null,8,["src"])])])),_:1})])),_:1},512)])),_:1})}}};export{R as default};
