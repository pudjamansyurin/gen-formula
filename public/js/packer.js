(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{UJ9n:function(e,t,n){"use strict";var o=n("L2JU"),r=n("LvDl"),i=n("dhqo"),l=n.n(i),a=n("PMce"),c=n("obwe"),s=n("zhh1"),u=n("bHnR");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={mixins:[s.a],props:{value:{type:Object,default:function(){}},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},crud:{type:Boolean,default:!1},mineTab:{type:Boolean,default:!1}},data:function(){return{dialog:!c.c.get("confirmedFullscreen"),searchBox:!1,search:"",tab:0}},computed:v(v({},Object(o.d)("app",["title","dense","fullscreen"])),{},{theTitle:function(){return"".concat(l()(this.$_.startCase(this.page)))},appBarColor:function(){return this.selected.length?"black":"primary"},searchBoxIcon:function(){return this.mobile||this.search?"mdi-magnify-close":"mdi-magnify"},fullscreenIcon:function(){return this.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"},denseIcon:function(){return this.dense?"mdi-table":"mdi-table-large"}}),methods:v(v(v({},Object(o.c)("app",[u.m,u.n,u.o])),Object(o.b)("app",[a.d])),{},{setSearch:function(e){e||(this.search=""),this.searchBox=e},toggleFs:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirmFs:function(e){var t=this;e&&this.toggleFs(),c.c.set("confirmedFullscreen",!0),this.$nextTick((function(){return t.dialog=!1}))},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(c.b)(e)}))}}),watch:{search:Object(r.debounce)((function(e){this.$emit("input",v(v({},this.value),{},{page:1,search:e}))}),500),tab:function(e){this.$emit("input",v(v({},this.value),{},{page:1,mine:e}))}}},p=n("KHd+"),b=Object(p.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-app-bar",{attrs:{color:e.appBarColor,"collapse-on-scroll":!(e.selected.length||e.searchBox||!e.mobile),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("update:selected",[])}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[e.selected.length?n("v-toolbar-title",[e._v("\n                    "+e._s(e.selected.length)+" selected\n                ")]):n("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v("Recent")]),e._v(" "),e.mineTab?n("v-tab",[e._v("Mine")]):e._e()],1)],e._v(" "),n("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.mobile?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[n("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),n("v-toolbar-title",[n("span",[e._v(e._s(e.theTitle))])]),e._v(" "),n("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?n("v-text-field",{attrs:{"append-icon":e.searchBoxIcon,autofocus:e.mobile,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(t){return e.setSearch(!1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():n("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[n("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),n("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),n("v-card",[n("v-list",{attrs:{dense:""}},[e.webview?e._e():n("v-list-item",{on:{click:e.toggleFs}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.fullscreenIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                "+e._s(e.fullscreen?"Normal-screen":"Full-screen")+"\n                            ")])],1)],1),e._v(" "),e.mobile?e._e():n("v-list-item",{on:{click:e.TOGGLE_DENSE}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.denseIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                "+e._s(e.dense?"Bigger":"Smaller")+"\n                            ")])],1)],1),e._v(" "),n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n                Use fullscreen mode ?\n            ")]),e._v(" "),n("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFs(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFs(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=b.exports},rijc:function(e,t,n){"use strict";n.r(t);var o=n("L2JU"),r=n("UzJ+"),i=(n("obwe"),n("zhh1")),l=n("UJ9n"),a={mixins:[i.a],props:{value:{type:Object,required:!0},fieldDisabled:{type:Boolean,default:!1}},computed:{form:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},validator:function(){return this.$refs.form}}},c=n("KHd+"),s=Object(c.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("save")}}},[n("validation-observer",{ref:"form"},[n("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("v-text-field",{attrs:{"error-messages":o,success:r,readonly:e.fieldDisabled,filled:e.fieldDisabled,autofocus:!e.mobile,label:"Name",type:"text",hint:"The packer's name",counter:"","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])})],1),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],1)}),[],!1,null,null,null).exports;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={mixins:[i.a,i.c],components:{AppTopBar:l.a,PackerForm:s},data:function(){return{model:"packer",modelDefault:r.f,form:this.$_.cloneDeep(r.f),headers:[{text:"Name",value:"name"},{text:"Pack",value:"packs_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}]}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(o.d)("model",["packers"]))},f=Object(c.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{selected:e.selected,page:e.model,"mine-tab":"",crud:""},on:{"update:selected":function(t){e.selected=t},edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}}),e._v(" "),n("the-data",{attrs:{items:e.packers,options:e.options,headers:e.headers,total:e.total,model:e.model},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"card",fn:function(t){var o=t.item;return[n("v-card-text",[n("div",{staticClass:"overline"},[e._v("\n                    "+e._s(e._f("moment")(o.updated_at,"from"))+"\n                ")]),e._v(" "),n("div",{staticClass:"overline"},[e._v("\n                    "+e._s(o.user.name)+"\n                ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                    "+e._s(o.name)+"\n                ")])])]}},{key:"item.name",fn:function(t){var o=t.item;return[n("v-chip",{attrs:{color:e.chipColor(o),small:e.dense,dark:""},on:{click:function(t){return e.edit(o)}}},[e._v("\n                "+e._s(o.name)+"\n            ")])]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(e._f("moment")(n.updated_at,"from"))+"\n        ")]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.remove,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),n("the-dialog-form",{attrs:{form:e.form,readonly:e.fieldDisabled},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("packer-form",{ref:"form",attrs:{"field-disabled":e.fieldDisabled},on:{save:e.save},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);