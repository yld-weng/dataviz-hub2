(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return K}));var l=a("q1tI"),r=a.n(l),o=a("aN7D"),s=a("c6+h"),n=a("gY85"),i=a("Wbzz"),c=a("ma3e"),b=a("wd/R"),u=a.n(b),d=a("/eHF"),x=a.n(d),m=a("x/DL"),f=a("qKvR"),p=function(e){var t=e.eventBrite,a=Object(l.useState)(u()().format("ddd DD MMMM YYYY, hh:mm A")),r=a[0],o=a[1];return Object(l.useEffect)((function(){o(u()().format("ddd DD MMMM YYYY, hh:mm A"))}),[]),Object(f.b)("div",{className:"bg-black w-full"},Object(f.b)(x.a,{duration:1e3},Object(f.b)("div",{id:"eventNotice",className:"w-full text-gray-800 flex-col flex-wrap overflow-auto shadow-lg z-10 relative",style:{backgroundColor:"#f8f8f8"}},t.edges.map((function(e){var t=e.node,a=t.summary?Object(m.b)(t.summary,30):"";return Object(f.b)("div",{key:t.id},Object(f.b)("div",{className:"text-gray-700 text-sm w-full font-bold px-2 py-3"},"Today: ",r),Object(f.b)("a",{className:"flex flex-wrap w-full overflow-hidden max-h-80 text-gray-700 group pb-2 px-2",style:{fontFamily:"TUoS Blake"},href:t.url,target:"_blank",rel:"noopener noreferrer"},Object(f.b)("img",{className:"w-full md:w-3/12 overflow-hidden self-center",src:t.logo.original.url,alt:"Thumbnail: "+a,style:{objectFit:"cover",objectPosition:"center",minHeight:"180px"}}),Object(f.b)("div",{className:"w-full md:w-9/12 pb-2 px-4"},Object(f.b)("h1",{className:"inline-block font-semibold xl:text-xl"},Object(f.b)("p",{className:"text-highlight_2 text-2xl xl:text-3xl inline-block"},"NEXT")," event:  ",Object(f.b)("p",{className:"inline-block text-lg xl:text-xl font-bold"},t.name.text?t.name.text:"No next event")),Object(f.b)("p",{className:"text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm xl:text-base"},a),Object(f.b)("p",{className:"flex pt-2 group-hover:text-highlight_2 text-sm xl:text-base"},Object(f.b)(c.d,{className:"mr-1"}),t.start.local),Object(f.b)("div",{className:"flex flex-wrap"},Object(f.b)("div",{className:"w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm xl:text-base"},Object(f.b)("p",{className:"flex group-hover:text-highlight_2"},t.online_event&&Object(f.b)(c.f,{className:"mr-1 mt-1"})," ",t.online_event&&"Online Event"),Object(f.b)("p",{className:"flex group-hover:text-highlight_2"},t.venue&&Object(f.b)(c.f,{className:"mr-1 mt-1"}),t.venue&&t.venue.name&&t.venue.name+", ",t.venue&&t.venue.address.address_1&&t.venue.address.address_1+", ",t.venue&&t.venue.address.city&&t.venue.address.city+", ",t.venue&&t.venue.address.postal_code&&t.venue.address.postal_code)),Object(f.b)("div",{className:"flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center hidden-xs hidden-md"},Object(f.b)("button",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:flex shadow-sm -mt-4 py-2 px-5 text-lg bg-gray-800 text-white hover:bg-blue-800"},"Register"))))))})))))},g=a("M4XY"),h=a.n(g),v=a("1oaH"),j=function(e){var t=e.featuredPost;if(t&&t.edges)return Object(f.b)("div",{className:"w-full flex flex-wrap pb-6 bg-black-080808"},t.edges.map((function(e){var t=e.node,a=Object(m.a)(t),l=Object(m.b)(t.frontmatter.title,11),o=Object(m.b)(t.frontmatter.description,20);return Object(f.b)(x.a,{key:t.id,duration:2e3,fraction:.3},Object(f.b)("div",{className:"group w-full sm:w-1/2 min-h-80 lg:min-h-95 xl:min-h-100 pb-28 overflow-hidden relative leading-none bg-black-080808 text-gray-500 flex-grow",tabIndex:"0"},Object(f.b)(i.Link,{to:t.fields.slug},Object(f.b)("div",{className:"flex top-0 left-0 absolute ml-6 mt-6 text-white lg:bg-transparent lg:text-gray-300 group-hover:bg-gray-900 items-center rounded-lg p-1",style:{zIndex:"3"}},Object(f.b)(c.j,{className:"text-yellow-300 text-2xl"}),Object(f.b)("p",{className:"inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold px-2",style:{fontFamily:"TUoS Blake"}},"Featured")),Object(f.b)(v.k,{className:"ipadp:greyScale-100 group-hover:greyScale-0 group-focus:greyScale-0 min-h-3/5 max-h-3/5"},Object(f.b)(v.j,{style:{backgroundImage:"url("+a+")"}})),Object(f.b)(v.d,{className:"pt-6 px-8 text-gray-700"},Object(f.b)("h1",{className:"mt-3 font-bold text-2xl 2xl:text-3xl leading-tight text-gray-200 group-hover:text-highlight_2 overflow-y-hidden"},l),Object(f.b)("p",{className:"my-2 text-sm 2xl:text-lg leading-tight group-hover:text-gray-100"},o),Object(f.b)("p",{className:"my-2 text-xs 2xl:text-base pt-2 group-hover:text-gray-100"},t.frontmatter.author.map((function(e,a){return t.frontmatter.author.length==a+1?e.name:e.name+" · "}))),Object(f.b)("p",{className:"my-2 text-xs 2xl:text-base text-gray-500 group-hover:text-gray-300"},t.frontmatter.date," · ",t.fields.readingTime.text))),Object(f.b)("div",{className:"px-8 lg:px-8 text-xs text-gray-500",style:{fontWeight:"400"}},t.frontmatter.category.map((function(e){return Object(f.b)(r.a.Fragment,null,Object(f.b)(i.Link,{className:"font-semibold hover:underline text-gray-500",key:e,to:"/blog/category/"+h()(e)},e),Object(f.b)(r.a.Fragment,null," · "))})),t.frontmatter.tag.map((function(e,a){return a<3&&Object(f.b)(r.a.Fragment,null,Object(f.b)(i.Link,{key:e,className:"text-gray-500 hover:underline",to:"/blog/tag/"+h()(e)},e),t.frontmatter.tag.length===a+1?"":[2===a?" ":" · "])})),t.frontmatter.tag.length>3&&Object(f.b)(i.Link,{className:"text-gray-500 hover:underline",to:t.fields.slug},"+",t.frontmatter.tag.length-3," more"))))})))},O=a("NIcq"),y=function(e){var t=e.latestPost,a=0;return Object(f.b)(r.a.Fragment,null,Object(f.b)("div",{className:"w-full flex flex-wrap",style:{background:"linear-gradient(0deg, rgb(255, 121, 180) 10%, rgb(41, 197, 255) 100%)"}},t.edges.map((function(e){var t=e.node;if(!("true"===t.frontmatter.featured&&(a+=1)<=2)){var l=Object(m.a)(t),r=Object(m.b)(t.frontmatter.description,40),o=t.frontmatter.date;return o=o.substring(0,6),Object(f.b)("div",{key:t.id,className:"group w-full relative z-20 border-t-1 border-transparent first:border-black",tabIndex:"0"},Object(f.b)(x.a,{key:t.id,duration:1e3,fraction:.1},Object(f.b)("div",{className:"w-full bg-black-080808 hover:bg-transparent text-white 2xl:text-xl"},Object(f.b)(i.Link,{to:t.fields.slug,className:"flex flex-wrap flex-col md:flex-row justify-between w-full text-gray-500 hover:text-white px-5 lg:px-12 py-4"},Object(f.b)("div",{className:"flex flex-wrap items-center md:w-2/5 lg:w-2/12"},Object(f.b)(O.b,{className:"text-red-700 ipadp:text-white group-hover:text-red-700 text-3xl"}),t.frontmatter.category.map((function(e){return Object(f.b)(v.h,{key:e,to:"/blog/category/"+h()(e),className:"rounded-full py-0 my-0 mx-2 border-none bg-white text-black hover:bg-gray-200 font-semibold invisible group-hover:visible"},e)}))),Object(f.b)("div",{className:"md:w-3/5 lg:w-10/12 flex justify-between"},Object(f.b)("div",{className:"inline-block font-semibold"},t.frontmatter.title),Object(f.b)("div",{className:"inline-block font-semibold"},o))))),Object(f.b)("div",{className:"bg-white hidden lg:block fixed left-0 top-0 opacity-0 group-focus:opacity-100 group-hover:opacity-100 transform -translate-x-110% group-hover:translate-x-0 transition duration-500 shadow-xl",style:{width:"33.333333%"}},Object(f.b)("div",{className:"min-h-50 max-h-50 w-full transform",style:{backgroundImage:"url("+l+")",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),Object(f.b)("div",{className:"flex flex-col bg-white min-h-50 py-6 px-8"},Object(f.b)("p",{className:"text-sm text-gray-500 font-normal 2xl:text-lg"},t.frontmatter.author.map((function(e,a){return t.frontmatter.author.length==a+1?e.name:e.name+" · "})),"   |   ",t.fields.readingTime.text),Object(f.b)("p",{className:"mt-2 text-gray-500"},t.frontmatter.tag.map((function(e,t){return t<3&&Object(f.b)(v.l,{className:"text-xs py-0 mr-1 my-0",key:e,to:"/blog/tag/"+h()(e)},e)})),t.frontmatter.tag.length>3&&Object(f.b)(v.l,{className:"text-xs py-0 mx-1 my-0",to:t.fields.slug},"+",t.frontmatter.tag.length-3," more")),Object(f.b)("p",{className:"mt-4 2xl:text-2xl text-black"},r))))}}))),Object(f.b)("div",{className:"flex flex-wrap w-full bg-gray-100 py-10 px-3 justify-center items-center self-center",style:{transition:".3s ease"}},Object(f.b)("div",{className:"text-black mr-10"},"Discover more articles and tutorials at our blog."),Object(f.b)(i.Link,{to:"/blog"},Object(f.b)(v.g,{type:"AnimateButton",className:"group py-2 px-4 mt-0 text-sm bg-white text-black hover:text-white",hoverBC:"#000",link:!0,title:"read more on blog"},"Read more"))))},N=a("hXnw"),w=a.n(N),k=a("29yR"),S=function(){var e="transform transition duration-300 ease-in-out",t=e+" w-4/5 lg:w-1/4 2xl:w-1/5 flex flex-wrap group justify-center mx-5 p-8 xl:p-10 text-center mt-10 hover:-translate-y-1 shadow-xs hover:shadow-2xl rounded-lg",a=e+" group-hover:invisible translate-y-0 group-hover:-translate-y-40 group-focus:-translate-y-40 opacity-100 group-hover:opacity-0 group-focus:opacity-0",l=e+" fixed top-0 left-0 p-8 text-left group-hover:translate-y-0 translate-y-40 group-focus:translate-y-0 invisible group-hover:visible group-focus:visible group-focus:opacity-100 group-hover:opacity-100 opacity-0",r="mt-5 py-1 px-3 bg-black hover:bg-highlight_2 text-sm xl:text-base";return Object(f.b)("div",{id:"learning_path",className:"ipadp:min-h-110 flex flex-wrap justify-center items-center relative",style:{backgroundColor:"#000"}},Object(f.b)(x.a,null,Object(f.b)("div",{className:"container mx-auto justify-center flex flex-wrap text-center md:mt-24"},Object(f.b)("div",{className:"text-3xl lg:text-6xl font-bold text-white w-full leading-tight",style:{fontFamily:"TUoS Stephenson"}},"Learning paths."),Object(f.b)("p",{className:"mt-3 text-gray-100 px-2"},"Discover how to get the most out of statistics, visualisations and tool sets."))),Object(f.b)("div",{className:"flex flex-wrap text-black pt-10 pb-32 justify-center"},Object(f.b)(w.a,{bottom:!0,duration:700,delay:100},Object(f.b)("div",{className:t+" bg-pink-200",tabIndex:"0"},Object(f.b)("div",{className:a},Object(f.b)(c.m,{className:"w-full text-4xl xl:text-5xl"}),Object(f.b)("div",{className:"text-xl mt-5 font-bold xl:text-2xl"},"Dataviz Intro"),Object(f.b)("div",{className:"text-sm mt-3 xl:text-lg"},"New to data visualisation and programming.")),Object(f.b)("div",{className:l},Object(f.b)("h1",{className:"font-bold mb-1 text-xl xl:text-2xl"},"Introduction"),Object(f.b)("p",{className:"text-sm xl:text-lg"},"Explore data visualisations through definitions, examples, videos, and relevant resources."),Object(f.b)(i.Link,{to:"/blog/03/07/2020/LearningPath-Introduction"},Object(f.b)(v.g,{className:r},"Get started"))))),Object(f.b)(w.a,{bottom:!0,duration:700,delay:250},Object(f.b)("div",{className:t+" bg-blue-200",tabIndex:"0"},Object(f.b)("div",{className:a},Object(f.b)("div",{className:"flex flex-wrap justify-around text-4xl xl:text-5xl w-full"},Object(f.b)("div",null,Object(f.b)(c.g,{className:"text-white"})),Object(f.b)("div",null,Object(f.b)(c.h,{className:"text-white"}))),Object(f.b)("h1",{className:"text-xl mt-5 font-bold xl:text-2xl"},"Dataviz Lab"),Object(f.b)("p",{className:"text-sm mt-3 xl:text-lg"},"Knowledge of programming languages Python / R.")),Object(f.b)("div",{className:l},Object(f.b)("h1",{className:"font-bold mb-1 text-xl xl:text-2xl"},"Dataviz Lab"),Object(f.b)("p",{className:"text-sm xl:text-lg"},"Tutorials and guides on create data visualisations using different tools and languages."),Object(f.b)(i.Link,{to:"/blog/04/07/2020/LearningPath-Lab"},Object(f.b)(v.g,{className:r},"Go to Lab"))))),Object(f.b)(w.a,{bottom:!0,duration:700,delay:300},Object(f.b)("div",{className:t+" bg-white",tabIndex:"0"},Object(f.b)("div",{className:a},Object(f.b)(k.a,{className:"w-full text-4xl xl:text-5xl"}),Object(f.b)("h1",{className:"text-xl mt-5 font-bold xl:text-2xl"},"Dataviz Workflows"),Object(f.b)("p",{className:"text-sm mt-3 xl:text-lg"},"Experienced in producing data visualisations.")),Object(f.b)("div",{className:l},Object(f.b)("h1",{className:"font-bold mb-1 text-xl xl:text-2xl"},"Dataviz Workflows"),Object(f.b)("p",{className:"text-sm xl:text-lg"},"Increase your research impact through reproducible data visualisation workflows."),Object(f.b)(i.Link,{to:"/blog/05/07/2020/LearningPath-Workflow"},Object(f.b)(v.g,{className:r},"Learn workflows"))))),Object(f.b)(w.a,{delay:700},Object(f.b)("h1",{className:"w-full text-white text-center mt-10 px-2"},"We are working on more learning paths, why not share your suggestions on our ",Object(f.b)("a",{className:"text-gray-200 hover:text-highlight_2 link-effect",href:"https://join.slack.com/t/shef-dataviz/signup",target:"_blank",rel:"noopener noreferrer"},"slack channel"),"."))))},L=a("oBNZ"),D=a.n(L),C=a("v7au"),A=a("iNdW"),_=function(){var e="w-4/5 md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-3 transition duration-500 group relative",t="text-sm xl:text-base border-t-1 border-gray-300 py-3 text-gray-600 group-hover:text-gray-900",a="rounded-full text-xs lg:text-sm mt-5 lg:mt-10",r=Object(l.useState)("#fff"),o=r[0],s=r[1],n=Object(l.useState)(!1),c=n[0],b=n[1];return Object(f.b)("div",{id:"home_community",className:"ipadp:min-h-110 flex flex-wrap justify-center items-center relative",style:{transition:".5s ease",background:"linear-gradient(180deg, "+o+" 0%, #fff 60%)",backgroundColor:""+o}},Object(f.b)(x.a,null,Object(f.b)("div",{className:"container mx-auto justify-center flex flex-wrap mt-24"},Object(f.b)("div",{className:"text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 w-full text-center px-4"},Object(f.b)("h1",{style:{fontFamily:"TUoS Stephenson"}},"YOUR COMMUNITY. ")),Object(f.b)(i.Link,{to:"/community",className:"mt-1 text-med xl:text-lg text-gray-600 hover:underline"},"Learn more ",Object(f.b)(O.c,{className:"inline-block"})," 😃"))),Object(f.b)("div",{className:"flex flex-wrap text-black xl:-mt-16 pb-20 justify-center"},Object(f.b)("div",{className:e,onMouseEnter:function(){return s("#fed7d7")},onMouseLeave:function(){return s("#fff")}},Object(f.b)(D.a,{bottom:!0,duration:200},Object(f.b)(C.b,{className:"text-3xl"}),Object(f.b)("p",{className:"font-bold py-3"},"Events"),Object(f.b)("div",{className:t},"Discover a variety of events including talks and symposia, workshops, vis-coding clubs and data visualisation hackathons!"),Object(f.b)(i.Link,{to:"/events"},Object(f.b)(v.g,{className:a+" group-hover:bg-red-500",type:"BlackButton"},"Upcoming events")))),Object(f.b)("div",{className:e,onMouseEnter:function(){return s("#d3f3ff")},onMouseLeave:function(){return s("#fff")}},Object(f.b)(D.a,{bottom:!0,duration:300},Object(f.b)(C.a,{className:"text-3xl"}),Object(f.b)("p",{className:"font-bold py-3"},"Training"),Object(f.b)("div",{className:t},"Discover different training courses organised by the dedicated dataviz team to help you make the most of your data."),Object(f.b)(v.g,{className:a+" group-hover:bg-highlight_2",type:"BlackButton"},"Coming soon"))),Object(f.b)("div",{className:e,onMouseEnter:function(){return s("#b2f5ea")},onMouseLeave:function(){return s("#fff")}},Object(f.b)(D.a,{bottom:!0,duration:400},Object(f.b)("div",{className:c?"hidden":""},Object(f.b)(O.d,{className:"text-3xl"}),Object(f.b)("p",{className:"font-bold py-3"},"Support"),Object(f.b)("div",{className:t},"Get in touch with us. It is natural that you have found something difficult to understand or need more specific guidance and direction."),Object(f.b)(v.g,{className:a+" group-hover:bg-teal-500",type:"BlackButton",href:"javascript:void(0)",onClick:function(){return b(!c)}},"I want support"))),Object(f.b)(D.a,{top:!0,duration:300},Object(f.b)("div",{className:c?"flex flex-wrap bg-teal-100 p-4 z-10":"hidden"},Object(f.b)("div",{className:"p-2 text-center"},Object(f.b)(A.b,{className:"mx-auto text-4xl mb-2"}),Object(f.b)("p",{className:"text-left text-sm xl:text-base"},"We have a diverse community where everyone is passionate about data visualisation."),Object(f.b)("a",{href:"https://join.slack.com/t/shef-dataviz/signup",target:"_blank",rel:"noopener noreferrer"},Object(f.b)(v.e,{className:a+" hover:bg-teal-500 py-1 px-2",type:"BlackButton",href:"javascript:void(0)",style:{marginTop:"18px"}},"Ask community"))),Object(f.b)("div",{className:"p-2 mt-5 text-center"},Object(f.b)(A.a,{className:"mx-auto text-4xl mb-2"}),Object(f.b)("div",{className:"text-left text-sm xl:text-base"},"If you would like to speak to members of Dataviz Team, please get in touch with us through email or direct messages (Slack)."),Object(f.b)("div",{className:"mt-2"},["mailto:rdm@sheffield.ac.uk","https://shef-dataviz.slack.com/archives/DRF6V81L0","https://shef-dataviz.slack.com/archives/D01CANTQN2F","https://shef-dataviz.slack.com/archives/D014SQAFRGT","https://shef-dataviz.slack.com/archives/D01CARHVAJF"].map((function(e,t){return Object(f.b)("a",{href:e,target:"_blank",rel:"noopener noreferrer",key:e},Object(f.b)(v.e,{className:a+" hover:bg-teal-500 py-1 px-2 mr-2",type:"BlackButton",href:"javascript:void(0)",style:{marginTop:"10px"}},0===t?"Email":"DM "+t))})))),Object(f.b)(v.g,{className:a+" bg-teal-500 py-1 px-2",type:"BlackButton",href:"javascript:void(0)",onClick:function(){return b(!c)}},"Go back")))),Object(f.b)("div",{className:e,onMouseEnter:function(){return s("#fed7e2")},onMouseLeave:function(){return s("#fff")}},Object(f.b)(D.a,{bottom:!0,duration:500},Object(f.b)("div",null,Object(f.b)(C.d,{className:"text-3xl"}),Object(f.b)("p",{className:"font-bold py-3"},"Collaboration"),Object(f.b)("div",{className:t},"We love to see people actively sharing their thought and creativity. We have prepared a tutorial for you to upload your own blog posts.")),Object(f.b)("a",{href:"https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},Object(f.b)(v.g,{className:a+" group-hover:bg-pink-500",type:"BlackButton"},"Our repository"))))))},z=a("1eu9"),E=a.n(z),R=function(e){var t=e.className,a=e.children;return Object(f.b)(i.StaticQuery,{query:"2676937355",render:function(e){var l=e.desktop.childImageSharp.fluid;return Object(f.b)(E.a,{className:t,fluid:l,style:{backgroundSize:"cover",backgroundAttachment:"fixed",width:"100%"}},Object(f.b)("div",null,a))}})},I=a("kD9K"),B=a.n(I),T=a("dQDb"),M=a.n(T),U=function(){return Object(f.b)("div",{className:"relative overflow-hidden bg-gray-900 w-full"},Object(f.b)("h1",{className:"absolute left-0 text-white text-3xl font-semibold transform rotate-90 -ml-24 mt-60"},"ORDA.SHEF.AC.UK"),Object(f.b)("div",{id:"home_showcase"}),Object(f.b)(R,{className:"ipadp:min-h-40 flex flex-wrap items-center justify-end py-5 transform hover:translate-x-16 transition duration-500"},Object(f.b)("div",{className:"flex flex-wrap justify-start"},Object(f.b)("div",{className:"lg:w-1/2 py-24 flex flex-wrap px-3 ipadp:pr-20 ipadp:ml-24"},Object(f.b)(x.a,{duration:1300,right:!0},Object(f.b)("div",{className:"text-5xl 2xl:text-6xl font-semibold text-white",style:{textShadow:"#000000 0px 0px 0px",fontFamily:"TUoS Stephenson"}},"SHOWCASE"),Object(f.b)("div",{className:"2xl:text-lg my-4 text-white font-semibold",style:{textShadow:"#8d8d8d 0px 0px 3px"}},"ORDA (Online Research Data) is the University of Sheffield's hub for sharing data, code, and other non-traditional research artefacts. ORDA includes a showcase of visual representations of data built by staff and students at the University of Sheffield."),Object(f.b)("a",{className:"mt-8",href:"https://orda.shef.ac.uk/visualisations",target:"_blank",rel:"noopener noreferrer"},Object(f.b)(v.g,{external:!0,type:"AnimateButton",className:"group"},"Discover ORDA")))))),Object(f.b)("div",{className:"lg:min-h-40 flex flex-wrap pt-8 pb-56 lg:pt-24 lg:pb-82 items-center justify-center",style:{background:"#fcfcfc"}},Object(f.b)("div",{className:"lg:w-6/12 lg:pl-8 transform hover:scale-110 transition duration-500"},Object(f.b)(M.a,{delay:2200},Object(f.b)("img",{src:B.a,className:"max-h-50"}))),Object(f.b)(w.a,{cascade:!0,duration:1300},Object(f.b)("div",{className:"lg:w-5/12 px-3 lg:px-5 2xl:px-24 flex flex-wrap justify-center pb-16"},Object(f.b)("h1",{className:"text-4xl lg:text-5xl text-gray-700 text-center pt-10 pb-5 lg:py-5",style:{fontFamily:"TUoS Stephenson"}},"ORDA User Regions"),Object(f.b)("p",{className:"text-gray-800 2xl:text-lg"},"ORDA has welcomed visitors from over 148 countries and regions worldwide, providing a research data repository for storing and publishing research data in the long term, and enabled university research data to be preseved, discovered, and accessed."),Object(f.b)("a",{className:"mt-12",href:"https://orda.shef.ac.uk",target:"_blank",rel:"noopener noreferrer"},Object(f.b)(v.g,{type:"AnimateButton",className:"group mt-0 text-lg",boxShadow:"#00aeef"},"Go to ORDA"))))),Object(f.b)("div",{className:"w-full absolute bottom-0 -mb-1"},Object(f.b)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},Object(f.b)("path",{fill:"#fff",fillOpacity:"1",d:"M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}))))},F=a("KQm4"),W=a("dI71"),P=a("Tgqd"),Y=a("WG1l"),H=a.n(Y),q=a("cpGi"),G=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).state={query:"",results:[]},t.search=function(e){var a=e.target.value;if(t.state.query.length>-1){var l=t.getSearchResults(a);t.setState({results:l,query:a})}else t.setState({results:[],query:a})},t}Object(W.a)(t,e);var a=t.prototype;return a.render=function(){var e=this,t="text-gray-800 hover:underline";return Object(f.b)("div",{className:this.props.classNames+" mt-6 2xl:mt-10 relative text-gray-900 w-full text-center"},Object(f.b)("div",{className:"inline-block text-gray-700 bg-white p-3 rounded-lg",style:{boxShadow:"#6d6d6d 0px 5px 25px -16px"}},Object(f.b)(P.a,{className:"inline-block text-center text-3xl -mt-1"}),Object(f.b)("input",{id:"homeSearch",onChange:this.search,onInput:this.search,autoComplete:"off",className:"search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-700",style:{minWidth:"21vw"},type:"text",name:"search",placeholder:"What are you looking for?"})),Object(f.b)("div",{className:"search__list"},Object(f.b)((function(){return e.state.results.length>0&&e.state.query.length>0?Object(f.b)("div",{className:"z-30 text-left overflow-auto max-h-50 xl:max-h-55 mx-auto ipadp:max-w-25 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar"},e.state.results.slice(0,5).map((function(t,a){return Object(f.b)("div",{className:"text-gray-800 group border-b-1 border-gray-200 hover:bg-gray-200",key:a},Object(f.b)("a",{href:""+t.url,target:"_blank",rel:"noopener noreferrer"},Object(f.b)("div",{className:"flex self-center items-center justify-end"},Object(f.b)("div",{className:"w-full"},Object(f.b)("h1",{className:"font-bold text-sm xl:text-lg w-full px-3 py-3 text-gray-900"},Object(f.b)(H.a,{highlightClassName:"text-blue-500 bg-transparent",textToHighlight:t.title,searchWords:e.state.query.split()}))))))})),e.state.results.length>6?Object(f.b)("div",{className:"text-center py-2 bg-gray-800 text-white font-semibold hover:bg-white hover:text-highlight_2 border-t-1 cursor-pointer",onClick:function(){Object(i.navigate)("/search",{state:{searchWord:e.state.query}})}},e.state.results.length-6," more results"):Object(f.b)("div",{className:"text-center py-2 bg-gray-800 text-white font-semibold border-t-1"},"End of results")):e.state.query.length>0?"No results for "+e.state.query:""}),null)),Object(f.b)(D.a,{left:!0},Object(f.b)("div",{className:"hidden md:flex justify-center pt-6 xl:pt-8 z-10 w-full"},Object(f.b)("div",{className:"w-1/7 mr-24 text-left"},Object(f.b)("div",{className:"mb-1 font-semibold text-xs xl:text-base 2xl:text-lg"},"Dataviz.Shef"),Object(f.b)("ul",{className:"list-reset leading-normal text-xs xl:text-sm 2xl:text-base text-left"},Object(f.b)("li",null,Object(f.b)(i.Link,{className:t,to:"/#explore","data-tip":"#Data and visualisation"},"Data visualisation")),Object(f.b)("li",null,Object(f.b)(i.Link,{className:t,to:"/#learning_path","data-tip":"#Get started"},"Learning path")),Object(f.b)("li",null,Object(f.b)(i.Link,{className:t,to:"/#home_community","data-tip":"#Community"},"Community")),Object(f.b)("li",null,Object(f.b)(i.Link,{className:t,to:"/#home_showcase","data-tip":"#Showcase"},"Showcase")),Object(f.b)("li",null,Object(f.b)(i.Link,{className:t,to:"/#collaboration","data-tip":"#collaboration"},"Collaboration")),Object(f.b)("li",null,Object(f.b)(i.Link,{className:t,to:"/blog"},"Blog")),Object(f.b)(q.a,null))),Object(f.b)("div",{className:"w-1/7 text-left"},Object(f.b)("div",{className:"mb-1 font-semibold text-xs xl:text-base 2xl:text-lg"},"Trending searches"),Object(f.b)("ul",{className:"list-reset leading-normal text-xs xl:text-sm 2xl:text-base"},Object(f.b)("li",null,Object(f.b)("a",{className:t,onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Chart"}})},href:"javascript:void(0)"},"Chart")),Object(f.b)("li",null,Object(f.b)("a",{className:t,onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Colour"}})},href:"javascript:void(0)"},"Colour")),Object(f.b)("li",null,Object(f.b)("a",{className:t,onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Python"}})},href:"javascript:void(0)"},"Python")),Object(f.b)("li",null,Object(f.b)("a",{className:t,onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Statistics"}})},href:"javascript:void(0)"},"Statistics")))))))},a.getSearchResults=function(e){var t=window.__FLEXSEARCH__.en.index,a=window.__FLEXSEARCH__.en.store;if(e&&t){var l=[];return Object.keys(t).forEach((function(a){var r;(r=l).push.apply(r,Object(F.a)(t[a].values.search(e)))})),l=Array.from(new Set(l)),a.filter((function(e){return l.includes(e.id)?e:null})).map((function(e){return e.node}))}return[]},t}(l.Component),Z=a("awh3"),V=a.n(Z),K=(t.default=function(e){var t=e.data,a=t.featuredPost,r=t.latestPost,c=t.eventBrite,b=u()(),d=["Colour","What are you looking for?","blog post","Dash","dataset","Shiny","Chart","visualisation","Python","DD/MM/YYYY"];return Object(l.useEffect)((function(){var e=document.getElementById("homeSearch"),t=setInterval((function(){if(u()()-b>6e3){b=u()();var t=Math.floor(Math.random()*d.length);e.setAttribute("placeholder",d[t])}}),5e3);return function(){clearInterval(t)}}),[d]),Object(f.b)("div",{className:"bg-white"},Object(f.b)(n.a,{title:"Data Visualisation Hub",keywords:["The University of Sheffield","Data Visualisation","Data Visualisation Hub","Research","Data Analytics","Data Visualisation UK","Dataviz"]}),Object(f.b)(o.a,null),Object(f.b)("div",null,Object(f.b)("div",{className:"flex flex-wrap relative"},Object(f.b)("div",{id:"homeBar",className:"min-h-100 md:min-h-60 shadow-lg z-10 lg:sticky lg:top-0 lg:left-0 flex flex-wrap w-full lg:w-4/12 text-black overflow-hidden lg:min-h-100 lg:max-h-100 justify-center",style:{transition:".4s ease",background:"rgba(255,255,255, 1)",zIndex:"1"}},Object(f.b)("div",{className:"px-8 text-center pt-16 font-sans"},Object(f.b)("p",{className:"text-2xl lg:text-3xl 2xl:text-4xl font-extrabold",style:{background:"linear-gradient(225deg, rgba(255,121,180,1) 10%, rgba(41,197,255,1) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},"Data Visualisation Hub"),Object(f.b)("p",{className:"text-base 2xl:text-lg mt-5 px-6 xl:px-12"},"Building community around data visualisation at the University of Sheffield.")),Object(f.b)(G,null),Object(f.b)(i.Link,{to:"#explore"},Object(f.b)(x.a,{bottom:!0,delay:700},Object(f.b)(v.g,{type:"BlackWhiteButton",className:"group py-2 px-4 xl:text-lg xl:py-3 xl:px-8 bg-black text-white hover:text-black hover:bg-gray-100",style:{boxShadow:"rgba(41,197,255,1) 5px 5px .1px"}},"Learn more")))),Object(f.b)("div",{className:"flex flex-wrap text-gray-100 lg:w-8/12 bg-black",style:{marginLeft:"auto",transition:".5s ease"}},Object(f.b)("div",{className:"pt-8 min-h-70 md:min-h-100 justify-center relative w-full bg-white",style:{transition:".6s ease"}},Object(f.b)("div",{className:"flex flex-col flex-wrap group min-h-70 md:min-h-100 justify-center text-center items-center",style:{transition:".8s ease",backgroundImage:"url("+V.a+")",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},Object(f.b)("h1",{className:"md:-mt-24 px-2 ipadp:px-24 text-3xl 2xl:text-5xl font-bold py-2",style:{textShadow:"#000 0 0 10px",backgroundColor:"rgba(0,0,0, 0.6)"}},"CoVid Plots and Analysis",Object(f.b)("p",{className:"text-lg font-normal"},"by Colin Angus at ScHARR, University of Sheffield")),Object(f.b)("div",{className:"mt-10"},Object(f.b)("a",{href:"https://figshare.shef.ac.uk/articles/CoVid_Plots_and_Analysis/12328226",target:"_blank",rel:"noopener noreferrer"},Object(f.b)(v.b,{external:!0,className:""},"Data Repository")),Object(f.b)(i.Link,{className:"ml-8 inline-block",to:"/blog/01/06/2020/visualising-high-risk-areas-for-covid-19-mortality"},Object(f.b)(v.b,{className:"mt-0 "},"Blog post")))),Object(f.b)(i.Link,{to:"#eventNotice"},Object(f.b)("div",{id:"scrollDown-btn",className:"hidden md:block absolute bottom-0 left-0 mb-8 text-center cursor-pointer group pt-14",style:{left:"45%",right:"45%"}},Object(f.b)("span",{style:{marginLeft:"-7px",width:"18px",height:"18px"}}),Object(f.b)("p",{className:"text-black font-bold text-center",style:{textShadow:"#fff 0px 0px 10px"}}," Scroll")))),Object(f.b)(p,{eventBrite:c}),Object(f.b)(j,{featuredPost:a}),Object(f.b)(y,{latestPost:r})))),Object(f.b)("div",{id:"explore"}),Object(f.b)("div",{className:"ipadp:min-h-100 flex flex-wrap items-center text-left relative py-24",style:{background:"linear-gradient(135deg, rgba(255,121,180,1) 10%, rgba(41,197,255,1) 100%)",backgroundPosition:"center",backgroundSize:"cover"}},Object(f.b)(x.a,{cascade:!0,delay:200,duration:1500},Object(f.b)("div",{className:"px-5 md:px-24 xl:px-36 2xl:px-52 mt-16 mb-32"},Object(f.b)("div",{className:"text-black"},Object(f.b)("h1",{className:"text-5xl 2xl:text-6xl font-semibold",style:{fontFamily:"TUoS Stephenson"}},"Data and visualisation"),Object(f.b)("p",{className:"text-base 2xl:text-xl my-4 font-semibold md:w-3/5",style:{}},"Data visualisation is currently an extremely active and critical aspect in research, teaching, and development. The main purpose of data visualisation is to communicate information clearly and effectively by means of graphical representation. However, this does not mean that data visualisation must be boring for its functional purpose, or extremely complicated ...")),Object(f.b)(i.Link,{to:"/blog/22/03/2020/datavizhub-guide"},Object(f.b)(v.g,{type:"AnimateButton",className:"group"},"Read more about data visualisation"))))),Object(f.b)(S,null),Object(f.b)(_,null),Object(f.b)(U,null),Object(f.b)("div",{id:"collaboration",className:"container mx-auto min-h-40 flex flex-wrap pb-20 justify-center"},Object(f.b)("h1",{className:"text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-gray-800 text-center py-5 w-full",style:{fontFamily:"TUoS Stephenson"}},"Collaboration and Partnership."),Object(f.b)("p",{className:"text-gray-500"},"Further details to come.")),Object(f.b)(s.a,null))},"3917299182")},M4XY:function(e,t,a){(function(t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,l=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",s="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",n="\\d+",i="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",b="[^\\ud800-\\udfff"+r+n+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",x="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+c+"|"+b+")",f="(?:"+x+"|"+b+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,d].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[i,u,d].join("|")+")"+g,v=RegExp("['’]","g"),j=RegExp(s,"g"),O=RegExp([x+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,x,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,x+m,"$"].join("|")+")",x+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",n,h].join("|"),"g"),y=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,N="object"==typeof t&&t&&t.Object===Object&&t,w="object"==typeof self&&self&&self.Object===Object&&self,k=N||w||Function("return this")();var S,L=(S={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==S?void 0:S[e]});var D=Object.prototype.toString,C=k.Symbol,A=C?C.prototype:void 0,_=A?A.toString:void 0;function z(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==D.call(e)}(e))return _?_.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function E(e){return null==e?"":z(e)}var R,I=(R=function(e,t,a){return e+(a?"-":"")+t.toLowerCase()},function(e){return function(e,t,a,l){var r=-1,o=e?e.length:0;for(l&&o&&(a=e[++r]);++r<o;)a=t(a,e[r],r,e);return a}(function(e,t,l){return e=E(e),void 0===(t=l?void 0:t)?function(e){return y.test(e)}(e)?function(e){return e.match(O)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=E(e))&&e.replace(l,L).replace(j,"")}(e).replace(v,"")),R,"")});e.exports=I}).call(this,a("yLpj"))},awh3:function(e,t,a){e.exports=a.p+"static/COVIDDeathPropMSOA-6008149dc156a93bcd039c1eb92ce147.png"},kD9K:function(e,t,a){e.exports=a.p+"static/user1-dc7c51f98d395f38d7b70e2962cb5329.png"},oBNZ:function(e,t,a){"use strict";function l(e,t){var a={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a}function r(e,t){var a=t.left,l=t.right,r=t.up,o=t.down,s=t.top,n=t.bottom,i=t.big,c=t.mirror,u=t.opposite,x=(a?1:0)|(l?2:0)|(s||o?4:0)|(n||r?8:0)|(c?16:0)|(u?32:0)|(e?64:0)|(i?128:0);if(d.hasOwnProperty(x))return d[x];var m=a||l||r||o||s||n,f=void 0,p=void 0;if(m){if(!c!=!(e&&u)){var g=[l,a,n,s,o,r];a=g[0],l=g[1],s=g[2],n=g[3],r=g[4],o=g[5]}var h=i?"2000px":"100%";f=a?"-"+h:l?h:"0",p=o||s?"-"+h:r||n?h:"0"}return d[x]=(0,b.animation)((e?"to":"from")+" {"+(m?" transform: translate3d("+f+", "+p+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),d[x]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.defaults,t=e.children,a=(e.out,e.forever),o=e.timeout,s=e.duration,n=void 0===s?b.defaults.duration:s,i=e.delay,u=void 0===i?b.defaults.delay:i,d=e.count,x=void 0===d?b.defaults.count:d,m=l(e,["children","out","forever","timeout","duration","delay","count"]),f={make:r,duration:void 0===o?n:o,delay:u,forever:a,count:x,style:{animationFillMode:"both"},reverse:m.left};return(0,c.default)(m,f,f,t)}Object.defineProperty(t,"__esModule",{value:!0});var s,n=a("17x9"),i=a("eH+L"),c=(s=i)&&s.__esModule?s:{default:s},b=a("ar19"),u={out:n.bool,left:n.bool,right:n.bool,top:n.bool,bottom:n.bool,big:n.bool,mirror:n.bool,opposite:n.bool,duration:n.number,timeout:n.number,delay:n.number,count:n.number,forever:n.bool},d={};o.propTypes=u,t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-jsx-3224bd7b7144ba426306.js.map