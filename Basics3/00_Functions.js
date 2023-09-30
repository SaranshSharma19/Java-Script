function sayMyName(){
    console.log("Saransh")
}


sayMyName // Reference 
sayMyName()  //Execution


function addTwoNumbers(Number1, Number2){
    console.log(Number1 + Number2)

}

const result = addTwoNumbers(3,5)
console.log(result); // undefined becouse function do not have a return statement
addTwoNumbers(3,"5")
addTwoNumbers("3",4)
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

console.log("------------------------------------")

function subTwoNumbers(Number1, Number2){
    console.log(Number1 - Number2)
    return Number1 - Number2
}

const answer = subTwoNumbers(3,5)
console.log("Answer:",answer); // Now it return something rather than undefined bcoz function has a return statement
subTwoNumbers(3,"5")
subTwoNumbers("3",4)
subTwoNumbers(3,"a")
subTwoNumbers(3,null)

function loginUserMessage(userName){
    return `${userName} just logged in`
}

let user = loginUserMessage("Saransh")
console.log(user);
user = loginUserMessage("")  // just logged in output
console.log(user);
user = loginUserMessage() // undefined just logged in output
console.log(user);

function loginUserMessageOne(userName){
    if (userName === undefined){
        let a = "Please enter a user name" 
        return a
    }
    return `${userName} just logged in`
}

let userOne = loginUserMessageOne("Saransh")
console.log(userOne);
userOne = loginUserMessageOne("")  // just logged in output
console.log(userOne);
userOne = loginUserMessageOne() // Please enter a user name Output
console.log(userOne);


function loginUserMessageTwo(userName="Sam"){
    return `${userName} just logged in`
}

let userTwo = loginUserMessageTwo("Saransh")
console.log(userTwo);
userTwo = loginUserMessageTwo("")  // just logged in output
console.log(userTwo);
userTwo = loginUserMessageTwo() // Sam just logged in Output
console.log(userTwo);