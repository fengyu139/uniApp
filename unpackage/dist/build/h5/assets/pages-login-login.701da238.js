import{A as e,o as t,c as s,w as a,f as l,t as i,b as o,F as d,h as c,d as n,n as r,a as u,j as h,i as m,g as p,a1 as f,a2 as g,a3 as y,a4 as x,a5 as b,m as v,a6 as k,p as _,q as D,M as C,a7 as S,a8 as V,a9 as L,x as w}from"./index-1471b431.js";import{_ as T}from"./uni-easyinput.0df8cc6a.js";import{l as I,r as N}from"./api.cb3f3bbb.js";import{B as $,_ as B,a as E}from"./uni-forms.904d7675.js";import{_ as F}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as R}from"./abButton.9805d407.js";const j=F({name:"uniDataChecklist",mixins:[$.mixinDatacom||{}],emits:["input","update:modelValue","change"],props:{mode:{type:String,default:"default"},multiple:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:()=>""},modelValue:{type:[Array,String,Number],default:()=>""},localdata:{type:Array,default:()=>[]},min:{type:[Number,String],default:""},max:{type:[Number,String],default:""},wrap:{type:Boolean,default:!1},icon:{type:String,default:"left"},selectedColor:{type:String,default:""},selectedTextColor:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},disabled:{type:Boolean,default:!1},map:{type:Object,default:()=>({text:"text",value:"value"})}},watch:{localdata:{handler(e){this.range=e,this.dataList=this.getDataList(this.getSelectedValue(e))},deep:!0},mixinDatacomResData(e){this.range=e,this.dataList=this.getDataList(this.getSelectedValue(e))},value(e){this.dataList=this.getDataList(e)},modelValue(e){this.dataList=this.getDataList(e)}},data:()=>({dataList:[],range:[],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"},isLocal:!0,styles:{selectedColor:"#2979ff",selectedTextColor:"#666"},isTop:0}),computed:{dataValue(){return""===this.value?this.modelValue:(this.modelValue,this.value)}},created(){this.localdata&&0!==this.localdata.length?(this.isLocal=!0,this.range=this.localdata,this.dataList=this.getDataList(this.getSelectedValue(this.range))):this.collection&&(this.isLocal=!1,this.loadData())},methods:{loadData(){this.mixinDatacomGet().then((e=>{this.mixinDatacomResData=e.result.data,0===this.mixinDatacomResData.length?(this.isLocal=!1,this.mixinDatacomErrorMessage=this.emptyText):this.isLocal=!0})).catch((e=>{this.mixinDatacomErrorMessage=e.message}))},getForm(e="uniForms"){let t=this.$parent,s=t.$options.name;for(;s!==e;){if(t=t.$parent,!t)return!1;s=t.$options.name}return t},chagne(e){const t=e.detail.value;let s={value:[],data:[]};if(this.multiple)this.range.forEach((e=>{t.includes(e[this.map.value]+"")&&(s.value.push(e[this.map.value]),s.data.push(e))}));else{const e=this.range.find((e=>e[this.map.value]+""===t));e&&(s={value:e[this.map.value],data:e})}this.$emit("input",s.value),this.$emit("update:modelValue",s.value),this.$emit("change",{detail:s}),this.multiple?this.dataList=this.getDataList(s.value,!0):this.dataList=this.getDataList(s.value)},getDataList(e){let t=JSON.parse(JSON.stringify(this.range)),s=[];return this.multiple&&(Array.isArray(e)||(e=[])),t.forEach(((t,a)=>{if(t.disabled=t.disable||t.disabled||!1,this.multiple)if(e.length>0){let s=e.find((e=>e===t[this.map.value]));t.selected=void 0!==s}else t.selected=!1;else t.selected=e===t[this.map.value];s.push(t)})),this.setRange(s)},setRange(e){let t=e.filter((e=>e.selected)),s=Number(this.min)||0,a=Number(this.max)||"";return e.forEach(((l,i)=>{if(this.multiple){if(t.length<=s){void 0!==t.find((e=>e[this.map.value]===l[this.map.value]))&&(l.disabled=!0)}if(t.length>=a&&""!==a){void 0===t.find((e=>e[this.map.value]===l[this.map.value]))&&(l.disabled=!0)}}this.setStyles(l,i),e[i]=l})),e},setStyles(e,t){e.styleBackgroud=this.setStyleBackgroud(e),e.styleIcon=this.setStyleIcon(e),e.styleIconText=this.setStyleIconText(e),e.styleRightIcon=this.setStyleRightIcon(e)},getSelectedValue(e){if(!this.multiple)return this.dataValue;let t=[];return e.forEach((e=>{e.selected&&t.push(e[this.map.value])})),this.dataValue.length>0?this.dataValue:t},setStyleBackgroud(e){let t={},s=this.selectedColor?this.selectedColor:"#2979ff";this.selectedColor&&("list"!==this.mode&&(t["border-color"]=e.selected?s:"#DCDFE6"),"tag"===this.mode&&(t["background-color"]=e.selected?s:"#f5f5f5"));let a="";for(let l in t)a+=`${l}:${t[l]};`;return a},setStyleIcon(e){let t={},s="";if(this.selectedColor){let s=this.selectedColor?this.selectedColor:"#2979ff";t["background-color"]=e.selected?s:"#fff",t["border-color"]=e.selected?s:"#DCDFE6",!e.selected&&e.disabled&&(t["background-color"]="#F2F6FC",t["border-color"]=e.selected?s:"#DCDFE6")}for(let a in t)s+=`${a}:${t[a]};`;return s},setStyleIconText(e){let t={},s="";if(this.selectedColor){let s=this.selectedColor?this.selectedColor:"#2979ff";"tag"===this.mode?t.color=e.selected?this.selectedTextColor?this.selectedTextColor:"#fff":"#666":t.color=e.selected?this.selectedTextColor?this.selectedTextColor:s:"#666",!e.selected&&e.disabled&&(t.color="#999")}for(let a in t)s+=`${a}:${t[a]};`;return s},setStyleRightIcon(e){let t={},s="";"list"===this.mode&&(t["border-color"]=e.selected?this.styles.selectedColor:"#DCDFE6");for(let a in t)s+=`${a}:${t[a]};`;return s}}},[["render",function(v,k,_,D,C,S){const V=e("uni-load-more"),L=m,w=p,T=f,I=g,N=y,$=x,B=b;return t(),s(w,{class:"uni-data-checklist",style:r({"margin-top":C.isTop+"px"})},{default:a((()=>[C.isLocal?(t(),o(d,{key:1},[_.multiple?(t(),s(N,{key:0,class:c(["checklist-group",{"is-list":"list"===_.mode||_.wrap}]),onChange:S.chagne},{default:a((()=>[(t(!0),o(d,null,n(C.dataList,((e,o)=>(t(),s(I,{class:c(["checklist-box",["is--"+_.mode,e.selected?"is-checked":"",_.disabled||e.disabled?"is-disable":"",0!==o&&"list"===_.mode?"is-list-border":""]]),style:r(e.styleBackgroud),key:o},{default:a((()=>[u(T,{class:"hidden",hidden:"",disabled:_.disabled||!!e.disabled,value:e[_.map.value]+"",checked:e.selected},null,8,["disabled","value","checked"]),"tag"!==_.mode&&"list"!==_.mode||"list"===_.mode&&"left"===_.icon?(t(),s(w,{key:0,class:"checkbox__inner",style:r(e.styleIcon)},{default:a((()=>[u(w,{class:"checkbox__inner-icon"})])),_:2},1032,["style"])):h("",!0),u(w,{class:c(["checklist-content",{"list-content":"list"===_.mode&&"left"===_.icon}])},{default:a((()=>[u(L,{class:"checklist-text",style:r(e.styleIconText)},{default:a((()=>[l(i(e[_.map.text]),1)])),_:2},1032,["style"]),"list"===_.mode&&"right"===_.icon?(t(),s(w,{key:0,class:"checkobx__list",style:r(e.styleBackgroud)},null,8,["style"])):h("",!0)])),_:2},1032,["class"])])),_:2},1032,["class","style"])))),128))])),_:1},8,["class","onChange"])):(t(),s(B,{key:1,class:c(["checklist-group",{"is-list":"list"===_.mode,"is-wrap":_.wrap}]),onChange:S.chagne},{default:a((()=>[(t(!0),o(d,null,n(C.dataList,((e,o)=>(t(),s(I,{class:c(["checklist-box",["is--"+_.mode,e.selected?"is-checked":"",_.disabled||e.disabled?"is-disable":"",0!==o&&"list"===_.mode?"is-list-border":""]]),style:r(e.styleBackgroud),key:o},{default:a((()=>[u($,{class:"hidden",hidden:"",disabled:_.disabled||e.disabled,value:e[_.map.value]+"",checked:e.selected},null,8,["disabled","value","checked"]),"tag"!==_.mode&&"list"!==_.mode||"list"===_.mode&&"left"===_.icon?(t(),s(w,{key:0,class:"radio__inner",style:r(e.styleBackgroud)},{default:a((()=>[u(w,{class:"radio__inner-icon",style:r(e.styleIcon)},null,8,["style"])])),_:2},1032,["style"])):h("",!0),u(w,{class:c(["checklist-content",{"list-content":"list"===_.mode&&"left"===_.icon}])},{default:a((()=>[u(L,{class:"checklist-text",style:r(e.styleIconText)},{default:a((()=>[l(i(e[_.map.text]),1)])),_:2},1032,["style"]),"list"===_.mode&&"right"===_.icon?(t(),s(w,{key:0,style:r(e.styleRightIcon),class:"checkobx__list"},null,8,["style"])):h("",!0)])),_:2},1032,["class"])])),_:2},1032,["class","style"])))),128))])),_:1},8,["class","onChange"]))],64)):(t(),s(w,{key:0,class:"uni-data-loading"},{default:a((()=>[v.mixinDatacomErrorMessage?(t(),s(L,{key:1},{default:a((()=>[l(i(v.mixinDatacomErrorMessage),1)])),_:1})):(t(),s(V,{key:0,status:"loading",iconType:"snow",iconSize:18,"content-text":C.contentText},null,8,["content-text"]))])),_:1}))])),_:1},8,["style"])}],["__scopeId","data-v-61fae022"]]),M={__name:"login",setup(e){const s=v({userName:"",password:""}),i=k("userInfo");console.log(i);const c=_(""),n=[{text:"记住密码",value:"1"}];i.userName&&i.password&&(s.userName=i.userName,s.password=i.password,c.value=["1"]);const r=_(null),h=()=>{r.value.validate().then((async e=>{let t=await I(s);c.value.length?(C("userInfo",s),S(t),V({url:"/pages/index/index",animationType:"pop-in",animationDuration:200}),uni):L("userInfo")}))},m={userName:{rules:[{required:!0,errorMessage:"请填写用户名"}]},password:{rules:[{required:!0,errorMessage:"请填写密码"}]}};return(e,i)=>{const p=N(w("uni-easyinput"),T),f=N(w("uni-forms-item"),B),g=N(w("uni-forms"),E),y=N(w("uni-data-checkbox"),j);return t(),o(d,null,[D("div",null,[D("img",{src:"/assets/logo-7ffc005d.png",alt:"",class:"w-full",srcset:""}),D("p",{class:"text-center text-text3"},"请登录")]),D("div",{class:"p-[12px]"},[u(g,{modelValue:s,ref_key:"loginForm",ref:r,rules:m},{default:a((()=>[u(f,{label:"用户名:",name:"userName"},{default:a((()=>[u(p,{type:"text",modelValue:s.userName,"onUpdate:modelValue":i[0]||(i[0]=e=>s.userName=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),u(f,{label:"密码:",name:"password"},{default:a((()=>[u(p,{type:"password",modelValue:s.password,"onUpdate:modelValue":i[1]||(i[1]=e=>s.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),D("div",{class:"mb-[12px]"},[u(y,{multiple:"",modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=e=>c.value=e),localdata:n},null,8,["modelValue"])]),u(R,{icon:"auth",onClick:h},{default:a((()=>[l("登 录")])),_:1})])],64)}}};export{M as default};