(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(7),a=n.n(s),i=(n(13),n(2)),o=n(6),r=n(0),l=function(e){var t=e.task,n=e.handleDone,c=e.handleDelete;return Object(r.jsxs)("li",{className:t.done?"done":"",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",className:"checkbox-input",onClick:function(){return n(t)},defaultChecked:t.done}),Object(r.jsx)("span",{className:"checkbox-label",children:t.title})]}),Object(r.jsx)("button",{onClick:function(){return c(t)},className:"btn is-delete",children:"\u524a\u9664"})]})},u=function(e){var t=e.tasks,n=e.setTasks,c=function(e){n((function(t){return t.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{done:!e.done}):t}))}))},s=function(e){n((function(t){return t.filter((function(t){return t.id!==e.id}))}))};return Object(r.jsx)("div",{className:"inner",children:t.length<=0?"\u767b\u9332\u3055\u308c\u305fTODO\u306f\u3042\u308a\u307e\u305b\u3093\u3002":Object(r.jsx)("ul",{className:"task-list",children:t.map((function(e){return Object(r.jsx)(l,{task:e,handleDelete:s,handleDone:c},e.id)}))})})},d=n(8),j=function(e){var t=e.setTasks,n=e.tasks,s=Object(c.useState)(""),a=Object(i.a)(s,2),o=a[0],l=a[1],u=Object(c.useState)(n.length+1),j=Object(i.a)(u,2),b=j[0],h=j[1],O=Object(c.useState)(!1),x=Object(i.a)(O,2);x[0],x[1];return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"inputForm",children:Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsx)("input",{type:"text",className:"input"}),Object(r.jsx)("input",{type:"text",className:"input",placeholder:"\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b",value:o,onChange:function(e){l(e.target.value)}}),Object(r.jsx)("button",{onClick:function(){""!==o&&(h(b+1),t([{id:b,title:o,done:!1}].concat(Object(d.a)(n))),l(""))},className:"btn is-primary",children:"\u8ffd\u52a0"})]})})})},b=(n(15),[{id:2,title:"\u6b21\u306b\u3084\u308b\u3084\u3064",done:!1},{id:1,title:"\u521d\u3081\u306b\u3084\u308b\u3084\u3064",done:!0}]),h=function(){var e=Object(c.useState)(b),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{setTasks:s,tasks:n}),Object(r.jsx)(u,{setTasks:s,tasks:n})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(h,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.65165b49.chunk.js.map