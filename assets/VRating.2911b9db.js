import{y as H,I as C,z as D,A as E,B as G,C as J,D as K,E as O,G as U,H as r,J as j,K as q,L as _,M as Q,N as W,a as t,F,O as X,h as Y}from"./index.61686182.js";const p=H()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:C,default:"$ratingEmpty"},fullIcon:{type:C,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...D(),...E(),...G(),...J()},emits:{"update:modelValue":e=>!0},setup(e,k){let{slots:c}=k;const{t:P}=K(),{themeClasses:N}=O(e),L=U(e,"modelValue"),d=r(()=>j(parseFloat(L.value),0,+e.length)),I=r(()=>q(Number(e.length),1)),M=r(()=>I.value.flatMap(n=>e.halfIncrements?[n-.5,n]:[n])),m=_(-1),g=_(-1),S=_();let b=!1;const h=r(()=>M.value.map(n=>{var f;const o=e.hover&&m.value>-1,l=d.value>=n,a=m.value>=n,u=(o?a:l)?e.fullIcon:e.emptyIcon,s=(f=e.activeColor)!=null?f:e.color,y=l||a?s:e.color;return{isFilled:l,isHovered:a,icon:u,color:y}})),R=r(()=>[0,...M.value].map(n=>{function o(){m.value=n}function l(){m.value=-1}function a(){if(n===0&&d.value===0){var s;(s=S.value)==null||s.focus()}else g.value=n}function i(){b||(g.value=-1)}function u(){e.disabled||e.readonly||(L.value=d.value===n&&e.clearable?0:n)}return{onMouseenter:e.hover?o:void 0,onMouseleave:e.hover?l:void 0,onFocus:a,onBlur:i,onClick:u}}));function w(){b=!0}function z(){b=!1}const x=r(()=>{var n;return(n=e.name)!=null?n:`v-rating-${Q()}`});function v(n){var o,l;let{value:a,index:i,showStar:u=!0}=n;const{onMouseenter:s,onMouseleave:y,onFocus:f,onBlur:A,onClick:T}=R.value[i+1],$=`${x.value}-${String(a).replace(".","-")}`,B={color:(o=h.value[i])==null?void 0:o.color,density:e.density,disabled:e.disabled,icon:(l=h.value[i])==null?void 0:l.icon,ripple:e.ripple,size:e.size,tag:"span",variant:"plain"};return t(F,null,[t("label",{for:$,class:{"v-rating__item--half":e.halfIncrements&&a%1>0,"v-rating__item--full":e.halfIncrements&&a%1===0},onMousedown:w,onMouseup:z,onMouseenter:s,onMouseleave:y},[t("span",{class:"v-rating__hidden"},[P(e.itemAriaLabel,a,e.length)]),u?c.item?c.item({...h.value[i],props:B,value:a,index:i}):t(X,B,null):void 0]),t("input",{class:"v-rating__hidden",name:x.value,id:$,type:"radio",value:a,checked:d.value===a,onClick:T,onFocus:f,onBlur:A,ref:i===0?S:void 0,readonly:e.readonly,disabled:e.disabled},null)])}function V(n){return c["item-label"]?c["item-label"](n):n.label?t("span",null,[n.label]):t("span",null,[Y("\xA0")])}return W(()=>{var n;const o=!!((n=e.itemLabels)!=null&&n.length)||c["item-label"];return t(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},N.value]},{default:()=>[t(v,{value:0,index:-1,showStar:!1},null),I.value.map((l,a)=>{var i,u;return t("div",{class:"v-rating__wrapper"},[o&&e.itemLabelPosition==="top"?V({value:l,index:a,label:(i=e.itemLabels)==null?void 0:i[a]}):void 0,t("div",{class:["v-rating__item",{"v-rating__item--focused":Math.ceil(g.value)===l}]},[e.halfIncrements?t(F,null,[t(v,{value:l-.5,index:a*2},null),t(v,{value:l,index:a*2+1},null)]):t(v,{value:l,index:a},null)]),o&&e.itemLabelPosition==="bottom"?V({value:l,index:a,label:(u=e.itemLabels)==null?void 0:u[a]}):void 0])})]})}),{}}});export{p as V};
