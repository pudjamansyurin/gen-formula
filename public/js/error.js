(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landing/Error.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/landing/Error.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _store_app_mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/app/mutation-types */ \"./resources/js/store/app/mutation-types.js\");\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/response */ \"./resources/js/utils/response.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    code: {\n      \"default\": _utils_response__WEBPACK_IMPORTED_MODULE_2__[\"HTTP_NOT_FOUND\"]\n    },\n    text: {\n      \"default\": null\n    }\n  },\n  data: function data() {\n    var _errors;\n\n    return {\n      errors: (_errors = {}, _defineProperty(_errors, _utils_response__WEBPACK_IMPORTED_MODULE_2__[\"HTTP_NOT_FOUND\"], \"Page not found\"), _defineProperty(_errors, _utils_response__WEBPACK_IMPORTED_MODULE_2__[\"HTTP_UNAUTHORIZED\"], \"Unauthorized access\"), _errors)\n    };\n  },\n  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapState\"])(\"app\", [\"error\", \"profile\"])), {}, {\n    errorCode: function errorCode() {\n      return this.error.code || (this.errors[this.code] ? this.code : null);\n    },\n    errorText: function errorText() {\n      return this.error.text || this.text || this.errors[this.code] || \"Opps, something wrong.\";\n    },\n    direct: function direct() {\n      return window.history.length <= 2;\n    },\n    redirect: function redirect() {\n      return {\n        path: this.profile.id > -1 ? \"/app\" : \"/\",\n        text: this.profile.id > -1 ? \"Dashboard\" : \"Login\"\n      };\n    }\n  }),\n  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapMutations\"])(\"app\", [_store_app_mutation_types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_ERROR\"], _store_app_mutation_types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_MESSAGE\"]])), {}, {\n    handleBack: function handleBack() {\n      this.$router.go(-1);\n    }\n  }),\n  beforeDestroy: function beforeDestroy() {\n    this.CLEAR_MESSAGE();\n    this.CLEAR_ERROR();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL2xhbmRpbmcvRXJyb3IudnVlPzc4OWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBO0FBSkEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFBQTs7QUFDQTtBQUNBLHNEQUNBLDhEQURBLEVBQ0EsZ0JBREEsNEJBRUEsaUVBRkEsRUFFQSxxQkFGQTtBQURBO0FBTUEsR0FoQkE7QUFpQkEsNENBQ0Esa0ZBREE7QUFFQTtBQUNBLGFBQ0EsOERBREE7QUFHQSxLQU5BO0FBT0E7QUFDQSxhQUNBLG1CQUNBLFNBREEsSUFFQSxzQkFGQSxJQUdBLHdCQUpBO0FBTUEsS0FkQTtBQWVBO0FBQ0E7QUFDQSxLQWpCQTtBQWtCQSxZQWxCQSxzQkFrQkE7QUFDQTtBQUNBLGlEQURBO0FBRUE7QUFGQTtBQUlBO0FBdkJBLElBakJBO0FBMENBLDJDQUNBLGtOQURBO0FBRUEsY0FGQSx3QkFFQTtBQUNBO0FBQ0E7QUFKQSxJQTFDQTtBQWdEQSxlQWhEQSwyQkFnREE7QUFDQTtBQUNBO0FBQ0E7QUFuREEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3ZpZXdzL2xhbmRpbmcvRXJyb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250ZW50PlxuICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJmaWxsLWhlaWdodCBibHVlLWdyZXkgbGlnaHRlbi01XCIgZmx1aWQ+XG4gICAgICAgICAgICA8di1yb3cgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiOFwiIG1kPVwiNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktMiBmb250LXdlaWdodC10aGluXCI+e3sgZXJyb3JDb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktMSBmb250LXdlaWdodC10aGluXCI+e3sgZXJyb3JUZXh0IH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIhZGlyZWN0XCIgQGNsaWNrPVwiaGFuZGxlQmFja1wiIGVsZXZhdGlvbj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwieyBwYXRoOiByZWRpcmVjdC5wYXRoIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcmVkaXJlY3QudGV4dCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgPC92LWNvbnRlbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcE11dGF0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyBDTEVBUl9FUlJPUiwgQ0xFQVJfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hcHAvbXV0YXRpb24tdHlwZXNcIjtcbmltcG9ydCB7IEhUVFBfTk9UX0ZPVU5ELCBIVFRQX1VOQVVUSE9SSVpFRCB9IGZyb20gXCIuLi8uLi91dGlscy9yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgY29kZToge1xuICAgICAgICAgICAgZGVmYXVsdDogSFRUUF9OT1RfRk9VTkQsXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICAgICAgW0hUVFBfTk9UX0ZPVU5EXTogXCJQYWdlIG5vdCBmb3VuZFwiLFxuICAgICAgICAgICAgICAgIFtIVFRQX1VOQVVUSE9SSVpFRF06IFwiVW5hdXRob3JpemVkIGFjY2Vzc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcFN0YXRlKFwiYXBwXCIsIFtcImVycm9yXCIsIFwicHJvZmlsZVwiXSksXG4gICAgICAgIGVycm9yQ29kZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yLmNvZGUgfHwgKHRoaXMuZXJyb3JzW3RoaXMuY29kZV0gPyB0aGlzLmNvZGUgOiBudWxsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JUZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IudGV4dCB8fFxuICAgICAgICAgICAgICAgIHRoaXMudGV4dCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzW3RoaXMuY29kZV0gfHxcbiAgICAgICAgICAgICAgICBcIk9wcHMsIHNvbWV0aGluZyB3cm9uZy5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lmhpc3RvcnkubGVuZ3RoIDw9IDI7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXRoOiB0aGlzLnByb2ZpbGUuaWQgPiAtMSA/IFwiL2FwcFwiIDogXCIvXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5wcm9maWxlLmlkID4gLTEgPyBcIkRhc2hib2FyZFwiIDogXCJMb2dpblwiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLi4ubWFwTXV0YXRpb25zKFwiYXBwXCIsIFtDTEVBUl9FUlJPUiwgQ0xFQVJfTUVTU0FHRV0pLFxuICAgICAgICBoYW5kbGVCYWNrKCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuQ0xFQVJfTUVTU0FHRSgpO1xuICAgICAgICB0aGlzLkNMRUFSX0VSUk9SKCk7XG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landing/Error.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-content\",\n    [\n      _c(\n        \"v-container\",\n        {\n          staticClass: \"fill-height blue-grey lighten-5\",\n          attrs: { fluid: \"\" }\n        },\n        [\n          _c(\n            \"v-row\",\n            { attrs: { align: \"center\", justify: \"center\" } },\n            [\n              _c(\"v-col\", { attrs: { cols: \"12\", sm: \"8\", md: \"4\" } }, [\n                _c(\"p\", { staticClass: \"display-2 font-weight-thin\" }, [\n                  _vm._v(_vm._s(_vm.errorCode))\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", { staticClass: \"display-1 font-weight-thin\" }, [\n                  _vm._v(_vm._s(_vm.errorText))\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  [\n                    !_vm.direct\n                      ? _c(\n                          \"v-btn\",\n                          {\n                            attrs: { elevation: \"1\" },\n                            on: { click: _vm.handleBack }\n                          },\n                          [\n                            _vm._v(\n                              \"\\n                        Back\\n                    \"\n                            )\n                          ]\n                        )\n                      : _vm._e(),\n                    _vm._v(\" \"),\n                    _c(\n                      \"v-btn\",\n                      {\n                        attrs: {\n                          to: { path: _vm.redirect.path },\n                          elevation: \"1\",\n                          color: \"primary\"\n                        }\n                      },\n                      [\n                        _vm._v(\n                          \"\\n                        \" +\n                            _vm._s(_vm.redirect.text) +\n                            \"\\n                    \"\n                        )\n                      ]\n                    )\n                  ],\n                  1\n                )\n              ])\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvbGFuZGluZy9FcnJvci52dWU/NGJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMscUNBQXFDLEVBQUU7QUFDN0Q7QUFDQSwyQkFBMkIsU0FBUywrQkFBK0IsRUFBRTtBQUNyRSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JELGlDQUFpQztBQUNqQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy92aWV3cy9sYW5kaW5nL0Vycm9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MDBjMzk4MSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250ZW50XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGwtaGVpZ2h0IGJsdWUtZ3JleSBsaWdodGVuLTVcIixcbiAgICAgICAgICBhdHRyczogeyBmbHVpZDogXCJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY29sXCIsIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCI4XCIsIG1kOiBcIjRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTIgZm9udC13ZWlnaHQtdGhpblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yQ29kZSkpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTEgZm9udC13ZWlnaHQtdGhpblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yVGV4dCkpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uZGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IHBhdGg6IF92bS5yZWRpcmVjdC5wYXRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlZGlyZWN0LnRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981&\n");

/***/ }),

