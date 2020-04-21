webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/allison.mazzetti/Documents/next-doggo/pages/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var key = 'XB3vY8VxHRq2gORl6Vs2VspjBmFj26eG1WD91SU09nWCQonR6L';
var secret = '3bPz0lHF0NqGt7OHuJeeWhgTLizUqcHqVuFJUGmL'; // dog filters

var size = 'medium';
var type = 'dog';
var status = 'adoptable'; // token vars

var token, tokenType, expires;
var awesomeDog = "/cheyenne_hero.jpg"; //renders

var Index = function Index(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 2
    }
  }, __jsx("div", {
    className: "jsx-765496739" + " " + "cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, props.doggos.map(function (doggo) {
    return __jsx("div", {
      key: doggo.id,
      className: "jsx-765496739" + " " + "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 4
      }
    }, __jsx("img", {
      src: doggo['photos'][0] && doggo['photos'][0]['medium'] ? doggo['photos'][0]['medium'] : awesomeDog,
      className: "jsx-765496739" + " " + "dog-img-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }), __jsx("h2", {
      className: "jsx-765496739" + " " + "badge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }
    }, doggo.name), __jsx("div", {
      className: "jsx-765496739" + " " + "dog-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-765496739" + " " + "italic-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 12
      }
    }, doggo.breeds.primary), __jsx("p", {
      className: "jsx-765496739" + " " + "body-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 12
      }
    }, doggo.description)), __jsx("div", {
      className: "jsx-765496739" + " " + "dog-data",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: "jsx-765496739" + " " + "data-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-765496739" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }
    }, doggo.size), __jsx("img", {
      src: "/paw-size-icon.png",
      className: "jsx-765496739" + " " + "paws",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }
    })), __jsx("div", {
      className: "jsx-765496739" + " " + "data-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-765496739" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }
    }, "Age"), __jsx("p", {
      className: "jsx-765496739" + " " + "results-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }
    }, doggo.age)), __jsx("div", {
      className: "jsx-765496739",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-765496739" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 16
      }
    }, "Gender"), __jsx("p", {
      className: "jsx-765496739" + " " + "results-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 16
      }
    }, doggo.gender), __jsx("img", {
      src: "/male-icon.png",
      className: "jsx-765496739" + " " + "gender",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }
    }))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "765496739",
    __self: _this
  }, ".cards{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px 82px 0px 68px;--primary-color:#4ABDAC;--primary-hover:#2F8377;--light-color:#ffffff;--light-hover:#E1E8F0;--dark-color:#313D4B;--primary-font:'Open Sans Condensed',sans-serif;--styled-font:'Shadows Into Light',cursive;}.card{width:250px;height:400px;margin:20px 28px 40px 0px;background-color:var(--light-color);box-shadow:-10px 0px var(--primary-color),0px -10px var(--primary-color),-10px -10px var(--primary-color);border:1px solid var(--dark-color);border-bottom:1px solid var(--primary-color);border-right:1px solid var(--primary-color);border-top:1px solid var(--light-color);border-left:1px solid var(--light-color);}.dog-img-card{margin-bottom:-20px;height:200px;width:250px;object-fit:cover;-webkit-filter:grayscale(80%);filter:grayscale(80%);}.badge{background-color:var(--primary-color);color:var(--light-color);font-family:var(--styled-font);font-size:18px;padding:0px 30px;margin:0px 0px 0px -5px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.dog-info{padding:0px 10px 0px 10px;}.dog-data{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px;margin:20px 0px 0px 0px;}.data-section{border-right:1px solid #d5d5d5;padding-right:15px;}.italic-text{font-family:var(--primary-font);font-size:14px;font-weight:300;font-style:italic;color:var(--dark-color);}.label{margin-top:0px;}.body-text{font-family:var(--primary-font);font-weight:300;font-size:14px;color:var(--dark-color);}.results-text{font-family:var(--primary-font);color:var(--primary-color);font-size:14px;display:inline;}.gender{display:inline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxpc29uLm1henpldHRpL0RvY3VtZW50cy9uZXh0LWRvZ2dvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDMkIsQUFHaUIsQUFjRCxBQVlRLEFBT2tCLEFBU1osQUFHYixBQU9rQixBQUlDLEFBT2pCLEFBR2lCLEFBTUEsQUFNakIsWUEvREYsR0FpRGQsQUFlQSxLQXBEYyxLQVhhLENBMkIzQixLQVVvQixDQUlKLEFBVUMsQUFNVyxDQTdDZixLQU1hLE9BTFIsRUE2QkQsQ0FVRCxFQWRoQixDQXJDcUMsUUF5RHJCLEdBNUNPLENBS1MsQUF3QmIsQUFVTSxXQXBFTCxBQTZDQSxBQTZCSixPQWZTLE1BMUNvRixBQW9EN0csRUFNQSxLQXhDZ0IsV0F5QmhCLElBeEJrQixLQU5sQixZQU95QixpQkFwQ1QsQUE2Q2MsT0FSVCwyQ0FwQmUsT0FoQk4sNEJBaUJnQix3QkFvQjlDLGNBUWEsT0EzQmdDLEtBNEJwQix3QkFDekIsZUE1QnlDLE1BbEJkLDBCQUNGLFFBa0JpQixnQkFqQmpCLHdCQUNGLENBaUJ2QixxQkFoQnVCLHNCQUNELHFCQUM0QixnREFDTCwyQ0FDN0MiLCJmaWxlIjoiL1VzZXJzL2FsbGlzb24ubWF6emV0dGkvRG9jdW1lbnRzL25leHQtZG9nZ28vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3Qga2V5ID0gJ1hCM3ZZOFZ4SFJxMmdPUmw2VnMyVnNwakJtRmoyNmVHMVdEOTFTVTA5bldDUW9uUjZMJztcbmNvbnN0IHNlY3JldCA9ICczYlB6MGxIRjBOcUd0N09IdUplZVdoZ1RMaXpVcWNIcVZ1RkpVR21MJztcbi8vIGRvZyBmaWx0ZXJzXG5jb25zdCBzaXplID0gJ21lZGl1bSc7XG5jb25zdCB0eXBlID0gJ2RvZyc7XG5jb25zdCBzdGF0dXMgPSAnYWRvcHRhYmxlJztcbi8vIHRva2VuIHZhcnNcbnZhciB0b2tlbiwgdG9rZW5UeXBlLCBleHBpcmVzO1xudmFyIGF3ZXNvbWVEb2cgPSBcIi9jaGV5ZW5uZV9oZXJvLmpwZ1wiO1xuLy9yZW5kZXJzXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcblx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XG5cdFx0XHR7cHJvcHMuZG9nZ29zLm1hcChkb2dnbyA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2RvZ2dvLmlkfT5cblx0ICAgICAgXHRcdDxpbWcgc3JjPXtkb2dnb1sncGhvdG9zJ11bMF0gJiYgZG9nZ29bJ3Bob3RvcyddWzBdWydtZWRpdW0nXSA/IGRvZ2dvWydwaG90b3MnXVswXVsnbWVkaXVtJ10gOiBhd2Vzb21lRG9nfSBjbGFzc05hbWU9XCJkb2ctaW1nLWNhcmRcIj48L2ltZz5cblx0ICAgICAgXHRcdDxoMiBjbGFzc05hbWU9XCJiYWRnZVwiPntkb2dnby5uYW1lfTwvaDI+XG5cdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvZy1pbmZvXCI+XG5cdCAgICAgICAgXHRcdDxwIGNsYXNzTmFtZT1cIml0YWxpYy10ZXh0XCI+e2RvZ2dvLmJyZWVkcy5wcmltYXJ5fTwvcD5cblx0ICAgICAgICBcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+e2RvZ2dvLmRlc2NyaXB0aW9ufTwvcD5cblx0ICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2ctZGF0YVwiPlxuXHQgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWN0aW9uXCI+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPntkb2dnby5zaXplfTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL3Bhdy1zaXplLWljb24ucG5nXCIgY2xhc3NOYW1lPVwicGF3c1wiPjwvaW1nPlxuXHQgICAgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWN0aW9uXCI+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPkFnZTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxwIGNsYXNzTmFtZT1cInJlc3VsdHMtdGV4dFwiPntkb2dnby5hZ2V9PC9wPlxuXHQgICAgICAgICAgXHRcdDwvZGl2PiAgICAgICAgICBcblx0ICAgICAgICAgIFx0XHQ8ZGl2PlxuXHQgICAgICAgICAgICBcdFx0PHAgY2xhc3NOYW1lPVwiaXRhbGljLXRleHQgbGFiZWxcIj5HZW5kZXI8L3A+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJyZXN1bHRzLXRleHRcIj57ZG9nZ28uZ2VuZGVyfTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiL21hbGUtaWNvbi5wbmdcIiBjbGFzc05hbWU9XCJnZW5kZXJcIj48L2ltZz5cblx0ICAgICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0PC9kaXY+XG5cdCAgICAgICBcdCkpfVxuICAgICAgIFx0PC9kaXY+XG4gICAgICAgXHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdC5jYXJkcyB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0cGFkZGluZzogMHB4IDgycHggMHB4IDY4cHg7XG5cdFx0XHQtLXByaW1hcnktY29sb3I6ICM0QUJEQUM7XG5cdFx0XHQtLXByaW1hcnktaG92ZXI6ICMyRjgzNzc7XG5cdFx0XHQtLWxpZ2h0LWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0LS1saWdodC1ob3ZlcjogI0UxRThGMDtcblx0XHRcdC0tZGFyay1jb2xvcjogIzMxM0Q0Qjtcblx0XHRcdC0tcHJpbWFyeS1mb250OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5cdFx0XHQtLXN0eWxlZC1mb250OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcdFxuXHRcdH1cblx0XHQuY2FyZCB7XG5cdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0bWFyZ2luOiAyMHB4IDI4cHggNDBweCAwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0XHRib3gtc2hhZG93OiAtMTBweCAwcHggdmFyKC0tcHJpbWFyeS1jb2xvciksIDBweCAtMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgLTEwcHggLTEwcHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcdFxuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xuXHRcdFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0fVxuXHRcdC5kb2ctaW1nLWNhcmQge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogLTIwcHg7XG5cdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRmaWx0ZXI6IGdyYXlzY2FsZSg4MCUpO1xuXHRcdH1cblx0XHQuYmFkZ2Uge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXN0eWxlZC1mb250KTtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdHBhZGRpbmc6IDBweCAzMHB4O1xuXHRcdFx0bWFyZ2luOiAwcHggMHB4IDBweCAtNXB4O1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0fVxuXHRcdC5kb2ctaW5mbyB7XG5cdFx0XHRwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcblx0XHR9XG5cdFx0LmRvZy1kYXRhIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG5cdFx0fVxuXHRcdC5kYXRhLXNlY3Rpb24ge1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q1ZDVkNTtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XG5cdFx0fVxuXHRcdC5pdGFsaWMtdGV4dCB7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdFx0XHRjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG5cdFx0fVxuXHRcdC5sYWJlbCB7XG5cdFx0XHRtYXJnaW4tdG9wOiAwcHg7XG5cdFx0fVxuXHRcdC5ib2R5LXRleHQge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6IHZhcigtLWRhcmstY29sb3IpOztcblx0XHR9XG5cdFx0LnJlc3VsdHMtdGV4dCB7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcblx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHR9XG5cdFx0LmdlbmRlciB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0fVxuXHRcdGB9PC9zdHlsZT5cbiAgXHQ8L0xheW91dD5cbik7XG52YXIgZ2V0T0F1dGggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZldGNoKCdodHRwczovL2FwaS5wZXRmaW5kZXIuY29tL3YyL29hdXRoMi90b2tlbicsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGJvZHk6ICdncmFudF90eXBlPWNsaWVudF9jcmVkZW50aWFscyZjbGllbnRfaWQ9JyArIGtleSArICcmY2xpZW50X3NlY3JldD0nICsgc2VjcmV0LFxuICBoZWFkZXJzOiB7XG5cdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuXHR9XG4gIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cdGNvbnNvbGUubG9nKCd0b2tlbicsIGRhdGEpO1xuXHR0b2tlbiA9IGRhdGEuYWNjZXNzX3Rva2VuO1xuXHR0b2tlblR5cGUgPSBkYXRhLnRva2VuX3R5cGU7XG5cdGV4cGlyZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIChkYXRhLmV4cGlyZXNfaW4gKiAxMDAwKTtcbiAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdGNvbnNvbGUubG9nKCdzb21ldGhpbmcgd2VudCB3cm9uZy4uLicsIGVycik7XG4gIH0pO1xufTsgIFxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcblx0Y29uc3QgZ2V0QXV0aCA9IGF3YWl0IGdldE9BdXRoKCk7XG5cdGNvbnN0IGdldERvZ2dvcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5wZXRmaW5kZXIuY29tL3YyL2FuaW1hbHM/c2l6ZT0nICsgc2l6ZSArICcmdHlwZT0nICsgdHlwZSArICcmc3RhdHVzPScgKyBzdGF0dXMsIHtcblx0XHRoZWFkZXJzOiB7XG5cdCAgXHQnQXV0aG9yaXphdGlvbic6IHRva2VuVHlwZSArICcgJyArIHRva2VuLFxuXHQgIFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldERvZ2dvcy5qc29uKCk7XG5cdGNvbnN0IGRvZ2dvcyA9IGRhdGEuYW5pbWFscztcblxuICByZXR1cm4ge1xuICAgIGRvZ2dvczogZG9nZ29zXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/Users/allison.mazzetti/Documents/next-doggo/pages/index.js */"));
};

var getOAuth = function getOAuth() {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('token', data);
    token = data.access_token;
    tokenType = data.token_type;
    expires = new Date().getTime() + data.expires_in * 1000;
  })["catch"](function (err) {
    console.log('something went wrong...', err);
  });
};

Index.getInitialProps = function _callee() {
  var getAuth, getDoggos, data, doggos;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getOAuth());

        case 2:
          getAuth = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.petfinder.com/v2/animals?size=' + size + '&type=' + type + '&status=' + status, {
            headers: {
              'Authorization': tokenType + ' ' + token,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }));

        case 5:
          getDoggos = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getDoggos.json());

        case 8:
          data = _context.sent;
          doggos = data.animals;
          return _context.abrupt("return", {
            doggos: doggos
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b62ab33471d7bf750165.hot-update.js.map