(this["webpackJsonpkmmrce-demo"]=this["webpackJsonpkmmrce-demo"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var i,a,o,s,r,c,d,l,m,j,u,p,b,x,f,g,h=n(1),O=n(16),y=n.n(O),v=(n(45),n(18)),k=(n(25),n(0)),w=function(e){var t=e.type,n=e.children,i="";"lightColor"===t?i="buttonStyle":"buttonStyleDark"===t?i="buttonStyleDark":"buttonStyleWhite"===t&&(i="buttonStyleWhite");return Object(k.jsxs)("button",{className:i,children:[n," ",">"]})},S=n(3),z=n(2),q=z.a.div(i||(i=Object(S.a)(["\n  padding: 8px;\n"]))),L=function(e){var t=e.children;return Object(k.jsx)(q,{children:t})},D=n(39),C=Object(D.a)(["@media(min-width: 430px)","@media(min-width: 930px)","@media(min-width: 1140px)"]),M=z.a.div(a||(a=Object(S.a)(["\n  padding: 64px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: ",";\n  margin-left :10px;\n"])),(function(e){return e.alignLeft?"flex-start":"center"})),A=z.a.span((function(){return C({maxWidth:["100%","65%"],display:"inline-block",padding:["24px 0"],fontSize:["20px","39px"],fontFamily:"yellixregular, sans-serif"})})),I=z.a.h2(o||(o=Object(S.a)(['\n  font-weight: 100;  \n  font-size: 28px;\n  font-family: "yellixregular, sans-serif",\n  width: 100%;\n  text-align: ',";\n"])),(function(e){return e.alignLeft?"left":"center"})),P=z.a.h3((function(){return C({fontSize:["20px","30px"],paddingBottom:["34px"],maxWidth:["100%","60%"],fontFamily:"yellixregular, sans-serif",fontWeight:"300"})})),R=function(e){var t=e.children,n=e.alignLeft,i=e.title,a=e.subtitle,o=e.description;return Object(k.jsxs)(M,{alignLeft:n,"data-aos":"fade-up","data-aos-offset":"800","data-aos-duration":"1000","data-aos-easing":"ease-in-out",children:[i&&Object(k.jsx)(I,{alignLeft:n,children:i}),o&&Object(k.jsx)(A,{children:o}),a&&Object(k.jsx)(P,{children:a}),t]})},W=n(17),B=z.a.div(s||(s=Object(S.a)(["\n  border-bottom: 1px solid #acacac;\n  padding: 0px 0;\n"]))),E=z.a.div(r||(r=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),T=z.a.img(c||(c=Object(S.a)(["\n  height: 35px;\n"]))),F=z.a.div(d||(d=Object(S.a)(["\n  position: relative;\n  > button {\n    top: 0;\n    padding: 0;\n    right: 0;\n    position: absolute;\n  }\n"]))),Y=z.a.div(l||(l=Object(S.a)(["\n  display: inline-block;  \n  z-index: 999;\n  position: relative;\n  height: 27px;\n  width: 32px;\n"]))),K=(z.a.span(m||(m=Object(S.a)(["\n  width: 100%;\n  margin-top: 10px;\n  position: absolute;\n  height: 9px;\n  background-color: #333;\n"]))),z.a.i(j||(j=Object(S.a)(["\n  cursor: pointer;\n  top: -4px;\n  opacity: 0;\n  position: absolute;\n  left: -4px;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  }\n"]))),{menu:[{id:1,name:"Platform",link:"#platform"},{id:2,name:"Super Merchants",link:"#superMerchants"},{id:3,name:"Pricing",link:"#pricing"},{id:4,name:"Partners",link:"#partners"},{id:5,name:"Docs",link:"#docs"}]}),N=z.a.nav(u||(u=Object(S.a)([""]))),H=z.a.ul(p||(p=Object(S.a)([""]))),V=z.a.li(b||(b=Object(S.a)(['\n  position: relative;\n  display: inline-block;\n  margin-right:32px;\n  font-size: 18px;\n  color: #333;\n  padding-bottom: 4px;\n  &:after {\n    content: "";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 0;\n    margin: auto;\n    height: 2px;\n    background-color: #333333;\n  }\n\n  &:hover:after {\n    width: 100%;\n  }\n']))),$=function(){return Object(k.jsx)(N,{children:Object(k.jsx)(H,{children:K.menu.map((function(e){var t=e.name,n=e.link;return Object(k.jsx)("a",{href:"".concat(n),children:Object(k.jsx)(V,{children:t})},n)}))})})},J=n(108),Q=Object(z.a)(J.a.div)(x||(x=Object(S.a)(["\n  width: 330px;\n  position: fixed;\n  background-color: #0c4d7b;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  padding: 0 17px;\n  z-index:9;\n"]))),U=Object(z.a)(J.a.ul)(f||(f=Object(S.a)(["\n  padding-top: 32px;\n  margin-left :45px;\n"]))),X=Object(z.a)(J.a.li)(g||(g=Object(S.a)(["\n  list-style: none;\n  color:#fff;\n  font-size: 18px;\n  font-weight :400;\n  padding-bottom: 8px;\n  line-height :40px;\n"]))),G={show:{opacity:1,x:0},hidden:{opacity:0,x:"100%"}},Z={show:{opacity:1},hidden:{opacity:0}},_={hidden:{opacity:0},show:{opacity:1}},ee=function(e){var t=e.isOpen;return Object(k.jsx)(Q,{variants:G,initial:{x:"100%"},animate:t?"show":"hidden",transition:{duration:.5},children:Object(k.jsx)(U,{variants:Z,initial:"hidden",animate:"show",children:K.menu.map((function(e){var t=e.name;return Object(k.jsx)(X,{variants:_,children:t},t)}))})})},te=[576,767,992,1200],ne=function(e){var t="undefined"!==typeof window?window.innerWidth:0;return{isMobile:t<e[1],isPad1:t>=e[1]&&t<e[2],isPad2:t>=e[2]&&t<e[3],isLaptop:t>=e[3]}};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=Object(h.useState)(ne(e)),n=Object(W.a)(t,2),i=n[0],a=n[1],o=Object(h.useCallback)((function(){a(ne(e))}),[e]);return Object(h.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[o]),i}var ae,oe,se,re,ce,de,le,me,je,ue,pe,be,xe,fe,ge,he,Oe,ye,ve,ke,we,Se,ze,qe,Le,De,Ce,Me,Ae,Ie,Pe,Re,We,Be,Ee,Te,Fe,Ye,Ke,Ne,He,Ve,$e,Je,Qe,Ue,Xe,Ge,Ze,_e,et,tt,nt,it,at,ot,st,rt,ct,dt,lt,mt,jt,ut,pt,bt,xt,ft=n(23),gt=n(22),ht=function(){var e=Object(h.useState)(!1),t=Object(W.a)(e,2),n=t[0],i=t[1],a=ie().isLaptop,o=Object(h.useCallback)((function(){i(!n)}),[n]);return Object(k.jsx)(B,{children:Object(k.jsxs)(q,{children:[Object(k.jsxs)(E,{children:[Object(k.jsx)(T,{src:"/kmmrce-demo/image/logo.svg",alt:"kMMRCE Logo"}),!a&&Object(k.jsxs)(Y,{onClick:o,children:[!n&&Object(k.jsx)(gt.a,{icon:ft.a}),n&&Object(k.jsx)(gt.a,{icon:ft.b})]}),a&&Object(k.jsx)($,{}),a&&Object(k.jsx)(w,{type:"lightColor",children:"Request Demo"})]}),Object(k.jsx)(F,{children:n&&Object(k.jsx)(ee,{isOpen:n})})]})})},Ot=z.a.div(ae||(ae=Object(S.a)(["\n  ","\n  display: flex;\n  margin-bottom : 0px;\n  margin-left :10px;\n  font-family: yellixregular,sans-serif\n\n"])),C({flexDirection:["column","row","row"]})),yt=z.a.h1(oe||(oe=Object(S.a)(["\nfont-weight: 400;\nfont-size :3.5em;\nword-spacing :3px;\n"]))),vt=z.a.span(se||(se=Object(S.a)(["\ncolor :#4B42AD;\n"]))),kt=z.a.p(re||(re=Object(S.a)(["\nmargin-top :0px;\nmargin-bottom :0px\n"]))),wt=z.a.div((function(e){return C({order:[1,0,0],borderRight:["none","1px solid #acacac"],display:"flex",flexDirection:"column",alignItems:["center","flex-start"],justifyContent:"center",flex:"1 1 0",marginBottom:"-6px"})})),St=z.a.img(ce||(ce=Object(S.a)(["\n  ","\n"])),C({maxWidth:["100%","73%"]})),zt=z.a.div(de||(de=Object(S.a)(["\n","\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 0;\n  margin: 32px 0;\n"])),C({order:[0,1,1]})),qt=n(9),Lt=n(10),Dt=n.n(Lt),Ct=function(){return Object(k.jsx)(L,{children:Object(k.jsxs)(Ot,{children:[Object(k.jsxs)(wt,{children:[Object(k.jsx)(qt.Animated,{animationIn:"fadeInLeft",animationInDuration:2e3,component:"div",children:Object(k.jsxs)(yt,{children:[Object(k.jsx)(vt,{children:"KMMRCE"})," is an enterprise",Object(k.jsx)(kt,{children:"level digital platform that"}),"provides a turnkey solution to online retailing."]})}),Object(k.jsx)(qt.Animated,{animationIn:"fadeInLeft",animationInDuration:2e3,component:"div",children:Object(k.jsx)(w,{type:"lightColor",onClick:function(){return Object(v.a)("Request Sumbitted")},children:"Request Demo"})})]}),Object(k.jsx)(qt.Animated,{animationIn:"zoomIn",animationInDuration:2e3,component:"div",children:Object(k.jsx)(zt,{children:Object(k.jsx)(St,{src:"/kmmrce-demo/image/circle.png",alt:"hero image"})})})]})})},Mt=z.a.div(le||(le=Object(S.a)(["\n  display: flex;\n  align-items: center;  \n  position: relative;\n  background: #1f1f1f;\n  color: #fff;\n  ","\n"])),C({height:["auto","1000px"]})),At=z.a.div(me||(me=Object(S.a)(["\n  z-index: 1;  \n  position: absolute;\n  transform: translateX(-50%) translateY(-50%);\n  top: 50%;\n  left: 50%;\n  display: grid;\n  row-gap: 300px;\n  grid-template-columns: repeat(3, 1fr);\n"]))),It=z.a.div(je||(je=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 9;\n"]))),Pt=z.a.img(ue||(ue=Object(S.a)(["\n  max-width: 650px;\n"]))),Rt=function(){var e=ie().isLaptop;return Object(k.jsxs)(Mt,{children:[e&&Object(k.jsxs)(At,{children:[Object(k.jsx)(Pt,{src:"/kmmrce-demo/image/image-1.png",className:"wrapperCol","data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(k.jsx)(Pt,{src:"/kmmrce-demo/image/image-2.png","data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(k.jsx)(Pt,{src:"/kmmrce-demo/image/image-3.png","data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(k.jsx)(Pt,{src:"/kmmrce-demo/image/image-6.png","data-aos":"fade-up","data-aos-offset":"200","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(k.jsx)(Pt,{src:"/kmmrce-demo/image/image-5.png","data-aos":"fade-up","data-aos-offset":"300","data-aos-duration":"500","data-aos-easing":"ease-in-out"}),Object(k.jsx)(Pt,{src:"/kmmrce-demo/image/image-4.png"})]}),Object(k.jsx)(L,{children:Object(k.jsx)(It,{"data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"200","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:Object(k.jsx)(R,{title:"Platform",description:"Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business.",children:Object(k.jsx)(w,{type:"buttonStyleWhite",children:"Explore the Platform"})})})})]})},Wt=[{title:"Development features",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam corporis tempora quia aut adipisci blanditiis eveniet distinctio doloribus quisquam."},{title:"Design & Layout",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam corporis tempora quia aut adipisci blanditiis eveniet distinctio doloribus quisquam.",features:[{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."}]}],Bt=Object(z.a)(M)(pe||(pe=Object(S.a)(["\n margin-top :-50px;\n flex-direction: row;\n ","\n"])),C({flexDirection:["column","row"]})),Et=z.a.img(be||(be=Object(S.a)(["\n  ","\n"])),C({maxWidth:["100%","60%"]})),Tt=z.a.div(xe||(xe=Object(S.a)(["\n  flex: 1 1 0;\n  text-align: center;\n"]))),Ft=z.a.div((function(){return C({paddingRight:["24px","0"],paddingLeft:["24px","0"],flex:"1 1 0"})})),Yt=z.a.h2((function(){return C({marginBottom:["16px"],maxWidth:["100%","80%"],fontSize:["21px","26px"],fontWeight:500,fontFamily:"yellixregular,sans-serif"})})),Kt=z.a.div(fe||(fe=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),Nt=z.a.img(ge||(ge=Object(S.a)(["\n  margin-right: 4px;\n"]))),Ht=z.a.span(he||(he=Object(S.a)(['\nfont-size : 22px;\nfont-weight : 400;\nfontFamily: "yellixregular,sans-serif"\n']))),Vt=z.a.p(Oe||(Oe=Object(S.a)(["\n  margin-bottom: 4px;\n  font-size : 18px;\n  padding-bottom :15px;\n"]))),$t=z.a.li(ye||(ye=Object(S.a)(["\n  margin-bottom: 4px;\n  display: flex;\n  list-style: none;\n"]))),Jt=z.a.ul(ve||(ve=Object(S.a)(["\nmargin-left :-38px\n"]))),Qt=z.a.hr(ke||(ke=Object(S.a)(["\n"]))),Ut=function(){return Object(k.jsxs)(Bt,{children:[Object(k.jsx)(Tt,{"data-aos":"fade-right","data-aos-offset":"200","data-aos-delay":"200","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:Object(k.jsx)(Et,{src:"/kmmrce-demo/image/image-15.svg"})}),Object(k.jsxs)(Ft,{"data-aos":"fade-left","data-aos-offset":"200","data-aos-delay":"200","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:[Object(k.jsx)(Yt,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quos eum veritatis quia odio delectus!"}),Wt.map((function(e){var t=e.title,n=e.description,i=e.features;return Object(k.jsxs)(Kt,{children:[Object(k.jsx)(Vt,{children:t}),Object(k.jsx)(Ht,{children:n}),"Development features"===t?Object(k.jsx)(Qt,{}):"",i&&Object(k.jsx)(Jt,{children:i.map((function(e){var t=e.title,n=e.id;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)($t,{children:[Object(k.jsx)(Nt,{src:"/kmmrce-demo/image/tick.svg",alt:t})," ",t]},n)})}))})]},t)}))]})]})},Xt=z.a.div(we||(we=Object(S.a)(["\n  padding: 64px 0;\n  background: #3cd17f;\n  color: #333;\n"]))),Gt=z.a.div(Se||(Se=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Zt=z.a.span((function(){return C({fontSize:["21px","25px"],fontWeight:400})})),_t=z.a.img(ze||(ze=Object(S.a)(["\n  width: 160px;\n"]))),en=z.a.span((function(){return C({fontSize:["10px","18px"],fontWeight:400})})),tn=z.a.h2((function(){return C({fontWeight:510,fontSize:["25px","48px"],textAlign:"center",maxWidth:["100%","70%"]})})),nn=function(){return Object(k.jsx)(Xt,{children:Object(k.jsx)(L,{children:Object(k.jsxs)(Gt,{children:[Object(k.jsx)(Zt,{children:"\u201c"}),Object(k.jsx)(tn,{"data-aos":"flip-up","data-aos-offset":"200","data-aos-duration":"1000","data-aos-easing":"ease-in",children:"KMMRCE is an ideal solution for anyone looking to build a bespoke e-commerce website. A great foundation has been designed to get you started on a fully-fledged storefront with minimal effort."}),Object(k.jsx)(Zt,{children:"\u201c"}),Object(k.jsx)(_t,{src:"/kmmrce-demo/image/image-11.png",alt:"feedback image","data-aos":"zoom-in-up","data-aos-offset":"200","data-aos-duration":"1000","data-aos-easing":"ease-in"}),Object(k.jsx)(en,{children:Object(k.jsx)(Dt.a,{strings:["Tyler Hilderband, Head of Engineering at patch"],typeSpeed:40,loop:!0})})]})})})},an=z.a.div(qe||(qe=Object(S.a)([" \ndisplay: flex; \nalign-items : flex-end; \n","\n overflow: hidden;"])),C({flexDirection:["column","row"]})),on=z.a.div((function(){return C({flex:"1 1 0",order:[1,0,0],padding:["28px",0]})})),sn=z.a.span(Le||(Le=Object(S.a)(["\nfont-size: 20px;\n",";\n"])),C({marginLeft:["25%","2%"]})),rn=z.a.h3(De||(De=Object(S.a)([" \n","; \n",';\nfont-size: 3.8em; \nmargin-top:0px; \nfont-family :"yellixregular, sans-serif";\n font-weight : 300;'])),C({maxWidth:["100%","70%"]}),C({marginLeft:["25%","2%"]})),cn=z.a.span(Ce||(Ce=Object(S.a)(["\n display: inline-block; \n","; \n",';\nfont-size: 28px; \npadding: 20px 0;\n color: #333; \n line-height :1.0; \n font-family: "yellixregular",sans-serif; \n font-weight :300; \n word-spacing: 5px;'])),C({maxWidth:["100%","70%"]}),C({marginLeft:["25%","2%"]})),dn=z.a.img(Me||(Me=Object(S.a)([" max-width: 100%;"]))),ln=z.a.div(Ae||(Ae=Object(S.a)(["\nflex: 1 1 0;"]))),mn=z.a.div(Ie||(Ie=Object(S.a)(["\n",";\n& > button { margin-right: 5px; } \ndisplay: flex;"])),C({marginLeft:["25%","2%"]})),jn=(z.a.p(Pe||(Pe=Object(S.a)(["\nmargin-top :0px;\n"]))),function(){return Object(k.jsxs)(an,{children:[Object(k.jsxs)(on,{"data-aos":"slide-left","data-aos-offset":"500","data-aos-duration":"1000",children:[Object(k.jsx)(sn,{children:Object(k.jsx)(Dt.a,{strings:["Case Study"],typeSpeed:50,loop:!0})}),Object(k.jsx)(rn,{children:"Created with KMMRCE: Watch 1010"}),Object(k.jsx)(cn,{children:"Disrupting and democratizing healthcare. Butterfly\u2019s ambitious, rapid global scale-out is only possible with the support of Saleor. Their incredible journey has already taken the company from a disruptive startup to Apple Design Awards Winner 2019"}),Object(k.jsxs)(mn,{children:[Object(k.jsx)(w,{type:"buttonStyleDark",children:"View Case Study"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"View All"})]})]}),Object(k.jsx)(ln,{"data-aos":"fade-zoom-in","data-aos-offset":"400","data-aos-easing":"ease-in-sine","data-aos-duration":"600",children:Object(k.jsx)(dn,{src:"/kmmrce-demo/image/image-7.svg"})})]})}),un=z.a.h2(Re||(Re=Object(S.a)(["\nfont-size: 40px;\nfont-weight :300\n"]))),pn=z.a.div(We||(We=Object(S.a)(["\n  ","\n  overflow: hidden;\n  display: flex;\n  margin-left:20px;\n"])),C({flexDirection:["column","row"]})),bn=z.a.div((function(){return C({flex:"1 1 0",marginTop:"20px"})})),xn=z.a.p(Be||(Be=Object(S.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal;\n font-size: 23px; \n color: rgba(172,172,172,1)\n"]))),fn=z.a.p(Ee||(Ee=Object(S.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal; \nfont-size: 20px;\ntext-decoration : underline\n"]))),gn=z.a.p(Te||(Te=Object(S.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal; \nfont-size: 32px; \ncolor: rgba(172,172,172,1)\n"]))),hn=z.a.div(Fe||(Fe=Object(S.a)(["\nmargin-top :20px;\nflex: 1 1 0;\n","\n"])),C({order:[0,1,1]})),On=z.a.h1(Ye||(Ye=Object(S.a)(["\nfont-size : 24px;\nfont-weight :400\n"]))),yn=z.a.img(Ke||(Ke=Object(S.a)(["\nwidth :100%\n"]))),vn=z.a.img(Ne||(Ne=Object(S.a)([""]))),kn=z.a.span(He||(He=Object(S.a)(["\nfont-size : 20px\n"]))),wn=z.a.br(Ve||(Ve=Object(S.a)([""]))),Sn=function(){return Object(k.jsxs)(pn,{children:[Object(k.jsxs)(hn,{"data-aos":"zoom-in-right","data-aos-offset":"1100","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:[Object(k.jsx)(On,{children:"Duis aute irure dolor in reprehenderit in voluptate velit"}),Object(k.jsx)(On,{children:"esse cillum dolore eu fugiat nulla pariatur."}),Object(k.jsx)(vn,{src:"/kmmrce-demo/image/tick.svg"}),Object(k.jsx)(kn,{children:"Sed manga enim"}),Object(k.jsx)(wn,{}),Object(k.jsx)(vn,{src:"/kmmrce-demo/image/tick.svg"}),Object(k.jsx)(kn,{children:"Bidendum a quam eu"}),Object(k.jsx)(yn,{src:"/kmmrce-demo/image/project.jpeg"})]}),Object(k.jsxs)(bn,{"data-aos":"zoom-in-left","data-aos-offset":"1100","data-aos-delay":"200","data-aos-duration":"1000","data-aos-easing":"ease-in-out",children:[Object(k.jsx)(un,{children:"Lorem ipsum dolor sit  amet, consectetur adipiscing elit, sed do"}),Object(k.jsx)(xn,{children:"Stay up to date with the feed"}),Object(k.jsx)(fn,{children:"Keep track of projects"}),Object(k.jsx)(gn,{children:"Invite and view your team members"})]})]})},zn=z.a.div($e||($e=Object(S.a)(["\ndisplay: flex;\nalign-items: center;\nbackground-image: url(",");\nbackground-size: contain;\nbackground-blend-mode: overlay;\nbackground-color: #4B42AD;\ncolor: #fff;\nmin-height: 1000px;\nbackground-size: 100% 100%;\n\n"])),"/kmmrce-demo/image/image-14.png"),qn=z.a.div(Je||(Je=Object(S.a)(["\n"]))),Ln=(z.a.h2(Qe||(Qe=Object(S.a)(['\nfont :normal normal normal 4.25rem/4.5rem Yellix TRIAL;\nfont-family :"Yellix TRIAL";\nfont-weight: normal;\nfont-style: normal;\n\n\n']))),function(){return Object(k.jsx)(zn,{children:Object(k.jsx)(qn,{children:Object(k.jsx)(qt.Animated,{animationIn:"jello",animationInDuration:7800,component:"div",children:Object(k.jsx)(R,{title:"Super Merchants",description:"Multisite, made easy.",subtitle:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim.Nunc lobortis, augue non pulvinar consequat, enim massa pharetra neque.",children:Object(k.jsx)(w,{type:"buttonStyleWhite",children:"Explore Super Merchants"})})})})})}),Dn=[{icon:"/image/image-16.svg",title:"24/7 Tech Suppport",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"},{icon:"/image/image-12.svg",title:"Loyalty Benefits",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"},{icon:"/image/image-13.svg",title:"Scalable Pricing",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"}],Cn=z.a.div(Ue||(Ue=Object(S.a)(["\n background: #1f1f1f;\n color: #fff;  \n"]))),Mn=z.a.div((function(e){return C({borderRight:"1px solid #acacac",padding:["32px"],borderBottom:["1px solid #acacac","none"],"&:last-child ":{border:"none"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"})})),An=z.a.div((function(e){return C({padding:[0,"0px 4px"],borderTop:"1px solid #acacac",display:"flex",flexDirection:["column","row"],justifyContent:"center",alignItems:"center"})})),In=z.a.span(Xe||(Xe=Object(S.a)(['\n  font-size: 19px;\n  font-family: "akkurat-monoregular";\n']))),Pn=z.a.span(Ge||(Ge=Object(S.a)(["\n  padding: 25px 0;\n  font-size: 19px;\n  display: inline-block;\n"]))),Rn=z.a.img(Ze||(Ze=Object(S.a)(["\n  margin-bottom: 9px;\n  width: 55px;\n"]))),Wn=z.a.div(_e||(_e=Object(S.a)(["\nmargin-left : 20px\n"]))),Bn=function(){return Object(k.jsxs)(Cn,{children:[Object(k.jsx)(Wn,{"data-aos":"fade-up","data-aos-offset":"600","data-aos-duration":"1000","data-aos-easing":"ease-in",children:Object(k.jsx)(R,{title:"Serving Our Customers",description:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim.",alignLeft:!0})}),Object(k.jsx)(An,{children:Dn.map((function(e){var t=e.icon,n=e.title,i=e.desc;return Object(k.jsxs)(Mn,{"data-aos":"fade-up","data-aos-offset":"600","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in",children:[Object(k.jsx)(Rn,{src:"/kmmrce-demo"+t,alt:n}),Object(k.jsx)(In,{children:n}),Object(k.jsx)(Pn,{children:i}),Object(k.jsx)(w,{type:"buttonStyleWhite",children:"Request Demo"})]},n)}))})]})},En=z.a.div(et||(et=Object(S.a)(["\n  background: #f5f5f5;\n"]))),Tn=[{icon:"/image/image10.svg",title:"Standard"},{icon:"/image/image-9.svg",title:"Professional"},{icon:"/image/image-8.svg",title:"Enterprise"}],Fn={coreFeatures:[{title:"Sed mgna enim",standard:!0,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!1,professional:!1,enteprise:!0},{title:"Commodo Consecteteur",standard:!0,professional:!0,enteprise:!0},{title:"Eu dolor luctus",standard:!0,professional:!0,enteprise:!0},{title:"Sed magna enim",standard:!1,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!0,professional:!0,enteprise:!0}],teamSupport:[{title:"Sed mgna enim",standard:!0,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!1,professional:!1,enterprise:!0},{title:"Commodo Consecteteur",standard:!0,professional:!0,enterprise:!0},{title:"Eu dolor luctus",standard:!0,professional:!0,enterprise:!0},{title:"Sed magna enim",standard:!1,professional:!0,enterprise:!0},{title:"Bibendum a quam eu",standard:!0,professional:!0,enterprise:!0}]},Yn=z.a.th((function(){return C({display:["none","block"],width:["100%","25%"]})})),Kn=z.a.tbody(tt||(tt=Object(S.a)([""]))),Nn=z.a.table(nt||(nt=Object(S.a)(["\n  width: 100%;\n"]))),Hn=z.a.tr((function(){return C({padding:[0,"16px"],"&:first-child":{borderBottom:"none"},"&:last-child":{borderBottom:"none"},display:"flex",flexDirection:["column","row"],borderBottom:"1px solid #acacac"})})),Vn=(z.a.img(it||(it=Object(S.a)([""]))),z.a.h4(at||(at=Object(S.a)(["\n  font-size: 0px;\n  padding-bottom:16px;\n  padding-top: 4px;\n\n"])))),$n=z.a.h4(ot||(ot=Object(S.a)(["\n  border-bottom: 1px solid #acacac;\n  font-weight: 500;\n  font-size:22px;\n  padding:16px;\n"]))),Jn=z.a.h3(st||(st=Object(S.a)(["\n  font-size: 16px;\n  padding-top: 4px;\n  padding-bottom: 16px;\n"]))),Qn=z.a.div(rt||(rt=Object(S.a)(["\n  flex: 2;\n  display: flex;\n"]))),Un=z.a.img(ct||(ct=Object(S.a)([""]))),Xn=z.a.td((function(e){return C({"&:first-child":{textAlign:"left",marginTop:["4px"]},textAlign:"center",marginTop:["4px"],flex:["100%","1"],marginBottom:["8px"]})})),Gn=z.a.span(dt||(dt=Object(S.a)(["\n  display: block;\n  font-size: 24px;\n  padding-bottom: 4px;\n"]))),Zn=function(){var e=ie(),t=e.isLaptop,n=e.isMobile;return Object(k.jsxs)(Nn,{children:[Object(k.jsxs)(Hn,{children:[Object(k.jsx)(Yn,{}),Tn.map((function(e){var n=e.icon,i=e.title;return Object(k.jsxs)(Yn,{children:[Object(k.jsx)(Un,{src:"/kmmrce-demo"+n}),Object(k.jsx)(Jn,{children:i}),t&&Object(k.jsx)(w,{type:"buttonStyleDark",children:"Request Demo"})]},n)}))]}),Object(k.jsxs)(Kn,{children:[Object(k.jsx)($n,{children:"Core Features"}),Fn.coreFeatures.map((function(e){var t=e.title,i=e.standard,a=e.professional,o=e.enterprise;return Object(k.jsxs)(Hn,{children:[Object(k.jsx)(Xn,{children:t},t),Object(k.jsxs)(Qn,{children:[Object(k.jsxs)(Xn,{children:[n&&Object(k.jsx)(Vn,{children:"is Standard"}),i?Object(k.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Xn,{children:[n&&Object(k.jsx)(Vn,{children:"is Professional"}),a?Object(k.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Xn,{children:[n&&Object(k.jsx)(Vn,{children:"is Enterprise"}),o?Object(k.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]})]})]},t)})),Object(k.jsx)($n,{children:"Team Support"}),Fn.teamSupport.map((function(e){var t=e.title,i=e.standard,a=e.professional,o=e.enterprise;return Object(k.jsxs)(Hn,{children:[Object(k.jsx)(Xn,{children:t},t),Object(k.jsxs)(Qn,{children:[Object(k.jsxs)(Xn,{children:[n&&Object(k.jsx)(Vn,{children:"is Standard"}),i?Object(k.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Xn,{children:[n&&Object(k.jsx)(Vn,{children:"is Professional"}),a?Object(k.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Xn,{children:[n&&Object(k.jsx)(Vn,{children:"is Enterprise"}),o?Object(k.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]})]})]})})),t&&Object(k.jsxs)(Hn,{children:[Object(k.jsx)(Xn,{}),Object(k.jsxs)(Xn,{children:[Object(k.jsx)(Gn,{children:"$100/month"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"Select this plan"})]}),Object(k.jsxs)(Xn,{children:[Object(k.jsx)(Gn,{children:"$2000/month"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"Select this plan"})]}),Object(k.jsxs)(Xn,{children:[Object(k.jsx)(Gn,{children:"$3,500/month"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"Select this plan"})]})]})]})]})},_n=function(){return Object(k.jsx)(En,{children:Object(k.jsx)(L,{children:Object(k.jsx)(R,{title:"Features & Solutions",description:"consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent  commodo velit eget urna mollis dignissim.",alignLeft:!0,children:Object(k.jsx)(Zn,{})})})})},ei=function(){return Object(k.jsx)(L,{children:Object(k.jsx)(R,{description:"Ready to grow your business?",children:Object(k.jsx)(w,{type:"lightColor",children:"Request Demo"})})})},ti=z.a.div(lt||(lt=Object(S.a)(["\n  padding: 24px 0;\n  background: #1f1f1f;\n"]))),ni=z.a.div(mt||(mt=Object(S.a)(["\n  display: flex;\n  ","\n  align-items: flex-start;\n  justify-content: space-between;\n"])),C({flexDirection:["column","row"]})),ii=z.a.div(jt||(jt=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),ai=z.a.img(ut||(ut=Object(S.a)(["\n  width: 35px;\n"]))),oi=z.a.div(pt||(pt=Object(S.a)(["\n font-weight: 500; \n color: #fff;\n  padding-bottom: 4px;\n"]))),si=z.a.div((function(e){return C({marginRight:["16px","32px"],marginTop:["32px",0],marginLeft:[0,"32px"]})})),ri=z.a.a(bt||(bt=Object(S.a)(["\n  text-decoration: none;\n  color: #acacac;\n  padding-bottom: 4px;\n  display: block;\n"]))),ci=z.a.div(xt||(xt=Object(S.a)(['\n  color: "#acacac;\n']))),di={items:[{id:1,title:"Product",links:[{id:6,title:"Home",url:"/home"},{id:1,title:"About",url:"/about"},{id:4,title:"Tech Stack",url:"/techStack"},{id:5,title:"Super Merchants",url:"/superMerchants"},{id:2,title:"Pricing",url:"/pricing"},{id:3,title:"Partners",url:"/partners"}]},{id:2,title:"About Us",links:[{id:7,title:"About",url:"/about"},{id:13,title:"Sectors",url:"/sectors"},{id:14,title:"Careers",url:"/careers"},{id:15,title:"Contact",url:"/contact"}]},{id:3,title:"Dolore",links:[{id:8,title:"Voluptate",url:"/voluptate"},{id:9,title:"Cillum",url:"/cillum"},{id:10,title:"Pariatur",url:"/pariatur"},{id:11,title:"Nulla",url:"/nulla"},{id:12,title:"Irura",url:"/irura"}]},{id:4,title:"Tertiary",links:[{id:16,title:"Privacy Policy",url:"/privacy"},{id:17,title:"Terms & Conditions",url:"/terms"},{id:18,title:"Cookie Policy",url:"/policy"}]}]},li=function(){return Object(k.jsx)(ti,{children:Object(k.jsx)(L,{children:Object(k.jsxs)(ni,{children:[Object(k.jsx)(ai,{src:"/kmmrce-demo/image/logo1.svg",alt:"KMMRCE logo"}),Object(k.jsx)(ii,{children:di.items.map((function(e){var t=e.title,n=e.links;return Object(k.jsxs)(si,{children:[Object(k.jsx)(oi,{children:t}),Object(k.jsx)(ci,{children:n.map((function(e){var t=e.title,n=e.url;return Object(k.jsx)(ri,{href:n,children:t},t)}))})]},t)}))})]})})})},mi=n(24),ji=n.n(mi);n(104);var ui=function(){return Object(h.useEffect)((function(){ji.a.init({duration:2e3,disable:"phone"}),ji.a.refresh()}),[]),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(ht,{}),Object(k.jsx)(Ct,{}),Object(k.jsx)(Rt,{id:"superMerchants"}),Object(k.jsx)(Ut,{}),Object(k.jsx)(nn,{}),Object(k.jsx)(jn,{id:"docs"}),Object(k.jsx)(Ln,{id:"superMerchants"}),Object(k.jsx)(Bn,{}),Object(k.jsx)(Sn,{}),Object(k.jsx)(Ut,{}),Object(k.jsx)(_n,{id:"pricing"}),Object(k.jsx)(ei,{}),Object(k.jsx)(li,{})]})};y.a.render(Object(k.jsx)(ui,{}),document.getElementById("root"))},45:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.a96e49d3.chunk.js.map