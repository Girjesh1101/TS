// interfaces and Type Aliases
// . Defining interfaces
// . Using interfaces to define object shapes
// . Extending interfaces
// . Type alieases
// . Intersection types 

// interface types 

interface User{
    name:string,
    email:string,
    password:string,
    gender?:string  // ? use for optional
}

function abcd4(obj:User){

}

abcd4({name:"prem", email:"prem@gmail.com", password:"123"}); // without optional
abcd4({name:"prem", email:"prem@gmail.com", password:"123", gender:"male"});

// extending interface

interface User1{
    name:string,
    email:string,
    password:string,
    gender?:string  // ? use for optional
}

interface admin extends User1 {
    admin:string
}

function adminUser(obj:admin){
    obj.admin
}
adminUser({name:"prem", email:"prem@gmail.com", password:"123", admin:"admin"})

// Type aliases

type prem = boolean;

let aliasesTypes : prem;

// real time use 

type value = string | number | boolean ;

let ty : value ;

function ab(abj :value){}

// union and intersection

let z : string | null ; // ( | ) --> is called union

//interaction

type adc ={
    name :string ,
    email:string
}

type sup = adc & {
    getDataUser(data:string):void
}

function abcdw(obj:sup){
    obj.getDataUser("hello");
}
function printHello(){console.log("hello");}
abcdw({
    name: "h", email: "abc@gmail.com",
    getDataUser: function (data: string): void {
        throw new Error("Function not implemented.");
    }
})