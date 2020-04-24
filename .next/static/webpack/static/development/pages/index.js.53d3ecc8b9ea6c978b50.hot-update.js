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



var key = "XB3vY8VxHRq2gORl6Vs2VspjBmFj26eG1WD91SU09nWCQonR6L";
var secret = "3bPz0lHF0NqGt7OHuJeeWhgTLizUqcHqVuFJUGmL"; // dog filters

var type = 'dog';
var status = 'adoptable'; // token vars

var token, tokenType, expires; //renders

var Index = function Index(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 2
    }
  }, __jsx("div", {
    className: "jsx-730552194" + " " + "cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, props.doggos.map(function (doggo) {
    return __jsx("div", {
      key: doggo.id,
      className: "jsx-730552194" + " " + "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 4
      }
    }, __jsx("img", {
      src: doggo['photos'][0] && doggo['photos'][0]['medium'] ? doggo['photos'][0]['medium'] : '/cheyenne_hero.jpg',
      className: "jsx-730552194" + " " + "dog-img-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 10
      }
    }), __jsx("h2", {
      className: "jsx-730552194" + " " + "badge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 10
      }
    }, doggo.name), __jsx("div", {
      className: "jsx-730552194" + " " + "dog-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 12
      }
    }, doggo.breeds.primary), __jsx("p", {
      className: "jsx-730552194" + " " + "body-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    }, doggo.description)), __jsx("div", {
      className: "jsx-730552194" + " " + "dog-data",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: "jsx-730552194" + " " + "data-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 16
      }
    }, doggo.size), __jsx("img", {
      src: "/paw-size-icons/".concat(doggo.size, ".png"),
      className: "jsx-730552194" + " " + "paws",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }
    })), __jsx("div", {
      className: "jsx-730552194" + " " + "data-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 16
      }
    }, "Age"), __jsx("p", {
      className: "jsx-730552194" + " " + "results-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    }, doggo.age)), __jsx("div", {
      className: "jsx-730552194",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }
    }, "Gender"), __jsx("p", {
      className: "jsx-730552194" + " " + "results-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }
    }, doggo.gender === 'Male' ? 'Good Boy' : 'Good Girl'), __jsx("img", {
      src: doggo.gender === 'Male' ? '/male-icon.png' : '/female-icon.png',
      className: "jsx-730552194" + " " + "gender",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 16
      }
    }))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "730552194",
    __self: _this
  }, ".cards{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px 82px 0px 68px;--primary-color:#4ABDAC;--primary-hover:#2F8377;--light-color:#ffffff;--light-hover:#E1E8F0;--dark-color:#313D4B;--primary-font:'Open Sans Condensed',sans-serif;--styled-font:'Shadows Into Light',cursive;}.card{width:250px;height:400px;margin:20px 28px 40px 0px;background-color:var(--light-color);box-shadow:-10px 0px var(--primary-color),0px -10px var(--primary-color),-10px -10px var(--primary-color);border:1px solid var(--dark-color);border-bottom:1px solid var(--primary-color);border-right:1px solid var(--primary-color);border-top:1px solid var(--light-color);border-left:1px solid var(--light-color);}.dog-img-card{margin-bottom:-20px;height:200px;width:250px;object-fit:cover;}.badge{background-color:var(--primary-color);color:var(--light-color);font-family:var(--styled-font);font-size:18px;padding:0px 30px;margin:0px 0px 0px -5px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.dog-info{padding:0px 10px 0px 10px;}.dog-data{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px;margin:20px 0px 0px 0px;}.data-section{border-right:1px solid #d5d5d5;padding-right:15px;}.italic-text{font-family:var(--primary-font);font-size:14px;font-weight:300;font-style:italic;color:var(--dark-color);}.label{margin-top:0px;}.body-text{font-family:var(--primary-font);font-weight:300;font-size:14px;color:var(--dark-color);}.results-text{font-family:var(--primary-font);color:var(--primary-color);font-size:14px;display:inline;}.gender{display:inline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxpc29uLm1henpldHRpL0RvY3VtZW50cy9uZXh0LWRvZ2dvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDMkIsQUFHaUIsQUFjRCxBQVlRLEFBTWtCLEFBU1osQUFHYixBQU9rQixBQUlDLEFBT2pCLEFBR2lCLEFBTUEsQUFNakIsWUE5REYsR0FnRGQsQUFlQSxLQW5EYyxLQVhhLENBMEIzQixLQVVvQixDQUlKLEFBVUMsQUFNVyxDQTVDZixLQUthLE9BSlIsRUE0QkQsQ0FVRCxFQWRoQixDQXBDcUMsUUF3RHJCLEdBM0NoQixDQUlnQyxBQXdCYixBQVVNLFdBbkVMLEFBNENBLEFBNkJKLE9BZlMsTUF6Q29GLEFBbUQ3RyxFQU1BLEtBeENnQixXQXlCaEIsSUF4QmtCLGlCQUNPLGlCQW5DVCxBQTRDYyxPQVJULDJDQW5CZSxPQWhCTiw0QkFpQmdCLHdCQW1COUMsY0FRYSxPQTFCZ0MsS0EyQnBCLHdCQUN6QixlQTNCeUMsTUFsQmQsMEJBQ0YsUUFrQmlCLGdCQWpCakIsd0JBQ0YsQ0FpQnZCLHFCQWhCdUIsc0JBQ0QscUJBQzRCLGdEQUNMLDJDQUM3QyIsImZpbGUiOiIvVXNlcnMvYWxsaXNvbi5tYXp6ZXR0aS9Eb2N1bWVudHMvbmV4dC1kb2dnby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBrZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xuY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VDUkVUO1xuLy8gZG9nIGZpbHRlcnNcbmNvbnN0IHR5cGUgPSAnZG9nJztcbmNvbnN0IHN0YXR1cyA9ICdhZG9wdGFibGUnO1xuLy8gdG9rZW4gdmFyc1xudmFyIHRva2VuLCB0b2tlblR5cGUsIGV4cGlyZXM7XG4vL3JlbmRlcnNcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cblx0XHRcdHtwcm9wcy5kb2dnb3MubWFwKGRvZ2dvID0+IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17ZG9nZ28uaWR9PlxuXHQgICAgICBcdFx0PGltZyBzcmM9e2RvZ2dvWydwaG90b3MnXVswXSAmJiBkb2dnb1sncGhvdG9zJ11bMF1bJ21lZGl1bSddID8gZG9nZ29bJ3Bob3RvcyddWzBdWydtZWRpdW0nXSA6ICcvY2hleWVubmVfaGVyby5qcGcnfSBjbGFzc05hbWU9XCJkb2ctaW1nLWNhcmRcIj48L2ltZz5cblx0ICAgICAgXHRcdDxoMiBjbGFzc05hbWU9XCJiYWRnZVwiPntkb2dnby5uYW1lfTwvaDI+XG5cdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvZy1pbmZvXCI+XG5cdCAgICAgICAgXHRcdDxwIGNsYXNzTmFtZT1cIml0YWxpYy10ZXh0XCI+e2RvZ2dvLmJyZWVkcy5wcmltYXJ5fTwvcD5cblx0ICAgICAgICBcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+e2RvZ2dvLmRlc2NyaXB0aW9ufTwvcD5cblx0ICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2ctZGF0YVwiPlxuXHQgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWN0aW9uXCI+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPntkb2dnby5zaXplfTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxpbWcgc3JjPXtgL3Bhdy1zaXplLWljb25zLyR7ZG9nZ28uc2l6ZX0ucG5nYH0gY2xhc3NOYW1lPVwicGF3c1wiPjwvaW1nPlxuXHQgICAgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWN0aW9uXCI+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPkFnZTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxwIGNsYXNzTmFtZT1cInJlc3VsdHMtdGV4dFwiPntkb2dnby5hZ2V9PC9wPlxuXHQgICAgICAgICAgXHRcdDwvZGl2PiAgICAgICAgICBcblx0ICAgICAgICAgIFx0XHQ8ZGl2PlxuXHQgICAgICAgICAgICBcdFx0PHAgY2xhc3NOYW1lPVwiaXRhbGljLXRleHQgbGFiZWxcIj5HZW5kZXI8L3A+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJyZXN1bHRzLXRleHRcIj57ZG9nZ28uZ2VuZGVyID09PSAnTWFsZScgPyAnR29vZCBCb3knIDogJ0dvb2QgR2lybCcgfTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxpbWcgc3JjPXtkb2dnby5nZW5kZXIgPT09ICdNYWxlJyA/ICcvbWFsZS1pY29uLnBuZycgOiAnL2ZlbWFsZS1pY29uLnBuZyd9IGNsYXNzTmFtZT1cImdlbmRlclwiPjwvaW1nPlxuXHQgICAgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgXHQ8L2Rpdj5cblx0ICAgICAgIFx0KSl9XG4gICAgICAgXHQ8L2Rpdj5cbiAgICAgICBcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0LmNhcmRzIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRwYWRkaW5nOiAwcHggODJweCAwcHggNjhweDtcblx0XHRcdC0tcHJpbWFyeS1jb2xvcjogIzRBQkRBQztcblx0XHRcdC0tcHJpbWFyeS1ob3ZlcjogIzJGODM3Nztcblx0XHRcdC0tbGlnaHQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHQtLWxpZ2h0LWhvdmVyOiAjRTFFOEYwO1xuXHRcdFx0LS1kYXJrLWNvbG9yOiAjMzEzRDRCO1xuXHRcdFx0LS1wcmltYXJ5LWZvbnQ6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcblx0XHRcdC0tc3R5bGVkLWZvbnQ6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1x0XG5cdFx0fVxuXHRcdC5jYXJkIHtcblx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdGhlaWdodDogNDAwcHg7XG5cdFx0XHRtYXJnaW46IDIwcHggMjhweCA0MHB4IDBweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcblx0XHRcdGJveC1zaGFkb3c6IC0xMHB4IDBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgMHB4IC0xMHB4IHZhcigtLXByaW1hcnktY29sb3IpLCAtMTBweCAtMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1x0XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcblx0XHR9XG5cdFx0LmRvZy1pbWctY2FyZCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAtMjBweDtcblx0XHRcdGhlaWdodDogMjAwcHg7XG5cdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR9XG5cdFx0LmJhZGdlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRcdFx0Y29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1zdHlsZWQtZm9udCk7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRwYWRkaW5nOiAwcHggMzBweDtcblx0XHRcdG1hcmdpbjogMHB4IDBweCAwcHggLTVweDtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdH1cblx0XHQuZG9nLWluZm8ge1xuXHRcdFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG5cdFx0fVxuXHRcdC5kb2ctZGF0YSB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0cGFkZGluZzogMHB4O1xuXHRcdFx0bWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuXHRcdH1cblx0XHQuZGF0YS1zZWN0aW9uIHtcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNWQ1ZDU7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHRcdH1cblx0XHQuaXRhbGljLXRleHQge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0Y29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuXHRcdH1cblx0XHQubGFiZWwge1xuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xuXHRcdH1cblx0XHQuYm9keS10ZXh0IHtcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTs7XG5cdFx0fVxuXHRcdC5yZXN1bHRzLXRleHQge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG5cdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0fVxuXHRcdC5nZW5kZXIge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdH1cblx0XHRgfTwvc3R5bGU+XG4gIFx0PC9MYXlvdXQ+XG4pO1xudmFyIGdldE9BdXRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9hcGkucGV0ZmluZGVyLmNvbS92Mi9vYXV0aDIvdG9rZW4nLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBib2R5OiAnZ3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMmY2xpZW50X2lkPScgKyBrZXkgKyAnJmNsaWVudF9zZWNyZXQ9JyArIHNlY3JldCxcbiAgaGVhZGVyczoge1xuXHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcblx0fVxuICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRjb25zb2xlLmxvZygndG9rZW4nLCBkYXRhKTtcblx0dG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcblx0dG9rZW5UeXBlID0gZGF0YS50b2tlbl90eXBlO1xuXHRleHBpcmVzID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoZGF0YS5leHBpcmVzX2luICogMTAwMCk7XG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXHRjb25zb2xlLmxvZygnc29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nLCBlcnIpO1xuICB9KTtcbn07ICBcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGdldEF1dGggPSBhd2FpdCBnZXRPQXV0aCgpO1xuXHRjb25zdCBnZXREb2dnb3MgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkucGV0ZmluZGVyLmNvbS92Mi9hbmltYWxzPycgKyAndHlwZT0nICsgdHlwZSArICcmc3RhdHVzPScgKyBzdGF0dXMsIHtcblx0XHRoZWFkZXJzOiB7XG5cdCAgXHQnQXV0aG9yaXphdGlvbic6IHRva2VuVHlwZSArICcgJyArIHRva2VuLFxuXHQgIFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldERvZ2dvcy5qc29uKCk7XG5cdGNvbnN0IGRvZ2dvcyA9IGRhdGEuYW5pbWFscztcblxuICByZXR1cm4ge1xuICAgIGRvZ2dvczogZG9nZ29zXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/Users/allison.mazzetti/Documents/next-doggo/pages/index.js */"));
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
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.petfinder.com/v2/animals?' + 'type=' + type + '&status=' + status, {
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
//# sourceMappingURL=index.js.53d3ecc8b9ea6c978b50.hot-update.js.map