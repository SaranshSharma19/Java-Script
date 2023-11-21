//const tinderUser = new Object() // Singleton Sobject

const tinderUser = {} // Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Saransh"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "Saransh@gmail.com",
    fullName: {
        firstName: "Saransh",
        lastName: "Sharma"
    }
}

console.log(regularUser.fullName.firstName);
// console.log(regularUser.fullName?.firstName); // ? Denotes kya ye value hai ya ni agar hai toh kariye jo likha hai

const objOne = {
    1:"a",
    2:"b"
}
const objTwo = {
    3:"c",
    4:"d"
}
const objFour = {
    3:"e",
    4:"f"
}

// const objThree = {objOne,objTwo}

let objThree = Object.assign(objOne, objTwo) // All Values goes in objOne
console.log(objThree)
objThree = Object.assign({},objOne, objTwo) // All Values goes into New Object
console.log(objThree)
objThree = Object.assign({},objTwo, objFour) 
console.log(objThree)       // { '3': 'e', '4': 'f' } If keys are same then it will take the last updated key Value
objThree = Object.assign({},objFour,objTwo) 
console.log(objThree)       // { '3': 'c', '4': 'd' }

const objFive = {...objOne,...objTwo}
console.log(objFive);

const users = [
    {
        id: 1,
        email: "abc1@gmail.com"
    },
    {
        id: 2,
        email: "abc2@gmail.com"
    },
    {
        id: 3,
        email: "abc3@gmail.com"
    },
    {
        id: 4,
        email: "abc4@gmail.com"
    }
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser))   // Data Type - Array
console.log(Object.values(tinderUser)) // Data Type - Array

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

var student = [
    {name: "Ram",age:21},
    {name: "Shyam",age:22},
    {name: "Ghanshyam",age:23}
];

console.log(student)
for(var a=0; a<student.length; a++){
    console.log(student[a].name + " " + student[a].age )
}