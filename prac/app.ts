//q1

let a:string
a='anj'
let b:number
b=12
let c:true
c=true

//Q2
let d:number[] =  [12,23]
//Q3
let e:[string,number] = ['anj', 12,]
//Q4
let f:string[]= ['anf','np', 'op']
//Q5

enum directions{
    North,
    South,
    East,
    West
}
console.log(directions.North)

//Q6
let g 
g=12,
g='dn',
g=true

//q7

//q8
let value : unknown ='hello'
if(typeof value === 'string')
   console.log(value.toUpperCase()) 

//q9 
let h=12
if(typeof h === "number")
    console.log(h*10)

//q10

function greet():void{
    console.log('hello')
}

greet()

//q11
function add(a:number,b:number):number{
    return a + b
}
console.log(add(1,2))

//q12

function findUser(id:number):string | null{
    if(id === 1){
        return 'harsh'
    }
    return null
}
console.log(findUser(1))
console.log(findUser(2))

//q13
let j 
console.log(j)

//q15

// function throwErroe(message:string):never{
//    throw new Error(message)
// }
// throwErroe('somthing went wrong')

//q16

//q17

//q19

let salary:number 
salary =12

//q20
function multiply(m:number, n:number):number{
    return m*n
}
console.log(multiply(5,5))

//q21
interface User{
    name:string,
    age:number,
    city:string
}
const user :User ={
    name:'anj',
    age:12,
    city:'amd'
}
console.log(user)

//q22
interface Employee{
    id:number,
    name:string,
    salary:number
}

//q23
interface Animal{
    name:string
}

interface Dog extends Animal {
    bread:string
}

const dog:Dog={
    name:'bruno',
    bread:"lab"
}

console.log(dog)

//q24

type Ser = {
    name:string,
    age:number
}

const ser:Ser={
    name:'anj',
    age:12
}

console.log(ser)



//q28
type Person ={
    name:string
}
type Emp ={
    salary:number
}

type PersonEMP = Person & Emp

const Empl : PersonEMP ={
    name:"anj",
    salary:234
}

console.log(Empl)

//q29
type  Student ={
    name:string
}
type Sports ={
    id:number
}

type stuSpo = Student & Sports

const lame:stuSpo ={
     name:'anj',
     id:1
}

console.log(lame)

//q30

interface  Book{
    title:string,
    price:number
}

let Books:Book[] =[
    {
        title:"dvdfvd",
        price:234
    },
     {
        title:"dvdfvd",
        price:234
    },
]

//q32
function fn( val :number | string){
    if (typeof val === 'string'){
        console.log(val.toUpperCase())
    }else{
        console.log(val*2)
    }

}
fn('diva')
fn(10)

//q33

enum Role{
    admin,
    User,
    Guest
}

function wlcm(role:Role):void{
    if(role === Role.admin){
        console.log('wlcm adimg')
    }else if (role === Role.User){
        console.log('wlcm user')
    }else{
        console.log('elcm guest')
    }
}

wlcm(Role.admin)

//q34
interface Car{
  brand:string,
  model:string
}
type Electric ={
  batteryCap:number
}

type ElCar = Car & Electric
const tesla: ElCar ={
    brand:"tesla",
    model:'model 3',
    batteryCap:23
}
console.log(tesla)