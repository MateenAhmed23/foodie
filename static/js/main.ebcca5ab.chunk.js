(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(17),r=a.n(c),s=a(8),o=a.n(s),l=a(18),i=a(4),m=a(3),u=a(5),j=[{value:"Lahore",tag:"LHR"},{value:"Karachi",tag:"KHI"},{value:"Rawalpindi",tag:"RWP"}],d=[{value:"Burger",tag:"BG"},{value:"Pizza",tag:"PZ"},{value:"Chinese",tag:"CH"},{value:"Desi",tag:"DS"}],h=[{value:"DHA Rahbar",tag:"DR"},{value:"Valentia",tag:"VA"},{value:"Wapda Town",tag:"WT"},{value:"Johar Town",tag:"JT"}],b=a(19),f=a.n(b).a.create({baseURL:"http://localhost:3000"}),p=a(6),v=a.n(p),O=a(0);var x=function(){var e=Object(n.useState)({area:"DR",city:"LHR",type:"BG"}),t=Object(u.a)(e,2),a=t[0],c=t[1],r=function(e){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e.target.name,e.target.value)))},s=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v.a.fire({title:"Loading...",showConfirmButton:!1,timer:3e3}),e.prev=2,console.log("Going to get response"),console.log(a),e.next=7,f.get("/deals/all");case 7:return n=e.sent,console.log(n),e.next=11,f.post("/deals/specific",{data:a});case 11:c=e.sent,console.log("Got response"),console.log(c),console.log(c.data,c.status),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),console.log("I am error"),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsx)("h3",{className:"welcome-heading",children:"Welcome to Foodie"}),Object(O.jsxs)("form",{onSubmit:s,children:[Object(O.jsx)("label",{htmlFor:"city",className:"form-item",children:"Please enter the city"}),Object(O.jsx)("select",{className:"form-item",name:"city",id:"city",onChange:r,children:j.map((function(e){return Object(O.jsx)("option",{value:e.tag,children:e.value})}))}),Object(O.jsx)("label",{htmlFor:"area",className:"form-item",children:"Please enter the area"}),Object(O.jsx)("select",{className:"form-item",name:"area",id:"area",onChange:r,children:h.map((function(e){return Object(O.jsx)("option",{value:e.tag,children:e.value})}))}),Object(O.jsx)("label",{htmlFor:"FoodType",className:"form-item",children:"What do you want to eat?"}),Object(O.jsx)("select",{name:"type",id:"FoodType",onChange:r,className:"form-item",children:d.map((function(e){return Object(O.jsx)("option",{value:e.tag,children:e.value})}))}),Object(O.jsx)("button",{className:"form-item form-button",children:"Search"})]})]})},g={area:h[0].tag,city:j[0].tag,type:d[0].tag,price:400,desc:"",name:"",restaurantName:""};var N=function(){var e=Object(n.useState)(g),t=Object(u.a)(e,2),a=t[0],c=t[1],r=function(e){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsx)("h3",{className:"welcome-heading",children:"Add A New Deal and Help the Foodie Community Grow"}),Object(O.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),v.a.fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes!",cancelButtonText:"No, I want to edit"}).then((function(e){e.value&&(c(g),v.a.fire({title:"Success",text:"We will review and add the deal shortly",icon:"success",timer:3e3,timerProgressBar:!0}))}))},children:[Object(O.jsx)("label",{htmlFor:"city",className:"form-item",children:"Please enter the city"}),Object(O.jsx)("select",{className:"form-item",name:"city",id:"city",onChange:r,value:a.city,children:j.map((function(e){return Object(O.jsx)("option",{value:e.tag,children:e.value})}))}),Object(O.jsx)("label",{htmlFor:"area",className:"form-item",children:"Please enter the area"}),Object(O.jsx)("select",{className:"form-item",name:"area",id:"area",value:a.area,onChange:r,children:h.map((function(e){return Object(O.jsx)("option",{value:e.tag,children:e.value})}))}),Object(O.jsx)("label",{htmlFor:"FoodType",className:"form-item",children:"Enter the Type of Food"}),Object(O.jsx)("select",{name:"type",id:"FoodType",value:a.type,onChange:r,className:"form-item",children:d.map((function(e){return Object(O.jsx)("option",{value:e.tag,children:e.value})}))}),Object(O.jsx)("label",{htmlFor:"res-name",className:"form-item",children:"Restaurant Name"}),Object(O.jsx)("input",{className:"form-item",type:"text",id:"res-name",name:"restaurantName",value:a.restaurantName,onChange:r}),Object(O.jsx)("label",{className:"form-item",htmlFor:"name",children:"Enter the food/deal name"}),Object(O.jsx)("input",{className:"form-item",type:"text",id:"name",name:"name",value:a.name,onChange:r}),Object(O.jsx)("label",{className:"form-item",htmlFor:"price",children:"Enter the Price"}),Object(O.jsx)("input",{className:"form-item",type:"number",id:"price",name:"price",value:a.price,onChange:r}),Object(O.jsx)("label",{className:"form-item",htmlFor:"desc",children:"Please enter any more details"}),Object(O.jsx)("textarea",{className:"form-item text-area",id:"desc",name:"desc",rows:"4",cols:"40",value:a.desc,onChange:r}),Object(O.jsx)("button",{className:"form-item form-button",children:"Add"})]})]})},y={name:"",email:"",desc:""};var w=function(){var e=Object(n.useState)(y),t=Object(u.a)(e,2),a=t[0],c=t[1],r=function(e){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsx)("h3",{className:"welcome-heading",children:"COntact us to make our services better for you"}),Object(O.jsxs)("form",{onSubmit:function(e){console.log(a),e.preventDefault(),v.a.fire({title:"Submitted!",icon:"success",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),c(y)},children:[Object(O.jsx)("label",{className:"form-item",htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{className:"form-item",name:"name",value:a.name,onChange:r,type:"text"}),Object(O.jsx)("label",{className:"form-item",htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{className:"form-item",name:"email",value:a.email,onChange:r,type:"email"}),Object(O.jsx)("label",{className:"form-item",htmlFor:"description",children:"Please convey you issue/suggestion"}),Object(O.jsx)("textarea",{className:"form-item text-area",id:"description",name:"desc",rows:"4",cols:"40",value:a.desc,onChange:r,children:"We will love your input! :)"}),Object(O.jsx)("button",{className:"form-item form-button",children:"Enter"})]})]})},C=(a(48),a(20)),F=a(21),k=a(23),S=a(22);a(49);var P=function(e){var t=e.className,a=e.href,n=e.children;return Object(O.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",a);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},href:a,className:t,children:n})},T=[{title:"Search",url:"/foodie/",cName:"nav-links"},{title:"Add New",url:"/foodie/AddNew",cName:"nav-links"},{title:"Contact",url:"/foodie/contact",cName:"nav-links"}],A=function(e){Object(k.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("nav",{className:"Navbar-Items",children:[Object(O.jsxs)("h1",{className:"navbar-logo",children:["Foodie ",Object(O.jsx)("i",{className:"fas fa-hamburger"})]}),Object(O.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(O.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(O.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:T.map((function(t,a){return Object(O.jsx)("li",{onClick:e.handleClick,children:Object(O.jsx)(P,{className:t.cName,href:t.url,children:t.title})},a)}))})]})}}]),a}(n.Component);var B=function(e){var t=e.path,a=e.children,c=Object(n.useState)(window.location.pathname),r=Object(u.a)(c,2),s=(r[0],r[1]);return Object(n.useEffect)((function(){var e=function(){s(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),window.location.pathname===t?a:null};var D=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A,{}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(B,{path:"/foodie/",children:Object(O.jsx)(x,{})}),Object(O.jsx)(B,{path:"/foodie/AddNew",children:Object(O.jsx)(N,{})}),Object(O.jsx)(B,{path:"/foodie/contact",children:Object(O.jsx)(w,{})})]})]})};a(50);r.a.render(Object(O.jsx)(D,{}),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.ebcca5ab.chunk.js.map