/*
        Two Type Of Memory
        1 - Stack (Primitive Data Type)
        2 - Heap (Non-Primitive Data Type)

        when memory is defined in Stack then we get a copy of original value.
        when memory is defined in Heap then we get a reference of original value.  
*/

let myYoutubeName = "SaranshSharma"
let anotherName = myYoutubeName
anotherName = "ChaiOurCode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi:"user@paytm"
}
let userTwo = userOne
userTwo.email = "Saransh@google.com"

console.log(userOne)
console.log(userTwo)