import{d as N,r as b,q as xe,j as t,o as n,f as E,i as _,aD as ke,a9 as we,_ as l,c as o,U as $,L as g,af as $e,p as P,ax as Se,e as Q,m as d,a2 as F,a as s,ag as B,t as c,I as H,V,aO as Ve,aP as Ee,E as Ce,J as j,a1 as De,$ as J,X as W,Q as je,R as Ie,ac as Me,aQ as Le,a3 as X,O as Pe,aR as Te,aS as Be,at as K,au as Y,aj as Ne,b as Re}from"./index-a900fb48.js";import{_ as ze}from"./PersonCard.vue_vue_type_style_index_0_lang-adee1a82.js";import{a as S}from"./index-83601d12.js";import{S as qe,_ as Z}from"./MediaCardSlideView.vue_vue_type_script_setup_true_lang-5c78a542.js";import{_ as Ae}from"./NoDataFound.vue_vue_type_script_setup_true_lang-9795ac0b.js";import{b as Ge}from"./formatters-16dfb57c.js";import{_ as Ue}from"./SubscribeEditForm.vue_vue_type_script_setup_true_lang-c4b75c9e.js";import"./MediaCard.vue_vue_type_style_index_0_lang-0e40df8c.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-a39d80f9.js";import"./ExistIcon-11b45da9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-705cb9e8.js";const Oe=N({__name:"PersonCardSlideView",props:{apipath:String,linkurl:String,title:String},setup(T){const m=T,k=b(!1),e=b([]);async function f(){try{if(!m.apipath)return;e.value=await S.get(m.apipath),e.value.length>0&&(k.value=!0)}catch(v){console.error(v)}}return xe(f),(v,h)=>t(k)?(n(),E(qe,ke(we({key:0},m)),{content:_(()=>[(n(!0),o(g,null,$(t(e),y=>(n(),E(ze,{key:y.id,person:y,height:"15rem",width:"10rem"},null,8,["person"]))),128))]),_:1},16)):l("",!0)}}),Qe={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},Fe={key:1,class:"max-w-8xl mx-auto px-4"},He={class:"vue-media-back absolute left-0 top-0 w-full h-96"},Je=s("div",{class:"vue-media-back absolute left-0 top-0 w-full h-96"},null,-1),We={class:"media-page"},Xe={class:"media-header"},Ke={class:"media-poster"},Ye={class:"w-full h-full"},Ze={class:"media-title"},et={key:0,class:"media-status"},tt=s("span",{class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap transition !no-underline bg-green-500 bg-opacity-80 border border-green-500 !text-green-100 hover:bg-green-500 hover:bg-opacity-100 false overflow-hidden"},[s("div",{class:"relative z-20 flex items-center false"},[s("span",null,"已入库")])],-1),st=[tt],at={class:"d-flex flex-column flex-lg-row align-baseline justify-center justify-lg-start"},it={class:"align-self-center align-self-lg-end"},nt={key:0,class:"text-lg align-self-center align-self-lg-end"},rt={class:"media-attributes"},ot={key:0},lt={key:1,class:"mx-1"},dt={key:2},ct={class:"media-actions"},ut={class:"media-overview"},_t={class:"media-overview-left"},mt={key:0,class:"tagline"},pt={key:1},ft={key:2,class:"media-crew"},vt=["href"],ht={key:3,class:"media-crew"},bt=["href"],gt=["href"],yt={class:"mt-6"},xt=["href"],kt={class:"inline-flex cursor-pointer items-center rounded-full bg-gray-600 px-2 py-1 text-sm text-gray-200 ring-1 ring-gray-500 transition hover:bg-gray-700"},wt=s("span",{class:"ms-1"},"TheMovieDb",-1),$t=["href"],St={class:"inline-flex cursor-pointer items-center rounded-full bg-gray-600 px-2 py-1 text-sm text-gray-200 ring-1 ring-gray-500 transition hover:bg-gray-700"},Vt=s("span",{class:"ms-1"},"豆瓣",-1),Et=["href"],Ct={class:"inline-flex cursor-pointer items-center rounded-full bg-gray-600 px-2 py-1 text-sm text-gray-200 ring-1 ring-gray-500 transition hover:bg-gray-700"},Dt=s("span",{class:"ms-1"},"IMDb",-1),jt=["href"],It={class:"inline-flex cursor-pointer items-center rounded-full bg-gray-600 px-2 py-1 text-sm text-gray-200 ring-1 ring-gray-500 transition hover:bg-gray-700"},Mt=s("span",{class:"ms-1"},"TheTvDb",-1),Lt={key:4,class:"py-4"},Pt={key:5,class:"flex w-full flex-col space-y-2"},Tt={class:"flex flex-row items-center justify-between"},Bt={class:"font-weight-bold"},Nt={class:"absolute right-12"},Rt={key:0,class:"mt-3 w-full text-center text-gray-500 text-sm flex flex-col items-center"},zt={class:"flex flex-col justify-center divide-y divide-gray-700"},qt={class:"flex-1"},At={class:"flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-2"},Gt={class:"text-lg"},Ut={class:"flex items-center space-x-2"},Ot={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap cursor-default bg-gray-700 !text-gray-300"},Qt={key:0,class:"media-overview-right"},Ft={class:"media-facts"},Ht={key:0,class:"media-ratings"},Jt={key:1,class:"media-fact"},Wt=s("span",null,"ID",-1),Xt={class:"media-fact-value"},Kt={key:2,class:"media-fact"},Yt=s("span",null,"原始标题",-1),Zt={class:"media-fact-value"},es={key:3,class:"media-fact"},ts=s("span",null,"状态",-1),ss={class:"media-fact-value"},as={key:4,class:"media-fact"},is=s("span",null,"上映日期",-1),ns={class:"media-fact-value"},rs={class:"flex items-center justify-end"},os=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true",class:"h-4 w-4"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"})],-1),ls={class:"ml-1.5"},ds={key:5,class:"media-fact"},cs=s("span",null,"原始语言",-1),us={class:"media-fact-value"},_s={key:6,class:"media-fact"},ms=s("span",null,"出品国家",-1),ps={class:"media-fact-value"},fs={class:"media-fact border-b-0"},vs=s("span",null,"制作公司",-1),hs={class:"media-fact-value text-end"},bs={key:0},gs={key:1},ys={key:2},xs=N({__name:"MediaDetailView",props:{mediaid:String,type:String},setup(T){const m=T,k=$e.useToast(),e=b({}),f=b(!1),v=b(!1),h=b(!1),y=b(!1),I=b({}),C=b({}),M=b({}),R=b();async function ee(){if(m.mediaid&&m.type){if(e.value=await S.get(`media/${m.mediaid}`,{params:{type_name:m.type}}),y.value=!0,!e.value.tmdb_id&&!e.value.douban_id)return;e.value.type==="电影"?se():ae(),e.value.type==="电影"?q():A()}}async function te(a){if(!I.value[a])try{const i=await S.get(`tmdb/${e.value.tmdb_id}/${a}`);I.value[a]=i||[]}catch(i){console.error(i)}}async function se(){try{(await S.get("media/exists",{params:{tmdbid:e.value.tmdb_id,title:e.value.title,year:e.value.year,season:e.value.season,mtype:e.value.type}})).success&&(v.value=!0)}catch(a){console.error(a)}}async function z(a=0){try{const i=`tmdb:${e.value.tmdb_id}`;if((await S.get(`subscribe/media/${i}`,{params:{season:a}})).id)return!0}catch(i){console.error(i)}return!1}async function ae(){if(e.value.type==="电视剧")try{const a=await S.post("download/notexists",e.value);a&&(a.length===0&&(v.value=!0),a.forEach(i=>{let u=0;i.episodes.length===0?u=2:i.episodes.length<i.total_episode&&(u=1),u!==2&&(v.value=!0),C.value[i.season]=u}))}catch(a){console.error(a)}}async function q(){e.value.type==="电影"&&(h.value=await z())}const ie=P(()=>{var a,i;return(i=(a=e.value)==null?void 0:a.season_info)==null?void 0:i.filter(u=>u.season_number!==0)});async function A(){var a,i;if(e.value.type==="电视剧")try{(i=(a=e.value)==null?void 0:a.season_info)==null||i.forEach(async u=>{M.value[u.season_number??0]=await z(u.season_number)})}catch(u){console.error(u)}}async function ne(a=0){var i,u,x,r,p,D;K();try{let w=v.value?1:0;a&&(w=C.value[a]?0:1);const L=await S.post("subscribe/",{name:(i=e.value)==null?void 0:i.title,type:(u=e.value)==null?void 0:u.type,year:(x=e.value)==null?void 0:x.year,tmdbid:(r=e.value)==null?void 0:r.tmdb_id,doubanid:(p=e.value)==null?void 0:p.douban_id,season:a,best_version:w});L.success&&(h.value=!0,a&&(M.value[a]=!0)),re(L.success,((D=e.value)==null?void 0:D.title)??"",a,L.message,w),L.success&&(R.value=L.data.id,f.value=!0)}catch(w){console.error(w)}Y()}function re(a,i,u,x,r){u&&(i=`${i} ${Ge(u.toString())}`);let p="订阅";r>0&&(p="洗版订阅"),a||k.error(`${i} 添加${p}失败：${x}！`)}async function oe(a){var i,u,x,r,p;K();try{const D=(i=e.value)!=null&&i.tmdb_id?`tmdb:${(u=e.value)==null?void 0:u.tmdb_id}`:`douban:${(x=e.value)==null?void 0:x.douban_id}`,w=await S.delete(`subscribe/media/${D}`,{params:{season:a}});w.success?(h.value=!1,a&&(M.value[a]=!1),k.success(`${(r=e.value)==null?void 0:r.title} 已取消订阅！`)):k.error(`${(p=e.value)==null?void 0:p.title} 取消订阅失败：${w.message}！`)}catch(D){console.error(D)}Y()}function G(a=0){h.value?oe(a):ne(a)}function le(a){return a.map(i=>i.name).join("、")}function de(){return`https://www.themoviedb.org/${m.type==="电影"?"movie":"tv"}/${e.value.tmdb_id}`}function ce(){return`https://movie.douban.com/subject/${e.value.douban_id}`}function ue(){return`https://www.imdb.com/title/${e.value.imdb_id}`}function _e(){return`https://www.thetvdb.com/series/${e.value.tvdb_id}`}function me(a){return a?`https://image.tmdb.org/t/p/w500${a}`:""}function pe(a=""){return a?a.replace("original","w500"):""}const fe=P(()=>{var a;return(a=e.value.production_countries)==null?void 0:a.map(i=>i.name)}),ve=P(()=>{var a;return(a=e.value.production_companies)==null?void 0:a.map(i=>i.name)});function he(a){const i=C.value[a];return i?i===1?"warning":i===2?"error":"success":"success"}function be(a){const i=C.value[a];return i?i===1?"部分缺失":i===2?"缺失":"已存在":"已存在"}const ge=P(()=>h.value?"mdi-heart":"mdi-heart-outline"),ye=P(()=>h.value?"error":"warning");function U(a){return a.join("、")}function O(a){Ne.push({path:"/resource",query:{keyword:`tmdb:${e.value.tmdb_id}`,type:e.value.type,area:a}})}return Se(()=>{ee()}),(a,i)=>{const u=Q("VSkeletonLoader"),x=Q("IconBtn");return n(),o(g,null,[t(y)?l("",!0):(n(),o("div",Qe,[d(F,{size:"48",indeterminate:"",color:"primary"})])),t(e).tmdb_id||t(e).douban_id?(n(),o("div",Fe,[t(e).backdrop_path?(n(),o(g,{key:0},[s("div",He,[d(B,{class:"h-96",src:t(e).backdrop_path,cover:""},null,8,["src"])]),Je],64)):l("",!0),s("div",We,[s("div",Xe,[s("div",Ke,[d(B,{src:pe(t(e).poster_path),cover:"",class:"object-cover aspect-w-2 aspect-h-3 ring-1 ring-gray-500"},{placeholder:_(()=>[s("div",Ye,[d(u,{class:"object-cover aspect-w-2 aspect-h-3"})])]),_:1},8,["src"])]),s("div",Ze,[t(v)?(n(),o("div",et,st)):l("",!0),s("h1",at,[s("div",it,c(t(e).title),1),t(e).year?(n(),o("div",nt," （"+c(t(e).year)+"） ",1)):l("",!0)]),s("span",rt,[t(e).runtime||t(e).episode_run_time[0]?(n(),o("span",ot,c(t(e).runtime||t(e).episode_run_time[0])+" 分钟",1)):l("",!0),(t(e).runtime||t(e).episode_run_time[0])&&t(e).genres?(n(),o("span",lt," | ")):l("",!0),t(e).genres?(n(),o("span",dt,c(le(t(e).genres||[])),1)):l("",!0)])]),s("div",ct,[t(e).tmdb_id?(n(),E(H,{key:0,variant:"tonal",color:"info"},{prepend:_(()=>[d(V,{icon:"mdi-magnify"})]),default:_(()=>[j(" 搜索资源 "),d(Me,{activator:"parent","close-on-content-click":""},{default:_(()=>[d(De,null,{default:_(()=>[d(J,{variant:"plain",onClick:i[0]||(i[0]=r=>O("title"))},{default:_(()=>[d(W,null,{default:_(()=>[j("标题")]),_:1})]),_:1}),je(d(J,{variant:"plain",onClick:i[1]||(i[1]=r=>O("imdbid"))},{default:_(()=>[d(W,null,{default:_(()=>[j("IMDB链接")]),_:1})]),_:1},512),[[Ie,t(e).imdb_id]])]),_:1})]),_:1})]),_:1})):l("",!0),t(e).type==="电影"?(n(),E(H,{key:1,class:"ms-2",color:t(ye),variant:"tonal",onClick:i[2]||(i[2]=r=>G(0))},{prepend:_(()=>[d(V,{icon:t(ge)},null,8,["icon"])]),default:_(()=>[j(" "+c(t(h)?"已订阅":"订阅"),1)]),_:1},8,["color"])):l("",!0)])]),s("div",ut,[s("div",_t,[t(e).tagline?(n(),o("div",mt,c(t(e).tagline),1)):l("",!0),t(e).overview?(n(),o("h2",pt," 简介 ")):l("",!0),s("p",null,c(t(e).overview),1),t(e).tmdb_id?(n(),o("ul",ft,[(n(!0),o(g,null,$(t(e).directors,r=>(n(),o("li",{key:r.id},[s("span",null,c(r.job),1),s("a",{class:"crew-name",href:`person?personid=${r.id}`,target:"_blank"},c(r.name),9,vt)]))),128))])):l("",!0),!t(e).tmdb_id&&t(e).douban_id?(n(),o("ul",ht,[(n(!0),o(g,null,$(t(e).directors,r=>(n(),o("li",{key:r.id},[s("span",null,c(U(r.roles)),1),s("a",{class:"crew-name",href:`${r.url}`,target:"_blank"},c(r.name),9,bt)]))),128)),(n(!0),o(g,null,$(t(e).actors,r=>(n(),o("li",{key:r.id},[s("span",null,c(U(r.roles)),1),s("a",{class:"crew-name",href:`${r.url}`,target:"_blank"},c(r.name),9,gt)]))),128))])):l("",!0),s("div",yt,[t(e).tmdb_id?(n(),o("a",{key:0,class:"mb-2 mr-2 inline-flex last:mr-0",href:de(),target:"_blank"},[s("div",kt,[d(V,{icon:"mdi-link"}),wt])],8,xt)):l("",!0),t(e).douban_id?(n(),o("a",{key:1,class:"mb-2 mr-2 inline-flex last:mr-0",href:ce(),target:"_blank"},[s("div",St,[d(V,{icon:"mdi-link"}),Vt])],8,$t)):l("",!0),t(e).imdb_id?(n(),o("a",{key:2,class:"mb-2 mr-2 inline-flex last:mr-0",href:ue(),target:"_blank"},[s("div",Ct,[d(V,{icon:"mdi-link"}),Dt])],8,Et)):l("",!0),t(e).tvdb_id?(n(),o("a",{key:3,class:"mb-2 mr-2 inline-flex last:mr-0",href:_e(),target:"_blank"},[s("div",It,[d(V,{icon:"mdi-link"}),Mt])],8,jt)):l("",!0)]),t(e).type==="电视剧"&&t(e).tmdb_id?(n(),o("h2",Lt," 季 ")):l("",!0),t(e).type==="电视剧"&&t(e).tmdb_id?(n(),o("div",Pt,[d(Ve,null,{default:_(()=>[(n(!0),o(g,null,$(t(ie),r=>(n(),E(Be,{key:r.season_number,"onGroup:selected":p=>te(r.season_number||0)},{default:_(()=>[d(Le,null,{default:_(()=>[s("div",Tt,[s("span",Bt,"第 "+c(r.season_number)+" 季",1),d(X,{size:"small",class:"ms-1"},{default:_(()=>[j(c(r.episode_count)+"集 ",1)]),_:2},1024),s("div",Nt,[t(C)?(n(),E(X,{key:0,color:he(r.season_number||0),flat:""},{default:_(()=>[j(c(be(r.season_number||0)),1)]),_:2},1032,["color"])):l("",!0),d(x,{class:"ms-1",color:t(M)[r.season_number||0]?"error":"warning",variant:"text",onClick:Pe(p=>G(r.season_number),["stop"])},{default:_(()=>[d(V,{icon:t(M)[r.season_number||0]?"mdi-heart":"mdi-heart-outline"},null,8,["icon"])]),_:2},1032,["color","onClick"])])])]),_:2},1024),d(Te,null,{default:_(()=>[t(I)[r.season_number||0]?l("",!0):(n(),o("div",Rt,[d(F,{size:"48",indeterminate:"",color:"primary"})])),s("div",zt,[(n(!0),o(g,null,$(t(I)[r.season_number||0],p=>(n(),o("div",{key:p.episode_number,class:"flex flex-col space-y-4 py-4 xl:flex-row xl:space-y-4 xl:space-x-4"},[s("div",qt,[s("div",At,[s("h3",Gt,c(p.episode_number)+" - "+c(p.name),1),s("div",Ut,[s("span",Ot,c(p.air_date),1)])]),s("p",null,c(p.overview),1)]),d(B,{cover:"",class:"rounded-lg","max-width":"15rem",src:me(p.still_path||""),alt:""},null,8,["src"])]))),128))])]),_:2},1024)]),_:2},1032,["onGroup:selected"]))),128))]),_:1})])):l("",!0)]),t(e).tmdb_id?(n(),o("div",Qt,[s("div",Ft,[t(e).vote_average?(n(),o("div",Ht,[d(Ee,{modelValue:t(e).vote_average,"onUpdate:modelValue":i[3]||(i[3]=r=>t(e).vote_average=r),density:"compact",length:"10",class:"ma-2",readonly:""},null,8,["modelValue"])])):l("",!0),t(e).tmdb_id?(n(),o("div",Jt,[Wt,s("span",Xt,c(t(e).tmdb_id),1)])):l("",!0),t(e).original_title||t(e).original_name?(n(),o("div",Kt,[Yt,s("span",Zt,c(t(e).original_title||t(e).original_name),1)])):l("",!0),t(e).status?(n(),o("div",es,[ts,s("span",ss,c(t(e).status),1)])):l("",!0),t(e).release_date||t(e).first_air_date?(n(),o("div",as,[is,s("span",ns,[s("span",rs,[os,s("span",ls,c(t(e).release_date||t(e).first_air_date),1)])])])):l("",!0),t(e).original_language?(n(),o("div",ds,[cs,s("span",us,c(t(e).original_language),1)])):l("",!0),t(e).production_countries?(n(),o("div",_s,[ms,s("span",ps,[(n(!0),o(g,null,$(t(fe),r=>(n(),o("span",{key:r,class:"flex items-center justify-end text-end"},c(r),1))),128))])])):l("",!0),s("div",fs,[vs,s("span",hs,[(n(!0),o(g,null,$(t(ve),r=>(n(),o("span",{key:r,class:"block"},c(r),1))),128))])])])])):l("",!0)]),t(e).tmdb_id?(n(),o("div",bs,[d(Oe,{apipath:`tmdb/credits/${t(e).tmdb_id}/${m.type}`,linkurl:`/credits/tmdb/credits/${t(e).tmdb_id}/${m.type}?title=演员阵容`,title:"演员阵容"},null,8,["apipath","linkurl"])])):l("",!0),t(e).tmdb_id?(n(),o("div",gs,[d(Z,{apipath:`tmdb/recommend/${t(e).tmdb_id}/${m.type}`,linkurl:`/browse/tmdb/recommend/${t(e).tmdb_id}/${m.type}?title=推荐`,title:"推荐"},null,8,["apipath","linkurl"])])):l("",!0),t(e).tmdb_id?(n(),o("div",ys,[d(Z,{apipath:`tmdb/similar/${t(e).tmdb_id}/${m.type}`,linkurl:`/browse/tmdb/similar/${t(e).tmdb_id}/${m.type}?title=类似`,title:"类似"},null,8,["apipath","linkurl"])])):l("",!0)])])):l("",!0),!t(e).tmdb_id&&!t(e).douban_id&&t(y)?(n(),E(Ae,{key:2,"error-code":"500","error-title":"出错啦！","error-description":"未识别到TMDB媒体信息。"})):l("",!0),d(Ue,{modelValue:t(f),"onUpdate:modelValue":i[4]||(i[4]=r=>Ce(f)?f.value=r:null),subid:t(R),onClose:i[5]||(i[5]=r=>f.value=!1),onSave:i[6]||(i[6]=r=>f.value=!1),onRemove:i[7]||(i[7]=()=>{f.value=!1,t(e).type==="电影"?q():A()})},null,8,["modelValue","subid"])],64)}}});const Ps=N({__name:"media",setup(T){var f,v,h,y;const m=Re(),k=(v=(f=m.query)==null?void 0:f.mediaid)==null?void 0:v.toString(),e=(y=(h=m.query)==null?void 0:h.type)==null?void 0:y.toString();return(I,C)=>(n(),o("div",null,[d(xs,{mediaid:t(k),type:t(e)},null,8,["mediaid","type"])]))}});export{Ps as default};
