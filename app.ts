//tuples
let arr2:[number, string] = [12,'anj']
//enumrations
enum UserRoles{
    ADMIN= 'admin',
    GUEST ='guest',
    SUPER_ADMIN ="super_admin"
}

enum StatusCodes{
    ABANDONED = 'abended',
    ABNAD ='abnad'

}

//number
let a:number = 1
//     type

//any 
let b;
b=12
b='anj'

b.toUpperCase()
console.log(b.toUpperCase())

//unknown
let c:unknown
c=12
b='an'

if(typeof c === "string")
 c.toUpperCase()

let j :string | null = null


//void

function abcd():void{
    console.log('hey')
}

function bcd():string{
    return 'anj'

}

function cd():number{
    return 12

}

//null
let x:null= null

//undefind

let m:undefined
m

//never
// function nvm():never{
//     while(true){}
// }
// nvm()
// console.log('hey')



let f = 12
f

//annotation
let g:number |string =12

function jcb(e:number, l:string):void{}
jcb(12,'an')

let w:[number,string] =[12,'and']


let s:string = '23'
if(s === 'stirng')
console.log(s.toUpperCase())