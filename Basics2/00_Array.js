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
const myn1 = myArr.slice(1,3) // End Index Not Included and it will not remove element from the original array also
console.log(myn1)
console.log("B",myArr);

console.log()

console.log("C",myArr);
const myn2 = myArr.splice(1,3)  // End Index Included and it will remove element from the original array also
console.log(myn2)
console.log("D",myArr);

console.log("---------------------------------------------")

var a = new Array("hi","Hello","Hey","Whatsup")
console.log(a)

var arr = new Array(3) // 3 is the size of array

for(var g=0;g<3;g++){
        arr[g] = `Hello ${g}`
}
console.log(arr)