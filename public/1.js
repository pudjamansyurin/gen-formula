(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"67TT":function(e,t,r){"use strict";var n=r("L2JU"),o=r("dhqo"),a=r.n(o);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={name:"the-dialog-delete",props:{value:{type:Boolean,default:!1},selected:{type:Array,default:function(){return[]}},model:{type:String,default:""}},computed:c(c({},Object(n.d)("app",["loading"])),{},{question:function(){var e=this.selected.length;return 1===e?"this ".concat(this.model," ?"):"these ".concat(e," ").concat(a()(this.model)," ?")}})},u=r("KHd+"),d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":"290",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:!!e.loading}},[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Confirmation")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"pt-2",style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 300px;"},[e._v("\n            Are you sure to delete "+e._s(e.question)+"\n            "),r("v-chip-group",{attrs:{column:"",small:"","active-class":"primary--text"}},e._l(e.selected,(function(t){return r("v-chip",{key:t.id},[e._t("default",null,{item:t})],2)})),1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:!!e.loading,color:"red",dark:""},on:{click:function(t){return e.$emit("delete")}}},[e._v("Yes, sure")])],1)],1)],1)}),[],!1,null,null,null);t.a=d.exports},"UzJ+":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n={id:-1,name:"",email:"",role:{id:-1,name:""}},o={id:-1,name:"",description:"",user:n},a={id:-1,product_id:-1,price:0,changed_at:null,product:o,user:n},i={id:-1,name:"",description:"",user:n,percents:[]}},f5ZI:function(e,t,r){"use strict";var n=r("dhqo"),o=r.n(n),a=r("LvDl"),i=r("L2JU"),c=r("bHnR");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"the-data-table",props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},model:{type:String,default:""},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){return{search:"",searchBox:!1,options:null}},computed:l(l({},Object(i.d)("app",["loading","dense"])),{},{tableTitle:function(){var e=this.value.length;return e>0?"".concat(e," selected"):"".concat(o()(this.$_.startCase(this.model)))}}),methods:l(l({},Object(i.c)("app",[c.l])),{},{toggleSearch:function(){this.searchBox=!this.searchBox,this.searchBox||(this.search="")},fetch:function(){this.$emit("fetch",l(l({},this.options),{},{search:this.search}))}}),watch:{options:{handler:function(){this.fetch()},deep:!0},search:Object(a.debounce)((function(){this.fetch()}),500)}},f=r("KHd+"),p=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,headers:e.headers,items:e.items,search:e.search,options:e.options,"server-items-length":e.total,loading:!!e.loading,dense:e.dense,page:1,"items-per-page":10,"selectable-key":"selectable","sort-by":"updated_at","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{dark:!!e.value.length,dense:e.$vuetify.breakpoint.smAndDown,flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:e.value.length,expression:"value.length"}],attrs:{icon:""},on:{click:function(t){return e.$emit("unselect")}}},n),[r("v-icon",[e._v("mdi-close")])],1)]}}])},[e._v(" "),r("span",[e._v("Cancel")])]),e._v(" "),e.searchBox?e._e():[r("v-toolbar-title",[e._v(e._s(e.tableTitle))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer")],e._v(" "),r("v-slide-x-reverse-transition",[r("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.value.length&&e.searchBox,expression:"!value.length && searchBox"}],attrs:{label:"Search",autofocus:"","single-line":"","hide-details":"","full-width":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.value.length,expression:"!value.length"}],attrs:{icon:""},on:{click:e.toggleSearch}},n),[r("v-icon",[e._v("\n                            "+e._s(e.searchBox?"mdi-close-circle":"mdi-magnify")+"\n                        ")])],1)]}}])},[e._v(" "),r("span",[e._v("Search")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.value.length&&!e.searchBox,expression:"!value.length && !searchBox"}],attrs:{icon:""},on:{click:function(t){return e.$emit("create")}}},n),[r("v-icon",[e._v("mdi-plus")])],1)]}}])},[e._v(" "),r("span",[e._v("Create")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.value.length&&!e.searchBox&&!e.$vuetify.breakpoint.xsOnly,expression:"\n                            !value.length &&\n                            !searchBox &&\n                            !$vuetify.breakpoint.xsOnly\n                        "}],attrs:{icon:""},on:{click:e.TOGGLE_DENSE}},n),[r("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))])],1)]}}])},[e._v(" "),r("span",[e._v(e._s(e.dense?"Larger":"Smaller"))])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:e.value.length,expression:"value.length"}],attrs:{icon:""},on:{click:function(t){return e.$emit("delete")}}},n),[r("v-icon",[e._v("mdi-delete")])],1)]}}])},[e._v(" "),r("span",[e._v("Delete")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:1==e.value.length,expression:"value.length == 1"}],attrs:{icon:""},on:{click:function(t){return e.$emit("edit")}}},n),[r("v-icon",[e._v("mdi-pencil")])],1)]}}])},[e._v(" "),r("span",[e._v("Edit")])])],2)]},proxy:!0},e._l(e.headers,(function(t,r){return{key:"item."+t.value,fn:function(r){var n=r.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.$_.get(n,t.value))+"\n        ")],{item:n})]}}}))],null,!0)})}),[],!1,null,null,null);t.a=p.exports},tax4:function(e,t,r){"use strict";var n=r("L2JU");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={name:"the-dialog-form",props:{value:{type:Boolean,default:!1},form:{type:Object,default:function(){}},title:{type:String,default:""},width:{type:String,default:"500px"}},computed:a(a({},Object(n.d)("app",["loading"])),{},{formTitle:function(){return this.title?this.title:-1===this.form.id?"New Item":"Edit Item"}})},s=r("KHd+"),l=Object(s.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":e.width,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:!!e.loading}},[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 500px;"},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("submit")}}},[e._t("default"),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],2)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:!!e.loading,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.a=l.exports},yTAQ:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=r("L2JU"),i=r("D4Jh"),c=r("mXMD"),s=r("UzJ+"),l=r("txcL"),u=r("f5ZI"),d=r("tax4"),f=r("67TT");function p(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){p(a,n,o,i,c,"next",e)}function c(e){p(a,n,o,i,c,"throw",e)}i(void 0)}))}}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _,g,y,O="formula",w={name:O,components:{TheDataTable:u.a,TheDialogForm:d.a,TheDialogDelete:f.a},data:function(){return{model:O,params:{},total:0,selected:[],headers:[{text:"Name",value:"name"},{text:"Description",value:"description"},{text:"Tot.Price",value:"total_price",align:"right",sortable:!1,width:150},{text:"Rel.Product",value:"percents_len",align:"center",sortable:!1},{text:"Creator",value:"user.name"},{text:"Updated At",value:"updated_at"}],dialog:!1,dialogDelete:!1,dialogPercent:!1,list_products:[],form:this.$_.cloneDeep(s.a)}},computed:h(h(h({},Object(a.d)("app",["loading","dense"])),Object(a.d)("model",["formulas"])),{},{formPercentTitle:function(){return this.form.name||"Related products"},totalPercentage:function(){return this.$_.reduce(this.form.percents,(function(e,t){return e+Number(t.percent)}),0)}}),methods:h(h(h({},Object(a.c)("model",[c.b])),Object(a.b)("model",[i.b,i.c,i.a])),{},{create:function(){this.form=this.$_.cloneDeep(s.a),this.dialog=!0},edit:function(){this.form=this.$_.cloneDeep(this.selected[0]),this.dialog=!0},editPercent:function(e){this.form=this.$_.cloneDeep(this.$_.find(this.formulas,{id:e})),this.dialogPercent=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.$refs.form.reset()}))},closePercent:function(){var e=this;this.dialogPercent=!1,this.$nextTick((function(){e.$refs.form_percent.reset()}))},fetchProducts:(y=v(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GET_MODELS({model:"product",params:{itemsPerPage:-1,temporary:!0}}).then((function(e){var r=e.data;t.list_products=t.$_.map(r,(function(e){return{product:{id:e.id,name:e.name},percent:0}}))})).catch((function(e){return Object(l.b)(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)}),fetch:(g=v(o.a.mark((function e(t){var r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(this.params=t),e.next=3,this.GET_MODELS({model:O,params:this.params}).then((function(e){var t=e.meta;r.total=t.total})).catch((function(e){return Object(l.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)}),savePercent:function(){var e=this;this.$refs.form_percent.validate().then((function(t){t&&e.SAVE_MODEL({url:"formula/".concat(e.form.id,"/percent"),payload:{formula:e.$_.map(e.form.percents,(function(e){return{product_id:e.product.id,percent:e.percent}}))}}).then(function(){var t=v(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.UPDATE_MODEL({model:O,data:r}),e.closePercent();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=Object(l.b)(t);e.$refs.form_percent.setErrors(r)}))}))},save:function(){var e=this;this.$refs.form.validate().then((function(t){if(t){var r=e.form;e.SAVE_MODEL({model:O,payload:r}).then(function(){var t=v(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.id>0)){t.next=4;break}e.UPDATE_MODEL({model:O,data:n}),t.next=6;break;case 4:return t.next=6,e.fetch();case 6:e.selected=[],e.close();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=Object(l.b)(t);e.$refs.form.setErrors(r)}))}}))},deleteItem:(_=v(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.DELETE_MODELS({model:O,ids:this.$_.map(this.selected,"id")}).then(v(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetch();case 2:t.selected=[],t.dialogDelete=!1;case 4:case"end":return e.stop()}}),e)})))).catch((function(e){return Object(l.b)(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)})}),watch:{dialogPercent:function(e){e&&0==this.list_products.length&&this.fetchProducts()}}},x=r("KHd+"),j=Object(x.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{attrs:{cols:"12"}},[r("the-data-table",{attrs:{headers:e.headers,model:e.model,items:e.formulas,total:e.total},on:{unselect:function(t){e.selected=[]},fetch:e.fetch,create:e.create,edit:e.edit,delete:function(t){e.dialogDelete=!0}},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[r("v-chip",{attrs:{color:"primary",small:e.dense},on:{click:function(t){return e.editPercent(n.id)}}},[e._v(e._s(n.name))])]}},{key:"item.total_price",fn:function(t){var r=t.item;return[e._v(e._s(e._f("currency")(r.total_price)))]}},{key:"item.percents_len",fn:function(t){var r=t.item;return[e._v(e._s(r.percents.length))]}},{key:"item.updated_at",fn:function(t){var r=t.item;return[e._v(e._s(e._f("moment")(r.updated_at,"from")))]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),r("the-dialog-form",{attrs:{form:e.form},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("validation-observer",{ref:"form"},[r("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-text-field",{attrs:{label:"Formula name",type:"text","error-messages":n,success:o,counter:"",hint:"This is to identify the formula","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),r("validation-provider",{attrs:{name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-text-field",{attrs:{label:"Formula description",type:"text","error-messages":n,success:o,counter:"",hint:"Short description about the formula","persistent-hint":""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})]}}])})],1)],1),e._v(" "),r("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.deleteItem,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(r.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),r("the-dialog-form",{attrs:{title:e.formPercentTitle,width:"700px"},on:{close:e.closePercent,submit:e.savePercent},model:{value:e.dialogPercent,callback:function(t){e.dialogPercent=t},expression:"dialogPercent"}},[r("validation-observer",{ref:"form_percent"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("validation-provider",{attrs:{name:"formula"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-autocomplete",{attrs:{items:e.list_products,"error-messages":n,success:o,loading:!!e.loading,chips:"",multiple:"","auto-select-first":"",clearable:"","deletable-chips":"","item-text":"product.name","item-value":"product.id",label:"Related products",hint:"The related products","persistent-hint":"","return-object":""},model:{value:e.form.percents,callback:function(t){e.$set(e.form,"percents",t)},expression:"form.percents"}})]}}])}),e._v(" "),r("validation-provider",{attrs:{name:"total_percentage"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-text-field",{staticClass:"mt-3",attrs:{label:"Total Percentage",type:"number",value:e.totalPercentage,"error-messages":n,success:o,suffix:"%",hint:"This shoudl be 100%",readonly:"",filled:"","persistent-hint":""}})]}}])})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},e._l(e.form.percents,(function(t,n){return r("validation-provider",{key:t.product.id,attrs:{name:"formula."+n+".percent"},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors,a=n.valid;return[r("v-text-field",{attrs:{label:t.product.name,type:"number","error-messages":o,success:a,suffix:"%",hint:"This product's percentage","persistent-hint":""},model:{value:t.percent,callback:function(r){e.$set(t,"percent",e._n(r))},expression:"el.percent"}})]}}],null,!0)})})),1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=j.exports}}]);
//# sourceMappingURL=1.js.map