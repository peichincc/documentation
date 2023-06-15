"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6933],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var r=t(7294);function z(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function E(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){z(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,r,z=function(A,e){if(null==A)return{};var t,r,z={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(z[t]=A[t]);return z}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(z[t]=A[t])}return z}var i=r.createContext({}),o=function(A){var e=r.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):E(E({},e),A)),t},c=function(A){var e=o(A.components);return r.createElement(i.Provider,{value:e},A.children)},s="mdxType",B={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(A,e){var t=A.components,z=A.mdxType,n=A.originalType,i=A.parentName,c=a(A,["components","mdxType","originalType","parentName"]),s=o(t),p=z,d=s["".concat(i,".").concat(p)]||s[p]||B[p]||n;return t?r.createElement(d,E(E({ref:e},c),{},{components:t})):r.createElement(d,E({ref:e},c))}));function d(A,e){var t=arguments,z=e&&e.mdxType;if("string"==typeof A||z){var n=t.length,E=new Array(n);E[0]=p;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=A,a[s]="string"==typeof A?A:z,E[1]=a;for(var o=2;o<n;o++)E[o]=t[o];return r.createElement.apply(null,E)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1009:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>B});var r=t(7462),z=(t(7294),t(3905));const n="data:image/jpeg;base64,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",E="data:image/png;base64,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w6sJFbGu1ctULf0uDRB5H7UiBBhHK63bQNHAt7HT6eSMxPJ0Jb3kUCudt/SWPS28OijJpuQyulBAYnxjSIEGEcr9yBmr8UAABAcCOYSPLnpS7QrK9Ihbm5DWijsMXV14JYBHgYnvWIXJiLsYjUR21o5C1c+DGQExGlFmmW+il3zinpT0I6CPtWhHZNJW7ix0qObm2eigAgIDhQEGbk12YwpfJ8t6AyfDeu6OVFxyw/yh/9oADAMBAAIAAwAAABDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzLTzzzzzzzzzzzzzzzzzzzzlNOo2L3zzzzzzzzzzzzzzzzyjPijZI6/Tzzzznzzzzzzzzzzx35xrCwxQ/TXzlvzzzzzzzzzyn7zzw21KwjTZvD7zzzzzzzzzzzzzzzw+CbYwjP7zzzzzzzzzfXLb3Xzzz2/+y9/zzzzzzzzyY1Di7bLvzzzzzzzzzzzzzzzyi1OSxDCx/wB8886388888888887M8ttbqmWcQ28Z88888888888/8888Ozyqm2MNE88888888888888888NsxUPFV88888888888888888888Oe+88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//EACkRAQABAgMGBwEBAAAAAAAAAAERACExQVEgYXGh0eEQMECRsfDxgXD/2gAIAQMBAT8Q/wAhwkOLX7hWEjwfSlQ30daYvA0Ld6WbvgMXKYtI0b1pLR09EMpiw6/ynSSu0KMlWKbjr3+dlGLzHbAtOUd6Bslv6UoRD2KNm5ypWUJsmg18nr1oRJPCWEVlRhm9158PLRQwtHhgNiANkwaQBCbNjUoCPidKQ5VKI8+Lx9Dn1ydKbtk1MNmAUtZgfHyoQAq1lfu+k5c3ak4nv+VarHf9ihEk2EEhpqbHd9ik4nt+UHPk71e2v3dUIAeV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",a=t.p+"assets/images/Swipper-logo-a0fed75298558c1d54bed764c79d0b7f.png",i={title:"Tech Stacks",id:"tech-stacks",description:"Tech Stacks used in designing frontend of T&P Website",sidebar_label:"Tech Stacks"},o=void 0,c={unversionedId:"projects/tnp-website/frontend/tech-stacks",id:"projects/tnp-website/frontend/tech-stacks",title:"Tech Stacks",description:"Tech Stacks used in designing frontend of T&P Website",source:"@site/docs/projects/tnp-website/frontend/tech-stacks.mdx",sourceDirName:"projects/tnp-website/frontend",slug:"/projects/tnp-website/frontend/tech-stacks",permalink:"/docs/projects/tnp-website/frontend/tech-stacks",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tnp-website/frontend/tech-stacks.mdx",tags:[],version:"current",lastUpdatedBy:"Mahima Churi",lastUpdatedAt:1686768615,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{title:"Tech Stacks",id:"tech-stacks",description:"Tech Stacks used in designing frontend of T&P Website",sidebar_label:"Tech Stacks"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/projects/tnp-website/getting-started"},next:{title:"Components",permalink:"/docs/projects/tnp-website/frontend/components/"}},s={},B=[],p={toc:B},d="wrapper";function l(A){let{components:e,...t}=A;return(0,z.kt)(d,(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,z.kt)("div",{style:{display:"flex",flexDirection:"Column",justifyContent:"space-around"}},(0,z.kt)("div",{class:"tech-card",style:{display:"flex",border:"1px solid #ccc",borderRadius:"5px",padding:"20px",margin:"10px",width:"1000px",textAlign:"left"}},(0,z.kt)("img",{src:n,style:{border:"2px solid gray",width:"100px",margin:"0 20px",borderRadius:"5px"}}),(0,z.kt)("p",null,(0,z.kt)("b",null,"Astro")," is an open-source framework for generating web applications on top of popular UI frameworks like React, Preact, Vue, or Svelte.  It offers a modern and flexible approach to web development, enabling developers to create fast, scalable, and engaging websites and applications.",(0,z.kt)("a",{href:"https://astro.build/"}," Read More "))),(0,z.kt)("div",{class:"tech-card",style:{display:"flex",border:"1px solid #ccc",borderRadius:"5px",padding:"20px",margin:"10px",width:"1000px",textAlign:"left"}},(0,z.kt)("img",{src:E,style:{border:"2px solid gray",width:"100px",margin:"0 20px",borderRadius:"5px"}}),(0,z.kt)("p",null,(0,z.kt)("b",null,"Tailwind CSS")," is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML. It is a versatile CSS framework that offers a pragmatic and efficient approach to web development. ",(0,z.kt)("br",null)," ",(0,z.kt)("a",{href:"https://tailwindcss.com/"}," Read More "))),(0,z.kt)("div",{class:"tech-card",style:{display:"flex",border:"1px solid #ccc",borderRadius:"5px",padding:"20px",margin:"10px",width:"1000px",textAlign:"left"}},(0,z.kt)("img",{src:a,style:{border:"2px solid gray",width:"100px",margin:"0 20px",borderRadius:"5px"}}),(0,z.kt)("p",null,(0,z.kt)("b",null,"Swiper")," is a powerful and popular JavaScript library for creating touch-enabled, responsive sliders, carousels, and swiper components on the web. It provides a wide range of features and customization options to build interactive and engaging content sliders for websites and web applications.",(0,z.kt)("a",{href:"https://swiperjs.com/"}," Read More ")))))}l.isMDXComponent=!0}}]);