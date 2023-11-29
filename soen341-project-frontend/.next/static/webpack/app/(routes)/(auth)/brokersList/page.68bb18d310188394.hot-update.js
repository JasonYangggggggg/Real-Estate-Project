"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/(auth)/brokersList/page",{

/***/ "(app-pages-browser)/./app/(routes)/(auth)/brokersList/page.tsx":
/*!**************************************************!*\
  !*** ./app/(routes)/(auth)/brokersList/page.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Broker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Broker */ \"(app-pages-browser)/./app/(routes)/(auth)/brokersList/Broker.tsx\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./app/(routes)/(auth)/brokersList/page.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [Users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //onMount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    // Function to fetch and update house data\n    const getData = async ()=>{\n        try {\n            const users = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/user/get\");\n            console.log(users);\n            setUsers(users.data);\n        // // Set the fetched data to the houseData state if needed\n        // setHouseData(data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    /*console.log(Users);*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sentence\",\n                        children: \"Find your broker here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search...\",\n                        className: \"loop\",\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list\",\n                        children: Users.filter((User)=>User.Role === \"Broker\" && User.Name.toLowerCase().includes(query)).map((User, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"link\",\n                                href: \"/brokers/\".concat(User.Name),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Broker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    broker: User\n                                }, void 0, false, {\n                                    fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, i, false, {\n                                fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 5\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alimurat/Desktop/Concordia 4th semester/FK-X-Green-SOEN341-ProjectF2023/soen341-project-frontend/app/(routes)/(auth)/brokersList/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"Su/eQer0N1yx/mze+DWYvAa051g=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS8oYXV0aCkvYnJva2Vyc0xpc3QvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDdEI7QUFDSDtBQUNJO0FBRVY7QUFFcEIsTUFBTU0sT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNRLE9BQU1DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbEMsU0FBUztJQUNUQyxnREFBU0EsQ0FBQztRQUNSUztJQUNGLEdBQUcsRUFBRTtJQUVMLDBDQUEwQztJQUMxQyxNQUFNQSxVQUFVO1FBQ2QsSUFBSTtZQUNGLE1BQU1DLFFBQVEsTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQztZQUM5QkMsUUFBUUMsR0FBRyxDQUFDSDtZQUNaSixTQUFTSSxNQUFNSSxJQUFJO1FBRW5CLDJEQUEyRDtRQUMzRCxzQkFBc0I7UUFDeEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFDQSxxQkFBcUIsR0FDckIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBWTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBVzs7Ozs7O2tDQUMxQiw4REFBQ0M7d0JBQU1DLE1BQU87d0JBQU9DLGFBQVk7d0JBQVlILFdBQVk7d0JBQU9JLFVBQVlDLENBQUFBLElBQUtkLFNBQVNjLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUV4Ryw4REFBQ0M7O2tDQUNDLDhEQUFDQzs7Ozs7a0NBR0MsOERBQUNDO3dCQUFHVixXQUFVO2tDQUNiWixNQUFNdUIsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLElBQUksS0FBSyxZQUFZRCxLQUFLRSxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDMUIsUUFBUTJCLEdBQUcsQ0FBQyxDQUFDTCxNQUFXTSxrQkFDdEgsOERBQUNsQyxrREFBSUE7Z0NBQUNnQixXQUFVO2dDQUFPbUIsTUFBTSxZQUFzQixPQUFWUCxLQUFLRSxJQUFJOzBDQUM5Qyw0RUFBQzVCLCtDQUFNQTtvQ0FBQ2tDLFFBQVFSOzs7Ozs7K0JBRHVDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUvRDtHQTdDTS9CO0FBK0NOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS8oYXV0aCkvYnJva2Vyc0xpc3QvcGFnZS50c3g/NjM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQnJva2VyIGZyb20gXCIuL0Jyb2tlclwiO1xuXG5pbXBvcnQgXCIuL3BhZ2UuY3NzXCI7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtVc2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcXVlcnksc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy9vbk1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gZmV0Y2ggYW5kIHVwZGF0ZSBob3VzZSBkYXRhXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXIvZ2V0XCIpO1xuICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgc2V0VXNlcnModXNlcnMuZGF0YSk7XG5cbiAgICAgIC8vIC8vIFNldCB0aGUgZmV0Y2hlZCBkYXRhIHRvIHRoZSBob3VzZURhdGEgc3RhdGUgaWYgbmVlZGVkXG4gICAgICAvLyBzZXRIb3VzZURhdGEoZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICAvKmNvbnNvbGUubG9nKFVzZXJzKTsqL1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhcHAnPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJveFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW50ZW5jZVwiPkZpbmQgeW91ciBicm9rZXIgaGVyZTwvZGl2PlxuICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGNsYXNzTmFtZSA9IFwibG9vcFwiIG9uQ2hhbmdlID0ge2UgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgICBcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIHtVc2Vycy5maWx0ZXIoKFVzZXI6IGFueSkgPT4gVXNlci5Sb2xlID09PSAnQnJva2VyJyAmJiBVc2VyLk5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpLm1hcCgoVXNlcjogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICA8TGluayBjbGFzc05hbWU9J2xpbmsnIGhyZWY9e2AvYnJva2Vycy8ke1VzZXIuTmFtZX1gfSBrZXk9e2l9PlxuICAgICAgICA8QnJva2VyIGJyb2tlcj17VXNlcn0vPiBcbiAgICA8L0xpbms+XG4pKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICBcbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiYXhpb3MiLCJCcm9rZXIiLCJwYWdlIiwiVXNlcnMiLCJzZXRVc2VycyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnZXREYXRhIiwidXNlcnMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFydGljbGUiLCJiciIsInVsIiwiZmlsdGVyIiwiVXNlciIsIlJvbGUiLCJOYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsImkiLCJocmVmIiwiYnJva2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/(auth)/brokersList/page.tsx\n"));

/***/ })

});