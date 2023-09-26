/*
        Dates
*/

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.getDate())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

console.log()

let myCreatedDate = new Date(2023, 1, 23, 5,3)
let myCreatedDate1= new Date("2023-02-14")
let myCreatedDate2= new Date("02-19-2002")
console.log(myCreatedDate2.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())


newDate.toLocaleString("default",{
        weekday: "long"
})


