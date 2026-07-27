"use strict";
//q1
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 'anj';
let b;
b = 12;
let c;
c = true;
//Q2
let d = [12, 23];
//Q3
let e = ['anj', 12,];
//Q4
let f = ['anf', 'np', 'op'];
//Q5
var directions;
(function (directions) {
    directions[directions["North"] = 0] = "North";
    directions[directions["South"] = 1] = "South";
    directions[directions["East"] = 2] = "East";
    directions[directions["West"] = 3] = "West";
})(directions || (directions = {}));
console.log(directions.North);
//Q6
let g;
g = 12,
    g = 'dn',
    g = true;
//q7
//q8
let value = 'hello';
if (typeof value === 'string')
    console.log(value.toUpperCase());
//q9 
let h = 12;
if (typeof h === "number")
    console.log(h * 10);
//q10
function greet() {
    console.log('hello');
}
greet();
//q11
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//q12
function findUser(id) {
    if (id === 1) {
        return 'harsh';
    }
    return null;
}
console.log(findUser(1));
console.log(findUser(2));
//q13
let j;
console.log(j);
//q15
// function throwErroe(message:string):never{
//    throw new Error(message)
// }
// throwErroe('somthing went wrong')
//q16
//q17
//q19
let salary;
salary = 12;
//q20
function multiply(m, n) {
    return m * n;
}
console.log(multiply(5, 5));
const user = {
    name: 'anj',
    age: 12,
    city: 'amd'
};
console.log(user);
const dog = {
    name: 'bruno',
    bread: "lab"
};
console.log(dog);
const ser = {
    name: 'anj',
    age: 12
};
console.log(ser);
const Empl = {
    name: "anj",
    salary: 234
};
console.log(Empl);
const lame = {
    name: 'anj',
    id: 1
};
console.log(lame);
let Books = [
    {
        title: "dvdfvd",
        price: 234
    },
    {
        title: "dvdfvd",
        price: 234
    },
];
//q32
function fn(val) {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val * 2);
    }
}
fn('diva');
fn(10);
//q33
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function wlcm(role) {
    if (role === Role.admin) {
        console.log('wlcm adimg');
    }
    else if (role === Role.User) {
        console.log('wlcm user');
    }
    else {
        console.log('elcm guest');
    }
}
wlcm(Role.admin);
const tesla = {
    brand: "tesla",
    model: 'model 3',
    batteryCap: 23
};
console.log(tesla);
//# sourceMappingURL=app.js.map