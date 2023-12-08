/*

    Symbol - Data Type
    Symbol is used for Unique Values

*/
let roll = Symbol();
console.log(roll)
let id = Symbol("Hello");
console.log(id)
console.log("Typeof id:", typeof id)
let id1 = Symbol("Hello");
console.log(id1);
console.log("Typeof id1:", typeof id1);
console.log("id==id1 : ",id==id1);

// alert(id)

// alert(id.toString())
console.log(id.description)


var user = {
    name : "Saransh Sharma",
    class : "B.Tech",
    [roll] : 52
}
console.log(user)

var age = Symbol("age")
var user = {
    name : "Saransh Sharma",
    class : "B.Tech",
    [age] : 21
}
console.log(user)
user[age]=22
console.log(user)
console.log(user[age])
console.log(user.class)


// for in loop ignore symbol
user["gender"] = "Male";
console.log(user)
for(let key in user){
    console.log(key);
    console.log(user[key]);
}


// JSON also ignore symbol
// JSON>stringify is used to convert object in JSON 
console.log(JSON.stringify(user))
