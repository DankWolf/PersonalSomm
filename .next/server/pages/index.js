"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/ChatGPTResponse.tsx":
/*!****************************************!*\
  !*** ./components/ChatGPTResponse.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChatGPTResponse)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ChatGPTResponse(props) {\n    const { text  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/christenorio/Scratch/PersonalSomm/components/ChatGPTResponse.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXRHUFRSZXNwb25zZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtlLFNBQVNBLGdCQUFnQkMsS0FBWSxFQUFFO0lBQ3BELE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdEO0lBQ2pCLHFCQUFPLDhEQUFDRTtrQkFBR0Q7Ozs7OztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbHNvbW0vLi9jb21wb25lbnRzL0NoYXRHUFRSZXNwb25zZS50c3g/YTNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIHByb3BzID0ge1xuICB0ZXh0OiBzdHJpbmc7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRHUFRSZXNwb25zZShwcm9wczogcHJvcHMpIHtcbiAgY29uc3QgeyB0ZXh0IH0gPSBwcm9wcztcbiAgcmV0dXJuIDxwPnt0ZXh0fTwvcD47XG59XG4iXSwibmFtZXMiOlsiQ2hhdEdQVFJlc3BvbnNlIiwicHJvcHMiLCJ0ZXh0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatGPTResponse.tsx\n");

/***/ }),

