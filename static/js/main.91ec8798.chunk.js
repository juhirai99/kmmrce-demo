(this["webpackJsonpkmmrce-demo"]=this["webpackJsonpkmmrce-demo"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var i,a,c,r,o,s,l,d,j,m,b,p,u,x,g,h,O=n(1),f=n(15),v=n.n(f),y=(n(43),n(17)),k=(n(23),n(0)),w=function(e){var t=e.type,n=e.children,i="";"lightColor"===t?i="buttonStyle":"buttonStyleDark"===t?i="buttonStyleDark":"buttonStyleWhite"===t&&(i="buttonStyleWhite");return Object(k.jsxs)("button",{className:i,children:[n," ",">"]})},S=n(3),z=n(2),q=z.a.div(i||(i=Object(S.a)(["\n  padding: 8px;\n"]))),D=function(e){var t=e.children;return Object(k.jsx)(q,{children:t})},L=n(37),C=Object(L.a)(["@media(min-width: 430px)","@media(min-width: 930px)","@media(min-width: 1140px)"]),I=z.a.div(a||(a=Object(S.a)(["\n  padding: 64px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: ",";\n  margin-left :10px;\n"])),(function(e){return e.alignLeft?"flex-start":"center"})),M=z.a.span((function(){return C({maxWidth:["100%","65%"],display:"inline-block",padding:["24px 0"],fontSize:["20px","39px"],fontFamily:"yellixregular, sans-serif"})})),A=z.a.h2(c||(c=Object(S.a)(['\n  font-weight: 300;  \n  font-size: 20px;\n  font-family: "akkurat-monoregular";\n  width: 100%;\n  text-align: ',";\n"])),(function(e){return e.alignLeft?"left":"center"})),P=z.a.h3((function(){return C({fontSize:["20px","22px"],paddingBottom:["34px"],maxWidth:["100%","60%"]})})),W=function(e){var t=e.children,n=e.alignLeft,i=e.title,a=e.subtitle,c=e.description;return Object(k.jsxs)(I,{alignLeft:n,children:[i&&Object(k.jsx)(A,{alignLeft:n,children:i}),c&&Object(k.jsx)(M,{children:c}),a&&Object(k.jsx)(P,{children:a}),t]})},R=n(16),B=z.a.div(r||(r=Object(S.a)(["\n  border-bottom: 1px solid #acacac;\n  padding: 0px 0;\n"]))),E=z.a.div(o||(o=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),T=z.a.img(s||(s=Object(S.a)(["\n  height: 35px;\n"]))),F=z.a.div(l||(l=Object(S.a)(["\n  position: relative;\n  > button {\n    top: 0;\n    padding: 0;\n    right: 0;\n    position: absolute;\n  }\n"]))),K=z.a.div(d||(d=Object(S.a)(["\n  display: inline-block;  \n  z-index: 999;\n  position: relative;\n  height: 27px;\n  width: 32px;\n"]))),N=(z.a.span(j||(j=Object(S.a)(["\n  width: 100%;\n  margin-top: 10px;\n  position: absolute;\n  height: 9px;\n  background-color: #333;\n"]))),z.a.i(m||(m=Object(S.a)(["\n  cursor: pointer;\n  top: -4px;\n  opacity: 0;\n  position: absolute;\n  left: -4px;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  }\n"]))),{menu:[{id:1,name:"Platform",link:"#platform"},{id:2,name:"Super Merchants",link:"#superMerchants"},{id:3,name:"Pricing",link:"#pricing"},{id:4,name:"Partners",link:"#partners"},{id:5,name:"Docs",link:"#docs"}]}),Y=z.a.nav(b||(b=Object(S.a)([""]))),H=z.a.ul(p||(p=Object(S.a)([""]))),V=z.a.li(u||(u=Object(S.a)(['\n  position: relative;\n  display: inline-block;\n  margin-right:32px;\n  font-size: 18px;\n  color: #333;\n  padding-bottom: 4px;\n  &:after {\n    content: "";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 0;\n    margin: auto;\n    height: 2px;\n    background-color: #333333;\n  }\n\n  &:hover:after {\n    width: 100%;\n  }\n']))),$=function(){return Object(k.jsx)(Y,{children:Object(k.jsx)(H,{children:N.menu.map((function(e){var t=e.name,n=e.link;return Object(k.jsx)("a",{href:"".concat(n),children:Object(k.jsx)(V,{children:t})},n)}))})})},J=n(105),Q=Object(z.a)(J.a.div)(x||(x=Object(S.a)(["\n  width: 330px;\n  position: fixed;\n  background-color: #0c4d7b;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  padding: 0 17px;\n  z-index:9;\n"]))),U=Object(z.a)(J.a.ul)(g||(g=Object(S.a)(["\n  padding-top: 32px;\n  margin-left :45px;\n"]))),X=Object(z.a)(J.a.li)(h||(h=Object(S.a)(["\n  list-style: none;\n  color:#fff;\n  font-size: 18px;\n  font-weight :400;\n  padding-bottom: 8px;\n  line-height :40px;\n"]))),G={show:{opacity:1,x:0},hidden:{opacity:0,x:"100%"}},Z={show:{opacity:1},hidden:{opacity:0}},_={hidden:{opacity:0},show:{opacity:1}},ee=function(e){var t=e.isOpen;return Object(k.jsx)(Q,{variants:G,initial:{x:"100%"},animate:t?"show":"hidden",transition:{duration:.5},children:Object(k.jsx)(U,{variants:Z,initial:"hidden",animate:"show",children:N.menu.map((function(e){var t=e.name;return Object(k.jsx)(X,{variants:_,children:t},t)}))})})},te=[576,767,992,1200],ne=function(e){var t="undefined"!==typeof window?window.innerWidth:0;return{isMobile:t<e[1],isPad1:t>=e[1]&&t<e[2],isPad2:t>=e[2]&&t<e[3],isLaptop:t>=e[3]}};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=Object(O.useState)(ne(e)),n=Object(R.a)(t,2),i=n[0],a=n[1],c=Object(O.useCallback)((function(){a(ne(e))}),[e]);return Object(O.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[c]),i}var ae,ce,re,oe,se,le,de,je,me,be,pe,ue,xe,ge,he,Oe,fe,ve,ye,ke,we,Se,ze,qe,De,Le,Ce,Ie,Me,Ae,Pe,We,Re,Be,Ee,Te,Fe,Ke,Ne,Ye,He,Ve,$e,Je,Qe,Ue,Xe,Ge,Ze,_e,et,tt,nt,it,at,ct,rt,ot,st,lt,dt,jt,mt,bt,pt,ut,xt=n(22),gt=n(21),ht=function(){var e=Object(O.useState)(!1),t=Object(R.a)(e,2),n=t[0],i=t[1],a=ie().isLaptop,c=Object(O.useCallback)((function(){i(!n)}),[n]);return Object(k.jsx)(B,{children:Object(k.jsxs)(q,{children:[Object(k.jsxs)(E,{children:[Object(k.jsx)(T,{src:"/kmmrce-demo/image/logo.svg",alt:"kMMRCE Logo"}),!a&&Object(k.jsxs)(K,{onClick:c,children:[!n&&Object(k.jsx)(gt.a,{icon:xt.a}),n&&Object(k.jsx)(gt.a,{icon:xt.b})]}),a&&Object(k.jsx)($,{}),a&&Object(k.jsx)(w,{type:"lightColor",children:"Request Demo"})]}),Object(k.jsx)(F,{children:n&&Object(k.jsx)(ee,{isOpen:n})})]})})},Ot=z.a.div(ae||(ae=Object(S.a)(["\n  ","\n  display: flex;\n  margin-bottom : 0px;\n  margin-left :10px;\n"])),C({flexDirection:["column","row","row"]})),ft=z.a.h1(ce||(ce=Object(S.a)(["\nfont-weight: 530;\nfont-size :2.7em\n"]))),vt=z.a.span(re||(re=Object(S.a)(["\ncolor :#4B42AD\n"]))),yt=z.a.p(oe||(oe=Object(S.a)(["\nmargin-top :0px;\nmargin-bottom :0px\n"]))),kt=z.a.div((function(e){return C({order:[1,0,0],borderRight:["none","1px solid #acacac"],display:"flex",flexDirection:"column",alignItems:["center","flex-start"],justifyContent:"center",flex:"1 1 0",marginBottom:"-6px"})})),wt=z.a.img(se||(se=Object(S.a)(["\n  ","\n"])),C({maxWidth:["100%","73%"]})),St=z.a.div(le||(le=Object(S.a)(["\n","\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 0;\n  margin: 32px 0;\n"])),C({order:[0,1,1]})),zt=n(7),qt=function(){return Object(k.jsx)(D,{children:Object(k.jsxs)(Ot,{children:[Object(k.jsxs)(kt,{children:[Object(k.jsx)(zt.Animated,{animationIn:"fadeInLeft",animationInDuration:2e3,component:"div",children:Object(k.jsxs)(ft,{children:[Object(k.jsx)(vt,{children:"KMMRCE"})," is an enterprise",Object(k.jsx)(yt,{children:"level digital platform that"}),"provides a turnkey solution to online retailing."]})}),Object(k.jsx)(zt.Animated,{animationIn:"fadeInLeft",animationInDuration:2e3,component:"div",children:Object(k.jsx)(w,{type:"lightColor",onClick:function(){return Object(y.a)("Request Sumbitted")},children:"Request Demo"})})]}),Object(k.jsx)(zt.Animated,{animationIn:"zoomIn",animationInDuration:2e3,component:"div",children:Object(k.jsx)(St,{children:Object(k.jsx)(wt,{src:"/kmmrce-demo/image/circle.png",alt:"hero image"})})})]})})},Dt=z.a.div(de||(de=Object(S.a)(["\n  display: flex;\n  align-items: center;  \n  position: relative;\n  background: #1f1f1f;\n  color: #fff;\n  ","\n"])),C({height:["auto","1000px"]})),Lt=z.a.div(je||(je=Object(S.a)(["\n  z-index: 1;  \n  position: absolute;\n  transform: translateX(-50%) translateY(-50%);\n  top: 50%;\n  left: 50%;\n  display: grid;\n  row-gap: 300px;\n  grid-template-columns: repeat(3, 1fr);\n"]))),Ct=z.a.div(me||(me=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 9;\n"]))),It=z.a.img(be||(be=Object(S.a)(["\n  max-width: 650px;\n"]))),Mt=function(){var e=ie().isLaptop;return Object(k.jsxs)(Dt,{children:[e&&Object(k.jsxs)(Lt,{children:[Object(k.jsx)(It,{src:"/kmmrce-demo/image/image-1.png"}),Object(k.jsx)(It,{src:"/kmmrce-demo/image/image-2.png"}),Object(k.jsx)(It,{src:"/kmmrce-demo/image/image-3.png"}),Object(k.jsx)(It,{src:"/kmmrce-demo/image/image-6.png"}),Object(k.jsx)(It,{src:"/kmmrce-demo/image/image-5.png"}),Object(k.jsx)(It,{src:"/kmmrce-demo/image/image-4.png"})]}),Object(k.jsx)(D,{children:Object(k.jsx)(zt.Animated,{animationIn:"fadeInLeft",animationInDuration:2500,component:"div",children:Object(k.jsx)(Ct,{children:Object(k.jsx)(W,{title:"Platform",description:"Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business.",children:Object(k.jsx)(w,{type:"buttonStyleWhite",children:"Explore the Platform"})})})})})]})},At=[{title:"Development features",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam corporis tempora quia aut adipisci blanditiis eveniet distinctio doloribus quisquam."},{title:"Design & Layout",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam corporis tempora quia aut adipisci blanditiis eveniet distinctio doloribus quisquam.",features:[{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."},{title:"Lorem ipsum dolor sit amet."}]}],Pt=Object(z.a)(I)(pe||(pe=Object(S.a)(["\n margin-top :-50px;\n flex-direction: row;\n ","\n"])),C({flexDirection:["column","row"]})),Wt=z.a.img(ue||(ue=Object(S.a)(["\n  ","\n"])),C({maxWidth:["100%","60%"]})),Rt=z.a.div(xe||(xe=Object(S.a)(["\n  flex: 1 1 0;\n  text-align: center;\n"]))),Bt=z.a.div((function(){return C({paddingRight:["24px","0"],paddingLeft:["24px","0"],flex:"1 1 0"})})),Et=z.a.h2((function(){return C({marginBottom:["16px"],maxWidth:["100%","80%"],fontSize:["21px","26px"],fontWeight:600})})),Tt=z.a.div(ge||(ge=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),Ft=z.a.img(he||(he=Object(S.a)(["\n  margin-right: 4px;\n"]))),Kt=z.a.span(Oe||(Oe=Object(S.a)(["\nfont-size : 30px\nfont-weight : 400\n"]))),Nt=z.a.p(fe||(fe=Object(S.a)(["\n  margin-bottom: 4px;\n  font-size : 18px;\n  padding-bottom :15px\n"]))),Yt=z.a.li(ve||(ve=Object(S.a)(["\n  margin-bottom: 4px;\n  display: flex;\n  list-style: none;\n"]))),Ht=z.a.ul(ye||(ye=Object(S.a)(["\nmargin-left : -38px;\n"]))),Vt=z.a.hr(ke||(ke=Object(S.a)(["\n"]))),$t=function(){return Object(k.jsxs)(Pt,{children:[Object(k.jsx)(zt.Animated,{animationIn:"zoomIn",animationInDuration:6e3,component:"div",children:Object(k.jsx)(Rt,{children:Object(k.jsx)(Wt,{src:"/kmmrce-demo/image/image-15.svg"})})}),Object(k.jsx)(zt.Animated,{animationIn:"zoomIn",animationInDuration:6e3,component:"div",children:Object(k.jsxs)(Bt,{children:[Object(k.jsx)(Et,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quos eum veritatis quia odio delectus!"}),At.map((function(e){var t=e.title,n=e.description,i=e.features;return Object(k.jsxs)(Tt,{children:[Object(k.jsx)(Nt,{children:t}),Object(k.jsx)(Kt,{children:n}),"Development features"===t?Object(k.jsx)(Vt,{}):"",i&&Object(k.jsx)(Ht,{children:i.map((function(e){var t=e.title,n=e.id;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(Yt,{children:[Object(k.jsx)(Ft,{src:"/kmmrce-demo/image/tick.svg",alt:t})," ",t]},n)})}))})]},t)}))]})})]})},Jt=z.a.div(we||(we=Object(S.a)(["\n  padding: 64px 0;\n  background: #3cd17f;\n  color: #333;\n"]))),Qt=z.a.div(Se||(Se=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Ut=z.a.span((function(){return C({fontSize:["21px","25px"],fontWeight:400})})),Xt=z.a.img(ze||(ze=Object(S.a)(["\n  width: 160px;\n"]))),Gt=z.a.span((function(){return C({fontSize:["10px","18px"],fontWeight:400})})),Zt=z.a.h2((function(){return C({fontWeight:510,fontSize:["25px","43px"],textAlign:"center",maxWidth:["100%","70%"]})})),_t=function(){return Object(k.jsx)(Jt,{children:Object(k.jsx)(D,{children:Object(k.jsxs)(Qt,{children:[Object(k.jsx)(Ut,{children:"\u201c"}),Object(k.jsx)(Zt,{children:"KMMRCE is an ideal solution for anyone looking to build a bespoke e-commerce website. A great foundation has been designed to get you started on a fully-fledged storefront with minimal effort."}),Object(k.jsx)(Ut,{children:"\u201c"}),Object(k.jsx)(Xt,{src:"/kmmrce-demo/image/image-11.png",alt:"feedback image"}),Object(k.jsx)(Gt,{children:"Tyler Hilderband, Head of Engineering at patch"})]})})})},en=z.a.div(qe||(qe=Object(S.a)(["\n  ","\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n  margin-left :20px;\n"])),C({flexDirection:["column","row"]})),tn=z.a.span(De||(De=Object(S.a)(["\nfont-size: 20px;\n"]))),nn=z.a.h3(Le||(Le=Object(S.a)(["\n  ",";\n  font-size: 30px;\n  margin-top:0px\n"])),C({maxWidth:["100%","70%"]})),an=z.a.span(Ce||(Ce=Object(S.a)(["\n  display: inline-block;\n  ",';\n  font-size: 20px;\n  padding: 30px 0;\n  color: #333;\n  line-height :1.5\n  font-family: "yellixregular",sans-serif;\n'])),C({maxWidth:["100%","70%"]})),cn=z.a.img(Ie||(Ie=Object(S.a)(["\n max-width: 100%;\n"]))),rn=z.a.div(Me||(Me=Object(S.a)(["\nflex: 1 1 0;\n","\n"])),C({order:[0,1,1]})),on=z.a.div(Ae||(Ae=Object(S.a)(["\n  & > button {\n    margin-right: 5px;\n  }\n  display: flex;\n"]))),sn=z.a.div((function(){return C({flex:"1 1 0",order:[1,0,0],padding:["22px",0]})})),ln=z.a.p(Pe||(Pe=Object(S.a)(["\nmargin-top :0px;\n"]))),dn=function(){return Object(k.jsxs)(en,{children:[Object(k.jsxs)(sn,{children:[Object(k.jsx)(tn,{children:"Case Study"}),Object(k.jsxs)(nn,{children:["Created with KMMRCE: ",Object(k.jsx)(ln,{children:"Watch 1010"})]}),Object(k.jsx)(an,{children:"Disrupting and democratizing healthcare. Butterfly\u2019s ambitious, rapid global scale-out is only possible with the support of Saleor. Their incredible journey has already taken the company from a disruptive startup to Apple Design Awards Winner 2019"}),Object(k.jsxs)(on,{children:[Object(k.jsx)(w,{type:"buttonStyleDark",children:"View Case Study"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"View All"})]})]}),Object(k.jsx)(rn,{children:Object(k.jsx)(cn,{src:"/kmmrce-demo/image/image-7.svg"})})]})},jn=z.a.h2(We||(We=Object(S.a)(["\nfont-size: 40px;\nfont-weight :300\n"]))),mn=z.a.div(Re||(Re=Object(S.a)(["\n  ","\n  overflow: hidden;\n  display: flex;\n  margin-left:20px;\n"])),C({flexDirection:["column","row"]})),bn=z.a.div((function(){return C({flex:"1 1 0",marginTop:"20px"})})),pn=z.a.p(Be||(Be=Object(S.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal;\n font-size: 23px; \n color: rgba(172,172,172,1)\n"]))),un=z.a.p(Ee||(Ee=Object(S.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal; \nfont-size: 20px;\ntext-decoration : underline\n"]))),xn=z.a.p(Te||(Te=Object(S.a)(["\nfont-family:Yellix TRIAL; \nfont-weight: formal; \nfont-size: 32px; \ncolor: rgba(172,172,172,1)\n"]))),gn=z.a.div(Fe||(Fe=Object(S.a)(["\nmargin-top :20px;\nflex: 1 1 0;\n","\n"])),C({order:[0,1,1]})),hn=z.a.h1(Ke||(Ke=Object(S.a)(["\nfont-size : 24px;\nfont-weight :400\n"]))),On=z.a.img(Ne||(Ne=Object(S.a)(["\nwidth :100%\n"]))),fn=z.a.img(Ye||(Ye=Object(S.a)([""]))),vn=z.a.span(He||(He=Object(S.a)(["\nfont-size : 20px\n"]))),yn=z.a.br(Ve||(Ve=Object(S.a)([""]))),kn=function(){return Object(k.jsxs)(mn,{children:[Object(k.jsxs)(gn,{children:[Object(k.jsx)(hn,{children:"Duis aute irure dolor in reprehenderit in voluptate velit"}),Object(k.jsx)(hn,{children:"esse cillum dolore eu fugiat nulla pariatur."}),Object(k.jsx)(fn,{src:"/kmmrce-demo/image/tick.svg"}),Object(k.jsx)(vn,{children:"Sed manga enim"}),Object(k.jsx)(yn,{}),Object(k.jsx)(fn,{src:"/kmmrce-demo/image/tick.svg"}),Object(k.jsx)(vn,{children:"Bidendum a quam eu"}),Object(k.jsx)(On,{src:"/kmmrce-demo/image/project.jpeg"})]}),Object(k.jsxs)(bn,{children:[Object(k.jsx)(jn,{children:"Lorem ipsum dolor sit  amet, consectetur adipiscing elit, sed do"}),Object(k.jsx)(pn,{children:"Stay up to date with the feed"}),Object(k.jsx)(un,{children:"Keep track of projects"}),Object(k.jsx)(xn,{children:"Invite and view your team members"})]})]})},wn=z.a.div($e||($e=Object(S.a)(['\nbackground-image: url("/image/image-14.png");\nbackground-size: cover;\nbackground-blend-mode: overlay;\nbackground-color: #4B42AD;\ncolor: #fff;\nheight: 100vh;\ndisplay: flex;\nalign-items: center; \n']))),Sn=z.a.div(Je||(Je=Object(S.a)(["\n\n"]))),zn=function(){return Object(k.jsx)(wn,{children:Object(k.jsx)(Sn,{children:Object(k.jsx)(W,{title:"Super Merchants",description:"Multisite, made easy.",subtitle:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim.Nunc lobortis, augue non pulvinar consequat, enim massa pharetra neque.",children:Object(k.jsx)(w,{type:"buttonStyleWhite",children:"Explore Super Merchants"})})})})},qn=[{icon:"/image/image-16.svg",title:"24/7 Tech Suppport",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"},{icon:"/image/image-12.svg",title:"Loyalty Benefits",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"},{icon:"/image/image-13.svg",title:"Scalable Pricing",desc:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis"}],Dn=z.a.div(Qe||(Qe=Object(S.a)(["\n background: #1f1f1f;\n color: #fff;  \n"]))),Ln=z.a.div((function(e){return C({borderRight:"1px solid #acacac",padding:["32px"],borderBottom:["1px solid #acacac","none"],"&:last-child ":{border:"none"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"})})),Cn=z.a.div((function(e){return C({padding:[0,"0px 4px"],borderTop:"1px solid #acacac",display:"flex",flexDirection:["column","row"],justifyContent:"center",alignItems:"center"})})),In=z.a.span(Ue||(Ue=Object(S.a)(['\n  font-size: 19px;\n  font-family: "akkurat-monoregular";\n']))),Mn=z.a.span(Xe||(Xe=Object(S.a)(["\n  padding: 25px 0;\n  font-size: 19px;\n  display: inline-block;\n"]))),An=z.a.img(Ge||(Ge=Object(S.a)(["\n  margin-bottom: 9px;\n  width: 55px;\n"]))),Pn=z.a.div(Ze||(Ze=Object(S.a)(["\nmargin-left : 20px\n"]))),Wn=function(){return Object(k.jsxs)(Dn,{children:[Object(k.jsx)(Pn,{children:Object(k.jsx)(W,{title:"Serving Our Customers",description:"Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis, Praesent commodo velit eget urna mollis dignissim.",alignLeft:!0})}),Object(k.jsx)(Cn,{children:qn.map((function(e){var t=e.icon,n=e.title,i=e.desc;return Object(k.jsxs)(Ln,{children:[Object(k.jsx)(An,{src:"/kmmrce-demo"+t,alt:n}),Object(k.jsx)(In,{children:n}),Object(k.jsx)(Mn,{children:i}),Object(k.jsx)(w,{type:"buttonStyleWhite",children:"Request Demo"})]},n)}))})]})},Rn=z.a.div(_e||(_e=Object(S.a)(["\n  background: #f5f5f5;\n"]))),Bn=[{icon:"/image/image10.svg",title:"Standard"},{icon:"/image/image-9.svg",title:"Professional"},{icon:"/image/image-8.svg",title:"Enterprise"}],En={coreFeatures:[{title:"Sed mgna enim",standard:!0,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!1,professional:!1,enteprise:!0},{title:"Commodo Consecteteur",standard:!0,professional:!0,enteprise:!0},{title:"Eu dolor luctus",standard:!0,professional:!0,enteprise:!0},{title:"Sed magna enim",standard:!1,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!0,professional:!0,enteprise:!0}],teamSupport:[{title:"Sed mgna enim",standard:!0,professional:!0,enteprise:!0},{title:"Bibendum a quam eu",standard:!1,professional:!1,enterprise:!0},{title:"Commodo Consecteteur",standard:!0,professional:!0,enterprise:!0},{title:"Eu dolor luctus",standard:!0,professional:!0,enterprise:!0},{title:"Sed magna enim",standard:!1,professional:!0,enterprise:!0},{title:"Bibendum a quam eu",standard:!0,professional:!0,enterprise:!0}]},Tn=z.a.th((function(){return C({display:["none","block"],width:["100%","25%"]})})),Fn=z.a.tbody(et||(et=Object(S.a)([""]))),Kn=z.a.table(tt||(tt=Object(S.a)(["\n  width: 100%;\n"]))),Nn=z.a.tr((function(){return C({padding:[0,"16px"],"&:first-child":{borderBottom:"none"},"&:last-child":{borderBottom:"none"},display:"flex",flexDirection:["column","row"],borderBottom:"1px solid #acacac"})})),Yn=(z.a.img(nt||(nt=Object(S.a)([""]))),z.a.h4(it||(it=Object(S.a)(["\n  font-size: 0px;\n  padding-bottom:16px;\n  padding-top: 4px;\n\n"])))),Hn=z.a.h4(at||(at=Object(S.a)(["\n  border-bottom: 1px solid #acacac;\n  font-weight: 500;\n  font-size:22px;\n  padding:16px;\n"]))),Vn=z.a.h3(ct||(ct=Object(S.a)(["\n  font-size: 16px;\n  padding-top: 4px;\n  padding-bottom: 16px;\n"]))),$n=z.a.div(rt||(rt=Object(S.a)(["\n  flex: 2;\n  display: flex;\n"]))),Jn=z.a.img(ot||(ot=Object(S.a)([""]))),Qn=z.a.td((function(e){return C({"&:first-child":{textAlign:"left",marginTop:["4px"]},textAlign:"center",marginTop:["4px"],flex:["100%","1"],marginBottom:["8px"]})})),Un=z.a.span(st||(st=Object(S.a)(["\n  display: block;\n  font-size: 24px;\n  padding-bottom: 4px;\n"]))),Xn=function(){var e=ie(),t=e.isLaptop,n=e.isMobile;return Object(k.jsxs)(Kn,{children:[Object(k.jsxs)(Nn,{children:[Object(k.jsx)(Tn,{}),Bn.map((function(e){var n=e.icon,i=e.title;return Object(k.jsxs)(Tn,{children:[Object(k.jsx)(Jn,{src:"/kmmrce-demo"+n}),Object(k.jsx)(Vn,{children:i}),t&&Object(k.jsx)(w,{type:"buttonStyleDark",children:"Request Demo"})]},n)}))]}),Object(k.jsxs)(Fn,{children:[Object(k.jsx)(Hn,{children:"Core Features"}),En.coreFeatures.map((function(e){var t=e.title,i=e.standard,a=e.professional,c=e.enterprise;return Object(k.jsxs)(Nn,{children:[Object(k.jsx)(Qn,{children:t},t),Object(k.jsxs)($n,{children:[Object(k.jsxs)(Qn,{children:[n&&Object(k.jsx)(Yn,{children:"is Standard"}),i?Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Qn,{children:[n&&Object(k.jsx)(Yn,{children:"is Professional"}),a?Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Qn,{children:[n&&Object(k.jsx)(Yn,{children:"is Enterprise"}),c?Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/null.svg"})]})]})]},t)})),Object(k.jsx)(Hn,{children:"Team Support"}),En.teamSupport.map((function(e){var t=e.title,i=e.standard,a=e.professional,c=e.enterprise;return Object(k.jsxs)(Nn,{children:[Object(k.jsx)(Qn,{children:t},t),Object(k.jsxs)($n,{children:[Object(k.jsxs)(Qn,{children:[n&&Object(k.jsx)(Yn,{children:"is Standard"}),i?Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Qn,{children:[n&&Object(k.jsx)(Yn,{children:"is Professional"}),a?Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/null.svg"})]}),Object(k.jsxs)(Qn,{children:[n&&Object(k.jsx)(Yn,{children:"is Enterprise"}),c?Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/tick.svg"}):Object(k.jsx)(Jn,{src:"/kmmrce-demo/image/null.svg"})]})]})]})})),t&&Object(k.jsxs)(Nn,{children:[Object(k.jsx)(Qn,{}),Object(k.jsxs)(Qn,{children:[Object(k.jsx)(Un,{children:"$100/month"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"Select this plan"})]}),Object(k.jsxs)(Qn,{children:[Object(k.jsx)(Un,{children:"$2000/month"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"Select this plan"})]}),Object(k.jsxs)(Qn,{children:[Object(k.jsx)(Un,{children:"$3,500/month"}),Object(k.jsx)(w,{type:"buttonStyleDark",children:"Select this plan"})]})]})]})]})},Gn=function(){return Object(k.jsx)(Rn,{children:Object(k.jsx)(D,{children:Object(k.jsx)(W,{title:"Features & Solutions",description:"consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent  commodo velit eget urna mollis dignissim.",alignLeft:!0,children:Object(k.jsx)(Xn,{})})})})},Zn=function(){return Object(k.jsx)(D,{children:Object(k.jsx)(W,{description:"Ready to grow your business?",children:Object(k.jsx)(w,{type:"lightColor",children:"Request Demo"})})})},_n=z.a.div(lt||(lt=Object(S.a)(["\n  padding: 24px 0;\n  background: #1f1f1f;\n"]))),ei=z.a.div(dt||(dt=Object(S.a)(["\n  display: flex;\n  ","\n  align-items: flex-start;\n  justify-content: space-between;\n"])),C({flexDirection:["column","row"]})),ti=z.a.div(jt||(jt=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),ni=z.a.img(mt||(mt=Object(S.a)(["\n  width: 35px;\n"]))),ii=z.a.div(bt||(bt=Object(S.a)(["\n font-weight: 500; \n color: #fff;\n  padding-bottom: 4px;\n"]))),ai=z.a.div((function(e){return C({marginRight:["16px","32px"],marginTop:["32px",0],marginLeft:[0,"32px"]})})),ci=z.a.a(pt||(pt=Object(S.a)(["\n  text-decoration: none;\n  color: #acacac;\n  padding-bottom: 4px;\n  display: block;\n"]))),ri=z.a.div(ut||(ut=Object(S.a)(['\n  color: "#acacac;\n']))),oi={items:[{id:1,title:"Product",links:[{id:6,title:"Home",url:"/home"},{id:1,title:"About",url:"/about"},{id:4,title:"Tech Stack",url:"/techStack"},{id:5,title:"Super Merchants",url:"/superMerchants"},{id:2,title:"Pricing",url:"/pricing"},{id:3,title:"Partners",url:"/partners"}]},{id:2,title:"About Us",links:[{id:7,title:"About",url:"/about"},{id:13,title:"Sectors",url:"/sectors"},{id:14,title:"Careers",url:"/careers"},{id:15,title:"Contact",url:"/contact"}]},{id:3,title:"Dolore",links:[{id:8,title:"Voluptate",url:"/voluptate"},{id:9,title:"Cillum",url:"/cillum"},{id:10,title:"Pariatur",url:"/pariatur"},{id:11,title:"Nulla",url:"/nulla"},{id:12,title:"Irura",url:"/irura"}]},{id:4,title:"Tertiary",links:[{id:16,title:"Privacy Policy",url:"/privacy"},{id:17,title:"Terms & Conditions",url:"/terms"},{id:18,title:"Cookie Policy",url:"/policy"}]}]},si=function(){return Object(k.jsx)(_n,{children:Object(k.jsx)(D,{children:Object(k.jsxs)(ei,{children:[Object(k.jsx)(ni,{src:"/kmmrce-demo/image/logo1.svg",alt:"KMMRCE logo"}),Object(k.jsx)(ti,{children:oi.items.map((function(e){var t=e.title,n=e.links;return Object(k.jsxs)(ai,{children:[Object(k.jsx)(ii,{children:t}),Object(k.jsx)(ri,{children:n.map((function(e){var t=e.title,n=e.url;return Object(k.jsx)(ci,{href:n,children:t},t)}))})]},t)}))})]})})})};var li=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(ht,{}),Object(k.jsx)(qt,{}),Object(k.jsx)(Mt,{id:"superMerchants"}),Object(k.jsx)($t,{}),Object(k.jsx)(_t,{}),Object(k.jsx)(dn,{id:"docs"}),Object(k.jsx)(zn,{id:"superMerchants"}),Object(k.jsx)(Wn,{}),Object(k.jsx)(kn,{}),Object(k.jsx)($t,{}),Object(k.jsx)(Gn,{id:"pricing"}),Object(k.jsx)(Zn,{}),Object(k.jsx)(si,{})]})};v.a.render(Object(k.jsx)(li,{}),document.getElementById("root"))},43:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.91ec8798.chunk.js.map