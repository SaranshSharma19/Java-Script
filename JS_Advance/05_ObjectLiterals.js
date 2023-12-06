let name = "Saransh Sharma"
let course = "B.Tech"
let age = 21
var obj = {
    name,
    age,
    course
}
console.log(obj)

// Use Variable as a Property Name
let n = "name"
var obj = {
    [n] : "Saransh",
    course
}
console.log(obj)

let s = "Student"
var obj = {
    [s + "_Name"] : "Saransh",
    course,
    detail : function(){
        return `${this.Student_Name} is a student of ${this.course}`
    }
}
console.log(obj);
console.log(obj.detail());

// Function in Object Literal
var r = "Student"
var obj = {
    [r + "_Name"] : "Messi",
    course,
    detail(){
        return `${this.Student_Name} is a student of ${this.course}`
    }
}
console.log(obj);
console.log(obj['detail']());

var r = "Student"
var obj = {
    [r + "_Name"] : "Lavanaya",
    course,
    'detail show'(){
        return `${this.Student_Name} is a student of ${this.course}`
    }
}
console.log(obj);
console.log(obj['detail show']());

let fullName = "Saransh Sharma"
let Branch = "CSE"
function student(fullName,Branch){
    return {fullName, Branch};
}
console.log(student(fullName,Branch))


