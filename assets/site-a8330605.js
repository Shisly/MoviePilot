import{d as Z,r as d,an as he,N as Ue,q as Ie,e as ae,o as c,c as h,m as e,i as t,a3 as Be,U as De,j as l,X as Te,Y as Le,K as p,t as f,Z as Pe,f as y,W as w,B as A,V,z as R,aA as E,a8 as Fe,G as W,P,I as B,A as M,Q as se,C as F,D as _,E as $,J as ze,H as oe,F as N,L as X,av as re,O as Ae,ax as ne,a as C,M as j,a2 as de,_ as Re,aa as Ee,a9 as Me,a7 as ie,a4 as ue,a1 as S,ay as Ne,au as Ke}from"./index-b772e4ff.js";import{_ as je}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-2852e4e6.js";import{a as qe}from"./formatters-080fb386.js";import{r as K,n as Y}from"./index-705cb9e8.js";import{E as He}from"./ExistIcon-088f6a03.js";import{_ as Oe}from"./NoDataFound.vue_vue_type_style_index_0_lang-6ee34e42.js";import"./_plugin-vue_export-helper-c27b6911.js";const Ge={class:"text-high-emphasis pt-1"},Je={class:"text-sm my-1"},Qe={class:"text-sm"},We={class:"text-nowrap whitespace-nowrap"},Xe={class:"me-n3"},Ye=Z({__name:"SiteCard",props:{site:Object,width:String,height:String},emits:["remove","update"],setup(q,{emit:g}){const r=q,k=d(!1),D=d(""),v=he.useToast(),U=d("测试"),H=d(!1),O=d("更新"),G=d(!1),T=d(!1),x=d(!1),L=d(!1),ce=[{title:"标题",key:"title",sortable:!1},{title:"时间",key:"pubdate",sortable:!0},{title:"大小",key:"size",sortable:!0},{title:"做种",key:"seeders",sortable:!0},{title:"下载",key:"peers",sortable:!0},{title:"",key:"actions",sortable:!1}],ee=d([]),te=d(""),J=d(!1),me=d(0),Q=d(25),pe=d(1),b=d({username:"",password:""}),fe=[{title:"启用",value:!0},{title:"停用",value:!1}],n=Ue(r.site??{});function _e(i){window.open(i,"_blank")}async function ve(i){window.open(i,"_blank")}async function Ve(){var i;try{D.value=(await S.get(`site/icon/${(i=r.site)==null?void 0:i.id}`)).data.icon}catch(a){console.error(a)}}async function ye(){var i,a,m;try{U.value="测试中 ...",H.value=!0;const u=await S.get(`site/test/${(i=r.site)==null?void 0:i.id}`);u.success?v.success(`${(a=r.site)==null?void 0:a.name} 连通性测试成功，可正常使用！`):v.error(`${(m=r.site)==null?void 0:m.name} 连通性测试失败：${u.message}`),U.value="测试",H.value=!1}catch(u){console.error(u)}}async function we(){T.value=!0}async function ge(){x.value=!0}async function ke(){L.value=!0,xe()}async function le(){var i,a,m;try{if(!b.value.username||!b.value.password)return;T.value=!1,O.value="更新中 ...",G.value=!0;const u=await S.get(`site/cookie/${(i=r.site)==null?void 0:i.id}`,{params:{username:b.value.username,password:b.value.password}});u.success?v.success(`${(a=r.site)==null?void 0:a.name} 更新Cookie & UA 成功！`):v.error(`${(m=r.site)==null?void 0:m.name} 更新失败：${u.message}`),O.value="更新",G.value=!1}catch(u){console.error(u)}}async function be(){var i,a,m,u;try{x.value=!1;const I=await S.delete(`site/${(i=r.site)==null?void 0:i.id}`);I.success?(v.success(`${(a=r.site)==null?void 0:a.name} 删除成功！`),g("remove")):v.error(`${(m=r.site)==null?void 0:m.name} 删除失败：${I.message}`)}catch(I){v.error(`${(u=r.site)==null?void 0:u.name} 删除失败！`),console.error(I)}}async function Ce(){var i,a,m;try{x.value=!1;const u=await S.put("site",n);u.success?(v.success(`${(i=r.site)==null?void 0:i.name} 更新成功！`),g("update")):v.error(`${(a=r.site)==null?void 0:a.name} 更新失败：${u.message}`)}catch(u){v.error(`${(m=r.site)==null?void 0:m.name} 更新失败！`),console.error(u)}}async function xe(){var i;J.value=!0;try{ee.value=await S.get("search/title",{params:{keyword:te.value,page:pe.value,site:(i=r.site)==null?void 0:i.id}}),J.value=!1}catch(a){console.error(a)}}return Ie(()=>{Ve()}),(i,a)=>{const m=je,u=ae("IconBtn"),I=ae("VDataTable");return c(),h(j,null,[e(M,{height:r.height,width:r.width,flat:!l(n).is_active,class:"overflow-hidden",onClick:ge},{image:t(()=>[e(Be,{class:"absolute right-2 bottom-2 rounded",variant:"flat",rounded:"0"},{default:t(()=>[e(De,{src:l(D)},null,8,["src"])]),_:1})]),default:t(()=>[e(Te,null,{default:t(()=>[e(Le,{class:"font-bold"},{default:t(()=>{var o;return[p(f((o=r.site)==null?void 0:o.name),1)]}),_:1}),e(Pe,null,{default:t(()=>{var o;return[p(f((o=r.site)==null?void 0:o.url),1)]}),_:1})]),_:1}),l(n).is_active?(c(),y(He,{key:0})):w("",!0),e(A,{class:"py-2"},{default:t(()=>[l(n).render?(c(),y(E,{key:0,text:"浏览器仿真"},{activator:t(({props:o})=>[e(V,R({color:"primary",class:"me-2"},o,{icon:"mdi-apple-safari"}),null,16)]),_:1})):w("",!0),l(n).proxy?(c(),y(E,{key:1,text:"代理"},{activator:t(({props:o})=>[e(V,R({color:"primary",class:"me-2"},o,{icon:"mdi-network-outline"}),null,16)]),_:1})):w("",!0),l(n).limit_interval?(c(),y(E,{key:2,text:"流控"},{activator:t(({props:o})=>[e(V,R({color:"primary",class:"me-2"},o,{icon:"mdi-speedometer"}),null,16)]),_:1})):w("",!0),l(n).filter?(c(),y(E,{key:3,text:"过滤"},{activator:t(({props:o})=>[e(V,R({color:"primary",class:"me-2"},o,{icon:"mdi-filter-cog-outline"}),null,16)]),_:1})):w("",!0)]),_:1}),e(Fe,{class:"opacity-75",style:{"border-color":"rgba(var(--v-theme-on-background), var(--v-selected-opacity))"}}),e(W,null,{default:t(()=>{var o;return[(o=r.site)!=null&&o.public?w("",!0):(c(),y(B,{key:0,disabled:l(G),onClick:P(we,["stop"])},{prepend:t(()=>[e(V,{icon:"mdi-refresh"})]),default:t(()=>[p(" "+f(l(O)),1)]),_:1},8,["disabled","onClick"])),e(B,{disabled:l(H),onClick:P(ye,["stop"])},{prepend:t(()=>[e(V,{icon:"mdi-link"})]),default:t(()=>[p(" "+f(l(U)),1)]),_:1},8,["disabled","onClick"]),e(B,{onClick:P(ke,["stop"])},{prepend:t(()=>[e(V,{icon:"mdi-web"})]),default:t(()=>[p(" 浏览 ")]),_:1},8,["onClick"])]}),_:1})]),_:1},8,["height","width","flat"]),e(X,{modelValue:l(T),"onUpdate:modelValue":a[3]||(a[3]=o=>N(T)?T.value=o:null),"max-width":"600"},{default:t(()=>[e(M,{title:"更新站点Cookie & UA"},{default:t(()=>[e(A,null,{default:t(()=>[e(se,{onSubmit:P(()=>{},["prevent"])},{default:t(()=>[e(F,null,{default:t(()=>[e(_,{cols:"12",md:"6"},{default:t(()=>[e($,{modelValue:l(b).username,"onUpdate:modelValue":a[0]||(a[0]=o=>l(b).username=o),label:"用户名",rules:[l(K)]},null,8,["modelValue","rules"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e($,{modelValue:l(b).password,"onUpdate:modelValue":a[1]||(a[1]=o=>l(b).password=o),label:"密码",type:l(k)?"text":"password","append-inner-icon":l(k)?"mdi-eye-off-outline":"mdi-eye-outline",rules:[l(K)],"onClick:appendInner":a[2]||(a[2]=o=>k.value=!l(k)),onKeydown:ze(le,["enter"])},null,8,["modelValue","type","append-inner-icon","rules","onKeydown"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(W,null,{default:t(()=>[e(oe),e(B,{onClick:le},{default:t(()=>[p(" 开始更新 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(X,{modelValue:l(x),"onUpdate:modelValue":a[15]||(a[15]=o=>N(x)?x.value=o:null),"max-width":"1000",persistent:"",scrollable:""},{default:t(()=>{var o;return[e(M,{title:`编辑站点 - ${(o=r.site)==null?void 0:o.name}`},{default:t(()=>[e(A,{class:"pt-2"},{default:t(()=>[e(m,{onClick:a[4]||(a[4]=s=>x.value=!1)}),e(se,{onSubmit:P(()=>{},["prevent"])},{default:t(()=>[e(F,null,{default:t(()=>[e(_,{cols:"12",md:"6"},{default:t(()=>[e($,{modelValue:l(n).url,"onUpdate:modelValue":a[5]||(a[5]=s=>l(n).url=s),label:"站点地址",rules:[l(K)]},null,8,["modelValue","rules"])]),_:1}),e(_,{cols:"12",md:"3"},{default:t(()=>[e(re,{modelValue:l(n).pri,"onUpdate:modelValue":a[6]||(a[6]=s=>l(n).pri=s),label:"优先级",items:[1,2,3,4,5,6,7,8,9,10],rules:[l(K)]},null,8,["modelValue","rules"])]),_:1}),e(_,{cols:"12",md:"3"},{default:t(()=>[e(re,{modelValue:l(n).is_active,"onUpdate:modelValue":a[7]||(a[7]=s=>l(n).is_active=s),items:fe,label:"状态"},null,8,["modelValue"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(Ae,{modelValue:l(n).cookie,"onUpdate:modelValue":a[8]||(a[8]=s=>l(n).cookie=s),label:"站点Cookie"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e($,{modelValue:l(n).ua,"onUpdate:modelValue":a[9]||(a[9]=s=>l(n).ua=s),label:"站点User-Agent"},null,8,["modelValue"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(_,{cols:"12",md:"4"},{default:t(()=>[e($,{modelValue:l(n).limit_interval,"onUpdate:modelValue":a[10]||(a[10]=s=>l(n).limit_interval=s),label:"单位周期（秒）",rules:[l(Y)]},null,8,["modelValue","rules"])]),_:1}),e(_,{cols:"12",md:"4"},{default:t(()=>[e($,{modelValue:l(n).limit_seconds,"onUpdate:modelValue":a[11]||(a[11]=s=>l(n).limit_seconds=s),label:"访问次数",rules:[l(Y)]},null,8,["modelValue","rules"])]),_:1}),e(_,{cols:"12",md:"4"},{default:t(()=>[e($,{modelValue:l(n).limit_seconds,"onUpdate:modelValue":a[12]||(a[12]=s=>l(n).limit_seconds=s),label:"访问间隔（秒）",rules:[l(Y)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(_,{cols:"12",md:"6"},{default:t(()=>[e(ne,{modelValue:l(n).proxy,"onUpdate:modelValue":a[13]||(a[13]=s=>l(n).proxy=s),label:"代理"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(ne,{modelValue:l(n).render,"onUpdate:modelValue":a[14]||(a[14]=s=>l(n).render=s),label:"仿真"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(W,null,{default:t(()=>[e(B,{color:"error",onClick:be},{default:t(()=>[p(" 删除 ")]),_:1}),e(oe),e(B,{onClick:Ce},{default:t(()=>[p(" 确定 ")]),_:1})]),_:1})]),_:1},8,["title"])]}),_:1},8,["modelValue"]),e(X,{modelValue:l(L),"onUpdate:modelValue":a[18]||(a[18]=o=>N(L)?L.value=o:null),"max-width":"1280",scrollable:""},{default:t(()=>{var o;return[e(M,{title:`浏览站点 - ${(o=r.site)==null?void 0:o.name}`},{default:t(()=>[e(m,{onClick:a[16]||(a[16]=s=>L.value=!1)}),e(A,{class:"pt-2"},{default:t(()=>[e(I,{"items-per-page":l(Q),"onUpdate:itemsPerPage":a[17]||(a[17]=s=>N(Q)?Q.value=s:null),headers:ce,items:l(ee),"items-length":l(me),search:l(te),loading:l(J),density:"compact","item-value":"title","return-object":"","fixed-header":"","items-per-page-text":"每页条数","page-text":"{0}-{1} 共 {2} 条"},{"item.title":t(({item:s})=>{var z;return[C("div",Ge,f(s.raw.title),1),C("div",Je,f(s.raw.description),1),(c(!0),h(j,null,de((z=s.raw)==null?void 0:z.labels,($e,Se)=>(c(),y(Re,{key:Se,variant:"elevated",size:"small",color:"primary",class:"me-1 mb-1"},{default:t(()=>[p(f($e),1)]),_:2},1024))),128))]}),"item.pubdate":t(({item:s})=>[C("div",null,f(s.raw.date_elapsed),1),C("div",Qe,f(s.raw.pubdate),1)]),"item.size":t(({item:s})=>[C("div",We,f(l(qe)(s.raw.size)),1)]),"item.seeders":t(({item:s})=>[C("div",null,f(s.raw.seeders),1)]),"item.peers":t(({item:s})=>[C("div",null,f(s.raw.peers),1)]),"item.actions":t(({item:s})=>[C("div",Xe,[e(u,null,{default:t(()=>[e(V,{icon:"mdi-dots-vertical"}),e(Ee,{activator:"parent","close-on-content-click":""},{default:t(()=>[e(Me,null,{default:t(()=>[e(ie,{variant:"plain",onClick:z=>_e(s.raw.page_url)},{prepend:t(()=>[e(V,{icon:"mdi-information"})]),default:t(()=>[e(ue,null,{default:t(()=>[p("查看详情")]),_:1})]),_:2},1032,["onClick"]),e(ie,{variant:"plain",onClick:z=>ve(s.raw.enclosure)},{prepend:t(()=>[e(V,{icon:"mdi-download"})]),default:t(()=>[e(ue,null,{default:t(()=>[p("下载种子")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),"no-data":t(()=>[p(" 没有数据 ")]),_:1},8,["items-per-page","items","items-length","search","loading"])]),_:1})]),_:1},8,["title"])]}),_:1},8,["modelValue"])],64)}}});const Ze={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},et={key:1,class:"grid gap-3 grid-site-card"},tt=Z({__name:"SiteCardListView",setup(q){const g=d([]),r=d(!1);async function k(){try{g.value=await S.get("site"),r.value=!0}catch(D){console.error(D)}}return Ne(k),(D,v)=>(c(),h(j,null,[l(r)?w("",!0):(c(),h("div",Ze,[l(r)?w("",!0):(c(),y(Ke,{key:0,size:"48",indeterminate:"",color:"primary"}))])),l(g).length>0?(c(),h("div",et,[(c(!0),h(j,null,de(l(g),U=>(c(),y(Ye,{key:U.id,site:U,onRemove:k,onUpdate:k},null,8,["site"]))),128))])):w("",!0),l(g).length===0&&l(r)?(c(),y(Oe,{key:2,"error-code":"404","error-title":"没有站点","error-description":"已添加并支持的站点将会在这里显示。"})):w("",!0)],64))}});const ut=Z({__name:"site",setup(q){return(g,r)=>(c(),h("div",null,[e(tt)]))}});export{ut as default};
