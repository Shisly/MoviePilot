import{d as m,r as p,aP as w,o as b,f as x,i as r,m as i,a as t,a3 as y,n as P,j as n,R as C,U as k,t as _,z as V,P as D,A as I,aD as z,aV as j,aW as B,ae as S}from"./index-5c0d31d7.js";const A="/assets/person-icon-0353c04f.png",H={class:"person-card relative transform-gpu cursor-pointer rounded shadow ring-1 transition duration-150 ease-in-out scale-100 ring-gray-700"},L={style:{"padding-bottom":"150%"}},N={class:"absolute inset-0 flex h-full w-full flex-col items-center p-2"},R={class:"relative mt-2 mb-4 flex h-1/2 w-full justify-center"},$={class:"w-full truncate text-center font-bold"},q={class:"overflow-hidden whitespace-normal text-center text-sm",style:{display:"-webkit-box",overflow:"hidden","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}},M=t("div",{class:"absolute bottom-0 left-0 right-0 h-12 rounded-b"},null,-1),W=m({__name:"PersonCard",props:{person:Object,width:String,height:String},setup(h){const a=h,s=p(a.person),l=p(!1);function f(){var o,e;return(o=s.value)!=null&&o.profile_path?`https://image.tmdb.org/t/p/w600_and_h900_bestv2${(e=s.value)==null?void 0:e.profile_path}`:A}function g(){var o,e;(o=s.value)!=null&&o.id&&S.push({path:"/person",query:{personid:(e=s.value)==null?void 0:e.id}})}return(o,e)=>{const v=w("img");return b(),x(B,z(j(a)),{default:r(c=>[i(I,V(c.props,{height:a.height,width:a.width,class:["rounded-lg",{"transition transform-cpu duration-300 scale-105":c.isHovering}],onClick:D(g,["stop"])}),{default:r(()=>{var d,u;return[t("div",H,[t("div",L,[t("div",N,[t("div",R,[i(y,{size:"120",class:P({"ring-1 ring-gray-700":n(l)})},{default:r(()=>[C(i(k,{src:f(),cover:"",onLoad:e[0]||(e[0]=O=>l.value=!0)},null,8,["src"]),[[v]])]),_:1},8,["class"])]),t("div",$,_((d=n(s))==null?void 0:d.name),1),t("div",q,_((u=n(s))==null?void 0:u.character),1),M])])])]}),_:2},1040,["height","width","class","onClick"])]),_:1},16)}}});export{W as _};
