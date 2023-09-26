/*
        Number
*/

const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toFixed(2))

let otherNumber = 13.5966
console.log(otherNumber.toPrecision(3))
otherNumber = 13.4966
console.log(otherNumber.toPrecision(3))
otherNumber = 13.500
console.log(otherNumber.toPrecision(3))
otherNumber = 13.4966
console.log(otherNumber.toPrecision(2))
otherNumber = 125.4966
console.log(otherNumber.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log("---------------------------------------------")

/*
        Maths
*/
console.log(Math);
console.log(Math.abs(-19))
console.log(Math.round(5.4))
console.log(Math.round(5.6))
console.log(Math.ceil(5.2))
console.log(Math.floor(5.2))
console.log(Math.min(4,2,3,6,8,1))
console.log(Math.max(4,2,3,6,8,1))

console.log(Math.random())  // Random Value Between 0 and 1 including 0 and 1
console.log(((Math.random()* 10)+1).toFixed(0))  

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1))+min))




