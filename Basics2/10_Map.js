var arr = [1,2,3,4,5,6]
var b = arr.map(test)

function test(x){
    return x*10
}
console.log(b)

var ary = [
    {fname: "Saransh", lname:"Sharma"},
    {fname: "Tushar", lname:"Messi"},
    {fname: "Lavanaya", lname:"Shankar"}
]
var c = ary.map(test1)
function test1(x){
    return x.fname + " " + x.lname
}
console.log(c)