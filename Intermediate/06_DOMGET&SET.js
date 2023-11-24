/*

    What we can get with DOM?
    1 - HTML - innerHTML
    2 - Text - innerText
    3 - Attribute - getAttribute, getAttributeNode, Attributes

*/

var element;
element = document;
console.log(element)

element = document.getElementById("header").innerText
console.log(element)

element = document.getElementById("content").innerText
console.log(element)

element = document.getElementById("content").innerHTML
console.log(element)

element = document.getElementById("content").getAttribute("class")
console.log(element)

element = document.getElementById("content").getAttribute("id")
console.log(element)

element = document.getElementById("content").getAttribute("style")
console.log(element)

element = document.getElementById("content").getAttribute("onClick")
console.log(element)

element = document.getElementById("content").getAttributeNode("class")
console.log(element)

element = document.getElementById("content").getAttributeNode("style")
console.log(element)

element = document.getElementById("content").getAttributeNode("style").value
console.log(element)

element = document.getElementById("content").attributes
console.log(element)

element = document.getElementById("content").attributes[2]
console.log(element)

element = document.getElementById("content").attributes[2].value
console.log(element)

element = document.getElementById("content").attributes[2].name
console.log(element)

/*

    What we can set DOM Value?
    1 - HTML - innerHTML
    2 - Text - innerText
    3 - Attribute - setAttribute, removeAttribute, Attribute

*/

var element;
element = document.getElementById("header").innerText = "<h1>WOW</h1>"
console.log(element)

element = document.getElementById("header").innerHTML = "<h1>WOW</h1>"
console.log(element)

element = document.getElementById("content").setAttribute("class","saransh")
console.log(element)

element = document.getElementById("header").getAttribute("class")
console.log(element)

element = document.getElementById("content").setAttribute("style","border: 10px dotted yellow")
console.log(element)

element = document.getElementById("header").getAttribute("style")
console.log(element)

element = document.getElementById("content").attributes[1].value="xyz"
console.log(element)

element = document.getElementById("header").getAttribute("class")
console.log(element)

element = document.getElementById("content").removeAttribute("style")
console.log(element)

element = document.getElementById("header").getAttribute("class")
console.log(element)