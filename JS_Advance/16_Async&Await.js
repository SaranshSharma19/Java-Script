/*

async function test(){  ------  Promise

}

*/

async function test(){
    return "Async Function";
}
test().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

async function test1(){
    console.log("Hello");
    await console.log("Hi");
    console.log("You are not in await state");
}
test1();
console.log("Welcome to await state")

async function user(){
    console.log("1 : Message")
    console.log("2 : Message")
    await console.log("3 : Message")
    console.log("4 : Message")
    console.log("5 : Message")
}
console.log("0 : Message")
user()
console.log("6 : Message")

async function student(){
    console.log("1 : Message")
    console.log("2 : Message")
    const response = await fetch("14_student.json");
    console.log("3 : Message")
    const students = await response.json();
    return students
}
console.log("0 : Message")
student()
console.log("4 : Message")