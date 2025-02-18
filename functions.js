// Functions
// function Types
// Optional and Default Parameters
// Rest parameters
// Overloads
function abcd(name, cb) {
    cb("Hey");
}
abcd("function type", function (value) {
    console.log(value);
});
// optional
function info(name, age, gender) {
    console.log(name, age, gender);
}
info("harsh", 23, "male");
info("ahavi", 21);
//default
function info1(name, age, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    console.log(name, age, gender);
}
info1("harsh", 23, "male");
info1("ahavi", 21);
//  ... rest / spread operator
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 110);
function friends() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
friends("prem", "sunil", "sumit");
// overloading
// function ol(a:string) :string ;
// function ol(a:string, b:number):number;
// function ol(a:any , b:any){
//     if(typeof a === 'string' && typeof b === 'undefined'){
//         console.log("hey");
//     }
//     if(typeof a === 'string' && typeof b === 'number'){
//         return 1243;
//     }
//     else throw new Error("something is wrong");
// }
// ol("hey");
// ol("hey", 123);
