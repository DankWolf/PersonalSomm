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
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { Configuration , OpenAIApi  } = __webpack_require__(/*! openai */ \"openai\");\nconst configuration = new Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new OpenAIApi(configuration);\nconst chatUrl = \"https://api.openai.com/v1/completions\";\nasync function handler(req, res) {\n    console.log(\"req body:\", req.body);\n    // const messages = [req.body];\n    // const messages = {role: 'user', content: req.body}\n    const chatGPT = await openai.createChatCompletion({\n        model: \"gpt-3.5-turbo\",\n        messages: [\n            {\n                role: \"user\",\n                content: req.body\n            },\n            {\n                role: \"assistant\",\n                content: \"ChatGPT response here...\"\n            }\n        ]\n    });\n    return res.status(200).json(chatGPT.data.choices[0].message);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxjQUFhLEVBQUVDLFVBQVMsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxzQkFBUTtBQUVyRCxNQUFNQyxnQkFBZ0IsSUFBSUgsY0FBYztJQUN0Q0ksUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJUCxVQUFVRTtBQUU3QixNQUFNTSxVQUFVO0FBRUQsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhSCxJQUFJSSxJQUFJO0lBQ2pDLCtCQUErQjtJQUMvQixxREFBcUQ7SUFDckQsTUFBTUMsVUFBVSxNQUFNUixPQUFPUyxvQkFBb0IsQ0FBQztRQUNoREMsT0FBTztRQUNQQyxVQUFVO1lBQ1I7Z0JBQUVDLE1BQU07Z0JBQVFDLFNBQVNWLElBQUlJLElBQUk7WUFBQztZQUNsQztnQkFBRUssTUFBTTtnQkFBYUMsU0FBUztZQUEyQjtTQUMxRDtJQUNIO0lBQ0EsT0FBT1QsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1AsUUFBUVEsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPO0FBQzdELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbHNvbW0vLi9wYWdlcy9hcGkvY2hhdC50cz9jNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gPSByZXF1aXJlKFwib3BlbmFpXCIpO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmNvbnN0IGNoYXRVcmwgPSBcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY29tcGxldGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcInJlcSBib2R5OlwiLCByZXEuYm9keSk7XG4gIC8vIGNvbnN0IG1lc3NhZ2VzID0gW3JlcS5ib2R5XTtcbiAgLy8gY29uc3QgbWVzc2FnZXMgPSB7cm9sZTogJ3VzZXInLCBjb250ZW50OiByZXEuYm9keX1cbiAgY29uc3QgY2hhdEdQVCA9IGF3YWl0IG9wZW5haS5jcmVhdGVDaGF0Q29tcGxldGlvbih7XG4gICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiByZXEuYm9keSB9LFxuICAgICAgeyByb2xlOiBcImFzc2lzdGFudFwiLCBjb250ZW50OiBcIkNoYXRHUFQgcmVzcG9uc2UgaGVyZS4uLlwiIH0sXG4gICAgXSxcbiAgfSk7XG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjaGF0R1BULmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlKTtcbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwicmVxdWlyZSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJjaGF0VXJsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiY2hhdEdQVCIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50Iiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjaG9pY2VzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();