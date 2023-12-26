import{R as e,S as t,T as l,u as s,U as i,N as a,o,c as r,w as n,b as u,F as d,d as p,n as c,a as h,e as f,j as m,f as y,r as g,V as b,g as F,W as x,h as _,t as v,A as k,i as w,X as P,p as I,$ as S,Y as T,Z as $,K as V,_ as M,x as C,a0 as L}from"./index-42efb9d3.js";import{_ as O}from"./uni-easyinput.e18c9ad0.js";import{u as j,i as E,r as U,j as B}from"./api.e8dc4ec0.js";import{B as A,_ as D,a as z}from"./uni-forms.040784fb.js";import{_ as N}from"./_plugin-vue_export-helper.1b428a4d.js";import{s as R}from"./globalStore.42b6bcf6.js";import{A as J}from"./abRadio.f6fcffe2.js";import{_ as q}from"./abPicker.d07c6321.js";import{_ as H}from"./abButton.712ead7f.js";const K="chooseAndUploadFile:fail";function W(e,t){return e.tempFiles.forEach(((e,l)=>{e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+l+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((e=>e.path))),e}function X(e,t=5,l){const s=(e=JSON.parse(JSON.stringify(e))).length;let i=0,a=this;return new Promise((o=>{for(;i<t;)r();function r(){let t=i++;if(t>=s)return void(!e.find((e=>!e.url&&!e.errMsg))&&o(e));const n=e[t],u=a.files.findIndex((e=>e.uuid===n.uuid));n.url="",delete n.errMsg,A.uploadFile({filePath:n.path,cloudPath:n.cloudPath,fileType:n.fileType,onUploadProgress:e=>{e.index=u,l&&l(e)}}).then((e=>{n.url=e.fileID,n.index=u,t<s&&r()})).catch((e=>{n.errMsg=e.errMsg||e.message,n.index=u,t<s&&r()}))}}))}function Y(e,{onChooseFile:t,onUploadProgress:l}){return e.then((e=>{if(t){const l=t(e);if(void 0!==l)return Promise.resolve(l).then((t=>void 0===t?e:t))}return e})).then((e=>!1===e?{errMsg:"chooseAndUploadFile:ok",tempFilePaths:[],tempFiles:[]}:e))}function Z(s={type:"all"}){return"image"===s.type?Y(function(t){const{count:l,sizeType:s=["original","compressed"],sourceType:i,extension:a}=t;return new Promise(((t,o)=>{e({count:l,sizeType:s,sourceType:i,extension:a,success(e){t(W(e,"image"))},fail(e){o({errMsg:e.errMsg.replace("chooseImage:fail",K)})}})}))}(s),s):"video"===s.type?Y(function(e){const{camera:l,compressed:s,maxDuration:i,sourceType:a,extension:o}=e;return new Promise(((e,r)=>{t({camera:l,compressed:s,maxDuration:i,sourceType:a,extension:o,success(t){const{tempFilePath:l,duration:s,size:i,height:a,width:o}=t;e(W({errMsg:"chooseVideo:ok",tempFilePaths:[l],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:l,size:i,type:t.tempFile&&t.tempFile.type||"",width:o,height:a,duration:s,fileType:"video",cloudPath:""}]},"video"))},fail(e){r({errMsg:e.errMsg.replace("chooseVideo:fail",K)})}})}))}(s),s):Y(function(e){const{count:t,extension:s}=e;return new Promise(((e,i)=>{let a=l;if("undefined"!=typeof wx&&"function"==typeof wx.chooseMessageFile&&(a=wx.chooseMessageFile),"function"!=typeof a)return i({errMsg:K+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});a({type:"all",count:t,extension:s,success(t){e(W(t))},fail(e){i({errMsg:e.errMsg.replace("chooseFile:fail",K)})}})}))}(s),s)}const G=e=>{const t=e.lastIndexOf("."),l=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,l)}},Q=e=>{if(Array.isArray(e))return e;return e.replace(/(\[|\])/g,"").split(",")},ee=async(e,t="image")=>{const l=G(e.name).ext.toLowerCase();let s={name:e.name,uuid:e.uuid,extname:l||"",cloudPath:e.cloudPath,fileType:e.fileType,url:e.path||e.path,size:e.size,image:{},path:e.path,video:{}};if("image"===t){const t=await(a=e.path,new Promise(((e,t)=>{i({src:a,success(t){e(t)},fail(e){t(e)}})})));delete s.video,s.image.width=t.width,s.image.height=t.height,s.image.location=t.path}else delete s.image;var a;return s};const te=N({name:"uniFilePicker",components:{uploadImage:N({name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto",border:{}})},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles(){return Object.assign({width:"auto",height:"auto",border:{}},this.imageStyles)},boxStyle(){const{width:e="auto",height:t="auto"}=this.styles;let l={};"auto"===t?"auto"!==e?(l.height=this.value2px(e),l["padding-top"]=0):l.height=0:(l.height=this.value2px(t),l["padding-top"]=0),l.width="auto"===e?"auto"!==t?this.value2px(t):"33.3%":this.value2px(e);let s="";for(let i in l)s+=`${i}:${l[i]};`;return s},borderStyle(){let{border:e}=this.styles,t={};if("boolean"==typeof e)t.border=e?"1px #eee solid":"none";else{let l=e&&e.width||1;l=this.value2px(l);let s=e&&e.radius||3;s=this.value2px(s),t={"border-width":l,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":s}}let l="";for(let s in t)l+=`${s}:${t[s]};`;return l}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",e)},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},prviewImage(e,t){let l=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((e=>{l.push(e.url)})),a({urls:l,current:t}))},value2px:e=>("number"==typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e)}},[["render",function(e,t,l,s,i,a){const _=b,v=F,k=x;return o(),r(v,{class:"uni-file-picker__container"},{default:n((()=>[(o(!0),u(d,null,p(l.filesList,((e,t)=>(o(),r(v,{class:"file-picker__box",key:t,style:c(a.boxStyle)},{default:n((()=>[h(v,{class:"file-picker__box-content",style:c(a.borderStyle)},{default:n((()=>[h(_,{class:"file-image",src:e.url,mode:"aspectFill",onClick:f((l=>a.prviewImage(e,t)),["stop"])},null,8,["src","onClick"]),l.delIcon&&!l.readonly?(o(),r(v,{key:0,class:"icon-del-box",onClick:f((e=>a.delFile(t)),["stop"])},{default:n((()=>[h(v,{class:"icon-del"}),h(v,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):m("",!0),e.progress&&100!==e.progress||0===e.progress?(o(),r(v,{key:1,class:"file-picker__progress"},{default:n((()=>[h(k,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):m("",!0),e.errMsg?(o(),r(v,{key:2,class:"file-picker__mask",onClick:f((l=>a.uploadFiles(e,t)),["stop"])},{default:n((()=>[y(" 点击重试 ")])),_:2},1032,["onClick"])):m("",!0)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128)),l.filesList.length<l.limit&&!l.readonly?(o(),r(v,{key:0,class:"file-picker__box",style:c(a.boxStyle)},{default:n((()=>[h(v,{class:"file-picker__box-content is-add",style:c(a.borderStyle),onClick:a.choose},{default:n((()=>[g(e.$slots,"default",{},(()=>[h(v,{class:"icon-add"}),h(v,{class:"icon-add rotate"})]),!0)])),_:3},8,["style","onClick"])])),_:3},8,["style"])):m("",!0)])),_:3})}],["__scopeId","data-v-8932add5"]]),uploadFile:N({name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},readonly:{type:Boolean,default:!1}},computed:{list(){let e=[];return this.filesList.forEach((t=>{e.push(t)})),e},styles(){return Object.assign({border:!0,dividline:!0,"border-style":{}},this.listStyles)},borderStyle(){let{borderStyle:e,border:t}=this.styles,l={};if(t){let t=e&&e.width||1;t=this.value2px(t);let s=e&&e.radius||5;s=this.value2px(s),l={"border-width":t,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":s}}else l.border="none";let s="";for(let i in l)s+=`${i}:${l[i]};`;return s},borderLineStyle(){let e={},{borderStyle:t}=this.styles;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){let l=t&&t.width||1,s=t&&t.style||0;"number"==typeof l?l+="px":l=l.indexOf("px")?l:l+"px",e["border-width"]=l,"number"==typeof s?s+="px":s=s.indexOf("px")?s:s+"px",e["border-top-style"]=s}let l="";for(let s in e)l+=`${s}:${e[s]};`;return l}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},value2px:e=>("number"==typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e)}},[["render",function(e,t,l,s,i,a){const b=F,k=x;return o(),r(b,{class:"uni-file-picker__files"},{default:n((()=>[l.readonly?m("",!0):(o(),r(b,{key:0,class:"files-button",onClick:a.choose},{default:n((()=>[g(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])),a.list.length>0?(o(),r(b,{key:1,class:"uni-file-picker__lists is-text-box",style:c(a.borderStyle)},{default:n((()=>[(o(!0),u(d,null,p(a.list,((e,t)=>(o(),r(b,{class:_(["uni-file-picker__lists-box",{"files-border":0!==t&&a.styles.dividline}]),key:t,style:c(0!==t&&a.styles.dividline&&a.borderLineStyle)},{default:n((()=>[h(b,{class:"uni-file-picker__item"},{default:n((()=>[h(b,{class:"files__name"},{default:n((()=>[y(v(e.name),1)])),_:2},1024),l.delIcon&&!l.readonly?(o(),r(b,{key:0,class:"icon-del-box icon-files",onClick:e=>a.delFile(t)},{default:n((()=>[h(b,{class:"icon-del icon-files"}),h(b,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):m("",!0)])),_:2},1024),e.progress&&100!==e.progress||0===e.progress?(o(),r(b,{key:0,class:"file-picker__progress"},{default:n((()=>[h(k,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):m("",!0),"error"===e.status?(o(),r(b,{key:1,class:"file-picker__mask",onClick:f((l=>a.uploadFiles(e,t)),["stop"])},{default:n((()=>[y(" 点击重试 ")])),_:2},1032,["onClick"])):m("",!0)])),_:2},1032,["class","style"])))),128))])),_:1},8,["style"])):m("",!0)])),_:3})}],["__scopeId","data-v-1c7ab6c7"]])},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{modelValue:{type:[Array,Object],default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:()=>[]},title:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto"})},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:()=>["original","compressed"]},sourceType:{type:Array,default:()=>["album","camera"]}},data:()=>({files:[],localValue:[]}),watch:{modelValue:{handler(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList(){let e=[];return this.files.forEach((t=>{e.push(t)})),e},showType(){return"image"===this.fileMediatype?this.mode:"list"},limitLength(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created(){A.config&&A.config.provider||(this.noSpace=!0,A.chooseAndUploadFile=Z),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles(e){0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((()=>{this.setEmit()}))),this.$nextTick((()=>{this.setEmit()}))},upload(){let e=[];return this.files.forEach(((t,l)=>{"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},async setValue(e,t){const l=async e=>{let t="";return t=e.fileID?e.fileID:e.url,/cloud:\/\/([\w.]+\/?)\S*/.test(t)&&(e.fileID=t,e.url=await this.getTempFileURL(t)),e.url&&(e.path=e.url),e};if("object"===this.returnType)e?await l(e):e={};else{e||(e=[]);for(let t=0;t<e.length;t++){let s=e[t];await l(s)}}this.localValue=e,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(this.localValue));let s=Object.keys(e).length>0?e:[];this.files=[].concat(s)},choose(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?s({title:`您最多选择 ${this.limitLength} 个文件`,icon:"none"}):this.chooseFiles())},chooseFiles(){const e=Q(this.fileExtname);A.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,sourceType:this.sourceType,extension:e.length>0?e:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:e=>{this.setProgress(e,e.index)}}).then((e=>{this.setSuccessAndError(e.tempFiles)})).catch((e=>{console.log("选择失败",e)}))},async chooseFileCallback(e){const t=Q(this.fileExtname);(1===Number(this.limitLength)&&this.disablePreview&&!this.disabled||"object"===this.returnType)&&(this.files=[]);let{filePaths:l,files:i}=((e,t)=>{let l=[],i=[];return t&&0!==t.length?(e.tempFiles.forEach((e=>{const s=G(e.name).ext.toLowerCase();-1!==t.indexOf(s)&&(i.push(e),l.push(e.path))})),i.length!==e.tempFiles.length&&s({title:`当前选择了${e.tempFiles.length}个文件 ，${e.tempFiles.length-i.length} 个文件格式不正确`,icon:"none",duration:5e3}),{filePaths:l,files:i}):{filePaths:l,files:i}})(e,t);t&&t.length>0||(l=e.tempFilePaths,i=e.tempFiles);let a=[];for(let s=0;s<i.length&&!(this.limitLength-this.files.length<=0);s++){i[s].uuid=Date.now();let e=await ee(i[s],this.fileMediatype);e.progress=0,e.status="ready",this.files.push(e),a.push({...e,file:i[s]})}this.$emit("select",{tempFiles:a,tempFilePaths:l}),e.tempFiles=i,this.autoUpload&&!this.noSpace||(e.tempFiles=[])},uploadFiles(e){return e=[].concat(e),X.call(this,e,5,(e=>{this.setProgress(e,e.index,!0)})).then((e=>(this.setSuccessAndError(e),e))).catch((e=>{console.log(e)}))},async setSuccessAndError(e,t){let l=[],s=[],i=[],a=[];for(let o=0;o<e.length;o++){const t=e[o],r=t.uuid?this.files.findIndex((e=>e.uuid===t.uuid)):t.index;if(-1===r||!this.files)break;if("request:fail"===t.errMsg)this.files[r].url=t.path,this.files[r].status="error",this.files[r].errMsg=t.errMsg,s.push(this.files[r]),a.push(this.files[r].url);else{this.files[r].errMsg="",this.files[r].fileID=t.url;/cloud:\/\/([\w.]+\/?)\S*/.test(t.url)?this.files[r].url=await this.getTempFileURL(t.url):this.files[r].url=t.url,this.files[r].status="success",this.files[r].progress+=1,l.push(this.files[r]),i.push(this.files[r].fileID)}}l.length>0&&(this.setEmit(),this.$emit("success",{tempFiles:this.backObject(l),tempFilePaths:i})),s.length>0&&this.$emit("fail",{tempFiles:this.backObject(s),tempFilePaths:a})},setProgress(e,t,l){this.files.length;const s=Math.round(100*e.loaded/e.total);let i=t;l||(i=this.files.findIndex((t=>t.uuid===e.tempFile.uuid))),-1!==i&&this.files[i]&&(this.files[i].progress=s-1,this.$emit("progress",{index:i,progress:parseInt(s),tempFile:this.files[i]}))},delFile(e){this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((()=>{this.setEmit()}))},getFileExt(e){const t=e.lastIndexOf("."),l=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,l)}},setEmit(){let e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=[...e]),this.$emit("update:modelValue",this.localValue)},backObject(e){let t=[];return e.forEach((e=>{t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url,uuid:e.uuid,status:e.status,cloudPath:e.cloudPath})})),t},async getTempFileURL(e){e={fileList:[].concat(e)};return(await A.getTempFileURL(e)).fileList[0].tempFileURL||""},getForm(e="uniForms"){let t=this.$parent,l=t.$options.name;for(;l!==e;){if(t=t.$parent,!t)return!1;l=t.$options.name}return t}}},[["render",function(e,t,l,s,i,a){const u=w,d=F,p=k("upload-image"),c=P,f=k("upload-file");return o(),r(d,{class:"uni-file-picker"},{default:n((()=>[l.title?(o(),r(d,{key:0,class:"uni-file-picker__header"},{default:n((()=>[h(u,{class:"file-title"},{default:n((()=>[y(v(l.title),1)])),_:1}),h(u,{class:"file-count"},{default:n((()=>[y(v(a.filesList.length)+"/"+v(a.limitLength),1)])),_:1})])),_:1})):m("",!0),"image"===l.fileMediatype&&"grid"===a.showType?(o(),r(p,{key:1,readonly:l.readonly,"image-styles":l.imageStyles,"files-list":a.filesList,limit:a.limitLength,disablePreview:l.disablePreview,delIcon:l.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:n((()=>[g(e.$slots,"default",{},(()=>[h(d,{class:"is-add"},{default:n((()=>[h(d,{class:"icon-add"}),h(d,{class:"icon-add rotate"})])),_:1})]),!0)])),_:3},8,["readonly","image-styles","files-list","limit","disablePreview","delIcon","onUploadFiles","onChoose","onDelFile"])):m("",!0),"image"!==l.fileMediatype||"grid"!==a.showType?(o(),r(f,{key:2,readonly:l.readonly,"list-styles":l.listStyles,"files-list":a.filesList,showType:a.showType,delIcon:l.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:n((()=>[g(e.$slots,"default",{},(()=>[h(c,{type:"primary",size:"mini"},{default:n((()=>[y("选择文件")])),_:1})]),!0)])),_:3},8,["readonly","list-styles","files-list","showType","delIcon","onUploadFiles","onChoose","onDelFile"])):m("",!0)])),_:3})}],["__scopeId","data-v-ae18bd15"]]),le={__name:"addMenu",setup(e){const t=I({id:"",name:"",price:"",type:"1",picImg:"",isOnline:!0,unit:"串"});S("menuItem",(function(e){T({title:"修改菜单"}),t.value=e}));const l=I([]),i=I({tempFilePaths:[],tempFiles:[]}),a=e=>{console.log(e)},r=e=>{i.value=e},d=I(null),p=async()=>{await d.value.validate(),i.value.tempFilePaths.length&&await(async()=>new Promise(((e,l)=>{M({url:`${B.baseUrl}/upload`,fileType:"image",filePath:i.value.tempFilePaths[0],name:"image",success:({data:l,statusCode:s})=>{console.log(l),t.value.picImg=JSON.parse(l).data,e(JSON.parse(l))},fail:e=>{console.log(e),l(e)}})})))();let e={...t.value,type:Number(t.value.type),price:Number(t.value.price),picImg:t.value.picImg.includes("http")?"":t.value.picImg};t.value.id?await j(e):await E(e),s({title:"成功",icon:"success",mask:!0}),$()},c={name:{rules:[{required:!0,errorMessage:"请填写商品名"}]},price:{rules:[{required:!0,errorMessage:"请填写价格"}]}};return(e,s)=>{const i=U(C("uni-easyinput"),O),f=U(C("uni-forms-item"),D),m=L,g=U(C("uni-file-picker"),te),b=U(C("uni-forms"),z);return o(),u("div",{class:"p-[10px]"},[h(b,{modelValue:t.value,ref_key:"menuForm",ref:d,rules:c},{default:n((()=>[h(f,{label:"商品:",name:"name"},{default:n((()=>[h(i,{type:"text",modelValue:t.value.name,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value.name=e),placeholder:"请输入商品名"},null,8,["modelValue"])])),_:1}),h(f,{label:"价格:",name:"price"},{default:n((()=>[h(i,{type:"number",modelValue:t.value.price,"onUpdate:modelValue":s[1]||(s[1]=e=>t.value.price=e),placeholder:"请输入价格"},null,8,["modelValue"])])),_:1}),h(f,{label:"分类:",name:"unit"},{default:n((()=>[h(q,{modelValue:t.value.type,"onUpdate:modelValue":s[2]||(s[2]=e=>t.value.type=e),selectList:V(R)},null,8,["modelValue","selectList"])])),_:1}),h(f,{label:"单位:",name:"unit"},{default:n((()=>[h(J,{class:"mt-[8px]",modelValue:t.value.unit,"onUpdate:modelValue":s[3]||(s[3]=e=>t.value.unit=e),list:[{label:"串",value:"串"},{label:"份",value:"份"},{label:"瓶",value:"瓶"},{label:"件",value:"件"},{label:"个",value:"个"}]},null,8,["modelValue"])])),_:1}),h(f,{label:"上架:",name:"unit"},{default:n((()=>[h(m,{checked:t.value.isOnline,onChange:s[4]||(s[4]=e=>t.value.isOnline=e.detail.value)},null,8,["checked"])])),_:1}),h(f,{label:"预览图:",name:"unit"},{default:n((()=>[h(g,{modelValue:l.value,"onUpdate:modelValue":s[5]||(s[5]=e=>l.value=e),fileMediatype:"image",mode:"grid",limit:"1",onSelect:r,onFail:a,sizeType:"compressed"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),h(H,{onClick:p,icon:"plusempty"},{default:n((()=>[y("提 交")])),_:1})])}}};export{le as default};
