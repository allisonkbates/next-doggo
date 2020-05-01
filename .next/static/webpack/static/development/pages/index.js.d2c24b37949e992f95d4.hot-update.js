webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/allison.mazzetti/Documents/next-doggo/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

// token vars
var expires; //renders

function Index(_ref) {
  var _this = this;

  var doggos = _ref.doggos;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 2
    }
  }, __jsx("div", {
    className: "jsx-730552194" + " " + "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, doggos.map(function (doggo) {
    return __jsx("div", {
      key: doggo.id,
      className: "jsx-730552194" + " " + "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 4
      }
    }, __jsx("img", {
      src: doggo['photos'][0] && doggo['photos'][0]['medium'] ? doggo['photos'][0]['medium'] : '/cheyenne_hero.jpg',
      className: "jsx-730552194" + " " + "dog-img-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 10
      }
    }), __jsx("h2", {
      className: "jsx-730552194" + " " + "badge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }, doggo.name), __jsx("div", {
      className: "jsx-730552194" + " " + "dog-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    }, doggo.breeds.primary), __jsx("p", {
      className: "jsx-730552194" + " " + "body-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 12
      }
    }, doggo.description)), __jsx("div", {
      className: "jsx-730552194" + " " + "dog-data",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: "jsx-730552194" + " " + "data-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }
    }, doggo.size), __jsx("img", {
      src: "".concat(doggo.size, ".png"),
      className: "jsx-730552194" + " " + "paws",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }
    })), __jsx("div", {
      className: "jsx-730552194" + " " + "data-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    }, "Age"), __jsx("p", {
      className: "jsx-730552194" + " " + "results-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }
    }, doggo.age)), __jsx("div", {
      className: "jsx-730552194",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 14
      }
    }, __jsx("p", {
      className: "jsx-730552194" + " " + "italic-text label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }
    }, "Gender"), __jsx("p", {
      className: "jsx-730552194" + " " + "results-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 16
      }
    }, doggo.gender === 'Male' ? 'Good Boy' : 'Good Girl'), __jsx("img", {
      src: "".concat(doggo.gender, ".png"),
      className: "jsx-730552194" + " " + "gender",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 16
      }
    }))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "730552194",
    __self: this
  }, ".cards{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px 82px 0px 68px;--primary-color:#4ABDAC;--primary-hover:#2F8377;--light-color:#ffffff;--light-hover:#E1E8F0;--dark-color:#313D4B;--primary-font:'Open Sans Condensed',sans-serif;--styled-font:'Shadows Into Light',cursive;}.card{width:250px;height:400px;margin:20px 28px 40px 0px;background-color:var(--light-color);box-shadow:-10px 0px var(--primary-color),0px -10px var(--primary-color),-10px -10px var(--primary-color);border:1px solid var(--dark-color);border-bottom:1px solid var(--primary-color);border-right:1px solid var(--primary-color);border-top:1px solid var(--light-color);border-left:1px solid var(--light-color);}.dog-img-card{margin-bottom:-20px;height:200px;width:250px;object-fit:cover;}.badge{background-color:var(--primary-color);color:var(--light-color);font-family:var(--styled-font);font-size:18px;padding:0px 30px;margin:0px 0px 0px -5px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.dog-info{padding:0px 10px 0px 10px;}.dog-data{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px;margin:20px 0px 0px 0px;}.data-section{border-right:1px solid #d5d5d5;padding-right:15px;}.italic-text{font-family:var(--primary-font);font-size:14px;font-weight:300;font-style:italic;color:var(--dark-color);}.label{margin-top:0px;}.body-text{font-family:var(--primary-font);font-weight:300;font-size:14px;color:var(--dark-color);}.results-text{font-family:var(--primary-font);color:var(--primary-color);font-size:14px;display:inline;}.gender{display:inline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxpc29uLm1henpldHRpL0RvY3VtZW50cy9uZXh0LWRvZ2dvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDMkIsQUFHaUIsQUFjRCxBQVlRLEFBTWtCLEFBU1osQUFHYixBQU9rQixBQUlDLEFBT2pCLEFBR2lCLEFBTUEsQUFNakIsWUE5REYsR0FnRGQsQUFlQSxLQW5EYyxLQVhhLENBMEIzQixLQVVvQixDQUlKLEFBVUMsQUFNVyxDQTVDZixLQUthLE9BSlIsRUE0QkQsQ0FVRCxFQWRoQixDQXBDcUMsUUF3RHJCLEdBM0NoQixDQUlnQyxBQXdCYixBQVVNLFdBbkVMLEFBNENBLEFBNkJKLE9BZlMsTUF6Q29GLEFBbUQ3RyxFQU1BLEtBeENnQixXQXlCaEIsSUF4QmtCLGlCQUNPLGlCQW5DVCxBQTRDYyxPQVJULDJDQW5CZSxPQWhCTiw0QkFpQmdCLHdCQW1COUMsY0FRYSxPQTFCZ0MsS0EyQnBCLHdCQUN6QixlQTNCeUMsTUFsQmQsMEJBQ0YsUUFrQmlCLGdCQWpCakIsd0JBQ0YsQ0FpQnZCLHFCQWhCdUIsc0JBQ0QscUJBQzRCLGdEQUNMLDJDQUM3QyIsImZpbGUiOiIvVXNlcnMvYWxsaXNvbi5tYXp6ZXR0aS9Eb2N1bWVudHMvbmV4dC1kb2dnby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNvbnN0IGtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XG5jb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5TRUNSRVQ7XG4vLyBkb2cgZmlsdGVyc1xuY29uc3QgdHlwZSA9ICdkb2cnO1xuY29uc3Qgc3RhdHVzID0gJ2Fkb3B0YWJsZSc7XG4vLyB0b2tlbiB2YXJzXG52YXIgdG9rZW4sIHRva2VuVHlwZSwgZXhwaXJlcztcblxuLy9yZW5kZXJzXG5mdW5jdGlvbiBJbmRleCh7IGRvZ2dvcyB9KSB7XG5cdHJldHVybiAoXG5cdDxMYXlvdXQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxuXHRcdFx0e2RvZ2dvcy5tYXAoZG9nZ28gPT4gKFx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtkb2dnby5pZH0+XHRcblx0XHQgICAgICBcdDxpbWcgc3JjPXtkb2dnb1sncGhvdG9zJ11bMF0gJiYgZG9nZ29bJ3Bob3RvcyddWzBdWydtZWRpdW0nXSA/IGRvZ2dvWydwaG90b3MnXVswXVsnbWVkaXVtJ10gOiAnL2NoZXllbm5lX2hlcm8uanBnJ30gY2xhc3NOYW1lPVwiZG9nLWltZy1jYXJkXCI+PC9pbWc+XHRcblx0XHQgICAgICBcdDxoMiBjbGFzc05hbWU9XCJiYWRnZVwiPntkb2dnby5uYW1lfTwvaDI+XHRcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZG9nLWluZm9cIj5cdFxuXHRcdCAgICAgICAgXHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dFwiPntkb2dnby5icmVlZHMucHJpbWFyeX08L3A+XHRcblx0XHQgICAgICAgIFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+e2RvZ2dvLmRlc2NyaXB0aW9ufTwvcD5cdFxuXHRcdCAgICAgIFx0PC9kaXY+XHRcblx0XHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZG9nLWRhdGFcIj5cdFxuXHRcdCAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWN0aW9uXCI+XHRcblx0XHQgICAgICAgICAgICBcdDxwIGNsYXNzTmFtZT1cIml0YWxpYy10ZXh0IGxhYmVsXCI+e2RvZ2dvLnNpemV9PC9wPlx0XG5cdFx0ICAgICAgICAgICAgXHQ8aW1nIHNyYz17YCR7ZG9nZ28uc2l6ZX0ucG5nYH0gY2xhc3NOYW1lPVwicGF3c1wiPjwvaW1nPlx0XG5cdFx0ICAgICAgICAgIFx0PC9kaXY+XHRcblx0XHQgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEtc2VjdGlvblwiPlx0XG5cdFx0ICAgICAgICAgICAgXHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPkFnZTwvcD5cdFxuXHRcdCAgICAgICAgICAgIFx0PHAgY2xhc3NOYW1lPVwicmVzdWx0cy10ZXh0XCI+e2RvZ2dvLmFnZX08L3A+XHRcblx0XHQgICAgICAgICAgXHQ8L2Rpdj4gICAgICAgICAgXHRcblx0XHQgICAgICAgICAgXHQ8ZGl2Plx0XG5cdFx0ICAgICAgICAgICAgXHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPkdlbmRlcjwvcD5cdFxuXHRcdCAgICAgICAgICAgIFx0PHAgY2xhc3NOYW1lPVwicmVzdWx0cy10ZXh0XCI+e2RvZ2dvLmdlbmRlciA9PT0gJ01hbGUnID8gJ0dvb2QgQm95JyA6ICdHb29kIEdpcmwnIH08L3A+XHRcblx0XHQgICAgICAgICAgICBcdDxpbWcgc3JjPXtgJHtkb2dnby5nZW5kZXJ9LnBuZ2B9IGNsYXNzTmFtZT1cImdlbmRlclwiPjwvaW1nPlx0XG5cdFx0ICAgICAgICAgIFx0PC9kaXY+XHRcblx0XHQgICAgICAgXHQ8L2Rpdj5cdFxuXHQgICAgICAgXHQ8L2Rpdj5cdFxuXHQgICAgICAgXHQpKX1cbiAgICAgICBcdDwvZGl2PlxuICAgICAgIFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHQuY2FyZHMge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdHBhZGRpbmc6IDBweCA4MnB4IDBweCA2OHB4O1xuXHRcdFx0LS1wcmltYXJ5LWNvbG9yOiAjNEFCREFDO1xuXHRcdFx0LS1wcmltYXJ5LWhvdmVyOiAjMkY4Mzc3O1xuXHRcdFx0LS1saWdodC1jb2xvcjogI2ZmZmZmZjtcblx0XHRcdC0tbGlnaHQtaG92ZXI6ICNFMUU4RjA7XG5cdFx0XHQtLWRhcmstY29sb3I6ICMzMTNENEI7XG5cdFx0XHQtLXByaW1hcnktZm9udDogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0LS1zdHlsZWQtZm9udDogJ1NoYWRvd3MgSW50byBMaWdodCcsIGN1cnNpdmU7XHRcblx0XHR9XG5cdFx0LmNhcmQge1xuXHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRcdG1hcmdpbjogMjBweCAyOHB4IDQwcHggMHB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuXHRcdFx0Ym94LXNoYWRvdzogLTEwcHggMHB4IHZhcigtLXByaW1hcnktY29sb3IpLCAwcHggLTEwcHggdmFyKC0tcHJpbWFyeS1jb2xvciksIC0xMHB4IC0xMHB4IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1jb2xvcik7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHRcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcblx0XHRcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xuXHRcdH1cblx0XHQuZG9nLWltZy1jYXJkIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IC0yMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdH1cblx0XHQuYmFkZ2Uge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXN0eWxlZC1mb250KTtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdHBhZGRpbmc6IDBweCAzMHB4O1xuXHRcdFx0bWFyZ2luOiAwcHggMHB4IDBweCAtNXB4O1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0fVxuXHRcdC5kb2ctaW5mbyB7XG5cdFx0XHRwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcblx0XHR9XG5cdFx0LmRvZy1kYXRhIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG5cdFx0fVxuXHRcdC5kYXRhLXNlY3Rpb24ge1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q1ZDVkNTtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XG5cdFx0fVxuXHRcdC5pdGFsaWMtdGV4dCB7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdFx0XHRjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG5cdFx0fVxuXHRcdC5sYWJlbCB7XG5cdFx0XHRtYXJnaW4tdG9wOiAwcHg7XG5cdFx0fVxuXHRcdC5ib2R5LXRleHQge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6IHZhcigtLWRhcmstY29sb3IpOztcblx0XHR9XG5cdFx0LnJlc3VsdHMtdGV4dCB7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcblx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHR9XG5cdFx0LmdlbmRlciB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0fVxuXHRcdGB9PC9zdHlsZT5cbiAgXHQ8L0xheW91dD5cblx0KVxufVxudmFyIGdldE9BdXRoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9hcGkucGV0ZmluZGVyLmNvbS92Mi9vYXV0aDIvdG9rZW4nLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBib2R5OiAnZ3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMmY2xpZW50X2lkPScgKyBrZXkgKyAnJmNsaWVudF9zZWNyZXQ9JyArIHNlY3JldCxcbiAgaGVhZGVyczoge1xuXHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcblx0fVxuICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRjb25zb2xlLmxvZygndG9rZW4nLCBkYXRhKTtcblx0dG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcblx0dG9rZW5UeXBlID0gZGF0YS50b2tlbl90eXBlO1xuXHRleHBpcmVzID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoZGF0YS5leHBpcmVzX2luICogMTAwMCk7XG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXHRjb25zb2xlLmxvZygnc29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nLCBlcnIpO1xuICB9KTtcbn07ICBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBnZXRBdXRoID0gYXdhaXQgZ2V0T0F1dGgoKTtcblx0Y29uc3QgZ2V0RG9nZ29zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnBldGZpbmRlci5jb20vdjIvYW5pbWFscz8nICsgJ3R5cGU9JyArIHR5cGUgKyAnJnN0YXR1cz0nICsgc3RhdHVzLCB7XG5cdFx0aGVhZGVyczoge1xuXHQgIFx0J0F1dGhvcml6YXRpb24nOiB0b2tlblR5cGUgKyAnICcgKyB0b2tlbixcblx0ICBcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuXHRcdH1cblx0fSk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2dnb3MuanNvbigpO1xuXHRjb25zdCBkb2dnb3MgPSBkYXRhLmFuaW1hbHM7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuXHRcdFx0ZG9nZ29zXG5cdFx0fVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/allison.mazzetti/Documents/next-doggo/pages/index.js */"));
}

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d2c24b37949e992f95d4.hot-update.js.map