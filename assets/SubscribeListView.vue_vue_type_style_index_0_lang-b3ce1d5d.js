import{P as Z}from"./index-9502ff5d.js";import{a as P}from"./index-83601d12.js";import{_ as ee}from"./NoDataFound.vue_vue_type_script_setup_true_lang-9795ac0b.js";import{d as G,af as te,r as x,e as se,o as a,c as b,f,i as l,m as o,ag as ae,V as I,a as L,ac as oe,a1 as le,L as S,U as K,$ as re,X as ne,t as p,j as n,ab as ie,n as h,J as X,aa as ce,A as N,a9 as ue,_ as m,ai as de,z as me,E as Q,a5 as q,ax as pe,p as fe,a2 as _e}from"./index-a900fb48.js";import{_ as ve}from"./SubscribeEditForm.vue_vue_type_script_setup_true_lang-c4b75c9e.js";import{c as be}from"./index-d2c33d5a.js";import{b as ge}from"./formatters-16dfb57c.js";const ye={class:"me-n3"},xe={class:"d-flex align-center"},ke=G({__name:"SubscribeCard",props:{media:Object},emits:["remove","save"],setup(T,{emit:k}){var U,z;const e=T,B=te.useToast(),_=x(!1),c=x(!1),g=x(`${(U=e.media)!=null&&U.last_update?`${be(((z=e.media)==null?void 0:z.last_update)||"")}前`:""}`);function y(){_.value=!0}function D(){var i,t;return((i=e.media)==null?void 0:i.type)==="电影"?"mdi-movie":((t=e.media)==null?void 0:t.type)==="电视剧"?"mdi-television-classic":"mdi-help-circle"}function V(){var i,t,u,$;return((i=e.media)==null?void 0:i.total_episode)===0?0:Math.round(((((t=e.media)==null?void 0:t.total_episode)??0)-(((u=e.media)==null?void 0:u.lack_episode)??0))/((($=e.media)==null?void 0:$.total_episode)??1)*100)}function r(){return _.value?"white":""}function v(){return _.value?"text-white":""}async function C(){var i;try{(await P.delete(`subscribe/${(i=e.media)==null?void 0:i.id}`)).success&&k("remove")}catch(t){console.log(t)}}async function W(){var i,t;try{(await P.get(`subscribe/search/${(i=e.media)==null?void 0:i.id}`)).success&&B.success(`${(t=e.media)==null?void 0:t.name} 提交搜索请求成功！`)}catch(u){console.log(u)}}async function R(){c.value=!0}const Y=x([{title:"编辑",value:1,props:{prependIcon:"mdi-file-edit-outline",click:R}},{title:"搜索",value:2,props:{prependIcon:"mdi-magnify",click:W}},{title:"取消订阅",value:3,props:{prependIcon:"mdi-trash-can-outline",color:"error",click:C}}]);return(i,t)=>{var $,E,j;const u=se("IconBtn");return a(),b(S,null,[(a(),f(me,{key:($=e.media)==null?void 0:$.id,class:h(`${(E=e.media)!=null&&E.best_version?"outline-dashed outline-1":""}`),onClick:R},{image:l(()=>{var s,d;return[o(ae,{src:((s=e.media)==null?void 0:s.backdrop)||((d=e.media)==null?void 0:d.poster),"aspect-ratio":"2/3",cover:"",class:"brightness-50",onLoad:y},null,8,["src"])]}),default:l(()=>[o(ce,null,{prepend:l(()=>[o(I,{size:"1.9rem",color:r(),icon:D()},null,8,["color","icon"])]),append:l(()=>[L("div",ye,[o(u,null,{default:l(()=>[o(I,{icon:"mdi-dots-vertical",color:r()},null,8,["color"]),o(oe,{activator:"parent","close-on-content-click":""},{default:l(()=>[o(le,null,{default:l(()=>[(a(!0),b(S,null,K(n(Y),(s,d)=>(a(),f(re,{key:d,variant:"plain","base-color":s.props.color,onClick:s.props.click},{prepend:l(()=>[o(I,{icon:s.props.prependIcon},null,8,["icon"])]),default:l(()=>[o(ne,{textContent:p(s.title)},null,8,["textContent"])]),_:2},1032,["base-color","onClick"]))),128))]),_:1})]),_:1})]),_:1})])]),default:l(()=>[o(ie,{class:h(v())},{default:l(()=>{var s,d,w;return[X(p((s=e.media)==null?void 0:s.name)+" "+p(n(ge)((d=e.media)!=null&&d.season?(w=e.media)==null?void 0:w.season.toString():"")),1)]}),_:1},8,["class"])]),_:1}),o(N,null,{default:l(()=>{var s;return[L("p",{class:h(["clamp-text mb-0",v()])},p((s=e.media)==null?void 0:s.description),3)]}),_:1}),o(N,{class:"d-flex justify-space-between align-center flex-wrap"},{default:l(()=>{var s,d,w,M,A,F,H,J,O;return[L("div",xe,[o(u,{icon:"mdi-star",color:r(),class:"me-1"},null,8,["color"]),L("span",{class:h(["text-subtitle-2 me-4",v()])},p((s=e.media)==null?void 0:s.vote),3),(d=e.media)!=null&&d.total_episode?(a(),f(u,ue({key:0},e,{icon:"mdi-progress-clock",color:r(),class:"me-1"}),null,16,["color"])):m("",!0),(w=e.media)!=null&&w.season?(a(),b("span",{key:1,class:h(["text-subtitle-2 me-4",v()])},p((((M=e.media)==null?void 0:M.total_episode)||0)-(((A=e.media)==null?void 0:A.lack_episode)||0))+" / "+p((F=e.media)==null?void 0:F.total_episode),3)):m("",!0),(H=e.media)!=null&&H.username?(a(),f(u,{key:2,icon:"mdi-account",color:r(),class:"me-1"},null,8,["color"])):m("",!0),(J=e.media)!=null&&J.username?(a(),b("span",{key:3,class:h(["text-subtitle-2 me-4",v()])},p((O=e.media)==null?void 0:O.username),3)):m("",!0)])]}),_:1}),n(g)?(a(),f(N,{key:0,class:"absolute right-0 bottom-0 d-flex align-center p-2 text-gray-300"},{default:l(()=>[o(I,{icon:"mdi-download",class:"me-1"}),X(" "+p(n(g)),1)]),_:1})):m("",!0),V()>0?(a(),f(de,{key:1,"model-value":V(),"bg-color":"success",color:"success"},null,8,["model-value"])):m("",!0)]),_:1},8,["class"])),o(ve,{modelValue:n(c),"onUpdate:modelValue":t[0]||(t[0]=s=>Q(c)?c.value=s:null),subid:(j=e.media)==null?void 0:j.id,onRemove:t[1]||(t[1]=()=>{k("remove"),c.value=!1}),onSave:t[2]||(t[2]=()=>{k("save"),c.value=!1}),onClose:t[3]||(t[3]=s=>c.value=!1)},null,8,["modelValue","subid"])],64)}}}),Ve={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},Ce={key:0,class:"grid gap-3 grid-subscribe-card p-1"},Be=G({__name:"SubscribeListView",props:{type:String},setup(T){const k=T,e=q.state.auth.superUser,B=q.state.auth.userName,_=x(!1),c=x([]);async function g(){try{c.value=await P.get("subscribe/"),_.value=!0}catch(r){console.error(r)}}pe(g);const y=x(!1);function D(){y.value=!0,g(),y.value=!1}const V=fe(()=>e?c.value.filter(r=>r.type===k.type):c.value.filter(r=>r.type===k.type&&r.username===B));return(r,v)=>(a(),b(S,null,[n(_)?m("",!0):(a(),b("div",Ve,[n(_)?m("",!0):(a(),f(_e,{key:0,size:"48",indeterminate:"",color:"primary"}))])),o(n(Z),{modelValue:n(y),"onUpdate:modelValue":v[0]||(v[0]=C=>Q(y)?y.value=C:null),onRefresh:D},{default:l(()=>[n(V).length>0?(a(),b("div",Ce,[(a(!0),b(S,null,K(n(V),C=>(a(),f(ke,{key:C.id,media:C,onRemove:g,onSave:g},null,8,["media"]))),128))])):m("",!0),n(V).length===0&&n(_)?(a(),f(ee,{key:1,"error-code":"404","error-title":"没有订阅","error-description":"请通过搜索添加电影、电视剧订阅。"})):m("",!0)]),_:1},8,["modelValue"])],64))}});export{Be as _};
