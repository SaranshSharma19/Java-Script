/*

    When we want to send array as an argument then we use "Spread Operator"

    function sum(name,...args){
        // Statements
    }
    let arr = [10,20,30,40];
    sum("Saransh",arr) - Not Possible
    sum("Saransh",...arr) - Possible Becouse we used "Spread Operator"

*/

function sum(name,...ar){
    let sum = 0;
    for(let i in ar){
        sum += ar[i];
    }
    console.log(sum);
    console.log(name);
}
sum("Saransh",...[20,40,80,160])
let arr = [20,40,80,160,100,100]
sum("Saransh",...arr)


console.log(arr);
console.log(...arr);

var arr1 = arr;
arr.push(50)
console.log(arr1)

var arr2 = [...arr]
arr.push(150)
console.log(arr1)
console.log(arr2)

var arr3 = arr.concat(arr2)
console.log(arr3)

var arr4 = [...arr,...arr2]
console.log(arr4)

var arr5 = [1,...arr,...arr2,15]
console.log(arr5)


var obj = {name:"Saransh"}
var obj1 = {age:21}
var obj2 = {...obj,...obj1}
console.log(obj2)
