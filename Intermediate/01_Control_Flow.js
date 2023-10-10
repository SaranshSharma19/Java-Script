// If Statement

/*

if(if condition is true then if loop will be executed){

}

*/

const isUserLoggedIn = true
if (isUserLoggedIn){
    console.log("Yes!!!!")
}

if (2 == "2"){
    console.log("True!!");
}

if (2 === "2"){
    console.log("True!!");
}
else{
    console.log("False!!");
}

if (2 !== "2"){
    console.log("True!!");
}
else{
    console.log("False!!");
}

const balance = 1000
if (balance > 500) console.log("Balace is greater than 500");
else console.log("Balance is less then 500")


if (balance < 500){
    console.log("Less Than 500");
}
else if (balance < 800){
    console.log("Less Than 800");
}
else{
    console.log("Less Than 1100");
}

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard){ // And - Both condition should be true
    console.log("Allow To Buy Courses");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}


