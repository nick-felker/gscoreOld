"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./src/ui/userHamburgerMenu/index.tsx":
/*!********************************************!*\
  !*** ./src/ui/userHamburgerMenu/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ \"./src/index.ts\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    :hover{\\n        opacity: 0.5;\\n        transition: 0.5s;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    position: fixed;\\n    z-index: 2;\\n    left: 0px;\\n    top: 0px;\\n    width: 100vw;\\n    height: 100vh;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-size: 20px;\\n    \\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin-left: 10px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    font-size: 20px;\\n    :hover{\\n        opacity: 0.5;\\n    }\\n    margin-right: 10px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-family: THICCCBOI;\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    cursor: pointer;\\n    padding: 10px 15px;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserHamburgerMenu(props) {\n    _s();\n    var dispatch = (0,___WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var hamburgerAdditionalMenuFlag = ___WEBPACK_IMPORTED_MODULE_2__.selectHamburgerAdditionalMenuFlag;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth), windowWidth = ref[0], setWindowWidth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWindowWidth(window.innerWidth);\n    }, [\n        window.innerWidth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            windowWidth > 600 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExternalWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySubs, {\n                        children: \"My subscriptions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserHamburger, {\n                        onClick: function() {\n                            return setAdditionalMenuFlag(!additionalMenuFlag);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserName, {\n                                children: \"Nick\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowDown, {\n                                src: \"./images/ShevronDown.svg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setAdditionalMenuFlag(!additionalMenuFlag);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HamburgerIcon, {\n                    src: \"./images/Hamburger.svg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            additionalMenuFlag === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overlay, {\n                onClick: function() {\n                    return setAdditionalMenuFlag(!additionalMenuFlag);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 44\n            }, this) : null,\n            additionalMenuFlag === false ? null : windowWidth <= 600 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.MobileHamburgerMenu, {\n                setAdditionalMenuFlag: function() {\n                    return setAdditionalMenuFlagFunction;\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 73\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.HamburgerAdditionalMenu, {}, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 156\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(UserHamburgerMenu, \"0PneaTAXH4xEsJl67uhieWpXmK0=\", false, function() {\n    return [\n        ___WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = UserHamburgerMenu;\nvar HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject());\n_c1 = HamburgerIcon;\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c2 = Overlay;\nvar UserName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject2());\n_c3 = UserName;\nvar ArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject3());\n_c4 = ArrowDown;\nvar MySubs = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject4());\n_c5 = MySubs;\nvar ExternalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c6 = ExternalWrapper;\nvar UserHamburger = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n_c7 = UserHamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserHamburgerMenu);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"UserHamburgerMenu\");\n$RefreshReg$(_c1, \"HamburgerIcon\");\n$RefreshReg$(_c2, \"Overlay\");\n$RefreshReg$(_c3, \"UserName\");\n$RefreshReg$(_c4, \"ArrowDown\");\n$RefreshReg$(_c5, \"MySubs\");\n$RefreshReg$(_c6, \"ExternalWrapper\");\n$RefreshReg$(_c7, \"UserHamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvdXNlckhhbWJ1cmdlck1lbnUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYTtBQVE3Qjs7QUFTdkIsU0FBU08saUJBQWlCLENBQUNDLEtBQVcsRUFBQzs7SUFDbkMsSUFBTUMsUUFBUSxHQUFHSCxpREFBYyxFQUFFO0lBQ2pDLElBQU1JLDJCQUEyQixHQUFJTCxnRUFBaUM7SUFFdEUsSUFBc0NKLEdBQW1DLEdBQW5DQSwrQ0FBUSxDQUFTVSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxFQXRCN0UsV0FzQnNCLEdBQW9CWCxHQUFtQyxHQUF2RCxFQXRCdEIsY0FzQnNDLEdBQUlBLEdBQW1DLEdBQXZDO0lBQ2xDQyxnREFBUyxDQUFDLFdBQUk7UUFDVlksY0FBYyxDQUFDSCxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDLEVBQUU7UUFBQ0QsTUFBTSxDQUFDQyxVQUFVO0tBQUMsQ0FBQztJQUl2QixxQkFDSTs7WUFDS0MsV0FBVyxHQUFHLEdBQUcsaUJBQ2QsOERBQUNFLGVBQWU7O2tDQUNaLDhEQUFDQyxNQUFNO2tDQUFDLGtCQUVSOzs7Ozs0QkFBUztrQ0FDVCw4REFBQ0MsYUFBYTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFJQyxxQkFBcUIsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQzt5QkFBQTs7MENBQ2xFLDhEQUFDQyxRQUFROzBDQUFDLE1BRVY7Ozs7O29DQUFXOzBDQUNYLDhEQUFDQyxTQUFTO2dDQUFDQyxHQUFHLEVBQUMsMEJBQTBCOzs7OztvQ0FBRTs7Ozs7OzRCQUMvQjs7Ozs7O29CQUlGLGlCQUV0Qiw4REFBQ0MsS0FBRztnQkFBQ04sT0FBTyxFQUFFOzJCQUFJQyxxQkFBcUIsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQztpQkFBQTswQkFDNUQsNEVBQUNLLGFBQWE7b0JBQUNGLEdBQUcsRUFBQyx3QkFBd0I7Ozs7O3dCQUFFOzs7OztvQkFDdkM7WUFFTEgsa0JBQWtCLEtBQUssSUFBSSxpQkFBRyw4REFBQ00sT0FBTztnQkFBQ1IsT0FBTyxFQUFFOzJCQUFJQyxxQkFBcUIsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQztpQkFBQTs7Ozs7b0JBQUcsR0FBRyxJQUFJO1lBRXhHQSxrQkFBa0IsS0FBSyxLQUFLLEdBQUcsSUFBSSxHQUFHUCxXQUFXLElBQUksR0FBRyxpQkFBRyw4REFBQ1Qsa0RBQW1CO2dCQUFDZSxxQkFBcUIsRUFBRTsyQkFBSVEsNkJBQTZCO2lCQUFBOzs7OztvQkFBRyxpQkFBRyw4REFBQ3hCLHNEQUF1Qjs7OztvQkFBRTs7b0JBRTFLLENBQ047Q0FDSjtHQXZDUUksaUJBQWlCOztRQUNMRCw2Q0FBYzs7O0FBRDFCQyxLQUFBQSxpQkFBaUI7QUF5QzFCLElBQU1rQixhQUFhLEdBQUd6Qiw2REFBVSxtQkFNL0I7QUFOS3lCLE1BQUFBLGFBQWE7QUFTbkIsSUFBTUMsT0FBTyxHQUFHMUIsNkRBQVUsb0JBUXpCO0FBUkswQixNQUFBQSxPQUFPO0FBV2IsSUFBTUwsUUFBUSxHQUFHckIsMkRBQVEsb0JBR3hCO0FBSEtxQixNQUFBQSxRQUFRO0FBS2QsSUFBTUMsU0FBUyxHQUFHdEIsNkRBQVUsb0JBRTNCO0FBRktzQixNQUFBQSxTQUFTO0FBR2YsSUFBTU4sTUFBTSxHQUFHaEIsMkRBQVEsb0JBT3RCO0FBUEtnQixNQUFBQSxNQUFNO0FBUVosSUFBTUQsZUFBZSxHQUFHZiw2REFBVSxvQkFLakM7QUFMS2UsTUFBQUEsZUFBZTtBQU1yQixJQUFNRSxhQUFhLEdBQUdqQiw2REFBVSxvQkFLL0I7QUFMS2lCLE1BQUFBLGFBQWE7QUFRbkIsK0RBQWVWLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS91c2VySGFtYnVyZ2VyTWVudS9pbmRleC50c3g/MzA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyAgICBIYW1idXJnZXJBZGRpdGlvbmFsTWVudSxcclxuICAgICAgICAgICAgTW9iaWxlSGFtYnVyZ2VyTWVudSxcclxuICAgICAgICAgICAgdXNlQXBwU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHNlbGVjdEhhbWJ1cmdlckFkZGl0aW9uYWxNZW51RmxhZyxcclxuICAgICAgICAgICAgdXNlQXBwRGlzcGF0Y2gsXHJcbiAgICAgICAgICAgIGNoYW5nZVBhZ2VPYmosXHJcbiAgICAgICAgfSBmcm9tICcuLi8uLi8nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHN7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFVzZXJIYW1idXJnZXJNZW51KHByb3BzOlByb3BzKXtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGhhbWJ1cmdlckFkZGl0aW9uYWxNZW51RmxhZyA9IChzZWxlY3RIYW1idXJnZXJBZGRpdGlvbmFsTWVudUZsYWcpO1xyXG5cclxuICAgIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9LCBbd2luZG93LmlubmVyV2lkdGhdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt3aW5kb3dXaWR0aCA+IDYwMCA/IFxyXG4gICAgICAgICAgICAgICAgPEV4dGVybmFsV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TXlTdWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNeSBzdWJzY3JpcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NeVN1YnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJIYW1idXJnZXIgb25DbGljaz17KCk9PnNldEFkZGl0aW9uYWxNZW51RmxhZyghYWRkaXRpb25hbE1lbnVGbGFnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyTmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5pY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Vc2VyTmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93biBzcmM9XCIuL2ltYWdlcy9TaGV2cm9uRG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Vc2VySGFtYnVyZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0V4dGVybmFsV3JhcHBlcj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5zZXRBZGRpdGlvbmFsTWVudUZsYWcoIWFkZGl0aW9uYWxNZW51RmxhZyl9PlxyXG4gICAgICAgICAgICA8SGFtYnVyZ2VySWNvbiBzcmM9XCIuL2ltYWdlcy9IYW1idXJnZXIuc3ZnXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7YWRkaXRpb25hbE1lbnVGbGFnID09PSB0cnVlID8gPE92ZXJsYXkgb25DbGljaz17KCk9PnNldEFkZGl0aW9uYWxNZW51RmxhZyghYWRkaXRpb25hbE1lbnVGbGFnKX0vPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7YWRkaXRpb25hbE1lbnVGbGFnID09PSBmYWxzZSA/IG51bGwgOiB3aW5kb3dXaWR0aCA8PSA2MDAgPyA8TW9iaWxlSGFtYnVyZ2VyTWVudSBzZXRBZGRpdGlvbmFsTWVudUZsYWc9eygpPT5zZXRBZGRpdGlvbmFsTWVudUZsYWdGdW5jdGlvbn0vPiA6IDxIYW1idXJnZXJBZGRpdGlvbmFsTWVudS8+IH1cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEhhbWJ1cmdlckljb24gPSBzdHlsZWQuaW1nYFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgVXNlck5hbWUgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIFxyXG5gXHJcblxyXG5jb25zdCBBcnJvd0Rvd24gPSBzdHlsZWQuaW1nYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmBcclxuY29uc3QgTXlTdWJzID0gc3R5bGVkLmFgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5gXHJcbmNvbnN0IEV4dGVybmFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LWZhbWlseTogVEhJQ0NDQk9JO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgVXNlckhhbWJ1cmdlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJIYW1idXJnZXJNZW51OyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhhbWJ1cmdlckFkZGl0aW9uYWxNZW51IiwiTW9iaWxlSGFtYnVyZ2VyTWVudSIsInNlbGVjdEhhbWJ1cmdlckFkZGl0aW9uYWxNZW51RmxhZyIsInVzZUFwcERpc3BhdGNoIiwiVXNlckhhbWJ1cmdlck1lbnUiLCJwcm9wcyIsImRpc3BhdGNoIiwiaGFtYnVyZ2VyQWRkaXRpb25hbE1lbnVGbGFnIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJFeHRlcm5hbFdyYXBwZXIiLCJNeVN1YnMiLCJVc2VySGFtYnVyZ2VyIiwib25DbGljayIsInNldEFkZGl0aW9uYWxNZW51RmxhZyIsImFkZGl0aW9uYWxNZW51RmxhZyIsIlVzZXJOYW1lIiwiQXJyb3dEb3duIiwic3JjIiwiZGl2IiwiSGFtYnVyZ2VySWNvbiIsIk92ZXJsYXkiLCJzZXRBZGRpdGlvbmFsTWVudUZsYWdGdW5jdGlvbiIsImltZyIsInAiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/userHamburgerMenu/index.tsx\n");

/***/ })

});