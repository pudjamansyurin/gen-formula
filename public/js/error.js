(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Z5QK:function(t,e,r){"use strict";r.r(e);var n=r("zhh1"),o=r("L2JU"),i=r("bHnR"),c=r("0YYN");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={mixins:[n.a],props:{code:{default:c.a},text:{default:null}},data:function(){var t;return{errors:(t={},l(t,c.a,"Page not found"),l(t,c.b,"Unauthorized access"),t)}},computed:s(s({},Object(o.d)("app",["error","profile"])),{},{errorCode:function(){return this.error.code||(this.errors[this.code]?this.code:null)},errorText:function(){return this.error.text||this.text||this.errors[this.code]||"Opps, something wrong."},direct:function(){return window.history.length<=2},redirect:function(){return{path:this.profile.id>-1?"/app":"/",text:this.profile.id>-1?"Dashboard":"Login"}}}),methods:s(s({},Object(o.c)("app",[i.a,i.b])),{},{handleBack:function(){this.$router.go(-1)}}),beforeDestroy:function(){this.CLEAR_MESSAGE(),this.CLEAR_ERROR()}},d=r("KHd+"),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",[r("v-container",{staticClass:"fill-height",class:t.dark?"black":"grey lighten-5",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{attrs:{dark:t.dark}},[r("v-card-text",[r("span",{staticClass:"text-h1"},[t._v(t._s(t.errorCode))])]),t._v(" "),r("v-card-subtitle",[r("span",{staticClass:"text-h3"},[t._v(t._s(t.errorText))])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[t.direct?t._e():r("v-btn",{attrs:{elevation:"1"},on:{click:t.handleBack}},[t._v("\n                            Back\n                        ")]),t._v(" "),r("v-btn",{attrs:{to:{path:t.redirect.path},elevation:"1",color:"primary"}},[t._v("\n                            "+t._s(t.redirect.text)+"\n                        ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);