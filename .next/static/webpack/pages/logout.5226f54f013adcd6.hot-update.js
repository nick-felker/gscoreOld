"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/logout",{

/***/ "./src/ui/header/index.tsx":
/*!*********************************!*\
  !*** ./src/ui/header/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ \"./src/index.ts\");\n/* harmony import */ var _userHamburgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userHamburgerMenu */ \"./src/ui/userHamburgerMenu/index.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    color: white;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    @media(max-width: 720px){\\n        width: 140px;\\n    }\\n    @media(max-width: 500px){\\n        width: 100px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    padding: 40px 91px 40px 86px;\\n    background-color: #181818;\\n    \\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    @media(max-width: 720px){\\n        padding: 40px 50px 40px 50px;\\n    }\\n    @media(max-width: 500px){\\n        padding: 30px 40px 40px 35px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth), windowWidth = ref[0], setWindowWidth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWindowWidth(window.innerWidth);\n    }, [\n        window.innerWidth\n    ]);\n    var userBlockFlag = (0,___WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(___WEBPACK_IMPORTED_MODULE_2__.selectAuthFlag);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExternalWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n                    src: \"./images/logo.svg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\header\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                userBlockFlag === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userHamburgerMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\header\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 43\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\header\\\\index.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"KDmd5YhjDwFD4FPUiAXJvZBggK0=\", false, function() {\n    return [\n        ___WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Header;\nvar Tekst = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p(_templateObject());\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject1());\n_c1 = Logo;\nvar ExternalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = ExternalWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Logo\");\n$RefreshReg$(_c2, \"ExternalWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvaGVhZGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNMO0FBQzBDO0FBQzVCOztBQUdyRCxTQUFTTSxNQUFNLEdBQUU7O0lBQ2IsSUFBc0NOLEdBQW1DLEdBQW5DQSwrQ0FBUSxDQUFTTyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxFQVA3RSxXQU9zQixHQUFvQlIsR0FBbUMsR0FBdkQsRUFQdEIsY0FPc0MsR0FBSUEsR0FBbUMsR0FBdkM7SUFDbENDLGdEQUFTLENBQUMsV0FBSTtRQUNWUyxjQUFjLENBQUNILE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQUM7S0FDckMsRUFBRTtRQUFDRCxNQUFNLENBQUNDLFVBQVU7S0FBQyxDQUFDO0lBRXZCLElBQU1HLGFBQWEsR0FBR1IsaURBQWMsQ0FBQ0MsNkNBQWMsQ0FBQztJQUVwRCxxQkFDSTtrQkFDSSw0RUFBQ1EsZUFBZTs7OEJBQ1osOERBQUNDLElBQUk7b0JBQUNDLEdBQUcsRUFBQyxtQkFBbUI7Ozs7O3dCQUFFO2dCQUM5QkgsYUFBYSxLQUFLLElBQUksaUJBQUcsOERBQUNOLDBEQUFpQjs7Ozt3QkFBRSxHQUFHLElBQUk7Ozs7OztnQkFFdkM7cUJBQ25CLENBQ047Q0FDSjtHQWpCUUMsTUFBTTs7UUFNV0gsNkNBQWM7OztBQU4vQkcsS0FBQUEsTUFBTTtBQW1CZixJQUFNUyxLQUFLLEdBQUdiLDJEQUFRLG1CQUVyQjtBQUdELElBQU1XLElBQUksR0FBR1gsNkRBQVUsb0JBT3RCO0FBUEtXLE1BQUFBLElBQUk7QUFTVixJQUFNRCxlQUFlLEdBQUdWLDZEQUFVLG9CQWFqQztBQWJLVSxNQUFBQSxlQUFlO0FBa0JyQiwrREFBZU4sTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9oZWFkZXIvaW5kZXgudHN4P2IyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3Rvciwgc2VsZWN0QXV0aEZsYWcsIEhhbWJ1cmdlckFkZGl0aW9uYWxNZW51IH0gZnJvbSAnLi4vLi4vJztcclxuaW1wb3J0IFVzZXJIYW1idXJnZXJNZW51IGZyb20gXCIuLi91c2VySGFtYnVyZ2VyTWVudVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKXtcclxuICAgIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9LCBbd2luZG93LmlubmVyV2lkdGhdKVxyXG5cclxuICAgIGNvbnN0IHVzZXJCbG9ja0ZsYWcgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RBdXRoRmxhZyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxFeHRlcm5hbFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8TG9nbyBzcmM9XCIuL2ltYWdlcy9sb2dvLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIHt1c2VyQmxvY2tGbGFnID09PSB0cnVlID8gPFVzZXJIYW1idXJnZXJNZW51Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRXh0ZXJuYWxXcmFwcGVyPiAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFRla3N0ID0gc3R5bGVkLnBgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbmBcclxuXHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmltZ2BcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KXtcclxuICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBFeHRlcm5hbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogNDBweCA5MXB4IDQwcHggODZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzIwcHgpe1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggNTBweCA0MHB4IDUwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCA0MHB4IDQwcHggMzVweDtcclxuICAgIH1cclxuYFxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlZCIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0QXV0aEZsYWciLCJVc2VySGFtYnVyZ2VyTWVudSIsIkhlYWRlciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwidXNlckJsb2NrRmxhZyIsIkV4dGVybmFsV3JhcHBlciIsIkxvZ28iLCJzcmMiLCJUZWtzdCIsInAiLCJpbWciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/header/index.tsx\n");

/***/ })

});