(this["webpackJsonpreact-task-list"]=this["webpackJsonpreact-task-list"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"details":"Walk the dog","completed":false},{"id":2,"details":"Water plants","completed":false},{"id":3,"details":"Do laundry","completed":false},{"id":4,"details":"Drink water","completed":false},{"id":5,"details":"Say hi to the neighbors","completed":false},{"id":6,"details":"Watch the trees","completed":false},{"id":7,"details":"Read a book","completed":false},{"id":9,"details":"Write a letter to grandma","completed":false},{"id":10,"details":"Buy flowers","completed":false},{"id":11,"details":"Walk to the top of the hill","completed":false},{"id":12,"details":"Cook pasta bolognese","completed":false},{"id":13,"details":"Run a mile","completed":false}]')},,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),s=a.n(o),n=a(2),i=a.n(n),l=(a(15),a(16),a(7)),c=a(3),r=a(4),d=a(8),h=a(5),m=a(9),p=a(6),u=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:p,itemsToShow:5,expanding:!0},a.showMore=function(){a.setState((function(e){return e.itemsToShow+5>=e.tasks.length?{itemsToShow:e.tasks.length,expanding:!1}:{itemsToShow:e.itemsToShow+5}}))},a.showLess=function(){a.setState((function(e){return e.itemsToShow-5<=5?{itemsToShow:5,expanding:!0}:{itemsToShow:e.itemsToShow-5}}))},a.toggleCheckbox=function(e){var t=a.state.tasks.slice(0,a.state.itemsToShow).findIndex((function(t){return t.id===Number(e.target.id)})),o=Object(l.a)(a.state.tasks);o[t].completed=!o[t].completed,a.setState({tasks:o})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.state.tasks.slice(0,this.state.itemsToShow).map((function(t){return s.a.createElement("div",{key:t.id},s.a.createElement("label",null,s.a.createElement("input",{id:t.id,type:"checkbox",checked:t.completed,onChange:e.toggleCheckbox}),t.details))})),s.a.createElement("button",{onClick:this.state.expanding?this.showMore:this.showLess},this.state.expanding?"Show More":"Show Less"))}}]),t}(s.a.Component);var f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},"Task App"),s.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.15e5d302.chunk.js.map