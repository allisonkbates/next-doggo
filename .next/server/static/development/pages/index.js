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

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/allison.mazzetti/Documents/next-doggo/components/Intro.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Intro = () => __jsx("section", {
  className: "jsx-2298445410" + " " + "intro",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 1
  }
}, __jsx("div", {
  className: "jsx-2298445410" + " " + "intro-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 2
  }
}, __jsx("div", {
  className: "jsx-2298445410" + " " + "intro-logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("h1", {
  className: "jsx-2298445410",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 4
  }
}, "Adopt a ", __jsx("br", {
  className: "jsx-2298445410",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 16
  }
}), "Doggo"), __jsx("img", {
  src: "/paws-icon.png",
  className: "jsx-2298445410" + " " + "intro-paws",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 4
  }
})), __jsx("p", {
  className: "jsx-2298445410" + " " + "intro-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, "Say something nice about dogs here and how they are the best in the world."), __jsx("button", {
  className: "jsx-2298445410",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 6
  }
}, "Find Your Pup")), __jsx("div", {
  className: "jsx-2298445410" + " " + "intro-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 2
  }
}, __jsx("div", {
  className: "jsx-2298445410" + " " + "intro-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "jsx-2298445410" + " " + "intro-badge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 4
  }
}, __jsx("p", {
  className: "jsx-2298445410",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, "Dog of the Day")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2298445410",
  __self: undefined
}, ".intro.jsx-2298445410{padding:0px 82px;display:grid;grid-template-columns:5fr 7fr;--primary-color:#4ABDAC;--primary-hover:#2F8377;--light-color:#ffffff;--primary-font:'Open Sans Condensed',sans-serif;--styled-font:'Shadows Into Light',cursive;}h1.jsx-2298445410{font-family:var(--styled-font);font-size:60px;color:var(--primary-color);line-height:60px;}.intro-left.jsx-2298445410{grid-column:1 / 2;}.intro-text.jsx-2298445410{font-family:var(--primary-font);font-weight:normal;color:var(--primary-color);font-size:18px;margin:0px 75px 30px 0px;}.intro-logo.jsx-2298445410{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.intro-paws.jsx-2298445410{margin:0px 25px;height:78px;}button.jsx-2298445410{background-color:var(--primary-color);color:var(--light-color);font-family:var(--styled-font);border:none;font-size:18px;padding:0px 25px;height:40px;}button.jsx-2298445410:hover{background-color:var(--primary-hover);color:var(--light-color);}.intro-right.jsx-2298445410{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.intro-img.jsx-2298445410{background:url(\"/cover-dog.png\") no-repeat;height:289px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin:69px;}.intro-badge.jsx-2298445410{background-color:var(--primary-color);color:var(--light-color);font-family:var(--styled-font);font-size:18px;padding:0px 25px;height:40px;width:190px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px 194px 20px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxpc29uLm1henpldHRpL0RvY3VtZW50cy9uZXh0LWRvZ2dvL2NvbXBvbmVudHMvSW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJZLEFBR29CLEFBVWMsQUFNYixBQUdjLEFBT25CLEFBS0csQUFJc0IsQUFTQSxBQUl6QixBQUs4QixBQVNMLGdCQTlCMUIsQ0EvQkMsQ0FnQmQsVUFnQkEsRUEvQitCLENBU2YsQ0FTSSxNQWdCTSxBQVNBLEFBa0JBLEtBVFosR0ExQ2MsS0FTQSxLQWtDZCxJQXBEVyxHQWtDTyxBQVNoQyxBQWtCZ0MsVUFuRGQsQ0FjRSxBQXNCSSxJQTNCUixNQWxCUyxNQVV6QixHQVMwQixDQWViLEFBMkJHLFlBMUJBLEVBbENPLENBNkRMLFNBMUNsQixHQWdCa0IsS0EyQkwsSUE3RHFDLEFBa0QzQixRQWZWLEFBMkJBLEtBeENPLE9BY3BCLEFBMkJjLHVCQW5CTSxLQTNDeUIsOEJBa0RuQixhQWpEMUIsR0E4RHdCLFlBekN4Qiw4QkFzQkEsdUNBT3NCLGtCQWFGLG1GQVpQLFVBYWMsRUFaM0Isd0JBYUEiLCJmaWxlIjoiL1VzZXJzL2FsbGlzb24ubWF6emV0dGkvRG9jdW1lbnRzL25leHQtZG9nZ28vY29tcG9uZW50cy9JbnRyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEludHJvID0gKCkgPT4gKFxuPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIj5cblx0PGRpdiBjbGFzc05hbWU9XCJpbnRyby1sZWZ0XCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJpbnRyby1sb2dvXCI+XG5cdFx0XHQ8aDE+QWRvcHQgYSA8YnI+PC9icj5Eb2dnbzwvaDE+XG5cdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImludHJvLXBhd3NcIiBzcmM9XCIvcGF3cy1pY29uLnBuZ1wiPjwvaW1nPlxuXHRcdDwvZGl2PlxuXHRcdDxwIGNsYXNzTmFtZT1cImludHJvLXRleHRcIj5TYXkgc29tZXRoaW5nIG5pY2UgYWJvdXQgZG9ncyBoZXJlIGFuZCBob3cgdGhleSBhcmUgdGhlIGJlc3QgaW4gdGhlIHdvcmxkLjwvcD5cbiAgIFx0XHQ8YnV0dG9uPkZpbmQgWW91ciBQdXA8L2J1dHRvbj5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tcmlnaHRcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludHJvLWltZ1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnRyby1iYWRnZVwiPlxuXHRcdFx0XHQ8cD5Eb2cgb2YgdGhlIERheTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG57LyogXG4qL31cbjxzdHlsZSBqc3g+e2Bcblx0LmludHJvIHtcblx0XHRwYWRkaW5nOiAwcHggODJweDtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDdmcjtcblx0XHQtLXByaW1hcnktY29sb3I6ICM0QUJEQUM7XG5cdFx0LS1wcmltYXJ5LWhvdmVyOiAjMkY4Mzc3O1xuXHRcdC0tbGlnaHQtY29sb3I6ICNmZmZmZmY7XG5cdFx0LS1wcmltYXJ5LWZvbnQ6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcblx0XHQtLXN0eWxlZC1mb250OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcdFxuXHR9XG5cdGgxIHtcblx0XHRmb250LWZhbWlseTogdmFyKC0tc3R5bGVkLWZvbnQpO1xuXHRcdGZvbnQtc2l6ZTogNjBweDtcblx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XG5cdH1cblx0LmludHJvLWxlZnQge1xuXHRcdGdyaWQtY29sdW1uOiAxIC8gMjtcblx0fVxuXHQuaW50cm8tdGV4dCB7XG5cdFx0Zm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdG1hcmdpbjogMHB4IDc1cHggMzBweCAwcHg7XG5cdH1cblx0LmludHJvLWxvZ28ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5pbnRyby1wYXdzIHtcblx0XHRtYXJnaW46IDBweCAyNXB4O1xuXHRcdGhlaWdodDogNzhweDtcblx0fVxuXHRidXR0b24ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRcdGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0Zm9udC1mYW1pbHk6IHZhcigtLXN0eWxlZC1mb250KTtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdHBhZGRpbmc6IDBweCAyNXB4O1xuXHRcdGhlaWdodDogNDBweDtcblx0fVxuXHRidXR0b246aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuXHRcdGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG5cdH1cblx0LmludHJvLXJpZ2h0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0LmludHJvLWltZyB7XG5cdFx0YmFja2dyb3VuZDogdXJsKFwiL2NvdmVyLWRvZy5wbmdcIikgbm8tcmVwZWF0O1xuXHRcdGhlaWdodDogMjg5cHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdG1hcmdpbjogNjlweDtcblx0fVxuXHQuaW50cm8tYmFkZ2Uge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRcdGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0Zm9udC1mYW1pbHk6IHZhcigtLXN0eWxlZC1mb250KTtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0cGFkZGluZzogMHB4IDI1cHg7XG5cdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdHdpZHRoOiAxOTBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwcHggMTk0cHggMjBweCAwcHg7XG5cdH1cblxuXG5gfTwvc3R5bGU+XG48L3NlY3Rpb24+XG5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvOyJdfQ== */\n/*@ sourceURL=/Users/allison.mazzetti/Documents/next-doggo/components/Intro.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Intro */ "./components/Intro.js");
var _jsxFileName = "/Users/allison.mazzetti/Documents/next-doggo/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx(_components_Intro__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);
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