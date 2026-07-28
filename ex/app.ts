// let name:string = 'anjali'
// let age : number = 12


// function multiply(a:number , b:number):number{
//    return a*b
// }
// console.log(multiply(12,12))



// let arr:number[] = [1,2,3,4,5]
// for(let num of arr){
//     console.log(num*2)
// }


// let tuple:[number,string,boolean] = [1,'anj', false]
// console.log(tuple)




// enum status{
//     pending,
//     approved,
//     rejected
// }
// let current:status = status.approved
// console.log(current)


// let m
// m=1
// m='snf'
// m=true
// m=[1,2,3,]



// function accept(value:any):void{
// console.log(value)
// }
// accept(12)
// accept('ghj')
// accept(true)
// accept([1,2,3])



// let j:unknown
// j='tilak'
// if(typeof j === 'string')
//     console.log(j.toUpperCase())



// // let data:unknown =[1,2,3,4]
// // if(Array.isArray(data)){
// //     console.log(data.length)
// // }


// let data:unknown = [1,2,3,4]
// if(Array.isArray(data)){
//     console.log(data.length)
// }


// function wlcm():void{
//     console.log('welcom ro typescript')
// }
// console.log(wlcm())




// function findUser(id:number): string | null {
//     if(id === 1){
//         return 'anjali'
//     }
//     return null
// }

// console.log(findUser(1))
// console.log(findUser(2))



// let val:unknown = 8
// if(typeof val === 'number'){
//     console.log(val*val)
// }

// function throwError(message:string):never{
//     throw new Error(message)
// }

// throwError('something went wrong')


// let city = 'ahmdabad'

// let k:string[]=['q','d','v']
// console.log(k)

// interface person{
//     name:string,
//     age:number,
//     city:string
// }

// let person:person ={
//     name:'diya',
//     age:12,
//     city:'ahd'
// }
// console.log(person)


//  interface emp{
//     id:number,
//     department:string,
//     salary:number
//  }

//  let n:emp = {
//     id:1,
//     department:'it',
//     salary:123
//  }

//  console.log(n)


//  interface Animal{
//     name:string
//  }

//  interface Dog extends Animal{
//     bread:string
//  }

//  let o:Dog ={
//     name:"do",
//     bread:'lanb'
//  }

//  console.log(o)


//  type Student ={
//     name:string
//  }

// let studentA:Student ={
//   name:'a'
//  }

//  let studentB:Student={
//     name:'b'
//  }
//  console.log(studentA)
//  console.log(studentB)


// type ID = string | number
// let id1:ID = 101
// let id2:ID = 'emp1'
// console.log(id1)
// console.log(id2)


// type Status = 'Pending' | 'Completed' | 'Cancelled'
// let order1:Status = "Pending"
// let order2:Status = 'Completed'
// let order3:Status = 'Cancelled'
// console.log(order1)
// console.log(order2)
// console.log(order3)


// interface person {
//    name:String
// }

// interface Employee{
//    department:string
// }

// type pEmp = person & Employee

// let emp:pEmp = {
//    name:'anjali',
//    department:"IT"
// }

// console.log(emp)


// type car ={
//    name:string
// }
// type Electric ={
//    type:string
// }

// type carEl = car & Electric
// let c:carEl = {
//    name:'tesla',
//    type:'ele'
// }
// console.log(c)

// class  Student{
//    id:number
//    name:string

//    constructor( id:number, name:string){
//       this.name=name,
//       this.id= id
//    }

//    display():void{
//       console.log("ID:",this.id)
//       console.log('Name:',this.name)
//    }
// }

// let s1 = new Student(12,'anj')
// // console.log(s1)
// s1.display()


// class student{
//    name:string
//    depart:string

//    constructor(name:string,depart:string){
//       this.name=name
//       this.depart=depart
//    }
//    display():void{
//       console.log(`ID: ${this.name}`)
//       console.log(`depart: ${this.depart}`)
//    }
// }

// let s1= new student('anj','IT')
// let s2 = new student('mj','cybr')
// let s3 = new student('tom','AI')
// console.log(s1,s2,s3)
// s1.display()
// s2.display()
// s3.display()

// class Rectangle{
//    constructor(public l:number, public b:number, ){}

//    area():number{
//     return this.l * this.b 
//    }
//    perimeter():number{
//    return 2 * (this.l + this.b)
//    }
// }

// let r1 = new Rectangle(2,3)
// // r1.area()
// // r1.perimeter()

// console.log('Area', r1.area())
// console.log('Perimeter', r1.perimeter())


// class BankAccount{
   
   // constructor(public accountNumber:number, public balance:number){ }
   // deposite(amount:number):void{

   //     this.balance += amount
   //     console.log(`${amount} deposited`)
   // }
   // withdraw(amount:number):void{
   //    if(amount > this.balance){
   //       console.log('insufficient balance')
   //    }else{
   //       this.balance -= amount
   //       console.log(`${amount} withdrawn`)

   //    }

   // }
   // displayBalace():void{
//       console.log(`current balance:${this.balance}`)

//    }
// }
// let b1 = new BankAccount(123456789,1000)

// b1.displayBalace()
// b1.deposite(23)
// b1.displayBalace()

// b1.withdraw(300)
// b1.displayBalace()

// b1.withdraw(300)
// b1.displayBalace()

// b1.withdraw(2000)


