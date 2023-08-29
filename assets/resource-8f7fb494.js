import{d as Y,an as re,ao as ie,r as h,q as le,e as ue,o,f as m,ap as ce,j as t,i as s,m as r,U as de,a3 as me,a as U,V as X,aa as pe,a9 as fe,c as T,a2 as K,a7 as ve,a4 as ye,t as w,M as q,Y as ge,K as k,X as Z,B as ee,_ as S,W as v,n as he,I as _e,P as te,G as we,R as ke,S as Ve,a8 as be,aq as xe,a6 as ae,a0 as Ce,A as oe,a1 as G,ar as $e,as as ze,N as Se,at as Te,au as se,C as Ie,av as D,D as F,aw as De,b as Fe}from"./index-3b37923e.js";import{a as Le}from"./formatters-79472207.js";import{_ as Oe}from"./NoDataFound.vue_vue_type_style_index_0_lang-45250766.js";const Be={class:"text-green-700 ms-2 text-sm"},Pe={class:"text-orange-700 ms-2 text-sm"},Ee={class:"me-n3"},Ne=Y({__name:"TorrentCard",props:{torrent:Object,more:Array,width:String,height:String},setup(M){var A,R,W;const f=M,b=re.useToast(),L=ie(),V=h(!1),i=h((A=f.torrent)==null?void 0:A.torrent_info),$=h((R=f.torrent)==null?void 0:R.media_info),_=h((W=f.torrent)==null?void 0:W.meta_info),u=h("");async function z(){var y;try{u.value=(await G.get(`site/icon/${(y=i==null?void 0:i.value)==null?void 0:y.site}`)).data.icon}catch(c){console.error(c)}}async function x(y=void 0,c=void 0,l=void 0){var e;(!c||!l||!y)&&(y=(e=i.value)==null?void 0:e.site_name,c=$.value,l=i.value),await L({title:"确认",content:`是否确认下载【${y}】${l==null?void 0:l.title} ?`,confirmationText:"确认",cancellationText:"取消",dialogProps:{maxWidth:600}})&&O(c,l)}async function O(y,c){$e();try{(await G.post("download",{media_in:y,torrent_in:c})).success?b.success(`${c==null?void 0:c.site_name} ${c==null?void 0:c.title} 添加下载成功！`):b.error(`${c==null?void 0:c.site_name} ${c==null?void 0:c.title} 添加下载失败！`)}catch(l){console.error(l)}ze()}function B(){var y;window.open((y=i.value)==null?void 0:y.page_url,"_blank")}async function P(){var y;window.open((y=i.value)==null?void 0:y.enclosure,"_blank")}function E(y,c){return y===0?"text-white bg-lime-500":y<1?"text-white bg-green-500":c!==1?"text-white bg-sky-500":"text-white bg-gray-500"}le(()=>{z()});const N=h([{title:"查看详情",value:1,props:{prependIcon:"mdi-information",click:B}},{title:"下载种子",value:2,props:{prependIcon:"mdi-download",click:P}}]);return(y,c)=>{const l=ue("IconBtn");return o(),m(oe,{width:f.width,height:f.height,onClick:x},ce({default:s(()=>{var a;return[r(Z,{class:"py-1"},{append:s(()=>[U("div",Ee,[r(l,null,{default:s(()=>[r(X,{icon:"mdi-dots-vertical"}),r(pe,{activator:"parent","close-on-content-click":""},{default:s(()=>[r(fe,null,{default:s(()=>[(o(!0),T(q,null,K(t(N),(e,n)=>(o(),m(ve,{key:n,variant:"plain",onClick:e.props.click},{prepend:s(()=>[r(X,{icon:e.props.prependIcon},null,8,["icon"])]),default:s(()=>[r(ye,{textContent:w(e.title)},null,8,["textContent"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})])]),default:s(()=>[r(ge,{class:"break-words overflow-visible whitespace-break-spaces"},{default:s(()=>{var e,n,p,d;return[k(w((e=t($))==null?void 0:e.title)+" "+w((n=t(_))==null?void 0:n.season_episode)+" ",1),U("span",Be,"↑"+w((p=t(i))==null?void 0:p.seeders),1),U("span",Pe,"↓"+w((d=t(i))==null?void 0:d.peers),1)]}),_:1})]),_:1}),r(ee,{class:"text-subtitle-2"},{default:s(()=>{var e;return[k(w((e=t(i))==null?void 0:e.title),1)]}),_:1}),r(ee,null,{default:s(()=>{var e;return[k(w((e=t(i))==null?void 0:e.description),1)]}),_:1}),(a=t(i))!=null&&a.labels?(o(),m(Z,{key:0,class:"pb-3 pt-0 pe-12"},{default:s(()=>{var e,n,p,d,C,I,j,J,H,Q;return[(o(!0),T(q,null,K((e=t(i))==null?void 0:e.labels,(g,ne)=>(o(),m(S,{key:ne,variant:"elevated",size:"small",color:"primary",class:"me-1 mb-1"},{default:s(()=>[k(w(g),1)]),_:2},1024))),128)),(n=t(_))!=null&&n.edition?(o(),m(S,{key:0,variant:"elevated",size:"small",class:"me-1 mb-1 text-white bg-red-500"},{default:s(()=>{var g;return[k(w((g=t(_))==null?void 0:g.edition),1)]}),_:1})):v("",!0),(p=t(_))!=null&&p.resource_pix?(o(),m(S,{key:1,variant:"elevated",size:"small",class:"me-1 mb-1 text-white bg-red-500"},{default:s(()=>{var g;return[k(w((g=t(_))==null?void 0:g.resource_pix),1)]}),_:1})):v("",!0),(d=t(_))!=null&&d.video_encode?(o(),m(S,{key:2,variant:"elevated",size:"small",class:"me-1 mb-1 text-white bg-orange-500"},{default:s(()=>{var g;return[k(w((g=t(_))==null?void 0:g.video_encode),1)]}),_:1})):v("",!0),(C=t(i))!=null&&C.size?(o(),m(S,{key:3,variant:"elevated",size:"small",class:"me-1 mb-1 text-white bg-yellow-500"},{default:s(()=>{var g;return[k(w(t(Le)((g=t(i))==null?void 0:g.size)),1)]}),_:1})):v("",!0),(I=t(_))!=null&&I.resource_team?(o(),m(S,{key:4,variant:"elevated",size:"small",class:"me-1 mb-1 text-white bg-cyan-500"},{default:s(()=>{var g;return[k(w((g=t(_))==null?void 0:g.resource_team),1)]}),_:1})):v("",!0),((j=t(i))==null?void 0:j.downloadvolumefactor)!==1||((J=t(i))==null?void 0:J.uploadvolumefactor)!==1?(o(),m(S,{key:5,class:he([E((H=t(i))==null?void 0:H.downloadvolumefactor,(Q=t(i))==null?void 0:Q.uploadvolumefactor),"me-1 mb-1"]),variant:"elevated",size:"small"},{default:s(()=>{var g;return[k(w((g=t(i))==null?void 0:g.volume_factor),1)]}),_:1},8,["class"])):v("",!0)]}),_:1})):v("",!0),r(we,null,{default:s(()=>[f.more&&f.more.length>0?(o(),m(_e,{key:0,onClick:c[0]||(c[0]=te(e=>V.value=!t(V),["stop"]))},{append:s(()=>[r(X,{icon:t(V)?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),default:s(()=>[k(" 更多来源 ")]),_:1})):v("",!0)]),_:1}),r(Ce,null,{default:s(()=>[ke(U("div",null,[r(be),r(xe,{class:"p-3"},{default:s(()=>[(o(!0),T(q,null,K(f.more,(e,n)=>(o(),m(S,{key:n,onClick:te(p=>{var d;return x((d=e.torrent_info)==null?void 0:d.site_name,e.media_info,e.torrent_info)},["stop"])},{append:s(()=>{var p,d,C,I;return[r(ae,{color:"primary",content:`↑${(p=e.torrent_info)==null?void 0:p.seeders}`,inline:"",size:"small"},null,8,["content"]),((d=e.torrent_info)==null?void 0:d.downloadvolumefactor)!==1||((C=e.torrent_info)==null?void 0:C.uploadvolumefactor)!==1?(o(),m(ae,{key:0,content:(I=e.torrent_info)==null?void 0:I.volume_factor,inline:"",size:"small"},null,8,["content"])):v("",!0)]}),default:s(()=>[k(" "+w(e.torrent_info.site_name),1)]),_:2},1032,["onClick"]))),128))]),_:1})],512),[[Ve,t(V)]])]),_:1})]}),_:2},[t(V)?void 0:{name:"image",fn:s(()=>[r(me,{class:"absolute right-2 bottom-2 rounded",variant:"flat",rounded:"0"},{default:s(()=>[r(de,{src:t(u)},null,8,["src"])]),_:1})]),key:"0"}]),1032,["width","height"])}}}),Ue={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},qe={key:1,class:"grid gap-3 grid-torrent-card items-start"},Ge=Y({__name:"TorrentCardListView",props:{keyword:String,type:String,area:String},setup(M){const f=M,b=h([]),L=h(),V=h(!1),i=h(""),$=h(0),_=h(),u=Se({site:[],season:[],releaseGroup:[],videoCode:[],freeState:[],edition:[],resolution:[]}),z=h([]),x=h([]),O=h([]),B=h([]),P=h([]),E=h([]),N=h([]);Te(()=>{var a;b.value.splice(0);const l=(e,n)=>e.length===0||n&&e.includes(n);(a=L.value)==null||a.forEach(e=>{if(e.length>0){const n=e.filter(p=>{const{meta_info:d,torrent_info:C}=p,{season_episode:I,resource_team:j,video_encode:J}=d;return l(u.site,C.site_name)&&l(u.freeState,C.volume_factor)&&l(u.season,I)&&l(u.releaseGroup,j)&&l(u.videoCode,J)&&l(u.resolution,d.resource_pix)&&l(u.edition,d.edition)});if(n.length>0){const p=n[0];n.length>1&&(p.more=n.slice(1)),b.value.push(p)}}})});async function A(){var l,a;try{let e;const n=f.keyword??"",p=f.type??"",d=f.area??"";return n?(y(),((l=f.keyword)==null?void 0:l.startsWith("tmdb:"))??((a=f.keyword)==null?void 0:a.startsWith("douban:"))?e=await G.get(`search/media/${f.keyword}`,{params:{mtype:p,area:d}}):e=await G.get(`search/title/${f.keyword}`),c()):e=await G.get("search/last"),V.value=!0,Promise.resolve(e)}catch(e){return console.error(e),Promise.reject(e)}}function R(){A().then(l=>{const a=new Map;l.forEach(e=>{const{torrent_info:n}=e;W(e);const p=`${n.title}_${n.size}`;if(a.has(p)){const d=a.get(p);d==null||d.push(e)}else a.set(p,[e])}),L.value=a})}function W(l){const{torrent_info:a,meta_info:e}=l,n=(p,d)=>{d&&!p.includes(d)&&p.push(d)};n(z.value,a==null?void 0:a.site_name),n(x.value,e==null?void 0:e.season_episode),n(O.value,e==null?void 0:e.resource_team),n(B.value,e==null?void 0:e.video_encode),n(P.value,a==null?void 0:a.volume_factor),n(E.value,e==null?void 0:e.edition),n(N.value,e==null?void 0:e.resource_pix)}function y(){i.value="正在搜索，请稍候...";const l=De.state.auth.token;_.value=new EventSource(`/api/v1/system/progress/search?token=${l}`),_.value.onmessage=a=>{const e=JSON.parse(a.data);e&&(i.value=e.text,$.value=e.value)}}function c(){var l;(l=_.value)==null||l.close()}return le(R),(l,a)=>(o(),T(q,null,[r(oe,{class:"bg-transparent mb-3 pt-2 shadow-none"},{default:s(()=>[r(Ie,null,{default:s(()=>[z.value.length>0?(o(),m(F,{key:0,cols:"6",md:""},{default:s(()=>[r(D,{modelValue:t(u).site,"onUpdate:modelValue":a[0]||(a[0]=e=>t(u).site=e),items:z.value,size:"small",density:"compact",chips:"",label:"站点",multiple:""},null,8,["modelValue","items"])]),_:1})):v("",!0),x.value.length>0?(o(),m(F,{key:1,cols:"6",md:""},{default:s(()=>[r(D,{modelValue:t(u).season,"onUpdate:modelValue":a[1]||(a[1]=e=>t(u).season=e),items:x.value,size:"small",density:"compact",chips:"",label:"季集",multiple:""},null,8,["modelValue","items"])]),_:1})):v("",!0),O.value.length>0?(o(),m(F,{key:2,cols:"6",md:""},{default:s(()=>[r(D,{modelValue:t(u).releaseGroup,"onUpdate:modelValue":a[2]||(a[2]=e=>t(u).releaseGroup=e),items:O.value,size:"small",density:"compact",chips:"",label:"制作组",multiple:""},null,8,["modelValue","items"])]),_:1})):v("",!0),E.value.length>0?(o(),m(F,{key:3,cols:"6",md:""},{default:s(()=>[r(D,{modelValue:t(u).edition,"onUpdate:modelValue":a[3]||(a[3]=e=>t(u).edition=e),items:E.value,size:"small",density:"compact",chips:"",label:"质量",multiple:""},null,8,["modelValue","items"])]),_:1})):v("",!0),N.value.length>0?(o(),m(F,{key:4,cols:"6",md:""},{default:s(()=>[r(D,{modelValue:t(u).resolution,"onUpdate:modelValue":a[4]||(a[4]=e=>t(u).resolution=e),items:N.value,size:"small",density:"compact",chips:"",label:"分辨率",multiple:""},null,8,["modelValue","items"])]),_:1})):v("",!0),B.value.length>0?(o(),m(F,{key:5,cols:"6",md:""},{default:s(()=>[r(D,{modelValue:t(u).videoCode,"onUpdate:modelValue":a[5]||(a[5]=e=>t(u).videoCode=e),items:B.value,size:"small",density:"compact",chips:"",label:"视频编码",multiple:""},null,8,["modelValue","items"])]),_:1})):v("",!0),P.value.length>0?(o(),m(F,{key:6,cols:"6",md:""},{default:s(()=>[r(D,{modelValue:t(u).freeState,"onUpdate:modelValue":a[6]||(a[6]=e=>t(u).freeState=e),items:P.value,size:"small",density:"compact",chips:"",label:"促销状态",multiple:""},null,8,["modelValue","items"])]),_:1})):v("",!0)]),_:1})]),_:1}),V.value?v("",!0):(o(),T("div",Ue,[f.keyword?v("",!0):(o(),m(se,{key:0,size:"48",indeterminate:"",color:"primary"})),f.keyword?(o(),m(se,{key:1,class:"mb-3",color:"primary","model-value":$.value,size:"64"},null,8,["model-value"])):v("",!0),U("span",null,w(i.value),1)])),b.value.length>0?(o(),T("div",qe,[(o(!0),T(q,null,K(b.value,e=>(o(),m(Ne,{key:`${e.torrent_info.title}_${e.torrent_info.site}`,torrent:e,more:e.more},null,8,["torrent","more"]))),128))])):v("",!0),b.value.length===0&&V.value?(o(),m(Oe,{key:2,"error-code":"404","error-title":"没有资源","error-description":"没有搜索到符合条件的资源。"})):v("",!0)],64))}});const We=Y({__name:"resource",setup(M){var i,$,_,u,z,x;const f=Fe(),b=(($=(i=f.query)==null?void 0:i.keyword)==null?void 0:$.toString())??"",L=((u=(_=f.query)==null?void 0:_.type)==null?void 0:u.toString())??"",V=((x=(z=f.query)==null?void 0:z.area)==null?void 0:x.toString())??"";return(O,B)=>(o(),T("div",null,[r(Ge,{keyword:t(b),type:t(L),area:t(V)},null,8,["keyword","type","area"])]))}});export{We as default};
