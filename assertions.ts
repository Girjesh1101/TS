// Type Assertion
// Type casting
// non-null assertion operator

let aaa:any = "string";

(aaa as string ).toUpperCase();

(<number> aaa).valueOf();

let aa11 = Number("12"); // this is type casting
console.log(typeof aa11);


let x: null | undefined | string ;

x = "hey";

x!.toUpperCase();