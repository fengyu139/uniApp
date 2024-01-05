import{p as e,A as a,B as t,s,o as l,c as i,w as n,g as r,q as o,a as u,f as c,t as d,C as m,b as p,d as y,j as f,F as x,u as Y,v,D as h,y as M,z as k}from"./index-186a3d71.js";import{_ as g}from"./uni-datetime-picker.805d21ad.js";import{b as _,c as D,e as b,g as F,r as j}from"./api.2104deed.js";import{_ as C}from"./uni-easyinput.d85827e4.js";import{a as V,_ as w}from"./adBell.64dd517c.js";import{_ as N}from"./uni-card.512cf813.js";import{d as B}from"./dayjs.min.1da0adf3.js";import{_ as T}from"./abMiniButton.3bbe7994.js";import{_ as z}from"./abEmpty.81a3ff36.js";const H={__name:"order",setup(H){const I=e([B().subtract(1,"day").format("YYYY-MM-DD"),B().format("YYYY-MM-DD")]),O=e(B().subtract(12,"month").format("YYYY-MM-DD")),U=e(B().format("YYYY-MM-DD")),q=e(""),A=e(""),E=e([]),P=async()=>{await S({orderName:q.value,searchMoney:A.value})},R=a((()=>({startTime:B(I.value[0]).startOf("day").format("YYYY-MM-DD HH:mm:ss"),endTime:B(I.value[1]).endOf("day").format("YYYY-MM-DD HH:mm:ss")}))),S=async e=>{let a=await D(e);E.value=a};t((async()=>{I.value[0]&&I.value[1]&&S(R.value)}));const $=a((()=>E.value.reduce(((e,a)=>e+Number(a.totalMoney)),0).toFixed(2)));_((async()=>{I.value=[B().subtract(1,"day").format("YYYY-MM-DD"),B().format("YYYY-MM-DD")];try{await S(R.value),s()}catch(e){s()}}));return(e,a)=>{const t=j(k("uni-datetime-picker"),g),s=r,_=j(k("uni-easyinput"),C),D=j(k("uni-tag"),w),B=j(k("uni-card"),N);return l(),i(s,null,{default:n((()=>[o("div",{class:"p-[20rpx]"},[u(s,{class:"example-body"},{default:n((()=>[u(t,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e),type:"daterange",start:O.value,end:U.value,rangeSeparator:"至"},null,8,["modelValue","start","end"])])),_:1}),u(s,{class:"mt-[10px] grid grid-flow-col gap-6"},{default:n((()=>[u(_,{type:"number",prefixIcon:"search",modelValue:A.value,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e),placeholder:"请输入不低于的金额",onBlur:P},null,8,["modelValue"]),u(_,{type:"text",prefixIcon:"search",modelValue:q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value=e),confirmType:"search",placeholder:"请输入订单关键字",onBlur:P},null,8,["modelValue"])])),_:1})]),u(s,{class:"grid grid-cols-3 text-14 text-center"},{default:n((()=>[o("span",null,[c("总单数:"),o("span",{class:"text-text3"},d(E.value.length),1)]),o("span",{class:""},[c("总金额:"),o("span",{class:"text-text3"},d(m($)),1)]),o("span",{class:""},[c("未完成订单:"),o("span",{class:"text-text3"},d(E.value.filter((e=>!e.isFinish)).length),1)])])),_:1}),u(s,{class:"grid grid-cols-2 text-14 text-center"},{default:n((()=>[o("span",{class:""},[c("已结算金额:"),o("span",{class:"text-text3"},d(E.value.filter((e=>e.isFinish)).reduce(((e,a)=>e+Number(a.totalMoney)),0).toFixed(2)),1)]),o("span",{class:""},[c("未结算金额:"),o("span",{class:"text-text3"},d(E.value.filter((e=>!e.isFinish)).reduce(((e,a)=>e+Number(a.totalMoney)),0).toFixed(2)),1)])])),_:1}),u(s,null,{default:n((()=>[(l(!0),p(x,null,y(E.value,(e=>(l(),i(B,{title:e.orderName,"sub-title":e.showTime,extra:`金额：${e.totalMoney}`,key:e.id},{actions:n((()=>[u(s,{class:"card-actions flex py-[6px] justify-around",style:{"border-top":"1px solid var(--border_c)"}},{default:n((()=>[u(T,{plain:"",onClick:a=>(e=>{h("orderId",e.id),M({url:"/pages/orderDetail/orderInfo"})})(e)},{default:n((()=>[c("详情")])),_:2},1032,["onClick"]),e.isFinish?f("",!0):(l(),i(T,{key:0,plain:"",onClick:a=>(e=>{M({url:"/pages/orderDetail/index?id="+e.id+"&name="+e.orderName})})(e)},{default:n((()=>[c("修改")])),_:2},1032,["onClick"])),u(T,{plain:"",type:"warn",icon:"trash",iconColor:"#fa2c19",onClick:a=>(async e=>{Y({title:"提示",content:"是否删除",success:({confirm:a,cancel:t})=>{a&&F({id:e.id}).then((a=>{v({title:"删除成功"}),E.value=E.value.filter((a=>a.id!=e.id))}))}})})(e)},{default:n((()=>[c("删除")])),_:2},1032,["onClick"]),e.isFinish?f("",!0):(l(),i(T,{key:1,plain:"",onClick:a=>(async e=>{Y({title:"实收金额",content:e.totalMoney,editable:!0,placeholderText:"请输入实收金额",showCancel:!0,success:({confirm:a,cancel:t,content:s})=>{a&&b({id:e.id,actualMoney:s||0,isFinish:!0}).then((()=>{e.isFinish=!0,e.actualMoney=s||0,v({title:"成功",icon:"success",mask:!0})})).catch((()=>{v({title:"失败"})}))}})})(e)},{default:n((()=>[c("设为已完成")])),_:2},1032,["onClick"]))])),_:2},1024)])),default:n((()=>[e.isRead||e.isFinish?f("",!0):(l(),i(V,{key:0})),u(D,{text:e.isFinish?"已完成":"未完成",size:"normal",type:e.isFinish?"success":"error"},null,8,["text","type"]),e.isPack?(l(),i(D,{key:1,style:{"margin-left":"4px"},text:"打包",size:"normal",type:"primary"})):f("",!0),e.desk?(l(),i(D,{key:2,style:{"margin-left":"4px"},text:e.desk+"号桌",size:"normal"},null,8,["text"])):f("",!0),e.userOperation?(l(),i(D,{key:3,style:{"margin-left":"4px"},type:"primary",text:"自助下单"})):f("",!0),e.actualMoney&&e.isFinish?(l(),i(D,{key:4,style:{"margin-left":"4px"},type:"primary",text:"实收:"+e.actualMoney},null,8,["text"])):f("",!0)])),_:2},1032,["title","sub-title","extra"])))),128)),0===E.value.length?(l(),i(z,{key:0,text:"暂无数据"})):f("",!0)])),_:1})])),_:1})}}};export{H as default};
