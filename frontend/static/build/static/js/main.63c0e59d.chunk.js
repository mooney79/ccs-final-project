(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(20),c=n.n(r),o=(n(29),n(13)),i=n(8),l=n.n(i),u=n(10),j=n(11),d=n(2),m=n(9),b=n.n(m),h=n(24),p=n(14),f=n(5),x=n(0);var O=Object(d.h)((function(e){var t=Object(s.useState)({username:"",password:""}),n=Object(j.a)(t,2),a=n[0],r=n[1];function c(e){var t=e.target,n=t.name,s=t.value;r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(p.a)({},n,s))}))}function o(e){console.warn(e)}function i(){return(i=Object(u.a)(l.a.mark((function t(n){var s,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(a)},t.next=4,fetch("/rest-auth/login/",s).catch(o);case 4:if(r=t.sent){t.next=9;break}console.log(r),t.next=14;break;case 9:return t.next=11,r.json();case 11:c=t.sent,b.a.set("Authorization","Token ".concat(c.key)),e.setIsAuth(!0);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth?Object(x.jsx)(d.a,{to:"/"}):Object(x.jsx)("div",{className:"form-container",children:Object(x.jsxs)("form",{className:"mt-3 col-6 login-form",onSubmit:function(e){return i.apply(this,arguments)},children:[Object(x.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",onChange:c,required:!0,name:"username",value:a.username})]}),Object(x.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(x.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",onChange:c,required:!0,name:"password",value:a.password1})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Log in"}),Object(x.jsxs)("p",{className:"text-center",children:["Not  a member?  Click ",Object(x.jsx)("a",{href:"/register",children:"here"})," to register."]})]})})}));var v=function(e){var t=Object(s.useState)({username:"",email:"",password1:"",password2:""}),n=Object(j.a)(t,2),a=n[0],r=n[1];function c(e){var t=e.target,n=t.name,s=t.value;r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(p.a)({},n,s))}))}var o=Object(s.useState)(null),i=Object(j.a)(o,2),d=i[0],m=i[1];function h(e){console.warn(e)}function O(){return(O=Object(u.a)(l.a.mark((function t(n){var s,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a.password1===a.password2){t.next=5;break}m("Passwords do not match!"),t.next=18;break;case 5:return s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(a)},t.next=8,fetch("/rest-auth/registration/",s).catch(h);case 8:if(r=t.sent){t.next=13;break}console.log(r),t.next=18;break;case 13:return t.next=15,r.json();case 15:c=t.sent,b.a.set("Authorization","Token ".concat(c.key)),e.setIsAuth(!0);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"form-container",children:Object(x.jsxs)("form",{className:"mt-3 col-6 register-form",onSubmit:function(e){return O.apply(this,arguments)},children:[Object(x.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",onChange:c,required:!0,name:"username",value:a.username})]}),Object(x.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"email",placeholder:"Enter E-mail",onChange:c,required:!0,name:"email",value:a.email})]}),Object(x.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(x.jsx)("label",{htmlFor:"password1",children:"Password:"}),Object(x.jsx)("input",{type:"password",className:"form-control",id:"password1",placeholder:"Enter Password",onChange:c,required:!0,name:"password1",value:a.password1})]}),Object(x.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(x.jsx)("label",{htmlFor:"password2",children:"Confirm Password:"}),Object(x.jsx)("input",{type:"password",className:"form-control",id:"password2",placeholder:"Re-enter password",onChange:c,required:!0,name:"password2",value:a.password2}),d&&Object(x.jsxs)("span",{className:"text-danger",children:[" ",d]})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Register"})]})})};n(37);var g=function(e){var t,n,s=function(){var t=Object(u.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(e.user)},t.next=3,fetch("/rest-auth/logout/",n);case 3:(s=t.sent)?(b.a.remove("Authorization"),b.a.remove("SessionID"),e.setIsAuth(!1)):console.log(s);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.isAuth?(n=Object(x.jsxs)("p",{children:["User ID: ",e.userID]}),t=Object(x.jsx)("div",{className:"welcome-page-log-button",onClick:s,children:"Logout"})):(n=Object(x.jsx)(x.Fragment,{}),t=Object(x.jsx)("div",{className:"welcome-page-log-button",onClick:function(){return e.history.push("/login")},children:"Login"})),Object(x.jsxs)("div",{className:"welcome-container",children:[Object(x.jsx)("h1",{className:"fp-h1",children:" Welcome Page! "}),Object(x.jsx)("p",{className:"fp-p",children:" Blank(ish) Landing Page "}),n,t,Object(x.jsx)(o.b,{to:"/wellinfo",children:" Well Info Preview"})]})};var w=function(e){return Object(x.jsxs)("div",{className:"well-container",children:[Object(x.jsxs)("div",{className:"well-info",children:["I'm a well!",Object(x.jsxs)("button",{onClick:function(){var e=document.getElementById("popup");"none"===e.style.display?e.style.display="block":e.style.display="none"},children:["  Plat Button",Object(x.jsx)("i",{class:"far fa-image"})," "]}),Object(x.jsx)("div",{id:"popup",className:"plat-pop-up",children:" I'm a PLAT!"})]}),Object(x.jsx)("div",{className:"canvas-frame",children:Object(x.jsx)("canvas",{id:"canvas",width:"25vw",height:"90vh"})})]})};var y=function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(null),c=Object(j.a)(r,2),o=c[0],i=c[1],m=Object(d.g)();return Object(s.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user/",{headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")}});case 2:if((t=e.sent).ok){e.next=7;break}a(!1),e.next=14;break;case 7:return e.next=9,t.json();case 9:n=e.sent,s=n.pk,a(!0),i(s),m.push("");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m,n]),null===n?Object(x.jsx)(h.a,{animation:"grow",variant:"primary"}):Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{path:"/register",children:Object(x.jsx)(v,{isAuth:n,setIsAuth:a})}),Object(x.jsx)(d.b,{path:"/login",children:Object(x.jsx)(O,{isAuth:n,setIsAuth:a})}),Object(x.jsx)(d.b,{path:"/wellinfo",children:Object(x.jsx)(w,{})}),Object(x.jsx)(d.b,{path:"",children:Object(x.jsx)(g,{isAuth:n,setIsAuth:a,userID:o,history:m})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};n(38);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(o.a,{children:Object(x.jsx)(y,{})})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.63c0e59d.chunk.js.map