(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"67TT":function(e,t,n){"use strict";var r=n("L2JU"),i=n("zhh1"),o=n("dhqo"),a=n.n(o);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={mixins:[i.a],props:{value:{type:Boolean,default:!1},selected:{type:Array,default:function(){return[]}},model:{type:String,default:""}},computed:l(l({},Object(r.d)("app",["loading"])),{},{question:function(){var e=this.selected.length;return 1===e?"this ".concat(this.model," ?"):"these ".concat(e," ").concat(a()(this.model)," ?")}})},d=n("KHd+"),f=Object(d.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile,"max-width":"290",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:!!e.loading}},[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Confirmation")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pt-2",style:e.mobile?"":"max-height: 300px;"},[e._v("\n            Are you sure to delete "+e._s(e.question)+"\n            "),n("v-chip-group",{attrs:{column:"",small:"","active-class":"primary--text"}},e._l(e.selected,(function(t){return n("v-chip",{key:t.id},[e._t("default",null,{item:t})],2)})),1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{disabled:!!e.loading,color:"red",dark:""},on:{click:function(t){return e.$emit("delete")}}},[e._v("Yes, sure")])],1)],1)],1)}),[],!1,null,null,null);t.a=f.exports},Hybr:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),i=n.n(r),o=n("L2JU"),a=n("D4Jh"),c=n("mXMD"),l=n("UzJ+"),s=n("obwe"),u=(n("dhqo"),n("UJ9n")),d=n("Noz/"),f=n("f5ZI"),p=n("tax4"),v=n("67TT");function m(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,i)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){m(o,r,i,a,c,"next",e)}function c(e){m(o,r,i,a,c,"throw",e)}a(void 0)}))}}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y,O,j={mixins:[n("zhh1").a],components:{AppTopBar:u.a,TheDataCard:d.a,TheDataTable:f.a,TheDialogForm:p.a,TheDialogDelete:v.a},data:function(){return{model:"product",options:{},search:"",total:0,selected:[],headers:[{text:"Name",value:"name"},{text:"Description",value:"description"},{text:"Last.Price",value:"price_latest",align:"right",sortable:!1,width:150},{text:"Tot.Price",value:"price_count",align:"center",sortable:!1},{text:"Creator",value:"user.name"},{text:"Updated At",value:"updated_at"}],dialog:!1,dialogDelete:!1,form:{}}},computed:_(_({},Object(o.d)("app",["loading","dense"])),Object(o.d)("model",["products"])),methods:_(_(_({},Object(o.c)("model",[c.b])),Object(o.b)("model",[a.b,a.c,a.a])),{},{create:function(){this.form=this.$_.cloneDeep(l.c),this.dialog=!0},edit:function(){this.form=this.$_.cloneDeep(this.selected[0]),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.$refs.form.reset()}))},fetch:(O=b(i.a.mark((function e(){var t,n,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,n=this.options,r=this.search,e.next=3,this.GET_MODELS({model:t,params:_(_({},n),{},{search:r})}).then((function(e){var t=e.meta;o.total=t.total})).catch((function(e){return Object(s.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return O.apply(this,arguments)}),save:function(){var e=this;this.$refs.form.validate().then((function(t){if(t){var n=e.model,r=e.form;e.SAVE_MODEL({model:n,payload:r}).then(function(){var t=b(i.a.mark((function t(o){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.id>0)){t.next=4;break}e.UPDATE_MODEL({model:n,data:o}),t.next=6;break;case 4:return t.next=6,e.fetch();case 6:e.selected=[],e.close();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var n=Object(s.b)(t);e.$refs.form.setErrors(n)}))}}))},deleteItem:(y=b(i.a.mark((function e(){var t,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,e.next=3,this.DELETE_MODELS({model:t,ids:this.$_.map(this.selected,"id")}).then(b(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetch();case 2:n.selected=[],n.dialogDelete=!1;case 4:case"end":return e.stop()}}),e)})))).catch((function(e){return Object(s.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)}),childRoute:function(e){return{name:"price",params:{id:e}}}})},w=n("KHd+"),x=Object(w.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{page:e.model,selected:e.selected,crud:""},on:{unselect:function(t){e.selected=[]},fetch:e.fetch,edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),e.products.length?n("div",[e.mobile?n("the-data-card",{attrs:{items:e.products,options:e.options},on:{"update:options":function(t){e.options=t},fetch:e.fetch},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{to:e.childRoute(r.id),color:r.prices.length?"green":"red",outlined:!r.selected,absolute:"",top:"",right:"",small:"",tile:""}},[e._v(e._s(e._f("currency")(r.price_latest)))]),e._v(" "),n("v-card-text",[n("div",{staticClass:"overline"},[e._v("\n                        "+e._s(e._f("moment")(r.updated_at,"from"))+"\n                    ")]),e._v(" "),n("div",{staticClass:"overline mb-2"},[e._v("\n                        "+e._s(r.user.name)+"\n                    ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                        "+e._s(r.name)+"\n                    ")]),e._v("\n                    "+e._s(r.description)+"\n                ")])]}}],null,!1,1017446896),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):n("the-data-table",{attrs:{headers:e.headers,items:e.products,total:e.total,options:e.options},on:{"update:options":function(t){e.options=t},fetch:e.fetch},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{to:e.childRoute(r.id),color:r.prices.length?"green":"red",small:e.dense,dark:""}},[e._v(e._s(r.name))])]}},{key:"item.price_latest",fn:function(t){var n=t.item;return[e._v(e._s(e._f("currency")(n.price_latest)))]}},{key:"item.price_count",fn:function(t){var n=t.item;return[e._v(e._s(n.prices.length))]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v(e._s(e._f("moment")(n.updated_at,"from")))]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1):n("v-alert",{attrs:{outlined:"",type:"info",border:"top"}},[e._v("\n        Oops, no "+e._s(e.model)+" data yet.\n    ")]),e._v(" "),n("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.deleteItem,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),n("the-dialog-form",{attrs:{form:e.form},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("validation-observer",{ref:"form"},[n("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-text-field",{attrs:{label:"Product name",type:"text","error-messages":r,success:i,counter:"",hint:"This is to identify the product","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),n("validation-provider",{attrs:{name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-text-field",{attrs:{label:"Product description",type:"text","error-messages":r,success:i,counter:"",hint:"Short description about the product","persistent-hint":""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=x.exports},"Noz/":function(e,t,n){"use strict";n("dhqo"),n("LvDl");var r=n("L2JU");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={props:{value:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}}},data:function(){return{datas:[]}},computed:o({},Object(r.d)("app",["loading"])),methods:{toggleSelect:function(e){e.selected=!e.selected,this.$emit("input",this.datas.filter((function(e){return e.selected})))}},watch:{options:{handler:function(){this.$emit("fetch")},deep:!0},items:function(e){this.datas=this.$_.map(e,(function(e){return o(o({},e),{},{selected:!1})}))},value:function(e){e.length||this.datas.forEach((function(e){e.selected=!1}))}},mounted:function(){this.$emit("update:options",{groupBy:[],groupDesc:[],itemsPerPage:10,multiSort:!1,mustSort:!0,page:1,search:"",sortBy:["updated_at"],sortDesc:[!0]})}},l=n("KHd+"),s=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-row",{attrs:{align:"center",justify:"center",dense:""}},e._l(e.datas,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",sm:"6"}},[n("v-card",{attrs:{color:t.selected?"primary darken-2":"white",dark:t.selected,ripple:!1,tile:""},on:{click:function(n){return e.toggleSelect(t)}}},[e._t("default",null,{item:t})],2)],1)})),1)],1)}),[],!1,null,null,null);t.a=s.exports},UJ9n:function(e,t,n){"use strict";var r=n("L2JU"),i=n("bHnR"),o=n("PMce"),a=n("LvDl"),c=n("obwe"),l=n("zhh1"),s=n("dhqo"),u=n.n(s),d=n("ejCs"),f=n.n(d);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={mixins:[l.a],props:{value:{type:String,default:""},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},crud:{type:Boolean,default:!1}},data:function(){return{dialog:!c.c.get("confirmedFullscreen"),searchBox:!1}},computed:v(v({},Object(r.d)("app",["title","dense","fullscreen"])),{},{webview:function(){return f()(window.navigator.userAgent)},theTitle:function(){var e=this.selected.length;return e>0?"".concat(e," selected"):"".concat(u()(this.$_.startCase(this.page)))}}),methods:v(v(v({},Object(r.c)("app",[i.l,i.m,i.n])),Object(r.b)("app",[o.c])),{},{setSearch:function(e){e||this.$emit("input",""),this.searchBox=e},toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirm:function(e){e&&this.toggleFullscreen(),this.dialog=!1,c.c.set("confirmedFullscreen",!0)},logout:function(){var e=this;this.LOGOUT().then((function(){e.$router.push({name:"login"})})).catch((function(e){return Object(c.b)(e)}))}}),watch:{value:Object(a.debounce)((function(){this.$emit("fetch")}),500)}},h=n("KHd+"),_=Object(h.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-app-bar",{attrs:{color:e.selected.length?"black":"primary","collapse-on-scroll":!(e.selected.length||e.searchBox),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("unselect")}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-divider",{staticClass:"mr-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[n("v-toolbar-title",[e._v(e._s(e.theTitle))]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})],e._v(" "),n("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.mobile?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[n("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[e.mobile?e._e():n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:e.TOGGLE_DENSE}},[n("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))]),e._v(" "),e.mobile?e._e():[e._v("Dense")]],2),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),n("v-toolbar-title",[n("span",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?n("v-text-field",{attrs:{value:e.value,"append-icon":e.mobile||e.value?"mdi-magnify-close":"mdi-magnify",label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{input:function(t){return e.$emit("input",t)},"click:append":function(t){return e.setSearch(!1)}}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():n("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[n("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),e.webview?e._e():n("v-btn",{attrs:{icon:""},on:{click:e.toggleFullscreen}},[n("v-icon",[e._v(e._s(e.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"))])],1),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:"",large:""}},r),[n("v-avatar",{attrs:{right:"",size:"32px",item:""}},[n("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Use fullscreen mode ?")]),e._v(" "),n("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirm(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirm(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=_.exports},"UzJ+":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r={id:-1,name:"",email:"",role:{id:-1,name:""}},i={id:-1,name:"",description:"",user:r},o={id:-1,product_id:-1,price:0,changed_at:null,product:i,user:r},a={id:-1,name:"",description:"",user:r,percents:[]}},ejCs:function(e,t,n){var r=n("ow63"),i=new RegExp("("+r.join("|")+")","ig");e.exports=function(e){return!!e.match(i)}},f5ZI:function(e,t,n){"use strict";var r=n("L2JU");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.d)("app",["loading","dense"])),watch:{options:{handler:function(){this.$emit("fetch")},deep:!0}}},c=n("KHd+"),l=Object(c.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,options:e.options,headers:e.headers,items:e.items,"server-items-length":e.total,loading:!!e.loading,dense:e.dense,page:1,"items-per-page":10,"footer-props":{itemsPerPageText:"Rows"},"selectable-key":"authorized","sort-by":"updated_at","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(n){var r=n.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.$_.get(r,t.value))+"\n        ")],{item:r})]}}}))],null,!0)})}),[],!1,null,null,null);t.a=l.exports},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]},tax4:function(e,t,n){"use strict";var r=n("zhh1"),i=n("L2JU");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={mixins:[r.a],props:{value:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},form:{type:Object,default:function(){}},title:{type:String,default:""},width:{type:String,default:"500px"}},computed:a(a({},Object(i.d)("app",["loading"])),{},{formTitle:function(){return this.title?this.title:-1===this.form.id?"New Item":"Edit Item"}})},s=n("KHd+"),u=Object(s.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile,"max-width":e.width,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:!!e.loading}},[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{style:e.mobile?"":"max-height: 500px;"},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("submit")}}},[e._t("default"),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],2)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),e.readonly?e._e():n("v-btn",{attrs:{disabled:!!e.loading,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.a=u.exports},zhh1:function(e,t,n){"use strict";t.a={computed:{mobile:function(){return this.$vuetify.breakpoint.smAndDown}}}}}]);