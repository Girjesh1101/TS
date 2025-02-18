// Generics
// Generic functions
// Generic interface
// Generic classes
function genericFun(a) { console.log(a); }
genericFun("this is string.");
genericFun(22);
genericFun(true);
//example two 
function example(name, b, c) { console.log(name, b, c); }
example("halua", "puri", 4);
example(true, "puri", 4); // if u dont give generic <boolean> type it's fine 
function abb(obj) { console.log(obj); }
abb({ name: "halue", age: 23, key: "jf" });
// Class
var Bottte = /** @class */ (function () {
    function Bottte(key) {
        this.key = key;
    }
    return Bottte;
}());
var b11 = new Bottte("hey");
var b12 = new Bottte(23);
console.log(b11, b12);
