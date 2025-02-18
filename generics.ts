// Generics
// Generic functions
// Generic interface
// Generic classes

function genericFun<T>(a:T){console.log(a);}

genericFun<string>("this is string.");
genericFun<number>(22);
genericFun<boolean>(true);

//example two 

function example<PREM>(name:PREM, b:string , c :number){console.log(name , b ,c);}
example<string>("halua", "puri",4);
example(true, "puri",4);   // if u dont give generic <boolean> type it's fine 

// Interface

interface Halua<T> {

    name:string,
    age:number,
    key : T
}
function abb1(obj:Halua<string>){console.log(obj);}
abb1({name:"halue", age:23, key:"jf"})

// Class

class Bottte<T>{
    constructor(public key :T){} 
}

let b11 = new Bottte("hey");
let b12 = new Bottte(23);
console.log(b11 , b12);
