(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"67TT":function(e,t,n){"use strict";var r=n("L2JU"),i=n("dhqo"),o=n.n(i);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={props:{value:{type:Boolean,default:!1},selected:{type:Array,default:function(){return[]}},model:{type:String,default:""}},computed:c(c({},Object(r.d)("app",["loading"])),{},{question:function(){var e=this.selected.length;return 1===e?"this ".concat(this.model," ?"):"these ".concat(e," ").concat(o()(this.model)," ?")}})},u=n("KHd+"),d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":"290",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:!!e.loading}},[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Confirmation")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pt-2",style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 300px;"},[e._v("\n            Are you sure to delete "+e._s(e.question)+"\n            "),n("v-chip-group",{attrs:{column:"",small:"","active-class":"primary--text"}},e._l(e.selected,(function(t){return n("v-chip",{key:t.id},[e._t("default",null,{item:t})],2)})),1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{disabled:!!e.loading,color:"red",dark:""},on:{click:function(t){return e.$emit("delete")}}},[e._v("Yes, sure")])],1)],1)],1)}),[],!1,null,null,null);t.a=d.exports},QuyD:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),i=n.n(r),o=n("L2JU"),a=n("D4Jh"),c=n("mXMD"),s=n("UzJ+"),l=n("obwe"),u=n("UJ9n"),d=n("f5ZI"),f=n("tax4"),p=n("67TT");function v(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,i)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){v(o,r,i,a,c,"next",e)}function c(e){v(o,r,i,a,c,"throw",e)}a(void 0)}))}}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g,y,O,w={props:["id"],components:{AppTopBar:u.a,TheDataTable:d.a,TheDialogForm:f.a,TheDialogDelete:p.a},data:function(){return{model:"price",options:{},search:"",total:0,selected:[],headers:[{text:"Product",value:"product.name"},{text:"Price",value:"price",align:"right",width:150},{text:"Changed At",value:"changed_at"},{text:"Updater",value:"user.name"}],dialog:!1,dialogDelete:!1,menuChangedAt:!1,list_products:[],form:{}}},computed:b(b(b({},Object(o.d)("app",["loading","dense"])),Object(o.d)("model",["prices"])),{},{formTitle:function(){return-1===this.form.id?"New":"Edit"},apiUrl:function(){var e=Object(l.a)(this.id);return"product/".concat(e,"/").concat(this.model)}}),methods:b(b(b({},Object(o.c)("model",[c.b])),Object(o.b)("model",[a.b,a.c,a.a])),{},{create:function(){this.form=this.$_.cloneDeep(s.b);var e=Object(l.a)(this.id);e>0&&(this.form.product_id=e),this.dialog=!0},edit:function(){this.form=this.$_.cloneDeep(this.selected[0]),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.$refs.form.reset()}))},fetchProducts:(O=m(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GET_MODELS({model:"product",params:{itemsPerPage:-1,temporary:!0}}).then((function(e){var n=e.data;t.list_products=t.$_.map(n,(function(e){return t.$_.pick(e,["id","name"])}))})).catch((function(e){return Object(l.b)(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return O.apply(this,arguments)}),fetch:(y=m(i.a.mark((function e(){var t,n,r,o,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,n=this.options,r=this.search,o=this.apiUrl,e.next=3,this.GET_MODELS({model:t,url:o,params:b(b({},n),{},{search:r})}).then((function(e){var t=e.meta.total;a.total=t})).catch((function(e){return Object(l.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)}),save:function(){var e=this;this.$refs.form.validate().then((function(t){if(t){var n=e.form,r=e.model;e.SAVE_MODEL({model:r,payload:n,url:"product/".concat(n.product_id,"/").concat(r)}).then(function(){var t=m(i.a.mark((function t(o){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.id>0)){t.next=4;break}e.UPDATE_MODEL({model:r,data:o}),t.next=6;break;case 4:return t.next=6,e.fetch();case 6:e.selected=[],e.close();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var n=Object(l.b)(t);e.$refs.form.setErrors(n)}))}}))},deleteItem:(g=m(i.a.mark((function e(){var t,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,n=this.apiUrl,e.next=3,this.DELETE_MODELS({model:t,url:n,ids:this.$_.map(this.selected,"id")}).then(m(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.fetch();case 2:r.selected=[],r.dialogDelete=!1;case 4:case"end":return e.stop()}}),e)})))).catch((function(e){return Object(l.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})}),watch:{dialog:function(e){e&&0==this.list_products.length&&this.fetchProducts()}}},k=n("KHd+"),j=Object(k.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{page:e.model,selected:e.selected,crud:""},on:{unselect:function(t){e.selected=[]},fetch:e.fetch,edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-row",{attrs:{align:"start",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("the-data-table",{attrs:{headers:e.headers,items:e.prices,total:e.total,options:e.options},on:{"update:options":function(t){e.options=t},fetch:e.fetch},scopedSlots:e._u([{key:"item.price",fn:function(t){var n=t.item;return[e._v(e._s(e._f("currency")(n.price)))]}},{key:"item.changed_at",fn:function(t){var n=t.item;return[e._v(e._s(e._f("moment")(n.changed_at,"from")))]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("the-dialog-form",{attrs:{form:e.form},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("validation-observer",{ref:"form"},[n("validation-provider",{attrs:{name:"product_id"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-autocomplete",{attrs:{items:e.list_products,readonly:e.id>0,"error-messages":r,success:i,loading:!!e.loading,chips:"","item-text":"name","item-value":"id",label:"Product",hint:"The product being updated","persistent-hint":""},model:{value:e.form.product_id,callback:function(t){e.$set(e.form,"product_id",t)},expression:"form.product_id"}})]}}])}),e._v(" "),n("v-menu",{ref:"menuChangedAt",attrs:{"return-value":e.form.changed_at,"close-on-content-click":!1,"min-width":"290px","offset-y":""},on:{"update:returnValue":function(t){return e.$set(e.form,"changed_at",t)},"update:return-value":function(t){return e.$set(e.form,"changed_at",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("validation-provider",{attrs:{name:"changed_at"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.valid;return[n("v-text-field",e._g(e._b({attrs:{"error-messages":o,success:a,label:"Changed At",hint:"When the price changed",readonly:""},model:{value:e.form.changed_at,callback:function(t){e.$set(e.form,"changed_at",t)},expression:"form.changed_at"}},"v-text-field",i,!1),r))]}}],null,!0)})]}}]),model:{value:e.menuChangedAt,callback:function(t){e.menuChangedAt=t},expression:"menuChangedAt"}},[e._v(" "),n("v-date-picker",{attrs:{max:e.$moment().format("YYYY-MM-DD"),"no-title":"",scrollable:""},model:{value:e.form.changed_at,callback:function(t){e.$set(e.form,"changed_at",t)},expression:"form.changed_at"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menuChangedAt=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menuChangedAt.save(e.form.changed_at)}}},[e._v("OK")])],1)],1),e._v(" "),n("validation-provider",{attrs:{name:"price"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-text-field",{attrs:{label:"Product price",type:"number","error-messages":r,success:i,prefix:"Rp",counter:"",hint:"The updated product price","persistent-hint":""},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})]}}])})],1)],1),e._v(" "),n("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.deleteItem,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[e.id>0?n("span",[n("strong",[e._v(e._s(e._f("currency")(r.price)))]),e._v("\n                        "+e._s(e._f("moment")(r.changed_at,"from"))+"\n                    ")]):n("span",[n("strong",[e._v(e._s(r.product.name))]),e._v("\n                        "+e._s(e._f("currency")(r.price))+"\n                    ")])]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}})],1)],1)],1)}),[],!1,null,null,null);t.default=j.exports},UJ9n:function(e,t,n){"use strict";var r=n("L2JU"),i=n("bHnR"),o=n("PMce"),a=n("LvDl"),c=n("obwe"),s=n("dhqo"),l=n.n(s),u=n("ejCs"),d=n.n(u);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={props:{value:{type:String,default:""},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},crud:{type:Boolean,default:!1}},data:function(){return{dialog:!c.c.get("confirmedFullscreen"),searchBox:!1}},computed:p(p({},Object(r.d)("app",["title","dense","fullscreen"])),{},{webview:function(){return d()(window.navigator.userAgent)},theTitle:function(){var e=this.selected.length;return e>0?"".concat(e," selected"):"".concat(l()(this.$_.startCase(this.page)))}}),methods:p(p(p({},Object(r.c)("app",[i.l,i.m,i.n])),Object(r.b)("app",[o.c])),{},{setSearch:function(e){e||this.$emit("input",""),this.searchBox=e},toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirm:function(e){e&&this.toggleFullscreen(),this.dialog=!1,c.c.set("confirmedFullscreen",!0)},logout:function(){var e=this;this.LOGOUT().then((function(){e.$router.push({name:"login"})})).catch((function(e){return Object(c.b)(e)}))}}),watch:{value:Object(a.debounce)((function(){this.$emit("fetch")}),500)}},h=n("KHd+"),b=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-app-bar",{attrs:{color:e.selected.length?"black":"primary","collapse-on-scroll":!(e.selected.length||e.value),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("unselect")}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-divider",{staticClass:"mr-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[n("v-toolbar-title",[e._v(e._s(e.theTitle))]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})],e._v(" "),n("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?n("v-btn",{staticClass:"mr-2",attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),n("v-btn",{attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[n("v-icon",[e._v("mdi-delete")]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Delete")]],2)]:[n("v-btn",{staticClass:"mr-2",attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:e.TOGGLE_DENSE}},[n("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Dense")]],2),e._v(" "),n("v-btn",{attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.$vuetify.breakpoint.smAndDown?e._e():[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),n("v-toolbar-title",[n("span",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.$vuetify.breakpoint.smAndDown?n("v-text-field",{attrs:{value:e.value,"append-icon":e.$vuetify.breakpoint.smAndDown||e.value?"mdi-magnify-close":"mdi-magnify",label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{input:function(t){return e.$emit("input",t)},"click:append":function(t){return e.setSearch(!1)}}}):e._e()]:e._e(),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():n("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.$vuetify.breakpoint.smAndDown?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[n("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),e.webview?e._e():n("v-btn",{attrs:{icon:""},on:{click:e.toggleFullscreen}},[n("v-icon",[e._v(e._s(e.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"))])],1),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:"",large:""}},r),[n("v-avatar",{attrs:{right:"",size:"32px",item:""}},[n("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],2),e._v(" "),e.$vuetify.breakpoint.smAndDown&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Use fullscreen mode ?")]),e._v(" "),n("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirm(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirm(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=b.exports},"UzJ+":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r={id:-1,name:"",email:"",role:{id:-1,name:""}},i={id:-1,name:"",description:"",user:r},o={id:-1,product_id:-1,price:0,changed_at:null,product:i,user:r},a={id:-1,name:"",description:"",user:r,percents:[]}},ejCs:function(e,t,n){var r=n("ow63"),i=new RegExp("("+r.join("|")+")","ig");e.exports=function(e){return!!e.match(i)}},f5ZI:function(e,t,n){"use strict";var r=n("L2JU");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.d)("app",["loading","dense"])),watch:{options:{handler:function(){this.$emit("fetch")},deep:!0}}},c=n("KHd+"),s=Object(c.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,options:e.options,headers:e.headers,items:e.items,"server-items-length":e.total,loading:!!e.loading,dense:e.dense,page:1,"items-per-page":10,"selectable-key":"authorized","sort-by":"updated_at","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(n){var r=n.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.$_.get(r,t.value))+"\n        ")],{item:r})]}}}))],null,!0)})}),[],!1,null,null,null);t.a=s.exports},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]},tax4:function(e,t,n){"use strict";var r=n("L2JU");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={props:{value:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},form:{type:Object,default:function(){}},title:{type:String,default:""},width:{type:String,default:"500px"}},computed:o(o({},Object(r.d)("app",["loading"])),{},{formTitle:function(){return this.title?this.title:-1===this.form.id?"New Item":"Edit Item"}})},s=n("KHd+"),l=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":e.width,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:!!e.loading}},[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 500px;"},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("submit")}}},[e._t("default"),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],2)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),e.readonly?e._e():n("v-btn",{attrs:{disabled:!!e.loading,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.a=l.exports}}]);