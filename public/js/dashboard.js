(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GV1T:function(t,e,n){"use strict";var i=n("L2JU"),r=n("LvDl"),o=n("dhqo"),a=n.n(o),c=n("PMce"),l=n("t5Fl"),s=n("zhh1"),v=n("bHnR");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={mixins:[s.a,s.c],props:{value:{type:Object,default:function(){}},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},crud:{type:Boolean,default:!1},mineTab:{type:Boolean,default:!1}},data:function(){return{searchBox:!1,search:"",tab:0}},computed:d(d({},Object(i.d)("app",["title","dark","dense"])),{},{theTitle:function(){return"".concat(a()(Object(r.startCase)(this.page)))},appBarColor:function(){return this.dark?"grey darken-3":"primary"},searchBoxIcon:function(){return this.mobile||this.search?"mdi-magnify-close":"mdi-magnify"},darkIcon:function(){return this.dark?"mdi-brightness-1":"mdi-brightness-3"},denseIcon:function(){return this.dense?"mdi-table":"mdi-table-large"}}),methods:d(d(d({},Object(i.c)("app",[v.n,v.o,v.m])),Object(i.b)("app",[c.d])),{},{setSearch:function(t){t||(this.search=""),this.searchBox=t},logout:function(){var t=this;this.LOGOUT().then((function(){return t.$router.push({name:"login"})})).catch((function(t){return Object(l.b)(t)}))}}),watch:{search:Object(r.debounce)((function(t){this.$emit("input",d(d({},this.value),{},{page:1,search:t}))}),500),tab:function(t){this.$emit("input",d(d({},this.value),{},{page:1,mine:t}))}}},m=n("KHd+"),f=Object(m.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[n("v-app-bar",{attrs:{color:t.appBarColor,"collapse-on-scroll":!(t.selected.length||t.searchBox||!t.mobile),dark:"",app:""},scopedSlots:t._u([t.crud?{key:"extension",fn:function(){return[t.selected.length?[n("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(e){return t.$emit("update:selected",[])}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{dark:!!t.selected.length,inset:"",vertical:""}})]:t._e(),t._v(" "),[t.selected.length?n("v-toolbar-title",[t._v("\n                    "+t._s(t.selected.length)+" selected\n                ")]):n("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v("Recent")]),t._v(" "),t.mineTab?n("v-tab",[t._v("Mine")]):t._e()],1)],t._v(" "),n("v-spacer"),t._v(" "),t.selected.length?[n("v-btn",{attrs:{fab:t.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(e){return t.$emit("delete")}}},[n("v-icon",[t._v("mdi-delete")]),t._v(" "),t.mobile?t._e():[t._v("Delete")]],2)]:[n("v-btn",{attrs:{fab:t.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(e){return t.$emit("create")}}},[n("v-icon",[t._v("mdi-plus")]),t._v(" "),t.mobile?t._e():[t._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[t.searchBox&&t.mobile?t._e():[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.TOGGLE_DRAWER(e)}}}),t._v(" "),n("v-toolbar-title",[n("span",[t._v(t._s(t.theTitle))])]),t._v(" "),n("v-spacer")],t._v(" "),t.crud?[t.searchBox||!t.mobile?n("v-text-field",{attrs:{"append-icon":t.searchBoxIcon,autofocus:t.mobile,dark:t.dark,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(e){return t.setSearch(!1)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()]:t._e(),t._v(" "),t.mobile?t._e():n("v-spacer"),t._v(" "),t.crud?[!t.searchBox&&t.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setSearch(!0)}}},[n("v-icon",[t._v("mdi-magnify")])],1):t._e()]:t._e(),t._v(" "),n("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),i),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n("v-card",{attrs:{dark:t.dark}},[n("v-list",{staticClass:"py-0",attrs:{dense:""}},[n("v-list-item",{on:{click:t.TOGGLE_DARK}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.darkIcon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                "+t._s(t.dark?"Lighter":"Darker")+"\n                            ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t.webview?t._e():[n("v-list-item",{on:{click:t.toggleFs}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.fullscreenIcon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                    "+t._s(t.fullscreen?"Normal-screen":"Full-screen")+"\n                                ")])],1)],1),t._v(" "),n("v-divider")],t._v(" "),t.mobile?t._e():[n("v-list-item",{on:{click:t.TOGGLE_DENSE}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.denseIcon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                    "+t._s(t.dense?"Bigger":"Smaller")+"\n                                ")])],1)],1),t._v(" "),n("v-divider")],t._v(" "),n("v-list-item",{attrs:{to:{name:"profile"}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-face-profile")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Profile")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-item",{on:{click:t.logout}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)],1)],2),t._v(" "),t.mobile&&!t.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialogFullscreen,callback:function(e){t.dialogFullscreen=e},expression:"dialogFullscreen"}},[n("v-card",{attrs:{dark:t.dark}},[n("v-card-title",{staticClass:"headline"},[t._v(" Use fullscreen? ")]),t._v(" "),n("v-card-text",[t._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.confirmFs(!1)}}},[t._v("\n                    No\n                ")]),t._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(e){return t.confirmFs(!0)}}},[t._v("\n                    Yes\n                ")])],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.a=f.exports},l7YP:function(t,e,n){"use strict";n.r(e);var i=n("zhh1"),r=n("t5Fl"),o=n("GV1T"),a={mixins:[i.a]},c=n("KHd+"),l=Object(c.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",{class:this.dark?"black":"grey lighten-3"},[e("v-container",{attrs:{fluid:""}},[this._t("default"),this._v(" "),this.mobile?e("v-overlay",{attrs:{value:this.loading,absolute:""}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"white"}})],1):this._e()],2)],1)}),[],!1,null,null,null).exports,s={mixins:[i.a,i.e],computed:{items:function(){return this.navs.filter((function(t){var e=t.bottomNav,n=t.children;return!!e||!!n})).map((function(t){return t.children?t.children.find((function(t){return!!t.bottomNav})):t}))}}},v=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{dark:t.dark,color:"primary",app:""}},t._l(t.items,(function(e,i){return n("v-btn",{key:i,attrs:{to:{name:e.to},value:e.to}},[n("span",[t._v(t._s(e.text))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),1)}),[],!1,null,null,null).exports,u=n("L2JU"),d=n("bHnR");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={mixins:[i.a,i.e],computed:p(p({},Object(u.d)("app",["drawer","profile"])),{},{mini:function(){return!this.drawer&&this.$vuetify.breakpoint.lgAndUp}}),methods:p({},Object(u.c)("app",[d.d]))},b=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{value:t.drawer||t.$vuetify.breakpoint.lgAndUp,"mini-variant":t.mini,dark:t.dark,app:""},on:{input:t.SET_DRAWER}},[n("v-list",[t.profile.id>-1?n("v-list-item",{attrs:{to:{name:"profile"},dark:t.dark,link:"","two-line":""}},[n("v-list-item-action",[t.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({},"v-icon",r,!1),i),[t._v("\n                            mdi-face-profile\n                        ")])]}}],null,!1,1160482933)},[t._v(" "),n("span",[t._v("Profile")])]):n("v-icon",[t._v("mdi-face-profile")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v("\n                    "+t._s(t.profile.name)+"\n                ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                    "+t._s(t.profile.email)+"\n                ")])],1),t._v(" "),n("v-list-item-action",[n("v-icon",[t._v("mdi-menu-down")])],1)],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),t._l(t.navs,(function(e,i){return[e.heading?[t.drawer?n("v-subheader",{key:i},[t._v("\n                    "+t._s(e.heading)+"\n                ")]):t._e()]:e.divider?n("v-divider",{key:i}):e.children?n("v-list-group",{key:i,attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-action",[t.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:t._u([{key:"activator",fn:function(i){var r=i.on,o=i.attrs;return[n("v-icon",t._g(t._b({},"v-icon",o,!1),r),[t._v("\n                                    "+t._s(e.icon)+"\n                                ")])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.text))])]):n("v-icon",[t._v("\n                            "+t._s(e.icon)+"\n                        ")])],1),t._v(" "),n("v-list-item-title",[t._v("\n                        "+t._s(e.text)+"\n                    ")])]},proxy:!0}],null,!0),model:{value:e.model,callback:function(n){t.$set(e,"model",n)},expression:"item.model"}},[t._v(" "),t._l(e.children,(function(e,i){return n("v-list-item",{key:i,attrs:{to:{name:e.to},dark:t.dark,link:""}},[n("v-list-item-action",[t.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:t._u([{key:"activator",fn:function(i){var r=i.on,o=i.attrs;return[n("v-icon",t._g(t._b({},"v-icon",o,!1),r),[t._v("\n                                    "+t._s(e.icon)+"\n                                ")])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.text))])]):t._e()],1),t._v(" "),n("v-list-item-title",[t._v("\n                        "+t._s(e.text)+"\n                    ")]),t._v(" "),e.icon?n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e()],1)}))],2):n("v-list-item",{key:i,attrs:{to:{name:e.to},dark:t.dark,color:"primary",link:""}},[n("v-list-item-action",[t.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:t._u([{key:"activator",fn:function(i){var r=i.on,o=i.attrs;return[n("v-icon",t._g(t._b({},"v-icon",o,!1),r),[t._v("\n                                "+t._s(e.icon)+"\n                            ")])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.text))])]):n("v-icon",[t._v("\n                        "+t._s(e.icon)+"\n                    ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)]}))],2)],1)}),[],!1,null,null,null).exports,h={mixins:[i.a],components:{AppTopBar:o.a,AppContainer:l,AppBottomNav:v,AppLeftDrawer:b},mounted:function(){Object(r.c)("Session credebility should be checked!")}},g=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("fragment",[e("app-left-drawer"),this._v(" "),e("app-container",[e("router-view")],1),this._v(" "),this.mobile?e("app-bottom-nav"):this._e()],1)}),[],!1,null,null,null);e.default=g.exports}}]);