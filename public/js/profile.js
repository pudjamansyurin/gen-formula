(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{GgfX:function(e,t,i){"use strict";i.r(t);var r=i("o0o1"),n=i.n(r),o=i("L2JU"),s=i("D4Jh"),a=i("bHnR"),l=i("PMce"),c=i("obwe");function v(e,t,i,r,n,o,s){try{var a=e[o](s),l=a.value}catch(e){return void i(e)}a.done?t(l):Promise.resolve(l).then(r,n)}function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){m(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var f={components:{AppTopBar:i("UJ9n").a},data:function(){return{model:"user",edit_profile:!1,change_password:!1,show_password:!1,form:{}}},computed:u({},Object(o.d)("app",["loading","profile"])),methods:u(u(u(u({},Object(o.c)("app",[a.g,a.f])),Object(o.b)("app",[l.e,l.d])),Object(o.b)("model",[s.c])),{},{close:function(){this.edit_profile=!1},edit:function(){this.form=this.$_.cloneDeep(u(u({},this.profile),{},{password:null,password_confirmation:null})),this.change_password=!1,this.edit_profile=!0},save:function(){var e=this;this.$refs.form.validate().then((function(t){if(t){var i=e.model,r=e.form;e.change_password||(e.$delete(r,"password"),e.$delete(r,"password_confirmation")),e.SAVE_MODEL({model:i,payload:r}).then(function(){var t,i=(t=n.a.mark((function t(i){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.SET_PROFILE(i),e.SET_MESSAGE({text:"Profile udpated successfully",type:"success"}),e.close();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(r,n){var o=t.apply(e,i);function s(e){v(o,r,n,s,a,"next",e)}function a(e){v(o,r,n,s,a,"throw",e)}s(void 0)}))});return function(e){return i.apply(this,arguments)}}()).catch((function(t){var i=Object(c.b)(t);e.$refs.form.setErrors(i)}))}}))},resend:function(){this.profile.email_verified_at||this.RESEND().catch((function(e){return Object(c.b)(e)}))}}),mounted:function(){this.PROFILE().catch((function(e){return Object(c.b)(e)}))}},p=i("KHd+"),_=Object(p.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fragment",[i("app-top-bar",{attrs:{page:"Profile"}}),e._v(" "),e.edit_profile?i("v-card",{attrs:{loading:!!e.loading}},[i("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[i("span",{staticClass:"headline"},[e._v("Edit Profile")])]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-text",[i("v-form",[i("validation-observer",{ref:"form"},[i("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,n=t.valid;return[i("v-text-field",{attrs:{label:"Name",type:"text","error-messages":r,success:n,hint:"This is to identify the user","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),i("validation-provider",{attrs:{name:"email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,n=t.valid;return[i("v-text-field",{attrs:{label:"E-mail",type:"email","error-messages":r,success:n,hint:"This email is for recovery","persistent-hint":""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}])}),e._v(" "),i("validation-provider",{attrs:{name:"role.id"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,n=t.valid;return[i("v-select",{attrs:{items:[e.form.role],"error-messages":r,success:n,chips:"","item-text":"name","item-value":"id",label:"Role",hint:"Role for this user","persistent-hint":"","return-object":""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})]}}])}),e._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.change_password=!e.change_password}}},[e._v(e._s(e.change_password?"Keep":"Change")+"\n                        Password")]),e._v(" "),e.change_password?[i("validation-provider",{attrs:{name:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,n=t.valid;return[i("v-text-field",{attrs:{label:"Password",type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off","error-messages":r,success:n,hint:"Your new password","persistent-hint":"",counter:"",autocomplete:"off"},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})]}}],null,!1,2160409375)}),e._v(" "),i("validation-provider",{attrs:{name:"password_confirmation"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,n=t.valid;return[i("v-text-field",{attrs:{label:"Password Confirmation",type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off","error-messages":r,success:n,hint:"Fill again the password","persistent-hint":"",counter:"",autocomplete:"off"},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})]}}],null,!1,3482897947)})]:e._e()],2)],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",[i("v-btn",{attrs:{color:"indigo",text:""},on:{click:function(t){e.edit_profile=!1}}},[e._v("Cancel")]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{disabled:!!e.loading,color:"primary"},on:{click:e.save}},[e._v("Save")])],1)],1):i("v-card",{staticClass:"mx-auto",attrs:{loading:!!e.loading}},[i("v-list-item",[i("v-list-item-avatar",{attrs:{color:"grey"}},[i("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[e._v(e._s(e.profile.name))]),e._v(" "),i("v-list-item-subtitle",[e._v("Profile\n                    "),i("v-btn",{staticClass:"ma-2",attrs:{small:"",rounded:"",color:"primary",dark:""},on:{click:e.edit}},[i("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-pencil")]),e._v(" Edit\n                    ")],1)],1)],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-email")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.profile.email)+"\n                    "),i("v-btn",{staticClass:"ma-2",attrs:{small:"",rounded:"",color:e.profile.email_verified_at?"teal":"orange",dark:""},on:{click:e.resend}},[i("v-icon",{attrs:{small:"",left:""}},[e._v(e._s(e.profile.email_verified_at?"mdi-checkbox-marked-circle":"mdi-help-circle-outline"))]),e._v("\n                        "+e._s(e.profile.email_verified_at?"Verified":"Verify")+"\n                    ")],1)],1),e._v(" "),i("v-list-item-subtitle",[e._v("Email")])],1)],1),e._v(" "),i("v-divider",{attrs:{inset:""}}),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-account-supervisor-circle")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.profile.role.name))]),e._v(" "),i("v-list-item-subtitle",[e._v("Role")])],1)],1),e._v(" "),i("v-divider",{attrs:{inset:""}}),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-account-edit")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e._f("moment")(e.profile.created_at,"from")))]),e._v(" "),i("v-list-item-subtitle",[e._v("Created at")])],1)],1),e._v(" "),e.profile.updated_at?i("v-list-item",[i("v-list-item-action"),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e._f("moment")(e.profile.updated_at,"from")))]),e._v(" "),i("v-list-item-subtitle",[e._v("Updated at")])],1)],1):e._e(),e._v(" "),i("v-divider",{attrs:{inset:""}}),e._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-login")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e._f("moment")(e.profile.last_at,"from")))]),e._v(" "),i("v-list-item-subtitle",[e._v("Last login")])],1)],1),e._v(" "),i("v-list-item",[i("v-list-item-action"),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.profile.last_ip))]),e._v(" "),i("v-list-item-subtitle",[e._v("Last Ip Address")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=_.exports},UJ9n:function(e,t,i){"use strict";var r=i("L2JU"),n=i("bHnR"),o=i("PMce"),s=i("LvDl"),a=i("obwe"),l=i("zhh1"),c=i("dhqo"),v=i.n(c),d=i("ejCs"),u=i.n(d);function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(Object(i),!0).forEach((function(t){p(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var _={mixins:[l.a],props:{value:{type:String,default:""},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},crud:{type:Boolean,default:!1}},data:function(){return{dialog:!a.c.get("confirmedFullscreen"),searchBox:!1}},computed:f(f({},Object(r.d)("app",["title","dense","fullscreen"])),{},{webview:function(){return u()(window.navigator.userAgent)},theTitle:function(){var e=this.selected.length;return e>0?"".concat(e," selected"):"".concat(v()(this.$_.startCase(this.page)))}}),methods:f(f(f({},Object(r.c)("app",[n.l,n.m,n.n])),Object(r.b)("app",[o.c])),{},{setSearch:function(e){e||this.$emit("input",""),this.searchBox=e},toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirm:function(e){e&&this.toggleFullscreen(),this.dialog=!1,a.c.set("confirmedFullscreen",!0)},logout:function(){var e=this;this.LOGOUT().then((function(){e.$router.push({name:"login"})})).catch((function(e){return Object(a.b)(e)}))}}),watch:{value:Object(s.debounce)((function(){this.$emit("fetch")}),500)}},b=i("KHd+"),h=Object(b.a)(_,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fragment",[i("v-app-bar",{attrs:{color:e.selected.length?"black":"primary","collapse-on-scroll":!(e.selected.length||e.searchBox),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[i("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("unselect")}}},[i("v-icon",[e._v("mdi-close")])],1),e._v(" "),i("v-divider",{staticClass:"mr-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[i("v-toolbar-title",[e._v(e._s(e.theTitle))]),e._v(" "),i("v-divider",{staticClass:"mx-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})],e._v(" "),i("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?i("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[i("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.mobile?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),i("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[i("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[e.mobile?e._e():i("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:e.TOGGLE_DENSE}},[i("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))]),e._v(" "),e.mobile?e._e():[e._v("Dense")]],2),e._v(" "),i("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[i("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[i("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),i("v-toolbar-title",[i("span",[e._v(e._s(e.title))])]),e._v(" "),i("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?i("v-text-field",{attrs:{value:e.value,"append-icon":e.mobile||e.value?"mdi-magnify-close":"mdi-magnify",label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{input:function(t){return e.$emit("input",t)},"click:append":function(t){return e.setSearch(!1)}}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():i("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?i("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[i("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),e.webview?e._e():i("v-btn",{attrs:{icon:""},on:{click:e.toggleFullscreen}},[i("v-icon",[e._v(e._s(e.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"))])],1),e._v(" "),i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[i("v-btn",e._g({attrs:{icon:"",large:""}},r),[i("v-avatar",{attrs:{right:"",size:"32px",item:""}},[i("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1)]}}])},[e._v(" "),i("v-list",[i("v-list-item",{attrs:{to:{name:"profile"}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list-item",{on:{click:e.logout}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-logout")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?i("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v("Use fullscreen mode ?")]),e._v(" "),i("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirm(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),i("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirm(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=h.exports},ejCs:function(e,t,i){var r=i("ow63"),n=new RegExp("("+r.join("|")+")","ig");e.exports=function(e){return!!e.match(n)}},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]},zhh1:function(e,t,i){"use strict";t.a={computed:{mobile:function(){return this.$vuetify.breakpoint.smAndDown}}}}}]);