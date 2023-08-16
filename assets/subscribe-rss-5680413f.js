import{d as J,an as de,r as p,N as re,q as Ie,e as se,o as V,c as C,f as U,i as t,m as e,U as Se,V as T,a as y,aa as oe,a9 as ne,M as G,a2 as ie,a7 as W,a4 as X,t as _,j as l,Y as Re,n as B,K as g,X as Te,B as z,z as me,W as k,A as h,Q as ce,P as pe,C as K,D as c,E as b,av as N,ax as F,G as fe,I as q,H as Ve,F as E,L as Y,a1 as D,ay as De,au as Le,ar as Pe,as as Be}from"./index-b772e4ff.js";import{P as ze}from"./index-088aa3e0.js";import{_ as Ne}from"./NoDataFound.vue_vue_type_style_index_0_lang-6ee34e42.js";import{_ as Fe}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-2852e4e6.js";import{c as Ae}from"./index-d2c33d5a.js";import{b as Me,a as je}from"./formatters-080fb386.js";import{r as ue,n as qe}from"./index-705cb9e8.js";const Ee={class:"me-n3"},He={class:"d-flex align-center"},he={class:"text-high-emphasis"},Ge={class:"text-nowrap whitespace-nowrap"},Ke={class:"text-sm"},Oe={class:"me-n3"},Qe=J({__name:"RssCard",props:{media:Object},emits:["remove","save"],setup(O,{emit:L}){var ee,le;const i=O,$=de.useToast(),I=p(!1),v=p(!1),n=p(!1),x=p(!1),S=p(0),A=p(25),Q=[{title:"标题",key:"title",sortable:!0},{title:"时间",key:"pubdate",sortable:!0},{title:"大小",key:"size",sortable:!0},{title:"",key:"actions",sortable:!1}],w=p([]),R=p(""),s=re(i.media??{}),u=p(`${(ee=i.media)!=null&&ee.last_update?`${Ae(((le=i.media)==null?void 0:le.last_update)||"")}前`:""}`);function d(){I.value=!0}function ve(){var m,a;return((m=i.media)==null?void 0:m.type)==="电影"?"mdi-movie":((a=i.media)==null?void 0:a.type)==="电视剧"?"mdi-television-classic":"mdi-help-circle"}function M(){return I.value?"white":""}function j(){return I.value?"text-white":""}async function _e(){var m;try{(await D.delete(`rss/${(m=i.media)==null?void 0:m.id}`)).success&&L("remove")}catch(a){console.log(a)}}async function be(){var m,a;v.value=!1;try{const f=await D.put("rss",s);f.success?($.success(`${(m=i.media)==null?void 0:m.name} 更新成功！`),L("remove")):$.error(`${(a=i.media)==null?void 0:a.name} 更新失败：${f.message}！`)}catch(f){console.log(f)}}async function ye(){var m,a,f,H;try{const P=await D.get(`site/domain/${(a=(m=i.media)==null?void 0:m.url)==null?void 0:a.split("/")[2]}`);P&&(R.value=P.name)}catch(P){R.value=((H=(f=i.media)==null?void 0:f.url)==null?void 0:H.split("/")[2])??"未知",console.log(P)}}async function ge(){n.value=!0,x.value=!0,await xe(),x.value=!1}async function xe(){var m;try{const a=await D.get(`rss/preview/${(m=i.media)==null?void 0:m.id}`);w.value=a}catch(a){console.log(a)}}async function Z(){v.value=!0}async function we(){var m,a;try{(await D.get(`rss/refresh/${(m=i.media)==null?void 0:m.id}`)).success&&$.success(`${(a=i.media)==null?void 0:a.name} 已提交刷新任务！`)}catch(f){console.log(f)}}const ke=p(Array.from({length:50},(m,a)=>a+1).map(m=>({title:`第 ${m} 季`,value:m})));function Ce(m){window.open(m,"_blank")}async function Ue(m){window.open(m,"_blank")}const $e=p([{title:"编辑",value:1,props:{prependIcon:"mdi-file-edit-outline",click:Z}},{title:"预览",value:2,props:{prependIcon:"mdi-eye-outline",click:ge}},{title:"刷新",value:3,props:{prependIcon:"mdi-refresh",click:we}},{title:"取消订阅",value:4,props:{prependIcon:"mdi-trash-can-outline",color:"error",click:_e}}]);return Ie(()=>{ye()}),(m,a)=>{var te;const f=se("IconBtn"),H=Fe,P=se("VDataTable");return V(),C(G,null,[(V(),U(h,{key:(te=i.media)==null?void 0:te.id,class:B(`${l(s).best_version?"outline-dashed outline-1":""}`),onClick:Z},{image:t(()=>{var r,o;return[e(Se,{src:((r=i.media)==null?void 0:r.backdrop)||((o=i.media)==null?void 0:o.poster),"aspect-ratio":"2/3",cover:"",class:"brightness-50",onLoad:d},null,8,["src"])]}),default:t(()=>[e(Te,null,{prepend:t(()=>[e(T,{size:"1.9rem",color:M(),icon:ve()},null,8,["color","icon"])]),append:t(()=>[y("div",Ee,[e(f,null,{default:t(()=>[e(T,{icon:"mdi-dots-vertical",color:M()},null,8,["color"]),e(oe,{activator:"parent","close-on-content-click":""},{default:t(()=>[e(ne,null,{default:t(()=>[(V(!0),C(G,null,ie(l($e),(r,o)=>(V(),U(W,{key:o,variant:"plain","base-color":r.props.color,onClick:r.props.click},{prepend:t(()=>[e(T,{icon:r.props.prependIcon},null,8,["icon"])]),default:t(()=>[e(X,{textContent:_(r.title)},null,8,["textContent"])]),_:2},1032,["base-color","onClick"]))),128))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(Re,{class:B(j())},{default:t(()=>{var r,o,ae;return[g(_((r=i.media)==null?void 0:r.name)+" "+_(l(Me)((o=i.media)!=null&&o.season?(ae=i.media)==null?void 0:ae.season.toString():"")),1)]}),_:1},8,["class"])]),_:1}),e(z,null,{default:t(()=>{var r;return[y("p",{class:B(["clamp-text mb-0",j()])},_((r=i.media)==null?void 0:r.description),3)]}),_:1}),e(z,{class:"d-flex justify-space-between align-center flex-wrap"},{default:t(()=>{var r,o;return[y("div",He,[e(f,{icon:"mdi-star",color:M(),class:"me-1"},null,8,["color"]),y("span",{class:B(["text-subtitle-2 me-4",j()])},_((r=i.media)==null?void 0:r.vote),3),e(f,me(i,{icon:"mdi-progress-clock",color:M(),class:"me-1"}),null,16,["color"]),y("span",{class:B(["text-subtitle-2 me-4",j()])},_(((o=i.media)==null?void 0:o.processed)||0),3),l(R)?(V(),U(f,{key:0,icon:"mdi-web",color:M(),class:"me-1"},null,8,["color"])):k("",!0),l(R)?(V(),C("span",{key:1,class:B(["text-subtitle-2 me-4",j()])},_(l(R)),3)):k("",!0)])]}),_:1}),l(u)?(V(),U(z,{key:0,class:"absolute right-0 bottom-0 d-flex align-center p-2 text-gray-300"},{default:t(()=>[e(T,{icon:"mdi-download",class:"me-1"}),g(" "+_(l(u)),1)]),_:1})):k("",!0)]),_:1},8,["class"])),e(Y,{modelValue:l(v),"onUpdate:modelValue":a[13]||(a[13]=r=>E(v)?v.value=r:null),"max-width":"800",persistent:"",scrollable:""},{default:t(()=>{var r;return[e(h,{title:`订阅 - ${(r=i.media)==null?void 0:r.name}`},{default:t(()=>[e(z,{class:"pt-2"},{default:t(()=>[e(ce,{onSubmit:pe(()=>{},["prevent"])},{default:t(()=>[e(K,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(s).url,"onUpdate:modelValue":a[0]||(a[0]=o=>l(s).url=o),label:"RSS地址",placeholder:"https://example.com/rss"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(N,{modelValue:l(s).type,"onUpdate:modelValue":a[1]||(a[1]=o=>l(s).type=o),label:"类型",items:[{title:"电影",value:"电影"},{title:"电视剧",value:"电视剧"}],readonly:""},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:l(s).title,"onUpdate:modelValue":a[2]||(a[2]=o=>l(s).title=o),label:"标题",readonly:""},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:l(s).year,"onUpdate:modelValue":a[3]||(a[3]=o=>l(s).year=o),label:"年份",readonly:""},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(N,{modelValue:l(s).season,"onUpdate:modelValue":a[4]||(a[4]=o=>l(s).season=o),label:"季",items:l(ke),readonly:""},null,8,["modelValue","items"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(s).include,"onUpdate:modelValue":a[5]||(a[5]=o=>l(s).include=o),label:"包含"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(s).exclude,"onUpdate:modelValue":a[6]||(a[6]=o=>l(s).exclude=o),label:"排除"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(s).save_path,"onUpdate:modelValue":a[7]||(a[7]=o=>l(s).save_path=o),label:"保存路径",placeholder:"留空自动"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(N,{modelValue:l(s).state,"onUpdate:modelValue":a[8]||(a[8]=o=>l(s).state=o),label:"状态",items:[{title:"启用",value:1},{title:"停用",value:0}]},null,8,["modelValue"])]),_:1})]),_:1}),e(K,null,{default:t(()=>[e(c,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(s).best_version,"onUpdate:modelValue":a[9]||(a[9]=o=>l(s).best_version=o),label:"洗版"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(s).proxy,"onUpdate:modelValue":a[10]||(a[10]=o=>l(s).proxy=o),label:"代理服务器"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(s).filter,"onUpdate:modelValue":a[11]||(a[11]=o=>l(s).filter=o),label:"过滤规则"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(fe,null,{default:t(()=>[e(q,{onClick:a[12]||(a[12]=o=>v.value=!1)},{default:t(()=>[g(" 取消 ")]),_:1}),e(Ve),e(q,{onClick:be},{default:t(()=>[g(" 确定 ")]),_:1})]),_:1})]),_:1},8,["title"])]}),_:1},8,["modelValue"]),e(Y,{modelValue:l(n),"onUpdate:modelValue":a[16]||(a[16]=r=>E(n)?n.value=r:null),"max-width":"1280",scrollable:""},{default:t(()=>[e(h,{title:"RSS预览"},{default:t(()=>[e(H,{onClick:a[14]||(a[14]=r=>n.value=!1)}),e(z,{class:"pt-2"},{default:t(()=>[e(P,{"items-per-page":l(A),"onUpdate:itemsPerPage":a[15]||(a[15]=r=>E(A)?A.value=r:null),headers:Q,items:l(w),"items-length":l(S),loading:l(x),density:"compact","item-value":"title","return-object":"","fixed-header":"","items-per-page-text":"每页条数","page-text":"{0}-{1} 共 {2} 条"},{"item.title":t(({item:r})=>[y("div",he,_(r.raw.title),1)]),"item.size":t(({item:r})=>[y("div",Ge,_(l(je)(r.raw.size)),1)]),"item.pubdate":t(({item:r})=>[y("div",Ke,_(r.raw.pubdate),1)]),"item.actions":t(({item:r})=>[y("div",Oe,[e(f,null,{default:t(()=>[e(T,{icon:"mdi-dots-vertical"}),e(oe,{activator:"parent","close-on-content-click":""},{default:t(()=>[e(ne,null,{default:t(()=>[e(W,{variant:"plain",onClick:o=>Ce(r.raw.page_url)},{prepend:t(()=>[e(T,{icon:"mdi-information"})]),default:t(()=>[e(X,null,{default:t(()=>[g("查看详情")]),_:1})]),_:2},1032,["onClick"]),e(W,{variant:"plain",onClick:o=>Ue(r.raw.enclosure)},{prepend:t(()=>[e(T,{icon:"mdi-download"})]),default:t(()=>[e(X,null,{default:t(()=>[g("下载种子")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),"no-data":t(()=>[g(" 没有数据 ")]),_:1},8,["items-per-page","items","items-length","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),We={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},Xe={key:0,class:"grid gap-3 grid-rss-card p-1"},Ye=J({__name:"RssListView",setup(O){const L=de.useToast(),i=p(!1),$=p("新增订阅"),I=p(!1),v=p(!1),n=re({url:"",type:"电影",title:"",year:"",season:1,include:"",exclude:"",best_version:!1,proxy:!1,filter:!0,save_path:"",state:1}),x=p([]);async function S(){try{x.value=await D.get("rss"),i.value=!0}catch(s){console.error(s)}}async function A(){if(!(!n.url||!n.title)){Pe(),$.value="新增中...",I.value=!0,n.type==="电影"&&(n.season=0);try{const s=await D.post("rss",n);s.success?(L.success("新增自定义订阅成功"),S()):L.error(`新增自定义订阅失败：${s.message}`),v.value=!1}catch(s){console.error(s)}Be(),$.value="新增订阅",I.value=!1}}const Q=p(Array.from({length:50},(s,u)=>u+1).map(s=>({title:`第 ${s} 季`,value:s})));De(S);const w=p(!1);function R(){w.value=!0,S(),w.value=!1}return(s,u)=>(V(),C(G,null,[l(i)?k("",!0):(V(),C("div",We,[l(i)?k("",!0):(V(),U(Le,{key:0,size:"48",indeterminate:"",color:"primary"}))])),e(l(ze),{modelValue:l(w),"onUpdate:modelValue":u[0]||(u[0]=d=>E(w)?w.value=d:null),onRefresh:R},{default:t(()=>[l(x).length>0?(V(),C("div",Xe,[(V(!0),C(G,null,ie(l(x),d=>(V(),U(Qe,{key:d.id,media:d,onRemove:S,onSave:S},null,8,["media"]))),128))])):k("",!0),l(x).length===0&&l(i)?(V(),U(Ne,{key:1,"error-code":"404","error-title":"没有自定义订阅","error-description":"点击右下角按钮新增订阅。"})):k("",!0)]),_:1},8,["modelValue"]),e(Y,{modelValue:l(v),"onUpdate:modelValue":u[14]||(u[14]=d=>E(v)?v.value=d:null),"max-width":"800",transition:"dialog-bottom-transition",persistent:"",scrollable:""},{activator:t(({props:d})=>[e(q,me({icon:"mdi-plus"},d,{size:"x-large",class:"fixed right-5 bottom-5"}),null,16)]),default:t(()=>[e(h,{title:"新增自定义订阅"},{default:t(()=>[e(z,null,{default:t(()=>[e(ce,{onSubmit:pe(()=>{},["prevent"])},{default:t(()=>[e(K,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(n).url,"onUpdate:modelValue":u[1]||(u[1]=d=>l(n).url=d),label:"RSS地址",placeholder:"https://example.com/rss",rules:[l(ue)]},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(N,{modelValue:l(n).type,"onUpdate:modelValue":u[2]||(u[2]=d=>l(n).type=d),label:"类型",items:[{title:"电影",value:"电影"},{title:"电视剧",value:"电视剧"}]},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:l(n).title,"onUpdate:modelValue":u[3]||(u[3]=d=>l(n).title=d),label:"标题",rules:[l(ue)]},null,8,["modelValue","rules"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:l(n).year,"onUpdate:modelValue":u[4]||(u[4]=d=>l(n).year=d),label:"年份",rules:[l(qe)]},null,8,["modelValue","rules"])]),_:1}),l(n).type==="电视剧"?(V(),U(c,{key:0,cols:"12",md:"6"},{default:t(()=>[e(N,{modelValue:l(n).season,"onUpdate:modelValue":u[5]||(u[5]=d=>l(n).season=d),label:"季",items:l(Q)},null,8,["modelValue","items"])]),_:1})):k("",!0),e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(n).include,"onUpdate:modelValue":u[6]||(u[6]=d=>l(n).include=d),label:"包含",placeholder:"支持正则表达式"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(n).exclude,"onUpdate:modelValue":u[7]||(u[7]=d=>l(n).exclude=d),label:"排除",placeholder:"支持正则表达式"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(b,{modelValue:l(n).save_path,"onUpdate:modelValue":u[8]||(u[8]=d=>l(n).save_path=d),label:"保存路径",placeholder:"留空自动"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(N,{modelValue:l(n).state,"onUpdate:modelValue":u[9]||(u[9]=d=>l(n).state=d),label:"状态",items:[{title:"启用",value:1},{title:"停用",value:0}]},null,8,["modelValue"])]),_:1})]),_:1}),e(K,null,{default:t(()=>[e(c,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).best_version,"onUpdate:modelValue":u[10]||(u[10]=d=>l(n).best_version=d),label:"洗版"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).proxy,"onUpdate:modelValue":u[11]||(u[11]=d=>l(n).proxy=d),label:"代理服务器"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(F,{modelValue:l(n).filter,"onUpdate:modelValue":u[12]||(u[12]=d=>l(n).filter=d),label:"过滤规则"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(fe,null,{default:t(()=>[e(q,{onClick:u[13]||(u[13]=d=>v.value=!1)},{default:t(()=>[g(" 取消 ")]),_:1}),e(Ve),e(q,{color:"primary",disabled:l(I),onClick:A},{default:t(()=>[g(_(l($)),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});const ol=J({__name:"subscribe-rss",setup(O){return(L,i)=>(V(),C("div",null,[e(Ye)]))}});export{ol as default};
