var user = ["Saransh Sharma", 21, "Ghaziabad"]

var [Name, Age, City] = user
console.log(Name)
console.log(Age)
console.log(City)

var user = ["Saransh Sharma", 21]

var [Name, Age, City] = user
console.log(Name)
console.log(Age)
console.log(City)  // Undefined

var user = [, , "Ghaziabad"]

var [Name, Age, City] = user
console.log(Name) // Undefined
console.log(Age)  // Undefined
console.log(City)

var user = ["Saransh Sharma", 21, "Ghaziabad", ["Male", 50000]]

var [Name, Age, City, [Gender, Salary]] = user
console.log(Name)
console.log(Age)
console.log(City)
console.log(Gender)
console.log(Salary)

var user = ["Lavanaya Shankar", 19, "Ghaziabad"]

var [Name, ...ar] = user
console.log(Name)
console.log(ar)
for(let i in ar){
    console.log(ar[i])
}

function us([Name, Age=20, City]){
    console.log(Name)
    console.log(Age) 
    console.log(City)
}
us(["Tushar Messi", 25, "Ghaziabad"]);

function u(){
    return ["Tushar Messi", 26, "Delhi"]
}
var [name, age, city] = u();
console.log(age)

