(this.webpackJsonpreact_employee_directory=this.webpackJsonpreact_employee_directory||[]).push([[0],{54:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=a(21),o=a(22),d=a(10),h=a(26),u=a(25),j=a(24),m=a(9),b=a(12);var O=function(e){var t=r.a.useState(!1),a=Object(j.a)(t,2),n=a[0],c=a[1],l=function(){return c(!1)};return console.log(e),Object(s.jsxs)("div",{children:[Object(s.jsxs)(b.a,{variant:"dark btn-sm",onClick:function(){return c(!0)},children:[e.params.name.first," ",e.params.name.last]}),Object(s.jsxs)(m.a,{show:n,onHide:l,children:[Object(s.jsx)(m.a.Header,{closeButton:!0,children:Object(s.jsxs)(m.a.Title,{children:[Object(s.jsx)("img",{className:"img-fluid rounded-circle",src:e.params.picture.large,alt:e.params.name.first}),Object(s.jsxs)("h1",{children:[e.params.name.title,". ",e.params.name.first," ",e.params.name.last]}),Object(s.jsxs)("p",{children:["Birthday: ",e.params.dob.date.substring(0,e.params.dob.date.length-14)]}),Object(s.jsxs)("p",{children:["Age: ",e.params.dob.age]})]})}),Object(s.jsx)(m.a.Body,{children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Phone: ",e.params.phone," "]}),Object(s.jsxs)("li",{children:["Email: ",e.params.email," "]}),Object(s.jsxs)("li",{children:["Address: ",e.params.location.street.number," ",e.params.location.street.name,", ",e.params.location.city,", ",e.params.location.state,", ",e.params.location.country," "]})]})}),Object(s.jsx)(m.a.Footer,{children:Object(s.jsx)(b.a,{variant:"dark",onClick:l,children:"Close"})})]})]},e.params.name.first)};var x=function(e){var t=e.results.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:Object(s.jsx)(O,{params:e})}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{className:"img-fluid img-thumbnail",src:e.picture.medium,alt:e.name.first})}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsxs)("td",{children:[e.location.city,", ",e.location.state,", ",e.location.country]})]},e.email)}));return Object(s.jsx)("tbody",{children:t})};var p=function(e){return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Picture"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Location"})]})}),Object(s.jsx)(x,{results:e.results},e.results.email)]})},v=a(23),f=a.n(v);var y=function(){return f.a.get("https://randomuser.me/api/?results=100")};var C=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(s.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:e.value,name:"search",onChange:e.handleChange}),Object(s.jsx)("button",{className:"btn btn-success my-2 my-sm-0",type:"submit",onClick:e.handleSubmit,children:"Search"})]})})},g=a.p+"static/media/employeeIcon.44d1fb4b.PNG";var w=function(e){return Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between",children:[Object(s.jsx)("img",{src:g,alt:"logo"}),Object(s.jsx)("a",{className:"navbar-brand",href:"/React_Employee_Directory/",children:"Employee Directory"}),Object(s.jsx)(C,{value:e.value,handleChange:e.handleChange,handleSubmit:e.handleSubmit})]})},S=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).queryRandomUserAPI=function(){y().then((function(e){return s.setState({results:e.data.results})})).catch((function(e){return console.log(e)}))},s.state={value:"",results:[]},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({value:""})}},{key:"componentDidMount",value:function(){this.queryRandomUserAPI()}},{key:"render",value:function(){var e,t=this,a=this.state.results.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.state.value.toLowerCase())||-1!==e.name.last.toLowerCase().indexOf(t.state.value.toLowerCase())||-1!==e.email.toLowerCase().indexOf(t.state.value.toLowerCase())||-1!==e.location.city.toLowerCase().indexOf(t.state.value.toLowerCase())||-1!==e.location.state.toLowerCase().indexOf(t.state.value.toLowerCase())||-1!==e.location.country.toLowerCase().indexOf(t.state.value.toLowerCase())||-1!==e.phone.toLowerCase().indexOf(t.state.value.toLowerCase())}));return e=""===this.state.value?this.state.results:a,Object(s.jsxs)("div",{children:[Object(s.jsx)(w,{value:this.state.value,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)(p,{results:e,handleClose:this.handleClose,handleShow:this.handleShow})})]})}}]),a}(r.a.Component);var L=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(S,{})})};a(53);l.a.render(Object(s.jsx)(L,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.0184fadb.chunk.js.map