const userEmail = "S@eamil.com"
if (userEmail){
    console.log(userEmail)
}
else{
    console.log("Dont have user Email");
}

const userGmail = ""
if (userGmail){
    console.log(userGmail)
}
else{
    console.log("Dont have user Gmail");
}


/*
        "Falsy Value"
            False, 0, -0, BigInt 0n, "", null, undefined, Nan
        "Truthy Value"
            True, 1, "0", "False", " ",[], {}, function(){}
*/

const emptyArr = []
if (emptyArr.length === 0){
    console.log("Array is Empty");
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? null
console.log(val1);
val1 = null ?? undefined
console.log(val1);
val1 = undefined ?? 15
console.log(val1);


// Ternary Operator

// condition ? true : false


const  iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater") : console.log("less than 80");