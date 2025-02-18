"use strict";
console.log("hello typescript");
// Basic Types
// Primitive Types ( number ,string , boolean)
// Arrays
// Truples
// Enums
// any , unknon , void , undefined, null , never
let arr = [1, 2, 3, 4];
// tuples
// fixed the size and varible type
let tup = ["prem", 22];
//Enums --> enumerations
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
// userRoles.ADMIN;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "status 500";
    StatusCodes["NOTFOUND"] = "Status 404";
})(StatusCodes || (StatusCodes = {}));
// any , unknon , void , undefined, null , never
let a; // any
let b;
function abc() {
    console.log("hey");
}
let a2;
// Type Inference
//Understanding type inference
// Type annotations
