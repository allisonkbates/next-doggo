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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/allison.mazzetti/Documents/next-doggo/components/Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const StyledIntro = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Intro__StyledIntro",
  componentId: "sc-3cno2d-0"
})(["padding:0px 82px;display:grid;grid-template-columns:5fr 7fr;h1{font-family:", ";font-size:60px;color:", ";line-height:60px;}.intro-left{grid-column:1 / 2;}.intro-text{font-family:", ";font-weight:normal;color:", ";font-size:18px;margin:0px 75px 30px 0px;}.intro-logo{display:flex;flex-direction:row;align-items:center;}.intro-paws{margin:0px 25px;height:78px;}button{background-color:", ";color:", ";font-family:", ";border:none;font-size:18px;padding:0px 25px;height:40px;}button:hover{background-color:", ";color:", ";}.intro-right{display:flex;justify-content:center;align-items:center;}.intro-img{background:url(\"/cover-dog.png\") no-repeat;height:289px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;margin:69px;}.intro-badge{background-color:", ";color:", ";font-family:", ";font-size:18px;padding:0px 25px;height:40px;width:190px;display:flex;justify-content:center;align-items:center;margin:0px 194px 20px 0px;}"], props => props.theme.cursiveFont, props => props.theme.primaryColor, props => props.theme.primaryFont, props => props.theme.primaryColor, props => props.theme.primaryColor, props => props.theme.light, props => props.theme.cursiveFont, props => props.theme.hoverColor, props => props.theme.light, props => props.theme.primaryColor, props => props.theme.light, props => props.theme.cursiveFont);

const Intro = () => __jsx(StyledIntro, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 1
  }
}, __jsx("div", {
  className: "intro-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 2
  }
}, __jsx("div", {
  className: "intro-logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 3
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 4
  }
}, "Adopt a ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 16
  }
}), "Doggo"), __jsx("img", {
  className: "intro-paws",
  src: "/paws-icon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 4
  }
})), __jsx("p", {
  className: "intro-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 3
  }
}, "Say something nice about dogs here and how they are the best in the world."), __jsx("button", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 6
  }
}, "Find Your Pup")), __jsx("div", {
  className: "intro-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 2
  }
}, __jsx("div", {
  className: "intro-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "intro-badge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 4
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }
}, "Dog of the Day")))));

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

/***/ 3:
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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map