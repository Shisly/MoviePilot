import{P as re}from"./index-088aa3e0.js";import{d as J,an as ue,r as _,N as de,e as ce,o as u,c as g,f as p,i as l,m as t,U as me,V as D,a as P,aa as pe,a9 as fe,M as N,a2 as Z,a7 as _e,a4 as Ve,t as f,j as s,Y as be,n as C,K as R,X as ve,B as F,z as ge,W as m,ai as ye,A as X,Q as ke,P as xe,C as M,D as y,E as U,av as we,ax as Ce,G as Se,I as Y,H as Ie,F as ee,L as $e,a1 as T,ay as Le,p as he,au as Ue}from"./index-b772e4ff.js";import{_ as Te}from"./NoDataFound.vue_vue_type_style_index_0_lang-6ee34e42.js";import{c as Be}from"./index-d2c33d5a.js";import{b as De}from"./formatters-080fb386.js";import{n as q}from"./index-705cb9e8.js";const Pe={class:"me-n3"},Re={class:"d-flex align-center"},Fe=J({__name:"SubscribeCard",props:{media:Object},emits:["remove","save"],setup(z,{emit:B}){var A,H;const e=z,k=ue.useToast(),V=_(!1),c=_(!1),S=_([]),x=_([]),n=de(e.media??{}),I=_(`${(A=e.media)!=null&&A.last_update?`${Be(((H=e.media)==null?void 0:H.last_update)||"")}前`:""}`);function w(){V.value=!0}function te(){var i,a;return((i=e.media)==null?void 0:i.type)==="电影"?"mdi-movie":((a=e.media)==null?void 0:a.type)==="电视剧"?"mdi-television-classic":"mdi-help-circle"}function j(){var i,a,d,h;return((i=e.media)==null?void 0:i.total_episode)===0?0:Math.round(((((a=e.media)==null?void 0:a.total_episode)||0)-(((d=e.media)==null?void 0:d.lack_episode)||0))/(((h=e.media)==null?void 0:h.total_episode)||1)*100)}function $(){return V.value?"white":""}function L(){return V.value?"text-white":""}async function ae(){var i;try{(await T.delete(`subscribe/${(i=e.media)==null?void 0:i.id}`)).success&&B("remove")}catch(a){console.log(a)}}async function le(){var i,a;try{(await T.get(`subscribe/search/${(i=e.media)==null?void 0:i.id}`)).success&&k.success(`${(a=e.media)==null?void 0:a.name} 提交搜索请求成功！`)}catch(d){console.log(d)}}async function se(){var i,a;c.value=!1;try{const d=await T.put("subscribe",n);d.success?(k.success(`${(i=e.media)==null?void 0:i.name} 更新成功！`),B("remove")):k.error(`${(a=e.media)==null?void 0:a.name} 更新失败：${d.message}！`)}catch(d){console.log(d)}}async function oe(){try{const i=await T.get("site");S.value=i.filter(a=>a.is_active)}catch(i){console.error(i)}}async function ne(){S.value.length||await oe();const i=S.value.map(a=>({title:a.name,value:a.id}));x.value=i.flat()}async function E(){await ne(),c.value=!0}const ie=_([{title:"编辑",value:1,props:{prependIcon:"mdi-file-edit-outline",click:E}},{title:"搜索",value:2,props:{prependIcon:"mdi-magnify",click:le}},{title:"取消订阅",value:3,props:{prependIcon:"mdi-trash-can-outline",color:"error",click:ae}}]);return(i,a)=>{var h;const d=ce("IconBtn");return u(),g(N,null,[(u(),p(X,{key:(h=e.media)==null?void 0:h.id,class:C(`${s(n).best_version?"outline-dashed outline-1":""}`),onClick:E},{image:l(()=>{var r,o;return[t(me,{src:((r=e.media)==null?void 0:r.backdrop)||((o=e.media)==null?void 0:o.poster),"aspect-ratio":"2/3",cover:"",class:"brightness-50",onLoad:w},null,8,["src"])]}),default:l(()=>[t(ve,null,{prepend:l(()=>[t(D,{size:"1.9rem",color:$(),icon:te()},null,8,["color","icon"])]),append:l(()=>[P("div",Pe,[t(d,null,{default:l(()=>[t(D,{icon:"mdi-dots-vertical",color:$()},null,8,["color"]),t(pe,{activator:"parent","close-on-content-click":""},{default:l(()=>[t(fe,null,{default:l(()=>[(u(!0),g(N,null,Z(s(ie),(r,o)=>(u(),p(_e,{key:o,variant:"plain","base-color":r.props.color,onClick:r.props.click},{prepend:l(()=>[t(D,{icon:r.props.prependIcon},null,8,["icon"])]),default:l(()=>[t(Ve,{textContent:f(r.title)},null,8,["textContent"])]),_:2},1032,["base-color","onClick"]))),128))]),_:1})]),_:1})]),_:1})])]),default:l(()=>[t(be,{class:C(L())},{default:l(()=>{var r,o,b;return[R(f((r=e.media)==null?void 0:r.name)+" "+f(s(De)((o=e.media)!=null&&o.season?(b=e.media)==null?void 0:b.season.toString():"")),1)]}),_:1},8,["class"])]),_:1}),t(F,null,{default:l(()=>{var r;return[P("p",{class:C(["clamp-text mb-0",L()])},f((r=e.media)==null?void 0:r.description),3)]}),_:1}),t(F,{class:"d-flex justify-space-between align-center flex-wrap"},{default:l(()=>{var r,o,b,v,O,G,K,Q,W;return[P("div",Re,[t(d,{icon:"mdi-star",color:$(),class:"me-1"},null,8,["color"]),P("span",{class:C(["text-subtitle-2 me-4",L()])},f((r=e.media)==null?void 0:r.vote),3),(o=e.media)!=null&&o.total_episode?(u(),p(d,ge({key:0},e,{icon:"mdi-progress-clock",color:$(),class:"me-1"}),null,16,["color"])):m("",!0),(b=e.media)!=null&&b.season?(u(),g("span",{key:1,class:C(["text-subtitle-2 me-4",L()])},f((((v=e.media)==null?void 0:v.total_episode)||0)-(((O=e.media)==null?void 0:O.lack_episode)||0))+" / "+f((G=e.media)==null?void 0:G.total_episode),3)):m("",!0),(K=e.media)!=null&&K.username?(u(),p(d,{key:2,icon:"mdi-account",color:$(),class:"me-1"},null,8,["color"])):m("",!0),(Q=e.media)!=null&&Q.username?(u(),g("span",{key:3,class:C(["text-subtitle-2 me-4",L()])},f((W=e.media)==null?void 0:W.username),3)):m("",!0)])]}),_:1}),s(I)?(u(),p(F,{key:0,class:"absolute right-0 bottom-0 d-flex align-center p-2 text-gray-300"},{default:l(()=>[t(D,{icon:"mdi-download",class:"me-1"}),R(" "+f(s(I)),1)]),_:1})):m("",!0),j()>0?(u(),p(ye,{key:1,"model-value":j(),"bg-color":"success",color:"success"},null,8,["model-value"])):m("",!0)]),_:1},8,["class"])),t($e,{modelValue:s(c),"onUpdate:modelValue":a[8]||(a[8]=r=>ee(c)?c.value=r:null),"max-width":"1000",persistent:"",scrollable:""},{default:l(()=>{var r;return[t(X,{title:`订阅 - ${(r=e.media)==null?void 0:r.name}`},{default:l(()=>[t(F,{class:"pt-2"},{default:l(()=>[t(ke,{onSubmit:xe(()=>{},["prevent"])},{default:l(()=>[t(M,null,{default:l(()=>{var o,b;return[t(y,{cols:"12",md:"6"},{default:l(()=>[t(U,{modelValue:s(n).keyword,"onUpdate:modelValue":a[0]||(a[0]=v=>s(n).keyword=v),label:"搜索关键词"},null,8,["modelValue"])]),_:1}),((o=e.media)==null?void 0:o.type)==="电视剧"?(u(),p(y,{key:0,cols:"12",md:"3"},{default:l(()=>[t(U,{modelValue:s(n).total_episode,"onUpdate:modelValue":a[1]||(a[1]=v=>s(n).total_episode=v),label:"总集数",rules:[s(q)]},null,8,["modelValue","rules"])]),_:1})):m("",!0),((b=e.media)==null?void 0:b.type)==="电视剧"?(u(),p(y,{key:1,cols:"12",md:"3"},{default:l(()=>[t(U,{modelValue:s(n).start_episode,"onUpdate:modelValue":a[2]||(a[2]=v=>s(n).start_episode=v),label:"开始集数",rules:[s(q)]},null,8,["modelValue","rules"])]),_:1})):m("",!0)]}),_:1}),t(M,null,{default:l(()=>[t(y,{cols:"12",md:"6"},{default:l(()=>[t(U,{modelValue:s(n).include,"onUpdate:modelValue":a[3]||(a[3]=o=>s(n).include=o),label:"包含（关键字、正则式）"},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",md:"6"},{default:l(()=>[t(U,{modelValue:s(n).exclude,"onUpdate:modelValue":a[4]||(a[4]=o=>s(n).exclude=o),label:"排除（关键字、正则式）"},null,8,["modelValue"])]),_:1})]),_:1}),t(M,null,{default:l(()=>[t(y,{cols:"12"},{default:l(()=>[t(we,{modelValue:s(n).sites,"onUpdate:modelValue":a[5]||(a[5]=o=>s(n).sites=o),items:s(x),chips:"",label:"订阅站点",multiple:""},null,8,["modelValue","items"])]),_:1})]),_:1}),t(M,null,{default:l(()=>[t(y,{cols:"12"},{default:l(()=>[t(Ce,{modelValue:s(n).best_version,"onUpdate:modelValue":a[6]||(a[6]=o=>s(n).best_version=o),label:"洗版"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),t(Se,null,{default:l(()=>[t(Y,{onClick:a[7]||(a[7]=o=>c.value=!1)},{default:l(()=>[R(" 取消 ")]),_:1}),t(Ie),t(Y,{onClick:se},{default:l(()=>[R(" 确定 ")]),_:1})]),_:1})]),_:1},8,["title"])]}),_:1},8,["modelValue"])],64)}}}),Me={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},Ne={key:0,class:"grid gap-3 grid-subscribe-card p-1"},Ge=J({__name:"SubscribeListView",props:{type:String},setup(z){const B=z,e=_(!1),k=_([]);async function V(){try{k.value=await T.get("subscribe"),e.value=!0}catch(n){console.error(n)}}Le(V);const c=_(!1);function S(){c.value=!0,V(),c.value=!1}const x=he(()=>k.value.filter(n=>n.type===B.type));return(n,I)=>(u(),g(N,null,[s(e)?m("",!0):(u(),g("div",Me,[s(e)?m("",!0):(u(),p(Ue,{key:0,size:"48",indeterminate:"",color:"primary"}))])),t(s(re),{modelValue:s(c),"onUpdate:modelValue":I[0]||(I[0]=w=>ee(c)?c.value=w:null),onRefresh:S},{default:l(()=>[s(x).length>0?(u(),g("div",Ne,[(u(!0),g(N,null,Z(s(x),w=>(u(),p(Fe,{key:w.id,media:w,onRemove:V,onSave:V},null,8,["media"]))),128))])):m("",!0),s(x).length===0&&s(e)?(u(),p(Te,{key:1,"error-code":"404","error-title":"没有订阅","error-description":"请通过搜索添加电影、电视剧订阅。"})):m("",!0)]),_:1},8,["modelValue"])],64))}});export{Ge as _};
