import{_ as M}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-a33069ed.js";import{d as N,r as d,M as W,af as P,q as j,e as z,o as v,f as y,i as o,m as l,A as G,P as J,O as K,B as r,C as i,D as m,j as t,_ as S,a7 as c,aB as Q,G as X,I as R,J as U,H as Y,z as Z}from"./index-9b9cd080.js";import{n as w}from"./index-705cb9e8.js";import{a as V}from"./index-0c6df641.js";const se=N({__name:"SubscribeEditForm",props:{subid:Number},emits:["remove","save","close"],setup(k,{emit:p}){const f=k,b=d([]),_=d([]);let e=W({id:f.subid??0,keyword:"",quality:"",resolution:"",effect:"",include:"",exclude:"",total_episode:0,start_episode:0,best_version:0,sites:[],type:"",name:"",year:"",tmdbid:0,state:"",last_update:"",username:"",current_priority:0});const D=P.useToast();async function $(){try{e.best_version=e.best_version?1:0;const a=await V.put("subscribe/",e);a.success?(D.success(`${e.name} 更新成功！`),p("save")):D.error(`${e.name} 更新失败：${a.message}！`)}catch(a){console.log(a)}}async function g(){try{const a=await V.get("site/rss");b.value=a.filter(s=>s.is_active)}catch(a){console.error(a)}}async function E(){b.value.length||await g();const a=b.value.map(s=>({title:s.name,value:s.id}));_.value=a.flat()}async function A(){try{e=await V.get(`subscribe/${f.subid}`),e.best_version=e.best_version===1}catch(a){console.log(a)}}async function O(){try{(await V.delete(`subscribe/${f.subid}`)).success&&p("remove")}catch(a){console.log(a)}}const T=d([{title:"全部",value:""},{title:"蓝光原盘",value:"Blu-?Ray.+VC-?1|Blu-?Ray.+AVC|UHD.+blu-?ray.+HEVC|MiniBD"},{title:"Remux",value:"Remux"},{title:"BluRay",value:"Blu-?Ray"},{title:"UHD",value:"UHD|UltraHD"},{title:"WEB-DL",value:"WEB-?DL|WEB-?RIP"},{title:"HDTV",value:"HDTV"},{title:"H265",value:"[Hx].?265|HEVC"},{title:"H264",value:"[Hx].?264|AVC"}]),q=d([{title:"全部",value:""},{title:"4k",value:"4K|2160p|x2160"},{title:"1080p",value:"1080[pi]|x1080"},{title:"720p",value:"720[pi]|x720"}]),I=d([{title:"全部",value:""},{title:"杜比视界",value:"Dolby[\\s.]+Vision|DOVI|[\\s.]+DV[\\s.]+"},{title:"杜比全景声",value:"Dolby[\\s.]*\\+?Atmos|Atmos"},{title:"HDR",value:"[\\s.]+HDR[\\s.]+|HDR10|HDR10\\+"},{title:"SDR",value:"[\\s.]+SDR[\\s.]+"}]);return j(async()=>{E(),A()}),(a,s)=>{const F=M,L=z("VBottomSheet");return v(),y(L,{inset:"",scrollable:""},{default:o(()=>{var C,x,H;return[l(Z,{title:`编辑订阅 - ${(C=t(e))==null?void 0:C.name} ${(x=t(e))!=null&&x.season?`季 ${(H=t(e))==null?void 0:H.season}`:""}`,class:"rounded-t"},{default:o(()=>[l(G,{class:"pt-2"},{default:o(()=>[l(F,{onClick:s[0]||(s[0]=u=>p("close"))}),l(J,{onSubmit:K(()=>{},["prevent"])},{default:o(()=>[l(r,null,{default:o(()=>{var u,B;return[l(i,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:t(e).keyword,"onUpdate:modelValue":s[1]||(s[1]=n=>t(e).keyword=n),label:"搜索关键词"},null,8,["modelValue"])]),_:1}),((u=t(e))==null?void 0:u.type)==="电视剧"?(v(),y(i,{key:0,cols:"12",md:"3"},{default:o(()=>[l(m,{modelValue:t(e).total_episode,"onUpdate:modelValue":s[2]||(s[2]=n=>t(e).total_episode=n),label:"总集数",rules:[t(w)]},null,8,["modelValue","rules"])]),_:1})):S("",!0),((B=t(e))==null?void 0:B.type)==="电视剧"?(v(),y(i,{key:1,cols:"12",md:"3"},{default:o(()=>[l(m,{modelValue:t(e).start_episode,"onUpdate:modelValue":s[3]||(s[3]=n=>t(e).start_episode=n),label:"开始集数",rules:[t(w)]},null,8,["modelValue","rules"])]),_:1})):S("",!0)]}),_:1}),l(r,null,{default:o(()=>[l(i,{cols:"12",md:"4"},{default:o(()=>[l(c,{modelValue:t(e).quality,"onUpdate:modelValue":s[4]||(s[4]=u=>t(e).quality=u),label:"质量",items:t(T)},null,8,["modelValue","items"])]),_:1}),l(i,{cols:"12",md:"4"},{default:o(()=>[l(c,{modelValue:t(e).resolution,"onUpdate:modelValue":s[5]||(s[5]=u=>t(e).resolution=u),label:"分辨率",items:t(q)},null,8,["modelValue","items"])]),_:1}),l(i,{cols:"12",md:"4"},{default:o(()=>[l(c,{modelValue:t(e).effect,"onUpdate:modelValue":s[6]||(s[6]=u=>t(e).effect=u),label:"特效",items:t(I)},null,8,["modelValue","items"])]),_:1})]),_:1}),l(r,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:t(e).include,"onUpdate:modelValue":s[7]||(s[7]=u=>t(e).include=u),label:"包含（关键字、正则式）"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:t(e).exclude,"onUpdate:modelValue":s[8]||(s[8]=u=>t(e).exclude=u),label:"排除（关键字、正则式）"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:o(()=>[l(i,{cols:"12"},{default:o(()=>[l(c,{modelValue:t(e).sites,"onUpdate:modelValue":s[9]||(s[9]=u=>t(e).sites=u),items:t(_),chips:"",label:"订阅站点",multiple:""},null,8,["modelValue","items"])]),_:1})]),_:1}),l(r,null,{default:o(()=>[l(i,{cols:"12"},{default:o(()=>[l(Q,{modelValue:t(e).best_version,"onUpdate:modelValue":s[10]||(s[10]=u=>t(e).best_version=u),label:"洗版"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),l(X,null,{default:o(()=>[l(R,{color:"error",onClick:O},{default:o(()=>[U(" 删除 ")]),_:1}),l(Y),l(R,{onClick:$},{default:o(()=>[U(" 保存 ")]),_:1})]),_:1})]),_:1},8,["title"])]}),_:1})}}});export{se as _};
