console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)
console.log("2" > 1)
console.log("02" > 1)

console.log()

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)  // True - Value Conversion Problem

/*
The Reason is That an Equalict Check == and Comparision <>>=<= works differently
Comparision Convert Null to a Number , Treating it as a 0
That's Why (3) null>=0 is True And (1) null>0 is False.
*/

console.log()

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

console.log()
// === Strict Check - It Also Check The Data Type
console.log("2"===2);

