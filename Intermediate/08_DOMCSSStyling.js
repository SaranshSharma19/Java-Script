/*

    DOM CSS Styling Methods
    1 - Style
    2 - className
    3 - classList

*/
var element;
element = document.querySelector("#content").style.border;
console.log(element)

document.querySelector("#content").style.backgroundColor = "tan";
document.querySelector("#content").style.color = "Blue";

element = document.querySelector("#content").style.color;
console.log(element)

document.querySelector("#content").className = "Hello";
element = document.querySelector("#content").className;
console.log(element)

document.querySelector("#content").classList = "Hello1 Hello2";
element = document.querySelector("#content").classList;
console.log(element)

document.querySelector("#content").classList.add("hello3");
element = document.querySelector("#content").classList;
console.log(element)

document.querySelector("#content").classList.add("hello4", "hello5");
element = document.querySelector("#content").classList;
console.log(element)

document.querySelector("#content").classList.remove("hello4", "hello5");
element = document.querySelector("#content").classList;
console.log(element)
