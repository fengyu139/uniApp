import{o as t,c as e,w as i,f as a,t as s,h as n,n as l,j as r,i as u}from"./index-42efb9d3.js";import{_ as o}from"./_plugin-vue_export-helper.1b428a4d.js";const c=o({name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes(){const{type:t,disabled:e,inverted:i,circle:a,mark:s,size:n,isTrue:l}=this;return["uni-tag--"+t,"uni-tag--"+n,l(e)?"uni-tag--disabled":"",l(i)?"uni-tag--"+t+"--inverted":"",l(a)?"uni-tag--circle":"",l(s)?"uni-tag--mark":"",l(i)?"uni-tag--inverted uni-tag-text--"+t:"","small"===n?"uni-tag-text--small":""].join(" ")}},methods:{isTrue:t=>!0===t||"true"===t,onClick(){this.isTrue(this.disabled)||this.$emit("click")}}},[["render",function(o,c,d,g,p,m){const y=u;return d.text?(t(),e(y,{key:0,class:n(["uni-tag",m.classes]),style:l(d.customStyle),onClick:m.onClick},{default:i((()=>[a(s(d.text),1)])),_:1},8,["class","style","onClick"])):r("",!0)}],["__scopeId","data-v-6751c3c1"]]);export{c as _};
