function o(e){if(!e)return"";const r=new Date(e),s=new Date().getTime()-r.getTime(),t=Math.floor(s/1e3);return t<60?`${t}秒`:t<3600?`${Math.floor(t/60)}分钟`:t<86400?`${Math.floor(t/3600)}小时`:`${Math.floor(t/86400)}天`}function u(e){return e==null?!0:typeof e=="object"&&Object.keys(e).length===0}export{o as c,u as i};
