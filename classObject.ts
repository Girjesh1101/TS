//  Classes and Objects
//  lass definition
//  constructors
// Access Modifiers ( Public , private , protected)
// Readonly properties
// Optional Properties
// Parameter properties
// Getter and Setter
// Static Member
// Abstract classes and Methods

class Devices {
    name = "LG";
    price = 120000;
    category = "digital";
}
let d1 = new Devices();

// constructor

class HumanMaker{
    age = 0;
    constructor (public name:string , public isHandsome:boolean){

    }
}

let h1 = new HumanMaker("Prem", true);
let h2 = new HumanMaker("Sakshi", true);

// this Keyword
class randome{
    name = "prem";

    changeName(){
        this.name
    }

    changeSomeStuff(){

        this.changeName();
    }
}

// access modifier

class BottelMaker{

    constructor (private name :string){}
}
class newBottle extends BottelMaker {
    constructor(name :string){
        super(name);
    }

    getValue(){
        console.log(name);
    }
}
let b1 = new BottelMaker("milton");

// readonly

class user {
    constructor (public readonly name :string){}

    changeName(){
        // this.name = "halua"; not access becoz of ready only 
    }
}

let u1 = new user("Prem");

// Getter and Setter

class User12{
    constructor(public _name:string , public _age:number){}
    
    // old way 
    // getName() {
    //     return this.name;
    // }

    // setName(value:string){
    //     this.name = value;
    // }

    // Getter and Setter in typescript

    get name(){
        return this._name;
    }

    set name(value:string){
        this._name = value;
    }

}
let u = new User12("prem", 23);

// Static

class siri {

    static version = 1.0

    static getRandomeNo(){
        return Math.random();
    }
}

// Abstract classes and Methods
