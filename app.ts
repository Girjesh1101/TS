console.log("hello typescript");

// Basic Types

// Primitive Types ( number ,string , boolean)
// Arrays
// Truples
// Enums
// any , unknon , void , undefined, null , never

let arr:number[] = [1,2,3,4]

// tuples
// fixed the size and varible type
let tup:[string , number] = ["prem", 22];

//Enums --> enumerations

enum userRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
// userRoles.ADMIN;

enum StatusCodes{
    ABANDONED = "status 500",
    NOTFOUND = "Status 404"
}

// any , unknon , void , undefined, null , never

let a; // any
let b:unknown;

function abc():void{
    console.log("hey");
}

let a2 : null;

// Type Inference

//Understanding type inference
// Type annotations

 