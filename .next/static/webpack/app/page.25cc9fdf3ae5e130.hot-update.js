"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Expert/index.tsx":
/*!*****************************************!*\
  !*** ./app/components/Expert/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MultipleItems; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-awesome-reveal */ \"(app-pages-browser)/./node_modules/react-awesome-reveal/dist/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useAuth */ \"(app-pages-browser)/./app/hooks/useAuth.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/firebase */ \"(app-pages-browser)/./lib/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MultipleItems() {\n    _s();\n    const { user, signInWithGoogle } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [reviewExists, setReviewExists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [reviewText, setReviewText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reviewData, setReviewData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Check if user has already submitted a review\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkUserReview = async ()=>{\n            if (user) {\n                const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"reviews\", user.uid);\n                const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(userRef);\n                setReviewExists(userDoc.exists());\n            }\n        };\n        checkUserReview();\n    }, [\n        user\n    ]);\n    // Fetch reviews from Firestore\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchReviews1 = async ()=>{\n            try {\n                const reviewsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"reviews\");\n                const reviewDocs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(reviewsCollection);\n                const reviews = reviewDocs.docs.map((doc)=>({\n                        id: doc.id,\n                        ...doc.data()\n                    }));\n                setReviewData(reviews);\n            } catch (error) {\n                console.error(\"Error fetching reviews:\", error);\n            }\n        };\n        fetchReviews1();\n    }, []);\n    // Handle review submission\n    const handleReviewSubmit = async ()=>{\n        if (!reviewText.trim()) {\n            alert(\"Please enter your review.\");\n            return;\n        }\n        if (user) {\n            const newReview = {\n                userUid: user.uid,\n                review: reviewText,\n                name: user.displayName || \"Anonymous\",\n                imgSrc: user.photoURL || \"\"\n            };\n            try {\n                // Add the new review to the \"reviews\" collection\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"reviews\"), newReview);\n                alert(\"Your review has been submitted!\");\n                // Clear input field\n                setReviewText(\"\");\n                // Update reviewExists state and fetch updated reviews\n                setReviewExists(true);\n                fetchReviews();\n            } catch (error) {\n                console.error(\"Error adding review: \", error);\n                alert(\"Failed to submit your review. Please try again.\");\n            }\n        } else {\n            alert(\"You must be signed in to submit a review.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex py-10 sm:py-20 bg-darkpink\",\n        id: \"expert-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__.Fade, {\n                        direction: \"up\",\n                        delay: 400,\n                        cascade: true,\n                        damping: 1e-1,\n                        triggerOnce: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-pink text-4xl font-bold mb-3 tracking-widest uppercase\",\n                            children: \"اراء المتدربين\"\n                        }, void 0, false, {\n                            fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center\",\n                    children: reviewData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"rounded-full\",\n                                    src: item.imgSrc,\n                                    width: 200,\n                                    height: 200,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center text-xl font-bold\",\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center\",\n                                    children: item.review\n                                }, void 0, false, {\n                                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, item.userUid, true, {\n                            fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this),\n                user ? reviewExists ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center mt-9\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"لقد قمت بإرسال رأيك بالفعل.\"\n                    }, void 0, false, {\n                        fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center mt-9 gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 rounded-full py-5 px-6\",\n                            type: \"text\",\n                            placeholder: \"Write your review...\",\n                            value: reviewText,\n                            onChange: (e)=>setReviewText(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleReviewSubmit,\n                            className: \"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6\",\n                            children: \"اكتب رأيك\"\n                        }, void 0, false, {\n                            fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center mt-9\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"\",\n                            children: \"سجل لتكتب رأيك\"\n                        }, void 0, false, {\n                            fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n            lineNumber: 96,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mohammed/web/next/master_mohammed/app/components/Expert/index.tsx\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this);\n}\n_s(MultipleItems, \"Uq6qH81vBdsRB5jgQEzgdICPemg=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = MultipleItems;\nvar _c;\n$RefreshReg$(_c, \"MultipleItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0V4cGVydC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2I7QUFDYTtBQUNmO0FBQ2lCO0FBRWdDO0FBQ25DO0FBVTVCLFNBQVNZOztJQUVwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR1QsdURBQU9BO0lBQzFDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2dCLFlBQVlDLGNBQWMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFhLEVBQUU7SUFFM0QsK0NBQStDO0lBQy9DRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1xQixrQkFBa0I7WUFDcEIsSUFBSVIsTUFBTTtnQkFDTixNQUFNUyxVQUFVaEIsdURBQUdBLENBQUNLLDZDQUFFQSxFQUFFLFdBQVdFLEtBQUtVLEdBQUc7Z0JBQzNDLE1BQU1DLFVBQVUsTUFBTWpCLDBEQUFNQSxDQUFDZTtnQkFDN0JOLGdCQUFnQlEsUUFBUUMsTUFBTTtZQUNsQztRQUNKO1FBRUFKO0lBQ0osR0FBRztRQUFDUjtLQUFLO0lBRVQsK0JBQStCO0lBQy9CYixnREFBU0EsQ0FBQztRQUNOLE1BQU0wQixnQkFBZTtZQUNqQixJQUFJO2dCQUNBLE1BQU1DLG9CQUFvQmpCLDhEQUFVQSxDQUFDQyw2Q0FBRUEsRUFBRTtnQkFDekMsTUFBTWlCLGFBQWEsTUFBTXBCLDJEQUFPQSxDQUFDbUI7Z0JBQ2pDLE1BQU1FLFVBQVVELFdBQVdFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUN6QixNQUFTO3dCQUMxQzBCLElBQUkxQixJQUFJMEIsRUFBRTt3QkFDVixHQUFHMUIsSUFBSTJCLElBQUksRUFBRTtvQkFDakI7Z0JBRUFiLGNBQWNTO1lBQ2xCLEVBQUUsT0FBT0ssT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7WUFDN0M7UUFDSjtRQUVBUjtJQUNKLEdBQUcsRUFBRTtJQUVMLDJCQUEyQjtJQUMzQixNQUFNVSxxQkFBcUI7UUFDdkIsSUFBSSxDQUFDbkIsV0FBV29CLElBQUksSUFBSTtZQUNwQkMsTUFBTTtZQUNOO1FBQ0o7UUFFQSxJQUFJekIsTUFBTTtZQUNOLE1BQU0wQixZQUFzQjtnQkFDeEJDLFNBQVMzQixLQUFLVSxHQUFHO2dCQUNqQmtCLFFBQVF4QjtnQkFDUnlCLE1BQU03QixLQUFLOEIsV0FBVyxJQUFJO2dCQUMxQkMsUUFBUS9CLEtBQUtnQyxRQUFRLElBQUk7WUFDN0I7WUFFQSxJQUFJO2dCQUNBLGlEQUFpRDtnQkFDakQsTUFBTXBDLDBEQUFNQSxDQUFDQyw4REFBVUEsQ0FBQ0MsNkNBQUVBLEVBQUUsWUFBWTRCO2dCQUN4Q0QsTUFBTTtnQkFFTixvQkFBb0I7Z0JBQ3BCcEIsY0FBYztnQkFFZCxzREFBc0Q7Z0JBQ3RERixnQkFBZ0I7Z0JBQ2ZVO1lBQ0wsRUFBRSxPQUFPUSxPQUFPO2dCQUNaQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtnQkFDdkNJLE1BQU07WUFDVjtRQUNKLE9BQU87WUFDSEEsTUFBTTtRQUNWO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVTtRQUFrQ2YsSUFBRztrQkFDaEQsNEVBQUNjO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQzVDLHNEQUFJQTt3QkFBQzZDLFdBQVc7d0JBQU1DLE9BQU87d0JBQUtDLE9BQU87d0JBQUNDLFNBQVM7d0JBQU1DLGFBQWE7a0NBQ25FLDRFQUFDQzs0QkFBR04sV0FBVTtzQ0FBOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTXBGLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDVjVCLFdBQVdZLEdBQUcsQ0FBQyxDQUFDdUIscUJBQ2IsOERBQUNSOzs4Q0FDRyw4REFBQzVDLGtEQUFLQTtvQ0FBQzZDLFdBQVU7b0NBQWVRLEtBQUtELEtBQUtWLE1BQU07b0NBQUVZLE9BQU87b0NBQUtDLFFBQVE7b0NBQUtDLEtBQUk7Ozs7Ozs4Q0FDL0UsOERBQUNDO29DQUFFWixXQUFVOzhDQUFpQ08sS0FBS1osSUFBSTs7Ozs7OzhDQUN2RCw4REFBQ2lCO29DQUFFWixXQUFVOzhDQUFlTyxLQUFLYixNQUFNOzs7Ozs7OzJCQUhqQ2EsS0FBS2QsT0FBTzs7Ozs7Ozs7OztnQkFRN0IzQixPQUNHRSw2QkFDSSw4REFBQytCO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDWTtrQ0FBRTs7Ozs7Ozs7Ozt5Q0FHUCw4REFBQ2I7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDYTs0QkFDR2IsV0FBVTs0QkFDVmMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBTzlDOzRCQUNQK0MsVUFBVSxDQUFDQyxJQUFNL0MsY0FBYytDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUVqRCw4REFBQ0k7NEJBQ0dDLFNBQVNoQzs0QkFDVFcsV0FBVTtzQ0FBK0Y7Ozs7Ozs7Ozs7O3lDQU1ySCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNvQjt3QkFBT3BCLFdBQVU7a0NBQ2QsNEVBQUMzQyxpREFBSUE7NEJBQUNpRSxNQUFLO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUM7R0FqSXdCekQ7O1FBRWVQLG1EQUFPQTs7O0tBRnRCTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9FeHBlcnQvaW5kZXgudHN4PzA2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xuaW1wb3J0IGNoZWNrUmV2aWV3RGF0YSBmcm9tIFwiLi4vLi4vaG9va3MvY2hlY2tSZXZpZXdEYXRhXCI7XG5pbXBvcnQgeyBkb2MsIGdldERvYywgZ2V0RG9jcywgYWRkRG9jLCBjb2xsZWN0aW9uIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2ZpcmViYXNlXCI7XG5cbi8vIEludGVyZmFjZSBmb3IgcmV2aWV3IGRhdGFcbmludGVyZmFjZSBEYXRhVHlwZSB7XG4gICAgdXNlclVpZDogc3RyaW5nO1xuICAgIHJldmlldzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbWdTcmM6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVsdGlwbGVJdGVtcygpIHtcblxuICAgIGNvbnN0IHsgdXNlciwgc2lnbkluV2l0aEdvb2dsZSB9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IFtyZXZpZXdFeGlzdHMsIHNldFJldmlld0V4aXN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Jldmlld1RleHQsIHNldFJldmlld1RleHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtyZXZpZXdEYXRhLCBzZXRSZXZpZXdEYXRhXSA9IHVzZVN0YXRlPERhdGFUeXBlW10+KFtdKTtcblxuICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIGFscmVhZHkgc3VibWl0dGVkIGEgcmV2aWV3XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tVc2VyUmV2aWV3ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCBcInJldmlld3NcIiwgdXNlci51aWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXREb2ModXNlclJlZik7XG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3RXhpc3RzKHVzZXJEb2MuZXhpc3RzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNoZWNrVXNlclJldmlldygpO1xuICAgIH0sIFt1c2VyXSk7XG5cbiAgICAvLyBGZXRjaCByZXZpZXdzIGZyb20gRmlyZXN0b3JlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsIFwicmV2aWV3c1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdEb2NzID0gYXdhaXQgZ2V0RG9jcyhyZXZpZXdzQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3cyA9IHJldmlld0RvY3MuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgICAgICAgICAgICB9KSkgYXMgdW5rbm93biBhcyBEYXRhVHlwZVtdO1xuXG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3RGF0YShyZXZpZXdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJldmlld3M6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaFJldmlld3MoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBIYW5kbGUgcmV2aWV3IHN1Ym1pc3Npb25cbiAgICBjb25zdCBoYW5kbGVSZXZpZXdTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghcmV2aWV3VGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIHlvdXIgcmV2aWV3LlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdSZXZpZXc6IERhdGFUeXBlID0ge1xuICAgICAgICAgICAgICAgIHVzZXJVaWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgICAgIHJldmlldzogcmV2aWV3VGV4dCxcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8ICdBbm9ueW1vdXMnLFxuICAgICAgICAgICAgICAgIGltZ1NyYzogdXNlci5waG90b1VSTCB8fCAnJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgcmV2aWV3IHRvIHRoZSBcInJldmlld3NcIiBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsICdyZXZpZXdzJyksIG5ld1Jldmlldyk7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIHJldmlldyBoYXMgYmVlbiBzdWJtaXR0ZWQhXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENsZWFyIGlucHV0IGZpZWxkXG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3VGV4dCgnJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcmV2aWV3RXhpc3RzIHN0YXRlIGFuZCBmZXRjaCB1cGRhdGVkIHJldmlld3NcbiAgICAgICAgICAgICAgICBzZXRSZXZpZXdFeGlzdHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgIGZldGNoUmV2aWV3cygpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHJldmlldzogXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBzdWJtaXQgeW91ciByZXZpZXcuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gc3VibWl0IGEgcmV2aWV3LlwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMTAgc206cHktMjAgYmctZGFya3BpbmtcIiBpZD1cImV4cGVydC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtYXgtdy0yeGwgbGc6bWF4LXctN3hsIHNtOnB5LTQgbGc6cHgtOCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkaXJlY3Rpb249eyd1cCd9IGRlbGF5PXs0MDB9IGNhc2NhZGUgZGFtcGluZz17MWUtMX0gdHJpZ2dlck9uY2U9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1waW5rIHRleHQtNHhsIGZvbnQtYm9sZCBtYi0zIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2LHYp9ihINin2YTZhdiq2K/Ysdio2YrZhlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy0zIGdhcC02IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiID5cbiAgICAgICAgICAgICAgICAgICAge3Jldmlld0RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS51c2VyVWlkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz17aXRlbS5pbWdTcmN9IHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkXCI+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57aXRlbS5yZXZpZXd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgIHJldmlld0V4aXN0cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtmE2YLYryDZgtmF2Kog2KjYpdix2LPYp9mEINix2KPZitmDINio2KfZhNmB2LnZhC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtOSBnYXAtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYmxhY2sgYm9yZGVyLTIgcm91bmRlZC1mdWxsIHB5LTUgcHgtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIHJldmlldy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXZpZXdUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldmlld1RleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXZpZXdTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC14bCB3LWZ1bGwgbWQ6dy1hdXRvIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIHB5LTUgcHgtNiBiZy1waW5rIGxnOnB4LTE0IG1yLTYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mD2KrYqCDYsdij2YrZg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXhsIHctZnVsbCBtZDp3LWF1dG8gZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgcHktNSBweC02IGJnLXBpbmsgbGc6cHgtMTQgbXItNic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2LPYrNmEINmE2KrZg9iq2Kgg2LHYo9mK2YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJGYWRlIiwiTGluayIsInVzZUF1dGgiLCJkb2MiLCJnZXREb2MiLCJnZXREb2NzIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsImRiIiwiTXVsdGlwbGVJdGVtcyIsInVzZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwicmV2aWV3RXhpc3RzIiwic2V0UmV2aWV3RXhpc3RzIiwicmV2aWV3VGV4dCIsInNldFJldmlld1RleHQiLCJyZXZpZXdEYXRhIiwic2V0UmV2aWV3RGF0YSIsImNoZWNrVXNlclJldmlldyIsInVzZXJSZWYiLCJ1aWQiLCJ1c2VyRG9jIiwiZXhpc3RzIiwiZmV0Y2hSZXZpZXdzIiwicmV2aWV3c0NvbGxlY3Rpb24iLCJyZXZpZXdEb2NzIiwicmV2aWV3cyIsImRvY3MiLCJtYXAiLCJpZCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVSZXZpZXdTdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJuZXdSZXZpZXciLCJ1c2VyVWlkIiwicmV2aWV3IiwibmFtZSIsImRpc3BsYXlOYW1lIiwiaW1nU3JjIiwicGhvdG9VUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJkZWxheSIsImNhc2NhZGUiLCJkYW1waW5nIiwidHJpZ2dlck9uY2UiLCJoMiIsIml0ZW0iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Expert/index.tsx\n"));

/***/ })

});