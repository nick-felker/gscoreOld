"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/ui/header/index.tsx":
/*!*********************************!*\
  !*** ./src/ui/header/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ \"./src/index.ts\");\n/* harmony import */ var _userHamburgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userHamburgerMenu */ \"./src/ui/userHamburgerMenu/index.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    color: white;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    @media(max-width: 720px){\\n        width: 140px;\\n    }\\n    @media(max-width: 500px){\\n        width: 100px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    padding: 40px 91px 40px 86px;\\n    background-color: #181818;\\n    \\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    @media(max-width: 720px){\\n        padding: 40px 50px 40px 50px;\\n    }\\n    @media(max-width: 500px){\\n        padding: 30px 40px 40px 35px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth), windowWidth = ref[0], setWindowWidth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWindowWidth(window.innerWidth);\n    }, [\n        window.innerWidth\n    ]);\n    var userBlockFlag = (0,___WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(___WEBPACK_IMPORTED_MODULE_2__.selectAuthFlag);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExternalWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n                    src: \"./images/logo.svg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\header\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                userBlockFlag === true ? windowWidth <= 600 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userHamburgerMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\header\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 64\n                }, this) : null : null,\n                windowWidth <= 600 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userHamburgerMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\header\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 40\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\header\\\\index.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"KDmd5YhjDwFD4FPUiAXJvZBggK0=\", false, function() {\n    return [\n        ___WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Header;\nvar Tekst = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p(_templateObject());\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject1());\n_c1 = Logo;\nvar ExternalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = ExternalWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Logo\");\n$RefreshReg$(_c2, \"ExternalWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvaGVhZGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNMO0FBQ2lCO0FBQ0g7O0FBR3JELFNBQVNNLE1BQU0sR0FBRTs7SUFDYixJQUFzQ04sR0FBbUMsR0FBbkNBLCtDQUFRLENBQVNPLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLEVBUDdFLFdBT3NCLEdBQW9CUixHQUFtQyxHQUF2RCxFQVB0QixjQU9zQyxHQUFJQSxHQUFtQyxHQUF2QztJQUNsQ0MsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZTLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztLQUNyQyxFQUFFO1FBQUNELE1BQU0sQ0FBQ0MsVUFBVTtLQUFDLENBQUM7SUFFdkIsSUFBTUcsYUFBYSxHQUFHUixpREFBYyxDQUFDQyw2Q0FBYyxDQUFDO0lBRXBELHFCQUNJO2tCQUNJLDRFQUFDUSxlQUFlOzs4QkFDWiw4REFBQ0MsSUFBSTtvQkFBQ0MsR0FBRyxFQUFDLG1CQUFtQjs7Ozs7d0JBQUU7Z0JBQzlCSCxhQUFhLEtBQUssSUFBSSxHQUFHRixXQUFXLElBQUksR0FBRyxpQkFBRyw4REFBQ0osMERBQWlCOzs7O3dCQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7Z0JBQ2hGSSxXQUFXLElBQUksR0FBRyxpQkFBSSw4REFBQ0osMERBQWlCOzs7O3dCQUFFLEdBQUcsSUFBSTs7Ozs7O2dCQUNwQztxQkFDbkIsQ0FDTjtDQUNKO0dBakJRQyxNQUFNOztRQU1XSCw2Q0FBYzs7O0FBTi9CRyxLQUFBQSxNQUFNO0FBbUJmLElBQU1TLEtBQUssR0FBR2IsMkRBQVEsbUJBRXJCO0FBR0QsSUFBTVcsSUFBSSxHQUFHWCw2REFBVSxvQkFPdEI7QUFQS1csTUFBQUEsSUFBSTtBQVNWLElBQU1ELGVBQWUsR0FBR1YsNkRBQVUsb0JBYWpDO0FBYktVLE1BQUFBLGVBQWU7QUFrQnJCLCtEQUFlTixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2hlYWRlci9pbmRleC50c3g/YjJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCBzZWxlY3RBdXRoRmxhZyB9IGZyb20gJy4uLy4uLyc7XHJcbmltcG9ydCBVc2VySGFtYnVyZ2VyTWVudSBmcm9tIFwiLi4vdXNlckhhbWJ1cmdlck1lbnVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKXtcclxuICAgIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9LCBbd2luZG93LmlubmVyV2lkdGhdKVxyXG5cclxuICAgIGNvbnN0IHVzZXJCbG9ja0ZsYWcgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RBdXRoRmxhZyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxFeHRlcm5hbFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8TG9nbyBzcmM9XCIuL2ltYWdlcy9sb2dvLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIHt1c2VyQmxvY2tGbGFnID09PSB0cnVlID8gd2luZG93V2lkdGggPD0gNjAwID8gPFVzZXJIYW1idXJnZXJNZW51Lz4gOiBudWxsIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHt3aW5kb3dXaWR0aCA8PSA2MDAgPyAgPFVzZXJIYW1idXJnZXJNZW51Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L0V4dGVybmFsV3JhcHBlcj4gIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBUZWtzdCA9IHN0eWxlZC5wYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5gXHJcblxyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3MjBweCl7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgRXh0ZXJuYWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDQwcHggOTFweCA0MHB4IDg2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KXtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDUwcHggNDBweCA1MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNDBweCA0MHB4IDM1cHg7XHJcbiAgICB9XHJcbmBcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJ1c2VBcHBTZWxlY3RvciIsInNlbGVjdEF1dGhGbGFnIiwiVXNlckhhbWJ1cmdlck1lbnUiLCJIZWFkZXIiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsInVzZXJCbG9ja0ZsYWciLCJFeHRlcm5hbFdyYXBwZXIiLCJMb2dvIiwic3JjIiwiVGVrc3QiLCJwIiwiaW1nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/header/index.tsx\n");

/***/ })

});