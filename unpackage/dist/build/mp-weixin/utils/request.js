"use strict";const e=require("../common/vendor.js"),n=require("./auth.js"),a=require("./env.js");exports.service=function(o={},t){if(o.data)for(const e in o.data)null!==o.data[e]&&void 0!==o.data[e]&&""!==o.data[e]||delete o.data[e];return o.url=`${a.env.baseUrl}${o.url}`,console.log(a.env.baseUrl),n.getToken()&&(o.header={"content-type":"application/json",Authorization:`Bearer ${n.getToken()}`}),e.index.showLoading({title:"加载中",mask:!0}),new Promise(((a,i)=>{o.success=o=>{console.log(o),e.index.hideLoading(),1!=o.data.code?(e.index.showToast({icon:"none",duration:3e3,title:`${o.data.msg}`}),401==o.data.code&&(n.removeToken(),e.index.reLaunch({url:"/pages/login/login"})),i(o)):a(t?o.data:o.data.data)},o.fail=n=>{e.index.showToast({icon:"none",duration:3e3,title:"服务器错误,请稍后再试"}),e.index.hideLoading(),i(n)},e.index.request(o)}))};
