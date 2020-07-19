(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Error.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _store_app_mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/app/mutation-types */ \"./resources/js/store/app/mutation-types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"error\",\n  props: {\n    code: {\n      \"default\": 404\n    },\n    text: {\n      \"default\": null\n    }\n  },\n  data: function data() {\n    return {\n      errors: {\n        404: \"Page not found\",\n        401: \"Unauthorized access\"\n      }\n    };\n  },\n  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapState\"])(\"app\", [\"error\", \"profile\"])), {}, {\n    error_code: function error_code() {\n      if (this.error.code) {\n        return this.error.code;\n      }\n\n      return this.errors[this.code] ? this.code : null;\n    },\n    error_text: function error_text() {\n      return this.error.text || this.text || this.errors[this.code] || \"Opps, something not right\";\n    },\n    direct: function direct() {\n      return window.history.length <= 2;\n    }\n  }),\n  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapMutations\"])(\"app\", [_store_app_mutation_types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_ERROR\"], _store_app_mutation_types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_MESSAGE\"]])), {}, {\n    handleBack: function handleBack() {\n      this.$router.go(-2);\n    }\n  }),\n  beforeDestroy: function beforeDestroy() {\n    this.CLEAR_MESSAGE();\n    this.CLEAR_ERROR();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0Vycm9yLnZ1ZT85ZWFkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUE7QUFDQTtBQUFBO0FBQUEsS0FEQTtBQUVBO0FBQUE7QUFBQTtBQUZBLEdBRkE7QUFNQSxNQU5BLGtCQU1BO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FiQTtBQWNBLDRDQUNBLGtGQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQVBBO0FBUUE7QUFDQSxhQUNBLG1CQUNBLFNBREEsSUFFQSxzQkFGQSxJQUdBLDJCQUpBO0FBTUEsS0FmQTtBQWdCQTtBQUNBO0FBQ0E7QUFsQkEsSUFkQTtBQWtDQSwyQ0FDQSxrTkFEQTtBQUVBLGNBRkEsd0JBRUE7QUFDQTtBQUNBO0FBSkEsSUFsQ0E7QUF3Q0EsZUF4Q0EsMkJBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy92aWV3cy9FcnJvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRlbnQ+XG4gICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImZpbGwtaGVpZ2h0IGJsdWUtZ3JleSBsaWdodGVuLTVcIiBmbHVpZD5cbiAgICAgICAgICAgIDx2LXJvdyBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI4XCIgbWQ9XCI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS0yIGZvbnQtd2VpZ2h0LXRoaW5cIj57eyBlcnJvcl9jb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktMSBmb250LXdlaWdodC10aGluXCI+e3sgZXJyb3JfdGV4dCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiIWRpcmVjdFwiIEBjbGljaz1cImhhbmRsZUJhY2tcIiBlbGV2YXRpb249XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QmFjazwvdi1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cInsgcGF0aDogcHJvZmlsZSA/ICcvYXBwJyA6ICcvJyB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBwcm9maWxlID8gXCJIb21lXCIgOiBcIkxvZ2luXCIgfX08L3YtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgIDwvdi1jb250ZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IHsgQ0xFQVJfRVJST1IsIENMRUFSX01FU1NBR0UgfSBmcm9tIFwiQC9zdG9yZS9hcHAvbXV0YXRpb24tdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiZXJyb3JcIixcbiAgICBwcm9wczoge1xuICAgICAgICBjb2RlOiB7IGRlZmF1bHQ6IDQwNCB9LFxuICAgICAgICB0ZXh0OiB7IGRlZmF1bHQ6IG51bGwgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgICAgIDQwNDogXCJQYWdlIG5vdCBmb3VuZFwiLFxuICAgICAgICAgICAgICAgIDQwMTogXCJVbmF1dGhvcml6ZWQgYWNjZXNzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcFN0YXRlKFwiYXBwXCIsIFtcImVycm9yXCIsIFwicHJvZmlsZVwiXSksXG4gICAgICAgIGVycm9yX2NvZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3IuY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yLmNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbdGhpcy5jb2RlXSA/IHRoaXMuY29kZSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yX3RleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yLnRleHQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yc1t0aGlzLmNvZGVdIHx8XG4gICAgICAgICAgICAgICAgXCJPcHBzLCBzb21ldGhpbmcgbm90IHJpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lmhpc3RvcnkubGVuZ3RoIDw9IDI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLi4ubWFwTXV0YXRpb25zKFwiYXBwXCIsIFtDTEVBUl9FUlJPUiwgQ0xFQVJfTUVTU0FHRV0pLFxuICAgICAgICBoYW5kbGVCYWNrKCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5DTEVBUl9NRVNTQUdFKCk7XG4gICAgICAgIHRoaXMuQ0xFQVJfRVJST1IoKTtcbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error.vue?vue&type=template&id=e5d8970e&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Error.vue?vue&type=template&id=e5d8970e& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-content\",\n    [\n      _c(\n        \"v-container\",\n        {\n          staticClass: \"fill-height blue-grey lighten-5\",\n          attrs: { fluid: \"\" }\n        },\n        [\n          _c(\n            \"v-row\",\n            { attrs: { align: \"center\", justify: \"center\" } },\n            [\n              _c(\"v-col\", { attrs: { cols: \"12\", sm: \"8\", md: \"4\" } }, [\n                _c(\"p\", { staticClass: \"display-2 font-weight-thin\" }, [\n                  _vm._v(_vm._s(_vm.error_code))\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", { staticClass: \"display-1 font-weight-thin\" }, [\n                  _vm._v(_vm._s(_vm.error_text))\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  [\n                    !_vm.direct\n                      ? _c(\n                          \"v-btn\",\n                          {\n                            attrs: { elevation: \"1\" },\n                            on: { click: _vm.handleBack }\n                          },\n                          [_vm._v(\"Back\")]\n                        )\n                      : _vm._e(),\n                    _vm._v(\" \"),\n                    _c(\n                      \"v-btn\",\n                      {\n                        attrs: {\n                          to: { path: _vm.profile ? \"/app\" : \"/\" },\n                          elevation: \"1\",\n                          color: \"primary\"\n                        }\n                      },\n                      [_vm._v(_vm._s(_vm.profile ? \"Home\" : \"Login\"))]\n                    )\n                  ],\n                  1\n                )\n              ])\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRXJyb3IudnVlPzMyZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLHFDQUFxQyxFQUFFO0FBQzdEO0FBQ0EsMkJBQTJCLFNBQVMsK0JBQStCLEVBQUU7QUFDckUseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRCxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3ZpZXdzL0Vycm9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNWQ4OTcwZSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250ZW50XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGwtaGVpZ2h0IGJsdWUtZ3JleSBsaWdodGVuLTVcIixcbiAgICAgICAgICBhdHRyczogeyBmbHVpZDogXCJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY29sXCIsIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCI4XCIsIG1kOiBcIjRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTIgZm9udC13ZWlnaHQtdGhpblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yX2NvZGUpKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0xIGZvbnQtd2VpZ2h0LXRoaW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcl90ZXh0KSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5kaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbGV2YXRpb246IFwiMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVCYWNrIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkJhY2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IHBhdGg6IF92bS5wcm9maWxlID8gXCIvYXBwXCIgOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb246IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9maWxlID8gXCJIb21lXCIgOiBcIkxvZ2luXCIpKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error.vue?vue&type=template&id=e5d8970e&\n");

/***/ }),

