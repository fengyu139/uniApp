"use strict";const e=require("../../common/vendor.js"),u=require("../../utils/api.js"),a=require("../../store/globalStore.js");if(require("../../utils/request.js"),require("../../utils/auth.js"),require("../../utils/env.js"),!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-transition")+e.resolveComponent("uni-popup"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-transition/components/uni-transition/uni-transition.js")+l+t+(()=>"../../uni_modules/uni-popup/components/uni-popup/uni-popup.js"))();const l=()=>"./abMenuList.js",t=()=>"./orderBottom.js",n={__name:"index",setup(l){const t=e.ref([]),n=e.ref({}),o=e.ref(""),i=e.ref(1),s=e.ref(0);let r=e.ref([]);const v=e.ref({});e.onLoad((async u=>{v.value=u;let a="欢迎点餐";(u.name||u.desk)&&(a=u.name||u.desk+"号桌"),e.index.setNavigationBarTitle({title:a}),d()}));const c=e.ref(!1);e.provide("btnStutas",c);const p=e.computed((()=>{var e;return(null==(e=n.value)?void 0:e.isFinish)||v.value.desk&&c.value})),d=async()=>{let e=await u.menuApi({filter:!0});t.value=e,t.value.forEach((e=>{e.count=0})),r.value=t.value.map((e=>e.count));let a={};if(v.value.id?a={id:v.value.id}:v.value.desk&&(a={desk:v.value.desk,isFinish:!1}),Object.keys(a).length){let e=await u.orderApi(a);if(!e.length)return;n.value=e[0],n.value.desk==v.value.desk&&(c.value=!0),v.value.id=n.value.id,t.value.forEach((e=>{e.count=0,n.value.orderDetail.forEach((u=>{e.id==u.id&&(e.count=u.count)}))})),r.value=t.value.map((e=>e.count)),m()}},f=e.ref([]),m=()=>{f.value=JSON.parse(JSON.stringify(t.value))};e.onPullDownRefresh((async()=>{await d(),e.index.stopPullDownRefresh()}));const h=e.computed((()=>t.value.filter((e=>e.count)))),b=e.computed((()=>JSON.stringify(r.value)!=JSON.stringify(t.value.map((e=>e.count))))),y=e.computed((()=>{let e={};return a.selectList.value.forEach((u=>{e[u.value]=t.value.filter((e=>e.type==u.value&&e.count)).reduce(((e,u)=>e+Number(u.count)),0)})),e})),g=()=>{t.value.forEach((e=>{e.count=0}))},j=e=>{console.log(e),e&&(t.value=e),r.value=t.value.map((e=>e.count))},k=()=>{q.value.open()},q=e.ref(null);return(u,l)=>({a:e.o(k),b:e.o((e=>o.value=e)),c:e.p({clearable:!0,prefixIcon:"search",confirmType:"搜索",placeholder:"请输入关键字",modelValue:o.value}),d:e.f(e.unref(a.selectList),((a,l,t)=>e.e({a:e.t(a.text),b:a.value==i.value},a.value==i.value?{c:e.o(u.change,l),d:"c2a80eb0-1-"+t,e:e.p({"mode-class":"slide-bottom",styles:{width:"4px",height:"20px",backgroundColor:"red"},show:a.value==i.value})}:{},{f:e.unref(y)[a.value]},e.unref(y)[a.value]?{g:e.t(e.unref(y)[a.value])}:{},{h:a.value==i.value?1:"",i:l,j:e.o((e=>{i.value=a.value,s.value=l}),l)}))),e:e.f(e.unref(a.selectList),((u,a,l)=>({a:"c2a80eb0-2-"+l,b:e.p({list:t.value.filter((e=>e.type==u.value)),disabledBtn:e.unref(p)}),c:u.value}))),f:`translateY(-${100*s.value}%)`,g:e.o(g),h:e.o(j),i:e.o(d),j:e.o(m),k:e.p({list:e.unref(h),allList:t.value,backupData:f.value,isChange:e.unref(b),queryData:v.value}),l:e.p({list:t.value.filter((e=>e.name.includes(o.value?o.value:"qwe12323sdss"))),disabledBtn:e.unref(p)}),m:e.sr(q,"c2a80eb0-4",{k:"popupOne"}),n:e.p({type:"bottom"})})}},o=e._export_sfc(n,[["__scopeId","data-v-c2a80eb0"]]);wx.createPage(o);