(this["webpackJsonpkmmrce-demo"]=this["webpackJsonpkmmrce-demo"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var i,a,o,s,r,c,l,d,m,j,u,p,b,x,f,g,h=n(1),O=n(14),y=n.n(O),v=(n(44),n(38),n(45),n(0)),k=function(e){var t=e.type,n=e.children,i="";"lightColor"===t?i="buttonStyle":"buttonStyleDark"===t?i="buttonStyleDark":"buttonStyleWhite"===t&&(i="buttonStyleWhite");return Object(v.jsxs)("button",{className:i,children:[n," "]})},w=n(3),S=n(2),z=S.a.div(i||(i=Object(w.a)(["\n  padding-top:0px;\n  padding-left :27px;\n"]))),q=function(e){var t=e.children;return Object(v.jsx)(z,{children:t})},L=n(37),D=Object(L.a)(["@media(min-width: 420px)","@media(min-width: 1030px)","@media(min-width: 1140px)"]),C=S.a.div(a||(a=Object(w.a)(["\n  padding: 64px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: ",";\n  margin-left :10px;\n"])),(function(e){return e.alignLeft?"flex-start":"center"})),M=S.a.span((function(){return D({maxWidth:["100%","65%"],display:"inline-block",padding:["24px 0"],fontSize:["20px","39px"],fontFamily:"yellixregular, sans-serif"})})),W=S.a.h2(o||(o=Object(w.a)(['\n  font-weight: 100;  \n  font-size: 28px;\n  font-family: "yellixregular, sans-serif",\n  width: 100%;\n  text-align: ',";\n"])),(function(e){return e.alignLeft?"left":"center"})),A=S.a.h3((function(){return D({fontSize:["20px","30px"],paddingBottom:["34px"],maxWidth:["100%","60%"],fontFamily:"yellixregular, sans-serif",fontWeight:"300"})})),P=function(e){var t=e.children,n=e.alignLeft,i=e.title,a=e.subtitle,o=e.description;return Object(v.jsxs)(C,{alignLeft:n,"data-aos":"fade-up","data-aos-offset":"300","data-aos-duration":"1000","data-aos-easing":"ease-in-out",children:[i&&Object(v.jsx)(W,{alignLeft:n,children:i}),o&&Object(v.jsx)(M,{children:o}),a&&Object(v.jsx)(A,{children:a}),t]})},R=n(17),I=S.a.div(s||(s=Object(w.a)(["\n  border-bottom: 1px solid #acacac;\n  padding: 0px 0;\n  align-self: flex-start;\n  position: -webkit-sticky;\n  position: sticky;\n  top:0;\n  left:0;\n  z-index : 1020;\n  background-color : white;\n"]))),B=S.a.div(r||(r=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding :27px;\n"]))),E=S.a.img(c||(c=Object(w.a)(["\n  height: 35px;\n"]))),T=S.a.div(l||(l=Object(w.a)(["\n  position: relative;\n  > button {\n    top: 0;\n    padding: 0;\n    right: 0;\n    position: absolute;\n  }\n"]))),F=S.a.div(d||(d=Object(w.a)(["\n  display: inline-block;  \n  z-index: 999;\n  position: relative;\n  height: 27px;\n  width: 32px;\n"]))),Y=(S.a.span(m||(m=Object(w.a)(["\n  width: 100%;\n  margin-top: 10px;\n  position: absolute;\n  height: 9px;\n  background-color: #333;\n"]))),S.a.i(j||(j=Object(w.a)(["\n  cursor: pointer;\n  top: -4px;\n  opacity: 0;\n  position: absolute;\n  left: -4px;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  }\n"]))),{menu:[{id:1,name:"Platform",link:"#platform"},{id:2,name:"Super Merchants",link:"#superMerchants"},{id:3,name:"Pricing",link:"#pricing"},{id:4,name:"Partners",link:"#partners"},{id:5,name:"Docs",link:"#docs"}]}),K=S.a.nav(u||(u=Object(w.a)(["\n\n"]))),N=S.a.ul(p||(p=Object(w.a)([""]))),H=S.a.li(b||(b=Object(w.a)(['\n  position: relative;\n  display: inline-block;\n  margin-right:32px;\n  font-family: yellixregular,sans-serif;\n  font-weight: 200;\n  font-size: 15px;\n  color: #333;\n  padding-bottom: 4px;\n  &:after {\n    content: "";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 0;\n    margin: auto;\n    height: 2px;\n    background-color: #333333;\n  }\n\n  &:hover:after {\n    width: 100%;\n  }\n']))),V=function(){return Object(v.jsx)(K,{children:Object(v.jsx)(N,{children:Y.menu.map((function(e){var t=e.name,n=e.link;return Object(v.jsx)("a",{href:"".concat(n),children:Object(v.jsx)(H,{children:t})},n)}))})})},$=n(108),J=Object(S.a)($.a.div)(x||(x=Object(w.a)(["\n  width: 330px;\n  background-color: #0c4d7b;\n  height: 100%;\n  padding: 0 17px;\n"]))),Q=Object(S.a)($.a.ul)(f||(f=Object(w.a)(["\n  padding-top: 32px;\n"]))),U=Object(S.a)($.a.li)(g||(g=Object(w.a)(["\n  list-style: none;\n  color:#fff;\n  font-size: 18px;\n  font-weight :400;\n  padding-bottom: 8px;\n  line-height :40px;\n  \n"]))),X={show:{opacity:1,x:0},hidden:{opacity:0,x:"100%"}},G={show:{opacity:1},hidden:{opacity:0}},Z={hidden:{opacity:0},show:{opacity:1}},_=function(e){var t=e.isOpen;return Object(v.jsx)(J,{variants:X,initial:{x:"100%"},animate:t?"show":"hidden",transition:{duration:.5},children:Object(v.jsx)(Q,{variants:G,initial:"hidden",animate:"show",children:Y.menu.map((function(e){var t=e.name;return Object(v.jsx)(U,{variants:Z,children:t},t)}))})})},ee=[576,767,992,1200],te=function(e){var t="undefined"!==typeof window?window.innerWidth:0;return{isMobile:t<e[1],isPad1:t>=e[1]&&t<e[2],isPad2:t>=e[2]&&t<e[3],isLaptop:t>=e[3]}};function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=Object(h.useState)(te(e)),n=Object(R.a)(t,2),i=n[0],a=n[1],o=Object(h.useCallback)((function(){a(te(e))}),[e]);return Object(h.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[o]),i}var ie,ae,oe,se,re,ce,le,de,me,je,ue,pe,be,xe,fe,ge,he,Oe,ye,ve,ke,we,Se,ze,qe,Le,De,Ce,Me,We,Ae,Pe,Re,Ie,Be,Ee,Te,Fe,Ye,Ke,Ne,He,Ve,$e,Je,Qe,Ue,Xe,Ge,Ze,_e,et,tt,nt,it,at,ot,st,rt,ct,lt,dt,mt,jt,ut,pt,bt,xt,ft=n(22),gt=n(21),ht=function(){var e=Object(h.useState)(!1),t=Object(R.a)(e,2),n=t[0],i=t[1],a=ne().isLaptop,o=Object(h.useCallback)((function(){i(!n)}),[n]);return Object(v.jsx)(I,{children:Object(v.jsxs)(z,{children:[Object(v.jsxs)(B,{children:[Object(v.jsx)(E,{src:"/kmmrce-demo/image/logo.svg",alt:"kMMRCE Logo"}),!a&&Object(v.jsxs)(F,{onClick:o,children:[!n&&Object(v.jsx)(gt.a,{icon:ft.a}),n&&Object(v.jsx)(gt.a,{icon:ft.b})]}),a&&Object(v.jsx)(V,{}),a&&Object(v.jsx)(k,{type:"lightColor",children:"Request Demo"})]}),Object(v.jsx)(T,{children:n&&Object(v.jsx)(_,{isOpen:n})})]})})},Ot=S.a.div(ie||(ie=Object(w.a)(["\n  ","\n  display: flex;\n  font-family: yellixregular,sans-serif;\n"])),D({flexDirection:["column","column","row"]})),yt=S.a.div(ae||(ae=Object(w.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]))),vt=S.a.h2(oe||(oe=Object(w.a)(["\nfont-weight: 300 !Important;\nfont-family: yellixregular,sans-serif;\n","\n","\ntext-align :left;\nletter-spacing: -0.066px;\n"])),D({fontSize:["25px","3.8rem"]}),D({lineHeight:["2.8rem","3.9rem"]})),kt=S.a.span(se||(se=Object(w.a)(["\ncolor :#4B42AD;\nfont-family: yellixregular,sans-serif;\n\n"]))),wt=(S.a.p(re||(re=Object(w.a)(["\nmargin-top :0px;\nmargin-bottom :0px\n"]))),S.a.div((function(e){return D({order:[1,0,0],borderRight:["none","1px solid #acacac"],display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:["center","flex-start"],justifyContent:"center",flex:"1 1 0",marginBottom:"-6px",minWidth:"50%",padding:"0 .9375rem",paddingTop:"0px"})}))),St=S.a.img(ce||(ce=Object(w.a)(["\n  ","\n"])),D({maxWidth:["100%","73%"]})),zt=S.a.div(le||(le=Object(w.a)(["\n","\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 0;\n  margin: 32px 0;\n"])),D({order:[0,1,1]})),qt=n(15),Lt=function(){return Object(v.jsx)(q,{children:Object(v.jsxs)(Ot,{children:[Object(v.jsx)(yt,{}),Object(v.jsxs)(wt,{children:[Object(v.jsxs)(vt,{children:[Object(v.jsx)(kt,{children:"KMMRCE"})," is an enterprise level digital platform that provides a turnkey solution to online retailing."]}),Object(v.jsx)(k,{type:"lightColor",children:"Request Demo"})]}),Object(v.jsx)(qt.Animated,{animationIn:"zoomIn",animationIterationCount:"infinite",animationInDuration:2e3,component:"div",children:Object(v.jsx)(zt,{children:Object(v.jsx)(St,{src:"/kmmrce-demo/image/circle.png",alt:"hero image"})})})]})})},Dt=S.a.div(de||(de=Object(w.a)(["\n  display: flex;\n  align-items: center;  \n  position: relative;\n  background: #1f1f1f;\n  color: #fff;\n  ","\n"])),D({height:["auto","1000px"]})),Ct=S.a.div(me||(me=Object(w.a)(["\n  z-index: 1;  \n  position: absolute;\n  transform: translateX(-50%) translateY(-50%);\n  top: 50%;\n  left: 50%;\n  display: grid;\n  row-gap: 300px;\n  grid-template-columns: repeat(3, 1fr);\n"]))),Mt=S.a.div(je||(je=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 9;\n"]))),Wt=S.a.img(ue||(ue=Object(w.a)(["\n  max-width: 650px;\n"]))),At=function(){var e=ne().isLaptop;return Object(v.jsxs)(Dt,{children:[e&&Object(v.jsxs)(Ct,{children:[Object(v.jsx)(Wt,{src:"/kmmrce-demo/image/image-1.png",className:"wrapperCol","data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(v.jsx)(Wt,{src:"/kmmrce-demo/image/image-2.png","data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(v.jsx)(Wt,{src:"/kmmrce-demo/image/image-3.png","data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(v.jsx)(Wt,{src:"/kmmrce-demo/image/image-6.png","data-aos":"fade-up","data-aos-offset":"200","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}),Object(v.jsx)(Wt,{src:"/kmmrce-demo/image/image-5.png","data-aos":"fade-up","data-aos-offset":"300","data-aos-duration":"500","data-aos-easing":"ease-in-out"}),Object(v.jsx)(Wt,{src:"/kmmrce-demo/image/image-4.png"})]}),Object(v.jsx)(q,{children:Object(v.jsx)(Mt,{"data-aos":"fade-up","data-aos-offset":"100","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:Object(v.jsx)(P,{title:"Platform",description:"Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business.",children:Object(v.jsx)(k,{type:"buttonStyleWhite",children:"Explore the Platform"})})})})]})},Pt=[{title:"Development features",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam corporis tempora quia aut adipisci blanditiis eveniet distinctio doloribus quisquam."},{title:"Design & Layout",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam corporis tempora quia aut adipisci blanditiis eveniet distinctio doloribus quisquam.",features:[{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."}]}],Rt=Object(S.a)(C)(pe||(pe=Object(w.a)(["\n margin-top :-50px;\n flex-direction: row;\n ","\n"])),D({flexDirection:["column","row"]})),It=S.a.img(be||(be=Object(w.a)(["\n  ","\n"])),D({maxWidth:["100%","60%"]})),Bt=S.a.div(xe||(xe=Object(w.a)(["\n  flex: 1 1 0;\n  text-align: center;\n"]))),Et=S.a.div((function(){return D({paddingRight:["24px","0"],paddingLeft:["24px","0"],flex:"1 1 0"})})),Tt=S.a.h2((function(){return D({marginBottom:["16px"],maxWidth:["100%","80%"],fontSize:["21px","26px"],fontWeight:500,fontFamily:"yellixregular,sans-serif"})})),Ft=S.a.div(fe||(fe=Object(w.a)(["\n  margin-bottom: 16px;\n"]))),Yt=S.a.img(ge||(ge=Object(w.a)(["\n  margin-right: 4px;\n"]))),Kt=S.a.span(he||(he=Object(w.a)(['\nfont-size : 22px;\nfont-weight : 400;\nfontFamily: "yellixregular,sans-serif"\n']))),Nt=S.a.p(Oe||(Oe=Object(w.a)(["\n  margin-bottom: 4px;\n  font-size : 18px;\n  padding-bottom :15px;\n"]))),Ht=S.a.li(ye||(ye=Object(w.a)(["\n  margin-bottom: 4px;\n  display: flex;\n  list-style: none;\n"]))),Vt=S.a.ul(ve||(ve=Object(w.a)(["\nmargin-left :-38px\n"]))),$t=S.a.hr(ke||(ke=Object(w.a)(["\n"]))),Jt=function(){return Object(v.jsxs)(Rt,{children:[Object(v.jsx)(Bt,{"data-aos":"fade-right","data-aos-offset":"200","data-aos-delay":"200","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:Object(v.jsx)(It,{src:"/kmmrce-demo/image/image-15.svg"})}),Object(v.jsxs)(Et,{"data-aos":"fade-left","data-aos-offset":"200","data-aos-delay":"200","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:[Object(v.jsx)(Tt,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quos eum veritatis quia odio delectus!"}),Pt.map((function(e){var t=e.title,n=e.description,i=e.features;return Object(v.jsxs)(Ft,{children:[Object(v.jsx)(Nt,{children:t}),Object(v.jsx)(Kt,{children:n}),"Development features"===t?Object(v.jsx)($t,{}):"",i&&Object(v.jsx)(Vt,{children:i.map((function(e){var t=e.title,n=e.id;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(Ht,{children:[Object(v.jsx)(Yt,{src:"/kmmrce-demo/image/tick.svg",alt:t})," ",t]},n)})}))})]},t)}))]})]})},Qt=S.a.div(we||(we=Object(w.a)(["\n  padding: 64px 0;\n  background: #3cd17f;\n  color: #333;\n"]))),Ut=S.a.div(Se||(Se=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Xt=S.a.span((function(){return D({fontSize:["21px","25px"],fontWeight:400})})),Gt=S.a.img(ze||(ze=Object(w.a)(["\n  width: 160px;\n"]))),Zt=S.a.span((function(){return D({fontSize:["10px","18px"],fontWeight:400})})),_t=S.a.h2((function(){return D({fontWeight:510,fontSize:["25px","48px"],textAlign:"center",maxWidth:["100%","70%"]})})),en=n(16),tn=n.n(en),nn=function(){return Object(v.jsx)(Qt,{children:Object(v.jsx)(q,{children:Object(v.jsxs)(Ut,{children:[Object(v.jsx)(Xt,{children:"\u201c"}),Object(v.jsx)(_t,{"data-aos":"flip-up","data-aos-offset":"200","data-aos-duration":"1000","data-aos-easing":"ease-in",children:"KMMRCE is an ideal solution for anyone looking to build a bespoke e-commerce website. A great foundation has been designed to get you started on a fully-fledged storefront with minimal effort."}),Object(v.jsx)(Xt,{children:"\u201c"}),Object(v.jsx)(Gt,{src:"/kmmrce-demo/image/image-11.png",alt:"feedback image","data-aos":"zoom-in-up","data-aos-offset":"200","data-aos-duration":"1000","data-aos-easing":"ease-in"}),Object(v.jsx)(Zt,{children:Object(v.jsx)(tn.a,{strings:["Tyler Hilderband, Head of Engineering at patch"],typeSpeed:40,loop:!0})})]})})})},an=S.a.div(qe||(qe=Object(w.a)([" \ndisplay: flex; \nalign-items : flex-end; \n","\n overflow: hidden;"])),D({flexDirection:["column","row"]})),on=S.a.div((function(){return D({flex:"1 1 0",order:[1,0,0],padding:["28px",0]})})),sn=S.a.span(Le||(Le=Object(w.a)(["\nfont-size: 20px;\n",";\n"])),D({marginLeft:["25%","2%"]})),rn=S.a.h3(De||(De=Object(w.a)([" \n","; \n",";\n",'; \nmargin-top:0px; \nfont-family :"yellixregular, sans-serif";\nfont-weight : 300;'])),D({maxWidth:["100%","70%"]}),D({marginLeft:["25%","2%"]}),D({fontSize:["28px","3.8rem"]})),cn=S.a.span(Ce||(Ce=Object(w.a)(["\n display: inline-block; \n","; \n",';\nfont-size: 22px; \npadding: 30px 0;\nmargin-top:0px;\npadding-top :0px;\n color: #333; \n line-height :1.0; \n font-family: "yellixregular",sans-serif; \n font-weight :300; \n word-spacing: 5px;'])),D({maxWidth:["100%","70%"]}),D({marginLeft:["25%","2%"]})),ln=S.a.img(Me||(Me=Object(w.a)([" width: 100%;"]))),dn=S.a.div(We||(We=Object(w.a)(["\nflex: 1 1 0;\n"]))),mn=S.a.div(Ae||(Ae=Object(w.a)(["\n",";\n& > button { margin-right: 5px; } \ndisplay: flex;"])),D({marginLeft:["25%","2%"]})),jn=(S.a.p(Pe||(Pe=Object(w.a)(["\nmargin-top :0px;\n"]))),function(){return Object(v.jsxs)(an,{children:[Object(v.jsxs)(on,{"data-aos":"slide-left","data-aos-offset":"500","data-aos-duration":"1000",children:[Object(v.jsx)(sn,{children:Object(v.jsx)(tn.a,{strings:["Case Study"],typeSpeed:50,loop:!0})}),Object(v.jsx)(rn,{children:"Created with KMMRCE: Watch 1010"}),Object(v.jsx)(cn,{children:"Disrupting and democratizing healthcare. Butterfly\u2019s ambitious, rapid global scale-out is only possible with the support of Saleor. Their incredible journey has already taken the company from a disruptive startup to Apple Design Awards Winner 2019"}),Object(v.jsxs)(mn,{children:[Object(v.jsx)(k,{type:"buttonStyleDark",children:"View Case Study"}),Object(v.jsx)(k,{type:"buttonStyleDark",children:"View All"})]})]}),Object(v.jsx)(dn,{"data-aos":"fade-zoom-in","data-aos-offset":"400","data-aos-easing":"ease-in-sine","data-aos-duration":"600",children:Object(v.jsx)(ln,{src:"/kmmrce-demo/image/image-7.svg"})})]})}),un=S.a.h2(Re||(Re=Object(w.a)(["\nfont-size: 40px;\nfont-weight :300\n"]))),pn=S.a.div(Ie||(Ie=Object(w.a)(["\n  ","\n  overflow: hidden;\n  display: flex;\n  margin-left:20px;\n"])),D({flexDirection:["column","row"]})),bn=S.a.div((function(){return D({flex:"1 1 0",marginTop:"20px"})})),xn=S.a.p(Be||(Be=Object(w.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal;\n font-size: 23px; \n color: rgba(172,172,172,1)\n"]))),fn=S.a.p(Ee||(Ee=Object(w.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal; \nfont-size: 20px;\ntext-decoration : underline\n"]))),gn=S.a.p(Te||(Te=Object(w.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal; \nfont-size: 32px; \ncolor: rgba(172,172,172,1)\n"]))),hn=S.a.div(Fe||(Fe=Object(w.a)(["\nmargin-top :20px;\nflex: 1 1 0;\n","\n"])),D({order:[0,1,1]})),On=S.a.h1(Ye||(Ye=Object(w.a)(["\nfont-size : 24px;\nfont-weight :400\n"]))),yn=S.a.img(Ke||(Ke=Object(w.a)(["\nwidth :100%\n"]))),vn=S.a.img(Ne||(Ne=Object(w.a)([""]))),kn=S.a.span(He||(He=Object(w.a)(["\nfont-size : 20px\n"]))),wn=S.a.br(Ve||(Ve=Object(w.a)([""]))),Sn=function(){return Object(v.jsxs)(pn,{children:[Object(v.jsxs)(hn,{"data-aos":"zoom-in-right","data-aos-offset":"200","data-aos-duration":"500","data-aos-easing":"ease-in-out",children:[Object(v.jsx)(On,{children:"Duis aute irure dolor in reprehenderit in voluptate velit"}),Object(v.jsx)(On,{children:"esse cillum dolore eu fugiat nulla pariatur."}),Object(v.jsx)(vn,{src:"/kmmrce-demo/image/tick.svg"}),Object(v.jsx)(kn,{children:"Sed manga enim"}),Object(v.jsx)(wn,{}),Object(v.jsx)(vn,{src:"/kmmrce-demo/image/tick.svg"}),Object(v.jsx)(kn,{children:"Bidendum a quam eu"}),Object(v.jsx)(yn,{src:"/kmmrce-demo/image/project.jpeg"})]}),Object(v.jsxs)(bn,{"data-aos":"zoom-in-left","data-aos-offset":"200","data-aos-delay":"200","data-aos-duration":"1000","data-aos-easing":"ease-in-out",children:[Object(v.jsx)(un,{children:"Lorem ipsum dolor sit  amet, consectetur adipiscing elit, sed do"}),Object(v.jsx)(xn,{children:"Stay up to date with the feed"}),Object(v.jsx)(fn,{children:"Keep track of projects"}),Object(v.jsx)(gn,{children:"Invite and view your team members"})]})]})},zn=S.a.div($e||($e=Object(w.a)(["\ndisplay: flex;\nalign-items: center;\nbackground-image: url(",");\nbackground-size: contain;\nbackground-blend-mode: overlay;\nbackground-color: #4B42AD;\ncolor: #fff;\nmin-height: 1000px;\nbackground-size: 100% 100%;\n\n"])),"/kmmrce-demo/image/image-14.png"),qn=S.a.div(Je||(Je=Object(w.a)(["\n"]))),Ln=(S.a.h2(Qe||(Qe=Object(w.a)(['\nfont :normal normal normal 4.25rem/4.5rem Yellix TRIAL;\nfont-family :"Yellix TRIAL";\nfont-weight: normal;\nfont-style: normal;\n\n\n']))),function(){return Object(v.jsx)(zn,{children:Object(v.jsx)(qn,{children:Object(v.jsx)(qt.Animated,{animationIn:"jello",animationInDuration:7800,component:"div",children:Object(v.jsx)(P,{title:"Super Merchants",description:"Multisite, made easy.",subtitle:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim.Nunc lobortis, augue non pulvinar consequat, enim massa pharetra neque.",children:Object(v.jsx)(k,{type:"buttonStyleWhite",children:"Explore Super Merchants"})})})})})}),Dn=[{icon:"/image/image-16.svg",title:"24/7 Tech Suppport",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"},{icon:"/image/image-12.svg",title:"Loyalty Benefits",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"},{icon:"/image/image-13.svg",title:"Scalable Pricing",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"}],Cn=S.a.div(Ue||(Ue=Object(w.a)(["\n background: #1f1f1f;\n color: #fff;  \n"]))),Mn=S.a.div((function(e){return D({borderRight:"1px solid #acacac",padding:["32px"],borderBottom:["1px solid #acacac","none"],"&:last-child ":{border:"none"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"})})),Wn=S.a.div((function(e){return D({padding:[0,"0px 4px"],borderTop:"1px solid #acacac",display:"flex",flexDirection:["column","row"],justifyContent:"center",alignItems:"center"})})),An=S.a.span(Xe||(Xe=Object(w.a)(['\n  font-size: 19px;\n  font-family: "akkurat-monoregular";\n']))),Pn=S.a.span(Ge||(Ge=Object(w.a)(["\n  padding: 25px 0;\n  font-size: 19px;\n  display: inline-block;\n"]))),Rn=S.a.img(Ze||(Ze=Object(w.a)(["\n  margin-bottom: 9px;\n  width: 55px;\n"]))),In=S.a.div(_e||(_e=Object(w.a)(["\nmargin-left : 20px\n"]))),Bn=function(){return Object(v.jsxs)(Cn,{children:[Object(v.jsx)(In,{"data-aos":"fade-up","data-aos-offset":"600","data-aos-duration":"1000","data-aos-easing":"ease-in",children:Object(v.jsx)(P,{title:"Serving Our Customers",description:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim.",alignLeft:!0})}),Object(v.jsx)(Wn,{children:Dn.map((function(e){var t=e.icon,n=e.title,i=e.desc;return Object(v.jsxs)(Mn,{"data-aos":"fade-up","data-aos-offset":"600","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in",children:[Object(v.jsx)(Rn,{src:"/kmmrce-demo"+t,alt:n}),Object(v.jsx)(An,{children:n}),Object(v.jsx)(Pn,{children:i}),Object(v.jsx)(k,{type:"buttonStyleWhite",children:"Request Demo"})]},n)}))})]})},En=S.a.div(et||(et=Object(w.a)(["\n  background: #f5f5f5;\n"]))),Tn=[{icon:"/image/image10.svg",title:"Standard"},{icon:"/image/image-9.svg",title:"Professional"},{icon:"/image/image-8.svg",title:"Enterprise"}],Fn={coreFeatures:[{title:"Sed mgna enim",standard:!0,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!1,professional:!1,enteprise:!0},{title:"Commodo Consecteteur",standard:!0,professional:!0,enteprise:!0},{title:"Eu dolor luctus",standard:!0,professional:!0,enteprise:!0},{title:"Sed magna enim",standard:!1,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!0,professional:!0,enteprise:!0}],teamSupport:[{title:"Sed mgna enim",standard:!0,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!1,professional:!1,enterprise:!0},{title:"Commodo Consecteteur",standard:!0,professional:!0,enterprise:!0},{title:"Eu dolor luctus",standard:!0,professional:!0,enterprise:!0},{title:"Sed magna enim",standard:!1,professional:!0,enterprise:!0},{title:"Bibendum a quam eu",standard:!0,professional:!0,enterprise:!0}]},Yn=S.a.th((function(){return D({display:["none","block"],width:["100%","25%"]})})),Kn=S.a.tbody(tt||(tt=Object(w.a)([""]))),Nn=S.a.table(nt||(nt=Object(w.a)(["\n  width: 100%;\n"]))),Hn=S.a.tr((function(){return D({padding:[0,"16px"],"&:first-child":{borderBottom:"none"},"&:last-child":{borderBottom:"none"},display:"flex",flexDirection:["column","row"],borderBottom:"1px solid #acacac"})})),Vn=(S.a.img(it||(it=Object(w.a)([""]))),S.a.h4(at||(at=Object(w.a)(["\n  font-size: 0px;\n  padding-bottom:16px;\n  padding-top: 4px;\n\n"])))),$n=S.a.h4(ot||(ot=Object(w.a)(["\n  border-bottom: 1px solid #acacac;\n  font-weight: 500;\n  font-size:22px;\n  padding:16px;\n"]))),Jn=S.a.h3(st||(st=Object(w.a)(["\n  font-size: 16px;\n  padding-top: 4px;\n  padding-bottom: 16px;\n"]))),Qn=S.a.div(rt||(rt=Object(w.a)(["\n  flex: 2;\n  display: flex;\n"]))),Un=S.a.img(ct||(ct=Object(w.a)([""]))),Xn=S.a.td((function(e){return D({"&:first-child":{textAlign:"left",marginTop:["4px"]},textAlign:"center",marginTop:["4px"],flex:["100%","1"],marginBottom:["8px"]})})),Gn=S.a.span(lt||(lt=Object(w.a)(["\n  display: block;\n  font-size: 24px;\n  padding-bottom: 4px;\n"]))),Zn=function(){var e=ne(),t=e.isLaptop,n=e.isMobile;return Object(v.jsxs)(Nn,{children:[Object(v.jsxs)(Hn,{children:[Object(v.jsx)(Yn,{}),Tn.map((function(e){var n=e.icon,i=e.title;return Object(v.jsxs)(Yn,{children:[Object(v.jsx)(Un,{src:"/kmmrce-demo"+n}),Object(v.jsx)(Jn,{children:i}),t&&Object(v.jsx)(k,{type:"buttonStyleDark",children:"Request Demo"})]},n)}))]}),Object(v.jsxs)(Kn,{children:[Object(v.jsx)($n,{children:"Core Features"}),Fn.coreFeatures.map((function(e){var t=e.title,i=e.standard,a=e.professional,o=e.enterprise;return Object(v.jsxs)(Hn,{children:[Object(v.jsx)(Xn,{children:t},t),Object(v.jsxs)(Qn,{children:[Object(v.jsxs)(Xn,{children:[n&&Object(v.jsx)(Vn,{children:"is Standard"}),i?Object(v.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(v.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(v.jsxs)(Xn,{children:[n&&Object(v.jsx)(Vn,{children:"is Professional"}),a?Object(v.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(v.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(v.jsxs)(Xn,{children:[n&&Object(v.jsx)(Vn,{children:"is Enterprise"}),o?Object(v.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(v.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]})]})]},t)})),Object(v.jsx)($n,{children:"Team Support"}),Fn.teamSupport.map((function(e){var t=e.title,i=e.standard,a=e.professional,o=e.enterprise;return Object(v.jsxs)(Hn,{children:[Object(v.jsx)(Xn,{children:t},t),Object(v.jsxs)(Qn,{children:[Object(v.jsxs)(Xn,{children:[n&&Object(v.jsx)(Vn,{children:"is Standard"}),i?Object(v.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(v.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(v.jsxs)(Xn,{children:[n&&Object(v.jsx)(Vn,{children:"is Professional"}),a?Object(v.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(v.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]}),Object(v.jsxs)(Xn,{children:[n&&Object(v.jsx)(Vn,{children:"is Enterprise"}),o?Object(v.jsx)(Un,{src:"/kmmrce-demo/image/tick.svg"}):Object(v.jsx)(Un,{src:"/kmmrce-demo/image/null.svg"})]})]})]})})),t&&Object(v.jsxs)(Hn,{children:[Object(v.jsx)(Xn,{}),Object(v.jsxs)(Xn,{children:[Object(v.jsx)(Gn,{children:"$100/month"}),Object(v.jsx)(k,{type:"buttonStyleDark",children:"Select this plan"})]}),Object(v.jsxs)(Xn,{children:[Object(v.jsx)(Gn,{children:"$2000/month"}),Object(v.jsx)(k,{type:"buttonStyleDark",children:"Select this plan"})]}),Object(v.jsxs)(Xn,{children:[Object(v.jsx)(Gn,{children:"$3,500/month"}),Object(v.jsx)(k,{type:"buttonStyleDark",children:"Select this plan"})]})]})]})]})},_n=function(){return Object(v.jsx)(En,{children:Object(v.jsx)(q,{children:Object(v.jsx)(P,{title:"Features & Solutions",description:"consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent  commodo velit eget urna mollis dignissim.",alignLeft:!0,children:Object(v.jsx)(Zn,{})})})})},ei=function(){return Object(v.jsx)(q,{children:Object(v.jsx)(P,{description:"Ready to grow your business?",children:Object(v.jsx)(k,{type:"lightColor",children:"Request Demo"})})})},ti=S.a.div(dt||(dt=Object(w.a)(["\n  padding: 24px 0;\n  background: #1f1f1f;\n"]))),ni=S.a.div(mt||(mt=Object(w.a)(["\n  display: flex;\n  ","\n  align-items: flex-start;\n  justify-content: space-between;\n"])),D({flexDirection:["column","row"]})),ii=S.a.div(jt||(jt=Object(w.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),ai=S.a.img(ut||(ut=Object(w.a)(["\n  width: 35px;\n"]))),oi=S.a.div(pt||(pt=Object(w.a)(["\n font-weight: 500; \n color: #fff;\n  padding-bottom: 4px;\n"]))),si=S.a.div((function(e){return D({marginRight:["16px","32px"],marginTop:["32px",0],marginLeft:[0,"32px"]})})),ri=S.a.a(bt||(bt=Object(w.a)(["\n  text-decoration: none;\n  color: #acacac;\n  padding-bottom: 4px;\n  display: block;\n"]))),ci=S.a.div(xt||(xt=Object(w.a)(['\n  color: "#acacac;\n']))),li={items:[{id:1,title:"Product",links:[{id:6,title:"Home",url:"/home"},{id:1,title:"About",url:"/about"},{id:4,title:"Tech Stack",url:"/techStack"},{id:5,title:"Super Merchants",url:"/superMerchants"},{id:2,title:"Pricing",url:"/pricing"},{id:3,title:"Partners",url:"/partners"}]},{id:2,title:"About Us",links:[{id:7,title:"About",url:"/about"},{id:13,title:"Sectors",url:"/sectors"},{id:14,title:"Careers",url:"/careers"},{id:15,title:"Contact",url:"/contact"}]},{id:3,title:"Dolore",links:[{id:8,title:"Voluptate",url:"/voluptate"},{id:9,title:"Cillum",url:"/cillum"},{id:10,title:"Pariatur",url:"/pariatur"},{id:11,title:"Nulla",url:"/nulla"},{id:12,title:"Irura",url:"/irura"}]},{id:4,title:"Tertiary",links:[{id:16,title:"Privacy Policy",url:"/privacy"},{id:17,title:"Terms & Conditions",url:"/terms"},{id:18,title:"Cookie Policy",url:"/policy"}]}]},di=function(){return Object(v.jsx)(ti,{children:Object(v.jsx)(q,{children:Object(v.jsxs)(ni,{children:[Object(v.jsx)(ai,{src:"/kmmrce-demo/image/logo1.svg",alt:"KMMRCE logo"}),Object(v.jsx)(ii,{children:li.items.map((function(e){var t=e.title,n=e.links;return Object(v.jsxs)(si,{children:[Object(v.jsx)(oi,{children:t}),Object(v.jsx)(ci,{children:n.map((function(e){var t=e.title,n=e.url;return Object(v.jsx)(ri,{href:n,children:t},t)}))})]},t)}))})]})})})},mi=n(23),ji=n.n(mi);n(104);var ui=function(){return Object(h.useEffect)((function(){ji.a.init({duration:2e3,disable:"phone"}),ji.a.refresh()}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(ht,{}),Object(v.jsx)(Lt,{}),Object(v.jsx)(At,{id:"superMerchants"}),Object(v.jsx)(Jt,{}),Object(v.jsx)(nn,{}),Object(v.jsx)(jn,{id:"docs"}),Object(v.jsx)(Ln,{id:"superMerchants"}),Object(v.jsx)(Bn,{}),Object(v.jsx)(Sn,{}),Object(v.jsx)(Jt,{}),Object(v.jsx)(_n,{id:"pricing"}),Object(v.jsx)(ei,{}),Object(v.jsx)(di,{})]})};y.a.render(Object(v.jsx)(ui,{}),document.getElementById("root"))},44:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.b6156194.chunk.js.map