"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./src/ui/userHamburgerMenu/index.tsx":
/*!********************************************!*\
  !*** ./src/ui/userHamburgerMenu/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ \"./src/index.ts\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    :hover{\\n        opacity: 0.5;\\n        transition: 0.5s;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    position: fixed;\\n    z-index: 2;\\n    left: 0px;\\n    top: 0px;\\n    width: 100vw;\\n    height: 100vh;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-size: 20px;\\n    \\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin-left: 10px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    font-size: 20px;\\n    :hover{\\n        opacity: 0.5;\\n    }\\n    margin-right: 10px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-family: THICCCBOI;\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    cursor: pointer;\\n    padding: 10px 15px;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserHamburgerMenu(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), additionalMenuFlag = ref[0], setAdditionalMenuFlag = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth), windowWidth = ref1[0], setWindowWidth = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWindowWidth(window.innerWidth);\n    }, [\n        window.innerWidth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            windowWidth > 600 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExternalWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySubs, {\n                        children: \"My subscriptions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserHamburger, {\n                        onClick: function() {\n                            return setAdditionalMenuFlag(!additionalMenuFlag);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserName, {\n                                children: \"Nick\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowDown, {\n                                src: \"./images/ShevronDown.svg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setAdditionalMenuFlag(!additionalMenuFlag);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HamburgerIcon, {\n                    src: \"./images/Hamburger.svg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            additionalMenuFlag === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overlay, {\n                onClick: function() {\n                    return setAdditionalMenuFlag(!additionalMenuFlag);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 44\n            }, this) : null,\n            additionalMenuFlag === false ? null : windowWidth <= 600 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.MobileHamburgerMenu, {}, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 73\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.HamburgerAdditionalMenu, {}, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 98\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(UserHamburgerMenu, \"SN1hNj18Gi70/RS1XkG8ENQ0br4=\");\n_c = UserHamburgerMenu;\nvar HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject());\n_c1 = HamburgerIcon;\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c2 = Overlay;\nvar UserName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject2());\n_c3 = UserName;\nvar ArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject3());\n_c4 = ArrowDown;\nvar MySubs = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject4());\n_c5 = MySubs;\nvar ExternalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c6 = ExternalWrapper;\nvar UserHamburger = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n_c7 = UserHamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserHamburgerMenu);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"UserHamburgerMenu\");\n$RefreshReg$(_c1, \"HamburgerIcon\");\n$RefreshReg$(_c2, \"Overlay\");\n$RefreshReg$(_c3, \"UserName\");\n$RefreshReg$(_c4, \"ArrowDown\");\n$RefreshReg$(_c5, \"MySubs\");\n$RefreshReg$(_c6, \"ExternalWrapper\");\n$RefreshReg$(_c7, \"UserHamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvdXNlckhhbWJ1cmdlck1lbnUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYTtBQUk3Qjs7QUFTdkIsU0FBU0ssaUJBQWlCLENBQUNDLEtBQVcsRUFBQzs7SUFFbkMsSUFBb0RMLEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFVLEtBQUssQ0FBQyxFQWhCaEYsa0JBZ0I2QixHQUEyQkEsR0FBd0IsR0FBbkQsRUFoQjdCLHFCQWdCb0QsR0FBSUEsR0FBd0IsR0FBNUI7SUFDaEQsSUFBc0NBLElBQW1DLEdBQW5DQSwrQ0FBUSxDQUFTUSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxFQWpCN0UsV0FpQnNCLEdBQW9CVCxJQUFtQyxHQUF2RCxFQWpCdEIsY0FpQnNDLEdBQUlBLElBQW1DLEdBQXZDO0lBQ2xDQyxnREFBUyxDQUFDLFdBQUk7UUFDVlUsY0FBYyxDQUFDSCxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDLEVBQUU7UUFBQ0QsTUFBTSxDQUFDQyxVQUFVO0tBQUMsQ0FBQztJQUV2QixxQkFDSTs7WUFDS0MsV0FBVyxHQUFHLEdBQUcsaUJBQ2QsOERBQUNFLGVBQWU7O2tDQUNaLDhEQUFDQyxNQUFNO2tDQUFDLGtCQUVSOzs7Ozs0QkFBUztrQ0FDVCw4REFBQ0MsYUFBYTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFJUixxQkFBcUIsQ0FBQyxDQUFDRCxrQkFBa0IsQ0FBQzt5QkFBQTs7MENBQ2xFLDhEQUFDVSxRQUFROzBDQUFDLE1BRVY7Ozs7O29DQUFXOzBDQUNYLDhEQUFDQyxTQUFTO2dDQUFDQyxHQUFHLEVBQUMsMEJBQTBCOzs7OztvQ0FBRTs7Ozs7OzRCQUMvQjs7Ozs7O29CQUlGLGlCQUV0Qiw4REFBQ0MsS0FBRztnQkFBQ0osT0FBTyxFQUFFOzJCQUFJUixxQkFBcUIsQ0FBQyxDQUFDRCxrQkFBa0IsQ0FBQztpQkFBQTswQkFDNUQsNEVBQUNjLGFBQWE7b0JBQUNGLEdBQUcsRUFBQyx3QkFBd0I7Ozs7O3dCQUFFOzs7OztvQkFDdkM7WUFFTFosa0JBQWtCLEtBQUssSUFBSSxpQkFBRyw4REFBQ2UsT0FBTztnQkFBQ04sT0FBTyxFQUFFOzJCQUFJUixxQkFBcUIsQ0FBQyxDQUFDRCxrQkFBa0IsQ0FBQztpQkFBQTs7Ozs7b0JBQUcsR0FBRyxJQUFJO1lBRXhHQSxrQkFBa0IsS0FBSyxLQUFLLEdBQUcsSUFBSSxHQUFHSSxXQUFXLElBQUksR0FBRyxpQkFBRyw4REFBQ1Asa0RBQW1COzs7O29CQUFFLGlCQUFHLDhEQUFDRCxzREFBdUI7Ozs7b0JBQUU7O29CQUVoSCxDQUNOO0NBQ0o7R0FwQ1FFLGlCQUFpQjtBQUFqQkEsS0FBQUEsaUJBQWlCO0FBc0MxQixJQUFNZ0IsYUFBYSxHQUFHckIsNkRBQVUsbUJBTS9CO0FBTktxQixNQUFBQSxhQUFhO0FBU25CLElBQU1DLE9BQU8sR0FBR3RCLDZEQUFVLG9CQVF6QjtBQVJLc0IsTUFBQUEsT0FBTztBQVdiLElBQU1MLFFBQVEsR0FBR2pCLDJEQUFRLG9CQUd4QjtBQUhLaUIsTUFBQUEsUUFBUTtBQUtkLElBQU1DLFNBQVMsR0FBR2xCLDZEQUFVLG9CQUUzQjtBQUZLa0IsTUFBQUEsU0FBUztBQUdmLElBQU1KLE1BQU0sR0FBR2QsMkRBQVEsb0JBT3RCO0FBUEtjLE1BQUFBLE1BQU07QUFRWixJQUFNRCxlQUFlLEdBQUdiLDZEQUFVLG9CQUtqQztBQUxLYSxNQUFBQSxlQUFlO0FBTXJCLElBQU1FLGFBQWEsR0FBR2YsNkRBQVUsb0JBSy9CO0FBTEtlLE1BQUFBLGFBQWE7QUFRbkIsK0RBQWVWLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS91c2VySGFtYnVyZ2VyTWVudS9pbmRleC50c3g/MzA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyAgICBIYW1idXJnZXJBZGRpdGlvbmFsTWVudSxcclxuICAgICAgICAgICAgTW9iaWxlSGFtYnVyZ2VyTWVudSxcclxuICAgICAgICB9IGZyb20gJy4uLy4uLydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVXNlckhhbWJ1cmdlck1lbnUocHJvcHM6UHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IFthZGRpdGlvbmFsTWVudUZsYWcsIHNldEFkZGl0aW9uYWxNZW51RmxhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4od2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfSwgW3dpbmRvdy5pbm5lcldpZHRoXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3dpbmRvd1dpZHRoID4gNjAwID8gXHJcbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeVN1YnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE15IHN1YnNjcmlwdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L015U3Vicz5cclxuICAgICAgICAgICAgICAgICAgICA8VXNlckhhbWJ1cmdlciBvbkNsaWNrPXsoKT0+c2V0QWRkaXRpb25hbE1lbnVGbGFnKCFhZGRpdGlvbmFsTWVudUZsYWcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJOYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmlja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1VzZXJOYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEb3duIHNyYz1cIi4vaW1hZ2VzL1NoZXZyb25Eb3duLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1VzZXJIYW1idXJnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvRXh0ZXJuYWxXcmFwcGVyPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PnNldEFkZGl0aW9uYWxNZW51RmxhZyghYWRkaXRpb25hbE1lbnVGbGFnKX0+XHJcbiAgICAgICAgICAgIDxIYW1idXJnZXJJY29uIHNyYz1cIi4vaW1hZ2VzL0hhbWJ1cmdlci5zdmdcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHthZGRpdGlvbmFsTWVudUZsYWcgPT09IHRydWUgPyA8T3ZlcmxheSBvbkNsaWNrPXsoKT0+c2V0QWRkaXRpb25hbE1lbnVGbGFnKCFhZGRpdGlvbmFsTWVudUZsYWcpfS8+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHthZGRpdGlvbmFsTWVudUZsYWcgPT09IGZhbHNlID8gbnVsbCA6IHdpbmRvd1dpZHRoIDw9IDYwMCA/IDxNb2JpbGVIYW1idXJnZXJNZW51Lz4gOiA8SGFtYnVyZ2VyQWRkaXRpb25hbE1lbnUvPiB9XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBIYW1idXJnZXJJY29uID0gc3R5bGVkLmltZ2BcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IFVzZXJOYW1lID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxuYFxyXG5cclxuY29uc3QgQXJyb3dEb3duID0gc3R5bGVkLmltZ2BcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5gXHJcbmNvbnN0IE15U3VicyA9IHN0eWxlZC5hYFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuYFxyXG5jb25zdCBFeHRlcm5hbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1mYW1pbHk6IFRISUNDQ0JPSTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFVzZXJIYW1idXJnZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySGFtYnVyZ2VyTWVudTsiXSwibmFtZXMiOlsic3R5bGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIYW1idXJnZXJBZGRpdGlvbmFsTWVudSIsIk1vYmlsZUhhbWJ1cmdlck1lbnUiLCJVc2VySGFtYnVyZ2VyTWVudSIsInByb3BzIiwiYWRkaXRpb25hbE1lbnVGbGFnIiwic2V0QWRkaXRpb25hbE1lbnVGbGFnIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJFeHRlcm5hbFdyYXBwZXIiLCJNeVN1YnMiLCJVc2VySGFtYnVyZ2VyIiwib25DbGljayIsIlVzZXJOYW1lIiwiQXJyb3dEb3duIiwic3JjIiwiZGl2IiwiSGFtYnVyZ2VySWNvbiIsIk92ZXJsYXkiLCJpbWciLCJwIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/userHamburgerMenu/index.tsx\n");

/***/ })

});