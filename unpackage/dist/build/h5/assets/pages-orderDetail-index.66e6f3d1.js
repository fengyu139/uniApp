import{o as e,c as t,w as a,a as l,n as s,h as u,f as n,i,g as o,I as r,x as c,b as d,q as p,F as m,d as f,t as y,j as v,N as x,V as h,H as b,p as g,L as k,k as _,K as V,ao as C,u as D,M as w,a8 as q,ap as S,Y as N,s as j,aq as F}from"./index-42efb9d3.js";import{_ as O}from"./uni-easyinput.e18c9ad0.js";import{r as B,k as I,e as E,f as $,n as L,p as J,_ as M,o as U,m as A,c as T,b as H}from"./api.e8dc4ec0.js";import{a as z,_ as R,b as Y}from"./uni-popup.2ff68417.js";import{_ as K}from"./_plugin-vue_export-helper.1b428a4d.js";import{i as P}from"./imgErr.8cf36142.js";import{_ as G}from"./abEmpty.3bf38071.js";import{d as Q}from"./dayjs.min.8200664b.js";import{_ as W}from"./abMiniButton.34f7bb56.js";import{_ as X}from"./addRecords.b3ec1489.js";import{A as Z}from"./abRadio.f6fcffe2.js";import{s as ee}from"./globalStore.42b6bcf6.js";const te=K({name:"UniNumberBox",emits:["change","input","update:modelValue","blur","focus"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},background:{type:String,default:"#f5f5f5"},color:{type:String,default:"#333"},disabled:{type:Boolean,default:!1}},data:()=>({inputValue:0}),watch:{value(e){this.inputValue=+e},modelValue(e){this.inputValue=+e}},created(){1===this.value&&(this.inputValue=+this.modelValue),1===this.modelValue&&(this.inputValue=+this.value)},methods:{_calcValue(e){if(this.disabled)return;const t=this._getDecimalScale();let a=this.inputValue*t,l=this.step*t;if("minus"===e){if(a-=l,a<this.min*t)return;a>this.max*t&&(a=this.max*t)}if("plus"===e){if(a+=l,a>this.max*t)return;a<this.min*t&&(a=this.min*t)}this.inputValue=(a/t).toFixed(String(t).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)},_getDecimalScale(){let e=1;return~~this.step!==this.step&&(e=Math.pow(10,String(this.step).split(".")[1].length)),e},_onBlur(e){this.$emit("blur",e);let t=e.detail.value;if(isNaN(t))return void(this.inputValue=this.min);t=+t,t>this.max?t=this.max:t<this.min&&(t=this.min);const a=this._getDecimalScale();this.inputValue=t.toFixed(String(a).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)},_onFocus(e){this.$emit("focus",e)}}},[["render",function(c,d,p,m,f,y){const v=i,x=o,h=r;return e(),t(x,{class:"uni-numbox"},{default:a((()=>[l(x,{onClick:d[0]||(d[0]=e=>y._calcValue("minus")),class:"uni-numbox__minus uni-numbox-btns",style:s({background:p.background})},{default:a((()=>[l(v,{class:u(["uni-numbox--text",{"uni-numbox--disabled":f.inputValue<=p.min||p.disabled}]),style:s({color:p.color})},{default:a((()=>[n("-")])),_:1},8,["class","style"])])),_:1},8,["style"]),l(h,{disabled:p.disabled,onFocus:y._onFocus,onBlur:y._onBlur,class:"uni-numbox__value",type:"number",modelValue:f.inputValue,"onUpdate:modelValue":d[1]||(d[1]=e=>f.inputValue=e),style:s({background:p.background,color:p.color})},null,8,["disabled","onFocus","onBlur","modelValue","style"]),l(x,{onClick:d[2]||(d[2]=e=>y._calcValue("plus")),class:"uni-numbox__plus uni-numbox-btns",style:s({background:p.background})},{default:a((()=>[l(v,{class:u(["uni-numbox--text",{"uni-numbox--disabled":f.inputValue>=p.max||p.disabled}]),style:s({color:p.color})},{default:a((()=>[n("+")])),_:1},8,["class","style"])])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-2cc6f69d"]]),ae={__name:"abMenuList",props:{list:{type:Array,default:()=>[]},disabledBtn:{type:Boolean,default:!1}},setup:a=>(s,u)=>{const n=h,i=B(c("uni-number-box"),te);return e(),d(m,null,[p("ul",{class:"w-full"},[(e(!0),d(m,null,f(a.list,((t,s)=>(e(),d("li",{key:s,class:"flex p-[8px] mb-[12px] w-full mx-[12px] items-center",style:{"border-bottom":"1px solid var(--border_c)"}},[l(n,{src:t.picImg,onError:e=>(e=>{e.picImg=P})(t),onClick:e=>{var a;(a=t.picImg).includes("imgErr")||x({urls:[a]})},class:"w-[60px] h-[60px]"},null,8,["src","onError","onClick"]),p("div",{class:"ml-[10px]"},[p("p",null,y(t.name),1),p("p",null,[p("span",{class:"text-text3"},y(t.price.toFixed(2)),1),p("span",{class:"text-text2 text-12"},"/"+y(t.unit),1)]),l(i,{modelValue:t.count,"onUpdate:modelValue":e=>t.count=e,min:0,disabled:a.disabledBtn},null,8,["modelValue","onUpdate:modelValue","disabled"])])])))),128))]),a.list.length?v("",!0):(e(),t(G,{key:0,text:"暂无数据"}))],64)}},le={__name:"orderBottom",props:{list:{type:Array,default:()=>[]},isChange:{type:Boolean,default:!1},queryData:{type:Object,default:()=>{}},allList:{type:Array,default:()=>[]},backupData:{type:Array,default:()=>[]}},emits:["clear","updateClone","initOrder","setCloneData"],setup(s,{emit:u}){const i=s,r=C("btnStutas"),x=C("socket"),h=b((()=>{let e=i.list.reduce(((e,t)=>e+t.price*t.count),0);return parseFloat(e.toFixed(2))})),N=b((()=>i.list.reduce(((e,t)=>e+t.count),0))),j=async()=>{if(i.isChange){if(i.queryData.id){let e=[];i.list.forEach((t=>{const a=i.backupData.find((e=>e.id==t.id));if(t.count!=a.count){let l=JSON.parse(JSON.stringify(t));l.count=t.count-a.count,e.push(l)}})),await E({id:i.queryData.id,orderDetail:i.list,totalMoney:h.value,totalCount:N.value,recordsList:e.length?e:"",isAdmin:!0}),u("setCloneData")}else{let e=Q().format("HH:mm"),t=await $({orderName:e+"-"+i.queryData.desk+"号桌",isPack:!1,taste:Number(H.value),isFinish:!1,totalCount:N.value,totalMoney:h.value,orderDetail:i.list,actualMoney:0,desk:Number(i.queryData.desk)||"",userOperation:!0},!0);console.log(t),i.queryData.id=t.data,x.emit("message",{desk:i.queryData.desk,type:"submitted",orderId:t.data}),t.orderFlag&&(w("orderId",t.data),q({url:"/pages/orderDetail/orderInfo"})),T.value.close()}u("updateClone"),D({icon:"success",title:"已提交"})}else D({title:"没有更改，无需提交",icon:"none"})},F=g(null),O=g([]),U=async()=>{let e=await L({orderId:i.queryData.id||"234wert"});O.value=e,F.value.open()};I((()=>{i.isChange&&k({title:"提示",content:"订单未保存，是否保存",success:async({confirm:e,cancel:t})=>!e||(await j(),!0)})}));const A=()=>{k({title:"提示",content:"确定要清空所有选项吗",showCancel:!0,success:({confirm:e,cancel:t})=>{e&&(u("clear"),D({icon:"success"}))}})},T=g(null),H=g("1"),Y=async()=>{j()};let K=[];const P=g(!1),ee=()=>{D({title:"已重置菜单，请选择您要添加的菜品",icon:"none",mask:!1}),K=JSON.parse(JSON.stringify(i.allList)),r.value=!1,P.value=!0,u("clear")},te=async()=>{let e=i.list.filter((e=>e.count>0));await J({orderId:i.queryData.id,desk:i.queryData.desk,items:e,totalMoney:h.value,totalCount:N.value});let t="";e.forEach((e=>{t+=` ${e.name}  x ${e.count} \n`})),x.emit("message",{msg:t,desk:i.queryData.desk,type:"addFoods",orderId:i.queryData.id}),k({title:"提示",content:"提交成功，等待上菜吧",confirmText:"知道了",showCancel:!1}),r.value=!0,P.value=!1,u("initOrder")},ae=()=>{k({title:"提示",content:"是否放弃本次加菜",showCancel:!0,success:({confirm:e,cancel:t})=>{e&&(r.value=!0,P.value=!1,u("updateClone",K))}})},le=g(1),se=async()=>{k({title:"设置桌号",content:le.value,editable:!0,placeholderText:"请输入桌号",showCancel:!0,success:async({confirm:e,cancel:t,content:a})=>{e&&(await E({id:i.queryData.id,desk:Number(a)}),D({title:"成功",icon:"success",mask:!0}))}})};return x.on("message",(e=>{if(i.queryData.desk&&i.queryData.desk==e.desk){if("submitted"==e.type)return void k({title:"提示",content:"您的同桌已经提交了订单",showCancel:!1,confirmText:"知道了",success:()=>{u("initOrder")}});_()||k({title:"来自您同桌的加菜",content:e.msg,showCancel:!1,confirmText:"知道了",success:()=>{u("initOrder")}})}})),(u,i)=>{const x=B(c("uni-icons"),M),b=o,g=S,k=B(c("uni-popup"),z),C=B(c("uni-popup-dialog"),R);return e(),d("div",null,[p("div",{class:"h-[40px] flex items-center px-[10px]"},[p("span",{class:"flex items-center text-text3 text-16 font-bold"},[l(x,{type:"cart",color:"",size:"24",class:"mr-[2px]"}),n(" "+y(V(h).toFixed(2)),1)]),l(b,{class:"ml-auto mr-[10px]"},{default:a((()=>[l(W,{type:"warn",onClick:A,icon:"close"},{default:a((()=>[n("清空")])),_:1})])),_:1}),V(_)()?(e(),t(b,{key:0,class:"mr-[10px]"},{default:a((()=>[l(W,{onClick:se},{default:a((()=>[n("设置桌号")])),_:1})])),_:1})):v("",!0),l(b,{class:"mr-[10px]"},{default:a((()=>[l(W,{onClick:U},{default:a((()=>[n("查看明细")])),_:1})])),_:1}),s.queryData.desk&&V(r)?(e(),t(b,{key:1,class:"mr-[10px]"},{default:a((()=>[l(W,{onClick:ee},{default:a((()=>[n("我要加菜")])),_:1})])),_:1})):v("",!0),!V(r)&&P.value?(e(),t(b,{key:2,class:"mr-[10px]"},{default:a((()=>[l(W,{onClick:ae},{default:a((()=>[n("取消")])),_:1})])),_:1})):v("",!0),V(r)||!P.value||s.list.every((e=>0==e.count))?v("",!0):(e(),t(b,{key:3,class:"mr-[10px]"},{default:a((()=>[l(W,{type:"warn",icon:"plusempty",onClick:te},{default:a((()=>[n("选好了")])),_:1})])),_:1})),s.queryData.id&&!s.queryData.desk?(e(),t(b,{key:4,class:""},{default:a((()=>[l(W,{type:"warn",onClick:j},{default:a((()=>[n("提交")])),_:1})])),_:1})):v("",!0),s.queryData.id?v("",!0):(e(),t(b,{key:5,class:""},{default:a((()=>[l(W,{type:"warn",onClick:i[0]||(i[0]=e=>T.value.open())},{default:a((()=>[n("提交")])),_:1})])),_:1}))]),l(k,{ref_key:"popupOne",ref:F,type:"bottom"},{default:a((()=>[l(b,{class:"bg-bg3 p-[12px]"},{default:a((()=>[p("div",{class:"flex justify-center items-center px-[10px]"},[p("span",{class:"text-16 font-bold text-text2 ml-auto"},"订单汇总"),l(x,{class:"ml-auto",type:"closeempty",onClick:i[1]||(i[1]=e=>F.value.close()),color:"#ccc",size:"24"})]),l(g,{"scroll-y":"true",style:{"max-height":"80vh"}},{default:a((()=>[s.list.length?(e(),d("div",{key:0},[p("ul",null,[p("li",{class:"grid grid-cols-4 text-center py-[4px] font-bold"},[p("span",null,"名称"),p("span",null,"单价"),p("span",null,"数量"),p("span",null,"小记")]),(e(!0),d(m,null,f(s.list,(t=>(e(),d("li",{key:t.id,class:"grid grid-cols-4 text-center py-[4px]",style:{"border-bottom":"1px solid var(--border_c)"}},[p("span",null,y(t.name),1),p("span",null,y(t.price.toFixed(2)),1),p("span",null,y(t.count),1),p("span",{class:"text-text3"},y((t.price*t.count).toFixed(2)),1)])))),128))]),p("div",{class:"mt-[12px] flex justify-center"},[p("span",{class:"text-text3 font-bold mr-[10px]"},"总数量:"+y(V(N)),1),p("span",{class:"text-text3 font-bold"},"总计:"+y(V(h)),1)])])):(e(),t(G,{key:1,text:"暂无数据"})),O.value.length>1?(e(),t(X,{key:2,recordsList:O.value},null,8,["recordsList"])):v("",!0)])),_:1})])),_:1})])),_:1},512),l(k,{ref_key:"popupTwo",ref:T,type:"dialog"},{default:a((()=>[l(C,{title:"添加订单",duration:2e3,"before-close":!0,onClose:i[3]||(i[3]=e=>T.value.close()),onConfirm:Y},{default:a((()=>[p("div",{class:"w-full"},[l(Z,{modelValue:H.value,"onUpdate:modelValue":i[2]||(i[2]=e=>H.value=e),list:[{label:"正常辣",value:"1"},{label:"微辣",value:"2"},{label:"特辣",value:"3"}]},null,8,["modelValue"])])])),_:1})])),_:1},512)])}}},se=K({__name:"index",setup(i){const o=g([]),r=g({}),x=g(""),h=g(1),k=g(0);let _=g([]);const C=g({});U((async e=>{C.value=e;let t="欢迎点餐";(e.name||e.desk)&&(t=e.name||e.desk+"号桌"),N({title:t}),q()}));const D=g(!1);F("btnStutas",D);const w=b((()=>{var e;return(null==(e=r.value)?void 0:e.isFinish)||C.value.desk&&D.value})),q=async()=>{let e=await A({filter:!0});o.value=e,o.value.forEach((e=>{e.count=0})),_.value=o.value.map((e=>e.count));let t={};if(C.value.id?t={id:C.value.id}:C.value.desk&&(t={desk:C.value.desk,isFinish:!1}),Object.keys(t).length){let e=await T(t);if(!e.length)return;r.value=e[0],r.value.desk==C.value.desk&&(D.value=!0),C.value.id=r.value.id,o.value.forEach((e=>{e.count=0,r.value.orderDetail.forEach((t=>{e.id==t.id&&(e.count=t.count)}))})),_.value=o.value.map((e=>e.count)),E()}},I=g([]),E=()=>{I.value=JSON.parse(JSON.stringify(o.value))};H((async()=>{await q(),j()}));const $=b((()=>o.value.filter((e=>e.count)))),L=b((()=>JSON.stringify(_.value)!=JSON.stringify(o.value.map((e=>e.count))))),J=b((()=>{let e={};return ee.value.forEach((t=>{e[t.value]=o.value.filter((e=>e.type==t.value&&e.count)).reduce(((e,t)=>e+t.count),0)})),e})),M=()=>{o.value.forEach((e=>{e.count=0}))},R=e=>{console.log(e),e&&(o.value=e),_.value=o.value.map((e=>e.count))},K=()=>{P.value.open()},P=g(null);return(i,r)=>{const b=B(c("uni-easyinput"),O),g=B(c("uni-transition"),Y),_=S,D=B(c("uni-popup"),z);return e(),d(m,null,[p("div",{class:"p-[12px]"},[l(b,{clearable:"",prefixIcon:"search",confirmType:"搜索",modelValue:x.value,"onUpdate:modelValue":r[0]||(r[0]=e=>x.value=e),onBlur:K,placeholder:"请输入关键字"},null,8,["modelValue"])]),p("div",{class:"flex",style:{height:"calc(100% - 98px)"}},[p("div",{class:"h-full bg-bg1 w-1/3"},[p("ul",{class:"text-text2"},[(e(!0),d(m,null,f(V(ee),((t,a)=>(e(),d("li",{class:u(["text-center py-[8px] my-[4px] relative",{active:t.value==h.value}]),key:a,onClick:e=>{h.value=t.value,k.value=a}},[n(y(t.text)+" ",1),t.value==h.value?(e(),d("div",{key:0,class:"absolute left-[4px] top-[8px]"},[l(g,{"mode-class":"slide-bottom",styles:{width:"4px",height:"20px",backgroundColor:"red"},show:t.value==h.value,onChange:i.change},null,8,["show","onChange"])])):v("",!0),V(J)[t.value]?(e(),d("span",{key:1,class:"bg-bg2 text-text4 rounded-md text-12 px-[6px] absolute top-0 right-[2px] scale-[80%]"},y(V(J)[t.value]),1)):v("",!0)],10,["onClick"])))),128))])]),p("div",{class:"h-full overflow-hidden w-2/3"},[p("div",{class:"h-full scrollDom",style:s({transform:`translateY(-${100*k.value}%)`})},[(e(!0),d(m,null,f(V(ee),(s=>(e(),t(_,{"scroll-y":"true",class:"h-full",key:s.value},{default:a((()=>[l(ae,{list:o.value.filter((e=>e.type==s.value)),disabledBtn:V(w)},null,8,["list","disabledBtn"])])),_:2},1024)))),128))],4)])]),l(le,{list:V($),allList:o.value,backupData:I.value,isChange:V(L),queryData:C.value,onClear:M,onUpdateClone:R,onInitOrder:q,onSetCloneData:E},null,8,["list","allList","backupData","isChange","queryData"]),l(D,{ref_key:"popupOne",ref:P,type:"bottom"},{default:a((()=>[p("div",{class:"p-[12px] bg-bg3"},[l(ae,{list:o.value.filter((e=>e.name.includes(x.value))),disabledBtn:V(w)},null,8,["list","disabledBtn"])])])),_:1},512)],64)}}},[["__scopeId","data-v-21f277e1"]]);export{se as default};
