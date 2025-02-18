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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Devices = /** @class */ (function () {
    function Devices() {
        this.name = "LG";
        this.price = 120000;
        this.category = "digital";
    }
    return Devices;
}());
var d1 = new Devices();
// constructor
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
    return HumanMaker;
}());
var h1 = new HumanMaker("Prem", true);
var h2 = new HumanMaker("Sakshi", true);
// this Keyword
var randome = /** @class */ (function () {
    function randome() {
        this.name = "prem";
    }
    randome.prototype.changeName = function () {
        this.name;
    };
    randome.prototype.changeSomeStuff = function () {
        this.changeName();
    };
    return randome;
}());
// access modifier
var BottelMaker = /** @class */ (function () {
    function BottelMaker(name) {
        this.name = name;
    }
    return BottelMaker;
}());
var newBottle = /** @class */ (function (_super) {
    __extends(newBottle, _super);
    function newBottle(name) {
        return _super.call(this, name) || this;
    }
    newBottle.prototype.getValue = function () {
        console.log(name);
    };
    return newBottle;
}(BottelMaker));
var b1 = new BottelMaker("milton");
// readonly
var user = /** @class */ (function () {
    function user(name) {
        this.name = name;
    }
    user.prototype.changeName = function () {
        // this.name = "halua"; not access becoz of ready only 
    };
    return user;
}());
var u1 = new user("Prem");
