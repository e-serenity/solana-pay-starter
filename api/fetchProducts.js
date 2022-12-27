"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);

function handler(req, res) {
    // If get request
    if (req.method === "GET") {
        // Create a copy of products without the hashes and filenames
        const productsNoHashes = _products_json__WEBPACK_IMPORTED_MODULE_0__.map((product)=>{
            const { hash , filename , ...rest } = product;
            return rest;
        });
        res.status(200).json(productsNoHashes);
    } else {
        res.status(405).send(`Method ${req.method} not allowed`);
    }
};


/***/ }),

/***/ 277:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"TOP 5 Race - 12-22-2022","price":"0.01","description":"TOP 5 Race - 12-22-2022","image_url":"https://www.pngkey.com/png/detail/151-1513934_vector-freeuse-cliparts-suggest-vectors-top-5-logo.png","filename":"TOP-5-Race-12-22-2022.png","hash":"QmbDYAq2tjbRLR6NcA568yxNKud7F2qSf8uQUqHwtYoM37"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(961));
module.exports = __webpack_exports__;

})();