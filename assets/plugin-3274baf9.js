import{a as T}from"./index-253bfa29.js";import{_ as W}from"./NoDataFound.vue_vue_type_script_setup_true_lang-85a2f70a.js";import{d as z,af as Y,r as h,o,f as c,i as t,a as D,m as l,ag as ee,n as E,j as i,W as le,aC as te,J as C,t as b,ab as ne,A as S,O as ue,z as F,e as K,c as y,L as x,U as B,a9 as M,k as U,_ as w,aD as ce,M as X,V as H,ac as pe,a1 as de,Q as ge,R as me,$ as fe,X as _e,Z as ve,aa as he,G as Z,I as R,H as N,E as G,K as J,p as q,ax as ye,a2 as Ve,aE as ke,aF as Ce,aG as we}from"./index-e47a80b5.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as xe}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-708bd663.js";import{i as $e}from"./index-d2c33d5a.js";const Pe=["href"],Ie=z({__name:"PluginAppCard",props:{plugin:Object,width:String,height:String},emits:["install"],setup(P,{emit:_}){const e=P,u=Y.useToast(),$=h(!1);async function p(){var g,d,s;try{const a=await T.get(`plugin/install/${(g=e.plugin)==null?void 0:g.id}`);a.success?(u.success(`插件 ${(d=e.plugin)==null?void 0:d.plugin_name} 安装成功！`),_("install")):u.error(`插件 ${(s=e.plugin)==null?void 0:s.plugin_name} 安装失败：${a.message}}`)}catch(a){console.error(a)}}return(g,d)=>(o(),c(F,{width:e.width,height:e.height,onClick:p},{default:t(()=>{var s;return[D("div",{class:"relative pa-4 text-center card-cover-blurred",style:te({background:`${(s=e.plugin)==null?void 0:s.plugin_color}`})},[l(le,{size:"8rem",class:E({shadow:i($)})},{default:t(()=>{var a;return[l(ee,{src:`/plugin_icon/${(a=e.plugin)==null?void 0:a.plugin_icon}`,"aspect-ratio":"4/3",cover:"",onLoad:d[0]||(d[0]=V=>$.value=!0)},null,8,["src"])]}),_:1},8,["class"])],4),l(ne,null,{default:t(()=>{var a;return[C(b((a=e.plugin)==null?void 0:a.plugin_name),1)]}),_:1}),l(S,null,{default:t(()=>{var a;return[C(b((a=e.plugin)==null?void 0:a.plugin_desc),1)]}),_:1}),l(S,null,{default:t(()=>{var a,V;return[C(" 作者："),D("a",{href:(a=e.plugin)==null?void 0:a.author_url,target:"_blank",onClick:d[1]||(d[1]=ue(()=>{},["stop"]))},b((V=e.plugin)==null?void 0:V.plugin_author),9,Pe)]}),_:1})]}),_:1},8,["width","height"]))}});const be=ae(Ie,[["__scopeId","data-v-ec886703"]]),Le=z({__name:"FormRender",props:{config:Object,form:Object},setup(P){const _=P,e=h(_.config??{component:"div",text:"",html:"",props:{},content:[]}),u=h(_.form||{});return($,p)=>{var d;const g=K("FormRender",!0);return o(),y(x,null,[e.value.html?w("",!0):(o(),c(U(e.value.component),M({key:0},e.value.props,{modelValue:u.value[((d=e.value.props)==null?void 0:d.model)||""],"onUpdate:modelValue":p[0]||(p[0]=s=>{var a;return u.value[((a=e.value.props)==null?void 0:a.model)||""]=s})}),{default:t(()=>[C(b(e.value.text)+" ",1),(o(!0),y(x,null,B(e.value.content||[],(s,a)=>{var V;return o(),c(g,{key:a,modelValue:u.value[((V=s.props)==null?void 0:V.model)||""],"onUpdate:modelValue":v=>{var O;return u.value[((O=s.props)==null?void 0:O.model)||""]=v},config:s,form:u.value},null,8,["modelValue","onUpdate:modelValue","config","form"])}),128))]),_:1},16,["modelValue"])),e.value.html?(o(),c(U(e.value.component),M({key:1},e.value.props,{innerHTML:e.value.html}),null,16,["innerHTML"])):w("",!0)],64)}}}),Te=z({__name:"PageRender",props:{config:Object},setup(P){const e=h(P.config??{component:"div",text:"",html:"",props:{},content:[]});return(u,$)=>{const p=K("PageRender",!0);return o(),y(x,null,[e.value.html?w("",!0):(o(),c(U(e.value.component),ce(M({key:0},e.value.props)),{default:t(()=>[C(b(e.value.text)+" ",1),(o(!0),y(x,null,B(e.value.content||[],(g,d)=>(o(),c(p,{key:d,config:g},null,8,["config"]))),128))]),_:1},16)),e.value.html?(o(),c(U(e.value.component),M({key:1},e.value.props,{innerHTML:e.value.html}),null,16,["innerHTML"])):w("",!0)],64)}}}),De={class:"me-n3 absolute top-0 right-3"},Be=z({__name:"PluginCard",props:{plugin:Object,width:String,height:String},emits:["remove","save"],setup(P,{emit:_}){var Q;const e=P,u=Y.useToast(),$=h(!0),p=h(!1),g=h({});let d=X([]);const s=h(!1);let a=X([]);const V=h(!1);async function v(){var m,n,L;try{const k=await T.delete(`plugin/${(m=e.plugin)==null?void 0:m.id}`);k.success?(u.success(`插件 ${(n=e.plugin)==null?void 0:n.plugin_name} 已卸载`),_("remove")):u.error(`插件 ${(L=e.plugin)==null?void 0:L.plugin_name} 卸载失败：${k.message}}`)}catch(k){console.error(k)}}async function O(){var m;try{const n=await T.get(`plugin/form/${(m=e.plugin)==null?void 0:m.id}`);n&&(d=n.conf,n.model&&(g.value=n.model))}catch(n){console.error(n)}}async function oe(){var m;try{const n=await T.get(`plugin/page/${(m=e.plugin)==null?void 0:m.id}`);n&&(a=n)}catch(n){console.error(n)}}async function se(){var m;try{const n=await T.get(`plugin/${(m=e.plugin)==null?void 0:m.id}`);$e(n)||(g.value=n)}catch(n){console.error(n)}}async function re(){var m,n,L;try{const k=await T.put(`plugin/${(m=e.plugin)==null?void 0:m.id}`,g.value);k.success?(u.success(`插件 ${(n=e.plugin)==null?void 0:n.plugin_name} 配置已保存`),p.value=!1,_("save")):u.error(`插件 ${(L=e.plugin)==null?void 0:L.plugin_name} 配置保存失败：${k.message}}`)}catch(k){console.error(k)}}async function j(){await oe(),p.value=!1,s.value=!0}async function A(){await O(),await se(),s.value=!1,p.value=!0}const ie=h([{title:"查看详情",value:1,show:(Q=e.plugin)==null?void 0:Q.has_page,props:{prependIcon:"mdi-information-outline",click:j}},{title:"配置",value:2,show:!0,props:{prependIcon:"mdi-cog-outline",click:A}},{title:"卸载",value:3,show:!0,props:{prependIcon:"mdi-trash-can-outline",color:"error",click:v}}]);return(m,n)=>{const L=K("IconBtn"),k=xe;return o(),y(x,null,[i($)?(o(),c(F,{key:0,width:e.width,height:e.height,onClick:n[0]||(n[0]=()=>{var f;(f=e.plugin)!=null&&f.has_page?j():A()})},{default:t(()=>{var f;return[D("div",{class:"relative pa-4 text-center card-cover-blurred",style:te({background:`${(f=e.plugin)==null?void 0:f.plugin_color}`})},[D("div",De,[l(L,null,{default:t(()=>[l(H,{icon:"mdi-dots-vertical",class:"text-white"}),l(pe,{activator:"parent","close-on-content-click":""},{default:t(()=>[l(de,null,{default:t(()=>[(o(!0),y(x,null,B(i(ie),(r,I)=>ge((o(),c(fe,{key:I,variant:"plain","base-color":r.props.color,onClick:r.props.click},{prepend:t(()=>[l(H,{icon:r.props.prependIcon},null,8,["icon"])]),default:t(()=>[l(_e,{textContent:b(r.title)},null,8,["textContent"])]),_:2},1032,["base-color","onClick"])),[[me,r.show]])),128))]),_:1})]),_:1})]),_:1})]),l(le,{size:"8rem",class:E({shadow:i(V)})},{default:t(()=>{var r;return[l(ee,{src:`/plugin_icon/${(r=e.plugin)==null?void 0:r.plugin_icon}`,"aspect-ratio":"4/3",cover:"",class:E({shadow:i(V)})},null,8,["src","class"])]}),_:1},8,["class"])],4),l(he,{class:"py-2"},{default:t(()=>[l(ne,{class:"flex items-center flex-row"},{default:t(()=>{var r,I;return[(r=e.plugin)!=null&&r.state?(o(),c(ve,{key:0,dot:"",inline:"",color:"success",class:"me-1 mb-1"})):w("",!0),C(" "+b((I=e.plugin)==null?void 0:I.plugin_name),1)]}),_:1})]),_:1}),l(S,null,{default:t(()=>{var r;return[C(b((r=e.plugin)==null?void 0:r.plugin_desc),1)]}),_:1})]}),_:1},8,["width","height"])):w("",!0),l(J,{modelValue:i(p),"onUpdate:modelValue":n[2]||(n[2]=f=>G(p)?p.value=f:null),"max-width":"50rem",scrollable:"",persistent:""},{default:t(()=>{var f;return[l(F,{title:`${(f=e.plugin)==null?void 0:f.plugin_name} - 配置`},{default:t(()=>[l(k,{onClick:n[1]||(n[1]=r=>p.value=!1)}),l(S,null,{default:t(()=>[(o(!0),y(x,null,B(i(d),(r,I)=>(o(),c(Le,{key:I,config:r,form:i(g)},null,8,["config","form"]))),128))]),_:1}),l(Z,null,{default:t(()=>[i(a).length>0?(o(),c(R,{key:0,onClick:j},{default:t(()=>[C(" 查看详情 ")]),_:1})):w("",!0),l(N),l(R,{variant:"tonal",onClick:re},{default:t(()=>[C(" 保存 ")]),_:1})]),_:1})]),_:1},8,["title"])]}),_:1},8,["modelValue"]),l(J,{modelValue:i(s),"onUpdate:modelValue":n[5]||(n[5]=f=>G(s)?s.value=f:null),"max-width":"62.5rem",scrollable:"",persistent:""},{default:t(()=>{var f;return[l(F,{title:`${(f=e.plugin)==null?void 0:f.plugin_name}`},{default:t(()=>[l(k,{onClick:n[3]||(n[3]=r=>s.value=!1)}),l(S,null,{default:t(()=>[(o(!0),y(x,null,B(i(a),(r,I)=>(o(),c(Te,{key:I,config:r},null,8,["config"]))),128))]),_:1}),l(Z,null,{default:t(()=>[l(R,{onClick:A},{default:t(()=>[C(" 配置 ")]),_:1}),l(N),l(R,{variant:"tonal",onClick:n[4]||(n[4]=r=>s.value=!1)},{default:t(()=>[C(" 关闭 ")]),_:1})]),_:1})]),_:1},8,["title"])]}),_:1},8,["modelValue"])],64)}}});const Re=ae(Be,[["__scopeId","data-v-028f4de0"]]),ze={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},Se={key:1,class:"grid gap-4 grid-plugin-card"},Fe={class:"pa-4"},Me={class:"grid gap-4 grid-plugin-card"},Oe=z({__name:"PluginCardListView",setup(P){const _=h([]),e=h(!1),u=h(!1),$=q(()=>_.value.filter(a=>a.installed)),p=q(()=>_.value.filter(a=>!a.installed));function g(){u.value=!1}function d(){s(),g()}async function s(){try{_.value=await T.get("plugin/"),e.value=!0}catch(a){console.error(a)}}return ye(s),(a,V)=>(o(),y(x,null,[i(e)?w("",!0):(o(),y("div",ze,[i(e)?w("",!0):(o(),c(Ve,{key:0,size:"48",indeterminate:"",color:"primary"}))])),i($).length>0?(o(),y("div",Se,[(o(!0),y(x,null,B(i($),v=>(o(),c(Re,{key:v.id,plugin:v,onRemove:s,onSave:s},null,8,["plugin"]))),128))])):w("",!0),i($).length===0&&i(e)?(o(),c(W,{key:2,"error-code":"404","error-title":"没有安装插件","error-description":"点击右下角按钮，前往插件市场安装插件。"})):w("",!0),l(J,{modelValue:i(u),"onUpdate:modelValue":V[0]||(V[0]=v=>G(u)?u.value=v:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:t(({props:v})=>[l(R,M({icon:"mdi-plus"},v,{size:"x-large",class:"fixed right-5 bottom-5"}),null,16)]),default:t(()=>[l(F,null,{default:t(()=>[D("div",null,[l(ke,{color:"primary"},{default:t(()=>[l(Ce,null,{default:t(()=>[C("插件市场")]),_:1}),l(N),l(we,null,{default:t(()=>[l(R,{size:"x-large",onClick:g},{default:t(()=>[l(H,{color:"white",icon:"mdi-close"})]),_:1})]),_:1})]),_:1})]),D("div",Fe,[D("div",Me,[(o(!0),y(x,null,B(i(p),v=>(o(),c(be,{key:v.id,plugin:v,onInstall:d},null,8,["plugin"]))),128))]),i(p).length===0&&i(e)?(o(),c(W,{key:0,"error-code":"404","error-title":"没有未安装插件","error-description":"所有可用插件均已安装。"})):w("",!0)])]),_:1})]),_:1},8,["modelValue"])],64))}});const Ge=z({__name:"plugin",setup(P){return(_,e)=>(o(),c(Oe))}});export{Ge as default};
