import{m as e,o as a,c as l,w as s,g as t,a as o,f as i,v as n,ak as r,al as u,a5 as m,a6 as f,A as c}from"./index-3ff257ef.js";import{_ as p}from"./uni-easyinput.1c711b19.js";import{F as d,v as _,r as y}from"./api.ef60e80a.js";import{_ as j,a as b}from"./uni-forms.efafced9.js";import{_ as k}from"./uni-file-picker.98b0da92.js";import{_ as x}from"./abButton.e3ce1e21.js";import"./uni-cloud.es.8cadfdb9.js";const V={__name:"addArticle",setup(V){const g=e({title:"",content:"",files:[]}),h=async()=>{if(!g.title)return void n({title:"请输入标题",icon:"none"});r({mask:!0});let e=0;for(const a of g.files)await F(e),e++;await d(g),u(),n({title:"添加成功",icon:"success",mask:!0}),m({delta:1})},w=e=>{console.log(e),g.files.push(e.tempFilePaths[0])},v=e=>{g.files.splice(e.index,1)},F=async e=>new Promise(((a,l)=>{f({url:`${_.baseUrl}/upload`,fileType:"all",filePath:g.files[e],name:"image",success:({data:l,statusCode:s})=>{g.files[e]=JSON.parse(l).data,console.log(g.files),a(JSON.parse(l))},fail:e=>{console.log(e),l(e)}})}));return(e,n)=>{const r=y(c("uni-easyinput"),p),u=y(c("uni-forms-item"),j),m=y(c("uni-file-picker"),k),f=y(c("uni-forms"),b),d=t;return a(),l(d,{class:"p-[16px]"},{default:s((()=>[o(f,{ref:"myForm"},{default:s((()=>[o(u,{required:"",label:"标题:"},{default:s((()=>[o(r,{clearable:"",modelValue:g.title,"onUpdate:modelValue":n[0]||(n[0]=e=>g.title=e),type:"text",placeholder:"请输入标题"},null,8,["modelValue"])])),_:1}),o(u,{label:"内容:"},{default:s((()=>[o(r,{clearable:"",modelValue:g.content,"onUpdate:modelValue":n[1]||(n[1]=e=>g.content=e),type:"text",placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),o(u,{label:"附件:"},{default:s((()=>[o(m,{onSelect:w,onDelete:v,"file-mediatype":"all"})])),_:1})])),_:1},512),o(x,{onClick:h,icon:"plusempty"},{default:s((()=>[i("提 交")])),_:1})])),_:1})}}};export{V as default};
