(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UJ9n:function(e,t,n){"use strict";var r=n("L2JU"),i=n("bHnR"),o=n("PMce"),c=n("LvDl"),l=n("obwe"),a=n("zhh1"),s=n("dhqo"),u=n.n(s),v=n("ejCs"),d=n.n(v);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={mixins:[a.a],props:{value:{type:String,default:""},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},crud:{type:Boolean,default:!1}},data:function(){return{dialog:!l.c.get("confirmedFullscreen"),searchBox:!1}},computed:f(f({},Object(r.d)("app",["title","dense","fullscreen"])),{},{webview:function(){return d()(window.navigator.userAgent)},theTitle:function(){return"".concat(u()(this.$_.startCase(this.page)))}}),methods:f(f(f({},Object(r.c)("app",[i.l,i.m,i.n])),Object(r.b)("app",[o.c])),{},{setSearch:function(e){e||this.$emit("input",""),this.searchBox=e},toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirm:function(e){e&&this.toggleFullscreen(),this.dialog=!1,l.c.set("confirmedFullscreen",!0)},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(l.b)(e)}))}}),watch:{value:Object(c.debounce)((function(){this.$emit("fetch")}),500)}},_=n("KHd+"),g=Object(_.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("v-app-bar",{attrs:{color:e.selected.length?"black":"primary","collapse-on-scroll":!(e.selected.length||e.searchBox),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("unselect")}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-divider",{staticClass:"mr-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[e.selected.length?n("v-toolbar-title",[e._v(e._s(e.selected.length)+" selected")]):n("v-tabs",{attrs:{"align-with-title":""}},[n("v-tabs-slider",{attrs:{color:"white"}}),e._v(" "),n("v-tab",[e._v(e._s(e.theTitle))]),e._v(" "),n("v-tab",[e._v("Mine")])],1)],e._v(" "),n("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.mobile?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[n("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[e.mobile?e._e():n("v-btn",{staticClass:"mr-2",attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:e.TOGGLE_DENSE}},[n("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))]),e._v(" "),e.mobile?e._e():[e._v("Dense")]],2),e._v(" "),n("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),n("v-toolbar-title",[n("span",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?n("v-text-field",{attrs:{value:e.value,"append-icon":e.mobile||e.value?"mdi-magnify-close":"mdi-magnify",label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{input:function(t){return e.$emit("input",t)},"click:append":function(t){return e.setSearch(!1)}}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():n("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[n("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),e.webview?e._e():n("v-btn",{attrs:{icon:""},on:{click:e.toggleFullscreen}},[n("v-icon",[e._v(e._s(e.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"))])],1),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:"",large:""}},r),[n("v-avatar",{attrs:{right:"",size:"32px",item:""}},[n("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Use fullscreen mode ?")]),e._v(" "),n("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirm(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirm(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=g.exports},ejCs:function(e,t,n){var r=n("ow63"),i=new RegExp("("+r.join("|")+")","ig");e.exports=function(e){return!!e.match(i)}},l7YP:function(e,t,n){"use strict";n.r(t);var r=[{heading:"DASHBOARD"},{icon:"mdi-microsoft-excel",text:"Formula",to:"formula",bottomNav:!0},{icon:"mdi-package-variant-closed",text:"Product",to:"product",bottomNav:!0},{icon:"mdi-currency-usd",text:"Price",to:"price",bottomNav:!0},{icon:"mdi-account-group",text:"User",to:"user"}],i={computed:{items:function(){return this.$_.cloneDeep(r.filter((function(e){return e.icon&&e.bottomNav})))}}},o=n("KHd+"),c=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",{attrs:{color:"primary",app:""}},e._l(e.items,(function(t,r){return n("v-btn",{key:r,attrs:{to:{name:t.to},value:t.to}},[n("span",[e._v(e._s(t.text))]),e._v(" "),n("v-icon",[e._v(e._s(t.icon))])],1)})),1)}),[],!1,null,null,null).exports,l=n("L2JU"),a=n("bHnR");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={computed:u(u({},Object(l.d)("app",["drawer","profile"])),{},{items:function(){return this.$_.cloneDeep(r)}}),methods:u(u({},Object(l.c)("app",[a.d])),{},{checkPageRoles:function(e){var t=this.$router.resolve({name:e}),n=this.$_.get(this.profile,"role.name");if(t){var r=t.route.meta.roles;return!r||!!r.includes(n)}return!1}})},p=Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{value:e.drawer||e.$vuetify.breakpoint.lgAndUp,"mini-variant":!e.drawer&&e.$vuetify.breakpoint.lgAndUp,app:""},on:{input:e.SET_DRAWER}},[n("v-list",[e.profile.id>-1?n("v-list-item",{attrs:{to:{name:"profile"},color:"red",link:"","two-line":""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(e._s(e.profile.name))]),e._v(" "),n("v-list-item-subtitle",[e._v(e._s(e.profile.email))])],1),e._v(" "),n("v-list-item-action",[n("v-icon",[e._v("mdi-menu-down")])],1)],1):e._e(),e._v(" "),n("v-divider"),e._v(" "),e._l(e.items,(function(t,r){return[t.heading?[e.drawer?n("v-subheader",{key:r},[e._v(e._s(t.heading))]):e._e()]:t.divider?n("v-divider",{key:r}):e.checkPageRoles(t.to)?n("v-list-item",{key:r,attrs:{to:{name:t.to},color:"primary",link:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.text))])],1)],1):e._e()]}))],2)],1)}),[],!1,null,null,null).exports,f=n("zhh1"),m={mixins:[f.a]},b=Object(o.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-content",[t("v-container",{attrs:{fluid:""}},[this._t("default"),this._v(" "),t("v-overlay",{attrs:{value:this.loading,absolute:""}},[t("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"white"}})],1)],2)],1)}),[],!1,null,null,null).exports,_=n("UJ9n"),g={mixins:[f.a],components:{AppBottomNavigation:c,AppLeftDrawer:p,AppContainer:b,AppTopBar:_.a},mounted:function(){console.log("Session credebility should be checked!")}},h=Object(o.a)(g,(function(){var e=this.$createElement,t=this._self._c||e;return t("fragment",[t("app-left-drawer"),this._v(" "),t("app-container",[t("router-view")],1),this._v(" "),this.mobile?t("app-bottom-navigation"):this._e()],1)}),[],!1,null,null,null);t.default=h.exports},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]},zhh1:function(e,t,n){"use strict";var r=n("L2JU");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a={computed:o(o({},Object(r.d)("app",["loading","dense"])),{},{mobile:function(){return this.$vuetify.breakpoint.smAndDown}})}}}]);