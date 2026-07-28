## TYPESCRIPT ##

# Tsc-typescript compiler-convert ts code into js (npm i typescript -g)

1.ts setup
2.setting up a ts project
3.configuring tsconfig.json
4.compiling ts

# tsconfig-ts's settings (npx tsc —init)

-And if I don’t want to run again & again tsc app.ts I can use  tsc —watch

## TYPES ##

## Basic types

-primitives types(number,string,boolean)
-array
-tuples
-enums
-any ,unknown, void,null,undefined,never


# any
-if don't assign value and type it's called any

# unknown 
- you can pass any value but in future you work with it you have to cheack it's type  like if it is string then you convert it into capitals

# void
 - if function does not return anything then you have to specify it's type as a void

 - and if function has return type so the type of a function should be based on it's return type

 # null

-you'll find somthing and it's not there the value should return null

# undefind
-declare but not assigned value
it's go to any 

-----------
## INTRODUCTION RO TYPE INTERFACE & TYPE ANNOTATIONS ##

1.Type Inference
2.Understanding type inference
3.Type annotation

# INFERENCE
- when you declare a variable but don't assign any type, and from that ts sees that and decide by thein own that this is string or number etc...

# Annotation 

## TYPE ANNOTATION

## INTRODUCTION INTERFACES & TYPES ALIASES
-Defining interfaces
-Using interfaces to define obj shapes
-Extending interfaces
-Types aliases
-Intersection types


-Interface
 2 interface with same name will be merged
-Extending Interface
 

27-7

-fundamentals of type aliases

-intersection types

# fundalmental of classes & objs 
-constructor
-classes & objects:this.keyword
then diff methods created and if we want to touch any variable of it so i have to use this keyword

methods- if function is created inside the func its called method not a function

# access modifire
-public:everywhere u can use it
-private:u only use that var or method in that particular class
-protected:u can use in that particular class and also inextended class

# optinal properties
?
# readonly
u can use readonly if u don't want to change  that paerticular variable u can use after access modifire

# parameters properties

# getter setter

# static members

# abstact class

# functios
-function types
-optinal and default parameters
- rest parameters
-overloads(function overloading)- func with same name but diff args

# 28-7

intersection - when you combine two or more types or interface

# generics

-generic function
-generic interface
-generic classes

# modules
 -exporting & importing modules
 -default exports

 # type Assertion
 # type casting
 # non-null assertion operator
 # guard type 
 -is equal to type narrowing
 -typeof instanceof