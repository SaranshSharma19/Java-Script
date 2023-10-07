function one(){
    const userName = "Saransh"
    function two(){
        const website = "google.com"
        console.log(userName)
    }
    // connsole.log(website)
    two()
    // connsole.log(website)
}
one()


// -------------------------Interesting Concept-----------------------------

console.log(addOne(5))
function addOne(num){
    return num + 1
}
addOne(5)

addTwo(5)
const addTwo = function(num){
    return num+2
}
addTwo(5)