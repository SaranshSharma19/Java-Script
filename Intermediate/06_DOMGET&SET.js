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

