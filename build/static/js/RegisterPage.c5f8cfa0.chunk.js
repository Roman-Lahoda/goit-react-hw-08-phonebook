(this["webpackJsonpgoit-react-hw-07-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-07-hooks-phonebook"]||[]).push([[3],{86:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(34);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){r=!0,s=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw s}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},92:function(e,t,a){e.exports={title:"RegistrationForm_title__2qcOQ",form:"RegistrationForm_form__2BHjb",label:"RegistrationForm_label__b5_Pn",input:"RegistrationForm_input__2fgYU",btn:"RegistrationForm_btn__1pdjf"}},93:function(e,t,a){e.exports={box:"RegisterPage_box__tHOag"}},98:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a(0),s=a(6),o=a(12),i=a(92),c=a.n(i),l=a(1),b=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],i=t[1],b=Object(r.useState)(""),u=Object(n.a)(b,2),m=u[0],p=u[1],j=Object(r.useState)(""),h=Object(n.a)(j,2),d=h[0],f=h[1],O=Object(o.b)(),g=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":i(n);break;case"email":p(n);break;case"password":f(n);break;default:return}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:c.a.title,children:"Registration"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(s.a.signUp({name:a,email:m,password:d})),i(""),p(""),f("")},children:[Object(l.jsxs)("label",{className:c.a.label,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:a,onChange:g,placeholder:"name",className:c.a.input})]}),Object(l.jsxs)("label",{className:c.a.label,children:["Email",Object(l.jsx)("input",{type:"email",name:"email",value:m,onChange:g,placeholder:"email",className:c.a.input})]}),Object(l.jsxs)("label",{className:c.a.label,children:["Password",Object(l.jsx)("input",{type:"password",name:"password",value:d,onChange:g,placeholder:"password",className:c.a.input})]}),Object(l.jsx)("button",{type:"submit",className:c.a.btn,children:"Sign up"})]})]})},u=a(93),m=a.n(u);t.default=function(){return Object(l.jsx)("div",{className:m.a.box,children:Object(l.jsx)(b,{})})}}}]);
//# sourceMappingURL=RegisterPage.c5f8cfa0.chunk.js.map