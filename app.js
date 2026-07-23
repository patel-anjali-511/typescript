"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tuples
let arr2 = [12, 'anj'];
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
b = 'anj';
b.toUpperCase();
console.log(b.toUpperCase());
//unknown
let c;
c = 12;
b = 'an';
if (typeof c === "string")
    c.toUpperCase();
let j = null;
//void
function abcd() {
    console.log('hey');
}
function bcd() {
    return 'anj';
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
jcb(12, 'an');
let w = [12, 'and'];
let s = '23';
console.log(s.toUpperCase());
//# sourceMappingURL=app.js.map