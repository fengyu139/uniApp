import{o as s,b as e,q as t,F as a,d as l,f as n,t as x,h as i,K as c,k as p,c as r,w as o,j as f,u as m}from"./index-1471b431.js";import{_ as d}from"./abMiniButton.64077d64.js";import{q as u}from"./api.cb3f3bbb.js";import{d as y}from"./dayjs.min.8200664b.js";const k={__name:"addRecords",props:["recordsList","showBtn"],setup(k){const F=s=>s.reduce(((s,e)=>s+e.count*e.price),0);return(h,j)=>(s(),e("div",null,[t("p",{class:"text-16 text-center my-[10px]"},"加菜记录"),(s(!0),e(a,null,l(k.recordsList,((k,h)=>(s(),e("div",{key:h,class:"text-center text-14 px-[8px] border mb-[10px]"},[0==h?(s(),e("p",{key:0},[n(" 初始订单 : "),t("span",{class:"text-text3"},x(F(k.items).toFixed(2)),1)])):(s(),e("p",{key:1,class:"flex justify-around items-center py-[4px]"},[t("span",{class:"text-14"},[n("状态："),t("span",{class:i(k.isFinish?"text-text5":"text-text3")},x(k.isFinish?"已上菜":"准备中"),3)]),t("span",null,[n("第"+x(h)+"次加菜 :",1),t("span",{class:"text-text3"},x(F(k.items).toFixed(2)),1)]),t("span",null,[!k.isFinish&&c(p)()?(s(),r(d,{key:0,onClick:s=>(async s=>{await u({id:s.id,isFinish:!0}),s.isFinish=!0,m({icon:"success",mask:!0})})(k)},{default:o((()=>[n("设置已上菜")])),_:2},1032,["onClick"])):f("",!0)])])),t("div",{class:"mb-[6px] text-[12px] text-gray-500"},[t("span",null,[n("下单时间 : "),t("span",null,x(c(y)(k.createTime).format("YYYY-MM-DD HH:mm:ss")),1)])]),t("ul",null,[t("li",{class:"flex text-center text-[12px]"},[t("span",{class:"flex-1"},"菜名"),t("span",{class:"flex-1"},"单价"),t("span",{class:"flex-[0.5]"}),t("span",{class:"flex-1"}," 数量"),t("span",{class:"flex-[0.5]"}),t("span",{class:"flex-1"}," 小记 ")]),(s(!0),e(a,null,l(k.items,(a=>(s(),e("li",{key:a.type,class:"flex text-center text-[12px]"},[t("span",{class:"flex-1"},x(a.name),1),t("span",{class:"flex-1"},x(a.price),1),t("span",{class:"flex-[0.5]"},"*"),t("span",{class:"flex-1"},x(a.count),1),t("span",{class:"flex-[0.5]"},"="),t("span",{class:"flex-1 text-text3"},x((a.price*a.count).toFixed(2)),1)])))),128))])])))),128))]))}};export{k as _};