var user = "Saransh";

/*

    Normal Way to concat in a string is by usingh + sign
    var user = "Saransh";
    var greet = "Hello " + user
    console.log(greet)  => Hello Saransh

    Using Template String to concat in a string
    var user = "Saransh"
    var greet = `Hello ${user}`
    console.log(greet)  => Hello Saransh

*/


var user = "Saransh"
var greet = `Hello ${user}`
console.log(greet)
var how = "How are you"
var Welcome = `Ohh!! ${greet} ${how}`
console.log(Welcome)

let fName = "Saransh";
let lName = "Sharma";

function fullName(fName,lName){
    return `${fName} ${lName}`
}

var userGreet= `Hello ${fullName(fName,lName)}`
console.log(userGreet)