(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Report.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Report.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"report\",\n  data: function data() {\n    return {\n      headers: [{\n        text: \"Dessert (100g serving)\",\n        align: \"start\",\n        sortable: false,\n        value: \"name\"\n      }, {\n        text: \"Calories\",\n        value: \"calories\"\n      }, {\n        text: \"Fat (g)\",\n        value: \"fat\"\n      }, {\n        text: \"Carbs (g)\",\n        value: \"carbs\"\n      }, {\n        text: \"Protein (g)\",\n        value: \"protein\"\n      }, {\n        text: \"Iron (%)\",\n        value: \"iron\"\n      }],\n      desserts: [{\n        name: \"Frozen Yogurt\",\n        calories: 159,\n        fat: 6.0,\n        carbs: 24,\n        protein: 4.0,\n        iron: \"1%\"\n      }, {\n        name: \"Ice cream sandwich\",\n        calories: 237,\n        fat: 9.0,\n        carbs: 37,\n        protein: 4.3,\n        iron: \"1%\"\n      }, {\n        name: \"Eclair\",\n        calories: 262,\n        fat: 16.0,\n        carbs: 23,\n        protein: 6.0,\n        iron: \"7%\"\n      }, {\n        name: \"Cupcake\",\n        calories: 305,\n        fat: 3.7,\n        carbs: 67,\n        protein: 4.3,\n        iron: \"8%\"\n      }, {\n        name: \"Gingerbread\",\n        calories: 356,\n        fat: 16.0,\n        carbs: 49,\n        protein: 3.9,\n        iron: \"16%\"\n      }, {\n        name: \"Jelly bean\",\n        calories: 375,\n        fat: 0.0,\n        carbs: 94,\n        protein: 0.0,\n        iron: \"0%\"\n      }, {\n        name: \"Lollipop\",\n        calories: 392,\n        fat: 0.2,\n        carbs: 98,\n        protein: 0,\n        iron: \"2%\"\n      }, {\n        name: \"Honeycomb\",\n        calories: 408,\n        fat: 3.2,\n        carbs: 87,\n        protein: 6.5,\n        iron: \"45%\"\n      }, {\n        name: \"Donut\",\n        calories: 452,\n        fat: 25.0,\n        carbs: 51,\n        protein: 4.9,\n        iron: \"22%\"\n      }, {\n        name: \"KitKat\",\n        calories: 518,\n        fat: 26.0,\n        carbs: 65,\n        protein: 7,\n        iron: \"6%\"\n      }]\n    };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1JlcG9ydC52dWU/NjQ1MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7QUFDQSxnQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGdCQUNBO0FBQ0Esc0NBREE7QUFFQSxzQkFGQTtBQUdBLHVCQUhBO0FBSUE7QUFKQSxPQURBLEVBT0E7QUFBQTtBQUFBO0FBQUEsT0FQQSxFQVFBO0FBQUE7QUFBQTtBQUFBLE9BUkEsRUFTQTtBQUFBO0FBQUE7QUFBQSxPQVRBLEVBVUE7QUFBQTtBQUFBO0FBQUEsT0FWQSxFQVdBO0FBQUE7QUFBQTtBQUFBLE9BWEEsQ0FEQTtBQWNBLGlCQUNBO0FBQ0EsNkJBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxvQkFMQTtBQU1BO0FBTkEsT0FEQSxFQVNBO0FBQ0Esa0NBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxvQkFMQTtBQU1BO0FBTkEsT0FUQSxFQWlCQTtBQUNBLHNCQURBO0FBRUEscUJBRkE7QUFHQSxpQkFIQTtBQUlBLGlCQUpBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLE9BakJBLEVBeUJBO0FBQ0EsdUJBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxvQkFMQTtBQU1BO0FBTkEsT0F6QkEsRUFpQ0E7QUFDQSwyQkFEQTtBQUVBLHFCQUZBO0FBR0EsaUJBSEE7QUFJQSxpQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQSxPQWpDQSxFQXlDQTtBQUNBLDBCQURBO0FBRUEscUJBRkE7QUFHQSxnQkFIQTtBQUlBLGlCQUpBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLE9BekNBLEVBaURBO0FBQ0Esd0JBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxrQkFMQTtBQU1BO0FBTkEsT0FqREEsRUF5REE7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0EsZ0JBSEE7QUFJQSxpQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQSxPQXpEQSxFQWlFQTtBQUNBLHFCQURBO0FBRUEscUJBRkE7QUFHQSxpQkFIQTtBQUlBLGlCQUpBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLE9BakVBLEVBeUVBO0FBQ0Esc0JBREE7QUFFQSxxQkFGQTtBQUdBLGlCQUhBO0FBSUEsaUJBSkE7QUFLQSxrQkFMQTtBQU1BO0FBTkEsT0F6RUE7QUFkQTtBQWlHQTtBQXBHQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvdmlld3MvUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29sIGNvbHM9XCIxMlwiPlxuICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVwiaGVhZGVyc1wiIDppdGVtcz1cImRlc3NlcnRzXCIgOml0ZW1zLXBlci1wYWdlPVwiNVwiIGNsYXNzPVwiZWxldmF0aW9uLTFcIj48L3YtZGF0YS10YWJsZT5cbiAgICA8L3YtY29sPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcInJlcG9ydFwiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlc3NlcnQgKDEwMGcgc2VydmluZylcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJuYW1lXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogXCJDYWxvcmllc1wiLCB2YWx1ZTogXCJjYWxvcmllc1wiIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBcIkZhdCAoZylcIiwgdmFsdWU6IFwiZmF0XCIgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6IFwiQ2FyYnMgKGcpXCIsIHZhbHVlOiBcImNhcmJzXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6IFwiUHJvdGVpbiAoZylcIiwgdmFsdWU6IFwicHJvdGVpblwiIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBcIklyb24gKCUpXCIsIHZhbHVlOiBcImlyb25cIiB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVzc2VydHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRnJvemVuIFlvZ3VydFwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxvcmllczogMTU5LFxuICAgICAgICAgICAgICAgICAgICBmYXQ6IDYuMCxcbiAgICAgICAgICAgICAgICAgICAgY2FyYnM6IDI0LFxuICAgICAgICAgICAgICAgICAgICBwcm90ZWluOiA0LjAsXG4gICAgICAgICAgICAgICAgICAgIGlyb246IFwiMSVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkljZSBjcmVhbSBzYW5kd2ljaFwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxvcmllczogMjM3LFxuICAgICAgICAgICAgICAgICAgICBmYXQ6IDkuMCxcbiAgICAgICAgICAgICAgICAgICAgY2FyYnM6IDM3LFxuICAgICAgICAgICAgICAgICAgICBwcm90ZWluOiA0LjMsXG4gICAgICAgICAgICAgICAgICAgIGlyb246IFwiMSVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkVjbGFpclwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxvcmllczogMjYyLFxuICAgICAgICAgICAgICAgICAgICBmYXQ6IDE2LjAsXG4gICAgICAgICAgICAgICAgICAgIGNhcmJzOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgcHJvdGVpbjogNi4wLFxuICAgICAgICAgICAgICAgICAgICBpcm9uOiBcIjclXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDdXBjYWtlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbG9yaWVzOiAzMDUsXG4gICAgICAgICAgICAgICAgICAgIGZhdDogMy43LFxuICAgICAgICAgICAgICAgICAgICBjYXJiczogNjcsXG4gICAgICAgICAgICAgICAgICAgIHByb3RlaW46IDQuMyxcbiAgICAgICAgICAgICAgICAgICAgaXJvbjogXCI4JVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiR2luZ2VyYnJlYWRcIixcbiAgICAgICAgICAgICAgICAgICAgY2Fsb3JpZXM6IDM1NixcbiAgICAgICAgICAgICAgICAgICAgZmF0OiAxNi4wLFxuICAgICAgICAgICAgICAgICAgICBjYXJiczogNDksXG4gICAgICAgICAgICAgICAgICAgIHByb3RlaW46IDMuOSxcbiAgICAgICAgICAgICAgICAgICAgaXJvbjogXCIxNiVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkplbGx5IGJlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgY2Fsb3JpZXM6IDM3NSxcbiAgICAgICAgICAgICAgICAgICAgZmF0OiAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGNhcmJzOiA5NCxcbiAgICAgICAgICAgICAgICAgICAgcHJvdGVpbjogMC4wLFxuICAgICAgICAgICAgICAgICAgICBpcm9uOiBcIjAlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJMb2xsaXBvcFwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxvcmllczogMzkyLFxuICAgICAgICAgICAgICAgICAgICBmYXQ6IDAuMixcbiAgICAgICAgICAgICAgICAgICAgY2FyYnM6IDk4LFxuICAgICAgICAgICAgICAgICAgICBwcm90ZWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBpcm9uOiBcIjIlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb25leWNvbWJcIixcbiAgICAgICAgICAgICAgICAgICAgY2Fsb3JpZXM6IDQwOCxcbiAgICAgICAgICAgICAgICAgICAgZmF0OiAzLjIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmJzOiA4NyxcbiAgICAgICAgICAgICAgICAgICAgcHJvdGVpbjogNi41LFxuICAgICAgICAgICAgICAgICAgICBpcm9uOiBcIjQ1JVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRG9udXRcIixcbiAgICAgICAgICAgICAgICAgICAgY2Fsb3JpZXM6IDQ1MixcbiAgICAgICAgICAgICAgICAgICAgZmF0OiAyNS4wLFxuICAgICAgICAgICAgICAgICAgICBjYXJiczogNTEsXG4gICAgICAgICAgICAgICAgICAgIHByb3RlaW46IDQuOSxcbiAgICAgICAgICAgICAgICAgICAgaXJvbjogXCIyMiVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIktpdEthdFwiLFxuICAgICAgICAgICAgICAgICAgICBjYWxvcmllczogNTE4LFxuICAgICAgICAgICAgICAgICAgICBmYXQ6IDI2LjAsXG4gICAgICAgICAgICAgICAgICAgIGNhcmJzOiA2NSxcbiAgICAgICAgICAgICAgICAgICAgcHJvdGVpbjogNyxcbiAgICAgICAgICAgICAgICAgICAgaXJvbjogXCI2JVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Report.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Report.vue?vue&type=template&id=299b5513&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Report.vue?vue&type=template&id=299b5513& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-col\",\n    { attrs: { cols: \"12\" } },\n    [\n      _c(\"v-data-table\", {\n        staticClass: \"elevation-1\",\n        attrs: {\n          headers: _vm.headers,\n          items: _vm.desserts,\n          \"items-per-page\": 5\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUmVwb3J0LnZ1ZT9hNzJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3ZpZXdzL1JlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk5YjU1MTMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29sXCIsXG4gICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTFcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICBpdGVtczogX3ZtLmRlc3NlcnRzLFxuICAgICAgICAgIFwiaXRlbXMtcGVyLXBhZ2VcIjogNVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Report.vue?vue&type=template&id=299b5513&\n");

