(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"67TT":function(e,t,r){"use strict";var n=r("L2JU"),a=r("dhqo"),o=r.n(a);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={name:"the-dialog-delete",props:{value:{type:Boolean,default:!1},selected:{type:Array,default:function(){return[]}},model:{type:String,default:""}},computed:c(c({},Object(n.d)("app",["loading"])),{},{question:function(){var e=this.selected.length;return 1===e?"this ".concat(this.model," ?"):"these ".concat(e," ").concat(o()(this.model)," ?")}})},u=r("KHd+"),d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":"290",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:!!e.loading}},[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Confirmation")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"pt-2",style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 300px;"},[e._v("\n            Are you sure to delete "+e._s(e.question)+"\n            "),r("v-chip-group",{attrs:{column:"",small:"","active-class":"primary--text"}},e._l(e.selected,(function(t){return r("v-chip",{key:t.id},[e._t("default",null,{item:t})],2)})),1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:!!e.loading,color:"red",dark:""},on:{click:function(t){return e.$emit("delete")}}},[e._v("Yes, sure")])],1)],1)],1)}),[],!1,null,null,null);t.a=d.exports},QuyD:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),o=r("L2JU"),i=r("D4Jh"),c=r("mXMD"),s=r("UzJ+"),l=r("obwe"),u=r("f5ZI"),d=r("tax4"),v=r("67TT");function f(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){f(o,n,a,i,c,"next",e)}function c(e){f(o,n,a,i,c,"throw",e)}i(void 0)}))}}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _,g,y,O="price",w={name:O,props:["id"],components:{TheDataTable:u.a,TheDialogForm:d.a,TheDialogDelete:v.a},data:function(){return{model:O,params:{},total:0,selected:[],headers:[{text:"Product",value:"product.name"},{text:"Price",value:"price",align:"right",width:150},{text:"Changed At",value:"changed_at"},{text:"Updater",value:"user.name"}],dialog:!1,dialogDelete:!1,menuChangedAt:!1,list_products:[],form:{}}},computed:m(m(m({},Object(o.d)("app",["loading","dense"])),Object(o.d)("model",["prices"])),{},{formTitle:function(){return-1===this.form.id?"New":"Edit"},apiUrl:function(){var e=Object(l.a)(this.id);return"product/".concat(e,"/").concat(O)}}),methods:m(m(m({},Object(o.c)("model",[c.b])),Object(o.b)("model",[i.b,i.c,i.a])),{},{create:function(){this.form=this.$_.cloneDeep(s.b);var e=Object(l.a)(this.id);e>0&&(this.form.product_id=e),this.dialog=!0},edit:function(){this.form=this.$_.cloneDeep(this.selected[0]),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.$refs.form.reset()}))},fetchProducts:(y=p(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GET_MODELS({model:"product",params:{itemsPerPage:-1,temporary:!0}}).then((function(e){var r=e.data;t.list_products=t.$_.map(r,(function(e){return t.$_.pick(e,["id","name"])}))})).catch((function(e){return Object(l.b)(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)}),fetch:(g=p(a.a.mark((function e(t){var r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(this.params=t),e.next=3,this.GET_MODELS({model:O,url:this.apiUrl,params:this.params}).then((function(e){var t=e.meta.total;r.total=t})).catch((function(e){return Object(l.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)}),save:function(){var e=this;this.$refs.form.validate().then((function(t){if(t){var r=e.form;e.SAVE_MODEL({model:O,payload:r,url:"product/".concat(r.product_id,"/").concat(O)}).then(function(){var t=p(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.id>0)){t.next=4;break}e.UPDATE_MODEL({model:O,data:n}),t.next=6;break;case 4:return t.next=6,e.fetch();case 6:e.selected=[],e.close();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=Object(l.b)(t);e.$refs.form.setErrors(r)}))}}))},deleteItem:(_=p(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.DELETE_MODELS({model:O,url:this.apiUrl,ids:this.$_.map(this.selected,"id")}).then(p(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetch();case 2:t.selected=[],t.dialogDelete=!1;case 4:case"end":return e.stop()}}),e)})))).catch((function(e){return Object(l.b)(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)})}),watch:{dialog:function(e){e&&0==this.list_products.length&&this.fetchProducts()}}},x=r("KHd+"),j=Object(x.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{attrs:{cols:"12"}},[r("the-data-table",{attrs:{headers:e.headers,model:e.model,items:e.prices,total:e.total},on:{unselect:function(t){e.selected=[]},fetch:e.fetch,create:e.create,edit:e.edit,delete:function(t){e.dialogDelete=!0}},scopedSlots:e._u([{key:"item.price",fn:function(t){var r=t.item;return[e._v(e._s(e._f("currency")(r.price)))]}},{key:"item.changed_at",fn:function(t){var r=t.item;return[e._v(e._s(e._f("moment")(r.changed_at,"from")))]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),r("the-dialog-form",{attrs:{form:e.form},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("validation-observer",{ref:"form"},[r("validation-provider",{attrs:{name:"product_id"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-autocomplete",{attrs:{items:e.list_products,readonly:e.id>0,"error-messages":n,success:a,loading:!!e.loading,chips:"","item-text":"name","item-value":"id",label:"Product",hint:"The product being updated","persistent-hint":""},model:{value:e.form.product_id,callback:function(t){e.$set(e.form,"product_id",t)},expression:"form.product_id"}})]}}])}),e._v(" "),r("v-menu",{ref:"menuChangedAt",attrs:{"return-value":e.form.changed_at,"close-on-content-click":!1,"min-width":"290px","offset-y":""},on:{"update:returnValue":function(t){return e.$set(e.form,"changed_at",t)},"update:return-value":function(t){return e.$set(e.form,"changed_at",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("validation-provider",{attrs:{name:"changed_at"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,i=t.valid;return[r("v-text-field",e._g(e._b({attrs:{"error-messages":o,success:i,label:"Changed At",hint:"When the price changed",readonly:""},model:{value:e.form.changed_at,callback:function(t){e.$set(e.form,"changed_at",t)},expression:"form.changed_at"}},"v-text-field",a,!1),n))]}}],null,!0)})]}}]),model:{value:e.menuChangedAt,callback:function(t){e.menuChangedAt=t},expression:"menuChangedAt"}},[e._v(" "),r("v-date-picker",{attrs:{max:e.$moment().format("YYYY-MM-DD"),"no-title":"",scrollable:""},model:{value:e.form.changed_at,callback:function(t){e.$set(e.form,"changed_at",t)},expression:"form.changed_at"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menuChangedAt=!1}}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menuChangedAt.save(e.form.changed_at)}}},[e._v("OK")])],1)],1),e._v(" "),r("validation-provider",{attrs:{name:"price"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{label:"Product price",type:"number","error-messages":n,success:a,prefix:"Rp",counter:"",hint:"The updated product price","persistent-hint":""},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})]}}])})],1)],1),e._v(" "),r("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.deleteItem,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e.id>0?r("span",[r("strong",[e._v(e._s(e._f("currency")(n.price)))]),e._v("\n                "+e._s(e._f("moment")(n.changed_at,"from"))+"\n            ")]):r("span",[r("strong",[e._v(e._s(n.product.name))]),e._v("\n                "+e._s(e._f("currency")(n.price))+"\n            ")])]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}})],1)}),[],!1,null,null,null);t.default=j.exports},"UzJ+":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n={id:-1,name:"",email:"",role:{id:-1,name:""}},a={id:-1,name:"",description:"",user:n},o={id:-1,product_id:-1,price:0,changed_at:null,product:a,user:n},i={id:-1,name:"",description:"",user:n,percents:[]}},f5ZI:function(e,t,r){"use strict";var n=r("dhqo"),a=r.n(n),o=r("LvDl"),i=r("L2JU"),c=r("bHnR");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"the-data-table",props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},model:{type:String,default:""},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){return{search:"",searchBox:!1,options:null}},computed:l(l({},Object(i.d)("app",["loading","dense"])),{},{tableTitle:function(){var e=this.value.length;return e>0?"".concat(e," selected"):"".concat(a()(this.$_.startCase(this.model)))}}),methods:l(l({},Object(i.c)("app",[c.l])),{},{toggleSearch:function(){this.searchBox=!this.searchBox,this.searchBox||(this.search="")},fetch:function(){this.$emit("fetch",l(l({},this.options),{},{search:this.search}))}}),watch:{options:{handler:function(){this.fetch()},deep:!0},search:Object(o.debounce)((function(){this.fetch()}),500)}},v=r("KHd+"),f=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,headers:e.headers,items:e.items,search:e.search,options:e.options,"server-items-length":e.total,loading:!!e.loading,dense:e.dense,page:1,"items-per-page":10,"selectable-key":"authorized","sort-by":"updated_at","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{dark:!!e.value.length,dense:e.$vuetify.breakpoint.smAndDown,flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:e.value.length,expression:"value.length"}],attrs:{icon:""},on:{click:function(t){return e.$emit("unselect")}}},n),[r("v-icon",[e._v("mdi-close")])],1)]}}])},[e._v(" "),r("span",[e._v("Cancel")])]),e._v(" "),e.searchBox?e._e():[r("v-toolbar-title",[e._v(e._s(e.tableTitle))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer")],e._v(" "),r("v-slide-x-reverse-transition",[r("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.value.length&&e.searchBox,expression:"!value.length && searchBox"}],attrs:{label:"Search",autofocus:"","single-line":"","hide-details":"","full-width":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.value.length,expression:"!value.length"}],attrs:{icon:""},on:{click:e.toggleSearch}},n),[r("v-icon",[e._v("\n                            "+e._s(e.searchBox?"mdi-close-circle":"mdi-magnify")+"\n                        ")])],1)]}}])},[e._v(" "),r("span",[e._v("Search")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.value.length&&!e.searchBox,expression:"!value.length && !searchBox"}],attrs:{icon:""},on:{click:function(t){return e.$emit("create")}}},n),[r("v-icon",[e._v("mdi-plus")])],1)]}}])},[e._v(" "),r("span",[e._v("Create")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.value.length&&!e.searchBox&&!e.$vuetify.breakpoint.xsOnly,expression:"\n                            !value.length &&\n                            !searchBox &&\n                            !$vuetify.breakpoint.xsOnly\n                        "}],attrs:{icon:""},on:{click:e.TOGGLE_DENSE}},n),[r("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))])],1)]}}])},[e._v(" "),r("span",[e._v(e._s(e.dense?"Larger":"Smaller"))])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:e.value.length,expression:"value.length"}],attrs:{icon:""},on:{click:function(t){return e.$emit("delete")}}},n),[r("v-icon",[e._v("mdi-delete")])],1)]}}])},[e._v(" "),r("span",[e._v("Delete")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:1==e.value.length,expression:"value.length == 1"}],attrs:{icon:""},on:{click:function(t){return e.$emit("edit")}}},n),[r("v-icon",[e._v("mdi-pencil")])],1)]}}])},[e._v(" "),r("span",[e._v("Edit")])])],2)]},proxy:!0},e._l(e.headers,(function(t,r){return{key:"item."+t.value,fn:function(r){var n=r.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.$_.get(n,t.value))+"\n        ")],{item:n})]}}}))],null,!0)})}),[],!1,null,null,null);t.a=f.exports},tax4:function(e,t,r){"use strict";var n=r("L2JU");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={name:"the-dialog-form",props:{value:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},form:{type:Object,default:function(){}},title:{type:String,default:""},width:{type:String,default:"500px"}},computed:o(o({},Object(n.d)("app",["loading"])),{},{formTitle:function(){return this.title?this.title:-1===this.form.id?"New Item":"Edit Item"}})},s=r("KHd+"),l=Object(s.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":e.width,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:!!e.loading}},[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 500px;"},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("submit")}}},[e._t("default"),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],2)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:!!e.loading&&!e.readonly,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.a=l.exports}}]);