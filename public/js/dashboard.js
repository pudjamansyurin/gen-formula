(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{l7YP:function(t,e,r){"use strict";r.r(e);var n=r("L2JU"),i=[{heading:"DASHBOARD"},{icon:"mdi-chart-areaspline",text:"Report",to:"report",bottomNav:!0},{icon:"mdi-microsoft-excel",text:"Formula",to:"formula",bottomNav:!0},{icon:"mdi-package-variant-closed",text:"Product",to:"product",bottomNav:!0},{icon:"mdi-currency-usd",text:"Price",to:"price",bottomNav:!0},{icon:"mdi-account-group",text:"User",to:"user"}],o={data:function(){return{}},computed:{items:function(){return this.$_.cloneDeep(i.filter((function(t){return t.icon&&t.bottomNav})))}}},c=r("KHd+"),a=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-bottom-navigation",{attrs:{color:"primary","hide-on-scroll":"",app:""}},t._l(t.items,(function(e,n){return r("v-btn",{key:n,attrs:{to:{name:e.to},value:e.to}},[r("span",[t._v(t._s(e.text))]),t._v(" "),r("v-icon",[t._v(t._s(e.icon))])],1)})),1)}),[],!1,null,null,null).exports,l=r("bHnR");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={computed:u(u({},Object(n.d)("app",["drawer","profile"])),{},{items:function(){return this.$_.cloneDeep(i)}}),methods:u(u({},Object(n.c)("app",[l.d])),{},{checkPageRoles:function(t){var e=this.$router.resolve({name:t});if(e){var r=e.route.meta.roles;return!r||!!r.includes(this.profile.role.name)}return!1}})},f=Object(c.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{value:t.drawer,clipped:t.$vuetify.breakpoint.lgAndUp,app:""},on:{input:t.SET_DRAWER}},[r("v-list",[r("v-list-item",{attrs:{to:{name:"profile"},color:"red",link:""}},[r("v-list-item-avatar",[r("v-avatar",{attrs:{right:"",size:"50px",item:""}},[r("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.profile.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(t.profile.email))])],1),t._v(" "),r("v-list-item-action",[r("v-icon",[t._v("mdi-menu-down")])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",[t._l(t.items,(function(e,n){return[e.heading?r("v-subheader",{key:n},[t._v(t._s(e.heading))]):e.divider?r("v-divider",{key:n}):t.checkPageRoles(e.to)?r("v-list-item",{key:n,attrs:{to:{name:e.to},color:"primary",link:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.text))])],1)],1):t._e()]}))],2)],1)}),[],!1,null,null,null).exports,d=r("PMce"),m=r("obwe");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O={data:function(){return{dialog:!m.c.get("confirmedFullscreen")}},computed:g({},Object(n.d)("app",["title","fullscreen"])),methods:g(g(g({},Object(n.c)("app",[l.m,l.n])),Object(n.b)("app",[d.c])),{},{logout:function(){var t=this;this.LOGOUT().then((function(){t.$router.push({name:"login"})})).catch((function(t){return eHandler(t)}))},confirm:function(t){this.dialog=!1,m.c.set("confirmedFullscreen",!0),t&&this.toggle()},toggle:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})}})};function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j={name:"Dashboard",components:{AppBottomNavigation:a,AppLeftDrawer:f,AppTopBar:Object(c.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",[r("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,collapse:t.$vuetify.breakpoint.smAndDown,"collapse-on-scroll":t.$vuetify.breakpoint.smAndDown,color:"blue darken-3",dark:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.TOGGLE_DRAWER(e)}}}),t._v(" "),r("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[r("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:t.toggle}},[r("v-icon",[t._v(t._s(t.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"))])],1),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",large:""}},n),[r("v-avatar",{attrs:{right:"",size:"32px",item:""}},[r("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",{attrs:{to:{name:"profile"}}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-face-profile")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Profile")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",{on:{click:t.logout}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-logout")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.smAndDown?r("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("Use fullscreen mode ?")]),t._v(" "),r("v-card-text",[t._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.confirm(!1)}}},[t._v("\n                    No\n                ")]),t._v(" "),r("v-btn",{attrs:{color:"green",dark:""},on:{click:function(e){return t.confirm(!0)}}},[t._v("\n                    Yes\n                ")])],1)],1)],1):t._e()],1)}),[],!1,null,null,null).exports},data:function(){return{dialog:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.d)("app",["loading"])),mounted:function(){console.log("Session credebility should be checked!")}},w=Object(c.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("fragment",[e("app-top-bar"),this._v(" "),e("app-left-drawer"),this._v(" "),e("v-content",[e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{align:"start",justify:"center","no-gutters":""}},[e("router-view")],1),this._v(" "),e("v-overlay",{attrs:{value:this.loading,absolute:""}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"white"}})],1)],1)],1),this._v(" "),this.$vuetify.breakpoint.smAndDown?e("app-bottom-navigation"):this._e()],1)}),[],!1,null,null,null);e.default=w.exports}}]);