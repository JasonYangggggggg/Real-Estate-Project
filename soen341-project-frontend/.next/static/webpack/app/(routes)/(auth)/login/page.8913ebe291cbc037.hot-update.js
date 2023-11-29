"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/(auth)/login/page",{

/***/ "(app-pages-browser)/./app/(routes)/(auth)/login/page.tsx":
/*!********************************************!*\
  !*** ./app/(routes)/(auth)/login/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.css */ \"(app-pages-browser)/./app/(routes)/(auth)/login/login.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [Name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [Password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const nameHandler = (data)=>{\n        setName(data.target.value);\n    };\n    const passwordHandler = (data)=>{\n        setPassword(data.target.value);\n    };\n    axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.withCredentials = true;\n    const login = async (event)=>{\n        event.preventDefault();\n        if (Name !== null && Name !== \"\" && Password !== null && Password !== \"\") {\n            const data = {\n                Name,\n                Password\n            };\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/login\", data);\n                if (response.data) {\n                    console.log(\"success\");\n                    router.push(\"/\");\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"SignIn-Page\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                id: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-container sign-in\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Name\",\n                                    onChange: nameHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    onChange: passwordHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: login,\n                                    children: \"log In\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left-panel left-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \" Welcome Back!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Enter your personal details to look for a nice house\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        id: \"register\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/register\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 38\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/login/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"DU6kgadJ754kUgrkwAAVOCDH2VQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS8oYXV0aCkvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ2xCO0FBQ1E7QUFDZTtBQUVsQjtBQUUxQixNQUFNSyxRQUFROztJQUNaLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN2QixNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1VLGNBQWMsQ0FBQ0M7UUFDakJKLFFBQVFJLEtBQUtDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1DLGtCQUFrQixDQUFDSDtRQUNyQkYsWUFBWUUsS0FBS0MsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBQ0FWLDZDQUFLQSxDQUFDWSxRQUFRLENBQUNDLGVBQWUsR0FBRztJQUNqQyxNQUFNQyxRQUFRLE9BQU9DO1FBQ3BCQSxNQUFNQyxjQUFjO1FBQ2xCLElBQUcsU0FBVSxRQUFRYixTQUFTLE1BQVFFLGFBQWEsUUFBUUEsYUFBYSxJQUFJO1lBQ3pFLE1BQU1HLE9BQU87Z0JBQ1ZMO2dCQUNBRTtZQUNKO1lBQ0osSUFBRztnQkFDRCxNQUFNWSxXQUFZLE1BQU1qQiw2Q0FBS0EsQ0FBQ2tCLElBQUksQ0FBQywrQkFBK0JWO2dCQUNsRSxJQUFHUyxTQUFTVCxJQUFJLEVBQUM7b0JBQ2ZXLFFBQVFDLEdBQUcsQ0FBQztvQkFHYmxCLE9BQU9tQixJQUFJLENBQUM7Z0JBQ2I7WUFDRixFQUFDLE9BQU1DLE9BQU07Z0JBQ1hILFFBQVFDLEdBQUcsQ0FBQ0U7WUFDZDtRQUVFO0lBQ0g7SUFFRCxxQkFDRSw4REFBQ0M7a0JBQ0QsNEVBQUNBO1lBQUlDLFdBQVk7c0JBQ2pCLDRFQUFDRDtnQkFBSUMsV0FBWTtnQkFBWUMsSUFBSzs7a0NBR2hDLDhEQUFDRjt3QkFBSUMsV0FBWTtrQ0FDZiw0RUFBQ0U7OzhDQUNDLDhEQUFDSDtvQ0FBSUMsV0FBVTs4Q0FDZiw0RUFBQ0c7a0RBQUc7Ozs7Ozs7Ozs7OzhDQUdOLDhEQUFDQztvQ0FBTUMsTUFBTztvQ0FBT0MsYUFBWTtvQ0FBT0MsVUFBVXhCOzs7Ozs7OENBQ2xELDhEQUFDcUI7b0NBQU1DLE1BQU87b0NBQVdDLGFBQVk7b0NBQVdDLFVBQVVwQjs7Ozs7OzhDQUMxRCw4REFBQ3FCO29DQUFPQyxTQUFTbkI7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUkxQiw4REFBQ1M7d0JBQUlDLFdBQVk7a0NBQ2YsNEVBQUNEOzRCQUFJQyxXQUFZO3NDQUdmLDRFQUFDRDtnQ0FBSUMsV0FBWTs7a0RBQ2pCLDhEQUFDRztrREFBRzs7Ozs7O2tEQUNGLDhEQUFDTztrREFBRTs7Ozs7O2tEQUVILDhEQUFDRjt3Q0FBUVAsSUFBSztrREFBVyw0RUFBQzNCLGtEQUFJQTs0Q0FBQ3FDLE1BQU07c0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZN0Q7R0F6RU1sQzs7UUFDV0Ysc0RBQVNBOzs7S0FEcEJFO0FBMkVOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS8oYXV0aCkvbG9naW4vcGFnZS50c3g/OGU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFwiLi9sb2dpbi5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICBjb25zdCBbTmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIGNvbnN0IFtQYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgIGNvbnN0IG5hbWVIYW5kbGVyID0gKGRhdGEgOiBhbnkpID0+e1xuICAgICAgIHNldE5hbWUoZGF0YS50YXJnZXQudmFsdWUpO1xuICAgfVxuXG4gICBjb25zdCBwYXNzd29yZEhhbmRsZXIgPSAoZGF0YSA6IGFueSkgPT57XG4gICAgICAgc2V0UGFzc3dvcmQoZGF0YS50YXJnZXQudmFsdWUpXG4gICB9XG4gICBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgY29uc3QgbG9naW4gPSBhc3luYyAoZXZlbnQ6YW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICBpZigoTmFtZSAhPT0gbnVsbCAmJiBOYW1lICE9PSAnJykgJiYgKFBhc3N3b3JkICE9PSBudWxsICYmIFBhc3N3b3JkICE9PSAnJykpe1xuICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIE5hbWUsXG4gICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICB9XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luJywgZGF0YSk7XG4gICAgICBpZihyZXNwb25zZS5kYXRhKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xuXG4gICAgXG4gICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgICB9XG4gICB9XG4gICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJTaWduSW4tUGFnZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIiBpZCA9IFwiY29udGFpbmVyXCI+XG4gICAgICBcblxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyIHNpZ24taW5cIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQnPlxuICAgICAgICAgIDxoMT5TaWduIEluPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J05hbWUnIG9uQ2hhbmdlPXtuYW1lSGFuZGxlcn0vPlxuICAgICAgICA8aW5wdXQgdHlwZSA9IFwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIG9uQ2hhbmdlPXtwYXNzd29yZEhhbmRsZXJ9Lz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbn0+bG9nIEluPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibGVmdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImxlZnRcIj5cbiAgICAgICAgICBcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJsZWZ0LXBhbmVsIGxlZnQtcmlnaHRcIj5cbiAgICAgICAgICA8aDE+IFdlbGNvbWUgQmFjayE8L2gxPlxuICAgICAgICAgICAgPHA+RW50ZXIgeW91ciBwZXJzb25hbCBkZXRhaWxzIHRvIGxvb2sgZm9yIGEgbmljZSBob3VzZTwvcD5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uICBpZCA9IFwicmVnaXN0ZXJcIj48TGluayBocmVmPSAnL3JlZ2lzdGVyJz5TaWduIFVwPC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiAgXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkxvZ2luIiwicm91dGVyIiwiTmFtZSIsInNldE5hbWUiLCJQYXNzd29yZCIsInNldFBhc3N3b3JkIiwibmFtZUhhbmRsZXIiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZEhhbmRsZXIiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsImxvZ2luIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImZvcm0iLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/(auth)/login/page.tsx\n"));

/***/ })

});