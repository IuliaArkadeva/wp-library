(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[37],{855:function(e,a,t){"use strict";t.r(a);var r=t(19),s=t(29),n=t(9),i=t(896),c=t(501),l=t(551),o=t(514),d=t(629),m=t(192),u=t(296),b=t(82),j=t(53),h=t(199),p=t(665),x=t(1),O=t(15),g=t(47),f=t(666),w=t(2),v=Object(m.a)(u.a)((function(){return{display:"flex",alignItems:"center"}})),y=Object(m.a)(v)((function(){return{justifyContent:"center"}})),k=Object(m.a)(u.a)((function(){return{height:"100%",padding:"32px",position:"relative",background:"rgba(0, 0, 0, 0.01)"}})),C=Object(m.a)(y)((function(){return{background:"#1A2038",minHeight:"100% !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}}})),B={email:"jason@ui-lib.com",password:"dummyPass",remember:!0},S=f.a().shape({password:f.b().min(6,"Password must be 6 character length").required("Password is required!"),email:f.b().email("Invalid Email address").required("Email is required!")});a.default=function(){var e=Object(b.a)(),a=Object(O.m)(),t=Object(x.useState)(!1),m=Object(n.a)(t,2),u=m[0],f=m[1],q=Object(h.a)().login,P=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,q(t.email,t.password);case 4:a("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),f(!1);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}();return Object(w.jsx)(C,{children:Object(w.jsx)(c.a,{className:"card",children:Object(w.jsxs)(l.a,{container:!0,children:[Object(w.jsx)(l.a,{item:!0,sm:6,xs:12,children:Object(w.jsx)(y,{p:4,height:"100%",sx:{minWidth:320},children:Object(w.jsx)("img",{src:"/assets/images/illustrations/dreamer.svg",width:"100%",alt:""})})}),Object(w.jsx)(l.a,{item:!0,sm:6,xs:12,children:Object(w.jsx)(k,{children:Object(w.jsx)(p.a,{onSubmit:P,initialValues:B,validationSchema:S,children:function(a){var t=a.values,r=a.errors,s=a.touched,n=a.handleChange,c=a.handleBlur,l=a.handleSubmit;return Object(w.jsxs)("form",{onSubmit:l,children:[Object(w.jsx)(o.a,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:c,value:t.email,onChange:n,helperText:s.email&&r.email,error:Boolean(r.email&&s.email),sx:{mb:3}}),Object(w.jsx)(o.a,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:c,value:t.password,onChange:n,helperText:s.password&&r.password,error:Boolean(r.password&&s.password),sx:{mb:1.5}}),Object(w.jsxs)(v,{justifyContent:"space-between",children:[Object(w.jsxs)(v,{gap:1,children:[Object(w.jsx)(d.a,{size:"small",name:"remember",onChange:n,checked:t.remember,sx:{padding:0}}),Object(w.jsx)(j.c,{children:"Remember Me"})]}),Object(w.jsx)(g.c,{to:"/session/forgot-password",style:{color:e.palette.primary.main},children:"Forgot password?"})]}),Object(w.jsx)(i.a,{type:"submit",color:"primary",loading:u,variant:"contained",sx:{my:2},children:"Login"}),Object(w.jsxs)(j.c,{children:["Don't have an account?",Object(w.jsx)(g.c,{to:"/session/signup",style:{color:e.palette.primary.main,marginLeft:5},children:"Register"})]})]})}})})})]})})})}}}]);
//# sourceMappingURL=37.386a78e7.chunk.js.map