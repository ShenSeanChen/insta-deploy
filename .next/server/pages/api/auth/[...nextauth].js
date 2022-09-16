"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 8779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/twitter"
const twitter_namespaceObject = require("next-auth/providers/twitter");
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js

// import GithubProvider from "next-auth/providers/github"


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    // Configure one or more authentication providers
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    //   theme: {
    //     logo: "https://links.papareact.com/sq0",
    //      brandColor: "#F13287",
    //      colorScheme: "auto",
    //   }
    pages: {
        signIn: "/auth/signin"
    },
    callbacks: {
        async session ({ session , token , user  }) {
            session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
            session.user.uid = token.sub;
            return session; // now console.log(session) will return addtional columns: username and uid
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8779));
module.exports = __webpack_exports__;

})();