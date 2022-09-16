"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ modalState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const modalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "modalState",
    default: false
});


/***/ }),

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(377);



//////
// import icons from heroicons 




// import packages for global state management


/////
// Main header function 
function Header() {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    //   console.log(session)
    // statement management with recoil
    const [open, setOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__/* .modalState */ .e);
    //   console.log('what is modal state') 
    //   console.log(modalState)
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    //   console.log(session)
    //   console.log('session.user.image: ', session?.user?.image)
    //   const getProfile = async (session) => {
    // 	if (session.user != null) {
    // 		return session.user.image
    // 	}
    //   }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shadow-sm border-b bg-white sticky top-0 z-50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-between bg-white mx-5 lg:mx-auto max-w-6xl ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative hidden lg:inline-grid ml-2 p-2 w-24 cursor-pointer",
                    onClick: ()=>router.push("/"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "https://links.papareact.com/ocw",
                        layout: "fill" // it takes the max of the screen
                        ,
                        // Need to add to next.config.js the following
                        // images: {
                        //     domains: ['links.papareact.com']
                        //   }
                        objectFit: "contain" //keep the ratios of the image
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-10 m2-1 p-2 lg:hidden flex-shrink-0 cursor-pointer",
                    onClick: ()=>router.push("/"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "https://links.papareact.com/jjm",
                        layout: "fill",
                        objectFit: "contain"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xs",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative p-2 rounded-md",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-y-0 pl-3 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
                                    className: "h-5 w-5 text-gray-500"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black",
                                type: "text",
                                placeholder: "Search"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex mr-2 items-center justify-end space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
                            className: "h-6 md:hidden cursor-pointer"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.HomeIcon, {
                            className: "navBtn",
                            onClick: ()=>router.push("/")
                        }),
                        session ? // wrap the following in a fragment: <></>
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative navBtn",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.PaperAirplaneIcon, {
                                            className: "navBtn rotate-45"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white",
                                            children: "3"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {
                                    onClick: ()=>setOpen(true),
                                    className: "navBtn"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.UserGroupIcon, {
                                    className: "navBtn"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative navBtn",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.HeartIcon, {
                                            className: "navBtn"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute -top-1 -right-1 text-xs w-5 h-5 bg-pink-300 rounded-full flex items-center justify-center animate-pulse text-gray-500",
                                            children: "5"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut,
                                    src: session?.user?.image,
                                    // src="https://lh3.googleusercontent.com/a/AItbvmlrshufbStw5Lm75OfyiTMDVYmPTg8Kl1JmftjhtQ=s96-c"
                                    // src={getProfile}
                                    // src="https://lh3.googleusercontent.com/a-/AFdZucp9ioenVp32syMGC2Vx9_Fr5kKiYvrChwHn-2QQxA=s96-c"
                                    // src="https://links.papareact.com/3ke" 
                                    // src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E03AQHdafUD-c86xA%2Fprofile-displayphoto-shrink_200_200%2F0%2F1625974740375%3Fe%3D1657756800%26v%3Dbeta%26t%3DdRr0Hw_4Njr6rhJn6GxtuYgtEQlZHvI6P5WX9P1GwjA&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fpub%2Fdir%2FShen%2B%2FChen%3Ftrk%3Dpublic_profile_samename-see-all&tbnid=UkdMzVzak7zQ7M&vet=12ahUKEwitpbiL2_v5AhVvg3IEHbqWB3kQMygOegQIARBS..i&docid=Y8HUEnF5rFRr_M&w=200&h=200&itg=1&q=sean%20chen%20shen&ved=2ahUKEwitpbiL2_v5AhVvg3IEHbqWB3kQMygOegQIARBS"				
                                    alt: "profile pic",
                                    className: "h-8 w-8 rounded-full cursor-pointer"
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn,
                            children: "Sign In"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;