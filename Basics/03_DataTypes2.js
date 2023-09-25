/*

Conversion 

*/

console.log()

let score = "33abc"
console.log(typeof score)
console.log(typeof(score))


let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log( valueInNumber)  // NaN

console.log()

let marks = null
console.log(typeof marks)
console.log(typeof(marks))


let valueInMarks = Number(marks)
console.log(typeof valueInMarks)
console.log( valueInMarks)  // 0

console.log()

let age = undefined
console.log(typeof age)
console.log(typeof(age))


let valueInAge = Number(age)
console.log(typeof valueInAge)
console.log( valueInAge)  // NaN

console.log()

let bool = true
console.log(typeof bool)
console.log(typeof(bool))


let valueInBool = Number(bool)
console.log(typeof valueInBool)
console.log( valueInBool)  // 1


/*

"33" => 33
"33abc" => NaN
"true" => 1

*/

console.log()

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isName = ""
let booleanIsName = Boolean(isName)
console.log(booleanIsName)

isName = "Saransh"
booleanIsName = Boolean(isName)
console.log(booleanIsName)

console.log()

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

