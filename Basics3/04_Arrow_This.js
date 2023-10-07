const user = {
    username: "Saransh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome To Website`)
        console.log(this)  // Show the current context 
    }

}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


console.log(this) // Show the current context {}

// this keyword is used to refer to the current context 

function chai(){
    let username = "Saransh"
    console.log(this)
    console.log(this.username)  // Undefined
}
chai()

const chaiCode = function(){
    let username = "Saransh"
    console.log(this.username)  // Undefined
}
chaiCode()


// -----------------Arrow Function------------------

const code = () => {
    let username = "Saransh"
    console.log(this.username)
    console.log(this)
}
code()

const addtwo = (num1,num2) => {
    return num1+num2
}
console.log(addtwo(3,5))


// Implicit Return
const addTwo = (num1,num2) =>  num1+num2
console.log(addTwo(3,5))
const add2 = (num1,num2) =>  (num1+num2)
console.log(add2(3,5))
const add = (num1,num2) =>  ({username:"Saransh"})
console.log(add(3,5))




