(this["webpackJsonpgoit-react-hw-07-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-07-hooks-phonebook"]||[]).push([[4],{247:function(e,t,a){"use strict";var n=a(90),o=a(2);t.a=Object(n.a)(Object(o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},248:function(e,t,a){"use strict";var n=a(90),o=a(2);t.a=Object(n.a)(Object(o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},249:function(e,t,a){"use strict";var n=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(47)),r=a(2),i=(0,o.default)((0,r.jsx)("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg");t.default=i},268:function(e,t,a){"use strict";a.r(t);var n,o,r,i,s=a(14),c=a(0),l=a(22),d=a(26),b=a(20),j=a(40),u=a(251),p=a(271),x=Object(j.a)(u.a)(n||(n=Object(b.a)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]))),O=j.a.form(o||(o=Object(b.a)(["\n  //   width: 300px;\n  //   margin-left: auto;\n  //   margin-right: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),f=Object(j.a)(p.a)(r||(r=Object(b.a)(["\n  display: flex;\n  margin: 10px auto 0 auto;\n  border-radius: 10px;\n  font-size: 12px;\n  background-color: #528ffe;\n  color: #fff;\n\n  :hover {\n    transform: scale(1.1);\n    background-color: #528ffe;\n  }\n"]))),m=a(228),h=a(275),g=a(270),v=a(272),w=a(224),y=a(173),C=a(247),k=a(248),z=a(249),M=a.n(z),S=a(25),P=a(2),D=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),i=r[0],b=r[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),p=u[0],z=u[1],D=Object(c.useState)(!1),R=Object(s.a)(D,2),F=R[0],q=R[1],A=Object(c.useState)(""),J=Object(s.a)(A,2),L=J[0],V=J[1],_=Object(c.useState)(!1),E=Object(s.a)(_,2),H=E[0],I=E[1],N=p===L,T=Object(d.b)(),U=function(e){e.preventDefault()};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(x,{variant:"h6",component:"h3",children:"Registration form"}),Object(P.jsxs)(O,{onSubmit:function(e){if(!N)return e.preventDefault(),S.a.error("Password not the same");e.preventDefault(),T(l.a.signUp({name:a,email:i,password:p})),n(""),b(""),z(""),V("")},sx:{width:"100%"},children:[Object(P.jsx)(m.a,{sx:{mt:1},id:"name",name:"name",label:"Name",type:"text",variant:"outlined",margin:"normal",value:a,onChange:function(e){return n(e.target.value)},required:!0,autoComplete:"off"}),Object(P.jsx)(m.a,{sx:{mt:1},id:"email",name:"email",label:"Email",type:"text",variant:"outlined",margin:"normal",value:i,onChange:function(e){return b(e.target.value)},required:!0,autoComplete:"off"}),Object(P.jsxs)(h.a,{sx:{mt:1},variant:"outlined",children:[Object(P.jsx)(g.a,{htmlFor:"password",children:"Password"}),Object(P.jsx)(v.a,{id:"password",type:F?"text":"password",value:p,onChange:function(e){return z(e.target.value)},endAdornment:Object(P.jsx)(w.a,{position:"end",children:Object(P.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){q(!F)},onMouseDown:U,edge:"end",children:F?Object(P.jsx)(C.a,{}):Object(P.jsx)(k.a,{})})}),label:"Password"})]}),Object(P.jsxs)(h.a,{sx:{mt:2},variant:"outlined",children:[Object(P.jsx)(g.a,{htmlFor:"repeatPassword",children:"Repeat password"}),Object(P.jsx)(v.a,{id:"repeatPassword",type:H?"text":"password",value:L,onChange:function(e){return V(e.target.value)},endAdornment:Object(P.jsx)(w.a,{position:"end",children:Object(P.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){I(!H)},onMouseDown:U,edge:"end",children:H?Object(P.jsx)(C.a,{}):Object(P.jsx)(k.a,{})})}),label:"Repeat password"})]}),Object(P.jsx)(f,{variant:"contained",type:"submit",endIcon:Object(P.jsx)(M.a,{}),children:"Sign up"})]})]})},R=a(201),F=Object(j.a)(R.a)(i||(i=Object(b.a)(["\n  width: 95%;\n  max-width: 400px;\n  margin: 20px auto;\n  padding: 10px;\n  border: 1px solid rgb(88, 88, 220);\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px 20px rgba(255, 255, 255, 0.2);\n"])));t.default=function(){return Object(P.jsx)(F,{children:Object(P.jsx)(D,{})})}}}]);
//# sourceMappingURL=RegisterPage.375724e5.chunk.js.map