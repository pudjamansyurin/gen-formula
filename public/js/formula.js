(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"67TT":function(e,t,r){"use strict";var n=r("L2JU"),o=r("dhqo"),i=r.n(o);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={props:{value:{type:Boolean,default:!1},selected:{type:Array,default:function(){return[]}},model:{type:String,default:""}},computed:c(c({},Object(n.d)("app",["loading"])),{},{question:function(){var e=this.selected.length;return 1===e?"this ".concat(this.model," ?"):"these ".concat(e," ").concat(i()(this.model)," ?")}})},u=r("KHd+"),d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":"290",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:!!e.loading}},[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Confirmation")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"pt-2",style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 300px;"},[e._v("\n            Are you sure to delete "+e._s(e.question)+"\n            "),r("v-chip-group",{attrs:{column:"",small:"","active-class":"primary--text"}},e._l(e.selected,(function(t){return r("v-chip",{key:t.id},[e._t("default",null,{item:t})],2)})),1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:!!e.loading,color:"red",dark:""},on:{click:function(t){return e.$emit("delete")}}},[e._v("Yes, sure")])],1)],1)],1)}),[],!1,null,null,null);t.a=d.exports},UJ9n:function(e,t,r){"use strict";var n=r("L2JU"),o=r("bHnR"),i=r("PMce"),a=r("LvDl"),c=r("obwe"),s=r("dhqo"),l=r.n(s),u=r("ejCs"),d=r.n(u);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={props:{value:{type:String,default:""},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},crud:{type:Boolean,default:!1}},data:function(){return{dialog:!c.c.get("confirmedFullscreen"),searchBox:!1}},computed:p(p({},Object(n.d)("app",["title","dense","fullscreen"])),{},{webview:function(){return d()(window.navigator.userAgent)},theTitle:function(){var e=this.selected.length;return e>0?"".concat(e," selected"):"".concat(l()(this.$_.startCase(this.page)))}}),methods:p(p(p({},Object(n.c)("app",[o.l,o.m,o.n])),Object(n.b)("app",[i.c])),{},{setSearch:function(e){e||this.$emit("input",""),this.searchBox=e},toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirm:function(e){e&&this.toggleFullscreen(),this.dialog=!1,c.c.set("confirmedFullscreen",!0)},logout:function(){var e=this;this.LOGOUT().then((function(){e.$router.push({name:"login"})})).catch((function(e){return Object(c.b)(e)}))}}),watch:{value:Object(a.debounce)((function(){this.$emit("fetch")}),500)}},h=r("KHd+"),b=Object(h.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("v-app-bar",{attrs:{color:e.selected.length?"black":"primary",dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[r("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("unselect")}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-divider",{staticClass:"mr-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[r("v-toolbar-title",[e._v(e._s(e.theTitle))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})],e._v(" "),r("v-spacer"),e._v(" "),e.selected.length?[1==e.selected.length?r("v-btn",{staticClass:"mr-2",attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("edit")}}},[r("v-icon",[e._v("mdi-pencil")]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Edit")]],2):e._e(),e._v(" "),r("v-btn",{attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[r("v-icon",[e._v("mdi-delete")]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Delete")]],2)]:[r("v-btn",{staticClass:"mr-2",attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:e.TOGGLE_DENSE}},[r("v-icon",[e._v(e._s(e.dense?"mdi-table":"mdi-table-large"))]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Dense")]],2),e._v(" "),r("v-btn",{attrs:{fab:e.$vuetify.breakpoint.smAndDown,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[r("v-icon",[e._v("mdi-plus")]),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.$vuetify.breakpoint.smAndDown?e._e():[r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),r("v-toolbar-title",[r("span",[e._v(e._s(e.title))])]),e._v(" "),r("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.$vuetify.breakpoint.smAndDown?r("v-text-field",{attrs:{value:e.value,"append-icon":e.$vuetify.breakpoint.smAndDown||e.value?"mdi-magnify-close":"mdi-magnify",label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{input:function(t){return e.$emit("input",t)},"click:append":function(t){return e.setSearch(!1)}}}):e._e()]:e._e(),e._v(" "),e.$vuetify.breakpoint.smAndDown?e._e():r("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.$vuetify.breakpoint.smAndDown?r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[r("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),e.webview?e._e():r("v-btn",{attrs:{icon:""},on:{click:e.toggleFullscreen}},[r("v-icon",[e._v(e._s(e.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"))])],1),e._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{icon:"",large:""}},n),[r("v-avatar",{attrs:{right:"",size:"32px",item:""}},[r("v-img",{attrs:{src:"/img/unknown.png",alt:"Profile"}})],1)],1)]}}])},[e._v(" "),r("v-list",[r("v-list-item",{attrs:{to:{name:"profile"}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list-item",{on:{click:e.logout}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-logout")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],2),e._v(" "),e.$vuetify.breakpoint.smAndDown&&!e.webview?r("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Use fullscreen mode ?")]),e._v(" "),r("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirm(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),r("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirm(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=b.exports},"UzJ+":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n={id:-1,name:"",email:"",role:{id:-1,name:""}},o={id:-1,name:"",description:"",user:n},i={id:-1,product_id:-1,price:0,changed_at:null,product:o,user:n},a={id:-1,name:"",description:"",user:n,percents:[]}},ejCs:function(e,t,r){var n=r("ow63"),o=new RegExp("("+n.join("|")+")","ig");e.exports=function(e){return!!e.match(o)}},f5ZI:function(e,t,r){"use strict";var n=r("L2JU");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.d)("app",["loading","dense"])),watch:{options:{handler:function(){this.$emit("fetch")},deep:!0}}},c=r("KHd+"),s=Object(c.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,options:e.options,headers:e.headers,items:e.items,"server-items-length":e.total,loading:!!e.loading,dense:e.dense,page:1,"items-per-page":10,"selectable-key":"authorized","sort-by":"updated_at","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(r){var n=r.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.$_.get(n,t.value))+"\n        ")],{item:n})]}}}))],null,!0)})}),[],!1,null,null,null);t.a=s.exports},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]},tax4:function(e,t,r){"use strict";var n=r("L2JU");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={props:{value:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},form:{type:Object,default:function(){}},title:{type:String,default:""},width:{type:String,default:"500px"}},computed:i(i({},Object(n.d)("app",["loading"])),{},{formTitle:function(){return this.title?this.title:-1===this.form.id?"New Item":"Edit Item"}})},s=r("KHd+"),l=Object(s.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":e.width,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:!!e.loading}},[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{style:e.$vuetify.breakpoint.smAndDown?"":"max-height: 500px;"},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("submit")}}},[e._t("default"),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],2)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),e.readonly?e._e():r("v-btn",{attrs:{disabled:!!e.loading,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.a=l.exports},yTAQ:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),i=r("L2JU"),a=r("D4Jh"),c=r("mXMD"),s=r("UzJ+"),l=r("obwe"),u=r("UJ9n"),d=r("dhqo"),f=r.n(d),p=r("LvDl"),v=r("bHnR");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _={props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},model:{type:String,default:""},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){return{search:"",searchBox:!1,datas:[],options:{}}},computed:h(h({},Object(i.d)("app",["loading","dense"])),{},{tableTitle:function(){var e=this.value.length;return e>0?"".concat(e," selected"):"".concat(f()(this.$_.startCase(this.model)))}}),methods:h(h({},Object(i.c)("app",[v.l])),{},{toggleSearch:function(){this.searchBox=!this.searchBox,this.searchBox||(this.search="")},toggleSelect:function(e){e.selected=!e.selected,this.$emit("input",this.datas.filter((function(e){return e.selected})))},fetch:function(){this.$emit("fetch",h(h({},this.options),{},{search:this.search}))}}),watch:{options:{handler:function(){this.fetch()},deep:!0},search:Object(p.debounce)((function(){this.fetch()}),500),items:function(e){this.datas=this.$_.map(e,(function(e){return h(h({},e),{},{selected:!1})}))},value:function(e){e.length?this.searchBox=!1:this.search&&(this.searchBox=!0)}},mounted:function(){this.options={groupBy:[],groupDesc:[],itemsPerPage:10,multiSort:!1,mustSort:!0,page:1,search:"",sortBy:["updated_at"],sortDesc:[!0]}}},g=r("KHd+"),y=Object(g.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("v-row",{attrs:{align:"center"}},e._l(e.datas,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{staticClass:"rounded-tl-xl rounded-br-xl",attrs:{elevation:t.selected?10:1},on:{click:function(r){return e.toggleSelect(t)}}},[r("v-card-subtitle",{staticClass:"py-0"},[e._v(e._s(t.user.name)+",\n                    "+e._s(e._f("moment")(t.updated_at,"from"))+"\n                ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-title",{staticClass:"py-0"},[e._v(e._s(t.name)+"\n                    "),r("v-spacer"),e._v(" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"item.selected"}],attrs:{color:"green"}},[e._v("mdi-check-circle-outline")])],1),e._v(" "),r("v-card-text",[r("div",{staticClass:"pb-2"},[e._v(e._s(t.description))]),e._v(" "),r("v-chip",{attrs:{color:100==t.percent_total?"green":"red",small:e.dense,label:"",dark:""}},[e._v("\n                        "+e._s(e._f("currency")(t.price_total)))]),e._v(" "),r("v-chip",{attrs:{small:e.dense,color:"primary",outlined:"",label:"",dark:""}},[r("v-avatar",{staticClass:"lighten-5",attrs:{color:"primary",left:""}},[e._v("\n                            "+e._s(t.percents.length)+"\n                        ")]),e._v("\n                        "+e._s(t.percent_total)+" %\n                    ")],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null).exports,O=r("f5ZI"),w=r("tax4"),j=r("67TT");function k(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){k(i,n,o,a,c,"next",e)}function c(e){k(i,n,o,a,c,"throw",e)}a(void 0)}))}}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E,S,A,T={components:{AppTopBar:u.a,TheDataCard:y,TheDataTable:O.a,TheDialogForm:w.a,TheDialogDelete:j.a},data:function(){return{model:"formula",options:{},search:"",total:0,selected:[],headers:[{text:"Name",value:"name"},{text:"Description",value:"description"},{text:"Tot.Price",value:"price_total",align:"right",sortable:!1,width:150},{text:"Tot.Percent",value:"percent_total",align:"center",sortable:!1},{text:"Rel.Product",value:"percent_count",align:"center",sortable:!1},{text:"Creator",value:"user.name"},{text:"Updated At",value:"updated_at"}],dialog:!1,dialogDelete:!1,dialogPercent:!1,list_products:[],form:this.$_.cloneDeep(s.a)}},computed:D(D(D({},Object(i.d)("app",["loading","dense"])),Object(i.d)("model",["formulas"])),{},{formPercentTitle:function(){return this.form.name||"Related products"},percentTotal:function(){return this.$_.reduce(this.form.percents,(function(e,t){return e+Number(t.percent)}),0)}}),methods:D(D(D({},Object(i.c)("model",[c.b])),Object(i.b)("model",[a.b,a.c,a.a])),{},{create:function(){this.form=this.$_.cloneDeep(s.a),this.dialog=!0},edit:function(){this.form=this.$_.cloneDeep(this.selected[0]),this.dialog=!0},editPercent:function(e){this.form=this.$_.cloneDeep(this.$_.find(this.formulas,{id:e})),this.dialogPercent=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.$refs.form.reset()}))},closePercent:function(){var e=this;this.dialogPercent=!1,this.$nextTick((function(){e.$refs.form_percent.reset()}))},fetchProducts:(A=x(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GET_MODELS({model:"product",params:{itemsPerPage:-1,temporary:!0}}).then((function(e){var r=e.data;t.list_products=t.$_.map(r,(function(e){return{product:{id:e.id,name:e.name},percent:0}}))})).catch((function(e){return Object(l.b)(e)}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return A.apply(this,arguments)}),fetch:(S=x(o.a.mark((function e(){var t,r,n,i=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,r=this.options,n=this.search,e.next=3,this.GET_MODELS({model:t,params:D(D({},r),{},{search:n})}).then((function(e){var t=e.meta;i.total=t.total})).catch((function(e){return Object(l.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)}),savePercent:function(){var e=this;this.$refs.form_percent.validate().then((function(t){if(t){var r=e.model,n=e.form;e.SAVE_MODEL({url:"formula/".concat(n.id,"/percent"),payload:{formula:e.$_.map(n.percents,(function(e){return{product_id:e.product.id,percent:e.percent}}))}}).then(function(){var t=x(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.UPDATE_MODEL({model:r,data:n}),e.closePercent();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=Object(l.b)(t);e.$refs.form_percent.setErrors(r)}))}}))},save:function(){var e=this;this.$refs.form.validate().then((function(t){if(t){var r=e.model,n=e.form;e.SAVE_MODEL({model:r,payload:n}).then(function(){var t=x(o.a.mark((function t(i){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.id>0)){t.next=4;break}e.UPDATE_MODEL({model:r,data:i}),t.next=6;break;case 4:return t.next=6,e.fetch();case 6:e.selected=[],e.close();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=Object(l.b)(t);e.$refs.form.setErrors(r)}))}}))},deleteItem:(E=x(o.a.mark((function e(){var t,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.model,e.next=3,this.DELETE_MODELS({model:t,ids:this.$_.map(this.selected,"id")}).then(x(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.fetch();case 2:r.selected=[],r.dialogDelete=!1;case 4:case"end":return e.stop()}}),e)})))).catch((function(e){return Object(l.b)(e)}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)})}),watch:{dialogPercent:function(e){e&&0==this.list_products.length&&this.fetchProducts()}}},C=Object(g.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("app-top-bar",{attrs:{page:e.model,selected:e.selected,crud:""},on:{unselect:function(t){e.selected=[]},fetch:e.fetch,edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-row",{attrs:{align:"start",justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("the-data-table",{attrs:{headers:e.headers,items:e.formulas,total:e.total,options:e.options},on:{"update:options":function(t){e.options=t},fetch:e.fetch},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[r("v-chip",{attrs:{color:100==n.percent_total?"green":"red",small:e.dense,dark:""},on:{click:function(t){return e.editPercent(n.id)}}},[e._v(e._s(n.name))])]}},{key:"item.price_total",fn:function(t){var r=t.item;return[e._v(e._s(e._f("currency")(r.price_total)))]}},{key:"item.percent_total",fn:function(t){var r=t.item;return[e._v(e._s(r.percent_total)+" %")]}},{key:"item.percent_count",fn:function(t){var r=t.item;return[e._v(e._s(r.percents.length))]}},{key:"item.updated_at",fn:function(t){var r=t.item;return[e._v(e._s(e._f("moment")(r.updated_at,"from")))]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),r("the-dialog-form",{attrs:{form:e.form},on:{close:e.close,submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("validation-observer",{ref:"form"},[r("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-text-field",{attrs:{label:"Formula name",type:"text","error-messages":n,success:o,counter:"",hint:"This is to identify the formula","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),r("validation-provider",{attrs:{name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-text-field",{attrs:{label:"Formula description",type:"text","error-messages":n,success:o,counter:"",hint:"Short description about the formula","persistent-hint":""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})]}}])})],1)],1),e._v(" "),r("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.deleteItem,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[e._v("\n                    "+e._s(r.name)+"\n                ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),r("the-dialog-form",{attrs:{title:e.formPercentTitle,width:"700px",readonly:!e.form.authorized},on:{close:e.closePercent,submit:e.savePercent},model:{value:e.dialogPercent,callback:function(t){e.dialogPercent=t},expression:"dialogPercent"}},[r("validation-observer",{ref:"form_percent"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("validation-provider",{attrs:{name:"formula"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-autocomplete",{attrs:{items:e.list_products,"error-messages":n,success:o,loading:!!e.loading,readonly:!e.form.authorized,clearable:e.form.authorized,chips:"",multiple:"","auto-select-first":"","deletable-chips":"","item-text":"product.name","item-value":"product.id",label:"Related products",hint:"The related products","persistent-hint":"","return-object":""},model:{value:e.form.percents,callback:function(t){e.$set(e.form,"percents",t)},expression:"form.percents"}})]}}])}),e._v(" "),r("validation-provider",{attrs:{name:"percent_total"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,o=t.valid;return[r("v-text-field",{staticClass:"mt-3",attrs:{label:"Total Percentage",type:"number",value:e.percentTotal,"error-messages":n,success:o,suffix:"%",hint:"This should be 100%",readonly:"",filled:"","persistent-hint":""}})]}}])})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},e._l(e.form.percents,(function(t,n){return r("validation-provider",{key:t.product.id,attrs:{name:"formula."+n+".percent"},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors,i=n.valid;return[r("v-text-field",{attrs:{label:t.product.name,"error-messages":o,success:i,readonly:!e.form.authorized,type:"number",suffix:"%",hint:"This product's percentage","persistent-hint":""},model:{value:t.percent,callback:function(r){e.$set(t,"percent",e._n(r))},expression:"el.percent"}})]}}],null,!0)})})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=C.exports}}]);