/***/ }),

/***/ "./resources/js/views/Report.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Report.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Report_vue_vue_type_template_id_299b5513___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=299b5513& */ \"./resources/js/views/Report.vue?vue&type=template&id=299b5513&\");\n/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ \"./resources/js/views/Report.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Report_vue_vue_type_template_id_299b5513___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Report_vue_vue_type_template_id_299b5513___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/Report.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUmVwb3J0LnZ1ZT9iOTI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3ZpZXdzL1JlcG9ydC52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk5YjU1MTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL29wdC9odGRvY3MvZ2VuLWZvcm11bGEvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjk5YjU1MTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjk5YjU1MTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjk5YjU1MTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk5YjU1MTMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjk5YjU1MTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9SZXBvcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/views/Report.vue\n");

/***/ }),

/***/ "./resources/js/views/Report.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Report.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Report.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUmVwb3J0LnZ1ZT84MzUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBc0wsQ0FBZ0Isa1BBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy92aWV3cy9SZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/views/Report.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/views/Report.vue?vue&type=template&id=299b5513&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Report.vue?vue&type=template&id=299b5513& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_299b5513___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=299b5513& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Report.vue?vue&type=template&id=299b5513&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_299b5513___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_299b5513___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUmVwb3J0LnZ1ZT8xYjRjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy92aWV3cy9SZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5OWI1NTEzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5OWI1NTEzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/views/Report.vue?vue&type=template&id=299b5513&\n");

/***/ })

}]);