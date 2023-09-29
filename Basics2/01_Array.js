const marvel_heros = ["Bat","Spider","Hulk"]
const dc_heros = ["Superman","Flash","Berry"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let realAnotherArray = anotherArray.flat(1)
console.log(realAnotherArray);

realAnotherArray = anotherArray.flat(2)
console.log(realAnotherArray);

realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray(realAnotherArray))

console.log(Array.from("Saransh"))
console.log(Array.from({name:"Saransh"}))  // Interesting Case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))


