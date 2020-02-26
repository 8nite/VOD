(this.webpackJsonpvod=this.webpackJsonpvod||[]).push([[0],{56:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),l=a(30),c=a(24),i=a(31),o=a(0),s=a.n(o),u=a(6),m=a(14),d=a(40),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGEFILTER":return Object(d.a)({},e,{filter:t.text});case"UPDATEWATCHED":var a;return(a=e&&e.watched||[]).includes(t.text)||a.push(t.text),Object(d.a)({},e,{watched:a});default:return e}},v=a(39),h=a(47),p=a.n(h);var f=function(e){var t={key:"root",storage:p.a},a=Object(v.a)(t,{root:E}),n=Object(m.c)(a,e);console.log(n.getState());var r=Object(v.b)(n,null,(function(){n.getState()}));return n.subscribe((function(){})),{store:n,persistor:r}},g=a(38),b=a(48),y=a(54),k=a(49),w=a(78),C=a(79),O=function(e){var t=e.entries,a=e.onEnded,n=Object(o.useState)(!1),r=Object(y.a)(n,2),l=r[0],c=r[1],i=function(){return c(!1)},u=function(){return c(!0)};return s.a.createElement(s.a.Fragment,null,Array.isArray(t)&&t.length>0?s.a.createElement(k.Carousel,{useKeyboardArrows:"true"},t.map((function(e){return s.a.createElement("div",{style:{height:"717px"}},s.a.createElement("img",{src:e.images[0].url,alt:e.title}),s.a.createElement("p",{className:"legend"},s.a.createElement("video",{id:e.id,key:e.id,controls:"false",playsInline:!0,light:e.images[0].url,playIcon:!0,onEnded:a},s.a.createElement("source",{src:e.contents[0].url})),s.a.createElement("p",null,s.a.createElement("a",{href:e.contents[0].url},e.title)),s.a.createElement(w.a,{variant:"primary",onClick:u},"More info"),s.a.createElement(C.a,{show:l,onHide:i},s.a.createElement(C.a.Header,{closeButton:!0},s.a.createElement(C.a.Title,null,"INFO")),s.a.createElement(C.a.Body,null,s.a.createElement("p",null,"Description:",s.a.createElement("br",null),e.description),s.a.createElement("p",null,"Type:",s.a.createElement("br",null),e.type),s.a.createElement("p",null,"Published Date:",s.a.createElement("br",null),new Date(e.publishedDate).toString()),s.a.createElement("p",null,"Available Date:",s.a.createElement("br",null),new Date(e.availableDate).toString())),s.a.createElement(C.a.Footer,null,s.a.createElement(w.a,{variant:"secondary",onClick:i},"Close")))))}))):null)},j=function(e){var t=e.entries,a=e.filter,n=e.watched,r=e.onEnded;return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col align-self-start"},a),s.a.createElement("div",{className:"col align-self-center"},t&&a&&""!==a?s.a.createElement(O,{entries:t.filter((function(e){return e.categories.some((function(e){return e.id===a}))})),onEnded:r}):s.a.createElement(O,{entries:t,onEnded:r}))),Array.isArray(n)&&n.length>0&&t.some((function(e){return n.includes(e.id)}))?s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col align-self-start"},"Watch Again"),s.a.createElement("div",{className:"col align-self-center"},s.a.createElement(O,{entries:t.filter((function(e){return n.includes(e.id)})),onEnded:r}))):null)},A=(a(72),a(73),a(81)),D=a(80),L=function(e){var t=e.changeFilter;return s.a.createElement("header",null,s.a.createElement(A.a,{expand:"lg",variant:"dark",bg:"dark"},s.a.createElement(A.a.Brand,{href:"#home"},"One Page Video Web App"),s.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(D.a,{className:"mr-auto"},s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"secondary",value:""},"ALL")),s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"primary",value:"movies-comedy"},"Comedy")),s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"secondary",value:"movies-biography"},"Biography")),s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"success",value:"movies-action"},"Action")),s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"warning",value:"movies-mystery"},"Mystery")),s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"danger",value:"movies-horror"},"Horror")),s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"light",value:"movies-drama"},"Drama")),s.a.createElement(D.a.Link,null,s.a.createElement(w.a,{onClick:t,variant:"info",value:"movies-crime"},"Crime"))))))},N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={entries:[]},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:3010/?filter="+this.props.filter).then((function(e){return e.json()})).then((function(t){e.setState(t)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(L,{changeFilter:this.props.changeFilter}),s.a.createElement(j,{entries:this.state.entries,filter:this.props.filter,watched:this.props.watched,onEnded:this.props.onEnded}))}}]),t}(s.a.Component);function F(e){return{type:"CHANGEFILTER",text:e}}function T(e){return{type:"UPDATEWATCHED",text:e}}var x=f({root:{watched:[],filter:null,entries:[]}}),H=x.store,I=x.persistor,S=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).onChangeFilter=function(e){a.props.dispatch(F(e.nativeEvent.target.value)),window.location.reload(!1)},a.onEnded=function(e){a.props.dispatch(T(e.nativeEvent.target.id)),window.location.reload(!1)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(b.PersistGate,{persistor:I},s.a.createElement(N,{filter:this.props.filter,changeFilter:this.onChangeFilter,onEnded:this.onEnded,watched:this.props.watched}))}}]),t}(s.a.Component),B=Object(g.b)((function(e){return{watched:e.root.watched,filter:e.root.filter}}))(S);Object(u.render)(s.a.createElement(g.a,{store:H},s.a.createElement(B,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d8715ec5.chunk.js.map