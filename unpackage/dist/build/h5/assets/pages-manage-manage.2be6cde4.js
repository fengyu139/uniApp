import{p as a,m as e,C as s,E as t,s as l,$ as i,v as n,o as u,b as c,q as o,a as r,w as m,y as p,g as d,f,F as v,d as y,c as b,e as g,D as _,G as j,A as k,u as x,H as C,I as h}from"./index-db00d276.js";import{_ as w}from"./uni-card.ae221b32.js";import{b as L,m as I,r as M,j as V}from"./api.f9490d4f.js";import{s as $}from"./globalStore.6bd8da85.js";import{_ as B}from"./abMiniButton.cc38c446.js";import{_ as D}from"./abButton.9853ef01.js";import{_ as E}from"./abPicker.9c3b65ea.js";import{i as S}from"./imgErr.8cf36142.js";const q={__name:"manage",setup(q){const A=a(0),F=e([{text:"全部",value:0},...$.value]),G=a([]);s((async()=>{(async()=>{let a={};A.value&&(a.type=A.value);let e=await I(a);G.value=e,"{}"==JSON.stringify(a)&&t("menuList",e),l()})()}));L((async()=>{A.value=0;let a=await I({type:A.value});G.value=a,t("menuList",a),l()}));const H=()=>{p({url:"/pages/manage/addMenu"})};i("changeMenu",(a=>{A.value=0,I({type:A.value}).then((a=>{G.value=a,t("menuList",a)})),n({title:"成功",icon:"success",mask:!0})}));return(a,e)=>{const s=d,l=M(k("uni-card"),w);return u(),c("div",{class:""},[o("div",{class:"p-[13px] flex justify-between items-center"},[r(E,{class:"w-3/5",modelValue:A.value,"onUpdate:modelValue":e[0]||(e[0]=a=>A.value=a),selectList:F,label:"选择分类"},null,8,["modelValue","selectList"]),r(D,{onClick:H,class:"w-1/3",icon:"plus"},{default:m((()=>[f("新增")])),_:1})]),r(s,null,{default:m((()=>[(u(!0),c(v,null,y(G.value,(a=>(u(),b(l,{title:a.name,thumbnail:a.picImg||_(S),"sub-title":F.find((e=>e.value==a.type)).text,extra:`价格：${a.price}`,onClick:e=>{return s=e,t=a.picImg,void("title"==s&&j({urls:[t],success:a=>{},fail:a=>{}}));var s,t}},{default:m((()=>[r(s,{class:"card-actions flex py-[6px] justify-around"},{default:m((()=>[r(B,{plain:"",onClick:g((e=>(a=>{C().globalData.menuItem=a,p({url:"/pages/manage/addMenu",success:e=>{setTimeout((()=>{h("menuItem",a)}),200)}})})(a)),["stop"])},{default:m((()=>[f("修改")])),_:2},1032,["onClick"]),r(B,{plain:"",type:"warn",icon:"trash",iconColor:"#fa2c19",onClick:g((e=>(async a=>{x({title:"提示",content:`确定删除${a.name}吗？`,showCancel:!0,success:({confirm:e,cancel:s})=>{e&&V({id:a.id}).then((e=>{n({title:"删除成功"}),G.value=G.value.filter((e=>e.id!=a.id)),t("menuList",G.value)})).catch((a=>{n({title:"删除失败"+a})}))}})})(a)),["stop"])},{default:m((()=>[f("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["title","thumbnail","sub-title","extra","onClick"])))),256))])),_:1})])}}};export{q as default};