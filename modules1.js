"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
function addPayment(val) {
    console.log(val);
}
function getDetails() {
    console.log("payment details");
}
var className = /** @class */ (function () {
    function className(name) {
        this.name = name;
        console.log(name);
    }
    return className;
}());
exports.default = className;
