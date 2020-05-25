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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/user.js":
/*!******************************!*\
  !*** ./resources/js/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var baseUrl = $(\".data-table\").data(\"url\");\n  var oTable = $(\".data-table\").DataTable({\n    processing: true,\n    serverSide: true,\n    ajax: {\n      url: baseUrl\n    },\n    columns: [{\n      data: \"id\",\n      name: \"id\",\n      searchable: false\n    }, {\n      data: \"name\",\n      name: \"name\"\n    }, {\n      data: \"email\",\n      name: \"email\"\n    }, {\n      data: \"role.name\",\n      name: \"role.name\"\n    }, {\n      data: \"last_at\",\n      name: \"last_at\",\n      searchable: false\n    }, {\n      data: \"last_ip\",\n      name: \"last_ip\"\n    }, {\n      data: \"action\",\n      name: \"action\",\n      orderable: false,\n      searchable: false,\n      defaultContent: '<a href=\"javascript:void(0)\" data-toggle=\"tooltip\" class=\"edit btn btn-primary btn-sm editUser\">Edit</a><a href=\"javascript:void(0)\" data-toggle=\"tooltip\" class=\"btn btn-danger btn-sm deleteUser\">Delete</a>'\n    }]\n  });\n  $(\"#createNewUser\").click(function () {\n    $(\"#saveBtn\").val(\"create-user\");\n    $(\"#user_id\").val(\"\");\n    $(\"#userForm\").trigger(\"reset\");\n    $(\"#modelHeading\").html(\"Create New User\");\n    $(\"#userModel\").modal(\"show\");\n  });\n  $(\"body\").on(\"click\", \".editUser\", function () {\n    var user_id = $(this).data(\"id\");\n    $.get(\"\".concat(baseUrl, \"/\").concat(user_id, \"/edit\"), function (data) {\n      $(\"#modelHeading\").html(\"Edit User\");\n      $(\"#saveBtn\").val(\"edit-user\");\n      $(\"#userModel\").modal(\"show\");\n      $(\"#user_id\").val(data.id);\n      $(\"#name\").val(data.name);\n      $(\"#email\").val(data.email);\n    });\n  });\n  $(\"#saveBtn\").click(function (e) {\n    e.preventDefault();\n    $(this).html(\"Sending..\");\n    $.ajax({\n      type: \"POST\",\n      url: baseUrl,\n      dataType: \"json\",\n      data: $(\"#userForm\").serialize(),\n      success: function success(data) {\n        $(\"#userForm\").trigger(\"reset\");\n        $(\"#userModel\").modal(\"hide\");\n        oTable.draw();\n      },\n      error: function error(data) {\n        console.log(\"Error:\", data);\n        $(\"#saveBtn\").html(\"Save Changes\");\n      }\n    });\n  });\n  $(\"body\").on(\"click\", \".deleteUser\", function () {\n    var user_id = $(this).data(\"id\");\n    confirm(\"Are You sure want to delete !\");\n    $.ajax({\n      type: \"DELETE\",\n      url: \"\".concat(baseUrl, \"/\").concat(user_id),\n      success: function success(data) {\n        oTable.draw();\n      },\n      error: function error(data) {\n        console.log(\"Error:\", data);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci5qcz84MDkxIl0sIm5hbWVzIjpbIiQiLCJiYXNlVXJsIiwiZGF0YSIsIm9UYWJsZSIsIkRhdGFUYWJsZSIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiYWpheCIsInVybCIsImNvbHVtbnMiLCJuYW1lIiwic2VhcmNoYWJsZSIsIm9yZGVyYWJsZSIsImRlZmF1bHRDb250ZW50IiwiY2xpY2siLCJ2YWwiLCJ0cmlnZ2VyIiwiaHRtbCIsIm1vZGFsIiwib24iLCJ1c2VyX2lkIiwiZ2V0IiwiaWQiLCJlbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJkYXRhVHlwZSIsInNlcmlhbGl6ZSIsInN1Y2Nlc3MiLCJkcmF3IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybSJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFXO0FBQ1QsTUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRSxJQUFqQixDQUFzQixLQUF0QixDQUFkO0FBRUEsTUFBSUMsTUFBTSxHQUFHSCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSSxTQUFqQixDQUEyQjtBQUNwQ0MsY0FBVSxFQUFFLElBRHdCO0FBRXBDQyxjQUFVLEVBQUUsSUFGd0I7QUFHcENDLFFBQUksRUFBRTtBQUNGQyxTQUFHLEVBQUVQO0FBREgsS0FIOEI7QUFNcENRLFdBQU8sRUFBRSxDQUNMO0FBQ0lQLFVBQUksRUFBRSxJQURWO0FBRUlRLFVBQUksRUFBRSxJQUZWO0FBR0lDLGdCQUFVLEVBQUU7QUFIaEIsS0FESyxFQU1MO0FBQUVULFVBQUksRUFBRSxNQUFSO0FBQWdCUSxVQUFJLEVBQUU7QUFBdEIsS0FOSyxFQU9MO0FBQUVSLFVBQUksRUFBRSxPQUFSO0FBQWlCUSxVQUFJLEVBQUU7QUFBdkIsS0FQSyxFQVFMO0FBQUVSLFVBQUksRUFBRSxXQUFSO0FBQXFCUSxVQUFJLEVBQUU7QUFBM0IsS0FSSyxFQVNMO0FBQUVSLFVBQUksRUFBRSxTQUFSO0FBQW1CUSxVQUFJLEVBQUUsU0FBekI7QUFBb0NDLGdCQUFVLEVBQUU7QUFBaEQsS0FUSyxFQVVMO0FBQUVULFVBQUksRUFBRSxTQUFSO0FBQW1CUSxVQUFJLEVBQUU7QUFBekIsS0FWSyxFQVdMO0FBQ0lSLFVBQUksRUFBRSxRQURWO0FBRUlRLFVBQUksRUFBRSxRQUZWO0FBR0lFLGVBQVMsRUFBRSxLQUhmO0FBSUlELGdCQUFVLEVBQUUsS0FKaEI7QUFLSUUsb0JBQWMsRUFDVjtBQU5SLEtBWEs7QUFOMkIsR0FBM0IsQ0FBYjtBQTRCQWIsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JjLEtBQXBCLENBQTBCLFlBQVc7QUFDakNkLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2UsR0FBZCxDQUFrQixhQUFsQjtBQUNBZixLQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLEdBQWQsQ0FBa0IsRUFBbEI7QUFDQWYsS0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZ0IsT0FBZixDQUF1QixPQUF2QjtBQUNBaEIsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmlCLElBQW5CLENBQXdCLGlCQUF4QjtBQUNBakIsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmtCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0gsR0FORDtBQVFBbEIsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVbUIsRUFBVixDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUMsWUFBVztBQUMxQyxRQUFJQyxPQUFPLEdBQUdwQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFFLElBQVIsQ0FBYSxJQUFiLENBQWQ7QUFFQUYsS0FBQyxDQUFDcUIsR0FBRixXQUFTcEIsT0FBVCxjQUFvQm1CLE9BQXBCLFlBQW9DLFVBQVNsQixJQUFULEVBQWU7QUFDL0NGLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpQixJQUFuQixDQUF3QixXQUF4QjtBQUNBakIsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxHQUFkLENBQWtCLFdBQWxCO0FBQ0FmLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JrQixLQUFoQixDQUFzQixNQUF0QjtBQUNBbEIsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxHQUFkLENBQWtCYixJQUFJLENBQUNvQixFQUF2QjtBQUNBdEIsT0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZSxHQUFYLENBQWViLElBQUksQ0FBQ1EsSUFBcEI7QUFDQVYsT0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZSxHQUFaLENBQWdCYixJQUFJLENBQUNxQixLQUFyQjtBQUNILEtBUEQ7QUFRSCxHQVhEO0FBYUF2QixHQUFDLENBQUMsVUFBRCxDQUFELENBQWNjLEtBQWQsQ0FBb0IsVUFBU1UsQ0FBVCxFQUFZO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFDQXpCLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlCLElBQVIsQ0FBYSxXQUFiO0FBRUFqQixLQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIbUIsVUFBSSxFQUFFLE1BREg7QUFFSGxCLFNBQUcsRUFBRVAsT0FGRjtBQUdIMEIsY0FBUSxFQUFFLE1BSFA7QUFJSHpCLFVBQUksRUFBRUYsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsU0FBZixFQUpIO0FBS0hDLGFBQU8sRUFBRSxpQkFBUzNCLElBQVQsRUFBZTtBQUNwQkYsU0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZ0IsT0FBZixDQUF1QixPQUF2QjtBQUNBaEIsU0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmtCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0FmLGNBQU0sQ0FBQzJCLElBQVA7QUFDSCxPQVRFO0FBVUhDLFdBQUssRUFBRSxlQUFTN0IsSUFBVCxFQUFlO0FBQ2xCOEIsZUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQi9CLElBQXRCO0FBQ0FGLFNBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2lCLElBQWQsQ0FBbUIsY0FBbkI7QUFDSDtBQWJFLEtBQVA7QUFlSCxHQW5CRDtBQXFCQWpCLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW1CLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGFBQXRCLEVBQXFDLFlBQVc7QUFDNUMsUUFBSUMsT0FBTyxHQUFHcEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRSxJQUFSLENBQWEsSUFBYixDQUFkO0FBRUFnQyxXQUFPLENBQUMsK0JBQUQsQ0FBUDtBQUVBbEMsS0FBQyxDQUFDTyxJQUFGLENBQU87QUFDSG1CLFVBQUksRUFBRSxRQURIO0FBRUhsQixTQUFHLFlBQUtQLE9BQUwsY0FBZ0JtQixPQUFoQixDQUZBO0FBR0hTLGFBQU8sRUFBRSxpQkFBUzNCLElBQVQsRUFBZTtBQUNwQkMsY0FBTSxDQUFDMkIsSUFBUDtBQUNILE9BTEU7QUFNSEMsV0FBSyxFQUFFLGVBQVM3QixJQUFULEVBQWU7QUFDbEI4QixlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCL0IsSUFBdEI7QUFDSDtBQVJFLEtBQVA7QUFVSCxHQWZEO0FBZ0JILENBekZBLENBQUQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJhc2VVcmwgPSAkKFwiLmRhdGEtdGFibGVcIikuZGF0YShcInVybFwiKTtcblxuICAgIHZhciBvVGFibGUgPSAkKFwiLmRhdGEtdGFibGVcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgYWpheDoge1xuICAgICAgICAgICAgdXJsOiBiYXNlVXJsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBkYXRhOiBcIm5hbWVcIiwgbmFtZTogXCJuYW1lXCIgfSxcbiAgICAgICAgICAgIHsgZGF0YTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgIHsgZGF0YTogXCJyb2xlLm5hbWVcIiwgbmFtZTogXCJyb2xlLm5hbWVcIiB9LFxuICAgICAgICAgICAgeyBkYXRhOiBcImxhc3RfYXRcIiwgbmFtZTogXCJsYXN0X2F0XCIsIHNlYXJjaGFibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IGRhdGE6IFwibGFzdF9pcFwiLCBuYW1lOiBcImxhc3RfaXBcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGE6IFwiYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJhY3Rpb25cIixcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGNsYXNzPVwiZWRpdCBidG4gYnRuLXByaW1hcnkgYnRuLXNtIGVkaXRVc2VyXCI+RWRpdDwvYT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc20gZGVsZXRlVXNlclwiPkRlbGV0ZTwvYT4nXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgICQoXCIjY3JlYXRlTmV3VXNlclwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNzYXZlQnRuXCIpLnZhbChcImNyZWF0ZS11c2VyXCIpO1xuICAgICAgICAkKFwiI3VzZXJfaWRcIikudmFsKFwiXCIpO1xuICAgICAgICAkKFwiI3VzZXJGb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcbiAgICAgICAgJChcIiNtb2RlbEhlYWRpbmdcIikuaHRtbChcIkNyZWF0ZSBOZXcgVXNlclwiKTtcbiAgICAgICAgJChcIiN1c2VyTW9kZWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIH0pO1xuXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5lZGl0VXNlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVzZXJfaWQgPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcblxuICAgICAgICAkLmdldChgJHtiYXNlVXJsfS8ke3VzZXJfaWR9L2VkaXRgLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkKFwiI21vZGVsSGVhZGluZ1wiKS5odG1sKFwiRWRpdCBVc2VyXCIpO1xuICAgICAgICAgICAgJChcIiNzYXZlQnRuXCIpLnZhbChcImVkaXQtdXNlclwiKTtcbiAgICAgICAgICAgICQoXCIjdXNlck1vZGVsXCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICAgICAgICAgICQoXCIjdXNlcl9pZFwiKS52YWwoZGF0YS5pZCk7XG4gICAgICAgICAgICAkKFwiI25hbWVcIikudmFsKGRhdGEubmFtZSk7XG4gICAgICAgICAgICAkKFwiI2VtYWlsXCIpLnZhbChkYXRhLmVtYWlsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKFwiI3NhdmVCdG5cIikuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuaHRtbChcIlNlbmRpbmcuLlwiKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IGJhc2VVcmwsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBkYXRhOiAkKFwiI3VzZXJGb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICQoXCIjdXNlckZvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xuICAgICAgICAgICAgICAgICQoXCIjdXNlck1vZGVsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICBvVGFibGUuZHJhdygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgJChcIiNzYXZlQnRuXCIpLmh0bWwoXCJTYXZlIENoYW5nZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5kZWxldGVVc2VyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXNlcl9pZCA9ICQodGhpcykuZGF0YShcImlkXCIpO1xuXG4gICAgICAgIGNvbmZpcm0oXCJBcmUgWW91IHN1cmUgd2FudCB0byBkZWxldGUgIVwiKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIHVybDogYCR7YmFzZVVybH0vJHt1c2VyX2lkfWAsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgb1RhYmxlLmRyYXcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/user.js\n");

/***/ }),

/***/ 2:
/*!************************************!*\
  !*** multi ./resources/js/user.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/gen-formula/resources/js/user.js */"./resources/js/user.js");


/***/ })

/******/ });