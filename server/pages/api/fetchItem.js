"use strict";
(() => {
var exports = {};
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
// This endpoint will send the user a file hash from IPFS

async function handler(req, res) {
    if (req.method === "POST") {
        const { itemID  } = req.body;
        if (!itemID) {
            return res.status(400).send("Missing itemID");
        }
        const product = _products_json__WEBPACK_IMPORTED_MODULE_0__.find((p)=>p.id === itemID
        );
        if (product) {
            const { hash , filename  } = product;
            return res.status(200).send({
                hash,
                filename
            });
        } else {
            return res.status(404).send("Item not found");
        }
    } else {
        return res.status(405).send(`Method ${req.method} not allowed`);
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
var __webpack_exports__ = (__webpack_exec__(946));
module.exports = __webpack_exports__;

})();