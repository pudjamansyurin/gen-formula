(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4KYa":function(e,t,n){"use strict";n.r(t);var o=n("L2JU"),r=n("LvDl"),i=n("UzJ+"),a=n("obwe"),s=n("zhh1"),l=n("UJ9n"),c=n("D8KH");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={mixins:[s.a,s.d,s.f,s.b],components:{AppTopBar:l.a,UserForm:c.a},data:function(){return{model:"user",modelDefault:i.h,form:Object(r.cloneDeep)(d(d({},i.h),{},{password:null,password_confirmation:null})),headers:[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Role",value:"role.name",sortable:!1},{text:"LastAt",value:"last_at"},{text:"LastIp",value:"last_ip"}],listRole:[],changePassword:!1}},computed:d(d({},Object(o.d)("app",["profile"])),Object(o.d)("model",["users"])),methods:{me:function(e){var t=e.id;return this.profile.id==t},chipColor:function(e){return this.me(e)?"primary":"green"},change:function(e){this.changePassword=-1===e.id,this.form=this.copyWithPassword(e)},onCreate:function(){this.change(this.modelDefault)},onEdit:function(e){this.change(e||this.selected[0])},onSave:function(){this.removeUnchangedPassword()},toProfile:function(){this.$router.push({name:"profile"})}},mounted:function(){var e=this;this.fetchList("role").then((function(t){return e.listRole=t.map((function(e){return{id:e.id,name:e.name.toUpperCase()}}))})).catch((function(e){return Object(a.b)(e)}))}},m=n("KHd+"),p=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{selected:e.selected,page:e.model,crud:""},on:{"update:selected":function(t){e.selected=t},edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}}),e._v(" "),n("the-data",{attrs:{items:e.users,options:e.options,headers:e.headers,total:e.total,model:e.model},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"card",fn:function(t){var o=t.item;return[n("v-btn",{attrs:{color:e.chipColor(o),outlined:!o.selected,absolute:"",top:"",right:"",small:"",tile:""}},[e._v("\n                "+e._s(e.me(o)?"Profile":o.role.name)+"\n            ")]),e._v(" "),n("v-card-text",{on:{click:function(t){!e.me(o)&&e.edit(o)}}},[n("div",{staticClass:"overline"},[o.last_at?[e._v("\n                        "+e._s(e._f("moment")(o.last_at,"from"))+"\n                    ")]:[e._v(" Never ")]],2),e._v(" "),n("div",{staticClass:"overline"},[e._v("\n                    "+e._s(o.name)+"\n                ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                    "+e._s(o.email)+"\n                ")])])]}},{key:"item.name",fn:function(t){var o=t.item;return[n("v-chip",{attrs:{color:e.chipColor(o),small:e.dense,dark:""},on:{click:function(t){!e.me(o)&&e.edit(o)}}},[e._v("\n                "+e._s(o.name)+"\n            ")])]}},{key:"item.last_at",fn:function(t){var n=t.item;return[n.last_at?[e._v("\n                "+e._s(e._f("moment")(n.last_at,"from"))+"\n            ")]:[e._v(" Never ")]]}},{key:"item.last_ip",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.last_ip||"None")+"\n        ")]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.remove,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),n("the-dialog-form",{attrs:{form:e.form,title:e.model},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("user-form",{ref:"form",attrs:{"change-pass":e.changePassword,"field-disabled":e.fieldDisabled,creating:e.creating,"list-role":e.listRole},on:{save:e.save,"update:changePass":function(t){e.changePassword=t},"update:change-pass":function(t){e.changePassword=t}},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1)],1)}),[],!1,null,null,null);t.default=p.exports},D8KH:function(e,t,n){"use strict";var o=n("zhh1"),r={mixins:[o.a,o.f],props:{value:{type:Object,required:!0},fieldDisabled:{type:Boolean,default:!1},listRole:{type:Array,default:function(){return[]}},profile:{type:Boolean,default:!1},changePass:{type:Boolean,default:!1},creating:{type:Boolean,default:!0}},computed:{form:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},validator:function(){return this.$refs.form},changePassword:{get:function(){return this.changePass},set:function(e){this.$emit("update:change-pass",e)}}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("save")}}},[n("validation-observer",{ref:"form"},[n("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("v-text-field",{attrs:{"error-messages":o,success:r,counter:!e.profile,autofocus:!e.mobile,label:"Name",type:"text",hint:"This should be unique name","persistent-hint":"",outlined:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),n("validation-provider",{attrs:{name:"email"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("v-text-field",{attrs:{"error-messages":o,success:r,counter:!e.profile,label:"E-mail",type:"email",hint:"This email is for recovery","persistent-hint":"",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}])}),e._v(" "),e.profile?n("v-text-field",{attrs:{type:"text",label:"Role",hint:"Your current role","persistent-hint":"",outlined:"",readonly:""},model:{value:e.form.role.name,callback:function(t){e.$set(e.form.role,"name",t)},expression:"form.role.name"}}):n("validation-provider",{attrs:{name:"role_id"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("v-select",{attrs:{items:e.listRole,"error-messages":o,success:r,"item-text":"name","item-value":"id",label:"Role",hint:"Role for this user",chips:"","persistent-hint":"",outlined:""},model:{value:e.form.role_id,callback:function(t){e.$set(e.form,"role_id",t)},expression:"form.role_id"}})]}}])}),e._v(" "),!e.creating||e.profile?n("v-btn",{staticClass:"my-3",attrs:{color:"red",dark:"",small:"",outlined:""},on:{click:function(t){e.changePassword=!e.changePassword}}},[e._v("\n            "+e._s(e.passwordChangeText)+" Password\n        ")]):e._e(),e._v(" "),e.changePassword?[n("validation-provider",{attrs:{name:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("v-text-field",{attrs:{type:e.passwordState.type,"append-icon":e.passwordState.icon,"error-messages":o,success:r,label:"Password",hint:"Password for this user",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})]}}],null,!1,2493771423)}),e._v(" "),n("validation-provider",{attrs:{name:"password_confirmation"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("v-text-field",{attrs:{type:e.passwordState.type,"append-icon":e.passwordState.icon,"error-messages":o,success:r,label:"Password Confirmation",hint:"Fill again the password",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})]}}],null,!1,1926922202)})]:e._e()],2),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],1)}),[],!1,null,null,null);t.a=a.exports},UJ9n:function(e,t,n){"use strict";var o=n("L2JU"),r=n("LvDl"),i=n("dhqo"),a=n.n(i),s=n("PMce"),l=n("obwe"),c=n("zhh1"),u=n("bHnR");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={mixins:[c.a,c.c],props:{value:{type:Object,default:function(){}},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},crud:{type:Boolean,default:!1},mineTab:{type:Boolean,default:!1}},data:function(){return{searchBox:!1,search:"",tab:0}},computed:v(v({},Object(o.d)("app",["title","dark","dense"])),{},{theTitle:function(){return"".concat(a()(Object(r.startCase)(this.page)))},appBarColor:function(){return this.dark?"grey darken-3":"primary"},searchBoxIcon:function(){return this.mobile||this.search?"mdi-magnify-close":"mdi-magnify"},darkIcon:function(){return this.dark?"mdi-brightness-1":"mdi-brightness-3"},denseIcon:function(){return this.dense?"mdi-table":"mdi-table-large"}}),methods:v(v(v({},Object(o.c)("app",[u.n,u.o,u.m])),Object(o.b)("app",[s.d])),{},{setSearch:function(e){e||(this.search=""),this.searchBox=e},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(l.b)(e)}))}}),watch:{search:Object(r.debounce)((function(e){this.$emit("input",v(v({},this.value),{},{page:1,search:e}))}),500),tab:function(e){this.$emit("input",v(v({},this.value),{},{page:1,mine:e}))}}},p=n("KHd+"),h=Object(p.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-app-bar",{attrs:{color:e.appBarColor,"collapse-on-scroll":!(e.selected.length||e.searchBox||!e.mobile),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("update:selected",[])}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[e.selected.length?n("v-toolbar-title",[e._v("\n                    "+e._s(e.selected.length)+" selected\n                ")]):n("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v("Recent")]),e._v(" "),e.mineTab?n("v-tab",[e._v("Mine")]):e._e()],1)],e._v(" "),n("v-spacer"),e._v(" "),e.selected.length?[n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[n("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),n("v-toolbar-title",[n("span",[e._v(e._s(e.theTitle))])]),e._v(" "),n("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?n("v-text-field",{attrs:{"append-icon":e.searchBoxIcon,autofocus:e.mobile,dark:e.dark,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(t){return e.setSearch(!1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():n("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[n("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),n("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),n("v-card",{attrs:{dark:e.dark}},[n("v-list",{staticClass:"py-0",attrs:{dense:""}},[n("v-list-item",{on:{click:e.TOGGLE_DARK}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.darkIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                "+e._s(e.dark?"Lighter":"Darker")+"\n                            ")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),e.webview?e._e():[n("v-list-item",{on:{click:e.toggleFs}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.fullscreenIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                    "+e._s(e.fullscreen?"Normal-screen":"Full-screen")+"\n                                ")])],1)],1),e._v(" "),n("v-divider")],e._v(" "),e.mobile?e._e():[n("v-list-item",{on:{click:e.TOGGLE_DENSE}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(e.denseIcon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                    "+e._s(e.dense?"Bigger":"Smaller")+"\n                                ")])],1)],1),e._v(" "),n("v-divider")],e._v(" "),n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],2)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogFullscreen,callback:function(t){e.dialogFullscreen=t},expression:"dialogFullscreen"}},[n("v-card",{attrs:{dark:e.dark}},[n("v-card-title",{staticClass:"headline"},[e._v(" Use fullscreen? ")]),e._v(" "),n("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFs(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFs(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=h.exports}}]);