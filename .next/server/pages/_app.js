"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/global/Header.jsx


const logo = "/assets/icons/smesouk-logo.svg";
const arrowDown = "/assets/icons/arrow-down.svg";
const navItems = [
    {
        id: 1,
        navItem: "Business Toolkit"
    },
    {
        id: 2,
        navItem: "Top Deals"
    },
    {
        id: 3,
        navItem: "SME Community"
    },
    {
        id: 4,
        navItem: "Digital Products"
    },
    {
        id: 5,
        navItem: "About Us"
    }, 
];
const Header = ()=>{
    return(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("nav", {
                className: "bg-white max-w-full mx-32 py-7",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex items-center justify-between text-sm font-bold",
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                className: "cursor-pointer",
                                src: logo,
                                alt: "SMEsouk Logo"
                            }),
                            /*#__PURE__*/ _jsx("ul", {
                                className: "flex space-x-6",
                                children: navItems.map(({ navItem , id  })=>/*#__PURE__*/ _jsxs("li", {
                                        className: "flex items-center space-x-1 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                children: navItem
                                            }),
                                            " ",
                                            /*#__PURE__*/ _jsx("img", {
                                                src: arrowDown,
                                                alt: ""
                                            })
                                        ]
                                    }, id)
                                )
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-center space-x-5",
                                children: [
                                    /*#__PURE__*/ _jsx("button", {
                                        className: "text-primary-default font-bold",
                                        children: "Login"
                                    }),
                                    /*#__PURE__*/ _jsx("button", {
                                        className: "text-primary-default bg-primary-default bg-opacity-10 p-3 font-bold rounded",
                                        children: "Register For Free"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mobile-menu hidden md:hidden",
                        children: [
                            /*#__PURE__*/ _jsx("a", {
                                href: "#",
                                className: "block py-2 px-4 text-sm hover:bg-gray-200",
                                children: "Features"
                            }),
                            /*#__PURE__*/ _jsx("a", {
                                href: "#",
                                className: "block py-2 px-4 text-sm hover:bg-gray-200",
                                children: "Pricing"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "border-primary-dark border-b-4"
            })
        ]
    }));
};
/* harmony default export */ const global_Header = ((/* unused pure expression or super */ null && (Header)));

;// CONCATENATED MODULE: ./components/global/Footer.jsx


const Footer = ()=>{
    return(/*#__PURE__*/ _jsx("div", {
        children: "Footer"
    }));
};
/* harmony default export */ const global_Footer = ((/* unused pure expression or super */ null && (Footer)));

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
// MyApp.propTypes = {
//   Component: PropTypes.node.isRequired,
//   pageProps: PropTypes.node,
// };
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1536));
module.exports = __webpack_exports__;

})();