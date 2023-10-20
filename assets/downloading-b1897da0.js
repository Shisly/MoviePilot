import{P as j}from"./index-9502ff5d.js";import{a as b}from"./index-83601d12.js";import{_ as A}from"./NoDataFound.vue_vue_type_script_setup_true_lang-9795ac0b.js";import{d as D,r as _,j as t,o as s,f as g,i,m as r,ag as E,J as L,t as V,n as k,ab as F,az as G,A as z,ai as H,_ as p,I,G as J,z as M,a5 as R,p as O,ax as q,al as K,c as C,a2 as Q,L as S,U as W,E as X}from"./index-a900fb48.js";const Y=D({__name:"DownloadingCard",props:{info:Object},setup($){var y;const e=$,h=_(!0);function c(){var a;return((a=e.info)==null?void 0:a.progress)??0}function w(){var a,n;return`↑ ${(a=e.info)==null?void 0:a.upspeed}/s ↓ ${(n=e.info)==null?void 0:n.dlspeed}/s`}const o=_(((y=e.info)==null?void 0:y.state)==="downloading"),d=_(!1);function u(){d.value=!0}function f(){return d.value?"text-white":""}async function v(){var n;const a=o.value?"stop":"start";try{(await b.get(`download/${a}/${(n=e.info)==null?void 0:n.hash}`)).success&&(o.value=!o.value)}catch(x){console.error(x)}}async function m(){var a;try{await b.delete(`download/${(a=e.info)==null?void 0:a.hash}`),h.value=!1}catch(n){console.error(n)}}return(a,n)=>{var x;return t(h)?(s(),g(M,{key:(x=e.info)==null?void 0:x.hash},{image:i(()=>{var l;return[r(E,{src:(l=e.info)==null?void 0:l.media.image,"aspect-ratio":"2/3",cover:"",class:"brightness-50",onLoad:u},null,8,["src"])]}),default:i(()=>[r(F,{class:k(["break-words whitespace-normal",f()])},{default:i(()=>{var l,T,B,N,P,U;return[L(V(((l=e.info)==null?void 0:l.media.title)||((T=e.info)==null?void 0:T.name))+" "+V((B=e.info)!=null&&B.media.episode?`${(N=e.info)==null?void 0:N.media.season} ${(P=e.info)==null?void 0:P.media.episode}`:(U=e.info)==null?void 0:U.season_episode),1)]}),_:1},8,["class"]),r(G,{class:k(["break-words whitespace-normal",f()])},{default:i(()=>{var l;return[L(V((l=e.info)==null?void 0:l.title),1)]}),_:1},8,["class"]),r(z,{class:k(["text-subtitle-1 pt-3 pb-1",f()])},{default:i(()=>[L(V(w()),1)]),_:1},8,["class"]),c()>0?(s(),g(z,{key:0,class:k(f())},{default:i(()=>[r(H,{"model-value":c()},null,8,["model-value"])]),_:1},8,["class"])):p("",!0),r(J,{class:"justify-space-between"},{default:i(()=>[r(I,{icon:`${t(o)?"mdi-pause":"mdi-play"}`,onClick:v},null,8,["icon"]),r(I,{color:"error",icon:"mdi-trash-can-outline",onClick:m})]),_:1})]),_:1})):p("",!0)}}}),Z={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},ee={key:0,class:"grid gap-3 grid-downloading-card"},ae=D({__name:"DownloadingListView",setup($){const e=R.state.auth.superUser,h=R.state.auth.userName;let c=null;const w=_([]),o=_(!1);async function d(){try{w.value=await b.get("download/"),o.value=!0}catch(m){console.error(m)}}const u=_(!1);function f(){u.value=!0,d(),u.value=!1}const v=O(()=>e?w.value:w.value.filter(m=>m.userid===h));return q(()=>{d(),c=setInterval(()=>{d()},3e3)}),K(()=>{c&&(clearInterval(c),c=null)}),(m,y)=>(s(),C(S,null,[t(o)?p("",!0):(s(),C("div",Z,[t(o)?p("",!0):(s(),g(Q,{key:0,size:"48",indeterminate:"",color:"primary"}))])),r(t(j),{modelValue:t(u),"onUpdate:modelValue":y[0]||(y[0]=a=>X(u)?u.value=a:null),onRefresh:f},{default:i(()=>[t(v).length>0?(s(),C("div",ee,[(s(!0),C(S,null,W(t(v),a=>(s(),g(Y,{key:a.hash,info:a},null,8,["info"]))),128))])):p("",!0),t(v).length===0&&t(o)?(s(),g(A,{key:1,"error-code":"404","error-title":"没有任务","error-description":"正在下载的任务将会显示在这里。"})):p("",!0)]),_:1},8,["modelValue"])],64))}});const ne=D({__name:"downloading",setup($){return(e,h)=>(s(),g(ae))}});export{ne as default};
