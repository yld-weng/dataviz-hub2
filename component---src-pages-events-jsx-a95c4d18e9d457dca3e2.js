(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4fMs":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return w}));var l=a("q1tI"),r=a.n(l),n=a("gY85"),s=a("aN7D"),b=a("c6+h"),o=a("Wbzz"),c=a("1eu9"),d=a.n(c),i=a("qKvR"),m=function(e){var t=e.className,a=e.children;return Object(i.b)(o.StaticQuery,{query:"1792964189",render:function(e){var l=e.desktop.childImageSharp.fluid;return Object(i.b)(d.a,{className:t,fluid:l,style:{backgroundAttachment:"fixed"}},a)}})},u=a("ma3e"),f=a("x/DL"),v=function(e){var t=e.allEventbriteEvents,a=t.edges.length;return t&&a>0?Object(i.b)(r.a.Fragment,null,t.edges.map((function(e){var t=e.node,a=Object(f.b)(t.description.text,20);return Object(i.b)("a",{className:"flex flex-wrap w-full overflow-y-hidden shadow-lg hover:shadow-2xl bg-white my-3 lg:my-1 text-gray-700 group border-solid",style:{fontFamily:"TUoS Blake",transition:".5s ease"},href:t.url,key:t.id,target:"_blank",rel:"noopener noreferrer"},Object(i.b)("div",{className:"w-full md:w-9/12 py-4 px-4"},Object(i.b)("p",{className:"font-semibold text-lg text-black group-hover:text-highlight_2 leading-5"},t.name.text),Object(i.b)("p",{className:"text-gray-700 mt-1 leading-tight text-sm group-hover:text-black"},a),Object(i.b)("p",{className:"flex pt-4 text-sm"},Object(i.b)(u.d,{className:"mr-1"}),t.start.local),Object(i.b)("div",{className:"flex flex-wrap text-sm"},Object(i.b)("p",{className:"flex"},t.online_event&&Object(i.b)(u.f,{className:"mr-1 mt-1"})," ",t.online_event&&"Online Event"),Object(i.b)("p",{className:"flex"},t.venue&&Object(i.b)(u.f,{className:"mr-1 mt-1"}),t.venue&&t.venue.name&&t.venue.name+", ",t.venue&&t.venue.address.address_1&&t.venue.address.address_1+", ",t.venue&&t.venue.address.city&&t.venue.address.city+", ",t.venue&&t.venue.address.postal_code&&t.venue.address.postal_code))),Object(i.b)("div",{className:"w-full md:w-3/12 overflow-hidden relative min-h-20 2xl:min-h-15",style:{backgroundImage:"url("+t.logo.original.url+")",backgroundPosition:"center",backgroundSize:"cover",transition:".5s ease"}},Object(i.b)("button",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:flex py-1 px-3 font-bold text-md bg-black text-white hover:bg-blue-700 absolute",style:{bottom:"0%",right:"0%"}},"Register")))}))):Object(i.b)("div",{className:"mt-16 text-blue-800"},"No upcoming events can be found, please come back later.")},g=a("1oaH"),p=function(e){var t=e.pastEvent;return Object(i.b)("div",{className:"w-full md:w-4/5 lg:w-4/12 2xl:w-3/12 lg:rounded-r-xl md:mt-10 lg:mt-0 p-6 pb-8 text-gray-100 border-t-8 border-gray-800 min-h-50",style:{background:"rgba(0,0,0,.8)"}},Object(i.b)("h1",{className:"text-xl pt-2 pb-6 font-semibold"},"Past Events"),t.edges.map((function(e){var t=e.node,a=Object(f.b)(t.description.text,15);return Object(i.b)("div",{className:"flex flex-wrap p-3 w-full overflow-hidden bg-white group pastEvent",key:t.id},Object(i.b)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},Object(i.b)("p",{style:{fontFamily:"TUoS Blake"},className:"font-semibold text-md text-black leading-4"},t.name.text),Object(i.b)("p",{className:"text-gray-700 text-xs leading-4 mt-1"},a),Object(i.b)("p",{className:"mt-2 text-xs text-black"},t.start.local)))})),t.edges.length>0&&Object(i.b)("div",{className:"flex justify-center w-full"},Object(i.b)(g.f,{onClick:function(){return window.open("https://www.eventbrite.co.uk/o/scholarly-communications-team-the-university-of-sheffield-library-7528476001","_blank","noopener, noreferrer")},className:"w-full mt-0 hover:bg-blue-800 hover:text-white"},"More events")))},x=function(e){var t=e.pastEventBlog;return Object(i.b)("div",{className:"w-full md:w-11/12 2xl:w-10/12 px-6 lg:mt-6 lg:mb-16 pb-8 lg:py-6 border-t-8 border-gray-800 min-h-50 rounded-xl",style:{background:"rgba(255,255,255,.9)"}},Object(i.b)("h1",{className:"text-2xl pt-2 pb-6 font-semibold"},"Event articles"),t.edges.map((function(e){var t=e.node,a=Object(f.b)(t.frontmatter.description,20);return Object(i.b)("div",{className:"flex flex-wrap transition duration-500 overflow-hidden p-3 md:w-1/2 lg:w-1/4 rounded-md bg-white group hover:border-1 hover:border-gray-600 border-1 border-white",key:t.id},Object(i.b)(o.Link,{to:t.fields.slug},Object(i.b)("p",{style:{fontFamily:"TUoS Blake"},className:"font-bold text-black leading-5"},t.frontmatter.title),Object(i.b)("p",{className:"text-gray-700 mt-1 text-sm leading-4"},a),Object(i.b)("p",{className:"mt-2 text-sm text-black"},t.frontmatter.date)))})))},h=a("wd/R"),j=a.n(h),w=(t.default=function(e){var t=e.data,a=t.eventBrite,o=t.pastEvent,c=t.pastEventBlog,d=Object(l.useState)(j()().format("ddd DD MMMM YYYY, hh:mm A")),u=d[0],f=d[1];return Object(l.useEffect)((function(){f(j()().format("ddd DD MMMM YYYY, hh:mm A"))}),[]),Object(i.b)(r.a.Fragment,null,Object(i.b)(n.a,{title:"Events",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz events","dataviz.shef"]}),Object(i.b)(s.a,null),Object(i.b)(m,{className:"flex flex-wrap flex-grow-0 items-center justify-center min-h-100"},Object(i.b)("div",{className:"flex flex-wrap w-full justify-center my-16 lg:my-24"},Object(i.b)("div",{className:"w-full lg:w-7/12 p-6 text-black overflow-auto border-t-8 border-red-700 min-h-70 lg:rounded-l-xl",style:{background:"rgba(255,255,255,.95)"}},Object(i.b)("h1",{className:"inline-block text-2xl font-semibold"},"Upcoming Events"),Object(i.b)("div",{className:"text-gray-900 mb-8"},"Today: ",u),Object(i.b)(v,{allEventbriteEvents:a})),Object(i.b)(p,{pastEvent:o})),Object(i.b)(x,{pastEventBlog:c})),Object(i.b)(b.a,null))},"1654640436")}}]);
//# sourceMappingURL=component---src-pages-events-jsx-a95c4d18e9d457dca3e2.js.map