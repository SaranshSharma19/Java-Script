/*
        Array
*/
const myArr = [0,1,2,3,4,5,6]
/*
        Shallow Copy - Reference of an Array
        Deep Copy -  Do not Share Reference of an Array
*/
const myHeros = ["Saransh","Batman","Spiderman"]

const myArr2 = new Array(1,2,3,4)

myArr.push(7)
myArr.push(8)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(0)
console.log(myArr);
myArr.unshift(9) // Add new element at the starting
console.log(myArr);
myArr.shift() // Pop element from starting
console.log(myArr);
myArr.shift() 
console.log(myArr);
console.log(myArr.includes(9))
console.log(myArr.indexOf(7))


const newArr = myArr.join()
console.log(typeof newArr);

console.log("---------------------------------------------")
// Slice and Splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr);

console.log()

console.log("C",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("D",myArr);