/***/ "./resources/js/views/Error.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Error.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Error_vue_vue_type_template_id_e5d8970e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=e5d8970e& */ \"./resources/js/views/Error.vue?vue&type=template&id=e5d8970e&\");\n/* harmony import */ var _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js& */ \"./resources/js/views/Error.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Error_vue_vue_type_template_id_e5d8970e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Error_vue_vue_type_template_id_e5d8970e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/Error.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRXJyb3IudnVlPzg5ZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmlld3MvRXJyb3IudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FcnJvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTVkODk3MGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXJyb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FcnJvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9vcHQvaHRkb2NzL2dlbi1mb3JtdWxhL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2U1ZDg5NzBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U1ZDg5NzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U1ZDg5NzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FcnJvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTVkODk3MGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTVkODk3MGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9FcnJvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/views/Error.vue\n");

/***/ }),

/***/ "./resources/js/views/Error.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Error.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRXJyb3IudnVlPzE0NWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3ZpZXdzL0Vycm9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vycm9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FcnJvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/views/Error.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/views/Error.vue?vue&type=template&id=e5d8970e&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Error.vue?vue&type=template&id=e5d8970e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_e5d8970e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=template&id=e5d8970e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error.vue?vue&type=template&id=e5d8970e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_e5d8970e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_e5d8970e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRXJyb3IudnVlP2Y3YTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3ZpZXdzL0Vycm9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNWQ4OTcwZSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXJyb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1ZDg5NzBlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/views/Error.vue?vue&type=template&id=e5d8970e&\n");

/***/ })

}]);