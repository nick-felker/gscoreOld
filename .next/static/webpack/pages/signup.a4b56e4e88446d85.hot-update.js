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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hamburgerAdditionalMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hamburgerAdditionalMenu */ \"./src/ui/hamburgerAdditionalMenu/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    :hover{\\n        opacity: 0.5;\\n        transition: 0.5s;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    position: fixed;\\n    z-index: 2;\\n    left: 0px;\\n    top: 0px;\\n    width: 100vw;\\n    height: 100vh;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-size: 20px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin-left: 10px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    cursor: pointer;\\n    font-size: 20px;\\n    :hover{\\n        opacity: 0.5;\\n    }\\n    margin-right: 10px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-family: THICCCBOI;\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    cursor: pointer;\\n    padding: 10px 15px;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserHamburgerMenu(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), additionalMenuFlag = ref[0], setAdditionalMenuFlag = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth), windowWidth = ref1[0], setWindowWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), overlayFlag = ref2[0], setOverlayFlag = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWindowWidth(window.innerWidth);\n    }, [\n        window.innerWidth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: windowWidth <= 600 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HamburgerIcon, {\n                src: \"./images/Hamburger.svg\",\n                onClick: setAdditionalMenuFlag(!additionalMenuFlag)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 21\n            }, this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExternalWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"./subscriptions\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MySubs, {\n                                children: \"My subscriptions\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        overlayFlag === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hamburgerAdditionalMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 45\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserHamburger, {\n                            onClick: function() {\n                                return setOverlayFlag(!overlayFlag);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserName, {\n                                    children: \"Nick\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowDown, {\n                                    src: \"./images/ShevronDown.svg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, this),\n                overlayFlag === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overlay, {\n                    onClick: function() {\n                        return setOverlayFlag(!overlayFlag);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\src\\\\ui\\\\userHamburgerMenu\\\\index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 45\n                }, this) : null\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(UserHamburgerMenu, \"iwWfo7OAiKR2gatQ1lzPwGRrypc=\");\n_c = UserHamburgerMenu;\nvar HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject());\n_c1 = HamburgerIcon;\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c2 = Overlay;\nvar UserName = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p(_templateObject2());\n_c3 = UserName;\nvar ArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject3());\n_c4 = ArrowDown;\nvar MySubs = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a(_templateObject4());\n_c5 = MySubs;\nvar ExternalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject5());\n_c6 = ExternalWrapper;\nvar UserHamburger = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject6());\n_c7 = UserHamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserHamburgerMenu);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"UserHamburgerMenu\");\n$RefreshReg$(_c1, \"HamburgerIcon\");\n$RefreshReg$(_c2, \"Overlay\");\n$RefreshReg$(_c3, \"UserName\");\n$RefreshReg$(_c4, \"ArrowDown\");\n$RefreshReg$(_c5, \"MySubs\");\n$RefreshReg$(_c6, \"ExternalWrapper\");\n$RefreshReg$(_c7, \"UserHamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvdXNlckhhbWJ1cmdlck1lbnUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNhO0FBQ2E7QUFDcEM7O0FBTzdCLFNBQVNLLGlCQUFpQixDQUFDQyxLQUFXLEVBQUM7O0lBRW5DLElBQW9ETCxHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLENBQUMsRUFaaEYsa0JBWTZCLEdBQTJCQSxHQUF3QixHQUFuRCxFQVo3QixxQkFZb0QsR0FBSUEsR0FBd0IsR0FBNUI7SUFDaEQsSUFBc0NBLElBQW1DLEdBQW5DQSwrQ0FBUSxDQUFTUSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxFQWI3RSxXQWFzQixHQUFvQlQsSUFBbUMsR0FBdkQsRUFidEIsY0Fhc0MsR0FBSUEsSUFBbUMsR0FBdkM7SUFDbEMsSUFBc0NBLElBQXdCLEdBQXhCQSwrQ0FBUSxDQUFVLEtBQUssQ0FBQyxFQWRsRSxXQWNzQixHQUFvQkEsSUFBd0IsR0FBNUMsRUFkdEIsY0Fjc0MsR0FBSUEsSUFBd0IsR0FBNUI7SUFDbENDLGdEQUFTLENBQUMsV0FBSTtRQUNWVSxjQUFjLENBQUNILE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQUM7S0FDckMsRUFBRTtRQUFDRCxNQUFNLENBQUNDLFVBQVU7S0FBQyxDQUFDO0lBRXZCLHFCQUNJO2tCQUNLQyxXQUFXLElBQUksR0FBRyxpQkFDZjtzQkFDSSw0RUFBQ0ksYUFBYTtnQkFBQ0MsR0FBRyxFQUFDLHdCQUF3QjtnQkFBQ0MsT0FBTyxFQUFFVCxxQkFBcUIsQ0FBQyxDQUFDRCxrQkFBa0IsQ0FBQzs7Ozs7b0JBQUc7eUJBQ25HLGlCQUVIOzs4QkFDSSw4REFBQ1csZUFBZTs7c0NBQ2hCLDhEQUFDZCxrREFBSTs0QkFBQ2UsSUFBSSxFQUFFLGlCQUFpQjtzQ0FDekIsNEVBQUNDLE1BQU07MENBQUMsa0JBQWdCOzs7OztvQ0FBUzs7Ozs7Z0NBQzlCO3dCQUVOUCxXQUFXLEtBQUssSUFBSSxpQkFBRyw4REFBQ1YsZ0VBQXVCOzs7O2dDQUFFLEdBQUcsSUFBSTtzQ0FDekQsOERBQUNrQixhQUFhOzRCQUFDSixPQUFPLEVBQUU7dUNBQUlILGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUM7NkJBQUE7OzhDQUNwRCw4REFBQ1MsUUFBUTs4Q0FBQyxNQUFJOzs7Ozt3Q0FBVzs4Q0FDekIsOERBQUNDLFNBQVM7b0NBQUNQLEdBQUcsRUFBQywwQkFBMEI7Ozs7O3dDQUFFOzs7Ozs7Z0NBQy9COzs7Ozs7d0JBQ0U7Z0JBQ2pCSCxXQUFXLEtBQUssSUFBSSxpQkFBRyw4REFBQ1csT0FBTztvQkFBQ1AsT0FBTyxFQUFFOytCQUFJSCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO3FCQUFBOzs7Ozt3QkFBRyxHQUFHLElBQUk7O3dCQUNyRjtxQkFRUixDQUNOO0NBQ0o7R0F2Q1FSLGlCQUFpQjtBQUFqQkEsS0FBQUEsaUJBQWlCO0FBeUMxQixJQUFNVSxhQUFhLEdBQUdmLDZEQUFVLG1CQU0vQjtBQU5LZSxNQUFBQSxhQUFhO0FBU25CLElBQU1TLE9BQU8sR0FBR3hCLDZEQUFVLG9CQVF6QjtBQVJLd0IsTUFBQUEsT0FBTztBQVdiLElBQU1GLFFBQVEsR0FBR3RCLDJEQUFRLG9CQUV4QjtBQUZLc0IsTUFBQUEsUUFBUTtBQUlkLElBQU1DLFNBQVMsR0FBR3ZCLDZEQUFVLG9CQUUzQjtBQUZLdUIsTUFBQUEsU0FBUztBQUdmLElBQU1ILE1BQU0sR0FBR3BCLDJEQUFRLG9CQU90QjtBQVBLb0IsTUFBQUEsTUFBTTtBQVFaLElBQU1GLGVBQWUsR0FBR2xCLDZEQUFVLG9CQUtqQztBQUxLa0IsTUFBQUEsZUFBZTtBQU1yQixJQUFNRyxhQUFhLEdBQUdyQiw2REFBVSxvQkFLL0I7QUFMS3FCLE1BQUFBLGFBQWE7QUFRbkIsK0RBQWVoQixpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdWkvdXNlckhhbWJ1cmdlck1lbnUvaW5kZXgudHN4PzMwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGFtYnVyZ2VyQWRkaXRpb25hbE1lbnUgZnJvbSBcIi4uL2hhbWJ1cmdlckFkZGl0aW9uYWxNZW51XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuXHJcbn1cclxuZnVuY3Rpb24gVXNlckhhbWJ1cmdlck1lbnUocHJvcHM6UHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IFthZGRpdGlvbmFsTWVudUZsYWcsIHNldEFkZGl0aW9uYWxNZW51RmxhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4od2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgY29uc3QgW292ZXJsYXlGbGFnLCBzZXRPdmVybGF5RmxhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9LCBbd2luZG93LmlubmVyV2lkdGhdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7d2luZG93V2lkdGggPD0gNjAwID8gXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIYW1idXJnZXJJY29uIHNyYz1cIi4vaW1hZ2VzL0hhbWJ1cmdlci5zdmdcIiBvbkNsaWNrPXtzZXRBZGRpdGlvbmFsTWVudUZsYWcoIWFkZGl0aW9uYWxNZW51RmxhZyl9Lz4gXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8RXh0ZXJuYWxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuL3N1YnNjcmlwdGlvbnMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15U3Vicz5NeSBzdWJzY3JpcHRpb25zPC9NeVN1YnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtvdmVybGF5RmxhZyA9PT0gdHJ1ZSA/IDxIYW1idXJnZXJBZGRpdGlvbmFsTWVudS8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8VXNlckhhbWJ1cmdlciBvbkNsaWNrPXsoKT0+c2V0T3ZlcmxheUZsYWcoIW92ZXJsYXlGbGFnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyTmFtZT5OaWNrPC9Vc2VyTmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93biBzcmM9XCIuL2ltYWdlcy9TaGV2cm9uRG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Vc2VySGFtYnVyZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRXh0ZXJuYWxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvdmVybGF5RmxhZyA9PT0gdHJ1ZSA/IDxPdmVybGF5IG9uQ2xpY2s9eygpPT5zZXRPdmVybGF5RmxhZyghb3ZlcmxheUZsYWcpfS8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgSGFtYnVyZ2VySWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcbmBcclxuXHJcblxyXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcblxyXG5jb25zdCBVc2VyTmFtZSA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBBcnJvd0Rvd24gPSBzdHlsZWQuaW1nYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmBcclxuY29uc3QgTXlTdWJzID0gc3R5bGVkLmFgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICA6aG92ZXJ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5gXHJcbmNvbnN0IEV4dGVybmFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LWZhbWlseTogVEhJQ0NDQk9JO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgVXNlckhhbWJ1cmdlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJIYW1idXJnZXJNZW51OyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhhbWJ1cmdlckFkZGl0aW9uYWxNZW51IiwiTGluayIsIlVzZXJIYW1idXJnZXJNZW51IiwicHJvcHMiLCJhZGRpdGlvbmFsTWVudUZsYWciLCJzZXRBZGRpdGlvbmFsTWVudUZsYWciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsIm92ZXJsYXlGbGFnIiwic2V0T3ZlcmxheUZsYWciLCJIYW1idXJnZXJJY29uIiwic3JjIiwib25DbGljayIsIkV4dGVybmFsV3JhcHBlciIsImhyZWYiLCJNeVN1YnMiLCJVc2VySGFtYnVyZ2VyIiwiVXNlck5hbWUiLCJBcnJvd0Rvd24iLCJPdmVybGF5IiwiaW1nIiwiZGl2IiwicCIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/userHamburgerMenu/index.tsx\n");

/***/ })

});