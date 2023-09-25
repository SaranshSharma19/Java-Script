// Java Script is Dnamically typed language

// Primitive Data Types
/*
        7 Types
        1 - String
        2 - Number
        3 - Boolean
        4 - Null
        5 - Undefined
        6 - Symbol (To Make Any Value Unique We Use Symbol)
        7 - BigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(anotherId==id)  // False
const bigNumber = 3456575759947787434n  // BigInt

// Non Primitive/Reference Data Types
/*
        3 Types
        1 - Array
        2 - Objects
        3 - FUnctions
*/

const Heros = ["Saransh","Bijar","Crow"]
let myObj = {
    name:"Saransh Sharma",
    age: 22,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)

// All Non Primitive Data Tyes are Object Data Types
