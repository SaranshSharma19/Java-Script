// We can declare object in two ways
// 1 - Literal   2 - Constructor

// Singleton - When we declare object using Constructor then singleton object will be created
// Non-Singleton - When we declare object using Literal then non-singleton object will be created


// Object Literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Saransh",
    "full name": "Saransh Sharma",
    mySym: "myKey1",  // Symbol chnages to string so to use it as a symbol we need to put this inside a square bracket [mySym]
    age: 21,
    location: "Ghaziabad",
    email:"saranshsharma@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)

console.log(JsUser["name"])
console.log(JsUser["email"])
// console.log(JsUser."full name") Throw an errow so to access the object value we use square bracket method
console.log(JsUser["full name"]);
console.log(JsUser["mySym"]);
console.log(typeof JsUser["mySym"]);


const JsUser1 = {
    name: "Saransh",
    "full name": "Saransh Sharma",
    [mySym]: "myKey1",  // Symbol chnages to string so to use it as a symbol we need to put this inside a square bracket [mySym]
    age: 21,
    location: "Ghaziabad",
    email:"saranshsharma@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser["mySym"]);
console.log(typeof JsUser[mySym]);


JsUser.email = "Saransh@goooogooooo.com"
console.log(JsUser["email"]);
console.log()

// To lock the value so that no one can change the value
Object.freeze(JsUser)
JsUser.email = "Saransh@goooogooooo.com"
JsUser.name = "Lavanaya"
console.log(JsUser["email"]);
console.log(JsUser["name"]);
console.log(JsUser)
console.log(JsUser1)


JsUser1.greeting  = function(){
    console.log("Hello JS User");
}
JsUser1.greeting2  = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser1.greeting);
console.log(JsUser1.greeting());
console.log(JsUser1.greeting2());

var a = {
    fname: "Saransh",
    lname: "Sharma",
    salary: function(){
        return 25000;
    },
    fullname: function(){
        return this.fname+ " " + this.lname
    },
    living: {
        state: "Uttar Pradesh",
        city: "Ghaziabad"
    }
}
console.log(a.salary())
console.log(a.fullname())
console.log(a["living"]["state"])