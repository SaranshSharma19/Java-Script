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

// Push - Append/Insert Element At Last
myArr.push(7)
myArr.push(8)
console.log(myArr);

// Pop - Remove Element From Last
myArr.pop()
console.log(myArr);
myArr.unshift(0)
console.log(myArr);

// Unshift - Add new element at the starting
myArr.unshift(9) 
console.log(myArr);

// Shift - Pop element from starting
myArr.shift() 
console.log(myArr);
myArr.shift() 
console.log(myArr);

// Includes - Check whether a particular element is present in the array or not.
console.log(myArr.includes(9))

// Indexof(Item,start) - Give index of element  
console.log(myArr.indexOf(7))

// lastIndexof(Item,start) - Give last index of element
var a = ["Aman","Saransh","Raju","Avi","Saransh","Aman"]
console.log("Last Index Of Element",a.lastIndexOf("Saransh"))

const newArr = myArr.join()
console.log(typeof newArr);

// Concat - Merge Two Array
var a = ["Sanjay","Aman","Saransh","Messi"]
var b = ["Rahul","Karan"]
a = a.concat(b)
console.log("Concat",a)

var c = ["Priya","Tina","Arusha"]
var d = ["Raman","Rachit"]
b = b.concat(c,d)
console.log("Concat :",b)

// Join - It will join all element together and make one value as string
var e = a.join(" ")
console.log("Join: ",e);

// Slice - It is Used to get some elements from array and it will not remove element from the original array and end index is not included.
console.log("A",myArr);
const myn1 = myArr.slice(1,3) 
console.log(myn1)
console.log("B",myArr);

console.log()

// Splice - It is Used to get some elements from array and it will remove element from the original array and End index is included.
console.log("C",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("D",myArr);

var a = ["Aman","Rehman","Karan","Saransh","Priya"]
// Splice(index,howmany delet, new value)
a.splice(2,0,"Neha","Tina")
console.log("splice without delet: ",a)

a.splice(2,2,"Neha1","Tina1")
console.log("splice with delet: ",a)

// Isarray - It is used to check whether a variable is array or not
var a = [1,2,3,5]
console.log("Isarray: ",Array.isArray(a))

console.log("---------------------------------------------")

var a = new Array("hi","Hello","Hey","Whatsup")
console.log(a)

var arr = new Array(3) // 3 is the size of array

for(var g=0;g<3;g++){
        arr[g] = `Hello ${g}`
}
console.log(arr)

//  Modify Array
arr[1] = "Hello 11"
console.log(arr)

// Deleting Element From Array
// Using delete we can remove the element but skill it takes the space 
delete arr[1]
console.log(arr)

// Sorting
var arr = ["Sanjay","Aman","Rehman","Karan"];
console.log("Before Sorting: ",arr)
arr.sort()
console.log("After Sorting: ",arr)

// Reverse
console.log("Before Reverse: ",arr)
arr.reverse()
console.log("After Reverse: ",arr)

// Some - It will help to check the condition and return true if any one element is following the condition
var age = [10,13,18,20];
console.log("Some: ",age.some(adultAge))
function adultAge(age){
        return age>=18;
}

// Every - It will help to check the condition and return true if every element is following the condition
var age = [10,13,18,20];
console.log("Every: ",age.every(adultAge))
function adultAge(age){
        return age>=18;
}

var age = [10,13,18,20];
console.log("Every: ",age.every(adultAge))
function adultAge(age){
        return age>=10;
}

// Find - Find method return the values of the first element in an array that pass a test
var age = [10,13,18,20];
console.log("Find: ",age.find(adultAge))
function adultAge(age){
        return age>=18;
}

// FindIndex - FindIndex method return the index of the first element in an array that pass a test
var age = [10,13,18,20];
console.log("FindIndex: ",age.findIndex(adultAge))
function adultAge(age){
        return age>=18;
}

// Filter - Method creates an array filled with all array elements that pass a test
var age = [10,13,18,20];
console.log("Filter: ",age.filter(adultAge))
function adultAge(age){
        return age>=18;
}

// toString - toString method converts an array into a string and return the result
var a = ["Saransh","Lavanaya","Tushar"]
a.toString()
console.log("toString: ",a)
console.log(typeof a)

// Valueof - It return the array
console.log("Valueof: ",a.valueOf())

// Fill - Fill methods fills all the elements in an array with a static value
console.log("Fill: ",a.fill("Ram"))


// ForEach - Iterartes all the elements in an array
var a = ["Saransh","Lavanaya","Tushar"]
a.forEach(function(value,index){
        console.log(`foreach: ${index} `,value)
});

a.forEach(loop)

function loop(value,index){
        console.log(`foreach: ${index} `,value)
}