"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-final-form */ \"./node_modules/react-final-form/dist/react-final-form.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src */ \"./src/index.ts\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin-bottom: 32px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin-bottom: 25px;\\n    :nth-child(2){\\n        margin-bottom: 48px;\\n    }\\n    :nth-child(3){\\n        margin-bottom: 250px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    :nth-child(2){\\n        margin-right: 16px;\\n        margin-left: 16px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    align-items: center;\\n    margin-bottom: 80px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin: 0 auto;\\n    width: 700px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    background-color: #181818;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Login(props1) {\n    var signupData = function signupData(values) {\n        var ref, ref2;\n        !!((ref = values.password) === null || ref === void 0 ? void 0 : ref.trim()) === false ? setPasswordFormFlag(\"error\") : setPasswordFormFlag(\"ok\");\n        !!((ref2 = values.email) === null || ref2 === void 0 ? void 0 : ref2.trim()) === false ? setEmailFormFlag(\"error\") : setEmailFormFlag(\"ok\");\n        (0,_src__WEBPACK_IMPORTED_MODULE_3__.postFetch)({\n            url: \"https://gscore-back.herokuapp.com/api/users/sign-in\",\n            body: JSON.stringify({\n                email: values.email,\n                password: values.password\n            })\n        }).then(function(response) {\n            if (response.ok) {\n                response.text().then(function(data) {\n                    dispatch((0,_src__WEBPACK_IMPORTED_MODULE_3__.changeUserObj)({\n                        showUsernameFlag: true\n                    }));\n                    var dataBuff = JSON.parse(data);\n                    console.log(dataBuff);\n                    localStorage.setItem(\"token\", dataBuff.token);\n                }).then(function() {});\n            } else {\n                response.text().then(function(data) {\n                    console.log(data);\n                });\n            }\n        });\n    // const response = await fetch('https://gscore-back.herokuapp.com/api/users/sign-in,{\n    //     method: 'POST',\n    //     headers:{\n    //         'Content-type': 'application/json'\n    //     },\n    //     body: JSON.stringify({email: values.email, password: values.password, username: values.username}),\n    // })\n    // const result = await response.json();\n    // console.log(response.status)\n    // console.log(result);\n    };\n    var loginData = function loginData() {\n        document.location = \"./checkout\";\n    };\n    _s();\n    var dispatch = (0,_src__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), passwordFormFlag = ref3[0], setPasswordFormFlag = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), emailFormFlag = ref1[0], setEmailFormFlag = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExternalWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgresBarsWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgresBarElementWrapper, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.ProgresBar, {\n                                        text: \"Create account\",\n                                        barColor: \"#FC5842\"\n                                    }, Math.random().toString(), false, {\n                                        fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgresBarElementWrapper, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.ProgresBar, {\n                                        text: \"Log in\",\n                                        barColor: \"#FC5842\"\n                                    }, Math.random().toString(), false, {\n                                        fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgresBarElementWrapper, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.ProgresBar, {\n                                        text: \"Checkout\",\n                                        barColor: \"#393939\"\n                                    }, Math.random().toString(), false, {\n                                        fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OfferWrapper, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.Offer, {\n                                text: \"Log in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                            onSubmit: signupData,\n                            render: function(param) {\n                                var handleSubmit = param.handleSubmit, values = param.values;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                                            name: \"email\",\n                                            children: function(props) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputWrapper, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                        type: \"email\",\n                                                        onChange: props.input.onChange,\n                                                        placeholder: \"Email\",\n                                                        name: props.input.name,\n                                                        validateStatus: emailFormFlag\n                                                    }, void 0, false, void 0, void 0)\n                                                }, void 0, false, void 0, void 0);\n                                            }\n                                        }, void 0, false, void 0, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                                            name: \"password\",\n                                            children: function(props) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputWrapper, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                        type: \"password\",\n                                                        name: \"password\",\n                                                        onChange: props.input.onChange,\n                                                        value: props.input.value,\n                                                        placeholder: \"Password\",\n                                                        validateStatus: passwordFormFlag\n                                                    }, void 0, false, void 0, void 0)\n                                                }, void 0, false, void 0, void 0);\n                                            }\n                                        }, void 0, false, void 0, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                                            name: \"signupButton\",\n                                            children: function(props) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputWrapper, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.FormButton, {\n                                                        onSubmit: handleSubmit,\n                                                        text: \"Send password\"\n                                                    }, void 0, false, void 0, void 0)\n                                                }, void 0, false, void 0, void 0);\n                                            }\n                                        }, void 0, false, void 0, void 0)\n                                    ]\n                                }, void 0, true, void 0, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n                    lineNumber: 158,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\dev\\\\PurrWeb\\\\gscore\\\\gscore\\\\pages\\\\login.tsx\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Login, \"c6gcd6SpY93peiVwoDjTUI0Egvc=\", false, function() {\n    return [\n        _src__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = Login;\nvar OfferWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c1 = OfferWrapper;\nvar InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\nvar ProgresBarElementWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = ProgresBarElementWrapper;\nvar ProgresBarsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c3 = ProgresBarsWrapper;\nvar InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject4());\n_c4 = InnerWrapper;\nvar ExternalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject5());\n_c5 = ExternalWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c1, \"OfferWrapper\");\n$RefreshReg$(_c2, \"ProgresBarElementWrapper\");\n$RefreshReg$(_c3, \"ProgresBarsWrapper\");\n$RefreshReg$(_c4, \"InnerWrapper\");\n$RefreshReg$(_c5, \"ExternalWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxZQUFZLEdBQUczRCw2REFBVSxvQkFROUI7QUFFRCxJQUFNZ0Qsd0JBQXdCLEdBQUdoRCw2REFBVSxvQkFLMUM7QUFMS2dELE1BQUFBLHdCQUF3QjtBQU85QixJQUFNRCxrQkFBa0IsR0FBRy9DLDZEQUFVLG9CQUlwQztBQUpLK0MsTUFBQUEsa0JBQWtCO0FBTXhCLElBQU1ELFlBQVksR0FBRzlDLDZEQUFVLG9CQUc5QjtBQUhLOEMsTUFBQUEsWUFBWTtBQUtsQixJQUFNRCxlQUFlLEdBQUc3Qyw2REFBVSxvQkFFakM7QUFGSzZDLE1BQUFBLGVBQWU7QUFLckIsK0RBQWVoQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtGaWVsZCwgRm9ybX0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SGVhZGVyLCBcclxuICAgICAgICBGb290ZXIsIFxyXG4gICAgICAgIE9mZmVyLCBcclxuICAgICAgICBQcm9ncmVzQmFyLCBcclxuICAgICAgICBJbnB1dCxcclxuICAgICAgICBGb3JtQnV0dG9uLFxyXG4gICAgICAgIHBvc3RGZXRjaCxcclxuICAgICAgICBGb3JtSW50ZXJmYWNlLFxyXG4gICAgICAgIHVzZUFwcERpc3BhdGNoLFxyXG4gICAgICAgIGNoYW5nZVVzZXJPYmosXHJcbiAgICB9IGZyb20gJy4uL3NyYyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3Bze1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIExvZ2luKHByb3BzOlByb3BzKXtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZEZvcm1GbGFnLCBzZXRQYXNzd29yZEZvcm1GbGFnXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlbWFpbEZvcm1GbGFnLCBzZXRFbWFpbEZvcm1GbGFnXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIHNpZ251cERhdGEodmFsdWVzOkZvcm1JbnRlcmZhY2Upe1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAhIXZhbHVlcy5wYXNzd29yZD8udHJpbSgpID09PSBmYWxzZSA/IHNldFBhc3N3b3JkRm9ybUZsYWcoJ2Vycm9yJykgOiBzZXRQYXNzd29yZEZvcm1GbGFnKCdvaycpO1xyXG4gICAgICAgICEhdmFsdWVzLmVtYWlsPy50cmltKCkgPT09IGZhbHNlID8gc2V0RW1haWxGb3JtRmxhZygnZXJyb3InKSA6IHNldEVtYWlsRm9ybUZsYWcoJ29rJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zdEZldGNoKHt1cmw6ICdodHRwczovL2dzY29yZS1iYWNrLmhlcm9rdWFwcC5jb20vYXBpL3VzZXJzL3NpZ24taW4nLCBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZW1haWw6IHZhbHVlcy5lbWFpbCwgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZH0pfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZVVzZXJPYmooe3Nob3dVc2VybmFtZUZsYWc6IHRydWV9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCdWZmID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUJ1ZmYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhQnVmZi50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2dzY29yZS1iYWNrLmhlcm9rdWFwcC5jb20vYXBpL3VzZXJzL3NpZ24taW4se1xyXG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAvLyAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgLy8gICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtlbWFpbDogdmFsdWVzLmVtYWlsLCBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLCB1c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lfSksXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9naW5EYXRhKCl7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnLi9jaGVja291dCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEV4dGVybmFsV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgPElubmVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc0JhcnNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc0JhckVsZW1lbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNCYXIgdGV4dD1cIkNyZWF0ZSBhY2NvdW50XCIgYmFyQ29sb3I9XCIjRkM1ODQyXCIga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9ncmVzQmFyRWxlbWVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzQmFyRWxlbWVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc0JhciB0ZXh0PVwiTG9nIGluXCIgYmFyQ29sb3I9XCIjRkM1ODQyXCIga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9ncmVzQmFyRWxlbWVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzQmFyRWxlbWVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc0JhciB0ZXh0PVwiQ2hlY2tvdXRcIiBiYXJDb2xvcj1cIiMzOTM5MzlcIiBrZXk9e01hdGgucmFuZG9tKCkudG9TdHJpbmcoKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Byb2dyZXNCYXJFbGVtZW50V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Byb2dyZXNCYXJzV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8T2ZmZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T2ZmZXIgdGV4dD1cIkxvZyBpblwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L09mZmVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17c2lnbnVwRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoe2hhbmRsZVN1Ym1pdCwgdmFsdWVzfSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcyA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmlucHV0Lm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLmlucHV0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e2VtYWlsRm9ybUZsYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcyA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmlucHV0Lm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pbnB1dC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17cGFzc3dvcmRGb3JtRmxhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpZ251cEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSB0ZXh0PVwiU2VuZCBwYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L0lubmVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8L0V4dGVybmFsV3JhcHBlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgT2ZmZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbmBcclxuXHJcbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gICAgfVxyXG4gICAgOm50aC1jaGlsZCgzKXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTBweDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgUHJvZ3Jlc0JhckVsZW1lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIDpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBQcm9ncmVzQmFyc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5gXHJcblxyXG5jb25zdCBJbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEV4dGVybmFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sIm5hbWVzIjpbInN0eWxlZCIsIkZpZWxkIiwiRm9ybSIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRm9vdGVyIiwiT2ZmZXIiLCJQcm9ncmVzQmFyIiwiSW5wdXQiLCJGb3JtQnV0dG9uIiwicG9zdEZldGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjaGFuZ2VVc2VyT2JqIiwiTG9naW4iLCJwcm9wcyIsInNpZ251cERhdGEiLCJ2YWx1ZXMiLCJwYXNzd29yZCIsInRyaW0iLCJzZXRQYXNzd29yZEZvcm1GbGFnIiwiZW1haWwiLCJzZXRFbWFpbEZvcm1GbGFnIiwidXJsIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsInRleHQiLCJkYXRhIiwiZGlzcGF0Y2giLCJzaG93VXNlcm5hbWVGbGFnIiwiZGF0YUJ1ZmYiLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJsb2dpbkRhdGEiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGFzc3dvcmRGb3JtRmxhZyIsImVtYWlsRm9ybUZsYWciLCJFeHRlcm5hbFdyYXBwZXIiLCJJbm5lcldyYXBwZXIiLCJQcm9ncmVzQmFyc1dyYXBwZXIiLCJQcm9ncmVzQmFyRWxlbWVudFdyYXBwZXIiLCJiYXJDb2xvciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk9mZmVyV3JhcHBlciIsIm9uU3VibWl0IiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybSIsIm5hbWUiLCJJbnB1dFdyYXBwZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGVTdGF0dXMiLCJ2YWx1ZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ })

});