/***/ "./components/UserInput.tsx":
/*!**********************************!*\
  !*** ./components/UserInput.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChatGPTResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatGPTResponse */ \"./components/ChatGPTResponse.tsx\");\n\n\n\n// import ChatGPTResponse from \"./ChatGPTResponse\";\n// const { Configuration, OpenAIApi } = require(\"openai\");\n// const configuration = new Configuration({\n//   apiKey: process.env.OPENAI_API_KEY,\n// });\n// const openai = new OpenAIApi(configuration);\nconst UserInput = ()=>{\n    const [flavor, setFlavor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatResponse, setChatResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Please submit a request to see what wine you want to pair\");\n    const chatUrl = \"https://api.openai.com/v1/completions\";\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        // console.log(\"event object:\", event);\n        const flavor = document.getElementById(\"flavor\").value;\n        const query = `What wine pairs with ${flavor}?`;\n        //now querry chat GPT to get the potential wine pairing.\n        async function request() {\n            const data = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                body: `What wine pairs with ${flavor}?`\n            }).then((res)=>res.json());\n            setChatResponse(data.content);\n        }\n        request();\n        setFlavor(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \" \",\n                            \"This is the label\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"flavor\",\n                                id: \"flavor\",\n                                placeholder: \"Flavor or protein\",\n                                type: \"text\",\n                                value: flavor,\n                                onChange: (e)=>setFlavor(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/christenorio/Scratch/PersonalSomm/components/UserInput.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/christenorio/Scratch/PersonalSomm/components/UserInput.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christenorio/Scratch/PersonalSomm/components/UserInput.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christenorio/Scratch/PersonalSomm/components/UserInput.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatGPTResponse__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                text: chatResponse\n            }, void 0, false, {\n                fileName: \"/Users/christenorio/Scratch/PersonalSomm/components/UserInput.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJJbnB1dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUNlO0FBQ2hELG1EQUFtRDtBQUNuRCwwREFBMEQ7QUFFMUQsNENBQTRDO0FBQzVDLHdDQUF3QztBQUN4QyxNQUFNO0FBQ04sK0NBQStDO0FBRS9DLE1BQU1FLFlBQVksSUFBTTtJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQzlDO0lBR0YsTUFBTU8sVUFBVTtJQUVoQixNQUFNQyxlQUFlLENBQUNDLFFBQVU7UUFDOUJBLE1BQU1DLGNBQWM7UUFDcEIsdUNBQXVDO1FBQ3ZDLE1BQU1QLFNBQVMsU0FBVVMsY0FBYyxDQUFDLFVBQ3JDQyxLQUFLO1FBQ1IsTUFBTUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFWCxPQUFPLENBQUMsQ0FBQztRQUUvQyx3REFBd0Q7UUFDeEQsZUFBZVksVUFBVTtZQUN2QixNQUFNQyxPQUFPLE1BQU1DLE1BQU0sYUFBYTtnQkFDcENDLFFBQVE7Z0JBQ1JDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRWhCLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLEdBQUdpQixJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtZQUN6QmhCLGdCQUFnQlUsS0FBS08sT0FBTztRQUM5QjtRQUVBUjtRQUNBWCxVQUFVO0lBQ1o7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNvQjtnQkFBS0MsVUFBVWpCOztrQ0FDZCw4REFBQ2tCOzs0QkFDRTs0QkFBSTswQ0FFTCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xsQixPQUFPVjtnQ0FDUDZCLFVBQVUsQ0FBQ0MsSUFBTTdCLFVBQVU2QixFQUFFQyxNQUFNLENBQUNyQixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRzdDLDhEQUFDc0I7d0JBQU9KLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUM5Qix3REFBZUE7Z0JBQUNtQyxNQUFNL0I7Ozs7Ozs7O0FBRzdCO0FBRUEsaUVBQWVILFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbHNvbW0vLi9jb21wb25lbnRzL1VzZXJJbnB1dC50c3g/YWRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRHUFRSZXNwb25zZSBmcm9tIFwiLi9DaGF0R1BUUmVzcG9uc2VcIjtcbi8vIGltcG9ydCBDaGF0R1BUUmVzcG9uc2UgZnJvbSBcIi4vQ2hhdEdQVFJlc3BvbnNlXCI7XG4vLyBjb25zdCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9ID0gcmVxdWlyZShcIm9wZW5haVwiKTtcblxuLy8gY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbi8vICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbi8vIH0pO1xuLy8gY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuY29uc3QgVXNlcklucHV0ID0gKCkgPT4ge1xuICBjb25zdCBbZmxhdm9yLCBzZXRGbGF2b3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0UmVzcG9uc2UsIHNldENoYXRSZXNwb25zZV0gPSB1c2VTdGF0ZShcbiAgICBcIlBsZWFzZSBzdWJtaXQgYSByZXF1ZXN0IHRvIHNlZSB3aGF0IHdpbmUgeW91IHdhbnQgdG8gcGFpclwiXG4gICk7XG5cbiAgY29uc3QgY2hhdFVybCA9IFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jb21wbGV0aW9uc1wiO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJldmVudCBvYmplY3Q6XCIsIGV2ZW50KTtcbiAgICBjb25zdCBmbGF2b3IgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGF2b3JcIikgYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgIC52YWx1ZTtcbiAgICBjb25zdCBxdWVyeSA9IGBXaGF0IHdpbmUgcGFpcnMgd2l0aCAke2ZsYXZvcn0/YDtcblxuICAgIC8vbm93IHF1ZXJyeSBjaGF0IEdQVCB0byBnZXQgdGhlIHBvdGVudGlhbCB3aW5lIHBhaXJpbmcuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2hhdFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGBXaGF0IHdpbmUgcGFpcnMgd2l0aCAke2ZsYXZvcn0/YCxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgICBzZXRDaGF0UmVzcG9uc2UoZGF0YS5jb250ZW50KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0KCk7XG4gICAgc2V0Rmxhdm9yKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIFRoaXMgaXMgdGhlIGxhYmVsXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiZmxhdm9yXCJcbiAgICAgICAgICAgIGlkPVwiZmxhdm9yXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmxhdm9yIG9yIHByb3RlaW5cIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2ZsYXZvcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmxhdm9yKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxDaGF0R1BUUmVzcG9uc2UgdGV4dD17Y2hhdFJlc3BvbnNlfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2hhdEdQVFJlc3BvbnNlIiwiVXNlcklucHV0IiwiZmxhdm9yIiwic2V0Rmxhdm9yIiwiY2hhdFJlc3BvbnNlIiwic2V0Q2hhdFJlc3BvbnNlIiwiY2hhdFVybCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJxdWVyeSIsInJlcXVlc3QiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJjb250ZW50IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserInput.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UserInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserInput */ \"./components/UserInput.tsx\");\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {}, void 0, false, {\n                    fileName: \"/Users/christenorio/Scratch/PersonalSomm/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/christenorio/Scratch/PersonalSomm/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Welcome to Next.js!\"\n            }, void 0, false, {\n                fileName: \"/Users/christenorio/Scratch/PersonalSomm/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/christenorio/Scratch/PersonalSomm/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUVtQjtBQUdoRCxTQUFTRSxXQUFXO0lBQ2xCLHFCQUNFOzswQkFDRSw4REFBQ0Ysa0RBQUlBOzBCQUNILDRFQUFDRzs7Ozs7Ozs7OzswQkFFSCw4REFBQ0M7MEJBQUk7Ozs7OzswQkFDTCw4REFBQ0gsNkRBQVNBOzs7Ozs7O0FBR2hCO0FBRUEsaUVBQWVDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbHNvbW0vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQ2hhdEdQVFJlc3BvbnNlIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXRHUFRSZXNwb25zZVwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5wdXRcIjtcblxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhPjwvbWV0YT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+V2VsY29tZSB0byBOZXh0LmpzITwvZGl2PlxuICAgICAgPFVzZXJJbnB1dD48L1VzZXJJbnB1dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlVzZXJJbnB1dCIsIkhvbWVQYWdlIiwibWV0YSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();