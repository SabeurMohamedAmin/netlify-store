import{P as l,Q as u,R as d,B as c,T as m,U as f,G as v,N as p,W as y,X as V,a as n,Y as P}from"./index.61686182.js";const T=l({name:"VLazy",directives:{intersect:u},props:{modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...d(),...c(),...m({transition:"fade-transition"})},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:s}=i;const{dimensionStyles:o}=f(e),a=v(e,"modelValue");function r(t){a.value||(a.value=t)}return p(()=>{var t;return y(n(e.tag,{class:"v-lazy",style:o.value},{default:()=>[a.value&&n(P,{transition:e.transition,appear:!0},{default:()=>[(t=s.default)==null?void 0:t.call(s)]})]}),[[V("intersect"),r,e.options]])}),{}}});export{T as V};
