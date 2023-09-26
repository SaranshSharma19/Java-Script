let name = "Saransh" + " Sharma"
const repoCount = 10
console.log(name + " " + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Saransh-Sharma')
console.log(gameName);

console.log(gameName[0])
console.log(gameName[0].__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("r"));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,-3)
console.log(anotherString)

const newStringOne = "     Saransh      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://Saransh.com/Saransh%20Sharma"

console.log(url.replace('%20',"-"))
console.log(url.includes('Saransh'))

console.log(gameName.split('-')); 



