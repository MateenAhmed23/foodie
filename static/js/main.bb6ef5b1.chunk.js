(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),r=a.n(c),i=a(2),s=[{value:"Lahore",tag:"LHR"},{value:"Karachi",tag:"KHI"},{value:"Rawalpindi",tag:"RWP"}],l=[{value:"Burger",tag:"BG"},{value:"Pizza",tag:"PZ"},{value:"Chinese",tag:"CH"},{value:"Desi",tag:"DS"}],o=[{value:"DHA Rahbar",tag:"DR"},{value:"Valentia",tag:"VA"},{value:"Wapda Town",tag:"WT"},{value:"Johar Town",tag:"JT"}],m=a(3),u=a.n(m),j=a(0);var d=function(){var e=Object(n.useState)(s[0].tag),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(l[0].tag),r=Object(i.a)(c,2),m=(r[0],r[1]),d=Object(n.useState)(o[0].tag),h=Object(i.a)(d,2),b=(h[0],h[1]);return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h3",{className:"welcome-heading",children:"Welcome to Foodie"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.fire({title:"Loading...",showConfirmButton:!1,timer:3e3})},children:[Object(j.jsx)("label",{htmlFor:"city",className:"form-item",children:"Please enter the city"}),Object(j.jsx)("select",{className:"form-item",name:"city",id:"city",onChange:function(e){a(e.target.value)},children:s.map((function(e){return Object(j.jsx)("option",{value:e.tag,children:e.value})}))}),Object(j.jsx)("label",{htmlFor:"area",className:"form-item",children:"Please enter the area"}),Object(j.jsx)("select",{className:"form-item",name:"area",id:"area",onChange:function(e){b(e.target.value)},children:o.map((function(e){return Object(j.jsx)("option",{value:e.tag,children:e.value})}))}),Object(j.jsx)("label",{htmlFor:"FoodType",className:"form-item",children:"What do you want to eat?"}),Object(j.jsx)("select",{name:"type",id:"FoodType",onChange:function(e){m(e.target.value)},className:"form-item",children:l.map((function(e){return Object(j.jsx)("option",{value:e.tag,children:e.value})}))}),Object(j.jsx)("button",{className:"form-item form-button",children:"Search"})]})]})};var h=function(){var e=Object(n.useState)(s[0].tag),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(l[0].tag),r=Object(i.a)(c,2),m=(r[0],r[1]),d=Object(n.useState)(o[0].tag),h=Object(i.a)(d,2),b=(h[0],h[1]),f=Object(n.useState)(""),O=Object(i.a)(f,2),v=O[0],p=O[1],x=Object(n.useState)(""),g=Object(i.a)(x,2),N=g[0],w=g[1],y=Object(n.useState)(400),C=Object(i.a)(y,2),S=C[0],F=C[1],k=Object(n.useState)(""),P=Object(i.a)(k,2),T=P[0],A=P[1];return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h3",{className:"welcome-heading",children:"Add A New Deal and Help the Foodie Community Grow"}),Object(j.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),u.a.fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes!",cancelButtonText:"No, I want to edit"}).then((function(e){e.value&&u.a.fire({title:"Success",text:"We will review and add the deal shortly",icon:"success",timer:3e3,timerProgressBar:!0})}))},children:[Object(j.jsx)("label",{htmlFor:"city",className:"form-item",children:"Please enter the city"}),Object(j.jsx)("select",{className:"form-item",name:"city",id:"city",onChange:function(e){a(e.target.value)},children:s.map((function(e){return Object(j.jsx)("option",{value:e.tag,children:e.value})}))}),Object(j.jsx)("label",{htmlFor:"area",className:"form-item",children:"Please enter the area"}),Object(j.jsx)("select",{className:"form-item",name:"area",id:"area",onChange:function(e){b(e.target.value)},children:o.map((function(e){return Object(j.jsx)("option",{value:e.tag,children:e.value})}))}),Object(j.jsx)("label",{htmlFor:"FoodType",className:"form-item",children:"Enter the Type of Food"}),Object(j.jsx)("select",{name:"type",id:"FoodType",onChange:function(e){m(e.target.value)},className:"form-item",children:l.map((function(e){return Object(j.jsx)("option",{value:e.tag,children:e.value})}))}),Object(j.jsx)("label",{htmlFor:"res-name",className:"form-item",children:"Restaurant Name"}),Object(j.jsx)("input",{className:"form-item",type:"text",id:"res-name",value:v,onChange:function(e){return p(e.target.value)}}),Object(j.jsx)("label",{className:"form-item",htmlFor:"name",children:"Enter the food/deal name"}),Object(j.jsx)("input",{className:"form-item",type:"text",id:"name",value:T,onChange:function(e){return A(e.target.value)}}),Object(j.jsx)("label",{className:"form-item",htmlFor:"price",children:"Enter the Price"}),Object(j.jsx)("input",{className:"form-item",type:"number",id:"price",value:S,onChange:function(e){return F(e.target.value)}}),Object(j.jsx)("label",{className:"form-item",htmlFor:"description",children:"Please enter any more details"}),Object(j.jsx)("textarea",{className:"form-item",id:"description",name:"description",rows:"4",cols:"40",value:N,onChange:function(e){return w(e.target.value)},children:"It was a dark and stormy night... "}),Object(j.jsx)("button",{className:"form-item form-button",children:"Add"})]})]})};var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],o=s[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),h=d[0],b=d[1];return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h3",{className:"welcome-heading",children:"COntact us to make our services better for you"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.fire({title:"Loading...",showConfirmButton:!1,timer:3e3})},children:[Object(j.jsx)("label",{className:"form-item",htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{className:"form-item",value:a,onChange:function(e){return c(e.target.value)},type:"text"}),Object(j.jsx)("label",{className:"form-item",htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{className:"form-item",value:l,onChange:function(e){return o(e.target.value)},type:"email"}),Object(j.jsx)("label",{className:"form-item",htmlFor:"description",children:"Please convey you issue/suggestion"}),Object(j.jsx)("textarea",{className:"form-item text-area",id:"description",name:"description",rows:"4",cols:"40",value:h,onChange:function(e){return b(e.target.value)},children:"It was a dark and stormy night... "}),Object(j.jsx)("button",{className:"form-item form-button",children:"Enter"})]})]})},f=(a(15),a(6)),O=a(7),v=a(9),p=a(8);a(16);var x=function(e){var t=e.className,a=e.href,n=e.children;return Object(j.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",a);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},href:a,className:t,children:n})},g=[{title:"Search",url:"/foodie/",cName:"nav-links"},{title:"Add New",url:"/foodie/AddNew",cName:"nav-links"},{title:"Contact",url:"/foodie/contact",cName:"nav-links"}],N=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("nav",{className:"Navbar-Items",children:[Object(j.jsxs)("h1",{className:"navbar-logo",children:["Foodie ",Object(j.jsx)("i",{class:"fas fa-hamburger"})]}),Object(j.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(j.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(j.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:g.map((function(t,a){return Object(j.jsx)("li",{onClick:e.handleClick,children:Object(j.jsx)(x,{className:t.cName,href:t.url,children:t.title})},a)}))})]})}}]),a}(n.Component);var w=function(e){var t=e.path,a=e.children,c=Object(n.useState)(window.location.pathname),r=Object(i.a)(c,2),s=(r[0],r[1]);return Object(n.useEffect)((function(){var e=function(){s(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),window.location.pathname===t?a:null};var y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(w,{path:"/foodie/",children:Object(j.jsx)(d,{})}),Object(j.jsx)(w,{path:"/foodie/AddNew",children:Object(j.jsx)(h,{})}),Object(j.jsx)(w,{path:"/foodie/contact",children:Object(j.jsx)(b,{})})]})]})};a(17);r.a.render(Object(j.jsx)(y,{}),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bb6ef5b1.chunk.js.map