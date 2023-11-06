const accountId = 144553  // We can't change the value of const
let accountEmail = "Saranshsharma@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
accountEmail = "Saranshsharma20@gmail.com"
accountPassword = "345666"
accountCity = "Delhi"

// Var
var x = "Baba"
var x = "Baba"  // Possible
x = "Babas"
console.log(x)
{
    var x = "Hello"
}
console.log(x)

// Let
let accountState = "GZB";
//  let accountState = "GZB"; // Not Possible
accountState = "Del"
console.log(accountState)
{
    let accountState = "Hello"
    console.log(accountState)
}
console.log(accountState)

// accountId = 2    Not Allowed 

/* {
    scope
    } 
*/

/*
   Prefer Not To Use var
   Becouse Of Issue In Block And Functional Scope
*/


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])