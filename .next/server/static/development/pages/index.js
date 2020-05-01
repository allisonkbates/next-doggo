module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/allison.mazzetti/Documents/next-doggo/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Index() {
  return __jsx("div", {
    className: "jsx-956533064",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 3
    }
  }, __jsx("p", {
    className: "jsx-956533064",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }
  }, "Hello World!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "956533064",
    __self: this
  }, "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxpc29uLm1henpldHRpL0RvY3VtZW50cy9uZXh0LWRvZ2dvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlxQixBQUlHLFNBQUMiLCJmaWxlIjoiL1VzZXJzL2FsbGlzb24ubWF6emV0dGkvRG9jdW1lbnRzL25leHQtZG9nZ28vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHA+SGVsbG8gV29ybGQhPC9wPlxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXHRcblx0XHRcdGJvZHkge1xuXHRcdFx0XHRtYXJnaW46IDBcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuLyogaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3Qga2V5ID0gcHJvY2Vzcy5lbnYuQVBJX0tFWTtcbmNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LlNFQ1JFVDtcbi8vIGRvZyBmaWx0ZXJzXG5jb25zdCB0eXBlID0gJ2RvZyc7XG5jb25zdCBzdGF0dXMgPSAnYWRvcHRhYmxlJztcbi8vIHRva2VuIHZhcnNcbnZhciB0b2tlbiwgdG9rZW5UeXBlLCBleHBpcmVzO1xuXG4vL3JlbmRlcnNcbmZ1bmN0aW9uIEluZGV4KHsgZG9nZ29zIH0pIHtcblx0cmV0dXJuIChcblx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XG5cdFx0XHR7ZG9nZ29zLm1hcChkb2dnbyA9PiAoXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2RvZ2dvLmlkfT5cdFxuXHRcdCAgICAgIFx0PGltZyBzcmM9e2RvZ2dvWydwaG90b3MnXVswXSAmJiBkb2dnb1sncGhvdG9zJ11bMF1bJ21lZGl1bSddID8gZG9nZ29bJ3Bob3RvcyddWzBdWydtZWRpdW0nXSA6ICcvY2hleWVubmVfaGVyby5qcGcnfSBjbGFzc05hbWU9XCJkb2ctaW1nLWNhcmRcIj48L2ltZz5cdFxuXHRcdCAgICAgIFx0PGgyIGNsYXNzTmFtZT1cImJhZGdlXCI+e2RvZ2dvLm5hbWV9PC9oMj5cdFxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJkb2ctaW5mb1wiPlx0XG5cdFx0ICAgICAgICBcdDxwIGNsYXNzTmFtZT1cIml0YWxpYy10ZXh0XCI+e2RvZ2dvLmJyZWVkcy5wcmltYXJ5fTwvcD5cdFxuXHRcdCAgICAgICAgXHQ8cCBjbGFzc05hbWU9XCJib2R5LXRleHRcIj57ZG9nZ28uZGVzY3JpcHRpb259PC9wPlx0XG5cdFx0ICAgICAgXHQ8L2Rpdj5cdFxuXHRcdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJkb2ctZGF0YVwiPlx0XG5cdFx0ICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJkYXRhLXNlY3Rpb25cIj5cdFxuXHRcdCAgICAgICAgICAgIFx0PHAgY2xhc3NOYW1lPVwiaXRhbGljLXRleHQgbGFiZWxcIj57ZG9nZ28uc2l6ZX08L3A+XHRcblx0XHQgICAgICAgICAgICBcdDxpbWcgc3JjPXtgLyR7ZG9nZ28uc2l6ZX0ucG5nYH0gY2xhc3NOYW1lPVwicGF3c1wiPjwvaW1nPlx0XG5cdFx0ICAgICAgICAgIFx0PC9kaXY+XHRcblx0XHQgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEtc2VjdGlvblwiPlx0XG5cdFx0ICAgICAgICAgICAgXHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPkFnZTwvcD5cdFxuXHRcdCAgICAgICAgICAgIFx0PHAgY2xhc3NOYW1lPVwicmVzdWx0cy10ZXh0XCI+e2RvZ2dvLmFnZX08L3A+XHRcblx0XHQgICAgICAgICAgXHQ8L2Rpdj4gICAgICAgICAgXHRcblx0XHQgICAgICAgICAgXHQ8ZGl2Plx0XG5cdFx0ICAgICAgICAgICAgXHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPkdlbmRlcjwvcD5cdFxuXHRcdCAgICAgICAgICAgIFx0PHAgY2xhc3NOYW1lPVwicmVzdWx0cy10ZXh0XCI+e2RvZ2dvLmdlbmRlciA9PT0gJ01hbGUnID8gJ0dvb2QgQm95JyA6ICdHb29kIEdpcmwnIH08L3A+XHRcblx0XHQgICAgICAgICAgICBcdDxpbWcgc3JjPXtgLyR7ZG9nZ28uZ2VuZGVyfS5wbmdgfSBjbGFzc05hbWU9XCJnZW5kZXJcIj48L2ltZz5cdFxuXHRcdCAgICAgICAgICBcdDwvZGl2Plx0XG5cdFx0ICAgICAgIFx0PC9kaXY+XHRcblx0ICAgICAgIFx0PC9kaXY+XHRcblx0ICAgICAgIFx0KSl9XG4gICAgICAgXHQ8L2Rpdj5cbiAgICAgICBcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0LmNhcmRzIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRwYWRkaW5nOiAwcHggODJweCAwcHggNjhweDtcblx0XHRcdC0tcHJpbWFyeS1jb2xvcjogIzRBQkRBQztcblx0XHRcdC0tcHJpbWFyeS1ob3ZlcjogIzJGODM3Nztcblx0XHRcdC0tbGlnaHQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHQtLWxpZ2h0LWhvdmVyOiAjRTFFOEYwO1xuXHRcdFx0LS1kYXJrLWNvbG9yOiAjMzEzRDRCO1xuXHRcdFx0LS1wcmltYXJ5LWZvbnQ6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcblx0XHRcdC0tc3R5bGVkLWZvbnQ6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1x0XG5cdFx0fVxuXHRcdC5jYXJkIHtcblx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdGhlaWdodDogNDAwcHg7XG5cdFx0XHRtYXJnaW46IDIwcHggMjhweCA0MHB4IDBweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcblx0XHRcdGJveC1zaGFkb3c6IC0xMHB4IDBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgMHB4IC0xMHB4IHZhcigtLXByaW1hcnktY29sb3IpLCAtMTBweCAtMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1x0XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcblx0XHR9XG5cdFx0LmRvZy1pbWctY2FyZCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAtMjBweDtcblx0XHRcdGhlaWdodDogMjAwcHg7XG5cdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR9XG5cdFx0LmJhZGdlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRcdFx0Y29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1zdHlsZWQtZm9udCk7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRwYWRkaW5nOiAwcHggMzBweDtcblx0XHRcdG1hcmdpbjogMHB4IDBweCAwcHggLTVweDtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdH1cblx0XHQuZG9nLWluZm8ge1xuXHRcdFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG5cdFx0fVxuXHRcdC5kb2ctZGF0YSB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0cGFkZGluZzogMHB4O1xuXHRcdFx0bWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuXHRcdH1cblx0XHQuZGF0YS1zZWN0aW9uIHtcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNWQ1ZDU7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHRcdH1cblx0XHQuaXRhbGljLXRleHQge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0Y29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuXHRcdH1cblx0XHQubGFiZWwge1xuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xuXHRcdH1cblx0XHQuYm9keS10ZXh0IHtcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTs7XG5cdFx0fVxuXHRcdC5yZXN1bHRzLXRleHQge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG5cdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0fVxuXHRcdC5nZW5kZXIge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdH1cblx0XHRgfTwvc3R5bGU+XG4gIFx0PC9MYXlvdXQ+XG5cdClcbn1cbnZhciBnZXRPQXV0aCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vYXBpLnBldGZpbmRlci5jb20vdjIvb2F1dGgyL3Rva2VuJywge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgYm9keTogJ2dyYW50X3R5cGU9Y2xpZW50X2NyZWRlbnRpYWxzJmNsaWVudF9pZD0nICsga2V5ICsgJyZjbGllbnRfc2VjcmV0PScgKyBzZWNyZXQsXG4gIGhlYWRlcnM6IHtcblx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdH1cbiAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcblx0Y29uc29sZS5sb2coJ3Rva2VuJywgZGF0YSk7XG5cdHRva2VuID0gZGF0YS5hY2Nlc3NfdG9rZW47XG5cdHRva2VuVHlwZSA9IGRhdGEudG9rZW5fdHlwZTtcblx0ZXhwaXJlcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKGRhdGEuZXhwaXJlc19pbiAqIDEwMDApO1xuICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcblx0Y29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nLi4uJywgZXJyKTtcbiAgfSk7XG59OyAgXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG5cdGNvbnN0IGdldEF1dGggPSBhd2FpdCBnZXRPQXV0aCgpO1xuXHRjb25zdCBnZXREb2dnb3MgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkucGV0ZmluZGVyLmNvbS92Mi9hbmltYWxzPycgKyAndHlwZT0nICsgdHlwZSArICcmc3RhdHVzPScgKyBzdGF0dXMsIHtcblx0XHRoZWFkZXJzOiB7XG5cdCAgXHQnQXV0aG9yaXphdGlvbic6IHRva2VuVHlwZSArICcgJyArIHRva2VuLFxuXHQgIFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldERvZ2dvcy5qc29uKCk7XG5cdGNvbnN0IGRvZ2dvcyA9IGRhdGEuYW5pbWFscztcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG5cdFx0XHRkb2dnb3Ncblx0XHR9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgKi8iXX0= */\n/*@ sourceURL=/Users/allison.mazzetti/Documents/next-doggo/pages/index.js */"));
}
/* import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const key = process.env.API_KEY;
const secret = process.env.SECRET;
// dog filters
const type = 'dog';
const status = 'adoptable';
// token vars
var token, tokenType, expires;

//renders
function Index({ doggos }) {
	return (
	<Layout>
		<div className="cards">
			{doggos.map(doggo => (			
			<div className="card" key={doggo.id}>	
		      	<img src={doggo['photos'][0] && doggo['photos'][0]['medium'] ? doggo['photos'][0]['medium'] : '/cheyenne_hero.jpg'} className="dog-img-card"></img>	
		      	<h2 className="badge">{doggo.name}</h2>	
		      	<div className="dog-info">	
		        	<p className="italic-text">{doggo.breeds.primary}</p>	
		        	<p className="body-text">{doggo.description}</p>	
		      	</div>	
		      	<div className="dog-data">	
		          	<div className="data-section">	
		            	<p className="italic-text label">{doggo.size}</p>	
		            	<img src={`/${doggo.size}.png`} className="paws"></img>	
		          	</div>	
		          	<div className="data-section">	
		            	<p className="italic-text label">Age</p>	
		            	<p className="results-text">{doggo.age}</p>	
		          	</div>          	
		          	<div>	
		            	<p className="italic-text label">Gender</p>	
		            	<p className="results-text">{doggo.gender === 'Male' ? 'Good Boy' : 'Good Girl' }</p>	
		            	<img src={`/${doggo.gender}.png`} className="gender"></img>	
		          	</div>	
		       	</div>	
	       	</div>	
	       	))}
       	</div>
       	<style jsx global>{`
		.cards {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0px 82px 0px 68px;
			--primary-color: #4ABDAC;
			--primary-hover: #2F8377;
			--light-color: #ffffff;
			--light-hover: #E1E8F0;
			--dark-color: #313D4B;
			--primary-font: 'Open Sans Condensed', sans-serif;
			--styled-font: 'Shadows Into Light', cursive;	
		}
		.card {
			width: 250px;
			height: 400px;
			margin: 20px 28px 40px 0px;
			background-color: var(--light-color);
			box-shadow: -10px 0px var(--primary-color), 0px -10px var(--primary-color), -10px -10px var(--primary-color);
			border: 1px solid var(--dark-color);
			border-bottom: 1px solid var(--primary-color);	
			border-right: 1px solid var(--primary-color);
			border-top: 1px solid var(--light-color);
			border-left: 1px solid var(--light-color);
		}
		.dog-img-card {
			margin-bottom: -20px;
			height: 200px;
			width: 250px;
			object-fit: cover;
		}
		.badge {
			background-color: var(--primary-color);
			color: var(--light-color);
			font-family: var(--styled-font);
			font-size: 18px;
			padding: 0px 30px;
			margin: 0px 0px 0px -5px;
			display: inline-flex;
		}
		.dog-info {
			padding: 0px 10px 0px 10px;
		}
		.dog-data {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			padding: 0px;
			margin: 20px 0px 0px 0px;
		}
		.data-section {
			border-right: 1px solid #d5d5d5;
			padding-right: 15px;
		}
		.italic-text {
			font-family: var(--primary-font);
			font-size: 14px;
			font-weight: 300;
			font-style: italic;
			color: var(--dark-color);
		}
		.label {
			margin-top: 0px;
		}
		.body-text {
			font-family: var(--primary-font);
			font-weight: 300;
			font-size: 14px;
			color: var(--dark-color);;
		}
		.results-text {
			font-family: var(--primary-font);
			color: var(--primary-color);
			font-size: 14px;
			display: inline;
		}
		.gender {
			display: inline;
		}
		`}</style>
  	</Layout>
	)
}
var getOAuth = function() {
  return fetch('https://api.petfinder.com/v2/oauth2/token', {
  method: 'POST',
  body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
  headers: {
	'Content-Type': 'application/x-www-form-urlencoded'
	}
  }).then(function(response) {
	return response.json();
  }).then(function(data) {
	console.log('token', data);
	token = data.access_token;
	tokenType = data.token_type;
	expires = new Date().getTime() + (data.expires_in * 1000);
  }).catch(function(err) {
	console.log('something went wrong...', err);
  });
};  

export async function getServerSideProps() {
	const getAuth = await getOAuth();
	const getDoggos = await fetch('https://api.petfinder.com/v2/animals?' + 'type=' + type + '&status=' + status, {
		headers: {
	  	'Authorization': tokenType + ' ' + token,
	  	'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	const data = await getDoggos.json();
	const doggos = data.animals;

  return {
    props: {
			doggos
		}
  };
};

export default Index; */

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/allison.mazzetti/Documents/next-doggo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map