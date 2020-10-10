(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{I4ov:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),i=r("L2JU"),o=r("LvDl"),l=(r("dhqo"),r("UzJ+")),c=r("obwe"),s=r("zhh1"),u=r("UJ9n");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={mixins:[s.a],props:{value:{type:Object,required:!0},modelDefault:{type:Object,required:!0},fieldDisabled:{type:Boolean,default:!1},listPackage:{type:Array,default:function(){return[]}},listFormula:{type:Array,default:function(){return[]}}},computed:{form:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},validator:function(){return this.$refs.form},listPackageSecond:function(){var e=this,t=this.form._products[0].package;return this.saleUnitSymbol&&t?this.listPackage.filter((function(t){return t.unit.symbol==e.saleUnitSymbol})).filter((function(e){return e.id!=t.id})):this.listPackage},listFormulaSecond:function(){var e=this.form._products[0].formula;return e?this.listFormula.filter((function(t){return t.id!=e.id})):this.listFormula},salePackage:function(){return this.form._products[0].package},saleUnitSymbol:function(){if(this.salePackage)return this.salePackage.unit.symbol},saleCapacity:function(){return this.salePackage?Number(this.salePackage.capacity):0},saleFilled:function(){return Number(this.form.filled)*this.saleCapacity/100},saleRatio:function(){return this.form._products.reduce((function(e,t){var r=t.ratio;return e+Number(r)}),0)},saleReady:function(){var e=this.form,t=e._products;return!(!e.filled||t.some((function(e){var t=e.package,r=e.formula,n=e.ratio;return!t||!r||!n})))},priceTotal:function(){var e=this;return this.saleReady?this.form._products.reduce((function(t,r){return t+e.calcProductRMP(r)}),0):0}},methods:{getProductRMCS:function(e){var t=e.price,r=e.price_liter;return Number("KG"==this.saleUnitSymbol?t:r)},calcProductFilled:function(e){return Number(e)*this.saleFilled/this.saleRatio},calcProductRMP:function(e){var t=e.package,r=e.formula,n=e.ratio;return this.getProductRMCS(r.rev)*this.calcProductFilled(n)+Number(t.rev.price)},onComponentChange:function(e){if(e>1){var t=Object(o.cloneDeep)(this.modelDefault._products[0]);this.form.filled=100,this.form._products.push(t)}else this.form._products[0].ratio=1,this.form._products.pop()}},watch:{listPackageSecond:function(e){var t=this.form._products;t.length>1&&t[1].package&&(e.find((function(e){return e.id==t[1].package.id}))||t.splice(1,1,f(f({},t[1]),{},{package:null})))},listFormulaSecond:function(e){var t=this.form._products;t.length>1&&t[1].formula&&(e.find((function(e){return e.id==t[1].formula.id}))||t.splice(1,1,f(f({},t[1]),{},{formula:null})))}}},p=r("KHd+"),_=Object(p.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("save")}}},[r("validation-observer",{ref:"form"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{"error-messages":n,success:a,readonly:e.fieldDisabled,filled:e.fieldDisabled,autofocus:!e.mobile,label:"Sale name",type:"text",hint:"This is to identify the sale",counter:"","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-alert",{staticClass:"py-4 my-0",attrs:{color:"primary",dense:"",outlined:"",text:""}},[r("span",{staticClass:"caption"},[e._v("Total RMP")]),r("br"),e._v(" "),r("b",[e._v(e._s(e._f("currency")(e.priceTotal.toFixed(2))))])])],1)],1),e._v(" "),r("validation-provider",{attrs:{name:"_products"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-radio-group",{attrs:{value:e.form._products.length,"error-messages":n,success:a,readonly:e.fieldDisabled,filled:e.fieldDisabled,row:!e.mobile,"hide-details":"auto"},on:{change:e.onComponentChange},scopedSlots:e._u([{key:"label",fn:function(){return[r("div",{staticClass:"caption"},[e._v("Component :")])]},proxy:!0}],null,!0)},[e._v(" "),r("v-radio",{attrs:{label:"1 Product",value:1}}),e._v(" "),r("v-radio",{attrs:{label:"2 Product",value:2}})],1)]}}])}),e._v(" "),r("v-divider",{staticClass:"mt-1"}),e._v(" "),e.form._products?r("v-row",e._l(e.form._products,(function(t,n){return r("v-col",{key:n,attrs:{cols:"12",sm:12/e.form._products.length}},[r("v-card",{attrs:{outlined:""}},[r("v-card-text",[r("v-row",{staticClass:"mb-3",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("validation-provider",{attrs:{name:"_products."+n+".package_id"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.errors,o=a.valid;return[r("v-autocomplete",{attrs:{items:0==n?e.listPackage:e.listPackageSecond,"error-messages":i,success:o,readonly:e.fieldDisabled,filled:e.fieldDisabled,"item-text":"name","item-value":"id",label:"Package",hint:"The packages","persistent-hint":"",chips:"",attach:"","return-object":""},model:{value:t.package,callback:function(r){e.$set(t,"package",r)},expression:"product.package"}})]}}],null,!0)})],1),e._v(" "),t.package?r("v-col",{attrs:{cols:"12"}},[r("v-chip",{attrs:{color:"primary",dark:"",label:""}},[e._v("\n                                    "+e._s(e._f("currency")(t.package.rev.price))+"\n                                ")]),e._v(" "),r("v-chip",{attrs:{color:0==n?"primary":"",dark:0==n,label:""}},[e._v("\n                                    "+e._s(t.package.capacity)+"\n                                    "+e._s(t.package.unit.name)+"\n                                ")])],1):e._e()],1),e._v(" "),t.package?r("v-row",{staticClass:"mb-3",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("validation-provider",{attrs:{name:"_products."+n+".formula_id"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.errors,o=a.valid;return[r("v-autocomplete",{attrs:{items:0==n?e.listFormula:e.listFormulaSecond,"error-messages":i,success:o,readonly:e.fieldDisabled,filled:e.fieldDisabled,"item-text":"name","item-value":"id",label:"Formula",hint:"The formulas","persistent-hint":"",chips:"",attach:"","return-object":""},model:{value:t.formula,callback:function(r){e.$set(t,"formula",r)},expression:"product.formula"}})]}}],null,!0)})],1),e._v(" "),t.formula?r("v-col",{attrs:{cols:"12"}},[r("v-chip",{attrs:{color:"KG"==e.saleUnitSymbol?"primary":"",dark:"KG"==e.saleUnitSymbol,label:""}},[e._v("\n                                    "+e._s(e._f("currency")(t.formula.rev.price))+"\n                                    / KG\n                                ")]),e._v(" "),r("v-chip",{attrs:{color:"L"==e.saleUnitSymbol?"primary":"",dark:"L"==e.saleUnitSymbol,label:""}},[e._v("\n                                    "+e._s(e._f("currency")(t.formula.rev.price_liter))+"\n                                    / L\n                                ")])],1):e._e()],1):e._e(),e._v(" "),t.formula?r("v-row",{staticClass:"mb-3",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[e.form._products.length>1?r("validation-provider",{attrs:{name:"_products."+n+".ratio"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.errors,i=n.valid;return[r("v-text-field",{attrs:{"error-messages":a,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,label:"Filled Ratio",type:"number",hint:"The product filled ratio","persistent-hint":""},model:{value:t.ratio,callback:function(r){e.$set(t,"ratio",e._n(r))},expression:"product.ratio"}})]}}],null,!0)}):r("validation-provider",{attrs:{name:"filled"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{"error-messages":n,success:a,readonly:e.fieldDisabled,filled:e.fieldDisabled,label:"Filled Percentage",type:"number",prefix:"%",hint:"The product filled percentage","persistent-hint":"",reverse:""},model:{value:e.form.filled,callback:function(t){e.$set(e.form,"filled",e._n(t))},expression:"form.filled"}})]}}],null,!0)})],1),e._v(" "),e.saleReady?r("v-col",{attrs:{cols:"12"}},[r("v-chip",{attrs:{color:"primary",dark:"",label:""}},[e._v("\n                                    "+e._s(e._f("currency")(e.calcProductRMP(t)))+"\n                                ")]),e._v(" "),r("v-chip",{attrs:{label:""}},[e._v("\n                                    "+e._s(e.calcProductFilled(t.ratio).toFixed(2))+"\n                                    /\n                                    "+e._s(t.package.capacity)+"\n                                    "+e._s(t.package.unit.name)+"\n                                ")])],1):e._e()],1):e._e()],1)],1)],1)})),1):e._e()],1),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],1)}),[],!1,null,null,null).exports,b=r("tZeA");function h(e,t,r,n,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){h(i,n,a,o,l,"next",e)}function l(e){h(i,n,a,o,l,"throw",e)}o(void 0)}))}}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x,P,j={mixins:[s.a,s.d,s.g,s.b],components:{AppTopBar:u.a,SaleForm:_,RevTimeline:b.a},data:function(){return{model:"sale",modelDefault:l.g,form:Object(o.cloneDeep)(l.g),headers:[{text:"Name",value:"name"},{text:"Price",value:"rev.price",align:"right",sortable:!1,width:150},{text:"Product",value:"products_count",align:"center"},{text:"Rev",value:"revs_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}],listPackage:[],listFormula:[]}},computed:k(k({},Object(i.d)("model",["sales"])),{},{formWidth:function(){var e=this.form._products;return e&&e.length>1?1e3:500}}),methods:{change:function(e){this.formTabIndex=0,this.form=Object(o.cloneDeep)(e)},onCreate:function(){this.change(this.modelDefault)},onEdit:(P=g(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchDetail(t||this.selected[0]);case 2:t=e.sent,this.change(t);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return P.apply(this,arguments)}),onSave:function(){this.form._products=this.form._products.map((function(e){return k(k({},e),{},{package_id:Object(o.get)(e.package,"id")||null,formula_id:Object(o.get)(e.formula,"id")||null,ratio:Number(e.ratio)})}))},fetchDetail:(x=g(a.a.mark((function e(t){var r,n,i=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.next=3,this.GET_MODEL({model:this.model,id:r}).then((function(e){n=k(k({},e),{},{_products:i.makeProductsDetail(e.products)})}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return x.apply(this,arguments)}),makeProductsDetail:function(e){return e.map((function(e){var t=e.formula,r=e.package,n=e.ratio;return{formula:t,package:r,ratio:Number(n)}}))}},mounted:function(){var e=this;this.fetchList("package").then((function(t){return e.listPackage=t})).catch((function(e){return Object(c.b)(e)})),this.fetchList("formula").then((function(t){return e.listFormula=t})).catch((function(e){return Object(c.b)(e)}))}},w=Object(p.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("app-top-bar",{attrs:{selected:e.selected,page:e.model,"mine-tab":"",crud:""},on:{"update:selected":function(t){e.selected=t},edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}}),e._v(" "),r("the-data",{attrs:{items:e.sales,options:e.options,headers:e.headers,total:e.total,model:e.model},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"card",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{color:e.chipColor(n),outlined:!n.selected,absolute:"",top:"",right:"",small:"",tile:""}},[e._v("\n                "+e._s(e._f("currency")(n.rev.price))+"\n            ")]),e._v(" "),r("v-card-text",{on:{click:function(t){return e.edit(n)}}},[r("div",{staticClass:"overline"},[e._v("\n                    "+e._s(e._f("moment")(n.updated_at,"from"))+"\n                ")]),e._v(" "),r("div",{staticClass:"overline"},[e._v("\n                    "+e._s(n.user.name)+"\n                ")]),e._v(" "),r("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                    "+e._s(n.name)+"\n                ")])])]}},{key:"item.name",fn:function(t){var n=t.item;return[r("v-chip",{attrs:{color:e.chipColor(n),small:e.dense,dark:""},on:{click:function(t){return e.edit(n)}}},[e._v("\n                "+e._s(n.name)+"\n            ")])]}},{key:"item.filled",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(r.filled)+" %\n        ")]}},{key:"item.rev.price",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(e._f("currency")(r.rev.price))+"\n        ")]}},{key:"item.updated_at",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(e._f("moment")(r.updated_at,"from"))+"\n        ")]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),r("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.remove,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(r.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),r("the-dialog-form",{attrs:{form:e.form,tabs:e.formTabs,tab:e.formTabIndex,readonly:e.fieldDisabled,width:e.formWidth},on:{"update:tab":function(t){e.formTabIndex=t},close:e.close,submit:e.save},scopedSlots:e._u([{key:"DATA",fn:function(){return[r("sale-form",{ref:"form",attrs:{"model-default":e.modelDefault,"field-disabled":e.fieldDisabled,"list-package":e.listPackage,"list-formula":e.listFormula},on:{save:e.save},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})]},proxy:!0},{key:"REV",fn:function(){return[e.form.revs?r("rev-timeline",{attrs:{revs:e.form.revs}}):e._e()]},proxy:!0}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)}),[],!1,null,null,null);t.default=w.exports},UJ9n:function(e,t,r){"use strict";var n=r("L2JU"),a=r("LvDl"),i=r("dhqo"),o=r.n(i),l=r("PMce"),c=r("obwe"),s=r("zhh1"),u=r("bHnR");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={mixins:[s.a,s.c],props:{value:{type:Object,default:function(){}},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},crud:{type:Boolean,default:!1},mineTab:{type:Boolean,default:!1}},data:function(){return{searchBox:!1,search:"",tab:0}},computed:f(f({},Object(n.d)("app",["title","dark","dense"])),{},{theTitle:function(){return"".concat(o()(Object(a.startCase)(this.page)))},appBarColor:function(){return this.dark?"grey darken-3":"primary"},searchBoxIcon:function(){return this.mobile||this.search?"mdi-magnify-close":"mdi-magnify"},darkIcon:function(){return this.dark?"mdi-brightness-1":"mdi-brightness-3"},denseIcon:function(){return this.dense?"mdi-table":"mdi-table-large"}}),methods:f(f(f({},Object(n.c)("app",[u.n,u.o,u.m])),Object(n.b)("app",[l.d])),{},{setSearch:function(e){e||(this.search=""),this.searchBox=e},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(c.b)(e)}))}}),watch:{search:Object(a.debounce)((function(e){this.$emit("input",f(f({},this.value),{},{page:1,search:e}))}),500),tab:function(e){this.$emit("input",f(f({},this.value),{},{page:1,mine:e}))}}},p=r("KHd+"),_=Object(p.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("v-app-bar",{attrs:{color:e.appBarColor,"collapse-on-scroll":!(e.selected.length||e.searchBox||!e.mobile),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[r("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("update:selected",[])}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-divider",{staticClass:"mx-2",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[e.selected.length?r("v-toolbar-title",[e._v("\n                    "+e._s(e.selected.length)+" selected\n                ")]):r("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("Recent")]),e._v(" "),e.mineTab?r("v-tab",[e._v("Mine")]):e._e()],1)],e._v(" "),r("v-spacer"),e._v(" "),e.selected.length?[r("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[r("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[r("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[r("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),r("v-toolbar-title",[r("span",[e._v(e._s(e.theTitle))])]),e._v(" "),r("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?r("v-text-field",{attrs:{"append-icon":e.searchBoxIcon,autofocus:e.mobile,dark:e.dark,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(t){return e.setSearch(!1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():r("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[r("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),r("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",a,!1),n),[r("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),r("v-card",{attrs:{dark:e.dark}},[r("v-list",{staticClass:"py-0",attrs:{dense:""}},[r("v-list-item",{on:{click:e.TOGGLE_DARK}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.darkIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                                "+e._s(e.dark?"Lighter":"Darker")+"\n                            ")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),e.webview?e._e():[r("v-list-item",{on:{click:e.toggleFs}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.fullscreenIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                                    "+e._s(e.fullscreen?"Normal-screen":"Full-screen")+"\n                                ")])],1)],1),e._v(" "),r("v-divider")],e._v(" "),e.mobile?e._e():[r("v-list-item",{on:{click:e.TOGGLE_DENSE}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.denseIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                                    "+e._s(e.dense?"Bigger":"Smaller")+"\n                                ")])],1)],1),e._v(" "),r("v-divider")],e._v(" "),r("v-list-item",{attrs:{to:{name:"profile"}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list-item",{on:{click:e.logout}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-logout")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Logout")])],1)],1)],2)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?r("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogFullscreen,callback:function(t){e.dialogFullscreen=t},expression:"dialogFullscreen"}},[r("v-card",{attrs:{dark:e.dark}},[r("v-card-title",{staticClass:"headline"},[e._v(" Use fullscreen? ")]),e._v(" "),r("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFs(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),r("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFs(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=_.exports},tZeA:function(e,t,r){"use strict";var n={mixins:[r("zhh1").a],props:{revs:{type:Array,required:!0}}},a=r("KHd+"),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-timeline",{attrs:{dense:"",clipped:""}},e._l(e.revs,(function(t,n){return r("v-timeline-item",{key:t.id,attrs:{"fill-dot":0===n,small:""}},[r("v-card",{attrs:{outlined:"",elevation:"2"}},[r("v-card-subtitle",{staticClass:"py-2"},[t.user?r("b",[e._v("\n                    "+e._s(t.user.name)+"\n                ")]):e._e(),e._v(" "),r("i",{staticClass:"text-right"},[e._v("\n                    - "+e._s(e._f("moment")(t.updated_at,"from"))+"\n                ")])]),e._v(" "),r("v-card-text",[e._t("card-text",[r("v-chip",{attrs:{color:0===n?"primary":""}},[e._v("\n                        "+e._s(e._f("currency")(t.price))+"\n                    ")])],{item:{rev:t,index:n}})],2),e._v(" "),r("v-card-actions",[e._t("card-actions",null,{item:{rev:t,index:n}})],2)],1)],1)})),1)}),[],!1,null,null,null);t.a=i.exports}}]);