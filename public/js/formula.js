(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UJ9n:function(e,t,r){"use strict";var n=r("L2JU"),i=r("LvDl"),a=r("dhqo"),s=r.n(a),o=r("PMce"),l=r("obwe"),c=r("zhh1"),u=r("bHnR");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={mixins:[c.a,c.c],props:{value:{type:Object,default:function(){}},page:{type:String,default:""},selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},crud:{type:Boolean,default:!1},mineTab:{type:Boolean,default:!1}},data:function(){return{searchBox:!1,search:"",tab:0}},computed:v(v({},Object(n.d)("app",["title","dark","dense"])),{},{theTitle:function(){return"".concat(s()(Object(i.startCase)(this.page)))},appBarColor:function(){return this.dark?"grey darken-3":"primary"},searchBoxIcon:function(){return this.mobile||this.search?"mdi-magnify-close":"mdi-magnify"},darkIcon:function(){return this.dark?"mdi-brightness-1":"mdi-brightness-3"},denseIcon:function(){return this.dense?"mdi-table":"mdi-table-large"}}),methods:v(v(v({},Object(n.c)("app",[u.n,u.o,u.m])),Object(n.b)("app",[o.d])),{},{setSearch:function(e){e||(this.search=""),this.searchBox=e},logout:function(){var e=this;this.LOGOUT().then((function(){return e.$router.push({name:"login"})})).catch((function(e){return Object(l.b)(e)}))}}),watch:{search:Object(i.debounce)((function(e){this.$emit("input",v(v({},this.value),{},{page:1,search:e}))}),500),tab:function(e){this.$emit("input",v(v({},this.value),{},{page:1,mine:e}))}}},m=r("KHd+"),_=Object(m.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("v-app-bar",{attrs:{color:e.appBarColor,"collapse-on-scroll":!(e.selected.length||e.searchBox||!e.mobile),dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[e.selected.length?[r("v-btn",{attrs:{fab:"",text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("update:selected",[])}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-divider",{staticClass:"mx-2",attrs:{dark:!!e.selected.length,inset:"",vertical:""}})]:e._e(),e._v(" "),[e.selected.length?r("v-toolbar-title",[e._v("\n                    "+e._s(e.selected.length)+" selected\n                ")]):r("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("Recent")]),e._v(" "),e.mineTab?r("v-tab",[e._v("Mine")]):e._e()],1)],e._v(" "),r("v-spacer"),e._v(" "),e.selected.length?[r("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete")}}},[r("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]:[r("v-btn",{attrs:{fab:e.mobile,text:"",outlined:"",small:"",dark:""},on:{click:function(t){return e.$emit("create")}}},[r("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),r("v-toolbar-title",[r("span",[e._v(e._s(e.theTitle))])]),e._v(" "),r("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?r("v-text-field",{attrs:{"append-icon":e.searchBoxIcon,autofocus:e.mobile,dark:e.dark,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(t){return e.setSearch(!1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():r("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearch(!0)}}},[r("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),r("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",i,!1),n),[r("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),r("v-card",{attrs:{dark:e.dark}},[r("v-list",{staticClass:"py-0",attrs:{dense:""}},[r("v-list-item",{on:{click:e.TOGGLE_DARK}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.darkIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                                "+e._s(e.dark?"Lighter":"Darker")+"\n                            ")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),e.webview?e._e():[r("v-list-item",{on:{click:e.toggleFs}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.fullscreenIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                                    "+e._s(e.fullscreen?"Normal-screen":"Full-screen")+"\n                                ")])],1)],1),e._v(" "),r("v-divider")],e._v(" "),e.mobile?e._e():[r("v-list-item",{on:{click:e.TOGGLE_DENSE}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.denseIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                                    "+e._s(e.dense?"Bigger":"Smaller")+"\n                                ")])],1)],1),e._v(" "),r("v-divider")],e._v(" "),r("v-list-item",{attrs:{to:{name:"profile"}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Profile")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list-item",{on:{click:e.logout}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-logout")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("Logout")])],1)],1)],2)],1)],1)],2),e._v(" "),e.mobile&&!e.webview?r("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogFullscreen,callback:function(t){e.dialogFullscreen=t},expression:"dialogFullscreen"}},[r("v-card",{attrs:{dark:e.dark}},[r("v-card-title",{staticClass:"headline"},[e._v(" Use fullscreen? ")]),e._v(" "),r("v-card-text",[e._v("\n                You are using small device screen, we can help you navigate\n                easier using fullscreen mode.\n            ")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFs(!1)}}},[e._v("\n                    No\n                ")]),e._v(" "),r("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFs(!0)}}},[e._v("\n                    Yes\n                ")])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=_.exports},tZeA:function(e,t,r){"use strict";var n={mixins:[r("zhh1").a],props:{revs:{type:Array,required:!0}}},i=r("KHd+"),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-timeline",{attrs:{dense:"",clipped:""}},e._l(e.revs,(function(t,n){return r("v-timeline-item",{key:t.id,attrs:{"fill-dot":0===n,small:""}},[r("v-card",{attrs:{outlined:"",elevation:"2"}},[r("v-card-subtitle",{staticClass:"py-2"},[t.user?r("b",[e._v("\n                    "+e._s(t.user.name)+"\n                ")]):e._e(),e._v(" "),r("i",{staticClass:"text-right"},[e._v("\n                    - "+e._s(e._f("moment")(t.updated_at,"from"))+"\n                ")])]),e._v(" "),r("v-card-text",[e._t("card-text",[r("v-chip",{attrs:{color:0===n?"primary":""}},[e._v("\n                        "+e._s(e._f("currency")(t.price))+"\n                    ")])],{item:{rev:t,index:n}})],2),e._v(" "),r("v-card-actions",[e._t("card-actions",null,{item:{rev:t,index:n}})],2)],1)],1)})),1)}),[],!1,null,null,null);t.a=a.exports},yTAQ:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),i=r.n(n),a=r("L2JU"),s=r("LvDl"),o=r("UzJ+"),l=r("obwe"),c=r("zhh1"),u=r("UJ9n"),d={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}}}},v=r("KHd+"),f=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[r("thead",[r("tr",e._l(e.headers,(function(t){return r("th",{key:t.value,class:"text-"+t.align,style:t.width&&"width: "+t.width+"px"},[e._v("\n                    "+e._s(t.text)+"\n                ")])})),0)]),e._v(" "),r("tbody",[e._l(e.items,(function(t,n){return r("tr",{key:t.id},e._l(e.headers,(function(i){return r("td",{key:i.value,class:"text-"+i.align},[e._t(i.value,null,{item:t,index:n})],2)})),0)})),e._v(" "),e._t("footer")],2)]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,p={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}}}},m=Object(v.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-iterator",{attrs:{items:e.items,"item-key":"id","hide-default-footer":""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.items;return[e._l(n,(function(t,n){return r("v-card",{key:t.id,staticClass:"mb-1"},[r("v-card-title",[r("h4",[e._v(e._s(t.name))])]),e._v(" "),r("v-divider"),e._v(" "),r("v-list",{attrs:{dense:""}},e._l(e.headers,(function(i){return r("v-list-item",{key:i.value},[r("v-list-item-content",[e._v("\n                        "+e._s(i.text)+" :\n                    ")]),e._v(" "),r("v-list-item-content",{staticClass:"align-end",class:{"justify-end":"right"==i.align}},[e._t(i.value,null,{item:t,index:n})],2)],1)})),1)],1)})),e._v(" "),r("v-card",{staticClass:"mt-1"},[r("v-card-title"),e._v(" "),r("v-divider"),e._v(" "),r("v-list",{attrs:{dense:""}},[e._t("footer")],2)],1)]}}],null,!0)})}),[],!1,null,null,null).exports,_={mixins:[c.a],components:{TheSimpleTable:f,TheDataIterator:m},props:{value:{type:Object,required:!0},fieldDisabled:{type:Boolean,default:!1},listRecipe:{type:Array,default:function(){return[]}}},data:function(){return{headers:[{text:"No",value:"no",align:"center",width:8},{text:"Name",value:"name",align:"left"},{text:"Type",value:"type",align:"left",width:100},{text:"Price",value:"price",align:"right",width:200},{text:"Portion",value:"portion",align:"right",width:120},{text:"Total",value:"total",align:"right",width:200}]}},computed:{form:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},validator:function(){return this.$refs.form},recipePortionColor:function(){return{"red--text font-weight-bold":100!=this.portionTotal}},portionTotal:function(){return this.form._recipes?this.form._recipes.reduce((function(e,t){var r=t.portion;return e+Number(r)}),0):0},priceTotal:function(){return this.form._recipes?this.form._recipes.reduce((function(e,t){var r=t.portion,n=t.price;return e+Number(n)*Number(r)}),0).toFixed(2):0},rmc:function(){return this.priceTotal/this.portionTotal},rmcs:function(){return 100*this.rmc/(100-this.form.shrink)},rmcsLiter:function(){return this.form.density*this.rmcs}},methods:{stripRecipeClass:function(e){return e.replace("App\\","")}}},h=Object(v.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{on:{submit:function(t){return t.preventDefault(),e.$emit("save")}}},[r("validation-observer",{ref:"form"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("validation-provider",{attrs:{name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[r("v-text-field",{attrs:{"error-messages":n,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,autofocus:!e.mobile,label:"Name",type:"text",hint:"The formula name",counter:"","persistent-hint":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-alert",{staticClass:"my-0",attrs:{color:"primary",dense:"",outlined:"",text:""}},[r("span",{staticClass:"caption"},[e._v("Total RMC")]),r("br"),e._v(" "),r("b",[e._v(e._s(e._f("currency")(e.rmcs))+" / Kg")]),r("br"),e._v(" "),r("b",[e._v(e._s(e._f("currency")(e.rmcsLiter))+" / L")])])],1)],1),e._v(" "),r("validation-provider",{attrs:{name:"main"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[r("v-radio-group",{attrs:{"error-messages":n,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,row:!e.mobile,"hide-details":"auto"},scopedSlots:e._u([{key:"label",fn:function(){return[r("div",{staticClass:"caption"},[e._v("Type :")])]},proxy:!0}],null,!0),model:{value:e.form.main,callback:function(t){e.$set(e.form,"main",t)},expression:"form.main"}},[e._v(" "),r("v-radio",{attrs:{label:"Main formula",value:1}}),e._v(" "),r("v-radio",{attrs:{label:"Sub formula",value:0}})],1)]}}])}),e._v(" "),r("v-divider",{staticClass:"mt-1"}),e._v(" "),r("v-row",[r("v-col",[r("validation-provider",{attrs:{name:"density"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[r("v-text-field",{attrs:{"error-messages":n,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,prefix:"Kg/L",label:"Density Factor",hint:"The formula density factor",type:"number",reverse:"","persistent-hint":""},model:{value:e.form.density,callback:function(t){e.$set(e.form,"density",e._n(t))},expression:"form.density"}})]}}])})],1),e._v(" "),r("v-col",[r("validation-provider",{attrs:{name:"shrink"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[r("v-text-field",{attrs:{"error-messages":n,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,prefix:"%",label:"Shrink Factor",hint:"The formula shrink factor",type:"number",reverse:"","persistent-hint":""},model:{value:e.form.shrink,callback:function(t){e.$set(e.form,"shrink",e._n(t))},expression:"form.shrink"}})]}}])})],1)],1),e._v(" "),e.form._recipes?r("validation-provider",{attrs:{name:"_recipes"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[r("v-autocomplete",{attrs:{items:e.listRecipe,"error-messages":n,success:i,readonly:e.fieldDisabled,filled:e.fieldDisabled,"item-text":"name",label:"Recipes",hint:"The recipes list",attach:"","persistent-hint":"",multiple:"","return-object":"",chips:"","deletable-chips":""},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-list-item-content",[r("v-list-item-title",{domProps:{innerHTML:e._s(n.name)}}),e._v(" "),r("v-list-item-subtitle",[e._v("\n                            "+e._s(e.stripRecipeClass(n.recipeable_type))+"\n                        ")])],1)]}}],null,!0),model:{value:e.form._recipes,callback:function(t){e.$set(e.form,"_recipes",t)},expression:"form._recipes"}})]}}],null,!1,638089043)}):e._e(),e._v(" "),e.form._recipes&&e.form._recipes.length>0?r("v-card",{staticClass:"my-3",attrs:{outlined:""}},[e.mobile?r("the-data-iterator",{attrs:{headers:e.headers,items:e.form._recipes},scopedSlots:e._u([{key:"no",fn:function(t){var r=t.index;return[e._v("\n                    "+e._s(r+1)+"\n                ")]}},{key:"name",fn:function(t){var n=t.item,i=t.index;return[r("validation-provider",{attrs:{name:"_recipes."+i+".recipeable_id"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.errors,i=e.valid;return[r("v-text-field",{attrs:{value:n.name,"error-messages":t,success:i,"hide-details":"auto",readonly:"",flat:"",dense:""}})]}}],null,!0)})]}},{key:"type",fn:function(t){var n=t.item,i=t.index;return[r("validation-provider",{attrs:{name:"_recipes."+i+".recipeable_type"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors,a=t.valid;return[r("v-text-field",{attrs:{value:e.stripRecipeClass(n.recipeable_type),"error-messages":i,success:a,"hide-details":"auto",readonly:"",flat:"",dense:""}})]}}],null,!0)})]}},{key:"price",fn:function(t){var r=t.item;return[e._v("\n                    "+e._s(e._f("currency")(r.price))+"\n                ")]}},{key:"portion",fn:function(t){var n=t.item,i=t.index;return[r("validation-provider",{attrs:{name:"_recipes."+i+".portion"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors,a=t.valid;return[r("v-text-field",{attrs:{"error-messages":i,success:a,readonly:e.fieldDisabled,filled:e.fieldDisabled,type:"number",prefix:"Kg","hide-details":"auto",reverse:"",flat:"",dense:""},model:{value:n.portion,callback:function(t){e.$set(n,"portion",e._n(t))},expression:"item.portion"}})]}}],null,!0)})]}},{key:"total",fn:function(t){var r=t.item;return[e._v("\n                    "+e._s(e._f("currency")(r.price*r.portion))+"\n                ")]}},{key:"footer",fn:function(){return[r("v-list-item",[r("v-list-item-content",[e._v("Portion")]),e._v(" "),r("v-list-item-content",[r("validation-provider",{attrs:{name:"_recipes_portion"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[r("v-text-field",{attrs:{value:e.portionTotal,"error-messages":n,success:i,readonly:"",type:"number",prefix:"Kg","hide-details":"auto",reverse:"",flat:"",dense:""}})]}}],null,!1,1176960231)})],1)],1),e._v(" "),r("v-list-item",[r("v-list-item-content",[e._v("Total")]),e._v(" "),r("v-list-item-content",{staticClass:"align-end justify-end"},[e._v("\n                            "+e._s(e._f("currency")(e.priceTotal))+"\n                        ")])],1),e._v(" "),r("v-list-item",[r("v-list-item-content",[e._v("RMC (Kg)")]),e._v(" "),r("v-list-item-content",{staticClass:"align-end justify-end"},[e._v("\n                            "+e._s(e._f("currency")(e.rmc))+"\n                        ")])],1),e._v(" "),r("v-list-item",{staticClass:"font-weight-bold"},[r("v-list-item-content",[e._v("RMCS (Kg)")]),e._v(" "),r("v-list-item-content",{staticClass:"align-end justify-end"},[e._v("\n                            "+e._s(e._f("currency")(e.rmcs))+"\n                        ")])],1),e._v(" "),r("v-list-item",{staticClass:"font-weight-bold"},[r("v-list-item-content",[e._v("RMCS (L)")]),e._v(" "),r("v-list-item-content",{staticClass:"align-end justify-end"},[e._v("\n                            "+e._s(e._f("currency")(e.rmcsLiter))+"\n                        ")])],1)]},proxy:!0}],null,!1,735959658)}):r("the-simple-table",{attrs:{headers:e.headers,items:e.form._recipes},scopedSlots:e._u([{key:"no",fn:function(t){var r=t.index;return[e._v("\n                    "+e._s(r+1)+"\n                ")]}},{key:"name",fn:function(t){var n=t.item,i=t.index;return[r("validation-provider",{attrs:{name:"_recipes."+i+".recipeable_id"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.errors,i=e.valid;return[r("v-text-field",{attrs:{value:n.name,"error-messages":t,success:i,"hide-details":"auto",readonly:"",flat:"",dense:""}})]}}],null,!0)})]}},{key:"type",fn:function(t){var n=t.item,i=t.index;return[r("validation-provider",{attrs:{name:"_recipes."+i+".recipeable_type"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors,a=t.valid;return[r("v-text-field",{attrs:{value:e.stripRecipeClass(n.recipeable_type),"error-messages":i,success:a,"hide-details":"auto",readonly:"",flat:"",dense:""}})]}}],null,!0)})]}},{key:"price",fn:function(t){var r=t.item;return[e._v("\n                    "+e._s(e._f("currency")(r.price))+"\n                ")]}},{key:"portion",fn:function(t){var n=t.item,i=t.index;return[r("validation-provider",{attrs:{name:"_recipes."+i+".portion"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors,a=t.valid;return[r("v-text-field",{attrs:{"error-messages":i,success:a,readonly:e.fieldDisabled,filled:e.fieldDisabled,type:"number",prefix:"Kg","hide-details":"auto",reverse:"",flat:"",dense:""},model:{value:n.portion,callback:function(t){e.$set(n,"portion",e._n(t))},expression:"item.portion"}})]}}],null,!0)})]}},{key:"total",fn:function(t){var r=t.item;return[e._v("\n                    "+e._s(e._f("currency")(r.price*r.portion))+"\n                ")]}},{key:"footer",fn:function(){return[r("tr",[r("td",{attrs:{colspan:"6"}})]),e._v(" "),r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"4"}},[e._v("Total")]),e._v(" "),r("td",{staticClass:"text-right",class:e.recipePortionColor},[r("validation-provider",{attrs:{name:"_recipes_portion"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[r("v-text-field",{attrs:{value:e.portionTotal,"error-messages":n,success:i,readonly:"",type:"number",prefix:"Kg","hide-details":"auto",reverse:"",flat:"",dense:""}})]}}],null,!1,1176960231)})],1),e._v(" "),r("td",{staticClass:"text-right"},[e._v("\n                            "+e._s(e._f("currency")(e.priceTotal))+"\n                        ")])]),e._v(" "),r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"5"}},[e._v("RMC (Kg)")]),e._v(" "),r("td",{staticClass:"text-right"},[e._v("\n                            "+e._s(e._f("currency")(e.rmc))+"\n                        ")])]),e._v(" "),r("tr",{staticClass:"font-weight-black"},[r("td",{staticClass:"text-right",attrs:{colspan:"5"}},[e._v("RMCS (Kg)")]),e._v(" "),r("td",{staticClass:"text-right"},[e._v("\n                            "+e._s(e._f("currency")(e.rmcs))+"\n                        ")])]),e._v(" "),r("tr",{staticClass:"font-weight-black"},[r("td",{staticClass:"text-right",attrs:{colspan:"5"}},[e._v("RMCS (L)")]),e._v(" "),r("td",{staticClass:"text-right"},[e._v("\n                            "+e._s(e._f("currency")(e.rmcsLiter))+"\n                        ")])])]},proxy:!0}],null,!1,3617288158)})],1):e._e()],1),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit"}})],1)}),[],!1,null,null,null).exports,b=r("tZeA");function y(e,t,r,n,i,a,s){try{var o=e[a](s),l=o.value}catch(e){return void r(e)}o.done?t(l):Promise.resolve(l).then(n,i)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){y(a,n,i,s,o,"next",e)}function o(e){y(a,n,i,s,o,"throw",e)}s(void 0)}))}}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w,C,D={mixins:[c.a,c.d,c.g,c.b],components:{AppTopBar:u.a,FormulaForm:h,RevTimeline:b.a},data:function(){return{model:"formula",modelDefault:o.a,form:Object(s.cloneDeep)(o.a),headers:[{text:"Name",value:"name"},{text:"Recipes",value:"recipes_count",align:"center"},{text:"Main",value:"main",align:"center"},{text:"Price (Kg)",value:"rev.price",align:"right",sortable:!1,width:150},{text:"Rev",value:"revs_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}],listRecipe:[],listRecipeDefault:[],prevIsMain:null}},computed:k(k({},Object(a.d)("model",["formulas"])),{},{formWidth:function(){var e=this.form._recipes;return e&&e.length>0?1e3:700}}),methods:{change:function(e){this.formTabIndex=0,this.listRecipe=Object(s.cloneDeep)(this.listRecipeDefault.filter((function(t){return t.id!="App\\Formula-".concat(e.id)})).filter((function(t){var r=t.recipeable_id;return"App\\Formula"!=t.recipeable_type||!e.parents||!e.parents.flatten.includes(r)}))),this.form=Object(s.cloneDeep)(e),this.prevIsMain=Object(s.cloneDeep)(e.main)},onCreate:function(){this.change(this.modelDefault)},onEdit:(C=g(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchDetail(t||this.selected[0]);case 2:t=e.sent,this.change(t);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return C.apply(this,arguments)}),onSaved:function(e){var t=e.main;this.creating||this.prevIsMain!=t&&this.fetchListRecipe()},fetchDetail:(w=g(i.a.mark((function e(t){var r,n,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.next=3,this.GET_MODEL({model:this.model,id:r}).then((function(e){n=k(k({},e),{},{shrink:Number(e.shrink),density:Number(e.density),_recipes:a.makeRecipesDetail(e.recipes)})}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return w.apply(this,arguments)}),makeRecipesDetail:function(e){return e.map((function(e){var t=e.recipeable_type,r=e.recipeable_id,n=e.portion,i=e.recipeable;return{id:"".concat(t,"-").concat(r),recipeable_id:r,recipeable_type:t,name:i.name,portion:Number(n),price:Number(i.rev.price)}}))},makeListRecipes:function(e){return e.map((function(e){var t=e.recipeable_type,r=e.recipeable_id,n=e.name,i=e.price;return{id:"".concat(t,"-").concat(r),recipeable_id:r,recipeable_type:t,name:n,portion:null,price:Number(i)}}))},fetchListRecipe:function(){var e=this;this.fetchList("recipe").then((function(t){e.listRecipeDefault=e.makeListRecipes(t)})).catch((function(e){return Object(l.b)(e)}))}},mounted:function(){this.fetchListRecipe()}},j=Object(v.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("app-top-bar",{attrs:{selected:e.selected,page:e.model,"mine-tab":"",crud:""},on:{"update:selected":function(t){e.selected=t},edit:e.edit,create:e.create,delete:function(t){e.dialogDelete=!0}},model:{value:e.options,callback:function(t){e.options=t},expression:"options"}}),e._v(" "),r("the-data",{attrs:{items:e.formulas,options:e.options,headers:e.headers,total:e.total,model:e.model},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"card",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{color:e.chipColor(n),outlined:!n.selected,absolute:"",top:"",right:"",small:"",tile:""}},[e._v("\n                "+e._s(e._f("currency")(n.rev.price))+" / Kg\n            ")]),e._v(" "),r("v-card-text",{on:{click:function(t){return e.edit(n)}}},[r("div",{staticClass:"overline"},[e._v("\n                    "+e._s(e._f("moment")(n.updated_at,"from"))+"\n                ")]),e._v(" "),r("div",{staticClass:"overline"},[e._v("\n                    "+e._s(n.user.name)+"\n                ")]),e._v(" "),r("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                    "+e._s(n.name)+"\n                ")])])]}},{key:"item.name",fn:function(t){var n=t.item;return[r("v-chip",{attrs:{color:e.chipColor(n),small:e.dense,dark:""},on:{click:function(t){return e.edit(n)}}},[e._v("\n                "+e._s(n.name)+"\n            ")])]}},{key:"item.main",fn:function(t){var n=t.item;return[r("v-icon",[e._v("\n                "+e._s(n.main?"mdi-check-bold":"mdi-checkbox-blank-circle")+"\n            ")])]}},{key:"item.rev.price",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(e._f("currency")(r.rev.price))+"\n        ")]}},{key:"item.updated_at",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(e._f("moment")(r.updated_at,"from"))+"\n        ")]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),r("the-dialog-delete",{attrs:{selected:e.selected,model:e.model},on:{delete:e.remove,close:function(t){e.dialogDelete=!1}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[e._v("\n            "+e._s(r.name)+"\n        ")]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}}),e._v(" "),r("the-dialog-form",{attrs:{form:e.form,title:e.model,tabs:e.formTabs,tab:e.formTabIndex,readonly:e.fieldDisabled,width:e.formWidth},on:{"update:tab":function(t){e.formTabIndex=t},close:e.close,submit:e.save},scopedSlots:e._u([{key:"DATA",fn:function(){return[r("formula-form",{ref:"form",attrs:{"field-disabled":e.fieldDisabled,"list-recipe":e.listRecipe},on:{save:e.save},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})]},proxy:!0},{key:"REV",fn:function(){return[e.form.revs?r("rev-timeline",{attrs:{revs:e.form.revs},scopedSlots:e._u([{key:"card-text",fn:function(t){var n=t.item,i=n.rev,a=n.index;return[r("v-chip",{staticClass:"ma-1",attrs:{color:0===a?"primary":""}},[e._v("\n                        "+e._s(e._f("currency")(i.price))+" / Kg\n                    ")]),e._v(" "),r("v-chip",{staticClass:"ma-1",attrs:{color:0===a?"primary":""}},[e._v("\n                        "+e._s(e._f("currency")(i.price_liter))+" / L\n                    ")])]}}],null,!1,2167403760)}):e._e()]},proxy:!0}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)}),[],!1,null,null,null);t.default=j.exports}}]);