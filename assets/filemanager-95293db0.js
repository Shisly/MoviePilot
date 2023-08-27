import{d as K,r as b,p as z,e as te,o as r,f as p,i as t,m as e,aa as ie,I as O,aC as Oe,aU as Le,V as x,a9 as X,c as W,a2 as H,a7 as Y,j as l,a4 as Z,K as V,t as B,M as R,W as $,aF as Ue,z as de,A as G,B as A,E as F,F as E,G as ue,L as ce,aD as pe,aW as ye,aX as be,a as Q,w as J,q as Ve,P as N,a8 as le,an as Be,ao as De,aY as we,N as Ae,au as Fe,U as Ne,aZ as _e,a5 as ze,H as We,Q as Me,C as ee,D as U,av as re,R as Re,S as qe,aw as ke,a1 as Ce,ay as He,ac as Ee}from"./index-773434b7.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";import{n as xe}from"./index-705cb9e8.js";import{c as Ge}from"./formatters-79472207.js";const $e=h=>(ye("data-v-46d58f70"),h=h(),be(),h),Ke=$e(()=>Q("div",{class:"flex-grow-1"},null,-1)),Qe=$e(()=>Q("div",{class:"flex-grow-1"},null,-1)),Xe=K({__name:"Toolbar",props:{storages:Array,storage:String,path:String,endpoints:Object,axios:Object},emits:["storagechanged","pathchanged","loading","foldercreated"],setup(h,{emit:f}){const a=h,w=b(!1),y=b(""),T=z(()=>{var n,g;let c="";const d=(n=a.path)==null?void 0:n.endsWith("/"),i=(g=a.path)==null?void 0:g.split("/").filter(v=>v);return(i==null?void 0:i.map((v,S)=>(c+=v+(S<i.length-1||d?"/":""),{name:v,path:c})))??[]}),C=z(()=>{var c;return(c=a.storages)==null?void 0:c.find(d=>d.code===a.storage)});function j(c){a.storage!==c&&(f("storagechanged",c),f("pathchanged",""))}function I(c){f("pathchanged",c)}function L(){const c=T.value??[],d=(c==null?void 0:c.length)===1?"/":c[c.length-2].path;I(d)}async function P(){var i,n,g;f("loading",!0);const d={url:(i=a.endpoints)==null?void 0:i.mkdir.url.replace(/{storage}/g,a.storage).replace(/{path}/g,a.path+y.value),method:((n=a.endpoints)==null?void 0:n.mkdir.method)||"post"};await((g=a.axios)==null?void 0:g.request(d)),w.value=!1,y.value="",f("loading",!1),f("foldercreated")}return(c,d)=>{const i=te("Icon"),n=te("IconBtn");return r(),p(pe,{flat:"",dense:""},{default:t(()=>[e(Ue,{class:"overflow-hidden"},{default:t(()=>{var g;return[(g=a.storages)!=null&&g.length||0>1?(r(),p(ie,{key:0,"offset-y":""},{activator:t(({props:v})=>[e(O,Oe(Le(v)),{default:t(()=>[e(x,{icon:"mdi-arrow-down-drop-circle-outline"})]),_:2},1040)]),default:t(()=>[e(X,null,{default:t(()=>[(r(!0),W(R,null,H(h.storages,(v,S)=>{var D;return r(),p(Y,{key:S,disabled:v.code===((D=l(C))==null?void 0:D.code),onClick:M=>j(v.code)},{prepend:t(()=>[e(i,{icon:v.icon},null,8,["icon"])]),default:t(()=>[e(Z,null,{default:t(()=>[V(B(v.name),1)]),_:2},1024)]),_:2},1032,["disabled","onClick"])}),128))]),_:1})]),_:1})):$("",!0),e(O,{variant:"text","input-value":h.path==="/",class:"px-1",onClick:d[0]||(d[0]=v=>I("/"))},{default:t(()=>{var v,S;return[e(x,{icon:(v=l(C))==null?void 0:v.icon,class:"mr-2"},null,8,["icon"]),V(" "+B((S=l(C))==null?void 0:S.name),1)]}),_:1},8,["input-value"]),(r(!0),W(R,null,H(l(T),(v,S)=>(r(),p(O,{key:S,variant:"text","input-value":S===l(T).length-1,class:"px-1 d-none d-md-block",onClick:D=>I(v.path)},{default:t(()=>[e(x,{icon:" mdi-chevron-right"}),V(" "+B(v.name),1)]),_:2},1032,["input-value","onClick"]))),128))]}),_:1}),Ke,l(T).length>0?(r(),p(n,{key:0,onClick:L},{default:t(()=>[e(x,{icon:"mdi-arrow-up-bold-outline"})]),_:1})):$("",!0),e(ce,{modelValue:l(w),"onUpdate:modelValue":d[3]||(d[3]=g=>E(w)?w.value=g:null),"max-width":"600"},{activator:t(({props:g})=>[e(n,de({title:"新建文件夹"},g),{default:t(()=>[e(x,{icon:"mdi-folder-plus-outline"})]),_:2},1040)]),default:t(()=>[e(G,{title:"新建文件夹"},{default:t(()=>[e(A,null,{default:t(()=>[e(F,{modelValue:l(y),"onUpdate:modelValue":d[1]||(d[1]=g=>E(y)?y.value=g:null),label:"名称"},null,8,["modelValue"])]),_:1}),e(ue,null,{default:t(()=>[Qe,e(O,{depressed:"",onClick:d[2]||(d[2]=g=>w.value=!1)},{default:t(()=>[V(" 取消 ")]),_:1}),e(O,{disabled:!l(y),depressed:"",onClick:P},{default:t(()=>[V(" 新建 ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});const Ye=fe(Xe,[["__scopeId","data-v-46d58f70"]]),Ze={class:"grow scroll-x"},Je=K({__name:"Tree",props:{icons:Object,storage:String,path:String,endpoints:Object,axios:Object,refreshpending:Boolean},emits:["pathchanged","loading","refreshed"],setup(h,{emit:f}){const a=h,w=b([]),y=b([]),T=b([]),C=b("");function j(){w.value=[],T.value=[{type:"dir",path:"/",basename:"root",extension:"",name:"root",children:[],size:0}]}async function I(c){var g,v,S;f("loading",!0);const i={url:(g=a.endpoints)==null?void 0:g.list.url.replace(/{storage}/g,a.storage).replace(/{path}/g,c.path),method:((v=a.endpoints)==null?void 0:v.list.method)||"get"},n=await((S=a.axios)==null?void 0:S.request(i))??[];c.children=n.map(D=>(D.type==="dir"&&(D.children=[]),D)),f("loading",!1)}function L(c){let d="";y.value.length&&(d=y.value[0]),a.path!==d&&f("pathchanged",d)}function P(c){const d=[];for(d.push(T.value[0]);d.length>0;){const i=d.pop();if((i==null?void 0:i.path)===c)return i;if(i!=null&&i.children&&i.children.length)for(const n of i.children)d.push(n)}return null}return J(()=>a.storage,()=>{j()}),J(()=>a.path,()=>{a.path&&(y.value=[a.path],w.value.includes(a.path)||w.value.push(a.path))}),J(()=>a.refreshpending,async()=>{if(a.refreshpending&&a.path){const c=P(a.path);c&&(await I(c),f("refreshed"))}}),Ve(()=>{j()}),(c,d)=>{const i=te("VTreeview");return r(),p(G,{flat:"",width:"250","min-height":"500",class:"d-flex flex-column folders-tree-card"},{default:t(()=>[Q("div",Ze,[e(i,{open:l(w),active:l(y),items:l(T),search:l(C),"load-children":I,"item-key":"path","item-text":"basename",dense:"",activatable:"",transition:"",class:"folders-tree","onUpdate:active":L},{prepend:t(({item:n,open:g})=>[n.type==="dir"?(r(),p(x,{key:0},{default:t(()=>[V(B(g?"mdi-folder-open-outline":"mdi-folder-outline"),1)]),_:2},1024)):a.icons?(r(),p(x,{key:1,icon:a.icons[n.extension.toLowerCase()]||a.icons.other},null,8,["icon"])):$("",!0)]),label:t(({item:n})=>[V(B(n.basename)+" ",1),n.type==="dir"?(r(),p(O,{key:0,icon:"",class:"ml-1",onClick:N(g=>I(n),["stop"])},{default:t(()=>[e(x,{class:"pa-0 mdi-18px",color:"grey lighten-1"},{default:t(()=>[V(" mdi-refresh ")]),_:1})]),_:2},1032,["onClick"])):$("",!0)]),_:1},8,["open","active","items","search"])]),e(le),e(pe,{density:"compact"},{default:t(()=>[e(O,{icon:"",onClick:j},{default:t(()=>[e(x,{icon:"mdi-collapse-all-outline"})]),_:1})]),_:1})]),_:1})}}});const et=fe(Je,[["__scopeId","data-v-5e129369"]]),me=h=>(ye("data-v-35219496"),h=h(),be(),h),tt=me(()=>Q("br",null,null,-1)),lt=me(()=>Q("div",{class:"flex-grow-1"},null,-1)),at=me(()=>Q("div",{class:"flex-grow-1"},null,-1)),nt=K({__name:"List",props:{icons:Object,storage:String,path:String,endpoints:Object,axios:Object,refreshpending:Boolean},emits:["loading","pathchanged","refreshed","filedeleted","renamed"],setup(h,{emit:f}){const a=h,w=Be.useToast(),y=b(!0),T=De(),C=b(a.storage??""),j=b(a.axios??we),I=b([]),L=b(""),P=b(!1),c=b(!1),d=b(""),i=b(),n=Ae({path:"",target:"",tmdbid:0,season:0,type_name:"电影",transfer_type:"",episode_format:"",episode_detail:"",episode_part:"",episode_offset:null,min_filesize:0}),g=b(Array.from({length:50},(u,o)=>o+1).map(u=>({title:`第 ${u} 季`,value:u}))),v=z(()=>I.value.filter(u=>u.type==="dir"&&u.basename.includes(L.value))),S=z(()=>I.value.filter(u=>u.type==="file"&&u.basename.includes(L.value))),D=z(()=>{var u;return(u=a.path)==null?void 0:u.endsWith("/")}),M=z(()=>!D.value),ge=z(()=>{var o,_;const u=(_=(o=a.path)==null?void 0:o.split(".").pop())==null?void 0:_.toLowerCase();return["png","jpg","jpeg","gif","bmp"].includes(u??"")});async function q(){var u,o;if(y.value=!0,f("loading",!0),D.value){const s={url:(u=a.endpoints)==null?void 0:u.list.url.replace(/{storage}/g,C.value).replace(/{path}/g,a.path),method:((o=a.endpoints)==null?void 0:o.list.method)||"get"};I.value=await j.value.request(s)??[]}f("loading",!1),y.value=!1}async function ae(u){var _,s;if(await T({title:"确认",content:`是否确认删除${u.type==="dir"?"目录":"文件"} ${u.basename}？`,confirmationText:"确认",cancellationText:"取消",dialogProps:{maxWidth:600}})){f("loading",!0);const k={url:(_=a.endpoints)==null?void 0:_.delete.url.replace(/{storage}/g,C.value).replace(/{path}/g,u.path),method:((s=a.endpoints)==null?void 0:s.delete.method)||"post"};await j.value.request(k),f("filedeleted"),f("loading",!1),q()}}function he(u){f("pathchanged",u)}function Ie(u){var m;if(!u)return;const o=ke.state.auth.token,s=`/api/v1/${((m=a.endpoints)==null?void 0:m.download.url.replace(/{storage}/g,C.value).replace(/{path}/g,u)).slice(1)}&token=${o}`;window.open(s,"_blank")}function Se(u){var s;if(!u)return"";const o=ke.state.auth.token;return`/api/v1/${((s=a.endpoints)==null?void 0:s.image.url.replace(/{storage}/g,C.value).replace(/{path}/g,u)).slice(1)}&token=${o}`}function ne(u){i.value=u,d.value=u.name,P.value=!0}async function je(){var _,s,m,k;f("loading",!0);const o={url:(s=a.endpoints)==null?void 0:s.rename.url.replace(/{storage}/g,a.storage).replace(/{path}/g,(_=i.value)==null?void 0:_.path).replace(/{newname}/g,d.value),method:((m=a.endpoints)==null?void 0:m.mkdir.method)||"post"};await((k=a.axios)==null?void 0:k.request(o)),P.value=!1,d.value="",f("loading",!1),f("renamed")}function oe(u){i.value=u,c.value=!0}async function Te(){var u,o,_;n.path=((u=i.value)==null?void 0:u.path)||"";try{c.value=!1;const s=await Ce.post("transfer/manual",{},{params:n});s.success?(w.success(`${(o=i.value)==null?void 0:o.name} 整理成功！`),q()):w.error(`${(_=i.value)==null?void 0:_.name} 整理失败：${s.message}！`)}catch(s){console.log(s)}}J(()=>a.path,async()=>{I.value=[],await q()}),J(()=>a.refreshpending,async()=>{a.refreshpending&&(await q(),f("refreshed"))});const ve=b([{title:"重命名",value:1,props:{prependIcon:"mdi-rename",click:ne}},{title:"整理",value:2,props:{prependIcon:"mdi-folder-arrow-right",click:oe}},{title:"删除",value:3,props:{prependIcon:"mdi-delete-outline",color:"error",click:ae}}]);return Ve(()=>{q()}),(u,o)=>{const _=te("IconBtn");return r(),W(R,null,[e(G,{class:"d-flex flex-column"},{default:t(()=>[l(y)?(r(),p(A,{key:0,class:"text-center flex flex-col items-center"},{default:t(()=>[e(Fe,{size:"48",indeterminate:"",color:"primary"})]),_:1})):$("",!0),h.path?l(M)&&!l(ge)?(r(),p(A,{key:2,class:"grow d-flex justify-center align-center break-all"},{default:t(()=>[V(" 文件: "+B(h.path),1),tt]),_:1})):l(M)&&l(ge)?(r(),p(A,{key:3,class:"grow d-flex justify-center align-center"},{default:t(()=>[e(Ne,{src:Se(h.path),"max-width":"100%","max-height":"100%"},null,8,["src"])]),_:1})):l(v).length||l(S).length?(r(),p(A,{key:4,class:"p-0"},{default:t(()=>[l(v).length?(r(),p(X,{key:0,subheader:""},{default:t(()=>[e(_e,null,{default:t(()=>[V("目录")]),_:1}),(r(!0),W(R,null,H(l(v),(s,m)=>(r(),p(Y,{key:m,class:"px-3 pe-1",onClick:k=>he(s.path)},{prepend:t(()=>[e(x,{icon:"mdi-folder-outline"})]),append:t(()=>[e(_,{class:"d-sm-none"},{default:t(()=>[e(x,{icon:"mdi-dots-vertical"}),e(ie,{activator:"parent","close-on-content-click":""},{default:t(()=>[e(X,null,{default:t(()=>[(r(!0),W(R,null,H(l(ve),(k,se)=>(r(),p(Y,{key:se,variant:"plain","base-color":k.props.color,onClick:N(Pe=>k.props.click(s),["stop"])},{prepend:t(()=>[e(x,{icon:k.props.prependIcon},null,8,["icon"])]),default:t(()=>[e(Z,{textContent:B(k.title)},null,8,["textContent"])]),_:2},1032,["base-color","onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024),e(_,{class:"d-none d-sm-block",onClick:N(k=>ne(s),["stop"])},{default:t(()=>[e(x,{icon:"mdi-rename"})]),_:2},1032,["onClick"]),e(_,{class:"d-none d-sm-block",onClick:N(k=>oe(s),["stop"])},{default:t(()=>[e(x,{icon:"mdi-folder-arrow-right"})]),_:2},1032,["onClick"]),e(_,{class:"d-none d-sm-block",onClick:N(k=>ae(s),["stop"])},{default:t(()=>[e(x,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"])]),default:t(()=>[e(Z,{textContent:B(s.name)},null,8,["textContent"])]),_:2},1032,["onClick"]))),128))]),_:1})):$("",!0),l(v).length&&l(S).length?(r(),p(le,{key:1})):$("",!0),l(S).length?(r(),p(X,{key:2,subheader:""},{default:t(()=>[e(_e,null,{default:t(()=>[V("文件")]),_:1}),(r(!0),W(R,null,H(l(S),(s,m)=>(r(),p(Y,{key:m,class:"pl-3 pe-1",onClick:k=>he(s.path)},{prepend:t(()=>{var k;return[a.icons?(r(),p(x,{key:0,icon:a.icons[s.extension.toLowerCase()]||((k=a.icons)==null?void 0:k.other)},null,8,["icon"])):$("",!0)]}),append:t(()=>[e(_,{class:"d-sm-none"},{default:t(()=>[e(x,{icon:"mdi-dots-vertical"}),e(ie,{activator:"parent","close-on-content-click":""},{default:t(()=>[e(X,null,{default:t(()=>[(r(!0),W(R,null,H(l(ve),(k,se)=>(r(),p(Y,{key:se,variant:"plain","base-color":k.props.color,onClick:N(Pe=>k.props.click(s),["stop"])},{prepend:t(()=>[e(x,{icon:k.props.prependIcon},null,8,["icon"])]),default:t(()=>[e(Z,{textContent:B(k.title)},null,8,["textContent"])]),_:2},1032,["base-color","onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024),e(_,{class:"d-none d-sm-block",onClick:N(k=>ne(s),["stop"])},{default:t(()=>[e(x,{icon:"mdi-rename"})]),_:2},1032,["onClick"]),e(_,{class:"d-none d-sm-block",onClick:N(k=>oe(s),["stop"])},{default:t(()=>[e(x,{icon:"mdi-folder-arrow-right"})]),_:2},1032,["onClick"]),e(_,{class:"d-none d-sm-block",onClick:N(k=>ae(s),["stop"])},{default:t(()=>[e(x,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"])]),default:t(()=>[e(Z,{textContent:B(s.name)},null,8,["textContent"]),e(ze,null,{default:t(()=>[V(B(l(Ge)(s.size)),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):$("",!0)]),_:1})):l(L)?(r(),p(A,{key:5,class:"grow d-flex justify-center align-center grey--text py-5"},{default:t(()=>[V(" 没有目录或文件 ")]),_:1})):l(y)?$("",!0):(r(),p(A,{key:6,class:"grow d-flex justify-center align-center grey--text py-5"},{default:t(()=>[V(" 空目录 ")]),_:1})):(r(),p(A,{key:1,class:"grow d-flex justify-center align-center grey--text"},{default:t(()=>[V(" 选择目录或文件 ")]),_:1})),h.path?(r(),p(le,{key:7})):$("",!0),l(y)?$("",!0):(r(),p(pe,{key:8,density:"compact",flat:"",color:"gray"},{default:t(()=>[l(M)?$("",!0):(r(),p(F,{key:0,modelValue:l(L),"onUpdate:modelValue":o[0]||(o[0]=s=>E(L)?L.value=s:null),"hide-details":"",flat:"",density:"compact",variant:"solo-filled",placeholder:"搜索 ...","prepend-inner-icon":"mdi-filter-outline",class:"me-2"},null,8,["modelValue"])),l(M)?(r(),p(We,{key:1})):$("",!0),l(M)?(r(),p(O,{key:2,onClick:o[1]||(o[1]=s=>Ie(a.path||""))},{default:t(()=>[e(x,null,{default:t(()=>[V("mdi-download")]),_:1})]),_:1})):$("",!0),l(M)?$("",!0):(r(),p(O,{key:3,onClick:q},{default:t(()=>[e(x,null,{default:t(()=>[V("mdi-refresh")]),_:1})]),_:1}))]),_:1}))]),_:1}),e(ce,{modelValue:l(P),"onUpdate:modelValue":o[4]||(o[4]=s=>E(P)?P.value=s:null),"max-width":"600"},{activator:t(({props:s})=>[e(_,de({title:"重命名"},s),{default:t(()=>[e(x,{icon:"mdi-rename-outline"})]),_:2},1040)]),default:t(()=>[e(G,{title:"重命名"},{default:t(()=>[e(A,null,{default:t(()=>[e(F,{modelValue:l(d),"onUpdate:modelValue":o[2]||(o[2]=s=>E(d)?d.value=s:null),label:"名称"},null,8,["modelValue"])]),_:1}),e(ue,null,{default:t(()=>[lt,e(O,{depressed:"",onClick:o[3]||(o[3]=s=>P.value=!1)},{default:t(()=>[V(" 取消 ")]),_:1}),e(O,{disabled:!l(d),depressed:"",onClick:je},{default:t(()=>[V(" 重命名 ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(ce,{modelValue:l(c),"onUpdate:modelValue":o[16]||(o[16]=s=>E(c)?c.value=s:null),"max-width":"800",scrollable:""},{activator:t(({props:s})=>[e(_,de({title:"整理"},s),{default:t(()=>[e(x,{icon:"mdi-folder-arrow-right-outline"})]),_:2},1040)]),default:t(()=>{var s;return[e(G,{title:`文件整理 - ${(s=l(i))==null?void 0:s.name}`},{default:t(()=>[e(A,{class:"pt-2"},{default:t(()=>[e(Me,{onSubmit:N(()=>{},["prevent"])},{default:t(()=>[e(ee,null,{default:t(()=>[e(U,{cols:"12",md:"8"},{default:t(()=>[e(F,{modelValue:l(n).target,"onUpdate:modelValue":o[5]||(o[5]=m=>l(n).target=m),label:"目的路径"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"4"},{default:t(()=>[e(re,{modelValue:l(n).transfer_type,"onUpdate:modelValue":o[6]||(o[6]=m=>l(n).transfer_type=m),label:"整理方式",items:[{title:"默认",value:""},{title:"移动",value:"move"},{title:"复制",value:"copy"},{title:"硬链接",value:"link"},{title:"软链接",value:"softlink"}]},null,8,["modelValue"])]),_:1})]),_:1}),e(ee,null,{default:t(()=>[e(U,{cols:"12",md:"4"},{default:t(()=>[e(re,{modelValue:l(n).type_name,"onUpdate:modelValue":o[7]||(o[7]=m=>l(n).type_name=m),label:"类型",items:[{title:"电影",value:"电影"},{title:"电视剧",value:"电视剧"}]},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).tmdbid,"onUpdate:modelValue":o[8]||(o[8]=m=>l(n).tmdbid=m),label:"TMDBID",rules:[l(xe)]},null,8,["modelValue","rules"])]),_:1}),e(U,{cols:"12",md:"4"},{default:t(()=>[Re(e(re,{modelValue:l(n).season,"onUpdate:modelValue":o[9]||(o[9]=m=>l(n).season=m),modelModifiers:{number:!0},label:"季",items:l(g)},null,8,["modelValue","items"]),[[qe,l(n).type_name==="电视剧"]])]),_:1})]),_:1}),e(ee,null,{default:t(()=>[e(U,{cols:"12",md:"8"},{default:t(()=>[e(F,{modelValue:l(n).episode_format,"onUpdate:modelValue":o[10]||(o[10]=m=>l(n).episode_format=m),label:"集数定位",placeholder:"使用{ep}定位集数"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).episode_detail,"onUpdate:modelValue":o[11]||(o[11]=m=>l(n).episode_detail=m),label:"指定集数",placeholder:"起始集,终止集，如1或1,2"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).episode_part,"onUpdate:modelValue":o[12]||(o[12]=m=>l(n).episode_part=m),label:"指定Part",placeholder:"如part1"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).episode_offset,"onUpdate:modelValue":o[13]||(o[13]=m=>l(n).episode_offset=m),modelModifiers:{number:!0},label:"集数偏移",placeholder:"如-10"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).min_filesize,"onUpdate:modelValue":o[14]||(o[14]=m=>l(n).min_filesize=m),modelModifiers:{number:!0},label:"最小文件大小（MB）",rules:[l(xe)],placeholder:"0"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(ue,null,{default:t(()=>[at,e(O,{depressed:"",onClick:o[15]||(o[15]=m=>c.value=!1)},{default:t(()=>[V(" 取消 ")]),_:1}),e(O,{disabled:!l(n).tmdbid,depressed:"",onClick:Te},{default:t(()=>[V(" 开始整理 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["title"])]}),_:1},8,["modelValue"])],64)}}});const ot=fe(nt,[["__scopeId","data-v-35219496"]]),st=K({__name:"FileBrowser",props:{storages:String,storage:String,path:String,tree:Boolean,endpoints:Object,axios:Object,axiosconfig:Object},setup(h){const f=h,a=[{name:"本地",code:"local",icon:"mdi-folder-multiple-outline"}],w={zip:"mdi-folder-zip-outline",rar:"mdi-folder-zip-outline",htm:"mdi-language-html5",html:"mdi-language-html5",js:"mdi-nodejs",json:"mdi-file-document-outline",md:"mdi-language-markdown-outline",pdf:"mdi-file-pdf",png:"mdi-file-image",jpg:"mdi-file-image",jpeg:"mdi-file-image",mp4:"mdi-filmstrip",mkv:"mdi-filmstrip",avi:"mdi-filmstrip",wmv:"mdi-filmstrip",mov:"mdi-filmstrip",txt:"mdi-file-document-outline",xls:"mdi-file-excel",other:"mdi-file-outline"},y=b(f.path),T=b(0),C=b("local"),j=b(!1),I=b(),L=z(()=>{var n;const i=(n=f.storages)==null?void 0:n.split(",");return a.filter(g=>i==null?void 0:i.includes(g.code))});function P(i){}function c(i){C.value=i}function d(i){y.value=i}return He(()=>{C.value=f.storage??"local",I.value=f.axios??we.create(f.axiosconfig),y.value||d("/")}),(i,n)=>(r(),p(G,{class:"mx-auto",loading:l(T)>0},{default:t(()=>[e(Ye,{path:l(y),storages:l(L),storage:l(C),endpoints:f.endpoints,axios:l(I),onStoragechanged:c,onPathchanged:d,onFoldercreated:n[0]||(n[0]=g=>j.value=!0)},null,8,["path","storages","storage","endpoints","axios"]),e(ee,{"no-gutters":""},{default:t(()=>[h.tree?(r(),p(U,{key:0,sm:"auto",class:"d-none d-md-block"},{default:t(()=>[e(et,{path:l(y),storage:l(C),icons:w,endpoints:h.endpoints,axios:l(I),refreshpending:l(j),onPathchanged:d,onLoading:P,onRefreshed:n[1]||(n[1]=g=>j.value=!1)},null,8,["path","storage","endpoints","axios","refreshpending"])]),_:1})):$("",!0),h.tree?(r(),p(le,{key:1,vertical:""})):$("",!0),e(U,null,{default:t(()=>[e(ot,{path:l(y),storage:l(C),icons:w,endpoints:h.endpoints,axios:l(I),refreshpending:l(j),onPathchanged:d,onLoading:P,onRefreshed:n[2]||(n[2]=g=>j.value=!1),onFiledeleted:n[3]||(n[3]=g=>j.value=!0),onRenamed:n[4]||(n[4]=g=>j.value=!0)},null,8,["path","storage","endpoints","axios","refreshpending"])]),_:1})]),_:1})]),_:1},8,["loading"]))}}),rt=K({__name:"FileBrowserView",setup(h){var w;const f={list:{url:"/filebrowser/list?path={path}",method:"get"},mkdir:{url:"/filebrowser/mkdir?path={path}",method:"get"},delete:{url:"/filebrowser/delete?path={path}",method:"get"},download:{url:"/filebrowser/download?path={path}",method:"get"},image:{url:"/filebrowser/image?path={path}",method:"get"},rename:{url:"/filebrowser/rename?path={path}&new_name={newname}",method:"get"}},a=Ee("systemEnv")??{DOWNLOAD_PATH:"/"};return a!=null&&a.DOWNLOAD_PATH&&!((w=a.DOWNLOAD_PATH)!=null&&w.endsWith("/"))&&(a.DOWNLOAD_PATH+="/"),(y,T)=>{var C;return r(),W("div",null,[e(st,{storages:"local",tree:!1,path:(C=l(a))==null?void 0:C.DOWNLOAD_PATH,endpoints:f,axios:l(Ce)},null,8,["path","axios"])])}}}),pt=K({__name:"filemanager",setup(h){return(f,a)=>(r(),p(rt))}});export{pt as default};
