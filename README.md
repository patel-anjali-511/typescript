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
 

-fundamentals of type aliases

-intersection types