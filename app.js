"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tuples
let arr2 = [12, "anj"];
//enumrations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abended";
    StatusCodes["ABNAD"] = "abnad";
})(StatusCodes || (StatusCodes = {}));
//number
let a = 1;
//     type
//any
let b;
b = 12;
b = "anj";
b.toUpperCase();
console.log(b.toUpperCase());
//unknown
let c;
c = 12;
b = "an";
if (typeof c === "string")
    c.toUpperCase();
let j = null;
//void
function abcd() {
    console.log("hey");
}
function bcd() {
    return "anj";
}
function cd() {
    return 12;
}
//null
let x = null;
//undefind
let m;
m;
//never
// function nvm():never{
//     while(true){}
// }
// nvm()
// console.log('hey')
let f = 12;
f;
//annotation
let g = 12;
function jcb(e, l) { }
jcb(12, "an");
let w = [12, "and"];
let s = "23";
if (s === "stirng")
    console.log(s.toUpperCase());
function bvm(a) { }
//intersection types
//constructor
// class HumanMaker {
//     constructor(o:string){}
// }
// new HumanMaker('anj')
// class bottle {
//   constructor(
//     public bracnd: string,
//     public price: number,
//     public color: string,
//     public material: string,
//   ) {}
// }
// let b1 = new bottle("anj", 23, "yellow", "metal");
// class music {
//   constructor(public name:string, public artist:string, public thumbnail:string="a.jpg"){
//   }
// }
// let  m1 = new music('bamulaiza','mika', '')
// m1.name = 'chunnari'
// console.log(m1)
// class bnm{
//   name = 'anjali'
//   change(){
//     this.name
//     this.changeName()
//   }
//   changeName(){
//     console.log('hey')
//   }
// }
class Come {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
let c1 = new Come('anjali', 123);
//static
class Anp {
    static version = 1.0;
}
let an = new Anp();
//abstract classes
class gas {
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
class lpg extends gas {
}
//functions 
function abcdefg(name, age, cb) {
    cb('hhhhhh');
}
abcdefg("anjali", 21, (arg) => {
    console.log('hey');
});
//rest
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 45);
function frnd(...args) {
    console.log(args[0]);
}
frnd('anjali', 'diva', 'aura');
//spread
let arr1 = [1, 2, 3, 4];
let arr3 = [...arr1];
console.log(arr3);
function xyz(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
        return;
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    throw new Error("Something went wrong");
}
xyz("hey");
console.log(xyz("hey", 12));
//# sourceMappingURL=app.js.map