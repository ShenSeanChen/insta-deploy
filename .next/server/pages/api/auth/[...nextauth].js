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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__);\n\n// import GithubProvider from \"next-auth/providers/github\"\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.SECRET,\n    //   theme: {\n    //     logo: \"https://links.papareact.com/sq0\",\n    //      brandColor: \"#F13287\",\n    //      colorScheme: \"auto\",\n    //   }\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.user.username = session.user.name.split(\" \").join(\"\").toLocaleLowerCase();\n            session.user.uid = token.sub;\n            return session; // now console.log(session) will return addtional columns: username and uid\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEMsMERBQTBEO0FBQ0g7QUFDRTtBQUV6RCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1NBQy9DLENBQUM7S0FNSDtJQUNEQyxNQUFNLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNO0lBRTVCLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixNQUFNO0lBQ0pDLEtBQUssRUFBRTtRQUNMQyxNQUFNLEVBQUUsY0FBYztLQUN2QjtJQUVEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxFQUFFO1lBQ3RDRixPQUFPLENBQUNFLElBQUksQ0FBQ0MsUUFBUSxHQUFHSCxPQUFPLENBQUNFLElBQUksQ0FBQ0UsSUFBSSxDQUN0Q0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ1JDLGlCQUFpQixFQUFFLENBQUM7WUFFdkJQLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDTSxHQUFHLEdBQUdQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDO1lBRTdCLE9BQU9ULE9BQU8sQ0FBQyxDQUFDLDJFQUEyRTtTQUM1RjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG4vLyBpbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IFR3aXR0ZXJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy90d2l0dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvLyBUd2l0dGVyUHJvdmlkZXIoe1xuICAgIC8vICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9JRCxcbiAgICAvLyAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCxcbiAgICAvLyB9KSxcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcblxuLy8gICB0aGVtZToge1xuLy8gICAgIGxvZ286IFwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3NxMFwiLFxuLy8gICAgICBicmFuZENvbG9yOiBcIiNGMTMyODdcIixcbi8vICAgICAgY29sb3JTY2hlbWU6IFwiYXV0b1wiLFxuLy8gICB9XG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxuICB9LFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSBzZXNzaW9uLnVzZXIubmFtZVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAuam9pbignJylcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgIHNlc3Npb24udXNlci51aWQgPSB0b2tlbi5zdWI7XG5cbiAgICAgIHJldHVybiBzZXNzaW9uOyAvLyBub3cgY29uc29sZS5sb2coc2Vzc2lvbikgd2lsbCByZXR1cm4gYWRkdGlvbmFsIGNvbHVtbnM6IHVzZXJuYW1lIGFuZCB1aWRcbiAgICB9XG4gIH1cbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJUd2l0dGVyUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJTRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJ1c2VybmFtZSIsIm5hbWUiLCJzcGxpdCIsImpvaW4iLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInVpZCIsInN1YiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();