(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{36:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(26),r=n.n(c),l=(n(36),n(15)),i=n(2),o=n.n(i),d=n(7),u=n(8),j=n(6),h=n(5),p=n.n(h),b=n(14),m=n(10),x=n(4),O=n(0);var g=Object(j.h)((function(e){var t=Object(a.useState)({username:"",password:""}),n=Object(u.a)(t,2),s=n[0],c=n[1];function r(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},n,a))}))}function l(e){console.warn(e)}function i(){return(i=Object(d.a)(o.a.mark((function t(n){var a,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(s)},t.next=4,fetch("/rest-auth/login/",a).catch(l);case 4:if(c=t.sent){t.next=9;break}console.log(c),t.next=14;break;case 9:return t.next=11,c.json();case 11:r=t.sent,p.a.set("Authorization","Token ".concat(r.key)),e.setIsAuth(!0);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth?Object(O.jsx)(j.a,{to:"/"}):Object(O.jsx)("div",{className:"form-container",children:Object(O.jsxs)("form",{className:"mt-3 col-6 login-form",onSubmit:function(e){return i.apply(this,arguments)},children:[Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",onChange:r,required:!0,name:"username",value:s.username})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",onChange:r,required:!0,name:"password",value:s.password1})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Log in"}),Object(O.jsxs)("p",{className:"text-center",children:["Not  a member?  Click ",Object(O.jsx)("a",{href:"/register",children:"here"})," to register."]})]})})}));var f=function(e){var t=Object(a.useState)({username:"",email:"",password1:"",password2:""}),n=Object(u.a)(t,2),s=n[0],c=n[1];function r(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},n,a))}))}var l=Object(a.useState)(null),i=Object(u.a)(l,2),j=i[0],h=i[1];function b(e){console.warn(e)}function g(){return(g=Object(d.a)(o.a.mark((function t(n){var a,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),s.password1===s.password2){t.next=5;break}h("Passwords do not match!"),t.next=18;break;case 5:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(s)},t.next=8,fetch("/rest-auth/registration/",a).catch(b);case 8:if(c=t.sent){t.next=13;break}console.log(c),t.next=18;break;case 13:return t.next=15,c.json();case 15:r=t.sent,p.a.set("Authorization","Token ".concat(r.key)),e.setIsAuth(!0);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(O.jsx)("div",{className:"form-container",children:Object(O.jsxs)("form",{className:"mt-3 col-6 register-form",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",onChange:r,required:!0,name:"username",value:s.username})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"email",placeholder:"Enter E-mail",onChange:r,required:!0,name:"email",value:s.email})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"password1",children:"Password:"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password1",placeholder:"Enter Password",onChange:r,required:!0,name:"password1",value:s.password1})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"password2",children:"Confirm Password:"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password2",placeholder:"Re-enter password",onChange:r,required:!0,name:"password2",value:s.password2}),j&&Object(O.jsxs)("span",{className:"text-danger",children:[" ",j]})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Register"})]})})};n(43);var v=function(e){var t=e.id,n="".concat(t),a=Object(j.g)(),s=function(){var n=Object(d.a)(o.a.mark((function n(){var s,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/wells/".concat(t,"/"),{headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")}});case 2:if((s=n.sent).ok){n.next=7;break}console.log("Error fetching well"),n.next=12;break;case 7:return n.next=9,s.json();case 9:c=n.sent,e.setWell(c),a.push("/wellinfo/".concat(t));case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.jsxs)("li",{className:"ListItem",id:n,children:[Object(O.jsxs)("p",{className:"list-p",children:[e.lease," ",e.well_number]})," ",Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"bold-span",children:"API:"})," ",e.API_number," "]})," ",Object(O.jsx)("button",{onClick:function(e){e.target.parentElement.id,s()},className:"li-button",children:"Select"})]})};var N=function(e){var t,n=Object(a.useState)([]),s=Object(u.a)(n,2),c=s[0],r=s[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/wells/user/",{headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")}});case 2:if((t=e.sent).ok){e.next=7;break}console.log("Error fetching wells"),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,r(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),t=c!==[]?c.map((function(t){return Object(O.jsx)(v,Object(x.a)(Object(x.a)({},t),{},{wellList:c,setWellList:r,setWell:e.setWell}),t.id+9e3)})):Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)(b.a,{animation:"grow",variant:"primary"}),Object(O.jsx)("p",{children:"Loading..."})]}),Object(O.jsxs)("div",{className:"well-list-container",children:[Object(O.jsx)("p",{children:Object(O.jsx)("span",{className:"bold-span",children:" Your wells: "})}),Object(O.jsxs)("ul",{className:"well-ul",children:[t,Object(O.jsx)("li",{className:"ListItem",id:"new-well",children:Object(O.jsx)("button",{className:"list-p li-button",onClick:function(){console.log("create a new Well!")},children:" Add New Well"})})]})]})};var w=function(e){var t,n=function(){var t=Object(d.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(e.user)},t.next=3,fetch("/rest-auth/logout/",n);case 3:(a=t.sent)?(p.a.remove("Authorization"),p.a.remove("SessionID"),e.setIsAuth(!1)):console.log(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.isAuth?(Object(O.jsxs)("p",{children:["User ID: ",e.userID]}),t=Object(O.jsx)("div",{className:"welcome-page-log-button",onClick:n,children:"Logout"})):(Object(O.jsx)(O.Fragment,{}),t=Object(O.jsx)("div",{className:"welcome-page-log-button",onClick:function(){return e.history.push("/login")},children:"Login"})),Object(O.jsxs)("div",{className:"welcome-container",children:[Object(O.jsxs)("h1",{className:"fp-h1 text-center",children:[" Welcome back, ",e.userName,"! "]}),Object(O.jsx)(N,{setWell:e.setWell,well:e.well}),t]})},C=n(17),y=n(30),k=n(31);var B=function(e){return Object(O.jsxs)("div",{className:"well-hole",children:[Object(O.jsx)("p",{children:"Hole Size:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleHoleChange,onBlur:e.handleHoleBlur,name:"hole_size",className:"input-hidden",value:e.hole_size}),Object(O.jsx)("p",{children:"Starting Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleHoleChange,onBlur:e.handleHoleBlur,name:"starting_depth",className:"input-hidden",value:e.starting_depth}),Object(O.jsx)("p",{children:"Ending Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleHoleChange,onBlur:e.handleHoleBlur,name:"ending_depth",className:"input-hidden",value:e.ending_depth}),Object(O.jsx)("hr",{})]})};var _=function(e){var t;return"lrg"===e.gauge?t='13 3/8"':"med"===e.gauge?t='9 5/8"':"sml"===e.gauge&&(t='5 1/2"'),Object(O.jsxs)("div",{className:"well-casing",children:[Object(O.jsx)("p",{children:"Casing Gauge:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCasingChange,onBlur:e.handleCasingBlur,name:"gauge",className:"input-hidden",value:t}),Object(O.jsx)("p",{children:"Casing Weight:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCasingChange,onBlur:e.handleCasingBlur,name:"casing_weight",className:"input-hidden",value:e.casing_weight}),Object(O.jsx)("p",{children:"Casing Grading:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCasingChange,onBlur:e.handleCasingBlur,name:"casing_grading",className:"input-hidden",value:e.casing_grading}),Object(O.jsx)("p",{children:"Starting Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCasingChange,onBlur:e.handleCasingBlur,name:"starting_depth",className:"input-hidden",value:e.starting_depth}),Object(O.jsx)("p",{children:"Ending Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCasingChange,onBlur:e.handleCasingBlur,name:"ending_depth",className:"input-hidden",value:e.ending_depth}),Object(O.jsx)("hr",{})]})};var S=function(e){return Object(O.jsxs)("div",{className:"well-cement",children:[Object(O.jsx)("p",{children:"Cement Type:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCementChange,onBlur:e.handleCementBlur,name:"cement_type",className:"input-hidden",value:e.cement_type}),Object(O.jsx)("p",{children:"Sacks Pumped: "}),Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCementChange,onBlur:e.handleCementBlur,name:"sacks_pumped",className:"input-hidden",value:e.sacks_pumped}),Object(O.jsx)("p",{children:"Starting Depth: "}),Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCementChange,onBlur:e.handleCementBlur,name:"starting_depth",className:"input-hidden",value:e.starting_depth}),Object(O.jsx)("p",{children:"Ending Depth: "}),Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handleCementChange,onBlur:e.handleCementBlur,name:"ending_depth",className:"input-hidden",value:e.ending_depth}),Object(O.jsx)("hr",{})]})};var P=function(e){return Object(O.jsxs)("div",{className:"well-perfs",children:[Object(O.jsx)("p",{children:"Perforation Interval:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePerforationChange,onBlur:e.handlePerforationBlur,name:"perforation_interval",className:"input-hidden",value:e.perforation_interval}),Object(O.jsx)("p",{children:"Total Holes:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePerforationChange,onBlur:e.handlePerforationBlur,name:"perforation_total_holes",className:"input-hidden",value:e.perforation_total_holes}),Object(O.jsx)("p",{children:"Starting Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePerforationChange,onBlur:e.handlePerforationBlur,name:"starting_depth",className:"input-hidden",value:e.starting_depth}),Object(O.jsx)("p",{children:"Ending Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePerforationChange,onBlur:e.handlePerforationBlur,name:"ending_depth",className:"input-hidden",value:e.ending_depth}),Object(O.jsx)("hr",{})]})};var T=function(e){return Object(O.jsxs)("div",{className:"well-plug",children:[Object(O.jsx)("p",{children:"Cement Type:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePlugChange,onBlur:e.handlePlugBlur,name:"cement_type",className:"input-hidden",value:e.cement_type}),Object(O.jsx)("p",{children:"Sacks Pumped:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePlugChange,onBlur:e.handlePlugBlur,name:"sacks_pumped",className:"input-hidden",value:e.sacks_pumped}),Object(O.jsx)("p",{children:"Starting Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePlugChange,onBlur:e.handlePlugBlur,name:"starting_depth",className:"input-hidden",value:e.starting_depth}),Object(O.jsx)("p",{children:"Ending Depth:"})," ",Object(O.jsx)("input",{id:e.id,type:"text",onChange:e.handlePlugChange,onBlur:e.handlePlugBlur,name:"ending_depth",className:"input-hidden",value:e.ending_depth}),Object(O.jsx)("hr",{})]})};var A=Object(j.h)((function(e){var t,n,s,c,r,l=Object(O.jsx)(y.a,{icon:k.a,size:"2x"}),i=Object(a.useState)([]),j=Object(u.a)(i,2),h=(j[0],j[1]),g=Object(a.useState)([]),f=Object(u.a)(g,2),v=f[0],N=f[1],w=Object(a.useState)([]),A=Object(u.a)(w,2),F=A[0],I=A[1],E=Object(a.useState)([]),L=Object(u.a)(E,2),D=L[0],H=L[1],R=Object(a.useState)([]),W=Object(u.a)(R,2),X=W[0],J=W[1],z=Object(a.useState)([]),q=Object(u.a)(z,2),G=q[0],U=q[1],M=function(t){var n=t.target,a=n.name,s=n.value;e.setWell(Object(x.a)(Object(x.a)({},e.well),{},Object(m.a)({},a,s)))};function K(e){return Y.apply(this,arguments)}function Y(){return Y=Object(d.a)(o.a.mark((function t(n){var a,s,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target.name,s=n.target.value,console.log(n.target),c={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(Object(m.a)({},a,s))},t.next=6,fetch("/api/wells/".concat(e.match.params.id,"/"),c);case 6:return r=t.sent,t.next=9,r.json();case 9:t.sent,console.log(a,s);case 11:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}Object(a.useEffect)((function(){var t=function(){var t=Object(d.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/wells/".concat(e.match.params.id,"/"),{headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")}});case 2:if((n=t.sent).ok){t.next=7;break}console.log("Error fetching well"),t.next=11;break;case 7:return t.next=9,n.json();case 9:a=t.sent,e.setWell(a);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(d.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/wells/".concat(e.match.params.id,"/features"),{headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")}});case 2:if((n=t.sent).ok){t.next=7;break}console.log("Error fetching well features"),t.next=17;break;case 7:return t.next=9,n.json();case 9:a=t.sent,h(a),N(a.holes),I(a.casings),H(a.cements),J(a.perforations),U(a.plugs),console.log(e);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),n()}),[]);var Q=function(e){var t=e.target,n=t.name,a=t.value,s=t.id,c=v.findIndex((function(e){return e.id===s}));c++;var r=Object(C.a)(v);r[c][n]=a,console.log(r),N(r),console.log(v)};function V(e){return Z.apply(this,arguments)}function Z(){return Z=Object(d.a)(o.a.mark((function e(t){var n,a,s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,a=t.target.name,s=t.target.value,console.log(t.target),console.log(t.target.id),console.log(n),c={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(Object(m.a)({},a,s))},e.next=9,fetch("/api/wells/holes/".concat(n,"/"),c);case 9:return r=e.sent,e.next=12,r.json();case 12:e.sent;case 13:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}t=v===[]?Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)(b.a,{animation:"grow",variant:"primary"}),Object(O.jsx)("p",{children:"Loading..."})]}):v.map((function(e){return Object(O.jsx)(B,Object(x.a)(Object(x.a)({},e),{},{setWellHoles:N,handleHoleChange:Q,handleHoleBlur:V}),e.id+1e3)}));var $=function(e){var t=e.target,n=t.name,a=t.value,s=t.id,c=F.findIndex((function(e){return e.id===s}));c++;var r=Object(C.a)(F);r[c][n]=a,I(r)};function ee(e){return te.apply(this,arguments)}function te(){return te=Object(d.a)(o.a.mark((function e(t){var n,a,s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,a=t.target.name,s=t.target.value,c={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(Object(m.a)({},a,s))},e.next=6,fetch("/api/wells/casings/".concat(n,"/"),c);case 6:return r=e.sent,e.next=9,r.json();case 9:e.sent;case 10:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}n=F!==[]?F.map((function(e){return Object(O.jsx)(_,Object(x.a)(Object(x.a)({},e),{},{handleCasingChange:$,handleCasingBlur:ee}),e.id+2e3)})):Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)(b.a,{animation:"grow",variant:"primary"}),Object(O.jsx)("p",{children:"Loading..."})]});var ne=function(e){var t=e.target,n=t.name,a=t.value,s=t.id,c=D.findIndex((function(e){return e.id===s}));c++;var r=Object(C.a)(D);r[c][n]=a,H(r)};function ae(e){return se.apply(this,arguments)}function se(){return se=Object(d.a)(o.a.mark((function e(t){var n,a,s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,a=t.target.name,s=t.target.value,c={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(Object(m.a)({},a,s))},e.next=6,fetch("/api/wells/cements/".concat(n,"/"),c);case 6:return r=e.sent,e.next=9,r.json();case 9:e.sent;case 10:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}s=D!==[]?D.map((function(e){return Object(O.jsx)(S,Object(x.a)(Object(x.a)({},e),{},{handleCementChange:ne,handleCementBlur:ae}),e.id+3e3)})):Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)(b.a,{animation:"grow",variant:"primary"}),Object(O.jsx)("p",{children:"Loading..."})]});var ce=function(e){var t=e.target,n=t.name,a=t.value,s=t.id,c=X.findIndex((function(e){return e.id===s}));c++;var r=Object(C.a)(X);r[c][n]=a,J(r)};function re(e){return le.apply(this,arguments)}function le(){return le=Object(d.a)(o.a.mark((function e(t){var n,a,s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,a=t.target.name,s=t.target.value,c={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(Object(m.a)({},a,s))},e.next=6,fetch("/api/wells/perforations/".concat(n,"/"),c);case 6:return r=e.sent,e.next=9,r.json();case 9:e.sent;case 10:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}c=X!==[]?X.map((function(e){return Object(O.jsx)(P,Object(x.a)(Object(x.a)({},e),{},{handlePerforationChange:ce,handlePerforationBlur:re}),e.id+4e3)})):Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)(b.a,{animation:"grow",variant:"primary"}),Object(O.jsx)("p",{children:"Loading..."})]});var ie,oe=function(e){var t=e.target,n=t.name,a=t.value,s=t.id,c=G.findIndex((function(e){return e.id===s}));c++;var r=Object(C.a)(G);r[c][n]=a,U(r)};function de(e){return ue.apply(this,arguments)}function ue(){return ue=Object(d.a)(o.a.mark((function e(t){var n,a,s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,a=t.target.name,s=t.target.value,c={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(Object(m.a)({},a,s))},e.next=6,fetch("/api/wells/plugs/".concat(n,"/"),c);case 6:return r=e.sent,e.next=9,r.json();case 9:e.sent;case 10:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}return r=G!==[]?G.map((function(e){return Object(O.jsx)(T,Object(x.a)(Object(x.a)({},e),{},{handlePlugChange:oe,handlePlugBlur:de}),e.id+5e3)})):Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)(b.a,{animation:"grow",variant:"primary"}),Object(O.jsx)("p",{children:"Loading..."})]}),ie=null!==e.well?Object(O.jsxs)("div",{className:"well-info",children:[Object(O.jsxs)("div",{className:"well-table-top row",children:[Object(O.jsx)("div",{className:"col-lg-8",children:Object(O.jsxs)("h2",{children:[e.well.lease," ",e.well.well_number," ",Object(O.jsx)("span",{className:"icon",onClick:function(){var e=document.getElementById("popup");"none"===e.style.display?e.style.display="block":e.style.display="none"},children:l})]})}),Object(O.jsx)("div",{id:"popup",className:"plat-pop-up",children:" I'm a PLAT!"}),Object(O.jsxs)("div",{className:"col-lg-4 text-right",children:[Object(O.jsx)("span",{className:"bold-span",children:"Last Updated: "}),function(){var t=e.well.updated_at,n=t.slice(0,4);return t.slice(5,7)+"/"+t.slice(9,10)+"/"+n}()]})]}),Object(O.jsxs)("div",{className:"well-table-id row",children:[Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"API Number: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"API_number",className:"input-hidden",value:e.well.API_number})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Company: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"company",className:"input-hidden",value:e.well.company})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Permit Number: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"permit_number",className:"input-hidden",value:e.well.permit_number})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Current Status: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"current_status",className:"input-hidden",value:e.well.current_status})]})]}),Object(O.jsxs)("div",{className:"well-table-location row",children:[Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Location: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"location",className:"input-hidden",value:e.well.location})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Section: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"section",className:"input-hidden",value:e.well.section})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Survey: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"survey",className:"input-hidden",value:e.well.survey})]}),Object(O.jsxs)("div",{className:"col-lg-3 county-state",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"bold-span",children:"County: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"county",className:"input-hidden county",value:e.well.county})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"bold-span",children:"State: "})," ",Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"state",className:"input-hidden state",value:e.well.state})]})]})]}),Object(O.jsxs)("div",{className:"well-table-field row",children:[Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Field: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"field",className:"input-hidden",value:e.well.field})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Initial Formation: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"initial_formation",className:"input-hidden",value:e.well.initial_formation})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Spud Date: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"spud_date",className:"input-hidden",value:e.well.spud_date})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Comp Date: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"completion_date",className:"input-hidden",value:e.well.completion_date})]})]}),Object(O.jsxs)("div",{className:"well-table-depths row mb-3",children:[Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Ground Level: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"ground_level",className:"input-hidden",value:e.well.ground_level})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Kelley Bushing: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"kelley_bushing",className:"input-hidden",value:e.well.kelley_bushing})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Derrick Floor: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"derrick_floor",className:"input-hidden",value:e.well.derrick_floor})]}),Object(O.jsxs)("div",{className:"col-lg-3",children:[Object(O.jsx)("span",{className:"bold-span",children:"Total Depth: "}),Object(O.jsx)("input",{type:"text",onChange:M,onBlur:K,name:"total_depth",className:"input-hidden",value:e.well.total_depth})]})]}),Object(O.jsxs)("div",{className:"labels row",children:[Object(O.jsxs)("div",{className:"hole-col col",children:[Object(O.jsx)("div",{className:"showme",children:Object(O.jsx)("p",{className:"label1",children:" HOLE"})}),Object(O.jsxs)("div",{className:"scroll-area",children:[t,Object(O.jsx)("button",{className:"new-feature-button",onClick:function(){console.log("create a new Hole!")},children:" Add New"})]})]}),Object(O.jsxs)("div",{className:"casing-col col",children:[Object(O.jsx)("div",{className:"showme",children:Object(O.jsx)("p",{className:"label2",children:"CASING"})}),Object(O.jsxs)("div",{className:"scroll-area",children:[n,Object(O.jsx)("button",{className:"new-feature-button",onClick:function(){console.log("create a new Casing!")},children:" Add New"})]})]}),Object(O.jsxs)("div",{className:"cement-col col",children:[Object(O.jsx)("div",{className:"showme",children:Object(O.jsx)("p",{className:"label3",children:"CEMENT"})}),Object(O.jsxs)("div",{className:"scroll-area",children:[s,Object(O.jsx)("button",{className:"new-feature-button",onClick:function(){console.log("create a new Cement!")},children:" Add New"})]})]}),Object(O.jsxs)("div",{className:"perf-col col",children:[Object(O.jsx)("div",{className:"showme",children:Object(O.jsx)("p",{className:"label4",children:"PERFORATIONS"})}),Object(O.jsxs)("div",{className:"scroll-area",children:[c,Object(O.jsx)("button",{className:"new-feature-button",onClick:function(){console.log("create a new Perf!")},children:" Add New"})]})]}),Object(O.jsxs)("div",{className:"plug-col col",children:[Object(O.jsx)("div",{className:"col showme",children:Object(O.jsx)("p",{className:"label5",children:"PLUGS"})}),Object(O.jsxs)("div",{className:"scroll-area",children:[r,Object(O.jsx)("button",{className:"new-feature-button",onClick:function(){console.log("create a new Plug!")},children:" Add New"})]})]})]})]}):Object(O.jsx)("div",{children:"Loading..."}),Object(O.jsxs)("div",{className:"well-container",children:[ie,Object(O.jsx)("div",{className:"canvas-frame",children:Object(O.jsx)("canvas",{id:"canvas",width:"25vw",height:"90vh"})})]})}));var F=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(null),r=Object(u.a)(c,2),l=r[0],i=r[1],h=Object(a.useState)(null),m=Object(u.a)(h,2),x=m[0],v=m[1],N=Object(j.g)(),C=Object(a.useState)(null),y=Object(u.a)(C,2),k=y[0],B=y[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user/",{headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")}});case 2:if((t=e.sent).ok){e.next=8;break}i(!1),N.push("/login"),e.next=16;break;case 8:return e.next=10,t.json();case 10:n=e.sent,a=n.pk,c=n.username,i(!0),v(a),s(c);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[N,l]),null===l?Object(O.jsx)(b.a,{animation:"grow",variant:"primary"}):Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{path:"/register",children:Object(O.jsx)(f,{isAuth:l,setIsAuth:i})}),Object(O.jsx)(j.b,{path:"/login",children:Object(O.jsx)(g,{isAuth:l,setIsAuth:i})}),Object(O.jsx)(j.b,{path:"/wellinfo/:id",children:Object(O.jsx)(A,{well:k,setWell:B})}),Object(O.jsx)(j.b,{path:"",children:Object(O.jsx)(w,{isAuth:l,setIsAuth:i,userID:x,history:N,userName:n,well:k,setWell:B})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};n(47);r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(F,{})})}),document.getElementById("root")),I()}},[[48,1,2]]]);
//# sourceMappingURL=main.0e9d0ea2.chunk.js.map