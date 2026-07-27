//tuples
let arr2: [number, string] = [12, "anj"];
//enumrations
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

enum StatusCodes {
  ABANDONED = "abended",
  ABNAD = "abnad",
}

//number
let a: number = 1;
//     type

//any
let b;
b = 12;
b = "anj";

b.toUpperCase();
console.log(b.toUpperCase());

//unknown
let c: unknown;
c = 12;
b = "an";

if (typeof c === "string") c.toUpperCase();

let j: string | null = null;

//void

function abcd(): void {
  console.log("hey");
}

function bcd(): string {
  return "anj";
}

function cd(): number {
  return 12;
}

//null
let x: null = null;

//undefind

let m: undefined;
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
let g: number | string = 12;

function jcb(e: number, l: string): void {}
jcb(12, "an");

let w: [number, string] = [12, "and"];

let s: string = "23";
if (s === "stirng") console.log(s.toUpperCase());

//interface
//  interface User {
//     name:string,
//     email:string,
//     password:string,
//     gender?:string

//  }

//  function efg(obj:User){
//  obj
//  }

//  efg({name:"anjali", email:"anj@gmail.com",password:"anj123"})

//extending interface

//  interface User{
//     name:string,
//     email:string,
//     password:string
//  }
//  interface Admin extends User {
//     admin:string

//  }

//  function pq(obj:Admin){

//  }

//  pq({name:"an",email:"anjaliptl",password:"anp123",admin:'anj'})

//fundamentals of type aliases
// type arg = string | null
// function hj(obj:arg){

// }
// hj(null)

type User = {
  name: string;
  email: string;
};

type Admin = User & {
  getDetails(user: string): void;
};

function bvm(a: Admin) {}

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

class Come{
  constructor(public _name:string, public age:number){
     
  }

   get Name(){
        return this._name;
      }

      set Name(value: string){
        this._name = value
      }
}
let c1 = new Come('anjali', 123)

//static

class Anp{
  static version = 1.0
}

let an = new Anp()

//abstract classes

class gas{
  constructor(protected name:string, public type:string){}
}

class lpg extends gas{

}

//functions 
function abcdefg(name:string,age:number,cb:(arg:string)=>void){
 cb('hhhhhh')
}
abcdefg("anjali",21,(arg:string)=>{
  console.log('hey')
})

//rest

function sum(...arr:number[]){
 console.log(arr)
}
sum(1,2,3,45,)

function frnd(...args:string[]){
  console.log(args[0])
}

frnd('anjali','diva','aura')

//spread

let arr1 =[1,2,3,4]
let arr3=[...arr1]
console.log(arr3)

//overloading
// function xyz(a:string):void
// function xyz(a:string, b:number):number

// function xyz(a:any, b?:any){
//   if(typeof a === 'string' && b === undefined){
//     console.log('hey')
    
//   }if(typeof a === 'string' && typeof b === "number" ){
//     return 123
//   }else throw new Error('somthing went wrong')
// }


// xyz('hey', 12)
function xyz(a: string): void;
function xyz(a: string, b: number): number;

function xyz(a: any, b?: any) {
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