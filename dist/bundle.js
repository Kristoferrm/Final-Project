/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebaseConfig */ \"./src/js/firebaseConfig.js\");\n/* harmony import */ var _signInValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signInValidation */ \"./src/js/signInValidation.js\");\n\n\n\n\nconst emailInput = document.querySelector('.email');\nconst passwordInPut = document.querySelector('.passord');\nconst signInButton = document.querySelector('.btn');\nconst emailError = document.querySelector('.email-error');\nconst passwordError = document.querySelector('.password-error');\nconst signInForm = document.querySelector('.sign-in-form');\nconst submissionError = document.querySelector('.submission-error');\n\nsignInButton.addEventListener('click', (e)=>{\n\te.preventDefault();\n\t(0,_signInValidation__WEBPACK_IMPORTED_MODULE_1__.validateSignInForm)(emailInput.value, passwordInPut.value, emailError, passwordError);\n});\n\n\n\n//# sourceURL=webpack://fiinalproject/./src/js/app.js?");

/***/ }),

/***/ "./src/js/firebaseConfig.js":
/*!**********************************!*\
  !*** ./src/js/firebaseConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\n\tapiKey: \"AIzaSyACi7UN7we8ruXZ5-5OxJEVIsYqsOM4_m0\",\n\tauthDomain: \"final-project-63f26.firebaseapp.com\",\n\tprojectId: \"final-project-63f26\",\n\tstorageBucket: \"final-project-63f26.appspot.com\",\n\tmessagingSenderId: \"877489950684\",\n\tappId: \"1:877489950684:web:ada0d3c708b31546eb8919\"\n  };\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);\n\n//# sourceURL=webpack://fiinalproject/./src/js/firebaseConfig.js?");

/***/ }),

/***/ "./src/js/signInValidation.js":
/*!************************************!*\
  !*** ./src/js/signInValidation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateSignInForm: () => (/* binding */ validateSignInForm)\n/* harmony export */ });\n\nconst validateSignInForm = (email, password, emailErrorElement, passErrorElement)=>{\n\tconst errors = {\n\t\terreroStatus: false,\n\t\temailError: '',\n\t\tpasswordError: '',\n\t}\n\n\tif (!email && !password){\n\n\t\t\terrors.erreroStatus = true,\n\t\t\terrors.emailErrorElement = \"Email is required!\",\n\t\t\terrors.passwordError = \"Password is required!\";\n\n\t\t\temailErrorElement.style.visibility = 'visible';\n\t\t\tpassErrorElement.style.visibility = 'visible';\n\n\t\t\temailErrorElement.textContent = errors.emailError;\n\t\t\tpassErrorElement.textContent = errors.passwordError;\n\n\t} else if (!email){\n\t\terrors.erreroStatus = true,\n\t\t\terrors.emailErrorElement = \"Email is required!\",\n\t\t\terrors.passwordError = \"\";\n\n\t\t\temailErrorElement.style.visibility = 'visible';\n\t\t\tpassErrorElement.style.visibility = '';\n\n\t\t\temailErrorElement.textContent = errors.emailError;\n\t\t\tpassErrorElement.textContent = errors.passwordError; \n\n\t} else if(!password){\n\t\terrors.erreroStatus = true,\n\t\t\terrors.emailErrorElement = \"\",\n\t\t\terrors.passwordError = \"Password is required!\";\n\n\t\t\temailErrorElement.style.visibility = 'hidden';\n\t\t\tpassErrorElement.style.visibility = 'visible';\n\n\t\t\temailErrorElement.textContent = errors.emailError;\n\t\t\tpassErrorElement.textContent = errors.passwordError; \n\n\t} else {\n\t\terrors.erreroStatus = true,\n\t\t\terrors.emailErrorElement = \"\",\n\t\t\terrors.passwordError = \"\";\n\n\t\t\temailErrorElement.style.visibility = 'hidden';\n\t\t\tpassErrorElement.style.visibility = 'hidden';\n\n\t\t\temailErrorElement.textContent = errors.emailError;\n\t\t\tpassErrorElement.textContent = errors.passwordError; \t\n\t}\n\t\nconst signInFormStatus = ()=>{\n\treturn errors.erreroStatus\n}\n\nreturn { signInFormStatus}\n};\n\n\n\n//# sourceURL=webpack://fiinalproject/./src/js/signInValidation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;