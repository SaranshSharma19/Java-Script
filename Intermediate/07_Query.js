/*

    1 - querySelector - document.querySelector(CSS Selector)
    2 - querySelectorAll - document.querySelectorAll(CSS Selector)

*/
var element;
element = document.querySelector("#header").innerHTML = "Saransh"
console.log(element)

element = document.getElementById("content").getAttribute("class")
console.log(element)

element = document.querySelector("#content").getAttribute("class")
console.log(element)


element = document.querySelectorAll(".list")
console.log(element)

element = document.querySelectorAll("ul")
console.log(element)

element = document.querySelectorAll("ul")[1].innerHTML
console.log(element)

element = document.querySelectorAll("#content h2")
console.log(element)

element = document.querySelectorAll("#content h2")[1].innerText
console.log(element)

element = document.querySelectorAll("#content h2")[0].innerText
console.log(element)
