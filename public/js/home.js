/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/chart.js/dist/Chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/opt/lampp/htdocs/gen-formula/node_modules/chart.js/dist/Chart.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jaGFydC5qcy9kaXN0L0NoYXJ0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/chart.js/dist/Chart.js\n");

/***/ }),

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\n/* globals Chart:false, feather:false */\n\n\n(function () {\n  \"use strict\"; // Graphs\n\n  var ctx = document.getElementById(\"myChart\"); // eslint-disable-next-line no-unused-vars\n\n  var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(ctx, {\n    type: \"line\",\n    data: {\n      labels: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n      datasets: [{\n        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],\n        lineTension: 0,\n        backgroundColor: \"transparent\",\n        borderColor: \"#007bff\",\n        borderWidth: 4,\n        pointBackgroundColor: \"#007bff\"\n      }]\n    },\n    options: {\n      scales: {\n        yAxes: [{\n          ticks: {\n            beginAtZero: false\n          }\n        }]\n      },\n      legend: {\n        display: false\n      }\n    }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaG9tZS5qcz8wMGQyIl0sIm5hbWVzIjpbImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJteUNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwibGVnZW5kIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxDQUFDLFlBQVc7QUFDUixlQURRLENBR1I7O0FBQ0EsTUFBSUEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBVixDQUpRLENBS1I7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQUlDLCtDQUFKLENBQVVKLEdBQVYsRUFBZTtBQUN6QkssUUFBSSxFQUFFLE1BRG1CO0FBRXpCQyxRQUFJLEVBQUU7QUFDRkMsWUFBTSxFQUFFLENBQ0osUUFESSxFQUVKLFFBRkksRUFHSixTQUhJLEVBSUosV0FKSSxFQUtKLFVBTEksRUFNSixRQU5JLEVBT0osVUFQSSxDQUROO0FBVUZDLGNBQVEsRUFBRSxDQUNOO0FBQ0lGLFlBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxDQURWO0FBRUlHLG1CQUFXLEVBQUUsQ0FGakI7QUFHSUMsdUJBQWUsRUFBRSxhQUhyQjtBQUlJQyxtQkFBVyxFQUFFLFNBSmpCO0FBS0lDLG1CQUFXLEVBQUUsQ0FMakI7QUFNSUMsNEJBQW9CLEVBQUU7QUFOMUIsT0FETTtBQVZSLEtBRm1CO0FBdUJ6QkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRTtBQUNKQyxhQUFLLEVBQUUsQ0FDSDtBQUNJQyxlQUFLLEVBQUU7QUFDSEMsdUJBQVcsRUFBRTtBQURWO0FBRFgsU0FERztBQURILE9BREg7QUFVTEMsWUFBTSxFQUFFO0FBQ0pDLGVBQU8sRUFBRTtBQURMO0FBVkg7QUF2QmdCLEdBQWYsQ0FBZDtBQXNDSCxDQTVDRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBDaGFydDpmYWxzZSwgZmVhdGhlcjpmYWxzZSAqL1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBHcmFwaHNcbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNoYXJ0XCIpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgXCJTdW5kYXlcIixcbiAgICAgICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgIFwiRnJpZGF5XCIsXG4gICAgICAgICAgICAgICAgXCJTYXR1cmRheVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsxNTMzOSwgMjEzNDUsIDE4NDgzLCAyNDAwMywgMjM0ODksIDI0MDkyLCAxMjAzNF0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAwN2JmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogNCxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiIzAwN2JmZlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/home.js\n");

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/home.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/gen-formula/resources/js/home.js */"./resources/js/home.js");


/***/ })

/******/ });