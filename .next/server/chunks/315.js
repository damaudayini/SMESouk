exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 9861:
/***/ ((module) => {

// Exports
module.exports = {
	"otpField": "login_otpField__278_N",
	"otpError": "login_otpError__3lPWc",
	"content": "login_content__2ZAFr",
	"SCard": "login_SCard__3PPd0"
};


/***/ }),

/***/ 7064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* unused harmony export antdNumCheck */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const antdNumCheck = (e)=>{
    if (!e.key.match(/^\d+$/) && e.which != 8 && e.which != 9 && e.which != 46 && e.which != 37 && e.which != 39) {
        e.preventDefault();
    }
};
const useWindowSize = ()=>{
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
};


/***/ }),

/***/ 2354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1944);
/* harmony import */ var _ant_design_react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_react_slick__WEBPACK_IMPORTED_MODULE_1__);


const sliderImg = "/assets/images/handshake.png";
const OnboardSlider = ()=>{
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        dotsClass: "slick-dots slick-thumb"
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-2/4 h-full bg-gray-500 col-lg-6 p-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
            ...settings,
            className: "h-screen",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-screen relative inline-flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    className: "absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-10 after:absolute after:content-[''] after:opacity-80 after:w-full after:h-full after:top-0 after:right-0 after:bottom-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "h-full w-full inline-block object-cover",
                        src: sliderImg,
                        alt: "sliderChange"
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardSlider);


/***/ }),

/***/ 6634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ validateInfo)
/* harmony export */ });
function validateInfo(values) {
    let errors = {
    };
    // Phone Validation
    if (!values.phone.trim()) {
        errors.phone = "Phone number is required!";
    }
    if (!values.loginPhone.trim()) {
        errors.loginPhone = "Phone number is required!";
    }
    //  Email Validation
    if (!values.email.trim()) {
        errors.email = "Email address is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.loginEmail.trim()) {
        errors.loginEmail = "Email address is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.loginEmail)) {
        errors.loginEmail = "Email address is invalid";
    }
    //   Identity Number Validation
    if (!values.identityNo.trim()) {
        errors.identityNo = "Identity number is required!";
    }
    //   License Validation
    if (!values.license.trim()) {
        errors.license = "Business trade license number is required!";
    }
    //   Date of Incorporation values
    if (!values.incorporationDate.trim()) {
        errors.incorporationDate = "Incorporation date is required!";
    }
    // Phone Validation
    if (!values.phone.trim()) {
        errors.phone = "Phone number is required!";
    }
    //  Email Validation
    if (!values.email.trim()) {
        errors.email = "Email address is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    //   Identity Number Validation
    if (!values.identityNo.trim()) {
        errors.identityNo = "Identity number is required!";
    }
    //   License Validation
    if (!values.license.trim()) {
        errors.license = "Business trade license number is required!";
    }
    //   Date of Incorporation values
    if (!values.incorporationDate.trim()) {
        errors.incorporationDate = "Incorporation date is required!";
    }
    // Cardname Validation
    if (!values.cardname.trim()) {
        errors.cardname = "Name is required!";
    }
    // BuisnessName Validation
    if (!values.buisnessname.trim()) {
        errors.buisnessname = "Buisness name is required!";
    }
    // BuisnessEmail Validation
    if (!values.buisnessemail.trim()) {
        errors.buisnessemail = "Buisness email is required!";
    }
    // BuisnessProfile Validation
    if (!values.Businessprofile.trim()) {
        errors.Businessprofile = "Buisness profile is required!";
    }
    // phoneNumber Validation
    if (!values.phonenumber.trim()) {
        errors.phonenumber = "Phone number is required!";
    }
    return errors;
};


/***/ }),

/***/ 5589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useForm = (callback, validate)=>{
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        phone: "",
        countryCode: "",
        email: "",
        identity: "",
        identityNo: "",
        license: "",
        incorporationDate: "",
        cardname: "",
        buisnessname: "",
        buisnessemail: "",
        websiteLink: "",
        Businessprofile: "",
        phonenumber: "",
        loginPhone: "",
        loginEmail: "",
        otp: ""
    });
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    });
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("FORM VALUES========>>>>>>", values);
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [
        errors
    ]);
    return {
        handleChange,
        values,
        handleSubmit,
        errors
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useForm);


/***/ })

};
;