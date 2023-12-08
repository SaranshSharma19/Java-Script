"use strict";
user = "saransh"
console.log(user);

function test(a,b,b){
    console.log(a+b+b)   // if we dont use strict mode then it will print 70 but when we use strict mode then it will throw an error
}
test(10,20,30)
