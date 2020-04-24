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
      src: "/gender-icons/".concat(doggo.gender),
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
  }, ".cards{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px 82px 0px 68px;--primary-color:#4ABDAC;--primary-hover:#2F8377;--light-color:#ffffff;--light-hover:#E1E8F0;--dark-color:#313D4B;--primary-font:'Open Sans Condensed',sans-serif;--styled-font:'Shadows Into Light',cursive;}.card{width:250px;height:400px;margin:20px 28px 40px 0px;background-color:var(--light-color);box-shadow:-10px 0px var(--primary-color),0px -10px var(--primary-color),-10px -10px var(--primary-color);border:1px solid var(--dark-color);border-bottom:1px solid var(--primary-color);border-right:1px solid var(--primary-color);border-top:1px solid var(--light-color);border-left:1px solid var(--light-color);}.dog-img-card{margin-bottom:-20px;height:200px;width:250px;object-fit:cover;}.badge{background-color:var(--primary-color);color:var(--light-color);font-family:var(--styled-font);font-size:18px;padding:0px 30px;margin:0px 0px 0px -5px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.dog-info{padding:0px 10px 0px 10px;}.dog-data{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0px;margin:20px 0px 0px 0px;}.data-section{border-right:1px solid #d5d5d5;padding-right:15px;}.italic-text{font-family:var(--primary-font);font-size:14px;font-weight:300;font-style:italic;color:var(--dark-color);}.label{margin-top:0px;}.body-text{font-family:var(--primary-font);font-weight:300;font-size:14px;color:var(--dark-color);}.results-text{font-family:var(--primary-font);color:var(--primary-color);font-size:14px;display:inline;}.gender{display:inline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxpc29uLm1henpldHRpL0RvY3VtZW50cy9uZXh0LWRvZ2dvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDMkIsQUFHaUIsQUFjRCxBQVlRLEFBTWtCLEFBU1osQUFHYixBQU9rQixBQUlDLEFBT2pCLEFBR2lCLEFBTUEsQUFNakIsWUE5REYsR0FnRGQsQUFlQSxLQW5EYyxLQVhhLENBMEIzQixLQVVvQixDQUlKLEFBVUMsQUFNVyxDQTVDZixLQUthLE9BSlIsRUE0QkQsQ0FVRCxFQWRoQixDQXBDcUMsUUF3RHJCLEdBM0NoQixDQUlnQyxBQXdCYixBQVVNLFdBbkVMLEFBNENBLEFBNkJKLE9BZlMsTUF6Q29GLEFBbUQ3RyxFQU1BLEtBeENnQixXQXlCaEIsSUF4QmtCLGlCQUNPLGlCQW5DVCxBQTRDYyxPQVJULDJDQW5CZSxPQWhCTiw0QkFpQmdCLHdCQW1COUMsY0FRYSxPQTFCZ0MsS0EyQnBCLHdCQUN6QixlQTNCeUMsTUFsQmQsMEJBQ0YsUUFrQmlCLGdCQWpCakIsd0JBQ0YsQ0FpQnZCLHFCQWhCdUIsc0JBQ0QscUJBQzRCLGdEQUNMLDJDQUM3QyIsImZpbGUiOiIvVXNlcnMvYWxsaXNvbi5tYXp6ZXR0aS9Eb2N1bWVudHMvbmV4dC1kb2dnby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBrZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xuY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VDUkVUO1xuLy8gZG9nIGZpbHRlcnNcbmNvbnN0IHR5cGUgPSAnZG9nJztcbmNvbnN0IHN0YXR1cyA9ICdhZG9wdGFibGUnO1xuLy8gdG9rZW4gdmFyc1xudmFyIHRva2VuLCB0b2tlblR5cGUsIGV4cGlyZXM7XG4vL3JlbmRlcnNcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cblx0XHRcdHtwcm9wcy5kb2dnb3MubWFwKGRvZ2dvID0+IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17ZG9nZ28uaWR9PlxuXHQgICAgICBcdFx0PGltZyBzcmM9e2RvZ2dvWydwaG90b3MnXVswXSAmJiBkb2dnb1sncGhvdG9zJ11bMF1bJ21lZGl1bSddID8gZG9nZ29bJ3Bob3RvcyddWzBdWydtZWRpdW0nXSA6ICcvY2hleWVubmVfaGVyby5qcGcnfSBjbGFzc05hbWU9XCJkb2ctaW1nLWNhcmRcIj48L2ltZz5cblx0ICAgICAgXHRcdDxoMiBjbGFzc05hbWU9XCJiYWRnZVwiPntkb2dnby5uYW1lfTwvaDI+XG5cdCAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvZy1pbmZvXCI+XG5cdCAgICAgICAgXHRcdDxwIGNsYXNzTmFtZT1cIml0YWxpYy10ZXh0XCI+e2RvZ2dvLmJyZWVkcy5wcmltYXJ5fTwvcD5cblx0ICAgICAgICBcdFx0PHAgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+e2RvZ2dvLmRlc2NyaXB0aW9ufTwvcD5cblx0ICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2ctZGF0YVwiPlxuXHQgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWN0aW9uXCI+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPntkb2dnby5zaXplfTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxpbWcgc3JjPXtgL3Bhdy1zaXplLWljb25zLyR7ZG9nZ28uc2l6ZX0ucG5nYH0gY2xhc3NOYW1lPVwicGF3c1wiPjwvaW1nPlxuXHQgICAgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1zZWN0aW9uXCI+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJpdGFsaWMtdGV4dCBsYWJlbFwiPkFnZTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxwIGNsYXNzTmFtZT1cInJlc3VsdHMtdGV4dFwiPntkb2dnby5hZ2V9PC9wPlxuXHQgICAgICAgICAgXHRcdDwvZGl2PiAgICAgICAgICBcblx0ICAgICAgICAgIFx0XHQ8ZGl2PlxuXHQgICAgICAgICAgICBcdFx0PHAgY2xhc3NOYW1lPVwiaXRhbGljLXRleHQgbGFiZWxcIj5HZW5kZXI8L3A+XG5cdCAgICAgICAgICAgIFx0XHQ8cCBjbGFzc05hbWU9XCJyZXN1bHRzLXRleHRcIj57ZG9nZ28uZ2VuZGVyID09PSAnTWFsZScgPyAnR29vZCBCb3knIDogJ0dvb2QgR2lybCcgfTwvcD5cblx0ICAgICAgICAgICAgXHRcdDxpbWcgc3JjPXtgL2dlbmRlci1pY29ucy8ke2RvZ2dvLmdlbmRlcn1gfSBjbGFzc05hbWU9XCJnZW5kZXJcIj48L2ltZz5cblx0ICAgICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0PC9kaXY+XG5cdCAgICAgICBcdCkpfVxuICAgICAgIFx0PC9kaXY+XG4gICAgICAgXHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdC5jYXJkcyB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0cGFkZGluZzogMHB4IDgycHggMHB4IDY4cHg7XG5cdFx0XHQtLXByaW1hcnktY29sb3I6ICM0QUJEQUM7XG5cdFx0XHQtLXByaW1hcnktaG92ZXI6ICMyRjgzNzc7XG5cdFx0XHQtLWxpZ2h0LWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0LS1saWdodC1ob3ZlcjogI0UxRThGMDtcblx0XHRcdC0tZGFyay1jb2xvcjogIzMxM0Q0Qjtcblx0XHRcdC0tcHJpbWFyeS1mb250OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5cdFx0XHQtLXN0eWxlZC1mb250OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcdFxuXHRcdH1cblx0XHQuY2FyZCB7XG5cdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0bWFyZ2luOiAyMHB4IDI4cHggNDBweCAwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0XHRib3gtc2hhZG93OiAtMTBweCAwcHggdmFyKC0tcHJpbWFyeS1jb2xvciksIDBweCAtMTBweCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgLTEwcHggLTEwcHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcdFxuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xuXHRcdFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0fVxuXHRcdC5kb2ctaW1nLWNhcmQge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogLTIwcHg7XG5cdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHRcdC5iYWRnZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tc3R5bGVkLWZvbnQpO1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0cGFkZGluZzogMHB4IDMwcHg7XG5cdFx0XHRtYXJnaW46IDBweCAwcHggMHB4IC01cHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHR9XG5cdFx0LmRvZy1pbmZvIHtcblx0XHRcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuXHRcdH1cblx0XHQuZG9nLWRhdGEge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcblx0XHR9XG5cdFx0LmRhdGEtc2VjdGlvbiB7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDVkNWQ1O1xuXHRcdFx0cGFkZGluZy1yaWdodDogMTVweDtcblx0XHR9XG5cdFx0Lml0YWxpYy10ZXh0IHtcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0XHRcdGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcblx0XHR9XG5cdFx0LmxhYmVsIHtcblx0XHRcdG1hcmdpbi10b3A6IDBweDtcblx0XHR9XG5cdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7O1xuXHRcdH1cblx0XHQucmVzdWx0cy10ZXh0IHtcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuXHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdH1cblx0XHQuZ2VuZGVyIHtcblx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHR9XG5cdFx0YH08L3N0eWxlPlxuICBcdDwvTGF5b3V0PlxuKTtcbnZhciBnZXRPQXV0aCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vYXBpLnBldGZpbmRlci5jb20vdjIvb2F1dGgyL3Rva2VuJywge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgYm9keTogJ2dyYW50X3R5cGU9Y2xpZW50X2NyZWRlbnRpYWxzJmNsaWVudF9pZD0nICsga2V5ICsgJyZjbGllbnRfc2VjcmV0PScgKyBzZWNyZXQsXG4gIGhlYWRlcnM6IHtcblx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdH1cbiAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcblx0Y29uc29sZS5sb2coJ3Rva2VuJywgZGF0YSk7XG5cdHRva2VuID0gZGF0YS5hY2Nlc3NfdG9rZW47XG5cdHRva2VuVHlwZSA9IGRhdGEudG9rZW5fdHlwZTtcblx0ZXhwaXJlcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKGRhdGEuZXhwaXJlc19pbiAqIDEwMDApO1xuICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcblx0Y29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nLi4uJywgZXJyKTtcbiAgfSk7XG59OyAgXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRjb25zdCBnZXRBdXRoID0gYXdhaXQgZ2V0T0F1dGgoKTtcblx0Y29uc3QgZ2V0RG9nZ29zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnBldGZpbmRlci5jb20vdjIvYW5pbWFscz8nICsgJ3R5cGU9JyArIHR5cGUgKyAnJnN0YXR1cz0nICsgc3RhdHVzLCB7XG5cdFx0aGVhZGVyczoge1xuXHQgIFx0J0F1dGhvcml6YXRpb24nOiB0b2tlblR5cGUgKyAnICcgKyB0b2tlbixcblx0ICBcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuXHRcdH1cblx0fSk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2dnb3MuanNvbigpO1xuXHRjb25zdCBkb2dnb3MgPSBkYXRhLmFuaW1hbHM7XG5cbiAgcmV0dXJuIHtcbiAgICBkb2dnb3M6IGRvZ2dvc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/allison.mazzetti/Documents/next-doggo/pages/index.js */"));
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
//# sourceMappingURL=index.js.9692fd9f4054d876dd2e.hot-update.js.map