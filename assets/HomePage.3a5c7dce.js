import{_ as v,o as l,c as y,w as e,a,V as j,b,d as n,e as k,f as w,g as $,h as I,i as o,j as E,k as c,r,F as i,l as F,m as z,n as B,p as f,q as h,S as L,s as H,t as R,u as T,v as p,x as g}from"./index.ea781407.js";import{V as A}from"./VRating.f3d691d7.js";import{V as D}from"./VLazy.006817a4.js";/* empty css                   */const M={data:()=>({loading:!1,selection:1,isActive:!1}),methods:{reserve(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)},sectionProductReviews(){console.log("show me the reviews of this product")}}},N=M,q=t=>(f("data-v-d29e2ba8"),t=t(),h(),t),G={class:"d-flex align-center justify-center fill-height"},O=q(()=>n("h3",{class:"pa-0 ma-0 text-center v-col-6 text-body"},"1205\u20AC",-1));function U(t,_,x,S,V,C){return l(),y(D,{modelValue:t.isActive,"onUpdate:modelValue":_[0]||(_[0]=d=>t.isActive=d),options:{threshold:.5},"min-height":"200",transition:"fade-transition"},{default:e(()=>[a(z,{density:"compact",loading:t.loading,"min-width":"80px","max-width":"auto","min-height":"180","max-height":"210",class:"card-hover",tabindex:"9",to:{name:"home"}},{loader:e(({isActive:d})=>[a(j,{active:d,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:e(()=>[a(b,{cover:"",draggable:"false",ondragstart:"return false;",height:"120","aspect-ratio":3/4,"lazy-src":"https://picsum.photos/id/19/50/100",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},{placeholder:e(()=>[n("div",G,[a(k,{indeterminate:"",color:"grey-lighten-4"})])]),_:1}),a(w,{class:"px-1 pa-0 ma-0"},{default:e(()=>[a($,{tag:"h2",lines:"two",label:"Sticky Banner",title:"alternative long title",class:"text-body-2 pt-1"},{default:e(()=>[I(" EXTRA Cafe Badilicon extra title will be hidden ")]),_:1}),a(o,{align:"center",class:"ma-0 my-0"},{default:e(()=>[a(E,{class:"v-col-6 pa-0"},{default:e(()=>[(l(),c(i,null,r(3,d=>a(B,{key:d,color:"error",icon:"mdi-fire-circle",size:"extra-small",class:"pa-1 me-1"})),64))]),_:1}),O]),_:1})]),_:1}),a(F,{tag:"div",class:"px-1 py-0 ml-auto"},{default:e(()=>[a(A,{"model-value":4.5,color:"amber",density:"compact","half-increments":"",readonly:"",size:"small",class:"pa-0 flex-start ml-auto"},null,8,["model-value"])]),_:1})]),_:1},8,["loading"])]),_:1},8,["modelValue","options"])}const X=v(N,[["render",U],["__scopeId","data-v-d29e2ba8"]]);const J={name:"HomePage",components:{ProductCardExtraSmall:X,Splide:L,SplideSlide:H},data:()=>({IMG_SLIDES:[{src:"assets/img/1.jpg",alt:"img"},{src:"assets/img/2.jpg",alt:"img"},{src:"assets/img/3.jpg",alt:"img"},{src:"assets/img/4.jpg",alt:"img"},{src:"assets/img/5.jpg",alt:"img"},{src:"src/assets/img/6.jpg",alt:"img"},{src:"assets/img/7.jpg",alt:"img"}],mainOptions:{fixedHeight:"420px",rewind:!0,width:"100%",cover:!0,autoplay:!0,interval:9e3,type:"fade",perPage:1,perMove:1,pagination:!1,lazyLoad:"sequential",arrows:!1,heightRatio:1.5}})},u=t=>(f("data-v-0897a23a"),t=t(),h(),t),K=["src","alt","data-splide-lazy"],Q=u(()=>n("h2",{class:"pa-3"},"First Product Category",-1)),W=u(()=>n("h2",{class:"pa-3"},"First Product Category",-1)),Y=u(()=>n("h2",{class:"pa-3"},"First Product Category",-1)),Z=u(()=>n("h2",{class:"pa-3"},"First Product Category",-1)),aa=u(()=>n("h2",{class:"pa-3"},"First Product Category",-1)),ea=u(()=>n("h2",{class:"pa-3"},"First Product Category",-1));function sa(t,_,x,S,V,C){const d=g("SplideSlide"),P=g("Splide"),m=g("ProductCardExtraSmall");return l(),y(R,{class:"border"},{default:e(()=>[a(o,null,{default:e(()=>[a(T,{cols:"12",sm:"6",class:"pa-0"},{default:e(()=>[a(P,{"aria-labelledby":"Procuts images title Here",options:t.mainOptions},{default:e(()=>[(l(!0),c(i,null,r(t.IMG_SLIDES,s=>(l(),y(d,{key:s.src,class:"rounded"},{default:e(()=>[n("img",{src:s.src,alt:s.alt,"data-splide-lazy":s.src},null,8,K)]),_:2},1024))),128))]),_:1},8,["options"])]),_:1}),a(o,{justify:"space-evenly",class:"pa-a ma-0 v-col-12 v-col-sm-6"},{default:e(()=>[(l(),c(i,null,r(4,s=>a(m,{key:s,class:"v-col-6 v-col-sm-6 pt-0 ma-0 mt-8 mt-sm-0"})),64))]),_:1})]),_:1}),a(p,{class:"mt-8 mx-16"}),Q,a(o,{justify:"space-evenly",class:"v-col-12 pa-0 ma-0"},{default:e(()=>[(l(),c(i,null,r(4,s=>a(m,{key:s,class:"v-col-6 v-col-sm-3 my-8"})),64))]),_:1}),a(p,{class:"my-4 mx-15"}),W,a(o,{justify:"space-evenly",class:"v-col-12 pa-0 ma-0"},{default:e(()=>[(l(),c(i,null,r(4,s=>a(m,{key:s,class:"v-col-6 v-col-sm-3 my-8"})),64))]),_:1}),a(p,{class:"my-4 mx-15"}),Y,a(o,{justify:"space-evenly",class:"v-col-12 pa-0 ma-0"},{default:e(()=>[(l(),c(i,null,r(4,s=>a(m,{key:s,class:"v-col-6 v-col-sm-3 my-8"})),64))]),_:1}),a(p,{class:"my-4 mx-15"}),Z,a(o,{justify:"space-evenly",class:"v-col-12 pa-0 ma-0"},{default:e(()=>[(l(),c(i,null,r(4,s=>a(m,{key:s,class:"v-col-6 v-col-sm-3 my-8"})),64))]),_:1}),a(p,{class:"my-4 mx-15"}),aa,a(o,{justify:"space-evenly",class:"v-col-12 pa-0 ma-0"},{default:e(()=>[(l(),c(i,null,r(4,s=>a(m,{key:s,class:"v-col-6 v-col-sm-3 my-8"})),64))]),_:1}),a(p,{class:"my-4 mx-15"}),ea,a(o,{justify:"space-evenly",class:"v-col-12 pa-0 ma-0"},{default:e(()=>[(l(),c(i,null,r(4,s=>a(m,{key:s,class:"v-col-6 v-col-sm-3"})),64))]),_:1})]),_:1})}const ra=v(J,[["render",sa],["__scopeId","data-v-0897a23a"]]);export{ra as default};
