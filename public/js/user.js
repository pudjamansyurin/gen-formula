(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4KYa":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("L2JU"),a=n("D4Jh"),s=n("mXMD"),l=n("UzJ+"),c=n("obwe"),u=n("UJ9n"),d=n("Noz/"),f=n("f5ZI"),p=n("tax4"),v=n("67TT");function m(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){m(i,r,o,a,s,"next",e)}function s(e){m(i,r,o,a,s,"throw",e)}a(void 0)}))}}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y,w,O,x={mixins:[n("zhh1").a],components:{AppTopBar:u.a,TheDataCard:d.a,TheDataTable:f.a,TheDialogForm:p.a,TheDialogDelete:v.a},data:function(){return{model:"user",options:{page:1,itemsPerPage:10,multiSort:!1,mustSort:!0,groupBy:[],groupDesc:[],sortBy:["updated_at"],sortDesc:[!0]},search:"",total:0,selected:[],headers:[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Role",value:"role.name"},{text:"Last At",value:"last_at"},{text:"Last Ip",value:"last_ip"}],dialog:!1,dialogDelete:!1,change_password:!1,show_password:!1,list_roles:[],form:{}}},computed:b(b({},Object(i.d)("app",["profile"])),Object(i.d)("model",["users"])),methods:b(b(b({},Object(i.c)("model",[s.b])),Object(i.b)("model",[a.b,a.c,a.a])),{},{create:function(){this.form=b(b({},this.$_.cloneDeep(l.d)),{},{password:null,password_confirmation:null}),this.change_password=!0,this.dialog=!0},edit:function(){this.form=b(b({},this.$_.cloneDeep(this.selected[0])),{},{password:null,password_confirmation:null}),this.change_password=!1,this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){return e.$refs.form.reset()}))},fetchRoles:(O=h(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GET_MODELS({model:"role",params:{temporary:!0}}).then((function(e){var n=e.data;return t.list_roles=t.$_.map(n,(function(e){return t.$_.pick(e,["id","name"])}))})).catch((function(e){return Object(c.b)(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return O.apply(this,arguments)}),fetch:(w=h(o.a.mark((function e(){var t,n,r,i=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,n=this.options,r=this.search,e.next=3,this.GET_MODELS({model:t,params:b(b({},n),{},{search:r})}).then((function(e){var t=e.meta;return i.total=t.total})).catch((function(e){return Object(c.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)}),save:function(){var e=this;this.$refs.form.validate().then((function(t){if(t){var n=e.model,r=e.form;e.change_password||(e.$delete(r,"password"),e.$delete(r,"password_confirmation")),e.SAVE_MODEL({model:n,payload:r}).then(function(){var t=h(o.a.mark((function t(i){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.id>0)){t.next=4;break}e.UPDATE_MODEL({model:n,data:i}),t.next=6;break;case 4:return t.next=6,e.fetch();case 6:e.selected=[],e.close();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return e.$refs.form.setErrors(Object(c.b)(t))}))}}))},deleteItem:(y=h(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,e.next=3,this.DELETE_MODELS({model:t,ids:this.$_.map(this.selected,"id")}).then(h(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetch();case 2:n.selected=[],n.dialogDelete=!1;case 4:case"end":return e.stop()}}),e)})))).catch((function(e){return Object(c.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})}),watch:{dialog:function(e){e&&0==this.list_roles.length&&this.fetchRoles()},options:{handler:function(e){this.fetch()},immediate:!0,deep:!0}}},k=n("KHd+"),j=Object(k.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{page:e.model,selected:e.selected,crud:""},on:{unselect:function(t){e.selected=[]},fetch:e.fetch,edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),e.users.length?n("div",[e.mobile?n("the-data-card",{attrs:{items:e.users,options:e.options},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[e.profile.id==r.id?n("v-btn",{attrs:{to:{name:"profile"},outlined:!r.selected,color:"green",absolute:"",top:"",right:"",small:"",tile:""}},[e._v("Profile")]):e._e(),e._v(" "),n("v-card-text",[n("div",{staticClass:"overline"},[e._v("\n                        "+e._s(e._f("moment")(r.last_at,"from"))+"\n                    ")]),e._v(" "),n("div",{staticClass:"overline mb-2"},[e._v("\n                        "+e._s(r.role.name)+"\n                    ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                        "+e._s(r.name)+"\n                    ")]),e._v("\n                    "+e._s(r.email)+"\n                ")])]}}],null,!1,3232524222),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):n("the-data-table",{attrs:{items:e.users,options:e.options,headers:e.headers,total:e.total},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[e.profile.id==r.id?n("v-chip",{attrs:{to:{name:"profile"},color:"primary",small:e.dense}},[e._v(e._s(r.name))]):[e._v("\n                    "+e._s(r.name)+"\n                ")]]}},{key:"item.last_at",fn:function(t){var n=t.item;return[n.last_at?[e._v("\n                    "+e._s(e._f("moment")(n.last_at,"from"))+"\n                ")]:[e._v("\n                    Never\n                ")]]}},{key:"item.last_ip",fn:function(t){var n=t.item;return[e._v("\n                "+e._s(n.last_ip||"None")+"\n            ")]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1):n("v-alert",{attrs:{type:e.loading?"info":"warning",border:"top",outlined:""}},[e.loading?n("span",[e._v("Fetching "+e._s(e.model)+" data...")]):n("span",[e._v("Oops, no "+e._s(e.model)+" data yet.")])]),e._v(" "),n("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.deleteItem,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),n("the-dialog-form",{attrs:{form:e.form},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("validation-observer",{ref:"form"},[n("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,o=t.valid;return[n("v-text-field",{attrs:{"error-messages":r,success:o,label:"Name",type:"text",hint:"This is to identify the user",counter:"","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),n("validation-provider",{attrs:{name:"email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,o=t.valid;return[n("v-text-field",{attrs:{"error-messages":r,success:o,label:"E-mail",type:"email",hint:"This email is for recovery",counter:"","persistent-hint":""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}])}),e._v(" "),n("validation-provider",{attrs:{name:"role.id"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,o=t.valid;return[n("v-select",{attrs:{items:e.list_roles,"error-messages":r,success:o,loading:!!e.loading,"item-text":"name","item-value":"id",label:"Role",hint:"Role for this user",chips:"","persistent-hint":"","return-object":""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})]}}])}),e._v(" "),e.form.id>0?n("v-btn",{attrs:{color:"red",dark:"",small:""},on:{click:function(t){e.change_password=!e.change_password}}},[e._v(e._s(e.change_password?"Keep":"Change")+" Password")]):e._e(),e._v(" "),e.change_password?[n("validation-provider",{attrs:{name:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,o=t.valid;return[n("v-text-field",{attrs:{type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off","error-messages":r,success:o,label:"Password",hint:"Password for this user",autocomplete:"off","persistent-hint":"",counter:""},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})]}}],null,!1,3040676862)}),e._v(" "),n("validation-provider",{attrs:{name:"password_confirmation"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,o=t.valid;return[n("v-text-field",{attrs:{type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off","error-messages":r,success:o,label:"Password Confirmation",hint:"Fill again the password",autocomplete:"off","persistent-hint":"",counter:""},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})]}}],null,!1,2122287675)})]:e._e()],2)],1)],1)}),[],!1,null,null,null);t.default=j.exports},"67TT":function(e,t,n){"use strict";var r=n("zhh1"),o=n("dhqo"),i=n.n(o),a={mixins:[r.a],props:{value:{type:Boolean,default:!1},selected:{type:Array,default:function(){return[]}},model:{type:String,default:""}},computed:{question:function(){var e=this.selected.length;return 1===e?"this ".concat(this.model," ?"):"these ".concat(e," ").concat(i()(this.model)," ?")}}},s=n("KHd+"),l=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile,"max-width":"290",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:!!e.loading}},[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Confirmation")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pt-2",style:e.mobile?"":"max-height: 300px;"},[e._v("\n            Are you sure to delete "+e._s(e.question)+"\n            "),n("v-chip-group",{attrs:{column:"",small:"","active-class":"primary--text"}},e._l(e.selected,(function(t){return n("v-chip",{key:t.id},[e._t("default",null,{item:t})],2)})),1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{disabled:!!e.loading,color:"red",dark:""},on:{click:function(t){return e.$emit("delete")}}},[e._v("Yes, sure")])],1)],1)],1)}),[],!1,null,null,null);t.a=l.exports},"Noz/":function(e,t,n){"use strict";n("dhqo");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={mixins:[n("zhh1").a],props:{value:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}}},data:function(){return{datas:[]}},methods:{toggleSelect:function(e){e.authorized&&(e.selected=!e.selected,this.$emit("input",this.datas.filter((function(e){return e.selected}))))}},watch:{items:{handler:function(e){this.datas=this.$_.map(e,(function(e){return o(o({},e),{},{selected:!1})}))},immediate:!0},value:{handler:function(e){e.length||this.datas.forEach((function(e){return e.selected=!1}))},immediate:!0}}},s=n("KHd+"),l=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-row",{attrs:{align:"center",justify:"center",dense:""}},e._l(e.datas,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",sm:"6"}},[n("v-card",{attrs:{color:t.selected?"primary darken-2":"white",dark:t.selected,ripple:!1,tile:""},on:{click:function(n){return e.toggleSelect(t)}}},[e._t("default",null,{item:t})],2)],1)})),1)],1)}),[],!1,null,null,null);t.a=l.exports},UJ9n:function(e,t,n){"use strict";var r=n("L2JU"),o=n("bHnR"),i=n("PMce"),a=n("LvDl"),s=n("obwe"),l=n("zhh1"),c=n("dhqo"),u=n.n(c),d=n("ejCs"),f=n.n(d);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={mixins:[l.a],props:{value:{type:String,default:""},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},crud:{type:Boolean,default:!1}},data:function(){return{dialog:!s.c.get("confirmedFullscreen"),searchBox:!1}},computed:v(v({},Object(r.d)("app",["title","dense","fullscreen"])),{},{webview:function(){return f()(window.navigator.userAgent)},theTitle:function(){var e=this.selected.length;return e>0?"".concat(e," selected"):"".concat(u()(this.$_.startCase(this.page)))}}),methods:v(v(v({},Object(r.c)("app",[o.l,o.m,o.n])),Object(r.b)("app",[i.c])),{},{setSearch:function(e){e||this.$emit("input",""),this.searchBox=e},toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirm:function(e){e&&this.toggleFullscreen(),this.dialog=!1,s.c.set("confirmedFullscreen",!0)},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(s.b)(e)}))}}),watch:{value:Object(a.debounce)((function(){this.$emit("fetch")}),500)}},_=n("KHd+"),b=Object(_.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-app-bar",{attrs:{color:e.selected.length?"black":"primary","collapse-on-scroll":!(e.selected.length||e.searchBox),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("unselect")}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-divider",{staticClass:"mr-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[n("v-toolbar-title",[e._v(e._s(e.theTitle))]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})],e._v(" "),n("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.mobile?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[n("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[e.mobile?e._e():n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:e.TOGGLE_DENSE}},[n("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))]),e._v(" "),e.mobile?e._e():[e._v("Dense")]],2),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),n("v-toolbar-title",[n("span",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?n("v-text-field",{attrs:{value:e.value,"append-icon":e.mobile||e.value?"mdi-magnify-close":"mdi-magnify",label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{input:function(t){return e.$emit("input",t)},"click:append":function(t){return e.setSearch(!1)}}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():n("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[n("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),e.webview?e._e():n("v-btn",{attrs:{icon:""},on:{click:e.toggleFullscreen}},[n("v-icon",[e._v(e._s(e.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"))])],1),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:"",large:""}},r),[n("v-avatar",{attrs:{right:"",size:"32px",item:""}},[n("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Use fullscreen mode ?")]),e._v(" "),n("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirm(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirm(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=b.exports},"UzJ+":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r={id:-1,name:"",email:"",role:{id:-1,name:""}},o={id:-1,name:"",description:"",user:r},i={id:-1,product_id:-1,price:0,changed_at:null,product:o,user:r},a={id:-1,name:"",description:"",user:r,percents:[]}},ejCs:function(e,t,n){var r=n("ow63"),o=new RegExp("("+r.join("|")+")","ig");e.exports=function(e){return!!e.match(o)}},f5ZI:function(e,t,n){"use strict";var r={mixins:[n("zhh1").a],props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}}},o=n("KHd+"),i=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,options:e.options,headers:e.headers,items:e.items,"server-items-length":e.total,loading:!!e.loading,dense:e.dense,page:1,"items-per-page":10,"footer-props":{itemsPerPageText:"Rows"},"selectable-key":"authorized","sort-by":"updated_at","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(n){var r=n.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.$_.get(r,t.value))+"\n        ")],{item:r})]}}}))],null,!0)})}),[],!1,null,null,null);t.a=i.exports},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]},tax4:function(e,t,n){"use strict";var r={mixins:[n("zhh1").a],props:{value:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},form:{type:Object,default:function(){}},title:{type:String,default:""},width:{type:String,default:"500px"}},computed:{formTitle:function(){return this.title?this.title:-1===this.form.id?"New Item":"Edit Item"}}},o=n("KHd+"),i=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile,"max-width":e.width,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:!!e.loading}},[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{style:e.mobile?"":"max-height: 500px;"},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("submit")}}},[e._t("default"),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],2)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),e.readonly?e._e():n("v-btn",{attrs:{disabled:!!e.loading,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.a=i.exports},zhh1:function(e,t,n){"use strict";var r=n("L2JU");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a={computed:i(i({},Object(r.d)("app",["loading","dense"])),{},{mobile:function(){return this.$vuetify.breakpoint.smAndDown}})}}}]);