/***/ "./resources/js/views/landing/Error.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/landing/Error.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Error_vue_vue_type_template_id_400c3981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=400c3981& */ \"./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981&\");\n/* harmony import */ var _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js& */ \"./resources/js/views/landing/Error.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Error_vue_vue_type_template_id_400c3981___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Error_vue_vue_type_template_id_400c3981___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/landing/Error.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvbGFuZGluZy9FcnJvci52dWU/OTI4OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy92aWV3cy9sYW5kaW5nL0Vycm9yLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXJyb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwMGMzOTgxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Vycm9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXJyb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9wdWRqYS9EQVRBL2h0ZG9jcy9nZW4tZm9ybXVsYS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MDBjMzk4MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MDBjMzk4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MDBjMzk4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXJyb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwMGMzOTgxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQwMGMzOTgxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvbGFuZGluZy9FcnJvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/views/landing/Error.vue\n");

/***/ }),

/***/ "./resources/js/views/landing/Error.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/landing/Error.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landing/Error.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvbGFuZGluZy9FcnJvci52dWU/ZTA2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmlld3MvbGFuZGluZy9FcnJvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FcnJvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXJyb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/views/landing/Error.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_400c3981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=template&id=400c3981& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_400c3981___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_400c3981___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvbGFuZGluZy9FcnJvci52dWU/ZmQ3OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmlld3MvbGFuZGluZy9FcnJvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDAwYzM5ODEmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vycm9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MDBjMzk4MSZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/views/landing/Error.vue?vue&type=template&id=400c3981&\n");

/***/ })

}]);