function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2))

function calculateCartPriceOne(num1){
    return num1
}

console.log(calculateCartPriceOne(2,4,6)) // Output - 2


function calculateCartPriceTwo(...num1){
    return num1
}

console.log(calculateCartPriceTwo(2,4,6))

// ... spread and rest operator

function calculateCartPriceThree(val1,...num1){
    return num1  // return - [4,6]
}

console.log(calculateCartPriceThree(2,4,6))

const user ={
    username: "Saransh",
    price: 200
}
 function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and its price is ${anyObject.price}`);
 }

 handelObject(user)
 handelObject({username: "Messi", price:1})