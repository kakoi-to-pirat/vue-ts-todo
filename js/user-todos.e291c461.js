(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user-todos"],{3139:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-todos"},[s("h1",[t._v("UserTodos")]),s("user-todos-list"),s("div",{staticClass:"user-todos__navbar"},[s("router-link",{attrs:{to:"/"}},[t._v("Back to users")])],1)],1)},r=[],i=s("d4ec"),o=s("99de"),n=s("7e84"),c=s("262e"),l=s("9ab4"),u=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-list"},[t.isLoadingData?s("loading"):t._e(),s("table",{staticClass:"table-list__table",attrs:{border:"1"}},[t._m(0),t._l(t.userTodos,(function(e){return s("tr",{key:"todo-"+e.id},[s("th",{staticClass:"table-list__item"},[t._v(t._s(e.userId))]),s("th",{staticClass:"table-list__item"},[t._v(t._s(e.id))]),s("th",{staticClass:"table-list__item"},[t._v(t._s(e.title))]),s("th",{staticClass:"table-list__item"},[t._v(t._s(t.getStatus(e)))])])}))],2)],1)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",{staticClass:"table-list__header"},[t._v("UserId")]),s("th",{staticClass:"table-list__header"},[t._v("TodoId")]),s("th",{staticClass:"table-list__header"},[t._v("Title")]),s("th",{staticClass:"table-list__header"},[t._v("Completed")])])}],h=(s("96cf"),s("1da1")),b=s("bee2"),v=s("3a5e"),p=s("8511"),f=(s("839d"),function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(n["a"])(e).apply(this,arguments)),t.store=Object(p["h"])(t.$store),t.userTodosModule=Object(p["g"])(t.$store,["userTodos"]),t.isLoadingData=!1,t.userTodos=[],t}return Object(c["a"])(e,t),Object(b["a"])(e,[{key:"mounted",value:function(){this.loadUserTodos()}},{key:"loadUserTodos",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoadingData=!0,e=parseInt(this.$route.params.id),t.prev=2,t.next=5,this.store.userTodos.loadUserTodos(e);case 5:this.updateUsersData(),this.isLoadingData=!1,t.next=13;break;case 9:throw t.prev=9,t.t0=t["catch"](2),this.isLoadingData=!1,t.t0;case 13:case"end":return t.stop()}}),t,this,[[2,9]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateUsersData",value:function(){this.userTodos=this.store.userTodos.userTodos}},{key:"getStatus",value:function(t){return t.completed?"Yes":"No"}}]),e}(u["c"]));f=Object(l["a"])([Object(u["a"])({components:{Loading:v["a"]}})],f);var j=f,O=j,m=s("2877"),T=Object(m["a"])(O,d,_,!1,null,null,null),C=T.exports,g=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(n["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(u["c"]);g=Object(l["a"])([Object(u["a"])({components:{UserTodosList:C}})],g);var k=g,w=k,y=(s("86ea"),Object(m["a"])(w,a,r,!1,null,"6960aac9",null));e["default"]=y.exports},7202:function(t,e,s){},"86ea":function(t,e,s){"use strict";var a=s("7202"),r=s.n(a);r.a}}]);
//# sourceMappingURL=user-todos.e291c461.js.map