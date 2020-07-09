(this["webpackJsonpContact-Manager-Redux"]=this["webpackJsonpContact-Manager-Redux"]||[]).push([[0],{43:function(e,t,a){e.exports=a(79)},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),l=a(7),i=a(8),s=a(11),u=a(9),p=a(12),m=a(15),h=a(6),d=a.n(h),f=a(19),E=a(20),b=a.n(E),v=a(10),C=(a(70),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={showContactInfo:!1},a.onDeleteClick=function(e){a.props.deleteContact(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contacts,a=t.id,n=t.name,r=t.email,o=t.phone,l=this.state.showContactInfo;return c.a.createElement("div",{className:"contact-parent"},c.a.createElement("h3",null,n," ",c.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})}}),c.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",color:"red",float:"right"},onClick:this.onDeleteClick.bind(this,a)})," ",c.a.createElement(m.b,{to:"/edit/".concat(a)},c.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",paddingRight:"5px"}}))),l?c.a.createElement("ul",null,c.a.createElement("li",null,"Email: ",r),c.a.createElement("li",null,"Contact: ",o)):null)}}]),t}(n.Component)),y=Object(v.b)(null,{deleteContact:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 3:a({type:"DELETE_CONTACT",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:"DELETE_CONTACT",payload:e});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})(C),O=(a(72),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return c.a.createElement("div",{className:"contacts-parent"},c.a.createElement("h1",null,c.a.createElement("span",{className:"contacts-span"},"Contact")," List"),e.map((function(e){return c.a.createElement(y,{contacts:e})})))}}]),t}(n.Component)),j=Object(v.b)((function(e){return{contacts:e.contact.contacts}}),{getContacts:function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,t({type:"GET_CONTACTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(O);a(73);var g=function(e){return c.a.createElement("ul",{className:"header-parent"},c.a.createElement("div",{className:"header-name"},c.a.createElement("h3",null,e.branding)),c.a.createElement("div",{className:"header-items"},c.a.createElement("li",null,c.a.createElement(m.b,{to:"/"},c.a.createElement("i",{className:"fas fa-home"})," Home")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/add"},c.a.createElement("i",{className:"fas fa-plus"})," Add")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/about"},c.a.createElement("i",{className:"fas fa-question"})," About"))))};a(74);var N=function(){return c.a.createElement("div",{className:"about-parent"},c.a.createElement("h1",null,"About Contact Manager"),c.a.createElement("p",null,"It is a simple app to manage your contacts!"),c.a.createElement("p",{className:"about-suffix"},"Version 1.0.0"))},T=a(18),w=function(e){var t=e.label,a=e.name,n=e.type,r=e.placeholder,o=e.value,l=e.onChange;return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:a},t),c.a.createElement("li",null,c.a.createElement("input",{name:a,type:n,placeholder:r,value:o,onChange:l,required:!0})))};w.defaultProps={type:"text"};var A=w,_=(a(75),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",email:"",phone:""},a.onChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n={name:t.name,email:t.email,phone:t.phone};a.props.addContact(n),a.setState({name:"",email:"",phone:""}),a.props.history.push("/")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone;return c.a.createElement("form",{className:"addcontact-parent",onSubmit:this.onSubmit},c.a.createElement("div",{className:"addcontact-child1"},c.a.createElement("h3",null,"Add Contact ")),c.a.createElement("ul",{className:"addcontact-child2"},c.a.createElement(A,{label:"Name",name:"name",placeholder:"Enter name...",value:t,onChange:this.onChange}),c.a.createElement(A,{label:"Email",name:"email",type:"email",placeholder:"Enter email...",value:a,onChange:this.onChange}),c.a.createElement(A,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:n,onChange:this.onChange}),c.a.createElement("li",null,c.a.createElement("input",{type:"submit",value:"Add Contact"}))))}}]),t}(n.Component)),k=Object(v.b)(null,{addContact:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("https://jsonplaceholder.typicode.com/posts",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(_),x=(a(76),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",email:"",phone:""},a.onChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,c=t.email,r=t.phone,o={id:a.props.match.params.id,name:n,email:c,phone:r};a.props.updateContact(o),a.setState({name:"",email:"",phone:""}),a.props.history.push("/")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){if(t.contact!==this.props.contact){var a=e.contact,n=a.name,c=a.phone,r=a.email;this.setState({name:n,email:r,phone:c})}}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone;return c.a.createElement("form",{className:"editcontact-parent",onSubmit:this.onSubmit},c.a.createElement("div",{className:"editcontact-child1"},c.a.createElement("h3",null,"Edit Contact ")),c.a.createElement("ul",{className:"editcontact-child2"},c.a.createElement(A,{label:"Name",name:"name",placeholder:"Enter name...",value:t,onChange:this.onChange}),c.a.createElement(A,{label:"Email",name:"email",type:"email",placeholder:"Enter email...",value:a,onChange:this.onChange}),c.a.createElement(A,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:n,onChange:this.onChange}),c.a.createElement("li",null,c.a.createElement("input",{type:"submit",value:"Update Contact"}))))}}]),t}(n.Component)),S=Object(v.b)((function(e){return{contact:e.contact.contact}}),{updateContact:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.put("https://jsonplaceholder.typicode.com/posts/".concat(e.id),e);case 2:n=t.sent,a({type:"UPDATE_CONTACT",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getContact:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:n=t.sent,a({type:"GET_CONTACT",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(x),D=a(16);a(77);var I=function(){return c.a.createElement("div",{className:"parent-notfound"},c.a.createElement("h1",null,c.a.createElement("span",{className:"child-notfound"},"404")," Page Not Found"),c.a.createElement("p",null,"Sorry, this page does not exist!"))},M=a(14),P=a(41),R=a(42),L=a(21),U={contacts:[],contact:{}},G=Object(M.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return Object(L.a)({},e,{contacts:t.payload});case"GET_CONTACT":return Object(L.a)({},e,{contact:t.payload});case"DELETE_CONTACT":return Object(L.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"UPDATE_CONTACT":return Object(L.a)({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});case"ADD_CONTACT":return Object(L.a)({},e,{contacts:[t.payload].concat(Object(R.a)(e.contacts))});default:return e}}}),X=[P.a],F=Object(M.e)(G,{},Object(M.d)(M.a.apply(void 0,X),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),V=(a(78),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(v.a,{store:F},c.a.createElement(m.a,{basename:"/Contact-Manager-Redux"},c.a.createElement(g,{branding:"Contact Manager"}),c.a.createElement(D.c,null,c.a.createElement(D.a,{exact:!0,path:"/",component:j}),c.a.createElement(D.a,{exact:!0,path:"/add",component:k}),c.a.createElement(D.a,{exact:!0,path:"/edit/:id",component:S}),c.a.createElement(D.a,{exact:!0,path:"/about",component:N}),c.a.createElement(D.a,{component:I}))," "))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e7aedc1e.chunk.js.map