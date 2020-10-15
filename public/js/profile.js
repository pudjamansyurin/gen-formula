(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{D8KH:function(e,t,i){"use strict";var n=i("zhh1"),r={mixins:[n.a,n.f],props:{value:{type:Object,required:!0},fieldDisabled:{type:Boolean,default:!1},listRole:{type:Array,default:function(){return[]}},profile:{type:Boolean,default:!1},changePass:{type:Boolean,default:!1},creating:{type:Boolean,default:!0}},computed:{form:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},validator:function(){return this.$refs.form},changePassword:{get:function(){return this.changePass},set:function(e){this.$emit("update:change-pass",e)}}}},o=i("KHd+"),a=Object(o.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("save")}}},[i("validation-observer",{ref:"form"},[i("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,r=t.valid;return[i("v-text-field",{attrs:{"error-messages":n,success:r,counter:!e.profile,autofocus:!e.mobile,label:"Name",type:"text",hint:"This should be unique name","persistent-hint":"",outlined:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),i("validation-provider",{attrs:{name:"email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,r=t.valid;return[i("v-text-field",{attrs:{"error-messages":n,success:r,counter:!e.profile,label:"E-mail",type:"email",hint:"This email is for recovery","persistent-hint":"",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}])}),e._v(" "),e.profile?i("v-text-field",{attrs:{type:"text",label:"Role",hint:"Your current role","persistent-hint":"",outlined:"",readonly:""},model:{value:e.form.role.name,callback:function(t){e.$set(e.form.role,"name",t)},expression:"form.role.name"}}):i("validation-provider",{attrs:{name:"role_id"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,r=t.valid;return[i("v-select",{attrs:{items:e.listRole,"error-messages":n,success:r,"item-text":"name","item-value":"id",label:"Role",hint:"Role for this user",chips:"","persistent-hint":"",outlined:""},model:{value:e.form.role_id,callback:function(t){e.$set(e.form,"role_id",t)},expression:"form.role_id"}})]}}])}),e._v(" "),!e.creating||e.profile?i("v-btn",{staticClass:"mt-3",attrs:{color:"red",dark:"",small:"",outlined:""},on:{click:function(t){e.changePassword=!e.changePassword}}},[e._v("\n            "+e._s(e.passwordChangeText)+" Password\n        ")]):e._e(),e._v(" "),e.changePassword?[i("validation-provider",{attrs:{name:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,r=t.valid;return[i("v-text-field",{attrs:{type:e.passwordState.type,"append-icon":e.passwordState.icon,"error-messages":n,success:r,label:"Password",hint:"Password for this user",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})]}}],null,!1,2493771423)}),e._v(" "),i("validation-provider",{attrs:{name:"password_confirmation"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,r=t.valid;return[i("v-text-field",{attrs:{type:e.passwordState.type,"append-icon":e.passwordState.icon,"error-messages":n,success:r,label:"Password Confirmation",hint:"Fill again the password",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})]}}],null,!1,1926922202)})]:e._e()],2),e._v(" "),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],1)}),[],!1,null,null,null);t.a=a.exports},GgfX:function(e,t,i){"use strict";i.r(t);var n=i("o0o1"),r=i.n(n),o=i("L2JU"),a=i("LvDl"),s=i("UzJ+"),l=i("obwe"),c=i("zhh1"),v=i("PMce"),d=i("bHnR"),u=i("UJ9n"),f=i("D8KH");function m(e,t,i,n,r,o,a){try{var s=e[o](a),l=s.value}catch(e){return void i(e)}s.done?t(l):Promise.resolve(l).then(n,r)}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){h(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var b={mixins:[c.a,c.f],components:{AppTopBar:u.a,UserForm:f.a},data:function(){return{model:"profile",modelDefault:s.h,form:Object(a.cloneDeep)(_(_({},s.h),{},{password:null,password_confirmation:null})),editting:!1,changePassword:!1}},mounted:function(){this.GET_PROFILE().catch((function(e){return Object(l.b)(e)}))},created:function(){},computed:_(_({},Object(o.d)("app",["profile"])),{},{verifier:function(){var e=this.profile.email_verified_at;return{text:e?"Verified":"Verify",color:e?"teal":"orange",icon:e?"mdi-checkbox-marked-circle":"mdi-help-circle-outline"}}}),methods:_(_(_({},Object(o.c)("app",[d.h,d.f])),Object(o.b)("app",[v.e,v.b,v.g])),{},{closeProfile:function(){var e=this;this.editting=!1,this.$nextTick((function(){return e.$refs.form.validator.reset()}))},editProfile:function(e){var t=this;this.changePassword=!1,this.form=this.copyWithPassword(this.profile),this.$nextTick((function(){return t.editting=!0}))},saveProfile:function(){var e=this;this.removeUnchangedPassword(),this.$refs.form.validator.validate().then(function(){var t,i=(t=r.a.mark((function t(i){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=3;break}return t.next=3,e.UPDATE_PROFILE({payload:e.form}).then((function(){return e.closeProfile()})).catch((function(t){return e.$refs.form.validator.setErrors(Object(l.b)(t))}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(n,r){var o=t.apply(e,i);function a(e){m(o,n,r,a,s,"next",e)}function s(e){m(o,n,r,a,s,"throw",e)}a(void 0)}))});return function(e){return i.apply(this,arguments)}}())},resend:function(){this.profile.email_verified_at||this.RESEND().catch((function(e){return Object(l.b)(e)}))}})},g=i("KHd+"),w=Object(g.a)(b,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fragment",[i("app-top-bar",{attrs:{page:"Profile"}}),e._v(" "),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"10",md:"9"}},[i("v-card",{directives:[{name:"show",rawName:"v-show",value:!e.editting,expression:"!editting"}],attrs:{dark:e.dark,loading:!!e.loading}},[i("v-list-item",[i("v-list-item-avatar",{attrs:{color:"grey"}},[i("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[e._v("\n                            "+e._s(e.profile.name)+"\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v("\n                            Profile\n                            "),i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",small:"",rounded:"",dark:""},on:{click:e.editProfile}},[i("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-pencil")]),e._v("\n                                Edit\n                            ")],1)],1)],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-email")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                            "+e._s(e.profile.email)+"\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v("\n                            Email\n                            "),i("v-btn",{staticClass:"ma-2",attrs:{color:e.verifier.color,small:"",rounded:"",dark:""},on:{click:e.resend}},[i("v-icon",{attrs:{small:"",left:""}},[e._v("\n                                    "+e._s(e.verifier.icon)+"\n                                ")]),e._v("\n                                "+e._s(e.verifier.text)+"\n                            ")],1)],1)],1)],1),e._v(" "),i("v-divider",{attrs:{inset:""}}),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("\n                            mdi-account-supervisor-circle\n                        ")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                            "+e._s(e.profile.role.name)+"\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v(" Role ")])],1)],1),e._v(" "),i("v-divider",{attrs:{inset:""}}),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-account-edit")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                            "+e._s(e._f("moment")(e.profile.created_at,"from"))+"\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v("\n                            Created at\n                        ")])],1)],1),e._v(" "),e.profile.updated_at?i("v-list-item",[i("v-list-item-action"),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                            "+e._s(e._f("moment")(e.profile.updated_at,"from"))+"\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v("\n                            Updated at\n                        ")])],1)],1):e._e(),e._v(" "),i("v-divider",{attrs:{inset:""}}),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-login")])],1),e._v(" "),i("v-list-item-content",[e.profile.last_at?i("v-list-item-title",[e._v("\n                            "+e._s(e._f("moment")(e.profile.last_at,"from"))+"\n                        ")]):i("v-list-item-title",[e._v("\n                            Never\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v("\n                            Last login\n                        ")])],1)],1),e._v(" "),i("v-list-item",[i("v-list-item-action"),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                            "+e._s(e.profile.last_ip||"None")+"\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v("\n                            Last Ip Address\n                        ")])],1)],1)],1),e._v(" "),i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.editting,expression:"editting"}],attrs:{dark:e.dark,loading:!!e.loading}},[i("v-card-title",{attrs:{"primary-title":""}},[i("span",{staticClass:"headline"},[e._v(" Edit Profile ")])]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-text",[i("user-form",{ref:"form",attrs:{"change-pass":e.changePassword,profile:""},on:{save:e.saveProfile,"update:changePass":function(t){e.changePassword=t},"update:change-pass":function(t){e.changePassword=t}},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",[i("v-btn",{attrs:{color:"indigo",text:""},on:{click:function(t){e.editting=!1}}},[e._v("\n                        Cancel\n                    ")]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{disabled:!!e.loading,color:"primary"},on:{click:e.saveProfile}},[e._v("\n                        Save\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=w.exports},UJ9n:function(e,t,i){"use strict";var n=i("L2JU"),r=i("LvDl"),o=i("dhqo"),a=i.n(o),s=i("PMce"),l=i("obwe"),c=i("zhh1"),v=i("bHnR");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){f(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var m={mixins:[c.a,c.c],props:{value:{type:Object,default:function(){}},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},crud:{type:Boolean,default:!1},mineTab:{type:Boolean,default:!1}},data:function(){return{searchBox:!1,search:"",tab:0}},computed:u(u({},Object(n.d)("app",["title","dark","dense"])),{},{theTitle:function(){return"".concat(a()(Object(r.startCase)(this.page)))},appBarColor:function(){return this.dark?"grey darken-3":"primary"},searchBoxIcon:function(){return this.mobile||this.search?"mdi-magnify-close":"mdi-magnify"},darkIcon:function(){return this.dark?"mdi-brightness-1":"mdi-brightness-3"},denseIcon:function(){return this.dense?"mdi-table":"mdi-table-large"}}),methods:u(u(u({},Object(n.c)("app",[v.n,v.o,v.m])),Object(n.b)("app",[s.d])),{},{setSearch:function(e){e||(this.search=""),this.searchBox=e},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(l.b)(e)}))}}),watch:{search:Object(r.debounce)((function(e){this.$emit("input",u(u({},this.value),{},{page:1,search:e}))}),500),tab:function(e){this.$emit("input",u(u({},this.value),{},{page:1,mine:e}))}}},p=i("KHd+"),_=Object(p.a)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fragment",[i("v-app-bar",{attrs:{color:e.appBarColor,"collapse-on-scroll":!(e.selected.length||e.searchBox||!e.mobile),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[i("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("update:selected",[])}}},[i("v-icon",[e._v("mdi-close")])],1),e._v(" "),i("v-divider",{staticClass:"mx-2",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[e.selected.length?i("v-toolbar-title",[e._v("\n                    "+e._s(e.selected.length)+" selected\n                ")]):i("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("v-tab",[e._v("Recent")]),e._v(" "),e.mineTab?i("v-tab",[e._v("Mine")]):e._e()],1)],e._v(" "),i("v-spacer"),e._v(" "),e.selected.length?[i("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[i("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[i("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[i("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[i("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),i("v-toolbar-title",[i("span",[e._v(e._s(e.theTitle))])]),e._v(" "),i("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?i("v-text-field",{attrs:{"append-icon":e.searchBoxIcon,autofocus:e.mobile,dark:e.dark,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(t){return e.setSearch(!1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():i("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?i("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[i("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),i("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[i("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),n),[i("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),i("v-card",{attrs:{dark:e.dark}},[i("v-list",{staticClass:"py-0",attrs:{dense:""}},[i("v-list-item",{on:{click:e.TOGGLE_DARK}},[i("v-list-item-icon",[i("v-icon",[e._v(e._s(e.darkIcon))])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                                "+e._s(e.dark?"Lighter":"Darker")+"\n                            ")])],1)],1),e._v(" "),i("v-divider"),e._v(" "),e.webview?e._e():[i("v-list-item",{on:{click:e.toggleFs}},[i("v-list-item-icon",[i("v-icon",[e._v(e._s(e.fullscreenIcon))])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                                    "+e._s(e.fullscreen?"Normal-screen":"Full-screen")+"\n                                ")])],1)],1),e._v(" "),i("v-divider")],e._v(" "),e.mobile?e._e():[i("v-list-item",{on:{click:e.TOGGLE_DENSE}},[i("v-list-item-icon",[i("v-icon",[e._v(e._s(e.denseIcon))])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("\n                                    "+e._s(e.dense?"Bigger":"Smaller")+"\n                                ")])],1)],1),e._v(" "),i("v-divider")],e._v(" "),i("v-list-item",{attrs:{to:{name:"profile"}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list-item",{on:{click:e.logout}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-logout")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("Logout")])],1)],1)],2)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?i("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogFullscreen,callback:function(t){e.dialogFullscreen=t},expression:"dialogFullscreen"}},[i("v-card",{attrs:{dark:e.dark}},[i("v-card-title",{staticClass:"headline"},[e._v(" Use fullscreen? ")]),e._v(" "),i("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFs(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),i("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFs(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=_.exports}}]);