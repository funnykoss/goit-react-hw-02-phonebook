(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={button:"ContactsList_button__2Rff5",item:"ContactsList_item__1xwZQ"}},11:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},14:function(t,e,n){},20:function(t,e,n){},3:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK",title:"ContactForm_title__3MqSl"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),o=n.n(c),i=(n(20),n(15)),s=n(5),l=n(6),u=n(8),m=n(7),b=n(13),d=n(2),h=n.n(d),f=n(3),j=n.n(f),p=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handlerChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(b.a)({},a,[r]))},t.submitForm=function(e){e.preventDefault();var n={id:h.a.generate(),name:t.state.name,number:t.state.number};t.props.addContact(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:j.a.title,children:"Phonebook"}),Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.submitForm,children:[Object(p.jsxs)("label",{className:j.a.label,htmlFor:h.a.generate(),children:["Name",Object(p.jsx)("input",{className:j.a.input,id:h.a.generate(),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handlerChange})]}),Object(p.jsxs)("label",{className:j.a.label,htmlFor:h.a.generate(),children:["Number",Object(p.jsx)("input",{className:j.a.input,id:h.a.generate(),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handlerChange})]}),Object(p.jsx)("button",{type:"submit",className:j.a.button,children:" Add contacts"})]})]})}}]),n}(a.Component),g=n(10),O=n.n(g),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsxs)("li",{className:O.a.item,children:[t.name," : ",t.number,Object(p.jsx)("button",{className:O.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},_=n(11),v=n.n(_);function F(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:v.a.label,htmlFor:h.a.generate(),children:["Find contact by name",Object(p.jsx)("input",{className:v.a.input,name:"filter",type:"text",value:e,onChange:n})]})}var y=n(14),N=n.n(y),S=function(){return Object(p.jsx)("section",{children:Object(p.jsx)("h2",{className:N.a.title,children:"Contacts"})})},w=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){console.log(e),void 0===t.state.contacts.find((function(t){return t.name===e.name}))?t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}})):alert("".concat(e.name," is already in contact"))},t.onChange=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),t.reset()},t.reset=function(){t.setState({filter:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.filterContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{addContact:this.addContact}),Object(p.jsx)(S,{}),Object(p.jsx)(F,{value:this.state.filter,onChange:this.onChange}),Object(p.jsx)(x,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),A()}},[[30,1,2]]]);
//# sourceMappingURL=main.838cd6e1.chunk.js.map