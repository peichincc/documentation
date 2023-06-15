"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(4868);const o=n.p+"assets/images/industryInteraction-abe75ab3371960993c456d8a91acc35a.png",s={title:"Industry Interaction",id:"industry-interaction",description:"Industry Interaction Component in T&P Website",sidebar_label:"Industry Interaction",keywords:["interaction","industry"]},p=void 0,l={unversionedId:"projects/tnp-website/frontend/components/industry-interaction",id:"projects/tnp-website/frontend/components/industry-interaction",title:"Industry Interaction",description:"Industry Interaction Component in T&P Website",source:"@site/docs/projects/tnp-website/frontend/components/industry-interaction.mdx",sourceDirName:"projects/tnp-website/frontend/components",slug:"/projects/tnp-website/frontend/components/industry-interaction",permalink:"/docs/projects/tnp-website/frontend/components/industry-interaction",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tnp-website/frontend/components/industry-interaction.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1686811870,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"Industry Interaction",id:"industry-interaction",description:"Industry Interaction Component in T&P Website",sidebar_label:"Industry Interaction",keywords:["interaction","industry"]},sidebar:"docs",previous:{title:"Internships",permalink:"/docs/projects/tnp-website/frontend/components/internships"},next:{title:"Event Page",permalink:"/docs/projects/tnp-website/frontend/components/event-page"}},d={},c=[{value:"Creating a layout",id:"creating-a-layout",level:3},{value:"Creating IndustryInteractionSwiper",id:"creating-industryinteractionswiper",level:3}],m={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To bridge the gap between academics and expectations from industries, ",(0,r.kt)("em",{parentName:"p"},"TNP cell of TCET")," facilitates students to engage with various industries, gain practical exposure and develop industry relevant skills.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://tnp.tcetmumbai.in/industry-interaction/"},(0,r.kt)("strong",{parentName:"a"},"Industry Interaction"))," page of ",(0,r.kt)("em",{parentName:"p"},"TNP website")," provides you insights on various programmes and interactions taking place between industries and students in TCET. This page is accesible through the navigation bar of ",(0,r.kt)("a",{parentName:"p",href:"https://tnp.tcetmumbai.in/"},(0,r.kt)("strong",{parentName:"a"},"TNP website")),". "),(0,r.kt)("h3",{id:"creating-a-layout"},"Creating a layout"),(0,r.kt)("p",null,"To set up a basic layout of the page and to create a section that would briefly describe the content of the page, ",(0,r.kt)("strong",{parentName:"p"},"following steps are executed:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Creating a ",(0,r.kt)("strong",{parentName:"p"},'"industry-interaction.astro"')," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We need to define an array which will store all the information that will be used throughout the page. The ",(0,r.kt)("inlineCode",{parentName:"p"},"IndustryInteractionData")," array is defined with the following properties:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="industry-interaction.astro" showLineNumbers',title:'"industry-interaction.astro"',showLineNumbers:!0},"    const IndustryInteractionData: IndustryInteractionType[] = [\n        {\n            companyLogo: //company logo comes here,\n            companyName: //company name,\n            themeColor: //define the theme of the card,\n            description: //brief description of the event,\n            subdescription: //subdescription of the event,\n            eventImages: [ //array of images along with alt text\n             {\n                img: ,\n                alt: ,\n            },\n            {...}\n            ],\n        },\n    ]\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The next step is to set the main layout of the page. Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," component, the ",(0,r.kt)("em",{parentName:"p"},"title")," and ",(0,r.kt)("em",{parentName:"p"},"description")," of the page is defined. The classes are defined under ",(0,r.kt)("inlineCode",{parentName:"p"},"<main>")," component defining the spacing and padding. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="industry-interaction.astro" {2,3,4} showLineNumbers',title:'"industry-interaction.astro"',"{2,3,4}":!0,showLineNumbers:!0},'   <Layout\n        title= // Title of the page\n        description= //Description of the page\n        >\n        <main class="block !space-y-6 md:!space-y-12 lg:!space-y-24 w-full px-8 md:px-16"\n        >\n         // Define the layout of the page\n        </main>\n    </Layout>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Industry Interaction section")," of the page is wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," component with a class defining a flex container.  Within this container, the first ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element contains ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," elements with the title ",(0,r.kt)("strong",{parentName:"p"},'"Industry Interaction"')," and a description text. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="industry-interaction.astro" {2-7} showLineNumbers',title:'"industry-interaction.astro"',"{2-7}":!0,showLineNumbers:!0},'    <div class="w-full flex flex-col-reverse md:flex-row">\n        <div class="h-full xl:w-1/2 md:w-1/2 sm:w-full p-3">\n            <p class="text-4xl 2xl:text-6xl font-title mb-4">Industry Interaction</p>\n            <p class="text-slate-600">\n            // description text\n            </p>\n        </div>\n        // other elements\n    </div>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The second ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element inside the container defines classes to create background circles for creating a visually pleasing page. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="industry-interaction.astro" showLineNumbers',title:'"industry-interaction.astro"',showLineNumbers:!0},'        <div class="absolute bg-gray-400 w-96 h-96 -left-14 top-25 -z-10 rounded-full flex justify-center bg-gradient-to-l from-gray-100 to-white">\n        <div class="bg-white w-72 h-72 rounded-full mt-12"></div>\n        </div>\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The third ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element is defined with a flex layout to create a container in which the data in ",(0,r.kt)("inlineCode",{parentName:"p"},"IndustryInteractionData")," array will be iterated over to create cards for each data item. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="industry-interaction.astro" {5-15} showLineNumbers',title:'"industry-interaction.astro"',"{5-15}":!0,showLineNumbers:!0},'    {\n        IndustryInteractionData.slice(0,2).map((data) => (\n          <div class={`...`} // a class defining the size and flex layout\n            style={{...}} > //setting the border color and bg color according to the theme color\n            <img src={data.companyLogo} class="rounded-full w-12" />\n            <p class=" mb-1 mt-3 ">{data.companyName}</p>\n            <p class="text-slate-600 font-light text-sm">\n              {data.subdescription}\n            </p>\n            <a\n              href={\'#\'+data.companyName}\n              class={`...`} \n            >\n              Read More \u2193\n            </a>\n          </div>\n        ))\n    }  \n')))),(0,r.kt)("p",null,"Each card contains ",(0,r.kt)("strong",{parentName:"p"},"company logo"),", ",(0,r.kt)("strong",{parentName:"p"},"name"),", ",(0,r.kt)("strong",{parentName:"p"},"subdescription")," and ",(0,r.kt)("strong",{parentName:"p"},"Read More link"),". "),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the ",(0,r.kt)("strong",{parentName:"p"},'"Industry Interaction"')," section, a container is defined where event sections for each company will be described based on the array data. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="industry-interaction.astro" {10,13,15,18} showLineNumbers',title:'"industry-interaction.astro"',"{10,13,15,18}":!0,showLineNumbers:!0},'     {\n      IndustryInteractionData.map((data) => (\n        <div class={`...`}\n             id={data.companyName}\n             style={{\'...\'}} //set the background color according to the theme color of the data\n        >\n        <div class={`...`} >\n          <img\n              class="rounded-full w-12 mb-4 mt-4"\n              src={data.companyLogo}\n           />\n            <p class="text-3xl font-title mb-4">\n              {data.companyName} Industry Interaction\n            </p>\n            <p class="text-sm xl:text-base text-slate-600 ">{data.description}</p>\n          </div>\n          <div class=" flex justify-center w-full lg:w-1/2">\n            <IndustryInteractionSwiper client:load data={data.eventImages} />\n          </div>\n        </div>\n      ))\n     }\n')))),(0,r.kt)("p",null,"Each event section will contain ",(0,r.kt)("strong",{parentName:"p"},"logo"),", ",(0,r.kt)("strong",{parentName:"p"},"name"),", ",(0,r.kt)("strong",{parentName:"p"},"description")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IndustryInteractionSwiper")," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"IndustryInteractionSwiper")," component is rendered for each event item using the ",(0,r.kt)("inlineCode",{parentName:"p"},"data.eventImages")," as data drop. "),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Save your progress. ")),(0,r.kt)("h3",null,"This is what the page's hero section looks like:"),(0,r.kt)("img",{src:i.Z,style:{border:"2px solid grey"}}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"In the next part, we are going to see how we created ",(0,r.kt)("strong",{parentName:"p"},'"IndustryInteractionSwiper"')," component. "),(0,r.kt)("h3",{id:"creating-industryinteractionswiper"},"Creating IndustryInteractionSwiper"),(0,r.kt)("p",null,"In order to create slides of images, we need to create a react functional component. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here's how we implemented this component:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Creating a ",(0,r.kt)("strong",{parentName:"p"},"IndustryInteractionSwiper.tsx")," file. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Importing all the required dependencies, ",(0,r.kt)("inlineCode",{parentName:"p"},"imageLink")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"../../env")," module and necessary CSS styles for ",(0,r.kt)("strong",{parentName:"p"},"Swiper"),". "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="IndustryInteractionSwiper.tsx" showLineNumbers',title:'"IndustryInteractionSwiper.tsx"',showLineNumbers:!0},'    import { Swiper, SwiperSlide } from "swiper/react";\n    import { Pagination, A11y, Autoplay } from "swiper";\n    import type { imageLink } from "../../env";\n    import "swiper/css";\n    import "swiper/css/pagination";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Creating a react functional component ",(0,r.kt)("inlineCode",{parentName:"p"},"IndustryInteractionSwiper")," in the following way:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="IndustryInteractionSwiper.tsx" showLineNumbers',title:'"IndustryInteractionSwiper.tsx"',showLineNumbers:!0},"    const IndustryInteractionSwiper: React.FC<{\n        data: imageLink[];\n    }> = ({ data }) => {\n        return (\n            // Component JSX goes here\n        );\n    };\n\n    export default IndustryInteractionSwiper;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Swiper")," component within the component defined above to define the behaviour and appearance of the component. This can be done in the following way:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="IndustryInteractionSwiper.tsx" {2-5} showLineNumbers',title:'"IndustryInteractionSwiper.tsx"',"{2-5}":!0,showLineNumbers:!0},"    <Swiper\n        modules={[A11y, Autoplay]}\n        autoplay={{\n        delay: 2500,\n        }}\n        spaceBetween={50} //Defining the space between slides\n        slidesPerView={1} //Specifying how many slides should be visible at a time\n    >\n    {/* Slides go here */}\n    </Swiper>\n\n")),(0,r.kt)("p",{parentName:"li"},"In this step, ",(0,r.kt)("inlineCode",{parentName:"p"},'"modules"')," prop is used to enable additional features like ",(0,r.kt)("em",{parentName:"p"},"accesibility")," and ",(0,r.kt)("em",{parentName:"p"},"autoplay"),". The autoplay prop is defined to advance every other slide in 2.5 seconds.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The",(0,r.kt)("inlineCode",{parentName:"p"},"data")," array is mapped inside the ",(0,r.kt)("strong",{parentName:"p"},"Swiper component")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SwiperSlide")," component is structured for each data array item."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="IndustryInteractionSwiper.tsx" {2-4} showLineNumbers',title:'"IndustryInteractionSwiper.tsx"',"{2-4}":!0,showLineNumbers:!0},"    {data.map((d) => (\n        <SwiperSlide key={d.alt}>\n            {/* Slide content goes here */}\n        </SwiperSlide>\n    ))}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SwiperSlide")," component is created to define the content for each slide. An ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," element is defined as follows: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="IndustryInteractionSwiper.tsx" {3,5,7} showLineNumbers',title:'"IndustryInteractionSwiper.tsx"',"{3,5,7}":!0,showLineNumbers:!0},'    {data.map((d) => (\n        <SwiperSlide key={d.alt}>\n            <span className="w-full h-[130%] block" >\n\n            <img src={d.img} alt={d.alt} width={600} height={400}className="w-full aspect-video rounded-2xl" />\n\n            </span>\n        </SwiperSlide>\n    ))}    \n')),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," prop is set to the ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")," property of the current data item.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Custom CSS is defined to style the component slides. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," to see the changes in your local environment."))),(0,r.kt)("h3",null,"Here's the event section with the Swiper component:"),(0,r.kt)("img",{src:o,style:{border:"2px solid grey"}}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Congratulations, we have successfully implemented the ",(0,r.kt)("a",{parentName:"em",href:"industry-interaction"},(0,r.kt)("strong",{parentName:"a"},"Industry Interaction"))," page. Let's continue to find out how we implemented the ",(0,r.kt)("a",{parentName:"em",href:"student-award"},(0,r.kt)("strong",{parentName:"a"},"Event Page"))," of the ",(0,r.kt)("a",{parentName:"em",href:"https://tnp.tcetmumbai.in/"},(0,r.kt)("strong",{parentName:"a"},"TNP website")),". ")))}g.isMDXComponent=!0},4868:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/industryhero-9e80de474d03f5c74f42f4b14233db15.png"}}]);