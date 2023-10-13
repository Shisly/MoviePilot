import{_ as we}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-9ba1b878.js";import{E as $e}from"./ExistIcon-8612d5d2.js";import{d as xe,af as Ve,r as b,ax as Se,p as Ce,e as N,o as y,c as X,m as r,i as n,z as G,a9 as ke,j as u,ag as K,n as T,a as w,Q as W,R as Z,a3 as j,J as p,t as c,f as k,_ as D,A as ee,O as z,aD as Ee,aU as Ie,aV as Be,ab as Le,a1 as je,E as U,L as te,U as De,ah as Me,aB as Ne,X as Te,Y as A,V as ze,$ as Ue,I as Ae,at as P,au as R,aj as ae}from"./index-d3947ac1.js";import{_ as Pe}from"./SubscribeEditForm.vue_vue_type_script_setup_true_lang-4bbbcb5f.js";import{b as Re}from"./formatters-16dfb57c.js";import{a as V}from"./index-b9b8a38f.js";const se="/assets/no-image-f5f483aa.jpeg",Fe={class:"w-full h-full"},He={class:"font-bold"},Ye={class:"mb-1 text-white font-extrabold text-xl line-clamp-2 overflow-hidden text-ellipsis ..."},qe={class:"leading-4 line-clamp-4 overflow-hidden text-ellipsis ..."},Oe={class:"flex align-center justify-between"},Je={class:"w-full h-full"},Qe={class:"my-2 text-center"},tt=xe({__name:"MediaCard",props:{media:Object,width:String,height:String},setup(F){const a=F,$=Ve.useToast(),E=b(!1),M=b(!1),H=b(!0),S=b(!1),I=b(!1),C=b({}),x=b(!1),v=b(!1),Y=b(0),B=b([]),h=b([]);function oe(){x.value=!1,h.value.forEach(t=>{L(t.season_number)})}function q(t){return t==="电影"?"border-blue-500 bg-blue-600":t==="电视剧"?" bg-indigo-500 border-indigo-600":"border-purple-600 bg-purple-600"}async function ie(){var t,e,s,i,l;if(((t=a.media)==null?void 0:t.type)==="电视剧"&&((e=a.media)!=null&&e.tmdb_id)){if(await ce(),!B.value){$.error(`${(s=a.media)==null?void 0:s.title} 查询剧集信息失败！`);return}if(await ue(),!H.value)return;B.value.length===1?L(1):x.value=!0}else if(((i=a.media)==null?void 0:i.type)==="电视剧"){const d=((l=a.media)==null?void 0:l.season)??1;L(d)}else L()}async function L(t=0){var e,s,i,l,d,g,o;P();try{let f=I.value?1:0;t&&((e=a.media)!=null&&e.tmdb_id)&&(f=C.value[t]?0:1);const m=await V.post("subscribe/",{name:(s=a.media)==null?void 0:s.title,type:(i=a.media)==null?void 0:i.type,year:(l=a.media)==null?void 0:l.year,tmdbid:(d=a.media)==null?void 0:d.tmdb_id,doubanid:(g=a.media)==null?void 0:g.douban_id,season:t,best_version:f});m.success&&(S.value=!0),re(m.success,((o=a.media)==null?void 0:o.title)??"",t,m.message,f),m.success&&h.value.length<=1&&(Y.value=m.data.id,v.value=!0)}catch(f){console.error(f)}R()}function re(t,e,s,i,l){s&&(e=`${e} ${Re(s.toString())}`);let d="订阅";l>0&&(d="洗版订阅"),t?$.success(`${e} 添加${d}成功！`):$.error(`${e} 添加${d}失败：${i}！`)}async function ne(){var t,e,s,i,l,d;P();try{const g=(t=a.media)!=null&&t.tmdb_id?`tmdb:${(e=a.media)==null?void 0:e.tmdb_id}`:`douban:${(s=a.media)==null?void 0:s.douban_id}`,o=await V.delete(`subscribe/media/${g}`,{params:{season:(i=a.media)==null?void 0:i.season}});o.success?(S.value=!1,$.success(`${(l=a.media)==null?void 0:l.title} 已取消订阅！`)):$.error(`${(d=a.media)==null?void 0:d.title} 取消订阅失败：${o.message}！`)}catch(g){console.error(g)}R()}async function O(){var t;try{await de((t=a.media)==null?void 0:t.season)&&(S.value=!0)}catch(e){console.error(e)}}async function le(){var t,e,s,i,l;try{(await V.get("media/exists",{params:{tmdbid:(t=a.media)==null?void 0:t.tmdb_id,title:(e=a.media)==null?void 0:e.title,year:(s=a.media)==null?void 0:s.year,season:(i=a.media)==null?void 0:i.season,mtype:(l=a.media)==null?void 0:l.type}})).success&&(I.value=!0)}catch(d){console.error(d)}}async function de(t=0){var e,s,i;try{const l=(e=a.media)!=null&&e.tmdb_id?`tmdb:${(s=a.media)==null?void 0:s.tmdb_id}`:`douban:${(i=a.media)==null?void 0:i.douban_id}`;return(await V.get(`subscribe/media/${l}`,{params:{season:t}})).id||null}catch(l){console.error(l)}return null}async function ue(){var t;P();try{const e=await V.post("download/notexists",a.media);e&&e.forEach(s=>{let i=0;s.episodes.length===0?i=2:s.episodes.length<s.total_episode&&(i=1),C.value[s.season]=i})}catch{$.error(`${(t=a.media)==null?void 0:t.title}无法识别TMDB媒体信息！`),H.value=!1}R()}async function ce(){var t;try{B.value=await V.get(`tmdb/seasons/${(t=a.media)==null?void 0:t.tmdb_id}`)}catch(e){console.error(e)}}function me(){S.value?ne():ie()}function fe(t){const e=C.value[t];return e?e===1?"warning":e===2?"error":"success":"success"}function be(t){const e=C.value[t];return e?e===1?"部分缺失":e===2?"缺失":"已存在":"已存在"}function pe(){var t,e,s,i;ae.push({path:"/media",query:{mediaid:`${(t=a.media)!=null&&t.tmdb_id?`tmdb:${(e=a.media)==null?void 0:e.tmdb_id}`:`douban:${(s=a.media)==null?void 0:s.douban_id}`}`,type:(i=a.media)==null?void 0:i.type}})}function ge(){var t,e,s,i;ae.push({path:"/resource",query:{keyword:`${(t=a.media)!=null&&t.tmdb_id?`tmdb:${(e=a.media)==null?void 0:e.tmdb_id}`:`douban:${(s=a.media)==null?void 0:s.douban_id}`}`,type:(i=a.media)==null?void 0:i.type,area:"title"}})}Se(()=>{O(),le()});const _e=Ce(()=>{var e,s;if(M.value)return se;const t=((s=(e=a.media)==null?void 0:e.poster_path)==null?void 0:s.replace("original","w500"))??se;return t.includes("doubanio.com")?`/api/v1/douban/img/${encodeURIComponent(t)}`:t});function ve(t){return t?`https://image.tmdb.org/t/p/w500${t}`:""}function he(t){if(!t)return"";const e=new Date(t);return`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日`}function ye(t){return t?new Date(t).getFullYear():""}return(t,e)=>{const s=N("VSkeletonLoader"),i=$e,l=N("IconBtn"),d=we,g=N("VBottomSheet");return y(),X(te,null,[r(Be,Ee(Ie(a)),{default:n(o=>[r(G,ke(o.props,{height:a.height,width:a.width,class:["outline-none shadow ring-gray-500 rounded-lg",{"transition transform-cpu duration-300 scale-105 shadow-lg":o.isHovering,"ring-1":u(E)}]}),{default:n(()=>[r(K,{"aspect-ratio":"2/3",src:u(_e),class:T(["object-cover aspect-w-2 aspect-h-3",o.isHovering?"on-hover":""]),cover:"",onLoad:e[0]||(e[0]=f=>E.value=!0),onError:e[1]||(e[1]=f=>M.value=!0)},{placeholder:n(()=>[w("div",Fe,[r(s,{class:"object-cover aspect-w-2 aspect-h-3"})])]),default:n(()=>{var f,m;return[W(r(j,{variant:"elevated",size:"small",class:T([q(((f=a.media)==null?void 0:f.type)||""),"absolute left-2 top-2 bg-opacity-80 shadow-md text-white font-bold"])},{default:n(()=>{var _;return[p(c((_=a.media)==null?void 0:_.type),1)]}),_:1},8,["class"]),[[Z,u(E)]]),u(I)?(y(),k(i,{key:0})):D("",!0),u(E)&&((m=a.media)!=null&&m.vote_average)&&!u(I)?(y(),k(j,{key:1,variant:"elevated",size:"small",class:T([q("rating"),"absolute right-2 top-2 bg-opacity-80 shadow-md text-white font-bold"])},{default:n(()=>{var _;return[p(c((_=a.media)==null?void 0:_.vote_average),1)]}),_:1},8,["class"])):D("",!0),W(r(ee,{class:"w-full flex flex-col flex-wrap justify-end align-left text-white absolute bottom-0 cursor-pointer pa-2",onClick:z(pe,["stop"])},{default:n(()=>{var _,J,Q;return[w("span",He,c((_=a.media)==null?void 0:_.year),1),w("h1",Ye,c((J=a.media)==null?void 0:J.title),1),w("p",qe,c((Q=a.media)==null?void 0:Q.overview),1),w("div",Oe,[r(l,{icon:"mdi-magnify",color:"white",onClick:z(ge,["stop"])},null,8,["onClick"]),r(l,{icon:"mdi-heart",color:u(S)?"error":"white",onClick:z(me,["stop"])},null,8,["color","onClick"])])]}),_:2},1032,["onClick"]),[[Z,o.isHovering||u(M)]])]}),_:2},1032,["src","class"])]),_:2},1040,["height","width","class"])]),_:1},16),r(g,{modelValue:u(x),"onUpdate:modelValue":e[4]||(e[4]=o=>U(x)?x.value=o:null),inset:"",scrollable:""},{default:n(()=>[r(G,{class:"rounded-t"},{default:n(()=>[r(d,{onClick:e[2]||(e[2]=o=>x.value=!1)}),r(Le,{class:"pe-10"},{default:n(()=>{var o;return[p(" 订阅 - "+c((o=a.media)==null?void 0:o.title),1)]}),_:1}),r(ee,null,{default:n(()=>[r(je,{selected:u(h),"onUpdate:selected":e[3]||(e[3]=o=>U(h)?h.value=o:null),lines:"three","select-strategy":"classic"},{default:n(()=>[(y(!0),X(te,null,De(u(B),(o,f)=>(y(),k(Ue,{key:f,value:o},{prepend:n(()=>[r(K,{height:"90",width:"60",src:ve(o.poster_path||""),"aspect-ratio":"2/3",class:"object-cover rounded shadow ring-gray-500 me-3",cover:""},{placeholder:n(()=>[w("div",Je,[r(s,{class:"object-cover aspect-w-2 aspect-h-3"})])]),_:2},1032,["src"])]),append:n(({isSelected:m})=>[r(Me,{start:""},{default:n(()=>[r(Ne,{"model-value":m},null,8,["model-value"])]),_:2},1024)]),default:n(()=>[r(Te,null,{default:n(()=>[p(" 第 "+c(o.season_number)+" 季 ",1)]),_:2},1024),r(A,{class:"mt-1 me-2"},{default:n(()=>[o.vote_average?(y(),k(j,{key:0,color:"primary",size:"small",class:"mb-1"},{default:n(()=>[r(ze,{icon:"mdi-star"}),p(" "+c(o.vote_average),1)]),_:2},1024)):D("",!0),p(" "+c(ye(o.air_date||""))+" • "+c(o.episode_count)+" 集 ",1)]),_:2},1024),r(A,null,{default:n(()=>{var m;return[p(" 《"+c((m=F.media)==null?void 0:m.title)+"》第 "+c(o.season_number)+" 季于 "+c(he(o.air_date||""))+" 首播。 ",1)]}),_:2},1024),r(A,null,{default:n(()=>[u(C)?(y(),k(j,{key:0,class:"mt-2",size:"small",color:fe(o.season_number||0)},{default:n(()=>[p(c(be(o.season_number||0)),1)]),_:2},1032,["color"])):D("",!0)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])]),_:1}),w("div",Qe,[r(Ae,{disabled:u(h).length===0,width:"30%",onClick:oe},{default:n(()=>[p(c(u(h).length===0?"请选择订阅季":"提交订阅"),1)]),_:1},8,["disabled"])])]),_:1})]),_:1},8,["modelValue"]),r(Pe,{modelValue:u(v),"onUpdate:modelValue":e[5]||(e[5]=o=>U(v)?v.value=o:null),subid:u(Y),onClose:e[6]||(e[6]=o=>v.value=!1),onSave:e[7]||(e[7]=o=>v.value=!1),onRemove:e[8]||(e[8]=()=>{v.value=!1,O()})},null,8,["modelValue","subid"])],64)}}});export{tt as _};
