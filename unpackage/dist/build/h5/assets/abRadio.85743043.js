import{_ as a,r as e,i as l}from"./api.80ec7ebe.js";import{p as s,T as t,A as u,o as i,b as o,F as r,d as c,h as n,a as p,w as d,f as m,t as v,i as f}from"./index-a8ae8b9a.js";const x=a({__name:"abRadio",props:["list","modelValue"],emits:["update:modelValue"],setup(a,{emit:x}){const _=a,V=s(_.modelValue);t((()=>_.modelValue),(a=>{V.value=a}));return(s,t)=>{const _=e(u("uni-icons"),l),b=f;return i(),o("ul",{class:"flex justify-start p-0"},[(i(!0),o(r,null,c(a.list,(a=>(i(),o("li",{class:n(["flex items-center cursor-pointer mr-[8rpx]",{active:a.value===V.value}]),onClick:e=>(a=>{V.value=a.value,x("update:modelValue",a.value)})(a)},[p(_,{type:a.value===V.value?"circle-filled":"circle",color:"",size:"18"},null,8,["type"]),p(b,null,{default:d((()=>[m(v(a.label||a.text),1)])),_:2},1024)],10,["onClick"])))),256))])}}},[["__scopeId","data-v-1576bdf7"]]);export{x as A};