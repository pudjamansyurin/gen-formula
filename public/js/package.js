(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{UJ9n:function(e,t,n){"use strict";var r=n("L2JU"),i=n("LvDl"),a=n("dhqo"),c=n.n(a),o=n("PMce"),s=n("obwe"),l=n("zhh1"),u=n("bHnR");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={mixins:[l.a],props:{value:{type:Object,default:function(){}},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},crud:{type:Boolean,default:!1},mineTab:{type:Boolean,default:!1}},data:function(){return{dialog:!s.c.get("confirmedFullscreen"),searchBox:!1,search:"",tab:0}},computed:v(v({},Object(r.d)("app",["title","dark","dense","fullscreen"])),{},{theTitle:function(){return"".concat(c()(Object(i.startCase)(this.page)))},appBarColor:function(){return this.dark?"grey darken-3":"primary"},searchBoxIcon:function(){return this.mobile||this.search?"mdi-magnify-close":"mdi-magnify"},darkIcon:function(){return this.dark?"mdi-brightness-1":"mdi-brightness-3"},fullscreenIcon:function(){return this.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"},denseIcon:function(){return this.dense?"mdi-table":"mdi-table-large"}}),methods:v(v(v({},Object(r.c)("app",[u.n,u.o,u.m,u.p])),Object(r.b)("app",[o.d])),{},{setSearch:function(e){e||(this.search=""),this.searchBox=e},toggleFs:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirmFs:function(e){var t=this;e&&this.toggleFs(),s.c.set("confirmedFullscreen",!0),this.$nextTick((function(){return t.dialog=!1}))},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(s.b)(e)}))}}),watch:{search:Object(i.debounce)((function(e){this.$emit("input",v(v({},this.value),{},{page:1,search:e}))}),500),tab:function(e){this.$emit("input",v(v({},this.value),{},{page:1,mine:e}))}}},p=n("KHd+"),_=Object(p.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-app-bar",{attrs:{color:e.appBarColor,"collapse-on-scroll":!(e.selected.length||e.searchBox||!e.mobile),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("update:selected",[])}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[e.selected.length?n("v-toolbar-title",[e._v("\n                    "+e._s(e.selected.length)+" selected\n                ")]):n("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v("Recent")]),e._v(" "),e.mineTab?n("v-tab",[e._v("Mine")]):e._e()],1)],e._v(" "),n("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.mobile?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[n("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),n("v-toolbar-title",[n("span",[e._v(e._s(e.theTitle))])]),e._v(" "),n("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?n("v-text-field",{attrs:{"append-icon":e.searchBoxIcon,autofocus:e.mobile,dark:e.dark,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(t){return e.setSearch(!1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():n("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[n("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),n("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",i,!1),r),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),n("v-card",{attrs:{dark:e.dark}},[n("v-list",{staticClass:"py-0",attrs:{dense:""}},[n("v-list-item",{on:{click:e.TOGGLE_DARK}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.darkIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                "+e._s(e.dark?"Lighter":"Darker")+"\n                            ")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),e.webview?e._e():n("v-list-item",{on:{click:e.toggleFs}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.fullscreenIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                "+e._s(e.fullscreen?"Normal-screen":"Full-screen")+"\n                            ")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),e.mobile?e._e():n("v-list-item",{on:{click:e.TOGGLE_DENSE}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.denseIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                "+e._s(e.dense?"Bigger":"Smaller")+"\n                            ")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{dark:e.dark}},[n("v-card-title",{staticClass:"headline"},[e._v(" Use fullscreen? ")]),e._v(" "),n("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFs(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFs(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=_.exports},drF8:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),i=n.n(r),a=n("L2JU"),c=n("LvDl"),o=n("UzJ+"),s=n("obwe"),l=n("zhh1"),u=n("UJ9n"),d={mixins:[l.a],props:{value:{type:Object,required:!0},fieldDisabled:{type:Boolean,default:!1},listUnit:{type:Array,default:function(){return[]}},listPacker:{type:Array,default:function(){return[]}}},computed:{form:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},validator:function(){return this.$refs.form},priceTotal:function(){return this.form._packers?this.form._packers.reduce((function(e,t){var n=t.content;return e+t.packs.reduce((function(e,t){var n=t.price;return e+Number(n)}),0)/Number(n)}),0).toFixed(2):0}}},v=n("KHd+"),f=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("save")}}},[n("validation-observer",{ref:"form"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-text-field",{attrs:{"error-messages":r,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,autofocus:!e.mobile,label:"Name",type:"text",hint:"The package name",counter:"","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-alert",{staticClass:"py-4 my-0",attrs:{color:"primary",dense:"",outlined:"",text:""}},[n("span",{staticClass:"caption"},[e._v("Total Price")]),n("br"),e._v(" "),n("b",[e._v(e._s(e._f("currency")(e.priceTotal)))])])],1)],1),e._v(" "),n("v-row",[n("v-col",[n("validation-provider",{attrs:{name:"capacity"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-text-field",{attrs:{"error-messages":r,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,label:"Capacity",type:"number",hint:"The package capacity","persistent-hint":""},model:{value:e.form.capacity,callback:function(t){e.$set(e.form,"capacity",e._n(t))},expression:"form.capacity"}})]}}])})],1),e._v(" "),n("v-col",[n("validation-provider",{attrs:{name:"unit_id"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-select",{attrs:{items:e.listUnit,"error-messages":r,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,"item-text":"name","item-value":"id",label:"Unit",hint:"The package unit","persistent-hint":"",attach:""},model:{value:e.form.unit_id,callback:function(t){e.$set(e.form,"unit_id",t)},expression:"form.unit_id"}})]}}])})],1)],1),e._v(" "),e.form._packers?n("validation-provider",{attrs:{name:"_packers"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,i=t.valid;return[n("v-autocomplete",{staticClass:"mb-3",attrs:{items:e.listPacker,"error-messages":r,success:i,readonly:e.fieldDisabled,"item-text":"name",label:"Packer",hint:"The packer","persistent-hint":"","deletable-chips":"","return-object":"",multiple:"",chips:"",attach:""},model:{value:e.form._packers,callback:function(t){e.$set(e.form,"_packers",t)},expression:"form._packers"}})]}}],null,!1,2716500912)}):e._e(),e._v(" "),e.form._packers?e._l(e.form._packers,(function(t,r){return n("v-card",{key:"_packers."+r+".content",staticClass:"mb-3"},[n("v-card-text",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("validation-provider",{attrs:{name:"_packers."+r+".content"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors,a=r.valid;return[n("v-text-field",{attrs:{"error-messages":i,success:a,readonly:e.fieldDisabled,filled:e.fieldDisabled,label:t.name,hint:"The packer content",type:"number","persistent-hint":""},model:{value:t.content,callback:function(n){e.$set(t,"content",e._n(n))},expression:"packer.content"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"8"}},e._l(t.packs,(function(t,i){return n("div",{key:"_packers."+r+".packs."+i+".price"},[n("validation-provider",{attrs:{name:"_packers."+r+".packs."+i+".price"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors,a=r.valid;return[n("v-text-field",{attrs:{"error-messages":i,success:a,readonly:e.fieldDisabled,filled:e.fieldDisabled,label:t.name,prefix:"Rp",type:"number",hint:"The pack price",counter:"","persistent-hint":""},model:{value:t.price,callback:function(n){e.$set(t,"price",e._n(n))},expression:"pack.price"}})]}}],null,!0)})],1)})),0)],1)],1)],1)})):e._e()],2),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],1)}),[],!1,null,null,null).exports,m=n("tZeA");function p(e,t,n,r,i,a,c){try{var o=e[a](c),s=o.value}catch(e){return void n(e)}o.done?t(s):Promise.resolve(s).then(r,i)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){p(a,r,i,c,o,"next",e)}function o(e){p(a,r,i,c,o,"throw",e)}c(void 0)}))}}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g,y,x={mixins:[l.a,l.c,l.f,l.b],components:{AppTopBar:u.a,PackageForm:f,RevTimeline:m.a},data:function(){return{model:"package",modelDefault:o.e,form:Object(c.cloneDeep)(o.e),headers:[{text:"Name",value:"name"},{text:"Capacity",value:"capacity",align:"center"},{text:"Unit",value:"unit.symbol",align:"center"},{text:"Packer",value:"packagers_count",align:"center"},{text:"Price",value:"rev.price",align:"right",sortable:!1,width:150},{text:"Rev",value:"revs_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}],listUnit:[],listPacker:[],listPackerDefault:[]}},computed:h({},Object(a.d)("model",["packages"])),methods:{change:function(e){this.formTabIndex=0,this.listPacker=Object(c.cloneDeep)(this.listPackerDefault),this.form=Object(c.cloneDeep)(e)},onCreate:function(){this.change(this.modelDefault)},onEdit:(y=_(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchDetail(t||this.selected[0]);case 2:t=e.sent,this.change(t);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)}),fetchDetail:(g=_(i.a.mark((function e(t){var n,r,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,this.GET_MODEL({model:this.model,id:n}).then((function(e){r=h(h({},e),{},{_packers:a.makePackersDetail(e.packagers)})}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)}),makePackersDetail:function(e){return e.map((function(e){var t=e.packer,n=e.content,r=e.packets;return{id:t.id,name:t.name,content:n,packs:r.map((function(e){return{id:e.id,name:e.name,price:e.pivot.price}}))}}))},makeListPackers:function(e){return e.map((function(e){return{id:e.id,name:e.name,content:null,packs:e.packs.map((function(e){return{id:e.id,name:e.name,price:null}}))}}))}},mounted:function(){var e=this;this.fetchList("unit").then((function(t){return e.listUnit=t})).catch((function(e){return Object(s.b)(e)})),this.fetchList("packer").then((function(t){e.listPackerDefault=e.makeListPackers(t)})).catch((function(e){return Object(s.b)(e)}))}},O=Object(v.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{selected:e.selected,page:e.model,"mine-tab":"",crud:""},on:{"update:selected":function(t){e.selected=t},edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}}),e._v(" "),n("the-data",{attrs:{items:e.packages,options:e.options,headers:e.headers,total:e.total,model:e.model},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"card",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:e.chipColor(r),outlined:!r.selected,absolute:"",top:"",right:"",small:"",tile:""},on:{click:function(t){return t.stopPropagation(),e.edit(r)}}},[e._v("\n                "+e._s(e._f("currency")(r.rev.price))+"\n            ")]),e._v(" "),n("v-card-text",[n("div",{staticClass:"overline"},[e._v("\n                    "+e._s(e._f("moment")(r.updated_at,"from"))+"\n                ")]),e._v(" "),n("div",{staticClass:"overline"},[e._v("\n                    "+e._s(r.user.name)+"\n                ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                    "+e._s(r.name)+"\n                ")])])]}},{key:"item.name",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.chipColor(r),small:e.dense,dark:""},on:{click:function(t){return e.edit(r)}}},[e._v("\n                "+e._s(r.name)+"\n            ")])]}},{key:"item.rev.price",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(e._f("currency")(n.rev.price))+"\n        ")]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(e._f("moment")(n.updated_at,"from"))+"\n        ")]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.remove,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),n("the-dialog-form",{attrs:{form:e.form,tabs:e.formTabs,tab:e.formTabIndex,readonly:e.fieldDisabled},on:{"update:tab":function(t){e.formTabIndex=t},close:e.close,submit:e.save},scopedSlots:e._u([{key:"DATA",fn:function(){return[n("package-form",{ref:"form",attrs:{"field-disabled":e.fieldDisabled,"list-unit":e.listUnit,"list-packer":e.listPacker},on:{save:e.save},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})]},proxy:!0},{key:"REV",fn:function(){return[e.form.revs?n("rev-timeline",{attrs:{revs:e.form.revs}}):e._e()]},proxy:!0}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)}),[],!1,null,null,null);t.default=O.exports},tZeA:function(e,t,n){"use strict";var r={mixins:[n("zhh1").a],props:{revs:{type:Array,required:!0}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline",{attrs:{dense:"",clipped:""}},e._l(e.revs,(function(t,r){return n("v-timeline-item",{key:t.id,attrs:{"fill-dot":0===r,small:""}},[n("v-card",{attrs:{outlined:"",elevation:"2"}},[n("v-card-subtitle",{staticClass:"py-2"},[t.user?n("b",[e._v("\n                    "+e._s(t.user.name)+"\n                ")]):e._e(),e._v(" "),n("i",{staticClass:"text-right"},[e._v("\n                    - "+e._s(e._f("moment")(t.updated_at,"from"))+"\n                ")])]),e._v(" "),n("v-card-text",[e._t("card-text",[n("v-chip",{attrs:{color:0===r?"primary":""}},[e._v("\n                        "+e._s(e._f("currency")(t.price))+"\n                    ")])],{item:{rev:t,index:r}})],2),e._v(" "),n("v-card-actions",[e._t("card-actions",null,{item:{rev:t,index:r}})],2)],1)],1)})),1)}),[],!1,null,null,null);t.a=a.exports}}]);